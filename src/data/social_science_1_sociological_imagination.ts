import { Lesson } from './curriculum';

export const socialScience1SociologicalImagination: Lesson = {
  id: "so-soc-10-sociological-imagination",
  title: { en: "Chapter 3: Social Analysis: Through Sociological Imagination", ml: "അധ്യായം 3: സാമൂഹിക വിശകലനം: സാമൂഹിക ഭാവനയിലൂടെ" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Commonsense Knowledge and its Limitations", ml: "സാമാന്യബോധവും അതിൻ്റെ പരിമിതികളും" } },
    { id: "lo2", text: { en: "Social Problems and Social Factors", ml: "സാമൂഹിക പ്രശ്നങ്ങളും സാമൂഹിക ഘടകങ്ങളും" } },
    { id: "lo3", text: { en: "Social Analysis and Sociology", ml: "സാമൂഹിക വിശകലനവും സാമൂഹ്യശാസ്ത്രവും" } },
    { id: "lo4", text: { en: "Key Sociological Concepts (Relationships, Institutions, Structures)", ml: "പ്രധാന സാമൂഹ്യശാസ്ത്ര ആശയങ്ങൾ (ബന്ധങ്ങൾ, സ്ഥാപനങ്ങൾ, ഘടനകൾ)" } },
    { id: "lo5", text: { en: "Sociological Imagination (C. Wright Mills)", ml: "സാമൂഹിക ഭാവന (സി. റൈറ്റ് മിൽസ്)" } },
    { id: "lo6", text: { en: "Characteristics of Sociological Imagination", ml: "സാമൂഹിക ഭാവനയുടെ സവിശേഷതകൾ" } },
    { id: "lo7", text: { en: "Difference between Commonsense Knowledge and Sociological Imagination", ml: "സാമാന്യബോധവും സാമൂഹിക ഭാവനയും തമ്മിലുള്ള വ്യത്യാസം" } }
  ],
  content: {
    intro: { en: "This chapter introduces the concept of Sociological Imagination, distinguishing it from commonsense knowledge, and explains how to analyze social problems scientifically.", ml: "ഈ അധ്യായം സാമൂഹിക ഭാവന എന്ന ആശയത്തെ പരിചയപ്പെടുത്തുകയും, സാമാന്യബോധത്തിൽ നിന്ന് അതിനെ വേർതിരിക്കുകയും, സാമൂഹിക പ്രശ്നങ്ങളെ എങ്ങനെ ശാസ്ത്രീയമായി വിശകലനം ചെയ്യാമെന്ന് വിശദീകരിക്കുകയും ചെയ്യുന്നു." },
    core: { en: "It covers key sociological concepts like social relationships, institutions, and structures, and emphasizes the importance of critical thinking in understanding society.", ml: "സാമൂഹിക ബന്ധങ്ങൾ, സ്ഥാപനങ്ങൾ, ഘടനകൾ തുടങ്ങിയ പ്രധാന സാമൂഹ്യശാസ്ത്ര ആശയങ്ങളെക്കുറിച്ചും സമൂഹത്തെ മനസ്സിലാക്കുന്നതിൽ വിമർശനാത്മക ചിന്തയുടെ പ്രാധാന്യത്തെക്കുറിച്ചും ഇത് പ്രതിപാദിക്കുന്നു." },
    blocks: [
      { type: 'h2', en: 'Commonsense Knowledge', ml: 'സാമാന്യബോധം' },
      { type: 'p', en: 'Commonsense Knowledge is the direct understanding individuals acquire about the world through personal experiences, social interactions, and cultural knowledge.', ml: 'വ്യക്തിപരമായ അനുഭവങ്ങൾ, സാമൂഹിക ഇടപെടലുകൾ, സാംസ്കാരിക അറിവുകൾ എന്നിവയിലൂടെ വ്യക്തികൾ ലോകത്തെക്കുറിച്ച് നേരിട്ട് നേടുന്ന ധാരണയാണ് സാമാന്യബോധം.' },
      { type: 'p', en: 'It is not formal or scientifically proven knowledge. For example, the knowledge that "fire will burn" is a basic understanding acquired through observation and experience.', ml: 'ഇത് ഔദ്യോഗികമോ ശാസ്ത്രീയമായി തെളിയിക്കപ്പെട്ടതോ ആയ അറിവല്ല. ഉദാഹരണത്തിന്, "തീ പൊള്ളും" എന്ന അറിവ് നിരീക്ഷണത്തിലൂടെയും അനുഭവത്തിലൂടെയും ലഭിക്കുന്ന അടിസ്ഥാന ധാരണയാണ്.' },

      { type: 'h2', en: 'Limitations of Commonsense Knowledge', ml: 'സാമാന്യബോധത്തിന്റെ പരിമിതികൾ' },
      { type: 'p', en: 'Approaching complex social problems using only commonsense knowledge will not provide the actual reasons or solutions.', ml: 'സങ്കീർണ്ണമായ സാമൂഹിക പ്രശ്നങ്ങളെ സാമാന്യബോധം ഉപയോഗിച്ച് മാത്രം സമീപിക്കുന്നത് യഥാർത്ഥ കാരണങ്ങളോ പരിഹാരങ്ങളോ നൽകില്ല.' },
      { type: 'p', en: 'Flowchart: Limitations of Commonsense Knowledge - Provides only partial knowledge -> Relies on speculations or practices -> Bases itself on stereotypes -> Not based on scientific observations or studies -> Complex social problems cannot be understood', ml: 'ഫ്ലോചാർട്ട്: സാമാന്യബോധത്തിന്റെ പരിമിതികൾ - ഭാഗികമായ അറിവ് മാത്രം നൽകുന്നു -> ഊഹങ്ങളെയോ ശീലങ്ങളെയോ ആശ്രയിക്കുന്നു -> വാർപ്പുമാതൃകകളെ അടിസ്ഥാനമാക്കിയുള്ളതാണ് -> ശാസ്ത്രീയ നിരീക്ഷണങ്ങളിലോ പഠനങ്ങളിലോ അധിഷ്ഠിതമല്ല -> സങ്കീർണ്ണമായ സാമൂഹിക പ്രശ്നങ്ങൾ മനസ്സിലാക്കാൻ കഴിയില്ല' },

      { type: 'h2', en: 'Social Problem', ml: 'സാമൂഹിക പ്രശ്നം' },
      { type: 'p', en: 'A social problem is a problem or condition that affects a large number of people in society. Problems that affect only a single or a few individuals are not considered social problems.', ml: 'സമൂഹത്തിലെ വലിയൊരു വിഭാഗം ആളുകളെ ബാധിക്കുന്ന ഒരു പ്രശ്നത്തെയോ അവസ്ഥയെയോ ആണ് സാമൂഹിക പ്രശ്നം എന്ന് വിളിക്കുന്നത്. ഒരാളെയോ കുറച്ച് വ്യക്തികളെയോ മാത്രം ബാധിക്കുന്ന പ്രശ്നങ്ങളെ സാമൂഹിക പ്രശ്നങ്ങളായി കണക്കാക്കില്ല.' },
      { type: 'p', en: 'Poverty, inequality, discrimination, and environmental pollution are some examples of social problems.', ml: 'ദാരിദ്ര്യം, അസമത്വം, വിവേചനം, പരിസ്ഥിതി മലിനീകരണം എന്നിവ സാമൂഹിക പ്രശ്നങ്ങൾക്ക് ചില ഉദാഹരണങ്ങളാണ്.' },

      { type: 'h2', en: 'Social Factors', ml: 'സാമൂഹിക ഘടകങ്ങൾ' },
      { type: 'p', en: 'Social factors include various elements of society that influence the behaviour, attitude, opportunities, and choices of individuals. These include family, education, religion, economic status, environment, and politics.', ml: 'വ്യക്തികളുടെ പെരുമാറ്റം, മനോഭാവം, അവസരങ്ങൾ, തിരഞ്ഞെടുപ്പുകൾ എന്നിവയെ സ്വാധീനിക്കുന്ന സമൂഹത്തിലെ വിവിധ ഘടകങ്ങളാണ് സാമൂഹിക ഘടകങ്ങൾ. കുടുംബം, വിദ്യാഭ്യാസം, മതം, സാമ്പത്തിക നില, ചുറ്റുപാട്, രാഷ്ട്രീയം എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു.' },

      { type: 'h2', en: 'Social Analysis and Sociology', ml: 'സാമൂഹിക വിശകലനവും സാമൂഹ്യശാസ്ത്രവും' },
      { type: 'p', en: 'Social analysis is the process of examining how social relationships, social institutions, social structures, and social problems affect individuals and society.', ml: 'സാമൂഹിക ബന്ധങ്ങൾ, സാമൂഹിക സ്ഥാപനങ്ങൾ, സാമൂഹിക ഘടനകൾ, സാമൂഹിക പ്രശ്നങ്ങൾ എന്നിവ വ്യക്തികളെയും സമൂഹത്തെയും എങ്ങനെ ബാധിക്കുന്നു എന്ന് പരിശോധിക്കുന്ന പ്രക്രിയയാണ് സാമൂഹിക വിശകലനം.' },
      { type: 'p', en: 'Sociology is the scientific study of society. Karl Marx, Emile Durkheim, and Max Weber were prominent among its early thinkers.', ml: 'സമൂഹത്തെക്കുറിച്ചുള്ള ശാസ്ത്രീയ പഠനമാണ് സാമൂഹ്യശാസ്ത്രം (സോഷ്യോളജി). കാൾ മാർക്സ്, എമിലി ഡർഖൈം, മാക്സ് വെബർ എന്നിവർ ഇതിന്റെ ആദ്യകാല ചിന്തകരിൽ പ്രമുഖരായിരുന്നു.' },

      { type: 'table', tableData: {
          headers: [{en: 'Concept', ml: 'ആശയം'}, {en: 'Explanation', ml: 'വിശദീകരണം'}, {en: 'Example', ml: 'ഉദാഹരണം'}],
          rows: [
            [{en: 'Social Relationships', ml: 'സാമൂഹിക ബന്ധങ്ങൾ'}, {en: 'Interactions that individuals develop from within the society.', ml: 'സമൂഹത്തിനുള്ളിൽ നിന്ന് വ്യക്തികൾ വളർത്തിയെടുക്കുന്ന ബന്ധങ്ങളും ഇടപെടലുകളും.'}, {en: 'Affection among family members, friendships.', ml: 'കുടുംബാംഗങ്ങൾക്കിടയിലുള്ള സ്നേഹം, സൗഹൃദങ്ങൾ.'}],
            [{en: 'Social Institutions', ml: 'സാമൂഹിക സ്ഥാപനങ്ങൾ'}, {en: 'Framework of rules established by society to stabilise and regulate social relations.', ml: 'സാമൂഹിക ബന്ധങ്ങളെ സുസ്ഥിരമാക്കാനും നിയന്ത്രിക്കാനും സമൂഹം സ്ഥാപിച്ച നിയമങ്ങളുടെ ചട്ടക്കൂട്.'}, {en: 'Family, marriage, religion, education, judiciary.', ml: 'കുടുംബം, വിവാഹം, മതം, വിദ്യാഭ്യാസം, നീതിന്യായ വ്യവസ്ഥ.'}],
            [{en: 'Social Structures', ml: 'സാമൂഹിക ഘടനകൾ'}, {en: 'Explains and implements the status, roles, and responsibility of individuals in society.', ml: 'സമൂഹത്തിൽ വ്യക്തികളുടെ പദവി, റോളുകൾ, ഉത്തരവാദിത്തങ്ങൾ എന്നിവ വിശദീകരിക്കുകയും നടപ്പിലാക്കുകയും ചെയ്യുന്നു.'}, {en: 'Norms and rules of society.', ml: 'സമൂഹത്തിലെ മാനദണ്ഡങ്ങളും നിയമങ്ങളും.'}]
          ]
      }},

      { type: 'h2', en: 'Sociological Imagination', ml: 'സാമൂഹിക ഭാവന' },
      { type: 'p', en: "The concept of sociological imagination was introduced by American Sociologist Charles Wright Mills in his book 'The Sociological Imagination' (1959).", ml: "അമേരിക്കൻ സാമൂഹ്യശാസ്ത്രജ്ഞനായ ചാൾസ് റൈറ്റ് മിൽസ് തന്റെ 'ദ സോഷ്യോളജിക്കൽ ഇമാജിനേഷൻ' (1959) എന്ന പുസ്തകത്തിലാണ് സാമൂഹിക ഭാവന എന്ന ആശയം അവതരിപ്പിച്ചത്." },
      { type: 'p', en: 'Sociological imagination is the skill to identify and analyse how individual problems are related to broader social structures. It helps to see individual problems as social problems rather than mere personal failures.', ml: 'വ്യക്തിപരമായ പ്രശ്നങ്ങൾ എങ്ങനെ വിശാലമായ സാമൂഹിക ഘടനകളുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു എന്ന് തിരിച്ചറിയാനും വിശകലനം ചെയ്യാനുമുള്ള കഴിവാണ് സാമൂഹിക ഭാവന. വ്യക്തിപരമായ പ്രശ്നങ്ങളെ കേവലം വ്യക്തിപരമായ പരാജയങ്ങളായി കാണുന്നതിന് പകരം അവയെ സാമൂഹിക പ്രശ്നങ്ങളായി കാണാൻ ഇത് സഹായിക്കുന്നു.' },

      { type: 'h2', en: 'Characteristics of Sociological Imagination', ml: 'സാമൂഹിക ഭാവനയുടെ സവിശേഷതകൾ' },
      { type: 'h3', en: '1. Broadens individual perspective', ml: '1. വ്യക്തിഗത കാഴ്ചപ്പാട് വിശാലമാക്കുന്നു' },
      { type: 'p', en: 'It reveals that multiple social factors (like bad roads, traffic rules violation) contribute to seemingly personal issues (like a road accident).', ml: 'കാഴ്ചയിൽ വ്യക്തിപരമെന്ന് തോന്നുന്ന പ്രശ്നങ്ങൾക്ക് (ഉദാഹരണത്തിന് വാഹനാപകടം) പിന്നിൽ ഒന്നിലധികം സാമൂഹിക ഘടകങ്ങൾ (മോശം റോഡുകൾ, ട്രാഫിക് നിയമലംഘനം) ഉണ്ടെന്ന് ഇത് വ്യക്തമാക്കുന്നു.' },
      
      { type: 'h3', en: '2. Understanding of social issues in depth', ml: '2. സാമൂഹിക പ്രശ്നങ്ങളെ ആഴത്തിൽ മനസ്സിലാക്കൽ' },
      { type: 'p', en: 'It helps to identify the relationship between individual problems and larger social issues. Example: Emile Durkheim studied the social causes behind suicide and proved it is influenced more by social reasons than personal ones.', ml: 'വ്യക്തിഗത പ്രശ്നങ്ങളും വലിയ സാമൂഹിക പ്രശ്നങ്ങളും തമ്മിലുള്ള ബന്ധം തിരിച്ചറിയാൻ ഇത് സഹായിക്കുന്നു. ഉദാഹരണം: എമിലി ഡർഖൈം ആത്മഹത്യയ്ക്ക് പിന്നിലെ സാമൂഹിക കാരണങ്ങളെക്കുറിച്ച് പഠിക്കുകയും വ്യക്തിപരമായ കാരണങ്ങളേക്കാൾ സാമൂഹിക കാരണങ്ങളാണ് ഇതിനെ സ്വാധീനിക്കുന്നതെന്ന് തെളിയിക്കുകയും ചെയ്തു.' },

      { type: 'h3', en: '3. Enables self-reflection', ml: '3. സ്വയം വിലയിരുത്താൻ (ആത്മപരിശോധനയ്ക്ക്) സഹായിക്കുന്നു' },
      { type: 'p', en: 'Self-reflexivity is the skill to critically evaluate one\'s own thoughts and actions.', ml: 'സ്വന്തം ചിന്തകളെയും പ്രവൃത്തികളെയും വിമർശനാത്മകമായി വിലയിരുത്താനുള്ള കഴിവാണ് ആത്മപരിശോധന.' },

      { type: 'h3', en: '4. Develops empathy and tolerance', ml: '4. സഹാനുഭൂതിയും സഹിഷ്ണുതയും വികസിപ്പിക്കുന്നു' },
      { type: 'p', en: 'By understanding the social context behind the experiences of others, we can develop empathy and provide support.', ml: 'മറ്റുള്ളവരുടെ അനുഭവങ്ങൾക്ക് പിന്നിലെ സാമൂഹിക പശ്ചാത്തലം മനസ്സിലാക്കുന്നതിലൂടെ, നമുക്ക് സഹാനുഭൂതി വികസിപ്പിക്കാനും പിന്തുണ നൽകാനും കഴിയും.' },

      { type: 'h3', en: '5. Develops critical thinking', ml: '5. വിമർശനാത്മക ചിന്ത വികസിപ്പിക്കുന്നു' },
      { type: 'p', en: 'It enables people to actively engage in solving problems by thinking critically about the underlying social factors.', ml: 'അടിസ്ഥാനപരമായ സാമൂഹിക ഘടകങ്ങളെക്കുറിച്ച് വിമർശനാത്മകമായി ചിന്തിക്കുന്നതിലൂടെ പ്രശ്നപരിഹാരത്തിൽ സജീവമായി ഏർപ്പെടാൻ ഇത് ആളുകളെ പ്രാപ്തരാക്കുന്നു.' },

      { type: 'h3', en: '6. Questioning negative social norms', ml: '6. നിഷേധാത്മകമായ സാമൂഹിക മാനദണ്ഡങ്ങളെ ചോദ്യം ചെയ്യുന്നു' },
      { type: 'p', en: 'It inspires us to question stereotypes and negative social norms, like the stigma surrounding mental health.', ml: 'മാനസികാരോഗ്യത്തെ ചുറ്റിപ്പറ്റിയുള്ള കളങ്കം പോലെയുള്ള വാർപ്പുമാതൃകകളെയും നിഷേധാത്മകമായ സാമൂഹിക മാനദണ്ഡങ്ങളെയും ചോദ്യം ചെയ്യാൻ ഇത് നമ്മെ പ്രേരിപ്പിക്കുന്നു.' },

      { type: 'h2', en: 'Difference Between Commonsense Knowledge and Sociological Imagination', ml: 'സാമാന്യബോധവും സാമൂഹിക ഭാവനയും തമ്മിലുള്ള വ്യത്യാസം' },
      { type: 'table', tableData: {
          headers: [{en: 'Commonsense Knowledge Approach', ml: 'സാമാന്യബോധ സമീപനം'}, {en: 'Sociological Imagination Approach', ml: 'സാമൂഹിക ഭാവനയുടെ സമീപനം'}],
          rows: [
            [{en: 'Limited to personal views and experiences.', ml: 'വ്യക്തിപരമായ കാഴ്ചപ്പാടുകളിലും അനുഭവങ്ങളിലും പരിമിതപ്പെടുത്തിയിരിക്കുന്നു.'}, {en: 'Its scope is broad as it connects individual experiences to larger social structures.', ml: 'വ്യക്തിപരമായ അനുഭവങ്ങളെ വലിയ സാമൂഹിക ഘടനകളുമായി ബന്ധിപ്പിക്കുന്നതിനാൽ ഇതിന്റെ വ്യാപ്തി വലുതാണ്.'}],
            [{en: 'Often provides only a superficial explanation based on stereotypes.', ml: 'പലപ്പോഴും വാർപ്പുമാതൃകകളെ അടിസ്ഥാനമാക്കി ഉപരിപ്ലവമായ വിശദീകരണം മാത്രം നൽകുന്നു.'}, {en: 'Analyses deeply the impact of social factors on individuals.', ml: 'വ്യക്തികളിൽ സാമൂഹിക ഘടകങ്ങൾ ചെലുത്തുന്ന സ്വാധീനത്തെക്കുറിച്ച് ആഴത്തിൽ വിശകലനം ചെയ്യുന്നു.'}],
            [{en: 'Social realities and problems are not approached through critical thinking.', ml: 'സാമൂഹിക യാഥാർത്ഥ്യങ്ങളെയും പ്രശ്നങ്ങളെയും വിമർശനാത്മക ചിന്തയിലൂടെ സമീപിക്കുന്നില്ല.'}, {en: 'Encourages critical thinking about interrelationships between personal experiences and social structures.', ml: 'വ്യക്തിപരമായ അനുഭവങ്ങളും സാമൂഹിക ഘടനകളും തമ്മിലുള്ള പരസ്പര ബന്ധത്തെക്കുറിച്ച് വിമർശനാത്മക ചിന്തയെ പ്രോത്സാഹിപ്പിക്കുന്നു.'}]
          ]
      }},

      { type: 'h2', en: 'Summary Points', ml: 'സംഗ്രഹ പോയിന്റുകൾ' },
      { type: 'p', en: 'Commonsense knowledge is our everyday practical knowledge, but it has limitations in solving complex social problems.', ml: 'സാമാന്യബോധം നമ്മുടെ ദൈനംദിന പ്രായോഗിക അറിവാണ്, എന്നാൽ സങ്കീർണ്ണമായ സാമൂഹിക പ്രശ്നങ്ങൾ പരിഹരിക്കുന്നതിൽ ഇതിന് പരിമിതികളുണ്ട്.' },
      { type: 'p', en: 'Sociology provides a scientific study of society through relationships, institutions, and structures.', ml: 'സാമൂഹിക ബന്ധങ്ങൾ, സ്ഥാപനങ്ങൾ, ഘടനകൾ എന്നിവയിലൂടെ സമൂഹത്തെക്കുറിച്ചുള്ള ശാസ്ത്രീയ പഠനം സാമൂഹ്യശാസ്ത്രം നൽകുന്നു.' },
      { type: 'p', en: 'Sociological imagination is a powerful tool introduced by C. Wright Mills to connect personal issues with wider social structures.', ml: 'വ്യക്തിപരമായ പ്രശ്നങ്ങളെ വിശാലമായ സാമൂഹിക ഘടനകളുമായി ബന്ധിപ്പിക്കുന്നതിന് സി. റൈറ്റ് മിൽസ് അവതരിപ്പിച്ച ശക്തമായ ഒരു ഉപകരണമാണ് സാമൂഹിക ഭാവന.' },
      { type: 'p', en: 'Using sociological imagination helps us develop empathy, critical thinking, and the ability to question harmful social norms.', ml: 'സാമൂഹിക ഭാവന ഉപയോഗിക്കുന്നത് സഹാനുഭൂതി, വിമർശനാത്മക ചിന്ത, ഹാനികരമായ സാമൂഹിക മാനദണ്ഡങ്ങളെ ചോദ്യം ചെയ്യാനുള്ള കഴിവ് എന്നിവ വികസിപ്പിക്കാൻ നമ്മെ സഹായിക്കുന്നു.' }
    ]
  },
  glossary: [
    { term: { en: "Commonsense Knowledge", ml: "സാമാന്യബോധം" }, definition: { en: "Direct understanding acquired through personal experiences and social interactions.", ml: "വ്യക്തിപരമായ അനുഭവങ്ങളിലൂടെയും സാമൂഹിക ഇടപെടലുകളിലൂടെയും നേടുന്ന നേരിട്ടുള്ള അറിവ്." } },
    { term: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" }, definition: { en: "Skill to identify how individual problems are related to broader social structures.", ml: "വ്യക്തിപരമായ പ്രശ്നങ്ങൾ വിശാലമായ സാമൂഹിക ഘടനകളുമായി എങ്ങനെ ബന്ധപ്പെട്ടിരിക്കുന്നു എന്ന് തിരിച്ചറിയാനുള്ള കഴിവ്." } },
    { term: { en: "Social Problem", ml: "സാമൂഹിക പ്രശ്നം" }, definition: { en: "A problem or condition that affects a large number of people in society.", ml: "സമൂഹത്തിലെ വലിയൊരു വിഭാഗം ആളുകളെ ബാധിക്കുന്ന പ്രശ്നം." } },
    { term: { en: "Social Analysis", ml: "സാമൂഹിക വിശകലനം" }, definition: { en: "Process of examining how social factors affect individuals and society.", ml: "സാമൂഹിക ഘടകങ്ങൾ വ്യക്തികളെയും സമൂഹത്തെയും എങ്ങനെ ബാധിക്കുന്നു എന്ന് പരിശോധിക്കുന്ന പ്രക്രിയ." } }
  ],
  quiz: [
    {
      q_id: "q1",
      question: { en: "What is commonsense knowledge based on?", ml: "സാമാന്യബോധം എന്തിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Scientific studies", ml: "ശാസ്ത്രീയ പഠനങ്ങൾ" } },
        { id: "opt2", text: { en: "Personal experiences", ml: "വ്യക്തിപരമായ അനുഭവങ്ങൾ" } },
        { id: "opt3", text: { en: "Laboratory experiments", ml: "ലബോറട്ടറി പരീക്ഷണങ്ങൾ" } },
        { id: "opt4", text: { en: "Formal education", ml: "ഔദ്യോഗിക വിദ്യാഭ്യാസം" } }
      ],
      answer: { id: "opt2", text: { en: "Personal experiences", ml: "വ്യക്തിപരമായ അനുഭവങ്ങൾ" } }
    },
    {
      q_id: "q2",
      question: { en: "Is commonsense knowledge scientifically proven?", ml: "സാമാന്യബോധം ശാസ്ത്രീയമായി തെളിയിക്കപ്പെട്ടതാണോ?" },
      options: [
        { id: "opt1", text: { en: "Yes", ml: "അതെ" } },
        { id: "opt2", text: { en: "No", ml: "അല്ല" } },
        { id: "opt3", text: { en: "Sometimes", ml: "ചിലപ്പോൾ" } },
        { id: "opt4", text: { en: "Always", ml: "എപ്പോഴും" } }
      ],
      answer: { id: "opt2", text: { en: "No", ml: "അല്ല" } }
    },
    {
      q_id: "q3",
      question: { en: "Which of the following is an example of commonsense knowledge?", ml: "താഴെ പറയുന്നവയിൽ സാമാന്യബോധത്തിന് ഉദാഹരണമേത്?" },
      options: [
        { id: "opt1", text: { en: "E=mc²", ml: "E=mc²" } },
        { id: "opt2", text: { en: "Fire will burn", ml: "തീ പൊള്ളും" } },
        { id: "opt3", text: { en: "Earth revolves around Sun", ml: "ഭൂമി സൂര്യനെ ചുറ്റുന്നു" } },
        { id: "opt4", text: { en: "Water is H2O", ml: "വെള്ളം H2O ആണ്" } }
      ],
      answer: { id: "opt2", text: { en: "Fire will burn", ml: "തീ പൊള്ളും" } }
    },
    {
      q_id: "q4",
      question: { en: "What is a major limitation of commonsense knowledge?", ml: "സാമാന്യബോധത്തിന്റെ പ്രധാന പരിമിതി എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "It is too complex", ml: "ഇത് വളരെ സങ്കീർണ്ണമാണ്" } },
        { id: "opt2", text: { en: "It provides partial knowledge", ml: "ഇത് ഭാഗികമായ അറിവ് നൽകുന്നു" } },
        { id: "opt3", text: { en: "It is always wrong", ml: "ഇത് എപ്പോഴും തെറ്റാണ്" } },
        { id: "opt4", text: { en: "It is expensive", ml: "ഇത് ചെലവേറിയതാണ്" } }
      ],
      answer: { id: "opt2", text: { en: "It provides partial knowledge", ml: "ഇത് ഭാഗികമായ അറിവ് നൽകുന്നു" } }
    },
    {
      q_id: "q5",
      question: { en: "What defines a social problem?", ml: "എന്താണ് ഒരു സാമൂഹിക പ്രശ്നത്തെ നിർവചിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "It affects one person", ml: "ഇത് ഒരാളെ ബാധിക്കുന്നു" } },
        { id: "opt2", text: { en: "It affects a large number of people", ml: "ഇത് വലിയൊരു വിഭാഗം ആളുകളെ ബാധിക്കുന്നു" } },
        { id: "opt3", text: { en: "It is a private matter", ml: "ഇതൊരു സ്വകാര്യ വിഷയമാണ്" } },
        { id: "opt4", text: { en: "It is solved easily", ml: "ഇത് എളുപ്പത്തിൽ പരിഹരിക്കപ്പെടുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "It affects a large number of people", ml: "ഇത് വലിയൊരു വിഭാഗം ആളുകളെ ബാധിക്കുന്നു" } }
    },
    {
      q_id: "q6",
      question: { en: "Which of the following is a social problem?", ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് സാമൂഹിക പ്രശ്നം?" },
      options: [
        { id: "opt1", text: { en: "Headache", ml: "തലവേദന" } },
        { id: "opt2", text: { en: "Poverty", ml: "ദാരിദ്ര്യം" } },
        { id: "opt3", text: { en: "Broken leg", ml: "ഒടിഞ്ഞ കാൽ" } },
        { id: "opt4", text: { en: "Lost pen", ml: "നഷ്ടപ്പെട്ട പേന" } }
      ],
      answer: { id: "opt2", text: { en: "Poverty", ml: "ദാരിദ്ര്യം" } }
    },
    {
      q_id: "q7",
      question: { en: "What are social factors?", ml: "എന്താണ് സാമൂഹിക ഘടകങ്ങൾ?" },
      options: [
        { id: "opt1", text: { en: "Biological elements", ml: "ജൈവശാസ്ത്രപരമായ ഘടകങ്ങൾ" } },
        { id: "opt2", text: { en: "Elements influencing individual behavior", ml: "വ്യക്തിഗത പെരുമാറ്റത്തെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ" } },
        { id: "opt3", text: { en: "Chemical reactions", ml: "രാസപ്രവർത്തനങ്ങൾ" } },
        { id: "opt4", text: { en: "Mathematical formulas", ml: "ഗണിതശാസ്ത്ര സൂത്രവാക്യങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Elements influencing individual behavior", ml: "വ്യക്തിഗത പെരുമാറ്റത്തെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ" } }
    },
    {
      q_id: "q8",
      question: { en: "Which is an example of a social factor?", ml: "സാമൂഹിക ഘടകത്തിന് ഉദാഹരണമേത്?" },
      options: [
        { id: "opt1", text: { en: "Height", ml: "ഉയരം" } },
        { id: "opt2", text: { en: "Family", ml: "കുടുംബം" } },
        { id: "opt3", text: { en: "Blood group", ml: "രക്തഗ്രൂപ്പ്" } },
        { id: "opt4", text: { en: "Eye color", ml: "കണ്ണിന്റെ നിറം" } }
      ],
      answer: { id: "opt2", text: { en: "Family", ml: "കുടുംബം" } }
    },
    {
      q_id: "q9",
      question: { en: "What is Sociology?", ml: "എന്താണ് സാമൂഹ്യശാസ്ത്രം?" },
      options: [
        { id: "opt1", text: { en: "Study of rocks", ml: "പാറകളെക്കുറിച്ചുള്ള പഠനം" } },
        { id: "opt2", text: { en: "Scientific study of society", ml: "സമൂഹത്തെക്കുറിച്ചുള്ള ശാസ്ത്രീയ പഠനം" } },
        { id: "opt3", text: { en: "Study of mind", ml: "മനസ്സിനെക്കുറിച്ചുള്ള പഠനം" } },
        { id: "opt4", text: { en: "Study of stars", ml: "നക്ഷത്രങ്ങളെക്കുറിച്ചുള്ള പഠനം" } }
      ],
      answer: { id: "opt2", text: { en: "Scientific study of society", ml: "സമൂഹത്തെക്കുറിച്ചുള്ള ശാസ്ത്രീയ പഠനം" } }
    },
    {
      q_id: "q10",
      question: { en: "Who is considered an early thinker of Sociology?", ml: "സാമൂഹ്യശാസ്ത്രത്തിന്റെ ആദ്യകാല ചിന്തകനായി കണക്കാക്കപ്പെടുന്നത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Isaac Newton", ml: "ഐസക് ന്യൂട്ടൺ" } },
        { id: "opt2", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt3", text: { en: "Charles Darwin", ml: "ചാൾസ് ഡാർവിൻ" } },
        { id: "opt4", text: { en: "Albert Einstein", ml: "ആൽബർട്ട് ഐൻസ്റ്റീൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } }
    },
    {
      q_id: "q11",
      question: { en: "What are social relationships?", ml: "എന്താണ് സാമൂഹിക ബന്ധങ്ങൾ?" },
      options: [
        { id: "opt1", text: { en: "Interactions within society", ml: "സമൂഹത്തിനുള്ളിലെ ഇടപെടലുകൾ" } },
        { id: "opt2", text: { en: "Chemical bonds", ml: "രാസബന്ധനങ്ങൾ" } },
        { id: "opt3", text: { en: "Economic trades", ml: "സാമ്പത്തിക ഇടപാടുകൾ" } },
        { id: "opt4", text: { en: "Political treaties", ml: "രാഷ്ട്രീയ ഉടമ്പടികൾ" } }
      ],
      answer: { id: "opt1", text: { en: "Interactions within society", ml: "സമൂഹത്തിനുള്ളിലെ ഇടപെടലുകൾ" } }
    },
    {
      q_id: "q12",
      question: { en: "Which is an example of a social institution?", ml: "സാമൂഹിക സ്ഥാപനത്തിന് ഉദാഹരണമേത്?" },
      options: [
        { id: "opt1", text: { en: "Friendship", ml: "സൗഹൃദം" } },
        { id: "opt2", text: { en: "Marriage", ml: "വിവാഹം" } },
        { id: "opt3", text: { en: "Love", ml: "സ്നേഹം" } },
        { id: "opt4", text: { en: "Hate", ml: "വെറുപ്പ്" } }
      ],
      answer: { id: "opt2", text: { en: "Marriage", ml: "വിവാഹം" } }
    },
    {
      q_id: "q13",
      question: { en: "What do social structures explain?", ml: "സാമൂഹിക ഘടനകൾ എന്താണ് വിശദീകരിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Status and roles", ml: "പദവിയും റോളുകളും" } },
        { id: "opt2", text: { en: "Personal feelings", ml: "വ്യക്തിപരമായ വികാരങ്ങൾ" } },
        { id: "opt3", text: { en: "Biological needs", ml: "ജൈവശാസ്ത്രപരമായ ആവശ്യങ്ങൾ" } },
        { id: "opt4", text: { en: "Weather patterns", ml: "കാലാവസ്ഥാ രീതികൾ" } }
      ],
      answer: { id: "opt1", text: { en: "Status and roles", ml: "പദവിയും റോളുകളും" } }
    },
    {
      q_id: "q14",
      question: { en: "Who introduced the concept of 'Sociological Imagination'?", ml: "'സാമൂഹിക ഭാവന' എന്ന ആശയം അവതരിപ്പിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt2", text: { en: "C. Wright Mills", ml: "സി. റൈറ്റ് മിൽസ്" } },
        { id: "opt3", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } },
        { id: "opt4", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } }
      ],
      answer: { id: "opt2", text: { en: "C. Wright Mills", ml: "സി. റൈറ്റ് മിൽസ്" } }
    },
    {
      q_id: "q15",
      question: { en: "When was 'The Sociological Imagination' published?", ml: "'ദ സോഷ്യോളജിക്കൽ ഇമാജിനേഷൻ' പ്രസിദ്ധീകരിച്ചത് എപ്പോൾ?" },
      options: [
        { id: "opt1", text: { en: "1959", ml: "1959" } },
        { id: "opt2", text: { en: "1859", ml: "1859" } },
        { id: "opt3", text: { en: "1969", ml: "1969" } },
        { id: "opt4", text: { en: "1949", ml: "1949" } }
      ],
      answer: { id: "opt1", text: { en: "1959", ml: "1959" } }
    },
    {
      q_id: "q16",
      question: { en: "C. Wright Mills was a sociologist from which country?", ml: "സി. റൈറ്റ് മിൽസ് ഏത് രാജ്യത്ത് നിന്നുള്ള സാമൂഹ്യശാസ്ത്രജ്ഞനായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Germany", ml: "ജർമ്മനി" } },
        { id: "opt2", text: { en: "France", ml: "ഫ്രാൻസ്" } },
        { id: "opt3", text: { en: "USA", ml: "യുഎസ്എ" } },
        { id: "opt4", text: { en: "UK", ml: "യുകെ" } }
      ],
      answer: { id: "opt3", text: { en: "USA", ml: "യുഎസ്എ" } }
    },
    {
      q_id: "q17",
      question: { en: "What does sociological imagination connect?", ml: "സാമൂഹിക ഭാവന എന്തിനെയാണ് ബന്ധിപ്പിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Past and Future", ml: "ഭൂതവും ഭാവിയും" } },
        { id: "opt2", text: { en: "Personal problems and social structures", ml: "വ്യക്തിപരമായ പ്രശ്നങ്ങളും സാമൂഹിക ഘടനകളും" } },
        { id: "opt3", text: { en: "Rich and Poor", ml: "സമ്പന്നരും ദരിദ്രരും" } },
        { id: "opt4", text: { en: "Man and Nature", ml: "മനുഷ്യനും പ്രകൃതിയും" } }
      ],
      answer: { id: "opt2", text: { en: "Personal problems and social structures", ml: "വ്യക്തിപരമായ പ്രശ്നങ്ങളും സാമൂഹിക ഘടനകളും" } }
    },
    {
      q_id: "q18",
      question: { en: "How does sociological imagination affect individual perspective?", ml: "സാമൂഹിക ഭാവന വ്യക്തിഗത കാഴ്ചപ്പാടിനെ എങ്ങനെ ബാധിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Narrows it", ml: "അതിനെ ചുരുക്കുന്നു" } },
        { id: "opt2", text: { en: "Broadens it", ml: "അതിനെ വിശാലമാക്കുന്നു" } },
        { id: "opt3", text: { en: "Ignores it", ml: "അതിനെ അവഗണിക്കുന്നു" } },
        { id: "opt4", text: { en: "Confuses it", ml: "അതിനെ ആശയക്കുഴപ്പത്തിലാക്കുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "Broadens it", ml: "അതിനെ വിശാലമാക്കുന്നു" } }
    },
    {
      q_id: "q19",
      question: { en: "Who studied the social causes of suicide?", ml: "ആത്മഹത്യയുടെ സാമൂഹിക കാരണങ്ങളെക്കുറിച്ച് പഠിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt2", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } },
        { id: "opt3", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt4", text: { en: "Auguste Comte", ml: "അഗസ്റ്റ് കോംതെ" } }
      ],
      answer: { id: "opt2", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } }
    },
    {
      q_id: "q20",
      question: { en: "According to Durkheim, suicide is influenced mainly by?", ml: "ഡർഖൈം അഭിപ്രായത്തിൽ, ആത്മഹത്യയെ പ്രധാനമായും സ്വാധീനിക്കുന്നത് എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Personal failure", ml: "വ്യക്തിപരമായ പരാജയം" } },
        { id: "opt2", text: { en: "Social reasons", ml: "സാമൂഹിക കാരണങ്ങൾ" } },
        { id: "opt3", text: { en: "Biological defects", ml: "ജൈവശാസ്ത്രപരമായ തകരാറുകൾ" } },
        { id: "opt4", text: { en: "Bad luck", ml: "നിർഭാഗ്യം" } }
      ],
      answer: { id: "opt2", text: { en: "Social reasons", ml: "സാമൂഹിക കാരണങ്ങൾ" } }
    },
    {
      q_id: "q21",
      question: { en: "What is 'Self-reflexivity'?", ml: "'സ്വയം വിലയിരുത്തൽ' (Self-reflexivity) എന്നാൽ എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Looking in mirror", ml: "കണ്ണാടിയിൽ നോക്കുന്നത്" } },
        { id: "opt2", text: { en: "Evaluating one's own thoughts", ml: "സ്വന്തം ചിന്തകളെ വിലയിരുത്തുന്നത്" } },
        { id: "opt3", text: { en: "Taking selfies", ml: "സെൽഫി എടുക്കുന്നത്" } },
        { id: "opt4", text: { en: "Ignoring others", ml: "മറ്റുള്ളവരെ അവഗണിക്കുന്നത്" } }
      ],
      answer: { id: "opt2", text: { en: "Evaluating one's own thoughts", ml: "സ്വന്തം ചിന്തകളെ വിലയിരുത്തുന്നത്" } }
    },
    {
      q_id: "q22",
      question: { en: "What does sociological imagination help to develop towards others?", ml: "മറ്റുള്ളവരോട് എന്ത് വികസിപ്പിക്കാൻ സാമൂഹിക ഭാവന സഹായിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Anger", ml: "ദേഷ്യം" } },
        { id: "opt2", text: { en: "Empathy and tolerance", ml: "സഹാനുഭൂതിയും സഹിഷ്ണുതയും" } },
        { id: "opt3", text: { en: "Jealousy", ml: "അസൂയ" } },
        { id: "opt4", text: { en: "Indifference", ml: "ഉദാസീനത" } }
      ],
      answer: { id: "opt2", text: { en: "Empathy and tolerance", ml: "സഹാനുഭൂതിയും സഹിഷ്ണുതയും" } }
    },
    {
      q_id: "q23",
      question: { en: "What kind of thinking does sociological imagination promote?", ml: "എന്തത്തരത്തിലുള്ള ചിന്തയാണ് സാമൂഹിക ഭാവന പ്രോത്സാഹിപ്പിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Blind faith", ml: "അന്ധമായ വിശ്വാസം" } },
        { id: "opt2", text: { en: "Critical thinking", ml: "വിമർശനാത്മക ചിന്ത" } },
        { id: "opt3", text: { en: "Wishful thinking", ml: "ആഗ്രഹ ചിന്ത" } },
        { id: "opt4", text: { en: "Negative thinking", ml: "നിഷേധാത്മക ചിന്ത" } }
      ],
      answer: { id: "opt2", text: { en: "Critical thinking", ml: "വിമർശനാത്മക ചിന്ത" } }
    },
    {
      q_id: "q24",
      question: { en: "What does sociological imagination encourage us to question?", ml: "എന്തിനെ ചോദ്യം ചെയ്യാനാണ് സാമൂഹിക ഭാവന നമ്മെ പ്രോത്സാഹിപ്പിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Scientific facts", ml: "ശാസ്ത്രീയ വസ്തുതകൾ" } },
        { id: "opt2", text: { en: "Stereotypes and negative norms", ml: "വാർപ്പുമാതൃകകളും നിഷേധാത്മക മാനദണ്ഡങ്ങളും" } },
        { id: "opt3", text: { en: "Good habits", ml: "നല്ല ശീലങ്ങൾ" } },
        { id: "opt4", text: { en: "Laws of nature", ml: "പ്രകൃതി നിയമങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Stereotypes and negative norms", ml: "വാർപ്പുമാതൃകകളും നിഷേധാത്മക മാനദണ്ഡങ്ങളും" } }
    },
    {
      q_id: "q25",
      question: { en: "Which approach relies on stereotypes?", ml: "വാർപ്പുമാതൃകകളെ ആശ്രയിക്കുന്ന സമീപനം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" } },
        { id: "opt2", text: { en: "Commonsense Knowledge", ml: "സാമാന്യബോധം" } },
        { id: "opt3", text: { en: "Scientific Method", ml: "ശാസ്ത്രീയ രീതി" } },
        { id: "opt4", text: { en: "Logical Reasoning", ml: "യുക്തിപരമായ ന്യായവാദം" } }
      ],
      answer: { id: "opt2", text: { en: "Commonsense Knowledge", ml: "സാമാന്യബോധം" } }
    },
    {
      q_id: "q26",
      question: { en: "Which approach analyses social factors deeply?", ml: "സാമൂഹിക ഘടകങ്ങളെ ആഴത്തിൽ വിശകലനം ചെയ്യുന്ന സമീപനം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Commonsense Knowledge", ml: "സാമാന്യബോധം" } },
        { id: "opt2", text: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" } },
        { id: "opt3", text: { en: "Superstition", ml: "അന്ധവിശ്വാസം" } },
        { id: "opt4", text: { en: "Guesswork", ml: "ഊഹം" } }
      ],
      answer: { id: "opt2", text: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" } }
    },
    {
      q_id: "q27",
      question: { en: "Is 'Education' a social institution?", ml: "'വിദ്യാഭ്യാസം' ഒരു സാമൂഹിക സ്ഥാപനമാണോ?" },
      options: [
        { id: "opt1", text: { en: "Yes", ml: "അതെ" } },
        { id: "opt2", text: { en: "No", ml: "അല്ല" } },
        { id: "opt3", text: { en: "Maybe", ml: "ഒരുപക്ഷേ" } },
        { id: "opt4", text: { en: "Only in cities", ml: "നഗരങ്ങളിൽ മാത്രം" } }
      ],
      answer: { id: "opt1", text: { en: "Yes", ml: "അതെ" } }
    },
    {
      q_id: "q28",
      question: { en: "Is 'Friendship' a social institution?", ml: "'സൗഹൃദം' ഒരു സാമൂഹിക സ്ഥാപനമാണോ?" },
      options: [
        { id: "opt1", text: { en: "Yes", ml: "അതെ" } },
        { id: "opt2", text: { en: "No, it is a relationship", ml: "അല്ല, അതൊരു ബന്ധമാണ്" } },
        { id: "opt3", text: { en: "It is a structure", ml: "അതൊരു ഘടനയാണ്" } },
        { id: "opt4", text: { en: "It is a problem", ml: "അതൊരു പ്രശ്നമാണ്" } }
      ],
      answer: { id: "opt2", text: { en: "No, it is a relationship", ml: "അല്ല, അതൊരു ബന്ധമാണ്" } }
    },
    {
      q_id: "q29",
      question: { en: "What does 'Social Analysis' examine?", ml: "'സാമൂഹിക വിശകലനം' എന്താണ് പരിശോധിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Rocks and minerals", ml: "പാറകളും ധാതുക്കളും" } },
        { id: "opt2", text: { en: "Impact of social factors", ml: "സാമൂഹിക ഘടകങ്ങളുടെ സ്വാധീനം" } },
        { id: "opt3", text: { en: "Planetary movements", ml: "ഗ്രഹങ്ങളുടെ ചലനങ്ങൾ" } },
        { id: "opt4", text: { en: "Animal behavior", ml: "മൃഗങ്ങളുടെ പെരുമാറ്റം" } }
      ],
      answer: { id: "opt2", text: { en: "Impact of social factors", ml: "സാമൂഹിക ഘടകങ്ങളുടെ സ്വാധീനം" } }
    },
    {
      q_id: "q30",
      question: { en: "Which of these is NOT a social problem?", ml: "ഇവയിൽ ഏതാണ് സാമൂഹിക പ്രശ്നമല്ലാത്തത്?" },
      options: [
        { id: "opt1", text: { en: "Unemployment", ml: "തൊഴിലില്ലായ്മ" } },
        { id: "opt2", text: { en: "Discrimination", ml: "വിവേചനം" } },
        { id: "opt3", text: { en: "Personal debt", ml: "വ്യക്തിപരമായ കടം" } },
        { id: "opt4", text: { en: "Inequality", ml: "അസമത്വം" } }
      ],
      answer: { id: "opt3", text: { en: "Personal debt", ml: "വ്യക്തിപരമായ കടം" } }
    },
    {
      q_id: "q31",
      question: { en: "Commonsense knowledge is acquired through?", ml: "സാമാന്യബോധം എങ്ങനെയാണ് ലഭിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Research", ml: "ഗവേഷണം" } },
        { id: "opt2", text: { en: "Observation and experience", ml: "നിരീക്ഷണവും അനുഭവവും" } },
        { id: "opt3", text: { en: "Textbooks", ml: "പാഠപുസ്തകങ്ങൾ" } },
        { id: "opt4", text: { en: "Experiments", ml: "പരീക്ഷണങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Observation and experience", ml: "നിരീക്ഷണവും അനുഭവവും" } }
    },
    {
      q_id: "q32",
      question: { en: "Sociology is the study of?", ml: "സാമൂഹ്യശാസ്ത്രം എന്തിനെക്കുറിച്ചുള്ള പഠനമാണ്?" },
      options: [
        { id: "opt1", text: { en: "Individuals only", ml: "വ്യക്തികളെക്കുറിച്ച് മാത്രം" } },
        { id: "opt2", text: { en: "Society", ml: "സമൂഹം" } },
        { id: "opt3", text: { en: "Nature", ml: "പ്രകൃതി" } },
        { id: "opt4", text: { en: "Space", ml: "ബഹിരാകാശം" } }
      ],
      answer: { id: "opt2", text: { en: "Society", ml: "സമൂഹം" } }
    },
    {
      q_id: "q33",
      question: { en: "Who among these is a famous sociologist?", ml: "ഇവരിൽ ആരാണ് പ്രശസ്തനായ സാമൂഹ്യശാസ്ത്രജ്ഞൻ?" },
      options: [
        { id: "opt1", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt2", text: { en: "Galileo", ml: "ഗലീലിയോ" } },
        { id: "opt3", text: { en: "Shakespeare", ml: "ഷേക്സ്പിയർ" } },
        { id: "opt4", text: { en: "Picasso", ml: "പിക്കാസോ" } }
      ],
      answer: { id: "opt1", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } }
    },
    {
      q_id: "q34",
      question: { en: "Social structures include?", ml: "സാമൂഹിക ഘടനകളിൽ എന്തൊക്കെ ഉൾപ്പെടുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Buildings", ml: "കെട്ടിടങ്ങൾ" } },
        { id: "opt2", text: { en: "Norms and rules", ml: "മാനദണ്ഡങ്ങളും നിയമങ്ങളും" } },
        { id: "opt3", text: { en: "Rivers", ml: "നദികൾ" } },
        { id: "opt4", text: { en: "Machines", ml: "യന്ത്രങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Norms and rules", ml: "മാനദണ്ഡങ്ങളും നിയമങ്ങളും" } }
    },
    {
      q_id: "q35",
      question: { en: "What helps to see individual problems as social problems?", ml: "വ്യക്തിപരമായ പ്രശ്നങ്ങളെ സാമൂഹിക പ്രശ്നങ്ങളായി കാണാൻ സഹായിക്കുന്നത് എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Microscope", ml: "മൈക്രോസ്കോപ്പ്" } },
        { id: "opt2", text: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" } },
        { id: "opt3", text: { en: "Telescope", ml: "ടെലിസ്കോപ്പ്" } },
        { id: "opt4", text: { en: "Calculator", ml: "കാൽക്കുലേറ്റർ" } }
      ],
      answer: { id: "opt2", text: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" } }
    },
    {
      q_id: "q36",
      question: { en: "Which is an example of a social relationship?", ml: "സാമൂഹിക ബന്ധത്തിന് ഉദാഹരണമേത്?" },
      options: [
        { id: "opt1", text: { en: "Gravity", ml: "ഗുരുത്വാകർഷണം" } },
        { id: "opt2", text: { en: "Affection among family", ml: "കുടുംബാംഗങ്ങൾക്കിടയിലുള്ള സ്നേഹം" } },
        { id: "opt3", text: { en: "Photosynthesis", ml: "പ്രകാശസംശ്ലേഷണം" } },
        { id: "opt4", text: { en: "Digestion", ml: "ദഹനം" } }
      ],
      answer: { id: "opt2", text: { en: "Affection among family", ml: "കുടുംബാംഗങ്ങൾക്കിടയിലുള്ള സ്നേഹം" } }
    },
    {
      q_id: "q37",
      question: { en: "What is the scope of commonsense knowledge?", ml: "സാമാന്യബോധത്തിന്റെ വ്യാപ്തി എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Broad", ml: "വിശാലമായത്" } },
        { id: "opt2", text: { en: "Limited", ml: "പരിമിതമായത്" } },
        { id: "opt3", text: { en: "Infinite", ml: "അനന്തമായത്" } },
        { id: "opt4", text: { en: "Universal", ml: "സാർവത്രികമായത്" } }
      ],
      answer: { id: "opt2", text: { en: "Limited", ml: "പരിമിതമായത്" } }
    },
    {
      q_id: "q38",
      question: { en: "What is the scope of sociological imagination?", ml: "സാമൂഹിക ഭാവനയുടെ വ്യാപ്തി എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Narrow", ml: "ഇടുങ്ങിയത്" } },
        { id: "opt2", text: { en: "Broad", ml: "വിശാലമായത്" } },
        { id: "opt3", text: { en: "Personal", ml: "വ്യക്തിപരം" } },
        { id: "opt4", text: { en: "Tiny", ml: "ചെറുത്" } }
      ],
      answer: { id: "opt2", text: { en: "Broad", ml: "വിശാലമായത്" } }
    },
    {
      q_id: "q39",
      question: { en: "Sociological imagination helps to solve problems by?", ml: "പ്രശ്നങ്ങൾ പരിഹരിക്കാൻ സാമൂഹിക ഭാവന സഹായിക്കുന്നത് എങ്ങനെ?" },
      options: [
        { id: "opt1", text: { en: "Ignoring them", ml: "അവയെ അവഗണിച്ചുകൊണ്ട്" } },
        { id: "opt2", text: { en: "Engaging actively", ml: "സജീവമായി ഇടപെട്ടുകൊണ്ട്" } },
        { id: "opt3", text: { en: "Blaming others", ml: "മറ്റുള്ളവരെ കുറ്റപ്പെടുത്തിക്കൊണ്ട്" } },
        { id: "opt4", text: { en: "Running away", ml: "ഓടിപ്പോയിക്കൊണ്ട്" } }
      ],
      answer: { id: "opt2", text: { en: "Engaging actively", ml: "സജീവമായി ഇടപെട്ടുകൊണ്ട്" } }
    },
    {
      q_id: "q40",
      question: { en: "Stigma surrounding mental health is an example of?", ml: "മാനസികാരോഗ്യത്തെ ചുറ്റിപ്പറ്റിയുള്ള കളങ്കം എന്തിന് ഉദാഹരണമാണ്?" },
      options: [
        { id: "opt1", text: { en: "Positive norm", ml: "പോസിറ്റീവ് മാനദണ്ഡം" } },
        { id: "opt2", text: { en: "Negative social norm", ml: "നിഷേധാത്മക സാമൂഹിക മാനദണ്ഡം" } },
        { id: "opt3", text: { en: "Scientific fact", ml: "ശാസ്ത്രീയ വസ്തുത" } },
        { id: "opt4", text: { en: "Law", ml: "നിയമം" } }
      ],
      answer: { id: "opt2", text: { en: "Negative social norm", ml: "നിഷേധാത്മക സാമൂഹിക മാനദണ്ഡം" } }
    },
    {
      q_id: "q41",
      question: { en: "Who is NOT a sociologist?", ml: "ഇവരിൽ ആരാണ് സാമൂഹ്യശാസ്ത്രജ്ഞനല്ലാത്തത്?" },
      options: [
        { id: "opt1", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } },
        { id: "opt2", text: { en: "Isaac Newton", ml: "ഐസക് ന്യൂട്ടൺ" } },
        { id: "opt3", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt4", text: { en: "C. Wright Mills", ml: "സി. റൈറ്റ് മിൽസ്" } }
      ],
      answer: { id: "opt2", text: { en: "Isaac Newton", ml: "ഐസക് ന്യൂട്ടൺ" } }
    },
    {
      q_id: "q42",
      question: { en: "Social institutions are established to?", ml: "സാമൂഹിക സ്ഥാപനങ്ങൾ സ്ഥാപിക്കപ്പെട്ടിരിക്കുന്നത് എന്തിനാണ്?" },
      options: [
        { id: "opt1", text: { en: "Create chaos", ml: "കുഴപ്പങ്ങൾ സൃഷ്ടിക്കാൻ" } },
        { id: "opt2", text: { en: "Regulate social relations", ml: "സാമൂഹിക ബന്ധങ്ങളെ നിയന്ത്രിക്കാൻ" } },
        { id: "opt3", text: { en: "Make money", ml: "പണം ഉണ്ടാക്കാൻ" } },
        { id: "opt4", text: { en: "Destroy society", ml: "സമൂഹത്തെ നശിപ്പിക്കാൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Regulate social relations", ml: "സാമൂഹിക ബന്ധങ്ങളെ നിയന്ത്രിക്കാൻ" } }
    },
    {
      q_id: "q43",
      question: { en: "Which is a social factor influencing education?", ml: "വിദ്യാഭ്യാസത്തെ സ്വാധീനിക്കുന്ന സാമൂഹിക ഘടകം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Economic status", ml: "സാമ്പത്തിക നില" } },
        { id: "opt2", text: { en: "Gravity", ml: "ഗുരുത്വാകർഷണം" } },
        { id: "opt3", text: { en: "Sunlight", ml: "സൂര്യപ്രകാശം" } },
        { id: "opt4", text: { en: "Wind speed", ml: "കാറ്റിന്റെ വേഗത" } }
      ],
      answer: { id: "opt1", text: { en: "Economic status", ml: "സാമ്പത്തിക നില" } }
    },
    {
      q_id: "q44",
      question: { en: "Commonsense knowledge is often based on?", ml: "സാമാന്യബോധം പലപ്പോഴും എന്തിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Facts", ml: "വസ്തുതകൾ" } },
        { id: "opt2", text: { en: "Stereotypes", ml: "വാർപ്പുമാതൃകകൾ" } },
        { id: "opt3", text: { en: "Data", ml: "ഡാറ്റ" } },
        { id: "opt4", text: { en: "Logic", ml: "യുക്തി" } }
      ],
      answer: { id: "opt2", text: { en: "Stereotypes", ml: "വാർപ്പുമാതൃകകൾ" } }
    },
    {
      q_id: "q45",
      question: { en: "Sociological imagination helps us to stop?", ml: "എന്ത് നിർത്താനാണ് സാമൂഹിക ഭാവന നമ്മെ സഹായിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Thinking", ml: "ചിന്തിക്കുന്നത്" } },
        { id: "opt2", text: { en: "Blaming individuals", ml: "വ്യക്തികളെ കുറ്റപ്പെടുത്തുന്നത്" } },
        { id: "opt3", text: { en: "Helping others", ml: "മറ്റുള്ളവരെ സഹായിക്കുന്നത്" } },
        { id: "opt4", text: { en: "Learning", ml: "പഠിക്കുന്നത്" } }
      ],
      answer: { id: "opt2", text: { en: "Blaming individuals", ml: "വ്യക്തികളെ കുറ്റപ്പെടുത്തുന്നത്" } }
    },
    {
      q_id: "q46",
      question: { en: "A road accident can be analyzed sociologically by looking at?", ml: "ഒരു വാഹനാപകടത്തെ സാമൂഹികമായി വിശകലനം ചെയ്യാൻ എന്ത് നോക്കണം?" },
      options: [
        { id: "opt1", text: { en: "Only the driver", ml: "ഡ്രൈവറെ മാത്രം" } },
        { id: "opt2", text: { en: "Road conditions and traffic rules", ml: "റോഡ് അവസ്ഥകളും ട്രാഫിക് നിയമങ്ങളും" } },
        { id: "opt3", text: { en: "The car's color", ml: "കാറിന്റെ നിറം" } },
        { id: "opt4", text: { en: "The weather only", ml: "കാലാവസ്ഥ മാത്രം" } }
      ],
      answer: { id: "opt2", text: { en: "Road conditions and traffic rules", ml: "റോഡ് അവസ്ഥകളും ട്രാഫിക് നിയമങ്ങളും" } }
    },
    {
      q_id: "q47",
      question: { en: "Social analysis is a process of?", ml: "സാമൂഹിക വിശകലനം എന്തിന്റെ പ്രക്രിയയാണ്?" },
      options: [
        { id: "opt1", text: { en: "Examination", ml: "പരിശോധന" } },
        { id: "opt2", text: { en: "Construction", ml: "നിർമ്മാണം" } },
        { id: "opt3", text: { en: "Destruction", ml: "നശീകരണം" } },
        { id: "opt4", text: { en: "Imagination only", ml: "ഭാവന മാത്രം" } }
      ],
      answer: { id: "opt1", text: { en: "Examination", ml: "പരിശോധന" } }
    },
    {
      q_id: "q48",
      question: { en: "Which of these is a social factor?", ml: "ഇവയിൽ ഏതാണ് സാമൂഹിക ഘടകം?" },
      options: [
        { id: "opt1", text: { en: "Religion", ml: "മതം" } },
        { id: "opt2", text: { en: "Height", ml: "ഉയരം" } },
        { id: "opt3", text: { en: "Weight", ml: "ഭാരം" } },
        { id: "opt4", text: { en: "Hair color", ml: "മുടിയുടെ നിറം" } }
      ],
      answer: { id: "opt1", text: { en: "Religion", ml: "മതം" } }
    },
    {
      q_id: "q49",
      question: { en: "Sociological imagination allows us to see the relationship between?", ml: "എന്തൊക്കെ തമ്മിലുള്ള ബന്ധം കാണാൻ സാമൂഹിക ഭാവന നമ്മെ അനുവദിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "History and Biography", ml: "ചരിത്രവും ജീവചരിത്രവും" } },
        { id: "opt2", text: { en: "Sun and Moon", ml: "സൂര്യനും ചന്ദ്രനും" } },
        { id: "opt3", text: { en: "Cats and Dogs", ml: "പൂച്ചകളും പട്ടികളും" } },
        { id: "opt4", text: { en: "Cars and Bikes", ml: "കാറുകളും ബൈക്കുകളും" } }
      ],
      answer: { id: "opt1", text: { en: "History and Biography", ml: "ചരിത്രവും ജീവചരിത്രവും" } }
    },
    {
      q_id: "q50",
      question: { en: "The term 'Sociology' is derived from?", ml: "'സോഷ്യോളജി' എന്ന പദം എന്തിൽ നിന്നാണ് ഉത്ഭവിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Latin and Greek", ml: "ലാറ്റിൻ, ഗ്രീക്ക്" } },
        { id: "opt2", text: { en: "English", ml: "ഇംഗ്ലീഷ്" } },
        { id: "opt3", text: { en: "Sanskrit", ml: "സംസ്കൃതം" } },
        { id: "opt4", text: { en: "Hindi", ml: "ഹിന്ദി" } }
      ],
      answer: { id: "opt1", text: { en: "Latin and Greek", ml: "ലാറ്റിൻ, ഗ്രീക്ക്" } }
    },
    {
      q_id: "q51",
      question: { en: "Which of the following is a 'Personal Trouble' according to C. Wright Mills?", ml: "സി. റൈറ്റ് മിൽസിന്റെ അഭിപ്രായത്തിൽ താഴെ പറയുന്നവയിൽ ഏതാണ് 'വ്യക്തിപരമായ പ്രശ്നം' (Personal Trouble)?" },
      options: [
        { id: "opt1", text: { en: "Unemployment of millions", ml: "ദശലക്ഷക്കണക്കിന് ആളുകളുടെ തൊഴിലില്ലായ്മ" } },
        { id: "opt2", text: { en: "A student failing an exam due to lack of study", ml: "പഠിക്കാത്തതുകൊണ്ട് ഒരു വിദ്യാർത്ഥി പരീക്ഷയിൽ തോൽക്കുന്നത്" } },
        { id: "opt3", text: { en: "War", ml: "യുദ്ധം" } },
        { id: "opt4", text: { en: "Epidemic", ml: "മഹാമാരി" } }
      ],
      answer: { id: "opt2", text: { en: "A student failing an exam due to lack of study", ml: "പഠിക്കാത്തതുകൊണ്ട് ഒരു വിദ്യാർത്ഥി പരീക്ഷയിൽ തോൽക്കുന്നത്" } }
    },
    {
      q_id: "q52",
      question: { en: "Which of the following is a 'Public Issue'?", ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് 'പൊതുവിഷയം' (Public Issue)?" },
      options: [
        { id: "opt1", text: { en: "A couple getting divorced", ml: "ഒരു ദമ്പതികൾ വിവാഹമോചനം നേടുന്നത്" } },
        { id: "opt2", text: { en: "High divorce rate in a country", ml: "ഒരു രാജ്യത്തെ ഉയർന്ന വിവാഹമോചന നിരക്ക്" } },
        { id: "opt3", text: { en: "A person losing their wallet", ml: "ഒരാളുടെ പേഴ്സ് നഷ്ടപ്പെടുന്നത്" } },
        { id: "opt4", text: { en: "A person disliking their job", ml: "ഒരാൾക്ക് തന്റെ ജോലി ഇഷ്ടപ്പെടാത്തത്" } }
      ],
      answer: { id: "opt2", text: { en: "High divorce rate in a country", ml: "ഒരു രാജ്യത്തെ ഉയർന്ന വിവാഹമോചന നിരക്ക്" } }
    },
    {
      q_id: "q53",
      question: { en: "Social institutions are primarily designed to?", ml: "സാമൂഹിക സ്ഥാപനങ്ങൾ പ്രധാനമായും രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത് എന്തിനാണ്?" },
      options: [
        { id: "opt1", text: { en: "Punish people", ml: "ആളുകളെ ശിക്ഷിക്കാൻ" } },
        { id: "opt2", text: { en: "Stabilize social relations", ml: "സാമൂഹിക ബന്ധങ്ങളെ സുസ്ഥിരമാക്കാൻ" } },
        { id: "opt3", text: { en: "Create confusion", ml: "ആശയക്കുഴപ്പം സൃഷ്ടിക്കാൻ" } },
        { id: "opt4", text: { en: "Separate people", ml: "ആളുകളെ വേർതിരിക്കാൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Stabilize social relations", ml: "സാമൂഹിക ബന്ധങ്ങളെ സുസ്ഥിരമാക്കാൻ" } }
    },
    {
      q_id: "q54",
      question: { en: "Which is NOT a function of social structures?", ml: "സാമൂഹിക ഘടനകളുടെ ധർമ്മമല്ലാത്തത് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Defining status", ml: "പദവി നിർണ്ണയിക്കൽ" } },
        { id: "opt2", text: { en: "Assigning roles", ml: "റോളുകൾ നൽകൽ" } },
        { id: "opt3", text: { en: "Predicting weather", ml: "കാലാവസ്ഥ പ്രവചിക്കൽ" } },
        { id: "opt4", text: { en: "Setting norms", ml: "മാനദണ്ഡങ്ങൾ നിശ്ചയിക്കൽ" } }
      ],
      answer: { id: "opt3", text: { en: "Predicting weather", ml: "കാലാവസ്ഥ പ്രവചിക്കൽ" } }
    },
    {
      q_id: "q55",
      question: { en: "Emile Durkheim is associated with the study of?", ml: "എമിലി ഡർഖൈം എന്തിന്റെ പഠനവുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Suicide", ml: "ആത്മഹത്യ" } },
        { id: "opt2", text: { en: "Dreams", ml: "സ്വപ്നങ്ങൾ" } },
        { id: "opt3", text: { en: "Planets", ml: "ഗ്രഹങ്ങൾ" } },
        { id: "opt4", text: { en: "Atoms", ml: "ആറ്റങ്ങൾ" } }
      ],
      answer: { id: "opt1", text: { en: "Suicide", ml: "ആത്മഹത്യ" } }
    },
    {
      q_id: "q56",
      question: { en: "What does 'Self-reflexivity' help us to evaluate?", ml: "'സ്വയം വിലയിരുത്തൽ' എന്തിനെ വിലയിരുത്താൻ നമ്മെ സഹായിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Others' faults", ml: "മറ്റുള്ളവരുടെ തെറ്റുകൾ" } },
        { id: "opt2", text: { en: "Our own thoughts and actions", ml: "നമ്മുടെ സ്വന്തം ചിന്തകളും പ്രവൃത്തികളും" } },
        { id: "opt3", text: { en: "Government policies", ml: "സർക്കാർ നയങ്ങൾ" } },
        { id: "opt4", text: { en: "School rules", ml: "സ്കൂൾ നിയമങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Our own thoughts and actions", ml: "നമ്മുടെ സ്വന്തം ചിന്തകളും പ്രവൃത്തികളും" } }
    },
    {
      q_id: "q57",
      question: { en: "Sociological imagination helps to identify the relationship between?", ml: "എന്തൊക്കെ തമ്മിലുള്ള ബന്ധം തിരിച്ചറിയാൻ സാമൂഹിക ഭാവന സഹായിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Individual problems and social issues", ml: "വ്യക്തിഗത പ്രശ്നങ്ങളും സാമൂഹിക പ്രശ്നങ്ങളും" } },
        { id: "opt2", text: { en: "Body and Soul", ml: "ശരീരവും ആത്മാവും" } },
        { id: "opt3", text: { en: "Past and Future", ml: "ഭൂതവും ഭാവിയും" } },
        { id: "opt4", text: { en: "Man and Animal", ml: "മനുഷ്യനും മൃഗവും" } }
      ],
      answer: { id: "opt1", text: { en: "Individual problems and social issues", ml: "വ്യക്തിഗത പ്രശ്നങ്ങളും സാമൂഹിക പ്രശ്നങ്ങളും" } }
    },
    {
      q_id: "q58",
      question: { en: "Which of the following is a characteristic of Sociological Imagination?", ml: "താഴെ പറയുന്നവയിൽ സാമൂഹിക ഭാവനയുടെ സവിശേഷത ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Promotes stereotypes", ml: "വാർപ്പുമാതൃകകളെ പ്രോത്സാഹിപ്പിക്കുന്നു" } },
        { id: "opt2", text: { en: "Develops empathy", ml: "സഹാനുഭൂതി വികസിപ്പിക്കുന്നു" } },
        { id: "opt3", text: { en: "Limits perspective", ml: "കാഴ്ചപ്പാടിനെ പരിമിതപ്പെടുത്തുന്നു" } },
        { id: "opt4", text: { en: "Ignores social factors", ml: "സാമൂഹിക ഘടകങ്ങളെ അവഗണിക്കുന്നു" } }
      ],
      answer: { id: "opt2", text: { en: "Develops empathy", ml: "സഹാനുഭൂതി വികസിപ്പിക്കുന്നു" } }
    },
    {
      q_id: "q59",
      question: { en: "What is a 'Stereotype'?", ml: "എന്താണ് 'വാർപ്പുമാതൃക' (Stereotype)?" },
      options: [
        { id: "opt1", text: { en: "A scientifically proven fact", ml: "ശാസ്ത്രീയമായി തെളിയിക്കപ്പെട്ട വസ്തുത" } },
        { id: "opt2", text: { en: "A generalized and oversimplified belief", ml: "പൊതുവായതും ലളിതവൽക്കരിക്കപ്പെട്ടതുമായ വിശ്വാസം" } },
        { id: "opt3", text: { en: "A new invention", ml: "ഒരു പുതിയ കണ്ടുപിടുത്തം" } },
        { id: "opt4", text: { en: "A law of nature", ml: "ഒരു പ്രകൃതി നിയമം" } }
      ],
      answer: { id: "opt2", text: { en: "A generalized and oversimplified belief", ml: "പൊതുവായതും ലളിതവൽക്കരിക്കപ്പെട്ടതുമായ വിശ്വാസം" } }
    },
    {
      q_id: "q60",
      question: { en: "Which approach questions negative social norms?", ml: "നിഷേധാത്മക സാമൂഹിക മാനദണ്ഡങ്ങളെ ചോദ്യം ചെയ്യുന്ന സമീപനം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Commonsense Knowledge", ml: "സാമാന്യബോധം" } },
        { id: "opt2", text: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" } },
        { id: "opt3", text: { en: "Traditionalism", ml: "പാരമ്പര്യവാദം" } },
        { id: "opt4", text: { en: "Ignorance", ml: "അജ്ഞത" } }
      ],
      answer: { id: "opt2", text: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" } }
    },
    {
      q_id: "q61",
      question: { en: "Who among the following is a key thinker in Sociology?", ml: "താഴെ പറയുന്നവരിൽ സാമൂഹ്യശാസ്ത്രത്തിലെ പ്രധാന ചിന്തകൻ ആര്?" },
      options: [
        { id: "opt1", text: { en: "Charles Darwin", ml: "ചാൾസ് ഡാർവിൻ" } },
        { id: "opt2", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt3", text: { en: "Thomas Edison", ml: "തോമസ് എഡിസൺ" } },
        { id: "opt4", text: { en: "Alexander Graham Bell", ml: "അലക്സാണ്ടർ ഗ്രഹാം ബെൽ" } }
      ],
      answer: { id: "opt2", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } }
    },
    {
      q_id: "q62",
      question: { en: "Social analysis helps to understand?", ml: "സാമൂഹിക വിശകലനം എന്ത് മനസ്സിലാക്കാൻ സഹായിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "How society works", ml: "സമൂഹം എങ്ങനെ പ്രവർത്തിക്കുന്നു" } },
        { id: "opt2", text: { en: "How machines work", ml: "യന്ത്രങ്ങൾ എങ്ങനെ പ്രവർത്തിക്കുന്നു" } },
        { id: "opt3", text: { en: "How to cook", ml: "എങ്ങനെ പാചകം ചെയ്യാം" } },
        { id: "opt4", text: { en: "How to drive", ml: "എങ്ങനെ വാഹനം ഓടിക്കാം" } }
      ],
      answer: { id: "opt1", text: { en: "How society works", ml: "സമൂഹം എങ്ങനെ പ്രവർത്തിക്കുന്നു" } }
    },
    {
      q_id: "q63",
      question: { en: "Which of these is an example of a social structure?", ml: "ഇവയിൽ ഏതാണ് സാമൂഹിക ഘടനയ്ക്ക് ഉദാഹരണം?" },
      options: [
        { id: "opt1", text: { en: "A building", ml: "ഒരു കെട്ടിടം" } },
        { id: "opt2", text: { en: "The caste system", ml: "ജാതി വ്യവസ്ഥ" } },
        { id: "opt3", text: { en: "A mountain", ml: "ഒരു പർവ്വതം" } },
        { id: "opt4", text: { en: "A river", ml: "ഒരു നദി" } }
      ],
      answer: { id: "opt2", text: { en: "The caste system", ml: "ജാതി വ്യവസ്ഥ" } }
    },
    {
      q_id: "q64",
      question: { en: "What is the main goal of sociology?", ml: "സാമൂഹ്യശാസ്ത്രത്തിന്റെ പ്രധാന ലക്ഷ്യം എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "To control people", ml: "ആളുകളെ നിയന്ത്രിക്കാൻ" } },
        { id: "opt2", text: { en: "To study society scientifically", ml: "സമൂഹത്തെ ശാസ്ത്രീയമായി പഠിക്കാൻ" } },
        { id: "opt3", text: { en: "To predict the future", ml: "ഭാവി പ്രവചിക്കാൻ" } },
        { id: "opt4", text: { en: "To invent new things", ml: "പുതിയ കാര്യങ്ങൾ കണ്ടുപിടിക്കാൻ" } }
      ],
      answer: { id: "opt2", text: { en: "To study society scientifically", ml: "സമൂഹത്തെ ശാസ്ത്രീയമായി പഠിക്കാൻ" } }
    },
    {
      q_id: "q65",
      question: { en: "Which factor does NOT usually influence social problems?", ml: "സാമൂഹിക പ്രശ്നങ്ങളെ സാധാരണയായി സ്വാധീനിക്കാത്ത ഘടകം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Economic status", ml: "സാമ്പത്തിക നില" } },
        { id: "opt2", text: { en: "Political situation", ml: "രാഷ്ട്രീയ സാഹചര്യം" } },
        { id: "opt3", text: { en: "Planetary alignment", ml: "ഗ്രഹങ്ങളുടെ സ്ഥാനം" } },
        { id: "opt4", text: { en: "Social norms", ml: "സാമൂഹിക മാനദണ്ഡങ്ങൾ" } }
      ],
      answer: { id: "opt3", text: { en: "Planetary alignment", ml: "ഗ്രഹങ്ങളുടെ സ്ഥാനം" } }
    },
    {
      q_id: "q66",
      question: { en: "Commonsense knowledge is often?", ml: "സാമാന്യബോധം പലപ്പോഴും എങ്ങനെയായിരിക്കും?" },
      options: [
        { id: "opt1", text: { en: "Objective", ml: "വസ്തുനിഷ്ഠം" } },
        { id: "opt2", text: { en: "Subjective", ml: "ആത്മനിഷ്ഠം" } },
        { id: "opt3", text: { en: "Universal", ml: "സാർവത്രികം" } },
        { id: "opt4", text: { en: "Scientific", ml: "ശാസ്ത്രീയം" } }
      ],
      answer: { id: "opt2", text: { en: "Subjective", ml: "ആത്മനിഷ്ഠം" } }
    },
    {
      q_id: "q67",
      question: { en: "Sociological imagination helps us to avoid?", ml: "എന്ത് ഒഴിവാക്കാൻ സാമൂഹിക ഭാവന നമ്മെ സഹായിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Truth", ml: "സത്യം" } },
        { id: "opt2", text: { en: "Prejudice", ml: "മുൻവിധി" } },
        { id: "opt3", text: { en: "Knowledge", ml: "അറിവ്" } },
        { id: "opt4", text: { en: "Understanding", ml: "ധാരണ" } }
      ],
      answer: { id: "opt2", text: { en: "Prejudice", ml: "മുൻവിധി" } }
    },
    {
      q_id: "q68",
      question: { en: "Which of these is a social institution?", ml: "ഇവയിൽ ഏതാണ് സാമൂഹിക സ്ഥാപനം?" },
      options: [
        { id: "opt1", text: { en: "Judiciary", ml: "നീതിന്യായ വ്യവസ്ഥ" } },
        { id: "opt2", text: { en: "A park", ml: "ഒരു പാർക്ക്" } },
        { id: "opt3", text: { en: "A mall", ml: "ഒരു മാൾ" } },
        { id: "opt4", text: { en: "A cinema", ml: "ഒരു സിനിമ" } }
      ],
      answer: { id: "opt1", text: { en: "Judiciary", ml: "നീതിന്യായ വ്യവസ്ഥ" } }
    },
    {
      q_id: "q69",
      question: { en: "Social relationships are formed through?", ml: "സാമൂഹിക ബന്ധങ്ങൾ രൂപപ്പെടുന്നത് എന്തിലൂടെയാണ്?" },
      options: [
        { id: "opt1", text: { en: "Isolation", ml: "ഒറ്റപ്പെടൽ" } },
        { id: "opt2", text: { en: "Interaction", ml: "ഇടപെടൽ" } },
        { id: "opt3", text: { en: "Meditation", ml: "ധ്യാനം" } },
        { id: "opt4", text: { en: "Sleep", ml: "ഉറക്കം" } }
      ],
      answer: { id: "opt2", text: { en: "Interaction", ml: "ഇടപെടൽ" } }
    },
    {
      q_id: "q70",
      question: { en: "What is the basis of commonsense?", ml: "സാമാന്യബോധത്തിന്റെ അടിസ്ഥാനം എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Assumptions", ml: "അനുമാനങ്ങൾ" } },
        { id: "opt2", text: { en: "Experiments", ml: "പരീക്ഷണങ്ങൾ" } },
        { id: "opt3", text: { en: "Data analysis", ml: "ഡാറ്റ വിശകലനം" } },
        { id: "opt4", text: { en: "Theories", ml: "സിദ്ധാന്തങ്ങൾ" } }
      ],
      answer: { id: "opt1", text: { en: "Assumptions", ml: "അനുമാനങ്ങൾ" } }
    },
    {
      q_id: "q71",
      question: { en: "Sociology studies society as a?", ml: "സാമൂഹ്യശാസ്ത്രം സമൂഹത്തെ എങ്ങനെയാണ് പഠിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Whole", ml: "സമഗ്രമായി" } },
        { id: "opt2", text: { en: "Collection of individuals only", ml: "വ്യക്തികളുടെ കൂട്ടമായി മാത്രം" } },
        { id: "opt3", text: { en: "Biological organism", ml: "ജൈവ ജീവിയായി" } },
        { id: "opt4", text: { en: "Machine", ml: "യന്ത്രമായി" } }
      ],
      answer: { id: "opt1", text: { en: "Whole", ml: "സമഗ്രമായി" } }
    },
    {
      q_id: "q72",
      question: { en: "Which of the following is NOT a social factor?", ml: "താഴെ പറയുന്നവയിൽ സാമൂഹിക ഘടകമല്ലാത്തത് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Education", ml: "വിദ്യാഭ്യാസം" } },
        { id: "opt2", text: { en: "Blood pressure", ml: "രക്തസമ്മർദ്ദം" } },
        { id: "opt3", text: { en: "Religion", ml: "മതം" } },
        { id: "opt4", text: { en: "Politics", ml: "രാഷ്ട്രീയം" } }
      ],
      answer: { id: "opt2", text: { en: "Blood pressure", ml: "രക്തസമ്മർദ്ദം" } }
    },
    {
      q_id: "q73",
      question: { en: "Critical thinking involves?", ml: "വിമർശനാത്മക ചിന്തയിൽ എന്താണ് ഉൾപ്പെടുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Accepting everything", ml: "എല്ലാം അംഗീകരിക്കൽ" } },
        { id: "opt2", text: { en: "Questioning assumptions", ml: "അനുമാനങ്ങളെ ചോദ്യം ചെയ്യൽ" } },
        { id: "opt3", text: { en: "Memorizing facts", ml: "വസ്തുതകൾ കാണാതെ പഠിക്കൽ" } },
        { id: "opt4", text: { en: "Ignoring problems", ml: "പ്രശ്നങ്ങളെ അവഗണിക്കൽ" } }
      ],
      answer: { id: "opt2", text: { en: "Questioning assumptions", ml: "അനുമാനങ്ങളെ ചോദ്യം ചെയ്യൽ" } }
    },
    {
      q_id: "q74",
      question: { en: "Empathy allows us to?", ml: "സഹാനുഭൂതി നമ്മെ എന്തിന് അനുവദിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Judge others", ml: "മറ്റുള്ളവരെ വിധിക്കാൻ" } },
        { id: "opt2", text: { en: "Understand others' feelings", ml: "മറ്റുള്ളവരുടെ വികാരങ്ങൾ മനസ്സിലാക്കാൻ" } },
        { id: "opt3", text: { en: "Ignore others", ml: "മറ്റുള്ളവരെ അവഗണിക്കാൻ" } },
        { id: "opt4", text: { en: "Hate others", ml: "മറ്റുള്ളവരെ വെറുക്കാൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Understand others' feelings", ml: "മറ്റുള്ളവരുടെ വികാരങ്ങൾ മനസ്സിലാക്കാൻ" } }
    },
    {
      q_id: "q75",
      question: { en: "The book 'The Sociological Imagination' was written in?", ml: "'ദ സോഷ്യോളജിക്കൽ ഇമാജിനേഷൻ' എന്ന പുസ്തകം എഴുതിയത് ഏത് വർഷമാണ്?" },
      options: [
        { id: "opt1", text: { en: "19th Century", ml: "19-ാം നൂറ്റാണ്ട്" } },
        { id: "opt2", text: { en: "20th Century", ml: "20-ാം നൂറ്റാണ്ട്" } },
        { id: "opt3", text: { en: "18th Century", ml: "18-ാം നൂറ്റാണ്ട്" } },
        { id: "opt4", text: { en: "21st Century", ml: "21-ാം നൂറ്റാണ്ട്" } }
      ],
      answer: { id: "opt2", text: { en: "20th Century", ml: "20-ാം നൂറ്റാണ്ട്" } }
    },
    {
      q_id: "q76",
      question: { en: "Who is known as the 'Father of Sociology'?", ml: "'സോഷ്യോളജിയുടെ പിതാവ്' എന്നറിയപ്പെടുന്നത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt2", text: { en: "Auguste Comte", ml: "അഗസ്റ്റ് കോംതെ" } },
        { id: "opt3", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt4", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } }
      ],
      answer: { id: "opt2", text: { en: "Auguste Comte", ml: "അഗസ്റ്റ് കോംതെ" } }
    },
    {
      q_id: "q77",
      question: { en: "The term 'Sociology' was coined in which year?", ml: "'സോഷ്യോളജി' എന്ന പദം ഏത് വർഷമാണ് രൂപപ്പെടുത്തിയത്?" },
      options: [
        { id: "opt1", text: { en: "1789", ml: "1789" } },
        { id: "opt2", text: { en: "1839", ml: "1839" } },
        { id: "opt3", text: { en: "1857", ml: "1857" } },
        { id: "opt4", text: { en: "1901", ml: "1901" } }
      ],
      answer: { id: "opt2", text: { en: "1839", ml: "1839" } }
    },
    {
      q_id: "q78",
      question: { en: "What was the earlier name proposed for Sociology by Auguste Comte?", ml: "അഗസ്റ്റ് കോംതെ സോഷ്യോളജിക്ക് ആദ്യം നിർദ്ദേശിച്ച പേര് എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Social Physics", ml: "സോഷ്യൽ ഫിസിക്സ്" } },
        { id: "opt2", text: { en: "Social Biology", ml: "സോഷ്യൽ ബയോളജി" } },
        { id: "opt3", text: { en: "Social Philosophy", ml: "സോഷ്യൽ ഫിലോസഫി" } },
        { id: "opt4", text: { en: "Social Psychology", ml: "സോഷ്യൽ സൈക്കോളജി" } }
      ],
      answer: { id: "opt1", text: { en: "Social Physics", ml: "സോഷ്യൽ ഫിസിക്സ്" } }
    },
    {
      q_id: "q79",
      question: { en: "Who defined Sociology as the 'science of social institutions'?", ml: "സോഷ്യോളജിയെ 'സാമൂഹിക സ്ഥാപനങ്ങളുടെ ശാസ്ത്രം' എന്ന് നിർവചിച്ചത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } },
        { id: "opt2", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt3", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt4", text: { en: "Herbert Spencer", ml: "ഹെർബർട്ട് സ്പെൻസർ" } }
      ],
      answer: { id: "opt1", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } }
    },
    {
      q_id: "q80",
      question: { en: "Which of the following is an example of a primary group?", ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് പ്രാഥമിക ഗ്രൂപ്പിന് ഉദാഹരണം?" },
      options: [
        { id: "opt1", text: { en: "Political Party", ml: "രാഷ്ട്രീയ പാർട്ടി" } },
        { id: "opt2", text: { en: "Family", ml: "കുടുംബം" } },
        { id: "opt3", text: { en: "Trade Union", ml: "ട്രേഡ് യൂണിയൻ" } },
        { id: "opt4", text: { en: "Corporation", ml: "കോർപ്പറേഷൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Family", ml: "കുടുംബം" } }
    },
    {
      q_id: "q81",
      question: { en: "The process of learning social norms and values is called?", ml: "സാമൂഹിക മാനദണ്ഡങ്ങളും മൂല്യങ്ങളും പഠിക്കുന്ന പ്രക്രിയയെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Socialization", ml: "സാമൂഹ്യവൽക്കരണം" } },
        { id: "opt2", text: { en: "Modernization", ml: "ആധുനികവൽക്കരണം" } },
        { id: "opt3", text: { en: "Industrialization", ml: "വ്യവസായവൽക്കരണം" } },
        { id: "opt4", text: { en: "Urbanization", ml: "നഗരവൽക്കരണം" } }
      ],
      answer: { id: "opt1", text: { en: "Socialization", ml: "സാമൂഹ്യവൽക്കരണം" } }
    },
    {
      q_id: "q82",
      question: { en: "Which sociologist introduced the concept of 'Ideal Type'?", ml: "'ഐഡിയൽ ടൈപ്പ്' (മാതൃകാ രൂപം) എന്ന ആശയം അവതരിപ്പിച്ച സാമൂഹ്യശാസ്ത്രജ്ഞൻ ആര്?" },
      options: [
        { id: "opt1", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt2", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt3", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } },
        { id: "opt4", text: { en: "Auguste Comte", ml: "അഗസ്റ്റ് കോംതെ" } }
      ],
      answer: { id: "opt1", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } }
    },
    {
      q_id: "q83",
      question: { en: "Conflict theory is primarily associated with?", ml: "സംഘർഷ സിദ്ധാന്തം (Conflict Theory) പ്രധാനമായും ആരുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt2", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } },
        { id: "opt3", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt4", text: { en: "Talcott Parsons", ml: "ടാൽക്കോട്ട് പാർസൺസ്" } }
      ],
      answer: { id: "opt1", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } }
    },
    {
      q_id: "q84",
      question: { en: "Which is the smallest unit of society?", ml: "സമൂഹത്തിന്റെ ഏറ്റവും ചെറിയ ഘടകം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Family", ml: "കുടുംബം" } },
        { id: "opt2", text: { en: "Community", ml: "സമൂഹം" } },
        { id: "opt3", text: { en: "State", ml: "സംസ്ഥാനം" } },
        { id: "opt4", text: { en: "Individual", ml: "വ്യക്തി" } }
      ],
      answer: { id: "opt1", text: { en: "Family", ml: "കുടുംബം" } }
    },
    {
      q_id: "q85",
      question: { en: "Social control is maintained through?", ml: "സാമൂഹിക നിയന്ത്രണം നിലനിർത്തുന്നത് എന്തിലൂടെയാണ്?" },
      options: [
        { id: "opt1", text: { en: "Norms and Laws", ml: "മാനദണ്ഡങ്ങളും നിയമങ്ങളും" } },
        { id: "opt2", text: { en: "Chaos", ml: "അരാജകത്വം" } },
        { id: "opt3", text: { en: "Isolation", ml: "ഒറ്റപ്പെടൽ" } },
        { id: "opt4", text: { en: "War", ml: "യുദ്ധം" } }
      ],
      answer: { id: "opt1", text: { en: "Norms and Laws", ml: "മാനദണ്ഡങ്ങളും നിയമങ്ങളും" } }
    },
    {
      q_id: "q86",
      question: { en: "Who wrote the book 'The Communist Manifesto'?", ml: "'കമ്മ്യൂണിസ്റ്റ് മാനിഫെസ്റ്റോ' എന്ന പുസ്തകം എഴുതിയത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Karl Marx and Friedrich Engels", ml: "കാൾ മാർക്സും ഫ്രെഡറിക് ഏംഗൽസും" } },
        { id: "opt2", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt3", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } },
        { id: "opt4", text: { en: "Auguste Comte", ml: "അഗസ്റ്റ് കോംതെ" } }
      ],
      answer: { id: "opt1", text: { en: "Karl Marx and Friedrich Engels", ml: "കാൾ മാർക്സും ഫ്രെഡറിക് ഏംഗൽസും" } }
    },
    {
      q_id: "q87",
      question: { en: "Which of the following is NOT a characteristic of culture?", ml: "താഴെ പറയുന്നവയിൽ സംസ്കാരത്തിന്റെ സവിശേഷത അല്ലാത്തത് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "It is learned", ml: "ഇത് പഠിച്ചെടുക്കുന്നതാണ്" } },
        { id: "opt2", text: { en: "It is shared", ml: "ഇത് പങ്കുവെക്കപ്പെടുന്നതാണ്" } },
        { id: "opt3", text: { en: "It is static", ml: "ഇത് മാറ്റമില്ലാത്തതാണ്" } },
        { id: "opt4", text: { en: "It is transmitted", ml: "ഇത് കൈമാറ്റം ചെയ്യപ്പെടുന്നതാണ്" } }
      ],
      answer: { id: "opt3", text: { en: "It is static", ml: "ഇത് മാറ്റമില്ലാത്തതാണ്" } }
    },
    {
      q_id: "q88",
      question: { en: "The expected behavior associated with a status is called?", ml: "ഒരു പദവിയുമായി ബന്ധപ്പെട്ട പ്രതീക്ഷിക്കുന്ന പെരുമാറ്റത്തെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Role", ml: "പങ്ക് (Role)" } },
        { id: "opt2", text: { en: "Status", ml: "പദവി" } },
        { id: "opt3", text: { en: "Norm", ml: "മാനദണ്ഡം" } },
        { id: "opt4", text: { en: "Value", ml: "മൂല്യം" } }
      ],
      answer: { id: "opt1", text: { en: "Role", ml: "പങ്ക് (Role)" } }
    },
    {
      q_id: "q89",
      question: { en: "Which research method involves in-depth study of a single case?", ml: "ഒരു കേസിനെക്കുറിച്ചുള്ള ആഴത്തിലുള്ള പഠനം ഉൾപ്പെടുന്ന ഗവേഷണ രീതി ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Case Study", ml: "കേസ് സ്റ്റഡി" } },
        { id: "opt2", text: { en: "Survey", ml: "സർവേ" } },
        { id: "opt3", text: { en: "Experiment", ml: "പരീക്ഷണം" } },
        { id: "opt4", text: { en: "Observation", ml: "നിരീക്ഷണം" } }
      ],
      answer: { id: "opt1", text: { en: "Case Study", ml: "കേസ് സ്റ്റഡി" } }
    },
    {
      q_id: "q90",
      question: { en: "Who proposed the theory of 'Social Evolution'?", ml: "'സാമൂഹിക പരിണാമ' സിദ്ധാന്തം മുന്നോട്ടുവെച്ചത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Herbert Spencer", ml: "ഹെർബർട്ട് സ്പെൻസർ" } },
        { id: "opt2", text: { en: "Charles Darwin", ml: "ചാൾസ് ഡാർവിൻ" } },
        { id: "opt3", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt4", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } }
      ],
      answer: { id: "opt1", text: { en: "Herbert Spencer", ml: "ഹെർബർട്ട് സ്പെൻസർ" } }
    },
    {
      q_id: "q91",
      question: { en: "What is the primary tool of sociological research?", ml: "സാമൂഹ്യശാസ്ത്ര ഗവേഷണത്തിന്റെ പ്രധാന ഉപകരണം എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Observation", ml: "നിരീക്ഷണം" } },
        { id: "opt2", text: { en: "Microscope", ml: "മൈക്രോസ്കോപ്പ്" } },
        { id: "opt3", text: { en: "Telescope", ml: "ടെലിസ്കോപ്പ്" } },
        { id: "opt4", text: { en: "Calculator", ml: "കാൽക്കുലേറ്റർ" } }
      ],
      answer: { id: "opt1", text: { en: "Observation", ml: "നിരീക്ഷണം" } }
    },
    {
      q_id: "q92",
      question: { en: "Which of the following is an agent of socialization?", ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് സാമൂഹ്യവൽക്കരണത്തിന്റെ ഒരു ഏജന്റ്?" },
      options: [
        { id: "opt1", text: { en: "School", ml: "സ്കൂൾ" } },
        { id: "opt2", text: { en: "Family", ml: "കുടുംബം" } },
        { id: "opt3", text: { en: "Media", ml: "മാധ്യമങ്ങൾ" } },
        { id: "opt4", text: { en: "All of the above", ml: "മുകളിൽ പറഞ്ഞവയെല്ലാം" } }
      ],
      answer: { id: "opt4", text: { en: "All of the above", ml: "മുകളിൽ പറഞ്ഞവയെല്ലാം" } }
    },
    {
      q_id: "q93",
      question: { en: "The ability to see the strange in the familiar is related to?", ml: "പരിചിതമായതിൽ അപരിചിതമായതിനെ കാണാനുള്ള കഴിവ് എന്തുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" } },
        { id: "opt2", text: { en: "Psychological Analysis", ml: "മനഃശാസ്ത്ര വിശകലനം" } },
        { id: "opt3", text: { en: "Historical Research", ml: "ചരിത്ര ഗവേഷണം" } },
        { id: "opt4", text: { en: "Economic Planning", ml: "സാമ്പത്തിക ആസൂത്രണം" } }
      ],
      answer: { id: "opt1", text: { en: "Sociological Imagination", ml: "സാമൂഹിക ഭാവന" } }
    },
    {
      q_id: "q94",
      question: { en: "Which type of society is based on agriculture?", ml: "കൃഷിയെ അടിസ്ഥാനമാക്കിയുള്ള സമൂഹം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Agrarian Society", ml: "കാർഷിക സമൂഹം" } },
        { id: "opt2", text: { en: "Industrial Society", ml: "വ്യവസായ സമൂഹം" } },
        { id: "opt3", text: { en: "Tribal Society", ml: "ഗോത്ര സമൂഹം" } },
        { id: "opt4", text: { en: "Post-industrial Society", ml: "വ്യവസായാനന്തര സമൂഹം" } }
      ],
      answer: { id: "opt1", text: { en: "Agrarian Society", ml: "കാർഷിക സമൂഹം" } }
    },
    {
      q_id: "q95",
      question: { en: "Social stratification refers to?", ml: "സാമൂഹിക ശ്രേണീകരണം (Social Stratification) എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Equality in society", ml: "സമൂഹത്തിലെ സമത്വം" } },
        { id: "opt2", text: { en: "Ranking of individuals", ml: "വ്യക്തികളുടെ തരംതിരിക്കൽ" } },
        { id: "opt3", text: { en: "Social gathering", ml: "സാമൂഹിക ഒത്തുചേരൽ" } },
        { id: "opt4", text: { en: "Cultural exchange", ml: "സാംസ്കാരിക കൈമാറ്റം" } }
      ],
      answer: { id: "opt2", text: { en: "Ranking of individuals", ml: "വ്യക്തികളുടെ തരംതിരിക്കൽ" } }
    },
    {
      q_id: "q96",
      question: { en: "Who studied the 'Protestant Ethic and the Spirit of Capitalism'?", ml: "'പ്രൊട്ടസ്റ്റന്റ് എത്തിക് ആൻഡ് ദ സ്പിരിറ്റ് ഓഫ് ക്യാപിറ്റലിസം' പഠിച്ചത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt2", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt3", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } },
        { id: "opt4", text: { en: "Auguste Comte", ml: "അഗസ്റ്റ് കോംതെ" } }
      ],
      answer: { id: "opt1", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } }
    },
    {
      q_id: "q97",
      question: { en: "What is the main focus of 'Macro-sociology'?", ml: "'മാക്രോ-സോഷ്യോളജി'യുടെ പ്രധാന ശ്രദ്ധാകേന്ദ്രം എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Small groups", ml: "ചെറിയ ഗ്രൂപ്പുകൾ" } },
        { id: "opt2", text: { en: "Large scale social systems", ml: "വലിയ തോതിലുള്ള സാമൂഹിക സംവിധാനങ്ങൾ" } },
        { id: "opt3", text: { en: "Individual behavior", ml: "വ്യക്തിഗത പെരുമാറ്റം" } },
        { id: "opt4", text: { en: "Face-to-face interaction", ml: "മുഖാമുഖ ഇടപെടൽ" } }
      ],
      answer: { id: "opt2", text: { en: "Large scale social systems", ml: "വലിയ തോതിലുള്ള സാമൂഹിക സംവിധാനങ്ങൾ" } }
    },
    {
      q_id: "q98",
      question: { en: "Which of the following is an informal method of social control?", ml: "താഴെ പറയുന്നവയിൽ സാമൂഹിക നിയന്ത്രണത്തിന്റെ അനൗദ്യോഗിക മാർഗ്ഗം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Police", ml: "പോലീസ്" } },
        { id: "opt2", text: { en: "Court", ml: "കോടതി" } },
        { id: "opt3", text: { en: "Gossip", ml: "ഗോസിപ്പ് (അഭ്യൂഹം)" } },
        { id: "opt4", text: { en: "Prison", ml: "ജയിൽ" } }
      ],
      answer: { id: "opt3", text: { en: "Gossip", ml: "ഗോസിപ്പ് (അഭ്യൂഹം)" } }
    },
    {
      q_id: "q99",
      question: { en: "The concept of 'Anomie' (normlessness) was introduced by?", ml: "'അനോമി' (Anomie - മാനദണ്ഡമില്ലാത്ത അവസ്ഥ) എന്ന ആശയം അവതരിപ്പിച്ചത് ആരാണ്?" },
      options: [
        { id: "opt1", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } },
        { id: "opt2", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { id: "opt3", text: { en: "Max Weber", ml: "മാക്സ് വെബർ" } },
        { id: "opt4", text: { en: "Auguste Comte", ml: "അഗസ്റ്റ് കോംതെ" } }
      ],
      answer: { id: "opt1", text: { en: "Emile Durkheim", ml: "എമിലി ഡർഖൈം" } }
    },
    {
      q_id: "q100",
      question: { en: "Sociology helps us to?", ml: "സോഷ്യോളജി നമ്മെ എന്തിന് സഹായിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Predict the future accurately", ml: "ഭാവി കൃത്യമായി പ്രവചിക്കാൻ" } },
        { id: "opt2", text: { en: "Understand social forces", ml: "സാമൂഹിക ശക്തികളെ മനസ്സിലാക്കാൻ" } },
        { id: "opt3", text: { en: "Control people's minds", ml: "ആളുകളുടെ മനസ്സിനെ നിയന്ത്രിക്കാൻ" } },
        { id: "opt4", text: { en: "Isolate from society", ml: "സമൂഹത്തിൽ നിന്ന് ഒറ്റപ്പെടാൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Understand social forces", ml: "സാമൂഹിക ശക്തികളെ മനസ്സിലാക്കാൻ" } }
    }
  ],
  sample_questions: [
    {
      q_id: "sq1",
      question: { en: "What is commonsense knowledge?", ml: "എന്താണ് സാമാന്യബോധം?" },
      answer: { en: "Commonsense knowledge is the direct understanding individuals acquire about the world through personal experiences, social interactions, and cultural knowledge. It is not formal or scientific knowledge.", ml: "വ്യക്തിപരമായ അനുഭവങ്ങൾ, സാമൂഹിക ഇടപെടലുകൾ, സാംസ്കാരിക അറിവുകൾ എന്നിവയിലൂടെ വ്യക്തികൾ ലോകത്തെക്കുറിച്ച് നേരിട്ട് നേടുന്ന ധാരണയാണ് സാമാന്യബോധം. ഇത് ഔദ്യോഗികമോ ശാസ്ത്രീയമോ ആയ അറിവല്ല." }
    },
    {
      q_id: "sq2",
      question: { en: "List any two limitations of commonsense knowledge.", ml: "സാമാന്യബോധത്തിന്റെ ഏതെങ്കിലും രണ്ട് പരിമിതികൾ പട്ടികപ്പെടുത്തുക." },
      answer: { en: "It provides only a partial understanding of complex social problems. It relies on speculations, practices, and stereotypes rather than scientific studies.", ml: "ഇത് സങ്കീർണ്ണമായ സാമൂഹിക പ്രശ്നങ്ങളെക്കുറിച്ച് ഭാഗികമായ ധാരണ മാത്രമേ നൽകുന്നുള്ളൂ. ഇത് ശാസ്ത്രീയ പഠനങ്ങളേക്കാൾ ഊഹങ്ങൾ, ശീലങ്ങൾ, വാർപ്പുമാതൃകകൾ എന്നിവയെ ആശ്രയിക്കുന്നു." }
    },
    {
      q_id: "sq3",
      question: { en: "Define a 'Social Problem' with an example.", ml: "ഒരു ഉദാഹരണസഹിതം 'സാമൂഹിക പ്രശ്നം' നിർവചിക്കുക." },
      answer: { en: "A social problem is a problem or condition that affects a large number of people in society. Example: Poverty, Unemployment, Environmental pollution.", ml: "സമൂഹത്തിലെ വലിയൊരു വിഭാഗം ആളുകളെ ബാധിക്കുന്ന ഒരു പ്രശ്നത്തെയോ അവസ്ഥയെയോ ആണ് സാമൂഹിക പ്രശ്നം എന്ന് പറയുന്നത്. ഉദാഹരണം: ദാരിദ്ര്യം, തൊഴിലില്ലായ്മ, പരിസ്ഥിതി മലിനീകരണം." }
    },
    {
      q_id: "sq4",
      question: { en: "Who coined the concept of 'Sociological Imagination' and in which book?", ml: "'സാമൂഹിക ഭാവന' എന്ന ആശയം രൂപപ്പെടുത്തിയത് ആരാണ്, ഏത് പുസ്തകത്തിലാണ്?" },
      answer: { en: "The concept of sociological imagination was introduced by the American Sociologist Charles Wright Mills. He introduced it in his book 'The Sociological Imagination' published in 1959.", ml: "അമേരിക്കൻ സാമൂഹ്യശാസ്ത്രജ്ഞനായ ചാൾസ് റൈറ്റ് മിൽസ് ആണ് സാമൂഹിക ഭാവന എന്ന ആശയം അവതരിപ്പിച്ചത്. 1959-ൽ പ്രസിദ്ധീകരിച്ച തന്റെ 'ദ സോഷ്യോളജിക്കൽ ഇമാജിനേഷൻ' എന്ന പുസ്തകത്തിലാണ് അദ്ദേഹം ഇത് അവതരിപ്പിച്ചത്." }
    },
    {
      q_id: "sq5",
      question: { en: "What do you understand by 'Sociological Imagination'?", ml: "'സാമൂഹിക ഭാവന' എന്നതുകൊണ്ട് നിങ്ങൾ എന്താണ് മനസ്സിലാക്കുന്നത്?" },
      answer: { en: "Sociological imagination is the skill to identify and analyse how individual problems are related to broader social structures. It enables individuals to view their personal experiences in the context of the wider society.", ml: "വ്യക്തിപരമായ പ്രശ്നങ്ങൾ എങ്ങനെ വിശാലമായ സാമൂഹിക ഘടനകളുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു എന്ന് തിരിച്ചറിയാനും വിശകലനം ചെയ്യാനുമുള്ള കഴിവാണ് സാമൂഹിക ഭാവന. വിശാലമായ സമൂഹത്തിന്റെ പശ്ചാത്തലത്തിൽ തങ്ങളുടെ വ്യക്തിപരമായ അനുഭവങ്ങളെ നോക്കിക്കാണാൻ ഇത് വ്യക്തികളെ പ്രാപ്തരാക്കുന്നു." }
    },
    {
      q_id: "sq6",
      question: { en: "Differentiate between Social Institutions and Social Structures.", ml: "സാമൂഹിക സ്ഥാപനങ്ങളും സാമൂഹിക ഘടനകളും തമ്മിലുള്ള വ്യത്യാസം വ്യക്തമാക്കുക." },
      answer: { en: "Social Institutions are the framework of rules established by society to regulate social relations (Example: Family, Education). Social Structures explain and implement the status, roles, and responsibilities of individuals in society (Example: Norms and rules).", ml: "സാമൂഹിക ബന്ധങ്ങളെ നിയന്ത്രിക്കുന്നതിനായി സമൂഹം സ്ഥാപിച്ച നിയമങ്ങളുടെ ചട്ടക്കൂടാണ് സാമൂഹിക സ്ഥാപനങ്ങൾ (ഉദാഹരണം: കുടുംബം, വിദ്യാഭ്യാസം). സമൂഹത്തിൽ വ്യക്തികളുടെ പദവി, റോളുകൾ, ഉത്തരവാദിത്തങ്ങൾ എന്നിവ വിശദീകരിക്കുകയും നടപ്പിലാക്കുകയും ചെയ്യുന്നതാണ് സാമൂഹിക ഘടനകൾ (ഉദാഹരണം: മാനദണ്ഡങ്ങളും നിയമങ്ങളും)." }
    },
    {
      q_id: "sq7",
      question: { en: "How does sociological imagination develop empathy and tolerance?", ml: "സാമൂഹിക ഭാവന എങ്ങനെയാണ് സഹാനുഭൂതിയും സഹിഷ്ണുതയും വികസിപ്പിക്കുന്നത്?" },
      answer: { en: "Sociological imagination helps us understand the social and background factors behind a person's behavior or failure. By understanding these diverse contexts, we stop blaming the individual and develop empathy and tolerance towards them.", ml: "ഒരാളുടെ പെരുമാറ്റത്തിനോ പരാജയത്തിനോ പിന്നിലെ സാമൂഹികവും പശ്ചാത്തലപരവുമായ ഘടകങ്ങൾ മനസ്സിലാക്കാൻ സാമൂഹിക ഭാവന നമ്മെ സഹായിക്കുന്നു. ഈ വ്യത്യസ്ത സാഹചര്യങ്ങൾ മനസ്സിലാക്കുന്നതിലൂടെ, നമ്മൾ വ്യക്തിയെ കുറ്റപ്പെടുത്തുന്നത് നിർത്തുകയും അവരോട് സഹാനുഭൂതിയും സഹിഷ്ണുതയും വികസിപ്പിക്കുകയും ചെയ്യുന്നു." }
    },
    {
      q_id: "sq8",
      question: { en: "What was the major finding of Emile Durkheim in his book 'Suicide'?", ml: "എമിലി ഡർഖൈം തന്റെ 'സ്യൂയിസൈഡ്' (ആത്മഹത്യ) എന്ന പുസ്തകത്തിൽ കണ്ടെത്തിയ പ്രധാന കാര്യം എന്തായിരുന്നു?" },
      answer: { en: "Emile Durkheim studied the causes of suicide and found that it is not merely a personal matter. He proved that people commit suicide due to broader social reasons more than personal ones.", ml: "എമിലി ഡർഖൈം ആത്മഹത്യയുടെ കാരണങ്ങളെക്കുറിച്ച് പഠിക്കുകയും അത് കേവലം ഒരു വ്യക്തിപരമായ കാര്യമല്ലെന്ന് കണ്ടെത്തുകയും ചെയ്തു. വ്യക്തിപരമായ കാരണങ്ങളേക്കാൾ വിശാലമായ സാമൂഹിക കാരണങ്ങളാലാണ് ആളുകൾ ആത്മഹത്യ ചെയ്യുന്നതെന്ന് അദ്ദേഹം തെളിയിച്ചു." }
    },
    {
      q_id: "sq9",
      question: { en: "How does the sociological imagination approach differ from the commonsense knowledge approach?", ml: "സാമൂഹിക ഭാവനയുടെ സമീപനം സാമാന്യബോധ സമീപനത്തിൽ നിന്ന് എങ്ങനെ വ്യത്യാസപ്പെട്ടിരിക്കുന്നു?" },
      answer: { en: "Commonsense knowledge provides a superficial explanation based on personal views and stereotypes. Sociological imagination provides a deep analysis by connecting personal experiences to larger social structures using critical thinking.", ml: "സാമാന്യബോധം വ്യക്തിപരമായ കാഴ്ചപ്പാടുകളെയും വാർപ്പുമാതൃകകളെയും അടിസ്ഥാനമാക്കി ഒരു ഉപരിപ്ലവമായ വിശദീകരണം നൽകുന്നു. സാമൂഹിക ഭാവന വ്യക്തിപരമായ അനുഭവങ്ങളെ വലിയ സാമൂഹിക ഘടനകളുമായി ബന്ധിപ്പിച്ച് വിമർശനാത്മക ചിന്ത ഉപയോഗിച്ച് ആഴത്തിലുള്ള വിശകലനം നൽകുന്നു." }
    },
    {
      q_id: "sq10",
      question: { en: "What is meant by 'Self-reflection' in sociology?", ml: "സാമൂഹ്യശാസ്ത്രത്തിൽ 'സ്വയം വിലയിരുത്തൽ (ആത്മപരിശോധന)' എന്നതുകൊണ്ട് എന്താണ് അർത്ഥമാക്കുന്നത്?" },
      answer: { en: "Self-reflection is the skill to critically evaluate one's own thoughts, choices, and actions. It helps individuals realize how their personal choices are often influenced by society, family, and peers.", ml: "സ്വന്തം ചിന്തകൾ, തിരഞ്ഞെടുപ്പുകൾ, പ്രവൃത്തികൾ എന്നിവയെ വിമർശനാത്മകമായി വിലയിരുത്താനുള്ള കഴിവാണ് സ്വയം വിലയിരുത്തൽ. തങ്ങളുടെ വ്യക്തിപരമായ തിരഞ്ഞെടുപ്പുകൾ പലപ്പോഴും സമൂഹം, കുടുംബം, സുഹൃത്തുക്കൾ എന്നിവരാൽ എങ്ങനെ സ്വാധീനിക്കപ്പെടുന്നു എന്ന് തിരിച്ചറിയാൻ ഇത് വ്യക്തികളെ സഹായിക്കുന്നു." }
    }
  ]
};
