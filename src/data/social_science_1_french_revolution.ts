import { Lesson } from './curriculum';

export const socialScience1FrenchRevolution: Lesson = {
  id: "so-hist-10-french-revolution",
  title: { en: "Chapter 2: The French Revolution", ml: "അധ്യായം 2: ഫ്രഞ്ച് വിപ്ലവം" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Despotic Regime in France", ml: "ഫ്രാൻസിലെ സ്വേച്ഛാധിപത്യ ഭരണം" } },
    { id: "lo2", text: { en: "French Social System (Three Estates)", ml: "ഫ്രഞ്ച് സാമൂഹിക വ്യവസ്ഥ (മൂന്ന് എസ്റ്റേറ്റുകൾ)" } },
    { id: "lo3", text: { en: "The Economic Crisis", ml: "സാമ്പത്തിക പ്രതിസന്ധി" } },
    { id: "lo4", text: { en: "Influence of French Thinkers", ml: "ഫ്രഞ്ച് ചിന്തകരുടെ സ്വാധീനം" } },
    { id: "lo5", text: { en: "The Estates General and Tennis Court Oath", ml: "എസ്റ്റേറ്റ്സ് ജനറലും ടെന്നീസ് കോർട്ട് പ്രതിജ്ഞയും" } },
    { id: "lo6", text: { en: "Fall of Bastille and Outbreak of Revolution", ml: "ബാസ്റ്റിൽ ജയിലിന്റെ പതനവും വിപ്ലവത്തിന്റെ തുടക്കവും" } },
    { id: "lo7", text: { en: "Women and the French Revolution", ml: "സ്ത്രീകളും ഫ്രഞ്ച് വിപ്ലവവും" } },
    { id: "lo8", text: { en: "Reign of Terror", ml: "ഭീകരവാഴ്ച" } },
    { id: "lo9", text: { en: "Consequences of the French Revolution", ml: "ഫ്രഞ്ച് വിപ്ലവത്തിന്റെ ഫലങ്ങൾ" } },
    { id: "lo10", text: { en: "Napoleon Bonaparte and his Reforms", ml: "നെപ്പോളിയൻ ബോണപ്പാർട്ടും അദ്ദേഹത്തിന്റെ പരിഷ്കാരങ്ങളും" } },
    { id: "lo11", text: { en: "Congress of Vienna", ml: "വിയന്ന കോൺഗ്രസ്" } }
  ],
  content: {
    intro: { en: "The French Revolution was a historic revolt against despotism and social inequality. The ideas of liberty, equality, and fraternity reshaped modern politics.", ml: "ഫ്രഞ്ച് വിപ്ലവം എന്നത് സ്വേച്ഛാധിപത്യത്തിനും സാമൂഹിക അസമത്വത്തിനുമെതിരെയുള്ള ഒരു ചരിത്രപരമായ കലാപമായിരുന്നു. സ്വാതന്ത്ര്യം, സമത്വം, സാഹോദര്യം എന്നീ ആശയങ്ങൾ ആധുനിക രാഷ്ട്രീയത്തെ മാറ്റിമറിച്ചു." },
    core: { en: "This chapter covers the causes, events, and consequences of the French Revolution, including the fall of the Bastille, the Reign of Terror, and the rise of Napoleon.", ml: "ബാസ്റ്റിൽ ജയിലിന്റെ പതനം, ഭീകരവാഴ്ച, നെപ്പോളിയന്റെ ഉദയം എന്നിവയുൾപ്പെടെ ഫ്രഞ്ച് വിപ്ലവത്തിന്റെ കാരണങ്ങൾ, സംഭവങ്ങൾ, അനന്തരഫലങ്ങൾ എന്നിവ ഈ അധ്യായത്തിൽ പ്രതിപാദിക്കുന്നു." },
    blocks: [
      { type: 'h2', en: 'Despotic Regime in France', ml: 'ഫ്രാൻസിലെ സ്വേച്ഛാധിപത്യ ഭരണം' },
      { type: 'p', en: 'The Bourbon dynasty was ruling France for decades. All the rulers of this dynasty were generally despotic. They believed in the divine right of rulers.', ml: 'പതിറ്റാണ്ടുകളോളം ഫ്രാൻസ് ഭരിച്ചിരുന്നത് ബോർബൺ രാജവംശമായിരുന്നു. ഈ രാജവംശത്തിലെ ഭരണാധികാരികളെല്ലാം പൊതുവെ സ്വേച്ഛാധിപതികളായിരുന്നു. അവർ ഭരണാധികാരികളുടെ ദൈവദത്ത അവകാശത്തിൽ വിശ്വസിച്ചിരുന്നു.' },
      { type: 'p', en: 'The most prominent of the Bourbon kings was Louis XIV, who declared, "I am the State."', ml: 'ബോർബൺ രാജാക്കന്മാരിൽ ഏറ്റവും പ്രമുഖനായിരുന്ന ലൂയി പതിനാലാമൻ പ്രഖ്യാപിച്ചു, "ഞാനാണ് രാജ്യം."' },
      { type: 'p', en: 'According to the Divine Right Theory, the king is the representative of God and is not accountable to the people.', ml: 'ദൈവദത്ത അവകാശ സിദ്ധാന്തമനുസരിച്ച് രാജാവ് ദൈവത്തിന്റെ പ്രതിനിധിയാണ്, അതിനാൽ ജനങ്ങളോട് ഉത്തരം പറയാൻ ബാധ്യസ്ഥനല്ല.' },

      { type: 'h2', en: 'French Social System', ml: 'ഫ്രഞ്ച് സാമൂഹിക വ്യവസ്ഥ' },
      { type: 'p', en: 'French society in the 18th century was divided into three estates.', ml: 'പതിനെട്ടാം നൂറ്റാണ്ടിലെ ഫ്രഞ്ച് സമൂഹം മൂന്ന് എസ്റ്റേറ്റുകളായി വിഭജിക്കപ്പെട്ടിരുന്നു.' },
      { type: 'p', en: 'Flowchart: The Three Estates in France - King (Divine Right) -> 1. First Estate (Clergy), 2. Second Estate (Nobles), 3. Third Estate (Commons)', ml: 'ഫ്ലോചാർട്ട്: ഫ്രാൻസിലെ മൂന്ന് എസ്റ്റേറ്റുകൾ - രാജാവ് (ദൈവദത്ത അവകാശം) -> 1. ഒന്നാം എസ്റ്റേറ്റ് (പുരോഹിതന്മാർ), 2. രണ്ടാം എസ്റ്റേറ്റ് (പ്രഭുക്കന്മാർ), 3. മൂന്നാം എസ്റ്റേറ്റ് (സാധാരണക്കാർ)' },
      
      { type: 'table', tableData: {
          headers: [{en: 'Estate', ml: 'എസ്റ്റേറ്റ്'}, {en: 'Description', ml: 'വിശദീകരണം'}],
          rows: [
            [{en: 'First Estate (Clergy)', ml: 'ഒന്നാം എസ്റ്റേറ്റ് (പുരോഹിതന്മാർ)'}, {en: "Owned vast lands, exempted from taxes, collected 'Tithe' from peasants.", ml: "വിശാലമായ ഭൂമിയുടെ ഉടമകൾ, നികുതികളിൽ നിന്ന് ഒഴിവാക്കപ്പെട്ടു, കർഷകരിൽ നിന്ന് 'ടൈത്ത്' പിരിച്ചു."}],
            [{en: 'Second Estate (Nobles)', ml: 'രണ്ടാം എസ്റ്റേറ്റ് (പ്രഭുക്കന്മാർ)'}, {en: "Held high positions in government and army, collected various taxes from people.", ml: "സർക്കാരിലും സൈന്യത്തിലും ഉയർന്ന പദവികൾ വഹിച്ചു, ജനങ്ങളിൽ നിന്ന് വിവിധ നികുതികൾ പിരിച്ചു."}],
            [{en: 'Third Estate (Commons)', ml: 'മൂന്നാം എസ്റ്റേറ്റ് (സാധാരണക്കാർ)'}, {en: "Middle class, workers, and peasants. Paid all taxes and lived in poverty.", ml: "മധ്യവർഗം, തൊഴിലാളികൾ, കർഷകർ. എല്ലാ നികുതികളും അടച്ചു, ദാരിദ്ര്യത്തിൽ ജീവിച്ചു."}]
          ]
      }},

      { type: 'h3', en: 'Various Taxes in 18th Century France', ml: '18-ാം നൂറ്റാണ്ടിലെ ഫ്രാൻസിലെ വിവിധ നികുതികൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Tax Name', ml: 'നികുതിയുടെ പേര്'}, {en: 'Explanation', ml: 'വിശദീകരണം'}],
          rows: [
            [{en: 'Tithe', ml: 'ടൈത്ത്'}, {en: 'One-tenth of agricultural produce collected by the clergy.', ml: 'പുരോഹിതന്മാർ പിരിച്ചിരുന്ന കാർഷികോല്പാദനത്തിന്റെ പത്തിലൊന്ന് ഭാഗം.'}],
            [{en: 'Vingtième', ml: 'വിൻടിയെം'}, {en: 'A tax of one-twentieth of income paid to the government.', ml: 'വരുമാനത്തിന്റെ ഇരുപതിലൊന്ന് സർക്കാരിലേക്ക് നൽകേണ്ട നികുതി.'}],
            [{en: 'Gabelle', ml: 'ഗബെൽ'}, {en: 'Unpopular tax levied on salt.', ml: 'ഉപ്പിന്മേൽ ചുമത്തിയിരുന്ന അപ്രിയമായ നികുതി.'}],
            [{en: 'Corvée', ml: 'കോർവെ'}, {en: 'Compulsory unpaid labour for 3-4 days a year.', ml: 'വർഷത്തിൽ 3-4 ദിവസം പ്രതിഫലമില്ലാതെ ചെയ്യേണ്ട നിർബന്ധിത ജോലി.'}],
            [{en: 'Terrage', ml: 'ടെറാഷ്'}, {en: 'Special tax collected from peasants during harvest.', ml: 'വിളവെടുപ്പ് കാലത്ത് കർഷകരിൽ നിന്ന് ഈടാക്കിയിരുന്ന പ്രത്യേക നികുതി.'}]
          ]
      }},

      { type: 'h3', en: 'The Rise of the Middle Class', ml: 'മധ്യവർഗത്തിന്റെ ഉദയം' },
      { type: 'p', en: 'A middle class emerged in French society in the 18th century due to progress in agriculture and industry. They included doctors, lawyers, bankers, and wealthy merchants.', ml: 'കൃഷിയിലും വ്യവസായത്തിലുമുണ്ടായ പുരോഗതി കാരണം 18-ാം നൂറ്റാണ്ടിൽ ഫ്രഞ്ച് സമൂഹത്തിൽ ഒരു മധ്യവർഗം ഉയർന്നുവന്നു. ഡോക്ടർമാർ, അഭിഭാഷകർ, ബാങ്കർമാർ, സമ്പന്നരായ വ്യാപാരികൾ എന്നിവർ ഇതിൽ ഉൾപ്പെടുന്നു.' },
      { type: 'p', en: 'Despite their wealth, they were denied power and faced inequality in taxation.', ml: 'സമ്പത്തുണ്ടായിട്ടും അവർക്ക് അധികാരം നിഷേധിക്കപ്പെടുകയും നികുതി വ്യവസ്ഥയിൽ അസമത്വം നേരിടുകയും ചെയ്തു.' },

      { type: 'h2', en: 'The Economic Crisis', ml: 'സാമ്പത്തിക പ്രതിസന്ധി' },
      { type: 'p', en: 'In the 1770s, agricultural production decreased, leading to an increase in the price of bread.', ml: '1770-കളിൽ കാർഷികോൽപ്പാദനം കുറയുകയും ഇത് ബ്രെഡിന്റെ വില വർദ്ധിക്കാൻ കാരണമാവുകയും ചെയ്തു.' },
      { type: 'p', en: 'A trade agreement with Britain flooded the French market with British products, making native artisans unemployed.', ml: 'ബ്രിട്ടനുമായുള്ള വ്യാപാരക്കരാർ ഫ്രഞ്ച് വിപണിയിൽ ബ്രിട്ടീഷ് ഉൽപ്പന്നങ്ങൾ നിറയാൻ കാരണമാവുകയും തദ്ദേശീയരായ കരകൗശലത്തൊഴിലാളികൾക്ക് തൊഴിൽ നഷ്ടപ്പെടുകയും ചെയ്തു.' },

      { type: 'h2', en: 'Influence of French Thinkers', ml: 'ഫ്രഞ്ച് ചിന്തകരുടെ സ്വാധീനം' },
      { type: 'p', en: 'Philosophers convinced people of the injustice and inspired them to revolt.', ml: 'തത്ത്വചിന്തകർ അനീതിയെക്കുറിച്ച് ജനങ്ങളെ ബോധ്യപ്പെടുത്തുകയും വിപ്ലവത്തിന് അവരെ പ്രേരിപ്പിക്കുകയും ചെയ്തു.' },
      { type: 'table', tableData: {
          headers: [{en: 'Philosopher', ml: 'ചിന്തകൻ'}, {en: 'Ideas/Contributions', ml: 'ആശയങ്ങൾ/സംഭാവനകൾ'}],
          rows: [
            [{en: 'Voltaire', ml: 'വോൾട്ടയർ'}, {en: 'Criticised the clergy through his writings.', ml: 'തന്റെ രചനകളിലൂടെ പുരോഹിതന്മാരെ വിമർശിച്ചു.'}],
            [{en: 'Rousseau', ml: 'റൂസ്സോ'}, {en: "Wrote 'The Social Contract'. Said \"Man is born free, but everywhere he is in chains.\"", ml: "'സാമൂഹിക ഉടമ്പടി' എഴുതി. \"മനുഷ്യൻ സ്വതന്ത്രനായാണ് ജനിക്കുന്നത്, എന്നാൽ എവിടെയും അവൻ ചങ്ങലകളിലാണ്\" എന്ന് പറഞ്ഞു."}],
            [{en: 'Montesquieu', ml: 'മൊണ്ടെസ്ക്യൂ'}, {en: 'Proposed the division of government powers (Legislative, Executive, Judicial).', ml: 'സർക്കാരിന്റെ അധികാര വിഭജനം (നിയമനിർമ്മാണം, നിർവ്വഹണം, നീതിന്യായം) നിർദ്ദേശിച്ചു.'}],
            [{en: 'John Locke', ml: 'ജോൺ ലോക്ക്'}, {en: 'Rejected the divine right of kings.', ml: 'രാജാക്കന്മാരുടെ ദൈവദത്ത അവകാശത്തെ നിരാകരിച്ചു.'}]
          ]
      }},

      { type: 'h2', en: 'The Estates General Meets and the Tennis Court Oath', ml: 'എസ്റ്റേറ്റ്സ് ജനറൽ സമ്മേളിക്കുന്നു, ടെന്നീസ് കോർട്ട് പ്രതിജ്ഞ' },
      { type: 'p', en: 'To overcome the economic crisis, King Louis XVI summoned the Estates General.', ml: 'സാമ്പത്തിക പ്രതിസന്ധി മറികടക്കാൻ ലൂയി പതിനാറാമൻ രാജാവ് എസ്റ്റേറ്റ്സ് ജനറൽ വിളിച്ചുചേർത്തു.' },
      { type: 'p', en: 'The Third Estate demanded individual voting instead of the traditional "one vote per estate" system.', ml: 'പരമ്പരാഗതമായ "ഒരു എസ്റ്റേറ്റിന് ഒരു വോട്ട്" എന്ന സമ്പ്രദായത്തിന് പകരം ഓരോ അംഗത്തിനും ഓരോ വോട്ട് വേണമെന്ന് മൂന്നാം എസ്റ്റേറ്റ് ആവശ്യപ്പെട്ടു.' },
      { type: 'p', en: 'When the King refused, they met in a nearby indoor tennis court on June 20, 1789. They declared themselves the National Assembly and vowed not to leave until a constitution was drafted.', ml: 'രാജാവ് ഇത് നിരസിച്ചപ്പോൾ, 1789 ജൂൺ 20-ന് അവർ അടുത്തുള്ള ഒരു ഇൻഡോർ ടെന്നീസ് കോർട്ടിൽ ഒത്തുകൂടി. അവർ തങ്ങളെത്തന്നെ ദേശീയ അസംബ്ലിയായി പ്രഖ്യാപിക്കുകയും ഒരു ഭരണഘടന തയ്യാറാക്കുന്നത് വരെ പിരിഞ്ഞുപോകില്ലെന്ന് പ്രതിജ്ഞയെടുക്കുകയും ചെയ്തു.' },

      { type: 'h2', en: 'The Fall of Bastille', ml: 'ബാസ്റ്റിൽ ജയിലിന്റെ പതനം' },
      { type: 'p', en: 'On July 14, 1789, an angry crowd stormed the Bastille prison, the symbol of Bourbon despotism. This marks the beginning of the French Revolution.', ml: '1789 ജൂലൈ 14-ന് രോഷാകുലരായ ജനക്കൂട്ടം ബോർബൺ സ്വേച്ഛാധിപത്യത്തിന്റെ പ്രതീകമായ ബാസ്റ്റിൽ ജയിൽ ആക്രമിച്ചു. ഇത് ഫ്രഞ്ച് വിപ്ലവത്തിന്റെ തുടക്കമായി കണക്കാക്കപ്പെടുന്നു.' },

      { type: 'h2', en: 'Women and the Revolution', ml: 'സ്ത്രീകളും വിപ്ലവവും' },
      { type: 'p', en: 'Thousands of women marched to the Versailles palace demanding food.', ml: 'ഭക്ഷണം ആവശ്യപ്പെട്ട് ആയിരക്കണക്കിന് സ്ത്രീകൾ വെഴ്സായ് കൊട്ടാരത്തിലേക്ക് മാർച്ച് ചെയ്തു.' },
      { type: 'p', en: 'Olympia de Gouges wrote the "Declaration of the Rights of Woman" demanding equal rights.', ml: 'തുല്യാവകാശം ആവശ്യപ്പെട്ട് ഒളിമ്പിയ ഡി ഗൂഷ് "സ്ത്രീകളുടെ അവകാശ പ്രഖ്യാപനം" എഴുതി.' },

      { type: 'h2', en: 'Reign of Terror', ml: 'ഭീകരവാഴ്ച' },
      { type: 'p', en: 'The National Convention declared France a republic and executed King Louis XVI.', ml: 'നാഷണൽ കൺവെൻഷൻ ഫ്രാൻസിനെ ഒരു റിപ്പബ്ലിക്കായി പ്രഖ്യാപിക്കുകയും ലൂയി പതിനാറാമൻ രാജാവിനെ വധിക്കുകയും ചെയ്തു.' },
      { type: 'p', en: 'The Jacobins seized power under Robespierre, starting the Reign of Terror. Thousands of people branded as traitors were executed using the Guillotine.', ml: 'റോബെസ്പിയറുടെ നേതൃത്വത്തിൽ ജേക്കബിനുകൾ അധികാരം പിടിച്ചെടുത്തു, ഇത് ഭീകരവാഴ്ചയ്ക്ക് തുടക്കമിട്ടു. രാജ്യദ്രോഹികളെന്ന് മുദ്രകുത്തപ്പെട്ട ആയിരക്കണക്കിന് ആളുകളെ ഗില്ലറ്റിൻ ഉപയോഗിച്ച് വധിച്ചു.' },

      { type: 'h2', en: 'Consequences of the French Revolution', ml: 'ഫ്രഞ്ച് വിപ്ലവത്തിന്റെ ഫലങ്ങൾ' },
      { type: 'p', en: 'Feudalism was abolished. Unified system of weights and measures (metric system) was introduced. It gave birth to the concepts of modern nationalism and democracy.', ml: 'ജന്മിത്തം നിർത്തലാക്കപ്പെട്ടു. അളവുകൾക്കും തൂക്കങ്ങൾക്കുമായി ഏകീകൃത സംവിധാനം (മെട്രിക് സിസ്റ്റം) അവതരിപ്പിച്ചു. ഇത് ആധുനിക ദേശീയത, ജനാധിപത്യം എന്നീ ആശയങ്ങൾക്ക് ജന്മം നൽകി.' },

      { type: 'h2', en: 'Napoleon Bonaparte', ml: 'നെപ്പോളിയൻ ബോണപ്പാർട്ട്' },
      { type: 'p', en: 'Napoleon overthrew the Directory and declared himself Emperor of France.', ml: 'നെപ്പോളിയൻ ഡയറക്ടറിയെ അട്ടിമറിച്ച് ഫ്രാൻസിന്റെ ചക്രവർത്തിയായി സ്വയം പ്രഖ്യാപിച്ചു.' },
      { type: 'table', tableData: {
          headers: [{en: 'Reform Area', ml: 'പരിഷ്കരണ മേഖല'}, {en: 'Changes Introduced', ml: 'വരുത്തിയ മാറ്റങ്ങൾ'}],
          rows: [
            [{en: 'Legal', ml: 'നിയമപരം'}, {en: 'Abolished feudal laws, ensured equality through Napoleonic Code.', ml: 'നെപ്പോളിയനിക് കോഡിലൂടെ ജന്മിത്ത നിയമങ്ങൾ റദ്ദാക്കുകയും സമത്വം ഉറപ്പാക്കുകയും ചെയ്തു.'}],
            [{en: 'Religious', ml: 'മതപരം'}, {en: 'Signed Concordat with Pope, restored freedom to the Catholic Church.', ml: 'മാർപ്പാപ്പയുമായി കോൺകോർഡാറ്റ് ഒപ്പുവെച്ചു, കത്തോലിക്കാ സഭയ്ക്ക് സ്വാതന്ത്ര്യം പുനഃസ്ഥാപിച്ചു.'}],
            [{en: 'Educational', ml: 'വിദ്യാഭ്യാസം'}, {en: "Established state schools called 'Lycees' and the University of France.", ml: "'ലൈസികൾ' എന്ന പേരിലുള്ള സർക്കാർ സ്കൂളുകളും ഫ്രാൻസ് സർവ്വകലാശാലയും സ്ഥാപിച്ചു."}],
            [{en: 'Economic', ml: 'സാമ്പത്തികം'}, {en: 'Established the Bank of France and unified currency.', ml: 'ബാങ്ക് ഓഫ് ഫ്രാൻസ് സ്ഥാപിക്കുകയും നാണയവ്യവസ്ഥ ഏകീകരിക്കുകയും ചെയ്തു.'}]
          ]
      }},

      { type: 'h2', en: 'The Congress of Vienna', ml: 'വിയന്ന കോൺഗ്രസ്' },
      { type: 'p', en: 'After Napoleon\'s defeat in the Battle of Waterloo (1815), European powers met in Vienna. Led by Austrian Chancellor Metternich, they redrew the map of Europe.', ml: 'വാട്ടർലൂ യുദ്ധത്തിൽ (1815) നെപ്പോളിയൻ പരാജയപ്പെട്ടതിന് ശേഷം, യൂറോപ്യൻ ശക്തികൾ വിയന്നയിൽ സമ്മേളിച്ചു. ഓസ്ട്രിയൻ ചാൻസലർ മെറ്റേണിക് നേതൃത്വം നൽകിയ അവർ യൂറോപ്പിന്റെ ഭൂപടം പുനർനിർമ്മിച്ചു.' },

      { type: 'h2', en: 'Important Timelines', ml: 'പ്രധാന കാലഗണനകൾ' },
      { type: 'p', en: '1614: Last meeting of Estates General before the revolution.', ml: '1614: വിപ്ലവത്തിന് മുമ്പ് അവസാനമായി എസ്റ്റേറ്റ്സ് ജനറൽ സമ്മേളിച്ചു.' },
      { type: 'p', en: '1789 June 20: Tennis Court Oath.', ml: '1789 ജൂൺ 20: ടെന്നീസ് കോർട്ട് പ്രതിജ്ഞ.' },
      { type: 'p', en: '1789 July 14: Fall of the Bastille.', ml: '1789 ജൂലൈ 14: ബാസ്റ്റിൽ ജയിലിന്റെ പതനം.' },
      { type: 'p', en: '1792: France declared a Republic.', ml: '1792: ഫ്രാൻസ് റിപ്പബ്ലിക്കായി പ്രഖ്യാപിക്കപ്പെട്ടു.' },
      { type: 'p', en: '1815: Defeat of Napoleon at Waterloo / Congress of Vienna.', ml: '1815: വാട്ടർലൂവിൽ നെപ്പോളിയന്റെ പരാജയം / വിയന്ന കോൺഗ്രസ്.' },

      { type: 'h2', en: 'Summary Points', ml: 'സംഗ്രഹ പോയിന്റുകൾ' },
      { type: 'p', en: 'The French Revolution was a historic revolt against despotism and social inequality.', ml: 'ഫ്രഞ്ച് വിപ്ലവം എന്നത് സ്വേച്ഛാധിപത്യത്തിനും സാമൂഹിക അസമത്വത്തിനുമെതിരെയുള്ള ഒരു ചരിത്രപരമായ കലാപമായിരുന്നു.' },
      { type: 'p', en: 'The ideas of liberty, equality, and fraternity reshaped modern politics.', ml: 'സ്വാതന്ത്ര്യം, സമത്വം, സാഹോദര്യം എന്നീ ആശയങ്ങൾ ആധുനിക രാഷ്ട്രീയത്തെ മാറ്റിമറിച്ചു.' },
      { type: 'p', en: 'Philosophers like Rousseau and Voltaire played a major role in awakening the masses.', ml: 'ജനങ്ങളെ ഉണർത്തുന്നതിൽ റൂസ്സോ, വോൾട്ടയർ തുടങ്ങിയ ചിന്തകർ വലിയ പങ്കുവഹിച്ചു.' },
      { type: 'p', en: 'Napoleon\'s reforms laid the foundation for modern France.', ml: 'നെപ്പോളിയന്റെ പരിഷ്കാരങ്ങൾ ആധുനിക ഫ്രാൻസിന് അടിത്തറ പാകി.' }
    ]
  },
  glossary: [
    { term: { en: "Estates General", ml: "എസ്റ്റേറ്റ്സ് ജനറൽ" }, definition: { en: "Legislative body in France representing the three estates.", ml: "മൂന്ന് എസ്റ്റേറ്റുകളെ പ്രതിനിധീകരിക്കുന്ന ഫ്രാൻസിലെ നിയമനിർമ്മാണ സഭ." } },
    { term: { en: "Guillotine", ml: "ഗില്ലറ്റിൻ" }, definition: { en: "Machine used for beheading people during the Reign of Terror.", ml: "ഭീകരവാഴ്ചക്കാലത്ത് ആളുകളെ വധിക്കാൻ ഉപയോഗിച്ചിരുന്ന യന്ത്രം." } },
    { term: { en: "Napoleonic Code", ml: "നെപ്പോളിയനിക് കോഡ്" }, definition: { en: "Civil code established under Napoleon in 1804.", ml: "1804-ൽ നെപ്പോളിയന്റെ കീഴിൽ സ്ഥാപിച്ച സിവിൽ കോഡ്." } }
  ],
  quiz: [
    {
      q_id: "q1",
      question: { en: "Who said 'I am the State'?", ml: "'ഞാനാണ് രാജ്യം' എന്ന് പറഞ്ഞത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Louis XVI", ml: "ലൂയി പതിനാറാമൻ" } },
        { id: "opt2", text: { en: "Louis XIV", ml: "ലൂയി പതിനാലാമൻ" } },
        { id: "opt3", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } },
        { id: "opt4", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } }
      ],
      answer: { id: "opt2", text: { en: "Louis XIV", ml: "ലൂയി പതിനാലാമൻ" } }
    },
    {
      q_id: "q2",
      question: { en: "Which dynasty ruled France during the revolution?", ml: "വിപ്ലവകാലത്ത് ഫ്രാൻസ് ഭരിച്ചിരുന്ന രാജവംശം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Tudor", ml: "ട്യൂഡർ" } },
        { id: "opt2", text: { en: "Stuart", ml: "സ്റ്റുവർട്ട്" } },
        { id: "opt3", text: { en: "Bourbon", ml: "ബോർബൺ" } },
        { id: "opt4", text: { en: "Habsburg", ml: "ഹാബ്സ്ബർഗ്" } }
      ],
      answer: { id: "opt3", text: { en: "Bourbon", ml: "ബോർബൺ" } }
    },
    {
      q_id: "q3",
      question: { en: "Which estate consisted of the clergy?", ml: "പുരോഹിതന്മാർ ഉൾപ്പെട്ടിരുന്ന എസ്റ്റേറ്റ് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "First Estate", ml: "ഒന്നാം എസ്റ്റേറ്റ്" } },
        { id: "opt2", text: { en: "Second Estate", ml: "രണ്ടാം എസ്റ്റേറ്റ്" } },
        { id: "opt3", text: { en: "Third Estate", ml: "മൂന്നാം എസ്റ്റേറ്റ്" } },
        { id: "opt4", text: { en: "Fourth Estate", ml: "നാലാം എസ്റ്റേറ്റ്" } }
      ],
      answer: { id: "opt1", text: { en: "First Estate", ml: "ഒന്നാം എസ്റ്റേറ്റ്" } }
    },
    {
      q_id: "q4",
      question: { en: "Who belonged to the Second Estate?", ml: "രണ്ടാം എസ്റ്റേറ്റിൽ ഉൾപ്പെട്ടിരുന്നത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Peasants", ml: "കർഷകർ" } },
        { id: "opt2", text: { en: "Clergy", ml: "പുരോഹിതന്മാർ" } },
        { id: "opt3", text: { en: "Nobles", ml: "പ്രഭുക്കന്മാർ" } },
        { id: "opt4", text: { en: "Merchants", ml: "വ്യാപാരികൾ" } }
      ],
      answer: { id: "opt3", text: { en: "Nobles", ml: "പ്രഭുക്കന്മാർ" } }
    },
    {
      q_id: "q5",
      question: { en: "Which estate paid all the taxes?", ml: "എല്ലാ നികുതികളും അടച്ചിരുന്ന എസ്റ്റേറ്റ് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "First Estate", ml: "ഒന്നാം എസ്റ്റേറ്റ്" } },
        { id: "opt2", text: { en: "Second Estate", ml: "രണ്ടാം എസ്റ്റേറ്റ്" } },
        { id: "opt3", text: { en: "Third Estate", ml: "മൂന്നാം എസ്റ്റേറ്റ്" } },
        { id: "opt4", text: { en: "All Estates", ml: "എല്ലാ എസ്റ്റേറ്റുകളും" } }
      ],
      answer: { id: "opt3", text: { en: "Third Estate", ml: "മൂന്നാം എസ്റ്റേറ്റ്" } }
    },
    {
      q_id: "q6",
      question: { en: "What was 'Tithe'?", ml: "'ടൈത്ത്' എന്നാൽ എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Tax paid to the State", ml: "സർക്കാരിലേക്ക് അടച്ചിരുന്ന നികുതി" } },
        { id: "opt2", text: { en: "Tax collected by the Church", ml: "സഭ പിരിച്ചിരുന്ന നികുതി" } },
        { id: "opt3", text: { en: "Tax on salt", ml: "ഉപ്പിന്മേലുള്ള നികുതി" } },
        { id: "opt4", text: { en: "Land tax", ml: "ഭൂനികുതി" } }
      ],
      answer: { id: "opt2", text: { en: "Tax collected by the Church", ml: "സഭ പിരിച്ചിരുന്ന നികുതി" } }
    },
    {
      q_id: "q7",
      question: { en: "What was 'Gabelle'?", ml: "'ഗബെൽ' എന്നാൽ എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Tax on salt", ml: "ഉപ്പിന്മേലുള്ള നികുതി" } },
        { id: "opt2", text: { en: "Tax on land", ml: "ഭൂനികുതി" } },
        { id: "opt3", text: { en: "Tax on income", ml: "വരുമാന നികുതി" } },
        { id: "opt4", text: { en: "Religious tax", ml: "മതപരമായ നികുതി" } }
      ],
      answer: { id: "opt1", text: { en: "Tax on salt", ml: "ഉപ്പിന്മേലുള്ള നികുതി" } }
    },
    {
      q_id: "q8",
      question: { en: "What was 'Vingtième'?", ml: "'വിൻടിയെം' എന്നാൽ എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Tax on salt", ml: "ഉപ്പിന്മേലുള്ള നികുതി" } },
        { id: "opt2", text: { en: "Tax on income", ml: "വരുമാന നികുതി" } },
        { id: "opt3", text: { en: "Forced labour", ml: "നിർബന്ധിത തൊഴിൽ" } },
        { id: "opt4", text: { en: "Harvest tax", ml: "വിളവെടുപ്പ് നികുതി" } }
      ],
      answer: { id: "opt2", text: { en: "Tax on income", ml: "വരുമാന നികുതി" } }
    },
    {
      q_id: "q9",
      question: { en: "Who wrote 'The Social Contract'?", ml: "'സാമൂഹിക ഉടമ്പടി' (The Social Contract) എഴുതിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { id: "opt2", text: { en: "Montesquieu", ml: "മൊണ്ടെസ്ക്യൂ" } },
        { id: "opt3", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { id: "opt4", text: { en: "John Locke", ml: "ജോൺ ലോക്ക്" } }
      ],
      answer: { id: "opt3", text: { en: "Rousseau", ml: "റൂസ്സോ" } }
    },
    {
      q_id: "q10",
      question: { en: "Who proposed the separation of powers?", ml: "അധികാര വിഭജനം നിർദ്ദേശിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { id: "opt2", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { id: "opt3", text: { en: "Montesquieu", ml: "മൊണ്ടെസ്ക്യൂ" } },
        { id: "opt4", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } }
      ],
      answer: { id: "opt3", text: { en: "Montesquieu", ml: "മൊണ്ടെസ്ക്യൂ" } }
    },
    {
      q_id: "q11",
      question: { en: "Who said 'Man is born free, but everywhere he is in chains'?", ml: "'മനുഷ്യൻ സ്വതന്ത്രനായാണ് ജനിക്കുന്നത്, എന്നാൽ എവിടെയും അവൻ ചങ്ങലകളിലാണ്' എന്ന് പറഞ്ഞത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { id: "opt2", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { id: "opt3", text: { en: "Montesquieu", ml: "മൊണ്ടെസ്ക്യൂ" } },
        { id: "opt4", text: { en: "Locke", ml: "ലോക്ക്" } }
      ],
      answer: { id: "opt2", text: { en: "Rousseau", ml: "റൂസ്സോ" } }
    },
    {
      q_id: "q12",
      question: { en: "Which philosopher ridiculed the clergy?", ml: "പുരോഹിതന്മാരെ പരിഹസിച്ച ചിന്തകൻ ആര്?" },
      options: [
        { id: "opt1", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { id: "opt2", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { id: "opt3", text: { en: "Montesquieu", ml: "മൊണ്ടെസ്ക്യൂ" } },
        { id: "opt4", text: { en: "Diderot", ml: "ഡിഡെറോ" } }
      ],
      answer: { id: "opt2", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } }
    },
    {
      q_id: "q13",
      question: { en: "When did the Tennis Court Oath take place?", ml: "ടെന്നീസ് കോർട്ട് പ്രതിജ്ഞ നടന്നത് എപ്പോൾ?" },
      options: [
        { id: "opt1", text: { en: "14 July 1789", ml: "1789 ജൂലൈ 14" } },
        { id: "opt2", text: { en: "20 June 1789", ml: "1789 ജൂൺ 20" } },
        { id: "opt3", text: { en: "5 May 1789", ml: "1789 മെയ് 5" } },
        { id: "opt4", text: { en: "4 August 1789", ml: "1789 ഓഗസ്റ്റ് 4" } }
      ],
      answer: { id: "opt2", text: { en: "20 June 1789", ml: "1789 ജൂൺ 20" } }
    },
    {
      q_id: "q14",
      question: { en: "What was the main demand at the Tennis Court Oath?", ml: "ടെന്നീസ് കോർട്ട് പ്രതിജ്ഞയിലെ പ്രധാന ആവശ്യം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "To execute the king", ml: "രാജാവിനെ വധിക്കാൻ" } },
        { id: "opt2", text: { en: "To draft a constitution", ml: "ഒരു ഭരണഘടന തയ്യാറാക്കാൻ" } },
        { id: "opt3", text: { en: "To reduce taxes", ml: "നികുതി കുറയ്ക്കാൻ" } },
        { id: "opt4", text: { en: "To declare war", ml: "യുദ്ധം പ്രഖ്യാപിക്കാൻ" } }
      ],
      answer: { id: "opt2", text: { en: "To draft a constitution", ml: "ഒരു ഭരണഘടന തയ്യാറാക്കാൻ" } }
    },
    {
      q_id: "q15",
      question: { en: "Which prison was stormed on July 14, 1789?", ml: "1789 ജൂലൈ 14-ന് ആക്രമിക്കപ്പെട്ട ജയിൽ ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Versailles", ml: "വെഴ്സായ്" } },
        { id: "opt2", text: { en: "Bastille", ml: "ബാസ്റ്റിൽ" } },
        { id: "opt3", text: { en: "Tuileries", ml: "ട്യൂയിലറീസ്" } },
        { id: "opt4", text: { en: "Louvre", ml: "ലൂവ്ര്" } }
      ],
      answer: { id: "opt2", text: { en: "Bastille", ml: "ബാസ്റ്റിൽ" } }
    },
    {
      q_id: "q16",
      question: { en: "What did the fall of Bastille symbolize?", ml: "ബാസ്റ്റിൽ ജയിലിന്റെ പതനം എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "End of monarchy", ml: "രാജവാഴ്ചയുടെ അവസാനം" } },
        { id: "opt2", text: { en: "Fall of despotism", ml: "സ്വേച്ഛാധിപത്യത്തിന്റെ പതനം" } },
        { id: "opt3", text: { en: "Rise of Napoleon", ml: "നെപ്പോളിയന്റെ ഉദയം" } },
        { id: "opt4", text: { en: "End of war", ml: "യുദ്ധത്തിന്റെ അവസാനം" } }
      ],
      answer: { id: "opt2", text: { en: "Fall of despotism", ml: "സ്വേച്ഛാധിപത്യത്തിന്റെ പതനം" } }
    },
    {
      q_id: "q17",
      question: { en: "Who was the King of France during the Revolution?", ml: "വിപ്ലവകാലത്ത് ഫ്രാൻസിലെ രാജാവ് ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Louis XIV", ml: "ലൂയി പതിനാലാമൻ" } },
        { id: "opt2", text: { en: "Louis XV", ml: "ലൂയി പതിനഞ്ചാമൻ" } },
        { id: "opt3", text: { en: "Louis XVI", ml: "ലൂയി പതിനാറാമൻ" } },
        { id: "opt4", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } }
      ],
      answer: { id: "opt3", text: { en: "Louis XVI", ml: "ലൂയി പതിനാറാമൻ" } }
    },
    {
      q_id: "q18",
      question: { en: "What was the slogan of the French Revolution?", ml: "ഫ്രഞ്ച് വിപ്ലവത്തിന്റെ മുദ്രാവാക്യം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Liberty, Equality, Fraternity", ml: "സ്വാതന്ത്ര്യം, സമത്വം, സാഹോദര്യം" } },
        { id: "opt2", text: { en: "Peace, Land, Bread", ml: "സമാധാനം, ഭൂമി, റൊട്ടി" } },
        { id: "opt3", text: { en: "Do or Die", ml: "പ്രവർത്തിക്കുക അല്ലെങ്കിൽ മരിക്കുക" } },
        { id: "opt4", text: { en: "No Taxation Without Representation", ml: "പ്രാതിനിധ്യമില്ലാതെ നികുതിയില്ല" } }
      ],
      answer: { id: "opt1", text: { en: "Liberty, Equality, Fraternity", ml: "സ്വാതന്ത്ര്യം, സമത്വം, സാഹോദര്യം" } }
    },
    {
      q_id: "q19",
      question: { en: "Who led the 'Reign of Terror'?", ml: "'ഭീകരവാഴ്ച'യ്ക്ക് നേതൃത്വം നൽകിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Danton", ml: "ഡാന്റൺ" } },
        { id: "opt2", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } },
        { id: "opt3", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } },
        { id: "opt4", text: { en: "Louis XVI", ml: "ലൂയി പതിനാറാമൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } }
    },
    {
      q_id: "q20",
      question: { en: "Which machine was used for execution during the Reign of Terror?", ml: "ഭീകരവാഴ്ചക്കാലത്ത് വധശിക്ഷയ്ക്ക് ഉപയോഗിച്ചിരുന്ന യന്ത്രം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Electric Chair", ml: "ഇലക്ട്രിക് ചെയർ" } },
        { id: "opt2", text: { en: "Guillotine", ml: "ഗില്ലറ്റിൻ" } },
        { id: "opt3", text: { en: "Hanging Rope", ml: "തൂക്കുകയർ" } },
        { id: "opt4", text: { en: "Firing Squad", ml: "ഫയറിംഗ് സ്ക്വാഡ്" } }
      ],
      answer: { id: "opt2", text: { en: "Guillotine", ml: "ഗില്ലറ്റിൻ" } }
    },
    {
      q_id: "q21",
      question: { en: "Who wrote the 'Declaration of the Rights of Woman'?", ml: "'സ്ത്രീകളുടെ അവകാശ പ്രഖ്യാപനം' എഴുതിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Marie Antoinette", ml: "മേരി അന്റോയിനെറ്റ്" } },
        { id: "opt2", text: { en: "Olympia de Gouges", ml: "ഒളിമ്പിയ ഡി ഗൂഷ്" } },
        { id: "opt3", text: { en: "Charlotte Corday", ml: "ഷാർലറ്റ് കോർഡേ" } },
        { id: "opt4", text: { en: "Madame Roland", ml: "മാഡം റോളണ്ട്" } }
      ],
      answer: { id: "opt2", text: { en: "Olympia de Gouges", ml: "ഒളിമ്പിയ ഡി ഗൂഷ്" } }
    },
    {
      q_id: "q22",
      question: { en: "Where did the women march to demand bread?", ml: "റൊട്ടി ആവശ്യപ്പെട്ട് സ്ത്രീകൾ എവിടേക്കാണ് മാർച്ച് ചെയ്തത്?" },
      options: [
        { id: "opt1", text: { en: "Paris", ml: "പാരീസ്" } },
        { id: "opt2", text: { en: "Bastille", ml: "ബാസ്റ്റിൽ" } },
        { id: "opt3", text: { en: "Versailles", ml: "വെഴ്സായ്" } },
        { id: "opt4", text: { en: "Marseilles", ml: "മാർസെയിൽസ്" } }
      ],
      answer: { id: "opt3", text: { en: "Versailles", ml: "വെഴ്സായ്" } }
    },
    {
      q_id: "q23",
      question: { en: "When was France declared a Republic?", ml: "ഫ്രാൻസ് എപ്പോഴാണ് റിപ്പബ്ലിക്കായി പ്രഖ്യാപിക്കപ്പെട്ടത്?" },
      options: [
        { id: "opt1", text: { en: "1789", ml: "1789" } },
        { id: "opt2", text: { en: "1791", ml: "1791" } },
        { id: "opt3", text: { en: "1792", ml: "1792" } },
        { id: "opt4", text: { en: "1804", ml: "1804" } }
      ],
      answer: { id: "opt3", text: { en: "1792", ml: "1792" } }
    },
    {
      q_id: "q24",
      question: { en: "Who crowned himself as the Emperor of France?", ml: "ഫ്രാൻസിന്റെ ചക്രവർത്തിയായി സ്വയം കിരീടധാരണം നടത്തിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Louis XVI", ml: "ലൂയി പതിനാറാമൻ" } },
        { id: "opt2", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } },
        { id: "opt3", text: { en: "Napoleon Bonaparte", ml: "നെപ്പോളിയൻ ബോണപ്പാർട്ട്" } },
        { id: "opt4", text: { en: "Metternich", ml: "മെറ്റേണിക്" } }
      ],
      answer: { id: "opt3", text: { en: "Napoleon Bonaparte", ml: "നെപ്പോളിയൻ ബോണപ്പാർട്ട്" } }
    },
    {
      q_id: "q25",
      question: { en: "When was the Napoleonic Code introduced?", ml: "നെപ്പോളിയനിക് കോഡ് എപ്പോഴാണ് അവതരിപ്പിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "1799", ml: "1799" } },
        { id: "opt2", text: { en: "1804", ml: "1804" } },
        { id: "opt3", text: { en: "1815", ml: "1815" } },
        { id: "opt4", text: { en: "1789", ml: "1789" } }
      ],
      answer: { id: "opt2", text: { en: "1804", ml: "1804" } }
    },
    {
      q_id: "q26",
      question: { en: "What was the 'Concordat'?", ml: "'കോൺകോർഡാറ്റ്' എന്നാൽ എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Agreement with Britain", ml: "ബ്രിട്ടനുമായുള്ള കരാർ" } },
        { id: "opt2", text: { en: "Agreement with the Pope", ml: "മാർപ്പാപ്പയുമായുള്ള കരാർ" } },
        { id: "opt3", text: { en: "A tax law", ml: "ഒരു നികുതി നിയമം" } },
        { id: "opt4", text: { en: "A war treaty", ml: "ഒരു യുദ്ധ ഉടമ്പടി" } }
      ],
      answer: { id: "opt2", text: { en: "Agreement with the Pope", ml: "മാർപ്പാപ്പയുമായുള്ള കരാർ" } }
    },
    {
      q_id: "q27",
      question: { en: "Which bank was established by Napoleon?", ml: "നെപ്പോളിയൻ സ്ഥാപിച്ച ബാങ്ക് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "World Bank", ml: "ലോക ബാങ്ക്" } },
        { id: "opt2", text: { en: "Bank of France", ml: "ബാങ്ക് ഓഫ് ഫ്രാൻസ്" } },
        { id: "opt3", text: { en: "Bank of Paris", ml: "ബാങ്ക് ഓഫ് പാരീസ്" } },
        { id: "opt4", text: { en: "Royal Bank", ml: "റോയൽ ബാങ്ക്" } }
      ],
      answer: { id: "opt2", text: { en: "Bank of France", ml: "ബാങ്ക് ഓഫ് ഫ്രാൻസ്" } }
    },
    {
      q_id: "q28",
      question: { en: "In which battle was Napoleon finally defeated?", ml: "ഏത് യുദ്ധത്തിലാണ് നെപ്പോളിയൻ അന്തിമമായി പരാജയപ്പെട്ടത്?" },
      options: [
        { id: "opt1", text: { en: "Battle of Waterloo", ml: "വാട്ടർലൂ യുദ്ധം" } },
        { id: "opt2", text: { en: "Battle of Leipzig", ml: "ലീപ്സിഗ് യുദ്ധം" } },
        { id: "opt3", text: { en: "Battle of Trafalgar", ml: "ട്രഫാൽഗർ യുദ്ധം" } },
        { id: "opt4", text: { en: "Battle of Austerlitz", ml: "ഓസ്റ്റർലിറ്റ്സ് യുദ്ധം" } }
      ],
      answer: { id: "opt1", text: { en: "Battle of Waterloo", ml: "വാട്ടർലൂ യുദ്ധം" } }
    },
    {
      q_id: "q29",
      question: { en: "When was the Battle of Waterloo fought?", ml: "വാട്ടർലൂ യുദ്ധം നടന്നത് എപ്പോൾ?" },
      options: [
        { id: "opt1", text: { en: "1804", ml: "1804" } },
        { id: "opt2", text: { en: "1815", ml: "1815" } },
        { id: "opt3", text: { en: "1799", ml: "1799" } },
        { id: "opt4", text: { en: "1789", ml: "1789" } }
      ],
      answer: { id: "opt2", text: { en: "1815", ml: "1815" } }
    },
    {
      q_id: "q30",
      question: { en: "Who led the Congress of Vienna?", ml: "വിയന്ന കോൺഗ്രസിന് നേതൃത്വം നൽകിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } },
        { id: "opt2", text: { en: "Metternich", ml: "മെറ്റേണിക്" } },
        { id: "opt3", text: { en: "Louis XVIII", ml: "ലൂയി പതിനെട്ടാമൻ" } },
        { id: "opt4", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } }
      ],
      answer: { id: "opt2", text: { en: "Metternich", ml: "മെറ്റേണിക്" } }
    },
    {
      q_id: "q31",
      question: { en: "Metternich was the Chancellor of which country?", ml: "മെറ്റേണിക് ഏത് രാജ്യത്തെ ചാൻസലർ ആയിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "France", ml: "ഫ്രാൻസ്" } },
        { id: "opt2", text: { en: "Prussia", ml: "പ്രഷ്യ" } },
        { id: "opt3", text: { en: "Austria", ml: "ഓസ്ട്രിയ" } },
        { id: "opt4", text: { en: "Russia", ml: "റഷ്യ" } }
      ],
      answer: { id: "opt3", text: { en: "Austria", ml: "ഓസ്ട്രിയ" } }
    },
    {
      q_id: "q32",
      question: { en: "What was the main aim of the Congress of Vienna?", ml: "വിയന്ന കോൺഗ്രസിന്റെ പ്രധാന ലക്ഷ്യം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "To restore monarchies", ml: "രാജവാഴ്ചകൾ പുനഃസ്ഥാപിക്കാൻ" } },
        { id: "opt2", text: { en: "To spread democracy", ml: "ജനാധിപത്യം പ്രചരിപ്പിക്കാൻ" } },
        { id: "opt3", text: { en: "To support Napoleon", ml: "നെപ്പോളിയനെ പിന്തുണയ്ക്കാൻ" } },
        { id: "opt4", text: { en: "To abolish slavery", ml: "അടിമത്തം നിർത്തലാക്കാൻ" } }
      ],
      answer: { id: "opt1", text: { en: "To restore monarchies", ml: "രാജവാഴ്ചകൾ പുനഃസ്ഥാപിക്കാൻ" } }
    },
    {
      q_id: "q33",
      question: { en: "Which class emerged in France in the 18th century?", ml: "18-ാം നൂറ്റാണ്ടിൽ ഫ്രാൻസിൽ ഉയർന്നുവന്ന വർഗ്ഗം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Middle Class", ml: "മധ്യവർഗം" } },
        { id: "opt2", text: { en: "Slave Class", ml: "അടിമ വർഗ്ഗം" } },
        { id: "opt3", text: { en: "Warrior Class", ml: "യോദ്ധാ വർഗ്ഗം" } },
        { id: "opt4", text: { en: "Priestly Class", ml: "പുരോഹിത വർഗ്ഗം" } }
      ],
      answer: { id: "opt1", text: { en: "Middle Class", ml: "മധ്യവർഗം" } }
    },
    {
      q_id: "q34",
      question: { en: "What was 'Corvée'?", ml: "'കോർവെ' എന്നാൽ എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Forced unpaid labour", ml: "പ്രതിഫലമില്ലാത്ത നിർബന്ധിത ജോലി" } },
        { id: "opt2", text: { en: "Tax on salt", ml: "ഉപ്പിന്മേലുള്ള നികുതി" } },
        { id: "opt3", text: { en: "Tax on land", ml: "ഭൂനികുതി" } },
        { id: "opt4", text: { en: "Religious tax", ml: "മതപരമായ നികുതി" } }
      ],
      answer: { id: "opt1", text: { en: "Forced unpaid labour", ml: "പ്രതിഫലമില്ലാത്ത നിർബന്ധിത ജോലി" } }
    },
    {
      q_id: "q35",
      question: { en: "What was 'Terrage'?", ml: "'ടെറാഷ്' എന്നാൽ എന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Tax collected during harvest", ml: "വിളവെടുപ്പ് കാലത്ത് പിരിച്ചിരുന്ന നികുതി" } },
        { id: "opt2", text: { en: "Tax on salt", ml: "ഉപ്പിന്മേലുള്ള നികുതി" } },
        { id: "opt3", text: { en: "Tax on income", ml: "വരുമാന നികുതി" } },
        { id: "opt4", text: { en: "Church tax", ml: "സഭാ നികുതി" } }
      ],
      answer: { id: "opt1", text: { en: "Tax collected during harvest", ml: "വിളവെടുപ്പ് കാലത്ത് പിരിച്ചിരുന്ന നികുതി" } }
    },
    {
      q_id: "q36",
      question: { en: "Which trade agreement caused unemployment in France?", ml: "ഫ്രാൻസിൽ തൊഴിലില്ലായ്മയ്ക്ക് കാരണമായ വ്യാപാരക്കരാർ ഏത് രാജ്യവുമായാണ്?" },
      options: [
        { id: "opt1", text: { en: "Britain", ml: "ബ്രിട്ടൻ" } },
        { id: "opt2", text: { en: "Spain", ml: "സ്പെയിൻ" } },
        { id: "opt3", text: { en: "Russia", ml: "റഷ്യ" } },
        { id: "opt4", text: { en: "Austria", ml: "ഓസ്ട്രിയ" } }
      ],
      answer: { id: "opt1", text: { en: "Britain", ml: "ബ്രിട്ടൻ" } }
    },
    {
      q_id: "q37",
      question: { en: "What was the name of the French legislative body?", ml: "ഫ്രഞ്ച് നിയമനിർമ്മാണ സഭയുടെ പേര് എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Parliament", ml: "പാർലമെന്റ്" } },
        { id: "opt2", text: { en: "Estates General", ml: "എസ്റ്റേറ്റ്സ് ജനറൽ" } },
        { id: "opt3", text: { en: "Congress", ml: "കോൺഗ്രസ്" } },
        { id: "opt4", text: { en: "Duma", ml: "ഡ്യൂമ" } }
      ],
      answer: { id: "opt2", text: { en: "Estates General", ml: "എസ്റ്റേറ്റ്സ് ജനറൽ" } }
    },
    {
      q_id: "q38",
      question: { en: "What did the Third Estate declare themselves as?", ml: "മൂന്നാം എസ്റ്റേറ്റ് തങ്ങളെത്തന്നെ എന്തായി പ്രഖ്യാപിച്ചു?" },
      options: [
        { id: "opt1", text: { en: "National Assembly", ml: "ദേശീയ അസംബ്ലി" } },
        { id: "opt2", text: { en: "Royal Council", ml: "റോയൽ കൗൺസിൽ" } },
        { id: "opt3", text: { en: "Peoples Court", ml: "ജനകീയ കോടതി" } },
        { id: "opt4", text: { en: "Supreme Council", ml: "സുപ്രീം കൗൺസിൽ" } }
      ],
      answer: { id: "opt1", text: { en: "National Assembly", ml: "ദേശീയ അസംബ്ലി" } }
    },
    {
      q_id: "q39",
      question: { en: "Which political club was most influential during the Reign of Terror?", ml: "ഭീകരവാഴ്ചക്കാലത്ത് ഏറ്റവും സ്വാധീനമുണ്ടായിരുന്ന രാഷ്ട്രീയ ക്ലബ് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Jacobins", ml: "ജേക്കബിനുകൾ" } },
        { id: "opt2", text: { en: "Girondins", ml: "ജിറോണ്ടിനുകൾ" } },
        { id: "opt3", text: { en: "Royalists", ml: "രാജഭക്തർ" } },
        { id: "opt4", text: { en: "Socialists", ml: "സോഷ്യലിസ്റ്റുകൾ" } }
      ],
      answer: { id: "opt1", text: { en: "Jacobins", ml: "ജേക്കബിനുകൾ" } }
    },
    {
      q_id: "q40",
      question: { en: "What system of measurement was introduced by the Revolution?", ml: "വിപ്ലവം അവതരിപ്പിച്ച അളവ് സമ്പ്രദായം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Imperial System", ml: "ഇംപീരിയൽ സിസ്റ്റം" } },
        { id: "opt2", text: { en: "Metric System", ml: "മെട്രിക് സിസ്റ്റം" } },
        { id: "opt3", text: { en: "Local System", ml: "പ്രാദേശിക സമ്പ്രദായം" } },
        { id: "opt4", text: { en: "Roman System", ml: "റോമൻ സമ്പ്രദായം" } }
      ],
      answer: { id: "opt2", text: { en: "Metric System", ml: "മെട്രിക് സിസ്റ്റം" } }
    },
    {
      q_id: "q41",
      question: { en: "Who said 'After me, the deluge'?", ml: "'എനിക്ക് ശേഷം പ്രളയം' എന്ന് പറഞ്ഞത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Louis XIV", ml: "ലൂയി പതിനാലാമൻ" } },
        { id: "opt2", text: { en: "Louis XV", ml: "ലൂയി പതിനഞ്ചാമൻ" } },
        { id: "opt3", text: { en: "Louis XVI", ml: "ലൂയി പതിനാറാമൻ" } },
        { id: "opt4", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Louis XV", ml: "ലൂയി പതിനഞ്ചാമൻ" } }
    },
    {
      q_id: "q42",
      question: { en: "What was the main cause of the economic crisis in France?", ml: "ഫ്രാൻസിലെ സാമ്പത്തിക പ്രതിസന്ധിയുടെ പ്രധാന കാരണം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Industrial growth", ml: "വ്യവസായ വളർച്ച" } },
        { id: "opt2", text: { en: "War debts and royal extravagance", ml: "യുദ്ധ കടങ്ങളും രാജകീയ ധൂർത്തും" } },
        { id: "opt3", text: { en: "Low taxes", ml: "കുറഞ്ഞ നികുതികൾ" } },
        { id: "opt4", text: { en: "Population decrease", ml: "ജനസംഖ്യ കുറയുന്നത്" } }
      ],
      answer: { id: "opt2", text: { en: "War debts and royal extravagance", ml: "യുദ്ധ കടങ്ങളും രാജകീയ ധൂർത്തും" } }
    },
    {
      q_id: "q43",
      question: { en: "Which estate had the right to collect taxes?", ml: "നികുതി പിരിക്കാൻ അവകാശമുണ്ടായിരുന്ന എസ്റ്റേറ്റ് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "First and Second Estates", ml: "ഒന്നാം, രണ്ടാം എസ്റ്റേറ്റുകൾ" } },
        { id: "opt2", text: { en: "Third Estate", ml: "മൂന്നാം എസ്റ്റേറ്റ്" } },
        { id: "opt3", text: { en: "Only First Estate", ml: "ഒന്നാം എസ്റ്റേറ്റ് മാത്രം" } },
        { id: "opt4", text: { en: "Only Second Estate", ml: "രണ്ടാം എസ്റ്റേറ്റ് മാത്രം" } }
      ],
      answer: { id: "opt1", text: { en: "First and Second Estates", ml: "ഒന്നാം, രണ്ടാം എസ്റ്റേറ്റുകൾ" } }
    },
    {
      q_id: "q44",
      question: { en: "What did the 'Divine Right Theory' claim?", ml: "'ദൈവദത്ത അവകാശ സിദ്ധാന്തം' എന്താണ് അവകാശപ്പെട്ടത്?" },
      options: [
        { id: "opt1", text: { en: "King is elected by people", ml: "രാജാവിനെ ജനങ്ങൾ തിരഞ്ഞെടുക്കുന്നു" } },
        { id: "opt2", text: { en: "King is answerable to God only", ml: "രാജാവ് ദൈവത്തോട് മാത്രം ഉത്തരം പറയാൻ ബാധ്യസ്ഥനാണ്" } },
        { id: "opt3", text: { en: "King has limited powers", ml: "രാജാവിന് പരിമിതമായ അധികാരങ്ങളേ ഉള്ളൂ" } },
        { id: "opt4", text: { en: "King is a servant of the state", ml: "രാജാവ് രാജ്യത്തിന്റെ സേവകനാണ്" } }
      ],
      answer: { id: "opt2", text: { en: "King is answerable to God only", ml: "രാജാവ് ദൈവത്തോട് മാത്രം ഉത്തരം പറയാൻ ബാധ്യസ്ഥനാണ്" } }
    },
    {
      q_id: "q45",
      question: { en: "Who were the 'Bourgeoisie'?", ml: "'ബൂർഷ്വാസികൾ' ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Wealthy middle class", ml: "സമ്പന്നരായ മധ്യവർഗം" } },
        { id: "opt2", text: { en: "Poor peasants", ml: "ദരിദ്രരായ കർഷകർ" } },
        { id: "opt3", text: { en: "Nobles", ml: "പ്രഭുക്കന്മാർ" } },
        { id: "opt4", text: { en: "Clergy", ml: "പുരോഹിതന്മാർ" } }
      ],
      answer: { id: "opt1", text: { en: "Wealthy middle class", ml: "സമ്പന്നരായ മധ്യവർഗം" } }
    },
    {
      q_id: "q46",
      question: { en: "What was the result of the women's march to Versailles?", ml: "വെഴ്സായ് കൊട്ടാരത്തിലേക്കുള്ള സ്ത്രീകളുടെ മാർച്ചിന്റെ ഫലം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "King abdicated", ml: "രാജാവ് സ്ഥാനമൊഴിഞ്ഞു" } },
        { id: "opt2", text: { en: "King returned to Paris", ml: "രാജാവ് പാരീസിലേക്ക് മടങ്ങി" } },
        { id: "opt3", text: { en: "Women were arrested", ml: "സ്ത്രീകൾ അറസ്റ്റിലായി" } },
        { id: "opt4", text: { en: "Bread prices increased", ml: "ബ്രെഡ് വില വർദ്ധിച്ചു" } }
      ],
      answer: { id: "opt2", text: { en: "King returned to Paris", ml: "രാജാവ് പാരീസിലേക്ക് മടങ്ങി" } }
    },
    {
      q_id: "q47",
      question: { en: "Which country's revolution influenced the French Revolution?", ml: "ഏത് രാജ്യത്തെ വിപ്ലവമാണ് ഫ്രഞ്ച് വിപ്ലവത്തെ സ്വാധീനിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Russian Revolution", ml: "റഷ്യൻ വിപ്ലവം" } },
        { id: "opt2", text: { en: "American Revolution", ml: "അമേരിക്കൻ വിപ്ലവം" } },
        { id: "opt3", text: { en: "Chinese Revolution", ml: "ചൈനീസ് വിപ്ലവം" } },
        { id: "opt4", text: { en: "Indian Revolution", ml: "ഇന്ത്യൻ വിപ്ലവം" } }
      ],
      answer: { id: "opt2", text: { en: "American Revolution", ml: "അമേരിക്കൻ വിപ്ലവം" } }
    },
    {
      q_id: "q48",
      question: { en: "What happened to Robespierre in the end?", ml: "അവസാനം റോബെസ്പിയർക്ക് എന്ത് സംഭവിച്ചു?" },
      options: [
        { id: "opt1", text: { en: "He became King", ml: "അദ്ദേഹം രാജാവായി" } },
        { id: "opt2", text: { en: "He was guillotined", ml: "അദ്ദേഹത്തെ ഗില്ലറ്റിൻ ചെയ്തു" } },
        { id: "opt3", text: { en: "He escaped to America", ml: "അദ്ദേഹം അമേരിക്കയിലേക്ക് രക്ഷപ്പെട്ടു" } },
        { id: "opt4", text: { en: "He died of natural causes", ml: "അദ്ദേഹം സ്വാഭാവിക മരണം പ്രാപിച്ചു" } }
      ],
      answer: { id: "opt2", text: { en: "He was guillotined", ml: "അദ്ദേഹത്തെ ഗില്ലറ്റിൻ ചെയ്തു" } }
    },
    {
      q_id: "q49",
      question: { en: "What did the 'Declaration of the Rights of Man' proclaim?", ml: "'മനുഷ്യന്റെ അവകാശ പ്രഖ്യാപനം' എന്താണ് വിളംബരം ചെയ്തത്?" },
      options: [
        { id: "opt1", text: { en: "Divine right of kings", ml: "രാജാക്കന്മാരുടെ ദൈവദത്ത അവകാശം" } },
        { id: "opt2", text: { en: "Equal rights for all men", ml: "എല്ലാ മനുഷ്യർക്കും തുല്യ അവകാശങ്ങൾ" } },
        { id: "opt3", text: { en: "Slavery is legal", ml: "അടിമത്തം നിയമവിധേയമാണ്" } },
        { id: "opt4", text: { en: "Women have no rights", ml: "സ്ത്രീകൾക്ക് അവകാശങ്ങളില്ല" } }
      ],
      answer: { id: "opt2", text: { en: "Equal rights for all men", ml: "എല്ലാ മനുഷ്യർക്കും തുല്യ അവകാശങ്ങൾ" } }
    },
    {
      q_id: "q50",
      question: { en: "Which color represented the French Revolution?", ml: "ഫ്രഞ്ച് വിപ്ലവത്തെ പ്രതിനിധീകരിച്ച നിറങ്ങൾ ഏവ?" },
      options: [
        { id: "opt1", text: { en: "Red, White, Blue", ml: "ചുവപ്പ്, വെള്ള, നീല" } },
        { id: "opt2", text: { en: "Green, White, Red", ml: "പച്ച, വെള്ള, ചുവപ്പ്" } },
        { id: "opt3", text: { en: "Black, Red, Gold", ml: "കറുപ്പ്, ചുവപ്പ്, സ്വർണ്ണം" } },
        { id: "opt4", text: { en: "Blue, Yellow, Red", ml: "നീല, മഞ്ഞ, ചുവപ്പ്" } }
      ],
      answer: { id: "opt1", text: { en: "Red, White, Blue", ml: "ചുവപ്പ്, വെള്ള, നീല" } }
    },
    {
      q_id: "q51",
      question: { en: "Who was the Queen of France during the French Revolution?", ml: "ഫ്രഞ്ച് വിപ്ലവകാലത്ത് ഫ്രാൻസിലെ രാജ്ഞി ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Marie Antoinette", ml: "മേരി അന്റോയിനെറ്റ്" } },
        { id: "opt2", text: { en: "Maria Theresa", ml: "മരിയ തെരേസ" } },
        { id: "opt3", text: { en: "Elizabeth I", ml: "എലിസബത്ത് I" } },
        { id: "opt4", text: { en: "Catherine the Great", ml: "കാതറിൻ ദി ഗ്രേറ്റ്" } }
      ],
      answer: { id: "opt1", text: { en: "Marie Antoinette", ml: "മേരി അന്റോയിനെറ്റ്" } }
    },
    {
      q_id: "q52",
      question: { en: "Which book was written by Montesquieu?", ml: "മൊണ്ടെസ്ക്യൂ രചിച്ച പുസ്തകം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "The Social Contract", ml: "സാമൂഹിക ഉടമ്പടി" } },
        { id: "opt2", text: { en: "The Spirit of Laws", ml: "നിയമങ്ങളുടെ ആത്മാവ്" } },
        { id: "opt3", text: { en: "Two Treatises of Government", ml: "ഭരണകൂടത്തെക്കുറിച്ചുള്ള രണ്ട് പ്രബന്ധങ്ങൾ" } },
        { id: "opt4", text: { en: "Das Kapital", ml: "ദാസ് ക്യാപിറ്റൽ" } }
      ],
      answer: { id: "opt2", text: { en: "The Spirit of Laws", ml: "നിയമങ്ങളുടെ ആത്മാവ്" } }
    },
    {
      q_id: "q53",
      question: { en: "Who led the representatives of the Third Estate at Versailles?", ml: "വെഴ്സായിൽ മൂന്നാം എസ്റ്റേറ്റ് പ്രതിനിധികളെ നയിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Mirabeau and Abbé Sieyès", ml: "മിരാബോയും അബെ സിയേസും" } },
        { id: "opt2", text: { en: "Danton and Robespierre", ml: "ഡാന്റണും റോബെസ്പിയറും" } },
        { id: "opt3", text: { en: "Napoleon and Louis XVI", ml: "നെപ്പോളിയനും ലൂയി പതിനാറാമനും" } },
        { id: "opt4", text: { en: "Voltaire and Rousseau", ml: "വോൾട്ടയറും റൂസ്സോയും" } }
      ],
      answer: { id: "opt1", text: { en: "Mirabeau and Abbé Sieyès", ml: "മിരാബോയും അബെ സിയേസും" } }
    },
    {
      q_id: "q54",
      question: { en: "Who wrote the pamphlet called 'What is the Third Estate'?", ml: "'എന്താണ് മൂന്നാം എസ്റ്റേറ്റ്' എന്ന ലഘുലേഖ എഴുതിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Mirabeau", ml: "മിരാബോ" } },
        { id: "opt2", text: { en: "Abbé Sieyès", ml: "അബെ സിയേസ്" } },
        { id: "opt3", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { id: "opt4", text: { en: "Montesquieu", ml: "മൊണ്ടെസ്ക്യൂ" } }
      ],
      answer: { id: "opt2", text: { en: "Abbé Sieyès", ml: "അബെ സിയേസ്" } }
    },
    {
      q_id: "q55",
      question: { en: "What is the National Anthem of France?", ml: "ഫ്രാൻസിന്റെ ദേശീയ ഗാനം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "God Save the King", ml: "ഗോഡ് സേവ് ദി കിംഗ്" } },
        { id: "opt2", text: { en: "The Star-Spangled Banner", ml: "ദി സ്റ്റാർ-സ്പാംഗിൾഡ് ബാനർ" } },
        { id: "opt3", text: { en: "Marseillaise", ml: "മാർസെയിൽസ്" } },
        { id: "opt4", text: { en: "Ode to Joy", ml: "ഓഡ് ടു ജോയ്" } }
      ],
      answer: { id: "opt3", text: { en: "Marseillaise", ml: "മാർസെയിൽസ്" } }
    },
    {
      q_id: "q56",
      question: { en: "What does 'Sans-culottes' mean?", ml: "'സാൻസ്-കുലോട്ടുകൾ' എന്നതിന്റെ അർത്ഥമെന്ത്?" },
      options: [
        { id: "opt1", text: { en: "Those without knee breeches", ml: "മുട്ടിറക്കമുള്ള ട്രൗസർ ധരിക്കാത്തവർ" } },
        { id: "opt2", text: { en: "Those with red hats", ml: "ചുവന്ന തൊപ്പി ധരിച്ചവർ" } },
        { id: "opt3", text: { en: "The nobles", ml: "പ്രഭുക്കന്മാർ" } },
        { id: "opt4", text: { en: "The clergy", ml: "പുരോഹിതന്മാർ" } }
      ],
      answer: { id: "opt1", text: { en: "Those without knee breeches", ml: "മുട്ടിറക്കമുള്ള ട്രൗസർ ധരിക്കാത്തവർ" } }
    },
    {
      q_id: "q57",
      question: { en: "What did the 'Sceptre' symbolize in revolutionary France?", ml: "വിപ്ലവ ഫ്രാൻസിൽ 'ചെങ്കോൽ' (Sceptre) എന്തിനെയാണ് സൂചിപ്പിച്ചിരുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Royal power", ml: "രാജകീയ അധികാരം" } },
        { id: "opt2", text: { en: "Eternity", ml: "അനശ്വരത" } },
        { id: "opt3", text: { en: "Freedom", ml: "സ്വാതന്ത്ര്യം" } },
        { id: "opt4", text: { en: "Unity", ml: "ഐക്യം" } }
      ],
      answer: { id: "opt1", text: { en: "Royal power", ml: "രാജകീയ അധികാരം" } }
    },
    {
      q_id: "q58",
      question: { en: "What did the symbol of a 'Snake biting its tail to form a ring' stand for?", ml: "'വാലിൽ കടിച്ചുപിടിച്ച് വളയമായി നിൽക്കുന്ന പാമ്പ്' എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Eternity", ml: "അനശ്വരത" } },
        { id: "opt2", text: { en: "Wisdom", ml: "വിജ്ഞാനം" } },
        { id: "opt3", text: { en: "Power", ml: "അധികാരം" } },
        { id: "opt4", text: { en: "Strength", ml: "ശക്തി" } }
      ],
      answer: { id: "opt1", text: { en: "Eternity", ml: "അനശ്വരത" } }
    },
    {
      q_id: "q59",
      question: { en: "What did the 'Broken Chain' symbolize?", ml: "'പൊട്ടിയ ചങ്ങല' എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Becoming free", ml: "സ്വാതന്ത്ര്യം നേടുന്നത്" } },
        { id: "opt2", text: { en: "Strength", ml: "ശക്തി" } },
        { id: "opt3", text: { en: "Unity", ml: "ഐക്യം" } },
        { id: "opt4", text: { en: "Law", ml: "നിയമം" } }
      ],
      answer: { id: "opt1", text: { en: "Becoming free", ml: "സ്വാതന്ത്ര്യം നേടുന്നത്" } }
    },
    {
      q_id: "q60",
      question: { en: "What did the 'Eye within a triangle radiating light' stand for?", ml: "'ത്രികോണത്തിനുള്ളിലെ പ്രകാശം പരത്തുന്ന കണ്ണ്' എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Knowledge", ml: "അറിവ്" } },
        { id: "opt2", text: { en: "Power", ml: "അധികാരം" } },
        { id: "opt3", text: { en: "Eternity", ml: "അനശ്വരത" } },
        { id: "opt4", text: { en: "Fraternity", ml: "സാഹോദര്യം" } }
      ],
      answer: { id: "opt1", text: { en: "Knowledge", ml: "അറിവ്" } }
    },
    {
      q_id: "q61",
      question: { en: "What was the 'Phrygian Cap' a symbol of?", ml: "'ഫ്രിജിയൻ തൊപ്പി' എന്തിന്റെ പ്രതീകമായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Freedom worn by a slave upon becoming free", ml: "അടിമകൾ സ്വതന്ത്രരാകുമ്പോൾ ധരിക്കുന്ന സ്വാതന്ത്ര്യത്തിന്റെ പ്രതീകം" } },
        { id: "opt2", text: { en: "Royal power", ml: "രാജകീയ അധികാരം" } },
        { id: "opt3", text: { en: "Clergy", ml: "പുരോഹിതന്മാർ" } },
        { id: "opt4", text: { en: "Nobility", ml: "പ്രഭുക്കന്മാർ" } }
      ],
      answer: { id: "opt1", text: { en: "Freedom worn by a slave upon becoming free", ml: "അടിമകൾ സ്വതന്ത്രരാകുമ്പോൾ ധരിക്കുന്ന സ്വാതന്ത്ര്യത്തിന്റെ പ്രതീകം" } }
    },
    {
      q_id: "q62",
      question: { en: "Who was the 'Winged Woman'?", ml: "'ചിറകുള്ള സ്ത്രീ' ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Personification of the Law", ml: "നിയമത്തിന്റെ ആൾരൂപം" } },
        { id: "opt2", text: { en: "The Queen", ml: "രാജ്ഞി" } },
        { id: "opt3", text: { en: "Goddess of War", ml: "യുദ്ധദേവത" } },
        { id: "opt4", text: { en: "Symbol of Peace", ml: "സമാധാനത്തിന്റെ പ്രതീകം" } }
      ],
      answer: { id: "opt1", text: { en: "Personification of the Law", ml: "നിയമത്തിന്റെ ആൾരൂപം" } }
    },
    {
      q_id: "q63",
      question: { en: "What did 'The Law Tablet' signify?", ml: "'നിയമ ഫലകം' എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "The law is the same for all", ml: "നിയമം എല്ലാവർക്കും തുല്യമാണ്" } },
        { id: "opt2", text: { en: "The King's law", ml: "രാജാവിന്റെ നിയമം" } },
        { id: "opt3", text: { en: "Divine law", ml: "ദൈവിക നിയമം" } },
        { id: "opt4", text: { en: "Military law", ml: "സൈനിക നിയമം" } }
      ],
      answer: { id: "opt1", text: { en: "The law is the same for all", ml: "നിയമം എല്ലാവർക്കും തുല്യമാണ്" } }
    },
    {
      q_id: "q64",
      question: { en: "What did the 'Bundle of Rods or Fasces' symbolize?", ml: "'കെട്ടിവെച്ച ദണ്ഡുകൾ' (Fasces) എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Strength lies in unity", ml: "ഐക്യത്തിലാണ് ശക്തി" } },
        { id: "opt2", text: { en: "Royal punishment", ml: "രാജകീയ ശിക്ഷ" } },
        { id: "opt3", text: { en: "Agricultural produce", ml: "കാർഷിക ഉൽപ്പന്നങ്ങൾ" } },
        { id: "opt4", text: { en: "Wealth", ml: "സമ്പത്ത്" } }
      ],
      answer: { id: "opt1", text: { en: "Strength lies in unity", ml: "ഐക്യത്തിലാണ് ശക്തി" } }
    },
    {
      q_id: "q65",
      question: { en: "Which group of people were considered 'Active Citizens' under the Constitution of 1791?", ml: "1791-ലെ ഭരണഘടന പ്രകാരം 'സജീവ പൗരന്മാർ' (Active Citizens) ആയി കണക്കാക്കപ്പെട്ടിരുന്നത് ആരെയാണ്?" },
      options: [
        { id: "opt1", text: { en: "Men above 25 years who paid taxes", ml: "നികുതി അടച്ചിരുന്ന 25 വയസ്സിന് മുകളിലുള്ള പുരുഷന്മാർ" } },
        { id: "opt2", text: { en: "All men and women", ml: "എല്ലാ പുരുഷന്മാരും സ്ത്രീകളും" } },
        { id: "opt3", text: { en: "Only nobles", ml: "പ്രഭുക്കന്മാർ മാത്രം" } },
        { id: "opt4", text: { en: "All men above 21", ml: "21 വയസ്സിന് മുകളിലുള്ള എല്ലാ പുരുഷന്മാരും" } }
      ],
      answer: { id: "opt1", text: { en: "Men above 25 years who paid taxes", ml: "നികുതി അടച്ചിരുന്ന 25 വയസ്സിന് മുകളിലുള്ള പുരുഷന്മാർ" } }
    },
    {
      q_id: "q66",
      question: { en: "Who were 'Passive Citizens'?", ml: "'നിഷ്ക്രിയ പൗരന്മാർ' (Passive Citizens) ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Women, children, and men who did not pay taxes", ml: "സ്ത്രീകൾ, കുട്ടികൾ, നികുതി അടക്കാത്ത പുരുഷന്മാർ" } },
        { id: "opt2", text: { en: "Soldiers", ml: "സൈനികർ" } },
        { id: "opt3", text: { en: "Clergy", ml: "പുരോഹിതന്മാർ" } },
        { id: "opt4", text: { en: "Foreigners", ml: "വിദേശികൾ" } }
      ],
      answer: { id: "opt1", text: { en: "Women, children, and men who did not pay taxes", ml: "സ്ത്രീകൾ, കുട്ടികൾ, നികുതി അടക്കാത്ത പുരുഷന്മാർ" } }
    },
    {
      q_id: "q67",
      question: { en: "What type of government did the Constitution of 1791 establish?", ml: "1791-ലെ ഭരണഘടന ഏത് തരം ഭരണകൂടമാണ് സ്ഥാപിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Constitutional Monarchy", ml: "ഭരണഘടനാപരമായ രാജവാഴ്ച" } },
        { id: "opt2", text: { en: "Absolute Monarchy", ml: "സ്വേച്ഛാധിപത്യ രാജവാഴ്ച" } },
        { id: "opt3", text: { en: "Republic", ml: "റിപ്പബ്ലിക്" } },
        { id: "opt4", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } }
      ],
      answer: { id: "opt1", text: { en: "Constitutional Monarchy", ml: "ഭരണഘടനാപരമായ രാജവാഴ്ച" } }
    },
    {
      q_id: "q68",
      question: { en: "To which country did Louis XVI attempt to escape?", ml: "ഏത് രാജ്യത്തേക്കാണ് ലൂയി പതിനാറാമൻ രക്ഷപ്പെടാൻ ശ്രമിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Austria", ml: "ഓസ്ട്രിയ" } },
        { id: "opt2", text: { en: "England", ml: "ഇംഗ്ലണ്ട്" } },
        { id: "opt3", text: { en: "Spain", ml: "സ്പെയിൻ" } },
        { id: "opt4", text: { en: "Russia", ml: "റഷ്യ" } }
      ],
      answer: { id: "opt1", text: { en: "Austria", ml: "ഓസ്ട്രിയ" } }
    },
    {
      q_id: "q69",
      question: { en: "Against which countries did the National Assembly declare war in 1792?", ml: "1792-ൽ ദേശീയ അസംബ്ലി ഏത് രാജ്യങ്ങൾക്കെതിരെയാണ് യുദ്ധം പ്രഖ്യാപിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Prussia and Austria", ml: "പ്രഷ്യയും ഓസ്ട്രിയയും" } },
        { id: "opt2", text: { en: "England and Spain", ml: "ഇംഗ്ലണ്ടും സ്പെയിനും" } },
        { id: "opt3", text: { en: "Russia and Poland", ml: "റഷ്യയും പോളണ്ടും" } },
        { id: "opt4", text: { en: "Italy and Germany", ml: "ഇറ്റലിയും ജർമ്മനിയും" } }
      ],
      answer: { id: "opt1", text: { en: "Prussia and Austria", ml: "പ്രഷ്യയും ഓസ്ട്രിയയും" } }
    },
    {
      q_id: "q70",
      question: { en: "Which battle stopped the Prussian army in 1792?", ml: "1792-ൽ പ്രഷ്യൻ സൈന്യത്തെ തടഞ്ഞുനിർത്തിയ യുദ്ധം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Battle of Valmy", ml: "വാൽമി യുദ്ധം" } },
        { id: "opt2", text: { en: "Battle of Waterloo", ml: "വാട്ടർലൂ യുദ്ധം" } },
        { id: "opt3", text: { en: "Battle of Leipzig", ml: "ലീപ്സിഗ് യുദ്ധം" } },
        { id: "opt4", text: { en: "Battle of Trafalgar", ml: "ട്രഫാൽഗർ യുദ്ധം" } }
      ],
      answer: { id: "opt1", text: { en: "Battle of Valmy", ml: "വാൽമി യുദ്ധം" } }
    },
    {
      q_id: "q71",
      question: { en: "What was the new assembly elected in 1792 called?", ml: "1792-ൽ തിരഞ്ഞെടുക്കപ്പെട്ട പുതിയ അസംബ്ലിയെ എന്താണ് വിളിച്ചിരുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "The Convention", ml: "കൺവെൻഷൻ" } },
        { id: "opt2", text: { en: "National Assembly", ml: "ദേശീയ അസംബ്ലി" } },
        { id: "opt3", text: { en: "Estates General", ml: "എസ്റ്റേറ്റ്സ് ജനറൽ" } },
        { id: "opt4", text: { en: "Directory", ml: "ഡയറക്ടറി" } }
      ],
      answer: { id: "opt1", text: { en: "The Convention", ml: "കൺവെൻഷൻ" } }
    },
    {
      q_id: "q72",
      question: { en: "When was the Monarchy abolished in France?", ml: "ഫ്രാൻസിൽ രാജവാഴ്ച നിർത്തലാക്കിയത് എപ്പോൾ?" },
      options: [
        { id: "opt1", text: { en: "21 September 1792", ml: "1792 സെപ്റ്റംബർ 21" } },
        { id: "opt2", text: { en: "14 July 1789", ml: "1789 ജൂലൈ 14" } },
        { id: "opt3", text: { en: "20 June 1789", ml: "1789 ജൂൺ 20" } },
        { id: "opt4", text: { en: "4 August 1789", ml: "1789 ഓഗസ്റ്റ് 4" } }
      ],
      answer: { id: "opt1", text: { en: "21 September 1792", ml: "1792 സെപ്റ്റംബർ 21" } }
    },
    {
      q_id: "q73",
      question: { en: "On what charge was Louis XVI sentenced to death?", ml: "എന്ത് കുറ്റത്തിനാണ് ലൂയി പതിനാറാമനെ വധശിക്ഷയ്ക്ക് വിധിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Treason", ml: "രാജ്യദ്രോഹം" } },
        { id: "opt2", text: { en: "Theft", ml: "മോഷണം" } },
        { id: "opt3", text: { en: "Murder", ml: "കൊലപാതകം" } },
        { id: "opt4", text: { en: "Corruption", ml: "അഴിമതി" } }
      ],
      answer: { id: "opt1", text: { en: "Treason", ml: "രാജ്യദ്രോഹം" } }
    },
    {
      q_id: "q74",
      question: { en: "Who invented the Guillotine?", ml: "ഗില്ലറ്റിൻ കണ്ടുപിടിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Dr. Joseph Ignace Guillotin", ml: "ഡോ. ജോസഫ് ഇഗ്നസ് ഗില്ലറ്റിൻ" } },
        { id: "opt2", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } },
        { id: "opt3", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } },
        { id: "opt4", text: { en: "Louis XVI", ml: "ലൂയി പതിനാറാമൻ" } }
      ],
      answer: { id: "opt1", text: { en: "Dr. Joseph Ignace Guillotin", ml: "ഡോ. ജോസഫ് ഇഗ്നസ് ഗില്ലറ്റിൻ" } }
    },
    {
      q_id: "q75",
      question: { en: "What was the Executive body of five members called?", ml: "അഞ്ച് അംഗങ്ങളുള്ള എക്സിക്യൂട്ടീവ് ബോഡിയെ എന്താണ് വിളിച്ചിരുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "The Directory", ml: "ഡയറക്ടറി" } },
        { id: "opt2", text: { en: "The Convention", ml: "കൺവെൻഷൻ" } },
        { id: "opt3", text: { en: "The Assembly", ml: "അസംബ്ലി" } },
        { id: "opt4", text: { en: "The Council", ml: "കൗൺസിൽ" } }
      ],
      answer: { id: "opt1", text: { en: "The Directory", ml: "ഡയറക്ടറി" } }
    },
    {
      q_id: "q76",
      question: { en: "Who seized power from the Directory in 1799?", ml: "1799-ൽ ഡയറക്ടറിയിൽ നിന്ന് അധികാരം പിടിച്ചെടുത്തത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Napoleon Bonaparte", ml: "നെപ്പോളിയൻ ബോണപ്പാർട്ട്" } },
        { id: "opt2", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } },
        { id: "opt3", text: { en: "Louis XVIII", ml: "ലൂയി പതിനെട്ടാമൻ" } },
        { id: "opt4", text: { en: "Metternich", ml: "മെറ്റേണിക്" } }
      ],
      answer: { id: "opt1", text: { en: "Napoleon Bonaparte", ml: "നെപ്പോളിയൻ ബോണപ്പാർട്ട്" } }
    },
    {
      q_id: "q77",
      question: { en: "Which naval battle did Napoleon lose to the British in 1805?", ml: "1805-ൽ ബ്രിട്ടീഷുകാരോട് നെപ്പോളിയൻ പരാജയപ്പെട്ട നാവിക യുദ്ധം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Battle of Trafalgar", ml: "ട്രഫാൽഗർ യുദ്ധം" } },
        { id: "opt2", text: { en: "Battle of Waterloo", ml: "വാട്ടർലൂ യുദ്ധം" } },
        { id: "opt3", text: { en: "Battle of Austerlitz", ml: "ഓസ്റ്റർലിറ്റ്സ് യുദ്ധം" } },
        { id: "opt4", text: { en: "Battle of Leipzig", ml: "ലീപ്സിഗ് യുദ്ധം" } }
      ],
      answer: { id: "opt1", text: { en: "Battle of Trafalgar", ml: "ട്രഫാൽഗർ യുദ്ധം" } }
    },
    {
      q_id: "q78",
      question: { en: "What was the 'Continental System' introduced by Napoleon?", ml: "നെപ്പോളിയൻ അവതരിപ്പിച്ച 'കോണ്ടിനെന്റൽ സിസ്റ്റം' എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "A trade blockade against Britain", ml: "ബ്രിട്ടനെതിരായ വ്യാപാര ഉപരോധം" } },
        { id: "opt2", text: { en: "A new currency system", ml: "ഒരു പുതിയ കറൻസി സമ്പ്രദായം" } },
        { id: "opt3", text: { en: "A military alliance", ml: "ഒരു സൈനിക സഖ്യം" } },
        { id: "opt4", text: { en: "A religious reform", ml: "ഒരു മതപരിഷ്കരണം" } }
      ],
      answer: { id: "opt1", text: { en: "A trade blockade against Britain", ml: "ബ്രിട്ടനെതിരായ വ്യാപാര ഉപരോധം" } }
    },
    {
      q_id: "q79",
      question: { en: "Which campaign marked the beginning of Napoleon's downfall?", ml: "നെപ്പോളിയന്റെ പതനത്തിന് തുടക്കമിട്ട പടയോട്ടം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Russian Campaign", ml: "റഷ്യൻ പടയോട്ടം" } },
        { id: "opt2", text: { en: "Italian Campaign", ml: "ഇറ്റാലിയൻ പടയോട്ടം" } },
        { id: "opt3", text: { en: "Egyptian Campaign", ml: "ഈജിപ്ഷ്യൻ പടയോട്ടം" } },
        { id: "opt4", text: { en: "Spanish Campaign", ml: "സ്പാനിഷ് പടയോട്ടം" } }
      ],
      answer: { id: "opt1", text: { en: "Russian Campaign", ml: "റഷ്യൻ പടയോട്ടം" } }
    },
    {
      q_id: "q80",
      question: { en: "To which island was Napoleon exiled first in 1814?", ml: "1814-ൽ നെപ്പോളിയനെ ആദ്യം നാടുകടത്തിയത് ഏത് ദ്വീപിലേക്കാണ്?" },
      options: [
        { id: "opt1", text: { en: "Elba", ml: "എൽബ" } },
        { id: "opt2", text: { en: "St. Helena", ml: "സെന്റ് ഹെലീന" } },
        { id: "opt3", text: { en: "Corsica", ml: "കോർസിക്ക" } },
        { id: "opt4", text: { en: "Sicily", ml: "സിസിലി" } }
      ],
      answer: { id: "opt1", text: { en: "Elba", ml: "എൽബ" } }
    },
    {
      q_id: "q81",
      question: { en: "What is the period of Napoleon's return in 1815 called?", ml: "1815-ൽ നെപ്പോളിയൻ തിരിച്ചെത്തിയ കാലഘട്ടത്തെ എന്താണ് വിളിക്കുന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Hundred Days", ml: "നൂറു ദിനങ്ങൾ" } },
        { id: "opt2", text: { en: "Golden Age", ml: "സുവർണ്ണ കാലഘട്ടം" } },
        { id: "opt3", text: { en: "Reign of Terror", ml: "ഭീകരവാഴ്ച" } },
        { id: "opt4", text: { en: "The Restoration", ml: "പുനഃസ്ഥാപനം" } }
      ],
      answer: { id: "opt1", text: { en: "Hundred Days", ml: "നൂറു ദിനങ്ങൾ" } }
    },
    {
      q_id: "q82",
      question: { en: "Where was Napoleon exiled to after the Battle of Waterloo?", ml: "വാട്ടർലൂ യുദ്ധത്തിന് ശേഷം നെപ്പോളിയനെ എവിടേക്കാണ് നാടുകടത്തിയത്?" },
      options: [
        { id: "opt1", text: { en: "St. Helena", ml: "സെന്റ് ഹെലീന" } },
        { id: "opt2", text: { en: "Elba", ml: "എൽബ" } },
        { id: "opt3", text: { en: "Malta", ml: "മാൾട്ട" } },
        { id: "opt4", text: { en: "Sardinia", ml: "സർഡിനിയ" } }
      ],
      answer: { id: "opt1", text: { en: "St. Helena", ml: "സെന്റ് ഹെലീന" } }
    },
    {
      q_id: "q83",
      question: { en: "Who assassinated the Jacobin leader Marat?", ml: "ജേക്കബിൻ നേതാവായ മാരറ്റിനെ വധിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Charlotte Corday", ml: "ഷാർലറ്റ് കോർഡേ" } },
        { id: "opt2", text: { en: "Marie Antoinette", ml: "മേരി അന്റോയിനെറ്റ്" } },
        { id: "opt3", text: { en: "Olympe de Gouges", ml: "ഒളിമ്പിയ ഡി ഗൂഷ്" } },
        { id: "opt4", text: { en: "Madame Roland", ml: "മാഡം റോളണ്ട്" } }
      ],
      answer: { id: "opt1", text: { en: "Charlotte Corday", ml: "ഷാർലറ്റ് കോർഡേ" } }
    },
    {
      q_id: "q84",
      question: { en: "Who was known as the 'Friend of the People'?", ml: "'ജനങ്ങളുടെ സുഹൃത്ത്' (Friend of the People) എന്നറിയപ്പെട്ടിരുന്നത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Jean-Paul Marat", ml: "ജീൻ-പോൾ മാരറ്റ്" } },
        { id: "opt2", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } },
        { id: "opt3", text: { en: "Danton", ml: "ഡാന്റൺ" } },
        { id: "opt4", text: { en: "Mirabeau", ml: "മിരാബോ" } }
      ],
      answer: { id: "opt1", text: { en: "Jean-Paul Marat", ml: "ജീൻ-പോൾ മാരറ്റ്" } }
    },
    {
      q_id: "q85",
      question: { en: "Who abolished slavery in the French colonies first?", ml: "ഫ്രഞ്ച് കോളനികളിൽ ആദ്യമായി അടിമത്തം നിർത്തലാക്കിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "The Convention", ml: "കൺവെൻഷൻ" } },
        { id: "opt2", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } },
        { id: "opt3", text: { en: "Louis XVI", ml: "ലൂയി പതിനാറാമൻ" } },
        { id: "opt4", text: { en: "The Directory", ml: "ഡയറക്ടറി" } }
      ],
      answer: { id: "opt1", text: { en: "The Convention", ml: "കൺവെൻഷൻ" } }
    },
    {
      q_id: "q86",
      question: { en: "Who reintroduced slavery in the French colonies?", ml: "ഫ്രഞ്ച് കോളനികളിൽ അടിമത്തം പുനഃസ്ഥാപിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Napoleon Bonaparte", ml: "നെപ്പോളിയൻ ബോണപ്പാർട്ട്" } },
        { id: "opt2", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } },
        { id: "opt3", text: { en: "Louis XVIII", ml: "ലൂയി പതിനെട്ടാമൻ" } },
        { id: "opt4", text: { en: "The Convention", ml: "കൺവെൻഷൻ" } }
      ],
      answer: { id: "opt1", text: { en: "Napoleon Bonaparte", ml: "നെപ്പോളിയൻ ബോണപ്പാർട്ട്" } }
    },
    {
      q_id: "q87",
      question: { en: "When was slavery finally abolished in French colonies?", ml: "ഫ്രഞ്ച് കോളനികളിൽ അടിമത്തം അന്തിമമായി നിർത്തലാക്കിയത് എപ്പോൾ?" },
      options: [
        { id: "opt1", text: { en: "1848", ml: "1848" } },
        { id: "opt2", text: { en: "1794", ml: "1794" } },
        { id: "opt3", text: { en: "1815", ml: "1815" } },
        { id: "opt4", text: { en: "1789", ml: "1789" } }
      ],
      answer: { id: "opt1", text: { en: "1848", ml: "1848" } }
    },
    {
      q_id: "q88",
      question: { en: "Which Indian ruler was a member of the Jacobin Club?", ml: "ജേക്കബിൻ ക്ലബ്ബിൽ അംഗമായിരുന്ന ഇന്ത്യൻ ഭരണാധികാരി ആര്?" },
      options: [
        { id: "opt1", text: { en: "Tipu Sultan", ml: "ടിപ്പു സുൽത്താൻ" } },
        { id: "opt2", text: { en: "Hyder Ali", ml: "ഹൈദർ അലി" } },
        { id: "opt3", text: { en: "Raja Rammohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } },
        { id: "opt4", text: { en: "Shivaji", ml: "ശിവാജി" } }
      ],
      answer: { id: "opt1", text: { en: "Tipu Sultan", ml: "ടിപ്പു സുൽത്താൻ" } }
    },
    {
      q_id: "q89",
      question: { en: "Which Indian social reformer was inspired by the French Revolution?", ml: "ഫ്രഞ്ച് വിപ്ലവത്തിൽ നിന്ന് പ്രചോദനം ഉൾക്കൊണ്ട ഇന്ത്യൻ സാമൂഹിക പരിഷ്കർത്താവ് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Raja Rammohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } },
        { id: "opt2", text: { en: "Swami Vivekananda", ml: "സ്വാമി വിവേകാനന്ദൻ" } },
        { id: "opt3", text: { en: "Dayanand Saraswati", ml: "ദയാനന്ദ സരസ്വതി" } },
        { id: "opt4", text: { en: "Ishwar Chandra Vidyasagar", ml: "ഈശ്വര ചന്ദ്ര വിദ്യാസാഗർ" } }
      ],
      answer: { id: "opt1", text: { en: "Raja Rammohan Roy", ml: "രാജാ റാം മോഹൻ റോയ്" } }
    },
    {
      q_id: "q90",
      question: { en: "What is the date of Bastille Day, France's national holiday?", ml: "ഫ്രാൻസിന്റെ ദേശീയ അവധി ദിനമായ ബാസ്റ്റിൽ ദിനം എന്നാണ്?" },
      options: [
        { id: "opt1", text: { en: "July 14", ml: "ജൂലൈ 14" } },
        { id: "opt2", text: { en: "June 20", ml: "ജൂൺ 20" } },
        { id: "opt3", text: { en: "August 4", ml: "ഓഗസ്റ്റ് 4" } },
        { id: "opt4", text: { en: "September 21", ml: "സെപ്റ്റംബർ 21" } }
      ],
      answer: { id: "opt1", text: { en: "July 14", ml: "ജൂലൈ 14" } }
    },
    {
      q_id: "q91",
      question: { en: "Who wrote 'The Spirit of Laws'?", ml: "'നിയമങ്ങളുടെ ആത്മാവ്' (The Spirit of Laws) എഴുതിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Montesquieu", ml: "മൊണ്ടെസ്ക്യൂ" } },
        { id: "opt2", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { id: "opt3", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { id: "opt4", text: { en: "Locke", ml: "ലോക്ക്" } }
      ],
      answer: { id: "opt1", text: { en: "Montesquieu", ml: "മൊണ്ടെസ്ക്യൂ" } }
    },
    {
      q_id: "q92",
      question: { en: "What did the 'Red Phrygian Cap' symbolize?", ml: "'ചുവന്ന ഫ്രിജിയൻ തൊപ്പി' എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Liberty", ml: "സ്വാതന്ത്ര്യം" } },
        { id: "opt2", text: { en: "Equality", ml: "സമത്വം" } },
        { id: "opt3", text: { en: "Fraternity", ml: "സാഹോദര്യം" } },
        { id: "opt4", text: { en: "Justice", ml: "നീതി" } }
      ],
      answer: { id: "opt1", text: { en: "Liberty", ml: "സ്വാതന്ത്ര്യം" } }
    },
    {
      q_id: "q93",
      question: { en: "Who was the leader of the Girondins?", ml: "ജിറോണ്ടിനുകളുടെ നേതാവ് ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Brissot", ml: "ബ്രിസ്സോട്ട്" } },
        { id: "opt2", text: { en: "Robespierre", ml: "റോബെസ്പിയർ" } },
        { id: "opt3", text: { en: "Danton", ml: "ഡാന്റൺ" } },
        { id: "opt4", text: { en: "Marat", ml: "മാരറ്റ്" } }
      ],
      answer: { id: "opt1", text: { en: "Brissot", ml: "ബ്രിസ്സോട്ട്" } }
    },
    {
      q_id: "q94",
      question: { en: "What was the main currency of France before 1794?", ml: "1794-ന് മുമ്പ് ഫ്രാൻസിലെ പ്രധാന കറൻസി എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Livre", ml: "ലിവർ" } },
        { id: "opt2", text: { en: "Franc", ml: "ഫ്രാങ്ക്" } },
        { id: "opt3", text: { en: "Euro", ml: "യൂറോ" } },
        { id: "opt4", text: { en: "Pound", ml: "പൗണ്ട്" } }
      ],
      answer: { id: "opt1", text: { en: "Livre", ml: "ലിവർ" } }
    },
    {
      q_id: "q95",
      question: { en: "Who composed the 'Marseillaise'?", ml: "'മാർസെയിൽസ്' രചിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Roget de L'Isle", ml: "റോജെ ഡി ലിസിൽ" } },
        { id: "opt2", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { id: "opt3", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { id: "opt4", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } }
      ],
      answer: { id: "opt1", text: { en: "Roget de L'Isle", ml: "റോജെ ഡി ലിസിൽ" } }
    },
    {
      q_id: "q96",
      question: { en: "What does the colour 'Blue' in the French flag represent?", ml: "ഫ്രഞ്ച് പതാകയിലെ 'നീല' നിറം എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Paris", ml: "പാരീസ്" } },
        { id: "opt2", text: { en: "The King", ml: "രാജാവ്" } },
        { id: "opt3", text: { en: "The Clergy", ml: "പുരോഹിതന്മാർ" } },
        { id: "opt4", text: { en: "The Nobles", ml: "പ്രഭുക്കന്മാർ" } }
      ],
      answer: { id: "opt1", text: { en: "Paris", ml: "പാരീസ്" } }
    },
    {
      q_id: "q97",
      question: { en: "What does the colour 'White' in the French flag represent?", ml: "ഫ്രഞ്ച് പതാകയിലെ 'വെള്ള' നിറം എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "The King (Bourbon House)", ml: "രാജാവ് (ബോർബൺ രാജവംശം)" } },
        { id: "opt2", text: { en: "The People", ml: "ജനങ്ങൾ" } },
        { id: "opt3", text: { en: "Peace", ml: "സമാധാനം" } },
        { id: "opt4", text: { en: "Liberty", ml: "സ്വാതന്ത്ര്യം" } }
      ],
      answer: { id: "opt1", text: { en: "The King (Bourbon House)", ml: "രാജാവ് (ബോർബൺ രാജവംശം)" } }
    },
    {
      q_id: "q98",
      question: { en: "Which estate was the largest in terms of population?", ml: "ജനസംഖ്യയുടെ അടിസ്ഥാനത്തിൽ ഏറ്റവും വലിയ എസ്റ്റേറ്റ് ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Third Estate", ml: "മൂന്നാം എസ്റ്റേറ്റ്" } },
        { id: "opt2", text: { en: "Second Estate", ml: "രണ്ടാം എസ്റ്റേറ്റ്" } },
        { id: "opt3", text: { en: "First Estate", ml: "ഒന്നാം എസ്റ്റേറ്റ്" } },
        { id: "opt4", text: { en: "Fourth Estate", ml: "നാലാം എസ്റ്റേറ്റ്" } }
      ],
      answer: { id: "opt1", text: { en: "Third Estate", ml: "മൂന്നാം എസ്റ്റേറ്റ്" } }
    },
    {
      q_id: "q99",
      question: { en: "Who was the wife of Louis XVI?", ml: "ലൂയി പതിനാറാമന്റെ ഭാര്യ ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Marie Antoinette", ml: "മേരി അന്റോയിനെറ്റ്" } },
        { id: "opt2", text: { en: "Josephine", ml: "ജോസഫൈൻ" } },
        { id: "opt3", text: { en: "Marie Louise", ml: "മേരി ലൂയിസ്" } },
        { id: "opt4", text: { en: "Catherine", ml: "കാതറിൻ" } }
      ],
      answer: { id: "opt1", text: { en: "Marie Antoinette", ml: "മേരി അന്റോയിനെറ്റ്" } }
    },
    {
      q_id: "q100",
      question: { en: "What was the main slogan of the French Revolution?", ml: "ഫ്രഞ്ച് വിപ്ലവത്തിന്റെ പ്രധാന മുദ്രാവാക്യം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Liberty, Equality, Fraternity", ml: "സ്വാതന്ത്ര്യം, സമത്വം, സാഹോദര്യം" } },
        { id: "opt2", text: { en: "Justice, Liberty, Equality", ml: "നീതി, സ്വാതന്ത്ര്യം, സമത്വം" } },
        { id: "opt3", text: { en: "Peace, Land, Bread", ml: "സമാധാനം, ഭൂമി, റൊട്ടി" } },
        { id: "opt4", text: { en: "Unity, Faith, Discipline", ml: "ഐക്യം, വിശ്വാസം, അച്ചടക്കം" } }
      ],
      answer: { id: "opt1", text: { en: "Liberty, Equality, Fraternity", ml: "സ്വാതന്ത്ര്യം, സമത്വം, സാഹോദര്യം" } }
    }
  ],
  sample_questions: [
    {
      q_id: "sq1",
      question: { en: "What was the condition of the Third Estate in French society before the revolution?", ml: "വിപ്ലവത്തിന് മുമ്പ് ഫ്രഞ്ച് സമൂഹത്തിലെ മൂന്നാം എസ്റ്റേറ്റിന്റെ അവസ്ഥ എന്തായിരുന്നു?" },
      answer: { en: "The Third Estate comprised the middle class, workers, and peasants. They lived in extreme poverty. They had to pay all the taxes to the government, nobles, and the church. They were denied any political rights and power.", ml: "മൂന്നാം എസ്റ്റേറ്റിൽ മധ്യവർഗം, തൊഴിലാളികൾ, കർഷകർ എന്നിവർ ഉൾപ്പെട്ടിരുന്നു. അവർ കടുത്ത ദാരിദ്ര്യത്തിലാണ് ജീവിച്ചിരുന്നത്. സർക്കാരിനും പ്രഭുക്കന്മാർക്കും സഭയ്ക്കും അവർ എല്ലാ നികുതികളും നൽകേണ്ടിവന്നു. അവർക്ക് യാതൊരുവിധ രാഷ്ട്രീയ അവകാശങ്ങളും അധികാരങ്ങളും നിഷേധിക്കപ്പെട്ടിരുന്നു." }
    },
    {
      q_id: "sq2",
      question: { en: "Explain the term 'Tennis Court Oath'.", ml: "'ടെന്നീസ് കോർട്ട് പ്രതിജ്ഞ' എന്ന പദം വിശദീകരിക്കുക." },
      answer: { en: "On June 20, 1789, the representatives of the Third Estate met in an indoor tennis court. They declared themselves the National Assembly. They vowed not to disperse until a new constitution for France was drafted. This event is known as the Tennis Court Oath.", ml: "1789 ജൂൺ 20-ന് മൂന്നാം എസ്റ്റേറ്റിന്റെ പ്രതിനിധികൾ ഒരു ഇൻഡോർ ടെന്നീസ് കോർട്ടിൽ ഒത്തുകൂടി. അവർ തങ്ങളെത്തന്നെ ദേശീയ അസംബ്ലിയായി പ്രഖ്യാപിച്ചു. ഫ്രാൻസിനായി ഒരു പുതിയ ഭരണഘടന തയ്യാറാക്കുന്നത് വരെ പിരിഞ്ഞുപോകില്ലെന്ന് അവർ പ്രതിജ്ഞയെടുത്തു. ഈ സംഭവം ടെന്നീസ് കോർട്ട് പ്രതിജ്ഞ എന്നറിയപ്പെടുന്നു." }
    },
    {
      q_id: "sq3",
      question: { en: "How did the ideas of Rousseau influence the French Revolution?", ml: "റൂസ്സോയുടെ ആശയങ്ങൾ ഫ്രഞ്ച് വിപ്ലവത്തെ എങ്ങനെ സ്വാധീനിച്ചു?" },
      answer: { en: "Rousseau wrote the famous book 'The Social Contract'. He argued that man is born free, but everywhere he is in chains. He stated that the king is created by a contract with the people. If the king violates this, he loses the right to rule.", ml: "റൂസ്സോ 'സാമൂഹിക ഉടമ്പടി' എന്ന പ്രശസ്തമായ പുസ്തകം എഴുതി. മനുഷ്യൻ സ്വതന്ത്രനായാണ് ജനിക്കുന്നത്, എന്നാൽ എവിടെയും അവൻ ചങ്ങലകളിലാണെന്ന് അദ്ദേഹം വാദിച്ചു. ജനങ്ങളുമായുള്ള ഒരു ഉടമ്പടിയിലൂടെയാണ് രാജാവ് സൃഷ്ടിക്കപ്പെടുന്നതെന്ന് അദ്ദേഹം പ്രസ്താവിച്ചു. രാജാവ് ഇത് ലംഘിക്കുകയാണെങ്കിൽ, അദ്ദേഹത്തിന് ഭരിക്കാനുള്ള അവകാശം നഷ്ടപ്പെടുന്നു." }
    },
    {
      q_id: "sq4",
      question: { en: "What was the significance of the fall of Bastille?", ml: "ബാസ്റ്റിൽ ജയിലിന്റെ പതനത്തിന്റെ പ്രാധാന്യം എന്തായിരുന്നു?" },
      answer: { en: "The Bastille prison was considered the symbol of Bourbon despotism. On July 14, 1789, the angry common people stormed and destroyed it. This incident marked the beginning of the French Revolution.", ml: "ബാസ്റ്റിൽ ജയിൽ ബോർബൺ സ്വേച്ഛാധിപത്യത്തിന്റെ പ്രതീകമായി കണക്കാക്കപ്പെട്ടിരുന്നു. 1789 ജൂലൈ 14-ന് രോഷാകുലരായ സാധാരണക്കാർ അത് ആക്രമിക്കുകയും നശിപ്പിക്കുകയും ചെയ്തു. ഈ സംഭവം ഫ്രഞ്ച് വിപ്ലവത്തിന്റെ തുടക്കമായി അടയാളപ്പെടുത്തുന്നു." }
    },
    {
      q_id: "sq5",
      question: { en: "Write a short note on the 'Reign of Terror'.", ml: "'ഭീകരവാഴ്ച'യെക്കുറിച്ച് ഒരു ലഘുകുറിപ്പ് തയ്യാറാക്കുക." },
      answer: { en: "The Reign of Terror was a period of extreme violence led by the Jacobins under Robespierre. Thousands of people including nobles and priests were branded as traitors. They were executed using a machine called the Guillotine.", ml: "റോബെസ്പിയറുടെ നേതൃത്വത്തിലുള്ള ജേക്കബിനുകൾ നയിച്ച കടുത്ത അക്രമങ്ങളുടെ കാലഘട്ടമായിരുന്നു ഭീകരവാഴ്ച. പ്രഭുക്കന്മാരും പുരോഹിതന്മാരും ഉൾപ്പെടെ ആയിരക്കണക്കിന് ആളുകളെ രാജ്യദ്രോഹികളായി മുദ്രകുത്തി. ഗില്ലറ്റിൻ എന്ന യന്ത്രം ഉപയോഗിച്ച് അവരെ വധിച്ചു." }
    },
    {
      q_id: "sq6",
      question: { en: "What were the major achievements of women during the French Revolution?", ml: "ഫ്രഞ്ച് വിപ്ലവകാലത്ത് സ്ത്രീകൾ നേടിയ പ്രധാന നേട്ടങ്ങൾ എന്തെല്ലാമായിരുന്നു?" },
      answer: { en: "Women actively participated in the revolution and marched to the Versailles palace. Leaders like Olympia de Gouges fought for equal rights. They gained social benefits like the right to property and the right to divorce.", ml: "സ്ത്രീകൾ വിപ്ലവത്തിൽ സജീവമായി പങ്കെടുക്കുകയും വെഴ്സായ് കൊട്ടാരത്തിലേക്ക് മാർച്ച് ചെയ്യുകയും ചെയ്തു. ഒളിമ്പിയ ഡി ഗൂഷിനെപ്പോലുള്ള നേതാക്കൾ തുല്യാവകാശത്തിനായി പോരാടി. സ്വത്തവകാശം, വിവാഹമോചനം നേടാനുള്ള അവകാശം തുടങ്ങിയ സാമൂഹിക നേട്ടങ്ങൾ അവർ കൈവരിച്ചു." }
    },
    {
      q_id: "sq7",
      question: { en: "Mention the economic factors that led to the French Revolution.", ml: "ഫ്രഞ്ച് വിപ്ലവത്തിലേക്ക് നയിച്ച സാമ്പത്തിക ഘടകങ്ങൾ വ്യക്തമാക്കുക." },
      answer: { en: "A severe agricultural crisis caused food shortages and a sharp increase in bread prices. A trade agreement with Britain destroyed local artisans. The government was in massive debt due to continuous wars and the king's extravagance.", ml: "കടുത്ത കാർഷിക പ്രതിസന്ധി ഭക്ഷ്യക്ഷാമത്തിനും ബ്രെഡിന്റെ വില കുത്തനെ വർദ്ധിക്കുന്നതിനും കാരണമായി. ബ്രിട്ടനുമായുള്ള വ്യാപാരക്കരാർ തദ്ദേശീയരായ കരകൗശലത്തൊഴിലാളികളെ തകർത്തു. തുടർച്ചയായ യുദ്ധങ്ങളും രാജാവിന്റെ ധൂർത്തും കാരണം സർക്കാർ വലിയ കടക്കെണിയിലായി." }
    },
    {
      q_id: "sq8",
      question: { en: "Evaluate the results or consequences of the French Revolution.", ml: "ഫ്രഞ്ച് വിപ്ലവത്തിന്റെ ഫലങ്ങൾ വിലയിരുത്തുക." },
      answer: { en: "Feudalism was completely abolished in France. A unified metric system of weights and measures was introduced. The modern concepts of nationalism and democracy were born. It inspired independence struggles across the world.", ml: "ഫ്രാൻസിൽ ജന്മിത്തം പൂർണ്ണമായും നിർത്തലാക്കപ്പെട്ടു. അളവുകൾക്കും തൂക്കങ്ങൾക്കുമായി ഏകീകൃത മെട്രിക് സമ്പ്രദായം അവതരിപ്പിച്ചു. ദേശീയത, ജനാധിപത്യം എന്നീ ആധുനിക ആശയങ്ങൾ ജനിച്ചു. ഇത് ലോകമെമ്പാടുമുള്ള സ്വാതന്ത്ര്യ സമരങ്ങൾക്ക് പ്രചോദനമായി." }
    },
    {
      q_id: "sq9",
      question: { en: "List the administrative reforms introduced by Napoleon Bonaparte.", ml: "നെപ്പോളിയൻ ബോണപ്പാർട്ട് കൊണ്ടുവന്ന ഭരണപരിഷ്കാരങ്ങൾ പട്ടികപ്പെടുത്തുക." },
      answer: { en: "He introduced the Napoleonic Code which ensured equality before the law. He established the Bank of France to improve the economy. He set up government schools called Lycees and the University of France. He signed a Concordat with the Pope granting religious freedom.", ml: "നിയമത്തിന് മുന്നിൽ സമത്വം ഉറപ്പാക്കുന്ന നെപ്പോളിയനിക് കോഡ് അദ്ദേഹം അവതരിപ്പിച്ചു. സമ്പദ്വ്യവസ്ഥ മെച്ചപ്പെടുത്തുന്നതിനായി അദ്ദേഹം ബാങ്ക് ഓഫ് ഫ്രാൻസ് സ്ഥാപിച്ചു. ലൈസികൾ എന്ന സർക്കാർ സ്കൂളുകളും ഫ്രാൻസ് സർവ്വകലാശാലയും അദ്ദേഹം സ്ഥാപിച്ചു. മതസ്വാതന്ത്ര്യം നൽകിക്കൊണ്ട് അദ്ദേഹം മാർപ്പാപ്പയുമായി ഒരു കോൺകോർഡാറ്റ് ഒപ്പുവെച്ചു." }
    },
    {
      q_id: "sq10",
      question: { en: "What was the purpose of the Congress of Vienna?", ml: "വിയന്ന കോൺഗ്രസിന്റെ ഉദ്ദേശ്യം എന്തായിരുന്നു?" },
      answer: { en: "The Congress of Vienna was held in 1815 after the defeat of Napoleon. It was led by the Austrian Chancellor Metternich. Its main purpose was to redraw the map of Europe and restore the monarchies overthrown by Napoleon.", ml: "നെപ്പോളിയന്റെ പരാജയത്തിന് ശേഷം 1815-ലാണ് വിയന്ന കോൺഗ്രസ് നടന്നത്. ഓസ്ട്രിയൻ ചാൻസലർ മെറ്റേണിക് ആണ് ഇതിന് നേതൃത്വം നൽകിയത്. നെപ്പോളിയൻ അട്ടിമറിച്ച രാജവാഴ്ചകൾ പുനഃസ്ഥാപിക്കാനും യൂറോപ്പിന്റെ ഭൂപടം പുനർനിർമ്മിക്കാനുമാണ് ഇത് പ്രധാനമായും ലക്ഷ്യമിട്ടത്." }
    }
  ]
};
