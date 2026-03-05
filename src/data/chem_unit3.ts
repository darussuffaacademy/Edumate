export const chemUnit3 = {
  id: "u-chem-3",
  title: { en: "Periodic Table and Electron Configuration", ml: "പീരിയോഡിക് ടേബിളും ഇലക്ട്രോൺ വിന്യാസവും" },
  lessons: [
    {
      id: "sc-chem-10-periodic",
      title: { en: "Periodic Table & Configuration", ml: "പീരിയോഡിക് ടേബിളും വിന്യാസവും" },
      estimated_time_mins: 50,
      learning_objectives: [
        { id: "lo1", text: { en: "Understand the quantum mechanical model of atom and quantum numbers.", ml: "ആറ്റത്തിന്റെ ക്വാണ്ടം മെക്കാനിക്കൽ മാതൃകയും ക്വാണ്ടം സംഖ്യകളും മനസ്സിലാക്കുക." } },
        { id: "lo2", text: { en: "Write subshell electron configuration for elements.", ml: "മൂലകങ്ങളുടെ സബ്ഷെൽ ഇലക്ട്രോൺ വിന്യാസം എഴുതുക." } },
        { id: "lo3", text: { en: "Determine the position of an element in the periodic table.", ml: "പീരിയോഡിക് ടേബിളിൽ ഒരു മൂലകത്തിന്റെ സ്ഥാനം കണ്ടെത്തുക." } }
      ],
      content: {
        intro: {
          en: "The quantum mechanical model of the atom explains the arrangement of electrons in orbitals. Understanding electron configuration helps us determine an element's position and properties in the periodic table.",
          ml: "ആറ്റത്തിന്റെ ക്വാണ്ടം മെക്കാനിക്കൽ മാതൃക ഓർബിറ്റലുകളിലെ ഇലക്ട്രോണുകളുടെ ക്രമീകരണം വിശദീകരിക്കുന്നു. ഇലക്ട്രോൺ വിന്യാസം മനസ്സിലാക്കുന്നത് പീരിയോഡിക് ടേബിളിൽ ഒരു മൂലകത്തിന്റെ സ്ഥാനവും ഗുണങ്ങളും കണ്ടെത്താൻ സഹായിക്കുന്നു."
        },
        core: {
          en: "Electrons are filled in subshells (s, p, d, f) according to their increasing energy levels. This configuration determines the block, period, and group of the element.",
          ml: "ഊർജ്ജം കൂടുന്ന ക്രമത്തിലാണ് സബ്ഷെല്ലുകളിൽ (s, p, d, f) ഇലക്ട്രോണുകൾ പൂരിപ്പിക്കപ്പെടുന്നത്. ഈ വിന്യാസം മൂലകത്തിന്റെ ബ്ലോക്ക്, പിരീഡ്, ഗ്രൂപ്പ് എന്നിവ നിർണ്ണയിക്കുന്നു."
        },
        blocks: [
          { type: 'h2', en: '1. Quantum Mechanical Model of Atom', ml: '1. ആറ്റത്തിന്റെ ക്വാണ്ടം മെക്കാനിക്കൽ മാതൃക' },
          { type: 'p', en: 'According to Heisenberg\'s Uncertainty Principle, it is impossible to determine simultaneously the exact position and the exact velocity of a fast moving subatomic particle like an electron.', ml: 'ഹൈസൻബർഗിന്റെ അനിശ്ചിതത്വ തത്വപ്രകാരം, വളരെ വേഗത്തിൽ സഞ്ചരിക്കുന്ന ഇലക്ട്രോൺ പോലുള്ള ഒരു സബ് ആറ്റോമിക് കണികയുടെ കൃത്യമായ സ്ഥാനവും കൃത്യമായ പ്രവേഗവും ഒരേസമയം നിർണ്ണയിക്കാൻ സാധ്യമല്ല.' },
          { type: 'p', en: 'The regions around the nucleus where there is maximum probability of finding the electrons are called orbitals. The numbers which are used to describe the characteristics of orbitals and electrons are called quantum numbers.', ml: 'ന്യൂക്ലിയസിന് ചുറ്റും ഇലക്ട്രോണുകളെ കണ്ടെത്താൻ ഏറ്റവും കൂടുതൽ സാധ്യതയുള്ള മേഖലകളെ ഓർബിറ്റലുകൾ എന്ന് വിളിക്കുന്നു. ഓർബിറ്റലുകളുടെയും ഇലക്ട്രോണുകളുടെയും സവിശേഷതകൾ പ്രസ്താവിക്കാൻ ഉപയോഗിക്കുന്ന സംഖ്യകളാണ് ക്വാണ്ടം സംഖ്യകൾ.' },
          
          { type: 'h2', en: '2. Quantum Numbers', ml: '2. ക്വാണ്ടം സംഖ്യകൾ' },
          { type: 'h3', en: 'A. Principal Quantum Number (n)', ml: 'A. പ്രിൻസിപ്പൽ ക്വാണ്ടം സംഖ്യ (n)' },
          { type: 'p', en: 'It is used to represent the shells or principal energy levels. The possible values are n=1, 2, 3, 4, ...', ml: 'പ്രധാന ഊർജ്ജനിലകളായ ഷെല്ലുകളെ സൂചിപ്പിക്കാൻ ഇത് ഉപയോഗിക്കുന്നു. ഇതിന്റെ മൂല്യങ്ങൾ n=1, 2, 3, 4, ... എന്നിവയാണ്.' },
          { type: 'table', tableData: {
              headers: [{en: 'Principal quantum number (n)', ml: 'പ്രിൻസിപ്പൽ ക്വാണ്ടം സംഖ്യ (n)'}, {en: 'Shell', ml: 'ഷെൽ'}],
              rows: [
                [{en: '1', ml: '1'}, {en: 'K', ml: 'K'}],
                [{en: '2', ml: '2'}, {en: 'L', ml: 'L'}],
                [{en: '3', ml: '3'}, {en: 'M', ml: 'M'}],
                [{en: '4', ml: '4'}, {en: 'N', ml: 'N'}]
              ]
          }},
          { type: 'h3', en: 'B. Azimuthal Quantum Number (l)', ml: 'B. അസിമുത്തൽ ക്വാണ്ടം സംഖ്യ (l)' },
          { type: 'p', en: 'It defines the three-dimensional shape of the orbital and is used to represent the subshells (s, p, d, f). The value of l ranges from 0 to (n-1).', ml: 'ഓർബിറ്റലുകളുടെ ത്രിമാന ആകൃതിയെ ഇത് സൂചിപ്പിക്കുന്നു, കൂടാതെ സബ്ഷെല്ലുകളെ (s, p, d, f) പ്രതിനിധീകരിക്കാനും ഇത് ഉപയോഗിക്കുന്നു. l ന്റെ മൂല്യം 0 മുതൽ (n-1) വരെയാണ്.' },
          { type: 'table', tableData: {
              headers: [{en: 'n', ml: 'n'}, {en: 'Shell', ml: 'ഷെൽ'}, {en: 'l', ml: 'l'}, {en: 'Subshell', ml: 'സബ്ഷെൽ'}],
              rows: [
                [{en: '1', ml: '1'}, {en: 'K', ml: 'K'}, {en: '0', ml: '0'}, {en: 's', ml: 's'}],
                [{en: '2', ml: '2'}, {en: 'L', ml: 'L'}, {en: '0, 1', ml: '0, 1'}, {en: 's, p', ml: 's, p'}],
                [{en: '3', ml: '3'}, {en: 'M', ml: 'M'}, {en: '0, 1, 2', ml: '0, 1, 2'}, {en: 's, p, d', ml: 's, p, d'}],
                [{en: '4', ml: '4'}, {en: 'N', ml: 'N'}, {en: '0, 1, 2, 3', ml: '0, 1, 2, 3'}, {en: 's, p, d, f', ml: 's, p, d, f'}]
              ]
          }},
          { type: 'h3', en: 'C. Magnetic Quantum Number (m)', ml: 'C. മാഗ്നറ്റിക് ക്വാണ്ടം സംഖ്യ (m)' },
          { type: 'p', en: 'It represents the difference in the orientation of orbitals. For a particular value of l, there are (2l+1) values for m.', ml: 'ഓർബിറ്റലുകളുടെ വിന്യാസത്തിലുള്ള (orientation) വ്യത്യാസത്തെ ഇത് സൂചിപ്പിക്കുന്നു. l ന്റെ ഒരു നിശ്ചിത മൂല്യത്തിന്, m ന് (2l+1) മൂല്യങ്ങൾ ഉണ്ടായിരിക്കും.' },
          
          { type: 'h2', en: '3. Orbitals and Electrons', ml: '3. ഓർബിറ്റലുകളും ഇലക്ട്രോണുകളും' },
          { type: 'p', en: 'The maximum number of orbitals in each shell = n². The maximum number of electrons in each shell = 2n². The maximum number of electrons in each orbital = 2.', ml: 'ഒരു ഷെല്ലിലെ പരമാവധി ഓർബിറ്റലുകളുടെ എണ്ണം = n². ഒരു ഷെല്ലിൽ ഉൾക്കൊള്ളാവുന്ന പരമാവധി ഇലക്ട്രോണുകൾ = 2n². ഒരു ഓർബിറ്റലിൽ ഉൾക്കൊള്ളാവുന്ന പരമാവധി ഇലക്ട്രോണുകൾ = 2.' },
          { type: 'table', tableData: {
              headers: [{en: 'Subshell', ml: 'സബ്ഷെൽ'}, {en: 'Number of Orbitals', ml: 'ഓർബിറ്റലുകളുടെ എണ്ണം'}, {en: 'Max Electrons', ml: 'പരമാവധി ഇലക്ട്രോണുകൾ'}],
              rows: [
                [{en: 's', ml: 's'}, {en: '1', ml: '1'}, {en: '2', ml: '2'}],
                [{en: 'p', ml: 'p'}, {en: '3', ml: '3'}, {en: '6', ml: '6'}],
                [{en: 'd', ml: 'd'}, {en: '5', ml: '5'}, {en: '10', ml: '10'}],
                [{en: 'f', ml: 'f'}, {en: '7', ml: '7'}, {en: '14', ml: '14'}]
              ]
          }},
          
          { type: 'h2', en: '4. Subshell Electron Configuration', ml: '4. സബ്ഷെൽ ഇലക്ട്രോൺ വിന്യാസം' },
          { type: 'p', en: 'Electrons are filled gradually in the subshells in the increasing order of their energy. The energy of subshells increases in the ascending order of (n+l) values. If (n+l) values are the same, the subshell with the higher n value has more energy.', ml: 'സബ്ഷെല്ലുകളുടെ ഊർജ്ജം കൂടുന്ന ക്രമത്തിലാണ് അവയിൽ ഇലക്ട്രോണുകൾ പൂരിപ്പിക്കപ്പെടുന്നത്. (n+l) മൂല്യം കൂടുന്ന ക്രമത്തിലാണ് സബ്ഷെല്ലുകളുടെ ഊർജ്ജം വർദ്ധിക്കുന്നത്. (n+l) മൂല്യങ്ങൾ തുല്യമായി വന്നാൽ, ഉയർന്ന n മൂല്യമുള്ള സബ്ഷെല്ലിന് ഊർജ്ജം കൂടുതലായിരിക്കും.' },
          { type: 'formula', en: 'Order of filling: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s ...', ml: 'ഇലക്ട്രോൺ പൂരിപ്പിക്കുന്ന ക്രമം: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s ...' },
          { type: 'h3', en: 'Anomalous Configuration of Cr and Cu', ml: 'Cr, Cu എന്നിവയുടെ പ്രത്യേക ഇലക്ട്രോൺ വിന്യാസം' },
          { type: 'p', en: 'The completely filled configuration (d¹⁰) and the half-filled configuration (d⁵) are more stable.', ml: 'പൂർണ്ണമായി നിറഞ്ഞ വിന്യാസത്തിനും (d¹⁰) പകുതി നിറഞ്ഞ വിന്യാസത്തിനും (d⁵) സ്ഥിരത (stability) കൂടുതലായിരിക്കും.' },
          { type: 'formula', en: 'Chromium (Cr, 24): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ (Instead of 3d⁴ 4s²)', ml: 'Chromium (Cr, 24): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ (3d⁴ 4s² ന് പകരം)' },
          { type: 'formula', en: 'Copper (Cu, 29): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ (Instead of 3d⁹ 4s²)', ml: 'Copper (Cu, 29): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ (3d⁹ 4s² ന് പകരം)' },
          
          { type: 'h2', en: '5. Position in the Periodic Table', ml: '5. പീരിയോഡിക് ടേബിളിലെ സ്ഥാനം' },
          { type: 'p', en: 'Block: The subshell to which the last electron is added will be the block of that element.', ml: 'ബ്ലോക്ക്: അവസാനത്തെ ഇലക്ട്രോൺ വന്നുചേരുന്ന സബ്ഷെൽ ആയിരിക്കും ആ മൂലകത്തിന്റെ ബ്ലോക്ക്.' },
          { type: 'p', en: 'Period: The period number is the highest shell number (n) in its subshell electron configuration.', ml: 'പിരീഡ്: സബ്ഷെൽ വിന്യാസത്തിലെ ഏറ്റവും വലിയ ഷെൽ നമ്പർ ആയിരിക്കും പിരീഡ് നമ്പർ.' },
          { type: 'table', tableData: {
              headers: [{en: 'Block', ml: 'ബ്ലോക്ക്'}, {en: 'Rule to find Group Number', ml: 'ഗ്രൂപ്പ് നമ്പർ കണ്ടെത്തുന്ന വിധം'}],
              rows: [
                [{en: 's-block', ml: 's-ബ്ലോക്ക്'}, {en: 'Number of electrons in the outermost s subshell.', ml: 'ബാഹ്യതമ s സബ്ഷെല്ലിലെ ഇലക്ട്രോണുകളുടെ എണ്ണം.'}],
                [{en: 'p-block', ml: 'p-ബ്ലോക്ക്'}, {en: '10 + Total number of electrons in the outermost s and p subshells.', ml: '10 + ബാഹ്യതമ s, p സബ്ഷെല്ലുകളിലെ ആകെ ഇലക്ട്രോണുകളുടെ എണ്ണം.'}],
                [{en: 'd-block', ml: 'd-ബ്ലോക്ക്'}, {en: 'Number of electrons in outermost s subshell + Number of electrons in penultimate d subshell.', ml: 'ബാഹ്യതമ s ലെ ഇലക്ട്രോണുകൾ + തൊട്ടുമുമ്പുള്ള d ലെ ഇലക്ട്രോണുകൾ.'}]
              ]
          }},
          
          { type: 'h2', en: '6. Ionisation Enthalpy', ml: '6. അയണീകരണ ഊർജ്ജം' },
          { type: 'p', en: 'Ionisation enthalpy is the minimum amount of energy required to remove the most loosely bound electron from the outermost shell of an isolated gaseous atom.', ml: 'വാതകാവസ്ഥയിലുള്ളതും ഒറ്റപ്പെട്ടതുമായ ഒരു ആറ്റത്തിന്റെ ബാഹ്യതമ ഷെല്ലിലെ ഏറ്റവും ദുർബലമായി ആകർഷിക്കപ്പെട്ടിരിക്കുന്ന ഇലക്ട്രോണിനെ മാറ്റാൻ ആവശ്യമായ കുറഞ്ഞ ഊർജ്ജമാണ് അയണീകരണ ഊർജ്ജം.' },
          { type: 'p', en: 'Down a group: Ionisation enthalpy decreases (due to an increase in the number of shells). Along a period: Ionisation enthalpy increases (due to an increase in nuclear charge without a change in the number of shells).', ml: 'ഒരു ഗ്രൂപ്പിൽ താഴോട്ട് പോകുമ്പോൾ: അയണീകരണ ഊർജ്ജം കുറയുന്നു (ഷെല്ലുകളുടെ എണ്ണം വർദ്ധിക്കുന്നത് കാരണം). ഒരു പിരീഡിൽ ഇടത്തുനിന്ന് വലത്തോട്ട് പോകുമ്പോൾ: അയണീകരണ ഊർജ്ജം കൂടുന്നു (ഷെല്ലുകളുടെ എണ്ണം മാറാതെ ന്യൂക്ലിയർ ചാർജ്ജ് വർദ്ധിക്കുന്നത് കാരണം).' },
          
          { type: 'h2', en: '7. Characteristics of Blocks', ml: '7. ബ്ലോക്കുകളുടെ സവിശേഷതകൾ' },
          { type: 'h3', en: 's-block elements', ml: 's-ബ്ലോക്ക് മൂലകങ്ങൾ' },
          { type: 'p', en: 'Generally exist in solid state. They have lower ionisation enthalpy. Exhibit +1 (Group 1) and +2 (Group 2) oxidation states.', ml: 'പൊതുവെ ഖരാവസ്ഥയിൽ കാണപ്പെടുന്നു. ഇവയ്ക്ക് കുറഞ്ഞ അയണീകരണ ഊർജ്ജമാണുള്ളത്. ഇവ +1 (ഗ്രൂപ്പ് 1), +2 (ഗ്രൂപ്പ് 2) ഓക്സീകരണ അവസ്ഥകൾ കാണിക്കുന്നു.' },
          { type: 'h3', en: 'p-block elements', ml: 'p-ബ്ലോക്ക് മൂലകങ്ങൾ' },
          { type: 'p', en: 'Include metals, non-metals, and metalloids. Exhibit both positive (+) and negative (-) oxidation states.', ml: 'ലോഹങ്ങളും അലോഹങ്ങളും മെറ്റലോയ്ഡുകളും ഇതിൽ ഉൾപ്പെടുന്നു. പോസിറ്റീവ് (+), നെഗറ്റീവ് (-) ഓക്സീകരണ അവസ്ഥകൾ കാണിക്കുന്നു.' },
          { type: 'h3', en: 'd-block elements / Transition elements', ml: 'd-ബ്ലോക്ക് മൂലകങ്ങൾ / സംക്രമണ മൂലകങ്ങൾ' },
          { type: 'p', en: 'All are metals. They show variable oxidation states because electrons from the penultimate d subshell also take part in chemical reactions. Compounds of transition elements are generally coloured.', ml: 'എല്ലാം ലോഹങ്ങളാണ്. ബാഹ്യതമ ഷെല്ലിന് തൊട്ടുമുമ്പുള്ള d സബ്ഷെല്ലിലെ ഇലക്ട്രോണുകൾ കൂടി രാസപ്രവർത്തനത്തിൽ പങ്കെടുക്കുന്നതുകൊണ്ട് ഇവ വ്യത്യാസപ്പെടുന്ന ഓക്സീകരണ അവസ്ഥകൾ കാണിക്കുന്നു. സംക്രമണ മൂലകങ്ങളുടെ സംയുക്തങ്ങൾ പൊതുവെ നിറമുള്ളവയാണ്.' },
          { type: 'h3', en: 'f-block elements / Inner transition elements', ml: 'f-ബ്ലോക്ക് മൂലകങ്ങൾ / ആന്തര സംക്രമണ മൂലകങ്ങൾ' },
          { type: 'p', en: 'Include Lanthanoids and Actinoids. They show variable oxidation states. Actinoids are radioactive.', ml: 'ലാൻഥനോയിഡുകളും ആക്ടിനോയിഡുകളും ഇതിൽ ഉൾപ്പെടുന്നു. വ്യത്യാസപ്പെടുന്ന ഓക്സീകരണ അവസ്ഥകൾ കാണിക്കുന്നു. ആക്ടിനോയിഡുകൾ റേഡിയോ ആക്ടീവ് മൂലകങ്ങളാണ്.' }
        ] as const
      },
      glossary: [
        {
          term: { en: "Orbitals", ml: "ഓർബിറ്റലുകൾ" },
          definition: { en: "Regions around the nucleus where there is maximum probability of finding the electrons.", ml: "ന്യൂക്ലിയസിന് ചുറ്റും ഇലക്ട്രോണുകളെ കണ്ടെത്താൻ ഏറ്റവും കൂടുതൽ സാധ്യതയുള്ള മേഖലകൾ." }
        },
        {
          term: { en: "Ionisation Enthalpy", ml: "അയണീകരണ ഊർജ്ജം" },
          definition: { en: "Energy required to remove the most loosely bound electron from an isolated gaseous atom.", ml: "വാതകാവസ്ഥയിലുള്ള ഒരു ആറ്റത്തിന്റെ ബാഹ്യതമ ഷെല്ലിലെ ഇലക്ട്രോണിനെ മാറ്റാൻ ആവശ്യമായ ഊർജ്ജം." }
        }
      ],
      quiz: [
        {
          q_id: "q1",
          type: "mcq",
          stem: { en: "Between 3d and 4s subshells, which one has higher energy?", ml: "3d, 4s എന്നീ സബ്ഷെല്ലുകളിൽ ഏതിനാണ് ഊർജ്ജം കൂടുതൽ?" },
          options: [
            { k: "A", text: { en: "3d", ml: "3d" } },
            { k: "B", text: { en: "4s", ml: "4s" } },
            { k: "C", text: { en: "Both have same energy", ml: "രണ്ടിനും തുല്യ ഊർജ്ജമാണ്" } },
            { k: "D", text: { en: "Cannot be determined", ml: "കണ്ടുപിടിക്കാൻ കഴിയില്ല" } }
          ],
          answer: "A",
          difficulty: "medium"
        },
        {
          q_id: "q2",
          type: "mcq",
          stem: { en: "Why do d-block elements show variable oxidation states?", ml: "d-ബ്ലോക്ക് മൂലകങ്ങൾ വ്യത്യാസപ്പെടുന്ന ഓക്സീകരണ അവസ്ഥകൾ കാണിക്കുന്നത് എന്തുകൊണ്ട്?" },
          options: [
            { k: "A", text: { en: "They are all metals", ml: "അവയെല്ലാം ലോഹങ്ങളാണ്" } },
            { k: "B", text: { en: "Electrons from penultimate d subshell also take part in reactions", ml: "തൊട്ടുമുമ്പുള്ള d സബ്ഷെല്ലിലെ ഇലക്ട്രോണുകളും രാസപ്രവർത്തനങ്ങളിൽ പങ്കെടുക്കുന്നു" } },
            { k: "C", text: { en: "They have high ionisation enthalpy", ml: "അവയ്ക്ക് ഉയർന്ന അയണീകരണ ഊർജ്ജമുണ്ട്" } },
            { k: "D", text: { en: "They are radioactive", ml: "അവ റേഡിയോ ആക്ടീവ് ആണ്" } }
          ],
          answer: "B",
          difficulty: "hard"
        }
      ]
    }
  ]
};
