import { Lesson } from './curriculum';

export const lessonVishukkani: Lesson = {
  id: "ml-ii-u2-l1",
  title: { en: "Vishukkani", ml: "വിഷുക്കണി" },
  estimated_time_mins: 60,
  learning_objectives: [],
  content: {
    intro: { en: "Poem by Vyloppilli Sreedhara Menon", ml: "വൈലോപ്പിള്ളി ശ്രീധരമേനോന്റെ കവിത" },
    core: { en: "The social meanings of Vishukkani and the poet's social vision.", ml: "വിഷുക്കണിയുടെ സാമൂഹികമായ അർത്ഥതലങ്ങളും കവിയുടെ സാമൂഹിക ദർശനവുമാണ് ഈ കവിതയുടെ പ്രധാന പ്രമേയം." },
    blocks: [
      { type: 'h2', en: 'Key Concepts', ml: 'പ്രധാന ആശയങ്ങൾ' },
      { type: 'p', en: 'Disagreement with blind rituals: After seeing the rich Vishukkani, the poet thinks about the neighbors\' homes still in darkness.', ml: 'അന്ധമായ ആചാരങ്ങളോടുള്ള വിയോജിപ്പ്: സമ്പന്നമായ വിഷുക്കണി കണ്ടതിനുശേഷം കവി തൻ്റെ കൺതുറക്കാത്ത അനുജത്തിമാർ കാണെ ഐശ്വര്യത്തിൻ്റെ പാവനമായ ശിൽപ്പം കൺതുറന്നു കാണുന്നു. എന്നാൽ, ചുറ്റുമുള്ള ഉൾനാട്ടിലെ ചങ്ങാതിമാരുടെ വീടുകളെല്ലാം ഇപ്പോഴും ഇരുട്ടിൽത്തന്നെയാണോ എന്നദ്ദേഹം ചിന്തിക്കുന്നു.' },
      { type: 'p', en: 'Equality and Social Criticism: The poet criticizes limiting prosperity to small coins for the poor while the rich enjoy it.', ml: 'സമത്വബോധം/സാമൂഹിക വിമർശനം: ഐശ്വര്യത്തിൻ്റെ ദേവതയായ മഹാലക്ഷ്മി കനിവിൻ്റെ പര്യായമാണെന്നും, വിയർപ്പുരാഴിയിൽപ്പിറന്ന് മഴപോലെ വർഷിക്കുമ്പോൾ, കരിമണ്ണിൻ്റെ കൊടിയും കണിക്കൊന്നയുടെ സ്വർണ്ണപുണ്യവുമാണ് അവളെന്നും കവി പറയുന്നു. അത്തരമൊരു ദേവതയെ ചെറുവട്ടത്തിൽ പൂട്ടിയിട്ട് ദരിദ്രർക്ക് നൽകുന്ന പിച്ചക്കൈനീട്ടവെള്ളിക്കാശിൽ ഒതുക്കുന്നത് ശരിയല്ല എന്ന ചിന്ത കവി പങ്കുവെക്കുന്നു.' },
      { type: 'p', en: 'The poet wishes for prosperity in all homes.', ml: 'ആശംസ: എല്ലാ വീടുകളിലും കണി നിരന്നിരുന്ന് അന്നപൂർണ്ണയായ ദേവി വിളയാടുമോ എന്ന് കവി ആഗ്രഹിക്കുന്നു.' }
    ]
  },
  glossary: [],
  quiz: [],
  sample_questions: [
    { q_id: "q1", question: { en: "Who is the author of 'Vishukkani'?", ml: "'വിഷുക്കണി' എന്ന കവിതയുടെ രചയിതാവ് ആര്?" }, answer: { en: "Vyloppilli Sreedhara Menon", ml: "വൈലോപ്പിള്ളി ശ്രീധരമേനോൻ" } },
    { q_id: "q2", question: { en: "What is the main theme of the poem?", ml: "കവിതയുടെ പ്രധാന പ്രമേയം എന്താണ്?", type: "essay" }, answer: { en: "Social meanings of Vishukkani and the poet's social vision.", ml: "വിഷുക്കണിയുടെ സാമൂഹികമായ അർത്ഥതലങ്ങളും കവിയുടെ സാമൂഹിക ദർശനവും." } },
    { q_id: "q3", question: { en: "How does the poet view blind rituals?", ml: "അന്ധമായ ആചാരങ്ങളെ കവി എങ്ങനെയാണ് കാണുന്നത്?", type: "essay" }, answer: { en: "With disagreement.", ml: "വിയോജിപ്പോടെ." } },
    { q_id: "q4", question: { en: "What does the poet wish for?", ml: "കവി എന്താണ് ആഗ്രഹിക്കുന്നത്?", type: "short" }, answer: { en: "Prosperity in all homes.", ml: "എല്ലാ വീടുകളിലും ഐശ്വര്യം." } },
    { q_id: "q5", question: { en: "What is the poet's view on equality?", ml: "സമത്വത്തെക്കുറിച്ച് കവിയുടെ കാഴ്ചപ്പാട് എന്താണ്?", type: "essay" }, answer: { en: "The poet criticizes the inequality where the poor are given small coins while the rich enjoy prosperity.", ml: "ദരിദ്രർക്ക് നൽകുന്ന പിച്ചക്കൈനീട്ടവെള്ളിക്കാശിൽ ഐശ്വര്യത്തെ ഒതുക്കുന്നത് ശരിയല്ലെന്ന് കവി വിമർശിക്കുന്നു." } },
    { q_id: "q6", question: { en: "Explain the poet's social vision.", ml: "കവിയുടെ സാമൂഹിക ദർശനം വിശദീകരിക്കുക.", type: "essay" }, answer: { en: "He envisions a society where prosperity is shared equally.", ml: "എല്ലാ വീടുകളിലും കണി നിരന്നിരുന്ന് അന്നപൂർണ്ണയായ ദേവി വിളയാടുന്ന ഒരു സമൂഹത്തെ അദ്ദേഹം വിഭാവനം ചെയ്യുന്നു." } },
    { q_id: "q7", question: { en: "What does the poet think about the neighbors' homes?", ml: "ചുറ്റുമുള്ള ചങ്ങാതിമാരുടെ വീടുകളെക്കുറിച്ച് കവി എന്താണ് ചിന്തിക്കുന്നത്?", type: "short" }, answer: { en: "He wonders if they are still in darkness.", ml: "അവ ഇപ്പോഴും ഇരുട്ടിൽത്തന്നെയാണോ എന്ന് അദ്ദേഹം ചിന്തിക്കുന്നു." } },
    { q_id: "q8", question: { en: "Who is the goddess of prosperity?", ml: "ഐശ്വര്യത്തിൻ്റെ ദേവത ആര്?", type: "short" }, answer: { en: "Mahalakshmi", ml: "മഹാലക്ഷ്മി" } },
    { q_id: "q9", question: { en: "What is the poet's view on the goddess?", ml: "ദേവതയെക്കുറിച്ച് കവിയുടെ കാഴ്ചപ്പാട് എന്ത്?", type: "short" }, answer: { en: "She is the embodiment of kindness.", ml: "അവൾ കനിവിൻ്റെ പര്യായമാണ്." } },
    { q_id: "q10", question: { en: "What does the poet say about the coins given to the poor?", ml: "ദരിദ്രർക്ക് നൽകുന്ന വെള്ളിക്കാശിനെക്കുറിച്ച് കവി എന്താണ് പറയുന്നത്?", type: "short" }, answer: { en: "It is not right to limit prosperity to small coins.", ml: "അതിൽ ഐശ്വര്യത്തെ ഒതുക്കുന്നത് ശരിയല്ല." } }
  ]
};

export const lessonAnandashrukkal: Lesson = {
  id: "ml-ii-u2-l2",
  title: { en: "Anandashrukkal", ml: "ആനന്ദാശ്രുക്കൾ" },
  estimated_time_mins: 60,
  learning_objectives: [],
  content: {
    intro: { en: "Novel excerpt by Sara Thomas", ml: "സാറാ തോമസിന്റെ നോവൽ ഭാഗം" },
    core: { en: "Survival of an orphan boy named Jose and the importance of love and care.", ml: "അനാഥനായ ജോസ് എന്ന കുട്ടിയുടെ അതിജീവനവും, സ്നേഹവാത്സല്യത്തിൻ്റെയും കരുതലിൻ്റെയും പ്രാധാന്യവും." },
    blocks: [
      { type: 'h2', en: 'Key Concepts', ml: 'പ്രധാന ആശയങ്ങൾ' },
      { type: 'p', en: 'Pain of orphanhood: Jose felt alone and pained when friends talked about their families.', ml: 'അനാഥത്വത്തിൻ്റെ വേദന: ഓർഫനേജിൽ വളരുന്ന ജോസിന് തൻ്റെ മാതാപിതാക്കളെപ്പറ്റി ഒരറിവും ഉണ്ടായിരുന്നില്ല. തന്നെ സ്വന്തമെന്ന് അവകാശപ്പെടാൻ ആരുമില്ലല്ലോ എന്ന ചിന്ത അവനെ അലട്ടി. സ്കൂളിൽ കൂട്ടുകാർ കുടുംബത്തെക്കുറിച്ച് പറയുമ്പോൾ അവന്റെ കൊച്ചഹൃദയം നുറുങ്ങി വേദനിക്കുമായിരുന്നു.' },
      { type: 'p', en: 'Importance of care: Father Francis provided love and comfort to Jose.', ml: 'കരുതലിന്റെ പ്രാധാന്യം: ഫാദർ ഫ്രാൻസിസ് ജോസിന് സ്നേഹത്തിൻ്റെ വെളിച്ചവും സാന്ത്വനവും നൽകി. അദ്ദേഹത്തിൻ്റെ വാക്കുകളായ "കൊച്ചുമനസ്സുകൾ ഒരിക്കലും വേദനിച്ചുകൂടാ" എന്നത് ജോസിന് ആശ്വാസമായി.' },
      { type: 'p', en: 'Success and tears of joy: Jose prayed for a way to study, and his prayers were answered.', ml: 'വിജയം/ആനന്ദാശ്രുക്കൾ: ജോസിൻ്റെ പ്രാർത്ഥന തമ്പുരാൻ കേട്ടു എന്ന് ഫാദർ ഫ്രാൻസിസ് അറിയിക്കുന്നു. തൻ്റെ നമ്പറിനു മുകളിലുള്ള നക്ഷത്രചിഹ്നം കണ്ടപ്പോൾ ജോസിൻ്റെ മനസ്സിൽ ഉന്മേഷം പതഞ്ഞുപൊങ്ങി. ഒടുവിൽ, ജോസിൻ്റെയും സുഹൃത്ത് പീറ്ററിൻ്റെയും കണ്ണുകൾ നിറഞ്ഞൊഴുകിയത് ആനന്ദാശ്രുക്കളായിരുന്നു.' }
    ]
  },
  glossary: [],
  quiz: [],
  sample_questions: [
    { q_id: "q11", question: { en: "Who is the author of 'Anandashrukkal'?", ml: "'ആനന്ദാശ്രുക്കൾ' എന്ന പാഠഭാഗത്തിന്റെ രചയിതാവ് ആര്?" }, answer: { en: "Sara Thomas", ml: "സാറാ തോമസ്" } },
    { q_id: "q12", question: { en: "Who is the main character?", ml: "പ്രധാന കഥാപാത്രം ആര്?" }, answer: { en: "Jose", ml: "ജോസ്" } },
    { q_id: "q13", question: { en: "What does Jose pray for?", ml: "ജോസ് എന്തിനുവേണ്ടിയാണ് പ്രാർത്ഥിക്കുന്നത്?", type: "essay" }, answer: { en: "For a way to study and rise.", ml: "പഠിച്ചുയരാനുള്ള മാർഗ്ഗത്തിന് വേണ്ടി." } },
    { q_id: "q14", question: { en: "Who provides care to Jose?", ml: "ജോസിന് കരുതൽ നൽകുന്നത് ആര്?", type: "essay" }, answer: { en: "Father Francis", ml: "ഫാദർ ഫ്രാൻസിസ്" } },
    { q_id: "q15", question: { en: "Describe the pain of orphanhood.", ml: "അനാഥത്വത്തിൻ്റെ വേദന വിവരിക്കുക.", type: "essay" }, answer: { en: "Jose felt alone and pained when friends talked about their families.", ml: "തനിക്ക് സ്വന്തമെന്ന് അവകാശപ്പെടാൻ ആരുമില്ലല്ലോ എന്ന ചിന്തയും കൂട്ടുകാർ കുടുംബത്തെക്കുറിച്ച് പറയുമ്പോൾ അനുഭവപ്പെടുന്ന വേദനയുമാണ് അനാഥത്വത്തിൻ്റെ വേദന." } },
    { q_id: "q16", question: { en: "Explain the importance of care.", ml: "കരുതലിന്റെ പ്രാധാന്യം വിശദീകരിക്കുക.", type: "essay" }, answer: { en: "Care and love provide light and comfort to young hearts.", ml: "സ്നേഹവും കരുതലും കൊച്ചുമനസ്സുകൾക്ക് വെളിച്ചവും സാന്ത്വനവും നൽകുന്നു." } },
    { q_id: "q17", question: { en: "What are the tears of joy?", ml: "എന്താണ് ആനന്ദാശ്രുക്കൾ?", type: "short" }, answer: { en: "Tears shed out of happiness.", ml: "സന്തോഷം കൊണ്ട് കണ്ണുനിറയുന്നത്." } },
    { q_id: "q18", question: { en: "What does Father Francis tell Jose?", ml: "ഫാദർ ഫ്രാൻസിസ് ജോസിനോട് എന്താണ് പറയുന്നത്?", type: "short" }, answer: { en: "Young hearts should never be pained.", ml: "കൊച്ചുമനസ്സുകൾ ഒരിക്കലും വേദനിച്ചുകൂടാ." } },
    { q_id: "q19", question: { en: "What does Jose see on his number?", ml: "ജോസ് തന്റെ നമ്പറിനു മുകളിൽ എന്താണ് കാണുന്നത്?", type: "short" }, answer: { en: "A star symbol.", ml: "നക്ഷത്രചിഹ്നം." } },
    { q_id: "q20", question: { en: "Who is Jose's friend?", ml: "ജോസിന്റെ സുഹൃത്ത് ആര്?", type: "short" }, answer: { en: "Peter", ml: "പീറ്റർ" } }
  ]
};

export const lessonKethaluEtakkuri: Lesson = {
  id: "ml-ii-u2-l3",
  title: { en: "Kethalu / Etakkuri", ml: "കെത്തളു / ഏട്ടക്കൂരി" },
  estimated_time_mins: 60,
  learning_objectives: [],
  content: {
    intro: { en: "Poem by Sukumaran Chaligadha", ml: "സുകുമാരൻ ചാലിഗദ്ധായുടെ കവിത" },
    core: { en: "Nature's beauty, pain of exploitation, and struggle for survival.", ml: "പ്രകൃതിയുടെ ഭംഗിയും ചൂഷണത്തിൻ്റെ വേദനയും അതിജീവനത്തിൻ്റെ പോരാട്ടവും വരച്ചുകാട്ടുന്നു." },
    blocks: [
      { type: 'h2', en: 'Key Concepts', ml: 'പ്രധാന ആശയങ്ങൾ' },
      { type: 'p', en: 'Description of nature: Stream, fish, and tribal language.', ml: 'പ്രകൃതിയുടെ വർണ്ണന: ചോലക്കാട്ടിലെ നീർക്കാക്ക മുങ്ങിയ കുഴിയിൽ മീനുകൾ വീട്ടുതിണ്ണ കെട്ടുന്നു. പുഴവെട്ടി നീന്തുന്ന വാളയ്ക്കും കരവെട്ടിച്ചാടുന്ന ഏട്ടക്കൂരിക്കും എന്തൊരു ചന്തമാണെന്നും കവി വർണ്ണിക്കുന്നു.' },
      { type: 'p', en: 'Survival and protest against exploitation.', ml: 'അതിജീവനവും വേദനയും: കുത്തിവീണ കല്ലുകളെല്ലാം വെളുത്ത ചോര കക്കുന്നു എന്ന പ്രയോഗം കവിയുടെ വേദനയും ചൂഷണത്തിനെതിരെയുള്ള പ്രതിഷേധവും സൂചിപ്പിക്കുന്നു.' },
      { type: 'p', en: 'Symbolism: The fish symbolizes marginalized people.', ml: 'പ്രതീകാത്മകത: ഏഴ് മലകൾ ചാടിയിട്ടും ഏഴ് പുഴകൾ കടന്നിട്ടും ഏട്ടക്കൂരി തിരിച്ചിറങ്ങുന്നതും, ഊത്തക്കാലത്തും രക്ഷയില്ല എന്ന നിരീക്ഷണവും പാർശ്വവൽക്കരിക്കപ്പെട്ട ഒരു ജനതയുടെ അതിജീവനത്തിൻ്റെ പ്രതീകാത്മകമായ ചിത്രീകരണമാണ്.' }
    ]
  },
  glossary: [],
  quiz: [],
  sample_questions: [
    { q_id: "q21", question: { en: "Who is the author of 'Kethalu / Etakkuri'?", ml: "'കെത്തളു / ഏട്ടക്കൂരി' എന്ന കവിതയുടെ രചയിതാവ് ആര്?" }, answer: { en: "Sukumaran Chaligadha", ml: "സുകുമാരൻ ചാലിഗദ്ധാ" } },
    { q_id: "q22", question: { en: "What does 'Kethalu' mean?", ml: "'കെത്തളു' എന്ന പദത്തിന് തുല്യമായ പ്രാദേശികപദം ഏത്?" }, answer: { en: "Etakkuri", ml: "ഏട്ടക്കൂരി" } },
    { q_id: "q23", question: { en: "What is the theme of the poem?", ml: "കവിതയുടെ പ്രമേയം എന്താണ്?", type: "essay" }, answer: { en: "Nature's beauty, pain of exploitation, and struggle for survival.", ml: "പ്രകൃതിയുടെ ഭംഗിയും ചൂഷണത്തിൻ്റെ വേദനയും അതിജീവനത്തിൻ്റെ പോരാട്ടവും." } },
    { q_id: "q24", question: { en: "How is nature described?", ml: "പ്രകൃതിയെ എങ്ങനെയാണ് വർണ്ണിക്കുന്നത്?", type: "essay" }, answer: { en: "Using descriptions of the stream and fish.", ml: "ചോലക്കാട്ടിലെ നീർക്കാക്കയും മീനുകളും പുഴയും ഉപയോഗിച്ച്." } },
    { q_id: "q25", question: { en: "Explain the struggle for survival in the poem.", ml: "കവിതയിലെ അതിജീവനത്തിനായുള്ള പോരാട്ടം വിശദീകരിക്കുക.", type: "essay" }, answer: { en: "The poem depicts the struggle of a marginalized community through the metaphor of the fish.", ml: "പാർശ്വവൽക്കരിക്കപ്പെട്ട ഒരു ജനതയുടെ അതിജീവനത്തിൻ്റെ പ്രതീകാത്മകമായ ചിത്രീകരണമാണ് കവിത." } },
    { q_id: "q26", question: { en: "Explain the protest against exploitation.", ml: "ചൂഷണത്തിനെതിരെയുള്ള പ്രതിഷേധം വിശദീകരിക്കുക.", type: "essay" }, answer: { en: "The phrase about white blood signifies the pain and protest.", ml: "'കുത്തിവീണ കല്ലുകളെല്ലാം വെളുത്ത ചോര കക്കുന്നു' എന്ന പ്രയോഗം ചൂഷണത്തിനെതിരെയുള്ള പ്രതിഷേധം സൂചിപ്പിക്കുന്നു." } },
    { q_id: "q27", question: { en: "What is the significance of the tribal language?", ml: "ഗോത്രഭാഷയുടെ പ്രാധാന്യം എന്ത്?", type: "short" }, answer: { en: "It maintains the poem's authenticity.", ml: "അതിൻ്റെ തനിമ നിലനിർത്തുന്നു." } },
    { q_id: "q28", question: { en: "What is 'Oothakkalam'?", ml: "എന്താണ് 'ഊത്തക്കാലം'?", type: "short" }, answer: { en: "Breeding season of fish.", ml: "മീനുകളുടെ പ്രജനനകാലം." } },
    { q_id: "q29", question: { en: "What does the fish symbolise?", ml: "മീൻ എന്തിന്റെ പ്രതീകമാണ്?", type: "short" }, answer: { en: "Marginalized people.", ml: "പാർശ്വവൽക്കരിക്കപ്പെട്ട ജനത." } },
    { q_id: "q30", question: { en: "What does the poet say about the stones?", ml: "കല്ലുകളെക്കുറിച്ച് കവി എന്താണ് പറയുന്നത്?", type: "short" }, answer: { en: "They bleed white blood.", ml: "അവ വെളുത്ത ചോര കക്കുന്നു." } }
  ]
};
