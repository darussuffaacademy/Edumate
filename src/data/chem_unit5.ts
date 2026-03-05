export const chemUnit5 = {
  id: "u-chem-5",
  title: { en: "Electrochemistry", ml: "വൈദ്യുത രസതന്ത്രം" },
  lessons: [
    {
      id: "sc-chem-10-electro",
      title: { en: "Electrochemistry", ml: "വൈദ്യുത രസതന്ത്രം" },
      estimated_time_mins: 50,
      learning_objectives: [
        { id: "lo1", text: { en: "Understand the working of Galvanic and Electrolytic cells.", ml: "ഗാൽവാനിക് സെല്ലുകളുടെയും ഇലക്ട്രോലിറ്റിക് സെല്ലുകളുടെയും പ്രവർത്തനം മനസ്സിലാക്കുക." } },
        { id: "lo2", text: { en: "Explain the reactivity series and its applications.", ml: "റിയാക്ടിവിറ്റി സീരീസും അതിന്റെ ഉപയോഗങ്ങളും വിശദീകരിക്കുക." } },
        { id: "lo3", text: { en: "Describe electroplating and different types of cells.", ml: "ഇലക്ട്രോപ്ലേറ്റിംഗും വിവിധതരം സെല്ലുകളും വിവരിക്കുക." } }
      ],
      content: {
        intro: {
          en: "Electrochemistry is the branch of chemistry which deals with the studies on the processes that produce electricity through chemical reactions and use electricity to bring about chemical reactions.",
          ml: "രാസപ്രവർത്തനങ്ങളിലൂടെ വൈദ്യുതി ഉല്പാദിപ്പിക്കുന്നതിനെക്കുറിച്ചും വൈദ്യുതി ഉപയോഗിച്ച് രാസപ്രവർത്തനങ്ങൾ നടത്തുന്നതിനെക്കുറിച്ചും പ്രതിപാദിക്കുന്ന രസതന്ത്രശാഖയാണ് ഇലക്ട്രോ കെമിസ്ട്രി (വൈദ്യുത രസതന്ത്രം)."
        },
        core: {
          en: "Electrochemical cells are the devices that make such changes possible. They are classified into Galvanic cells and Electrolytic cells.",
          ml: "ഇത്തരം മാറ്റങ്ങൾ സാധ്യമാക്കുന്ന ഉപകരണങ്ങളാണ് വൈദ്യുത രാസ സെല്ലുകൾ (Electrochemical cells). ഇവയെ ഗാൽവാനിക് സെല്ലുകൾ എന്നും ഇലക്ട്രോലിറ്റിക് സെല്ലുകൾ എന്നും തരംതിരിച്ചിരിക്കുന്നു."
        },
        blocks: [
          { type: 'h2', en: '1. Classification of Electrochemical Cells', ml: '1. വൈദ്യുത രാസ സെല്ലുകളുടെ തരംതിരിക്കൽ' },
          { type: 'p', en: 'Galvanic cells: Convert chemical energy into electrical energy. Electrolytic cells: Utilize electrical energy to bring about chemical changes.', ml: 'ഗാൽവാനിക് സെല്ലുകൾ: രാസോർജ്ജത്തെ വൈദ്യുതോർജ്ജമാക്കി മാറ്റുന്നു. ഇലക്ട്രോലിറ്റിക് സെല്ലുകൾ: വൈദ്യുതോർജ്ജം ഉപയോഗിച്ച് രാസമാറ്റങ്ങൾ വരുത്തുന്നു.' },
          
          { type: 'h2', en: '2. Galvanic Cells (Example: Daniel Cell)', ml: '2. ഗാൽവാനിക് സെല്ലുകൾ (ഉദാഹരണം: ഡാനിയൽ സെൽ)' },
          { type: 'p', en: 'In a Daniel cell, a Zinc rod is dipped in Zinc Sulphate solution and a Copper rod is dipped in Copper Sulphate solution.', ml: 'ഒരു ഡാനിയൽ സെല്ലിൽ, സിങ്ക് സൾഫേറ്റ് ലായനിയിൽ ഒരു സിങ്ക് ദണ്ഡും കോപ്പർ സൾഫേറ്റ് ലായനിയിൽ ഒരു കോപ്പർ ദണ്ഡും മുക്കിവെച്ചിരിക്കുന്നു.' },
          { type: 'table', tableData: {
              headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Anode', ml: 'ആനോഡ്'}, {en: 'Cathode', ml: 'കാഥോഡ്'}],
              rows: [
                [{en: 'Electrode', ml: 'ഇലക്ട്രോഡ്'}, {en: 'Zinc (Zn)', ml: 'സിങ്ക് (Zn)'}, {en: 'Copper (Cu)', ml: 'കോപ്പർ (Cu)'}],
                [{en: 'Process', ml: 'പ്രക്രിയ'}, {en: 'Oxidation', ml: 'ഓക്സീകരണം'}, {en: 'Reduction', ml: 'നിരോക്സീകരണം'}],
                [{en: 'Charge', ml: 'ചാർജ്ജ്'}, {en: 'Negative (-)', ml: 'നെഗറ്റീവ് (-)'}, {en: 'Positive (+)', ml: 'പോസിറ്റീവ് (+)'}],
                [{en: 'Reaction', ml: 'പ്രവർത്തനം'}, {en: 'Zn → Zn²⁺ + 2e⁻', ml: 'Zn → Zn²⁺ + 2e⁻'}, {en: 'Cu²⁺ + 2e⁻ → Cu', ml: 'Cu²⁺ + 2e⁻ → Cu'}]
              ]
          }},
          { type: 'formula', en: 'Cell Reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)', ml: 'സെൽ പ്രവർത്തനം: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)' },
          { type: 'p', en: 'Salt Bridge: A U-shaped tube filled with an inert electrolyte like KCl or KNO₃. It ensures electrical neutrality.', ml: 'സാൾട്ട് ബ്രിഡ്ജ്: KCl അല്ലെങ്കിൽ KNO₃ തുടങ്ങിയ ഇലക്ട്രോലൈറ്റുകൾ നിറച്ച U ആകൃതിയിലുള്ള ട്യൂബ്. ഇത് ലായനികളുടെ വൈദ്യുത നിഷ്പക്ഷത ഉറപ്പാക്കുന്നു.' },
          
          { type: 'h2', en: '3. Reactivity Series', ml: '3. റിയാക്ടിവിറ്റി സീരീസ് (ക്രിയാശീലത ശ്രണി)' },
          { type: 'p', en: 'The series in which elements are arranged in the decreasing order of their reactivity is known as reactivity series.', ml: 'മൂലകങ്ങളെ അവയുടെ ക്രിയാശീലതയുടെ കുറഞ്ഞുവരുന്ന ക്രമത്തിൽ ക്രമീകരിച്ചിരിക്കുന്ന ശ്രണിയാണ് റിയാക്ടിവിറ്റി സീരീസ്.' },
          { type: 'formula', en: 'Order: Mg > Al > Zn > Fe > Pb > [H] > Cu > Ag > Au', ml: 'ക്രമം: Mg > Al > Zn > Fe > Pb > [H] > Cu > Ag > Au' },
          { type: 'p', en: 'Key Principle: The more reactive metal acts as the anode (undergoes oxidation).', ml: 'തത്വം: ക്രിയാശീലത കൂടിയ ലോഹം ആനോഡായി പ്രവർത്തിക്കുന്നു (ഓക്സീകരണത്തിന് വിധേയമാകുന്നു).' },
          
          { type: 'h2', en: '4. Electrolytic Cells', ml: '4. ഇലക്ട്രോലിറ്റിക് സെല്ലുകൾ' },
          { type: 'p', en: 'Electrolysis is the process by which an electrolyte undergoes chemical changes when electricity is passed through it.', ml: 'ഒരു ഇലക്ട്രോലൈറ്റിലൂടെ വൈദ്യുതി കടത്തിവിടുമ്പോൾ അതിന് രാസമാറ്റം സംഭവിക്കുന്ന പ്രക്രിയയാണ് വൈദ്യുതവിശ്ലേഷണം (Electrolysis).' },
          { type: 'table', tableData: {
              headers: [{en: 'Component', ml: 'ഘടകം'}, {en: 'Electrolytic Cell', ml: 'ഇലക്ട്രോലിറ്റിക് സെൽ'}],
              rows: [
                [{en: 'Anode', ml: 'ആനോഡ്'}, {en: 'Positive (+) Electrode (Oxidation)', ml: 'പോസിറ്റീവ് (+) ഇലക്ട്രോഡ് (ഓക്സീകരണം)'}],
                [{en: 'Cathode', ml: 'കാഥോഡ്'}, {en: 'Negative (-) Electrode (Reduction)', ml: 'നെഗറ്റീവ് (-) ഇലക്ട്രോഡ് (നിരോക്സീകരണം)'}]
              ]
          }},
          { type: 'h3', en: 'Electrolysis of Molten NaCl', ml: 'ഉരുകിയ സോഡിയം ക്ലോറൈഡിന്റെ വൈദ്യുതവിശ്ലേഷണം' },
          { type: 'p', en: 'Anode Product: Chlorine gas (Cl₂). Cathode Product: Sodium metal (Na).', ml: 'ആനോഡിൽ: ക്ലോറിൻ വാതകം. കാഥോഡിൽ: സോഡിയം ലോഹം.' },
          { type: 'h3', en: 'Electrolysis of Aqueous NaCl', ml: 'സോഡിയം ക്ലോറൈഡ് ലായനിയുടെ വൈദ്യുതവിശ്ലേഷണം' },
          { type: 'p', en: 'Anode Product: Chlorine gas (Cl₂). Cathode Product: Hydrogen gas (H₂). Remaining in solution: NaOH (Solution becomes basic).', ml: 'ആനോഡിൽ: ക്ലോറിൻ വാതകം. കാഥോഡിൽ: ഹൈഡ്രജൻ വാതകം. ലായനിയിൽ അവശേഷിക്കുന്നത്: NaOH.' },
          
          { type: 'h2', en: '5. Electroplating', ml: '5. ഇലക്ട്രോപ്ലേറ്റിംഗ്' },
          { type: 'p', en: 'Process of coating a layer of one metal onto another metal through electrolysis.', ml: 'വൈദ്യുതവിശ്ലേഷണം വഴി ഒരു ലോഹത്തിന്മേൽ മറ്റൊരു ലോഹം പൊതിയുന്ന പ്രക്രിയ.' },
          { type: 'p', en: 'Object to be coated: Connected to Cathode (-). Metal for plating: Connected to Anode (+). Electrolyte: Salt solution of the metal to be plated.', ml: 'പൂശേണ്ട വസ്തു: കാഥോഡുമായി (-) ബന്ധിപ്പിക്കുന്നു. പൂശാൻ ഉപയോഗിക്കുന്ന ലോഹം: ആനോഡുമായി (+) ബന്ധിപ്പിക്കുന്നു. ഇലക്ട്രോലൈറ്റ്: പൂശാൻ ഉപയോഗിക്കുന്ന ലോഹത്തിന്റെ ലവണ ലായനി.' },
          
          { type: 'h2', en: '6. Types of Cells', ml: '6. വിവിധതരം സെല്ലുകൾ' },
          { type: 'p', en: '1. Primary Cells: Cannot be recharged (e.g., Dry cell, Button cell).', ml: '1. പ്രൈമറി സെല്ലുകൾ: റീചാർജ്ജ് ചെയ്യാൻ കഴിയില്ല (ഉദാ: ഡ്രൈ സെൽ, ബട്ടൺ സെൽ).' },
          { type: 'p', en: '2. Secondary Cells: Can be recharged (e.g., Lead acid battery, Lithium-ion battery).', ml: '2. സെക്കൻഡറി സെല്ലുകൾ: റീചാർജ്ജ് ചെയ്ത് ഉപയോഗിക്കാം (ഉദാ: ലഡ് ആസിഡ് ബാറ്ററി, ലിഥിയം അയോൺ ബാറ്ററി).' },
          { type: 'p', en: '3. Fuel Cells: Convert chemical energy of fuels (like H₂) directly into electricity.', ml: '3. ഫ്യൂവൽ സെല്ലുകൾ: ഇന്ധനങ്ങളുടെ (ഉദാ: ഹൈഡ്രജൻ) രാസോർജ്ജത്തെ നേരിട്ട് വൈദ്യുതോർജ്ജമാക്കി മാറ്റുന്നു.' }
        ] as const
      },
      glossary: [
        {
          term: { en: "Salt Bridge", ml: "സാൾട്ട് ബ്രിഡ്ജ്" },
          definition: { en: "A U-shaped tube filled with an inert electrolyte, used to complete the circuit in a Galvanic cell.", ml: "ഗാൽവാനിക് സെല്ലിൽ സർക്യൂട്ട് പൂർത്തിയാക്കാനും വൈദ്യുത നിഷ്പക്ഷത നിലനിർത്താനും ഉപയോഗിക്കുന്ന ഉപകരണം." }
        },
        {
          term: { en: "Electroplating", ml: "ഇലക്ട്രോപ്ലേറ്റിംഗ്" },
          definition: { en: "Coating a layer of one metal onto another metal through electrolysis.", ml: "വൈദ്യുതവിശ്ലേഷണം വഴി ഒരു ലോഹത്തിന്മേൽ മറ്റൊരു ലോഹം പൊതിയുന്ന പ്രക്രിയ." }
        }
      ],
      quiz: [
        {
          q_id: "q1",
          type: "mcq",
          stem: { en: "In a Zn-Cu cell, which electrode undergoes oxidation?", ml: "ഒരു Zn-Cu സെല്ലിൽ ഏത് ഇലക്ട്രോഡിലാണ് ഓക്സീകരണം നടക്കുന്നത്?" },
          options: [
            { k: "A", text: { en: "Zinc electrode (Anode)", ml: "സിങ്ക് ഇലക്ട്രോഡ് (ആനോഡ്)" } },
            { k: "B", text: { en: "Copper electrode (Cathode)", ml: "കോപ്പർ ഇലക്ട്രോഡ് (കാഥോഡ്)" } },
            { k: "C", text: { en: "Both", ml: "രണ്ടിലും" } },
            { k: "D", text: { en: "None", ml: "ഒന്നിലുമില്ല" } }
          ],
          answer: "A",
          difficulty: "easy"
        },
        {
          q_id: "q2",
          type: "mcq",
          stem: { en: "Which metal is placed at the negative terminal during electroplating of gold on an iron ring?", ml: "ഒരു ഇരുമ്പ് മോതിരത്തിൽ സ്വർണ്ണം പൂശുമ്പോൾ നെഗറ്റീവ് ടെർമിനലിൽ വെക്കേണ്ടത് ഏത്?" },
          options: [
            { k: "A", text: { en: "Gold", ml: "സ്വർണ്ണം" } },
            { k: "B", text: { en: "Iron ring", ml: "ഇരുമ്പ് മോതിരം" } },
            { k: "C", text: { en: "Copper", ml: "ചെമ്പ്" } },
            { k: "D", text: { en: "Zinc", ml: "സിങ്ക്" } }
          ],
          answer: "B",
          difficulty: "medium"
        }
      ]
    }
  ]
};
