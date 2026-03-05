export const chemUnit4 = {
  id: "u-chem-4",
  title: { en: "Gas Laws and Mole Concept", ml: "വാതകനിയമങ്ങളും മോൾ സങ്കൽപ്പവും" },
  lessons: [
    {
      id: "sc-chem-10-gaslaws",
      title: { en: "Gas Laws & Moles", ml: "വാതകനിയമങ്ങളും മോളുകളും" },
      estimated_time_mins: 55,
      learning_objectives: [
        { id: "lo1", text: { en: "Understand the kinetic molecular theory of gases.", ml: "വാതകങ്ങളുടെ ഗതികോർജ്ജ സിദ്ധാന്തം മനസ്സിലാക്കുക." } },
        { id: "lo2", text: { en: "Explain Boyle's, Charles's, and Avogadro's laws.", ml: "ബോയിൽ നിയമം, ചാൾസ് നിയമം, അവോഗാഡ്രോ നിയമം എന്നിവ വിശദീകരിക്കുക." } },
        { id: "lo3", text: { en: "Apply the mole concept and calculate molar volume at STP.", ml: "മോൾ സങ്കൽപ്പം പ്രയോഗിക്കുകയും STP-യിലെ മോളാർ വ്യാപ്തം കണക്കാക്കുകയും ചെയ്യുക." } }
      ],
      content: {
        intro: {
          en: "Gases have unique properties explained by the kinetic molecular theory. The relationships between volume, pressure, temperature, and number of molecules are described by various gas laws.",
          ml: "വാതകങ്ങൾക്ക് ഗതികോർജ്ജ സിദ്ധാന്തം വിശദീകരിക്കുന്ന സവിശേഷമായ ഗുണങ്ങളുണ്ട്. വ്യാപ്തം, മർദ്ദം, താപനില, തന്മാത്രകളുടെ എണ്ണം എന്നിവ തമ്മിലുള്ള ബന്ധം വിവിധ വാതകനിയമങ്ങളിലൂടെ വിവരിക്കുന്നു."
        },
        core: {
          en: "The mole concept is a fundamental idea in chemistry that relates the mass of a substance to the number of particles it contains, using Avogadro's number.",
          ml: "അവോഗാഡ്രോ സംഖ്യ ഉപയോഗിച്ച് ഒരു പദാർത്ഥത്തിന്റെ മാസിനെ അതിലടങ്ങിയിരിക്കുന്ന കണങ്ങളുടെ എണ്ണവുമായി ബന്ധിപ്പിക്കുന്ന രസതന്ത്രത്തിലെ അടിസ്ഥാന ആശയമാണ് മോൾ സങ്കൽപ്പം."
        },
        blocks: [
          { type: 'h2', en: '1. Kinetic Molecular Theory of Gases', ml: '1. വാതകങ്ങളുടെ ഗതികോർജ്ജ സിദ്ധാന്തം' },
          { type: 'p', en: 'Gases are made up of minute particles (atoms/molecules). The attractive force between gaseous molecules is very low. As the molecules are so far apart, the volume of gaseous molecules is negligible in comparison with the total volume of the gas.', ml: 'വാതകങ്ങൾ നിർമ്മിച്ചിരിക്കുന്നത് അതിസൂക്ഷ്മങ്ങളായ കണികകൾ (ആറ്റങ്ങൾ/തന്മാത്രകൾ) കൊണ്ടാണ്. വാതക തന്മാത്രകൾ തമ്മിലുള്ള ആകർഷണബലം വളരെ കുറവാണ്. തന്മാത്രകൾ തമ്മിൽ വളരെ അകലത്തിലായതിനാൽ, വാതകത്തിന്റെ ആകെ വ്യാപ്തവുമായി താരതമ്യം ചെയ്യുമ്പോൾ വാതക തന്മാത്രകളുടെ വ്യാപ്തം വളരെ നിസ്സാരമാണ്.' },
          { type: 'p', en: 'Gaseous molecules are in constant random motion in all directions. As a result, they collide with one another and with the walls of the container. The force produced due to the collision of molecules with the walls of the container results in gaseous pressure.', ml: 'വാതക തന്മാത്രകൾ എല്ലാ ദിശകളിലേക്കും നിരന്തരം ചലിച്ചുകൊണ്ടിരിക്കുന്നു. ഇതിന്റെ ഫലമായി തന്മാത്രകൾ തമ്മിലും പാത്രത്തിന്റെ ഭിത്തിയിലും കൂട്ടിയിടിക്കുന്നു. പാത്രത്തിന്റെ ഭിത്തിയിൽ തന്മാത്രകൾ കൂട്ടിയിടിക്കുമ്പോഴുണ്ടാകുന്ന ബലമാണ് വാതകമർദ്ദത്തിന് കാരണമാകുന്നത്.' },
          { type: 'p', en: 'Collisions of gaseous molecules are elastic in nature. The kinetic energy of the molecules before and after the collision will be the same. The average kinetic energy of the gaseous molecules is directly proportional to its temperature.', ml: 'വാതക തന്മാത്രകളുടെ കൂട്ടിയിടി ഇലാസ്തിക (elastic) സ്വഭാവമുള്ളതാണ്. അതായത്, കൂട്ടിയിടിക്ക് മുമ്പും പിമ്പും തന്മാത്രകളുടെ ഗതികോർജ്ജം തുല്യമായിരിക്കും. വാതക തന്മാത്രകളുടെ ശരാശരി ഗതികോർജ്ജം അതിന്റെ താപനിലയ്ക്ക് നേർ അനുപാതത്തിലായിരിക്കും.' },
          
          { type: 'h2', en: '2. General Properties of Gases', ml: '2. വാതകങ്ങളുടെ പൊതുവായ സവിശേഷതകൾ' },
          { type: 'h3', en: 'A. Volume (V)', ml: 'A. വ്യാപ്തം (V)' },
          { type: 'p', en: 'The space occupied by a substance is taken as its volume. The volume of a gas is the volume of the container in which it is occupied.', ml: 'ഒരു പദാർത്ഥം ഉൾക്കൊള്ളാൻ ആവശ്യമായ സ്ഥലമാണ് അതിന്റെ വ്യാപ്തം. ഒരു വാതകത്തിന്റെ വ്യാപ്തം എന്നത് അത് ഉൾക്കൊള്ളുന്ന പാത്രത്തിന്റെ വ്യാപ്തമാണ്.' },
          { type: 'formula', en: '1 cm³ = 1 mL = 1 cc | 1000 cm³ = 1000 mL = 1 Litre (L) | 1 m³ = 1000 Litres (L)', ml: '1 cm³ = 1 mL = 1 cc | 1000 cm³ = 1000 mL = 1 ലിറ്റർ (L) | 1 m³ = 1000 ലിറ്റർ (L)' },
          { type: 'h3', en: 'B. Pressure (P)', ml: 'B. മർദ്ദം (P)' },
          { type: 'p', en: 'Gaseous pressure is the force experienced per unit surface area (P = F / A).', ml: 'യൂണിറ്റ് പരപ്പളവിൽ അനുഭവപ്പെടുന്ന ബലമാണ് വാതകമർദ്ദം (P = F / A).' },
          { type: 'formula', en: 'SI Unit: Pascal (Pa) or N/m² | 1 atm = 1.01325 × 10⁵ Pa', ml: 'SI യൂണിറ്റ്: പാസ്കൽ (Pa) അല്ലെങ്കിൽ N/m² | 1 atm = 1.01325 × 10⁵ Pa' },
          { type: 'h3', en: 'C. Temperature (T)', ml: 'C. താപനില (T)' },
          { type: 'p', en: 'The SI unit of temperature is Kelvin (K). To convert Celsius (°C) to Kelvin, add 273. (T(K) = t°C + 273)', ml: 'താപനിലയുടെ എസ്.ഐ (SI) യൂണിറ്റ് കെൽവിൻ (K) ആണ്. സെൽഷ്യസിനെ കെൽവിനിലേക്ക് മാറ്റാൻ 273 കൂട്ടുക. (T(K) = t°C + 273)' },
          
          { type: 'h2', en: '3. Gas Laws', ml: '3. വാതകനിയമങ്ങൾ' },
          { type: 'h3', en: 'A. Boyle\'s Law', ml: 'A. ബോയിൽ നിയമം' },
          { type: 'p', en: 'Statement: At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure.', ml: 'നിയമം: താപനില സ്ഥിരമായിരിക്കുമ്പോൾ, ഒരു നിശ്ചിത മാസ് വാതകത്തിന്റെ വ്യാപ്തം അതിന്റെ മർദ്ദത്തിന് വിപരീതാനുപാതത്തിലായിരിക്കും.' },
          { type: 'formula', en: 'V ∝ 1/P → P₁V₁ = P₂V₂ (Temperature and mass are constant)', ml: 'V ∝ 1/P → P₁V₁ = P₂V₂ (താപനിലയും മാസും സ്ഥിരം)' },
          { type: 'p', en: 'Example: The size of air bubbles increases as they rise to the surface of the water.', ml: 'ഉദാഹരണം: ജലോപരിതലത്തിലേക്ക് വരുന്തോറും വായുക്കുമിളകളുടെ വലിപ്പം കൂടുന്നു.' },
          { type: 'h3', en: 'B. Charles\'s Law', ml: 'B. ചാൾസ് നിയമം' },
          { type: 'p', en: 'Statement: At constant pressure, the volume of a definite mass of a gas is directly proportional to its temperature in Kelvin scale.', ml: 'നിയമം: മർദ്ദം സ്ഥിരമായിരിക്കുമ്പോൾ ഒരു നിശ്ചിത മാസ് വാതകത്തിന്റെ വ്യാപ്തം അതിന്റെ കെൽവിൻ താപനിലയ്ക്ക് നേർ അനുപാതത്തിലായിരിക്കും.' },
          { type: 'formula', en: 'V ∝ T → V₁/T₁ = V₂/T₂ (Pressure and mass are constant)', ml: 'V ∝ T → V₁/T₁ = V₂/T₂ (മർദ്ദവും മാസും സ്ഥിരം)' },
          { type: 'p', en: 'Absolute Zero: The lowest temperature that can be attained by a gas is -273.15°C (0 K). At this temperature, the volume of a gas theoretically becomes zero.', ml: 'കേവലപൂജ്യം: വാതകങ്ങൾക്ക് എത്തിച്ചേരാൻ കഴിയുന്ന ഏറ്റവും കുറഞ്ഞ താപനിലയായ -273.15°C യെ (0 K) കേവലപൂജ്യം എന്ന് വിളിക്കുന്നു. ഈ താപനിലയിൽ വാതകങ്ങളുടെ വ്യാപ്തം പൂജ്യമാകുന്നു.' },
          { type: 'h3', en: 'C. Avogadro\'s Law', ml: 'C. അവോഗാഡ്രോ നിയമം' },
          { type: 'p', en: 'Statement: At constant temperature and pressure, the volume of a gas is directly proportional to the number of molecules.', ml: 'നിയമം: താപനിലയും മർദ്ദവും സ്ഥിരമായിരിക്കുമ്പോൾ ഒരു വാതകത്തിന്റെ വ്യാപ്തം അതിലെ തന്മാത്രകളുടെ എണ്ണത്തിന് നേർ അനുപാതത്തിലായിരിക്കും.' },
          { type: 'formula', en: 'V ∝ n (Temperature and pressure are constant)', ml: 'V ∝ n (താപനിലയും മർദ്ദവും സ്ഥിരം)' },
          
          { type: 'h2', en: '4. Combined and Ideal Gas Equations', ml: '4. സംയോജിത, ആദർശ വാതക സമവാക്യങ്ങൾ' },
          { type: 'formula', en: 'Combined Gas Equation: P₁V₁/T₁ = P₂V₂/T₂', ml: 'സംയോജിത വാതക സമവാക്യം: P₁V₁/T₁ = P₂V₂/T₂' },
          { type: 'formula', en: 'Ideal Gas Equation: PV = nRT (Where R is Universal Gas Constant)', ml: 'ആദർശ വാതക സമവാക്യം: PV = nRT (R എന്നത് യൂണിവേഴ്സൽ ഗ്യാസ് കോൺസ്റ്റന്റ് ആണ്)' },
          { type: 'p', en: 'The gases which obey ideal gas equation at all temperature and pressure are known as ideal gases.', ml: 'എല്ലാ താപനിലയിലും മർദ്ദത്തിലും ഈ സമവാക്യം അനുസരിക്കുന്ന വാതകങ്ങളെ ആദർശ വാതകങ്ങൾ എന്ന് വിളിക്കുന്നു.' },
          
          { type: 'h2', en: '5. Mole Concept', ml: '5. മോൾ സങ്കൽപ്പം' },
          { type: 'p', en: 'Avogadro Number (N_A): 6.022 × 10²³ particles. A mole is the quantity of a substance containing 6.022 × 10²³ particles (atoms/molecules/ions).', ml: 'അവോഗാഡ്രോ സംഖ്യ: 6.022 × 10²³. 6.022 × 10²³ കണങ്ങൾ (ആറ്റങ്ങൾ/തന്മാത്രകൾ/അയോണുകൾ) അടങ്ങിയ പദാർത്ഥത്തിന്റെ അളവാണ് ഒരു മോൾ.' },
          { type: 'table', tableData: {
              headers: [{en: 'Concept', ml: 'സങ്കൽപ്പം'}, {en: 'Definition', ml: 'നിർവ്വചനം'}, {en: 'Number of Particles', ml: 'കണങ്ങളുടെ എണ്ണം'}],
              rows: [
                [{en: 'Gram Atomic Mass (GAM)', ml: 'ഗ്രാം അറ്റോമിക മാസ്'}, {en: 'Atomic mass expressed in grams.', ml: 'അറ്റോമിക മാസ് ഗ്രാമിൽ പ്രസ്താവിക്കുന്നത്.'}, {en: '1 mole atoms = 6.022 × 10²³ atoms.', ml: '1 മോൾ ആറ്റങ്ങൾ = 6.022 × 10²³ ആറ്റങ്ങൾ.'}],
                [{en: 'Gram Molecular Mass / Molar Mass', ml: 'മോളാർ മാസ്'}, {en: 'Molecular mass expressed in grams.', ml: 'തന്മാത്രാ മാസ് ഗ്രാമിൽ പ്രസ്താവിക്കുന്നത്.'}, {en: '1 mole molecules = 6.022 × 10²³ molecules.', ml: '1 മോൾ തന്മാത്രകൾ = 6.022 × 10²³ തന്മാത്രകൾ.'}]
              ]
          }},
          { type: 'formula', en: 'Number of Moles = Given Mass / Molar Mass', ml: 'മോളുകളുടെ എണ്ണം = നൽകിയിരിക്കുന്ന മാസ് / മോളാർ മാസ്' },
          { type: 'formula', en: 'Number of Moles = Given Number of Particles / (6.022 × 10²³)', ml: 'മോളുകളുടെ എണ്ണം = നൽകിയിരിക്കുന്ന കണങ്ങളുടെ എണ്ണം / (6.022 × 10²³)' },
          
          { type: 'h2', en: '6. Molar Volume at STP', ml: '6. STP-യിലെ മോളാർ വ്യാപ്തം' },
          { type: 'p', en: 'STP (Standard Temperature and Pressure): Temperature of 273 K (0°C) and Pressure of 1 atm.', ml: 'STP (മാനക താപനിലയും മർദ്ദവും): 273 കെൽവിൻ (0°C) താപനിലയും 1 atm മർദ്ദവും.' },
          { type: 'p', en: 'Molar Volume: At STP, one mole of any gas occupies a volume of 22.4 L.', ml: 'മോളാർ വ്യാപ്തം: STP-യിൽ ഏതൊരു വാതകത്തിന്റെയും ഒരു മോളിന്റെ വ്യാപ്തം 22.4 L ആയിരിക്കും.' },
          { type: 'formula', en: 'Number of Moles of gas at STP = Given Volume in Litres / 22.4 L', ml: 'STP-യിലെ മോളുകളുടെ എണ്ണം = നൽകിയിരിക്കുന്ന വ്യാപ്തം ലിറ്ററിൽ / 22.4 L' }
        ] as const
      },
      glossary: [
        {
          term: { en: "Absolute Zero", ml: "കേവലപൂജ്യം" },
          definition: { en: "The lowest possible temperature (-273.15°C or 0 K) where gas volume theoretically becomes zero.", ml: "വാതകങ്ങൾക്ക് എത്തിച്ചേരാൻ കഴിയുന്ന ഏറ്റവും കുറഞ്ഞ താപനില (-273.15°C അല്ലെങ്കിൽ 0 K)." }
        },
        {
          term: { en: "Molar Volume", ml: "മോളാർ വ്യാപ്തം" },
          definition: { en: "The volume occupied by one mole of any gas at STP (22.4 L).", ml: "STP-യിൽ ഏതൊരു വാതകത്തിന്റെയും ഒരു മോൾ ഉൾക്കൊള്ളുന്ന വ്യാപ്തം (22.4 L)." }
        }
      ],
      quiz: [
        {
          q_id: "q1",
          type: "mcq",
          stem: { en: "What causes gaseous pressure according to the Kinetic Molecular Theory?", ml: "വാതകങ്ങളുടെ ഗതികോർജ്ജ സിദ്ധാന്തപ്രകാരം വാതകമർദ്ദത്തിന് കാരണമാകുന്നത് എന്ത്?" },
          options: [
            { k: "A", text: { en: "Attractive force between molecules", ml: "തന്മാത്രകൾ തമ്മിലുള്ള ആകർഷണബലം" } },
            { k: "B", text: { en: "Collision of molecules with the walls of the container", ml: "പാത്രത്തിന്റെ ഭിത്തിയിൽ തന്മാത്രകൾ കൂട്ടിയിടിക്കുമ്പോഴുണ്ടാകുന്ന ബലം" } },
            { k: "C", text: { en: "Volume of the gas", ml: "വാതകത്തിന്റെ വ്യാപ്തം" } },
            { k: "D", text: { en: "Temperature of the gas", ml: "വാതകത്തിന്റെ താപനില" } }
          ],
          answer: "B",
          difficulty: "medium"
        },
        {
          q_id: "q2",
          type: "mcq",
          stem: { en: "Calculate the number of moles in 88 g of CO₂. (Molecular mass of CO₂ = 44)", ml: "88 ഗ്രാം CO₂-ൽ എത്ര മോൾ ഉണ്ട് എന്ന് കണക്കാക്കുക. (CO₂-ന്റെ തന്മാത്രാ മാസ് = 44)" },
          options: [
            { k: "A", text: { en: "1 mole", ml: "1 മോൾ" } },
            { k: "B", text: { en: "2 moles", ml: "2 മോൾ" } },
            { k: "C", text: { en: "3 moles", ml: "3 മോൾ" } },
            { k: "D", text: { en: "4 moles", ml: "4 മോൾ" } }
          ],
          answer: "B",
          difficulty: "medium"
        }
      ]
    }
  ]
};
