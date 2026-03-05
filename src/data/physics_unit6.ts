import { Lesson } from './curriculum';

export const physicsUnit6: Lesson = {
  id: 'sc-phy-10-unit-6',
  title: {
    en: 'Chapter 6: Electromagnetic Induction in Daily Life',
    ml: 'അധ്യായം 6: നിത്യജീവിതത്തിൽ വൈദ്യുതകാന്തിക പ്രേരണം'
  },
  estimated_time_mins: 60,
  learning_objectives: [
    {
      id: 'lo1',
      text: {
        en: 'Understand the phenomenon of electromagnetic induction and the factors affecting induced EMF.',
        ml: 'വൈദ്യുതകാന്തിക പ്രേരണം എന്ന പ്രതിഭാസവും പ്രേരിത ഇ.എം.എഫിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങളും മനസ്സിലാക്കുക.'
      }
    },
    {
      id: 'lo2',
      text: {
        en: 'Explain the working principle and parts of AC and DC generators.',
        ml: 'AC, DC ജനറേറ്ററുകളുടെ പ്രവർത്തന തത്വവും ഭാഗങ്ങളും വിശദീകരിക്കുക.'
      }
    },
    {
      id: 'lo3',
      text: {
        en: 'Differentiate between mutual induction and self-induction.',
        ml: 'മ്യൂച്വൽ ഇൻഡക്ഷനും സെൽഫ് ഇൻഡക്ഷനും തമ്മിലുള്ള വ്യത്യാസം മനസ്സിലാക്കുക.'
      }
    },
    {
      id: 'lo4',
      text: {
        en: 'Understand the working of step-up and step-down transformers.',
        ml: 'സ്റ്റെപ്പ് അപ്പ്, സ്റ്റെപ്പ് ഡൗൺ ട്രാൻസ്ഫോർമറുകളുടെ പ്രവർത്തനം മനസ്സിലാക്കുക.'
      }
    },
    {
      id: 'lo5',
      text: {
        en: 'Familiarize with household electrification components and safety measures like earthing, ELCB, and MCB.',
        ml: 'ഗാർഹിക വൈദ്യുതീകരണ ഘടകങ്ങളും എർത്തിംഗ്, ELCB, MCB തുടങ്ങിയ സുരക്ഷാ സംവിധാനങ്ങളും പരിചയപ്പെടുക.'
      }
    }
  ],
  content: {
    intro: {
      en: 'This chapter explores how electricity is generated using magnetism through electromagnetic induction, the working of generators and transformers, and how electricity is safely distributed in our homes.',
      ml: 'വൈദ്യുതകാന്തിക പ്രേരണത്തിലൂടെ കാന്തികശക്തി ഉപയോഗിച്ച് എങ്ങനെ വൈദ്യുതി ഉത്പാദിപ്പിക്കുന്നുവെന്നും, ജനറേറ്ററുകളുടെയും ട്രാൻസ്ഫോർമറുകളുടെയും പ്രവർത്തനവും, നമ്മുടെ വീടുകളിൽ വൈദ്യുതി സുരക്ഷിതമായി വിതരണം ചെയ്യുന്നതെങ്ങനെയെന്നും ഈ അധ്യായം വിശദീകരിക്കുന്നു.'
    },
    core: {
      en: '',
      ml: ''
    },
    blocks: [
      {
        type: 'h2',
        en: '1. Electromagnetic Induction',
        ml: '1. വൈദ്യുതകാന്തിക പ്രേരണം'
      },
      {
        type: 'p',
        en: 'Whenever there is a relative motion between a magnet and a coil, an electromotive force (EMF) is induced in the coil. This phenomenon is called electromagnetic induction.',
        ml: 'ഒരു കാന്തവും കമ്പിച്ചുരുളും തമ്മിൽ ആപേക്ഷിക ചലനം ഉണ്ടാകുമ്പോൾ കമ്പിച്ചുരുളിൽ ഒരു ഇ.എം.എഫ് (EMF) പ്രേരിതമാകുന്നു. ഈ പ്രതിഭാസമാണ് വൈദ്യുതകാന്തിക പ്രേരണം.'
      },
      {
        type: 'p',
        en: 'The current formed due to this induced EMF is called induced current. A galvanometer is used to detect the presence and direction of minute electrical currents in a circuit. This principle was discovered by the scientist Michael Faraday.',
        ml: 'ഈ പ്രേരിത ഇ.എം.എഫ് മൂലം ഉണ്ടാകുന്ന വൈദ്യുത പ്രവാഹത്തെ പ്രേരിത വൈദ്യുത പ്രവാഹം (Induced current) എന്ന് വിളിക്കുന്നു. ഒരു സർക്യൂട്ടിലെ വളരെ ചെറിയ വൈദ്യുത പ്രവാഹത്തിന്റെ സാന്നിധ്യവും ദിശയും തിരിച്ചറിയാൻ ഗാൽവനോമീറ്റർ ഉപയോഗിക്കുന്നു. ഈ തത്വം കണ്ടെത്തിയത് മൈക്കൽ ഫാരഡെ എന്ന ശാസ്ത്രജ്ഞനാണ്.'
      },
      {
        type: 'h3',
        en: 'Factors Affecting Induced EMF',
        ml: 'പ്രേരിത ഇ.എം.എഫിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ'
      },
      {
        type: 'p',
        en: 'The magnitude of the induced EMF depends on:\n1. Number of turns of the coiled wire.\n2. Strength of the magnetic field.\n3. Speed of relative motion between the magnet and the coil.',
        ml: 'പ്രേരിത ഇ.എം.എഫിന്റെ അളവിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ:\n1. കമ്പിച്ചുരുളുകളുടെ എണ്ണം.\n2. കാന്തികമണ്ഡലത്തിന്റെ ശക്തി.\n3. കാന്തവും കമ്പിച്ചുരുളും തമ്മിലുള്ള ആപേക്ഷിക ചലനത്തിന്റെ വേഗത.'
      },
      {
        type: 'h2',
        en: '2. Electric Generators',
        ml: '2. വൈദ്യുത ജനറേറ്ററുകൾ'
      },
      {
        type: 'p',
        en: 'A generator is a device that converts mechanical energy into electrical energy using the principle of electromagnetic induction.',
        ml: 'വൈദ്യുതകാന്തിക പ്രേരണം എന്ന തത്വത്തിന്റെ അടിസ്ഥാനത്തിൽ യാന്ത്രികോർജ്ജത്തെ വൈദ്യുതോർജ്ജമാക്കി മാറ്റുന്ന ഉപകരണമാണ് ജനറേറ്റർ.'
      },
      {
        type: 'h3',
        en: 'AC Generator',
        ml: 'AC ജനറേറ്റർ'
      },
      {
        type: 'p',
        en: 'It produces Alternating Current (AC), which changes its direction continuously. Main Parts:\n• Field Magnet: Provides the required magnetic field.\n• Armature: An arrangement of insulated conducting wire wound over a soft iron core. It rotates in the magnetic field.\n• Slip Rings: Two metal rings welded to the ends of the armature. They rotate along with the armature.\n• Brushes: Carbon brushes make sliding contact with the slip rings to pass current to the external circuit.',
        ml: 'ഇതിൽ നിന്നും ലഭിക്കുന്നത് ദിശ തുടർച്ചയായി മാറിക്കൊണ്ടിരിക്കുന്ന പ്രത്യാവർത്തി ധാര (Alternating Current - AC) ആണ്. പ്രധാന ഭാഗങ്ങൾ:\n• ഫീൽഡ് കാന്തം: ആവശ്യമായ കാന്തികമണ്ഡലം നൽകുന്നു.\n• ആർമേച്ചർ: പച്ചയിരുമ്പ് കോറിന് മുകളിൽ ചുറ്റിയ കവചിത കമ്പിച്ചുരുൾ. ഇത് കാന്തികമണ്ഡലത്തിൽ കിടന്ന് കറങ്ങുന്നു.\n• സ്ലിപ്പ് റിംഗുകൾ: ആർമേച്ചറിന്റെ രണ്ടറ്റങ്ങളിലായി ബന്ധിപ്പിച്ചിട്ടുള്ള ലോഹവളയങ്ങൾ. ഇവ ആർമേച്ചറിനൊപ്പം കറങ്ങുന്നു.\n• ബ്രഷുകൾ: സ്ലിപ്പ് റിംഗുകളുമായി സമ്പർക്കത്തിലിരുന്ന് ബാഹ്യ സർക്യൂട്ടിലേക്ക് വൈദ്യുതി കടത്തിവിടുന്ന കാർബൺ ബ്രഷുകൾ.'
      },
      {
        type: 'h3',
        en: 'DC Generator',
        ml: 'DC ജനറേറ്റർ'
      },
      {
        type: 'p',
        en: 'It produces Direct Current (DC), which flows only in one direction. Instead of slip rings, a split ring commutator is used in a DC generator. The split rings change the connection to the brushes every half rotation, ensuring the current in the external circuit flows in a single direction.',
        ml: 'ഇതിൽ നിന്നും ലഭിക്കുന്നത് ഒരേ ദിശയിൽ മാത്രം പ്രവഹിക്കുന്ന നേർധാര (Direct Current - DC) ആണ്. DC ജനറേറ്ററിൽ സ്ലിപ്പ് റിംഗുകൾക്ക് പകരം സ്പ്ലിറ്റ് റിംഗ് കമ്യൂട്ടേറ്ററാണ് ഉപയോഗിക്കുന്നത്. ഓരോ അർദ്ധഭ്രമണത്തിലും സ്പ്ലിറ്റ് റിംഗുകൾ ബ്രഷുകളുമായുള്ള സമ്പർക്കം മാറ്റുന്നതിനാൽ ബാഹ്യ സർക്യൂട്ടിൽ എപ്പോഴും ഒരേ ദിശയിലുള്ള വൈദ്യുത പ്രവാഹം ലഭിക്കുന്നു.'
      },
      {
        type: 'img',
        customId: 'generator-simulation',
        en: 'AC and DC Generator Simulation',
        ml: 'AC, DC ജനറേറ്റർ സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: '3. Mutual Induction',
        ml: '3. മ്യൂച്വൽ ഇൻഡക്ഷൻ (പരസ്പര പ്രേരണം)'
      },
      {
        type: 'p',
        en: 'Consider two coils placed side by side. The coil to which the voltage is supplied is the primary coil, and the coil in which EMF is induced is the secondary coil. Mutual Induction is the phenomenon where a change in current in the primary coil induces an EMF in the secondary coil.',
        ml: 'അടുത്തടുത്ത് വെച്ചിരിക്കുന്ന രണ്ട് കമ്പിച്ചുരുളുകളിൽ, വോൾട്ടേജ് നൽകുന്ന കമ്പിച്ചുരുളിനെ പ്രൈമറി എന്നും, ഇ.എം.എഫ് പ്രേരിതമാകുന്ന കമ്പിച്ചുരുളിനെ സെക്കൻഡറി എന്നും വിളിക്കുന്നു. പ്രൈമറി കോയിലിലെ വൈദ്യുത പ്രവാഹത്തിൽ മാറ്റം ഉണ്ടാകുമ്പോൾ, സെക്കൻഡറി കോയിലിൽ ഒരു ഇ.എം.എഫ് പ്രേരിതമാകുന്ന പ്രതിഭാസമാണ് മ്യൂച്വൽ ഇൻഡക്ഷൻ.'
      },
      {
        type: 'h2',
        en: '4. Transformer',
        ml: '4. ട്രാൻസ്ഫോർമർ'
      },
      {
        type: 'p',
        en: 'A transformer is a device used to increase or decrease AC voltage without power loss. It works on the principle of mutual induction. Transformers only work with AC, not DC. DC cannot produce a continuously changing magnetic field.',
        ml: 'പവർ നഷ്ടമില്ലാതെ AC വോൾട്ടേജ് കൂട്ടാനോ കുറയ്ക്കാനോ ഉപയോഗിക്കുന്ന ഉപകരണമാണ് ട്രാൻസ്ഫോർമർ. ഇത് മ്യൂച്വൽ ഇൻഡക്ഷൻ തത്വത്തിലാണ് പ്രവർത്തിക്കുന്നത്. ട്രാൻസ്ഫോർമറുകൾ AC യിൽ മാത്രമേ പ്രവർത്തിക്കൂ, DC യിൽ പ്രവർത്തിക്കില്ല. കാരണം DC യ്ക്ക് തുടർച്ചയായി മാറിക്കൊണ്ടിരിക്കുന്ന കാന്തികമണ്ഡലം സൃഷ്ടിക്കാൻ കഴിയില്ല.'
      },
      {
        type: 'table',
        tableData: {
          headers: [
            { en: 'Step-up Transformer', ml: 'സ്റ്റെപ്പ് അപ്പ് ട്രാൻസ്ഫോർമർ' },
            { en: 'Step-down Transformer', ml: 'സ്റ്റെപ്പ് ഡൗൺ ട്രാൻസ്ഫോർമർ' }
          ],
          rows: [
            [
              { en: 'Increases AC voltage', ml: 'AC വോൾട്ടേജ് കൂട്ടുന്നു' },
              { en: 'Decreases AC voltage', ml: 'AC വോൾട്ടേജ് കുറയ്ക്കുന്നു' }
            ],
            [
              { en: 'Number of turns is greater in the secondary coil (Ns > Np)', ml: 'സെക്കൻഡറി ചുറ്റുകളുടെ എണ്ണം കൂടുതലാണ് (Ns > Np)' },
              { en: 'Number of turns is greater in the primary coil (Np > Ns)', ml: 'പ്രൈമറി ചുറ്റുകളുടെ എണ്ണം കൂടുതലാണ് (Np > Ns)' }
            ],
            [
              { en: 'Secondary wire is thinner, Primary wire is thicker', ml: 'സെക്കൻഡറിയിൽ വണ്ണം കുറഞ്ഞ കമ്പിയും പ്രൈമറിയിൽ വണ്ണം കൂടിയ കമ്പിയും' },
              { en: 'Secondary wire is thicker, Primary wire is thinner', ml: 'സെക്കൻഡറിയിൽ വണ്ണം കൂടിയ കമ്പിയും പ്രൈമറിയിൽ വണ്ണം കുറഞ്ഞ കമ്പിയും' }
            ],
            [
              { en: 'Decreases the current', ml: 'വൈദ്യുത പ്രവാഹം കുറയ്ക്കുന്നു' },
              { en: 'Increases the current', ml: 'വൈദ്യുത പ്രവാഹം കൂട്ടുന്നു' }
            ]
          ]
        }
      },
      {
        type: 'formula',
        en: 'Vs / Vp = Ns / Np\n(Vs = Secondary Voltage, Vp = Primary Voltage, Ns = Secondary turns, Np = Primary turns)',
        ml: 'Vs / Vp = Ns / Np\n(Vs = സെക്കൻഡറി വോൾട്ടേജ്, Vp = പ്രൈമറി വോൾട്ടേജ്, Ns = സെക്കൻഡറി ചുറ്റുകൾ, Np = പ്രൈമറി ചുറ്റുകൾ)'
      },
      {
        type: 'formula',
        en: 'In an ideal transformer: Vp × Ip = Vs × Is (Input Power = Output Power)',
        ml: 'ഒരു ആദർശ ട്രാൻസ്ഫോർമറിൽ: Vp × Ip = Vs × Is (ഇൻപുട്ട് പവർ = ഔട്ട്പുട്ട് പവർ)'
      },
      {
        type: 'img',
        customId: 'transformer-simulation',
        en: 'Transformer Simulation',
        ml: 'ട്രാൻസ്ഫോർമർ സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: '5. Self Induction and Inductor',
        ml: '5. സെൽഫ് ഇൻഡക്ഷനും ഇൻഡക്റ്ററും'
      },
      {
        type: 'p',
        en: 'Self Induction: When the current flowing through a coil changes, the magnetic flux around it changes, inducing an EMF in the same coil. This is self-induction.',
        ml: 'സെൽഫ് ഇൻഡക്ഷൻ: ഒരു കമ്പിച്ചുരുളിലൂടെയുള്ള വൈദ്യുത പ്രവാഹത്തിൽ മാറ്റമുണ്ടാകുമ്പോൾ അതിനുചുറ്റുമുള്ള കാന്തിക ഫ്ലക്സിൽ മാറ്റമുണ്ടാകുകയും, അത് ആ കമ്പിച്ചുരുളിൽ തന്നെ ഒരു ഇ.എം.എഫ് പ്രേരിതമാക്കാൻ കാരണമാകുകയും ചെയ്യുന്നു. ഈ പ്രതിഭാസമാണ് സെൽഫ് ഇൻഡക്ഷൻ.'
      },
      {
        type: 'p',
        en: 'Inductor: An inductor is a component made by winding insulated copper wire over a soft iron core. It works on the principle of self-induction. Use: It is used to control AC current in a circuit without causing power loss (unlike a resistor which dissipates power as heat).',
        ml: 'ഇൻഡക്റ്റർ: പച്ചയിരുമ്പ് കോറിന് മുകളിൽ കവചിത ചെമ്പുകമ്പി ചുറ്റിയുണ്ടാക്കുന്ന ഉപകരണമാണ് ഇൻഡക്റ്റർ. ഇത് സെൽഫ് ഇൻഡക്ഷൻ തത്വത്തിലാണ് പ്രവർത്തിക്കുന്നത്. ഉപയോഗം: പവർ നഷ്ടം (താപമായി) ഉണ്ടാക്കാതെ ഒരു സർക്യൂട്ടിലെ AC പ്രവാഹത്തെ നിയന്ത്രിക്കാൻ ഇത് ഉപയോഗിക്കുന്നു.'
      },
      {
        type: 'h2',
        en: '6. Household Electrification',
        ml: '6. ഗാർഹിക വൈദ്യുതീകരണം'
      },
      {
        type: 'p',
        en: 'Electricity from the electric pole reaches our home through two wires: Phase line and Neutral line. Components in sequence: Watt-hour meter → Main switch → ELCB (Earth Leakage Circuit Breaker) / RCCB → MCB (Miniature Circuit Breaker) → Branch circuits.',
        ml: 'ഇലക്ട്രിക് പോസ്റ്റിൽ നിന്നും ഫേസ്, ന്യൂട്രൽ എന്നീ രണ്ട് ലൈനുകളിലൂടെയാണ് വൈദ്യുതി വീടുകളിൽ എത്തുന്നത്. ഉപകരണങ്ങളുടെ ക്രമം: വാട്ട്-അവർ മീറ്റർ → മെയിൻ സ്വിച്ച് → ഇ.എൽ.സി.ബി / ആർ.സി.സി.ബി → എം.സി.ബി → ബ്രാഞ്ച് സർക്യൂട്ടുകൾ.'
      },
      {
        type: 'p',
        en: 'Main Switch: Used to disconnect the entire household circuit from the power supply when needed. ELCB / RCCB: Automatically cuts off the power supply during an earth leakage or electric shock to ensure human safety. MCB: Automatically breaks the circuit if short circuit or overloading occurs.',
        ml: 'മെയിൻ സ്വിച്ച്: ആവശ്യമുള്ളപ്പോൾ വീടിന്റെ മുഴുവൻ സർക്യൂട്ടിലേക്കുമുള്ള വൈദ്യുത പ്രവാഹം വിച്ഛേദിക്കാൻ ഉപയോഗിക്കുന്നു. ഇ.എൽ.സി.ബി: ഷോക്കോ എർത്ത് ചോർച്ചയോ ഉണ്ടായാൽ സ്വയം സർക്യൂട്ട് വിച്ഛേദിച്ച് സുരക്ഷ ഉറപ്പാക്കുന്നു. എം.സി.ബി: ഷോർട്ട് സർക്യൂട്ടോ ഓവർലോഡിംഗോ ഉണ്ടായാൽ തനിയെ സർക്യൂട്ട് വിച്ഛേദിക്കുന്നു.'
      },
      {
        type: 'h3',
        en: 'Earthing and 3-Pin Plug',
        ml: 'എർത്തിംഗും ത്രീ പിൻ പ്ലഗും'
      },
      {
        type: 'p',
        en: 'Earthing: To prevent electric shocks from metallic bodies of appliances, the metallic body is connected to the earth. This is earthing. 3-Pin Plug: Has Earth (E), Live/Phase (L), and Neutral (N) pins.',
        ml: 'എർത്തിംഗ്: ലോഹനിർമ്മിതമായ ഉപകരണങ്ങളിൽ നിന്ന് ഷോക്കേൽക്കുന്നത് ഒഴിവാക്കാൻ ഉപകരണത്തിന്റെ പുറംഭാഗം എർത്തുമായി ബന്ധിപ്പിക്കുന്നു. ഇതാണ് എർത്തിംഗ്. ത്രീ പിൻ പ്ലഗ്: ഇതിൽ എർത്ത് (E), ലൈവ് അഥവാ ഫേസ് (L), ന്യൂട്രൽ (N) എന്നീ മൂന്ന് പിന്നുകളുണ്ട്.'
      },
      {
        type: 'p',
        en: 'The Earth pin is thicker and longer. It is longer so that it connects to the earth terminal first before the phase and neutral connect, ensuring safety. It is thicker so that it cannot be mistakenly inserted into the phase or neutral holes.',
        ml: 'എർത്ത് പിന്നിന് നീളവും വണ്ണവും കൂടുതലാണ്. പ്ലഗ് കുത്തുമ്പോൾ ആദ്യം എർത്തുമായി ബന്ധം സ്ഥാപിക്കാനും അതുവഴി സുരക്ഷ ഉറപ്പാക്കാനുമാണ് നീളം കൂടുതൽ നൽകിയിരിക്കുന്നത്. അബദ്ധത്തിൽ ഫേസിലോ ന്യൂട്രലിലോ കയറാതിരിക്കാനാണ് വണ്ണം കൂടുതൽ നൽകിയിരിക്കുന്നത്.'
      },
      {
        type: 'p',
        en: 'Colour Coding of Wires: Phase (Red/Brown), Neutral (Black/Light Blue), Earth (Green/Yellow-Green).',
        ml: 'വയറുകളുടെ നിറം: ഫേസ് (ചുവപ്പ്/ബ്രൗൺ), ന്യൂട്രൽ (കറുപ്പ്/ഇളം നീല), എർത്ത് (പച്ച/മഞ്ഞ കലർന്ന പച്ച).'
      },
      {
        type: 'img',
        customId: 'household-circuit-simulation',
        en: 'Household Circuit & Safety Simulation',
        ml: 'ഗാർഹിക സർക്യൂട്ട് സുരക്ഷാ സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: 'Concept Map',
        ml: 'ആശയ ഭൂപടം'
      },
      {
        type: 'p',
        en: 'Electromagnetic Induction -> Induced EMF -> AC/DC Generators. Mutual Induction -> Transformers (Step-up/Step-down). Self Induction -> Inductors. Household Circuit -> Watt-hour meter -> Main Switch -> ELCB -> MCB.',
        ml: 'വൈദ്യുതകാന്തിക പ്രേരണം -> പ്രേരിത ഇ.എം.എഫ് -> AC/DC ജനറേറ്ററുകൾ. മ്യൂച്വൽ ഇൻഡക്ഷൻ -> ട്രാൻസ്ഫോർമറുകൾ (സ്റ്റെപ്പ് അപ്പ്/സ്റ്റെപ്പ് ഡൗൺ). സെൽഫ് ഇൻഡക്ഷൻ -> ഇൻഡക്റ്ററുകൾ. ഗാർഹിക സർക്യൂട്ട് -> വാട്ട്-അവർ മീറ്റർ -> മെയിൻ സ്വിച്ച് -> ഇ.എൽ.സി.ബി -> എം.സി.ബി.'
      },
      {
        type: 'h2',
        en: 'Quick Revision',
        ml: 'ദ്രുത പുനരവലോകനം'
      },
      {
        type: 'p',
        en: '• Electromagnetic Induction: Inducing EMF by changing magnetic flux.\n• Generator: Converts mechanical energy to electrical energy (AC or DC).\n• Transformer: Changes AC voltage without power loss (Mutual Induction).\n• Inductor: Controls AC without power loss (Self Induction).\n• Safety Devices: ELCB (Earth leakage), MCB (Short circuit/Overload), Earthing.',
        ml: '• വൈദ്യുതകാന്തിക പ്രേരണം: കാന്തിക ഫ്ലക്സിലെ മാറ്റം വഴി ഇ.എം.എഫ് പ്രേരിതമാക്കുന്നു.\n• ജനറേറ്റർ: യാന്ത്രികോർജ്ജത്തെ വൈദ്യുതോർജ്ജമാക്കുന്നു (AC അല്ലെങ്കിൽ DC).\n• ട്രാൻസ്ഫോർമർ: പവർ നഷ്ടമില്ലാതെ AC വോൾട്ടേജ് മാറ്റുന്നു (മ്യൂച്വൽ ഇൻഡക്ഷൻ).\n• ഇൻഡക്റ്റർ: പവർ നഷ്ടമില്ലാതെ AC നിയന്ത്രിക്കുന്നു (സെൽഫ് ഇൻഡക്ഷൻ).\n• സുരക്ഷാ ഉപകരണങ്ങൾ: ഇ.എൽ.സി.ബി (എർത്ത് ചോർച്ച), എം.സി.ബി (ഷോർട്ട് സർക്യൂട്ട്/ഓവർലോഡ്), എർത്തിംഗ്.'
      },
      {
        type: 'h2',
        en: 'Teacher Notes',
        ml: 'അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ'
      },
      {
        type: 'p',
        en: '• Use the simulations to clearly demonstrate the difference between AC (slip rings) and DC (split rings) generators.\n• Emphasize why transformers only work on AC.\n• Discuss real-life examples of household safety devices tripping and the reasons behind it.',
        ml: '• AC (സ്ലിപ്പ് റിംഗുകൾ), DC (സ്പ്ലിറ്റ് റിംഗുകൾ) ജനറേറ്ററുകൾ തമ്മിലുള്ള വ്യത്യാസം വ്യക്തമാക്കാൻ സിമുലേഷനുകൾ ഉപയോഗിക്കുക.\n• ട്രാൻസ്ഫോർമറുകൾ AC യിൽ മാത്രം പ്രവർത്തിക്കുന്നത് എന്തുകൊണ്ടാണെന്ന് ഊന്നിപ്പറയുക.\n• ഗാർഹിക സുരക്ഷാ ഉപകരണങ്ങൾ ട്രിപ്പ് ആകുന്നതിന്റെ യഥാർത്ഥ ജീവിത ഉദാഹരണങ്ങളും അതിന് പിന്നിലെ കാരണങ്ങളും ചർച്ച ചെയ്യുക.'
      },
      {
        type: 'h2',
        en: 'Student Summary Sheet',
        ml: 'വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ കുറിപ്പ്'
      },
      {
        type: 'p',
        en: '1. What is Electromagnetic Induction? (Definition & factors affecting EMF)\n2. Working of AC vs DC Generator (Parts & differences)\n3. Transformer (Step-up vs Step-down, Principle)\n4. Household Circuit (Sequence of devices & safety functions)',
        ml: '1. വൈദ്യുതകാന്തിക പ്രേരണം എന്നാൽ എന്ത്? (നിർവചനവും ഇ.എം.എഫിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങളും)\n2. AC, DC ജനറേറ്ററുകളുടെ പ്രവർത്തനം (ഭാഗങ്ങളും വ്യത്യാസങ്ങളും)\n3. ട്രാൻസ്ഫോർമർ (സ്റ്റെപ്പ് അപ്പ്, സ്റ്റെപ്പ് ഡൗൺ, പ്രവർത്തന തത്വം)\n4. ഗാർഹിക സർക്യൂട്ട് (ഉപകരണങ്ങളുടെ ക്രമവും സുരക്ഷാ ധർമ്മങ്ങളും)'
      }
    ]
  },
  quiz: [
    {
      q_id: 'q1',
      type: 'mcq',
      stem: {
        en: 'What is the working principle of an electric generator?',
        ml: 'ഒരു വൈദ്യുത ജനറേറ്ററിന്റെ പ്രവർത്തന തത്വം എന്ത്?'
      },
      options: [
        { k: 'A', text: { en: 'Motor principle', ml: 'മോട്ടോർ തത്വം' } },
        { k: 'B', text: { en: 'Electromagnetic induction', ml: 'വൈദ്യുതകാന്തിക പ്രേരണം' } },
        { k: 'C', text: { en: 'Self induction', ml: 'സെൽഫ് ഇൻഡക്ഷൻ' } },
        { k: 'D', text: { en: 'Joule heating', ml: 'ജൂൾ താപനം' } }
      ],
      answer: 'B',
      explanation: {
        en: 'An electric generator works on the principle of electromagnetic induction, converting mechanical energy into electrical energy.',
        ml: 'വൈദ്യുത ജനറേറ്റർ വൈദ്യുതകാന്തിക പ്രേരണം എന്ന തത്വത്തിലാണ് പ്രവർത്തിക്കുന്നത്. ഇത് യാന്ത്രികോർജ്ജത്തെ വൈദ്യുതോർജ്ജമാക്കി മാറ്റുന്നു.'
      }
    },
    {
      q_id: 'q2',
      type: 'mcq',
      stem: {
        en: 'Which component is used in a DC generator instead of slip rings?',
        ml: 'DC ജനറേറ്ററിൽ സ്ലിപ്പ് റിംഗുകൾക്ക് പകരം ഉപയോഗിക്കുന്ന ഭാഗം ഏത്?'
      },
      options: [
        { k: 'A', text: { en: 'Armature', ml: 'ആർമേച്ചർ' } },
        { k: 'B', text: { en: 'Field magnet', ml: 'ഫീൽഡ് കാന്തം' } },
        { k: 'C', text: { en: 'Split ring commutator', ml: 'സ്പ്ലിറ്റ് റിംഗ് കമ്യൂട്ടേറ്റർ' } },
        { k: 'D', text: { en: 'Inductor', ml: 'ഇൻഡക്റ്റർ' } }
      ],
      answer: 'C',
      explanation: {
        en: 'A split ring commutator is used in a DC generator to reverse the current direction every half rotation, ensuring direct current output.',
        ml: 'DC ജനറേറ്ററിൽ സ്ലിപ്പ് റിംഗുകൾക്ക് പകരം സ്പ്ലിറ്റ് റിംഗ് കമ്യൂട്ടേറ്ററാണ് ഉപയോഗിക്കുന്നത്. ഇത് ഒരേ ദിശയിലുള്ള വൈദ്യുത പ്രവാഹം (DC) ഉറപ്പാക്കുന്നു.'
      }
    },
    {
      q_id: 'q3',
      type: 'mcq',
      stem: {
        en: 'What is the phenomenon where a change in current in one coil induces an EMF in an adjacent coil?',
        ml: 'ഒരു കമ്പിച്ചുരുളിലെ വൈദ്യുത പ്രവാഹത്തിൽ മാറ്റമുണ്ടാകുമ്പോൾ അടുത്തുള്ള കമ്പിച്ചുരുളിൽ ഇ.എം.എഫ് പ്രേരിതമാകുന്ന പ്രതിഭാസത്തിന്റെ പേരെന്ത്?'
      },
      options: [
        { k: 'A', text: { en: 'Self induction', ml: 'സെൽഫ് ഇൻഡക്ഷൻ' } },
        { k: 'B', text: { en: 'Mutual induction', ml: 'മ്യൂച്വൽ ഇൻഡക്ഷൻ' } },
        { k: 'C', text: { en: 'Electromagnetic induction', ml: 'വൈദ്യുതകാന്തിക പ്രേരണം' } },
        { k: 'D', text: { en: 'Magnetic effect', ml: 'കാന്തിക ഫലം' } }
      ],
      answer: 'B',
      explanation: {
        en: 'Mutual induction is the phenomenon where a change in current in the primary coil induces an EMF in the secondary coil.',
        ml: 'പ്രൈമറി കോയിലിലെ വൈദ്യുത പ്രവാഹത്തിൽ മാറ്റം ഉണ്ടാകുമ്പോൾ, സെക്കൻഡറി കോയിലിൽ ഒരു ഇ.എം.എഫ് പ്രേരിതമാകുന്ന പ്രതിഭാസമാണ് മ്യൂച്വൽ ഇൻഡക്ഷൻ.'
      }
    },
    {
      q_id: 'q4',
      type: 'mcq',
      stem: {
        en: 'Will a transformer work if connected to a DC battery?',
        ml: 'ഒരു ട്രാൻസ്ഫോർമർ DC ബാറ്ററിയിൽ ഘടിപ്പിച്ചാൽ പ്രവർത്തിക്കുമോ?'
      },
      options: [
        { k: 'A', text: { en: 'Yes, perfectly', ml: 'അതെ, നന്നായി പ്രവർത്തിക്കും' } },
        { k: 'B', text: { en: 'Yes, but with low efficiency', ml: 'അതെ, പക്ഷേ കാര്യക്ഷമത കുറവായിരിക്കും' } },
        { k: 'C', text: { en: 'No, it only works on AC', ml: 'ഇല്ല, ഇത് AC യിൽ മാത്രമേ പ്രവർത്തിക്കൂ' } },
        { k: 'D', text: { en: 'Depends on the voltage', ml: 'വോൾട്ടേജിനെ ആശ്രയിച്ചിരിക്കും' } }
      ],
      answer: 'C',
      explanation: {
        en: 'A transformer works on mutual induction, which requires a constantly changing magnetic field. DC provides a steady current, so no EMF is induced.',
        ml: 'ട്രാൻസ്ഫോർമർ മ്യൂച്വൽ ഇൻഡക്ഷൻ തത്വത്തിലാണ് പ്രവർത്തിക്കുന്നത്. ഇതിന് തുടർച്ചയായി മാറിക്കൊണ്ടിരിക്കുന്ന കാന്തികമണ്ഡലം ആവശ്യമാണ്. DC യ്ക്ക് അത് സൃഷ്ടിക്കാൻ കഴിയില്ല.'
      }
    },
    {
      q_id: 'q5',
      type: 'mcq',
      stem: {
        en: 'What is the correct sequence of devices in a household electrical circuit?',
        ml: 'ഗാർഹിക വൈദ്യുത സർക്യൂട്ടിലെ ഉപകരണങ്ങളുടെ ശരിയായ ക്രമം ഏത്?'
      },
      options: [
        { k: 'A', text: { en: 'Main switch → Watt-hour meter → MCB → ELCB', ml: 'മെയിൻ സ്വിച്ച് → വാട്ട്-അവർ മീറ്റർ → എം.സി.ബി → ഇ.എൽ.സി.ബി' } },
        { k: 'B', text: { en: 'Watt-hour meter → Main switch → ELCB → MCB', ml: 'വാട്ട്-അവർ മീറ്റർ → മെയിൻ സ്വിച്ച് → ഇ.എൽ.സി.ബി → എം.സി.ബി' } },
        { k: 'C', text: { en: 'ELCB → MCB → Main switch → Watt-hour meter', ml: 'ഇ.എൽ.സി.ബി → എം.സി.ബി → മെയിൻ സ്വിച്ച് → വാട്ട്-അവർ മീറ്റർ' } },
        { k: 'D', text: { en: 'Watt-hour meter → MCB → ELCB → Main switch', ml: 'വാട്ട്-അവർ മീറ്റർ → എം.സി.ബി → ഇ.എൽ.സി.ബി → മെയിൻ സ്വിച്ച്' } }
      ],
      answer: 'B',
      explanation: {
        en: 'The correct sequence is: Watt-hour meter → Main switch → ELCB → MCB → Branch circuits.',
        ml: 'ശരിയായ ക്രമം: വാട്ട്-അവർ മീറ്റർ → മെയിൻ സ്വിച്ച് → ഇ.എൽ.സി.ബി → എം.സി.ബി → ബ്രാഞ്ച് സർക്യൂട്ടുകൾ.'
      }
    }
  ],
  glossary: [
    {
      term: { en: 'Electromagnetic Induction', ml: 'വൈദ്യുതകാന്തിക പ്രേരണം' },
      definition: {
        en: 'The phenomenon of inducing an electromotive force (EMF) in a coil due to relative motion between a magnet and the coil.',
        ml: 'ഒരു കാന്തവും കമ്പിച്ചുരുളും തമ്മിൽ ആപേക്ഷിക ചലനം ഉണ്ടാകുമ്പോൾ കമ്പിച്ചുരുളിൽ ഒരു ഇ.എം.എഫ് പ്രേരിതമാകുന്ന പ്രതിഭാസം.'
      }
    },
    {
      term: { en: 'Mutual Induction', ml: 'മ്യൂച്വൽ ഇൻഡക്ഷൻ' },
      definition: {
        en: 'The phenomenon where a change in current in the primary coil induces an EMF in the secondary coil.',
        ml: 'പ്രൈമറി കോയിലിലെ വൈദ്യുത പ്രവാഹത്തിൽ മാറ്റം ഉണ്ടാകുമ്പോൾ, സെക്കൻഡറി കോയിലിൽ ഒരു ഇ.എം.എഫ് പ്രേരിതമാകുന്ന പ്രതിഭാസം.'
      }
    },
    {
      term: { en: 'Self Induction', ml: 'സെൽഫ് ഇൻഡക്ഷൻ' },
      definition: {
        en: 'The phenomenon where a change in current in a coil induces an EMF in the same coil.',
        ml: 'ഒരു കമ്പിച്ചുരുളിലൂടെയുള്ള വൈദ്യുത പ്രവാഹത്തിൽ മാറ്റമുണ്ടാകുമ്പോൾ ആ കമ്പിച്ചുരുളിൽ തന്നെ ഒരു ഇ.എം.എഫ് പ്രേരിതമാകുന്ന പ്രതിഭാസം.'
      }
    },
    {
      term: { en: 'Transformer', ml: 'ട്രാൻസ്ഫോർമർ' },
      definition: {
        en: 'A device used to increase or decrease AC voltage without power loss, working on the principle of mutual induction.',
        ml: 'പവർ നഷ്ടമില്ലാതെ AC വോൾട്ടേജ് കൂട്ടാനോ കുറയ്ക്കാനോ ഉപയോഗിക്കുന്ന ഉപകരണം.'
      }
    },
    {
      term: { en: 'ELCB', ml: 'ഇ.എൽ.സി.ബി' },
      definition: {
        en: 'Earth Leakage Circuit Breaker. A safety device that automatically cuts off the power supply during an earth leakage or electric shock.',
        ml: 'ഷോക്കോ എർത്ത് ചോർച്ചയോ ഉണ്ടായാൽ സ്വയം സർക്യൂട്ട് വിച്ഛേദിച്ച് സുരക്ഷ ഉറപ്പാക്കുന്ന ഉപകരണം.'
      }
    }
  ]
};
