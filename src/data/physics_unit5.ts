import { Lesson } from './curriculum';

export const physicsUnit5: Lesson = {
  id: 'sc-phy-10-electric-energy',
  title: { en: 'Electric Energy: Consumption and Conservation', ml: 'വൈദ്യുതോർജ്ജം: ഉപയോഗവും സംരക്ഷണവും' },
  estimated_time_mins: 90,
  learning_objectives: [
    { id: 'lo1', text: { en: 'Understand the effects of electric current and energy conversion in appliances.', ml: 'വൈദ്യുത പ്രവാഹത്തിന്റെ ഫലങ്ങളും ഉപകരണങ്ങളിലെ ഊർജ്ജമാറ്റവും മനസ്സിലാക്കുക.' } },
    { id: 'lo2', text: { en: 'Apply Joule\'s Law of heating and calculate electric power and energy.', ml: 'ജൂൾ നിയമം പ്രയോഗിക്കുകയും വൈദ്യുത പവറും ഊർജ്ജവും കണക്കാക്കുകയും ചെയ്യുക.' } },
    { id: 'lo3', text: { en: 'Compare different types of lamps and their energy efficiency.', ml: 'വിവിധ തരം ലാമ്പുകളും അവയുടെ ഊർജ്ജക്ഷമതയും താരതമ്യം ചെയ്യുക.' } },
    { id: 'lo4', text: { en: 'Understand the importance of energy conservation and reducing carbon footprint.', ml: 'ഊർജ്ജ സംരക്ഷണത്തിന്റെ പ്രാധാന്യവും കാർബൺ ഫുട്പ്രിന്റ് കുറയ്ക്കുന്നതും മനസ്സിലാക്കുക.' } }
  ],
  content: {
    intro: {
      en: 'In our daily life, we use various electrical appliances. Have you ever wondered how they work and how much energy they consume? This chapter explores the effects of electric current, how to calculate power and energy, and the importance of conserving energy for a sustainable future.',
      ml: 'നമ്മുടെ ദൈനംദിന ജീവിതത്തിൽ നാം വിവിധ വൈദ്യുത ഉപകരണങ്ങൾ ഉപയോഗിക്കുന്നു. അവ എങ്ങനെ പ്രവർത്തിക്കുന്നുവെന്നും അവ എത്രമാത്രം ഊർജ്ജം ഉപയോഗിക്കുന്നുവെന്നും നിങ്ങൾ എപ്പോഴെങ്കിലും ചിന്തിച്ചിട്ടുണ്ടോ? ഈ അധ്യായം വൈദ്യുത പ്രവാഹത്തിന്റെ ഫലങ്ങൾ, പവറും ഊർജ്ജവും എങ്ങനെ കണക്കാക്കാം, സുസ്ഥിരമായ ഒരു ഭാവിക്കായി ഊർജ്ജം സംരക്ഷിക്കേണ്ടതിന്റെ പ്രാധാന്യം എന്നിവ പര്യവേക്ഷണം ചെയ്യുന്നു.'
    },
    core: { en: '', ml: '' },
    blocks: [
      { type: 'h2', en: '1. Effects of Electric Current', ml: '1. വൈദ്യുത പ്രവാഹത്തിന്റെ ഫലങ്ങൾ' },
      { type: 'p', en: 'Electrical appliances convert electric energy into different forms of energy.', ml: 'വൈദ്യുത ഉപകരണങ്ങൾ വൈദ്യുതോർജ്ജത്തെ മറ്റ് ഊർജ്ജരൂപങ്ങളാക്കി മാറ്റുന്നു.' },
      { type: 'p', en: 'The useful form of energy into which an appliance mainly converts electric energy is considered the effect of electric current in that appliance.', ml: 'ഒരു ഉപകരണം വൈദ്യുതോർജ്ജത്തെ പ്രധാനമായും ഏത് ഉപയോഗപ്രദമായ ഊർജ്ജരൂപത്തിലേക്കാണോ മാറ്റുന്നത്, അതാണ് ആ ഉപകരണത്തിലെ വൈദ്യുത പ്രവാഹത്തിന്റെ ഫലമായി കണക്കാക്കുന്നത്.' },
      { type: 'h3', en: 'Table 5.1: Appliances and Effects', ml: 'പട്ടിക 5.1: ഉപകരണങ്ങളും ഫലങ്ങളും' },
      { type: 'table', tableData: {
        headers: [{en: 'Appliance', ml: 'ഉപകരണം'}, {en: 'Input Energy', ml: 'നൽകുന്ന ഊർജ്ജം'}, {en: 'Output Energy', ml: 'ലഭിക്കുന്ന ഊർജ്ജം'}, {en: 'Effect of Electric Current', ml: 'വൈദ്യുത പ്രവാഹ ഫലം'}],
        rows: [
          [{en: 'Electric kettle', ml: 'ഇലക്ട്രിക് കെറ്റിൽ'}, {en: 'Electric energy', ml: 'വൈദ്യുതോർജ്ജം'}, {en: 'Heat energy', ml: 'താപോർജ്ജം'}, {en: 'Heating effect', ml: 'താപഫലം'}],
          [{en: 'Mixie / Fan', ml: 'മിക്സി / ഫാൻ'}, {en: 'Electric energy', ml: 'വൈദ്യുതോർജ്ജം'}, {en: 'Mechanical energy', ml: 'യാന്ത്രികോർജ്ജം'}, {en: 'Mechanical effect', ml: 'യാന്ത്രികഫലം'}],
          [{en: 'Electric bulb', ml: 'ഇലക്ട്രിക് ബൾബ്'}, {en: 'Electric energy', ml: 'വൈദ്യുതോർജ്ജം'}, {en: 'Light energy', ml: 'പ്രകാശോർജ്ജം'}, {en: 'Lighting effect', ml: 'പ്രകാശഫലം'}]
        ]
      }},

      { type: 'h2', en: '2. Heating Effect of Electric Current & Joule\'s Law', ml: '2. വൈദ്യുത പ്രവാഹത്തിന്റെ താപഫലവും ജൂൾ നിയമവും' },
      { type: 'p', en: 'When current passes through a conductor, a part of the electric energy is converted into heat energy. This is the heating effect.', ml: 'ഒരു ചാലകത്തിലൂടെ വൈദ്യുതി കടന്നുപോകുമ്പോൾ, വൈദ്യുതോർജ്ജത്തിന്റെ ഒരു ഭാഗം താപോർജ്ജമായി മാറുന്നു. ഇതാണ് വൈദ്യുത പ്രവാഹത്തിന്റെ താപഫലം.' },
      { type: 'p', en: '**Joule\'s Law:** The heat ($H$) generated in a current-carrying conductor is directly proportional to the product of the square of the current ($I^2$), the resistance of the conductor ($R$), and the time of flow of current ($t$).', ml: '**ജൂൾ നിയമം:** ഒരു ചാലകത്തിലൂടെ വൈദ്യുതി കടന്നുപോകുമ്പോൾ ഉണ്ടാകുന്ന താപം ($H$), വൈദ്യുത പ്രവാഹ തീവ്രതയുടെ വർഗ്ഗം ($I^2$), ചാലകത്തിന്റെ പ്രതിരോധം ($R$), വൈദ്യുതി പ്രവഹിക്കുന്ന സമയം ($t$) എന്നിവയുടെ ഗുണനഫലത്തിന് നേർഅനുപാതത്തിലായിരിക്കും.' },
      { type: 'formula', en: 'Equation: H = I²Rt\n(Unit of heat is Joules)', ml: 'സമവാക്യം: H = I²Rt\n(താപത്തിന്റെ യൂണിറ്റ് ജൂൾ ആണ്)' },
      
      { type: 'h3', en: 'Other forms of Joule\'s Law equations:', ml: 'ജൂൾ നിയമത്തിന്റെ മറ്റ് സമവാക്യങ്ങൾ:' },
      { type: 'table', tableData: {
        headers: [{en: 'Formula', ml: 'സമവാക്യം'}, {en: 'Used When', ml: 'എപ്പോൾ ഉപയോഗിക്കണം'}, {en: 'Variables Meaning', ml: 'ചരങ്ങളുടെ അർത്ഥം'}],
        rows: [
          [{en: 'H = I²Rt', ml: 'H = I²Rt'}, {en: 'Current (I), Resistance (R), Time (t) are given', ml: 'I, R, t എന്നിവ തരുമ്പോൾ'}, {en: 'I = Current, R = Resistance', ml: 'I = വൈദ്യുത പ്രവാഹം, R = പ്രതിരോധം'}],
          [{en: 'H = VIt', ml: 'H = VIt'}, {en: 'Voltage (V), Current (I), Time (t) are given', ml: 'V, I, t എന്നിവ തരുമ്പോൾ'}, {en: 'V = Voltage, I = Current', ml: 'V = വോൾട്ടേജ്, I = വൈദ്യുത പ്രവാഹം'}],
          [{en: 'H = (V²t) / R', ml: 'H = (V²t) / R'}, {en: 'Voltage (V), Resistance (R), Time (t) are given', ml: 'V, R, t എന്നിവ തരുമ്പോൾ'}, {en: 'V = Voltage, R = Resistance', ml: 'V = വോൾട്ടേജ്, R = പ്രതിരോധം'}]
        ]
      }},

      { type: 'img', en: 'Joule\'s Law Simulation', ml: 'ജൂൾ നിയമം - സിമുലേഷൻ', customId: 'joules-law-simulation' },

      { type: 'h2', en: '3. Heating Appliances and Heating Elements', ml: '3. താപനോപകരണങ്ങളും ഹീറ്റിംഗ് എലമെന്റും' },
      { type: 'p', en: 'Devices that work on the heating effect of electric current are called heating appliances. The part of the appliance that produces heat is the heating element.', ml: 'വൈദ്യുത പ്രവാഹത്തിന്റെ താപഫലത്തെ അടിസ്ഥാനമാക്കി പ്രവർത്തിക്കുന്ന ഉപകരണങ്ങളാണ് താപനോപകരണങ്ങൾ. താപനോപകരണങ്ങളിൽ താപം ഉൽപ്പാദിപ്പിക്കുന്ന ഭാഗമാണ് ഹീറ്റിംഗ് എലമെന്റ്.' },
      { type: 'p', en: '**Nichrome** is an alloy of Nickel, Chromium, and Iron used as the heating element.', ml: 'നിക്കൽ, ക്രോമിയം, ഇരുമ്പ് എന്നിവയുടെ സങ്കരലോഹമായ **നിക്രോം** ആണ് ഹീറ്റിംഗ് എലമെന്റായി ഉപയോഗിക്കുന്നത്.' },
      { type: 'h3', en: 'Properties of Nichrome', ml: 'നിക്രോമിന്റെ സവിശേഷതകൾ' },
      { type: 'p', en: '1. High resistivity\n2. High melting point\n3. Ability to remain in red hot condition for a long time without melting\n4. High resistance to oxidation', ml: '1. ഉയർന്ന റെസിസ്റ്റിവിറ്റി\n2. ഉയർന്ന ദ്രവണാങ്കം\n3. ഉരുകാതെ ദീർഘനേരം ചുട്ടുപഴുത്ത അവസ്ഥയിൽ നിൽക്കാനുള്ള കഴിവ്\n4. ഓക്സീകരണത്തെ പ്രതിരോധിക്കാനുള്ള ഉയർന്ന കഴിവ്' },

      { type: 'h2', en: '4. Electric Power', ml: '4. വൈദ്യുത പവർ' },
      { type: 'p', en: 'Electric power is the amount of electric energy consumed by an electrical appliance in one second.', ml: 'ഒരു വൈദ്യുത ഉപകരണം ഒരു സെക്കൻഡിൽ വിനിയോഗിക്കുന്ന വൈദ്യുതോർജ്ജത്തിന്റെ അളവാണ് വൈദ്യുത പവർ.' },
      { type: 'p', en: 'The SI unit of power is **Watt (W)**.', ml: 'പവറിന്റെ SI യൂണിറ്റ് **വാട്ട് (W)** ആണ്.' },
      { type: 'h3', en: 'Equations for Power', ml: 'പവർ കാണാനുള്ള സമവാക്യങ്ങൾ' },
      { type: 'formula', en: 'P = W / t  or  P = H / t\nP = VI\nP = I²R\nP = V² / R', ml: 'P = W / t  അല്ലെങ്കിൽ  P = H / t\nP = VI\nP = I²R\nP = V² / R' },

      { type: 'h2', en: '5. Commercial Unit of Electric Energy', ml: '5. വൈദ്യുതോർജ്ജത്തിന്റെ വാണിജ്യ യൂണിറ്റ്' },
      { type: 'p', en: 'The commercial unit of electrical energy is **kilowatt-hour (kWh)**.', ml: 'വൈദ്യുതോർജ്ജത്തിന്റെ വാണിജ്യ യൂണിറ്റ് **കിലോവാട്ട് അവർ (kWh)** ആണ്.' },
      { type: 'p', en: '1 kWh is the electrical energy consumed when an appliance of power 1 kilowatt (1000 W) works for 1 hour. 1 kWh is also known as 1 unit (Board of Trade unit / BOT).', ml: '1 കിലോവാട്ട് (1000 W) പവറുള്ള ഒരു ഉപകരണം 1 മണിക്കൂർ പ്രവർത്തിക്കുമ്പോൾ വിനിയോഗിക്കപ്പെടുന്ന വൈദ്യുതോർജ്ജമാണ് 1 kWh. 1 kWh നെ 1 യൂണിറ്റ് (BOT യൂണിറ്റ്) എന്നും വിളിക്കുന്നു.' },
      { type: 'formula', en: 'Energy in kWh = (Power (in Watts) × Time (in hours)) / 1000', ml: 'ഊർജ്ജം (kWh ൽ) = (പവർ (വാട്ടിൽ) × സമയം (മണിക്കൂറിൽ)) / 1000' },

      { type: 'h2', en: '6. Lighting Effect of Electric Current', ml: '6. വൈദ്യുത പ്രവാഹത്തിന്റെ പ്രകാശഫലം' },
      { type: 'h3', en: 'Incandescent Bulbs', ml: 'ഇൻകാൻഡസെന്റ് ബൾബുകൾ' },
      { type: 'p', en: 'They work on the heating effect. **Tungsten** is used as the filament.', ml: 'ഇവ താപഫലത്തിന്റെ അടിസ്ഥാനത്തിൽ പ്രവർത്തിക്കുന്നു. **ടങ്സ്റ്റൺ** ആണ് ഫിലമെന്റായി ഉപയോഗിക്കുന്നത്.' },
      { type: 'p', en: '**Properties of Tungsten:** High melting point, high resistivity, high ductility, emits white light when white-hot.', ml: '**ടങ്സ്റ്റണിന്റെ സവിശേഷതകൾ:** ഉയർന്ന ദ്രവണാങ്കം, ഉയർന്ന റെസിസ്റ്റിവിറ്റി, ഉയർന്ന ഡക്റ്റിലിറ്റി, ചുട്ടുപഴുക്കുമ്പോൾ ധവളപ്രകാശം പുറപ്പെടുവിക്കാനുള്ള കഴിവ്.' },
      { type: 'p', en: 'The bulb is filled with inert gases like Nitrogen or Argon at low pressure to prevent vaporization of the filament.', ml: 'ഫിലമെന്റ് ബാഷ്പീകരിക്കുന്നത് തടയാൻ നൈട്രജൻ, ആർഗൺ തുടങ്ങിയ അലസവാതകങ്ങൾ കുറഞ്ഞ മർദ്ദത്തിൽ ബൾബിൽ നിറയ്ക്കുന്നു.' },
      
      { type: 'h3', en: 'Discharge Lamps', ml: 'ഡിസ്ചാർജ് ലാമ്പുകൾ' },
      { type: 'p', en: 'Glass tubes filled with gases at low pressure. When current passes through, gas molecules get excited and emit light. They contain no filament.', ml: 'കുറഞ്ഞ മർദ്ദത്തിൽ വാതകം നിറച്ച ഗ്ലാസ് ട്യൂബുകളാണിവ. വൈദ്യുതി കടന്നുപോകുമ്പോൾ വാതക തന്മാത്രകൾ ഉത്തേജിപ്പിക്കപ്പെടുകയും പ്രകാശം പുറപ്പെടുവിക്കുകയും ചെയ്യുന്നു. ഇവയിൽ ഫിലമെന്റ് ഇല്ല.' },
      { type: 'p', en: '**Fluorescent Lamps:** UV rays produced by discharge through mercury vapor are absorbed by the fluorescent coating on the tube, emitting visible light.', ml: '**ഫ്ലൂറസെന്റ് ലാമ്പുകൾ:** മെർക്കുറി ബാഷ്പത്തിലൂടെയുള്ള ഡിസ്ചാർജ് വഴി അൾട്രാവയലറ്റ് കിരണങ്ങൾ ഉണ്ടാകുന്നു. ട്യൂബിലെ ഫ്ലൂറസെന്റ് പൂശ് ഇത് ആഗിരണം ചെയ്ത് ദൃശ്യപ്രകാശം പുറപ്പെടുവിക്കുന്നു.' },

      { type: 'h3', en: 'LED Bulbs (Light Emitting Diodes)', ml: 'എൽ.ഇ.ഡി ബൾബുകൾ' },
      { type: 'p', en: '**Advantages of LED:** Less energy consumption, long lifespan, no harmful substances like mercury, environmentally friendly, high efficiency.', ml: '**എൽ.ഇ.ഡി യുടെ ഗുണങ്ങൾ:** കുറഞ്ഞ ഊർജ്ജ ഉപഭോഗം, ദീർഘായുസ്സ്, മെർക്കുറി പോലുള്ള ദോഷകരമായ വസ്തുക്കൾ ഇല്ലാത്തത്, പരിസ്ഥിതി സൗഹൃദം, ഉയർന്ന കാര്യക്ഷമത.' },

      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Incandescent', ml: 'ഇൻകാൻഡസെന്റ്'}, {en: 'Fluorescent', ml: 'ഫ്ലൂറസെന്റ്'}, {en: 'LED', ml: 'എൽ.ഇ.ഡി'}],
        rows: [
          [{en: 'Efficiency', ml: 'കാര്യക്ഷമത'}, {en: 'Low', ml: 'കുറവ്'}, {en: 'Medium', ml: 'ശരാശരി'}, {en: 'High', ml: 'കൂടുതൽ'}],
          [{en: 'Lifespan', ml: 'ആയുസ്സ്'}, {en: 'Short', ml: 'കുറവ്'}, {en: 'Medium', ml: 'ശരാശരി'}, {en: 'Long', ml: 'കൂടുതൽ'}],
          [{en: 'Heat loss', ml: 'താപനഷ്ടം'}, {en: 'High', ml: 'കൂടുതൽ'}, {en: 'Low', ml: 'കുറവ്'}, {en: 'Very Low', ml: 'വളരെ കുറവ്'}]
        ]
      }},

      { type: 'h2', en: '7. Energy Conservation and Carbon Footprint', ml: '7. ഊർജ്ജ സംരക്ഷണവും കാർബൺ ഫുട്പ്രിന്റും' },
      { type: 'p', en: 'Reducing unnecessary use of electricity conserves fossil fuels and reduces greenhouse gas emissions.', ml: 'വൈദ്യുതിയുടെ അനാവശ്യ ഉപയോഗം കുറയ്ക്കുന്നത് ഫോസിൽ ഇന്ധനങ്ങളെ സംരക്ഷിക്കാനും ഹരിതഗൃഹ വാതകങ്ങളുടെ പുറന്തള്ളൽ കുറയ്ക്കാനും സഹായിക്കും.' },
      { type: 'p', en: '**Carbon Footprint** is the total amount of greenhouse gases generated by our actions.', ml: 'നമ്മുടെ പ്രവർത്തനങ്ങളുടെ ഫലമായി ഉണ്ടാകുന്ന ഹരിതഗൃഹ വാതകങ്ങളുടെ ആകെ അളവാണ് **കാർബൺ ഫുട്പ്രിന്റ്**.' },
      { type: 'p', en: 'Using energy-efficient appliances (like LEDs, star-rated appliances) reduces our carbon footprint.', ml: 'ഊർജ്ജക്ഷമതയുള്ള ഉപകരണങ്ങൾ (എൽ.ഇ.ഡി, സ്റ്റാർ റേറ്റിംഗ് ഉള്ള ഉപകരണങ്ങൾ) ഉപയോഗിക്കുന്നത് കാർബൺ ഫുട്പ്രിന്റ് കുറയ്ക്കുന്നു.' },

      { type: 'h2', en: 'Graphs', ml: 'ഗ്രാഫുകൾ' },
      { type: 'p', en: '📈 **Heat (H) vs Current (I)**\n(A parabolic curve showing H ∝ I²)', ml: '📈 **താപം (H) vs വൈദ്യുത പ്രവാഹം (I)**\n(H ∝ I² കാണിക്കുന്ന പരാബോളിക് കർവ്)' },
      { type: 'p', en: '```\n H |\n   |      /\n   |    /\n   |  /\n   | /\n   |/__________ I\n```', ml: '```\n H |\n   |      /\n   |    /\n   |  /\n   | /\n   |/__________ I\n```' },

      { type: 'h2', en: 'Concept Map', ml: 'കൺസെപ്റ്റ് മാപ്പ്' },
      { type: 'p', en: 'Electric Current → Heating Effect → Joule\'s Law → Electric Power → Energy Consumption → Commercial Unit → Energy Conservation → Carbon Footprint', ml: 'വൈദ്യുത പ്രവാഹം → താപഫലം → ജൂൾ നിയമം → വൈദ്യുത പവർ → ഊർജ്ജ ഉപഭോഗം → വാണിജ്യ യൂണിറ്റ് → ഊർജ്ജ സംരക്ഷണം → കാർബൺ ഫുട്പ്രിന്റ്' },

      { type: 'h2', en: '🎯 Quick Revision Box', ml: '🎯 ദ്രുത പുനരവലോകനം' },
      { type: 'table', tableData: {
        headers: [{en: 'Concept', ml: 'ആശയം'}, {en: 'Key Point', ml: 'പ്രധാന പോയിന്റ്'}],
        rows: [
          [{en: 'Heating Element', ml: 'ഹീറ്റിംഗ് എലമെന്റ്'}, {en: 'Nichrome (Ni, Cr, Fe)', ml: 'നിക്രോം (Ni, Cr, Fe)'}],
          [{en: 'Bulb Filament', ml: 'ബൾബ് ഫിലമെന്റ്'}, {en: 'Tungsten', ml: 'ടങ്സ്റ്റൺ'}],
          [{en: 'Bulb Gas', ml: 'ബൾബിലെ വാതകം'}, {en: 'Nitrogen / Argon', ml: 'നൈട്രജൻ / ആർഗൺ'}],
          [{en: 'Commercial Unit', ml: 'വാണിജ്യ യൂണിറ്റ്'}, {en: '1 kWh = 1 Unit', ml: '1 kWh = 1 യൂണിറ്റ്'}]
        ]
      }},

      { type: 'h2', en: '👨‍🏫 Teacher Notes', ml: '👨‍🏫 അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ' },
      { type: 'p', en: '• Demonstrate Nichrome wire heating using a safe low-voltage supply.\n• Show an actual electric bill and calculate the units consumed.\n• Compare the brightness and heat of an incandescent bulb vs LED using a wattmeter.', ml: '• സുരക്ഷിതമായ കുറഞ്ഞ വോൾട്ടേജ് ഉപയോഗിച്ച് നിക്രോം വയർ ചൂടാകുന്നത് കാണിക്കുക.\n• ഒരു യഥാർത്ഥ വൈദ്യുതി ബിൽ കാണിച്ച് ഉപയോഗിച്ച യൂണിറ്റുകൾ കണക്കാക്കുക.\n• വാട്ട്മീറ്റർ ഉപയോഗിച്ച് ഇൻകാൻഡസെന്റ് ബൾബിന്റെയും എൽ.ഇ.ഡിയുടെയും പ്രകാശവും താപവും താരതമ്യം ചെയ്യുക.' },

      { type: 'h2', en: '📝 Student Summary Sheet', ml: '📝 വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ ഷീറ്റ്' },
      { type: 'p', en: '1. **Joule\'s Law:** H = I²Rt\n2. **Power:** P = VI = I²R = V²/R\n3. **Energy:** E = Pt (in kWh for commercial use)\n4. **Nichrome:** High resistivity, high melting point.\n5. **Tungsten:** High melting point, emits white light.\n6. **LED:** Most efficient, long life, eco-friendly.', ml: '1. **ജൂൾ നിയമം:** H = I²Rt\n2. **പവർ:** P = VI = I²R = V²/R\n3. **ഊർജ്ജം:** E = Pt (വാണിജ്യ ആവശ്യങ്ങൾക്ക് kWh-ൽ)\n4. **നിക്രോം:** ഉയർന്ന റെസിസ്റ്റിവിറ്റി, ഉയർന്ന ദ്രവണാങ്കം.\n5. **ടങ്സ്റ്റൺ:** ഉയർന്ന ദ്രവണാങ്കം, ധവളപ്രകാശം നൽകുന്നു.\n6. **LED:** ഏറ്റവും കാര്യക്ഷമതയുള്ളത്, ദീർഘായുസ്സ്, പരിസ്ഥിതി സൗഹൃദം.' }
    ]
  },
  glossary: [
    { term: { en: 'Carbon Footprint', ml: 'കാർബൺ ഫുട്പ്രിന്റ്' }, definition: { en: 'The total amount of greenhouse gases generated by our actions.', ml: 'നമ്മുടെ പ്രവർത്തനങ്ങളുടെ ഫലമായി ഉണ്ടാകുന്ന ഹരിതഗൃഹ വാതകങ്ങളുടെ ആകെ അളവ്.' } },
    { term: { en: 'Nichrome', ml: 'നിക്രോം' }, definition: { en: 'An alloy of Nickel, Chromium, and Iron used as a heating element.', ml: 'നിക്കൽ, ക്രോമിയം, ഇരുമ്പ് എന്നിവയുടെ സങ്കരലോഹം, ഹീറ്റിംഗ് എലമെന്റായി ഉപയോഗിക്കുന്നു.' } },
    { term: { en: 'Kilowatt-hour (kWh)', ml: 'കിലോവാട്ട് അവർ (kWh)' }, definition: { en: 'The commercial unit of electrical energy.', ml: 'വൈദ്യുതോർജ്ജത്തിന്റെ വാണിജ്യ യൂണിറ്റ്.' } }
  ],
  quiz: [
    {
      q_id: 'q1',
      type: 'mcq',
      stem: { en: 'State Joule\'s Law of heating. Which of the following is the correct equation?', ml: 'ജൂൾ നിയമം പ്രസ്താവിക്കുക. താഴെ പറയുന്നവയിൽ ശരിയായ സമവാക്യം ഏത്?' },
      options: [
        { k: 'A', text: { en: 'H = IRt', ml: 'H = IRt' } },
        { k: 'B', text: { en: 'H = I²Rt', ml: 'H = I²Rt' } },
        { k: 'C', text: { en: 'H = IR²t', ml: 'H = IR²t' } },
        { k: 'D', text: { en: 'H = V²Rt', ml: 'H = V²Rt' } }
      ],
      answer: 'B',
      explanation: { en: 'According to Joule\'s Law, heat generated is proportional to the square of current, resistance, and time.', ml: 'ജൂൾ നിയമപ്രകാരം, ഉണ്ടാകുന്ന താപം വൈദ്യുത പ്രവാഹത്തിന്റെ വർഗ്ഗം, പ്രതിരോധം, സമയം എന്നിവയ്ക്ക് നേർഅനുപാതത്തിലാണ്.' }
    },
    {
      q_id: 'q2',
      type: 'mcq',
      stem: { en: 'Which alloy is used as the heating element in appliances like the electric iron?', ml: 'ഇലക്ട്രിക് അയൺ പോലുള്ള ഉപകരണങ്ങളിൽ ഹീറ്റിംഗ് എലമെന്റായി ഉപയോഗിക്കുന്ന സങ്കരലോഹം ഏത്?' },
      options: [
        { k: 'A', text: { en: 'Tungsten', ml: 'ടങ്സ്റ്റൺ' } },
        { k: 'B', text: { en: 'Copper', ml: 'ചെമ്പ്' } },
        { k: 'C', text: { en: 'Nichrome', ml: 'നിക്രോം' } },
        { k: 'D', text: { en: 'Aluminum', ml: 'അലുമിനിയം' } }
      ],
      answer: 'C',
      explanation: { en: 'Nichrome is used because of its high resistivity and high melting point.', ml: 'ഉയർന്ന റെസിസ്റ്റിവിറ്റിയും ഉയർന്ന ദ്രവണാങ്കവും ഉള്ളതിനാലാണ് നിക്രോം ഉപയോഗിക്കുന്നത്.' }
    },
    {
      q_id: 'q3',
      type: 'mcq',
      stem: { en: 'What is the commercial unit of electric energy?', ml: 'വൈദ്യുതോർജ്ജത്തിന്റെ വാണിജ്യ യൂണിറ്റ് എന്ത്?' },
      options: [
        { k: 'A', text: { en: 'Watt', ml: 'വാട്ട്' } },
        { k: 'B', text: { en: 'Joule', ml: 'ജൂൾ' } },
        { k: 'C', text: { en: 'Kilowatt-hour (kWh)', ml: 'കിലോവാട്ട് അവർ (kWh)' } },
        { k: 'D', text: { en: 'Volt', ml: 'വോൾട്ട്' } }
      ],
      answer: 'C',
      explanation: { en: '1 kWh is the electrical energy consumed when an appliance of power 1 kilowatt works for 1 hour.', ml: '1 കിലോവാട്ട് പവറുള്ള ഒരു ഉപകരണം 1 മണിക്കൂർ പ്രവർത്തിക്കുമ്പോൾ വിനിയോഗിക്കപ്പെടുന്ന വൈദ്യുതോർജ്ജമാണ് 1 kWh.' }
    },
    {
      q_id: 'q4',
      type: 'mcq',
      stem: { en: 'Why are inert gases filled in incandescent bulbs?', ml: 'ഇൻകാൻഡസെന്റ് ബൾബുകളിൽ അലസവാതകങ്ങൾ നിറയ്ക്കുന്നത് എന്തുകൊണ്ട്?' },
      options: [
        { k: 'A', text: { en: 'To increase brightness', ml: 'പ്രകാശം കൂട്ടാൻ' } },
        { k: 'B', text: { en: 'To prevent vaporization of the filament', ml: 'ഫിലമെന്റ് ബാഷ്പീകരിക്കുന്നത് തടയാൻ' } },
        { k: 'C', text: { en: 'To change the color of light', ml: 'പ്രകാശത്തിന്റെ നിറം മാറ്റാൻ' } },
        { k: 'D', text: { en: 'To reduce electricity consumption', ml: 'വൈദ്യുതി ഉപയോഗം കുറയ്ക്കാൻ' } }
      ],
      answer: 'B',
      explanation: { en: 'Inert gases prevent the glowing tungsten filament from vaporizing, increasing its lifespan.', ml: 'ചുട്ടുപഴുത്തിരിക്കുന്ന ടങ്സ്റ്റൺ ഫിലമെന്റ് ബാഷ്പീകരിക്കുന്നത് തടയാനും ആയുസ്സ് വർദ്ധിപ്പിക്കാനും അലസവാതകങ്ങൾ സഹായിക്കുന്നു.' }
    },
    {
      q_id: 'q5',
      type: 'mcq',
      stem: { en: 'If an appliance of power 500 W operates for 4 hours, calculate the electrical energy consumed in units (kWh).', ml: '500 W പവറുള്ള ഒരു ഉപകരണം 4 മണിക്കൂർ പ്രവർത്തിച്ചാൽ വിനിയോഗിക്കപ്പെടുന്ന വൈദ്യുതോർജ്ജം യൂണിറ്റിൽ (kWh) കണക്കാക്കുക.' },
      options: [
        { k: 'A', text: { en: '2000 Units', ml: '2000 യൂണിറ്റ്' } },
        { k: 'B', text: { en: '20 Units', ml: '20 യൂണിറ്റ്' } },
        { k: 'C', text: { en: '2 Units', ml: '2 യൂണിറ്റ്' } },
        { k: 'D', text: { en: '0.5 Units', ml: '0.5 യൂണിറ്റ്' } }
      ],
      answer: 'C',
      explanation: { en: 'Energy = (Power × Time) / 1000 = (500 × 4) / 1000 = 2 kWh (2 Units).', ml: 'ഊർജ്ജം = (പവർ × സമയം) / 1000 = (500 × 4) / 1000 = 2 kWh (2 യൂണിറ്റ്).' }
    }
  ]
};
