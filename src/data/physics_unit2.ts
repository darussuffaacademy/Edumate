import { Lesson } from './curriculum';

export const physicsUnit2: Lesson = {
  id: "sc-phy-10-lenses",
  title: { en: "Lenses", ml: "ലെൻസുകൾ" },
  estimated_time_mins: 90,
  learning_objectives: [
    { id: "lo1", text: { en: "Identify different types of lenses and their characteristics.", ml: "വിവിധ തരം ലെൻസുകളെയും അവയുടെ സവിശേഷതകളെയും തിരിച്ചറിയുക." } },
    { id: "lo2", text: { en: "Understand key terms like optic centre, principal focus, and focal length.", ml: "പ്രകാശിക കേന്ദ്രം, മുഖ്യ ഫോക്കസ്, ഫോക്കസ് ദൂരം തുടങ്ങിയ പദങ്ങൾ മനസ്സിലാക്കുക." } },
    { id: "lo3", text: { en: "Explain image formation in convex and concave lenses using ray diagrams.", ml: "രേഖാചിത്രങ്ങൾ ഉപയോഗിച്ച് കോൺവെക്സ്, കോൺകേവ് ലെൻസുകളിലെ പ്രതിബിംബ രൂപീകരണം വിശദീകരിക്കുക." } },
    { id: "lo4", text: { en: "Apply the lens equation and magnification formula to solve problems.", ml: "ലെൻസ് സമവാക്യവും ആവർധന സമവാക്യവും ഉപയോഗിച്ച് പ്രശ്നങ്ങൾ പരിഹരിക്കുക." } },
    { id: "lo5", text: { en: "Understand the power of a lens and its SI unit.", ml: "ലെൻസിന്റെ പവറും അതിന്റെ SI യൂണിറ്റും മനസ്സിലാക്കുക." } },
    { id: "lo6", text: { en: "Describe the working of optical instruments like microscopes and telescopes.", ml: "മൈക്രോസ്കോപ്പ്, ടെലിസ്കോപ്പ് തുടങ്ങിയ പ്രകാശിക ഉപകരണങ്ങളുടെ പ്രവർത്തനം വിവരിക്കുക." } }
  ],
  content: {
    intro: {
      en: "Lenses are transparent mediums with two refracting surfaces. They play a crucial role in various optical devices from spectacles to telescopes.",
      ml: "രണ്ട് അപവർത്തന പ്രതലങ്ങളുള്ള സുതാര്യ മാധ്യമങ്ങളാണ് ലെൻസുകൾ. കണ്ണടകൾ മുതൽ ടെലിസ്കോപ്പുകൾ വരെയുള്ള വിവിധ പ്രകാശിക ഉപകരണങ്ങളിൽ ഇവ പ്രധാന പങ്ക് വഹിക്കുന്നു."
    },
    core: {
      en: "This chapter covers the types of lenses, image formation rules, lens equations, power, and common optical instruments.",
      ml: "ഈ അധ്യായം ലെൻസുകളുടെ തരങ്ങൾ, പ്രതിബിംബ രൂപീകരണ നിയമങ്ങൾ, ലെൻസ് സമവാക്യങ്ങൾ, പവർ, സാധാരണ പ്രകാശിക ഉപകരണങ്ങൾ എന്നിവ ഉൾക്കൊള്ളുന്നു."
    },
    blocks: [
      { type: 'h2', en: '1. Introduction to Lenses', ml: '1. ലെൻസുകൾ - ഒരാമുഖം' },
      { type: 'p', en: 'Lenses are transparent mediums with two refracting surfaces.', ml: 'രണ്ട് അപവർത്തന പ്രതലങ്ങളുള്ള സുതാര്യ മാധ്യമങ്ങളാണ് ലെൻസുകൾ.' },
      
      { type: 'h3', en: 'Types of Lenses', ml: 'ലെൻസുകളുടെ ഇനങ്ങൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Convex Lens (കോൺവെക്സ് ലെൻസ്)', ml: 'കോൺവെക്സ് ലെൻസ്'}, {en: 'Concave Lens (കോൺകേവ് ലെൻസ്)', ml: 'കോൺകേവ് ലെൻസ്'}],
          rows: [
            [{en: 'Thicker in the middle', ml: 'മധ്യഭാഗം കട്ടിയുള്ളത്'}, {en: 'Thinner in the middle / Thicker at the edges', ml: 'മധ്യഭാഗം കട്ടി കുറഞ്ഞതും വക്കുകൾ കട്ടിയുള്ളതും'}],
            [{en: 'Shows objects magnified', ml: 'വസ്തുക്കളെ വലുതാക്കി കാണിക്കുന്നു'}, {en: 'Shows objects diminished', ml: 'വസ്തുക്കളെ ചെറുതാക്കി കാണിക്കുന്നു'}],
            [{en: 'Converges light rays', ml: 'പ്രകാശകിരണങ്ങളെ കേന്ദ്രീകരിപ്പിക്കുന്നു'}, {en: 'Diverges light rays', ml: 'പ്രകാശകിരണങ്ങളെ വികേന്ദ്രീകരിപ്പിക്കുന്നു'}]
          ]
      }},
      { type: 'img', en: 'Types of Lenses', ml: 'ലെൻസുകളുടെ തരങ്ങൾ', customId: 'lenses-types-simulation' },
      { type: 'img', en: 'Interactive Lens Simulation', ml: 'ഇന്ററാക്ടീവ് ലെൻസ് സിമുലേഷൻ', customId: 'lens-simulation' },

      { type: 'h2', en: '2. Terms Related to Lenses', ml: '2. ലെൻസുകളുമായി ബന്ധപ്പെട്ട പദങ്ങൾ' },
      { type: 'p', en: 'Optic centre (O): The midpoint of a lens is the optic centre.', ml: 'പ്രകാശിക കേന്ദ്രം (O): ഒരു ലെൻസിന്റെ മധ്യബിന്ദുവാണ് പ്രകാശിക കേന്ദ്രം.' },
      { type: 'p', en: 'Centres of curvature (C1, C2): Each refracting surface of a lens is part of a sphere. The centres of such spheres are the centres of curvature.', ml: 'വക്രതാ കേന്ദ്രം (C1, C2): ലെൻസിന്റെ ഓരോ അപവർത്തന പ്രതലവും ഓരോ ഗോളത്തിന്റെ ഭാഗമാണ്. ഈ ഗോളങ്ങളുടെ കേന്ദ്രങ്ങളാണ് വക്രതാ കേന്ദ്രങ്ങൾ.' },
      { type: 'p', en: 'Optic axis: The imaginary line passing through the centres of curvature and the optic centre of a lens.', ml: 'മുഖ്യാക്ഷം: വക്രതാ കേന്ദ്രങ്ങളിലൂടെയും പ്രകാശിക കേന്ദ്രത്തിലൂടെയും കടന്നുപോകുന്ന സാങ്കല്പിക രേഖയാണ് മുഖ്യാക്ഷം.' },
      { type: 'p', en: 'Aperture: The area of the lens through which light passes is called aperture.', ml: 'അപ്പർച്ചർ: പ്രകാശം കടന്നുപോകുന്ന ലെൻസിന്റെ ഭാഗത്തിന്റെ വിസ്തൃതിയാണ് അപ്പർച്ചർ.' },

      { type: 'h2', en: '3. Principal Focus and Focal Length', ml: '3. മുഖ്യ ഫോക്കസും ഫോക്കസ് ദൂരവും' },
      { type: 'h3', en: 'Principal Focus of a Convex Lens', ml: 'കോൺവെക്സ് ലെൻസിന്റെ മുഖ്യ ഫോക്കസ്' },
      { type: 'p', en: 'Light rays near and parallel to the optic axis incident on a convex lens, after refraction converge at a point on the optic axis on the other side of the lens. This point is the principal focus (F) of a convex lens. It is real.', ml: 'കോൺവെക്സ് ലെൻസിന്റെ മുഖ്യാക്ഷത്തിന് സമാന്തരമായി പതിക്കുന്ന പ്രകാശകിരണങ്ങൾ അപവർത്തനത്തിന് ശേഷം ലെൻസിന്റെ മറുവശത്ത് മുഖ്യാക്ഷത്തിലെ ഒരു ബിന്ദുവിലേക്ക് കേന്ദ്രീകരിക്കുന്നു. ഈ ബിന്ദുവാണ് കോൺവെക്സ് ലെൻസിന്റെ മുഖ്യ ഫോക്കസ് (F). ഇത് യഥാർത്ഥമാണ്.' },
      
      { type: 'h3', en: 'Principal Focus of a Concave Lens', ml: 'കോൺകേവ് ലെൻസിന്റെ മുഖ്യ ഫോക്കസ്' },
      { type: 'p', en: 'Light rays, near and parallel to the optic axis incident on a concave lens, after refraction appear to diverge from a point on the optic axis on the same side of the lens. This point is the principal focus (F) of a concave lens. It is virtual.', ml: 'കോൺകേവ് ലെൻസിന്റെ മുഖ്യാക്ഷത്തിന് സമാന്തരമായി പതിക്കുന്ന പ്രകാശകിരണങ്ങൾ അപവർത്തനത്തിന് ശേഷം ലെൻസിന്റെ അതേ വശത്തുള്ള മുഖ്യാക്ഷത്തിലെ ഒരു ബിന്ദുവിൽ നിന്നും വികേന്ദ്രീകരിച്ചു പോകുന്നതായി തോന്നുന്നു. ഈ ബിന്ദുവാണ് കോൺകേവ് ലെൻസിന്റെ മുഖ്യ ഫോക്കസ് (F). ഇത് മിഥ്യയാണ്.' },
      
      { type: 'p', en: 'Focal Length (f): The distance from the optic centre of the lens to the principal focus is the focal length.', ml: 'ഫോക്കസ് ദൂരം (f): ലെൻസിന്റെ പ്രകാശിക കേന്ദ്രത്തിൽ നിന്നും മുഖ്യ ഫോക്കസിലേക്കുള്ള ദൂരമാണ് ഫോക്കസ് ദൂരം.' },
      { type: 'img', en: 'Principal Focus and Focal Length', ml: 'മുഖ്യ ഫോക്കസും ഫോക്കസ് ദൂരവും', customId: 'focus-simulation' },

      { type: 'h2', en: '4. Image Formation by Lenses', ml: '4. ലെൻസുകൾ രൂപീകരിക്കുന്ന പ്രതിബിംബങ്ങൾ' },
      { type: 'p', en: 'Real Image: Images that can be projected on a screen are real images.', ml: 'യഥാർത്ഥ പ്രതിബിംബം (Real Image): സ്ക്രീനിൽ പതിപ്പിക്കാൻ കഴിയുന്ന പ്രതിബിംബങ്ങളാണ് യഥാർത്ഥ പ്രതിബിംബങ്ങൾ.' },
      { type: 'p', en: 'Virtual Image: Images that cannot be captured on a screen, but can only be seen are virtual images.', ml: 'മിഥ്യാ പ്രതിബിംബം (Virtual Image): സ്ക്രീനിൽ പതിപ്പിക്കാൻ കഴിയാത്തതും എന്നാൽ ലെൻസിലൂടെ നോക്കുമ്പോൾ കാണാൻ മാത്രം സാധിക്കുന്നതുമായ പ്രതിബിംബങ്ങളാണ് മിഥ്യാ പ്രതിബിംബങ്ങൾ.' },
      
      { type: 'h3', en: 'Rules for Ray Diagrams', ml: 'രേഖാചിത്രങ്ങൾ വരയ്ക്കുന്നതിനുള്ള നിയമങ്ങൾ' },
      { type: 'p', en: '1. A ray of light parallel to the optic axis passes through the principal focus on the other side (for convex).', ml: '1. മുഖ്യാക്ഷത്തിന് സമാന്തരമായി വരുന്ന കിരണം അപവർത്തനത്തിന് ശേഷം മറുവശത്തെ ഫോക്കസിലൂടെ കടന്നുപോകുന്നു.' },
      { type: 'p', en: '2. A ray of light passing through the optic centre passes undeviated.', ml: '2. പ്രകാശിക കേന്ദ്രത്തിലൂടെ കടന്നുപോകുന്ന കിരണത്തിന് ദിശാമാറ്റം സംഭവിക്കുന്നില്ല.' },
      { type: 'p', en: '3. A ray of light passing through the focus on the same side of the object passes parallel to the optic axis after refraction.', ml: '3. വസ്തു ഇരിക്കുന്ന വശത്തെ ഫോക്കസിലൂടെ കടന്നുവരുന്ന കിരണം അപവർത്തനത്തിന് ശേഷം മുഖ്യാക്ഷത്തിന് സമാന്തരമായി സഞ്ചരിക്കുന്നു.' },

      { type: 'h2', en: '5. Images Formed by a Convex Lens', ml: '5. കോൺവെക്സ് ലെൻസ് രൂപീകരിക്കുന്ന പ്രതിബിംബങ്ങൾ' },
      { type: 'table', tableData: {
          headers: [
            {en: 'Position of the Object', ml: 'വസ്തുവിന്റെ സ്ഥാനം'}, 
            {en: 'Position of the Image', ml: 'പ്രതിബിംബത്തിന്റെ സ്ഥാനം'}, 
            {en: 'Characteristics of the Image', ml: 'പ്രതിബിംബത്തിന്റെ സവിശേഷതകൾ'}
          ],
          rows: [
            [{en: 'Beyond 2F', ml: '2F ന് അപ്പുറം'}, {en: 'Between F and 2F', ml: 'മറുവശത്ത് F നും 2F നും ഇടയിൽ'}, {en: 'Diminished, Inverted, Real', ml: 'ചെറുത്, തലകീഴായത്, യഥാർത്ഥം'}],
            [{en: 'At 2F', ml: '2F ൽ'}, {en: 'At 2F', ml: 'മറുവശത്ത് 2F ൽ'}, {en: 'Same size, Inverted, Real', ml: 'ഒരേ വലിപ്പം, തലകീഴായത്, യഥാർത്ഥം'}],
            [{en: 'Between F and 2F', ml: 'F നും 2F നും ഇടയിൽ'}, {en: 'Beyond 2F', ml: 'മറുവശത്ത് 2F ന് അപ്പുറം'}, {en: 'Magnified, Inverted, Real', ml: 'വലുത്, തലകീഴായത്, യഥാർത്ഥം'}],
            [{en: 'At F', ml: 'F ൽ'}, {en: 'At infinity', ml: 'അനന്തതയിൽ'}, {en: 'Magnified, Inverted, Real', ml: 'വളരെ വലുത്, തലകീഴായത്, യഥാർത്ഥം'}],
            [{en: 'Between F and lens', ml: 'F നും ലെൻസിനും ഇടയിൽ'}, {en: 'On the same side of the object', ml: 'വസ്തുവിന്റെ അതേ വശത്ത്'}, {en: 'Magnified, Erect, Virtual', ml: 'വലുത്, നിവർന്നത്, മിഥ്യ'}]
          ]
      }},

      { type: 'h2', en: '6. Images Formed by a Concave Lens', ml: '6. കോൺകേവ് ലെൻസ് രൂപീകരിക്കുന്ന പ്രതിബിംബങ്ങൾ' },
      { type: 'p', en: 'As a concave lens diverges light rays, the image it forms is always virtual, erect, and diminished.', ml: 'കോൺകേവ് ലെൻസ് പ്രകാശകിരണങ്ങളെ വികേന്ദ്രീകരിപ്പിക്കുന്നതിനാൽ, അതിൽ എപ്പോഴും മിഥ്യയും, നിവർന്നതും, ചെറുതുമായ പ്രതിബിംബം മാത്രമേ രൂപപ്പെടുകയുള്ളൂ.' },
      { type: 'p', en: 'The position of the image is always between F and the lens on the same side of the object.', ml: 'പ്രതിബിംബം എപ്പോഴും വസ്തുവിന്റെ അതേ വശത്ത്, ലെൻസിനും ഫോക്കസിനും (F) ഇടയിലായിരിക്കും.' },

      { type: 'h2', en: '7. Cartesian Sign Convention', ml: '7. കാർട്ടീഷ്യൻ ചിഹ്ന രീതി' },
      { type: 'p', en: '1. All distances should be measured from the optic centre of the lens.', ml: '1. എല്ലാ ദൂരങ്ങളും അളക്കേണ്ടത് ലെൻസിന്റെ പ്രകാശിക കേന്ദ്രത്തിൽ നിന്നാണ്.' },
      { type: 'p', en: '2. Distances measured in the same direction as the incident ray are positive, and those in the opposite direction are negative.', ml: '2. പതനകിരണത്തിന്റെ അതേ ദിശയിൽ അളക്കുന്ന ദൂരങ്ങൾ പോസിറ്റീവ് ആയും എതിർ ദിശയിൽ അളക്കുന്നവ നെഗറ്റീവ് ആയും കണക്കാക്കണം.' },
      { type: 'p', en: '3. Distances measured above the optic axis are positive, and those below are negative.', ml: '3. മുഖ്യാക്ഷത്തിന് മുകളിലേക്കുള്ള ദൂരങ്ങൾ പോസിറ്റീവ് ആയും താഴേക്കുള്ളവ നെഗറ്റീവ് ആയും പരിഗണിക്കണം.' },
      { type: 'p', en: 'Note: Focal length (f) of convex lens is (+), concave lens is (-). Object distance (u) is always (-).', ml: 'കുറിപ്പ്: കോൺവെക്സ് ലെൻസിന്റെ ഫോക്കസ് ദൂരം (+) ഉം, കോൺകേവ് ലെൻസിന്റേത് (-) ഉം ആയിരിക്കും. വസ്തു ദൂരം (u) എപ്പോഴും (-) ആയിരിക്കും.' },

      { type: 'h2', en: '8. Lens Equation and Magnification', ml: '8. ലെൻസ് സമവാക്യവും ആവർധനവും' },
      { type: 'formula', en: 'Lens Equation: 1/f = 1/v - 1/u', ml: 'ലെൻസ് സമവാക്യം: 1/f = 1/v - 1/u' },
      { type: 'p', en: 'Magnification (m) is the ratio of the height of the image to the height of the object.', ml: 'പ്രതിബിംബത്തിന്റെ ഉയരവും വസ്തുവിന്റെ ഉയരവും തമ്മിലുള്ള അംശബന്ധമാണ് ആവർധനം.' },
      { type: 'formula', en: 'm = hi / ho = v / u', ml: 'm = hi / ho = v / u' },
      { type: 'p', en: 'If m is positive (+): Image is Erect and Virtual. If m is negative (-): Image is Inverted and Real.', ml: 'm പോസിറ്റീവ് (+) ആണെങ്കിൽ: നിവർന്നതും മിഥ്യയുമായ പ്രതിബിംബം. m നെഗറ്റീവ് (-) ആണെങ്കിൽ: തലകീഴായതും യഥാർത്ഥവുമായ പ്രതിബിംബം.' },

      { type: 'h2', en: '9. Power of Lens', ml: '9. ലെൻസിന്റെ പവർ' },
      { type: 'p', en: 'The power of a lens is its ability to converge or diverge light rays incident on it. It is the reciprocal of focal length (in meters).', ml: 'ലെൻസിൽ പതിക്കുന്ന പ്രകാശകിരണങ്ങളെ കേന്ദ്രീകരിപ്പിക്കാനോ വികേന്ദ്രീകരിപ്പിക്കാനോ ലെൻസിനുള്ള കഴിവാണ് പവർ. ഇത് ഫോക്കസ് ദൂരത്തിന്റെ (മീറ്ററിൽ) വ്യുൽക്രമമാണ്.' },
      { type: 'formula', en: 'P = 1 / f (f in meters)', ml: 'P = 1 / f (f മീറ്ററിൽ)' },
      { type: 'p', en: 'The SI unit of power is dioptre (D). Convex lens power is (+), Concave lens power is (-).', ml: 'പവറിന്റെ SI യൂണിറ്റ് ഡയോപ്റ്റർ (D) ആണ്. കോൺവെക്സ് ലെൻസിന്റെ പവർ പോസിറ്റീവും, കോൺകേവ് ലെൻസിന്റേത് നെഗറ്റീവും ആയിരിക്കും.' },

      { type: 'h2', en: '10. Optical Instruments', ml: '10. പ്രകാശിക ഉപകരണങ്ങൾ' },
      { type: 'h3', en: 'Compound Microscope', ml: 'സംയുക്ത മൈക്രോസ്കോപ്പ്' },
      { type: 'p', en: 'Objective: Near the object. Small aperture, short focal length. Eyepiece: Near the eye. Larger aperture, longer focal length than the objective.', ml: 'ഒബ്ജക്ടീവ്: വസ്തുവിന്റെ അടുത്തുള്ള ലെൻസ്. അപ്പർച്ചറും ഫോക്കസ് ദൂരവും കുറവാണ്. ഐപീസ്: കണ്ണിനോട് ചേർന്നുള്ള ലെൻസ്. ഒബ്ജക്ടീവിനേക്കാൾ കൂടിയ അപ്പർച്ചറും ഫോക്കസ് ദൂരവും.' },
      
      { type: 'h3', en: 'Telescope', ml: 'ടെലിസ്കോപ്പ്' },
      { type: 'p', en: 'Objective: Facing the distant object. Large focal length, large aperture. Eyepiece: Near the eye. Short focal length, small aperture.', ml: 'ഒബ്ജക്ടീവ്: വിദൂര വസ്തുവിനെ അഭിമുഖീകരിക്കുന്ന ലെൻസ്. കൂടിയ ഫോക്കസ് ദൂരവും വലിയ അപ്പർച്ചറും. ഐപീസ്: കണ്ണിനോട് ചേർന്നുള്ള ലെൻസ്. കുറഞ്ഞ ഫോക്കസ് ദൂരവും ചെറിയ അപ്പർച്ചറും.' },

      { type: 'h2', en: 'Practice Questions & Answers', ml: 'പരിശീലന ചോദ്യങ്ങളും ഉത്തരങ്ങളും' },
      { type: 'h3', en: 'Q1: Write the main difference between a convex lens and a concave lens.', ml: 'ചോദ്യം 1: കോൺവെക്സ് ലെൻസും കോൺകേവ് ലെൻസും തമ്മിലുള്ള പ്രധാന വ്യത്യാസം എഴുതുക.' },
      { type: 'p', en: 'Answer: A convex lens is thicker in the middle and converges light rays. A concave lens is thinner in the middle and diverges light rays.', ml: 'ഉത്തരം: കോൺവെക്സ് ലെൻസിന് മധ്യഭാഗത്ത് കട്ടി കൂടുതലാണ്; ഇത് പ്രകാശകിരണങ്ങളെ കേന്ദ്രീകരിപ്പിക്കുന്നു. കോൺകേവ് ലെൻസിന് മധ്യഭാഗത്ത് കട്ടി കുറവാണ്; ഇത് പ്രകാശകിരണങ്ങളെ വികേന്ദ്രീകരിപ്പിക്കുന്നു.' },
      { type: 'h3', en: 'Q2: The focal length of a concave lens is 50 cm. Calculate its power.', ml: 'ചോദ്യം 2: ഒരു കോൺകേവ് ലെൻസിന്റെ ഫോക്കസ് ദൂരം 50 cm ആണ്. അതിന്റെ പവർ കണക്കാക്കുക.' },
      { type: 'p', en: 'Answer: f = -50 cm = -0.5 m. Power (P) = 1/f = 1/-0.5 = -2 D.', ml: 'ഉത്തരം: f = -50 cm = -0.5 മീറ്റർ. പവർ (P) = 1/f = 1/-0.5 = -2 D.' },
      { type: 'h3', en: 'Q3: If the magnification produced by a lens is -0.5, what is the nature of the image?', ml: 'ചോദ്യം 3: ഒരു ലെൻസ് ഉണ്ടാക്കുന്ന ആവർധനം -0.5 ആണെങ്കിൽ, പ്രതിബിംബത്തിന്റെ സ്വഭാവം എന്തായിരിക്കും?' },
      { type: 'p', en: 'Answer: Real, Inverted, and Diminished.', ml: 'ഉത്തരം: യഥാർത്ഥം, തലകീഴായത്, ചെറുത്.' }
    ]
  },
  glossary: [
    { term: { en: "Optic Centre", ml: "പ്രകാശിക കേന്ദ്രം" }, definition: { en: "The midpoint of a lens.", ml: "ഒരു ലെൻസിന്റെ മധ്യബിന്ദു." } },
    { term: { en: "Principal Focus", ml: "മുഖ്യ ഫോക്കസ്" }, definition: { en: "Point where parallel rays converge or appear to diverge from.", ml: "സമാന്തര കിരണങ്ങൾ കേന്ദ്രീകരിക്കുകയോ വികേന്ദ്രീകരിക്കുകയോ ചെയ്യുന്ന ബിന്ദു." } },
    { term: { en: "Dioptre", ml: "ഡയോപ്റ്റർ" }, definition: { en: "The SI unit of power of a lens.", ml: "ലെൻസിന്റെ പവറിന്റെ SI യൂണിറ്റ്." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "Which lens is called a converging lens?", ml: "ഏത് ലെൻസിനെയാണ് കൺവെർജിംഗ് ലെൻസ് എന്ന് വിളിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Concave Lens", ml: "കോൺകേവ് ലെൻസ്" } },
        { k: "B", text: { en: "Convex Lens", ml: "കോൺവെക്സ് ലെൻസ്" } },
        { k: "C", text: { en: "Plane Glass", ml: "പ്ലെയിൻ ഗ്ലാസ്" } },
        { k: "D", text: { en: "Cylindrical Lens", ml: "സിലിണ്ടർ ലെൻസ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Convex lenses converge light rays to a point.", ml: "കോൺവെക്സ് ലെൻസുകൾ പ്രകാശകിരണങ്ങളെ ഒരു ബിന്ദുവിലേക്ക് കേന്ദ്രീകരിപ്പിക്കുന്നു." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "The SI unit of power of a lens is:", ml: "ലെൻസിന്റെ പവറിന്റെ SI യൂണിറ്റ്:" },
      options: [
        { k: "A", text: { en: "Metre", ml: "മീറ്റർ" } },
        { k: "B", text: { en: "Watt", ml: "വാട്ട്" } },
        { k: "C", text: { en: "Dioptre", ml: "ഡയോപ്റ്റർ" } },
        { k: "D", text: { en: "Joule", ml: "ജൂൾ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Power is measured in Dioptres (D).", ml: "പവർ അളക്കുന്നത് ഡയോപ്റ്ററിലാണ് (D)." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "A concave lens always forms an image that is:", ml: "ഒരു കോൺകേവ് ലെൻസ് എപ്പോഴും രൂപീകരിക്കുന്ന പ്രതിബിംബം:" },
      options: [
        { k: "A", text: { en: "Real and Inverted", ml: "യഥാർത്ഥവും തലകീഴായതും" } },
        { k: "B", text: { en: "Virtual and Erect", ml: "മിഥ്യയും നിവർന്നതും" } },
        { k: "C", text: { en: "Real and Erect", ml: "യഥാർത്ഥവും നിവർന്നതും" } },
        { k: "D", text: { en: "Virtual and Inverted", ml: "മിഥ്യയും തലകീഴായതും" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Concave lenses always produce virtual, erect, and diminished images.", ml: "കോൺകേവ് ലെൻസുകൾ എപ്പോഴും മിഥ്യയും നിവർന്നതും ചെറുതുമായ പ്രതിബിംബങ്ങൾ നിർമ്മിക്കുന്നു." }
    }
  ]
} as const;
