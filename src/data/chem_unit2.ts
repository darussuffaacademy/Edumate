export const chemUnit2 = {
  id: "u-chem-2",
  title: { en: "Chemical Reactions of Organic Compounds", ml: "ഓർഗാനിക് സംയുക്തങ്ങളുടെ രാസപ്രവർത്തനങ്ങൾ" },
  lessons: [
    {
      id: "sc-chem-10-reactions",
      title: { en: "Chemical Reactions", ml: "രാസപ്രവർത്തനങ്ങൾ" },
      estimated_time_mins: 45,
      learning_objectives: [
        { id: "lo1", text: { en: "Understand substitution and addition reactions.", ml: "ആദേശ രാസപ്രവർത്തനങ്ങളും സങ്കലന രാസപ്രവർത്തനങ്ങളും മനസ്സിലാക്കുക." } },
        { id: "lo2", text: { en: "Explain polymerisation and thermal cracking.", ml: "പോളിമറൈസേഷനും താപീയ വിഘടനവും വിശദീകരിക്കുക." } },
        { id: "lo3", text: { en: "Identify important organic compounds and their uses.", ml: "പ്രധാനപ്പെട്ട ഓർഗാനിക് സംയുക്തങ്ങളെയും അവയുടെ ഉപയോഗങ്ങളെയും തിരിച്ചറിയുക." } }
      ],
      content: {
        intro: {
          en: "Organic compounds undergo various chemical reactions such as substitution, addition, polymerisation, and thermal cracking. These reactions are essential for producing many useful materials in our daily life.",
          ml: "ഓർഗാനിക് സംയുക്തങ്ങൾ ആദേശ രാസപ്രവർത്തനങ്ങൾ, സങ്കലന രാസപ്രവർത്തനങ്ങൾ, പോളിമറൈസേഷൻ, താപീയ വിഘടനം തുടങ്ങിയ വിവിധ രാസപ്രവർത്തനങ്ങൾക്ക് വിധേയമാകുന്നു. നമ്മുടെ ദൈനംദിന ജീവിതത്തിൽ ഉപയോഗപ്രദമായ പല വസ്തുക്കളും നിർമ്മിക്കാൻ ഈ രാസപ്രവർത്തനങ്ങൾ അത്യാവശ്യമാണ്."
        },
        core: {
          en: "Important reactions include substitution (replacing an atom), addition (combining molecules), and polymerisation (forming large molecules).",
          ml: "പ്രധാന രാസപ്രവർത്തനങ്ങളിൽ ആദേശം (ഒരു ആറ്റത്തെ മാറ്റുന്നത്), സങ്കലനം (തന്മാത്രകൾ കൂടിച്ചേരുന്നത്), പോളിമറൈസേഷൻ (വലിയ തന്മാത്രകൾ ഉണ്ടാകുന്നത്) എന്നിവ ഉൾപ്പെടുന്നു."
        },
        blocks: [
          { type: 'h2', en: '1. Substitution Reactions', ml: '1. ആദേശ രാസപ്രവർത്തനങ്ങൾ' },
          { type: 'p', en: 'Substitution reactions are chemical reactions in which an atom or group of atoms is replaced with another atom or group of atoms in a compound.', ml: 'ഒരു സംയുക്തത്തിലെ ഒരു ആറ്റത്തെയോ ആറ്റങ്ങളുടെ കൂട്ടത്തെയോ മാറ്റി പകരം മറ്റൊരു ആറ്റമോ ആറ്റങ്ങളുടെ കൂട്ടമോ വരുന്ന രാസപ്രവർത്തനങ്ങളാണ് ആദേശ രാസപ്രവർത്തനങ്ങൾ.' },
          { type: 'p', en: 'Example: Reaction of methane with chlorine in the presence of sunlight.', ml: 'ഉദാഹരണം: സൂര്യപ്രകാശത്തിന്റെ സാന്നിധ്യത്തിൽ മീഥെയ്നും ക്ലോറിനും തമ്മിലുള്ള രാസപ്രവർത്തനം.' },
          { type: 'formula', en: 'CH₄ + Cl₂ →(sunlight) CH₃Cl + HCl', ml: 'CH₄ + Cl₂ →(സൂര്യപ്രകാശം) CH₃Cl + HCl' },
          
          { type: 'h2', en: '2. Addition Reactions', ml: '2. സങ്കലന രാസപ്രവർത്തനങ്ങൾ' },
          { type: 'p', en: 'Addition reactions are reactions in which unsaturated organic compounds with double or triple bonds combine with certain molecules to form saturated compounds.', ml: 'ദ്വിബന്ധനമോ ത്രിബന്ധനമോ ഉള്ള അപൂരിത ഓർഗാനിക് സംയുക്തങ്ങൾ മറ്റ് തന്മാത്രകളുമായി ചേർന്ന് പൂരിത സംയുക്തങ്ങളായി മാറുന്ന പ്രവർത്തനങ്ങളാണ് സങ്കലന രാസപ്രവർത്തനങ്ങൾ.' },
          { type: 'p', en: 'Example: Ethene combines with hydrogen in the presence of nickel (Ni) catalyst to form ethane.', ml: 'ഉദാഹരണം: നിക്കൽ (Ni) ഉൽപ്രേരകത്തിന്റെ സാന്നിധ്യത്തിൽ ഈഥീൻ ഹൈഡ്രജനുമായി ചേർന്ന് ഈഥെയ്ൻ ഉണ്ടാകുന്നു.' },
          { type: 'formula', en: 'CH₂=CH₂ + H₂ →(Ni) CH₃-CH₃', ml: 'CH₂=CH₂ + H₂ →(Ni) CH₃-CH₃' },
          
          { type: 'h2', en: '3. Polymerisation', ml: '3. പോളിമറൈസേഷൻ' },
          { type: 'p', en: 'Polymerisation is the process by which simple molecules (monomers) join together to form large complex molecules (polymers).', ml: 'ലഘു തന്മാത്രകൾ (മോണോമറുകൾ) കൂടിച്ചേർന്ന് വലിയ സങ്കീർണ്ണ തന്മാത്രകൾ (പോളിമറുകൾ) ഉണ്ടാകുന്ന പ്രക്രിയയാണ് പോളിമറൈസേഷൻ.' },
          { type: 'h3', en: 'A. Addition Polymers', ml: 'A. അഡീഷൻ പോളിമറുകൾ' },
          { type: 'p', en: 'Obtained by the repeated addition reaction of monomers.', ml: 'മോണോമറുകൾ തുടർച്ചയായി സങ്കലന രാസപ്രവർത്തനത്തിൽ ഏർപ്പെട്ടാണ് ഇവ ഉണ്ടാകുന്നത്.' },
          { type: 'p', en: 'Examples: Ethene → Polythene, Vinyl chloride → PVC, Tetrafluoroethene → Teflon', ml: 'ഉദാഹരണങ്ങൾ: ഈഥീൻ → പോളിത്തീൻ, വിനൈൽ ക്ലോറൈഡ് → പി.വി.സി, ടെട്രാഫ്ലൂറോഈഥീൻ → ടെഫ്ലോൺ' },
          { type: 'h3', en: 'B. Condensation Polymers', ml: 'B. കണ്ടൻസേഷൻ പോളിമറുകൾ' },
          { type: 'p', en: 'The process in which different monomers combine together to form larger compounds accompanied by the removal of simple molecules like water.', ml: 'വ്യത്യസ്ത മോണോമറുകൾ കൂടിച്ചേർന്ന് വലിയ സംയുക്തങ്ങൾ ഉണ്ടാകുമ്പോൾ ജലം പോലെയുള്ള ലഘുതന്മാത്രകൾ ഒഴിവാക്കപ്പെടുന്ന പ്രക്രിയ.' },
          { type: 'p', en: 'Examples: Adipic acid + Hexamethylenediamine → Nylon 66, Phenol + Formaldehyde → Bakelite', ml: 'ഉദാഹരണങ്ങൾ: അഡിപ്പിക് ആസിഡ് + ഹെക്സാമെഥിലീൻഡൈഅമീൻ → നൈലോൺ 66, ഫീനോൾ + ഫോർമാൽഡിഹൈഡ് → ബേക്കലൈറ്റ്' },
          
          { type: 'h2', en: '4. Thermal Cracking', ml: '4. താപീയ വിഘടനം' },
          { type: 'p', en: 'When heated in the absence of air, some hydrocarbons with high molecular weight decompose into hydrocarbons with lower molecular weight. This process is called thermal cracking.', ml: 'ഉയർന്ന തന്മാത്രാഭാരമുള്ള ചില ഹൈഡ്രോകാർബണുകളെ വായുവിന്റെ അസാന്നിധ്യത്തിൽ ചൂടാക്കുമ്പോൾ വിഘടിച്ച് തന്മാത്രാഭാരം കുറഞ്ഞ ഹൈഡ്രോകാർബണുകളായി മാറുന്ന പ്രക്രിയയാണ് താപീയ വിഘടനം.' },
          { type: 'p', en: 'Both saturated and unsaturated hydrocarbons are formed in this process.', ml: 'ഈ പ്രക്രിയയിൽ പൂരിതവും അപൂരിതവുമായ ഹൈഡ്രോകാർബണുകൾ ഉണ്ടാകുന്നു.' },
          
          { type: 'h2', en: '5. Combustion of Hydrocarbons', ml: '5. ഹൈഡ്രോകാർബണുകളുടെ ജ്വലനം' },
          { type: 'p', en: 'When hydrocarbons burn, they combine with oxygen in air to form CO₂ and H₂O along with heat and light.', ml: 'ഹൈഡ്രോകാർബണുകൾ കത്തുമ്പോൾ അവ അന്തരീക്ഷത്തിലെ ഓക്സിജനുമായി ചേർന്ന് കാർബൺ ഡൈ ഓക്സൈഡും (CO₂) ജലവും (H₂O) താപവും പ്രകാശവും ഉണ്ടാകുന്നു.' },
          { type: 'formula', en: 'CH₄ + 2O₂ → CO₂ + 2H₂O + Heat', ml: 'CH₄ + 2O₂ → CO₂ + 2H₂O + താപം' },
          
          { type: 'h2', en: '6. Important Organic Compounds', ml: '6. പ്രധാനപ്പെട്ട ഓർഗാനിക് സംയുക്തങ്ങൾ' },
          { type: 'h3', en: 'Methanol (CH₃-OH)', ml: 'മെഥനോൾ (CH₃-OH)' },
          { type: 'p', en: 'Also known as wood spirit. It is a poisonous substance. 40% solution of formaldehyde is called formalin. Methanol is used to manufacture formaldehyde.', ml: 'വുഡ് സ്പിриറ്റ് എന്നും അറിയപ്പെടുന്നു. ഇതൊരു വിഷപദാർത്ഥമാണ്. ഫോർമാൽഡിഹൈഡിന്റെ 40% ലായനിയാണ് ഫോർമാലിൻ. ഫോർമാൽഡിഹൈഡ് നിർമ്മിക്കാൻ മെഥനോൾ ഉപയോഗിക്കുന്നു.' },
          { type: 'h3', en: 'Ethanol (CH₃-CH₂-OH)', ml: 'എഥനോൾ (CH₃-CH₂-OH)' },
          { type: 'p', en: 'Manufactured by the fermentation of molasses using enzymes invertase and zymase present in yeast.', ml: 'യീസ്റ്റിൽ അടങ്ങിയിട്ടുള്ള ഇൻവർട്ടേസ്, സൈമേസ് എന്നീ എൻസൈമുകൾ ഉപയോഗിച്ച് മൊളാസസിനെ ഫെർമെന്റേഷൻ (പുളിപ്പിക്കൽ) നടത്തിയാണ് എഥനോൾ നിർമ്മിക്കുന്നത്.' },
          { type: 'p', en: 'Wash: 8-10% ethanol obtained after fermentation. Rectified Spirit: 95.6% ethanol obtained by fractional distillation of wash. Absolute Alcohol: 100% pure ethanol. Power Alcohol: A mixture of 20% absolute alcohol and 80% petrol, used as fuel. Denatured Spirit: Toxic substances are added to ethanol to prevent its misuse as a beverage.', ml: 'വാഷ്: ഫെർമെന്റേഷന് ശേഷം ലഭിക്കുന്ന 8-10% എഥനോൾ. റെക്ടിഫൈഡ് സ്പിരിറ്റ്: വാഷിനെ അംശികസ്വേദനം ചെയ്യുമ്പോൾ ലഭിക്കുന്ന 95.6% എഥനോൾ. അബ്സൊല്യൂട്ട് ആൽക്കഹോൾ: 100% ശുദ്ധമായ എഥനോൾ. പവർ ആൽക്കഹോൾ: 20% അബ്സൊല്യൂട്ട് ആൽക്കഹോളും 80% പെട്രോളും ചേർന്ന മിശ്രിതം, ഇന്ധനമായി ഉപയോഗിക്കുന്നു. ഡീനേച്ചേർഡ് സ്പിരിറ്റ്: പാനീയമായി ദുരുപയോഗം ചെയ്യുന്നത് തടയാൻ എഥനോളിൽ വിഷപദാർത്ഥങ്ങൾ ചേർക്കുന്നു.' },
          { type: 'h3', en: 'Ethanoic Acid / Acetic acid (CH₃-COOH)', ml: 'എഥനോയിക് ആസിഡ് / അസറ്റിക് ആസിഡ് (CH₃-COOH)' },
          { type: 'p', en: 'Vinegar is 5-8% ethanoic acid.', ml: '5-8% എഥനോയിക് ആസിഡ് ലായനിയാണ് വിനാഗിരി.' },
          
          { type: 'h2', en: '7. Esters', ml: '7. എസ്റ്ററുകൾ' },
          { type: 'p', en: 'Esters are formed when alcohols react with carboxylic acids in the presence of concentrated sulphuric acid. This reaction is called esterification. Esters have the fragrance of flowers and fruits.', ml: 'ഗാഢ സൾഫ്യൂറിക് ആസിഡിന്റെ സാന്നിധ്യത്തിൽ ആൽക്കഹോളുകൾ കാർബോക്സിലിക് ആസിഡുകളുമായി പ്രവർത്തിക്കുമ്പോൾ എസ്റ്ററുകൾ ഉണ്ടാകുന്നു. ഈ പ്രവർത്തനമാണ് എസ്റ്ററിഫിക്കേഷൻ. എസ്റ്ററുകൾക്ക് പൂക്കളുടെയും പഴങ്ങളുടെയും ഗന്ധമുണ്ട്.' },
          { type: 'formula', en: 'Ethanoic acid + Ethanol →(conc. H₂SO₄) Ethyl ethanoate + Water', ml: 'Ethanoic acid + Ethanol →(conc. H₂SO₄) Ethyl ethanoate + Water' },
          
          { type: 'h2', en: '8. Medicines', ml: '8. മരുന്നുകൾ' },
          { type: 'table', tableData: {
              headers: [{en: 'Category', ml: 'വിഭാഗം'}, {en: 'Function', ml: 'ധർമ്മം'}, {en: 'Examples', ml: 'ഉദാഹരണങ്ങൾ'}],
              rows: [
                [{en: 'Analgesics', ml: 'അനാൽജെസിക്കുകൾ'}, {en: 'Relieve pain', ml: 'വേദന ശമിപ്പിക്കുന്നു'}, {en: 'Aspirin', ml: 'ആസ്പിരിൻ'}],
                [{en: 'Antipyretics', ml: 'ആന്റിപൈറെറ്റിക്കുകൾ'}, {en: 'Reduce body temperature', ml: 'ശരീരതാപനില കുറയ്ക്കുന്നു'}, {en: 'Paracetamol', ml: 'പാരസെറ്റമോൾ'}],
                [{en: 'Antiseptics', ml: 'ആന്റിസെപ്റ്റിക്കുകൾ'}, {en: 'Control microorganisms', ml: 'സൂക്ഷ്മജീവികളെ നിയന്ത്രിക്കുന്നു'}, {en: 'Dettol', ml: 'ഡെറ്റോൾ'}],
                [{en: 'Antibiotics', ml: 'ആന്റിബയോട്ടിക്കുകൾ'}, {en: 'Destroy infectious microorganisms', ml: 'രോഗകാരികളായ സൂക്ഷ്മജീവികളെ നശിപ്പിക്കുന്നു'}, {en: 'Penicillin', ml: 'പെനിസിലിൻ'}]
              ]
          }},
          { type: 'p', en: '(Note: Aspirin is also used to prevent heart attacks due to its anti-blood coagulant property. Paracetamol acts as both an antipyretic and analgesic.)', ml: '(കുറിപ്പ്: രക്തം കട്ടപിടിക്കുന്നത് തടയാനുള്ള കഴിവുള്ളതിനാൽ ഹൃദയാഘാതം തടയാനും ആസ്പിരിൻ ഉപയോഗിക്കുന്നു. പാരസെറ്റമോൾ ഒരു ആന്റിപൈറെറ്റിക് ആയും അനാൽജെസിക് ആയും പ്രവർത്തിക്കുന്നു.)' }
        ] as const
      },
      glossary: [
        {
          term: { en: "Polymerisation", ml: "പോളിമറൈസേഷൻ" },
          definition: { en: "Process of simple molecules joining to form large complex molecules.", ml: "ലഘു തന്മാത്രകൾ കൂടിച്ചേർന്ന് വലിയ സങ്കീർണ്ണ തന്മാത്രകൾ ഉണ്ടാകുന്ന പ്രക്രിയ." }
        },
        {
          term: { en: "Esterification", ml: "എസ്റ്ററിഫിക്കേഷൻ" },
          definition: { en: "Reaction between an alcohol and a carboxylic acid to form an ester.", ml: "ആൽക്കഹോളും കാർബോക്സിലിക് ആസിഡും പ്രവർത്തിച്ച് എസ്റ്റർ ഉണ്ടാകുന്ന പ്രക്രിയ." }
        }
      ],
      quiz: [
        {
          q_id: "q1",
          type: "mcq",
          stem: { en: "What is a substitution reaction?", ml: "ആദേശ രാസപ്രവർത്തനം എന്നാൽ എന്ത്?" },
          options: [
            { k: "A", text: { en: "Combining molecules", ml: "തന്മാത്രകൾ കൂടിച്ചേരുന്നത്" } },
            { k: "B", text: { en: "Replacing an atom or group", ml: "ഒരു ആറ്റത്തെയോ കൂട്ടത്തെയോ മാറ്റുന്നത്" } },
            { k: "C", text: { en: "Decomposing molecules", ml: "തന്മാത്രകൾ വിഘടിക്കുന്നത്" } },
            { k: "D", text: { en: "Forming polymers", ml: "പോളിമറുകൾ ഉണ്ടാകുന്നത്" } }
          ],
          answer: "B",
          difficulty: "easy"
        },
        {
          q_id: "q2",
          type: "mcq",
          stem: { en: "What is the monomer of Teflon?", ml: "ടെഫ്ലോണിന്റെ മോണോമർ ഏതാണ്?" },
          options: [
            { k: "A", text: { en: "Ethene", ml: "ഈഥീൻ" } },
            { k: "B", text: { en: "Vinyl chloride", ml: "വിനൈൽ ക്ലോറൈഡ്" } },
            { k: "C", text: { en: "Tetrafluoroethene", ml: "ടെട്രാഫ്ലൂറോഈഥീൻ" } },
            { k: "D", text: { en: "Phenol", ml: "ഫീനോൾ" } }
          ],
          answer: "C",
          difficulty: "medium"
        }
      ]
    }
  ]
};
