import { Lesson } from './curriculum';

export const socSci1Ch1: Lesson = {
  id: 'so-hist-10-humanism',
  title: {
    en: 'Chapter 1: Humanism',
    ml: 'അധ്യായം 1: മാനവികത'
  },
  estimated_time_mins: 90,
  learning_objectives: [
    { id: 'lo1', text: { en: 'Understand the origins and causes of the Renaissance in Italy.', ml: 'ഇറ്റലിയിലെ നവോത്ഥാനത്തിന്റെ ഉത്ഭവവും കാരണങ്ങളും മനസ്സിലാക്കുക.' } },
    { id: 'lo2', text: { en: 'Explain the concept of Humanism.', ml: 'മാനവികത എന്ന ആശയം വിശദീകരിക്കുക.' } },
    { id: 'lo3', text: { en: 'Analyze the impact of Renaissance on art, literature, and science.', ml: 'കല, സാഹിത്യം, ശാസ്ത്രം എന്നിവയിൽ നവോത്ഥാനത്തിന്റെ സ്വാധീനം വിശകലനം ചെയ്യുക.' } }
  ],
  content: {
    intro: {
      en: 'The Renaissance was a period of transition from medieval feudalism to the modern age, characterized by a revival of ancient Greco-Roman culture.',
      ml: 'മധ്യകാല നാടുവാഴിത്തത്തിൽ നിന്നും ആധുനിക യുഗത്തിലേക്കുള്ള ഒരു മാറ്റത്തിന്റെ കാലഘട്ടമാണ് നവോത്ഥാനം. പ്രാചീന ഗ്രീക്കോ-റോമൻ സംസ്കാരത്തെ പുനരുജ്ജീവിപ്പിക്കാനുള്ള പ്രവണതയായിരുന്നു ഇതിന്റെ പ്രത്യേകത.'
    },
    core: {
      en: 'Renaissance means "rebirth". It marked a shift from God-centered thinking to human-centered thinking, known as Humanism.',
      ml: '"നവോത്ഥാനം" എന്ന വാക്കിനർത്ഥം "പുനർജന്മം" എന്നാണ്. ഇത് ദൈവത്തെ കേന്ദ്രീകരിച്ചുള്ള ചിന്തയിൽ നിന്ന് മനുഷ്യനെ കേന്ദ്രീകരിച്ചുള്ള ചിന്തയിലേക്ക് (മാനവികത) മാറുന്നതിനെ അടയാളപ്പെടുത്തി.'
    },
    blocks: [
      { type: 'h2', en: 'Introduction to Renaissance', ml: 'നവോത്ഥാനത്തിലേക്കുള്ള ആമുഖം' },
      { type: 'p', en: 'In the 13th century, scientific philosopher Roger Bacon emphasized the importance of rationalism, knowledge, and love. From the 14th century onwards, a series of changes took place in the social, economic, and political spheres of Europe.', ml: 'പതിമൂന്നാം നൂറ്റാണ്ടിൽ, ശാസ്ത്രീയ ചിന്തകനായ റോജർ ബേക്കൺ യുക്തിചിന്ത, അറിവ്, സ്നേഹം എന്നിവയുടെ പ്രാധാന്യം ഊന്നിപ്പറഞ്ഞു. പതിനാലാം നൂറ്റാണ്ടോടെ യൂറോപ്പിന്റെ സാമൂഹിക, സാമ്പത്തിക, രാഷ്ട്രീയ മണ്ഡലങ്ങളിൽ നിരവധി മാറ്റങ്ങളുണ്ടായി.' },
      
      { type: 'h2', en: 'Why Renaissance in Italy?', ml: 'എന്തുകൊണ്ട് ഇറ്റലിയിൽ നവോത്ഥാനം?' },
      { type: 'p', en: 'Cities in Italy (like Florence, Milan, and Venice) were more independent, wealthy, and dynamic. Reasons include the Crusades, wealthy families, the Black Death, and the Fall of Constantinople.', ml: 'ഇറ്റലിയിലെ നഗരങ്ങൾ (ഫ്ലോറൻസ്, മിലാൻ, വെനീസ് തുടങ്ങിയവ) കൂടുതൽ സ്വതന്ത്രവും സമ്പന്നവും ഊർജ്ജസ്വലവുമായിരുന്നു. കുരിശുയുദ്ധങ്ങൾ, സമ്പന്ന കുടുംബങ്ങൾ, കരിമരണം, കോൺസ്റ്റാന്റിനോപ്പിളിന്റെ പതനം എന്നിവ ഇതിന് കാരണമായി.' },
      
      { type: 'h2', en: 'Humanism', ml: 'മാനവികത' },
      { type: 'p', en: 'Humanism emerged as a departure from Scholasticism, emphasizing human experience, emotions, and rational inquiry. Human beings were placed at the center of thought instead of religion.', ml: 'മതത്തിന് പകരം മനുഷ്യൻ ചിന്തകളുടെ കേന്ദ്രബിന്ദുവായി മാറി. മനുഷ്യന്റെ അനുഭവങ്ങൾക്കും, വികാരങ്ങൾക്കും, യുക്തിചിന്തയ്ക്കും പ്രാധാന്യം നൽകിക്കൊണ്ട് മാനവികത ഉയർന്നുവന്നു.' },
      
      { type: 'h2', en: 'Renaissance Art', ml: 'നവോത്ഥാന കല' },
      { type: 'p', en: 'Renaissance art represented human beings realistically. Painters used natural colors, light, spatial depth, and strict human anatomy. Key figures: Leonardo da Vinci, Michelangelo, Donatello, Filippo Brunelleschi.', ml: 'നവോത്ഥാന കല മനുഷ്യരെ യഥാർത്ഥ രീതിയിൽ ചിത്രീകരിച്ചു. ചിത്രകാരന്മാർ സ്വാഭാവിക നിറങ്ങൾ, പ്രകാശം, ത്രിമാനത, കൃത്യമായ ശരീരശാസ്ത്രം എന്നിവ ഉപയോഗിച്ചു. ലിയനാർഡോ ഡാവിഞ്ചി, മൈക്കലാഞ്ചലോ, ഡൊണാറ്റെല്ലോ, ഫിലിപ്പോ ബ്രൂണെല്ലെസ്കി എന്നിവർ പ്രധാനികളാണ്.' },
      
      { type: 'h2', en: 'Renaissance Literature & Printing Press', ml: 'നവോത്ഥാന സാഹിത്യവും അച്ചടിയന്ത്രവും' },
      { type: 'p', en: 'Writers prioritized secular values and wrote in regional languages. Johannes Gutenberg invented the movable type printing press in the 15th century, leading to rapid dissemination of knowledge.', ml: 'എഴുത്തുകാർ മതേതര മൂല്യങ്ങൾക്ക് പ്രാധാന്യം നൽകുകയും പ്രാദേശിക ഭാഷകളിൽ എഴുതുകയും ചെയ്തു. പതിനഞ്ചാം നൂറ്റാണ്ടിൽ ജോഹന്നാസ് ഗുട്ടൻബർഗ് ചലിപ്പിക്കാവുന്ന അച്ചടിയന്ത്രം കണ്ടുപിടിച്ചു, ഇത് അറിവിന്റെ വ്യാപനത്തിന് സഹായിച്ചു.' },
      
      { type: 'h2', en: 'Renaissance and Science', ml: 'നവോത്ഥാനവും ആധുനിക ശാസ്ത്രവും' },
      { type: 'p', en: 'Renaissance laid the foundation for modern science by challenging traditional beliefs. Key figures: Copernicus (Heliocentric model), Galileo (Telescope), Kepler (Planetary motion), Newton (Gravitation).', ml: 'പരമ്പരാഗത വിശ്വാസങ്ങളെ ചോദ്യം ചെയ്തുകൊണ്ട് നവോത്ഥാനം ആധുനിക ശാസ്ത്രത്തിന് അടിത്തറ പാകി. കോപ്പർനിക്കസ്, ഗലീലിയോ, കെപ്ലർ, ന്യൂട്ടൺ എന്നിവർ പ്രധാനികളാണ്.' },
      
      { type: 'h2', en: 'The Reformation and Counter Reformation', ml: 'മതനവീകരണവും പ്രതിമതനവീകരണവും' },
      { type: 'p', en: 'Martin Luther sparked the Protestant Reformation against the Catholic Church. The Catholic Church responded with the Counter-Reformation to reform itself.', ml: 'മാർട്ടിൻ ലൂഥർ കത്തോലിക്കാ സഭയ്ക്കെതിരെ പ്രൊട്ടസ്റ്റന്റ് മതനവീകരണത്തിന് തുടക്കം കുറിച്ചു. കത്തോലിക്കാ സഭ സ്വയം നവീകരിക്കാൻ പ്രതിമതനവീകരണം നടത്തി.' }
    ]
  },
  glossary: [
    { term: { en: 'Renaissance', ml: 'നവോത്ഥാനം' }, definition: { en: 'Rebirth of Greco-Roman culture.', ml: 'പ്രാചീന ഗ്രീക്കോ-റോമൻ സംസ്കാരത്തിന്റെ പുനരുജ്ജീവനം.' } },
    { term: { en: 'Humanism', ml: 'മാനവികത' }, definition: { en: 'Focus on human experience and rational inquiry.', ml: 'മനുഷ്യന്റെ അനുഭവങ്ങൾക്കും യുക്തിചിന്തയ്ക്കും പ്രാധാന്യം നൽകുന്ന ചിന്താധാര.' } }
  ],
  quiz: [
      {
        q_id: "q1",
        type: "mcq",
        stem: { en: "What does the term 'Renaissance' literally mean?", ml: "'നവോത്ഥാനം' എന്ന വാക്കിനർത്ഥം എന്ത്?" },
        options: [
          { k: "A", text: { en: "Rebirth", ml: "പുനർജന്മം" } },
          { k: "B", text: { en: "Revolution", ml: "വിപ്ലവം" } },
          { k: "C", text: { en: "Reformation", ml: "മതനവീകരണം" } },
          { k: "D", text: { en: "Humanism", ml: "മാനവികത" } }
        ],
        answer: "A",
        difficulty: "easy",
        explanation: { en: "Renaissance literally means 'rebirth' of ancient Greco-Roman culture.", ml: "'നവോത്ഥാനം' എന്ന വാക്കിനർത്ഥം പ്രാചീന ഗ്രീക്കോ-റോമൻ സംസ്കാരത്തിന്റെ 'പുനർജന്മം' എന്നാണ്." }
      },
      {
        q_id: "q2",
        type: "mcq",
        stem: { en: "Who invented the movable type printing press?", ml: "ആരാണ് ചലിപ്പിക്കാവുന്ന അച്ചടിയന്ത്രം കണ്ടുപിടിച്ചത്?" },
        options: [
          { k: "A", text: { en: "Leonardo da Vinci", ml: "ലിയനാർഡോ ഡാവിഞ്ചി" } },
          { k: "B", text: { en: "Johannes Gutenberg", ml: "ജോഹന്നാസ് ഗുട്ടൻബർഗ്" } },
          { k: "C", text: { en: "Martin Luther", ml: "മാർട്ടിൻ ലൂഥർ" } },
          { k: "D", text: { en: "Galileo Galilei", ml: "ഗലീലിയോ ഗലീലി" } }
        ],
        answer: "B",
        difficulty: "easy",
        explanation: { en: "Johannes Gutenberg invented the movable type printing press in the 15th century.", ml: "പതിനഞ്ചാം നൂറ്റാണ്ടിൽ ജോഹന്നാസ് ഗുട്ടൻബർഗ് ചലിപ്പിക്കാവുന്ന അച്ചടിയന്ത്രം കണ്ടുപിടിച്ചു." }
      }
    ]
};
