import { Lesson } from './curriculum';

export const physicsUnit7: Lesson = {
  id: 'sc-phy-10-unit-7',
  title: {
    en: 'Chapter 7: Mechanical Advantage in Action',
    ml: 'അധ്യായം 7: യാന്ത്രികലാഭം പ്രവൃത്തിയിൽ'
  },
  estimated_time_mins: 60,
  learning_objectives: [
    {
      id: 'lo1',
      text: {
        en: 'Understand the concept of simple machines and how they make work easier.',
        ml: 'ലഘുയന്ത്രങ്ങൾ എന്ന ആശയവും അവ എങ്ങനെ പ്രവൃത്തി എളുപ്പമാക്കുന്നുവെന്നും മനസ്സിലാക്കുക.'
      }
    },
    {
      id: 'lo2',
      text: {
        en: 'Define and calculate Mechanical Advantage (MA), Velocity Ratio (VR), and Efficiency.',
        ml: 'യാന്ത്രികലാഭം (MA), പ്രവേഗ അനുപാതം (VR), ക്ഷമത എന്നിവ നിർവചിക്കുകയും കണക്കാക്കുകയും ചെയ്യുക.'
      }
    },
    {
      id: 'lo3',
      text: {
        en: 'Classify levers into first, second, and third classes based on the position of fulcrum, load, and effort.',
        ml: 'ആധാരബിന്ദു, ഭാരം, യത്നം എന്നിവയുടെ സ്ഥാനത്തെ അടിസ്ഥാനമാക്കി ഉത്തോലകങ്ങളെ ഒന്നാം, രണ്ടാം, മൂന്നാം വർഗ്ഗങ്ങളായി തരംതിരിക്കുക.'
      }
    },
    {
      id: 'lo4',
      text: {
        en: 'Explain the working of fixed pulleys, movable pulleys, and pulley blocks.',
        ml: 'സ്ഥിരകപ്പി, ചലനക്കപ്പി, കപ്പി വ്യൂഹം എന്നിവയുടെ പ്രവർത്തനം വിശദീകരിക്കുക.'
      }
    },
    {
      id: 'lo5',
      text: {
        en: 'Understand the principles of wheel and axle, and gears.',
        ml: 'ചക്രവും അച്ചുതണ്ടും, ഗിയറുകൾ എന്നിവയുടെ തത്വങ്ങൾ മനസ്സിലാക്കുക.'
      }
    }
  ],
  content: {
    intro: {
      en: 'This chapter explores simple machines like levers, pulleys, and gears, and how they multiply force or speed to make our daily tasks easier.',
      ml: 'ഉത്തോലകങ്ങൾ, കപ്പികൾ, ഗിയറുകൾ തുടങ്ങിയ ലഘുയന്ത്രങ്ങളെക്കുറിച്ചും അവ എങ്ങനെ ബലമോ വേഗതയോ വർദ്ധിപ്പിച്ച് നമ്മുടെ ദൈനംദിന ജോലികൾ എളുപ്പമാക്കുന്നുവെന്നും ഈ അധ്യായം വിശദീകരിക്കുന്നു.'
    },
    core: {
      en: '',
      ml: ''
    },
    blocks: [
      {
        type: 'h2',
        en: '1. Simple Machines',
        ml: '1. ലഘുയന്ത്രങ്ങൾ'
      },
      {
        type: 'p',
        en: 'Devices that make our work easier are called simple machines. They help to overcome a large resistance (Load) by applying a small force (Effort).',
        ml: 'നമ്മുടെ പ്രവൃത്തി എളുപ്പമാക്കാൻ സഹായിക്കുന്ന ഉപകരണങ്ങളാണ് ലഘുയന്ത്രങ്ങൾ. ചെറിയ ബലം (യത്നം/Effort) ഉപയോഗിച്ച് വലിയൊരു പ്രതിരോധത്തെ (ഭാരം/Load) മറികടക്കാൻ ഇവ സഹായിക്കുന്നു.'
      },
      {
        type: 'img',
        customId: 'inclined-plane-simulation',
        en: 'Figure 7.1 shows an inclined plane used to load a lorry. Using an inclined plane reduces the effort needed to lift heavy objects.',
        ml: 'ചിത്രം 7.1 ഒരു ലോറിയിൽ ഭാരം കയറ്റാൻ ചരിവുതലം ഉപയോഗിക്കുന്നത് കാണിക്കുന്നു. ചരിവുതലം ഉപയോഗിക്കുന്നത് ഭാരമുള്ള വസ്തുക്കൾ ഉയർത്താൻ ആവശ്യമായ യത്നം കുറയ്ക്കുന്നു.'
      },
      {
        type: 'h2',
        en: '2. Terms Related to Simple Machines',
        ml: '2. ലഘുയന്ത്രങ്ങളുമായി ബന്ധപ്പെട്ട പദങ്ങൾ'
      },
      {
        type: 'p',
        en: '• **Effort (E)**: The force applied on a machine to do work is called effort.\n• **Load (L)**: The resistance overcome by the machine is called load.',
        ml: '• **യത്നം (E)**: ഒരു യന്ത്രത്തിൽ പ്രവൃത്തി ചെയ്യാൻ നമ്മൾ പ്രയോഗിക്കുന്ന ബലമാണ് യത്നം.\n• **ഭാരം (L)**: യന്ത്രം ഉപയോഗിച്ച് നാം മറികടക്കുന്ന പ്രതിരോധത്തെയാണ് ഭാരം എന്ന് പറയുന്നത്.'
      },
      {
        type: 'h2',
        en: '3. Mechanical Advantage and Velocity Ratio',
        ml: '3. യാന്ത്രികലാഭവും പ്രവേഗ അനുപാതവും'
      },
      {
        type: 'h3',
        en: 'Mechanical Advantage (MA)',
        ml: 'യാന്ത്രികലാഭം (MA)'
      },
      {
        type: 'p',
        en: 'It is the ratio of the Load to the Effort applied. It has no unit because it is a ratio of two forces.',
        ml: 'ഭാരവും യത്നവും തമ്മിലുള്ള അംശബന്ധമാണ് യാന്ത്രികലാഭം. ഇതൊരു അംശബന്ധമായതിനാൽ ഇതിന് യൂണിറ്റ് ഇല്ല.'
      },
      {
        type: 'formula',
        en: 'Mechanical Advantage (MA) = Load (L) / Effort (E)',
        ml: 'യാന്ത്രികലാഭം (MA) = ഭാരം (L) / യത്നം (E)'
      },
      {
        type: 'h3',
        en: 'Velocity Ratio (VR)',
        ml: 'പ്രവേഗ അനുപാതം (VR)'
      },
      {
        type: 'p',
        en: 'Velocity ratio is the ratio of the distance travelled by the effort to the distance travelled by the load.',
        ml: 'യത്നം സഞ്ചരിച്ച ദൂരവും ഭാരം സഞ്ചരിച്ച ദൂരവും തമ്മിലുള്ള അംശബന്ധമാണ് പ്രവേഗ അനുപാതം.'
      },
      {
        type: 'formula',
        en: 'Velocity Ratio (VR) = Distance travelled by effort (d_E) / Distance travelled by load (d_L)',
        ml: 'പ്രവേഗ അനുപാതം (VR) = യത്നം സഞ്ചരിച്ച ദൂരം (d_E) / ഭാരം സഞ്ചരിച്ച ദൂരം (d_L)'
      },
      {
        type: 'h2',
        en: '4. Efficiency of a Machine',
        ml: '4. യന്ത്രത്തിന്റെ ക്ഷമത'
      },
      {
        type: 'p',
        en: 'Efficiency is the ratio of useful work output to the work input, expressed as a percentage. The efficiency of a practical machine is always less than 100% due to friction and the weight of the moving parts of the machine.',
        ml: 'ലഭ്യമായ പ്രവൃത്തിയും (Work output) നൽകിയ പ്രവൃത്തിയും (Work input) തമ്മിലുള്ള അംശബന്ധത്തിന്റെ ശതമാനമാണ് ക്ഷമത. ഘർഷണം (friction), യന്ത്രഭാഗങ്ങളുടെ ഭാരം എന്നിവ കാരണം ഒരു പ്രായോഗിക യന്ത്രത്തിന്റെ ക്ഷമത എപ്പോഴും 100% ൽ താഴെയായിരിക്കും.'
      },
      {
        type: 'formula',
        en: 'Efficiency = (Work Output / Work Input) × 100\nEfficiency = (Mechanical Advantage (MA) / Velocity Ratio (VR)) × 100',
        ml: 'ക്ഷമത = (ലഭ്യമായ പ്രവൃത്തി / നൽകിയ പ്രവൃത്തി) × 100\nക്ഷമത = (യാന്ത്രികലാഭം (MA) / പ്രവേഗ അനുപാതം (VR)) × 100'
      },
      {
        type: 'h2',
        en: '5. Levers',
        ml: '5. ഉത്തോലകങ്ങൾ'
      },
      {
        type: 'p',
        en: 'A lever is a rigid bar that can rotate freely about a fixed point called the fulcrum.',
        ml: 'ആധാരബിന്ദുവിനെ (Fulcrum) അടിസ്ഥാനമാക്കി സ്വതന്ത്രമായി കറങ്ങാൻ കഴിയുന്ന ദൃഢമായ ദണ്ഡാണ് ഉത്തോലകം.'
      },
      {
        type: 'table',
        tableData: {
          headers: [
            { en: 'Class of Lever', ml: 'ഉത്തോലക വർഗ്ഗം' },
            { en: 'Position', ml: 'സ്ഥാനം' },
            { en: 'Examples', ml: 'ഉദാഹരണങ്ങൾ' },
            { en: 'Mechanical Advantage', ml: 'യാന്ത്രികലാഭം' }
          ],
          rows: [
            [
              { en: 'First Class Lever', ml: 'ഒന്നാം വർഗ്ഗ ഉത്തോലകം' },
              { en: 'Fulcrum is between Load and Effort.', ml: 'ആധാരബിന്ദു ഭാരത്തിനും യത്നത്തിനും ഇടയിലായിരിക്കും' },
              { en: 'Scissors, See-saw, Crowbar.', ml: 'കത്രിക, സീ-സോ, കടപ്പാര' },
              { en: 'Can be > 1, = 1, or < 1.', ml: 'ഒന്നിൽ കൂടുതലോ ഒന്നോ ഒന്നിൽ കുറവോ ആകാം' }
            ],
            [
              { en: 'Second Class Lever', ml: 'രണ്ടാം വർഗ്ഗ ഉത്തോലകം' },
              { en: 'Load is between Fulcrum and Effort.', ml: 'ഭാരം ആധാരബിന്ദുവിനും യത്നത്തിനും ഇടയിലായിരിക്കും' },
              { en: 'Nutcracker, Wheelbarrow, Lemon squeezer.', ml: 'പാക്കുവെട്ടി, വീൽബാരോ, നാരങ്ങ പിഴിയുന്ന ഉപകരണം' },
              { en: 'Always greater than 1 (MA > 1).', ml: 'എപ്പോഴും ഒന്നിൽ കൂടുതലായിരിക്കും (MA > 1)' }
            ],
            [
              { en: 'Third Class Lever', ml: 'മൂന്നാം വർഗ്ഗ ഉത്തോലകം' },
              { en: 'Effort is between Fulcrum and Load.', ml: 'യത്നം ആധാരബിന്ദുവിനും ഭാരത്തിനും ഇടയിലായിരിക്കും' },
              { en: 'Tongs, Fishing rod, Tweezers.', ml: 'ചവണ, ചൂണ്ടക്കാമ്പ്, ട്വീസർ' },
              { en: 'Always less than 1 (MA < 1).', ml: 'എപ്പോഴും ഒന്നിൽ കുറവായിരിക്കും (MA < 1)' }
            ]
          ]
        }
      },
      {
        type: 'img',
        customId: 'lever-simulation',
        en: 'Interactive Lever Simulation',
        ml: 'ഇന്ററാക്ടീവ് ഉത്തോലക സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: '6. Pulleys',
        ml: '6. കപ്പികൾ'
      },
      {
        type: 'p',
        en: '• **Fixed Pulley**: The axis of rotation of this pulley is fixed. It does not reduce the effort needed but it changes the direction of the effort to a convenient downward direction. (MA = 1, VR = 1).\n• **Movable Pulley**: The axis of rotation of this pulley moves along with the load. It reduces the applied effort to half of the load. (MA = 2, VR = 2).\n• **Pulley Block / Block and Tackle**: A combination of fixed and movable pulleys. If there are \'n\' pulleys in the system, its Mechanical Advantage and Velocity Ratio will be \'n\'.',
        ml: '• **സ്ഥിരകപ്പി**: ഇതിൽ കറങ്ങുന്ന അച്ചുതണ്ട് സ്ഥിരമായിരിക്കും. ഇത് ഉപയോഗിക്കേണ്ട യത്നത്തിന്റെ അളവ് കുറയ്ക്കുന്നില്ല, മറിച്ച് യത്നം പ്രയോഗിക്കേണ്ട ദിശ സൗകര്യപ്രദമായി താഴേക്ക് മാറ്റാൻ സഹായിക്കുന്നു. (MA = 1, VR = 1).\n• **ചലനക്കപ്പി**: ഇതിൽ കറങ്ങുന്ന അച്ചുതണ്ട് ഭാരത്തോടൊപ്പം ചലിക്കുന്നു. ഈ സംവിധാനം ഉപയോഗിക്കേണ്ട യത്നത്തെ ഭാരത്തിന്റെ പകുതിയായി കുറയ്ക്കുന്നു. (MA = 2, VR = 2).\n• **കപ്പി വ്യൂഹം**: ഒന്നിലധികം സ്ഥിരകപ്പികളും ചലനക്കപ്പികളും ചേർന്ന സംവിധാനം. ഇതിൽ \'n\' കപ്പികൾ ഉണ്ടെങ്കിൽ, ആ വ്യൂഹത്തിന്റെ യാന്ത്രികലാഭവും പ്രവേഗ അനുപാതവും \'n\' ആയിരിക്കും.'
      },
      {
        type: 'img',
        customId: 'pulley-simulation',
        en: 'Interactive Pulley Simulation',
        ml: 'ഇന്ററാക്ടീവ് കപ്പി സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: '7. Wheel and Axle',
        ml: '7. ചക്രവും അച്ചുതണ്ടും'
      },
      {
        type: 'p',
        en: 'It consists of a wheel attached to a smaller cylindrical axle so that these two parts rotate together in the same direction. When effort is applied to the larger wheel, it overcomes a heavy load on the smaller axle. Therefore, the Mechanical Advantage is greater than 1. Examples: Steering wheel of a car, Screwdriver, Doorknob.',
        ml: 'ചെറിയൊരു സിലിണ്ടർ ആകൃതിയിലുള്ള അച്ചുതണ്ടുമായി (axle) ബന്ധിപ്പിച്ച ചക്രം അടങ്ങിയ സംവിധാനമാണിത്. ഇവ രണ്ടും ഒരേ ദിശയിൽ ഒരുമിച്ച് കറങ്ങുന്നു. വലിയ ചക്രത്തിൽ യത്നം പ്രയോഗിക്കുമ്പോൾ ചെറിയ അച്ചുതണ്ടിലെ വലിയ ഭാരത്തെ മറികടക്കാൻ സാധിക്കുന്നു. അതിനാൽ ഇതിന്റെ യാന്ത്രികലാഭം എപ്പോഴും ഒന്നിൽ കൂടുതലാണ്. ഉദാഹരണങ്ങൾ: കാറിന്റെ സ്റ്റിയറിംഗ് വീൽ, സ്ക്രൂഡ്രൈവർ, ഡോർ നോബ്.'
      },
      {
        type: 'h2',
        en: '8. Gears',
        ml: '8. ഗിയറുകൾ'
      },
      {
        type: 'p',
        en: 'Gears are toothed wheels used to transmit power and motion from one part of a machine to another.\n• When a larger gear drives a smaller gear: Speed increases, but the turning effect (torque) decreases.\n• When a smaller gear drives a larger gear: Speed decreases, but the turning effect (torque) increases.',
        ml: 'ഒരു യന്ത്രത്തിന്റെ ഒരു ഭാഗത്തുനിന്ന് മറ്റൊരു ഭാഗത്തേക്ക് പവറും ചലനവും പ്രേഷണം ചെയ്യാൻ ഉപയോഗിക്കുന്ന പല്ലുകളുള്ള ചക്രങ്ങളാണ് ഗിയറുകൾ.\n• വലിയ ഗിയർ ചെറിയ ഗിയറിനെ കറക്കുമ്പോൾ: വേഗത കൂടുകയും എന്നാൽ കറക്കാനുള്ള ശേഷി (ടോർക്ക്) കുറയുകയും ചെയ്യുന്നു.\n• ചെറിയ ഗിയർ വലിയ ഗിയറിനെ കറക്കുമ്പോൾ: വേഗത കുറയുകയും എന്നാൽ കറക്കാനുള്ള ശേഷി (ടോർക്ക്) കൂടുകയും ചെയ്യുന്നു.'
      },
      {
        type: 'img',
        customId: 'gear-simulation',
        en: 'Interactive Gear Simulation',
        ml: 'ഇന്ററാക്ടീവ് ഗിയർ സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: 'Concept Map',
        ml: 'ആശയ ഭൂപടം'
      },
      {
        type: 'p',
        en: 'Simple Machines -> Make work easier. Types: Levers (Class 1, 2, 3), Pulleys (Fixed, Movable, Block & Tackle), Wheel & Axle, Gears. Key Terms: Effort, Load, Mechanical Advantage (MA), Velocity Ratio (VR), Efficiency.',
        ml: 'ലഘുയന്ത്രങ്ങൾ -> പ്രവൃത്തി എളുപ്പമാക്കുന്നു. ഇനങ്ങൾ: ഉത്തോലകങ്ങൾ (വർഗ്ഗം 1, 2, 3), കപ്പികൾ (സ്ഥിരകപ്പി, ചലനക്കപ്പി, കപ്പി വ്യൂഹം), ചക്രവും അച്ചുതണ്ടും, ഗിയറുകൾ. പ്രധാന പദങ്ങൾ: യത്നം, ഭാരം, യാന്ത്രികലാഭം (MA), പ്രവേഗ അനുപാതം (VR), ക്ഷമത.'
      },
      {
        type: 'h2',
        en: 'Quick Revision',
        ml: 'ദ്രുത പുനരവലോകനം'
      },
      {
        type: 'p',
        en: '• MA = Load / Effort. VR = Effort distance / Load distance.\n• Efficiency is always < 100% due to friction.\n• Class 1 Lever: Fulcrum in middle (e.g., Scissors).\n• Class 2 Lever: Load in middle, MA > 1 (e.g., Nutcracker).\n• Class 3 Lever: Effort in middle, MA < 1 (e.g., Tongs).\n• Fixed Pulley: Changes direction, MA=1. Movable Pulley: Halves effort, MA=2.\n• Gears: Small drives large -> Speed decreases, Torque increases.',
        ml: '• MA = ഭാരം / യത്നം. VR = യത്നം സഞ്ചരിച്ച ദൂരം / ഭാരം സഞ്ചരിച്ച ദൂരം.\n• ഘർഷണം കാരണം ക്ഷമത എപ്പോഴും 100% ൽ താഴെയായിരിക്കും.\n• ഒന്നാം വർഗ്ഗ ഉത്തോലകം: ആധാരബിന്ദു നടുവിൽ (ഉദാ: കത്രിക).\n• രണ്ടാം വർഗ്ഗ ഉത്തോലകം: ഭാരം നടുവിൽ, MA > 1 (ഉദാ: പാക്കുവെട്ടി).\n• മൂന്നാം വർഗ്ഗ ഉത്തോലകം: യത്നം നടുവിൽ, MA < 1 (ഉദാ: ചവണ).\n• സ്ഥിരകപ്പി: ദിശ മാറ്റുന്നു, MA=1. ചലനക്കപ്പി: യത്നം പകുതിയാക്കുന്നു, MA=2.\n• ഗിയറുകൾ: ചെറുത് വലുതിനെ കറക്കുമ്പോൾ -> വേഗത കുറയുന്നു, ടോർക്ക് കൂടുന്നു.'
      },
      {
        type: 'h2',
        en: 'Additional Practice Questions',
        ml: 'കൂടുതൽ പരിശീലന ചോദ്യങ്ങൾ'
      },
      {
        type: 'h3',
        en: 'Assertion - Reason Questions',
        ml: 'പ്രസ്താവന - കാരണ ചോദ്യങ്ങൾ'
      },
      {
        type: 'p',
        en: '**1. Assertion (A):** The mechanical advantage of a class II lever is always greater than 1.\n**Reason (R):** In a class II lever, the effort arm is always longer than the load arm.\n*Answer:* Both A and R are true, and R is the correct explanation of A.',
        ml: '**1. പ്രസ്താവന (A):** രണ്ടാം വർഗ്ഗ ഉത്തോലകത്തിന്റെ യാന്ത്രികലാഭം എപ്പോഴും 1-നേക്കാൾ കൂടുതലായിരിക്കും.\n**കാരണം (R):** രണ്ടാം വർഗ്ഗ ഉത്തോലകത്തിൽ, യത്നഭുജം എപ്പോഴും ഭാരഭുജത്തേക്കാൾ നീളമുള്ളതായിരിക്കും.\n*ഉത്തരം:* A യും R ഉം ശരിയാണ്, കൂടാതെ R എന്നത് A യുടെ ശരിയായ വിശദീകരണമാണ്.'
      },
      {
        type: 'p',
        en: '**2. Assertion (A):** A fixed pulley does not reduce the effort required to lift a load.\n**Reason (R):** The mechanical advantage of a single fixed pulley is 1.\n*Answer:* Both A and R are true, and R is the correct explanation of A.',
        ml: '**2. പ്രസ്താവന (A):** ഒരു സ്ഥിരകപ്പി ഭാരം ഉയർത്താൻ ആവശ്യമായ യത്നത്തെ കുറയ്ക്കുന്നില്ല.\n**കാരണം (R):** ഒരു സ്ഥിരകപ്പിയുടെ യാന്ത്രികലാഭം 1 ആണ്.\n*ഉത്തരം:* A യും R ഉം ശരിയാണ്, കൂടാതെ R എന്നത് A യുടെ ശരിയായ വിശദീകരണമാണ്.'
      },
      {
        type: 'p',
        en: '**3. Assertion (A):** The efficiency of a practical machine is always less than 100%.\n**Reason (R):** Some energy is always lost in overcoming friction and moving the parts of the machine.\n*Answer:* Both A and R are true, and R is the correct explanation of A.',
        ml: '**3. പ്രസ്താവന (A):** ഒരു പ്രായോഗിക യന്ത്രത്തിന്റെ ക്ഷമത എപ്പോഴും 100%-ൽ താഴെയായിരിക്കും.\n**കാരണം (R):** ഘർഷണം മറികടക്കുന്നതിനും യന്ത്രഭാഗങ്ങൾ ചലിപ്പിക്കുന്നതിനും എപ്പോഴും കുറച്ച് ഊർജ്ജം നഷ്ടപ്പെടുന്നു.\n*ഉത്തരം:* A യും R ഉം ശരിയാണ്, കൂടാതെ R എന്നത് A യുടെ ശരിയായ വിശദീകരണമാണ്.'
      },
      {
        type: 'h3',
        en: 'Diagram-Based Questions',
        ml: 'ചിത്രത്തെ അടിസ്ഥാനമാക്കിയുള്ള ചോദ്യങ്ങൾ'
      },
      {
        type: 'p',
        en: '**1. Identify the class of lever shown in the diagram of a pair of scissors. Mark the Fulcrum, Load, and Effort.**\n*Answer:* Class I Lever. Fulcrum is at the central pivot, Effort is applied at the handles, and Load is at the blades cutting the material.',
        ml: '**1. ഒരു കത്രികയുടെ ചിത്രത്തിൽ കാണിച്ചിരിക്കുന്ന ഉത്തോലകത്തിന്റെ വർഗ്ഗം തിരിച്ചറിയുക. ആധാരബിന്ദു, ഭാരം, യത്നം എന്നിവ അടയാളപ്പെടുത്തുക.**\n*ഉത്തരം:* ഒന്നാം വർഗ്ഗ ഉത്തോലകം. ആധാരബിന്ദു മധ്യഭാഗത്താണ്, യത്നം പിടികളിൽ പ്രയോഗിക്കുന്നു, ഭാരം മുറിക്കുന്ന ബ്ലേഡുകളിലാണ്.'
      },
      {
        type: 'p',
        en: '**2. Observe a diagram of a bicycle gear system where the pedal gear is larger than the rear wheel gear. What is the effect on speed and torque?**\n*Answer:* Since a larger gear drives a smaller gear, the speed of rotation increases, but the torque (turning effect) decreases.',
        ml: '**2. പെഡൽ ഗിയർ പിൻ ചക്ര ഗിയറിനേക്കാൾ വലുതായ ഒരു സൈക്കിൾ ഗിയർ സിസ്റ്റത്തിന്റെ ചിത്രം നിരീക്ഷിക്കുക. വേഗതയിലും ടോർക്കിലുമുള്ള ഫലം എന്താണ്?**\n*ഉത്തരം:* വലിയ ഗിയർ ചെറിയ ഗിയറിനെ കറക്കുന്നതിനാൽ, കറങ്ങുന്ന വേഗത കൂടുന്നു, എന്നാൽ ടോർക്ക് (കറക്കാനുള്ള ശേഷി) കുറയുന്നു.'
      },
      {
        type: 'h3',
        en: 'Numerical Problems',
        ml: 'സംഖ്യാ പ്രശ്നങ്ങൾ'
      },
      {
        type: 'p',
        en: '**1. A load of 500 N is lifted using an effort of 100 N. Calculate the Mechanical Advantage.**\n*Answer:* MA = Load / Effort = 500 N / 100 N = 5.',
        ml: '**1. 100 N യത്നം ഉപയോഗിച്ച് 500 N ഭാരം ഉയർത്തുന്നു. യാന്ത്രികലാഭം കണക്കാക്കുക.**\n*ഉത്തരം:* MA = ഭാരം / യത്നം = 500 N / 100 N = 5.'
      },
      {
        type: 'p',
        en: '**2. In a lever, the effort arm is 80 cm and the load arm is 20 cm. What is its Velocity Ratio?**\n*Answer:* VR = Effort arm / Load arm = 80 cm / 20 cm = 4.',
        ml: '**2. ഒരു ഉത്തോലകത്തിൽ, യത്നഭുജം 80 cm ഉം ഭാരഭുജം 20 cm ഉം ആണ്. ഇതിന്റെ പ്രവേഗ അനുപാതം എത്രയാണ്?**\n*ഉത്തരം:* VR = യത്നഭുജം / ഭാരഭുജം = 80 cm / 20 cm = 4.'
      },
      {
        type: 'h3',
        en: 'One-Mark Questions',
        ml: 'ഒരു മാർക്കിന്റെ ചോദ്യങ്ങൾ'
      },
      {
        type: 'p',
        en: '**1. What is the unit of Mechanical Advantage?**\n*Answer:* It has no unit as it is a ratio of two similar quantities (forces).',
        ml: '**1. യാന്ത്രികലാഭത്തിന്റെ യൂണിറ്റ് എന്താണ്?**\n*ഉത്തരം:* സമാനമായ രണ്ട് അളവുകളുടെ (ബലങ്ങളുടെ) അനുപാതമായതിനാൽ ഇതിന് യൂണിറ്റ് ഇല്ല.'
      },
      {
        type: 'p',
        en: '**2. Which class of lever always has a mechanical advantage less than 1?**\n*Answer:* Class III Lever.',
        ml: '**2. ഏത് വർഗ്ഗ ഉത്തോലകത്തിനാണ് എപ്പോഴും 1-നേക്കാൾ കുറഞ്ഞ യാന്ത്രികലാഭം ഉള്ളത്?**\n*ഉത്തരം:* മൂന്നാം വർഗ്ഗ ഉത്തോലകം.'
      },
      {
        type: 'p',
        en: '**3. What is the mechanical advantage of a single movable pulley?**\n*Answer:* 2.',
        ml: '**3. ഒരു ചലനക്കപ്പിയുടെ യാന്ത്രികലാഭം എത്രയാണ്?**\n*ഉത്തരം:* 2.'
      },
      {
        type: 'p',
        en: '**4. Name a machine where the effort is applied between the fulcrum and the load.**\n*Answer:* Tongs (or Tweezers, Fishing rod).',
        ml: '**4. ആധാരബിന്ദുവിനും ഭാരത്തിനും ഇടയിൽ യത്നം പ്രയോഗിക്കുന്ന ഒരു യന്ത്രത്തിന്റെ പേര് പറയുക.**\n*ഉത്തരം:* ചവണ (അല്ലെങ്കിൽ ട്വീസർ, ചൂണ്ടക്കാമ്പ്).'
      },
      {
        type: 'p',
        en: '**5. How is the efficiency of a machine related to MA and VR?**\n*Answer:* Efficiency = (MA / VR) × 100%.',
        ml: '**5. ഒരു യന്ത്രത്തിന്റെ ക്ഷമത MA, VR എന്നിവയുമായി എങ്ങനെ ബന്ധപ്പെട്ടിരിക്കുന്നു?**\n*ഉത്തരം:* ക്ഷമത = (MA / VR) × 100%.'
      },
      {
        type: 'h2',
        en: 'Teacher Notes',
        ml: 'അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ'
      },
      {
        type: 'p',
        en: '• Bring a pair of scissors, a nutcracker, and tongs to class to demonstrate the three classes of levers.\n• Use the interactive simulations to show how moving the fulcrum changes the effort required.\n• Discuss real-world applications like bicycle gears to explain the speed vs torque trade-off.',
        ml: '• മൂന്ന് വർഗ്ഗ ഉത്തോലകങ്ങളെ കാണിക്കാൻ ഒരു കത്രിക, പാക്കുവെട്ടി, ചവണ എന്നിവ ക്ലാസ്സിൽ കൊണ്ടുവരിക.\n• ആധാരബിന്ദു മാറ്റുന്നത് ആവശ്യമായ യത്നത്തെ എങ്ങനെ മാറ്റുന്നുവെന്ന് കാണിക്കാൻ ഇന്ററാക്ടീവ് സിമുലേഷനുകൾ ഉപയോഗിക്കുക.\n• വേഗതയും ടോർക്കും തമ്മിലുള്ള ബന്ധം വിശദീകരിക്കാൻ സൈക്കിൾ ഗിയറുകൾ പോലെയുള്ള യഥാർത്ഥ ലോക ഉദാഹരണങ്ങൾ ചർച്ച ചെയ്യുക.'
      },
      {
        type: 'h2',
        en: 'Student Summary Sheet',
        ml: 'വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ കുറിപ്പ്'
      },
      {
        type: 'p',
        en: '1. Formulas: MA = L/E, VR = d_E/d_L, Efficiency = (MA/VR) * 100.\n2. Lever Classes: FLE (1st: Fulcrum middle, 2nd: Load middle, 3rd: Effort middle).\n3. Pulleys: Fixed (MA=1, changes direction), Movable (MA=2, reduces effort).\n4. Gears: Large driving small = more speed, less torque. Small driving large = less speed, more torque.',
        ml: '1. സമവാക്യങ്ങൾ: MA = L/E, VR = d_E/d_L, ക്ഷമത = (MA/VR) * 100.\n2. ഉത്തോലക വർഗ്ഗങ്ങൾ: FLE (1-ാമത്: ആധാരബിന്ദു നടുവിൽ, 2-ാമത്: ഭാരം നടുവിൽ, 3-ാമത്: യത്നം നടുവിൽ).\n3. കപ്പികൾ: സ്ഥിരകപ്പി (MA=1, ദിശ മാറ്റുന്നു), ചലനക്കപ്പി (MA=2, യത്നം കുറയ്ക്കുന്നു).\n4. ഗിയറുകൾ: വലുത് ചെറുതിനെ കറക്കുമ്പോൾ = വേഗത കൂടുതൽ, ടോർക്ക് കുറവ്. ചെറുത് വലുതിനെ കറക്കുമ്പോൾ = വേഗത കുറവ്, ടോർക്ക് കൂടുതൽ.'
      }
    ]
  },
  quiz: [
    {
      q_id: 'q1',
      type: 'mcq',
      stem: {
        en: 'Define a simple machine. Give two examples.',
        ml: 'ലഘുയന്ത്രങ്ങൾ എന്നാൽ എന്ത്? രണ്ട് ഉദാഹരണങ്ങൾ നൽകുക.'
      },
      options: [
        { k: 'A', text: { en: 'Devices that make work easier. Ex: Crowbar, Pulleys', ml: 'പ്രവൃത്തി എളുപ്പമാക്കുന്ന ഉപകരണങ്ങൾ. ഉദാ: കടപ്പാര, കപ്പികൾ' } },
        { k: 'B', text: { en: 'Devices that increase work. Ex: Engine, Motor', ml: 'പ്രവൃത്തി വർദ്ധിപ്പിക്കുന്ന ഉപകരണങ്ങൾ. ഉദാ: എഞ്ചിൻ, മോട്ടോർ' } },
        { k: 'C', text: { en: 'Devices that create energy. Ex: Generator, Battery', ml: 'ഊർജ്ജം സൃഷ്ടിക്കുന്ന ഉപകരണങ്ങൾ. ഉദാ: ജനറേറ്റർ, ബാറ്ററി' } },
        { k: 'D', text: { en: 'Devices that measure force. Ex: Spring balance', ml: 'ബലം അളക്കുന്ന ഉപകരണങ്ങൾ. ഉദാ: സ്പ്രിംഗ് ബാലൻസ്' } }
      ],
      answer: 'A',
      explanation: {
        en: 'Devices that make our work easier by helping to overcome a large resistance with a small effort are called simple machines. Examples: Crowbar, Pulleys.',
        ml: 'ചെറിയ യത്നം ഉപയോഗിച്ച് വലിയൊരു പ്രതിരോധത്തെ മറികടക്കാൻ സഹായിക്കുന്നതും അതുവഴി പ്രവൃത്തി എളുപ്പമാക്കുന്നതുമായ ഉപകരണങ്ങളാണ് ലഘുയന്ത്രങ്ങൾ. ഉദാഹരണങ്ങൾ: കടപ്പാര, കപ്പികൾ.'
      }
    },
    {
      q_id: 'q2',
      type: 'mcq',
      stem: {
        en: 'Write the formula for Mechanical Advantage.',
        ml: 'യാന്ത്രികലാഭം കണ്ടുപിടിക്കാനുള്ള സമവാക്യം എഴുതുക.'
      },
      options: [
        { k: 'A', text: { en: 'MA = Effort / Load', ml: 'MA = യത്നം / ഭാരം' } },
        { k: 'B', text: { en: 'MA = Load / Effort', ml: 'MA = ഭാരം / യത്നം' } },
        { k: 'C', text: { en: 'MA = Load × Effort', ml: 'MA = ഭാരം × യത്നം' } },
        { k: 'D', text: { en: 'MA = Load + Effort', ml: 'MA = ഭാരം + യത്നം' } }
      ],
      answer: 'B',
      explanation: {
        en: 'Mechanical Advantage (MA) = Load / Effort',
        ml: 'യാന്ത്രികലാഭം (MA) = ഭാരം / യത്നം'
      }
    },
    {
      q_id: 'q3',
      type: 'mcq',
      stem: {
        en: 'Why is the efficiency of a practical machine always less than 100%?',
        ml: 'ഒരു പ്രായോഗിക യന്ത്രത്തിന്റെ ക്ഷമത എപ്പോഴും 100%-ൽ താഴെയായിരിക്കുന്നത് എന്തുകൊണ്ട്?'
      },
      options: [
        { k: 'A', text: { en: 'Due to friction and weight of moving parts', ml: 'ഘർഷണം, യന്ത്രഭാഗങ്ങളുടെ ഭാരം എന്നിവ കാരണം' } },
        { k: 'B', text: { en: 'Because machines create energy', ml: 'യന്ത്രങ്ങൾ ഊർജ്ജം സൃഷ്ടിക്കുന്നതുകൊണ്ട്' } },
        { k: 'C', text: { en: 'Because effort is always greater than load', ml: 'യത്നം എപ്പോഴും ഭാരത്തേക്കാൾ കൂടുതലായതുകൊണ്ട്' } },
        { k: 'D', text: { en: 'Due to high velocity ratio', ml: 'ഉയർന്ന പ്രവേഗ അനുപാതം കാരണം' } }
      ],
      answer: 'A',
      explanation: {
        en: 'The efficiency of a machine is always less than 100% because a part of the work input is used to overcome friction and to lift the moving parts of the machine itself.',
        ml: 'നൽകുന്ന പ്രവൃത്തിയുടെ ഒരു ഭാഗം ഘർഷണം മറികടക്കുന്നതിനും യന്ത്രഭാഗങ്ങൾ ചലിപ്പിക്കുന്നതിനുമായി ഉപയോഗിക്കപ്പെടുന്നതുകൊണ്ടാണ് പ്രായോഗിക യന്ത്രത്തിന്റെ ക്ഷമത എപ്പോഴും 100%-ൽ താഴെയായിരിക്കുന്നത്.'
      }
    },
    {
      q_id: 'q4',
      type: 'mcq',
      stem: {
        en: 'Classify the following into first, second, and third class levers: Scissors, Nutcracker, Tongs.',
        ml: 'കത്രിക, പാക്കുവെട്ടി, ചവണ എന്നിവയെ ഒന്നാം, രണ്ടാം, മൂന്നാം വർഗ്ഗ ഉത്തോലകങ്ങളായി തരംതിരിക്കുക.'
      },
      options: [
        { k: 'A', text: { en: '1st: Nutcracker, 2nd: Scissors, 3rd: Tongs', ml: '1: പാക്കുവെട്ടി, 2: കത്രിക, 3: ചവണ' } },
        { k: 'B', text: { en: '1st: Scissors, 2nd: Tongs, 3rd: Nutcracker', ml: '1: കത്രിക, 2: ചവണ, 3: പാക്കുവെട്ടി' } },
        { k: 'C', text: { en: '1st: Scissors, 2nd: Nutcracker, 3rd: Tongs', ml: '1: കത്രിക, 2: പാക്കുവെട്ടി, 3: ചവണ' } },
        { k: 'D', text: { en: '1st: Tongs, 2nd: Nutcracker, 3rd: Scissors', ml: '1: ചവണ, 2: പാക്കുവെട്ടി, 3: കത്രിക' } }
      ],
      answer: 'C',
      explanation: {
        en: 'Scissors - First Class Lever; Nutcracker - Second Class Lever; Tongs - Third Class Lever.',
        ml: 'കത്രിക - ഒന്നാം വർഗ്ഗ ഉത്തോലകം; പാക്കുവെട്ടി - രണ്ടാം വർഗ്ഗ ഉത്തോലകം; ചവണ - മൂന്നാം വർഗ്ഗ ഉത്തോലകം.'
      }
    },
    {
      q_id: 'q5',
      type: 'mcq',
      stem: {
        en: 'What is the main advantage of using a single fixed pulley if its Mechanical Advantage is only 1?',
        ml: 'ഒരു സ്ഥിരകപ്പിയുടെ യാന്ത്രികലാഭം 1 ആണെങ്കിലും അത് ഉപയോഗിക്കുന്നതുകൊണ്ടുള്ള പ്രധാന പ്രയോജനം എന്ത്?'
      },
      options: [
        { k: 'A', text: { en: 'It reduces the effort required to half', ml: 'ഇത് ആവശ്യമായ യത്നം പകുതിയായി കുറയ്ക്കുന്നു' } },
        { k: 'B', text: { en: 'It changes the direction of effort to a convenient downward direction', ml: 'യത്നം പ്രയോഗിക്കേണ്ട ദിശ സൗകര്യപ്രദമായി താഴേക്ക് മാറ്റാൻ സഹായിക്കുന്നു' } },
        { k: 'C', text: { en: 'It increases the velocity ratio', ml: 'ഇത് പ്രവേഗ അനുപാതം വർദ്ധിപ്പിക്കുന്നു' } },
        { k: 'D', text: { en: 'It increases the efficiency to 100%', ml: 'ഇത് ക്ഷമത 100% ആക്കുന്നു' } }
      ],
      answer: 'B',
      explanation: {
        en: 'Even though it doesn\'t reduce the effort, a single fixed pulley makes work easier by changing the direction of the applied effort to a convenient downward direction.',
        ml: 'ഇത് പ്രയോഗിക്കേണ്ട യത്നത്തിന്റെ അളവ് കുറയ്ക്കുന്നില്ലെങ്കിലും, യത്നം പ്രയോഗിക്കേണ്ട ദിശ സൗകര്യപ്രദമായി താഴേക്ക് മാറ്റാൻ സഹായിക്കുന്നു എന്നതാണ് ഇതിന്റെ പ്രധാന പ്രയോജനം.'
      }
    },
    {
      q_id: 'q6',
      type: 'mcq',
      stem: {
        en: 'Which class of lever always has a mechanical advantage less than 1? Why is it useful?',
        ml: 'ഏത് വർഗ്ഗ ഉത്തോലകത്തിനാണ് യാന്ത്രികലാഭം എപ്പോഴും ഒന്നിൽ കുറവായിട്ടുള്ളത്? പിന്നെ എന്തിനാണ് അത് ഉപയോഗിക്കുന്നത്?'
      },
      options: [
        { k: 'A', text: { en: 'Second class; to multiply force', ml: 'രണ്ടാം വർഗ്ഗം; ബലം വർദ്ധിപ്പിക്കാൻ' } },
        { k: 'B', text: { en: 'First class; to change direction', ml: 'ഒന്നാം വർഗ്ഗം; ദിശ മാറ്റാൻ' } },
        { k: 'C', text: { en: 'Third class; to multiply speed and distance', ml: 'മൂന്നാം വർഗ്ഗം; പ്രവേഗവും ദൂരവും വർദ്ധിപ്പിക്കാൻ' } },
        { k: 'D', text: { en: 'Third class; to reduce effort', ml: 'മൂന്നാം വർഗ്ഗം; യത്നം കുറയ്ക്കാൻ' } }
      ],
      answer: 'C',
      explanation: {
        en: 'Third class levers always have an MA < 1. They are useful because they multiply speed and increase the distance moved by the load, making it easier to handle things precisely (like using tongs).',
        ml: 'മൂന്നാം വർഗ്ഗ ഉത്തോലകങ്ങൾക്ക് യാന്ത്രികലാഭം എപ്പോഴും 1 ൽ താഴെയായിരിക്കും. പ്രവേഗം വർദ്ധിപ്പിക്കാനും ഭാരം സഞ്ചരിക്കുന്ന ദൂരം കൂട്ടാനുമാണ് ഇവ ഉപയോഗിക്കുന്നത് (ഉദാഹരണത്തിന് ചവണ ഉപയോഗിച്ച് വസ്തുക്കൾ കൃത്യതയോടെ പിടിക്കാൻ).'
      }
    },
    {
      q_id: 'q7',
      type: 'mcq',
      stem: {
        en: 'Calculate the Mechanical Advantage if a load of 500 N is lifted using an effort of 100 N.',
        ml: '100 N യത്നം ഉപയോഗിച്ച് 500 N ഭാരം ഉയർത്തുമ്പോഴുള്ള യാന്ത്രികലാഭം കണക്കാക്കുക.'
      },
      options: [
        { k: 'A', text: { en: '0.2', ml: '0.2' } },
        { k: 'B', text: { en: '5', ml: '5' } },
        { k: 'C', text: { en: '50', ml: '50' } },
        { k: 'D', text: { en: '50000', ml: '50000' } }
      ],
      answer: 'B',
      explanation: {
        en: 'Load (L) = 500 N, Effort (E) = 100 N. MA = Load / Effort = 500 / 100 = 5.',
        ml: 'ഭാരം (L) = 500 N, യത്നം (E) = 100 N. യാന്ത്രികലാഭം (MA) = ഭാരം / യത്നം = 500 / 100 = 5.'
      }
    },
    {
      q_id: 'q8',
      type: 'mcq',
      stem: {
        en: 'Explain how a Wheel and Axle acts as a simple machine with an example.',
        ml: 'ചക്രവും അച്ചുതണ്ടും ഒരു ലഘുയന്ത്രമായി പ്രവർത്തിക്കുന്നത് എങ്ങനെ എന്ന് ഉദാഹരണസഹിതം വിശദമാക്കുക.'
      },
      options: [
        { k: 'A', text: { en: 'Effort on large wheel rotates small axle to lift heavy load. Ex: Screwdriver', ml: 'വലിയ ചക്രത്തിൽ യത്നം പ്രയോഗിക്കുമ്പോൾ ചെറിയ അച്ചുതണ്ടിലെ ഭാരത്തെ മറികടക്കുന്നു. ഉദാ: സ്ക്രൂഡ്രൈവർ' } },
        { k: 'B', text: { en: 'Effort on small axle rotates large wheel. Ex: Bicycle wheel', ml: 'ചെറിയ അച്ചുതണ്ടിൽ യത്നം പ്രയോഗിക്കുമ്പോൾ വലിയ ചക്രം കറങ്ങുന്നു. ഉദാ: സൈക്കിൾ ചക്രം' } },
        { k: 'C', text: { en: 'It changes the direction of force. Ex: Fixed pulley', ml: 'ഇത് ബലത്തിന്റെ ദിശ മാറ്റുന്നു. ഉദാ: സ്ഥിരകപ്പി' } },
        { k: 'D', text: { en: 'It reduces friction. Ex: Ball bearings', ml: 'ഇത് ഘർഷണം കുറയ്ക്കുന്നു. ഉദാ: ബോൾ ബെയറിംഗുകൾ' } }
      ],
      answer: 'A',
      explanation: {
        en: 'In a wheel and axle, a small effort applied on the larger wheel can easily rotate the smaller axle to lift or turn a heavy load. Example: A screwdriver, where the thick handle is the wheel and the thin metal rod is the axle.',
        ml: 'വലിയ ചക്രത്തിൽ കുറഞ്ഞ യത്നം പ്രയോഗിക്കുമ്പോൾ ചെറിയ അച്ചുതണ്ടിലെ വലിയ ഭാരത്തെ എളുപ്പത്തിൽ മറികടക്കാൻ അഥവാ കറക്കാൻ സാധിക്കുന്നു. ഉദാഹരണം: സ്ക്രൂഡ്രൈവർ (ഇതിലെ കട്ടിയുള്ള പിടിയാണ് ചക്രം, നേർത്ത ഇരുമ്പ് ദണ്ഡാണ് അച്ചുതണ്ട്).'
      }
    },
    {
      q_id: 'q9',
      type: 'mcq',
      stem: {
        en: 'How are speed and turning effect (torque) affected when a smaller gear drives a larger gear?',
        ml: 'ഒരു ചെറിയ ഗിയർ വലിയ ഗിയറിനെ കറക്കുമ്പോൾ വേഗതയിലും ടോർക്കിലും എന്ത് മാറ്റം സംഭവിക്കുന്നു?'
      },
      options: [
        { k: 'A', text: { en: 'Speed increases, torque increases', ml: 'വേഗത കൂടുന്നു, ടോർക്ക് കൂടുന്നു' } },
        { k: 'B', text: { en: 'Speed increases, torque decreases', ml: 'വേഗത കൂടുന്നു, ടോർക്ക് കുറയുന്നു' } },
        { k: 'C', text: { en: 'Speed decreases, torque increases', ml: 'വേഗത കുറയുന്നു, ടോർക്ക് കൂടുന്നു' } },
        { k: 'D', text: { en: 'Speed decreases, torque decreases', ml: 'വേഗത കുറയുന്നു, ടോർക്ക് കുറയുന്നു' } }
      ],
      answer: 'C',
      explanation: {
        en: 'When a smaller gear drives a larger gear, the speed of rotation decreases, but the turning effect (torque) increases.',
        ml: 'ചെറിയ ഗിയർ വലിയ ഗിയറിനെ കറക്കുമ്പോൾ, തിരിയുന്നതിന്റെ വേഗത കുറയുകയും എന്നാൽ കറക്കാനുള്ള ശേഷി (ടോർക്ക്) കൂടുകയും ചെയ്യുന്നു.'
      }
    },
    {
      q_id: 'q10',
      type: 'mcq',
      stem: {
        en: 'If a pulley block system has 4 pulleys in total, what will be its theoretical Mechanical Advantage?',
        ml: 'ഒരു കപ്പി വ്യൂഹത്തിൽ (pulley block system) ആകെ 4 കപ്പികൾ ഉണ്ടെങ്കിൽ, അതിന്റെ സൈദ്ധാന്തിക യാന്ത്രികലാഭം എത്രയായിരിക്കും?'
      },
      options: [
        { k: 'A', text: { en: '1', ml: '1' } },
        { k: 'B', text: { en: '2', ml: '2' } },
        { k: 'C', text: { en: '4', ml: '4' } },
        { k: 'D', text: { en: '8', ml: '8' } }
      ],
      answer: 'C',
      explanation: {
        en: 'For a pulley block system, the theoretical Mechanical Advantage is equal to the total number of pulleys in the system. Therefore, the MA will be 4.',
        ml: 'ഒരു കപ്പി വ്യൂഹത്തിൽ, സൈദ്ധാന്തിക യാന്ത്രികലാഭം അതിലെ കപ്പികളുടെ ആകെ എണ്ണത്തിന് തുല്യമായിരിക്കും. അതിനാൽ ഇതിന്റെ യാന്ത്രികലാഭം 4 ആയിരിക്കും.'
      }
    }
  ],
  glossary: [
    {
      term: { en: 'Simple Machine', ml: 'ലഘുയന്ത്രം' },
      definition: {
        en: 'A device that makes work easier by overcoming a large resistance with a small effort.',
        ml: 'ചെറിയ യത്നം ഉപയോഗിച്ച് വലിയൊരു പ്രതിരോധത്തെ മറികടക്കാൻ സഹായിക്കുന്ന ഉപകരണം.'
      }
    },
    {
      term: { en: 'Mechanical Advantage (MA)', ml: 'യാന്ത്രികലാഭം (MA)' },
      definition: {
        en: 'The ratio of the Load to the Effort applied.',
        ml: 'ഭാരവും യത്നവും തമ്മിലുള്ള അംശബന്ധം.'
      }
    },
    {
      term: { en: 'Velocity Ratio (VR)', ml: 'പ്രവേഗ അനുപാതം (VR)' },
      definition: {
        en: 'The ratio of the distance travelled by the effort to the distance travelled by the load.',
        ml: 'യത്നം സഞ്ചരിച്ച ദൂരവും ഭാരം സഞ്ചരിച്ച ദൂരവും തമ്മിലുള്ള അംശബന്ധം.'
      }
    },
    {
      term: { en: 'Lever', ml: 'ഉത്തോലകം' },
      definition: {
        en: 'A rigid bar that can rotate freely about a fixed point called the fulcrum.',
        ml: 'ആധാരബിന്ദുവിനെ അടിസ്ഥാനമാക്കി സ്വതന്ത്രമായി കറങ്ങാൻ കഴിയുന്ന ദൃഢമായ ദണ്ഡ്.'
      }
    },
    {
      term: { en: 'Gears', ml: 'ഗിയറുകൾ' },
      definition: {
        en: 'Toothed wheels used to transmit power and motion from one part of a machine to another.',
        ml: 'പവറും ചലനവും പ്രേഷണം ചെയ്യാൻ ഉപയോഗിക്കുന്ന പല്ലുകളുള്ള ചക്രങ്ങൾ.'
      }
    }
  ]
};
