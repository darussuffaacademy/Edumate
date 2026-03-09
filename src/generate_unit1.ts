import { GoogleGenAI, Type } from "@google/genai";
import * as fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateQuestions(count: number, startIndex: number) {
  console.log(`Generating ${count} questions starting from ${startIndex}...`);
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate exactly ${count} objective and short answer questions about "Introduction to Accounting" (Class 11 Accountancy Chapter 1).
    Topics include: Meaning of Accounting, Users of Accounting Information, Branches of Accounting, Qualitative Characteristics, Objectives, Basic Terms (Assets, Liabilities, Capital, Revenue, Expenses, Debtors, Creditors, Voucher, etc.).
    
    For each question, provide:
    1. A unique ID starting from "q${startIndex}"
    2. The question text in English and Malayalam.
    3. The answer text in English and Malayalam.
    
    Return the result as a JSON array of objects.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            q_id: { type: Type.STRING },
            question: {
              type: Type.OBJECT,
              properties: {
                en: { type: Type.STRING },
                ml: { type: Type.STRING }
              },
              required: ["en", "ml"]
            },
            answer: {
              type: Type.OBJECT,
              properties: {
                en: { type: Type.STRING },
                ml: { type: Type.STRING }
              },
              required: ["en", "ml"]
            }
          },
          required: ["q_id", "question", "answer"]
        }
      }
    }
  });

  return JSON.parse(response.text);
}

async function main() {
  let allQuestions = [];
  try {
    const batch1 = await generateQuestions(50, 1);
    allQuestions = allQuestions.concat(batch1);
    const batch2 = await generateQuestions(50, 51);
    allQuestions = allQuestions.concat(batch2);
  } catch (e) {
    console.error("Failed to generate questions", e);
    return;
  }

  console.log(`Generated ${allQuestions.length} questions.`);

  // Now let's read the existing file and interleave it
  const content = fs.readFileSync('src/data/plusone_accountancy_unit1.ts', 'utf-8');
  
  const coreEnMatch = content.match(/en: `([\s\S]*?)`,\s*ml: `([\s\S]*?)`/);
  if (!coreEnMatch) {
    console.log("Could not find core block");
    return;
  }
  
  let enText = coreEnMatch[1];
  let mlText = coreEnMatch[2];
  
  // Remove Q&A from the text
  enText = enText.split('### Original Q&A')[0];
  mlText = mlText.split('### യഥാർത്ഥ ചോദ്യോത്തരങ്ങൾ')[0];
  
  const enLines = enText.split('\n').map(l => l.trim()).filter(l => l);
  const mlLines = mlText.split('\n').map(l => l.trim()).filter(l => l);
  
  let interleaved = '';
  const maxLines = Math.max(enLines.length, mlLines.length);
  
  for (let i = 0; i < maxLines; i++) {
    if (enLines[i]) interleaved += enLines[i] + '\n';
    if (mlLines[i]) interleaved += mlLines[i] + '\n';
  }
  
  // Escape backticks
  interleaved = interleaved.replace(/`/g, '\\`');

  const newCore = `core: {
      en: \`${interleaved}\`,
      ml: \`${interleaved}\`
    }`;
    
  let newContent = content.replace(/core: \{\s*en: `[\s\S]*?`,\s*ml: `[\s\S]*?`\s*\}/, newCore);
  
  // Add sample_questions
  const questionsStr = JSON.stringify(allQuestions, null, 2);
  
  // Insert before the last closing brace
  newContent = newContent.replace(/,\s*quiz:\s*\[[\s\S]*?\]\s*\};/, `,\n  quiz: [],\n  sample_questions: ${questionsStr}\n};`);

  fs.writeFileSync('src/data/plusone_accountancy_unit1.ts', newContent);
  console.log("Done!");
}

main().catch(console.error);
