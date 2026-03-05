import { Lesson } from './curriculum';

export const socialScience1DemocracyIndianExperience: Lesson = {
  id: "so-pol-10-democracy-indian-experience",
  title: { en: "Chapter 8: Democracy An Indian Experience", ml: "അധ്യായം 8: ജനാധിപത്യം ഒരു ഇന്ത്യൻ അനുഭവം" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Understand the concept and types of democracy", ml: "ജനാധിപത്യം എന്ന ആശയവും അതിന്റെ വിവിധ രൂപങ്ങളും മനസ്സിലാക്കുക" } },
    { id: "lo2", text: { en: "Analyze the election process in India", ml: "ഇന്ത്യയിലെ തിരഞ്ഞെടുപ്പ് പ്രക്രിയ വിശകലനം ചെയ്യുക" } },
    { id: "lo3", text: { en: "Identify the role of political parties", ml: "രാഷ്ട്രീയ പാർട്ടികളുടെ പങ്ക് തിരിച്ചറിയുക" } },
    { id: "lo4", text: { en: "Examine the challenges faced by Indian democracy", ml: "ഇന്ത്യൻ ജനാധിപത്യം നേരിടുന്ന വെല്ലുവിളികൾ പരിശോധിക്കുക" } },
    { id: "lo5", text: { en: "Suggest measures to strengthen democracy", ml: "ജനാധിപത്യത്തെ ശക്തിപ്പെടുത്താനുള്ള മാർഗ്ഗങ്ങൾ നിർദ്ദേശിക്കുക" } }
  ],
  content: {
    intro: { en: "This chapter discusses the meaning of democracy, its forms, the electoral process in India, the role of political parties, and the challenges faced by Indian democracy.", ml: "ജനാധിപത്യത്തിന്റെ അർത്ഥം, അതിന്റെ രൂപങ്ങൾ, ഇന്ത്യയിലെ തിരഞ്ഞെടുപ്പ് പ്രക്രിയ, രാഷ്ട്രീയ പാർട്ടികളുടെ പങ്ക്, ഇന്ത്യൻ ജനാധിപത്യം നേരിടുന്ന വെല്ലുവിളികൾ എന്നിവ ഈ അധ്യായം ചർച്ച ചെയ്യുന്നു." },
    core: { en: "It emphasizes the importance of free and fair elections and the active participation of citizens in a democratic system.", ml: "സ്വതന്ത്രവും നീതിയുക്തവുമായ തിരഞ്ഞെടുപ്പിന്റെയും ജനാധിപത്യ സംവിധാനത്തിൽ പൗരന്മാരുടെ സജീവ പങ്കാളിത്തത്തിന്റെയും പ്രാധാന്യം ഇത് ഊന്നിപ്പറയുന്നു." },
    blocks: [
      { type: 'h2', en: 'Concept of Democracy', ml: 'ജനാധിപത്യം എന്ന ആശയം' },
      { type: 'p', en: "The term 'Democracy' is derived from two Greek words 'Demos' (people) and 'Kratos' (power), meaning 'Power of the People'.", ml: "'ഡെമോസ്' (ജനങ്ങള്), 'ക്രാറ്റോസ്' (അധികാരം) എന്നീ രണ്ട് ഗ്രീക്ക് വാക്കുകളിൽ നിന്നാണ് 'ഡെമോക്രസി' (ജനാധിപത്യം) എന്ന പദം ഉണ്ടായത്. ഇതിനർത്ഥം 'ജനങ്ങളുടെ അധികാരം' എന്നാണ്." },
      { type: 'p', en: "Abraham Lincoln defined democracy as \"Government of the people, by the people, for the people.\"", ml: "\"ജനങ്ങളാൽ, ജനങ്ങൾക്ക് വേണ്ടി, ജനങ്ങൾ നടത്തുന്ന ഗവൺമെന്റാണ് ജനാധിപത്യം\" എന്ന് എബ്രഹാം ലിങ്കൺ ജനാധിപത്യത്തെ നിർവചിച്ചു." },
      
      { type: 'h2', en: 'Types of Democracy', ml: 'ജനാധിപത്യത്തിന്റെ രൂപങ്ങൾ' },
      { type: 'p', en: "Democracy is mainly classified into two types: Direct Democracy and Indirect (Representative) Democracy.", ml: "ജനാധിപത്യത്തെ പ്രധാനമായും രണ്ടായി തരംതിരിക്കാം: നേരിട്ടുള്ള ജനാധിപത്യം (Direct Democracy), പരോക്ഷ ജനാധിപത്യം (Indirect Democracy) അഥവാ പ്രാതിനിധ്യ ജനാധിപത്യം." },
      { type: 'table', tableData: {
          headers: [{en: 'Type', ml: 'തരം'}, {en: 'Description', ml: 'വിവരണം'}, {en: 'Example', ml: 'ഉദാഹരണം'}],
          rows: [
            [{en: 'Direct Democracy', ml: 'നേരിട്ടുള്ള ജനാധിപത്യം'}, {en: 'People directly participate in the decision-making process.', ml: 'തീരുമാനമെടുക്കൽ പ്രക്രിയയിൽ ജനങ്ങൾ നേരിട്ട് പങ്കെടുക്കുന്നു.'}, {en: 'Ancient Greece, Switzerland (Cantons)', ml: 'പ്രാചീന ഗ്രീസ്, സ്വിറ്റ്സർലൻഡ് (കാന്റണുകൾ)'}],
            [{en: 'Indirect Democracy', ml: 'പരോക്ഷ ജനാധിപത്യം'}, {en: 'People elect representatives to make decisions on their behalf.', ml: 'തങ്ങൾക്ക് വേണ്ടി തീരുമാനങ്ങളെടുക്കാൻ ജനങ്ങൾ പ്രതിനിധികളെ തിരഞ്ഞെടുക്കുന്നു.'}, {en: 'India, USA, UK', ml: 'ഇന്ത്യ, യുഎസ്എ, യുകെ'}]
          ]
      }},

      { type: 'h2', en: 'Elections in India', ml: 'ഇന്ത്യയിലെ തിരഞ്ഞെടുപ്പ്' },
      { type: 'p', en: "Elections are the hallmark of democracy. In India, elections are conducted by an independent constitutional body called the Election Commission of India.", ml: "തിരഞ്ഞെടുപ്പുകൾ ജനാധിപത്യത്തിന്റെ മുഖമുദ്രയാണ്. ഇന്ത്യയിൽ, തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ എന്ന സ്വതന്ത്ര ഭരണഘടനാ സ്ഥാപനമാണ് തിരഞ്ഞെടുപ്പുകൾ നടത്തുന്നത്." },
      { type: 'p', en: "Article 324 of the Constitution provides for the Election Commission. It consists of a Chief Election Commissioner and two other Election Commissioners, appointed by the President.", ml: "ഭരണഘടനയുടെ 324-ാം അനുച്ഛേദം തിരഞ്ഞെടുപ്പ് കമ്മീഷനെക്കുറിച്ച് പ്രതിപാദിക്കുന്നു. രാഷ്ട്രപതി നിയമിക്കുന്ന ഒരു മുഖ്യ തിരഞ്ഞെടുപ്പ് കമ്മീഷണറും മറ്റ് രണ്ട് തിരഞ്ഞെടുപ്പ് കമ്മീഷണർമാരും ഇതിൽ ഉൾപ്പെടുന്നു." },
      { type: 'p', en: "Universal Adult Franchise: Every citizen who has completed 18 years of age has the right to vote without any discrimination.", ml: "പ്രായപൂർത്തി വോട്ടവകാശം: 18 വയസ്സ് പൂർത്തിയായ എല്ലാ പൗരന്മാർക്കും വിവേചനമില്ലാതെ വോട്ട് ചെയ്യാനുള്ള അവകാശമുണ്ട്." },

      { type: 'h2', en: 'Political Parties', ml: 'രാഷ്ട്രീയ പാർട്ടികൾ' },
      { type: 'p', en: "Political parties are essential for the functioning of a democracy. They contest elections, form the government, or function as the opposition.", ml: "ജനാധിപത്യത്തിന്റെ പ്രവർത്തനത്തിന് രാഷ്ട്രീയ പാർട്ടികൾ അത്യന്താപേക്ഷിതമാണ്. അവർ തിരഞ്ഞെടുപ്പിൽ മത്സരിക്കുകയും സർക്കാർ രൂപീകരിക്കുകയും അല്ലെങ്കിൽ പ്രതിപക്ഷമായി പ്രവർത്തിക്കുകയും ചെയ്യുന്നു." },
      { type: 'p', en: "In India, there is a multi-party system. Parties are classified into National Parties and State Parties based on their performance in elections.", ml: "ഇന്ത്യയിൽ ബഹുകക്ഷി സമ്പ്രദായമാണുള്ളത്. തിരഞ്ഞെടുപ്പിലെ പ്രകടനത്തിന്റെ അടിസ്ഥാനത്തിൽ പാർട്ടികളെ ദേശീയ പാർട്ടികൾ എന്നും സംസ്ഥാന പാർട്ടികൾ എന്നും തരംതിരിച്ചിരിക്കുന്നു." },
      
      { type: 'h2', en: 'Challenges to Indian Democracy', ml: 'ഇന്ത്യൻ ജനാധിപത്യം നേരിടുന്ന വെല്ലുവിളികൾ' },
      { type: 'p', en: "Despite being the largest democracy, India faces several challenges:", ml: "ഏറ്റവും വലിയ ജനാധിപത്യ രാജ്യമാണെങ്കിലും ഇന്ത്യ നിരവധി വെല്ലുവിളികൾ നേരിടുന്നു:" },
      { type: 'ul', items: [
        { en: "Illiteracy: Lack of education hinders informed decision-making.", ml: "നിരക്ഷരത: വിദ്യാഭ്യാസത്തിന്റെ അഭാവം ശരിയായ തീരുമാനമെടുക്കുന്നതിന് തടസ്സമാകുന്നു." },
        { en: "Poverty: Economic inequality affects the democratic process.", ml: "ദാരിദ്ര്യം: സാമ്പത്തിക അസമത്വം ജനാധിപത്യ പ്രക്രിയയെ ബാധിക്കുന്നു." },
        { en: "Casteism and Communalism: Divisive forces that threaten unity.", ml: "ജാതീയതയും വർഗീയതയും: ഐക്യത്തിന് ഭീഷണിയാകുന്ന വിഘടന ശക്തികൾ." },
        { en: "Regionalism: Excessive loyalty to one's region over the nation.", ml: "പ്രാദേശികവാദം: രാഷ്ട്രത്തേക്കാൾ സ്വന്തം പ്രദേശത്തോടുള്ള അമിത കൂറ്." },
        { en: "Criminalization of Politics: Involvement of people with criminal backgrounds in politics.", ml: "രാഷ്ട്രീയത്തിന്റെ ക്രിമിനൽവൽക്കരണം: ക്രിമിനൽ പശ്ചാത്തലമുള്ളവർ രാഷ്ട്രീയത്തിൽ ഇടപെടുന്നത്." }
      ]},

      { type: 'h2', en: 'Measures to Strengthen Democracy', ml: 'ജനാധിപത്യത്തെ ശക്തിപ്പെടുത്താനുള്ള മാർഗ്ഗങ്ങൾ' },
      { type: 'p', en: "To strengthen democracy, we need:", ml: "ജനാധിപത്യത്തെ ശക്തിപ്പെടുത്താൻ നമുക്ക് ആവശ്യമാണ്:" },
      { type: 'ul', items: [
        { en: "Spread of Education and Political Awareness.", ml: "വിദ്യാഭ്യാസത്തിന്റെയും രാഷ്ട്രീയ അവബോധത്തിന്റെയും വ്യാപനം." },
        { en: "Economic Equality and Social Justice.", ml: "സാമ്പത്തിക സമത്വവും സാമൂഹിക നീതിയും." },
        { en: "Active Participation of People.", ml: "ജനങ്ങളുടെ സജീവ പങ്കാളിത്തം." },
        { en: "Free and Fair Media.", ml: "സ്വതന്ത്രവും നീതിയുക്തവുമായ മാധ്യമങ്ങൾ." },
        { en: "Electoral Reforms.", ml: "തിരഞ്ഞെടുപ്പ് പരിഷ്കാരങ്ങൾ." }
      ]}
    ]
  },
  glossary: [
    { word: { en: "Democracy", ml: "ജനാധിപത്യം" }, definition: { en: "A system of government by the whole population or all the eligible members of a state, typically through elected representatives.", ml: "ജനങ്ങളാൽ തിരഞ്ഞെടുക്കപ്പെട്ട പ്രതിനിധികളിലൂടെ ഭരണം നടത്തുന്ന സമ്പ്രദായം." } },
    { word: { en: "Republic", ml: "റിപ്പബ്ലിക്" }, definition: { en: "A state in which supreme power is held by the people and their elected representatives, and which has an elected or nominated president rather than a monarch.", ml: "രാജാവിന് പകരം തിരഞ്ഞെടുക്കപ്പെട്ട രാഷ്ട്രത്തലവനുള്ള രാജ്യം." } },
    { word: { en: "Franchise", ml: "വോട്ടവകാശം" }, definition: { en: "The right to vote in public elections.", ml: "പൊതു തിരഞ്ഞെടുപ്പുകളിൽ വോട്ട് ചെയ്യാനുള്ള അവകാശം." } },
    { word: { en: "Coalition Government", ml: "മുന്നണി ഭരണം" }, definition: { en: "A government formed by multiple political parties cooperating when no single party gets a majority.", ml: "ഒരു പാർട്ടിക്കും ഭൂരിപക്ഷം ലഭിക്കാത്തപ്പോൾ ഒന്നിലധികം രാഷ്ട്രീയ പാർട്ടികൾ ചേർന്ന് രൂപീകരിക്കുന്ന സർക്കാർ." } }
  ],
  quiz: [
    {
      q_id: "801",
      question: { en: "The word 'Democracy' is derived from which language?", ml: "'ജനാധിപത്യം' (Democracy) എന്ന വാക്ക് ഏത് ഭാഷയിൽ നിന്നാണ് ഉത്ഭവിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Latin", ml: "ലാറ്റിൻ" } },
        { id: "opt2", text: { en: "Greek", ml: "ഗ്രീക്ക്" } },
        { id: "opt3", text: { en: "French", ml: "ഫ്രഞ്ച്" } },
        { id: "opt4", text: { en: "Sanskrit", ml: "സംസ്കൃതം" } }
      ],
      answer: { id: "opt2", text: { en: "Greek", ml: "ഗ്രീക്ക്" } }
    },
    {
      q_id: "802",
      question: { en: "Who defined democracy as \"Government of the people, by the people, for the people\"?", ml: "\"ജനങ്ങളാൽ, ജനങ്ങൾക്ക് വേണ്ടി, ജനങ്ങൾ നടത്തുന്ന ഗവൺമെന്റാണ് ജനാധിപത്യം\" എന്ന് നിർവചിച്ചത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാഗാന്ധി" } },
        { id: "opt2", text: { en: "Abraham Lincoln", ml: "എബ്രഹാം ലിങ്കൺ" } },
        { id: "opt3", text: { en: "Winston Churchill", ml: "വിൻസ്റ്റൺ ചർച്ചിൽ" } },
        { id: "opt4", text: { en: "Karl Marx", ml: "കാറൽ മാർക്സ്" } }
      ],
      answer: { id: "opt2", text: { en: "Abraham Lincoln", ml: "എബ്രഹാം ലിങ്കൺ" } }
    },
    {
      q_id: "803",
      question: { en: "Which country is an example of Direct Democracy?", ml: "നേരിട്ടുള്ള ജനാധിപത്യത്തിന് ഉദാഹരണമായ രാജ്യം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "India", ml: "ഇന്ത്യ" } },
        { id: "opt2", text: { en: "USA", ml: "യുഎസ്എ" } },
        { id: "opt3", text: { en: "Switzerland", ml: "സ്വിറ്റ്സർലൻഡ്" } },
        { id: "opt4", text: { en: "UK", ml: "യുകെ" } }
      ],
      answer: { id: "opt3", text: { en: "Switzerland", ml: "സ്വിറ്റ്സർലൻഡ്" } }
    },
    {
      q_id: "804",
      question: { en: "What is the minimum age for voting in India?", ml: "ഇന്ത്യയിൽ വോട്ട് ചെയ്യാനുള്ള കുറഞ്ഞ പ്രായം എത്രയാണ്?" },
      options: [
        { id: "opt1", text: { en: "21 years", ml: "21 വയസ്സ്" } },
        { id: "opt2", text: { en: "18 years", ml: "18 വയസ്സ്" } },
        { id: "opt3", text: { en: "25 years", ml: "25 വയസ്സ്" } },
        { id: "opt4", text: { en: "16 years", ml: "16 വയസ്സ്" } }
      ],
      answer: { id: "opt2", text: { en: "18 years", ml: "18 വയസ്സ്" } }
    },
    {
      q_id: "805",
      question: { en: "Who appoints the Chief Election Commissioner of India?", ml: "ഇന്ത്യയിലെ മുഖ്യ തിരഞ്ഞെടുപ്പ് കമ്മീഷണറെ നിയമിക്കുന്നത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { id: "opt2", text: { en: "Chief Justice of India", ml: "സുപ്രീം കോടതി ചീഫ് ജസ്റ്റിസ്" } },
        { id: "opt3", text: { en: "President", ml: "രാഷ്ട്രപതി" } },
        { id: "opt4", text: { en: "Parliament", ml: "പാർലമെന്റ്" } }
      ],
      answer: { id: "opt3", text: { en: "President", ml: "രാഷ്ട്രപതി" } }
    },
    {
      q_id: "806",
      question: { en: "Which article of the Constitution deals with the Election Commission?", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷനെക്കുറിച്ച് പ്രതിപാദിക്കുന്ന ഭരണഘടനാ അനുച്ഛേദം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Article 324", ml: "ആർട്ടിക്കിൾ 324" } },
        { id: "opt2", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } },
        { id: "opt3", text: { en: "Article 370", ml: "ആർട്ടിക്കിൾ 370" } },
        { id: "opt4", text: { en: "Article 21", ml: "ആർട്ടിക്കിൾ 21" } }
      ],
      answer: { id: "opt1", text: { en: "Article 324", ml: "ആർട്ടിക്കിൾ 324" } }
    },
    {
      q_id: "807",
      question: { en: "What type of party system exists in India?", ml: "ഇന്ത്യയിൽ നിലനിൽക്കുന്ന പാർട്ടി സമ്പ്രദായം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "One-party system", ml: "ഏകകക്ഷി സമ്പ്രദായം" } },
        { id: "opt2", text: { en: "Two-party system", ml: "ദ്വികക്ഷി സമ്പ്രദായം" } },
        { id: "opt3", text: { en: "Multi-party system", ml: "ബഹുകക്ഷി സമ്പ്രദായം" } },
        { id: "opt4", text: { en: "None of the above", ml: "മുകളിൽ പറഞ്ഞവ ഒന്നുമല്ല" } }
      ],
      answer: { id: "opt3", text: { en: "Multi-party system", ml: "ബഹുകക്ഷി സമ്പ്രദായം" } }
    },
    {
      q_id: "808",
      question: { en: "Which of the following is NOT a challenge to Indian democracy?", ml: "താഴെ പറയുന്നവയിൽ ഇന്ത്യൻ ജനാധിപത്യം നേരിടുന്ന വെല്ലുവിളി അല്ലാത്തത് ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Illiteracy", ml: "നിരക്ഷരത" } },
        { id: "opt2", text: { en: "Communalism", ml: "വർഗീയത" } },
        { id: "opt3", text: { en: "Active participation of people", ml: "ജനങ്ങളുടെ സജീവ പങ്കാളിത്തം" } },
        { id: "opt4", text: { en: "Regionalism", ml: "പ്രാദേശികവാദം" } }
      ],
      answer: { id: "opt3", text: { en: "Active participation of people", ml: "ജനങ്ങളുടെ സജീവ പങ്കാളിത്തം" } }
    },
    {
      q_id: "809",
      question: { en: "The right to vote is a __________ right.", ml: "വോട്ട് ചെയ്യാനുള്ള അവകാശം ഒരു __________ അവകാശമാണ്." },
      options: [
        { id: "opt1", text: { en: "Fundamental", ml: "മൗലിക" } },
        { id: "opt2", text: { en: "Political", ml: "രാഷ്ട്രീയ" } },
        { id: "opt3", text: { en: "Economic", ml: "സാമ്പത്തിക" } },
        { id: "opt4", text: { en: "Social", ml: "സാമൂഹിക" } }
      ],
      answer: { id: "opt2", text: { en: "Political", ml: "രാഷ്ട്രീയ" } }
    },
    {
      q_id: "810",
      question: { en: "Which body recognizes political parties in India?", ml: "ഇന്ത്യയിൽ രാഷ്ട്രീയ പാർട്ടികൾക്ക് അംഗീകാരം നൽകുന്നത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Parliament", ml: "പാർലമെന്റ്" } },
        { id: "opt2", text: { en: "Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { id: "opt3", text: { en: "Election Commission", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" } },
        { id: "opt4", text: { en: "President", ml: "രാഷ്ട്രപതി" } }
      ],
      answer: { id: "opt3", text: { en: "Election Commission", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" } }
    },
    {
      q_id: "811",
      question: { en: "What is the term for a government formed by an alliance of two or more parties?", ml: "രണ്ടോ അതിലധികമോ പാർട്ടികളുടെ സഖ്യം ചേർന്ന് രൂപീകരിക്കുന്ന സർക്കാരിനെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Unitary Government", ml: "ഏകീകൃത സർക്കാർ" } },
        { id: "opt2", text: { en: "Coalition Government", ml: "മുന്നണി ഭരണം (കൂട്ടുകക്ഷി മന്ത്രിസഭ)" } },
        { id: "opt3", text: { en: "Federal Government", ml: "ഫെഡറൽ സർക്കാർ" } },
        { id: "opt4", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } }
      ],
      answer: { id: "opt2", text: { en: "Coalition Government", ml: "മുന്നണി ഭരണം (കൂട്ടുകക്ഷി മന്ത്രിസഭ)" } }
    },
    {
      q_id: "812",
      question: { en: "Which is an example of Indirect Democracy?", ml: "പരോക്ഷ ജനാധിപത്യത്തിന് ഉദാഹരണം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Ancient Greece", ml: "പ്രാചീന ഗ്രീസ്" } },
        { id: "opt2", text: { en: "India", ml: "ഇന്ത്യ" } },
        { id: "opt3", text: { en: "Gram Sabha", ml: "ഗ്രാമസഭ" } },
        { id: "opt4", text: { en: "None of these", ml: "ഇവയൊന്നുമല്ല" } }
      ],
      answer: { id: "opt2", text: { en: "India", ml: "ഇന്ത്യ" } }
    },
    {
      q_id: "813",
      question: { en: "What does 'Universal Adult Franchise' mean?", ml: "'പ്രായപൂർത്തി വോട്ടവകാശം' എന്നാൽ എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Right to vote for educated people", ml: "വിദ്യാഭ്യാസമുള്ളവർക്ക് വോട്ട് ചെയ്യാനുള്ള അവകാശം" } },
        { id: "opt2", text: { en: "Right to vote for men only", ml: "പുരുഷന്മാർക്ക് മാത്രം വോട്ട് ചെയ്യാനുള്ള അവകാശം" } },
        { id: "opt3", text: { en: "Right to vote for all adults above 18 years", ml: "18 വയസ്സിന് മുകളിലുള്ള എല്ലാ മുതിർന്നവർക്കും വോട്ട് ചെയ്യാനുള്ള അവകാശം" } },
        { id: "opt4", text: { en: "Right to vote for taxpayers", ml: "നികുതി അടയ്ക്കുന്നവർക്ക് വോട്ട് ചെയ്യാനുള്ള അവകാശം" } }
      ],
      answer: { id: "opt3", text: { en: "Right to vote for all adults above 18 years", ml: "18 വയസ്സിന് മുകളിലുള്ള എല്ലാ മുതിർന്നവർക്കും വോട്ട് ചെയ്യാനുള്ള അവകാശം" } }
    },
    {
      q_id: "814",
      question: { en: "Which of the following strengthens democracy?", ml: "താഴെ പറയുന്നവയിൽ ജനാധിപത്യത്തെ ശക്തിപ്പെടുത്തുന്നത് ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Corruption", ml: "അഴിമതി" } },
        { id: "opt2", text: { en: "Political Awareness", ml: "രാഷ്ട്രീയ അവബോധം" } },
        { id: "opt3", text: { en: "Casteism", ml: "ജാതീയത" } },
        { id: "opt4", text: { en: "Violence", ml: "അക്രമം" } }
      ],
      answer: { id: "opt2", text: { en: "Political Awareness", ml: "രാഷ്ട്രീയ അവബോധം" } }
    },
    {
      q_id: "815",
      question: { en: "Who is the head of the state in India?", ml: "ഇന്ത്യയുടെ രാഷ്ട്രത്തലവൻ ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { id: "opt2", text: { en: "President", ml: "രാഷ്ട്രപതി" } },
        { id: "opt3", text: { en: "Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" } },
        { id: "opt4", text: { en: "Speaker", ml: "സ്പീക്കർ" } }
      ],
      answer: { id: "opt2", text: { en: "President", ml: "രാഷ്ട്രപതി" } }
    },
    {
      q_id: "816",
      question: { en: "The opposition party plays a crucial role in:", ml: "പ്രതിപക്ഷ പാർട്ടി എന്തിലാണ് നിർണായക പങ്ക് വഹിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Supporting the government blindly", ml: "സർക്കാരിനെ കണ്ണടച്ച് പിന്തുണയ്ക്കുന്നതിൽ" } },
        { id: "opt2", text: { en: "Criticizing government policies constructively", ml: "സർക്കാർ നയങ്ങളെ ക്രിയാത്മകമായി വിമർശിക്കുന്നതിൽ" } },
        { id: "opt3", text: { en: "Creating violence", ml: "അക്രമം സൃഷ്ടിക്കുന്നതിൽ" } },
        { id: "opt4", text: { en: "None of the above", ml: "മുകളിൽ പറഞ്ഞവ ഒന്നുമല്ല" } }
      ],
      answer: { id: "opt2", text: { en: "Criticizing government policies constructively", ml: "സർക്കാർ നയങ്ങളെ ക്രിയാത്മകമായി വിമർശിക്കുന്നതിൽ" } }
    },
    {
      q_id: "817",
      question: { en: "What is the minimum age to contest in Lok Sabha elections?", ml: "ലോക്സഭാ തിരഞ്ഞെടുപ്പിൽ മത്സരിക്കാനുള്ള കുറഞ്ഞ പ്രായം എത്രയാണ്?" },
      options: [
        { id: "opt1", text: { en: "21 years", ml: "21 വയസ്സ്" } },
        { id: "opt2", text: { en: "25 years", ml: "25 വയസ്സ്" } },
        { id: "opt3", text: { en: "30 years", ml: "30 വയസ്സ്" } },
        { id: "opt4", text: { en: "35 years", ml: "35 വയസ്സ്" } }
      ],
      answer: { id: "opt2", text: { en: "25 years", ml: "25 വയസ്സ്" } }
    },
    {
      q_id: "818",
      question: { en: "Which device is used for casting votes in Indian elections?", ml: "ഇന്ത്യൻ തിരഞ്ഞെടുപ്പുകളിൽ വോട്ട് രേഖപ്പെടുത്താൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Ballot Box", ml: "ബാലറ്റ് ബോക്സ്" } },
        { id: "opt2", text: { en: "EVM (Electronic Voting Machine)", ml: "ഇവിഎം (ഇലക്ട്രോണിക് വോട്ടിംഗ് മെഷീൻ)" } },
        { id: "opt3", text: { en: "Punch Card", ml: "പഞ്ച് കാർഡ്" } },
        { id: "opt4", text: { en: "OMR Sheet", ml: "ഒഎംആർ ഷീറ്റ്" } }
      ],
      answer: { id: "opt2", text: { en: "EVM (Electronic Voting Machine)", ml: "ഇവിഎം (ഇലക്ട്രോണിക് വോട്ടിംഗ് മെഷീൻ)" } }
    },
    {
      q_id: "819",
      question: { en: "The term 'Republic' implies:", ml: "'റിപ്പബ്ലിക്' എന്ന പദം സൂചിപ്പിക്കുന്നത്:" },
      options: [
        { id: "opt1", text: { en: "Hereditary ruler", ml: "പാരമ്പര്യ ഭരണാധികാരി" } },
        { id: "opt2", text: { en: "Elected Head of State", ml: "തിരഞ്ഞെടുക്കപ്പെട്ട രാഷ്ട്രത്തലവൻ" } },
        { id: "opt3", text: { en: "Military rule", ml: "സൈനിക ഭരണം" } },
        { id: "opt4", text: { en: "King's rule", ml: "രാജഭരണം" } }
      ],
      answer: { id: "opt2", text: { en: "Elected Head of State", ml: "തിരഞ്ഞെടുക്കപ്പെട്ട രാഷ്ട്രത്തലവൻ" } }
    },
    {
      q_id: "820",
      question: { en: "Which of the following is a threat to democracy?", ml: "താഴെ പറയുന്നവയിൽ ജനാധിപത്യത്തിന് ഭീഷണിയാകുന്നത് ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Free Media", ml: "സ്വതന്ത്ര മാധ്യമങ്ങൾ" } },
        { id: "opt2", text: { en: "Independent Judiciary", ml: "സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ" } },
        { id: "opt3", text: { en: "Criminalization of Politics", ml: "രാഷ്ട്രീയത്തിന്റെ ക്രിമിനൽവൽക്കരണം" } },
        { id: "opt4", text: { en: "Voter Education", ml: "വോട്ടർ ബോധവൽക്കരണം" } }
      ],
      answer: { id: "opt3", text: { en: "Criminalization of Politics", ml: "രാഷ്ട്രീയത്തിന്റെ ക്രിമിനൽവൽക്കരണം" } }
    },
    {
      q_id: "821",
      question: { en: "Who acts as the guardian of the Constitution?", ml: "ഭരണഘടനയുടെ സംരക്ഷകനായി പ്രവർത്തിക്കുന്നത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Parliament", ml: "പാർലമെന്റ്" } },
        { id: "opt2", text: { en: "President", ml: "രാഷ്ട്രപതി" } },
        { id: "opt3", text: { en: "Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { id: "opt4", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } }
      ],
      answer: { id: "opt3", text: { en: "Supreme Court", ml: "സുപ്രീം കോടതി" } }
    },
    {
      q_id: "822",
      question: { en: "What is the full form of NOTA?", ml: "NOTA യുടെ പൂർണ്ണരൂപം എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "None of the Above", ml: "നൺ ഓഫ് ദി എബൗ (മുകളിൽ പറഞ്ഞവരാരുമല്ല)" } },
        { id: "opt2", text: { en: "No to All", ml: "നോ ടു ഓൾ" } },
        { id: "opt3", text: { en: "Not Available", ml: "നോട്ട് അവൈലബിൾ" } },
        { id: "opt4", text: { en: "None of the Answers", ml: "നൺ ഓഫ് ദി ആൻസേഴ്സ്" } }
      ],
      answer: { id: "opt1", text: { en: "None of the Above", ml: "നൺ ഓഫ് ദി എബൗ (മുകളിൽ പറഞ്ഞവരാരുമല്ല)" } }
    },
    {
      q_id: "823",
      question: { en: "Which amendment lowered the voting age from 21 to 18?", ml: "വോട്ടിംഗ് പ്രായം 21-ൽ നിന്ന് 18-ായി കുറച്ച ഭേദഗതി ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "42nd Amendment", ml: "42-ാം ഭേദഗതി" } },
        { id: "opt2", text: { en: "44th Amendment", ml: "44-ാം ഭേദഗതി" } },
        { id: "opt3", text: { en: "61st Amendment", ml: "61-ാം ഭേദഗതി" } },
        { id: "opt4", text: { en: "73rd Amendment", ml: "73-ാം ഭേദഗതി" } }
      ],
      answer: { id: "opt3", text: { en: "61st Amendment", ml: "61-ാം ഭേദഗതി" } }
    },
    {
      q_id: "824",
      question: { en: "The Election Commission of India is a/an ________ body.", ml: "ഇന്ത്യൻ തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ ഒരു ________ സ്ഥാപനമാണ്." },
      options: [
        { id: "opt1", text: { en: "Statutory", ml: "നിയമപരമായ" } },
        { id: "opt2", text: { en: "Constitutional", ml: "ഭരണഘടനാപരമായ" } },
        { id: "opt3", text: { en: "Executive", ml: "എക്സിക്യൂട്ടീവ്" } },
        { id: "opt4", text: { en: "Non-governmental", ml: "സർക്കാരിതര" } }
      ],
      answer: { id: "opt2", text: { en: "Constitutional", ml: "ഭരണഘടനാപരമായ" } }
    },
    {
      q_id: "825",
      question: { en: "Who was the first Chief Election Commissioner of India?", ml: "ഇന്ത്യയിലെ ആദ്യത്തെ മുഖ്യ തിരഞ്ഞെടുപ്പ് കമ്മീഷണർ ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "T.N. Seshan", ml: "ടി.എൻ. ശേഷൻ" } },
        { id: "opt2", text: { en: "Sukumar Sen", ml: "സുകുമാർ സെൻ" } },
        { id: "opt3", text: { en: "V.S. Ramadevi", ml: "വി.എസ്. രമാദേവി" } },
        { id: "opt4", text: { en: "K.V.K. Sundaram", ml: "കെ.വി.കെ. സുന്ദരം" } }
      ],
      answer: { id: "opt2", text: { en: "Sukumar Sen", ml: "സുകുമാർ സെൻ" } }
    }
  ]
};
