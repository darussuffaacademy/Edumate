import { Lesson } from './curriculum';

export const physicsUnit3: Lesson = {
  id: "phy-u3",
  title: {
    en: "Chapter 3: The World of Colours and Vision",
    ml: "അധ്യായം 3: വർണ്ണങ്ങളുടെ ലോകവും കാഴ്ചയും"
  },
  estimated_time_mins: 90,
  learning_objectives: [
    { id: "lo1", text: { en: "Explain refraction through a prism and the phenomenon of dispersion.", ml: "പ്രിസത്തിലൂടെയുള്ള അപവർത്തനവും പ്രകീർണ്ണനവും വിശദീകരിക്കുക." } },
    { id: "lo2", text: { en: "Understand the formation of a rainbow and recombination of colours.", ml: "മഴവില്ല് രൂപീകരണവും വർണ്ണങ്ങളുടെ സംയോജനവും മനസ്സിലാക്കുക." } },
    { id: "lo3", text: { en: "Identify primary, secondary, and complementary colours of light.", ml: "പ്രകാശത്തിന്റെ പ്രാഥമിക, ദ്വിതീയ, പൂരക വർണ്ണങ്ങളെ തിരിച്ചറിയുക." } },
    { id: "lo4", text: { en: "Explain scattering of light and its real-life examples like blue sky and red sunset.", ml: "പ്രകാശത്തിന്റെ വിസരണവും ആകാശം നീലയാകുന്നതും ഉദയാസ്തമയങ്ങളിൽ സൂര്യൻ ചുവക്കുന്നതും വിശദീകരിക്കുക." } },
    { id: "lo5", text: { en: "Describe eye defects like Myopia and Hypermetropia and their rectification.", ml: "ഹ്രസ്വദൃഷ്ടി, ദീർഘദൃഷ്ടി തുടങ്ങിയ കണ്ണിന്റെ ന്യൂനതകളും അവയുടെ പരിഹാരങ്ങളും വിവരിക്കുക." } }
  ],
  content: {
    intro: {
      en: "This chapter explores the fascinating world of light, colours, and how our eyes perceive them. We will learn about dispersion, scattering, and the mechanics of human vision.",
      ml: "പ്രകാശം, വർണ്ണങ്ങൾ, നമ്മുടെ കണ്ണുകൾ അവയെ എങ്ങനെ കാണുന്നു തുടങ്ങിയ കാര്യങ്ങളാണ് ഈ അധ്യായത്തിൽ പഠിക്കുന്നത്. പ്രകീർണ്ണനം, വിസരണം, കാഴ്ചയുടെ രഹസ്യങ്ങൾ എന്നിവ നമുക്ക് പരിശോധിക്കാം."
    },
    core: {
      en: "Light is a form of energy that enables us to see. When white light passes through a prism, it splits into seven colours. This is called dispersion. Scattering of light explains why the sky is blue and the sunset is red.",
      ml: "കാഴ്ച സാധ്യമാക്കുന്ന ഒരു ഊർജ്ജരൂപമാണ് പ്രകാശം. ധവളപ്രകാശം ഒരു പ്രിസത്തിലൂടെ കടന്നുപോകുമ്പോൾ ഏഴ് നിറങ്ങളായി പിരിയുന്നു. ഇതിനെ പ്രകീർണ്ണനം എന്ന് വിളിക്കുന്നു. ആകാശം നീലയാകുന്നതും ഉദയാസ്തമയങ്ങളിൽ സൂര്യൻ ചുവക്കുന്നതും പ്രകാശത്തിന്റെ വിസരണം മൂലമാണ്."
    },
    blocks: [
      { type: 'h2', en: '1. Refraction through a Glass Prism', ml: '1. ഗ്ലാസ് പ്രിസത്തിലൂടെയുള്ള അപവർത്തനം' },
      { type: 'p', en: 'When a light ray enters and leaves a prism, it **deviates towards the base** of the prism due to refraction. The angle between the incident ray and the emergent ray is called the **Angle of Deviation**.', ml: 'ഒരു പ്രകാശകിരണം പ്രിസത്തിൽ പ്രവേശിക്കുമ്പോഴും പുറത്തുവരുമ്പോഴും അപവർത്തനം മൂലം പ്രിസത്തിന്റെ **പാദത്തിലേക്ക് (base) വ്യതിചലിക്കുന്നു**. പതനകിരണവും നിർഗ്ഗമനകിരണവും തമ്മിലുള്ള കോണിനെ **വ്യതിയാന കോൺ (Angle of Deviation)** എന്ന് വിളിക്കുന്നു.' },
      { type: 'img', en: 'Prism Refraction Simulation', ml: 'പ്രിസത്തിലൂടെയുള്ള അപവർത്തനം - സിമുലേഷൻ', customId: 'prism-simulation' },
      { type: 'p', en: '🔬 **Interactive Experiment Idea:**\nTitle: Prism Refraction\nObjective: Observe how light bends.\nControls: Angle of incidence slider.\nExpected Observation: Light always bends towards the base.', ml: '🔬 **Interactive Experiment Idea:**\nTitle: Prism Refraction\nObjective: പ്രകാശം എങ്ങനെ വളയുന്നു എന്ന് നിരീക്ഷിക്കുക.\nControls: പതനകോൺ മാറ്റാനുള്ള സ്ലൈഡർ.\nExpected Observation: പ്രകാശം എപ്പോഴും പാദത്തിലേക്ക് വ്യതിചലിക്കുന്നു.' },

      { type: 'h2', en: '2. Dispersion of Light', ml: '2. പ്രകാശത്തിന്റെ പ്രകീർണ്ണനം' },
      { type: 'p', en: '**Dispersion** is the phenomenon of splitting up of a composite light into its component colours. White light is a **composite light**.', ml: '**പ്രകീർണ്ണനം** എന്നത് സമന്വിത പ്രകാശം അതിന്റെ ഘടക വർണ്ണങ്ങളായി വേർതിരിയുന്ന പ്രതിഭാസമാണ്. ധവളപ്രകാശം ഒരു **സമന്വിത പ്രകാശമാണ്**.' },
      { type: 'p', en: 'The orderly arrangement of colours is called the **Spectrum**. The order is **VIBGYOR**.', ml: 'നിറങ്ങളുടെ ക്രമമായ വിന്യാസമാണ് **സ്പെക്ട്രം**. ഇതിന്റെ ക്രമം **VIBGYOR** ആണ്.' },
      { type: 'table', tableData: {
        headers: [{en: 'Colour', ml: 'നിറം'}, {en: 'Wavelength', ml: 'തരംഗദൈർഘ്യം'}, {en: 'Deviation', ml: 'വ്യതിയാനം'}],
        rows: [
          [{en: 'Violet', ml: 'വയലറ്റ്'}, {en: 'Shortest', ml: 'ഏറ്റവും കുറവ്'}, {en: 'Maximum', ml: 'ഏറ്റവും കൂടുതൽ'}],
          [{en: 'Red', ml: 'ചുവപ്പ്'}, {en: 'Longest', ml: 'ഏറ്റവും കൂടുതൽ'}, {en: 'Minimum', ml: 'ഏറ്റവും കുറവ്'}]
        ]
      }},
      { type: 'p', en: '📈 **Graph: Deviation vs Wavelength**\nAs wavelength increases, deviation decreases. (Inverse relation)', ml: '📈 **Graph: Deviation vs Wavelength**\nതരംഗദൈർഘ്യം കൂടുമ്പോൾ വ്യതിയാനം കുറയുന്നു. (വിപരീത അനുപാതം)' },

      { type: 'h2', en: '3. Rainbow', ml: '3. മഴവില്ല്' },
      { type: 'p', en: 'A rainbow is formed by the combined effect of three phenomena in water droplets:\n1. **Refraction**\n2. **Dispersion**\n3. **Internal Reflection**', ml: 'ജലകണികകളിൽ സംഭവിക്കുന്ന മൂന്ന് പ്രതിഭാസങ്ങളുടെ സംയോജിത ഫലമായാണ് മഴവില്ല് ഉണ്ടാകുന്നത്:\n1. **അപവർത്തനം (Refraction)**\n2. **പ്രകീർണ്ണനം (Dispersion)**\n3. **ആന്തര പ്രതിപതനം (Internal Reflection)**' },
      { type: 'p', en: '🔁 **Flowchart: Rainbow Formation**\n**Sunlight** → Enters Water Droplet (**Refraction & Dispersion**) → Hits back surface (**Internal Reflection**) → Leaves Droplet (**Refraction**) → **Rainbow**', ml: '🔁 **Flowchart: Rainbow Formation**\n**സൂര്യപ്രകാശം** → ജലകണികയിൽ പ്രവേശിക്കുന്നു (**അപവർത്തനവും പ്രകീർണ്ണനവും**) → പിൻഭാഗത്ത് തട്ടുന്നു (**ആന്തര പ്രതിപതനം**) → പുറത്തുവരുന്നു (**അപവർത്തനം**) → **മഴവില്ല്**' },
      { type: 'img', en: 'Rainbow Formation Simulation', ml: 'മഴവില്ല് രൂപീകരണം - സിമുലേഷൻ', customId: 'rainbow-simulation' },

      { type: 'h2', en: '4. Recombination of Colours', ml: '4. വർണ്ണങ്ങളുടെ സംയോജനം' },
      { type: 'p', en: 'Using an inverted prism, dispersed colours can be recombined to form white light again.', ml: 'ഒരു തലകീഴായ പ്രിസം ഉപയോഗിച്ച് പ്രകീർണ്ണനം സംഭവിച്ച വർണ്ണങ്ങളെ വീണ്ടും സംയോജിപ്പിച്ച് ധവളപ്രകാശം ഉണ്ടാക്കാം.' },

      { type: 'h2', en: '5. Electromagnetic Spectrum', ml: '5. വൈദ്യുതകാന്തിക സ്പെക്ട്രം' },
      { type: 'table', tableData: {
        headers: [{en: 'Radiation', ml: 'വികിരണം'}, {en: 'Wavelength Order', ml: 'തരംഗദൈർഘ്യ ക്രമം'}],
        rows: [
          [{en: 'Gamma Rays', ml: 'ഗാമാ റേ'}, {en: 'Lowest', ml: 'ഏറ്റവും കുറവ്'}],
          [{en: 'X-Rays', ml: 'എക്സ്-റേ'}, {en: '...', ml: '...'}],
          [{en: 'Ultraviolet', ml: 'അൾട്രാവയലറ്റ്'}, {en: '...', ml: '...'}],
          [{en: 'Visible Light', ml: 'ദൃശ്യപ്രകാശം'}, {en: '...', ml: '...'}],
          [{en: 'Infrared', ml: 'ഇൻഫ്രാറെഡ്'}, {en: '...', ml: '...'}],
          [{en: 'Microwaves', ml: 'മൈക്രോവേവ്'}, {en: '...', ml: '...'}],
          [{en: 'Radio Waves', ml: 'റേഡിയോ വേവ്'}, {en: 'Highest', ml: 'ഏറ്റവും കൂടുതൽ'}]
        ]
      }},

      { type: 'h2', en: '6. Primary and Secondary Colours', ml: '6. പ്രകാശത്തിന്റെ പ്രാഥമിക - ദ്വിതീയ വർണ്ണങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Primary 1', ml: 'പ്രാഥമിക 1'}, {en: 'Primary 2', ml: 'പ്രാഥമിക 2'}, {en: 'Secondary Result', ml: 'ദ്വിതീയ വർണ്ണം'}],
        rows: [
          [{en: 'Red', ml: 'ചുവപ്പ്'}, {en: 'Green', ml: 'പച്ച'}, {en: 'Yellow', ml: 'മഞ്ഞ'}],
          [{en: 'Red', ml: 'ചുവപ്പ്'}, {en: 'Blue', ml: 'നീല'}, {en: 'Magenta', ml: 'മജന്ത'}],
          [{en: 'Blue', ml: 'നീല'}, {en: 'Green', ml: 'പച്ച'}, {en: 'Cyan', ml: 'സിയാൻ'}]
        ]
      }},
      { type: 'p', en: '**Complementary Colours:** Two colours that combine to give white light. E.g., Yellow + Blue = White.', ml: '**പൂരക വർണ്ണങ്ങൾ:** കൂടിച്ചേരുമ്പോൾ ധവളപ്രകാശം നൽകുന്ന രണ്ട് വർണ്ണങ്ങൾ. ഉദാ: മഞ്ഞ + നീല = വെള്ള.' },

      { type: 'h2', en: '7. Persistence of Vision', ml: '7. ദൃഷ്ടിസ്ഥിരത' },
      { type: 'p', en: 'Visual experience persists for **1/16 of a second**. Newton\'s Colour Disc appears white when rotated fast due to this.', ml: 'കാഴ്ചാനുഭവം **1/16 സെക്കൻഡ്** നേരത്തേക്ക് നിലനിൽക്കുന്നു. ന്യൂട്ടന്റെ വർണ്ണ ഡിസ്ക് വേഗത്തിൽ കറക്കുമ്പോൾ വെള്ളയായി കാണപ്പെടുന്നത് ഇതുകൊണ്ടാണ്.' },
      { type: 'img', en: 'Newton\'s Colour Disc Simulation', ml: 'ന്യൂട്ടന്റെ വർണ്ണ ഡിസ്ക് സിമുലേഷൻ', customId: 'newton-disc-simulation' },

      { type: 'h2', en: '8. Colour of Objects', ml: '8. വസ്തുക്കളുടെ നിറം' },
      { type: 'p', en: 'Objects appear in the colour they **reflect**. A white surface reflects all, black absorbs all.', ml: 'വസ്തുക്കൾ അവ **പ്രതിപതിപ്പിക്കുന്ന** നിറത്തിൽ കാണപ്പെടുന്നു. വെള്ള പ്രതലം എല്ലാം പ്രതിപതിപ്പിക്കുന്നു, കറുപ്പ് എല്ലാം ആഗിരണം ചെയ്യുന്നു.' },

      { type: 'h2', en: '9. Scattering of Light', ml: '9. പ്രകാശത്തിന്റെ വിസരണം' },
      { type: 'p', en: '**Scattering** is the irregular deviation of light by particles in its path. The intensity of scattering is inversely proportional to the fourth power of wavelength (**Rayleigh Scattering**).', ml: '**വിസരണം** എന്നത് പ്രകാശത്തിന്റെ പാതയിലുള്ള കണികകളിൽ തട്ടിയുണ്ടാകുന്ന ക്രമരഹിതമായ വ്യതിയാനമാണ്. വിസരണത്തിന്റെ തീവ്രത തരംഗദൈർഘ്യത്തിന്റെ നാലാം ഘാതത്തിന് വിപരീതാനുപാതത്തിലാണ് (**റയ്ലി വിസരണം**).' },
      { type: 'p', en: '• **Tyndall Effect:** Scattering of light by colloidal particles.\n• **Blue Sky:** Blue light has a shorter wavelength, so it scatters more.\n• **Red Sunset/Sunrise:** During sunrise and sunset, light travels a longer distance. Most colours scatter away, and only red (longest wavelength) reaches our eyes.', ml: '• **ടിൻഡാൽ പ്രഭാവം:** കൊളോയ്ഡ് കണികകൾ പ്രകാശത്തെ വിസരണം ചെയ്യുന്നത്.\n• **നീല ആകാശം:** നീല പ്രകാശത്തിന് തരംഗദൈർഘ്യം കുറവായതിനാൽ അത് കൂടുതൽ വിസരണം ചെയ്യപ്പെടുന്നു.\n• **ചുവന്ന സൂര്യൻ:** ഉദയാസ്തമയങ്ങളിൽ പ്രകാശം കൂടുതൽ ദൂരം സഞ്ചരിക്കണം. മിക്ക നിറങ്ങളും വിസരണം ചെയ്യപ്പെടുകയും ചുവപ്പ് (കൂടുതൽ തരംഗദൈർഘ്യമുള്ളത്) മാത്രം നമ്മുടെ കണ്ണുകളിൽ എത്തുകയും ചെയ്യുന്നു.' },

      { type: 'h2', en: '10. Eye and Vision', ml: '10. കണ്ണും കാഴ്ചയും' },
      { type: 'p', en: '• **Power of Accommodation:** The ability of the eye to adjust its focal length using ciliary muscles to see objects at different distances.\n• **Near Point:** The minimum distance at which an object can be seen clearly (**25 cm** for a normal eye).\n• **Far Point:** The maximum distance up to which an eye can see objects clearly (**Infinity** for a normal eye).', ml: '• **സമഞ്ജനക്ഷമത:** വിവിധ ദൂരങ്ങളിലുള്ള വസ്തുക്കളെ കാണുന്നതിനായി സിലിയറി പേശികൾ ഉപയോഗിച്ച് ഫോക്കസ് ദൂരം ക്രമീകരിക്കാനുള്ള കണ്ണിന്റെ കഴിവ്.\n• **സമീപ ബിന്ദു:** വ്യക്തമായ കാഴ്ചയ്ക്കുള്ള ഏറ്റവും കുറഞ്ഞ അകലം (ആരോഗ്യമുള്ള കണ്ണിന് ഇത് **25 cm** ആണ്).\n• **വിദൂര ബിന്ദു:** കണ്ണിന് വ്യക്തമായി കാണാൻ കഴിയുന്ന പരമാവധി ദൂരം (ആരോഗ്യമുള്ള കണ്ണിന് ഇത് **അനന്തത** ആണ്).' },

      { type: 'h2', en: '11. Defects of the Eye', ml: '11. കണ്ണിന്റെ ന്യൂനതകൾ' },
      { type: 'img', en: 'Eye Defects and Correction Simulation', ml: 'കണ്ണിന്റെ ന്യൂനതകളും പരിഹാരവും - സിമുലേഷൻ', customId: 'eye-defect-simulation' },
      { type: 'table', tableData: {
        headers: [{en: 'Defect', ml: 'ന്യൂനത'}, {en: 'Symptoms', ml: 'ലക്ഷണങ്ങൾ'}, {en: 'Rectification', ml: 'പരിഹാരം'}],
        rows: [
          [{en: 'Myopia', ml: 'ഹ്രസ്വദൃഷ്ടി'}, {en: 'Cannot see far', ml: 'അകലെ കാണില്ല'}, {en: 'Concave Lens', ml: 'കോൺകേവ് ലെൻസ്'}],
          [{en: 'Hypermetropia', ml: 'ദീർഘദൃഷ്ടി'}, {en: 'Cannot see near', ml: 'അടുത്ത് കാണില്ല'}, {en: 'Convex Lens', ml: 'കോൺവെക്സ് ലെൻസ്'}]
        ]
      }},

      { type: 'h2', en: '12. Light Pollution', ml: '12. പ്രകാശ മലിനീകരണം' },
      { type: 'p', en: 'Excessive artificial light affecting animals and plants.', ml: 'ജീവികളെയും സസ്യങ്ങളെയും ബാധിക്കുന്ന അമിതമായ കൃത്രിമ പ്രകാശം.' },

      { type: 'h2', en: '🎯 Quick Revision Box', ml: '🎯 ദ്രുത പുനരവലോകനം' },
      { type: 'p', en: '1. Composite light: Light with multiple colours.\n2. VIBGYOR: Order of spectrum.\n3. Red: Least deviation, Longest wavelength.\n4. Violet: Most deviation, Shortest wavelength.\n5. Rainbow: Refraction + Dispersion + Internal Reflection.\n6. Primary Colours: R, G, B.\n7. Secondary Colours: Y, M, C.\n8. Persistence of Vision: 1/16s.\n9. Scattering: Blue sky, Red sunset.\n10. Near Point: 25cm.', ml: '1. സമന്വിത പ്രകാശം: പല നിറങ്ങളുള്ള പ്രകാശം.\n2. VIBGYOR: സ്പെക്ട്രം ക്രമം.\n3. ചുവപ്പ്: കുറഞ്ഞ വ്യതിയാനം, കൂടുതൽ തരംഗദൈർഘ്യം.\n4. വയലറ്റ്: കൂടുതൽ വ്യതിയാനം, കുറഞ്ഞ തരംഗദൈർഘ്യം.\n5. മഴവില്ല്: അപവർത്തനം + പ്രകീർണ്ണനം + ആന്തര പ്രതിപതനം.\n6. പ്രാഥമിക വർണ്ണങ്ങൾ: R, G, B.\n7. ദ്വിതീയ വർണ്ണങ്ങൾ: Y, M, C.\n8. ദൃഷ്ടിസ്ഥിരത: 1/16s.\n9. വിസരണം: നീല ആകാശം, ചുവന്ന സൂര്യൻ.\n10. സമീപ ബിന്ദു: 25cm.' },

      { type: 'h2', en: '👨‍🏫 Teacher Notes', ml: '👨‍🏫 അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ' },
      { type: 'p', en: '• Use a prism in a dark room to show dispersion.\n• Demonstrate Newton\'s disc.\n• Use a laser pointer in muddy water to show Tyndall effect.', ml: '• ഇരുണ്ട മുറിയിൽ പ്രിസം ഉപയോഗിച്ച് പ്രകീർണ്ണനം കാണിക്കുക.\n• ന്യൂട്ടന്റെ വർണ്ണ ഡിസ്ക് പരീക്ഷിച്ചു നോക്കുക.\n• കലങ്ങിയ വെള്ളത്തിൽ ലേസർ അടിച്ച് ടിൻഡാൽ പ്രഭാവം കാണിക്കുക.' },

      { type: 'h2', en: '📝 Student Summary Sheet', ml: '📝 വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ ഷീറ്റ്' },
      { type: 'p', en: '• **Dispersion:** Splitting of light into 7 colours.\n• **Spectrum:** VIBGYOR.\n• **Rainbow:** Refraction + Dispersion + Internal Reflection.\n• **Primary Colours:** Red, Green, Blue.\n• **Secondary Colours:** Yellow (R+G), Magenta (R+B), Cyan (B+G).\n• **Persistence of Vision:** 1/16s.\n• **Scattering:** Blue sky (short wavelength), Red sunset (long wavelength).\n• **Eye Defects:** Myopia (Concave), Hypermetropia (Convex).', ml: '• **പ്രകീർണ്ണനം:** പ്രകാശം 7 നിറങ്ങളായി പിരിയുന്നത്.\n• **സ്പെക്ട്രം:** VIBGYOR.\n• **മഴവില്ല്:** അപവർത്തനം + പ്രകീർണ്ണനം + ആന്തര പ്രതിപതനം.\n• **പ്രാഥമിക വർണ്ണങ്ങൾ:** ചുവപ്പ്, പച്ച, നീല.\n• **ദ്വിതീയ വർണ്ണങ്ങൾ:** മഞ്ഞ (R+G), മജന്ത (R+B), സിയാൻ (B+G).\n• **ദൃഷ്ടിസ്ഥിരത:** 1/16s.\n• **വിസരണം:** നീല ആകാശം (കുറഞ്ഞ തരംഗദൈർഘ്യം), ചുവന്ന സൂര്യൻ (കൂടുതൽ തരംഗദൈർഘ്യം).\n• **കണ്ണിന്റെ ന്യൂനതകൾ:** ഹ്രസ്വദൃഷ്ടി (കോൺകേവ്), ദീർഘദൃഷ്ടി (കോൺവെക്സ്).' }
    ]
  },
  glossary: [
    { term: { en: "Dispersion", ml: "പ്രകീർണ്ണനം" }, definition: { en: "Splitting of composite light into component colours.", ml: "സമന്വിത പ്രകാശം ഘടക വർണ്ണങ്ങളായി വേർതിരിയുന്നത്." } },
    { term: { en: "Scattering", ml: "വിസരണം" }, definition: { en: "Irregular deviation of light by particles.", ml: "കണികകളിൽ തട്ടിയുള്ള പ്രകാശത്തിന്റെ ക്രമരഹിതമായ വ്യതിയാനം." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "What is dispersion of light? Which colour deviates the most when white light passes through a prism?", ml: "പ്രകാശത്തിന്റെ പ്രകീർണ്ണനം എന്നാൽ എന്ത്? ധവളപ്രകാശം പ്രിസത്തിലൂടെ കടന്നുപോകുമ്പോൾ ഏറ്റവും കൂടുതൽ വ്യതിയാനം സംഭവിക്കുന്ന നിറം ഏത്?" },
      options: [
        { k: "A", text: { en: "Red", ml: "ചുവപ്പ്" } },
        { k: "B", text: { en: "Violet", ml: "വയലറ്റ്" } },
        { k: "C", text: { en: "Green", ml: "പച്ച" } },
        { k: "D", text: { en: "Yellow", ml: "മഞ്ഞ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Dispersion is splitting of light. Violet deviates most due to short wavelength.", ml: "പ്രകാശം പിരിയുന്നതാണ് പ്രകീർണ്ണനം. തരംഗദൈർഘ്യം കുറവായതിനാൽ വയലറ്റ് കൂടുതൽ വ്യതിചലിക്കുന്നു." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "Which of the following is a secondary colour?", ml: "താഴെ പറയുന്നവയിൽ ദ്വിതീയ വർണ്ണം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Red", ml: "ചുവപ്പ്" } },
        { k: "B", text: { en: "Blue", ml: "നീല" } },
        { k: "C", text: { en: "Yellow", ml: "മഞ്ഞ" } },
        { k: "D", text: { en: "Green", ml: "പച്ച" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Yellow is formed by Red + Green.", ml: "ചുവപ്പും പച്ചയും ചേർന്നാണ് മഞ്ഞ ഉണ്ടാകുന്നത്." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "The near point of a healthy eye is:", ml: "ആരോഗ്യമുള്ള കണ്ണിന്റെ സമീപ ബിന്ദു:" },
      options: [
        { k: "A", text: { en: "Infinity", ml: "അനന്തത" } },
        { k: "B", text: { en: "25 cm", ml: "25 cm" } },
        { k: "C", text: { en: "10 cm", ml: "10 cm" } },
        { k: "D", text: { en: "100 cm", ml: "100 cm" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "25 cm is the minimum distance for clear vision.", ml: "വ്യക്തമായ കാഴ്ചയ്ക്കുള്ള ഏറ്റവും കുറഞ്ഞ അകലം 25 cm ആണ്." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "Assertion (A): The sky appears blue during the day.\nReason (R): Blue light has a shorter wavelength and scatters more in the atmosphere.", ml: "Assertion (A): പകൽ സമയത്ത് ആകാശം നീല നിറത്തിൽ കാണപ്പെടുന്നു.\nReason (R): നീല പ്രകാശത്തിന് തരംഗദൈർഘ്യം കുറവായതിനാൽ അന്തരീക്ഷത്തിൽ കൂടുതൽ വിസരണം സംഭവിക്കുന്നു." },
      options: [
        { k: "A", text: { en: "Both A and R are true and R is the correct explanation of A", ml: "A-യും R-ഉം ശരിയാണ്, R എന്നത് A-യുടെ ശരിയായ വിശദീകരണമാണ്" } },
        { k: "B", text: { en: "Both A and R are true but R is NOT the correct explanation of A", ml: "A-യും R-ഉം ശരിയാണ്, എന്നാൽ R എന്നത് A-യുടെ ശരിയായ വിശദീകരണമല്ല" } },
        { k: "C", text: { en: "A is true but R is false", ml: "A ശരിയാണ് എന്നാൽ R തെറ്റാണ്" } },
        { k: "D", text: { en: "A is false but R is true", ml: "A തെറ്റാണ് എന്നാൽ R ശരിയാണ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Scattering of blue light makes the sky appear blue.", ml: "നീല പ്രകാശത്തിന്റെ വിസരണമാണ് ആകാശം നീലയായി കാണപ്പെടാൻ കാരണം." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "A person cannot see nearby objects clearly but can see distant objects. Which lens should they use?", ml: "ഒരാൾക്ക് അടുത്തുള്ള വസ്തുക്കളെ വ്യക്തമായി കാണാൻ കഴിയില്ല, എന്നാൽ അകലെയുള്ളവ കാണാൻ കഴിയും. അവർ ഏത് ലെൻസാണ് ഉപയോഗിക്കേണ്ടത്?" },
      options: [
        { k: "A", text: { en: "Concave Lens", ml: "കോൺകേവ് ലെൻസ്" } },
        { k: "B", text: { en: "Convex Lens", ml: "കോൺവെക്സ് ലെൻസ്" } },
        { k: "C", text: { en: "Cylindrical Lens", ml: "സിലിണ്ടർ ലെൻസ്" } },
        { k: "D", text: { en: "Bifocal Lens", ml: "ബൈഫോക്കൽ ലെൻസ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "This is Hypermetropia, which is corrected using a convex lens.", ml: "ഇത് ദീർഘദൃഷ്ടിയാണ്, ഇത് പരിഹരിക്കാൻ കോൺവെക്സ് ലെൻസ് ഉപയോഗിക്കുന്നു." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "In a rainbow formation, which phenomenon happens at the back surface of the water droplet?", ml: "മഴവില്ല് രൂപീകരണത്തിൽ, ജലകണികയുടെ പിൻഭാഗത്ത് സംഭവിക്കുന്ന പ്രതിഭാസം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Refraction", ml: "അപവർത്തനം" } },
        { k: "B", text: { en: "Dispersion", ml: "പ്രകീർണ്ണനം" } },
        { k: "C", text: { en: "Internal Reflection", ml: "ആന്തര പ്രതിപതനം" } },
        { k: "D", text: { en: "Scattering", ml: "വിസരണം" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Light undergoes internal reflection at the back surface.", ml: "ജലകണികയുടെ പിൻഭാഗത്ത് പ്രകാശം ആന്തര പ്രതിപതനത്തിന് വിധേയമാകുന്നു." }
    }
  ]
} as const;
