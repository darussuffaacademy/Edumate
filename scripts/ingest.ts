import { GoogleGenAI, Type } from '@google/genai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env or .env.local
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("Error: GEMINI_API_KEY is not set in the environment.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function runIngestion() {
  const sampleFilePath = path.join(__dirname, 'sample_notes.txt');
  
  if (!fs.existsSync(sampleFilePath)) {
    console.error(`Error: Sample file not found at ${sampleFilePath}`);
    process.exit(1);
  }

  const rawText = fs.readFileSync(sampleFilePath, 'utf-8');
  console.log("--- Raw Teacher Notes ---");
  console.log(rawText.substring(0, 200) + "...\n");

  console.log("Calling Gemini API to normalize and structure content...");

  const prompt = `
    Ingest these teacher notes. Extract sections, headings, figures, and formulas. 
    For each extract produce a JSON item with fields: 
    - id (generate a unique slug)
    - title (string)
    - body_html (string, formatted as HTML)
    - plain_text (string)
    - language (string, e.g., 'en')
    - subject_guess (string)
    - grade (number)
    - tags (array of strings)
    - alignment_candidates (array of strings)
    - confidence_score (number between 0 and 1)

    Output a JSON array of these items.
    
    Raw Notes:
    ${rawText}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              body_html: { type: Type.STRING },
              plain_text: { type: Type.STRING },
              language: { type: Type.STRING },
              subject_guess: { type: Type.STRING },
              grade: { type: Type.NUMBER },
              tags: { type: Type.ARRAY, items: { type: Type.STRING } },
              alignment_candidates: { type: Type.ARRAY, items: { type: Type.STRING } },
              confidence_score: { type: Type.NUMBER }
            },
            required: ["id", "title", "body_html", "plain_text", "language", "subject_guess", "grade", "tags", "confidence_score"]
          }
        }
      }
    });

    const jsonOutput = response.text;
    console.log("\n--- Normalized JSON Output ---");
    console.log(JSON.stringify(JSON.parse(jsonOutput), null, 2));
    
    // Optionally save to a file
    const outputPath = path.join(__dirname, 'output_manifest.json');
    fs.writeFileSync(outputPath, JSON.stringify(JSON.parse(jsonOutput), null, 2));
    console.log(`\nSaved normalized output to ${outputPath}`);

  } catch (error) {
    console.error("Error calling Gemini API:", error);
  }
}

runIngestion();
