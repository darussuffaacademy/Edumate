import { Lesson } from './curriculum';

export const socialScience1Humanism: Lesson = {
  id: "so-hist-10-humanism",
  title: { en: "Chapter 1: Humanism", ml: "അധ്യായം 1: മാനവികത" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Introduction to Renaissance", ml: "നവോത്ഥാനത്തിലേക്കുള്ള ആമുഖം" } },
    { id: "lo2", text: { en: "Causes for Renaissance in Italy", ml: "ഇറ്റലിയിൽ നവോത്ഥാനം ആരംഭിക്കാനുള്ള കാരണങ്ങൾ" } },
    { id: "lo3", text: { en: "The Concept of Humanism", ml: "മാനവികത എന്ന ആശയം" } },
    { id: "lo4", text: { en: "Renaissance Art (Painting, Sculpture, Architecture)", ml: "നവോത്ഥാന കല (ചിത്രകല, ശില്പകല, വാസ്തുവിദ്യ)" } },
    { id: "lo5", text: { en: "Renaissance Literature and the Printing Press", ml: "നവോത്ഥാന സാഹിത്യവും അച്ചടിയന്ത്രവും" } },
    { id: "lo6", text: { en: "Changes in Historiography", ml: "ചരിത്രരചനയിലുണ്ടായ മാറ്റങ്ങൾ" } },
    { id: "lo7", text: { en: "Renaissance and Modern Science", ml: "നവോത്ഥാനവും ആധുനിക ശാസ്ത്രവും" } },
    { id: "lo8", text: { en: "The Reformation and Counter-Reformation", ml: "മതനവീകരണവും പ്രതിമതനവീകരണവും" } }
  ],
  content: {
    intro: { en: "The Renaissance was a period of transition from medieval feudalism to the modern age.", ml: "മധ്യകാല നാടുവാഴിത്തത്തിൽ നിന്നും ആധുനിക യുഗത്തിലേക്കുള്ള ഒരു മാറ്റത്തിന്റെ കാലഘട്ടമായി ഇത് കണക്കാക്കപ്പെടുന്നു." },
    core: { en: "The Renaissance first began in Italy and marked a shift towards humanism, rationalism, and scientific inquiry.", ml: "നവോത്ഥാനം ആദ്യം ആരംഭിച്ചത് ഇറ്റലിയിലാണ്. ഇത് മാനവികത, യുക്തിചിന്ത, ശാസ്ത്രീയ അന്വേഷണം എന്നിവയിലേക്കുള്ള ഒരു മാറ്റത്തെ അടയാളപ്പെടുത്തി." },
    blocks: [
      { type: 'h2', en: 'Introduction to Renaissance', ml: 'നവോത്ഥാനത്തിലേക്കുള്ള ആമുഖം' },
      { type: 'p', en: 'In the 13th century, scientific philosopher Roger Bacon emphasized the importance of rationalism, knowledge, and love.', ml: 'പതിമൂന്നാം നൂറ്റാണ്ടിൽ, ശാസ്ത്രീയ ചിന്തകനായ റോജർ ബേക്കൺ യുക്തിചിന്ത, അറിവ്, സ്നേഹം എന്നിവയുടെ പ്രാധാന്യം ഊന്നിപ്പറഞ്ഞു.' },
      { type: 'p', en: 'During his time, thinkers who questioned the existing feudalistic power system were subjected to cruel persecution.', ml: 'അക്കാലത്ത്, നിലവിലുണ്ടായിരുന്ന നാടുവാഴിത്ത അധികാര വ്യവസ്ഥയെ ചോദ്യം ചെയ്ത ചിന്തകർ ക്രൂരമായ പീഡനങ്ങൾക്ക് ഇരയായി.' },
      { type: 'p', en: 'From the 14th century onwards, a series of changes took place in the social, economic, and political spheres of Europe.', ml: 'പതിനാലാം നൂറ്റാണ്ടോടെ യൂറോപ്പിന്റെ സാമൂഹിക, സാമ്പത്തിക, രാഷ്ട്രീയ മണ്ഡലങ്ങളിൽ നിരവധി മാറ്റങ്ങളുണ്ടായി.' },
      { type: 'p', en: 'The tendency to move away from medieval ideas and revive ancient Greco-Roman culture is known as the Renaissance.', ml: 'മധ്യകാല ആശയങ്ങളിൽ നിന്ന് വ്യതിചലിച്ച് പ്രാചീന ഗ്രീക്കോ-റോമൻ സംസ്കാരത്തെ പുനരുജ്ജീവിപ്പിക്കാനുള്ള പ്രവണത നവോത്ഥാനം എന്നറിയപ്പെടുന്നു.' },
      { type: 'p', en: 'The word "Renaissance" means "rebirth".', ml: '"നവോത്ഥാനം" എന്ന വാക്കിനർത്ഥം "പുനർജന്മം" എന്നാണ്.' },
      { type: 'p', en: 'It is considered a period of transition from medieval feudalism to the modern age.', ml: 'മധ്യകാല നാടുവാഴിത്തത്തിൽ നിന്നും ആധുനിക യുഗത്തിലേക്കുള്ള ഒരു മാറ്റത്തിന്റെ കാലഘട്ടമായി ഇത് കണക്കാക്കപ്പെടുന്നു.' },
      { type: 'h3', en: 'Key features of these changes:', ml: 'ഈ മാറ്റങ്ങളുടെ പ്രധാന സവിശേഷതകൾ:' },
      { type: 'p', en: 'Humanistic perspective, Rationalism, Growth of urban life and monetary economy, Spread of secular values and individual liberty, Importance gained by regional languages.', ml: 'മാനവിക കാഴ്ചപ്പാട്, യുക്തിചിന്ത, നഗരജീവിതത്തിന്റെ വളർച്ചയും നാണയ വ്യവസ്ഥയും, മതേതര മൂല്യങ്ങളുടെയും വ്യക്തിസ്വാതന്ത്ര്യത്തിന്റെയും വ്യാപനം, പ്രാദേശിക ഭാഷകൾക്ക് ലഭിച്ച പ്രാധാന്യം.' },

      { type: 'h2', en: 'Why Renaissance in Italy?', ml: 'എന്തുകൊണ്ട് ഇറ്റലിയിൽ നവോത്ഥാനം?' },
      { type: 'p', en: 'The Renaissance first began in Italy.', ml: 'നവോത്ഥാനം ആദ്യം ആരംഭിച്ചത് ഇറ്റലിയിലാണ്.' },
      { type: 'p', en: 'Cities in Italy (like Florence, Milan, and Venice) were more independent, wealthy, and dynamic.', ml: 'ഇറ്റലിയിലെ നഗരങ്ങൾ (ഫ്ലോറൻസ്, മിലാൻ, വെനീസ് തുടങ്ങിയവ) കൂടുതൽ സ്വതന്ത്രവും സമ്പന്നവും ഊർജ്ജസ്വലവുമായിരുന്നു.' },
      { type: 'h3', en: 'Reasons for the growth of Italian cities:', ml: 'ഇറ്റാലിയൻ നഗരങ്ങളുടെ വളർച്ചയ്ക്കുള്ള കാരണങ്ങൾ:' },
      { type: 'p', en: 'The Crusades: Wars between Islam and Christianity (11th to 13th century) facilitated cultural exchange and trade between the East and the West.', ml: 'കുരിശുയുദ്ധങ്ങൾ: ഇസ്ലാം-ക്രിസ്തുമത വിശ്വാസികൾ തമ്മിൽ നടന്ന യുദ്ധങ്ങൾ (11 മുതൽ 13 വരെ നൂറ്റാണ്ടുകളിൽ) കിഴക്കും പടിഞ്ഞാറും തമ്മിലുള്ള സാംസ്കാരിക വിനിമയത്തിനും വ്യാപാരത്തിനും സഹായിച്ചു.' },
      { type: 'p', en: 'Wealthy Families: Commercialization led to a wealthy class who demanded political power.', ml: 'സമ്പന്ന കുടുംബങ്ങൾ: വാണിജ്യവൽക്കരണം ഒരു പുതിയ സമ്പന്ന വർഗ്ഗത്തിന്റെ ഉദയത്തിന് കാരണമാവുകയും അവർ രാഷ്ട്രീയ അധികാരം ആവശ്യപ്പെടുകയും ചെയ്തു.' },
      { type: 'table', tableData: {
          headers: [{en: 'Italian Families', ml: 'ഇറ്റാലിയൻ കുടുംബങ്ങൾ'}, {en: 'Cities', ml: 'നഗരങ്ങൾ'}],
          rows: [
            [{en: 'Medici', ml: 'മെഡിചി'}, {en: 'Florence', ml: 'ഫ്ലോറൻസ്'}],
            [{en: 'Sforza', ml: 'സ്ഫോർസ'}, {en: 'Milan', ml: 'മിലാൻ'}],
            [{en: 'Farnese', ml: 'ഫർണീസ്'}, {en: 'Parma', ml: 'പാർമ'}],
            [{en: 'Orsini', ml: 'ഓർസിനി'}, {en: 'Naples', ml: 'നേപ്പിൾസ്'}],
            [{en: 'Visconti', ml: 'വിസ്കോണ്ടി'}, {en: 'Milan', ml: 'മിലാൻ'}]
          ]
      }},
      { type: 'p', en: 'Black Death: The plague in the mid-14th century destroyed agriculture-based feudalism, prompting people to focus on worldly life and well-being.', ml: 'കരിമരണം: പതിനാലാം നൂറ്റാണ്ടിന്റെ മധ്യത്തിലുണ്ടായ പ്ലേഗ് കാർഷികാധിഷ്ഠിത നാടുവാഴിത്തത്തെ തകർക്കുകയും, ഐഹിക ജീവിതത്തിലും സ്വന്തം ആരോഗ്യത്തിലും ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ ജനങ്ങളെ പ്രേരിപ്പിക്കുകയും ചെയ്തു.' },
      { type: 'p', en: 'Fall of Constantinople (1453): Ottoman Turks conquered the city, causing scholars to migrate to Italy with ancient Greco-Roman manuscripts.', ml: 'കോൺസ്റ്റാന്റിനോപ്പിളിന്റെ പതനം (1453): ഓട്ടോമൻ തുർക്കികൾ നഗരം കീഴടക്കിയതിനെ തുടർന്ന്, പണ്ഡിതന്മാർ പ്രാചീന ഗ്രീക്കോ-റോമൻ ഗ്രന്ഥങ്ങളുമായി ഇറ്റലിയിലേക്ക് പലായനം ചെയ്തു.' },

      { type: 'h2', en: 'Humanism', ml: 'മാനവികത' },
      { type: 'p', en: 'During the Middle Ages, \'Scholasticism\' prioritizing Christian theology and the afterlife was prominent.', ml: 'മധ്യകാലഘട്ടത്തിൽ ക്രൈസ്തവ ദൈവശാസ്ത്രത്തിനും മരണാനന്തര ജീവിതത്തിനും പ്രാധാന്യം നൽകുന്ന \'സ്കോളാസ്റ്റിസിസം\' ആയിരുന്നു നിലനിന്നിരുന്നത്.' },
      { type: 'p', en: 'Humanism emerged as a departure from this, emphasizing human experience, emotions, and rational inquiry.', ml: 'ഇതിൽ നിന്നുമാറി മനുഷ്യന്റെ അനുഭവങ്ങൾക്കും, വികാരങ്ങൾക്കും, യുക്തിചിന്തയ്ക്കും പ്രാധാന്യം നൽകിക്കൊണ്ട് മാനവികത ഉയർന്നുവന്നു.' },
      { type: 'p', en: 'Human beings were placed at the center of thought instead of religion.', ml: 'മതത്തിന് പകരം മനുഷ്യൻ ചിന്തകളുടെ കേന്ദ്രബിന്ദുവായി മാറി.' },

      { type: 'h2', en: 'Renaissance Art', ml: 'നവോത്ഥാന കല' },
      { type: 'p', en: 'Medieval art focused on spiritual themes, while Renaissance art represented human beings realistically.', ml: 'മധ്യകാല കല ആത്മീയ വിഷയങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ചപ്പോൾ, നവോത്ഥാന കല മനുഷ്യരെ യഥാർത്ഥ രീതിയിൽ ചിത്രീകരിച്ചു.' },
      { type: 'h3', en: 'Painting:', ml: 'ചിത്രകല:' },
      { type: 'p', en: 'Painters used natural colors, light, spatial depth, oil paint, and strict human anatomy.', ml: 'ചിത്രകാരന്മാർ സ്വാഭാവിക നിറങ്ങൾ, പ്രകാശം, ത്രിമാനത, ഓയിൽ പെയിന്റ്, കൃത്യമായ ശരീരശാസ്ത്രം എന്നിവ ഉപയോഗിച്ചു.' },
      { type: 'p', en: 'Leonardo da Vinci painted \'The Last Supper\' and \'Mona Lisa\'.', ml: 'ലിയനാർഡോ ഡാവിഞ്ചി \'അന്ത്യത്താഴം\', \'മോണാലിസ\' എന്നീ ചിത്രങ്ങൾ വരച്ചു.' },
      { type: 'p', en: 'Michelangelo painted \'The Last Judgment\' and the Sistine Chapel ceiling.', ml: 'മൈക്കലാഞ്ചലോ \'അന്ത്യവിധി\', സിസ്റ്റീൻ ചാപ്പലിന്റെ മുകൾത്തട്ടിലെ ചിത്രങ്ങൾ എന്നിവ വരച്ചു.' },
      { type: 'h3', en: 'Sculpture:', ml: 'ശില്പകല:' },
      { type: 'p', en: 'Sculptors broke away from the medieval Gothic style to create more natural forms.', ml: 'കൂടുതൽ സ്വാഭാവിക രൂപങ്ങൾ സൃഷ്ടിക്കുന്നതിനായി ശില്പികൾ മധ്യകാല ഗോഥിക് ശൈലിയിൽ നിന്നും വ്യതിചലിച്ചു.' },
      { type: 'p', en: 'Donatello created the bronze sculpture \'David\' and \'Gattamelata\'.', ml: 'ഡൊണാറ്റെല്ലോ വെങ്കല ശില്പമായ \'ഡേവിഡ്\', \'ഗട്ടാമലാറ്റ\' എന്നിവ നിർമ്മിച്ചു.' },
      { type: 'p', en: 'Michelangelo created \'Pietà\' and his own marble version of \'David\'.', ml: 'മൈക്കലാഞ്ചലോ \'പിയാത്ത\', മാർബിളിൽ തീർത്ത \'ഡേവിഡ്\' എന്നീ ശില്പങ്ങൾ നിർമ്മിച്ചു.' },
      { type: 'h3', en: 'Architecture:', ml: 'വാസ്തുവിദ്യ:' },
      { type: 'p', en: 'The style shifted from Gothic (pointed arches) to Greco-Roman classical style (domes).', ml: 'വാസ്തുവിദ്യാ ശൈലി ഗോഥിക്കിൽ (കൂർത്ത കമാനങ്ങൾ) നിന്നും ഗ്രീക്കോ-റോമൻ ക്ലാസിക്കൽ ശൈലിയിലേക്ക് (താഴികക്കുടങ്ങൾ) മാറി.' },
      { type: 'p', en: 'Filippo Brunelleschi designed the massive dome of the Cathedral in Florence.', ml: 'ഫിലിപ്പോ ബ്രൂണെല്ലെസ്കി ഫ്ലോറൻസിലെ പള്ളിയുടെ വലിയ താഴികക്കുടം രൂപകല്പന ചെയ്തു.' },

      { type: 'h2', en: 'Renaissance Literature & Printing Press', ml: 'നവോത്ഥാന സാഹിത്യവും അച്ചടിയന്ത്രവും' },
      { type: 'p', en: 'Writers prioritized secular values, individual liberty, and wrote in regional languages using prose.', ml: 'എഴുത്തുകാർ മതേതര മൂല്യങ്ങൾക്കും വ്യക്തിസ്വാതന്ത്ര്യത്തിനും പ്രാധാന്യം നൽകുകയും ഗദ്യരൂപത്തിൽ പ്രാദേശിക ഭാഷകളിൽ എഴുതുകയും ചെയ്തു.' },
      { type: 'p', en: 'Dante wrote \'The Divine Comedy\'.', ml: 'ഡാന്റേ \'ദ ഡിവൈൻ കോമഡി\' രചിച്ചു.' },
      { type: 'p', en: 'Petrarch wrote sonnets addressed to Laura.', ml: 'പെട്രാർക്ക് ലോറയെ അഭിസംബോധന ചെയ്തുകൊണ്ടുള്ള ഗീതകങ്ങൾ എഴുതി.' },
      { type: 'p', en: 'Boccaccio wrote \'The Decameron\'.', ml: 'ബൊക്കാച്ചിയോ \'ദ ഡെക്കാമറൺ\' രചിച്ചു.' },
      { type: 'p', en: 'Machiavelli wrote \'The Prince\', discussing realistic political administration.', ml: 'മാക്യവെല്ലി യഥാർത്ഥ രാഷ്ട്രീയ ഭരണത്തെക്കുറിച്ച് പ്രതിപാദിക്കുന്ന \'ദ പ്രിൻസ്\' രചിച്ചു.' },
      { type: 'p', en: 'Cassandra Fedele was a female humanist who championed women\'s higher education.', ml: 'സ്ത്രീകളുടെ ഉന്നത വിദ്യാഭ്യാസത്തിന് വേണ്ടി വാദിച്ച വനിതാ മാനവികതാവാദിയായിരുന്നു കസാന്ദ്ര ഫെഡലെ.' },
      { type: 'table', tableData: {
          headers: [{en: 'Author', ml: 'എഴുത്തുകാരൻ'}, {en: 'Work', ml: 'കൃതി'}, {en: 'Country', ml: 'രാജ്യം'}],
          rows: [
            [{en: 'Erasmus', ml: 'എറാസ്മസ്'}, {en: 'In Praise of Folly', ml: 'ഇൻ പ്രെയ്സ് ഓഫ് ഫൊളി'}, {en: 'Netherlands', ml: 'നെതർലാൻഡ്സ്'}],
            [{en: 'Geoffrey Chaucer', ml: 'ചോസർ'}, {en: 'Canterbury Tales', ml: 'കാന്റർബറി ടെയിൽസ്'}, {en: 'England', ml: 'ഇംഗ്ലണ്ട്'}],
            [{en: 'Thomas More', ml: 'തോമസ് മൂർ'}, {en: 'Utopia', ml: 'ഉട്ടോപ്യ'}, {en: 'England', ml: 'ഇംഗ്ലണ്ട്'}],
            [{en: 'Miguel de Cervantes', ml: 'സെർവാന്റസ്'}, {en: 'Don Quixote', ml: 'ഡോൺ ക്വിക്സോട്ട്'}, {en: 'Spain', ml: 'സ്പെയിൻ'}],
            [{en: 'François Rabelais', ml: 'ഫ്രാൻസ്വാ റാബലെ'}, {en: 'Gargantua and Pantagruel', ml: 'ഗാർഗന്ത്വാ ആൻഡ് പാന്റാഗ്രുവൽ'}, {en: 'France', ml: 'ഫ്രാൻസ്'}]
          ]
      }},
      { type: 'h3', en: 'The Printing Press:', ml: 'അച്ചടിയന്ത്രം:' },
      { type: 'p', en: 'Johannes Gutenberg invented the movable type printing press in the 15th century.', ml: 'പതിനഞ്ചാം നൂറ്റാണ്ടിൽ ജോഹന്നാസ് ഗുട്ടൻബർഗ് ചലിപ്പിക്കാവുന്ന അച്ചടിയന്ത്രം കണ്ടുപിടിച്ചു.' },
      { type: 'p', en: 'It led to the rapid dissemination of knowledge and major progress in literacy.', ml: 'ഇത് അറിവിന്റെ വേഗത്തിലുള്ള വ്യാപനത്തിനും സാക്ഷരതയിലെ വലിയ പുരോഗതിക്കും കാരണമായി.' },
      { type: 'p', en: 'Graph: Impact of Printing Press - The graph shows a sharp increase in literacy rate from the 15th century onwards.', ml: 'ഗ്രാഫ്: അച്ചടിയന്ത്രത്തിന്റെ സ്വാധീനം - 15-ാം നൂറ്റാണ്ട് മുതൽ സാക്ഷരതാ നിരക്കിൽ വലിയ വർദ്ധനവുണ്ടായതായി ഗ്രാഫ് കാണിക്കുന്നു.' },

      { type: 'h2', en: 'Historiography', ml: 'ചരിത്രരചന' },
      { type: 'p', en: 'History transitioned from records of divine interventions to scientific, human-centered narratives.', ml: 'ചരിത്രരചന ദൈവിക ഇടപെടലുകളുടെ രേഖപ്പെടുത്തലിൽ നിന്ന് ശാസ്ത്രീയവും മനുഷ്യനെ കേന്ദ്രീകരിച്ചുള്ളതുമായ വിവരണങ്ങളിലേക്ക് മാറി.' },
      { type: 'p', en: 'Historians like Flavio Biondo and Leonardo Bruni started using archaeological evidence and classified history into three periods.', ml: 'ഫ്ലാവിയോ ബിയോണ്ടോ, ലിയനാർഡോ ബ്രൂണി തുടങ്ങിയ ചരിത്രകാരന്മാർ പുരാവസ്തു തെളിവുകൾ ഉപയോഗിക്കാൻ തുടങ്ങുകയും ചരിത്രത്തെ മൂന്ന് കാലഘട്ടങ്ങളായി തിരിക്കുകയും ചെയ്തു.' },
      { type: 'p', en: 'Flowchart: Classification of World History - Ancient Period (Up to 5th Century), Medieval Period (5th to 15th Century), Modern Period (After 15th Century).', ml: 'ഫ്ലോചാർട്ട്: ലോകചരിത്രത്തിന്റെ വിഭജനം - പ്രാചീന കാലഘട്ടം (5-ാം നൂറ്റാണ്ട് വരെ), മധ്യകാലഘട്ടം (5 മുതൽ 15-ാം നൂറ്റാണ്ട് വരെ), ആധുനിക കാലഘട്ടം (15-ാം നൂറ്റാണ്ടിന് ശേഷം).' },

      { type: 'h2', en: 'Renaissance and Science', ml: 'നവോത്ഥാനവും ശാസ്ത്രവും' },
      { type: 'p', en: 'The Renaissance laid the foundation for modern science by challenging traditional beliefs.', ml: 'പരമ്പരാഗത വിശ്വാസങ്ങളെ ചോദ്യം ചെയ്തുകൊണ്ട് നവോത്ഥാനം ആധുനിക ശാസ്ത്രത്തിന് അടിത്തറ പാകി.' },
      { type: 'p', en: 'Nicolaus Copernicus proposed the Heliocentric model (Sun is the center of the universe), rejecting Ptolemy\'s Geocentric model.', ml: 'ടോളമിയുടെ ഭൂകേന്ദ്ര സിദ്ധാന്തത്തെ നിരാകരിച്ചുകൊണ്ട് നിക്കോളാസ് കോപ്പർനിക്കസ് സൗരയൂഥ കേന്ദ്ര സിദ്ധാന്തം (സൂര്യനാണ് പ്രപഞ്ച കേന്ദ്രം) അവതരിപ്പിച്ചു.' },
      { type: 'p', en: 'Galileo Galilei invented the telescope and proved Copernicus\' theory.', ml: 'ഗലീലിയോ ഗലീലി ടെലിസ്കോപ്പ് കണ്ടുപിടിക്കുകയും കോപ്പർനിക്കസിന്റെ സിദ്ധാന്തം തെളിയിക്കുകയും ചെയ്തു.' },
      { type: 'p', en: 'Johannes Kepler formulated laws of planetary motion.', ml: 'ജോഹന്നാസ് കെപ്ലർ ഗ്രഹങ്ങളുടെ സഞ്ചാര നിയമങ്ങൾ ആവിഷ്കരിച്ചു.' },
      { type: 'p', en: 'Isaac Newton formulated the theory of gravitation.', ml: 'ഐസക് ന്യൂട്ടൺ ഗുരുത്വാകർഷണ സിദ്ധാന്തം ആവിഷ്കരിച്ചു.' },
      { type: 'p', en: 'In medicine, Paracelsus researched diseases, and Andreas Vesalius pioneered human anatomy through dissection.', ml: 'വൈദ്യശാസ്ത്രത്തിൽ, പാരാസെൽസസ് രോഗങ്ങളെക്കുറിച്ച് ഗവേഷണം നടത്തുകയും, ആൻഡ്രിയാസ് വെസാലിയസ് മൃതശരീരങ്ങൾ കീറിമുറിച്ച് പഠിച്ച് ശരീരശാസ്ത്രത്തിന് തുടക്കമിടുകയും ചെയ്തു.' },

      { type: 'h2', en: 'The Reformation and Counter Reformation', ml: 'മതനവീകരണവും പ്രതിമതനവീകരണവും' },
      { type: 'h3', en: 'Reformation:', ml: 'മതനവീകരണം:' },
      { type: 'p', en: 'Protests against erroneous practices of the Catholic Church, like the sale of indulgences (certificates to redeem sins).', ml: 'പാപപരിഹാര പത്രങ്ങളുടെ വിൽപന പോലെയുള്ള കത്തോലിക്കാ സഭയുടെ തെറ്റായ ആചാരങ്ങൾക്കെതിരെയുള്ള പ്രതിഷേധങ്ങൾ.' },
      { type: 'p', en: 'In 1517, Martin Luther pasted his \'Ninety-Five Theses\' on the Wittenberg Cathedral door in Germany, sparking the Protestant Reformation.', ml: '1517-ൽ മാർട്ടിൻ ലൂഥർ ജർമ്മനിയിലെ വിറ്റൻബർഗ് പള്ളിയുടെ വാതിലിൽ തന്റെ \'95 തിസീസുകൾ\' പതിപ്പിച്ചു, ഇത് പ്രൊട്ടസ്റ്റന്റ് മതനവീകരണത്തിന് തുടക്കം കുറിച്ചു.' },
      { type: 'p', en: 'Other leaders included Zwingli and John Calvin in Switzerland, and King Henry VIII in England (who established the Anglican Church).', ml: 'സ്വിറ്റ്സർലൻഡിലെ സിംഗ്ലി, ജോൺ കാൽവിൻ, ഇംഗ്ലണ്ടിലെ ഹെൻറി എട്ടാമൻ രാജാവ് (ആംഗ്ലിക്കൻ സഭ സ്ഥാപിച്ചു) എന്നിവരായിരുന്നു മറ്റ് നേതാക്കൾ.' },
      { type: 'h3', en: 'Counter Reformation:', ml: 'പ്രതിമതനവീകരണം:' },
      { type: 'p', en: 'Efforts by the Catholic Church to reform itself and regain authority after the Protestant Reformation.', ml: 'പ്രൊട്ടസ്റ്റന്റ് മതനവീകരണത്തിന് ശേഷം കത്തോലിക്കാ സഭ സ്വയം നവീകരിക്കാനും അധികാരം വീണ്ടെടുക്കാനും നടത്തിയ ശ്രമങ്ങൾ.' },
      { type: 'p', en: 'The Council of Trent banned the sale of indulgences and created \'The Index\' (list of banned books).', ml: 'കൗൺസിൽ ഓഫ് ട്രെന്റ് പാപപരിഹാര പത്രങ്ങളുടെ വിൽപന നിരോധിക്കുകയും വിശ്വാസികൾ വായിക്കാൻ പാടില്ലാത്ത പുസ്തകങ്ങളുടെ പട്ടിക (The Index) പുറത്തിറക്കുകയും ചെയ്തു.' },
      { type: 'p', en: 'Ignatius Loyola founded \'The Society of Jesus\' to establish church authority through education and missionary work.', ml: 'വിദ്യാഭ്യാസ-പ്രേഷിത പ്രവർത്തനങ്ങളിലൂടെ സഭയുടെ അധികാരം സ്ഥാപിക്കുന്നതിനായി ഇഗ്നേഷ്യസ് ലയോള \'സൊസൈറ്റി ഓഫ് ജീസസ്\' സ്ഥാപിച്ചു.' },

      { type: 'h2', en: 'Summary', ml: 'ലഘുവിവരണം' },
      { type: 'p', en: 'The Renaissance means \'rebirth\' and marked the transition from the Middle Ages to the Modern Age.', ml: 'നവോത്ഥാനം എന്നാൽ \'പുനർജന്മം\' എന്നാണ് അർത്ഥമാക്കുന്നത്, ഇത് മധ്യകാലഘട്ടത്തിൽ നിന്ന് ആധുനിക കാലഘട്ടത്തിലേക്കുള്ള മാറ്റത്തെ അടയാളപ്പെടുത്തി.' },
      { type: 'p', en: 'It began in Italy due to wealth from trade, the fall of Constantinople, and the decline of feudalism.', ml: 'വ്യാപാരത്തിൽ നിന്നുള്ള സമ്പത്ത്, കോൺസ്റ്റാന്റിനോപ്പിളിന്റെ പതനം, നാടുവാഴിത്തത്തിന്റെ തകർച്ച എന്നിവ കാരണം ഇത് ഇറ്റലിയിൽ ആരംഭിച്ചു.' },
      { type: 'p', en: 'Humanism replaced theology, making human beings the center of thought, art, and literature.', ml: 'ദൈവശാസ്ത്രത്തിന് പകരം മാനവികത നിലവിൽ വരികയും, മനുഷ്യൻ ചിന്തയുടെയും കലയുടെയും സാഹിത്യത്തിന്റെയും കേന്ദ്രമായി മാറുകയും ചെയ്തു.' },
      { type: 'p', en: 'Scientific discoveries by Copernicus, Galileo, and Newton challenged old beliefs and created modern science.', ml: 'കോപ്പർനിക്കസ്, ഗലീലിയോ, ന്യൂട്ടൺ എന്നിവരുടെ ശാസ്ത്രീയ കണ്ടുപിടുത്തങ്ങൾ പഴയ വിശ്വാസങ്ങളെ വെല്ലുവിളിക്കുകയും ആധുനിക ശാസ്ത്രം സൃഷ്ടിക്കുകയും ചെയ്തു.' },
      { type: 'p', en: 'The Reformation by Martin Luther challenged the Catholic Church, leading to the Counter-Reformation.', ml: 'മാർട്ടിൻ ലൂഥറുടെ നേതൃത്വത്തിലുള്ള മതനവീകരണം കത്തോലിക്കാ സഭയെ വെല്ലുവിളിക്കുകയും, ഇത് പ്രതിമതനവീകരണത്തിലേക്ക് നയിക്കുകയും ചെയ്തു.' }
    ]
  },
  glossary: [
    { term: { en: "Renaissance", ml: "നവോത്ഥാനം" }, definition: { en: "Rebirth; transition from medieval to modern age.", ml: "പുനർജന്മം; മധ്യകാലഘട്ടത്തിൽ നിന്ന് ആധുനിക കാലഘട്ടത്തിലേക്കുള്ള മാറ്റം." } },
    { term: { en: "Humanism", ml: "മാനവികത" }, definition: { en: "Emphasis on human experience and rational inquiry.", ml: "മനുഷ്യന്റെ അനുഭവങ്ങൾക്കും യുക്തിചിന്തയ്ക്കും നൽകുന്ന പ്രാധാന്യം." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "What is meant by the term 'Renaissance'?", ml: "'നവോത്ഥാനം' എന്ന പദം കൊണ്ട് അർത്ഥമാക്കുന്നത് എന്ത്?" },
      options: [
        { k: "A", text: { en: "Rebirth", ml: "പുനർജന്മം" } },
        { k: "B", text: { en: "Death", ml: "മരണം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The word 'Renaissance' means 'rebirth'. It denotes the revival of ancient Greco-Roman culture, rationalism, and humanism in Europe, marking the transition from medieval feudalism to the modern age.", ml: "'നവോത്ഥാനം' എന്ന വാക്കിനർത്ഥം 'പുനർജന്മം' എന്നാണ്. മധ്യകാല നാടുവാഴിത്തത്തിൽ നിന്നും ആധുനിക യുഗത്തിലേക്കുള്ള മാറ്റത്തെ അടയാളപ്പെടുത്തുന്ന, യൂറോപ്പിലെ പ്രാചീന ഗ്രീക്കോ-റോമൻ സംസ്കാരം, യുക്തിചിന്ത, മാനവികത എന്നിവയുടെ പുനരുജ്ജീവനത്തെ ഇത് സൂചിപ്പിക്കുന്നു." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "Why did the Renaissance begin in Italy?", ml: "എന്തുകൊണ്ടാണ് നവോത്ഥാനം ഇറ്റലിയിൽ ആരംഭിച്ചത്?" },
      options: [
        { k: "A", text: { en: "Due to trade and wealth", ml: "വ്യാപാരവും സമ്പത്തും കാരണം" } },
        { k: "B", text: { en: "Due to lack of resources", ml: "വിഭവങ്ങളുടെ അഭാവം കാരണം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Italian cities were wealthy and independent due to trade from the Crusades. The Black Death weakened feudalism, and scholars fleeing the fall of Constantinople in 1453 brought ancient manuscripts to Italy.", ml: "കുരിശുയുദ്ധങ്ങളെ തുടർന്നുള്ള വ്യാപാരം കാരണം ഇറ്റാലിയൻ നഗരങ്ങൾ സമ്പന്നവും സ്വതന്ത്രവുമായിരുന്നു. കരിമരണം നാടുവാഴിത്തത്തെ ദുർബലപ്പെടുത്തുകയും, 1453-ൽ കോൺസ്റ്റാന്റിനോപ്പിളിന്റെ പതനത്തെ തുടർന്ന് പലായനം ചെയ്ത പണ്ഡിതന്മാർ പ്രാചീന ഗ്രന്ഥങ്ങൾ ഇറ്റലിയിലേക്ക് കൊണ്ടുവരികയും ചെയ്തു." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "What is Humanism?", ml: "മാനവികത എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Emphasis on human experience and rational inquiry.", ml: "മനുഷ്യന്റെ അനുഭവങ്ങൾക്കും യുക്തിചിന്തയ്ക്കും നൽകുന്ന പ്രാധാന്യം." } },
        { k: "B", text: { en: "Focus on spiritual themes only.", ml: "ആത്മീയ വിഷയങ്ങളിൽ മാത്രം ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു." } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Humanism is a philosophical perspective that shifted focus away from medieval Christian theology and the afterlife, placing human beings, their experiences, worldly life, and rational inquiry at the center of thought.", ml: "മധ്യകാല ക്രൈസ്തവ ദൈവശാസ്ത്രത്തിൽ നിന്നും മരണാനന്തര ജീവിതത്തിൽ നിന്നും മാറി, മനുഷ്യർക്കും അവരുടെ അനുഭവങ്ങൾക്കും ഐഹിക ജീവിതത്തിനും യുക്തിചിന്തയ്ക്കും ചിന്തകളിൽ കേന്ദ്രസ്ഥാനം നൽകിയ ഒരു ദാർശനിക കാഴ്ചപ്പാടാണ് മാനവികത." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "Distinguish between Medieval painting and Renaissance painting.", ml: "മധ്യകാല ചിത്രകലയും നവോത്ഥാന ചിത്രകലയും തമ്മിലുള്ള വ്യത്യാസം വ്യക്തമാക്കുക." },
      options: [
        { k: "A", text: { en: "Medieval painting focused on spiritual themes, while Renaissance art represented human beings realistically.", ml: "മധ്യകാല കല ആത്മീയ വിഷയങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ചപ്പോൾ, നവോത്ഥാന കല മനുഷ്യരെ യഥാർത്ഥ രീതിയിൽ ചിത്രീകരിച്ചു." } },
        { k: "B", text: { en: "Both focused on spiritual themes.", ml: "രണ്ടും ആത്മീയ വിഷയങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ചു." } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Medieval painting focused on spiritual themes and divine figures. Renaissance painting focused on realistic human forms based on human anatomy, utilizing natural colors, spatial depth, and human emotions.", ml: "മധ്യകാല ചിത്രകല ആത്മീയ വിഷയങ്ങളിലും ദൈവിക രൂപങ്ങളിലും ശ്രദ്ധ കേന്ദ്രീകരിച്ചു. നവോത്ഥാന ചിത്രകല കൃത്യമായ ശരീരശാസ്ത്രത്തെ അടിസ്ഥാനമാക്കി യഥാർത്ഥ മനുഷ്യരൂപങ്ങൾ, സ്വാഭാവിക നിറങ്ങൾ, ത്രിമാനത, മനുഷ്യ വികാരങ്ങൾ എന്നിവയ്ക്ക് പ്രാധാന്യം നൽകി." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "Name the architect who designed the dome of the Cathedral in Florence and the style he used.", ml: "ഫ്ലോറൻസിലെ പള്ളിയുടെ താഴികക്കുടം രൂപകല്പന ചെയ്ത വാസ്തുശില്പിയുടെ പേരും അദ്ദേഹം ഉപയോഗിച്ച ശൈലിയും ഏത്?" },
      options: [
        { k: "A", text: { en: "Filippo Brunelleschi, Greco-Roman classical style.", ml: "ഫിലിപ്പോ ബ്രൂണെല്ലെസ്കി, ഗ്രീക്കോ-റോമൻ ക്ലാസിക്കൽ ശൈലി." } },
        { k: "B", text: { en: "Leonardo da Vinci, Gothic style.", ml: "ലിയനാർഡോ ഡാവിഞ്ചി, ഗോഥിക് ശൈലി." } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Filippo Brunelleschi designed it. He moved away from the medieval Gothic style and used the ancient Greco-Roman classical style.", ml: "ഫിലിപ്പോ ബ്രൂണെല്ലെസ്കി ആണ് ഇത് രൂപകല്പന ചെയ്തത്. അദ്ദേഹം മധ്യകാല ഗോഥിക് ശൈലിയിൽ നിന്ന് മാറി പ്രാചീന ഗ്രീക്കോ-റോമൻ ക്ലാസിക്കൽ ശൈലി ഉപയോഗിച്ചു." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "What were the main ideas presented by Niccolò Machiavelli in his book 'The Prince'?", ml: "നിക്കോളോ മാക്യവെല്ലി തന്റെ 'ദ പ്രിൻസ്' എന്ന പുസ്തകത്തിൽ അവതരിപ്പിച്ച പ്രധാന ആശയങ്ങൾ എന്തെല്ലാമായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Ruler's responsibility is to maintain state authority and security.", ml: "ഭരണകൂടത്തിന്റെ സുരക്ഷയും അധികാരവും നിലനിർത്തുക എന്നതാണ് ഒരു ഭരണാധികാരിയുടെ പ്രധാന ചുമതല." } },
        { k: "B", text: { en: "Ruler should focus only on religion.", ml: "ഭരണാധികാരി മതത്തിൽ മാത്രം ശ്രദ്ധ കേന്ദ്രീകരിക്കണം." } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "He argued that a ruler's paramount responsibility is to maintain state authority and security. He believed rulers should be practical and impartial, differing entirely from medieval administrators.", ml: "ഭരണകൂടത്തിന്റെ സുരക്ഷയും അധികാരവും നിലനിർത്തുക എന്നതാണ് ഒരു ഭരണാധികാരിയുടെ പ്രധാന ചുമതല എന്ന് അദ്ദേഹം വാദിച്ചു. ഭരണാധികാരികൾ പ്രായോഗികവാദികളും നിഷ്പക്ഷരുമായിരിക്കണമെന്നും, ഇത് മധ്യകാല ഭരണാധികാരികളിൽ നിന്നും തികച്ചും വ്യത്യസ്തമാണെന്നും അദ്ദേഹം വിശ്വസിച്ചു." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "How did the invention of the printing press impact society?", ml: "അച്ചടിയന്ത്രത്തിന്റെ കണ്ടുപിടുത്തം സമൂഹത്തിൽ എന്ത് സ്വാധീനമാണ് ചെലുത്തിയത്?" },
      options: [
        { k: "A", text: { en: "Allowed books to be printed cheaply and efficiently, leading to the rapid spread of humanistic ideas.", ml: "കുറഞ്ഞ ചിലവിലും വേഗത്തിലും പുസ്തകങ്ങൾ അച്ചടിക്കാൻ സഹായിച്ചു, ഇത് മാനവിക ആശയങ്ങളുടെ വേഗത്തിലുള്ള വ്യാപനത്തിന് കാരണമായി." } },
        { k: "B", text: { en: "Made books more expensive.", ml: "പുസ്തകങ്ങൾ കൂടുതൽ വിലകൂടിയതാക്കി." } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Invented by Johannes Gutenberg, it allowed books to be printed cheaply and efficiently, leading to the rapid spread of humanistic ideas and a massive increase in literacy rates.", ml: "ജോഹന്നാസ് ഗുട്ടൻബർഗ് കണ്ടുപിടിച്ച ഈ യന്ത്രം കുറഞ്ഞ ചിലവിലും വേഗത്തിലും പുസ്തകങ്ങൾ അച്ചടിക്കാൻ സഹായിച്ചു, ഇത് മാനവിക ആശയങ്ങളുടെ വേഗത്തിലുള്ള വ്യാപനത്തിനും സാക്ഷരതാ നിരക്കിലെ വലിയ വർദ്ധനവിനും കാരണമായി." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "How did the Renaissance change historiography?", ml: "നവോത്ഥാനം ചരിത്രരചനയെ മാറ്റിയത് എങ്ങനെ?" },
      options: [
        { k: "A", text: { en: "Shifted from viewing events as divinely ordained to a human-centered and scientific approach.", ml: "സംഭവങ്ങളെ ദൈവികമായി കാണുന്ന രീതിയിൽ നിന്ന് മാറി ചരിത്രരചന മനുഷ്യനെ കേന്ദ്രീകരിച്ചുള്ളതും ശാസ്ത്രീയവുമായ സമീപനത്തിലേക്ക് മാറി." } },
        { k: "B", text: { en: "Made history more focused on divine interventions.", ml: "ചരിത്രത്തെ ദൈവിക ഇടപെടലുകളിൽ കൂടുതൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ചു." } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Historiography shifted from viewing events as divinely ordained to a human-centered and scientific approach. Historians began using evidence like coins and inscriptions, and classified history into Ancient, Medieval, and Modern periods.", ml: "സംഭവങ്ങളെ ദൈവികമായി കാണുന്ന രീതിയിൽ നിന്ന് മാറി ചരിത്രരചന മനുഷ്യനെ കേന്ദ്രീകരിച്ചുള്ളതും ശാസ്ത്രീയവുമായ സമീപനത്തിലേക്ക് മാറി. ചരിത്രകാരന്മാർ നാണയങ്ങളും ലിഖിതങ്ങളും പോലുള്ള തെളിവുകൾ ഉപയോഗിക്കാൻ തുടങ്ങുകയും ചരിത്രത്തെ പ്രാചീന, മധ്യകാല, ആധുനിക കാലഘട്ടങ്ങളായി തിരിക്കുകയും ചെയ്തു." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "Explain the Heliocentric theory and name the scientists associated with proving it.", ml: "സൗരയൂഥ കേന്ദ്ര സിദ്ധാന്തം വിശദീകരിക്കുക, ഇത് തെളിയിക്കുന്നതുമായി ബന്ധപ്പെട്ട ശാസ്ത്രജ്ഞരുടെ പേരുകൾ എഴുതുക." },
      options: [
        { k: "A", text: { en: "Sun is the center of the universe. Proposed by Copernicus, proved by Galileo.", ml: "സൂര്യനാണ് പ്രപഞ്ച കേന്ദ്രം. കോപ്പർനിക്കസ് അവതരിപ്പിച്ചു, ഗലീലിയോ തെളിയിച്ചു." } },
        { k: "B", text: { en: "Earth is the center of the universe. Proposed by Ptolemy.", ml: "ഭൂമിയാണ് പ്രപഞ്ച കേന്ദ്രം. ടോളമി അവതരിപ്പിച്ചു." } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "The Heliocentric theory states that the Sun, not the Earth, is the center of the universe. It was proposed by Nicolaus Copernicus and later proved by Galileo Galilei using his telescope.", ml: "പ്രപഞ്ചത്തിന്റെ കേന്ദ്രം ഭൂമിയല്ല, മറിച്ച് സൂര്യനാണെന്ന് സൗരയൂഥ കേന്ദ്ര സിദ്ധാന്തം പ്രസ്താവിക്കുന്നു. നിക്കോളാസ് കോപ്പർനിക്കസ് ഈ സിദ്ധാന്തം അവതരിപ്പിക്കുകയും പിന്നീട് ഗലീലിയോ ഗലീലി തന്റെ ടെലിസ്കോപ്പ് ഉപയോഗിച്ച് ഇത് തെളിയിക്കുകയും ചെയ്തു." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "What was the immediate cause of the Protestant Reformation, and who led it?", ml: "പ്രൊട്ടസ്റ്റന്റ് മതനവീകരണത്തിന്റെ ഉടനടിയുള്ള കാരണം എന്തായിരുന്നു, ഇതിന് നേതൃത്വം നൽകിയത് ആര്?" },
      options: [
        { k: "A", text: { en: "Sale of Indulgences. Led by Martin Luther.", ml: "പാപപരിഹാര പത്രങ്ങളുടെ വിൽപന. മാർട്ടിൻ ലൂഥർ നേതൃത്വം നൽകി." } },
        { k: "B", text: { en: "Sale of Indulgences. Led by the Pope.", ml: "പാപപരിഹാര പത്രങ്ങളുടെ വിൽപന. മാർപ്പാപ്പ നേതൃത്വം നൽകി." } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "The immediate cause was the Catholic Church's 'Sale of Indulgences' to supposedly redeem sins. Martin Luther led the Reformation by pasting his 'Ninety-Five Theses' on a church door in protest in 1517.", ml: "പാപങ്ങൾ മോചിക്കാമെന്ന് അവകാശപ്പെട്ടുകൊണ്ട് കത്തോലിക്കാ സഭ നടത്തിയ 'പാപപരിഹാര പത്രങ്ങളുടെ വിൽപന' ആയിരുന്നു ഉടനടിയുള്ള കാരണം. ഇതിൽ പ്രതിഷേധിച്ച് 1517-ൽ പള്ളിയുടെ വാതിലിൽ തന്റെ '95 തിസീസുകൾ' പതിപ്പിച്ചുകൊണ്ട് മാർട്ടിൻ ലൂഥർ മതനവീകരണത്തിന് നേതൃത്വം നൽകി." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "Who is known as the 'Father of Humanism'?", ml: "'മാനവികതയുടെ പിതാവ്' എന്നറിയപ്പെടുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Petrarch", ml: "പെട്രാർക്ക്" } },
        { k: "B", text: { en: "Dante", ml: "ഡാന്റേ" } },
        { k: "C", text: { en: "Boccaccio", ml: "ബൊക്കാച്ചിയോ" } },
        { k: "D", text: { en: "Erasmus", ml: "എറാസ്മസ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Petrarch is often called the Father of Humanism for his role in reviving interest in classical texts.", ml: "ക്ലാസിക്കൽ കൃതികളിലുള്ള താൽപ്പര്യം പുനരുജ്ജീവിപ്പിക്കുന്നതിൽ വഹിച്ച പങ്ക് കാരണം പെട്രാർക്കിനെ പലപ്പോഴും മാനവികതയുടെ പിതാവ് എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "Which city is considered the cradle of the Italian Renaissance?", ml: "ഇറ്റാലിയൻ നവോത്ഥാനത്തിന്റെ തൊട്ടിലായി കണക്കാക്കപ്പെടുന്ന നഗരം ഏത്?" },
      options: [
        { k: "A", text: { en: "Florence", ml: "ഫ്ലോറൻസ്" } },
        { k: "B", text: { en: "Rome", ml: "റോം" } },
        { k: "C", text: { en: "Venice", ml: "വെനീസ്" } },
        { k: "D", text: { en: "Milan", ml: "മിലാൻ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Florence, under the patronage of the Medici family, was the heart of the Italian Renaissance.", ml: "മെഡിചി കുടുംബത്തിന്റെ രക്ഷാകർതൃത്വത്തിൽ ഫ്ലോറൻസ് ഇറ്റാലിയൻ നവോത്ഥാനത്തിന്റെ കേന്ദ്രമായിരുന്നു." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "Who painted the 'Mona Lisa'?", ml: "'മോണാലിസ' വരച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Leonardo da Vinci", ml: "ലിയനാർഡോ ഡാവിഞ്ചി" } },
        { k: "B", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "C", text: { en: "Raphael", ml: "റാഫേൽ" } },
        { k: "D", text: { en: "Donatello", ml: "ഡൊണാറ്റെല്ലോ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Leonardo da Vinci is the artist behind the famous portrait 'Mona Lisa'.", ml: "പ്രശസ്തമായ 'മോണാലിസ' എന്ന ചിത്രം വരച്ചത് ലിയനാർഡോ ഡാവിഞ്ചിയാണ്." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "Which sculptor created the bronze statue of 'David'?", ml: "'ഡേവിഡ്' എന്ന വെങ്കല ശില്പം നിർമ്മിച്ച ശില്പി ആര്?" },
      options: [
        { k: "A", text: { en: "Donatello", ml: "ഡൊണാറ്റെല്ലോ" } },
        { k: "B", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "C", text: { en: "Ghiberti", ml: "ഗിബർട്ടി" } },
        { k: "D", text: { en: "Brunelleschi", ml: "ബ്രൂണെല്ലെസ്കി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Donatello created the famous bronze sculpture of David, distinct from Michelangelo's marble version.", ml: "മൈക്കലാഞ്ചലോയുടെ മാർബിൾ പതിപ്പിൽ നിന്ന് വ്യത്യസ്തമായി, ഡൊണാറ്റെല്ലോയാണ് ഡേവിഡിന്റെ പ്രശസ്തമായ വെങ്കല ശില്പം നിർമ്മിച്ചത്." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "Who wrote 'The Divine Comedy'?", ml: "'ദ ഡിവൈൻ കോമഡി' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Dante Alighieri", ml: "ഡാന്റേ അലിഘിയേരി" } },
        { k: "B", text: { en: "Petrarch", ml: "പെട്രാർക്ക്" } },
        { k: "C", text: { en: "Boccaccio", ml: "ബൊക്കാച്ചിയോ" } },
        { k: "D", text: { en: "Machiavelli", ml: "മാക്യവെല്ലി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Dante Alighieri wrote 'The Divine Comedy', a masterpiece of world literature.", ml: "ലോകസാഹിത്യത്തിലെ ഒരു മികച്ച കൃതിയായ 'ദ ഡിവൈൻ കോമഡി' രചിച്ചത് ഡാന്റേ അലിഘിയേരിയാണ്." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "In which year did the Fall of Constantinople occur?", ml: "ഏത് വർഷമാണ് കോൺസ്റ്റാന്റിനോപ്പിളിന്റെ പതനം സംഭവിച്ചത്?" },
      options: [
        { k: "A", text: { en: "1453", ml: "1453" } },
        { k: "B", text: { en: "1492", ml: "1492" } },
        { k: "C", text: { en: "1517", ml: "1517" } },
        { k: "D", text: { en: "1347", ml: "1347" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The Fall of Constantinople to the Ottoman Turks happened in 1453, triggering the migration of scholars to Italy.", ml: "1453-ലാണ് ഓട്ടോമൻ തുർക്കികൾ കോൺസ്റ്റാന്റിനോപ്പിൾ കീഴടക്കിയത്, ഇത് പണ്ഡിതന്മാരുടെ ഇറ്റലിയിലേക്കുള്ള പലായനത്തിന് കാരണമായി." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "Who wrote 'Utopia'?", ml: "'ഉട്ടോപ്യ' എന്ന കൃതി രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Thomas More", ml: "തോമസ് മൂർ" } },
        { k: "B", text: { en: "Erasmus", ml: "എറാസ്മസ്" } },
        { k: "C", text: { en: "Shakespeare", ml: "ഷേക്സ്പിയർ" } },
        { k: "D", text: { en: "Chaucer", ml: "ചോസർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Thomas More, an English humanist, wrote 'Utopia'.", ml: "ഇംഗ്ലീഷ് മാനവികതാവാദിയായ തോമസ് മൂർ ആണ് 'ഉട്ടോപ്യ' രചിച്ചത്." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "Who is the author of 'Don Quixote'?", ml: "'ഡോൺ ക്വിക്സോട്ട്' എന്ന കൃതിയുടെ രചയിതാവ് ആര്?" },
      options: [
        { k: "A", text: { en: "Miguel de Cervantes", ml: "മിഗുവൽ ഡി സെർവാന്റസ്" } },
        { k: "B", text: { en: "Dante", ml: "ഡാന്റേ" } },
        { k: "C", text: { en: "Boccaccio", ml: "ബൊക്കാച്ചിയോ" } },
        { k: "D", text: { en: "Petrarch", ml: "പെട്രാർക്ക്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Miguel de Cervantes, a Spanish writer, wrote 'Don Quixote'.", ml: "സ്പാനിഷ് എഴുത്തുകാരനായ മിഗുവൽ ഡി സെർവാന്റസ് ആണ് 'ഡോൺ ക്വിക്സോട്ട്' രചിച്ചത്." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "Who discovered the laws of planetary motion?", ml: "ഗ്രഹങ്ങളുടെ സഞ്ചാര നിയമങ്ങൾ കണ്ടെത്തിയത് ആര്?" },
      options: [
        { k: "A", text: { en: "Johannes Kepler", ml: "ജോഹന്നാസ് കെപ്ലർ" } },
        { k: "B", text: { en: "Isaac Newton", ml: "ഐസക് ന്യൂട്ടൺ" } },
        { k: "C", text: { en: "Galileo Galilei", ml: "ഗലീലിയോ ഗലീലി" } },
        { k: "D", text: { en: "Copernicus", ml: "കോപ്പർനിക്കസ്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Johannes Kepler formulated the laws of planetary motion.", ml: "ജോഹന്നാസ് കെപ്ലർ ആണ് ഗ്രഹങ്ങളുടെ സഞ്ചാര നിയമങ്ങൾ ആവിഷ്കരിച്ചത്." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "Who founded the 'Society of Jesus'?", ml: "'സൊസൈറ്റി ഓഫ് ജീസസ്' സ്ഥാപിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Ignatius Loyola", ml: "ഇഗ്നേഷ്യസ് ലയോള" } },
        { k: "B", text: { en: "Martin Luther", ml: "മാർട്ടിൻ ലൂഥർ" } },
        { k: "C", text: { en: "John Calvin", ml: "ജോൺ കാൽവിൻ" } },
        { k: "D", text: { en: "King Henry VIII", ml: "ഹെൻറി എട്ടാമൻ രാജാവ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Ignatius Loyola founded the Society of Jesus (Jesuits) as part of the Counter-Reformation.", ml: "പ്രതിമതനവീകരണത്തിന്റെ ഭാഗമായി ഇഗ്നേഷ്യസ് ലയോളയാണ് സൊസൈറ്റി ഓഫ് ജീസസ് (ഈശോസഭ) സ്ഥാപിച്ചത്." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "Which scientist pioneered human anatomy through dissection?", ml: "മൃതശരീരങ്ങൾ കീറിമുറിച്ച് പഠിച്ച് ശരീരശാസ്ത്രത്തിന് തുടക്കമിട്ട ശാസ്ത്രജ്ഞൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Andreas Vesalius", ml: "ആൻഡ്രിയാസ് വെസാലിയസ്" } },
        { k: "B", text: { en: "Paracelsus", ml: "പാരാസെൽസസ്" } },
        { k: "C", text: { en: "William Harvey", ml: "വില്യം ഹാർവി" } },
        { k: "D", text: { en: "Galileo", ml: "ഗലീലിയോ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Andreas Vesalius is considered the father of modern human anatomy for his work based on dissection.", ml: "മൃതശരീരങ്ങൾ കീറിമുറിച്ചുള്ള പഠനത്തിലൂടെ ആൻഡ്രിയാസ് വെസാലിയസ് ആധുനിക ശരീരശാസ്ത്രത്തിന്റെ പിതാവായി കണക്കാക്കപ്പെടുന്നു." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "What was the 'Index' established by the Council of Trent?", ml: "കൗൺസിൽ ഓഫ് ട്രെന്റ് സ്ഥാപിച്ച 'ഇൻഡക്സ്' എന്തായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "A list of banned books", ml: "നിരോധിക്കപ്പെട്ട പുസ്തകങ്ങളുടെ പട്ടിക" } },
        { k: "B", text: { en: "A list of saints", ml: "വിശുദ്ധന്മാരുടെ പട്ടിക" } },
        { k: "C", text: { en: "A new calendar", ml: "ഒരു പുതിയ കലണ്ടർ" } },
        { k: "D", text: { en: "A tax system", ml: "ഒരു നികുതി സമ്പ്രദായം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The Index was a list of books that Catholics were forbidden to read, established to stop the spread of Protestant ideas.", ml: "പ്രൊട്ടസ്റ്റന്റ് ആശയങ്ങളുടെ വ്യാപനം തടയുന്നതിനായി കത്തോലിക്കർ വായിക്കാൻ പാടില്ലാത്ത പുസ്തകങ്ങളുടെ പട്ടികയായിരുന്നു ഇൻഡക്സ്." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "Who established the Anglican Church in England?", ml: "ഇംഗ്ലണ്ടിൽ ആംഗ്ലിക്കൻ സഭ സ്ഥാപിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "King Henry VIII", ml: "ഹെൻറി എട്ടാമൻ രാജാവ്" } },
        { k: "B", text: { en: "Queen Elizabeth I", ml: "എലിസബത്ത് ഒന്നാമൻ രാജ്ഞി" } },
        { k: "C", text: { en: "Martin Luther", ml: "മാർട്ടിൻ ലൂഥർ" } },
        { k: "D", text: { en: "John Calvin", ml: "ജോൺ കാൽവിൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "King Henry VIII broke away from the Catholic Church and established the Anglican Church.", ml: "ഹെൻറി എട്ടാമൻ രാജാവ് കത്തോലിക്കാ സഭയുമായി ബന്ധം വേർപെടുത്തുകയും ആംഗ്ലിക്കൻ സഭ സ്ഥാപിക്കുകയും ചെയ്തു." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "Which work is attributed to Erasmus?", ml: "എറാസ്മസിന്റെ കൃതി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "In Praise of Folly", ml: "ഇൻ പ്രെയ്സ് ഓഫ് ഫൊളി" } },
        { k: "B", text: { en: "Utopia", ml: "ഉട്ടോപ്യ" } },
        { k: "C", text: { en: "The Prince", ml: "ദ പ്രിൻസ്" } },
        { k: "D", text: { en: "Decameron", ml: "ഡെക്കാമറൺ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Erasmus wrote 'In Praise of Folly', a satirical work.", ml: "എറാസ്മസ് 'ഇൻ പ്രെയ്സ് ഓഫ് ഫൊളി' എന്ന ആക്ഷേപഹാസ്യ കൃതി രചിച്ചു." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "What does 'Scholasticism' refer to?", ml: "'സ്കോളാസ്റ്റിസിസം' എന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Medieval philosophy prioritizing Christian theology", ml: "ക്രൈസ്തവ ദൈവശാസ്ത്രത്തിന് മുൻഗണന നൽകുന്ന മധ്യകാല തത്വശാസ്ത്രം" } },
        { k: "B", text: { en: "Modern scientific method", ml: "ആധുനിക ശാസ്ത്രീയ രീതി" } },
        { k: "C", text: { en: "Greek art style", ml: "ഗ്രീക്ക് കലാശൈലി" } },
        { k: "D", text: { en: "Roman law", ml: "റോമൻ നിയമം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Scholasticism was the dominant medieval philosophy that focused on Christian theology and the afterlife, which Humanism later challenged.", ml: "ക്രൈസ്തവ ദൈവശാസ്ത്രത്തിനും മരണാനന്തര ജീവിതത്തിനും പ്രാധാന്യം നൽകിയിരുന്ന മധ്യകാല തത്വശാസ്ത്രമായിരുന്നു സ്കോളാസ്റ്റിസിസം, ഇതിനെയാണ് പിന്നീട് മാനവികത വെല്ലുവിളിച്ചത്." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "Who painted 'The Last Supper'?", ml: "'അന്ത്യത്താഴം' എന്ന ചിത്രം വരച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Leonardo da Vinci", ml: "ലിയനാർഡോ ഡാവിഞ്ചി" } },
        { k: "B", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "C", text: { en: "Raphael", ml: "റാഫേൽ" } },
        { k: "D", text: { en: "Titian", ml: "ടിഷ്യൻ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Leonardo da Vinci painted the masterpiece 'The Last Supper'.", ml: "ലിയനാർഡോ ഡാവിഞ്ചിയാണ് 'അന്ത്യത്താഴം' എന്ന വിശ്വപ്രസിദ്ധ ചിത്രം വരച്ചത്." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "Who painted the ceiling of the Sistine Chapel?", ml: "സിസ്റ്റീൻ ചാപ്പലിന്റെ മുകൾത്തട്ടിലെ ചിത്രങ്ങൾ വരച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "B", text: { en: "Leonardo da Vinci", ml: "ലിയനാർഡോ ഡാവിഞ്ചി" } },
        { k: "C", text: { en: "Donatello", ml: "ഡൊണാറ്റെല്ലോ" } },
        { k: "D", text: { en: "Botticelli", ml: "ബോട്ടിസെല്ലി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Michelangelo painted the famous frescoes on the ceiling of the Sistine Chapel.", ml: "സിസ്റ്റീൻ ചാപ്പലിന്റെ മുകൾത്തട്ടിലെ പ്രശസ്തമായ ചുവർചിത്രങ്ങൾ വരച്ചത് മൈക്കലാഞ്ചലോയാണ്." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "Who wrote 'The Decameron'?", ml: "'ദ ഡെക്കാമറൺ' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Giovanni Boccaccio", ml: "ജിയോവാനി ബൊക്കാച്ചിയോ" } },
        { k: "B", text: { en: "Petrarch", ml: "പെട്രാർക്ക്" } },
        { k: "C", text: { en: "Dante", ml: "ഡാന്റേ" } },
        { k: "D", text: { en: "Chaucer", ml: "ചോസർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Giovanni Boccaccio is the author of 'The Decameron'.", ml: "'ദ ഡെക്കാമറൺ' എന്ന കൃതിയുടെ രചയിതാവ് ജിയോവാനി ബൊക്കാച്ചിയോ ആണ്." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "Which English author wrote 'The Canterbury Tales'?", ml: "'ദ കാന്റർബറി ടെയിൽസ്' എന്ന കൃതി രചിച്ച ഇംഗ്ലീഷ് എഴുത്തുകാരൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Geoffrey Chaucer", ml: "ജെഫ്രി ചോസർ" } },
        { k: "B", text: { en: "Thomas More", ml: "തോമസ് മൂർ" } },
        { k: "C", text: { en: "Shakespeare", ml: "ഷേക്സ്പിയർ" } },
        { k: "D", text: { en: "Milton", ml: "മിൽട്ടൺ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Geoffrey Chaucer wrote 'The Canterbury Tales'.", ml: "ജെഫ്രി ചോസർ ആണ് 'ദ കാന്റർബറി ടെയിൽസ്' രചിച്ചത്." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "Who wrote 'Gargantua and Pantagruel'?", ml: "'ഗാർഗന്ത്വാ ആൻഡ് പാന്റാഗ്രുവൽ' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "François Rabelais", ml: "ഫ്രാൻസ്വാ റാബലെ" } },
        { k: "B", text: { en: "Montaigne", ml: "മോണ്ടെയ്ൻ" } },
        { k: "C", text: { en: "Cervantes", ml: "സെർവാന്റസ്" } },
        { k: "D", text: { en: "Moliere", ml: "മോളിയേർ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "François Rabelais, a French writer, wrote 'Gargantua and Pantagruel'.", ml: "ഫ്രഞ്ച് എഴുത്തുകാരനായ ഫ്രാൻസ്വാ റാബലെയാണ് 'ഗാർഗന്ത്വാ ആൻഡ് പാന്റാഗ്രുവൽ' രചിച്ചത്." }
    },
    {
      q_id: "q31",
      type: "mcq",
      stem: { en: "Who was Cassandra Fedele?", ml: "കസാന്ദ്ര ഫെഡലെ ആരായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "A female humanist who championed women's education", ml: "സ്ത്രീകളുടെ വിദ്യാഭ്യാസത്തിന് വേണ്ടി വാദിച്ച വനിതാ മാനവികതാവാദി" } },
        { k: "B", text: { en: "A famous painter", ml: "പ്രശസ്തയായ ഒരു ചിത്രകാരി" } },
        { k: "C", text: { en: "A queen of Italy", ml: "ഇറ്റലിയിലെ ഒരു രാജ്ഞി" } },
        { k: "D", text: { en: "A religious reformer", ml: "ഒരു മതനവീകരണ പ്രവർത്തക" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Cassandra Fedele was a noted female humanist who advocated for women's higher education.", ml: "സ്ത്രീകളുടെ ഉന്നത വിദ്യാഭ്യാസത്തിന് വേണ്ടി വാദിച്ച പ്രശസ്തയായ വനിതാ മാനവികതാവാദിയായിരുന്നു കസാന്ദ്ര ഫെഡലെ." }
    },
    {
      q_id: "q32",
      type: "mcq",
      stem: { en: "Which scientist formulated the theory of gravitation?", ml: "ഗുരുത്വാകർഷണ സിദ്ധാന്തം ആവിഷ്കരിച്ച ശാസ്ത്രജ്ഞൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Isaac Newton", ml: "ഐസക് ന്യൂട്ടൺ" } },
        { k: "B", text: { en: "Galileo Galilei", ml: "ഗലീലിയോ ഗലീലി" } },
        { k: "C", text: { en: "Johannes Kepler", ml: "ജോഹന്നാസ് കെപ്ലർ" } },
        { k: "D", text: { en: "Copernicus", ml: "കോപ്പർനിക്കസ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Isaac Newton formulated the theory of gravitation.", ml: "ഐസക് ന്യൂട്ടൺ ആണ് ഗുരുത്വാകർഷണ സിദ്ധാന്തം ആവിഷ്കരിച്ചത്." }
    },
    {
      q_id: "q33",
      type: "mcq",
      stem: { en: "What contribution did Paracelsus make to science?", ml: "ശാസ്ത്രത്തിന് പാരാസെൽസസ് നൽകിയ സംഭാവന എന്ത്?" },
      options: [
        { k: "A", text: { en: "Researched diseases and medicine", ml: "രോഗങ്ങളെക്കുറിച്ചും മരുന്നുകളെക്കുറിച്ചും ഗവേഷണം നടത്തി" } },
        { k: "B", text: { en: "Invented the telescope", ml: "ടെലിസ്കോപ്പ് കണ്ടുപിടിച്ചു" } },
        { k: "C", text: { en: "Discovered America", ml: "അമേരിക്ക കണ്ടുപിടിച്ചു" } },
        { k: "D", text: { en: "Formulated laws of motion", ml: "ചലന നിയമങ്ങൾ ആവിഷ്കരിച്ചു" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Paracelsus was a pioneer in medical research and the study of diseases.", ml: "വൈദ്യശാസ്ത്ര ഗവേഷണത്തിലും രോഗങ്ങളെക്കുറിച്ചുള്ള പഠനത്തിലും പാരാസെൽസസ് ഒരു മുൻഗാമിയായിരുന്നു." }
    },
    {
      q_id: "q34",
      type: "mcq",
      stem: { en: "Who were the leaders of the Reformation in Switzerland?", ml: "സ്വിറ്റ്സർലൻഡിലെ മതനവീകരണ നേതാക്കൾ ആരൊക്കെയായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Zwingli and John Calvin", ml: "സിംഗ്ലിയും ജോൺ കാൽവിനും" } },
        { k: "B", text: { en: "Luther and Erasmus", ml: "ലൂഥറും എറാസ്മസും" } },
        { k: "C", text: { en: "Henry VIII and Elizabeth I", ml: "ഹെൻറി എട്ടാമനും എലിസബത്ത് ഒന്നാമനും" } },
        { k: "D", text: { en: "Loyola and Xavier", ml: "ലയോളയും സേവ്യറും" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Zwingli and John Calvin were the key figures of the Reformation in Switzerland.", ml: "സിംഗ്ലിയും ജോൺ കാൽവിനും ആയിരുന്നു സ്വിറ്റ്സർലൻഡിലെ മതനവീകരണത്തിന്റെ പ്രധാന നേതാക്കൾ." }
    },
    {
      q_id: "q35",
      type: "mcq",
      stem: { en: "What was the main purpose of the Counter Reformation?", ml: "പ്രതിമതനവീകരണത്തിന്റെ പ്രധാന ലക്ഷ്യം എന്തായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "To reform the Catholic Church and regain its authority", ml: "കത്തോലിക്കാ സഭയെ നവീകരിക്കാനും അധികാരം വീണ്ടെടുക്കാനും" } },
        { k: "B", text: { en: "To support Martin Luther", ml: "മാർട്ടിൻ ലൂഥറെ പിന്തുണയ്ക്കാൻ" } },
        { k: "C", text: { en: "To translate the Bible", ml: "ബൈബിൾ വിവർത്തനം ചെയ്യാൻ" } },
        { k: "D", text: { en: "To build new churches", ml: "പുതിയ പള്ളികൾ പണിയാൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The Counter Reformation aimed to correct abuses within the Catholic Church and stop the spread of Protestantism.", ml: "കത്തോലിക്കാ സഭയ്ക്കുള്ളിലെ അനാചാരങ്ങൾ തിരുത്താനും പ്രൊട്ടസ്റ്റന്റ് മതത്തിന്റെ വ്യാപനം തടയാനും പ്രതിമതനവീകരണം ലക്ഷ്യമിട്ടു." }
    },
    {
      q_id: "q36",
      type: "mcq",
      stem: { en: "Which family was a major patron of arts in Florence?", ml: "ഫ്ലോറൻസിലെ കലകളുടെ പ്രധാന രക്ഷാധികാരികൾ ഏത് കുടുംബമായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Medici", ml: "മെഡിചി" } },
        { k: "B", text: { en: "Sforza", ml: "സ്ഫോർസ" } },
        { k: "C", text: { en: "Borgia", ml: "ബോർജിയ" } },
        { k: "D", text: { en: "Tudor", ml: "ട്യൂഡർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The Medici family in Florence were powerful bankers and patrons of the Renaissance arts.", ml: "ഫ്ലോറൻസിലെ മെഡിചി കുടുംബം ശക്തരായ ബാങ്കർമാരും നവോത്ഥാന കലകളുടെ രക്ഷാധികാരികളുമായിരുന്നു." }
    },
    {
      q_id: "q37",
      type: "mcq",
      stem: { en: "What is the meaning of the word 'Renaissance'?", ml: "'നവോത്ഥാനം' എന്ന വാക്കിന്റെ അർത്ഥം എന്ത്?" },
      options: [
        { k: "A", text: { en: "Rebirth", ml: "പുനർജന്മം" } },
        { k: "B", text: { en: "Revolution", ml: "വിപ്ലവം" } },
        { k: "C", text: { en: "Reform", ml: "പരിഷ്കരണം" } },
        { k: "D", text: { en: "Resistance", ml: "ചെറുത്തുനിൽപ്പ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Renaissance literally means 'rebirth'.", ml: "നവോത്ഥാനം എന്ന വാക്കിന്റെ അക്ഷരാർത്ഥം 'പുനർജന്മം' എന്നാണ്." }
    },
    {
      q_id: "q38",
      type: "mcq",
      stem: { en: "Who emphasized rationalism, knowledge, and love in the 13th century?", ml: "പതിമൂന്നാം നൂറ്റാണ്ടിൽ യുക്തിചിന്ത, അറിവ്, സ്നേഹം എന്നിവയുടെ പ്രാധാന്യം ഊന്നിപ്പറഞ്ഞത് ആര്?" },
      options: [
        { k: "A", text: { en: "Roger Bacon", ml: "റോജർ ബേക്കൺ" } },
        { k: "B", text: { en: "Francis Bacon", ml: "ഫ്രാൻസിസ് ബേക്കൺ" } },
        { k: "C", text: { en: "Thomas Aquinas", ml: "തോമസ് അക്വിനാസ്" } },
        { k: "D", text: { en: "Erasmus", ml: "എറാസ്മസ്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Roger Bacon was a scientific philosopher in the 13th century who emphasized these values.", ml: "പതിമൂന്നാം നൂറ്റാണ്ടിലെ ശാസ്ത്രീയ ചിന്തകനായിരുന്ന റോജർ ബേക്കൺ ആണ് ഈ മൂല്യങ്ങൾക്ക് പ്രാധാന്യം നൽകിയത്." }
    },
    {
      q_id: "q39",
      type: "mcq",
      stem: { en: "Which event in the mid-14th century destroyed agriculture-based feudalism?", ml: "പതിനാലാം നൂറ്റാണ്ടിന്റെ മധ്യത്തിൽ കാർഷികാധിഷ്ഠിത നാടുവാഴിത്തത്തെ തകർത്ത സംഭവം ഏത്?" },
      options: [
        { k: "A", text: { en: "Black Death (Plague)", ml: "കരിമരണം (പ്ലേഗ്)" } },
        { k: "B", text: { en: "Hundred Years' War", ml: "നൂറുവർഷ യുദ്ധം" } },
        { k: "C", text: { en: "Crusades", ml: "കുരിശുയുദ്ധങ്ങൾ" } },
        { k: "D", text: { en: "Industrial Revolution", ml: "വ്യവസായ വിപ്ലവം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The Black Death (Plague) decimated the population, weakening the feudal system.", ml: "കരിമരണം (പ്ലേഗ്) ജനസംഖ്യയെ നശിപ്പിക്കുകയും നാടുവാഴിത്ത വ്യവസ്ഥയെ ദുർബലപ്പെടുത്തുകയും ചെയ്തു." }
    },
    {
      q_id: "q40",
      type: "mcq",
      stem: { en: "Which ruling family is associated with the city of Milan?", ml: "മിലാൻ നഗരവുമായി ബന്ധപ്പെട്ട ഭരണകുടുംബം ഏത്?" },
      options: [
        { k: "A", text: { en: "Sforza", ml: "സ്ഫോർസ" } },
        { k: "B", text: { en: "Medici", ml: "മെഡിചി" } },
        { k: "C", text: { en: "Orsini", ml: "ഓർസിനി" } },
        { k: "D", text: { en: "Farnese", ml: "ഫർണീസ്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "The Sforza and Visconti families were associated with Milan.", ml: "സ്ഫോർസ, വിസ്കോണ്ടി കുടുംബങ്ങൾ മിലാനുമായി ബന്ധപ്പെട്ടവരായിരുന്നു." }
    },
    {
      q_id: "q41",
      type: "mcq",
      stem: { en: "What language did Renaissance writers start using instead of Latin?", ml: "ലാറ്റിന് പകരം നവോത്ഥാന എഴുത്തുകാർ ഏത് ഭാഷയാണ് ഉപയോഗിക്കാൻ തുടങ്ങിയത്?" },
      options: [
        { k: "A", text: { en: "Regional languages (Vernacular)", ml: "പ്രാദേശിക ഭാഷകൾ" } },
        { k: "B", text: { en: "Greek", ml: "ഗ്രീക്ക്" } },
        { k: "C", text: { en: "Arabic", ml: "അറബിക്" } },
        { k: "D", text: { en: "Hebrew", ml: "ഹീബ്രു" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Renaissance writers began writing in regional languages (vernacular) to reach a wider audience.", ml: "കൂടുതൽ ആളുകളിലേക്ക് എത്തുന്നതിനായി നവോത്ഥാന എഴുത്തുകാർ പ്രാദേശിക ഭാഷകളിൽ എഴുതാൻ തുടങ്ങി." }
    },
    {
      q_id: "q42",
      type: "mcq",
      stem: { en: "Who created the sculpture 'Pietà'?", ml: "'പിയാത്ത' എന്ന ശില്പം നിർമ്മിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "B", text: { en: "Donatello", ml: "ഡൊണാറ്റെല്ലോ" } },
        { k: "C", text: { en: "Bernini", ml: "ബെർണിനി" } },
        { k: "D", text: { en: "Rodin", ml: "റോഡിൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Michelangelo created the masterpiece 'Pietà'.", ml: "മൈക്കലാഞ്ചലോയാണ് 'പിയാത്ത' എന്ന വിശ്വപ്രസിദ്ധ ശില്പം നിർമ്മിച്ചത്." }
    },
    {
      q_id: "q43",
      type: "mcq",
      stem: { en: "Which invention facilitated the rapid spread of literacy in the 15th century?", ml: "പതിനഞ്ചാം നൂറ്റാണ്ടിൽ സാക്ഷരതയുടെ വേഗത്തിലുള്ള വ്യാപനത്തിന് സഹായിച്ച കണ്ടുപിടുത്തം ഏത്?" },
      options: [
        { k: "A", text: { en: "Printing Press", ml: "അച്ചടിയന്ത്രം" } },
        { k: "B", text: { en: "Steam Engine", ml: "ആവി യന്ത്രം" } },
        { k: "C", text: { en: "Compass", ml: "വടക്കുനോക്കി യന്ത്രം" } },
        { k: "D", text: { en: "Telescope", ml: "ടെലിസ്കോപ്പ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The printing press made books accessible, boosting literacy.", ml: "അച്ചടിയന്ത്രം പുസ്തകങ്ങൾ ലഭ്യമാക്കുകയും സാക്ഷരത വർദ്ധിപ്പിക്കുകയും ചെയ്തു." }
    },
    {
      q_id: "q44",
      type: "mcq",
      stem: { en: "Who were the Orsini family associated with?", ml: "ഓർസിനി കുടുംബം ഏത് നഗരവുമായി ബന്ധപ്പെട്ടവരായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Naples", ml: "നേപ്പിൾസ്" } },
        { k: "B", text: { en: "Venice", ml: "വെനീസ്" } },
        { k: "C", text: { en: "Florence", ml: "ഫ്ലോറൻസ്" } },
        { k: "D", text: { en: "Milan", ml: "മിലാൻ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "The Orsini family was associated with Naples.", ml: "ഓർസിനി കുടുംബം നേപ്പിൾസുമായി ബന്ധപ്പെട്ടവരായിരുന്നു." }
    },
    {
      q_id: "q45",
      type: "mcq",
      stem: { en: "What did Galileo Galilei invent?", ml: "ഗലീലിയോ ഗലീലി എന്താണ് കണ്ടുപിടിച്ചത്?" },
      options: [
        { k: "A", text: { en: "Telescope", ml: "ടെലിസ്കോപ്പ്" } },
        { k: "B", text: { en: "Microscope", ml: "മൈക്രോസ്കോപ്പ്" } },
        { k: "C", text: { en: "Printing Press", ml: "അച്ചടിയന്ത്രം" } },
        { k: "D", text: { en: "Barometer", ml: "ബാരോമീറ്റർ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Galileo invented the telescope, which he used to observe celestial bodies.", ml: "ഗലീലിയോ ടെലിസ്കോപ്പ് കണ്ടുപിടിക്കുകയും അത് ഉപയോഗിച്ച് ആകാശഗോളങ്ങളെ നിരീക്ഷിക്കുകയും ചെയ്തു." }
    },
    {
      q_id: "q46",
      type: "mcq",
      stem: { en: "Who wrote 'The Prince'?", ml: "'ദ പ്രിൻസ്' എന്ന കൃതി രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Niccolò Machiavelli", ml: "നിക്കോളോ മാക്യവെല്ലി" } },
        { k: "B", text: { en: "Dante", ml: "ഡാന്റേ" } },
        { k: "C", text: { en: "Plato", ml: "പ്ലേറ്റോ" } },
        { k: "D", text: { en: "Aristotle", ml: "അരിസ്റ്റോട്ടിൽ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Machiavelli wrote 'The Prince', a treatise on political realism.", ml: "രാഷ്ട്രീയ യാഥാർത്ഥ്യങ്ങളെക്കുറിച്ചുള്ള 'ദ പ്രിൻസ്' എന്ന കൃതി രചിച്ചത് മാക്യവെല്ലിയാണ്." }
    },
    {
      q_id: "q47",
      type: "mcq",
      stem: { en: "What does the 'Heliocentric model' propose?", ml: "'സൗരയൂഥ കേന്ദ്ര സിദ്ധാന്തം' എന്താണ് മുന്നോട്ട് വെക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Sun is the center of the universe", ml: "സൂര്യനാണ് പ്രപഞ്ച കേന്ദ്രം" } },
        { k: "B", text: { en: "Earth is the center of the universe", ml: "ഭൂമിയാണ് പ്രപഞ്ച കേന്ദ്രം" } },
        { k: "C", text: { en: "Moon is the center of the universe", ml: "ചന്ദ്രനാണ് പ്രപഞ്ച കേന്ദ്രം" } },
        { k: "D", text: { en: "Stars revolve around the Earth", ml: "നക്ഷത്രങ്ങൾ ഭൂമിക്ക് ചുറ്റും കറങ്ങുന്നു" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The Heliocentric model proposes that the Sun is the center of the universe.", ml: "സൂര്യനാണ് പ്രപഞ്ച കേന്ദ്രം എന്ന് സൗരയൂഥ കേന്ദ്ര സിദ്ധാന്തം മുന്നോട്ട് വെക്കുന്നു." }
    },
    {
      q_id: "q48",
      type: "mcq",
      stem: { en: "Who pasted the 'Ninety-Five Theses' on the church door?", ml: "പള്ളിയുടെ വാതിലിൽ '95 തിസീസുകൾ' പതിപ്പിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Martin Luther", ml: "മാർട്ടിൻ ലൂഥർ" } },
        { k: "B", text: { en: "John Calvin", ml: "ജോൺ കാൽവിൻ" } },
        { k: "C", text: { en: "Pope Leo X", ml: "ലിയോ പത്താമൻ മാർപ്പാപ്പ" } },
        { k: "D", text: { en: "Zwingli", ml: "സിംഗ്ലി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Martin Luther pasted the Ninety-Five Theses to protest against church practices.", ml: "സഭയുടെ ആചാരങ്ങൾക്കെതിരെ പ്രതിഷേധിച്ചുകൊണ്ട് മാർട്ടിൻ ലൂഥർ ആണ് 95 തിസീസുകൾ പതിപ്പിച്ചത്." }
    },
    {
      q_id: "q49",
      type: "mcq",
      stem: { en: "Which period follows the Medieval Period in history?", ml: "ചരിത്രത്തിൽ മധ്യകാലഘട്ടത്തിന് ശേഷം വരുന്ന കാലഘട്ടം ഏത്?" },
      options: [
        { k: "A", text: { en: "Modern Period", ml: "ആധുനിക കാലഘട്ടം" } },
        { k: "B", text: { en: "Ancient Period", ml: "പ്രാചീന കാലഘട്ടം" } },
        { k: "C", text: { en: "Stone Age", ml: "ശിലായുഗം" } },
        { k: "D", text: { en: "Bronze Age", ml: "വെങ്കലയുഗം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The Modern Period follows the Medieval Period, starting from the 15th century.", ml: "പതിനഞ്ചാം നൂറ്റാണ്ട് മുതൽ ആരംഭിക്കുന്ന ആധുനിക കാലഘട്ടമാണ് മധ്യകാലഘട്ടത്തിന് ശേഷം വരുന്നത്." }
    },
    {
      q_id: "q50",
      type: "mcq",
      stem: { en: "Who was the sculptor of 'Gattamelata'?", ml: "'ഗട്ടാമലാറ്റ' എന്ന ശില്പം നിർമ്മിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Donatello", ml: "ഡൊണാറ്റെല്ലോ" } },
        { k: "B", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "C", text: { en: "Raphael", ml: "റാഫേൽ" } },
        { k: "D", text: { en: "Da Vinci", ml: "ഡാവിഞ്ചി" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Donatello created the equestrian statue of Gattamelata.", ml: "ഗട്ടാമലാറ്റയുടെ കുതിരപ്പുറത്തിരിക്കുന്ന ശില്പം നിർമ്മിച്ചത് ഡൊണാറ്റെല്ലോയാണ്." }
    },
    {
      q_id: "q51",
      type: "mcq",
      stem: { en: "Who painted 'The School of Athens'?", ml: "'ദ സ്കൂൾ ഓഫ് ഏഥൻസ്' എന്ന ചിത്രം വരച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Raphael", ml: "റാഫേൽ" } },
        { k: "B", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "C", text: { en: "Leonardo da Vinci", ml: "ലിയനാർഡോ ഡാവിഞ്ചി" } },
        { k: "D", text: { en: "Titian", ml: "ടിഷ്യൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Raphael painted 'The School of Athens', a famous fresco in the Vatican.", ml: "വത്തിക്കാനിലെ പ്രശസ്തമായ ചുവർചിത്രമായ 'ദ സ്കൂൾ ഓഫ് ഏഥൻസ്' വരച്ചത് റാഫേൽ ആണ്." }
    },
    {
      q_id: "q52",
      type: "mcq",
      stem: { en: "Which Renaissance artist is known as the 'Universal Man'?", ml: "'സർവ്വകലാ വല്ലഭൻ' (Universal Man) എന്നറിയപ്പെടുന്ന നവോത്ഥാന കലാകാരൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Leonardo da Vinci", ml: "ലിയനാർഡോ ഡാവിഞ്ചി" } },
        { k: "B", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "C", text: { en: "Raphael", ml: "റാഫേൽ" } },
        { k: "D", text: { en: "Donatello", ml: "ഡൊണാറ്റെല്ലോ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Leonardo da Vinci is known as the 'Universal Man' due to his expertise in various fields like art, science, and engineering.", ml: "കല, ശാസ്ത്രം, എൻജിനീയറിങ് തുടങ്ങിയ വിവിധ മേഖലകളിലെ പ്രാവീണ്യം കാരണം ലിയനാർഡോ ഡാവിഞ്ചിയെ 'സർവ്വകലാ വല്ലഭൻ' എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q53",
      type: "mcq",
      stem: { en: "What was the main theme of 'The Praise of Folly'?", ml: "'ഇൻ പ്രെയ്സ് ഓഫ് ഫൊളി' എന്ന കൃതിയുടെ പ്രധാന പ്രമേയം എന്തായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Satire on church corruption and superstitions", ml: "സഭയിലെ അഴിമതിയെയും അന്ധവിശ്വാസങ്ങളെയും പരിഹസിക്കുന്നു" } },
        { k: "B", text: { en: "Praise of the Pope", ml: "മാർപ്പാപ്പയെ സ്തുതിക്കുന്നു" } },
        { k: "C", text: { en: "History of Rome", ml: "റോമിന്റെ ചരിത്രം" } },
        { k: "D", text: { en: "Scientific discoveries", ml: "ശാസ്ത്രീയ കണ്ടുപിടുത്തങ്ങൾ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Erasmus used satire to criticize the corruption and superstitions of the Church.", ml: "സഭയിലെ അഴിമതിയെയും അന്ധവിശ്വാസങ്ങളെയും വിമർശിക്കാൻ എറാസ്മസ് ആക്ഷേപഹാസ്യം ഉപയോഗിച്ചു." }
    },
    {
      q_id: "q54",
      type: "mcq",
      stem: { en: "Who discovered the circulation of blood in the human body?", ml: "മനുഷ്യശരീരത്തിലെ രക്തചംക്രമണം കണ്ടെത്തിയത് ആര്?" },
      options: [
        { k: "A", text: { en: "William Harvey", ml: "വില്യം ഹാർവി" } },
        { k: "B", text: { en: "Andreas Vesalius", ml: "ആൻഡ്രിയാസ് വെസാലിയസ്" } },
        { k: "C", text: { en: "Paracelsus", ml: "പാരാസെൽസസ്" } },
        { k: "D", text: { en: "Galileo", ml: "ഗലീലിയോ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "William Harvey discovered the circulation of blood.", ml: "വില്യം ഹാർവി ആണ് രക്തചംക്രമണം കണ്ടെത്തിയത്." }
    },
    {
      q_id: "q55",
      type: "mcq",
      stem: { en: "Which city is known as the 'Queen of the Adriatic'?", ml: "'ഏഡ്രിയാറ്റിക്കിന്റെ റാണി' എന്നറിയപ്പെടുന്ന നഗരം ഏത്?" },
      options: [
        { k: "A", text: { en: "Venice", ml: "വെനീസ്" } },
        { k: "B", text: { en: "Florence", ml: "ഫ്ലോറൻസ്" } },
        { k: "C", text: { en: "Genoa", ml: "ജനോവ" } },
        { k: "D", text: { en: "Rome", ml: "റോം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Venice is historically known as the 'Queen of the Adriatic' due to its maritime power.", ml: "സമുദ്രശക്തി കാരണം വെനീസ് ചരിത്രപരമായി 'ഏഡ്രിയാറ്റിക്കിന്റെ റാണി' എന്നറിയപ്പെടുന്നു." }
    },
    {
      q_id: "q56",
      type: "mcq",
      stem: { en: "Who wrote 'Hamlet'?", ml: "'ഹാംലെറ്റ്' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "William Shakespeare", ml: "വില്യം ഷേക്സ്പിയർ" } },
        { k: "B", text: { en: "Christopher Marlowe", ml: "ക്രിസ്റ്റഫർ മാർലോ" } },
        { k: "C", text: { en: "Geoffrey Chaucer", ml: "ജെഫ്രി ചോസർ" } },
        { k: "D", text: { en: "Thomas More", ml: "തോമസ് മൂർ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "William Shakespeare is the author of the famous play 'Hamlet'.", ml: "പ്രശസ്തമായ 'ഹാംലെറ്റ്' എന്ന നാടകം രചിച്ചത് വില്യം ഷേക്സ്പിയർ ആണ്." }
    },
    {
      q_id: "q57",
      type: "mcq",
      stem: { en: "What does 'Geocentric theory' state?", ml: "'ഭൂകേന്ദ്ര സിദ്ധാന്തം' എന്താണ് പ്രസ്താവിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Earth is the center of the universe", ml: "ഭൂമിയാണ് പ്രപഞ്ച കേന്ദ്രം" } },
        { k: "B", text: { en: "Sun is the center of the universe", ml: "സൂര്യനാണ് പ്രപഞ്ച കേന്ദ്രം" } },
        { k: "C", text: { en: "Earth is flat", ml: "ഭൂമി പരന്നതാണ്" } },
        { k: "D", text: { en: "Moon is the center of the universe", ml: "ചന്ദ്രനാണ് പ്രപഞ്ച കേന്ദ്രം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The Geocentric theory, proposed by Ptolemy, states that the Earth is the center of the universe.", ml: "ടോളമി അവതരിപ്പിച്ച ഭൂകേന്ദ്ര സിദ്ധാന്തം അനുസരിച്ച് ഭൂമിയാണ് പ്രപഞ്ചത്തിന്റെ കേന്ദ്രം." }
    },
    {
      q_id: "q58",
      type: "mcq",
      stem: { en: "Who was the leader of the Peasant's Revolt in Germany?", ml: "ജർമ്മനിയിലെ കർഷക കലാപത്തിന്റെ നേതാവ് ആരായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Thomas Muntzer", ml: "തോമസ് മുൻസർ" } },
        { k: "B", text: { en: "Martin Luther", ml: "മാർട്ടിൻ ലൂഥർ" } },
        { k: "C", text: { en: "John Calvin", ml: "ജോൺ കാൽവിൻ" } },
        { k: "D", text: { en: "Erasmus", ml: "എറാസ്മസ്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Thomas Muntzer led the Peasant's Revolt, although Luther opposed it.", ml: "ലൂഥർ എതിർത്തെങ്കിലും, തോമസ് മുൻസർ ആണ് കർഷക കലാപത്തിന് നേതൃത്വം നൽകിയത്." }
    },
    {
      q_id: "q59",
      type: "mcq",
      stem: { en: "Which invention is credited to John Kay?", ml: "ജോൺ കേയുടെ കണ്ടുപിടുത്തം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Flying Shuttle", ml: "ഫ്ലയിംഗ് ഷട്ടിൽ" } },
        { k: "B", text: { en: "Spinning Jenny", ml: "സ്പിന്നിംഗ് ജെനി" } },
        { k: "C", text: { en: "Steam Engine", ml: "ആവി യന്ത്രം" } },
        { k: "D", text: { en: "Power Loom", ml: "പവർ ലൂം" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "John Kay invented the Flying Shuttle, which revolutionized weaving.", ml: "നെയ്ത്ത് വ്യവസായത്തിൽ വിപ്ലവം സൃഷ്ടിച്ച ഫ്ലയിംഗ് ഷട്ടിൽ കണ്ടുപിടിച്ചത് ജോൺ കേ ആണ്." }
    },
    {
      q_id: "q60",
      type: "mcq",
      stem: { en: "Who wrote 'Paradise Lost'?", ml: "'പാരഡൈസ് ലോസ്റ്റ്' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "John Milton", ml: "ജോൺ മിൽട്ടൺ" } },
        { k: "B", text: { en: "Shakespeare", ml: "ഷേക്സ്പിയർ" } },
        { k: "C", text: { en: "Dante", ml: "ഡാന്റേ" } },
        { k: "D", text: { en: "Homer", ml: "ഹോമർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "John Milton wrote the epic poem 'Paradise Lost'.", ml: "ജോൺ മിൽട്ടൺ ആണ് 'പാരഡൈസ് ലോസ്റ്റ്' എന്ന ഇതിഹാസ കാവ്യം രചിച്ചത്." }
    },
    {
      q_id: "q61",
      type: "mcq",
      stem: { en: "What is 'fresco'?", ml: "'ഫ്രെസ്കോ' എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "A technique of mural painting on wet lime plaster", ml: "നനഞ്ഞ കുമ്മായത്തിൽ ചിത്രം വരയ്ക്കുന്ന രീതി" } },
        { k: "B", text: { en: "A type of sculpture", ml: "ഒരു തരം ശില്പം" } },
        { k: "C", text: { en: "A style of music", ml: "ഒരു സംഗീത ശൈലി" } },
        { k: "D", text: { en: "A form of poetry", ml: "ഒരു കവിതാ രൂപം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Fresco is a technique of mural painting executed upon freshly laid, or wet lime plaster.", ml: "നനഞ്ഞ കുമ്മായത്തിൽ ചിത്രം വരയ്ക്കുന്ന ചുവർചിത്ര രചനാ രീതിയാണ് ഫ്രെസ്കോ." }
    },
    {
      q_id: "q62",
      type: "mcq",
      stem: { en: "Who is known as the 'Morning Star of the Reformation'?", ml: "'മതനവീകരണത്തിന്റെ പ്രഭാത നക്ഷത്രം' എന്നറിയപ്പെടുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "John Wycliffe", ml: "ജോൺ വൈക്ലിഫ്" } },
        { k: "B", text: { en: "Martin Luther", ml: "മാർട്ടിൻ ലൂഥർ" } },
        { k: "C", text: { en: "Jan Hus", ml: "ജാൻ ഹസ്" } },
        { k: "D", text: { en: "Erasmus", ml: "എറാസ്മസ്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "John Wycliffe is known as the Morning Star of the Reformation for his early criticism of the Church.", ml: "സഭയ്ക്കെതിരായ ആദ്യകാല വിമർശനങ്ങൾ കാരണം ജോൺ വൈക്ലിഫ് മതനവീകരണത്തിന്റെ പ്രഭാത നക്ഷത്രം എന്നറിയപ്പെടുന്നു." }
    },
    {
      q_id: "q63",
      type: "mcq",
      stem: { en: "Which country did the Renaissance originate in?", ml: "നവോത്ഥാനം ആരംഭിച്ചത് ഏത് രാജ്യത്താണ്?" },
      options: [
        { k: "A", text: { en: "Italy", ml: "ഇറ്റലി" } },
        { k: "B", text: { en: "France", ml: "ഫ്രാൻസ്" } },
        { k: "C", text: { en: "England", ml: "ഇംഗ്ലണ്ട്" } },
        { k: "D", text: { en: "Germany", ml: "ജർമ്മനി" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The Renaissance originated in Italy.", ml: "നവോത്ഥാനം ആരംഭിച്ചത് ഇറ്റലിയിലാണ്." }
    },
    {
      q_id: "q64",
      type: "mcq",
      stem: { en: "Who designed the St. Peter's Basilica?", ml: "സെന്റ് പീറ്റേഴ്സ് ബസിലിക്ക രൂപകല്പന ചെയ്തത് ആര്?" },
      options: [
        { k: "A", text: { en: "Michelangelo (among others)", ml: "മൈക്കലാഞ്ചലോ (മറ്റുള്ളവരോടൊപ്പം)" } },
        { k: "B", text: { en: "Da Vinci", ml: "ഡാവിഞ്ചി" } },
        { k: "C", text: { en: "Giotto", ml: "ജിയോട്ടോ" } },
        { k: "D", text: { en: "Botticelli", ml: "ബോട്ടിസെല്ലി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Michelangelo was one of the main architects of St. Peter's Basilica.", ml: "സെന്റ് പീറ്റേഴ്സ് ബസിലിക്കയുടെ പ്രധാന ശില്പികളിൽ ഒരാളായിരുന്നു മൈക്കലാഞ്ചലോ." }
    },
    {
      q_id: "q65",
      type: "mcq",
      stem: { en: "What is 'Simony'?", ml: "'സൈമണി' എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Buying and selling of church positions", ml: "സഭാ സ്ഥാനങ്ങൾ വാങ്ങുകയും വിൽക്കുകയും ചെയ്യുക" } },
        { k: "B", text: { en: "A type of prayer", ml: "ഒരു തരം പ്രാർത്ഥന" } },
        { k: "C", text: { en: "A religious festival", ml: "ഒരു മതപരമായ ഉത്സവം" } },
        { k: "D", text: { en: "A painting style", ml: "ഒരു ചിത്രരചനാ രീതി" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Simony refers to the corrupt practice of buying and selling ecclesiastical privileges or church offices.", ml: "സഭാ സ്ഥാനങ്ങളും പദവികളും പണം കൊടുത്ത് വാങ്ങുകയും വിൽക്കുകയും ചെയ്യുന്ന അഴിമതി രീതിയാണ് സൈമണി." }
    },
    {
      q_id: "q66",
      type: "mcq",
      stem: { en: "Who translated the Bible into German?", ml: "ബൈബിൾ ജർമ്മൻ ഭാഷയിലേക്ക് വിവർത്തനം ചെയ്തത് ആര്?" },
      options: [
        { k: "A", text: { en: "Martin Luther", ml: "മാർട്ടിൻ ലൂഥർ" } },
        { k: "B", text: { en: "Erasmus", ml: "എറാസ്മസ്" } },
        { k: "C", text: { en: "Gutenberg", ml: "ഗുട്ടൻബർഗ്" } },
        { k: "D", text: { en: "Zwingli", ml: "സിംഗ്ലി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Martin Luther translated the Bible into German, making it accessible to the common people.", ml: "മാർട്ടിൻ ലൂഥർ ബൈബിൾ ജർമ്മൻ ഭാഷയിലേക്ക് വിവർത്തനം ചെയ്യുകയും സാധാരണക്കാർക്ക് ലഭ്യമാക്കുകയും ചെയ്തു." }
    },
    {
      q_id: "q67",
      type: "mcq",
      stem: { en: "Which English king had six wives?", ml: "ആറ് ഭാര്യമാരുണ്ടായിരുന്ന ഇംഗ്ലീഷ് രാജാവ് ആര്?" },
      options: [
        { k: "A", text: { en: "Henry VIII", ml: "ഹെൻറി എട്ടാമൻ" } },
        { k: "B", text: { en: "Henry VII", ml: "ഹെൻറി ഏഴാമൻ" } },
        { k: "C", text: { en: "Edward VI", ml: "എഡ്വേർഡ് ആറാമൻ" } },
        { k: "D", text: { en: "James I", ml: "ജെയിംസ് ഒന്നാമൻ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "King Henry VIII is famous for having six wives and separating the Church of England from Rome.", ml: "ആറ് ഭാര്യമാരുണ്ടായിരുന്നതിനും ഇംഗ്ലണ്ട് സഭയെ റോമിൽ നിന്ന് വേർപെടുത്തുന്നതിനും ഹെൻറി എട്ടാമൻ രാജാവ് പ്രശസ്തനാണ്." }
    },
    {
      q_id: "q68",
      type: "mcq",
      stem: { en: "Who wrote 'Romeo and Juliet'?", ml: "'റോമിയോ ആൻഡ് ജൂലിയറ്റ്' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "William Shakespeare", ml: "വില്യം ഷേക്സ്പിയർ" } },
        { k: "B", text: { en: "Dante", ml: "ഡാന്റേ" } },
        { k: "C", text: { en: "Petrarch", ml: "പെട്രാർക്ക്" } },
        { k: "D", text: { en: "Marlowe", ml: "മാർലോ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "William Shakespeare wrote the tragic play 'Romeo and Juliet'.", ml: "വില്യം ഷേക്സ്പിയർ ആണ് 'റോമിയോ ആൻഡ് ജൂലിയറ്റ്' എന്ന ദുരന്ത നാടകം രചിച്ചത്." }
    },
    {
      q_id: "q69",
      type: "mcq",
      stem: { en: "What is the study of coins called?", ml: "നാണയങ്ങളെക്കുറിച്ചുള്ള പഠനം എന്ത് പേരിൽ അറിയപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Numismatics", ml: "ന്യൂമിസ്മാറ്റിക്സ്" } },
        { k: "B", text: { en: "Epigraphy", ml: "എപ്പിഗ്രാഫി" } },
        { k: "C", text: { en: "Archaeology", ml: "ആർക്കിയോളജി" } },
        { k: "D", text: { en: "Paleography", ml: "പാലിയോഗ്രാഫി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Numismatics is the study or collection of currency, including coins.", ml: "നാണയങ്ങളെക്കുറിച്ചുള്ള പഠനമോ ശേഖരണമോ ആണ് ന്യൂമിസ്മാറ്റിക്സ്." }
    },
    {
      q_id: "q70",
      type: "mcq",
      stem: { en: "Who was the first to use the telescope for astronomical observations?", ml: "ജ്യോതിശാസ്ത്ര നിരീക്ഷണങ്ങൾക്കായി ആദ്യമായി ടെലിസ്കോപ്പ് ഉപയോഗിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Galileo Galilei", ml: "ഗലീലിയോ ഗലീലി" } },
        { k: "B", text: { en: "Copernicus", ml: "കോപ്പർനിക്കസ്" } },
        { k: "C", text: { en: "Newton", ml: "ന്യൂട്ടൺ" } },
        { k: "D", text: { en: "Kepler", ml: "കെപ്ലർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Galileo was the first to use a telescope to observe the sky systematically.", ml: "ആകാശം ചിട്ടയായി നിരീക്ഷിക്കാൻ ആദ്യമായി ടെലിസ്കോപ്പ് ഉപയോഗിച്ചത് ഗലീലിയോ ആണ്." }
    },
    {
      q_id: "q71",
      type: "mcq",
      stem: { en: "Which civilization's revival was central to the Renaissance?", ml: "ഏത് സംസ്കാരത്തിന്റെ പുനരുജ്ജീവനമാണ് നവോത്ഥാനത്തിന്റെ കേന്ദ്രബിന്ദു?" },
      options: [
        { k: "A", text: { en: "Greco-Roman", ml: "ഗ്രീക്കോ-റോമൻ" } },
        { k: "B", text: { en: "Egyptian", ml: "ഈജിപ്ഷ്യൻ" } },
        { k: "C", text: { en: "Mesopotamian", ml: "മെസൊപ്പൊട്ടേമിയൻ" } },
        { k: "D", text: { en: "Indus Valley", ml: "സിന്ധുനദീതടം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The Renaissance was primarily a revival of ancient Greek and Roman culture.", ml: "നവോത്ഥാനം പ്രധാനമായും പ്രാചീന ഗ്രീക്ക്, റോമൻ സംസ്കാരങ്ങളുടെ പുനരുജ്ജീവനമായിരുന്നു." }
    },
    {
      q_id: "q72",
      type: "mcq",
      stem: { en: "Who wrote 'The Social Contract'?", ml: "'സോഷ്യൽ കോൺട്രാക്ട്' (സാമൂഹിക ഉടമ്പടി) രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { k: "B", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { k: "C", text: { en: "Montesquieu", ml: "മോണ്ടെസ്ക്യൂ" } },
        { k: "D", text: { en: "Locke", ml: "ലോക്ക്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Jean-Jacques Rousseau wrote 'The Social Contract'.", ml: "ജീൻ-ജാക്വസ് റൂസ്സോയാണ് 'സോഷ്യൽ കോൺട്രാക്ട്' രചിച്ചത്." }
    },
    {
      q_id: "q73",
      type: "mcq",
      stem: { en: "What is the main feature of Renaissance architecture?", ml: "നവോത്ഥാന വാസ്തുവിദ്യയുടെ പ്രധാന സവിശേഷത എന്ത്?" },
      options: [
        { k: "A", text: { en: "Domes and columns", ml: "താഴികക്കുടങ്ങളും തൂണുകളും" } },
        { k: "B", text: { en: "Pointed arches", ml: "കൂർത്ത കമാനങ്ങൾ" } },
        { k: "C", text: { en: "Stained glass windows", ml: "നിറമുള്ള ഗ്ലാസ് ജനാലകൾ" } },
        { k: "D", text: { en: "Flying buttresses", ml: "ഫ്ളയിംഗ് ബട്രസുകൾ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Renaissance architecture featured domes, columns, and symmetry, inspired by Rome.", ml: "റോമൻ ശൈലിയിൽ നിന്ന് പ്രചോദനം ഉൾക്കൊണ്ട് താഴികക്കുടങ്ങൾ, തൂണുകൾ, സമമിതി എന്നിവ നവോത്ഥാന വാസ്തുവിദ്യയുടെ സവിശേഷതകളായിരുന്നു." }
    },
    {
      q_id: "q74",
      type: "mcq",
      stem: { en: "Who painted 'The Birth of Venus'?", ml: "'ദ ബർത്ത് ഓഫ് വീനസ്' എന്ന ചിത്രം വരച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Sandro Botticelli", ml: "സാൻഡ്രോ ബോട്ടിസെല്ലി" } },
        { k: "B", text: { en: "Da Vinci", ml: "ഡാവിഞ്ചി" } },
        { k: "C", text: { en: "Raphael", ml: "റാഫേൽ" } },
        { k: "D", text: { en: "Titian", ml: "ടിഷ്യൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Sandro Botticelli painted 'The Birth of Venus'.", ml: "സാൻഡ്രോ ബോട്ടിസെല്ലിയാണ് 'ദ ബർത്ത് ഓഫ് വീനസ്' വരച്ചത്." }
    },
    {
      q_id: "q75",
      type: "mcq",
      stem: { en: "Which city was the home of the Medici family?", ml: "മെഡിചി കുടുംബത്തിന്റെ ആസ്ഥാനം ഏത് നഗരമായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Florence", ml: "ഫ്ലോറൻസ്" } },
        { k: "B", text: { en: "Venice", ml: "വെനീസ്" } },
        { k: "C", text: { en: "Rome", ml: "റോം" } },
        { k: "D", text: { en: "Naples", ml: "നേപ്പിൾസ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The Medici family was based in Florence.", ml: "മെഡിചി കുടുംബത്തിന്റെ ആസ്ഥാനം ഫ്ലോറൻസ് ആയിരുന്നു." }
    },
    {
      q_id: "q76",
      type: "mcq",
      stem: { en: "Who is the author of 'The Wealth of Nations'?", ml: "'ദ വെൽത്ത് ഓഫ് നേഷൻസ്' എന്ന കൃതിയുടെ രചയിതാവ് ആര്?" },
      options: [
        { k: "A", text: { en: "Adam Smith", ml: "ആദം സ്മിത്ത്" } },
        { k: "B", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "C", text: { en: "Ricardo", ml: "റിക്കാർഡോ" } },
        { k: "D", text: { en: "Malthus", ml: "മാൽത്തൂസ്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Adam Smith wrote 'The Wealth of Nations', a foundational text in economics.", ml: "സാമ്പത്തിക ശാസ്ത്രത്തിലെ അടിസ്ഥാന ഗ്രന്ഥമായ 'ദ വെൽത്ത് ഓഫ് നേഷൻസ്' രചിച്ചത് ആദം സ്മിത്ത് ആണ്." }
    },
    {
      q_id: "q77",
      type: "mcq",
      stem: { en: "What was the primary language of the Catholic Church in the Middle Ages?", ml: "മധ്യകാലഘട്ടത്തിൽ കത്തോലിക്കാ സഭയുടെ പ്രധാന ഭാഷ ഏതായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Latin", ml: "ലാറ്റിൻ" } },
        { k: "B", text: { en: "Greek", ml: "ഗ്രീക്ക്" } },
        { k: "C", text: { en: "English", ml: "ഇംഗ്ലീഷ്" } },
        { k: "D", text: { en: "French", ml: "ഫ്രഞ്ച്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Latin was the official language of the Church and scholarship.", ml: "സഭയുടെയും പാണ്ഡിത്യത്തിന്റെയും ഔദ്യോഗിക ഭാഷ ലാറ്റിൻ ആയിരുന്നു." }
    },
    {
      q_id: "q78",
      type: "mcq",
      stem: { en: "Who invented the steam engine?", ml: "ആവി യന്ത്രം കണ്ടുപിടിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "James Watt", ml: "ജെയിംസ് വാട്ട്" } },
        { k: "B", text: { en: "Newton", ml: "ന്യൂട്ടൺ" } },
        { k: "C", text: { en: "Edison", ml: "എഡിസൺ" } },
        { k: "D", text: { en: "Tesla", ml: "ടെസ്‌ല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "James Watt improved the steam engine, making it practical for industrial use.", ml: "ജെയിംസ് വാട്ട് ആവി യന്ത്രം പരിഷ്കരിക്കുകയും വ്യാവസായിക ആവശ്യങ്ങൾക്ക് അനുയോജ്യമാക്കുകയും ചെയ്തു." }
    },
    {
      q_id: "q79",
      type: "mcq",
      stem: { en: "Which explorer discovered the sea route to India?", ml: "ഇന്ത്യയിലേക്കുള്ള കടൽമാർഗ്ഗം കണ്ടുപിടിച്ച സഞ്ചാരി ആര്?" },
      options: [
        { k: "A", text: { en: "Vasco da Gama", ml: "വാസ്കോ ഡ ഗാമ" } },
        { k: "B", text: { en: "Columbus", ml: "കൊളംബസ്" } },
        { k: "C", text: { en: "Magellan", ml: "മഗല്ലൻ" } },
        { k: "D", text: { en: "Dias", ml: "ഡയസ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Vasco da Gama discovered the sea route to India in 1498.", ml: "1498-ൽ വാസ്കോ ഡ ഗാമയാണ് ഇന്ത്യയിലേക്കുള്ള കടൽമാർഗ്ഗം കണ്ടുപിടിച്ചത്." }
    },
    {
      q_id: "q80",
      type: "mcq",
      stem: { en: "Who painted 'The Creation of Adam'?", ml: "'ആദത്തിന്റെ സൃഷ്ടി' എന്ന ചിത്രം വരച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "B", text: { en: "Da Vinci", ml: "ഡാവിഞ്ചി" } },
        { k: "C", text: { en: "Raphael", ml: "റാഫേൽ" } },
        { k: "D", text: { en: "Rembrandt", ml: "റെംബ്രാൻറ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Michelangelo painted 'The Creation of Adam' on the Sistine Chapel ceiling.", ml: "സിസ്റ്റീൻ ചാപ്പലിന്റെ മുകൾത്തട്ടിൽ 'ആദത്തിന്റെ സൃഷ്ടി' എന്ന ചിത്രം വരച്ചത് മൈക്കലാഞ്ചലോയാണ്." }
    },
    {
      q_id: "q81",
      type: "mcq",
      stem: { en: "What is 'Perspective' in art?", ml: "കലയിൽ 'പെർസ്പെക്റ്റീവ്' (കാഴ്ചപ്പാട്) എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Technique to show depth and distance", ml: "ആഴവും ദൂരവും കാണിക്കാനുള്ള വിദ്യ" } },
        { k: "B", text: { en: "Using bright colors", ml: "തിളക്കമുള്ള നിറങ്ങൾ ഉപയോഗിക്കുന്നത്" } },
        { k: "C", text: { en: "Painting religious figures", ml: "മതപരമായ രൂപങ്ങൾ വരയ്ക്കുന്നത്" } },
        { k: "D", text: { en: "Using oil paints", ml: "ഓയിൽ പെയിന്റുകൾ ഉപയോഗിക്കുന്നത്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Perspective is a technique used to represent three-dimensional objects on a two-dimensional surface.", ml: "ദ്വിമാന പ്രതലത്തിൽ ത്രിമാന വസ്തുക്കളെ ചിത്രീകരിക്കാൻ ഉപയോഗിക്കുന്ന വിദ്യയാണ് പെർസ്പെക്റ്റീവ്." }
    },
    {
      q_id: "q82",
      type: "mcq",
      stem: { en: "Who was the 'Virgin Queen'?", ml: "'കന്യകയായ രാജ്ഞി' എന്നറിയപ്പെടുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Elizabeth I", ml: "എലിസബത്ത് ഒന്നാമൻ" } },
        { k: "B", text: { en: "Mary I", ml: "മേരി ഒന്നാമൻ" } },
        { k: "C", text: { en: "Victoria", ml: "വിക്ടോറിയ" } },
        { k: "D", text: { en: "Anne", ml: "ആൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Queen Elizabeth I of England was known as the Virgin Queen.", ml: "ഇംഗ്ലണ്ടിലെ എലിസബത്ത് ഒന്നാമൻ രാജ്ഞിയാണ് കന്യകയായ രാജ്ഞി എന്നറിയപ്പെടുന്നത്." }
    },
    {
      q_id: "q83",
      type: "mcq",
      stem: { en: "Which treaty ended the Thirty Years' War?", ml: "മുപ്പതുവർഷ യുദ്ധം അവസാനിപ്പിച്ച ഉടമ്പടി ഏത്?" },
      options: [
        { k: "A", text: { en: "Peace of Westphalia", ml: "വെസ്റ്റ്ഫാലിയ ഉടമ്പടി" } },
        { k: "B", text: { en: "Treaty of Versailles", ml: "വെഴ്സായ് ഉടമ്പടി" } },
        { k: "C", text: { en: "Treaty of Paris", ml: "പാരീസ് ഉടമ്പടി" } },
        { k: "D", text: { en: "Treaty of Tordesillas", ml: "ടോർഡെസിലാസ് ഉടമ്പടി" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "The Peace of Westphalia (1648) ended the Thirty Years' War.", ml: "1648-ലെ വെസ്റ്റ്ഫാലിയ ഉടമ്പടിയാണ് മുപ്പതുവർഷ യുദ്ധം അവസാനിപ്പിച്ചത്." }
    },
    {
      q_id: "q84",
      type: "mcq",
      stem: { en: "Who wrote 'The Spirit of Laws'?", ml: "'ദ സ്പിരിറ്റ് ഓഫ് ലോസ്' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Montesquieu", ml: "മോണ്ടെസ്ക്യൂ" } },
        { k: "B", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { k: "C", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { k: "D", text: { en: "Diderot", ml: "ഡിഡെറോ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Montesquieu wrote 'The Spirit of Laws', advocating separation of powers.", ml: "അധികാര വിഭജനത്തിന് വേണ്ടി വാദിച്ച 'ദ സ്പിരിറ്റ് ഓഫ് ലോസ്' രചിച്ചത് മോണ്ടെസ്ക്യൂ ആണ്." }
    },
    {
      q_id: "q85",
      type: "mcq",
      stem: { en: "What was the Inquisition?", ml: "ഇൻക്വിസിഷൻ (മതവിചാരണ) എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Church court to suppress heresy", ml: "മതനിന്ദ അടിച്ചമർത്താനുള്ള സഭാ കോടതി" } },
        { k: "B", text: { en: "A royal court", ml: "ഒരു രാജകീയ കോടതി" } },
        { k: "C", text: { en: "A university", ml: "ഒരു സർവ്വകലാശാല" } },
        { k: "D", text: { en: "A library", ml: "ഒരു വായനശാല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The Inquisition was a group of institutions within the Catholic Church to combat heresy.", ml: "മതനിന്ദയ്ക്കെതിരെ പോരാടുന്നതിനായി കത്തോലിക്കാ സഭയ്ക്കുള്ളിലെ സ്ഥാപനങ്ങളുടെ കൂട്ടമായിരുന്നു ഇൻക്വിസിഷൻ." }
    },
    {
      q_id: "q86",
      type: "mcq",
      stem: { en: "Who discovered the law of falling bodies?", ml: "വീഴുന്ന വസ്തുക്കളുടെ നിയമം കണ്ടെത്തിയത് ആര്?" },
      options: [
        { k: "A", text: { en: "Galileo Galilei", ml: "ഗലീലിയോ ഗലീലി" } },
        { k: "B", text: { en: "Newton", ml: "ന്യൂട്ടൺ" } },
        { k: "C", text: { en: "Aristotle", ml: "അരിസ്റ്റോട്ടിൽ" } },
        { k: "D", text: { en: "Kepler", ml: "കെപ്ലർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Galileo discovered the law of falling bodies.", ml: "ഗലീലിയോ ആണ് വീഴുന്ന വസ്തുക്കളുടെ നിയമം കണ്ടെത്തിയത്." }
    },
    {
      q_id: "q87",
      type: "mcq",
      stem: { en: "Which English monarch established the Church of England?", ml: "ചർച്ച് ഓഫ് ഇംഗ്ലണ്ട് സ്ഥാപിച്ച ഇംഗ്ലീഷ് ഭരണാധികാരി ആര്?" },
      options: [
        { k: "A", text: { en: "Henry VIII", ml: "ഹെൻറി എട്ടാമൻ" } },
        { k: "B", text: { en: "Elizabeth I", ml: "എലിസബത്ത് ഒന്നാമൻ" } },
        { k: "C", text: { en: "Mary I", ml: "മേരി ഒന്നാമൻ" } },
        { k: "D", text: { en: "Charles I", ml: "ചാൾസ് ഒന്നാമൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Henry VIII established the Church of England.", ml: "ഹെൻറി എട്ടാമനാണ് ചർച്ച് ഓഫ് ഇംഗ്ലണ്ട് സ്ഥാപിച്ചത്." }
    },
    {
      q_id: "q88",
      type: "mcq",
      stem: { en: "Who wrote 'Candide'?", ml: "'കാൻഡിഡ്' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { k: "B", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { k: "C", text: { en: "Moliere", ml: "മോളിയേർ" } },
        { k: "D", text: { en: "Racine", ml: "റാസീൻ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Voltaire wrote the satirical novella 'Candide'.", ml: "വോൾട്ടയർ ആണ് 'കാൻഡിഡ്' എന്ന ആക്ഷേപഹാസ്യ നോവൽ രചിച്ചത്." }
    },
    {
      q_id: "q89",
      type: "mcq",
      stem: { en: "What is 'Indulgence'?", ml: "'ഇൻഡൾജൻസ്' (പാപപരിഹാര പത്രം) എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "A certificate to reduce punishment for sins", ml: "പാപങ്ങൾക്കുള്ള ശിക്ഷ കുറയ്ക്കുന്നതിനുള്ള സർട്ടിഫിക്കറ്റ്" } },
        { k: "B", text: { en: "A tax", ml: "ഒരു നികുതി" } },
        { k: "C", text: { en: "A type of food", ml: "ഒരു തരം ഭക്ഷണം" } },
        { k: "D", text: { en: "A rank in the army", ml: "സൈന്യത്തിലെ ഒരു പദവി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "An indulgence was a grant by the Pope to reduce the punishment for sins.", ml: "പാപങ്ങൾക്കുള്ള ശിക്ഷ കുറയ്ക്കുന്നതിനായി മാർപ്പാപ്പ നൽകിയിരുന്ന അനുമതിയായിരുന്നു പാപപരിഹാര പത്രം." }
    },
    {
      q_id: "q90",
      type: "mcq",
      stem: { en: "Who was the first European to sail around the southern tip of Africa?", ml: "ആഫ്രിക്കയുടെ തെക്കേ അറ്റത്തുകൂടി സഞ്ചരിച്ച ആദ്യത്തെ യൂറോപ്യൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Bartolomeu Dias", ml: "ബാർത്തലോമിയോ ഡയസ്" } },
        { k: "B", text: { en: "Vasco da Gama", ml: "വാസ്കോ ഡ ഗാമ" } },
        { k: "C", text: { en: "Columbus", ml: "കൊളംബസ്" } },
        { k: "D", text: { en: "Magellan", ml: "മഗല്ലൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Bartolomeu Dias was the first to sail around the Cape of Good Hope.", ml: "ബാർത്തലോമിയോ ഡയസ് ആണ് ഗുഡ് ഹോപ്പ് മുനമ്പ് ചുറ്റി സഞ്ചരിച്ച ആദ്യത്തെയാൾ." }
    },
    {
      q_id: "q91",
      type: "mcq",
      stem: { en: "Who painted 'The Last Judgment'?", ml: "'അന്ത്യവിധി' എന്ന ചിത്രം വരച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Michelangelo", ml: "മൈക്കലാഞ്ചലോ" } },
        { k: "B", text: { en: "Da Vinci", ml: "ഡാവിഞ്ചി" } },
        { k: "C", text: { en: "Raphael", ml: "റാഫേൽ" } },
        { k: "D", text: { en: "Giotto", ml: "ജിയോട്ടോ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Michelangelo painted 'The Last Judgment' on the altar wall of the Sistine Chapel.", ml: "സിസ്റ്റീൻ ചാപ്പലിന്റെ അൾത്താര ഭിത്തിയിൽ 'അന്ത്യവിധി' എന്ന ചിത്രം വരച്ചത് മൈക്കലാഞ്ചലോയാണ്." }
    },
    {
      q_id: "q92",
      type: "mcq",
      stem: { en: "Which scientist was burned at the stake for his beliefs?", ml: "തന്റെ വിശ്വാസങ്ങളുടെ പേരിൽ തീയിലിട്ട് കൊല്ലപ്പെട്ട ശാസ്ത്രജ്ഞൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Giordano Bruno", ml: "ജിയോർഡാനോ ബ്രൂണോ" } },
        { k: "B", text: { en: "Galileo", ml: "ഗലീലിയോ" } },
        { k: "C", text: { en: "Copernicus", ml: "കോപ്പർനിക്കസ്" } },
        { k: "D", text: { en: "Kepler", ml: "കെപ്ലർ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Giordano Bruno was burned at the stake for his cosmological theories.", ml: "തന്റെ പ്രപഞ്ച സിദ്ധാന്തങ്ങളുടെ പേരിൽ ജിയോർഡാനോ ബ്രൂണോയെയാണ് തീയിലിട്ട് കൊന്നത്." }
    },
    {
      q_id: "q93",
      type: "mcq",
      stem: { en: "Who wrote 'Leviathan'?", ml: "'ലെവിയാത്തൻ' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Thomas Hobbes", ml: "തോമസ് ഹോബ്സ്" } },
        { k: "B", text: { en: "Locke", ml: "ലോക്ക്" } },
        { k: "C", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { k: "D", text: { en: "Marx", ml: "മാർക്സ്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Thomas Hobbes wrote 'Leviathan', discussing the structure of society and legitimate government.", ml: "സമൂഹത്തിന്റെ ഘടനയെയും നിയമപരമായ ഭരണകൂടത്തെയും കുറിച്ച് ചർച്ച ചെയ്യുന്ന 'ലെവിയാത്തൻ' രചിച്ചത് തോമസ് ഹോബ്സ് ആണ്." }
    },
    {
      q_id: "q94",
      type: "mcq",
      stem: { en: "What is 'Anatomy'?", ml: "'അനാട്ടമി' (ശരീരശാസ്ത്രം) എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Study of body structure", ml: "ശരീര ഘടനയെക്കുറിച്ചുള്ള പഠനം" } },
        { k: "B", text: { en: "Study of stars", ml: "നക്ഷത്രങ്ങളെക്കുറിച്ചുള്ള പഠനം" } },
        { k: "C", text: { en: "Study of plants", ml: "സസ്യങ്ങളെക്കുറിച്ചുള്ള പഠനം" } },
        { k: "D", text: { en: "Study of rocks", ml: "പാറകളെക്കുറിച്ചുള്ള പഠനം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Anatomy is the branch of biology concerned with the study of the structure of organisms.", ml: "ജീവികളുടെ ശരീര ഘടനയെക്കുറിച്ചുള്ള പഠനവുമായി ബന്ധപ്പെട്ട ജീവശാസ്ത്ര ശാഖയാണ് അനാട്ടമി." }
    },
    {
      q_id: "q95",
      type: "mcq",
      stem: { en: "Who was the most famous playwright of the Elizabethan era?", ml: "എലിസബത്തൻ കാലഘട്ടത്തിലെ ഏറ്റവും പ്രശസ്തനായ നാടകകൃത്ത് ആര്?" },
      options: [
        { k: "A", text: { en: "William Shakespeare", ml: "വില്യം ഷേക്സ്പിയർ" } },
        { k: "B", text: { en: "Ben Jonson", ml: "ബെൻ ജോൺസൺ" } },
        { k: "C", text: { en: "Marlowe", ml: "മാർലോ" } },
        { k: "D", text: { en: "Spenser", ml: "സ്പെൻസർ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "William Shakespeare is the most famous playwright of that era.", ml: "ആ കാലഘട്ടത്തിലെ ഏറ്റവും പ്രശസ്തനായ നാടകകൃത്ത് വില്യം ഷേക്സ്പിയർ ആണ്." }
    },
    {
      q_id: "q96",
      type: "mcq",
      stem: { en: "Which city is known as the 'Eternal City'?", ml: "'നിത്യനഗരം' (Eternal City) എന്നറിയപ്പെടുന്നത് ഏത്?" },
      options: [
        { k: "A", text: { en: "Rome", ml: "റോം" } },
        { k: "B", text: { en: "Athens", ml: "ഏഥൻസ്" } },
        { k: "C", text: { en: "Jerusalem", ml: "ജെറുസലേം" } },
        { k: "D", text: { en: "Paris", ml: "പാരീസ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Rome is historically referred to as the Eternal City.", ml: "ചരിത്രപരമായി റോമിനെയാണ് നിത്യനഗരം എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q97",
      type: "mcq",
      stem: { en: "Who wrote 'The Decameron'?", ml: "'ദ ഡെക്കാമറൺ' രചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Giovanni Boccaccio", ml: "ജിയോവാനി ബൊക്കാച്ചിയോ" } },
        { k: "B", text: { en: "Petrarch", ml: "പെട്രാർക്ക്" } },
        { k: "C", text: { en: "Dante", ml: "ഡാന്റേ" } },
        { k: "D", text: { en: "Chaucer", ml: "ചോസർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Giovanni Boccaccio wrote 'The Decameron'.", ml: "ജിയോവാനി ബൊക്കാച്ചിയോ ആണ് 'ദ ഡെക്കാമറൺ' രചിച്ചത്." }
    },
    {
      q_id: "q98",
      type: "mcq",
      stem: { en: "What is 'Theocracy'?", ml: "'തിയോക്രസി' (മതഭരണം) എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Government by religious leaders", ml: "മതനേതാക്കന്മാരുടെ ഭരണം" } },
        { k: "B", text: { en: "Government by the people", ml: "ജനങ്ങളുടെ ഭരണം" } },
        { k: "C", text: { en: "Government by a king", ml: "രാജാവിന്റെ ഭരണം" } },
        { k: "D", text: { en: "Government by the military", ml: "സൈന്യത്തിന്റെ ഭരണം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Theocracy is a system of government in which priests rule in the name of God.", ml: "ദൈവത്തിന്റെ പേരിൽ പുരോഹിതന്മാർ ഭരിക്കുന്ന ഭരണരീതിയാണ് തിയോക്രസി." }
    },
    {
      q_id: "q99",
      type: "mcq",
      stem: { en: "Who was the first person to circumnavigate the globe?", ml: "ലോകം ചുറ്റിയ ആദ്യത്തെ വ്യക്തി ആര്?" },
      options: [
        { k: "A", text: { en: "Ferdinand Magellan", ml: "ഫെർഡിനാൻഡ് മഗല്ലൻ" } },
        { k: "B", text: { en: "Columbus", ml: "കൊളംബസ്" } },
        { k: "C", text: { en: "Drake", ml: "ഡ്രേക്ക്" } },
        { k: "D", text: { en: "Cook", ml: "കുക്ക്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Magellan's expedition was the first to circumnavigate the globe, though he died during the voyage.", ml: "മഗല്ലന്റെ പര്യവേഷണമാണ് ആദ്യമായി ലോകം ചുറ്റിയത്, യാത്രയ്ക്കിടയിൽ അദ്ദേഹം മരിച്ചെങ്കിലും." }
    },
    {
      q_id: "q100",
      type: "mcq",
      stem: { en: "What was the main result of the Renaissance?", ml: "നവോത്ഥാനത്തിന്റെ പ്രധാന ഫലം എന്തായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Transition to the modern world", ml: "ആധുനിക ലോകത്തിലേക്കുള്ള മാറ്റം" } },
        { k: "B", text: { en: "Return to the Dark Ages", ml: "ഇരുണ്ട യുഗത്തിലേക്കുള്ള മടക്കം" } },
        { k: "C", text: { en: "End of Christianity", ml: "ക്രിസ്തുമതത്തിന്റെ അവസാനം" } },
        { k: "D", text: { en: "Rise of Feudalism", ml: "നാടുവാഴിത്തത്തിന്റെ ഉദയം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The Renaissance marked the transition from the Middle Ages to the Modern World, fostering art, science, and humanism.", ml: "കല, ശാസ്ത്രം, മാനവികത എന്നിവയെ പരിപോഷിപ്പിച്ചുകൊണ്ട് മധ്യകാലഘട്ടത്തിൽ നിന്ന് ആധുനിക ലോകത്തിലേക്കുള്ള മാറ്റത്തെ നവോത്ഥാനം അടയാളപ്പെടുത്തി." }
    }
  ],
  sample_questions: [
    {
      q_id: "sq1",
      question: { en: 'What is meant by the term "Renaissance"?', ml: '"നവോത്ഥാനം" എന്ന പദം കൊണ്ട് അർത്ഥമാക്കുന്നത് എന്ത്?' },
      answer: { en: 'The word "Renaissance" means "rebirth". It denotes the revival of ancient Greco-Roman culture, rationalism, and humanism in Europe, marking the transition from medieval feudalism to the modern age.', ml: '"നവോത്ഥാനം" എന്ന വാക്കിനർത്ഥം "പുനർജന്മം" എന്നാണ്. മധ്യകാല നാടുവാഴിത്തത്തിൽ നിന്നും ആധുനിക യുഗത്തിലേക്കുള്ള മാറ്റത്തെ അടയാളപ്പെടുത്തുന്ന, യൂറോപ്പിലെ പ്രാചീന ഗ്രീക്കോ-റോമൻ സംസ്കാരം, യുക്തിചിന്ത, മാനവികത എന്നിവയുടെ പുനരുജ്ജീവനത്തെ ഇത് സൂചിപ്പിക്കുന്നു.' }
    },
    {
      q_id: "sq2",
      question: { en: 'Why did the Renaissance begin in Italy?', ml: 'എന്തുകൊണ്ടാണ് നവോത്ഥാനം ഇറ്റലിയിൽ ആരംഭിച്ചത്?' },
      answer: { en: 'Italian cities were wealthy and independent due to trade from the Crusades. The Black Death weakened feudalism, and scholars fleeing the fall of Constantinople in 1453 brought ancient manuscripts to Italy.', ml: 'കുരിശുയുദ്ധങ്ങളെ തുടർന്നുള്ള വ്യാപാരം കാരണം ഇറ്റാലിയൻ നഗരങ്ങൾ സമ്പന്നവും സ്വതന്ത്രവുമായിരുന്നു. കരിമരണം നാടുവാഴിത്തത്തെ ദുർബലപ്പെടുത്തുകയും, 1453-ൽ കോൺസ്റ്റാന്റിനോപ്പിളിന്റെ പതനത്തെ തുടർന്ന് പലായനം ചെയ്ത പണ്ഡിതന്മാർ പ്രാചീന ഗ്രന്ഥങ്ങൾ ഇറ്റലിയിലേക്ക് കൊണ്ടുവരികയും ചെയ്തു.' }
    },
    {
      q_id: "sq3",
      question: { en: 'What is Humanism?', ml: 'മാനവികത എന്നാൽ എന്ത്?' },
      answer: { en: 'Humanism is a philosophical perspective that shifted focus away from medieval Christian theology and the afterlife, placing human beings, their experiences, worldly life, and rational inquiry at the center of thought.', ml: 'മധ്യകാല ക്രൈസ്തവ ദൈവശാസ്ത്രത്തിൽ നിന്നും മരണാനന്തര ജീവിതത്തിൽ നിന്നും മാറി, മനുഷ്യർക്കും അവരുടെ അനുഭവങ്ങൾക്കും ഐഹിക ജീവിതത്തിനും യുക്തിചിന്തയ്ക്കും ചിന്തകളിൽ കേന്ദ്രസ്ഥാനം നൽകിയ ഒരു ദാർശനിക കാഴ്ചപ്പാടാണ് മാനവികത.' }
    },
    {
      q_id: "sq4",
      question: { en: 'Distinguish between Medieval painting and Renaissance painting.', ml: 'മധ്യകാല ചിത്രകലയും നവോത്ഥാന ചിത്രകലയും തമ്മിലുള്ള വ്യത്യാസം വ്യക്തമാക്കുക.' },
      answer: { en: 'Medieval painting focused on spiritual themes and divine figures. Renaissance painting focused on realistic human forms based on human anatomy, utilizing natural colors, spatial depth, and human emotions.', ml: 'മധ്യകാല ചിത്രകല ആത്മീയ വിഷയങ്ങളിലും ദൈവിക രൂപങ്ങളിലും ശ്രദ്ധ കേന്ദ്രീകരിച്ചു. നവോത്ഥാന ചിത്രകല കൃത്യമായ ശരീരശാസ്ത്രത്തെ അടിസ്ഥാനമാക്കി യഥാർത്ഥ മനുഷ്യരൂപങ്ങൾ, സ്വാഭാവിക നിറങ്ങൾ, ത്രിമാനത, മനുഷ്യ വികാരങ്ങൾ എന്നിവയ്ക്ക് പ്രാധാന്യം നൽകി.' }
    },
    {
      q_id: "sq5",
      question: { en: 'Name the architect who designed the dome of the Cathedral in Florence and the style he used.', ml: 'ഫ്ലോറൻസിലെ പള്ളിയുടെ താഴികക്കുടം രൂപകല്പന ചെയ്ത വാസ്തുശില്പിയുടെ പേരും അദ്ദേഹം ഉപയോഗിച്ച ശൈലിയും ഏത്?' },
      answer: { en: 'Filippo Brunelleschi designed it. He moved away from the medieval Gothic style and used the ancient Greco-Roman classical style.', ml: 'ഫിലിപ്പോ ബ്രൂണെല്ലെസ്കി ആണ് ഇത് രൂപകല്പന ചെയ്തത്. അദ്ദേഹം മധ്യകാല ഗോഥിക് ശൈലിയിൽ നിന്ന് മാറി പ്രാചീന ഗ്രീക്കോ-റോമൻ ക്ലാസിക്കൽ ശൈലി ഉപയോഗിച്ചു.' }
    },
    {
      q_id: "sq6",
      question: { en: 'What were the main ideas presented by Niccolò Machiavelli in his book "The Prince"?', ml: 'നിക്കോളോ മാക്യവെല്ലി തന്റെ "ദ പ്രിൻസ്" എന്ന പുസ്തകത്തിൽ അവതരിപ്പിച്ച പ്രധാന ആശയങ്ങൾ എന്തെല്ലാമായിരുന്നു?' },
      answer: { en: "He argued that a ruler's paramount responsibility is to maintain state authority and security. He believed rulers should be practical and impartial, differing entirely from medieval administrators.", ml: 'ഭരണകൂടത്തിന്റെ സുരക്ഷയും അധികാരവും നിലനിർത്തുക എന്നതാണ് ഒരു ഭരണാധികാരിയുടെ പ്രധാന ചുമതല എന്ന് അദ്ദേഹം വാദിച്ചു. ഭരണാധികാരികൾ പ്രായോഗികവാദികളും നിഷ്പക്ഷരുമായിരിക്കണമെന്നും, ഇത് മധ്യകാല ഭരണാധികാരികളിൽ നിന്നും തികച്ചും വ്യത്യസ്തമാണെന്നും അദ്ദേഹം വിശ്വസിച്ചു.' }
    },
    {
      q_id: "sq7",
      question: { en: 'How did the invention of the printing press impact society?', ml: 'അച്ചടിയന്ത്രത്തിന്റെ കണ്ടുപിടുത്തം സമൂഹത്തിൽ എന്ത് സ്വാധീനമാണ് ചെലുത്തിയത്?' },
      answer: { en: 'Invented by Johannes Gutenberg, it allowed books to be printed cheaply and efficiently, leading to the rapid spread of humanistic ideas and a massive increase in literacy rates.', ml: 'ജോഹന്നാസ് ഗുട്ടൻബർഗ് കണ്ടുപിടിച്ച ഈ യന്ത്രം കുറഞ്ഞ ചിലവിലും വേഗത്തിലും പുസ്തകങ്ങൾ അച്ചടിക്കാൻ സഹായിച്ചു, ഇത് മാനവിക ആശയങ്ങളുടെ വേഗത്തിലുള്ള വ്യാപനത്തിനും സാക്ഷരതാ നിരക്കിലെ വലിയ വർദ്ധനവിനും കാരണമായി.' }
    },
    {
      q_id: "sq8",
      question: { en: 'How did the Renaissance change historiography?', ml: 'നവോത്ഥാനം ചരിത്രരചനയെ മാറ്റിയത് എങ്ങനെ?' },
      answer: { en: 'Historiography shifted from viewing events as divinely ordained to a human-centered and scientific approach. Historians began using evidence like coins and inscriptions, and classified history into Ancient, Medieval, and Modern periods.', ml: 'സംഭവങ്ങളെ ദൈവികമായി കാണുന്ന രീതിയിൽ നിന്ന് മാറി ചരിത്രരചന മനുഷ്യനെ കേന്ദ്രീകരിച്ചുള്ളതും ശാസ്ത്രീയവുമായ സമീപനത്തിലേക്ക് മാറി. ചരിത്രകാരന്മാർ നാണയങ്ങളും ലിഖിതങ്ങളും പോലുള്ള തെളിവുകൾ ഉപയോഗിക്കാൻ തുടങ്ങുകയും ചരിത്രത്തെ പ്രാചീന, മധ്യകാല, ആധുനിക കാലഘട്ടങ്ങളായി തിരിക്കുകയും ചെയ്തു.' }
    },
    {
      q_id: "sq9",
      question: { en: 'Explain the Heliocentric theory and name the scientists associated with proving it.', ml: 'സൗരയൂഥ കേന്ദ്ര സിദ്ധാന്തം വിശദീകരിക്കുക, ഇത് തെളിയിക്കുന്നതുമായി ബന്ധപ്പെട്ട ശാസ്ത്രജ്ഞരുടെ പേരുകൾ എഴുതുക.' },
      answer: { en: 'The Heliocentric theory states that the Sun, not the Earth, is the center of the universe. It was proposed by Nicolaus Copernicus and later proved by Galileo Galilei using his telescope.', ml: 'പ്രപഞ്ചത്തിന്റെ കേന്ദ്രം ഭൂമിയല്ല, മറിച്ച് സൂര്യനാണെന്ന് സൗരയൂഥ കേന്ദ്ര സിദ്ധാന്തം പ്രസ്താവിക്കുന്നു. നിക്കോളാസ് കോപ്പർനിക്കസ് ഈ സിദ്ധാന്തം അവതരിപ്പിക്കുകയും പിന്നീട് ഗലീലിയോ ഗലീലി തന്റെ ടെലിസ്കോപ്പ് ഉപയോഗിച്ച് ഇത് തെളിയിക്കുകയും ചെയ്തു.' }
    },
    {
      q_id: "sq10",
      question: { en: 'What was the immediate cause of the Protestant Reformation, and who led it?', ml: 'പ്രൊട്ടസ്റ്റന്റ് മതനവീകരണത്തിന്റെ ഉടനടിയുള്ള കാരണം എന്തായിരുന്നു, ഇതിന് നേതൃത്വം നൽകിയത് ആര്?' },
      answer: { en: 'The immediate cause was the Catholic Church\'s "Sale of Indulgences" to supposedly redeem sins. Martin Luther led the Reformation by pasting his "Ninety-Five Theses" on a church door in protest in 1517.', ml: 'പാപങ്ങൾ മോചിക്കാമെന്ന് അവകാശപ്പെട്ടുകൊണ്ട് കത്തോലിക്കാ സഭ നടത്തിയ "പാപപരിഹാര പത്രങ്ങളുടെ വിൽപന" ആയിരുന്നു ഉടനടിയുള്ള കാരണം. ഇതിൽ പ്രതിഷേധിച്ച് 1517-ൽ പള്ളിയുടെ വാതിലിൽ തന്റെ "95 തിസീസുകൾ" പതിപ്പിച്ചുകൊണ്ട് മാർട്ടിൻ ലൂഥർ മതനവീകരണത്തിന് നേതൃത്വം നൽകി.' }
    }
  ]
};
