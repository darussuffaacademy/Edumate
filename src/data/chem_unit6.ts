export const chemUnit6 = {
  id: "u-chem-6",
  title: { en: "Metals", ml: "ലോഹങ്ങൾ" },
  lessons: [
    {
      id: "sc-chem-10-metals",
      title: { en: "Metals & Metallurgy", ml: "ലോഹങ്ങളും ലോഹനിർമ്മാണവും" },
      estimated_time_mins: 55,
      learning_objectives: [
        { id: "lo1", text: { en: "Understand the occurrence of metals and important ores.", ml: "ലോഹങ്ങളുടെ സാന്നിധ്യവും പ്രധാന അയിരുകളും മനസ്സിലാക്കുക." } },
        { id: "lo2", text: { en: "Explain the stages of metallurgy: concentration, conversion to oxide, and reduction.", ml: "ലോഹനിർമ്മാണത്തിന്റെ ഘട്ടങ്ങൾ വിശദീകരിക്കുക: സാന്ദ്രണം, ഓക്സൈഡാക്കി മാറ്റൽ, നിരോക്സീകരണം." } },
        { id: "lo3", text: { en: "Describe alloys and corrosion of metals.", ml: "ലോഹസങ്കരങ്ങളെക്കുറിച്ചും ലോഹങ്ങളുടെ നാശനത്തെക്കുറിച്ചും വിവരിക്കുക." } }
      ],
      content: {
        intro: {
          en: "Metals play a crucial role in human progress. Properties like malleability, ductility, and sonority make them useful in various fields.",
          ml: "മനുഷ്യപുരോഗതിയിൽ ലോഹങ്ങൾ സുപ്രധാന പങ്ക് വഹിക്കുന്നു. മര്യാദത്വം, തന്യത, സോണോറിറ്റി തുടങ്ങിയ ഗുണങ്ങൾ ലോഹങ്ങളെ വിവിധ മേഖലകളിൽ ഉപയോഗപ്രദമാക്കുന്നു."
        },
        core: {
          en: "Metallurgy is the process of extracting metals from their ores. It involves concentration, conversion to oxide, and reduction.",
          ml: "അയിരുകളിൽ നിന്ന് ലോഹങ്ങൾ വേർതിരിച്ചെടുക്കുന്ന പ്രക്രിയയാണ് ലോഹനിർമ്മാണം (Metallurgy). ഇതിൽ സാന്ദ്രണം, ഓക്സൈഡാക്കി മാറ്റൽ, നിരോക്സീകരണം എന്നിവ ഉൾപ്പെടുന്നു."
        },
        blocks: [
          { type: 'h2', en: '1. Occurrence of Metals', ml: '1. ലോഹങ്ങളുടെ സാന്നിധ്യം' },
          { type: 'p', en: 'Naturally occurring metals or their compounds are called minerals. A mineral from which a metal can be extracted easily and economically is called an ore.', ml: 'പ്രകൃതിയിൽ കാണപ്പെടുന്ന ലോഹങ്ങളെയോ അവയുടെ സംയുക്തങ്ങളെയോ ധാതുക്കൾ (Minerals) എന്ന് വിളിക്കുന്നു. ലളിതമായും ലാഭകരമായും ലോഹം വേർതിരിച്ചെടുക്കാൻ കഴിയുന്ന ധാതുവിനെ അയിര് (Ore) എന്ന് വിളിക്കുന്നു.' },
          { type: 'table', tableData: {
              headers: [{en: 'Metal', ml: 'ലോഹം'}, {en: 'Ore', ml: 'അയിര്'}, {en: 'Formula', ml: 'ഫോർമുല'}],
              rows: [
                [{en: 'Aluminium', ml: 'അലുമിനിയം'}, {en: 'Bauxite', ml: 'ബോക്സൈറ്റ്'}, {en: 'Al₂O₃.2H₂O', ml: 'Al₂O₃.2H₂O'}],
                [{en: 'Iron', ml: 'ഇരുമ്പ്'}, {en: 'Haematite', ml: 'ഹേമറ്റൈറ്റ്'}, {en: 'Fe₂O₃', ml: 'Fe₂O₃'}],
                [{en: 'Copper', ml: 'കോപ്പർ'}, {en: 'Copper Pyrites', ml: 'കോപ്പർ പൈറൈറ്റിസ്'}, {en: 'CuFeS₂', ml: 'CuFeS₂'}],
                [{en: 'Zinc', ml: 'സിങ്ക്'}, {en: 'Calamine', ml: 'കാലമിൻ'}, {en: 'ZnCO₃', ml: 'ZnCO₃'}]
              ]
          }},
          
          { type: 'h2', en: '2. Metallurgy', ml: '2. ലോഹനിർമ്മാണം (മെറ്റലർജി)' },
          { type: 'p', en: 'The process of extraction of metal from its ore is called metallurgy.', ml: 'അയിരുകളിൽ നിന്ന് ലോഹങ്ങൾ വേർതിരിച്ചെടുക്കുന്ന പ്രക്രിയയെ ലോഹനിർമ്മാണം (Metallurgy) എന്ന് വിളിക്കുന്നു.' },
          { type: 'h3', en: 'Stage 1: Concentration of Ores', ml: 'ഘട്ടം 1: അയിരുകളുടെ സാന്ദ്രണം' },
          { type: 'p', en: 'Removing earthy impurities (gangue) from the ore.', ml: 'അയിരിലെ മണ്ണ്, മണൽ തുടങ്ങിയ മാലിന്യങ്ങളെ (ഗാംഗ്) നീക്കം ചെയ്യുന്ന പ്രക്രിയ.' },
          { type: 'p', en: '1. Levigation (Hydraulic Washing): Based on the difference in densities of ore and gangue.', ml: '1. ലേവിഗേഷൻ: അയിരിന്റെയും ഗാംഗിന്റെയും സാന്ദ്രതയിലെ വ്യത്യാസം പ്രയോജനപ്പെടുത്തുന്നു.' },
          { type: 'p', en: '2. Froth Floatation: Used for sulphide ores where ore is lighter than impurities.', ml: '2. ഫ്രോത്ത് ഫ്ലോട്ടേഷൻ: സൾഫൈഡ് അയിരുകളെ സാന്ദ്രണം ചെയ്യാൻ ഉപയോഗിക്കുന്നു.' },
          { type: 'p', en: '3. Magnetic Separation: Used when either the ore or gangue has magnetic properties.', ml: '3. കാന്തിക വേർതിരിക്കൽ: അയിരിനോ മാലിന്യത്തിനോ കാന്തിക ഗുണമുണ്ടെങ്കിൽ ഉപയോഗിക്കുന്നു.' },
          { type: 'p', en: '4. Leaching: Ore dissolves in a suitable solvent while impurities remain insoluble.', ml: '4. ലീച്ചിംഗ്: അനുയോജ്യമായ ഒരു ലായകത്തിൽ അയിര് ലയിപ്പിക്കുന്നു.' },
          { type: 'h3', en: 'Stage 2: Conversion to Oxide', ml: 'ഘട്ടം 2: ഓക്സൈഡാക്കി മാറ്റൽ' },
          { type: 'p', en: '1. Calcination: Heating the ore in the absence of air (for carbonates/hydroxides).', ml: '1. കാൽസിനേഷൻ: വായുവിന്റെ അഭാവത്തിൽ ചൂടാക്കുന്നു (കാർബണേറ്റുകൾക്ക്).' },
          { type: 'p', en: '2. Roasting: Heating the ore in the presence of air (for sulphides).', ml: '2. റോസ്റ്റിംഗ്: വായുവിന്റെ സാന്നിധ്യത്തിൽ ചൂടാക്കുന്നു (സൾഫൈഡുകൾക്ക്).' },
          { type: 'h3', en: 'Stage 3: Reduction of Oxide', ml: 'ഘട്ടം 3: ഓക്സൈഡിന്റെ നിരോക്സീകരണം' },
          { type: 'p', en: 'Removing oxygen to get the metal using reducing agents like Coke (C) or Electricity.', ml: 'കോക്ക് അല്ലെങ്കിൽ വൈദ്യുതി ഉപയോഗിച്ച് ഓക്സിജനെ നീക്കം ചെയ്ത് ലോഹം വേർതിരിക്കുന്നു.' },
          
          { type: 'h2', en: '3. Extraction of Specific Metals', ml: '3. പ്രധാന ലോഹങ്ങളുടെ നിർമ്മാണം' },
          { type: 'h3', en: 'Iron (Fe)', ml: 'ഇരുമ്പ്' },
          { type: 'p', en: 'Device: Blast Furnace. Reducing Agent: Carbon Monoxide (CO). Flux: Limestone (CaCO₃), which removes sand impurities as Slag.', ml: 'ഉപകരണം: ബ്ലാസ്റ്റ് ഫർണസ്. നിരോക്സീകാരി: കാർബൺ മോണോക്സൈഡ് (CO). ഫ്ലക്സ്: ചുണ്ണാമ്പുകല്ല്. ഇത് മണൽ മാലിന്യങ്ങളെ സ്ലാഗ് (Slag) ആയി നീക്കം ചെയ്യുന്നു.' },
          { type: 'h3', en: 'Aluminium (Al)', ml: 'അലുമിനിയം' },
          { type: 'p', en: 'Process: Hall-Heroult Process (Electrolysis of Alumina). Electrolyte: Alumina dissolved in molten Cryolite. Cathode Product: Aluminium metal.', ml: 'പ്രക്രിയ: ഹാൾ-ഹെറോൾട്ട് പ്രക്രിയ. ഇലക്ട്രോലൈറ്റ്: ഉരുകിയ ക്രയോലൈറ്റിൽ ലയിപ്പിച്ച അലുമിന. കാഥോഡിൽ: അലുമിനിയം ലോഹം.' },
          
          { type: 'h2', en: '4. Alloys', ml: '4. ലോഹസങ്കരങ്ങൾ' },
          { type: 'p', en: 'Alloys are mixtures of two or more metals or a metal and a non-metal.', ml: 'രണ്ടോ അതിലധികമോ ലോഹങ്ങളുടെയോ, ലോഹവും അലോഹവും ചേർന്നതോ ആയ മിശ്രിതങ്ങളാണ് ലോഹസങ്കരങ്ങൾ.' },
          { type: 'table', tableData: {
              headers: [{en: 'Alloy', ml: 'ലോഹസങ്കരം'}, {en: 'Constituents', ml: 'ഘടകങ്ങൾ'}, {en: 'Use', ml: 'ഉപയോഗം'}],
              rows: [
                [{en: 'Stainless Steel', ml: 'സ്റ്റെയിൻലെസ്സ് സ്റ്റീൽ'}, {en: 'Fe, Cr, Ni, C', ml: 'Fe, Cr, Ni, C'}, {en: 'Utensils', ml: 'പാത്രങ്ങൾ'}],
                [{en: 'Duralumin', ml: 'ഡ്യൂറാലുമിൻ'}, {en: 'Al, Cu, Mg, Mn', ml: 'Al, Cu, Mg, Mn'}, {en: 'Aircraft parts', ml: 'വിമാനഭാഗങ്ങൾ'}],
                [{en: 'Alnico', ml: 'അൽനിക്കോ'}, {en: 'Fe, Al, Ni, Co', ml: 'Fe, Al, Ni, Co'}, {en: 'Magnets', ml: 'കാന്തങ്ങൾ'}]
              ]
          }},
          
          { type: 'h2', en: '5. Corrosion of Metals', ml: '5. ലോഹങ്ങളുടെ നാശനം' },
          { type: 'p', en: 'Corrosion is the process in which metal reacts with surroundings and undergoes chemical change.', ml: 'ലോഹങ്ങൾ അന്തരീക്ഷവായുവുമായോ ഈർപ്പവുമായോ പ്രവർത്തിച്ച് രാസമാറ്റത്തിന് വിധേയമാകുന്ന പ്രക്രിയ.' },
          { type: 'p', en: 'Rusting of Iron: Requires Oxygen and Moisture.', ml: 'ഇരുമ്പ് തുരുമ്പിക്കൽ: ഓക്സിജനും ഈർപ്പവും ആവശ്യമാണ്.' },
          { type: 'p', en: 'Cathodic Protection: Connecting iron to a more reactive metal (like Mg or Zn) to prevent corrosion.', ml: 'കാഥോഡിക് പ്രൊട്ടക്ഷൻ: ഇരുമ്പിനെ ക്രിയാശീലത കൂടിയ ലോഹങ്ങളുമായി (Mg, Zn) ബന്ധിപ്പിച്ച് സംരക്ഷിക്കുന്നു.' }
        ] as const
      },
      glossary: [
        {
          term: { en: "Ore", ml: "അയിര്" },
          definition: { en: "A mineral from which a metal can be extracted easily and economically.", ml: "ലളിതമായും ലാഭകരമായും ലോഹം വേർതിരിച്ചെടുക്കാൻ കഴിയുന്ന ധാതു." }
        },
        {
          term: { en: "Gangue", ml: "ഗാംഗ്" },
          definition: { en: "The earthy impurities found along with the ore.", ml: "അയിരിനോടൊപ്പം കാണപ്പെടുന്ന മണ്ണ്, മണൽ തുടങ്ങിയ മാലിന്യങ്ങൾ." }
        }
      ],
      quiz: [
        {
          q_id: "q1",
          type: "mcq",
          stem: { en: "Name the main ore of aluminium.", ml: "അലുമിനിയത്തിന്റെ പ്രധാന അയിര് ഏത്?" },
          options: [
            { k: "A", text: { en: "Haematite", ml: "ഹേമറ്റൈറ്റ്" } },
            { k: "B", text: { en: "Bauxite", ml: "ബോക്സൈറ്റ്" } },
            { k: "C", text: { en: "Calamine", ml: "കാലമിൻ" } },
            { k: "D", text: { en: "Copper Pyrites", ml: "കോപ്പർ പൈറൈറ്റിസ്" } }
          ],
          answer: "B",
          difficulty: "easy"
        },
        {
          q_id: "q2",
          type: "mcq",
          stem: { en: "Which method is used to concentrate sulphide ores?", ml: "സൾഫൈഡ് അയിരുകളെ സാന്ദ്രണം ചെയ്യാൻ ഏത് രീതിയാണ് ഉപയോഗിക്കുന്നത്?" },
          options: [
            { k: "A", text: { en: "Levigation", ml: "ലേവിഗേഷൻ" } },
            { k: "B", text: { en: "Magnetic Separation", ml: "കാന്തിക വേർതിരിക്കൽ" } },
            { k: "C", text: { en: "Froth Floatation", ml: "ഫ്രോത്ത് ഫ്ലോട്ടേഷൻ" } },
            { k: "D", text: { en: "Leaching", ml: "ലീച്ചിംഗ്" } }
          ],
          answer: "C",
          difficulty: "medium"
        }
      ]
    }
  ]
};
