export const chemUnit7 = {
  id: "u-chem-7",
  title: { en: "Some Compounds of Industrial Importance", ml: "വ്യവസായ പ്രാധാന്യമുള്ള ചില സംയുക്തങ്ങൾ" },
  lessons: [
    {
      id: "sc-chem-10-compounds",
      title: { en: "Industrial Compounds", ml: "വ്യവസായിക സംയുക്തങ്ങൾ" },
      estimated_time_mins: 60,
      learning_objectives: [
        { id: "lo1", text: { en: "Understand the preparation and properties of Ammonia.", ml: "അമോണിയയുടെ നിർമ്മാണവും ഗുണങ്ങളും മനസ്സിലാക്കുക." } },
        { id: "lo2", text: { en: "Explain Chemical Equilibrium and Le Chatelier's Principle.", ml: "രാസ സന്തുലിതാവസ്ഥയും ല ഷാറ്റ്‌ലിയർ തത്വവും വിശദീകരിക്കുക." } },
        { id: "lo3", text: { en: "Describe the industrial preparation of Sulphuric acid and Sodium Hydroxide.", ml: "സൾഫ്യൂറിക് ആസിഡിന്റെയും സോഡിയം ഹൈഡ്രോക്സൈഡിന്റെയും വ്യവസായിക നിർമ്മാണം വിവരിക്കുക." } }
      ],
      content: {
        intro: {
          en: "Many chemical compounds are produced on a large scale for industrial and agricultural use. Ammonia, Sulphuric acid, and Sodium Hydroxide are some of the most important industrial chemicals.",
          ml: "വ്യവസായിക, കാർഷിക ആവശ്യങ്ങൾക്കായി നിരവധി രാസസംയുക്തങ്ങൾ വലിയ തോതിൽ ഉത്പാദിപ്പിക്കപ്പെടുന്നു. അമോണിയ, സൾഫ്യൂറിക് ആസിഡ്, സോഡിയം ഹൈഡ്രോക്സൈഡ് എന്നിവ ഏറ്റവും പ്രധാനപ്പെട്ട വ്യവസായിക രാസവസ്തുക്കളിൽ ചിലതാണ്."
        },
        core: {
          en: "The Haber process for Ammonia and the Contact process for Sulphuric acid are key industrial methods. Understanding chemical equilibrium is crucial for optimizing these processes.",
          ml: "അമോണിയ നിർമ്മിക്കാനുള്ള ഹേബർ പ്രക്രിയയും സൾഫ്യൂറിക് ആസിഡ് നിർമ്മിക്കാനുള്ള കോൺടാക്ട് പ്രക്രിയയും പ്രധാന വ്യവസായിക രീതികളാണ്. ഈ പ്രക്രിയകൾ മെച്ചപ്പെടുത്തുന്നതിന് രാസ സന്തുലിതാവസ്ഥ മനസ്സിലാക്കേണ്ടത് അത്യാവശ്യമാണ്."
        },
        blocks: [
          { type: 'h2', en: '1. Ammonia (NH₃)', ml: '1. അമോണിയ (NH₃)' },
          { type: 'p', en: 'Ammonia is a chemical used for the production of nitrogenous fertilizers which are required for the growth of plants.', ml: 'സസ്യങ്ങളുടെ വളർച്ചയ്ക്ക് ആവശ്യമായ നൈട്രജൻ വളങ്ങളുടെ നിർമ്മാണത്തിന് ഉപയോഗിക്കുന്ന ഒരു രാസവസ്തുവാണ് അമോണിയ.' },
          { type: 'h3', en: 'Laboratory Preparation', ml: 'പരീക്ഷണശാലാ നിർമ്മാണം' },
          { type: 'p', en: 'Ammonia is prepared in the lab by heating a mixture of Ammonium chloride (NH₄Cl) and Calcium hydroxide (Ca(OH)₂).', ml: 'അമോണിയം ക്ലോറൈഡും (NH₄Cl) കാൽസ്യം ഹൈഡ്രോക്സൈഡും (Ca(OH)₂) ചേർത്ത് ചൂടാക്കിയാണ് പരീക്ഷണശാലയിൽ അമോണിയ നിർമ്മിക്കുന്നത്.' },
          { type: 'formula', en: '2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃', ml: '2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃' },
          { type: 'p', en: 'Drying Agent: Quick lime (CaO) is used to remove moisture from ammonia gas. Collection: It is collected by the downward displacement of air because it is lighter than air.', ml: 'ഉണക്കുന്ന പദാർത്ഥം: അമോണിയ വാതകത്തിലെ ഈർപ്പം നീക്കം ചെയ്യാൻ ക്വിക്ക് ലൈം (CaO) ഉപയോഗിക്കുന്നു. ശേഖരണം: വായുവിനേക്കാൾ സാന്ദ്രത കുറവായതിനാൽ വായുവിന്റെ അധോമുഖ ആദേശം വഴി ഇത് ശേഖരിക്കുന്നു.' },
          { type: 'h3', en: 'Properties of Ammonia', ml: 'അമോണിയയുടെ ഗുണങ്ങൾ' },
          { type: 'p', en: 'Odour: Pungent smell. Solubility: Highly soluble in water (Demonstrated by Fountain Experiment). Nature: Basic nature. It turns moist red litmus to blue.', ml: 'ഗന്ധം: രൂക്ഷഗന്ധം. ലായകത്വം: വെള്ളത്തിൽ നന്നായി ലയിക്കുന്നു (ഫൗണ്ടൻ പരീക്ഷണം വഴി തെളിയിക്കാം). സ്വഭാവം: ആൽക്കലൈൻ സ്വഭാവം. ഇത് നനഞ്ഞ ചുവന്ന ലിറ്റ്മസിനെ നീലയാക്കുന്നു.' },
          
          { type: 'h2', en: '2. Haber Process', ml: '2. ഹേബർ പ്രക്രിയ (അമോണിയയുടെ വ്യവസായിക നിർമ്മാണം)' },
          { type: 'p', en: 'In this process, Nitrogen and Hydrogen combine in the ratio 1:3.', ml: 'ഈ പ്രക്രിയയിൽ നൈട്രജനും ഹൈഡ്രജനും 1:3 എന്ന അനുപാതത്തിൽ സംയോജിക്കുന്നു.' },
          { type: 'formula', en: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + heat', ml: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + ചൂട്' },
          { type: 'table', tableData: {
              headers: [{en: 'Feature', ml: 'ഘടകം'}, {en: 'Condition', ml: 'നിബന്ധന'}],
              rows: [
                [{en: 'Catalyst', ml: 'ഉൽപ്രേരകം'}, {en: 'Sponge Iron', ml: 'സ്പോഞ്ച് ഇരുമ്പ്'}],
                [{en: 'Temperature', ml: 'താപനില'}, {en: '450°C', ml: '450°C'}],
                [{en: 'Pressure', ml: 'മർദ്ദം'}, {en: '200 - 800 atm', ml: '200 - 800 atm'}]
              ]
          }},
          
          { type: 'h2', en: '3. Chemical Equilibrium', ml: '3. രാസ സന്തുലിതാവസ്ഥ' },
          { type: 'p', en: 'Reversible Reaction: Reactions taking place in both directions simultaneously. Chemical Equilibrium: The stage where the rate of forward reaction becomes equal to the rate of backward reaction.', ml: 'ഉഭയദിശാ പ്രവർത്തനം: രണ്ട് ദിശകളിലും ഒരേസമയം നടക്കുന്ന പ്രവർത്തനങ്ങൾ. രാസ സന്തുലിതാവസ്ഥ: മുൻദിശാ പ്രവർത്തനത്തിന്റെ വേഗതയും പിൻദിശാ പ്രവർത്തനത്തിന്റെ വേഗതയും തുല്യമാകുന്ന അവസ്ഥ.' },
          { type: 'h3', en: 'Le Chatelier\'s Principle', ml: 'ല ഷാറ്റ്‌ലിയർ തത്വം' },
          { type: 'p', en: '"When the concentration, pressure or temperature of a system at equilibrium is changed, the system will readjust itself so as to nullify the effect of that change and attain a new state of equilibrium."', ml: '"സന്തുലിതാവസ്ഥയിലുള്ള ഒരു വ്യൂഹത്തിന്റെ ഗാഢതയോ, മർദ്ദമോ, താപനിലയോ മാറ്റിയാൽ ആ മാറ്റത്തിന്റെ ഫലം ഇല്ലാതാക്കുംവിധം വ്യൂഹം സ്വയം ക്രമീകരിക്കുകയും പുതിയൊരു സന്തുലിതാവസ്ഥയിൽ എത്തുകയും ചെയ്യുന്നു."' },
          { type: 'p', en: 'Factors affecting Equilibrium: 1. Concentration: Increasing reactant concentration increases the rate of forward reaction. 2. Pressure: Increasing pressure shifts equilibrium to the side with fewer number of moles. 3. Temperature: Increasing temperature favours endothermic reaction.', ml: 'സന്തുലിതാവസ്ഥയെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ: 1. ഗാഢത: അഭികാരകങ്ങളുടെ ഗാഢത കൂട്ടിയാൽ മുൻദിശാ പ്രവർത്തനത്തിന്റെ വേഗത കൂടുന്നു. 2. മർദ്ദം: മർദ്ദം കൂട്ടിയാൽ തന്മാത്രകളുടെ എണ്ണം കുറയുന്ന ദിശയിലേക്ക് പ്രവർത്തനം നടക്കുന്നു. 3. താപനില: താപനില കൂട്ടിയാൽ താപശോഷക പ്രവർത്തനത്തിന്റെ വേഗത കൂടുന്നു.' },
          
          { type: 'h2', en: '4. Sulphuric Acid (H₂SO₄)', ml: '4. സൾഫ്യൂറിക് ആസിഡ് (H₂SO₄)' },
          { type: 'p', en: 'Sulphuric acid is known as the \'King of Chemicals\'.', ml: 'സൾഫ്യൂറിക് ആസിഡിനെ \'രാസവസ്തുക്കളുടെ രാജാവ്\' എന്ന് വിളിക്കുന്നു.' },
          { type: 'h3', en: 'Contact Process', ml: 'കോൺടാക്ട് പ്രക്രിയ (വ്യവസായിക നിർമ്മാണം)' },
          { type: 'p', en: '1. Burning Sulphur: S + O₂ → SO₂', ml: '1. Burning Sulphur: S + O₂ → SO₂' },
          { type: 'p', en: '2. Oxidation of SO₂: 2SO₂ + O₂ →(V₂O₅) 2SO₃', ml: '2. Oxidation of SO₂: 2SO₂ + O₂ →(V₂O₅) 2SO₃' },
          { type: 'p', en: '3. Formation of Oleum: SO₃ + H₂SO₄ → H₂S₂O₇ (Oleum)', ml: '3. Formation of Oleum: SO₃ + H₂SO₄ → H₂S₂O₇ (Oleum)' },
          { type: 'p', en: '4. Dilution: H₂S₂O₇ + H₂O → 2H₂SO₄', ml: '4. Dilution: H₂S₂O₇ + H₂O → 2H₂SO₄' },
          { type: 'h3', en: 'Properties', ml: 'ഗുണങ്ങൾ' },
          { type: 'p', en: 'Dehydrating Agent: It removes chemically combined water from substances (e.g., charring of sugar). Basicity: It is a Dibasic acid (releases 2 H⁺ ions).', ml: 'നിർജ്ജലീകാരി: പദാർത്ഥങ്ങളിൽ നിന്ന് രാസപരമായി ചേർന്നിരിക്കുന്ന ജലത്തെ നീക്കം ചെയ്യുന്നു. ബാസികത: ഇതൊരു ഡൈബേസിക് ആസിഡാണ് (2 H⁺ അയോണുകളെ വിട്ടുനൽകുന്നു).' },
          
          { type: 'h2', en: '5. Sodium Hydroxide (Caustic Soda)', ml: '5. സോഡിയം ഹൈഡ്രോക്സൈഡ് (കാസ്റ്റിക് സോഡ)' },
          { type: 'p', en: 'Produced by Chlor-alkali process using electrolysis of Brine (conc. NaCl solution).', ml: 'ബ്രൈൻ ലായനിയുടെ (ഗാഢ NaCl ലായനി) വൈദ്യുതവിശ്ലേഷണം വഴി ക്ലോർ-ആൽക്കലി പ്രക്രിയയിലൂടെ നിർമ്മിക്കുന്നു.' },
          { type: 'p', en: 'Anode Product: Chlorine gas (Cl₂). Cathode Product: Hydrogen gas (H₂). Compound formed: Sodium Hydroxide (NaOH).', ml: 'ആനോഡിൽ: ക്ലോറിൻ. കാഥോഡിൽ: ഹൈഡ്രജൻ. ഉണ്ടാകുന്ന സംയുക്തം: സോഡിയം ഹൈഡ്രോക്സൈഡ്.' },
          
          { type: 'h2', en: '6. Salts and Fertilizers', ml: '6. ലവണങ്ങളും വളങ്ങളും' },
          { type: 'p', en: 'Salt Hydrolysis: Process by which salt reacts with water to give acidic or basic nature.', ml: 'സാൾട്ട് ഹൈഡ്രോളിസിസ്: ലവണങ്ങൾ ജലവുമായി പ്രവർത്തിച്ച് ലായനിക്ക് അമ്ല സ്വഭാവമോ ആൽക്കലി സ്വഭാവമോ നൽകുന്ന പ്രക്രിയ.' },
          { type: 'p', en: 'Primary Nutrients for Plants: Nitrogen (N), Phosphorus (P), Potassium (K).', ml: 'സസ്യങ്ങളുടെ പ്രാഥമിക പോഷകങ്ങൾ: നൈട്രജൻ (N), ഫോസ്ഫറസ് (P), പൊട്ടാസ്യം (K).' }
        ] as const
      },
      glossary: [
        {
          term: { en: "Chemical Equilibrium", ml: "രാസ സന്തുലിതാവസ്ഥ" },
          definition: { en: "The stage in a reversible reaction where the rate of forward reaction equals the rate of backward reaction.", ml: "മുൻദിശാ പ്രവർത്തനത്തിന്റെ വേഗതയും പിൻദിശാ പ്രവർത്തനത്തിന്റെ വേഗതയും തുല്യമാകുന്ന അവസ്ഥ." }
        },
        {
          term: { en: "Dehydrating Agent", ml: "നിർജ്ജലീകാരി" },
          definition: { en: "A substance that removes chemically combined water from other substances.", ml: "പദാർത്ഥങ്ങളിൽ നിന്ന് രാസപരമായി ചേർന്നിരിക്കുന്ന ജലത്തെ നീക്കം ചെയ്യുന്ന വസ്തു." }
        }
      ],
      quiz: [
        {
          q_id: "q1",
          type: "mcq",
          stem: { en: "Why is a drying tower containing CaO used during ammonia preparation?", ml: "അമോണിയ നിർമ്മാണത്തിൽ CaO അടങ്ങിയ ഡ്രൈയിംഗ് ടവർ ഉപയോഗിക്കുന്നത് എന്തിനാണ്?" },
          options: [
            { k: "A", text: { en: "To add oxygen", ml: "ഓക്സിജൻ ചേർക്കാൻ" } },
            { k: "B", text: { en: "To remove moisture", ml: "ഈർപ്പം നീക്കം ചെയ്യാൻ" } },
            { k: "C", text: { en: "To increase temperature", ml: "താപനില കൂട്ടാൻ" } },
            { k: "D", text: { en: "To act as a catalyst", ml: "ഉൽപ്രേരകമായി പ്രവർത്തിക്കാൻ" } }
          ],
          answer: "B",
          difficulty: "easy"
        },
        {
          q_id: "q2",
          type: "mcq",
          stem: { en: "What is the effect of increasing pressure in the Haber process?", ml: "ഹേബർ പ്രക്രിയയിൽ മർദ്ദം കൂട്ടിയാലുള്ള സ്വാധീനം എന്താണ്?" },
          options: [
            { k: "A", text: { en: "Increases the rate of backward reaction", ml: "പിൻദിശാ പ്രവർത്തനത്തിന്റെ വേഗത കൂട്ടുന്നു" } },
            { k: "B", text: { en: "No effect", ml: "സ്വാധീനമില്ല" } },
            { k: "C", text: { en: "Increases the rate of forward reaction", ml: "മുൻദിശാ പ്രവർത്തനത്തിന്റെ വേഗത കൂട്ടുന്നു" } },
            { k: "D", text: { en: "Stops the reaction", ml: "പ്രവർത്തനം നിർത്തുന്നു" } }
          ],
          answer: "C",
          difficulty: "medium"
        }
      ]
    }
  ]
};
