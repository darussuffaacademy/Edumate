import { Lesson } from './curriculum';

export const socialScience1KnowIndianSocialSystem: Lesson = {
  id: "so-soc-10-know-indian-social-system",
  title: { en: "Chapter 9: Know the Indian Social System", ml: "അധ്യായം 9: ഇന്ത്യൻ സാമൂഹിക വ്യവസ്ഥയെ അറിയുക" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Understand the features of Indian society", ml: "ഇന്ത്യൻ സമൂഹത്തിന്റെ സവിശേഷതകൾ മനസ്സിലാക്കുക" } },
    { id: "lo2", text: { en: "Analyze the caste system and its impact", ml: "ജാതിവ്യവസ്ഥയും അതിന്റെ സ്വാധീനവും വിശകലനം ചെയ്യുക" } },
    { id: "lo3", text: { en: "Identify the problems faced by tribes and scheduled castes", ml: "ഗോത്രവർഗക്കാരും പട്ടികജാതിക്കാരും നേരിടുന്ന പ്രശ്നങ്ങൾ തിരിച്ചറിയുക" } },
    { id: "lo4", text: { en: "Recognize the role of social reformers", ml: "സാമൂഹിക പരിഷ്കർത്താക്കളുടെ പങ്ക് തിരിച്ചറിയുക" } },
    { id: "lo5", text: { en: "Evaluate the social changes in India", ml: "ഇന്ത്യയിലെ സാമൂഹിക മാറ്റങ്ങളെ വിലയിരുത്തുക" } }
  ],
  content: {
    intro: { en: "This chapter explores the structure of Indian society, focusing on the caste system, tribes, and the significant changes brought about by social reformers and legislative measures.", ml: "ജാതിവ്യവസ്ഥ, ഗോത്രവർഗങ്ങൾ, സാമൂഹിക പരിഷ്കർത്താക്കളും നിയമനിർമ്മാണ നടപടികളും കൊണ്ടുവന്ന സുപ്രധാന മാറ്റങ്ങൾ എന്നിവയിൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ചുകൊണ്ട് ഇന്ത്യൻ സമൂഹത്തിന്റെ ഘടനയെ ഈ അധ്യായം പര്യവേക്ഷണം ചെയ്യുന്നു." },
    core: { en: "It highlights the diversity and complexity of Indian society and the ongoing efforts towards social equality.", ml: "ഇന്ത്യൻ സമൂഹത്തിന്റെ വൈവിധ്യവും സങ്കീർണ്ണതയും സാമൂഹിക സമത്വത്തിന് വേണ്ടിയുള്ള തുടർച്ചയായ ശ്രമങ്ങളും ഇത് എടുത്തു കാണിക്കുന്നു." },
    blocks: [
      { type: 'h2', en: 'Features of Indian Society', ml: 'ഇന്ത്യൻ സമൂഹത്തിന്റെ സവിശേഷതകൾ' },
      { type: 'p', en: "Indian society is characterized by its unity in diversity. It is a complex mix of various religions, castes, languages, and cultures.", ml: "വൈവിധ്യത്തിലെ ഏകത്വമാണ് ഇന്ത്യൻ സമൂഹത്തിന്റെ സവിശേഷത. വിവിധ മതങ്ങൾ, ജാതികൾ, ഭാഷകൾ, സംസ്കാരങ്ങൾ എന്നിവയുടെ സങ്കീർണ്ണമായ മിശ്രിതമാണിത്." },
      { type: 'ul', items: [
        { en: "Multi-religious society", ml: "ബഹുസ്വര മത സമൂഹം" },
        { en: "Multi-lingual society", ml: "ബഹുഭാഷാ സമൂഹം" },
        { en: "Caste-based stratification", ml: "ജാതി അടിസ്ഥാനത്തിലുള്ള തരംതിരിവ്" },
        { en: "Joint family system (changing to nuclear family)", ml: "കൂട്ടുകുടുംബ വ്യവസ്ഥ (അണുകുടുംബമായി മാറുന്നു)" }
      ]},

      { type: 'h2', en: 'Caste System', ml: 'ജാതിവ്യവസ്ഥ' },
      { type: 'p', en: "The caste system is a unique feature of Indian society. It is a hierarchical social structure determined by birth.", ml: "ഇന്ത്യൻ സമൂഹത്തിന്റെ ഒരു പ്രത്യേകതയാണ് ജാതിവ്യവസ്ഥ. ജനനത്താൽ നിർണ്ണയിക്കപ്പെടുന്ന ഒരു ശ്രേണീകൃത സാമൂഹിക ഘടനയാണിത്." },
      { type: 'p', en: "Historically, it divided society into four Varnas: Brahmins, Kshatriyas, Vaishyas, and Shudras. Those outside this structure were treated as 'Untouchables'.", ml: "ചരിത്രപരമായി, ഇത് സമൂഹത്തെ ബ്രാഹ്മണർ, ക്ഷത്രിയർ, വൈശ്യർ, ശൂദ്രർ എന്നിങ്ങനെ നാല് വർണ്ണങ്ങളായി തിരിച്ചു. ഈ ഘടനയ്ക്ക് പുറത്തുള്ളവരെ 'തൊട്ടുകൂടാത്തവർ' ആയി കണക്കാക്കിയിരുന്നു." },
      
      { type: 'h2', en: 'Tribes in India', ml: 'ഇന്ത്യയിലെ ഗോത്രവർഗങ്ങൾ' },
      { type: 'p', en: "Tribes (Adivasis) are the indigenous people of India. They live in forests and hilly regions and have distinct cultures, languages, and lifestyles.", ml: "ഗോത്രവർഗക്കാർ (ആദിവാസികൾ) ഇന്ത്യയിലെ തദ്ദേശീയ ജനതയാണ്. വനങ്ങളിലും മലയോര മേഖലകളിലും താമസിക്കുന്ന ഇവർക്ക് വ്യത്യസ്തമായ സംസ്കാരങ്ങളും ഭാഷകളും ജീവിതശൈലികളും ഉണ്ട്." },
      { type: 'p', en: "Major tribes in India include Gonds, Bhils, Santhals, and in Kerala, Paniyas, Kurichiyas, and Adiyas.", ml: "ഗോണ്ടുകൾ, ഭീലുകൾ, സന്താളുകൾ എന്നിവർ ഇന്ത്യയിലെ പ്രധാന ഗോത്രവർഗങ്ങളാണ്. കേരളത്തിൽ പണിയർ, കുറിച്ച്യർ, അടിയർ എന്നിവരും." },
      { type: 'p', en: "Problems faced by tribes: Land alienation, poverty, lack of education, and exploitation.", ml: "ഗോത്രവർഗക്കാർ നേരിടുന്ന പ്രശ്നങ്ങൾ: ഭൂമി നഷ്ടപ്പെടൽ, ദാരിദ്ര്യം, വിദ്യാഭ്യാസത്തിന്റെ അഭാവം, ചൂഷണം." },

      { type: 'h2', en: 'Social Reformers', ml: 'സാമൂഹിക പരിഷ്കർത്താക്കൾ' },
      { type: 'p', en: "Many reformers fought against social evils like caste discrimination, untouchability, and gender inequality.", ml: "ജാതി വിവേചനം, തൊട്ടുകൂടായ്മ, ലിംഗ അസമത്വം തുടങ്ങിയ സാമൂഹിക തിന്മകൾക്കെതിരെ നിരവധി പരിഷ്കർത്താക്കൾ പോരാടി." },
      { type: 'table', tableData: {
          headers: [{en: 'Reformer', ml: 'പരിഷ്കർത്താവ്'}, {en: 'Contribution/Movement', ml: 'സംഭാവന/പ്രസ്ഥാനം'}],
          rows: [
            [{en: 'Raja Ram Mohan Roy', ml: 'രാജാ റാം മോഹൻ റോയ്'}, {en: 'Abolition of Sati, Brahmo Samaj', ml: 'സതി നിർത്തലാക്കൽ, ബ്രഹ്മസമാജം'}],
            [{en: 'Jyotirao Phule', ml: 'ജ്യോതിറാവു ഫൂലെ'}, {en: 'Satyashodhak Samaj, Education for lower castes', ml: 'സത്യശോധക് സമാജം, താഴ്ന്ന ജാതിക്കാർക്കുള്ള വിദ്യാഭ്യാസം'}],
            [{en: 'Sree Narayana Guru', ml: 'ശ്രീനാരായണ ഗുരു'}, {en: 'Fought against casteism, "One Caste, One Religion, One God for Man"', ml: 'ജാതീയതക്കെതിരെ പോരാടി, "ഒരു ജാതി, ഒരു മതം, ഒരു ദൈവം മനുഷ്യന്"'}],
            [{en: 'Ayyankali', ml: 'അയ്യങ്കാളി'}, {en: 'Sadhu Jana Paripalana Sangham, Education for Dalits', ml: 'സാധുജന പരിപാലന സംഘം, ദളിതർക്കുള്ള വിദ്യാഭ്യാസം'}],
            [{en: 'Dr. B.R. Ambedkar', ml: 'ഡോ. ബി.ആർ. അംബേദ്കർ'}, {en: 'Architect of Constitution, Fought for Dalit rights', ml: 'ഭരണഘടനാ ശില്പി, ദളിത് അവകാശങ്ങൾക്കായി പോരാടി'}]
          ]
      }},

      { type: 'h2', en: 'Social Changes and Legislation', ml: 'സാമൂഹിക മാറ്റങ്ങളും നിയമനിർമ്മാണവും' },
      { type: 'p', en: "The Constitution of India and various laws have played a crucial role in bringing social change.", ml: "ഇന്ത്യൻ ഭരണഘടനയും വിവിധ നിയമങ്ങളും സാമൂഹിക മാറ്റം കൊണ്ടുവരുന്നതിൽ നിർണായക പങ്ക് വഹിച്ചിട്ടുണ്ട്." },
      { type: 'ul', items: [
        { en: "Abolition of Untouchability (Article 17)", ml: "തൊട്ടുകൂടായ്മ നിർത്തലാക്കൽ (ആർട്ടിക്കിൾ 17)" },
        { en: "Reservation in education and employment", ml: "വിദ്യാഭ്യാസത്തിലും തൊഴിലിലും സംവരണം" },
        { en: "Prevention of Atrocities Act (1989)", ml: "അതിക്രമങ്ങൾ തടയൽ നിയമം (1989)" },
        { en: "Right to Education Act", ml: "വിദ്യാഭ്യാസ അവകാശ നിയമം" }
      ]}
    ]
  },
  glossary: [
    { word: { en: "Social Stratification", ml: "സാമൂഹിക ശ്രേണീകരണം" }, definition: { en: "Categorization of people into groups based on socioeconomic factors like wealth, income, race, education, ethnicity, gender, occupation, social status, or derived power.", ml: "സമ്പത്ത്, വരുമാനം, വംശം, വിദ്യാഭ്യാസം, ലിംഗഭേദം, തൊഴിൽ, സാമൂഹിക പദവി തുടങ്ങിയ ഘടകങ്ങളുടെ അടിസ്ഥാനത്തിൽ ആളുകളെ വിവിധ വിഭാഗങ്ങളായി തരംതിരിക്കുന്നതിനെ സാമൂഹിക ശ്രേണീകരണം എന്ന് വിളിക്കുന്നു." } },
    { word: { en: "Untouchability", ml: "തൊട്ടുകൂടായ്മ" }, definition: { en: "The practice of ostracizing a group by segregating them from the mainstream by social custom or legal mandate.", ml: "സാമൂഹിക ആചാരങ്ങളാലോ നിയമപരമായോ ഒരു വിഭാഗത്തെ മുഖ്യധാരയിൽ നിന്ന് മാറ്റിനിർത്തി ഭ്രഷ്ട് കൽപ്പിക്കുന്ന രീതി." } },
    { word: { en: "Reservation", ml: "സംവരണം" }, definition: { en: "A system of affirmative action in India that provides representation for historically and socially disadvantaged groups in education and employment.", ml: "ചരിത്രപരമായും സാമൂഹികമായും പിന്നാക്കം നിൽക്കുന്ന വിഭാഗങ്ങൾക്ക് വിദ്യാഭ്യാസത്തിലും തൊഴിലിലും പ്രാതിനിധ്യം നൽകുന്ന ഇന്ത്യയിലെ ഒരു സംവിധാനം." } }
  ],
  quiz: [
    {
      q_id: "901",
      question: { en: "Who founded the 'Brahmo Samaj'?", ml: "'ബ്രഹ്മസമാജം' സ്ഥാപിച്ചത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Swami Vivekananda", ml: "സ്വാമി വിവേകാനന്ദൻ" } },
        { id: "opt2", text: { en: "Raja Ram Mohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } },
        { id: "opt3", text: { en: "Dayananda Saraswati", ml: "ദയാനന്ദ സരസ്വതി" } },
        { id: "opt4", text: { en: "Ishwar Chandra Vidyasagar", ml: "ഈശ്വർ ചന്ദ്ര വിദ്യാസാഗർ" } }
      ],
      answer: { id: "opt2", text: { en: "Raja Ram Mohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } }
    },
    {
      q_id: "902",
      question: { en: "Which article of the Indian Constitution abolished untouchability?", ml: "ഇന്ത്യൻ ഭരണഘടനയിലെ ഏത് അനുച്ഛേദമാണ് തൊട്ടുകൂടായ്മ നിർത്തലാക്കിയത്?" },
      options: [
        { id: "opt1", text: { en: "Article 14", ml: "ആർട്ടിക്കിൾ 14" } },
        { id: "opt2", text: { en: "Article 17", ml: "ആർട്ടിക്കിൾ 17" } },
        { id: "opt3", text: { en: "Article 19", ml: "ആർട്ടിക്കിൾ 19" } },
        { id: "opt4", text: { en: "Article 21", ml: "ആർട്ടിക്കിൾ 21" } }
      ],
      answer: { id: "opt2", text: { en: "Article 17", ml: "ആർട്ടിക്കിൾ 17" } }
    },
    {
      q_id: "903",
      question: { en: "Who gave the message \"One Caste, One Religion, One God for Man\"?", ml: "\"ഒരു ജാതി, ഒരു മതം, ഒരു ദൈവം മനുഷ്യന്\" എന്ന സന്ദേശം നൽകിയത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Sree Narayana Guru", ml: "ശ്രീനാരായണ ഗുരു" } },
        { id: "opt2", text: { en: "Chattampi Swamikal", ml: "ചട്ടമ്പി സ്വാമികൾ" } },
        { id: "opt3", text: { en: "Ayyankali", ml: "അയ്യങ്കാളി" } },
        { id: "opt4", text: { en: "Sahodaran Ayyappan", ml: "സഹോദരൻ അയ്യപ്പൻ" } }
      ],
      answer: { id: "opt1", text: { en: "Sree Narayana Guru", ml: "ശ്രീനാരായണ ഗുരു" } }
    },
    {
      q_id: "904",
      question: { en: "Which organization was founded by Ayyankali?", ml: "അയ്യങ്കാളി സ്ഥാപിച്ച സംഘടന ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "SNDP Yogam", ml: "എസ്.എൻ.ഡി.പി യോഗം" } },
        { id: "opt2", text: { en: "NSS", ml: "എൻ.എസ്.എസ്" } },
        { id: "opt3", text: { en: "Sadhu Jana Paripalana Sangham", ml: "സാധുജന പരിപാലന സംഘം" } },
        { id: "opt4", text: { en: "Yogakshema Sabha", ml: "യോഗക്ഷേമ സഭ" } }
      ],
      answer: { id: "opt3", text: { en: "Sadhu Jana Paripalana Sangham", ml: "സാധുജന പരിപാലന സംഘം" } }
    },
    {
      q_id: "905",
      question: { en: "Who founded 'Satyashodhak Samaj'?", ml: "'സത്യശോധക് സമാജം' സ്ഥാപിച്ചത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Jyotirao Phule", ml: "ജ്യോതിറാവു ഫൂലെ" } },
        { id: "opt2", text: { en: "B.R. Ambedkar", ml: "ബി.ആർ. അംബേദ്കർ" } },
        { id: "opt3", text: { en: "Periyar E.V. Ramasamy", ml: "പെരിയാർ ഇ.വി. രാമസാമി" } },
        { id: "opt4", text: { en: "Kandukuri Veeresalingam", ml: "കന്ദുകുരി വീരേശലിംഗം" } }
      ],
      answer: { id: "opt1", text: { en: "Jyotirao Phule", ml: "ജ്യോതിറാവു ഫൂലെ" } }
    },
    {
      q_id: "906",
      question: { en: "Which is the largest tribe in India?", ml: "ഇന്ത്യയിലെ ഏറ്റവും വലിയ ഗോത്രവർഗ്ഗം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Gonds", ml: "ഗോണ്ടുകൾ" } },
        { id: "opt2", text: { en: "Bhils", ml: "ഭീലുകൾ" } },
        { id: "opt3", text: { en: "Santhals", ml: "സന്താളുകൾ" } },
        { id: "opt4", text: { en: "Mundas", ml: "മുണ്ടകൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Bhils", ml: "ഭീലുകൾ" } }
    },
    {
      q_id: "907",
      question: { en: "The practice of Sati was abolished by the efforts of:", ml: "സതി നിർത്തലാക്കിയത് ആരുടെ ശ്രമഫലമായാണ്?" },
      options: [
        { id: "opt1", text: { en: "Raja Ram Mohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } },
        { id: "opt2", text: { en: "Swami Dayananda Saraswati", ml: "സ്വാമി ദയാനന്ദ സരസ്വതി" } },
        { id: "opt3", text: { en: "Annie Besant", ml: "ആനി ബസന്റ്" } },
        { id: "opt4", text: { en: "Ramakrishna Paramahamsa", ml: "രാമകൃഷ്ണ പരമഹംസർ" } }
      ],
      answer: { id: "opt1", text: { en: "Raja Ram Mohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } }
    },
    {
      q_id: "908",
      question: { en: "Who was the Chairman of the Drafting Committee of the Indian Constitution?", ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ ഡ്രാഫ്റ്റിംഗ് കമ്മിറ്റിയുടെ ചെയർമാൻ ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } },
        { id: "opt2", text: { en: "Dr. B.R. Ambedkar", ml: "ഡോ. ബി.ആർ. അംബേദ്കർ" } },
        { id: "opt3", text: { en: "Sardar Patel", ml: "സർദാർ പട്ടേൽ" } },
        { id: "opt4", text: { en: "Dr. Rajendra Prasad", ml: "ഡോ. രാജേന്ദ്ര പ്രസാദ്" } }
      ],
      answer: { id: "opt2", text: { en: "Dr. B.R. Ambedkar", ml: "ഡോ. ബി.ആർ. അംബേദ്കർ" } }
    },
    {
      q_id: "909",
      question: { en: "What is the main problem faced by tribal people due to development projects?", ml: "വികസന പദ്ധതികൾ കാരണം ഗോത്രവർഗക്കാർ നേരിടുന്ന പ്രധാന പ്രശ്നം എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Pollution", ml: "മലിനീകരണം" } },
        { id: "opt2", text: { en: "Land Alienation and Displacement", ml: "ഭൂമി നഷ്ടപ്പെടലും കുടിയിറക്കപ്പെടലും" } },
        { id: "opt3", text: { en: "Urbanization", ml: "നഗരവൽക്കരണം" } },
        { id: "opt4", text: { en: "Overpopulation", ml: "ജനസംഖ്യാ വർദ്ധനവ്" } }
      ],
      answer: { id: "opt2", text: { en: "Land Alienation and Displacement", ml: "ഭൂമി നഷ്ടപ്പെടലും കുടിയിറക്കപ്പെടലും" } }
    },
    {
      q_id: "910",
      question: { en: "Which of the following is NOT a feature of the caste system?", ml: "താഴെ പറയുന്നവയിൽ ജാതിവ്യവസ്ഥയുടെ സവിശേഷത അല്ലാത്തത് ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Hierarchy", ml: "ശ്രേണീകരണം" } },
        { id: "opt2", text: { en: "Endogamy", ml: "സ്വജാതി വിവാഹം" } },
        { id: "opt3", text: { en: "Social Mobility", ml: "സാമൂഹിക ചലനാത്മകത" } },
        { id: "opt4", text: { en: "Hereditary Occupation", ml: "പാരമ്പര്യ തൊഴിൽ" } }
      ],
      answer: { id: "opt3", text: { en: "Social Mobility", ml: "സാമൂഹിക ചലനാത്മകത" } }
    },
    {
      q_id: "911",
      question: { en: "The 'Prevention of Atrocities Act' was passed in which year?", ml: "'അതിക്രമങ്ങൾ തടയൽ നിയമം' പാസാക്കിയ വർഷം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "1955", ml: "1955" } },
        { id: "opt2", text: { en: "1976", ml: "1976" } },
        { id: "opt3", text: { en: "1989", ml: "1989" } },
        { id: "opt4", text: { en: "2005", ml: "2005" } }
      ],
      answer: { id: "opt3", text: { en: "1989", ml: "1989" } }
    },
    {
      q_id: "912",
      question: { en: "Who led the 'Temple Entry Movement' in Kerala?", ml: "കേരളത്തിൽ 'ക്ഷേത്രപ്രവേശന പ്രക്ഷോഭത്തിന്' നേതൃത്വം നൽകിയവരിൽ പ്രധാനി ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "T.K. Madhavan", ml: "ടി.കെ. മാധവൻ" } },
        { id: "opt2", text: { en: "Mannathu Padmanabhan", ml: "മന്നത്ത് പത്മനാഭൻ" } },
        { id: "opt3", text: { en: "K. Kelappan", ml: "കെ. കേളപ്പൻ" } },
        { id: "opt4", text: { en: "All of the above", ml: "മുകളിൽ പറഞ്ഞവരെല്ലാം" } }
      ],
      answer: { id: "opt4", text: { en: "All of the above", ml: "മുകളിൽ പറഞ്ഞവരെല്ലാം" } }
    },
    {
      q_id: "913",
      question: { en: "Which social reformer is associated with the 'Self-Respect Movement'?", ml: "'സ്വയമര്യാദ പ്രസ്ഥാനവുമായി' (Self-Respect Movement) ബന്ധപ്പെട്ട സാമൂഹിക പരിഷ്കർത്താവ് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Periyar E.V. Ramasamy", ml: "പെരിയാർ ഇ.വി. രാമസാമി" } },
        { id: "opt2", text: { en: "C.N. Annadurai", ml: "സി.എൻ. അണ്ണാദുരൈ" } },
        { id: "opt3", text: { en: "Subramania Bharati", ml: "സുബ്രഹ്മണ്യ ഭാരതി" } },
        { id: "opt4", text: { en: "Veerapandiya Kattabomman", ml: "വീരപാണ്ഡ്യ കട്ടബൊമ്മൻ" } }
      ],
      answer: { id: "opt1", text: { en: "Periyar E.V. Ramasamy", ml: "പെരിയാർ ഇ.വി. രാമസാമി" } }
    },
    {
      q_id: "914",
      question: { en: "The 'Untouchability (Offences) Act' was passed in:", ml: "'തൊട്ടുകൂടായ്മ (കുറ്റകൃത്യങ്ങൾ) നിയമം' പാസാക്കിയത്:" },
      options: [
        { id: "opt1", text: { en: "1947", ml: "1947" } },
        { id: "opt2", text: { en: "1950", ml: "1950" } },
        { id: "opt3", text: { en: "1955", ml: "1955" } },
        { id: "opt4", text: { en: "1961", ml: "1961" } }
      ],
      answer: { id: "opt3", text: { en: "1955", ml: "1955" } }
    },
    {
      q_id: "915",
      question: { en: "Which of the following is a major tribe in Kerala?", ml: "താഴെ പറയുന്നവയിൽ കേരളത്തിലെ ഒരു പ്രധാന ഗോത്രവർഗ്ഗം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Santhals", ml: "സന്താളുകൾ" } },
        { id: "opt2", text: { en: "Gonds", ml: "ഗോണ്ടുകൾ" } },
        { id: "opt3", text: { en: "Paniyas", ml: "പണിയർ" } },
        { id: "opt4", text: { en: "Mundas", ml: "മുണ്ടകൾ" } }
      ],
      answer: { id: "opt3", text: { en: "Paniyas", ml: "പണിയർ" } }
    },
    {
      q_id: "916",
      question: { en: "Who established 'Prarthana Samaj'?", ml: "'പ്രാർത്ഥന സമാജം' സ്ഥാപിച്ചത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Atmaram Pandurang", ml: "ആത്മാറാം പാണ്ഡുരംഗ്" } },
        { id: "opt2", text: { en: "Raja Ram Mohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } },
        { id: "opt3", text: { en: "Swami Vivekananda", ml: "സ്വാമി വിവേകാനന്ദൻ" } },
        { id: "opt4", text: { en: "Dayananda Saraswati", ml: "ദയാനന്ദ സരസ്വതി" } }
      ],
      answer: { id: "opt1", text: { en: "Atmaram Pandurang", ml: "ആത്മാറാം പാണ്ഡുരംഗ്" } }
    },
    {
      q_id: "917",
      question: { en: "The 'Widow Remarriage Act' was passed in:", ml: "'വിധവാ വിവാഹ നിയമം' പാസാക്കിയത്:" },
      options: [
        { id: "opt1", text: { en: "1829", ml: "1829" } },
        { id: "opt2", text: { en: "1856", ml: "1856" } },
        { id: "opt3", text: { en: "1929", ml: "1929" } },
        { id: "opt4", text: { en: "1955", ml: "1955" } }
      ],
      answer: { id: "opt2", text: { en: "1856", ml: "1856" } }
    },
    {
      q_id: "918",
      question: { en: "Who wrote the book 'Gulamgiri'?", ml: "'ഗുലാംഗിരി' എന്ന പുസ്തകം എഴുതിയത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "B.R. Ambedkar", ml: "ബി.ആർ. അംബേദ്കർ" } },
        { id: "opt2", text: { en: "Jyotirao Phule", ml: "ജ്യോതിറാവു ഫൂലെ" } },
        { id: "opt3", text: { en: "Periyar", ml: "പെരിയാർ" } },
        { id: "opt4", text: { en: "Narayana Guru", ml: "നാരായണ ഗുരു" } }
      ],
      answer: { id: "opt2", text: { en: "Jyotirao Phule", ml: "ജ്യോതിറാവു ഫൂലെ" } }
    },
    {
      q_id: "919",
      question: { en: "Which social reformer is known as the 'Father of Modern India'?", ml: "'ആധുനിക ഇന്ത്യയുടെ പിതാവ്' എന്നറിയപ്പെടുന്ന സാമൂഹിക പരിഷ്കർത്താവ് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Swami Vivekananda", ml: "സ്വാമി വിവേകാനന്ദൻ" } },
        { id: "opt2", text: { en: "Raja Ram Mohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } },
        { id: "opt3", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാഗാന്ധി" } },
        { id: "opt4", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } }
      ],
      answer: { id: "opt2", text: { en: "Raja Ram Mohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } }
    },
    {
      q_id: "920",
      question: { en: "The 'Vaikom Satyagraha' was related to:", ml: "'വൈക്കം സത്യാഗ്രഹം' എന്തുമായി ബന്ധപ്പെട്ടതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Freedom struggle", ml: "സ്വാതന്ത്ര്യ സമരം" } },
        { id: "opt2", text: { en: "Temple entry for lower castes", ml: "താഴ്ന്ന ജാതിക്കാർക്ക് ക്ഷേത്രപ്രവേശനം" } },
        { id: "opt3", text: { en: "Farmers' rights", ml: "കർഷകരുടെ അവകാശങ്ങൾ" } },
        { id: "opt4", text: { en: "Women's education", ml: "സ്ത്രീ വിദ്യാഭ്യാസം" } }
      ],
      answer: { id: "opt2", text: { en: "Temple entry for lower castes", ml: "താഴ്ന്ന ജാതിക്കാർക്ക് ക്ഷേത്രപ്രവേശനം" } }
    }
  ]
};
