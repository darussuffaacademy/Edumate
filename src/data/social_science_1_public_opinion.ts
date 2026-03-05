import { Lesson } from './curriculum';

export const socialScience1PublicOpinion: Lesson = {
  id: "so-pol-10-public-opinion",
  title: { en: "Chapter 5: Public Opinion in Democracy", ml: "അധ്യായം 5: ജനാധിപത്യവും പൊതുജനാഭിപ്രായവും" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Meaning of Public Opinion", ml: "പൊതുജനാഭിപ്രായത്തിന്റെ അർത്ഥം" } },
    { id: "lo2", text: { en: "Civil Society", ml: "പൗരസമൂഹം" } },
    { id: "lo3", text: { en: "Characteristics of Public Opinion", ml: "പൊതുജനാഭിപ്രായത്തിന്റെ സവിശേഷതകൾ" } },
    { id: "lo4", text: { en: "Agencies that Shape Public Opinion", ml: "പൊതുജനാഭിപ്രായം രൂപീകരിക്കുന്ന ഏജൻസികൾ (മാധ്യമങ്ങൾ)" } },
    { id: "lo5", text: { en: "Media Literacy and Digital Literacy", ml: "മാധ്യമ സാക്ഷരതയും ഡിജിറ്റൽ സാക്ഷരതയും" } },
    { id: "lo6", text: { en: "Factors Hindering the Formation of Public Opinion", ml: "പൊതുജനാഭിപ്രായ രൂപീകരണത്തെ തടസ്സപ്പെടുത്തുന്ന ഘടകങ്ങൾ" } },
    { id: "lo7", text: { en: "Role of Public Opinion in Democracy", ml: "ജനാധിപത്യത്തിൽ പൊതുജനാഭിപ്രായത്തിന്റെ പങ്ക്" } }
  ],
  content: {
    intro: { en: "This chapter explores the concept of public opinion, its formation, characteristics, and its crucial role in a democratic system.", ml: "ഈ അധ്യായം പൊതുജനാഭിപ്രായം എന്ന ആശയം, അതിന്റെ രൂപീകരണം, സവിശേഷതകൾ, ജനാധിപത്യ വ്യവസ്ഥയിൽ അതിനുള്ള നിർണായക പങ്ക് എന്നിവ പരിശോധിക്കുന്നു." },
    core: { en: "It discusses agencies like media and political parties that shape opinion, the importance of media literacy, and factors that hinder healthy public opinion.", ml: "അഭിപ്രായം രൂപീകരിക്കുന്ന മാധ്യമങ്ങൾ, രാഷ്ട്രീയ പാർട്ടികൾ തുടങ്ങിയ ഏജൻസികൾ, മാധ്യമ സാക്ഷരതയുടെ പ്രാധാന്യം, ആരോഗ്യകരമായ പൊതുജനാഭിപ്രായത്തെ തടസ്സപ്പെടുത്തുന്ന ഘടകങ്ങൾ എന്നിവ ഇത് ചർച്ച ചെയ്യുന്നു." },
    blocks: [
      { type: 'h2', en: 'What is Public Opinion?', ml: 'എന്താണ് പൊതുജനാഭിപ്രായം?' },
      { type: 'p', en: 'Public opinion is the general opinion of the people about the issues affecting them.', ml: 'പൊതുവായ വിഷയങ്ങളിൽ ജനങ്ങൾക്കുള്ള അഭിപ്രായമാണ് പൊതുജനാഭിപ്രായം.' },
      { type: 'p', en: 'It can be the position or opinion generally held by a section of society on a particular issue.', ml: 'ഒരു പ്രത്യേക വിഷയത്തിൽ സമൂഹത്തിലെ ഒരു വിഭാഗം പൊതുവായി സ്വീകരിക്കുന്ന നിലപാടോ അഭിപ്രായമോ ആകാം ഇത്.' },
      { type: 'p', en: 'In a democratic system, governments accept public opinions as part of their formulation of policies.', ml: 'ഒരു ജനാധിപത്യ വ്യവസ്ഥയിൽ, നയരൂപീകരണത്തിന്റെ ഭാഗമായി സർക്കാരുകൾ പൊതുജനാഭിപ്രായം സ്വീകരിക്കുന്നു.' },
      { type: 'p', en: 'Local bodies like the Grama Sabha or Ward Sabha discuss issues affecting people and take decisions based on public opinion.', ml: 'ഗ്രാമസഭ അല്ലെങ്കിൽ വാർഡ് സഭ പോലെയുള്ള തദ്ദേശ സ്ഥാപനങ്ങൾ ജനങ്ങളെ ബാധിക്കുന്ന പ്രശ്നങ്ങൾ ചർച്ച ചെയ്യുകയും പൊതുജനാഭിപ്രായത്തിന്റെ അടിസ്ഥാനത്തിൽ തീരുമാനങ്ങൾ എടുക്കുകയും ചെയ്യുന്നു.' },

      { type: 'h2', en: 'Civil Society', ml: 'പൗരസമൂഹം' },
      { type: 'p', en: 'Civil society is an important idea in democracy. It includes organisations, groups, and people who work for the welfare of the society.', ml: 'ജനാധിപത്യത്തിലെ സുപ്രധാനമായ ഒരു ആശയമാണ് പൗരസമൂഹം. സമൂഹത്തിന്റെ ക്ഷേമത്തിനായി പ്രവർത്തിക്കുന്ന സംഘടനകളും ഗ്രൂപ്പുകളും വ്യക്തികളും ഇതിൽ ഉൾപ്പെടുന്നു.' },
      { type: 'p', en: 'They do this voluntarily, without government control or profit motive.', ml: 'സർക്കാർ നിയന്ത്രണമില്ലാതെയും ലാഭേച്ഛയില്ലാതെയും അവർ ഇത് സ്വമേധയാ ചെയ്യുന്നു.' },
      { type: 'p', en: 'They represent different views and ideas to positively influence public opinion.', ml: 'പൊതുജനാഭിപ്രായത്തെ ഗുണപരമായി സ്വാധീനിക്കുന്നതിന് അവർ വ്യത്യസ്ത കാഴ്ചപ്പാടുകളെയും ആശയങ്ങളെയും പ്രതിനിധീകരിക്കുന്നു.' },

      { type: 'h2', en: 'Characteristics of Public Opinion', ml: 'പൊതുജനാഭിപ്രായത്തിന്റെ സവിശേഷതകൾ' },
      { type: 'p', en: 'Public opinion has an enormous influence on social life, governance, and politics. It is an effective social control over the government and it encourages debate that empowers democracy.', ml: 'സാമൂഹിക ജീവിതത്തിലും ഭരണത്തിലും രാഷ്ട്രീയത്തിലും പൊതുജനാഭിപ്രായത്തിന് വലിയ സ്വാധീനമുണ്ട്. ഇത് സർക്കാരിന്മേലുള്ള ഫലപ്രദമായ സാമൂഹിക നിയന്ത്രണമാണ്, കൂടാതെ ജനാധിപത്യത്തെ ശാക്തീകരിക്കുന്ന സംവാദങ്ങളെ പ്രോത്സാഹിപ്പിക്കുകയും ചെയ്യുന്നു.' },
      { type: 'table', tableData: {
          headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Explanation', ml: 'വിശദീകരണം'}],
          rows: [
            [{en: 'Reflection of diverse opinions', ml: 'വൈവിധ്യമാർന്ന അഭിപ്രായങ്ങളുടെ പ്രതിഫലനം'}, {en: 'It reflects the varied views and thoughts of different sections of society.', ml: 'സമൂഹത്തിലെ വിവിധ വിഭാഗങ്ങളുടെ വ്യത്യസ്ത കാഴ്ചപ്പാടുകളും ചിന്തകളും ഇത് പ്രതിഫലിപ്പിക്കുന്നു.'}],
            [{en: 'Not just the majority\'s view', ml: 'ഭൂരിപക്ഷത്തിന്റെ അഭിപ്രായം മാത്രമല്ല'}, {en: 'It is not necessarily the views of the majority, but the creation of a general consensus.', ml: 'ഇത് ഭൂരിപക്ഷത്തിന്റെ മാത്രം അഭിപ്രായമല്ല, മറിച്ച് ഒരു പൊതുസമ്മതിയുടെ സൃഷ്ടിയാണ്.'}],
            [{en: 'Subject to change', ml: 'മാറ്റങ്ങൾക്ക് വിധേയമാണ്'}, {en: 'Public opinion may change with circumstances, time, and new knowledge.', ml: 'സാഹചര്യങ്ങൾക്കും സമയത്തിനും പുതിയ അറിവുകൾക്കും അനുസരിച്ച് പൊതുജനാഭിപ്രായം മാറിയേക്കാം.'}],
            [{en: 'Covers various fields', ml: 'വിവിധ മേഖലകളെ ഉൾക്കൊള്ളുന്നു'}, {en: 'It is formed not only on political matters but also on socio-economic and cultural matters.', ml: 'ഇത് രാഷ്ട്രീയ കാര്യങ്ങളിൽ മാത്രമല്ല, സാമൂഹിക-സാമ്പത്തിക, സാംസ്കാരിക കാര്യങ്ങളിലും രൂപപ്പെടുന്നു.'}],
            [{en: 'No fixed place', ml: 'നിശ്ചിത സ്ഥലമില്ല'}, {en: 'There is no fixed place to express it; anyone can express their opinion from anywhere.', ml: 'ഇത് പ്രകടിപ്പിക്കാൻ നിശ്ചിതമായ സ്ഥലമില്ല; ആർക്കും എവിടെ നിന്നും തങ്ങളുടെ അഭിപ്രായം പ്രകടിപ്പിക്കാം.'}],
            [{en: 'Democratic communication', ml: 'ജനാധിപത്യപരമായ ആശയവിനിമയം'}, {en: 'It ensures effective and democratic communication between the public and the government.', ml: 'പൊതുജനങ്ങളും സർക്കാരും തമ്മിലുള്ള ഫലപ്രദവും ജനാധിപത്യപരവുമായ ആശയവിനിമയം ഇത് ഉറപ്പാക്കുന്നു.'}]
          ]
      }},

      { type: 'h2', en: 'Agencies that Shape Public Opinion', ml: 'പൊതുജനാഭിപ്രായം രൂപീകരിക്കുന്ന ഏജൻസികൾ' },
      { type: 'p', en: 'Public opinion is formed through formal and informal processes. There are various agencies that help in shaping public opinion.', ml: 'ഔപചാരികവും അനൗപചാരികവുമായ പ്രക്രിയകളിലൂടെയാണ് പൊതുജനാഭിപ്രായം രൂപപ്പെടുന്നത്. പൊതുജനാഭിപ്രായം രൂപീകരിക്കുന്നതിന് സഹായിക്കുന്ന വിവിധ ഏജൻസികളുണ്ട്.' },
      
      { type: 'h3', en: '1. Family', ml: '1. കുടുംബം' },
      { type: 'p', en: 'A child\'s socialisation process starts from the family. The traditional beliefs and discussions within the family have the first place in shaping opinion.', ml: 'ഒരു കുട്ടിയുടെ സാമൂഹികവൽക്കരണ പ്രക്രിയ ആരംഭിക്കുന്നത് കുടുംബത്തിൽ നിന്നാണ്. കുടുംബത്തിനുള്ളിലെ പരമ്പരാഗത വിശ്വാസങ്ങൾക്കും ചർച്ചകൾക്കും അഭിപ്രായ രൂപീകരണത്തിൽ ഒന്നാം സ്ഥാനമുണ്ട്.' },

      { type: 'h3', en: '2. Educational Institutions', ml: '2. വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ' },
      { type: 'p', en: 'They play a major role in developing a child\'s knowledge, scientific thinking, and critical thinking. Activities like school parliaments and clubs provide avenues to express opinions.', ml: 'കുട്ടിയുടെ അറിവ്, ശാസ്ത്രീയ ചിന്ത, വിമർശനാത്മക ചിന്ത എന്നിവ വികസിപ്പിക്കുന്നതിൽ ഇവ വലിയ പങ്ക് വഹിക്കുന്നു. സ്കൂൾ പാർലമെന്റുകൾ, ക്ലബ്ബുകൾ തുടങ്ങിയ പ്രവർത്തനങ്ങൾ അഭിപ്രായങ്ങൾ പ്രകടിപ്പിക്കാനുള്ള വേദികൾ നൽകുന്നു.' },

      { type: 'h3', en: '3. Peer Groups', ml: '3. സമപ്രായക്കാരുടെ സംഘം (കൂട്ടുകാർ)' },
      { type: 'p', en: 'Peer groups are groups of similar age and with similar interests and goals. Debates and discussions among friends help in arriving at correct opinions on social issues.', ml: 'ഒരേ പ്രായവും സമാന താല്പര്യങ്ങളും ലക്ഷ്യങ്ങളുമുള്ള ഗ്രൂപ്പുകളാണ് പിയർ ഗ്രൂപ്പുകൾ അഥവാ സമപ്രായക്കാരുടെ സംഘം. സുഹൃത്തുക്കൾക്കിടയിലുള്ള സംവാദങ്ങളും ചർച്ചകളും സാമൂഹിക വിഷയങ്ങളിൽ ശരിയായ അഭിപ്രായങ്ങളിൽ എത്തിച്ചേരാൻ സഹായിക്കുന്നു.' },

      { type: 'h3', en: '4. Media', ml: '4. മാധ്യമങ്ങൾ' },
      { type: 'p', en: 'Media plays a crucial role by bringing an issue to public attention. It includes traditional media (newspapers, radio, TV) and new media (digital and social media).', ml: 'ഒരു വിഷയം പൊതുജനശ്രദ്ധയിൽ കൊണ്ടുവരുന്നതിലൂടെ മാധ്യമങ്ങൾ നിർണായക പങ്ക് വഹിക്കുന്നു. പരമ്പരാഗത മാധ്യമങ്ങളും (പത്രങ്ങൾ, റേഡിയോ, ടിവി) നവമാധ്യമങ്ങളും (ഡിജിറ്റൽ, സോഷ്യൽ മീഡിയ) ഇതിൽ ഉൾപ്പെടുന്നു.' },

      { type: 'h3', en: 'Media Literacy and Digital Literacy', ml: 'മാധ്യമ സാക്ഷരതയും ഡിജിറ്റൽ സാക്ഷരതയും' },
      { type: 'p', en: 'It is important to recognize fake news in the modern digital age.', ml: 'ആധുനിക ഡിജിറ്റൽ യുഗത്തിൽ വ്യാജ വാർത്തകൾ തിരിച്ചറിയേണ്ടത് പ്രധാനമാണ്.' },
      { type: 'p', en: 'Digital Literacy: The ability to find information from the digital world and evaluate them efficiently using digital tools.', ml: 'ഡിജിറ്റൽ സാക്ഷരത: ഡിജിറ്റൽ ഉപകരണങ്ങൾ ഉപയോഗിച്ച് ഡിജിറ്റൽ ലോകത്ത് നിന്ന് വിവരങ്ങൾ കണ്ടെത്താനും അവ ഫലപ്രദമായി വിലയിരുത്താനുമുള്ള കഴിവ്.' },
      { type: 'p', en: 'Media Literacy: The ability to access, critically interpret, and evaluate the news and messages received through media.', ml: 'മാധ്യമ സാക്ഷരത: മാധ്യമങ്ങളിലൂടെ ലഭിക്കുന്ന വാർത്തകളും സന്ദേശങ്ങളും വിമർശനാത്മകമായി വ്യാഖ്യാനിക്കാനും വിലയിരുത്താനുമുള്ള കഴിവ്.' },

      { type: 'h3', en: '5. Political Parties', ml: '5. രാഷ്ട്രീയ പാർട്ടികൾ' },
      { type: 'p', en: 'They mobilise public opinion by publishing manifestos, pamphlets, and organising rallies and seminars. Ruling parties propagate government policies, while opposition parties highlight failures.', ml: 'പ്രകടന പത്രികകളും ലഘുലേഖകളും പ്രസിദ്ധീകരിച്ചും റാലികളും സെമിനാറുകളും സംഘടിപ്പിച്ചും അവർ പൊതുജനാഭിപ്രായം സമാഹരിക്കുന്നു. ഭരണകക്ഷികൾ സർക്കാർ നയങ്ങൾ പ്രചരിപ്പിക്കുന്നു, അതേസമയം പ്രതിപക്ഷ പാർട്ടികൾ ഭരണപരാജയങ്ങൾ എടുത്തുകാണിക്കുന്നു.' },

      { type: 'h3', en: '6. Social Institutions and Organisations', ml: '6. സാമൂഹിക സ്ഥാപനങ്ങളും സംഘടനകളും' },
      { type: 'p', en: 'Trade unions, student movements, environmental groups, and human rights movements play their role in shaping public opinion.', ml: 'തൊഴിലാളി യൂണിയനുകൾ, വിദ്യാർത്ഥി പ്രസ്ഥാനങ്ങൾ, പരിസ്ഥിതി ഗ്രൂപ്പുകൾ, മനുഷ്യാവകാശ പ്രസ്ഥാനങ്ങൾ എന്നിവ പൊതുജനാഭിപ്രായം രൂപീകരിക്കുന്നതിൽ തങ്ങളുടേതായ പങ്ക് വഹിക്കുന്നു.' },

      { type: 'h3', en: '7. Opinion Polls', ml: '7. അഭിപ്രായ വോട്ടെടുപ്പ് (ഒപ്പീനിയൻ പോൾ)' },
      { type: 'p', en: 'A sample of the population is approached to gather information about their attitudes on various issues. Professional agencies conduct these polls to gauge public opinion.', ml: 'വിവിധ വിഷയങ്ങളിലുള്ള മനോഭാവത്തെക്കുറിച്ചുള്ള വിവരങ്ങൾ ശേഖരിക്കുന്നതിനായി ജനസംഖ്യയിലെ ഒരു മാതൃകാ സമൂഹത്തെ സമീപിക്കുന്നു. പൊതുജനാഭിപ്രായം അളക്കുന്നതിനായി പ്രൊഫഷണൽ ഏജൻസികളാണ് ഇത്തരം വോട്ടെടുപ്പുകൾ നടത്തുന്നത്.' },

      { type: 'h3', en: '8. Art and Literature', ml: '8. കലയും സാഹിത്യവും' },
      { type: 'p', en: 'Literary works and art forms ignite social revolution and shape opinions against social evils. Example: Kumaran Asan\'s poem \'Chandalabhikshuki\' formed public opinion against untouchability.', ml: 'സാഹിത്യ സൃഷ്ടികളും കലാരൂപങ്ങളും സാമൂഹിക വിപ്ലവത്തിന് തിരികൊളുത്തുകയും സാമൂഹിക തിന്മകൾക്കെതിരെ അഭിപ്രായം രൂപീകരിക്കുകയും ചെയ്യുന്നു. ഉദാഹരണം: കുമാരനാശാന്റെ \'ചണ്ഡാലഭിക്ഷുകി\' എന്ന കവിത തൊട്ടുകൂടായ്മയ്ക്കെതിരെ പൊതുജനാഭിപ്രായം രൂപീകരിച്ചു.' },

      { type: 'h2', en: 'Factors that Hinder the Formation of Public Opinion', ml: 'പൊതുജനാഭിപ്രായ രൂപീകരണത്തെ തടസ്സപ്പെടുത്തുന്ന ഘടകങ്ങൾ' },
      { type: 'p', en: 'Although public opinion strengthens democracy, certain factors hinder its correct formation.', ml: 'പൊതുജനാഭിപ്രായം ജനാധിപത്യത്തെ ശക്തിപ്പെടുത്തുന്നുണ്ടെങ്കിലും, ചില ഘടകങ്ങൾ അതിന്റെ ശരിയായ രൂപീകരണത്തെ തടസ്സപ്പെടുത്തുന്നു.' },
      { type: 'p', en: 'Flowchart: Hindrances to Public Opinion - 1. Illiteracy (Limited knowledge) -> 2. Digital Divide (Gap in internet access) -> 3. Poverty (Isolation from public affairs) -> 4. Unhealthy political activity -> 5. Unhealthy practices during elections -> 6. Corruption and Regionalism', ml: 'ഫ്ലോചാർട്ട്: പൊതുജനാഭിപ്രായത്തിന് തടസ്സമാകുന്ന ഘടകങ്ങൾ - 1. നിരക്ഷരത (പരിമിതമായ അറിവ്) -> 2. ഡിജിറ്റൽ വിടവ് (ഇന്റർനെറ്റ് ലഭ്യതയിലെ അന്തരം) -> 3. ദാരിദ്ര്യം (പൊതു കാര്യങ്ങളിൽ നിന്നുള്ള അകൽച്ച) -> 4. അനാരോഗ്യകരമായ രാഷ്ട്രീയ പ്രവർത്തനം -> 5. തെരഞ്ഞെടുപ്പ് കാലത്തെ തെറ്റായ പ്രവണതകൾ -> 6. അഴിമതിയും പ്രാദേശികവാദവും' },

      { type: 'h2', en: 'Role of Public Opinion in Democracy', ml: 'ജനാധിപത്യത്തിൽ പൊതുജനാഭിപ്രായത്തിന്റെ പങ്ക്' },
      { type: 'p', en: 'Democracy is a political system that ensures equal participation of all people. Democratic governments formulate policies considering the opinions and interests of the people.', ml: 'എല്ലാ ജനങ്ങളുടെയും തുല്യ പങ്കാളിത്തം ഉറപ്പാക്കുന്ന ഒരു രാഷ്ട്രീയ വ്യവസ്ഥയാണ് ജനാധിപത്യം. ജനാധിപത്യ സർക്കാരുകൾ ജനങ്ങളുടെ അഭിപ്രായങ്ങളും താല്പര്യങ്ങളും പരിഗണിച്ച് നയങ്ങൾ രൂപീകരിക്കുന്നു.' },
      { type: 'p', en: 'Public opinion questions the misuse of power, regulates the rule of law, and prevents dictatorial tendencies. It makes political parties responsible and protects the rights and freedom of citizens.', ml: 'പൊതുജനാഭിപ്രായം അധികാര ദുർവിനിയോഗത്തെ ചോദ്യം ചെയ്യുകയും നിയമവാഴ്ചയെ നിയന്ത്രിക്കുകയും ഏകാധിപത്യ പ്രവണതകളെ തടയുകയും ചെയ്യുന്നു. ഇത് രാഷ്ട്രീയ പാർട്ടികളെ ഉത്തരവാദിത്തമുള്ളവരാക്കുകയും പൗരന്മാരുടെ അവകാശങ്ങളും സ്വാതന്ത്ര്യവും സംരക്ഷിക്കുകയും ചെയ്യുന്നു.' },

      { type: 'h2', en: 'Summary Points', ml: 'സംഗ്രഹ പോയിന്റുകൾ' },
      { type: 'p', en: 'Public opinion is the general consensus of society on matters affecting them, which serves as the backbone of a democracy.', ml: 'ഒരു സമൂഹത്തെ ബാധിക്കുന്ന വിഷയങ്ങളിലുള്ള ജനങ്ങളുടെ പൊതുസമ്മതിയാണ് പൊതുജനാഭിപ്രായം, ഇത് ജനാധിപത്യത്തിന്റെ നട്ടെല്ലായി വർത്തിക്കുന്നു.' },
      { type: 'p', en: 'Civil society operates without profit motive or government control to foster public welfare and opinion.', ml: 'പൗരസമൂഹം ലാഭേച്ഛയോ സർക്കാർ നിയന്ത്രണമോ ഇല്ലാതെ പൊതുജനക്ഷേമത്തിനും അഭിപ്രായ രൂപീകരണത്തിനുമായി പ്രവർത്തിക്കുന്നു.' },
      { type: 'p', en: 'Family, media, schools, peer groups, and political parties are key agencies that actively shape public opinion.', ml: 'കുടുംബം, മാധ്യമങ്ങൾ, സ്കൂളുകൾ, സമപ്രായക്കാരുടെ സംഘങ്ങൾ, രാഷ്ട്രീയ പാർട്ടികൾ എന്നിവ പൊതുജനാഭിപ്രായത്തെ സജീവമായി രൂപീകരിക്കുന്ന പ്രധാന ഏജൻസികളാണ്.' },
      { type: 'p', en: 'In the modern age, both digital literacy and media literacy are essential to filter fake news and form rational views.', ml: 'ആധുനിക യുഗത്തിൽ, വ്യാജ വാർത്തകളെ തടയാനും യുക്തിസഹമായ കാഴ്ചപ്പാടുകൾ രൂപീകരിക്കാനും ഡിജിറ്റൽ സാക്ഷരതയും മാധ്യമ സാക്ഷരതയും അത്യാവശ്യമാണ്.' },
      { type: 'p', en: 'Illiteracy, digital divide, poverty, and corruption hinder the healthy formation of public opinion.', ml: 'നിരക്ഷരത, ഡിജിറ്റൽ വിടവ്, ദാരിദ്ര്യം, അഴിമതി എന്നിവ ആരോഗ്യകരമായ പൊതുജനാഭിപ്രായ രൂപീകരണത്തെ തടസ്സപ്പെടുത്തുന്നു.' }
    ]
  },
  glossary: [
    { term: { en: "Public Opinion", ml: "പൊതുജനാഭിപ്രായം" }, definition: { en: "General opinion of the people about issues affecting them.", ml: "ജനങ്ങളെ ബാധിക്കുന്ന വിഷയങ്ങളിൽ അവർക്കുള്ള പൊതുവായ അഭിപ്രായം." } },
    { term: { en: "Civil Society", ml: "പൗരസമൂഹം" }, definition: { en: "Voluntary organisations working for social welfare without government control.", ml: "സർക്കാർ നിയന്ത്രണമില്ലാതെ സാമൂഹിക ക്ഷേമത്തിനായി പ്രവർത്തിക്കുന്ന സന്നദ്ധ സംഘടനകൾ." } },
    { term: { en: "Digital Literacy", ml: "ഡിജിറ്റൽ സാക്ഷരത" }, definition: { en: "Ability to use digital tools to find and evaluate information.", ml: "വിവരങ്ങൾ കണ്ടെത്താനും വിലയിരുത്താനും ഡിജിറ്റൽ ഉപകരണങ്ങൾ ഉപയോഗിക്കാനുള്ള കഴിവ്." } },
    { term: { en: "Media Literacy", ml: "മാധ്യമ സാക്ഷരത" }, definition: { en: "Ability to critically evaluate news and messages from media.", ml: "മാധ്യമങ്ങളിൽ നിന്നുള്ള വാർത്തകളും സന്ദേശങ്ങളും വിമർശനാത്മകമായി വിലയിരുത്താനുള്ള കഴിവ്." } }
  ],
  quiz: [
    {
      q_id: "q1",
      question: { en: "What is Public Opinion?", ml: "എന്താണ് പൊതുജനാഭിപ്രായം?" },
      options: [
        { id: "opt1", text: { en: "Opinion of the King", ml: "രാജാവിന്റെ അഭിപ്രായം" } },
        { id: "opt2", text: { en: "General opinion of the people on issues affecting them", ml: "ജനങ്ങളെ ബാധിക്കുന്ന വിഷയങ്ങളിൽ അവർക്കുള്ള പൊതുവായ അഭിപ്രായം" } },
        { id: "opt3", text: { en: "Opinion of the military", ml: "സൈന്യത്തിന്റെ അഭിപ്രായം" } },
        { id: "opt4", text: { en: "Opinion of a single individual", ml: "ഒരു വ്യക്തിയുടെ അഭിപ്രായം" } }
      ],
      answer: { id: "opt2", text: { en: "General opinion of the people on issues affecting them", ml: "ജനങ്ങളെ ബാധിക്കുന്ന വിഷയങ്ങളിൽ അവർക്കുള്ള പൊതുവായ അഭിപ്രായം" } }
    },
    {
      q_id: "q2",
      question: { en: "Which of the following is a characteristic of Civil Society?", ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് പൗരസമൂഹത്തിന്റെ സവിശേഷത?" },
      options: [
        { id: "opt1", text: { en: "Government controlled", ml: "സർക്കാർ നിയന്ത്രണത്തിലുള്ളത്" } },
        { id: "opt2", text: { en: "Profit motive", ml: "ലാഭേച്ഛയുള്ളത്" } },
        { id: "opt3", text: { en: "Voluntary and works for social welfare", ml: "സന്നദ്ധവും സാമൂഹിക ക്ഷേമത്തിനായി പ്രവർത്തിക്കുന്നതും" } },
        { id: "opt4", text: { en: "Part of the military", ml: "സൈന്യത്തിന്റെ ഭാഗം" } }
      ],
      answer: { id: "opt3", text: { en: "Voluntary and works for social welfare", ml: "സന്നദ്ധവും സാമൂഹിക ക്ഷേമത്തിനായി പ്രവർത്തിക്കുന്നതും" } }
    },
    {
      q_id: "q3",
      question: { en: "Does public opinion only reflect the majority view?", ml: "പൊതുജനാഭിപ്രായം ഭൂരിപക്ഷത്തിന്റെ അഭിപ്രായത്തെ മാത്രമാണോ പ്രതിഫലിപ്പിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Yes, always", ml: "അതെ, എപ്പോഴും" } },
        { id: "opt2", text: { en: "No, it creates a general consensus", ml: "അല്ല, അതൊരു പൊതുസമ്മതി സൃഷ്ടിക്കുന്നു" } },
        { id: "opt3", text: { en: "It reflects only minority view", ml: "ഇത് ന്യൂനപക്ഷ അഭിപ്രായത്തെ മാത്രം പ്രതിഫലിപ്പിക്കുന്നു" } },
        { id: "opt4", text: { en: "It reflects government view", ml: "ഇത് സർക്കാർ അഭിപ്രായത്തെ പ്രതിഫലിപ്പിക്കുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "No, it creates a general consensus", ml: "അല്ല, അതൊരു പൊതുസമ്മതി സൃഷ്ടിക്കുന്നു" } }
    },
    {
      q_id: "q4",
      question: { en: "Is public opinion static?", ml: "പൊതുജനാഭിപ്രായം സ്ഥിരമാണോ?" },
      options: [
        { id: "opt1", text: { en: "Yes, it never changes", ml: "അതെ, അത് ഒരിക്കലും മാറില്ല" } },
        { id: "opt2", text: { en: "No, it changes with time and circumstances", ml: "അല്ല, സമയത്തിനും സാഹചര്യങ്ങൾക്കും അനുസരിച്ച് അത് മാറുന്നു" } },
        { id: "opt3", text: { en: "It changes only every 100 years", ml: "ഓരോ 100 വർഷത്തിലും മാത്രമേ അത് മാറുകയുള്ളൂ" } },
        { id: "opt4", text: { en: "It is fixed by the constitution", ml: "അത് ഭരണഘടനയാൽ നിശ്ചയിക്കപ്പെട്ടതാണ്" } }
      ],
      answer: { id: "opt2", text: { en: "No, it changes with time and circumstances", ml: "അല്ല, സമയത്തിനും സാഹചര്യങ്ങൾക്കും അനുസരിച്ച് അത് മാറുന്നു" } }
    },
    {
      q_id: "q5",
      question: { en: "Which agency is the first place of socialization for a child?", ml: "ഒരു കുട്ടിയുടെ സാമൂഹികവൽക്കരണത്തിനുള്ള ആദ്യ വേദി ഏത് ഏജൻസിയാണ്?" },
      options: [
        { id: "opt1", text: { en: "School", ml: "സ്കൂൾ" } },
        { id: "opt2", text: { en: "Media", ml: "മാധ്യമങ്ങൾ" } },
        { id: "opt3", text: { en: "Family", ml: "കുടുംബം" } },
        { id: "opt4", text: { en: "Political Party", ml: "രാഷ്ട്രീയ പാർട്ടി" } }
      ],
      answer: { id: "opt3", text: { en: "Family", ml: "കുടുംബം" } }
    },
    {
      q_id: "q6",
      question: { en: "Which agency helps develop critical thinking in children?", ml: "കുട്ടികളിൽ വിമർശനാത്മക ചിന്ത വികസിപ്പിക്കാൻ സഹായിക്കുന്ന ഏജൻസി ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Family", ml: "കുടുംബം" } },
        { id: "opt2", text: { en: "Educational Institutions", ml: "വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ" } },
        { id: "opt3", text: { en: "Market", ml: "വിപണി" } },
        { id: "opt4", text: { en: "Police", ml: "പോലീസ്" } }
      ],
      answer: { id: "opt2", text: { en: "Educational Institutions", ml: "വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ" } }
    },
    {
      q_id: "q7",
      question: { en: "What are Peer Groups?", ml: "എന്താണ് പിയർ ഗ്രൂപ്പുകൾ (സമപ്രായക്കാരുടെ സംഘം)?" },
      options: [
        { id: "opt1", text: { en: "Groups of teachers", ml: "അധ്യാപകരുടെ കൂട്ടം" } },
        { id: "opt2", text: { en: "Groups of similar age and interests", ml: "ഒരേ പ്രായവും താല്പര്യങ്ങളുമുള്ളവരുടെ കൂട്ടം" } },
        { id: "opt3", text: { en: "Groups of politicians", ml: "രാഷ്ട്രീയക്കാരുടെ കൂട്ടം" } },
        { id: "opt4", text: { en: "Groups of family members", ml: "കുടുംബാംഗങ്ങളുടെ കൂട്ടം" } }
      ],
      answer: { id: "opt2", text: { en: "Groups of similar age and interests", ml: "ഒരേ പ്രായവും താല്പര്യങ്ങളുമുള്ളവരുടെ കൂട്ടം" } }
    },
    {
      q_id: "q8",
      question: { en: "Which of the following is a traditional media?", ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് പരമ്പരാഗത മാധ്യമം?" },
      options: [
        { id: "opt1", text: { en: "Social Media", ml: "സോഷ്യൽ മീഡിയ" } },
        { id: "opt2", text: { en: "Newspaper", ml: "പത്രം" } },
        { id: "opt3", text: { en: "Internet", ml: "ഇന്റർനെറ്റ്" } },
        { id: "opt4", text: { en: "Blog", ml: "ബ്ലോഗ്" } }
      ],
      answer: { id: "opt2", text: { en: "Newspaper", ml: "പത്രം" } }
    },
    {
      q_id: "q9",
      question: { en: "What is Digital Literacy?", ml: "എന്താണ് ഡിജിറ്റൽ സാക്ഷരത?" },
      options: [
        { id: "opt1", text: { en: "Ability to read books", ml: "പുസ്തകങ്ങൾ വായിക്കാനുള്ള കഴിവ്" } },
        { id: "opt2", text: { en: "Ability to use digital tools to find information", ml: "വിവരങ്ങൾ കണ്ടെത്താൻ ഡിജിറ്റൽ ഉപകരണങ്ങൾ ഉപയോഗിക്കാനുള്ള കഴിവ്" } },
        { id: "opt3", text: { en: "Ability to write letters", ml: "കത്തുകൾ എഴുതാനുള്ള കഴിവ്" } },
        { id: "opt4", text: { en: "Ability to print newspapers", ml: "പത്രങ്ങൾ അച്ചടിക്കാനുള്ള കഴിവ്" } }
      ],
      answer: { id: "opt2", text: { en: "Ability to use digital tools to find information", ml: "വിവരങ്ങൾ കണ്ടെത്താൻ ഡിജിറ്റൽ ഉപകരണങ്ങൾ ഉപയോഗിക്കാനുള്ള കഴിവ്" } }
    },
    {
      q_id: "q10",
      question: { en: "What is Media Literacy?", ml: "എന്താണ് മാധ്യമ സാക്ഷരത?" },
      options: [
        { id: "opt1", text: { en: "Ability to operate a camera", ml: "ക്യാമറ പ്രവർത്തിപ്പിക്കാനുള്ള കഴിവ്" } },
        { id: "opt2", text: { en: "Ability to critically evaluate media messages", ml: "മാധ്യമ സന്ദേശങ്ങളെ വിമർശനാത്മകമായി വിലയിരുത്താനുള്ള കഴിവ്" } },
        { id: "opt3", text: { en: "Ability to act in movies", ml: "സിനിമയിൽ അഭിനയിക്കാനുള്ള കഴിവ്" } },
        { id: "opt4", text: { en: "Ability to repair a TV", ml: "ടിവി നന്നാക്കാനുള്ള കഴിവ്" } }
      ],
      answer: { id: "opt2", text: { en: "Ability to critically evaluate media messages", ml: "മാധ്യമ സന്ദേശങ്ങളെ വിമർശനാത്മകമായി വിലയിരുത്താനുള്ള കഴിവ്" } }
    },
    {
      q_id: "q11",
      question: { en: "Why is Media Literacy important?", ml: "മാധ്യമ സാക്ഷരത പ്രധാനമായിരിക്കുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { id: "opt1", text: { en: "To become a journalist", ml: "ഒരു പത്രപ്രവർത്തകനാകാൻ" } },
        { id: "opt2", text: { en: "To recognize fake news", ml: "വ്യാജ വാർത്തകൾ തിരിച്ചറിയാൻ" } },
        { id: "opt3", text: { en: "To watch more movies", ml: "കൂടുതൽ സിനിമകൾ കാണാൻ" } },
        { id: "opt4", text: { en: "To buy a smartphone", ml: "ഒരു സ്മാർട്ട്ഫോൺ വാങ്ങാൻ" } }
      ],
      answer: { id: "opt2", text: { en: "To recognize fake news", ml: "വ്യാജ വാർത്തകൾ തിരിച്ചറിയാൻ" } }
    },
    {
      q_id: "q12",
      question: { en: "How do political parties mobilise public opinion?", ml: "രാഷ്ട്രീയ പാർട്ടികൾ എങ്ങനെയാണ് പൊതുജനാഭിപ്രായം സമാഹരിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "By banning media", ml: "മാധ്യമങ്ങളെ നിരോധിച്ചുകൊണ്ട്" } },
        { id: "opt2", text: { en: "By publishing manifestos and organising rallies", ml: "പ്രകടന പത്രികകൾ പ്രസിദ്ധീകരിച്ചും റാലികൾ സംഘടിപ്പിച്ചും" } },
        { id: "opt3", text: { en: "By closing schools", ml: "സ്കൂളുകൾ അടച്ചുപൂട്ടിക്കൊണ്ട്" } },
        { id: "opt4", text: { en: "By ignoring people", ml: "ജനങ്ങളെ അവഗണിച്ചുകൊണ്ട്" } }
      ],
      answer: { id: "opt2", text: { en: "By publishing manifestos and organising rallies", ml: "പ്രകടന പത്രികകൾ പ്രസിദ്ധീകരിച്ചും റാലികൾ സംഘടിപ്പിച്ചും" } }
    },
    {
      q_id: "q13",
      question: { en: "What is the role of opposition parties?", ml: "പ്രതിപക്ഷ പാർട്ടികളുടെ പങ്ക് എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "To support the government blindly", ml: "സർക്കാരിനെ കണ്ണടച്ച് പിന്തുണയ്ക്കുക" } },
        { id: "opt2", text: { en: "To highlight government failures", ml: "സർക്കാരിന്റെ പരാജയങ്ങൾ എടുത്തുകാണിക്കുക" } },
        { id: "opt3", text: { en: "To rule the country", ml: "രാജ്യം ഭരിക്കുക" } },
        { id: "opt4", text: { en: "To collect taxes", ml: "നികുതി പിരിക്കുക" } }
      ],
      answer: { id: "opt2", text: { en: "To highlight government failures", ml: "സർക്കാരിന്റെ പരാജയങ്ങൾ എടുത്തുകാണിക്കുക" } }
    },
    {
      q_id: "q14",
      question: { en: "Which of these is a Social Institution?", ml: "ഇവയിൽ ഏതാണ് ഒരു സാമൂഹിക സ്ഥാപനം?" },
      options: [
        { id: "opt1", text: { en: "Trade Union", ml: "തൊഴിലാളി യൂണിയൻ" } },
        { id: "opt2", text: { en: "Army", ml: "സൈന്യം" } },
        { id: "opt3", text: { en: "Police Station", ml: "പോലീസ് സ്റ്റേഷൻ" } },
        { id: "opt4", text: { en: "Court", ml: "കോടതി" } }
      ],
      answer: { id: "opt1", text: { en: "Trade Union", ml: "തൊഴിലാളി യൂണിയൻ" } }
    },
    {
      q_id: "q15",
      question: { en: "What is an Opinion Poll?", ml: "എന്താണ് അഭിപ്രായ വോട്ടെടുപ്പ് (ഒപ്പീനിയൻ പോൾ)?" },
      options: [
        { id: "opt1", text: { en: "Election voting", ml: "തിരഞ്ഞെടുപ്പ് വോട്ടിംഗ്" } },
        { id: "opt2", text: { en: "Survey to gauge public attitude", ml: "പൊതുജന മനോഭാവം അളക്കാനുള്ള സർവ്വേ" } },
        { id: "opt3", text: { en: "Census", ml: "സെൻസസ്" } },
        { id: "opt4", text: { en: "Exam result", ml: "പരീക്ഷാ ഫലം" } }
      ],
      answer: { id: "opt2", text: { en: "Survey to gauge public attitude", ml: "പൊതുജന മനോഭാവം അളക്കാനുള്ള സർവ്വേ" } }
    },
    {
      q_id: "q16",
      question: { en: "Who wrote the poem 'Chandalabhikshuki'?", ml: "'ചണ്ഡാലഭിക്ഷുകി' എന്ന കവിത എഴുതിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Vallathol", ml: "വള്ളത്തോൾ" } },
        { id: "opt2", text: { en: "Kumaran Asan", ml: "കുമാരനാശാൻ" } },
        { id: "opt3", text: { en: "G. Sankara Kurup", ml: "ജി. ശങ്കരക്കുറുപ്പ്" } },
        { id: "opt4", text: { en: "Changampuzha", ml: "ചങ്ങമ്പുഴ" } }
      ],
      answer: { id: "opt2", text: { en: "Kumaran Asan", ml: "കുമാരനാശാൻ" } }
    },
    {
      q_id: "q17",
      question: { en: "What social evil did 'Chandalabhikshuki' fight against?", ml: "'ചണ്ഡാലഭിക്ഷുകി' ഏത് സാമൂഹിക തിന്മയ്ക്കെതിരെയാണ് പോരാടിയത്?" },
      options: [
        { id: "opt1", text: { en: "Dowry system", ml: "സ്ത്രീധന സമ്പ്രദായം" } },
        { id: "opt2", text: { en: "Untouchability", ml: "തൊട്ടുകൂടായ്മ" } },
        { id: "opt3", text: { en: "Child marriage", ml: "ബാലവിവാഹം" } },
        { id: "opt4", text: { en: "Corruption", ml: "അഴിമതി" } }
      ],
      answer: { id: "opt2", text: { en: "Untouchability", ml: "തൊട്ടുകൂടായ്മ" } }
    },
    {
      q_id: "q18",
      question: { en: "What is the 'Digital Divide'?", ml: "എന്താണ് 'ഡിജിറ്റൽ വിടവ്'?" },
      options: [
        { id: "opt1", text: { en: "Gap between rich and poor", ml: "സമ്പന്നരും ദരിദ്രരും തമ്മിലുള്ള അന്തരം" } },
        { id: "opt2", text: { en: "Gap in access to internet and technology", ml: "ഇന്റർനെറ്റും സാങ്കേതികവിദ്യയും ലഭ്യമാകുന്നതിലെ അന്തരം" } },
        { id: "opt3", text: { en: "Gap between educated and uneducated", ml: "വിദ്യാഭ്യാസമുള്ളവരും ഇല്ലാത്തവരും തമ്മിലുള്ള അന്തരം" } },
        { id: "opt4", text: { en: "Gap between urban and rural areas", ml: "നഗരങ്ങളും ഗ്രാമങ്ങളും തമ്മിലുള്ള അന്തരം" } }
      ],
      answer: { id: "opt2", text: { en: "Gap in access to internet and technology", ml: "ഇന്റർനെറ്റും സാങ്കേതികവിദ്യയും ലഭ്യമാകുന്നതിലെ അന്തരം" } }
    },
    {
      q_id: "q19",
      question: { en: "How does poverty hinder public opinion?", ml: "ദാരിദ്ര്യം പൊതുജനാഭിപ്രായത്തെ തടസ്സപ്പെടുത്തുന്നത് എങ്ങനെ?" },
      options: [
        { id: "opt1", text: { en: "It makes people rich", ml: "അത് ആളുകളെ സമ്പന്നരാക്കുന്നു" } },
        { id: "opt2", text: { en: "It isolates people from public affairs", ml: "അത് ആളുകളെ പൊതു കാര്യങ്ങളിൽ നിന്ന് അകറ്റുന്നു" } },
        { id: "opt3", text: { en: "It helps them buy books", ml: "പുസ്തകങ്ങൾ വാങ്ങാൻ അത് സഹായിക്കുന്നു" } },
        { id: "opt4", text: { en: "It gives them more time", ml: "അത് അവർക്ക് കൂടുതൽ സമയം നൽകുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "It isolates people from public affairs", ml: "അത് ആളുകളെ പൊതു കാര്യങ്ങളിൽ നിന്ന് അകറ്റുന്നു" } }
    },
    {
      q_id: "q20",
      question: { en: "Which of the following hinders healthy public opinion?", ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് ആരോഗ്യകരമായ പൊതുജനാഭിപ്രായത്തെ തടസ്സപ്പെടുത്തുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Education", ml: "വിദ്യാഭ്യാസം" } },
        { id: "opt2", text: { en: "Corruption", ml: "അഴിമതി" } },
        { id: "opt3", text: { en: "Debate", ml: "സംവാദം" } },
        { id: "opt4", text: { en: "Voting", ml: "വോട്ടിംഗ്" } }
      ],
      answer: { id: "opt2", text: { en: "Corruption", ml: "അഴിമതി" } }
    },
    {
      q_id: "q21",
      question: { en: "What is the role of public opinion in democracy?", ml: "ജനാധിപത്യത്തിൽ പൊതുജനാഭിപ്രായത്തിന്റെ പങ്ക് എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "To suppress people", ml: "ജനങ്ങളെ അടിച്ചമർത്താൻ" } },
        { id: "opt2", text: { en: "To control the government", ml: "സർക്കാരിനെ നിയന്ത്രിക്കാൻ" } },
        { id: "opt3", text: { en: "To create chaos", ml: "കുഴപ്പങ്ങൾ സൃഷ്ടിക്കാൻ" } },
        { id: "opt4", text: { en: "To support monarchy", ml: "രാജവാഴ്ചയെ പിന്തുണയ്ക്കാൻ" } }
      ],
      answer: { id: "opt2", text: { en: "To control the government", ml: "സർക്കാരിനെ നിയന്ത്രിക്കാൻ" } }
    },
    {
      q_id: "q22",
      question: { en: "Public opinion helps to prevent?", ml: "എന്ത് തടയാനാണ് പൊതുജനാഭിപ്രായം സഹായിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Democracy", ml: "ജനാധിപത്യം" } },
        { id: "opt2", text: { en: "Dictatorial tendencies", ml: "ഏകാധിപത്യ പ്രവണതകൾ" } },
        { id: "opt3", text: { en: "Freedom", ml: "സ്വാതന്ത്ര്യം" } },
        { id: "opt4", text: { en: "Elections", ml: "തിരഞ്ഞെടുപ്പുകൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Dictatorial tendencies", ml: "ഏകാധിപത്യ പ്രവണതകൾ" } }
    },
    {
      q_id: "q23",
      question: { en: "Which local body discusses issues based on public opinion?", ml: "പൊതുജനാഭിപ്രായത്തിന്റെ അടിസ്ഥാനത്തിൽ പ്രശ്നങ്ങൾ ചർച്ച ചെയ്യുന്ന തദ്ദേശ സ്ഥാപനം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Parliament", ml: "പാർലമെന്റ്" } },
        { id: "opt2", text: { en: "Grama Sabha", ml: "ഗ്രാമസഭ" } },
        { id: "opt3", text: { en: "Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { id: "opt4", text: { en: "Police", ml: "പോലീസ്" } }
      ],
      answer: { id: "opt2", text: { en: "Grama Sabha", ml: "ഗ്രാമസഭ" } }
    },
    {
      q_id: "q24",
      question: { en: "What does 'Consensus' mean?", ml: "'പൊതുസമ്മതി' (Consensus) എന്നതുകൊണ്ട് എന്താണ് അർത്ഥമാക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Disagreement", ml: "വിയോജിപ്പ്" } },
        { id: "opt2", text: { en: "General agreement", ml: "പൊതുവായ യോജിപ്പ്" } },
        { id: "opt3", text: { en: "Conflict", ml: "സംഘർഷം" } },
        { id: "opt4", text: { en: "War", ml: "യുദ്ധം" } }
      ],
      answer: { id: "opt2", text: { en: "General agreement", ml: "പൊതുവായ യോജിപ്പ്" } }
    },
    {
      q_id: "q25",
      question: { en: "Which of these is NOT a factor hindering public opinion?", ml: "ഇവയിൽ ഏതാണ് പൊതുജനാഭിപ്രായത്തെ തടസ്സപ്പെടുത്താത്ത ഘടകം?" },
      options: [
        { id: "opt1", text: { en: "Illiteracy", ml: "നിരക്ഷരത" } },
        { id: "opt2", text: { en: "Poverty", ml: "ദാരിദ്ര്യം" } },
        { id: "opt3", text: { en: "Media Literacy", ml: "മാധ്യമ സാക്ഷരത" } },
        { id: "opt4", text: { en: "Corruption", ml: "അഴിമതി" } }
      ],
      answer: { id: "opt3", text: { en: "Media Literacy", ml: "മാധ്യമ സാക്ഷരത" } }
    },
    {
      q_id: "q26",
      question: { en: "What is a 'Manifesto'?", ml: "എന്താണ് 'പ്രകടന പത്രിക'?" },
      options: [
        { id: "opt1", text: { en: "A list of voters", ml: "വോട്ടർമാരുടെ പട്ടിക" } },
        { id: "opt2", text: { en: "A declared policy of a political party", ml: "ഒരു രാഷ്ട്രീയ പാർട്ടിയുടെ പ്രഖ്യാപിത നയം" } },
        { id: "opt3", text: { en: "A type of newspaper", ml: "ഒരു തരം പത്രം" } },
        { id: "opt4", text: { en: "A government order", ml: "ഒരു സർക്കാർ ഉത്തരവ്" } }
      ],
      answer: { id: "opt2", text: { en: "A declared policy of a political party", ml: "ഒരു രാഷ്ട്രീയ പാർട്ടിയുടെ പ്രഖ്യാപിത നയം" } }
    },
    {
      q_id: "q27",
      question: { en: "Which of these is a form of New Media?", ml: "ഇവയിൽ ഏതാണ് നവമാധ്യമത്തിന്റെ രൂപം?" },
      options: [
        { id: "opt1", text: { en: "Radio", ml: "റേഡിയോ" } },
        { id: "opt2", text: { en: "Television", ml: "ടെലിവിഷൻ" } },
        { id: "opt3", text: { en: "Newspaper", ml: "പത്രം" } },
        { id: "opt4", text: { en: "Social Media", ml: "സോഷ്യൽ മീഡിയ" } }
      ],
      answer: { id: "opt4", text: { en: "Social Media", ml: "സോഷ്യൽ മീഡിയ" } }
    },
    {
      q_id: "q28",
      question: { en: "School Parliaments help students to?", ml: "സ്കൂൾ പാർലമെന്റുകൾ വിദ്യാർത്ഥികളെ എന്തിന് സഹായിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Skip classes", ml: "ക്ലാസുകൾ ഒഴിവാക്കാൻ" } },
        { id: "opt2", text: { en: "Express opinions and understand democracy", ml: "അഭിപ്രായങ്ങൾ പ്രകടിപ്പിക്കാനും ജനാധിപത്യം മനസ്സിലാക്കാനും" } },
        { id: "opt3", text: { en: "Fight with each other", ml: "പരസ്പരം വഴക്കിടാൻ" } },
        { id: "opt4", text: { en: "Memorize books", ml: "പുസ്തകങ്ങൾ കാണാതെ പഠിക്കാൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Express opinions and understand democracy", ml: "അഭിപ്രായങ്ങൾ പ്രകടിപ്പിക്കാനും ജനാധിപത്യം മനസ്സിലാക്കാനും" } }
    },
    {
      q_id: "q29",
      question: { en: "Illiteracy hinders public opinion because?", ml: "നിരക്ഷരത പൊതുജനാഭിപ്രായത്തെ തടസ്സപ്പെടുത്തുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { id: "opt1", text: { en: "It limits knowledge", ml: "അത് അറിവിനെ പരിമിതപ്പെടുത്തുന്നു" } },
        { id: "opt2", text: { en: "It improves thinking", ml: "അത് ചിന്താശേഷി മെച്ചപ്പെടുത്തുന്നു" } },
        { id: "opt3", text: { en: "It saves time", ml: "അത് സമയം ലാഭിക്കുന്നു" } },
        { id: "opt4", text: { en: "It creates wealth", ml: "അത് സമ്പത്ത് ഉണ്ടാക്കുന്നു" } }
      ],
      answer: { id: "opt1", text: { en: "It limits knowledge", ml: "അത് അറിവിനെ പരിമിതപ്പെടുത്തുന്നു" } }
    },
    {
      q_id: "q30",
      question: { en: "Public opinion makes political parties?", ml: "പൊതുജനാഭിപ്രായം രാഷ്ട്രീയ പാർട്ടികളെ എന്താക്കി മാറ്റുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Irresponsible", ml: "ഉത്തരവാദിത്തമില്ലാത്തവർ" } },
        { id: "opt2", text: { en: "Responsible", ml: "ഉത്തരവാദിത്തമുള്ളവർ" } },
        { id: "opt3", text: { en: "Rich", ml: "സമ്പന്നർ" } },
        { id: "opt4", text: { en: "Dictators", ml: "ഏകാധിപതികൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Responsible", ml: "ഉത്തരവാദിത്തമുള്ളവർ" } }
    },
    {
      q_id: "q31",
      question: { en: "Which of these is an example of print media?", ml: "ഇവയിൽ ഏതാണ് അച്ചടി മാധ്യമത്തിന് ഉദാഹരണം?" },
      options: [
        { id: "opt1", text: { en: "Television", ml: "ടെലിവിഷൻ" } },
        { id: "opt2", text: { en: "Magazine", ml: "മാഗസിൻ" } },
        { id: "opt3", text: { en: "Radio", ml: "റേഡിയോ" } },
        { id: "opt4", text: { en: "Internet", ml: "ഇന്റർനെറ്റ്" } }
      ],
      answer: { id: "opt2", text: { en: "Magazine", ml: "മാഗസിൻ" } }
    },
    {
      q_id: "q32",
      question: { en: "What is the primary motive of Civil Society?", ml: "പൗരസമൂഹത്തിന്റെ പ്രാഥമിക ലക്ഷ്യം എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Profit", ml: "ലാഭം" } },
        { id: "opt2", text: { en: "Social Welfare", ml: "സാമൂഹിക ക്ഷേമം" } },
        { id: "opt3", text: { en: "Power", ml: "അധികാരം" } },
        { id: "opt4", text: { en: "Fame", ml: "പ്രശസ്തി" } }
      ],
      answer: { id: "opt2", text: { en: "Social Welfare", ml: "സാമൂഹിക ക്ഷേമം" } }
    },
    {
      q_id: "q33",
      question: { en: "Who conducts professional opinion polls?", ml: "പ്രൊഫഷണൽ അഭിപ്രായ വോട്ടെടുപ്പുകൾ നടത്തുന്നത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Government", ml: "സർക്കാർ" } },
        { id: "opt2", text: { en: "Professional Agencies", ml: "പ്രൊഫഷണൽ ഏജൻസികൾ" } },
        { id: "opt3", text: { en: "Police", ml: "പോലീസ്" } },
        { id: "opt4", text: { en: "Army", ml: "സൈന്യം" } }
      ],
      answer: { id: "opt2", text: { en: "Professional Agencies", ml: "പ്രൊഫഷണൽ ഏജൻസികൾ" } }
    },
    {
      q_id: "q34",
      question: { en: "What helps friends arrive at correct opinions?", ml: "ശരിയായ അഭിപ്രായങ്ങളിൽ എത്തിച്ചേരാൻ സുഹൃത്തുക്കളെ സഹായിക്കുന്നത് എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Fighting", ml: "വഴക്ക്" } },
        { id: "opt2", text: { en: "Debates and discussions", ml: "സംവാദങ്ങളും ചർച്ചകളും" } },
        { id: "opt3", text: { en: "Ignoring each other", ml: "പരസ്പരം അവഗണിക്കുന്നത്" } },
        { id: "opt4", text: { en: "Playing games", ml: "കളികൾ കളിക്കുന്നത്" } }
      ],
      answer: { id: "opt2", text: { en: "Debates and discussions", ml: "സംവാദങ്ങളും ചർച്ചകളും" } }
    },
    {
      q_id: "q35",
      question: { en: "Which of these is NOT a function of public opinion?", ml: "ഇവയിൽ ഏതാണ് പൊതുജനാഭിപ്രായത്തിന്റെ ധർമ്മമല്ലാത്തത്?" },
      options: [
        { id: "opt1", text: { en: "Controls government", ml: "സർക്കാരിനെ നിയന്ത്രിക്കുന്നു" } },
        { id: "opt2", text: { en: "Protects rights", ml: "അവകാശങ്ങൾ സംരക്ഷിക്കുന്നു" } },
        { id: "opt3", text: { en: "Promotes dictatorship", ml: "ഏകാധിപത്യത്തെ പ്രോത്സാഹിപ്പിക്കുന്നു" } },
        { id: "opt4", text: { en: "Questions misuse of power", ml: "അധികാര ദുർവിനിയോഗത്തെ ചോദ്യം ചെയ്യുന്നു" } }
      ],
      answer: { id: "opt3", text: { en: "Promotes dictatorship", ml: "ഏകാധിപത്യത്തെ പ്രോത്സാഹിപ്പിക്കുന്നു" } }
    },
    {
      q_id: "q36",
      question: { en: "Where can public opinion be expressed?", ml: "പൊതുജനാഭിപ്രായം എവിടെ പ്രകടിപ്പിക്കാം?" },
      options: [
        { id: "opt1", text: { en: "Only in parliament", ml: "പാർലമെന്റിൽ മാത്രം" } },
        { id: "opt2", text: { en: "Only in court", ml: "കോടതിയിൽ മാത്രം" } },
        { id: "opt3", text: { en: "Anywhere", ml: "എവിടെയും" } },
        { id: "opt4", text: { en: "Only in school", ml: "സ്കൂളിൽ മാത്രം" } }
      ],
      answer: { id: "opt3", text: { en: "Anywhere", ml: "എവിടെയും" } }
    },
    {
      q_id: "q37",
      question: { en: "Public opinion is formed on which matters?", ml: "ഏതൊക്കെ കാര്യങ്ങളിലാണ് പൊതുജനാഭിപ്രായം രൂപപ്പെടുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Only political", ml: "രാഷ്ട്രീയം മാത്രം" } },
        { id: "opt2", text: { en: "Only economic", ml: "സാമ്പത്തികം മാത്രം" } },
        { id: "opt3", text: { en: "Socio-economic, political, and cultural", ml: "സാമൂഹിക-സാമ്പത്തിക, രാഷ്ട്രീയ, സാംസ്കാരിക കാര്യങ്ങളിൽ" } },
        { id: "opt4", text: { en: "Only sports", ml: "കായികം മാത്രം" } }
      ],
      answer: { id: "opt3", text: { en: "Socio-economic, political, and cultural", ml: "സാമൂഹിക-സാമ്പത്തിക, രാഷ്ട്രീയ, സാംസ്കാരിക കാര്യങ്ങളിൽ" } }
    },
    {
      q_id: "q38",
      question: { en: "What is necessary to filter fake news?", ml: "വ്യാജ വാർത്തകളെ തടയാൻ എന്താണ് ആവശ്യം?" },
      options: [
        { id: "opt1", text: { en: "More news channels", ml: "കൂടുതൽ വാർത്താ ചാനലുകൾ" } },
        { id: "opt2", text: { en: "Media Literacy", ml: "മാധ്യമ സാക്ഷരത" } },
        { id: "opt3", text: { en: "Faster internet", ml: "വേഗതയേറിയ ഇന്റർനെറ്റ്" } },
        { id: "opt4", text: { en: "Cheaper phones", ml: "വിലകുറഞ്ഞ ഫോണുകൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Media Literacy", ml: "മാധ്യമ സാക്ഷരത" } }
    },
    {
      q_id: "q39",
      question: { en: "Unhealthy political activity leads to?", ml: "അനാരോഗ്യകരമായ രാഷ്ട്രീയ പ്രവർത്തനം എന്തിലേക്ക് നയിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Better democracy", ml: "മെച്ചപ്പെട്ട ജനാധിപത്യം" } },
        { id: "opt2", text: { en: "Hindrance to public opinion", ml: "പൊതുജനാഭിപ്രായത്തിന് തടസ്സം" } },
        { id: "opt3", text: { en: "Economic growth", ml: "സാമ്പത്തിക വളർച്ച" } },
        { id: "opt4", text: { en: "Peace", ml: "സമാധാനം" } }
      ],
      answer: { id: "opt2", text: { en: "Hindrance to public opinion", ml: "പൊതുജനാഭിപ്രായത്തിന് തടസ്സം" } }
    },
    {
      q_id: "q40",
      question: { en: "What does 'Regionalism' hinder?", ml: "'പ്രാദേശികവാദം' എന്തിനെ തടസ്സപ്പെടുത്തുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Local development", ml: "പ്രാദേശിക വികസനം" } },
        { id: "opt2", text: { en: "Healthy public opinion", ml: "ആരോഗ്യകരമായ പൊതുജനാഭിപ്രായം" } },
        { id: "opt3", text: { en: "Sports", ml: "കായികം" } },
        { id: "opt4", text: { en: "Festivals", ml: "ഉത്സവങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Healthy public opinion", ml: "ആരോഗ്യകരമായ പൊതുജനാഭിപ്രായം" } }
    },
    {
      q_id: "q41",
      question: { en: "Which of these is an electronic media?", ml: "ഇവയിൽ ഏതാണ് ഇലക്ട്രോണിക് മാധ്യമം?" },
      options: [
        { id: "opt1", text: { en: "Newspaper", ml: "പത്രം" } },
        { id: "opt2", text: { en: "Magazine", ml: "മാഗസിൻ" } },
        { id: "opt3", text: { en: "Television", ml: "ടെലിവിഷൻ" } },
        { id: "opt4", text: { en: "Pamphlet", ml: "ലഘുലേഖ" } }
      ],
      answer: { id: "opt3", text: { en: "Television", ml: "ടെലിവിഷൻ" } }
    },
    {
      q_id: "q42",
      question: { en: "What is the role of ruling parties?", ml: "ഭരണകക്ഷികളുടെ പങ്ക് എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "To oppose everything", ml: "എല്ലാത്തിനെയും എതിർക്കുക" } },
        { id: "opt2", text: { en: "To propagate government policies", ml: "സർക്കാർ നയങ്ങൾ പ്രചരിപ്പിക്കുക" } },
        { id: "opt3", text: { en: "To conduct strikes", ml: "സമരങ്ങൾ നടത്തുക" } },
        { id: "opt4", text: { en: "To ignore people", ml: "ജനങ്ങളെ അവഗണിക്കുക" } }
      ],
      answer: { id: "opt2", text: { en: "To propagate government policies", ml: "സർക്കാർ നയങ്ങൾ പ്രചരിപ്പിക്കുക" } }
    },
    {
      q_id: "q43",
      question: { en: "What do Student Movements represent?", ml: "വിദ്യാർത്ഥി പ്രസ്ഥാനങ്ങൾ എന്തിനെ പ്രതിനിധീകരിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Government", ml: "സർക്കാർ" } },
        { id: "opt2", text: { en: "Social Institutions", ml: "സാമൂഹിക സ്ഥാപനങ്ങൾ" } },
        { id: "opt3", text: { en: "Business", ml: "ബിസിനസ്സ്" } },
        { id: "opt4", text: { en: "Family", ml: "കുടുംബം" } }
      ],
      answer: { id: "opt2", text: { en: "Social Institutions", ml: "സാമൂഹിക സ്ഥാപനങ്ങൾ" } }
    },
    {
      q_id: "q44",
      question: { en: "Democracy ensures equal participation of?", ml: "ജനാധിപത്യം ആരുടെ തുല്യ പങ്കാളിത്തമാണ് ഉറപ്പാക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Only rich people", ml: "സമ്പന്നരുടെ മാത്രം" } },
        { id: "opt2", text: { en: "Only educated people", ml: "വിദ്യാഭ്യാസമുള്ളവരുടെ മാത്രം" } },
        { id: "opt3", text: { en: "All people", ml: "എല്ലാ ജനങ്ങളുടെയും" } },
        { id: "opt4", text: { en: "Only politicians", ml: "രാഷ്ട്രീയക്കാരുടെ മാത്രം" } }
      ],
      answer: { id: "opt3", text: { en: "All people", ml: "എല്ലാ ജനങ്ങളുടെയും" } }
    },
    {
      q_id: "q45",
      question: { en: "What empowers democracy?", ml: "ജനാധിപത്യത്തെ ശാക്തീകരിക്കുന്നത് എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Silence", ml: "നിശബ്ദത" } },
        { id: "opt2", text: { en: "Debate and Public Opinion", ml: "സംവാദവും പൊതുജനാഭിപ്രായവും" } },
        { id: "opt3", text: { en: "Force", ml: "ബലം" } },
        { id: "opt4", text: { en: "Money", ml: "പണം" } }
      ],
      answer: { id: "opt2", text: { en: "Debate and Public Opinion", ml: "സംവാദവും പൊതുജനാഭിപ്രായവും" } }
    },
    {
      q_id: "q46",
      question: { en: "What is the backbone of democracy?", ml: "ജനാധിപത്യത്തിന്റെ നട്ടെല്ല് എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Army", ml: "സൈന്യം" } },
        { id: "opt2", text: { en: "Public Opinion", ml: "പൊതുജനാഭിപ്രായം" } },
        { id: "opt3", text: { en: "Police", ml: "പോലീസ്" } },
        { id: "opt4", text: { en: "Banks", ml: "ബാങ്കുകൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Public Opinion", ml: "പൊതുജനാഭിപ്രായം" } }
    },
    {
      q_id: "q47",
      question: { en: "Which of these is a Human Rights Movement?", ml: "ഇവയിൽ ഏതാണ് മനുഷ്യാവകാശ പ്രസ്ഥാനം?" },
      options: [
        { id: "opt1", text: { en: "Social Institution", ml: "സാമൂഹിക സ്ഥാപനം" } },
        { id: "opt2", text: { en: "Government Department", ml: "സർക്കാർ വകുപ്പ്" } },
        { id: "opt3", text: { en: "Private Company", ml: "സ്വകാര്യ കമ്പനി" } },
        { id: "opt4", text: { en: "Sports Club", ml: "സ്പോർട്സ് ക്ലബ്" } }
      ],
      answer: { id: "opt1", text: { en: "Social Institution", ml: "സാമൂഹിക സ്ഥാപനം" } }
    },
    {
      q_id: "q48",
      question: { en: "What do Environmental Groups do?", ml: "പരിസ്ഥിതി ഗ്രൂപ്പുകൾ എന്താണ് ചെയ്യുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Destroy nature", ml: "പ്രകൃതിയെ നശിപ്പിക്കുന്നു" } },
        { id: "opt2", text: { en: "Shape public opinion on environment", ml: "പരിസ്ഥിതിയെക്കുറിച്ച് പൊതുജനാഭിപ്രായം രൂപീകരിക്കുന്നു" } },
        { id: "opt3", text: { en: "Build factories", ml: "ഫാക്ടറികൾ നിർമ്മിക്കുന്നു" } },
        { id: "opt4", text: { en: "Sell trees", ml: "മരങ്ങൾ വിൽക്കുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "Shape public opinion on environment", ml: "പരിസ്ഥിതിയെക്കുറിച്ച് പൊതുജനാഭിപ്രായം രൂപീകരിക്കുന്നു" } }
    },
    {
      q_id: "q49",
      question: { en: "What is the main tool of Digital Literacy?", ml: "ഡിജിറ്റൽ സാക്ഷരതയുടെ പ്രധാന ഉപകരണം എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Pen and Paper", ml: "പേനയും പേപ്പറും" } },
        { id: "opt2", text: { en: "Digital Tools and Internet", ml: "ഡിജിറ്റൽ ഉപകരണങ്ങളും ഇന്റർനെറ്റും" } },
        { id: "opt3", text: { en: "Typewriter", ml: "ടൈപ്പ്റൈറ്റർ" } },
        { id: "opt4", text: { en: "Blackboard", ml: "ബ്ലാക്ക്ബോർഡ്" } }
      ],
      answer: { id: "opt2", text: { en: "Digital Tools and Internet", ml: "ഡിജിറ്റൽ ഉപകരണങ്ങളും ഇന്റർനെറ്റും" } }
    },
    {
      q_id: "q50",
      question: { en: "Why is public opinion important for government policies?", ml: "സർക്കാർ നയങ്ങൾക്ക് പൊതുജനാഭിപ്രായം പ്രധാനമായിരിക്കുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { id: "opt1", text: { en: "It is not important", ml: "അത് പ്രധാനമല്ല" } },
        { id: "opt2", text: { en: "Governments formulate policies based on it", ml: "സർക്കാരുകൾ അതിനനുസരിച്ചാണ് നയങ്ങൾ രൂപീകരിക്കുന്നത്" } },
        { id: "opt3", text: { en: "It delays policies", ml: "അത് നയങ്ങളെ വൈകിപ്പിക്കുന്നു" } },
        { id: "opt4", text: { en: "It increases cost", ml: "അത് ചെലവ് വർദ്ധിപ്പിക്കുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "Governments formulate policies based on it", ml: "സർക്കാരുകൾ അതിനനുസരിച്ചാണ് നയങ്ങൾ രൂപീകരിക്കുന്നത്" } }
    },
    {
      q_id: "q51",
      question: { en: "Which of the following is NOT a characteristic of Public Opinion?", ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് പൊതുജനാഭിപ്രായത്തിന്റെ സവിശേഷതയല്ലാത്തത്?" },
      options: [
        { id: "opt1", text: { en: "It changes with time", ml: "അത് സമയത്തിനനുസരിച്ച് മാറുന്നു" } },
        { id: "opt2", text: { en: "It has a fixed place", ml: "അതിന് ഒരു നിശ്ചിത സ്ഥലമുണ്ട്" } },
        { id: "opt3", text: { en: "It reflects diverse views", ml: "അത് വൈവിധ്യമാർന്ന കാഴ്ചപ്പാടുകളെ പ്രതിഫലിപ്പിക്കുന്നു" } },
        { id: "opt4", text: { en: "It influences government", ml: "അത് സർക്കാരിനെ സ്വാധീനിക്കുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "It has a fixed place", ml: "അതിന് ഒരു നിശ്ചിത സ്ഥലമുണ്ട്" } }
    },
    {
      q_id: "q52",
      question: { en: "Who formulates policies based on public opinion in a democracy?", ml: "ജനാധിപത്യത്തിൽ പൊതുജനാഭിപ്രായത്തിന്റെ അടിസ്ഥാനത്തിൽ നയങ്ങൾ രൂപീകരിക്കുന്നത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Army", ml: "സൈന്യം" } },
        { id: "opt2", text: { en: "Government", ml: "സർക്കാർ" } },
        { id: "opt3", text: { en: "Police", ml: "പോലീസ്" } },
        { id: "opt4", text: { en: "Courts", ml: "കോടതികൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Government", ml: "സർക്കാർ" } }
    },
    {
      q_id: "q53",
      question: { en: "Which agency provides platforms like 'School Parliament'?", ml: "'സ്കൂൾ പാർലമെന്റ്' പോലുള്ള വേദികൾ നൽകുന്ന ഏജൻസി ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Family", ml: "കുടുംബം" } },
        { id: "opt2", text: { en: "Educational Institutions", ml: "വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ" } },
        { id: "opt3", text: { en: "Media", ml: "മാധ്യമങ്ങൾ" } },
        { id: "opt4", text: { en: "Peer Groups", ml: "സമപ്രായക്കാരുടെ സംഘങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Educational Institutions", ml: "വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ" } }
    },
    {
      q_id: "q54",
      question: { en: "Civil Society works without?", ml: "പൗരസമൂഹം എന്തില്ലാതെയാണ് പ്രവർത്തിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "People", ml: "ആളുകൾ" } },
        { id: "opt2", text: { en: "Profit motive", ml: "ലാഭേച്ഛ" } },
        { id: "opt3", text: { en: "Goals", ml: "ലക്ഷ്യങ്ങൾ" } },
        { id: "opt4", text: { en: "Leaders", ml: "നേതാക്കന്മാർ" } }
      ],
      answer: { id: "opt2", text: { en: "Profit motive", ml: "ലാഭേച്ഛ" } }
    },
    {
      q_id: "q55",
      question: { en: "Newspapers and Magazines belong to which type of media?", ml: "പത്രങ്ങളും മാഗസിനുകളും ഏത് തരം മാധ്യമത്തിൽ പെടുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Electronic Media", ml: "ഇലക്ട്രോണിക് മാധ്യമം" } },
        { id: "opt2", text: { en: "Print Media", ml: "അച്ചടി മാധ്യമം" } },
        { id: "opt3", text: { en: "Social Media", ml: "സോഷ്യൽ മീഡിയ" } },
        { id: "opt4", text: { en: "Oral Media", ml: "വാമൊഴി മാധ്യമം" } }
      ],
      answer: { id: "opt2", text: { en: "Print Media", ml: "അച്ചടി മാധ്യമം" } }
    },
    {
      q_id: "q56",
      question: { en: "Radio and Television belong to which type of media?", ml: "റേഡിയോയും ടെലിവിഷനും ഏത് തരം മാധ്യമത്തിൽ പെടുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Print Media", ml: "അച്ചടി മാധ്യമം" } },
        { id: "opt2", text: { en: "Electronic Media", ml: "ഇലക്ട്രോണിക് മാധ്യമം" } },
        { id: "opt3", text: { en: "Ancient Media", ml: "പുരാതന മാധ്യമം" } },
        { id: "opt4", text: { en: "None of these", ml: "ഇവയൊന്നുമല്ല" } }
      ],
      answer: { id: "opt2", text: { en: "Electronic Media", ml: "ഇലക്ട്രോണിക് മാധ്യമം" } }
    },
    {
      q_id: "q57",
      question: { en: "The ability to critically evaluate news is called?", ml: "വാർത്തകളെ വിമർശനാത്മകമായി വിലയിരുത്താനുള്ള കഴിവിനെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Computer Literacy", ml: "കമ്പ്യൂട്ടർ സാക്ഷരത" } },
        { id: "opt2", text: { en: "Media Literacy", ml: "മാധ്യമ സാക്ഷരത" } },
        { id: "opt3", text: { en: "Basic Literacy", ml: "അടിസ്ഥാന സാക്ഷരത" } },
        { id: "opt4", text: { en: "Financial Literacy", ml: "സാമ്പത്തിക സാക്ഷരത" } }
      ],
      answer: { id: "opt2", text: { en: "Media Literacy", ml: "മാധ്യമ സാക്ഷരത" } }
    },
    {
      q_id: "q58",
      question: { en: "The gap between those who have internet access and those who do not is?", ml: "ഇന്റർനെറ്റ് സൗകര്യമുള്ളവരും ഇല്ലാത്തവരും തമ്മിലുള്ള അന്തരം എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Generation Gap", ml: "തലമുറ വിടവ്" } },
        { id: "opt2", text: { en: "Digital Divide", ml: "ഡിജിറ്റൽ വിടവ്" } },
        { id: "opt3", text: { en: "Economic Divide", ml: "സാമ്പത്തിക വിടവ്" } },
        { id: "opt4", text: { en: "Social Divide", ml: "സാമൂഹിക വിടവ്" } }
      ],
      answer: { id: "opt2", text: { en: "Digital Divide", ml: "ഡിജിറ്റൽ വിടവ്" } }
    },
    {
      q_id: "q59",
      question: { en: "Which factor isolates people from public affairs due to lack of basic needs?", ml: "അടിസ്ഥാന ആവശ്യങ്ങളുടെ കുറവ് മൂലം ആളുകളെ പൊതു കാര്യങ്ങളിൽ നിന്ന് അകറ്റുന്ന ഘടകം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Wealth", ml: "സമ്പത്ത്" } },
        { id: "opt2", text: { en: "Poverty", ml: "ദാരിദ്ര്യം" } },
        { id: "opt3", text: { en: "Health", ml: "ആരോഗ്യം" } },
        { id: "opt4", text: { en: "Education", ml: "വിദ്യാഭ്യാസം" } }
      ],
      answer: { id: "opt2", text: { en: "Poverty", ml: "ദാരിദ്ര്യം" } }
    },
    {
      q_id: "q60",
      question: { en: "What do political parties release to declare their policies before elections?", ml: "തിരഞ്ഞെടുപ്പിന് മുമ്പ് തങ്ങളുടെ നയങ്ങൾ പ്രഖ്യാപിക്കാൻ രാഷ്ട്രീയ പാർട്ടികൾ പുറത്തിറക്കുന്നത് എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Textbook", ml: "പാഠപുസ്തകം" } },
        { id: "opt2", text: { en: "Manifesto", ml: "പ്രകടന പത്രിക" } },
        { id: "opt3", text: { en: "Novel", ml: "നോവൽ" } },
        { id: "opt4", text: { en: "Ticket", ml: "ടിക്കറ്റ്" } }
      ],
      answer: { id: "opt2", text: { en: "Manifesto", ml: "പ്രകടന പത്രിക" } }
    },
    {
      q_id: "q61",
      question: { en: "Which organization works primarily for the welfare of workers?", ml: "തൊഴിലാളികളുടെ ക്ഷേമത്തിനായി പ്രധാനമായും പ്രവർത്തിക്കുന്ന സംഘടന ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Student Union", ml: "വിദ്യാർത്ഥി യൂണിയൻ" } },
        { id: "opt2", text: { en: "Trade Union", ml: "തൊഴിലാളി യൂണിയൻ" } },
        { id: "opt3", text: { en: "Residents Association", ml: "റെസിഡന്റ്സ് അസോസിയേഷൻ" } },
        { id: "opt4", text: { en: "Sports Club", ml: "സ്പോർട്സ് ക്ലബ്" } }
      ],
      answer: { id: "opt2", text: { en: "Trade Union", ml: "തൊഴിലാളി യൂണിയൻ" } }
    },
    {
      q_id: "q62",
      question: { en: "What is the method used to gauge public opinion by interviewing a sample of people?", ml: "ഒരു മാതൃകാ സമൂഹത്തെ അഭിമുഖം നടത്തി പൊതുജനാഭിപ്രായം അളക്കുന്ന രീതി ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Census", ml: "സെൻസസ്" } },
        { id: "opt2", text: { en: "Opinion Poll", ml: "അഭിപ്രായ വോട്ടെടുപ്പ്" } },
        { id: "opt3", text: { en: "Election", ml: "തിരഞ്ഞെടുപ്പ്" } },
        { id: "opt4", text: { en: "Exam", ml: "പരീക്ഷ" } }
      ],
      answer: { id: "opt2", text: { en: "Opinion Poll", ml: "അഭിപ്രായ വോട്ടെടുപ്പ്" } }
    },
    {
      q_id: "q63",
      question: { en: "Which poem by Kumaran Asan influenced public opinion against untouchability?", ml: "തൊട്ടുകൂടായ്മയ്ക്കെതിരെ പൊതുജനാഭിപ്രായം രൂപീകരിക്കുന്നതിൽ സ്വാധീനം ചെലുത്തിയ കുമാരനാശാന്റെ കവിത ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Veena Poovu", ml: "വീണപൂവ്" } },
        { id: "opt2", text: { en: "Chandalabhikshuki", ml: "ചണ്ഡാലഭിക്ഷുകി" } },
        { id: "opt3", text: { en: "Karuna", ml: "കരുണ" } },
        { id: "opt4", text: { en: "Nalini", ml: "നളിനി" } }
      ],
      answer: { id: "opt2", text: { en: "Chandalabhikshuki", ml: "ചണ്ഡാലഭിക്ഷുകി" } }
    },
    {
      q_id: "q64",
      question: { en: "What does public opinion help to protect in a democracy?", ml: "ജനാധിപത്യത്തിൽ എന്ത് സംരക്ഷിക്കാനാണ് പൊതുജനാഭിപ്രായം സഹായിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "King's power", ml: "രാജാവിന്റെ അധികാരം" } },
        { id: "opt2", text: { en: "Rights and Freedom of citizens", ml: "പൗരന്മാരുടെ അവകാശങ്ങളും സ്വാതന്ത്ര്യവും" } },
        { id: "opt3", text: { en: "Military rule", ml: "സൈനിക ഭരണം" } },
        { id: "opt4", text: { en: "Corruption", ml: "അഴിമതി" } }
      ],
      answer: { id: "opt2", text: { en: "Rights and Freedom of citizens", ml: "പൗരന്മാരുടെ അവകാശങ്ങളും സ്വാതന്ത്ര്യവും" } }
    },
    {
      q_id: "q65",
      question: { en: "Which of the following is a hindrance to public opinion related to lack of education?", ml: "വിദ്യാഭ്യാസത്തിന്റെ കുറവുമായി ബന്ധപ്പെട്ട പൊതുജനാഭിപ്രായത്തിനുള്ള തടസ്സം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Poverty", ml: "ദാരിദ്ര്യം" } },
        { id: "opt2", text: { en: "Illiteracy", ml: "നിരക്ഷരത" } },
        { id: "opt3", text: { en: "Corruption", ml: "അഴിമതി" } },
        { id: "opt4", text: { en: "Regionalism", ml: "പ്രാദേശികവാദം" } }
      ],
      answer: { id: "opt2", text: { en: "Illiteracy", ml: "നിരക്ഷരത" } }
    },
    {
      q_id: "q66",
      question: { en: "In which forum do people directly participate to discuss local issues?", ml: "പ്രാദേശിക വിഷയങ്ങൾ ചർച്ച ചെയ്യാൻ ജനങ്ങൾ നേരിട്ട് പങ്കെടുക്കുന്ന വേദി ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Legislative Assembly", ml: "നിയമസഭ" } },
        { id: "opt2", text: { en: "Grama Sabha", ml: "ഗ്രാമസഭ" } },
        { id: "opt3", text: { en: "Parliament", ml: "പാർലമെന്റ്" } },
        { id: "opt4", text: { en: "Cabinet", ml: "മന്ത്രിസഭ" } }
      ],
      answer: { id: "opt2", text: { en: "Grama Sabha", ml: "ഗ്രാമസഭ" } }
    },
    {
      q_id: "q67",
      question: { en: "Which agency consists of people of the same age and interest?", ml: "ഒരേ പ്രായവും താല്പര്യവുമുള്ള ആളുകൾ ഉൾപ്പെടുന്ന ഏജൻസി ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Family", ml: "കുടുംബം" } },
        { id: "opt2", text: { en: "Peer Group", ml: "സമപ്രായക്കാരുടെ സംഘം" } },
        { id: "opt3", text: { en: "School", ml: "സ്കൂൾ" } },
        { id: "opt4", text: { en: "Media", ml: "മാധ്യമങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Peer Group", ml: "സമപ്രായക്കാരുടെ സംഘം" } }
    },
    {
      q_id: "q68",
      question: { en: "What is the main role of the opposition party?", ml: "പ്രതിപക്ഷ പാർട്ടിയുടെ പ്രധാന പങ്ക് എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "To praise the government", ml: "സർക്കാരിനെ പുകഴ്ത്തുക" } },
        { id: "opt2", text: { en: "To critique government failures", ml: "സർക്കാരിന്റെ പരാജയങ്ങളെ വിമർശിക്കുക" } },
        { id: "opt3", text: { en: "To remain silent", ml: "നിശബ്ദമായിരിക്കുക" } },
        { id: "opt4", text: { en: "To join the ruling party", ml: "ഭരണകക്ഷിയിൽ ചേരുക" } }
      ],
      answer: { id: "opt2", text: { en: "To critique government failures", ml: "സർക്കാരിന്റെ പരാജയങ്ങളെ വിമർശിക്കുക" } }
    },
    {
      q_id: "q69",
      question: { en: "Which of the following is NOT considered a healthy agency of public opinion?", ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് പൊതുജനാഭിപ്രായത്തിന്റെ ആരോഗ്യകരമായ ഏജൻസിയായി കണക്കാക്കാത്തത്?" },
      options: [
        { id: "opt1", text: { en: "School", ml: "സ്കൂൾ" } },
        { id: "opt2", text: { en: "Criminal Gangs", ml: "ക്രിമിനൽ സംഘങ്ങൾ" } },
        { id: "opt3", text: { en: "Media", ml: "മാധ്യമങ്ങൾ" } },
        { id: "opt4", text: { en: "Family", ml: "കുടുംബം" } }
      ],
      answer: { id: "opt2", text: { en: "Criminal Gangs", ml: "ക്രിമിനൽ സംഘങ്ങൾ" } }
    },
    {
      q_id: "q70",
      question: { en: "What is the collective opinion of the people on a social issue called?", ml: "ഒരു സാമൂഹിക വിഷയത്തിൽ ജനങ്ങളുടെ കൂട്ടായ അഭിപ്രായത്തെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Personal Opinion", ml: "വ്യക്തിപരമായ അഭിപ്രായം" } },
        { id: "opt2", text: { en: "Public Opinion", ml: "പൊതുജനാഭിപ്രായം" } },
        { id: "opt3", text: { en: "Expert Opinion", ml: "വിദഗ്ദ്ധാഭിപ്രായം" } },
        { id: "opt4", text: { en: "Judicial Opinion", ml: "നീതിന്യായ അഭിപ്രായം" } }
      ],
      answer: { id: "opt2", text: { en: "Public Opinion", ml: "പൊതുജനാഭിപ്രായം" } }
    },
    {
      q_id: "q71",
      question: { en: "Which literacy is primarily required to use the internet effectively?", ml: "ഇന്റർനെറ്റ് ഫലപ്രദമായി ഉപയോഗിക്കുന്നതിന് പ്രധാനമായും ഏത് സാക്ഷരതയാണ് ആവശ്യം?" },
      options: [
        { id: "opt1", text: { en: "Legal Literacy", ml: "നിയമ സാക്ഷരത" } },
        { id: "opt2", text: { en: "Digital Literacy", ml: "ഡിജിറ്റൽ സാക്ഷരത" } },
        { id: "opt3", text: { en: "Financial Literacy", ml: "സാമ്പത്തിക സാക്ഷരത" } },
        { id: "opt4", text: { en: "Health Literacy", ml: "ആരോഗ്യ സാക്ഷരത" } }
      ],
      answer: { id: "opt2", text: { en: "Digital Literacy", ml: "ഡിജിറ്റൽ സാക്ഷരത" } }
    },
    {
      q_id: "q72",
      question: { en: "What does 'Consensus' imply in the context of public opinion?", ml: "പൊതുജനാഭിപ്രായത്തിന്റെ പശ്ചാത്തലത്തിൽ 'പൊതുസമ്മതി' (Consensus) എന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Total disagreement", ml: "പൂർണ്ണമായ വിയോജിപ്പ്" } },
        { id: "opt2", text: { en: "General agreement among people", ml: "ജനങ്ങളുടെ ഇടയിലുള്ള പൊതുവായ യോജിപ്പ്" } },
        { id: "opt3", text: { en: "Opinion of one person", ml: "ഒരു വ്യക്തിയുടെ അഭിപ്രായം" } },
        { id: "opt4", text: { en: "Opinion of the King", ml: "രാജാവിന്റെ അഭിപ്രായം" } }
      ],
      answer: { id: "opt2", text: { en: "General agreement among people", ml: "ജനങ്ങളുടെ ഇടയിലുള്ള പൊതുവായ യോജിപ്പ്" } }
    },
    {
      q_id: "q73",
      question: { en: "Which of these helps in forming public opinion through visual and audio means?", ml: "ദൃശ്യ-ശ്രാവ്യ മാർഗ്ഗങ്ങളിലൂടെ പൊതുജനാഭിപ്രായം രൂപീകരിക്കുന്നതിന് സഹായിക്കുന്നത് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Newspaper", ml: "പത്രം" } },
        { id: "opt2", text: { en: "Television/Cinema", ml: "ടെലിവിഷൻ/സിനിമ" } },
        { id: "opt3", text: { en: "Books", ml: "പുസ്തകങ്ങൾ" } },
        { id: "opt4", text: { en: "Magazines", ml: "മാഗസിനുകൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Television/Cinema", ml: "ടെലിവിഷൻ/സിനിമ" } }
    },
    {
      q_id: "q74",
      question: { en: "What is the effect of corruption on public opinion?", ml: "അഴിമതി പൊതുജനാഭിപ്രായത്തിൽ എന്ത് സ്വാധീനമാണ് ചെലുത്തുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "It strengthens it", ml: "അതിനെ ശക്തിപ്പെടുത്തുന്നു" } },
        { id: "opt2", text: { en: "It hinders it", ml: "അതിനെ തടസ്സപ്പെടുത്തുന്നു" } },
        { id: "opt3", text: { en: "It has no effect", ml: "അതിന് യാതൊരു സ്വാധീനവുമില്ല" } },
        { id: "opt4", text: { en: "It makes it faster", ml: "അതിനെ വേഗത്തിലാക്കുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "It hinders it", ml: "അതിനെ തടസ്സപ്പെടുത്തുന്നു" } }
    },
    {
      q_id: "q75",
      question: { en: "Why is public opinion considered the 'watchdog' of democracy?", ml: "പൊതുജനാഭിപ്രായത്തെ ജനാധിപത്യത്തിന്റെ 'കാവൽനായ' എന്ന് വിളിക്കുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { id: "opt1", text: { en: "It bites people", ml: "അത് ആളുകളെ കടിക്കുന്നു" } },
        { id: "opt2", text: { en: "It controls and monitors the government", ml: "അത് സർക്കാരിനെ നിയന്ത്രിക്കുകയും നിരീക്ഷിക്കുകയും ചെയ്യുന്നു" } },
        { id: "opt3", text: { en: "It sleeps all day", ml: "അത് ദിവസം മുഴുവൻ ഉറങ്ങുന്നു" } },
        { id: "opt4", text: { en: "It eats food", ml: "അത് ഭക്ഷണം കഴിക്കുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "It controls and monitors the government", ml: "അത് സർക്കാരിനെ നിയന്ത്രിക്കുകയും നിരീക്ഷിക്കുകയും ചെയ്യുന്നു" } }
    }
  ],
  sample_questions: [
    {
      q_id: "sq1",
      question: { en: "What is public opinion?", ml: "എന്താണ് പൊതുജനാഭിപ്രായം?" },
      answer: { en: "Public opinion is the general opinion or consensus of the people about the socio-economic, political, and cultural issues affecting them. It acts as the foundation of a democratic system.", ml: "ജനങ്ങളെ ബാധിക്കുന്ന സാമൂഹിക-സാമ്പത്തിക, രാഷ്ട്രീയ, സാംസ്കാരിക വിഷയങ്ങളിൽ അവർക്കുള്ള പൊതുവായ അഭിപ്രായമോ സമ്മതിയോ ആണ് പൊതുജനാഭിപ്രായം. ഇത് ഒരു ജനാധിപത്യ വ്യവസ്ഥയുടെ അടിസ്ഥാനമായി വർത്തിക്കുന്നു." }
    },
    {
      q_id: "sq2",
      question: { en: "What do you mean by 'Civil Society'?", ml: "'പൗരസമൂഹം' എന്നതുകൊണ്ട് നിങ്ങൾ എന്താണ് അർത്ഥമാക്കുന്നത്?" },
      answer: { en: "Civil society includes organisations, groups, and individuals who work voluntarily for the welfare of society. They operate without government control or a profit motive and represent diverse views.", ml: "സമൂഹത്തിന്റെ ക്ഷേമത്തിനായി സ്വമേധയാ പ്രവർത്തിക്കുന്ന സംഘടനകളും ഗ്രൂപ്പുകളും വ്യക്തികളും പൗരസമൂഹത്തിൽ ഉൾപ്പെടുന്നു. സർക്കാർ നിയന്ത്രണമോ ലാഭേച്ഛയോ ഇല്ലാതെ പ്രവർത്തിക്കുന്ന ഇവർ വൈവിധ്യമാർന്ന കാഴ്ചപ്പാടുകളെ പ്രതിനിധീകരിക്കുന്നു." }
    },
    {
      q_id: "sq3",
      question: { en: "List any four characteristics of public opinion.", ml: "പൊതുജനാഭിപ്രായത്തിന്റെ ഏതെങ്കിലും നാല് സവിശേഷതകൾ പട്ടികപ്പെടുത്തുക." },
      answer: { en: "It reflects diverse opinions. It changes with time and circumstances. It ensures democratic communication. It relates to socio-economic and cultural matters, not just politics.", ml: "ഇത് വൈവിധ്യമാർന്ന അഭിപ്രായങ്ങളെ പ്രതിഫലിപ്പിക്കുന്നു. സമയത്തിനും സാഹചര്യങ്ങൾക്കും അനുസരിച്ച് ഇത് മാറുന്നു. ഇത് ജനാധിപത്യപരമായ ആശയവിനിമയം ഉറപ്പാക്കുന്നു. ഇത് രാഷ്ട്രീയത്തിന് പുറമെ സാമൂഹിക-സാമ്പത്തിക, സാംസ്കാരിക കാര്യങ്ങളുമായും ബന്ധപ്പെട്ടിരിക്കുന്നു." }
    },
    {
      q_id: "sq4",
      question: { en: "How do educational institutions help in shaping public opinion?", ml: "പൊതുജനാഭിപ്രായം രൂപീകരിക്കുന്നതിൽ വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ എങ്ങനെ സഹായിക്കുന്നു?" },
      answer: { en: "Educational institutions develop children's scientific and critical thinking skills. Activities like school parliaments, clubs, and cultural events provide platforms for students to express opinions and understand democracy.", ml: "വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ കുട്ടികളുടെ ശാസ്ത്രീയവും വിമർശനാത്മകവുമായ ചിന്താശേഷി വികസിപ്പിക്കുന്നു. സ്കൂൾ പാർലമെന്റുകൾ, ക്ലബ്ബുകൾ, സാംസ്കാരിക പരിപാടികൾ തുടങ്ങിയവ വിദ്യാർത്ഥികൾക്ക് അഭിപ്രായങ്ങൾ പ്രകടിപ്പിക്കാനും ജനാധിപത്യം മനസ്സിലാക്കാനുമുള്ള വേദികൾ നൽകുന്നു." }
    },
    {
      q_id: "sq5",
      question: { en: "What is the difference between Media Literacy and Digital Literacy?", ml: "മാധ്യമ സാക്ഷരതയും ഡിജിറ്റൽ സാക്ഷരതയും തമ്മിലുള്ള വ്യത്യാസം എന്താണ്?" },
      answer: { en: "Digital literacy is the ability to efficiently use digital tools and internet technology to access information. Media literacy is the ability to critically evaluate and interpret the news and messages received through the media to identify the truth.", ml: "വിവരങ്ങൾ ലഭ്യമാക്കുന്നതിനായി ഡിജിറ്റൽ ഉപകരണങ്ങളും ഇന്റർനെറ്റ് സാങ്കേതികവിദ്യയും ഫലപ്രദമായി ഉപയോഗിക്കാനുള്ള കഴിവാണ് ഡിജിറ്റൽ സാക്ഷരത. മാധ്യമങ്ങളിലൂടെ ലഭിക്കുന്ന വാർത്തകളും സന്ദേശങ്ങളും സത്യമാണോ എന്ന് തിരിച്ചറിയുന്നതിനായി അവയെ വിമർശനാത്മകമായി വിലയിരുത്താനും വ്യാഖ്യാനിക്കാനുമുള്ള കഴിവാണ് മാധ്യമ സാക്ഷരത." }
    },
    {
      q_id: "sq6",
      question: { en: "How do political parties influence the formation of public opinion?", ml: "രാഷ്ട്രീയ പാർട്ടികൾ പൊതുജനാഭിപ്രായ രൂപീകരണത്തെ സ്വാധീനിക്കുന്നത് എങ്ങനെ?" },
      answer: { en: "Political parties use manifestos, campaigns, rallies, and seminars to make the public think about common issues. Ruling parties propagate their policies, while opposition parties expose administrative failures to sway opinions.", ml: "പ്രകടന പത്രികകൾ, പ്രചാരണങ്ങൾ, റാലികൾ, സെമിനാറുകൾ എന്നിവ ഉപയോഗിച്ച് രാഷ്ട്രീയ പാർട്ടികൾ പൊതുവിഷയങ്ങളെക്കുറിച്ച് ചിന്തിക്കാൻ ജനങ്ങളെ പ്രേരിപ്പിക്കുന്നു. ഭരണകക്ഷികൾ തങ്ങളുടെ നയങ്ങൾ പ്രചരിപ്പിക്കുന്നു, അതേസമയം പ്രതിപക്ഷ പാർട്ടികൾ അഭിപ്രായങ്ങളെ സ്വാധീനിക്കാൻ ഭരണപരാജയങ്ങൾ തുറന്നുകാട്ടുന്നു." }
    },
    {
      q_id: "sq7",
      question: { en: "What is an 'Opinion Poll'?", ml: "'അഭിപ്രായ വോട്ടെടുപ്പ്' (ഒപ്പീനിയൻ പോൾ) എന്ന് വെച്ചാൽ എന്ത്?" },
      answer: { en: "An opinion poll is a method to gather information about public attitudes on various issues. It is conducted by approaching a specific sample of the population to understand general consensus.", ml: "വിവിധ വിഷയങ്ങളിലെ പൊതുജനങ്ങളുടെ മനോഭാവത്തെക്കുറിച്ചുള്ള വിവരങ്ങൾ ശേഖരിക്കുന്നതിനുള്ള ഒരു രീതിയാണ് അഭിപ്രായ വോട്ടെടുപ്പ്. പൊതുസമ്മതി മനസ്സിലാക്കുന്നതിനായി ജനസംഖ്യയിലെ ഒരു പ്രത്യേക മാതൃകാ സമൂഹത്തെ സമീപിച്ചാണ് ഇത് നടത്തുന്നത്." }
    },
    {
      q_id: "sq8",
      question: { en: "Explain with an example how literature can shape public opinion.", ml: "സാഹിത്യത്തിന് എങ്ങനെ പൊതുജനാഭിപ്രായം രൂപീകരിക്കാൻ കഴിയുമെന്ന് ഒരു ഉദാഹരണ സഹിതം വിശദീകരിക്കുക." },
      answer: { en: "Literature can inspire people to act against social evils and change society. For example, Kumaran Asan's poem 'Chandalabhikshuki' strongly influenced public opinion against the caste system and untouchability.", ml: "സാമൂഹിക തിന്മകൾക്കെതിരെ പ്രവർത്തിക്കാനും സമൂഹത്തെ മാറ്റാനും സാഹിത്യത്തിന് ആളുകളെ പ്രചോദിപ്പിക്കാൻ കഴിയും. ഉദാഹരണത്തിന്, കുമാരനാശാന്റെ 'ചണ്ഡാലഭിക്ഷുകി' എന്ന കവിത ജാതിവ്യവസ്ഥയ്ക്കും തൊട്ടുകൂടായ്മയ്ക്കും എതിരെ ശക്തമായ പൊതുജനാഭിപ്രായം രൂപീകരിച്ചു." }
    },
    {
      q_id: "sq9",
      question: { en: "What is meant by 'Digital Divide'? How does it hinder public opinion?", ml: "'ഡിജിറ്റൽ വിടവ്' എന്നതുകൊണ്ട് എന്താണ് അർത്ഥമാക്കുന്നത്? അത് പൊതുജനാഭിപ്രായത്തെ എങ്ങനെ തടസ്സപ്പെടുത്തുന്നു?" },
      answer: { en: "The digital divide is the gap between people who have access to modern technology (like internet and smartphones) and those who do not. It hinders public opinion because people without digital access lack current information and cannot actively participate in modern democratic discussions.", ml: "ആധുനിക സാങ്കേതികവിദ്യ (ഇന്റർനെറ്റ്, സ്മാർട്ട്ഫോണുകൾ പോലുള്ളവ) ലഭ്യമായ ആളുകളും അതില്ലാത്ത ആളുകളും തമ്മിലുള്ള അന്തരമാണ് ഡിജിറ്റൽ വിടവ്. ഡിജിറ്റൽ സൗകര്യങ്ങളില്ലാത്ത ആളുകൾക്ക് കാലികമായ വിവരങ്ങൾ ലഭിക്കാത്തതിനാലും ആധുനിക ജനാധിപത്യ ചർച്ചകളിൽ സജീവമായി പങ്കെടുക്കാൻ കഴിയാത്തതിനാലും ഇത് പൊതുജനാഭിപ്രായത്തെ തടസ്സപ്പെടുത്തുന്നു." }
    },
    {
      q_id: "sq10",
      question: { en: "List any four factors that hinder the proper formation of public opinion.", ml: "പൊതുജനാഭിപ്രായത്തിന്റെ ശരിയായ രൂപീകരണത്തെ തടസ്സപ്പെടുത്തുന്ന ഏതെങ്കിലും നാല് ഘടകങ്ങൾ പട്ടികപ്പെടുത്തുക." },
      answer: { en: "Illiteracy, which limits access to knowledge. Poverty, which isolates people from public affairs. Unhealthy practices and corruption during election campaigns. The Digital Divide in accessing modern communication tools.", ml: "അറിവ് നേടുന്നതിനെ പരിമിതപ്പെടുത്തുന്ന നിരക്ഷരത. ആളുകളെ പൊതു കാര്യങ്ങളിൽ നിന്ന് അകറ്റുന്ന ദാരിദ്ര്യം. തെരഞ്ഞെടുപ്പ് പ്രചാരണ വേളകളിലെ തെറ്റായ പ്രവണതകളും അഴിമതിയും. ആധുനിക ആശയവിനിമയ സംവിധാനങ്ങൾ ഉപയോഗിക്കുന്നതിലെ ഡിജിറ്റൽ വിടവ്." }
    }
  ]
};
