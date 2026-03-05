import { Lesson } from './curriculum';

export const physicsUnit4: Lesson = {
  id: 'sc-phy-10-magnetic-effect',
  title: { en: 'Magnetic Effect of Electric Current', ml: 'വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം' },
  estimated_time_mins: 90,
  learning_objectives: [
    { id: 'lo1', text: { en: 'Understand the concept of magnetic field and field lines.', ml: 'കാന്തികമണ്ഡലം, കാന്തിക ബലരേഖകൾ എന്നീ ആശയങ്ങൾ മനസ്സിലാക്കുക.' } },
    { id: 'lo2', text: { en: 'Explain the magnetic effect of electric current discovered by Oersted.', ml: 'ഒയർസ്റ്റെഡ് കണ്ടെത്തിയ വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം വിശദീകരിക്കുക.' } },
    { id: 'lo3', text: { en: 'Apply Right Hand Thumb Rule and Fleming\'s Left Hand Rule.', ml: 'വലതുകൈ തള്ളവിരൽ നിയമവും ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമവും പ്രയോഗിക്കുക.' } },
    { id: 'lo4', text: { en: 'Describe the working of Solenoid, Electromagnet, DC Motor, and Loudspeaker.', ml: 'സോളിനോയ്ഡ്, വൈദ്യുതകാന്തം, DC മോട്ടോർ, ലൗഡ്സ്പീക്കർ എന്നിവയുടെ പ്രവർത്തനം വിവരിക്കുക.' } }
  ],
  content: {
    intro: {
      en: 'Electricity and Magnetism are closely related. In this chapter, we explore how electric current produces magnetic fields and how these fields exert force on conductors, leading to the invention of motors and speakers.',
      ml: 'വൈദ്യുതിയും കാന്തികതയും തമ്മിൽ അടുത്ത ബന്ധമുണ്ട്. വൈദ്യുത പ്രവാഹം എങ്ങനെ കാന്തികമണ്ഡലങ്ങൾ സൃഷ്ടിക്കുന്നുവെന്നും ഈ മണ്ഡലങ്ങൾ ചാലകങ്ങളിൽ എങ്ങനെ ബലം പ്രയോഗിക്കുന്നുവെന്നും ഈ അധ്യായത്തിൽ നമ്മൾ പഠിക്കുന്നു.'
    },
    core: { en: '', ml: '' },
    blocks: [
      { type: 'h2', en: '1. Magnetic Field and Field Lines', ml: '1. കാന്തികമണ്ഡലവും ബലരേഖകളും' },
      { type: 'p', en: 'There is a **magnetic field** around a magnet. The imaginary lines used to visualise the magnetic field are called **magnetic field lines (flux lines)**.', ml: 'ഒരു കാന്തത്തിന് ചുറ്റും **കാന്തികമണ്ഡലം** ഉണ്ട്. കാന്തികമണ്ഡലത്തെ ചിത്രീകരിക്കാൻ ഉപയോഗിക്കുന്ന സാങ്കല്പിക രേഖകളാണ് **കാന്തിക ബലരേഖകൾ** അഥവാ **ഫ്ലക്സ് രേഖകൾ (Magnetic flux lines)**.' },
      { type: 'p', en: 'The direction of magnetic flux lines is from the **North Pole to the South Pole outside** the magnet. Inside the magnet, the direction of flux lines is from the **South Pole to the North Pole**.', ml: 'കാന്തത്തിന് പുറത്ത് കാന്തിക ബലരേഖകളുടെ ദിശ **ഉത്തര ധ്രുവത്തിൽ (North Pole) നിന്ന് ദക്ഷിണ ധ്രുവത്തിലേക്കാണ് (South Pole)**. കാന്തത്തിനുള്ളിൽ ബലരേഖകളുടെ ദിശ **ദക്ഷിണ ധ്രുവത്തിൽ നിന്ന് ഉത്തര ധ്രുവത്തിലേക്കാണ്**.' },
      
      { type: 'img', en: 'Magnetic Field Lines around a Bar Magnet', ml: 'ഒരു ബാർ കാന്തത്തിന് ചുറ്റുമുള്ള കാന്തിക ബലരേഖകൾ', customId: 'bar-magnet-simulation' },

      { type: 'table', tableData: {
        headers: [{en: 'Property', ml: 'സവിശേഷത'}, {en: 'Description', ml: 'വിവരണം'}],
        rows: [
          [{en: 'Continuity', ml: 'തുടർച്ച'}, {en: 'They form continuous closed loops.', ml: 'അവ അടഞ്ഞ തുടർച്ചയായ ലൂപ്പുകൾ ഉണ്ടാക്കുന്നു.'}],
          [{en: 'Intersection', ml: 'ഖണ്ഡിക്കൽ'}, {en: 'Field lines never intersect each other.', ml: 'ബലരേഖകൾ ഒരിക്കലും പരസ്പരം ഖണ്ഡിക്കില്ല.'}],
          [{en: 'Strength', ml: 'ശക്തി'}, {en: 'Closer lines indicate a stronger magnetic field.', ml: 'ബലരേഖകൾ അടുത്തടുത്തിരിക്കുന്നത് ശക്തമായ കാന്തികമണ്ഡലത്തെ സൂചിപ്പിക്കുന്നു.'}]
        ]
      }},

      { type: 'h2', en: '2. Magnetic Effect of Electric Current', ml: '2. വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം' },
      { type: 'p', en: 'A magnetic field is developed around a current-carrying conductor. This phenomenon is the **magnetic effect of electric current**. This was first discovered by the scientist **Christian Oersted**.', ml: 'വൈദ്യുതി കടന്നുപോകുന്ന ഒരു ചാലകത്തിന് ചുറ്റും ഒരു കാന്തികമണ്ഡലം രൂപപ്പെടുന്നു. ഈ പ്രതിഭാസമാണ് **വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം**. ഇത് ആദ്യമായി കണ്ടെത്തിയത് **ക്രിസ്റ്റ്യൻ ഒയർസ്റ്റെഡ്** എന്ന ശാസ്ത്രജ്ഞനാണ്.' },
      { type: 'p', en: 'When the direction of current changes, the direction of the magnetic field also changes.', ml: 'വൈദ്യുത പ്രവാഹത്തിന്റെ ദിശ മാറുമ്പോൾ കാന്തികമണ്ഡലത്തിന്റെ ദിശയും മാറുന്നു.' },

      { type: 'h2', en: '3. Right Hand Thumb Rule', ml: '3. വലതുകൈ തള്ളവിരൽ നിയമം' },
      { type: 'p', en: 'This rule is used to find the **direction of the magnetic field** around a straight current-carrying conductor.', ml: 'വൈദ്യുതി കടന്നുപോകുന്ന ഒരു നേർചാലകത്തിന് ചുറ്റുമുള്ള **കാന്തികമണ്ഡലത്തിന്റെ ദിശ** കണ്ടെത്താനാണ് ഈ നിയമം ഉപയോഗിക്കുന്നത്.' },
      { type: 'p', en: '**Statement:** Imagine holding a current-carrying straight conductor with your right hand. If the thumb points in the direction of the current, the curled fingers will point in the direction of the magnetic field.', ml: '**നിയമം:** വൈദ്യുതി കടന്നുപോകുന്ന ഒരു നേർചാലകം വലതുകൈ കൊണ്ട് പിടിച്ചിരിക്കുന്നതായി സങ്കൽപ്പിക്കുക. തള്ളവിരൽ വൈദ്യുത പ്രവാഹത്തിന്റെ ദിശയെയാണ് സൂചിപ്പിക്കുന്നതെങ്കിൽ, ചാലകത്തെ ചുരുട്ടിപ്പിടിച്ചിരിക്കുന്ന വിരലുകൾ കാന്തികമണ്ഡലത്തിന്റെ ദിശയെ സൂചിപ്പിക്കുന്നു.' },
      
      { type: 'img', en: 'Right Hand Thumb Rule Illustration', ml: 'വലതുകൈ തള്ളവിരൽ നിയമം - ചിത്രം', customId: 'right-hand-thumb-rule-simulation' },

      { type: 'h2', en: '4. Magnetic Field of a Circular Loop', ml: '4. വൃത്താകാരത്തിലുള്ള ചാലകത്തിന്റെ കാന്തികമണ്ഡലം' },
      { type: 'p', en: 'When current passes through a circular loop, magnetic field lines are formed around it. They appear to enter through one face of the loop and leave through the other.', ml: 'ഒരു വൃത്താകാര ചാലകത്തിലൂടെ (circular loop) വൈദ്യുതി കടന്നുപോകുമ്പോൾ അതിനു ചുറ്റും കാന്തിക ബലരേഖകൾ ഉണ്ടാകുന്നു. അവ ലൂപ്പിന്റെ ഒരു വശത്തുകൂടി പ്രവേശിച്ച് മറുവശത്തുകൂടി പുറത്തേക്ക് വരുന്നതായി കാണപ്പെടുന്നു.' },

      { type: 'h2', en: '5. Solenoid', ml: '5. സോളിനോയ്ഡ്' },
      { type: 'p', en: 'A **solenoid** is an insulated wire wound in the shape of a **helix (spring shape)**. The magnetic field created by a current-carrying solenoid is similar to the magnetic field of a **bar magnet**.', ml: 'ഹെലിക്സ് (സ്പ്രിങ്) ആകൃതിയിൽ ചുറ്റിയെടുത്ത കവചിത കമ്പിയാണ് **സോളിനോയ്ഡ് (Solenoid)**. വൈദ്യുതി കടന്നുപോകുന്ന ഒരു സോളിനോയ്ഡ് സൃഷ്ടിക്കുന്ന കാന്തികമണ്ഡലം ഒരു **ബാർ കാന്തത്തിന്റെ** കാന്തികമണ്ഡലത്തിന് സമാനമാണ്.' },
      
      { type: 'img', en: 'Solenoid Polarity Simulation', ml: 'സോളിനോയ്ഡ് ധ്രുവത - സിമുലേഷൻ', customId: 'solenoid-simulation' },

      { type: 'h3', en: 'Polarity of a Solenoid', ml: 'സോളിനോയ്ഡിന്റെ ധ്രുവത' },
      { type: 'p', en: '• The end of the solenoid where the current flows in a **clockwise** direction acts as the **South Pole (S)**.\n• The end where the current flows in an **anti-clockwise** direction acts as the **North Pole (N)**.', ml: '• സോളിനോയ്ഡിന്റെ ഏത് അറ്റത്താണോ വൈദ്യുത പ്രവാഹം **പ്രദക്ഷിണ ദിശയിലുള്ളത് (Clockwise)**, ആ അറ്റം **ദക്ഷിണ ധ്രുവമായി (South Pole)** പ്രവർത്തിക്കുന്നു.\n• വൈദ്യുത പ്രവാഹം **അപ്രദക്ഷിണ ദിശയിലുള്ള (Anti-clockwise)** അറ്റം **ഉത്തര ധ്രുവമായി (North Pole)** പ്രവർത്തിക്കുന്നു.' },

      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Bar Magnet', ml: 'ബാർ കാന്തം'}, {en: 'Solenoid', ml: 'സോളിനോയ്ഡ്'}],
        rows: [
          [{en: 'Magnetism', ml: 'കാന്തികത'}, {en: 'Permanent', ml: 'സ്ഥിരമായത്'}, {en: 'Temporary (only when current flows)', ml: 'താൽക്കാലികം (വൈദ്യുതി ഉള്ളപ്പോൾ മാത്രം)'}],
          [{en: 'Polarity', ml: 'ധ്രുവത'}, {en: 'Fixed', ml: 'സ്ഥിരമാണ്'}, {en: 'Can be reversed by changing current direction', ml: 'വൈദ്യുത ദിശ മാറ്റി മാറ്റാൻ കഴിയും'}],
          [{en: 'Strength', ml: 'ശക്തി'}, {en: 'Fixed', ml: 'സ്ഥിരമാണ്'}, {en: 'Can be changed by varying current or turns', ml: 'വൈദ്യുതിയോ ചുറ്റുകളോ മാറ്റി മാറ്റാൻ കഴിയും'}]
        ]
      }},

      { type: 'h2', en: '6. Electromagnet', ml: '6. വൈദ്യുതകാന്തം' },
      { type: 'p', en: 'An **electromagnet** is formed by placing a **soft iron core** inside a solenoid and passing current through it.', ml: 'സോളിനോയ്ഡിനുള്ളിൽ **പച്ചയിരുമ്പ് (soft iron)** കോർ വെച്ച ശേഷം അതിലൂടെ വൈദ്യുതി കടത്തിവിടുമ്പോൾ അതൊരു **വൈദ്യുതകാന്തമായി** മാറുന്നു.' },
      { type: 'h3', en: 'Factors affecting the strength of an electromagnet:', ml: 'ഒരു വൈദ്യുതകാന്തത്തിന്റെ ശക്തിയെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ:' },
      { type: 'p', en: '1. **Number of turns** of the coiled wire (B ∝ n)\n2. **Strength of the electric current** (B ∝ I)\n3. The **material of the core** (Soft iron is best)', ml: '1. **കമ്പിച്ചുരുളുകളുടെ എണ്ണം** (B ∝ n)\n2. **വൈദ്യുത പ്രവാഹ തീവ്രത** (B ∝ I)\n3. **കോർ ആയി ഉപയോഗിക്കുന്ന പദാർത്ഥം** (പച്ചയിരുമ്പ് ഏറ്റവും അനുയോജ്യം)' },

      { type: 'h2', en: '7. Force on a Current-Carrying Conductor in a Magnetic Field (Motor Principle)', ml: '7. മോട്ടോർ തത്വം' },
      { type: 'p', en: '**Motor Principle:** A current-carrying conductor placed in a magnetic field experiences a force.', ml: '**മോട്ടോർ തത്വം:** കാന്തികമണ്ഡലത്തിൽ ഇരിക്കുന്നതും വൈദ്യുതി കടന്നുപോകുന്നതുമായ ഒരു ചാലകത്തിൽ ഒരു ബലം അനുഭവപ്പെടുന്നു. ഇതാണ് മോട്ടോർ തത്വം.' },
      { type: 'p', en: 'This force is **maximum** when the conductor is placed **perpendicular (90°)** to the magnetic field.', ml: 'ചാലകം കാന്തികമണ്ഡലത്തിന് **ലംബമായി (90°)** ഇരിക്കുമ്പോഴാണ് ഈ ബലം **ഏറ്റവും കൂടുതലായി** അനുഭവപ്പെടുന്നത്.' },

      { type: 'h2', en: '8. Fleming\'s Left Hand Rule', ml: '8. ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമം' },
      { type: 'p', en: 'This rule is used to find the **direction of movement (force)** of a current-carrying conductor placed in a magnetic field.', ml: 'കാന്തികമണ്ഡലത്തിൽ ഇരിക്കുന്നതും വൈദ്യുതി വഹിക്കുന്നതുമായ ഒരു ചാലകത്തിന്റെ **ചലനദിശ (അനുഭവപ്പെടുന്ന ബലത്തിന്റെ ദിശ)** കണ്ടെത്താനാണ് ഈ നിയമം ഉപയോഗിക്കുന്നത്.' },
      { type: 'p', en: '**Statement:** Hold the forefinger, middle finger, and thumb of the left hand in mutually perpendicular directions.', ml: '**നിയമം:** ഇടതുകൈയിലെ ചൂണ്ടുവിരൽ, നടുവിരൽ, തള്ളവിരൽ എന്നിവ പരസ്പരം ലംബമായി പിടിക്കുക.' },
      { type: 'p', en: '• **Forefinger:** Direction of the **Magnetic Field**.\n• **Middle finger:** Direction of the **Current**.\n• **Thumb:** Direction of **Motion** (Force).', ml: '• **ചൂണ്ടുവിരൽ:** **കാന്തികമണ്ഡലത്തിന്റെ** ദിശ.\n• **നടുവിരൽ:** **വൈദ്യുത പ്രവാഹത്തിന്റെ** ദിശ.\n• **തള്ളവിരൽ:** **ചലനദിശ** (ബലം).' },
      
      { type: 'img', en: 'Fleming\'s Left Hand Rule Simulation', ml: 'ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമം - സിമുലേഷൻ', customId: 'fleming-left-hand-simulation' },

      { type: 'h2', en: '9. Electric Motor', ml: '9. വൈദ്യുത മോട്ടോർ' },
      { type: 'p', en: 'An **electric motor** is a device that converts **electrical energy into mechanical energy**. It works on the basis of the **Motor Principle**.', ml: 'വൈദ്യുതോർജ്ജത്തെ **യാന്ത്രികോർജ്ജമാക്കി (Mechanical energy)** മാറ്റുന്ന ഉപകരണമാണ് **വൈദ്യുത മോട്ടോർ**. ഇത് **മോട്ടോർ തത്വത്തിന്റെ** അടിസ്ഥാനത്തിലാണ് പ്രവർത്തിക്കുന്നത്.' },
      
      { type: 'img', en: 'DC Motor Simulation', ml: 'DC മോട്ടോർ - സിമുലേഷൻ', customId: 'dc-motor-simulation' },

      { type: 'h3', en: 'Parts of a DC Motor', ml: 'DC മോട്ടോറിന്റെ ഭാഗങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Part', ml: 'ഭാഗം'}, {en: 'Function', ml: 'ധർമ്മം'}],
        rows: [
          [{en: 'Armature', ml: 'ആർമേച്ചർ'}, {en: 'Rotating metallic coil in the magnetic field.', ml: 'കാന്തികമണ്ഡലത്തിൽ കറങ്ങുന്ന കമ്പിച്ചുരുൾ.'}],
          [{en: 'Split rings', ml: 'സ്പ്ലിറ്റ് റിംഗുകൾ'}, {en: 'Acts as a commutator; reverses current direction every half rotation.', ml: 'കമ്യൂട്ടേറ്ററായി പ്രവർത്തിക്കുന്നു; ഓരോ അർദ്ധഭ്രമണത്തിലും വൈദ്യുത ദിശ മാറ്റുന്നു.'}],
          [{en: 'Carbon brushes', ml: 'കാർബൺ ബ്രഷുകൾ'}, {en: 'Maintains electrical contact with rotating split rings.', ml: 'സ്പ്ലിറ്റ് റിംഗുകളുമായി വൈദ്യുത സമ്പർക്കം നിലനിർത്തുന്നു.'}],
          [{en: 'Field Magnets', ml: 'കാന്തങ്ങൾ'}, {en: 'Provide the necessary magnetic field.', ml: 'ആവശ്യമായ കാന്തികമണ്ഡലം നൽകുന്നു.'}]
        ]
      }},

      { type: 'h2', en: '10. Moving Coil Loudspeaker', ml: '10. മൂവിങ് കോയിൽ ലൗഡ്സ്പീക്കർ' },
      { type: 'p', en: 'It is a device that converts **electrical energy (signals) into sound energy**. It also works on the **Motor Principle**.', ml: 'വൈദ്യുതോർജ്ജത്തെ (സിഗ്നലുകളെ) **ശബ്ദോർജ്ജമാക്കി** മാറ്റുന്ന ഉപകരണമാണിത്. ഇതും **മോട്ടോർ തത്വത്തിലാണ്** പ്രവർത്തിക്കുന്നത്.' },
      
      { type: 'img', en: 'Moving Coil Loudspeaker Simulation', ml: 'മൂവിങ് കോയിൽ ലൗഡ്സ്പീക്കർ - സിമുലേഷൻ', customId: 'loudspeaker-simulation' },

      { type: 'p', en: '• **Main parts:** Permanent magnet, Voice coil, Diaphragm.\n• **Working:** Electrical signals sent through the voice coil cause it to move back and forth rapidly in the magnetic field. This vibrates the attached diaphragm, producing sound.', ml: '• **പ്രധാന ഭാഗങ്ങൾ:** സ്ഥിരകാന്തം, വോയിസ് കോയിൽ, ഡയഫ്രം.\n• **പ്രവർത്തനം:** വോയിസ് കോയിലിലൂടെ കടന്നുപോകുന്ന വൈദ്യുത സിഗ്നലുകൾ അതിനെ കാന്തികമണ്ഡലത്തിൽ മുന്നോട്ടും പിന്നോട്ടും ചലിപ്പിക്കുന്നു. ഈ ചലനം ഡയഫ്രത്തെ കമ്പനം ചെയ്യിക്കുകയും ശബ്ദം പുറപ്പെടുവിക്കുകയും ചെയ്യുന്നു.' },

      { type: 'h2', en: 'Important Formulas', ml: 'പ്രധാന സമവാക്യങ്ങൾ' },
      { type: 'formula', en: 'Magnetic Field (B) ∝ Current (I)\nB ∝ n (Number of turns per unit length)', ml: 'കാന്തികമണ്ഡലം (B) ∝ വൈദ്യുത പ്രവാഹം (I)\nB ∝ n (യൂണിറ്റ് നീളത്തിലെ ചുറ്റുകളുടെ എണ്ണം)' },
      { type: 'formula', en: 'Force (F) = BIL sinθ\nWhere:\nB = Magnetic Field Strength\nI = Current\nL = Length of conductor\nθ = Angle between conductor and field', ml: 'ബലം (F) = BIL sinθ\nഇവിടെ:\nB = കാന്തികമണ്ഡല തീവ്രത\nI = വൈദ്യുത പ്രവാഹം\nL = ചാലകത്തിന്റെ നീളം\nθ = ചാലകവും മണ്ഡലവും തമ്മിലുള്ള കോൺ' },

      { type: 'h2', en: 'Graphs', ml: 'ഗ്രാഫുകൾ' },
      { type: 'p', en: '📈 **Magnetic Field (B) vs Current (I)**\n(A straight line passing through the origin, showing direct proportionality)', ml: '📈 **കാന്തികമണ്ഡലം (B) vs വൈദ്യുത പ്രവാഹം (I)**\n(നേർരേഖാ ഗ്രാഫ്, നേർ അനുപാതത്തെ സൂചിപ്പിക്കുന്നു)' },
      { type: 'p', en: '```\n B |\n   |    /\n   |   /\n   |  /\n   | /\n   |/__________ I\n```', ml: '```\n B |\n   |    /\n   |   /\n   |  /\n   | /\n   |/__________ I\n```' },

      { type: 'h2', en: 'Concept Map', ml: 'കൺസെപ്റ്റ് മാപ്പ്' },
      { type: 'p', en: 'Electric Current → Magnetic Field → Right Hand Thumb Rule → Solenoid → Electromagnet → Motor Principle → DC Motor → Loudspeaker', ml: 'വൈദ്യുത പ്രവാഹം → കാന്തികമണ്ഡലം → വലതുകൈ തള്ളവിരൽ നിയമം → സോളിനോയ്ഡ് → വൈദ്യുതകാന്തം → മോട്ടോർ തത്വം → DC മോട്ടോർ → ലൗഡ്സ്പീക്കർ' },
      
      { type: 'h2', en: '🎯 Quick Revision Box', ml: '🎯 ദ്രുത പുനരവലോകനം' },
      { type: 'table', tableData: {
        headers: [{en: 'Concept', ml: 'ആശയം'}, {en: 'Key Point', ml: 'പ്രധാന പോയിന്റ്'}],
        rows: [
          [{en: 'Oersted\'s Discovery', ml: 'ഒയർസ്റ്റെഡിന്റെ കണ്ടെത്തൽ'}, {en: 'Current creates magnetic field.', ml: 'വൈദ്യുതി കാന്തികമണ്ഡലം ഉണ്ടാക്കുന്നു.'}],
          [{en: 'Right Hand Thumb Rule', ml: 'വലതുകൈ തള്ളവിരൽ നിയമം'}, {en: 'Direction of Magnetic Field.', ml: 'കാന്തികമണ്ഡലത്തിന്റെ ദിശ.'}],
          [{en: 'Motor Principle', ml: 'മോട്ടോർ തത്വം'}, {en: 'Force on conductor in magnetic field.', ml: 'കാന്തികമണ്ഡലത്തിലെ ചാലകത്തിൽ അനുഭവപ്പെടുന്ന ബലം.'}],
          [{en: 'Fleming\'s Left Hand Rule', ml: 'ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമം'}, {en: 'Direction of Force/Motion.', ml: 'ബലത്തിന്റെ/ചലനത്തിന്റെ ദിശ.'}]
        ]
      }},

      { type: 'h2', en: '👨‍🏫 Teacher Notes', ml: '👨‍🏫 അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ' },
      { type: 'p', en: '• Emphasize the difference between Right Hand Thumb Rule (Field direction) and Fleming\'s Left Hand Rule (Force direction).\n• Use the Solenoid simulation to show how reversing current flips N and S poles.\n• Explain the role of Split Rings as a commutator in DC motors clearly.', ml: '• വലതുകൈ തള്ളവിരൽ നിയമവും (മണ്ഡലത്തിന്റെ ദിശ) ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമവും (ബലത്തിന്റെ ദിശ) തമ്മിലുള്ള വ്യത്യാസം ഊന്നിപ്പറയുക.\n• വൈദ്യുത ദിശ മാറുന്നത് എങ്ങനെ ധ്രുവങ്ങളെ മാറ്റുന്നു എന്ന് കാണിക്കാൻ സോളിനോയ്ഡ് സിമുലേഷൻ ഉപയോഗിക്കുക.\n• DC മോട്ടോറുകളിൽ സ്പ്ലിറ്റ് റിംഗുകൾ കമ്യൂട്ടേറ്ററായി പ്രവർത്തിക്കുന്ന വിധം വ്യക്തമായി വിശദീകരിക്കുക.' },

      { type: 'h2', en: '📝 Student Summary Sheet', ml: '📝 വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ ഷീറ്റ്' },
      { type: 'p', en: '1. **Magnetic Field Lines:** Imaginary lines, N to S outside, S to N inside.\n2. **Solenoid:** Helix-shaped coil; acts like a bar magnet.\n3. **Electromagnet:** Solenoid with soft iron core; strength depends on I and n.\n4. **Motor Principle:** Basis for Motors and Loudspeakers.\n5. **DC Motor:** Converts Electrical to Mechanical energy; uses Split Rings.\n6. **Loudspeaker:** Converts Electrical signals to Sound; uses Voice Coil.', ml: '1. **കാന്തിക ബലരേഖകൾ:** സാങ്കല്പിക രേഖകൾ, പുറത്ത് N-ൽ നിന്ന് S-ലേക്ക്, ഉള്ളിൽ S-ൽ നിന്ന് N-ലേക്ക്.\n2. **സോളിനോയ്ഡ്:** ഹെലിക്സ് ആകൃതിയിലുള്ള ചുരുൾ; ബാർ കാന്തം പോലെ പ്രവർത്തിക്കുന്നു.\n3. **വൈദ്യുതകാന്തം:** പച്ചയിരുമ്പ് കോർ ഉള്ള സോളിനോയ്ഡ്; ശക്തി I, n എന്നിവയെ ആശ്രയിച്ചിരിക്കുന്നു.\n4. **മോട്ടോർ തത്വം:** മോട്ടോറുകളുടെയും ലൗഡ്സ്പീക്കറുകളുടെയും അടിസ്ഥാനം.\n5. **DC മോട്ടോർ:** വൈദ്യുതോർജ്ജത്തെ യാന്ത്രികോർജ്ജമാക്കി മാറ്റുന്നു; സ്പ്ലിറ്റ് റിംഗുകൾ ഉപയോഗിക്കുന്നു.\n6. **ലൗഡ്സ്പീക്കർ:** വൈദ്യുത സിഗ്നലുകളെ ശബ്ദമാക്കി മാറ്റുന്നു; വോയിസ് കോയിൽ ഉപയോഗിക്കുന്നു.' }
    ],
  },
  glossary: [
    { term: { en: 'Magnetic Flux', ml: 'കാന്തിക ഫ്ലക്സ്' }, definition: { en: 'The total number of magnetic field lines passing through a surface.', ml: 'ഒരു പ്രതലത്തിലൂടെ കടന്നുപോകുന്ന ആകെ കാന്തിക ബലരേഖകളുടെ എണ്ണം.' } },
    { term: { en: 'Commutator', ml: 'കമ്യൂട്ടേറ്റർ' }, definition: { en: 'A device that reverses the direction of current in a circuit.', ml: 'സർക്യൂട്ടിലെ വൈദ്യുത പ്രവാഹത്തിന്റെ ദിശ മാറ്റുന്ന ഉപകരണം.' } },
    { term: { en: 'Armature', ml: 'ആർമേച്ചർ' }, definition: { en: 'The power-producing component of an electric machine.', ml: 'ഒരു വൈദ്യുത യന്ത്രത്തിലെ ഊർജ്ജം ഉത്പാദിപ്പിക്കുന്ന ഭാഗം.' } }
  ],
  quiz: [
    {
      q_id: 'q1',
      type: 'mcq',
      stem: { en: 'Who discovered the magnetic effect of electric current?', ml: 'വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം കണ്ടെത്തിയത് ആര്?' },
      options: [
        { k: 'A', text: { en: 'Isaac Newton', ml: 'ഐസക് ന്യൂട്ടൺ' } },
        { k: 'B', text: { en: 'Christian Oersted', ml: 'ക്രിസ്റ്റ്യൻ ഒയർസ്റ്റെഡ്' } },
        { k: 'C', text: { en: 'Michael Faraday', ml: 'മൈക്കൽ ഫാരഡെ' } },
        { k: 'D', text: { en: 'James Watt', ml: 'ജെയിംസ് വാട്ട്' } }
      ],
      answer: 'B',
      explanation: { en: 'Hans Christian Oersted discovered that electric current creates a magnetic field in 1820.', ml: '1820-ൽ ഹാൻസ് ക്രിസ്റ്റ്യൻ ഒയർസ്റ്റെഡ് ആണ് വൈദ്യുത പ്രവാഹം കാന്തികമണ്ഡലം സൃഷ്ടിക്കുന്നു എന്ന് കണ്ടെത്തിയത്.' }
    },
    {
      q_id: 'q2',
      type: 'mcq',
      stem: { en: 'Which rule is used to find the direction of magnetic field around a straight conductor?', ml: 'ഒരു നേർചാലകത്തിന് ചുറ്റുമുള്ള കാന്തികമണ്ഡലത്തിന്റെ ദിശ കണ്ടെത്താൻ ഉപയോഗിക്കുന്ന നിയമം ഏത്?' },
      options: [
        { k: 'A', text: { en: 'Fleming\'s Left Hand Rule', ml: 'ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമം' } },
        { k: 'B', text: { en: 'Right Hand Thumb Rule', ml: 'വലതുകൈ തള്ളവിരൽ നിയമം' } },
        { k: 'C', text: { en: 'Fleming\'s Right Hand Rule', ml: 'ഫ്ലെമിങ്ങിന്റെ വലതുകൈ നിയമം' } },
        { k: 'D', text: { en: 'Ohm\'s Law', ml: 'ഓം നിയമം' } }
      ],
      answer: 'B',
      explanation: { en: 'Right Hand Thumb Rule relates current direction to magnetic field direction.', ml: 'വലതുകൈ തള്ളവിരൽ നിയമം വൈദ്യുത ദിശയെയും കാന്തികമണ്ഡല ദിശയെയും തമ്മിൽ ബന്ധിപ്പിക്കുന്നു.' }
    },
    {
      q_id: 'q3',
      type: 'mcq',
      stem: { en: 'In a DC motor, what is the function of split rings?', ml: 'ഒരു DC മോട്ടോറിൽ സ്പ്ലിറ്റ് റിംഗുകളുടെ ധർമ്മം എന്ത്?' },
      options: [
        { k: 'A', text: { en: 'To increase speed', ml: 'വേഗത വർദ്ധിപ്പിക്കാൻ' } },
        { k: 'B', text: { en: 'To reverse current direction', ml: 'വൈദ്യുത ദിശ മാറ്റാൻ' } },
        { k: 'C', text: { en: 'To reduce friction', ml: 'ഘർഷണം കുറയ്ക്കാൻ' } },
        { k: 'D', text: { en: 'To provide magnetic field', ml: 'കാന്തികമണ്ഡലം നൽകാൻ' } }
      ],
      answer: 'B',
      explanation: { en: 'Split rings act as a commutator to ensure continuous rotation in one direction.', ml: 'ഒരേ ദിശയിലുള്ള തുടർച്ചയായ ഭ്രമണം ഉറപ്പാക്കാൻ സ്പ്ലിറ്റ് റിംഗുകൾ കമ്യൂട്ടേറ്ററായി പ്രവർത്തിക്കുന്നു.' }
    }
  ]
};
