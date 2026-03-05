import { Lesson } from './curriculum';

export const socialScience1WealthAndWorld: Lesson = {
  id: "so-hist-10-wealth-and-world",
  title: { en: "Chapter 4: Wealth and the World", ml: "അധ്യായം 4: സമ്പത്തും ലോകവും" },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: "lo1", text: { en: "Geographical Explorations and their Causes", ml: "ഭൂമിശാസ്ത്രപരമായ അന്വേഷണങ്ങളും അവയുടെ കാരണങ്ങളും" } },
    { id: "lo2", text: { en: "Important Explorers and their Discoveries", ml: "പ്രധാന നാവികരും അവരുടെ കണ്ടെത്തലുകളും" } },
    { id: "lo3", text: { en: "Colonisation and the Triangular Trade", ml: "കോളനിവൽക്കരണവും ത്രികോണ വ്യാപാരവും" } },
    { id: "lo4", text: { en: "Mercantilism and Colonial Policies", ml: "മെർക്കന്റിലിസവും കൊളോണിയൽ നയങ്ങളും" } },
    { id: "lo5", text: { en: "Merchant Capitalism to Industrial Capitalism", ml: "വാണിജ്യ മുതലാളിത്തത്തിൽ നിന്ന് വ്യാവസായിക മുതലാളിത്തത്തിലേക്ക്" } },
    { id: "lo6", text: { en: "Industrial and Agrarian Revolutions", ml: "വ്യാവസായിക, കാർഷിക വിപ്ലവങ്ങൾ" } },
    { id: "lo7", text: { en: "Imperialism and Extreme Nationalism", ml: "സാമ്രാജ്യത്വവും തീവ്ര ദേശീയതയും" } },
    { id: "lo8", text: { en: "First World War (Causes and Results)", ml: "ഒന്നാം ലോകമഹായുദ്ധം (കാരണങ്ങളും ഫലങ്ങളും)" } },
    { id: "lo9", text: { en: "Totalitarianism (Fascism and Nazism)", ml: "സമഗ്രാധിപത്യം (ഫാസിസവും നാസിസവും)" } },
    { id: "lo10", text: { en: "Second World War and the Post-War World", ml: "രണ്ടാം ലോകമഹായുദ്ധവും യുദ്ധാനന്തര ലോകവും" } },
    { id: "lo11", text: { en: "Cold War, Neo-Colonialism, and Finance Capitalism", ml: "ശീതയുദ്ധം, നവകോളനിവൽക്കരണം, ഫിനാൻസ് ക്യാപിറ്റലിസം (ധനമൂലധന വ്യവസ്ഥ)" } }
  ],
  content: {
    intro: { en: "This chapter explores the journey from geographical explorations to the modern world order, covering capitalism, imperialism, world wars, and post-war developments.", ml: "ഭൂമിശാസ്ത്രപരമായ അന്വേഷണങ്ങൾ മുതൽ ആധുനിക ലോകക്രമം വരെയുള്ള യാത്ര, മുതലാളിത്തം, സാമ്രാജ്യത്വം, ലോകമഹായുദ്ധങ്ങൾ, യുദ്ധാനന്തര സംഭവവികാസങ്ങൾ എന്നിവ ഈ അധ്യായം പരിശോധിക്കുന്നു." },
    core: { en: "It discusses how wealth accumulation shaped global history through trade, colonization, revolutions, and conflicts.", ml: "വ്യാപാരം, കോളനിവൽക്കരണം, വിപ്ലവങ്ങൾ, സംഘർഷങ്ങൾ എന്നിവയിലൂടെ സമ്പത്ത് സ്വരൂപിക്കൽ ആഗോള ചരിത്രത്തെ എങ്ങനെ രൂപപ്പെടുത്തിയെന്ന് ഇത് ചർച്ച ചെയ്യുന്നു." },
    blocks: [
      { type: 'h2', en: 'Background of Geographical Explorations', ml: 'ഭൂമിശാസ്ത്രപരമായ അന്വേഷണങ്ങളുടെ പശ്ചാത്തലം' },
      { type: 'p', en: 'Two significant events in the 15th century launched geographical expeditions.', ml: '15-ാം നൂറ്റാണ്ടിലെ രണ്ട് പ്രധാന സംഭവങ്ങൾ ഭൂമിശാസ്ത്രപരമായ അന്വേഷണങ്ങൾക്ക് തുടക്കം കുറിച്ചു.' },
      { type: 'p', en: '1. The conquest of Constantinople by the Turks, which obstructed the traditional trade route for spices like pepper to Europe.', ml: '1. തുർക്കികൾ കോൺസ്റ്റാന്റിനോപ്പിൾ കീഴടക്കിയത്, കുരുമുളക് പോലുള്ള സുഗന്ധവ്യഞ്ജനങ്ങൾ യൂറോപ്പിലെത്തിയിരുന്ന പരമ്പരാഗത വ്യാപാര പാത അടച്ചുപൂട്ടി.' },
      { type: 'p', en: '2. The arrival of the Portuguese at the Guinea Coast in Africa.', ml: '2. ആഫ്രിക്കയിലെ ഗിനിയ തീരത്ത് പോർച്ചുഗീസുകാർ എത്തിയത്.' },

      { type: 'h2', en: 'Factors that Helped European Expeditions', ml: 'യൂറോപ്യൻ പര്യവേഷണങ്ങളെ സഹായിച്ച ഘടകങ്ങൾ' },
      { type: 'p', en: 'European nations like Portugal, Spain, Netherlands, England, and France had geographic advantages being on the Atlantic coast.', ml: 'അറ്റ്ലാന്റിക് തീരത്തായതിനാൽ പോർച്ചുഗൽ, സ്പെയിൻ, നെതർലാൻഡ്സ്, ഇംഗ്ലണ്ട്, ഫ്രാൻസ് തുടങ്ങിയ യൂറോപ്യൻ രാജ്യങ്ങൾക്ക് ഭൂമിശാസ്ത്രപരമായ മുൻതൂക്കം ഉണ്ടായിരുന്നു.' },
      { type: 'p', en: 'Other factors that enabled successful expeditions include:', ml: 'വിജയകരമായ പര്യവേഷണങ്ങൾക്ക് സഹായിച്ച മറ്റ് ഘടകങ്ങൾ ഇവയാണ്:' },
      { type: 'p', en: '- Building of advanced ships capable of crossing oceans.', ml: '- സമുദ്രങ്ങൾ താണ്ടാൻ കെൽപ്പുള്ള നൂതന കപ്പലുകളുടെ നിർമ്മാണം.' },
      { type: 'p', en: '- Invention of the compass and other navigational tools.', ml: '- വടക്കുനോക്കിയന്ത്രത്തിന്റെയും (കോമ്പസ്) മറ്റ് നാവിക ഉപകരണങ്ങളുടെയും കണ്ടുപിടുത്തം.' },
      { type: 'p', en: '- Patronage of the rulers and strong military power.', ml: '- ഭരണാധികാരികളുടെ പ്രോത്സാഹനവും ശക്തമായ സൈനിക ശക്തിയും.' },
      { type: 'p', en: '- Advances in cartography (map-making) and astronomy.', ml: '- ഭൂപട നിർമ്മാണത്തിലും (കാർട്ടോഗ്രഫി) ജ്യോതിശാസ്ത്രത്തിലുമുണ്ടായ പുരോഗതി.' },

      { type: 'h2', en: 'Important Explorers and Discoveries', ml: 'പ്രധാന നാവികരും കണ്ടെത്തലുകളും' },
      { type: 'table', tableData: {
          headers: [{en: 'Explorer', ml: 'നാവികൻ'}, {en: 'Discovery / Expedition', ml: 'കണ്ടെത്തൽ / പര്യവേഷണം'}],
          rows: [
            [{en: 'Bartolomeu Dias', ml: 'ബർത്തലോമിയോ ഡയസ്'}, {en: 'Reached the Cape of Good Hope (southern tip of Africa) in 1488.', ml: '1488-ൽ കേപ്പ് ഓഫ് ഗുഡ് ഹോപ്പിൽ (ആഫ്രിക്കയുടെ തെക്കേ അറ്റം) എത്തി.'}],
            [{en: 'Christopher Columbus', ml: 'ക്രിസ്റ്റഫർ കൊളംബസ്'}, {en: 'Reached the Bahamas (North America) in 1492, sponsored by Spain.', ml: 'സ്പെയിനിന്റെ സഹായത്തോടെ 1492-ൽ ബഹാമാസ് ദ്വീപുകളിൽ (വടക്കേ അമേരിക്ക) എത്തി.'}],
            [{en: 'Vasco da Gama', ml: 'വാസ്കോ ഡ ഗാമ'}, {en: 'Reached Kappad in Calicut (India) in 1498 via the Cape of Good Hope.', ml: 'കേപ്പ് ഓഫ് ഗുഡ് ഹോപ്പ് വഴി 1498-ൽ കോഴിക്കോട്ടെ കാപ്പാട് (ഇന്ത്യ) എത്തി.'}],
            [{en: 'Amerigo Vespucci', ml: 'അമേരിഗോ വെസ്പുച്ചി'}, {en: 'Realised Columbus discovered a "New World", which was later named \'America\' after him.', ml: 'കൊളംബസ് കണ്ടെത്തിയത് ഒരു "പുതിയ ലോകം" ആണെന്ന് തിരിച്ചറിഞ്ഞു, പിന്നീട് ഇതിന് അദ്ദേഹത്തിന്റെ പേരായ \'അമേരിക്ക\' എന്ന് നൽകി.'}],
            [{en: 'Pedro Álvares Cabral', ml: 'പെഡ്രോ അൽവാറസ് കബ്രാൾ'}, {en: 'Discovered Brazil.', ml: 'ബ്രസീൽ കണ്ടെത്തി.'}],
            [{en: 'Ferdinand Magellan', ml: 'ഫെർഡിനാൻഡ് മഗല്ലൻ'}, {en: 'First to circumnavigate the globe through the oceans.', ml: 'സമുദ്രങ്ങളിലൂടെ ആദ്യമായി ലോകം ചുറ്റിവന്നു.'}],
            [{en: 'John Cabot', ml: 'ജോൺ കാബട്ട്'}, {en: 'Reached Newfoundland.', ml: 'ന്യൂഫൗണ്ട്ലാൻഡിൽ എത്തി.'}]
          ]
      }},
      { type: 'p', en: 'Note: Prince Henry of Portugal established a navigation school in Sagres to train sailors.', ml: 'കുറിപ്പ്: നാവികർക്ക് പരിശീലനം നൽകുന്നതിനായി പോർച്ചുഗലിലെ രാജകുമാരനായ ഹെൻറി സാഗ്രെസിൽ ഒരു നാവിക വിദ്യാലയം സ്ഥാപിച്ചു.' },

      { type: 'h2', en: 'Consequences of Geographical Explorations', ml: 'ഭൂമിശാസ്ത്രപരമായ അന്വേഷണങ്ങളുടെ ഫലങ്ങൾ' },
      { type: 'h3', en: 'Triangular Trade', ml: 'ത്രികോണ വ്യാപാരം' },
      { type: 'p', en: 'A trade system linking Europe, Africa, and the Americas developed. Products from Europe were taken to Africa to buy slaves. These slaves were transported to the Americas, and goods like sugar and cotton from America were shipped to Europe.', ml: 'യൂറോപ്പ്, ആഫ്രിക്ക, അമേരിക്ക എന്നീ വൻകരകളെ ബന്ധിപ്പിക്കുന്ന ഒരു വ്യാപാര സമ്പ്രദായം വികസിച്ചു. യൂറോപ്പിൽ നിന്നുള്ള ഉൽപ്പന്നങ്ങൾ ആഫ്രിക്കയിൽ കൊണ്ടുപോയി അടിമകളെ വാങ്ങി. ഈ അടിമകളെ അമേരിക്കകളിലേക്ക് കൊണ്ടുപോകുകയും, അവിടെ നിന്ന് പഞ്ചസാര, പരുത്തി തുടങ്ങിയവ യൂറോപ്പിലേക്ക് കയറ്റുമതി ചെയ്യുകയും ചെയ്തു.' },
      { type: 'h3', en: 'Other Consequences', ml: 'മറ്റ് ഫലങ്ങൾ' },
      { type: 'p', en: '- Decline of Mediterranean trade and the rise of Atlantic trade.', ml: '- മെഡിറ്ററേനിയൻ വ്യാപാരത്തിന്റെ തകർച്ചയും അറ്റ്ലാന്റിക് വ്യാപാരത്തിന്റെ വളർച്ചയും.' },
      { type: 'p', en: '- European colonisation of the Americas, Africa, and Asia.', ml: '- അമേരിക്ക, ആഫ്രിക്ക, ഏഷ്യ എന്നിവിടങ്ങളിൽ യൂറോപ്യൻ കോളനിവൽക്കരണം.' },
      { type: 'p', en: '- Influx of gold and silver into Europe, accelerating monetisation.', ml: '- യൂറോപ്പിലേക്ക് സ്വർണ്ണവും വെള്ളിയും ഒഴുകിയെത്തിയത് നാണയവിനിമയം വേഗത്തിലാക്കി.' },
      { type: 'p', en: '- Destruction of indigenous cultures and spread of the slave trade.', ml: '- തദ്ദേശീയ സംസ്കാരങ്ങളുടെ നാശവും അടിമക്കച്ചവടത്തിന്റെ വ്യാപനവും.' },

      { type: 'h2', en: 'Mercantilism and Colonial Policies', ml: 'മെർക്കന്റിലിസവും കൊളോണിയൽ നയങ്ങളും' },
      { type: 'p', en: 'Mercantilism was an economic policy where nations aimed to accumulate wealth, primarily gold and silver (Bullion), through trade.', ml: 'വ്യാപാരത്തിലൂടെ പ്രധാനമായും സ്വർണ്ണവും വെള്ളിയും (ബുള്ളിയൻ) സമ്പത്തായി ശേഖരിക്കാൻ ലക്ഷ്യമിട്ടിരുന്ന ഒരു സാമ്പത്തിക നയമായിരുന്നു മെർക്കന്റിലിസം.' },
      { type: 'p', en: 'The core idea was to increase exports and reduce imports to preserve the nation\'s wealth.', ml: 'രാജ്യത്തിന്റെ സമ്പത്ത് നിലനിർത്തുന്നതിനായി കയറ്റുമതി വർദ്ധിപ്പിക്കുകയും ഇറക്കുമതി കുറയ്ക്കുകയും ചെയ്യുക എന്നതായിരുന്നു ഇതിന്റെ കാതൽ.' },
      { type: 'p', en: 'Spain and Portugal directly governed their colonies under the king to extract wealth.', ml: 'സമ്പത്ത് ചൂഷണം ചെയ്യുന്നതിനായി സ്പെയിനും പോർച്ചുഗലും തങ്ങളുടെ കോളനികളെ രാജാവിന്റെ കീഴിൽ നേരിട്ട് ഭരിച്ചു.' },
      { type: 'p', en: 'England and the Netherlands conducted colonial trade through Joint-Stock Companies and reinvested profits into industries.', ml: 'ഇംഗ്ലണ്ടും നെതർലാൻഡ്സും ജോയിന്റ് സ്റ്റോക്ക് കമ്പനികളിലൂടെ കൊളോണിയൽ വ്യാപാരം നടത്തുകയും ലാഭം വ്യവസായങ്ങളിൽ നിക്ഷേപിക്കുകയും ചെയ്തു.' },

      { type: 'h2', en: 'Merchant Capitalism and Industrial Capitalism', ml: 'വാണിജ്യ മുതലാളിത്തവും വ്യാവസായിക മുതലാളിത്തവും' },
      { type: 'p', en: 'Merchant Capitalism: Merchants supplied raw materials to rural artisans, paid them for their labour, and sold the finished products for profit.', ml: 'വാണിജ്യ മുതലാളിത്തം: വ്യാപാരികൾ ഗ്രാമീണരായ കരകൗശലത്തൊഴിലാളികൾക്ക് അസംസ്കൃത വസ്തുക്കൾ നൽകുകയും, അവരുടെ അധ്വാനത്തിന് പ്രതിഫലം നൽകി ഉൽപ്പന്നങ്ങൾ വിറ്റ് ലാഭമെടുക്കുകയും ചെയ്തു.' },
      { type: 'p', en: 'Industrial Capitalism: Wealth from trade was invested in starting factories. Factory owners made huge profits through mass production using machines.', ml: 'വ്യാവസായിക മുതലാളിത്തം: വ്യാപാരത്തിൽ നിന്നുള്ള സമ്പത്ത് ഫാക്ടറികൾ തുടങ്ങാൻ നിക്ഷേപിച്ചു. യന്ത്രങ്ങൾ ഉപയോഗിച്ചുള്ള വൻതോതിലുള്ള ഉൽപ്പാദനത്തിലൂടെ ഫാക്ടറി ഉടമകൾ വൻ ലാഭമുണ്ടാക്കി.' },

      { type: 'h2', en: 'Industrial Revolution and Agrarian Revolution', ml: 'വ്യാവസായിക വിപ്ലവവും കാർഷിക വിപ്ലവവും' },
      { type: 'p', en: 'The Industrial Revolution began in England in the 18th century, initially in the textile industry. It marked a shift from cottage-based production to mass production in factories using machinery and steam energy.', ml: '18-ാം നൂറ്റാണ്ടിൽ ഇംഗ്ലണ്ടിലാണ് വ്യാവസായിക വിപ്ലവം ആരംഭിച്ചത്, തുടക്കത്തിൽ തുണി വ്യവസായത്തിലായിരുന്നു ഇത്. കുടിൽ വ്യവസായത്തിൽ നിന്ന് യന്ത്രങ്ങളും ആവിശക്തിയും ഉപയോഗിച്ച് ഫാക്ടറികളിലെ വൻതോതിലുള്ള ഉൽപ്പാദനത്തിലേക്കുള്ള മാറ്റത്തെ ഇത് അടയാളപ്പെടുത്തി.' },
      { type: 'p', en: 'The Agrarian Revolution in England (17th century) involved the Enclosure Movement (fencing small farms into large ones), crop rotation, and new implements, which increased food production.', ml: 'ഇംഗ്ലണ്ടിലെ കാർഷിക വിപ്ലവത്തിൽ (17-ാം നൂറ്റാണ്ട്) എൻക്ലോഷർ മൂവ്മെന്റ് (ചെറിയ കൃഷിയിടങ്ങൾ വേലികെട്ടി തിരിച്ച് വലിയവയാക്കൽ), വിളപരിക്രമം, പുതിയ ഉപകരണങ്ങൾ എന്നിവ ഉൾപ്പെടുന്നു, ഇത് ഭക്ഷ്യോൽപ്പാദനം വർദ്ധിപ്പിച്ചു.' },
      
      { type: 'table', tableData: {
          headers: [{en: 'Merits', ml: 'ഗുണങ്ങൾ'}, {en: 'Demerits', ml: 'ദോഷങ്ങൾ'}],
          rows: [
            [{en: 'Rise of factories and increase in production.', ml: 'ഫാക്ടറികളുടെ ഉദയവും ഉൽപ്പാദന വർദ്ധനവും.'}, {en: 'Exploitation of labourers (low wages, long hours).', ml: 'തൊഴിലാളികളുടെ ചൂഷണം (കുറഞ്ഞ വേതനം, നീണ്ട ജോലിസമയം).'}],
            [{en: 'New employment opportunities.', ml: 'പുതിയ തൊഴിലവസരങ്ങൾ.'}, {en: 'Poverty and spread of epidemics.', ml: 'ദാരിദ്ര്യവും പകർച്ചവ്യാധികളുടെ വ്യാപനവും.'}],
            [{en: 'Rise of cities, urbanisation, and better living conditions.', ml: 'നഗരങ്ങളുടെ വളർച്ച, നഗരവൽക്കരണം, മെച്ചപ്പെട്ട ജീവിതസാഹചര്യങ്ങൾ.'}, {en: 'Rise of slums and polluted cities.', ml: 'ചേരികളുടെ ഉദയവും മലിനീകരിക്കപ്പെട്ട നഗരങ്ങളും.'}]
          ]
      }},
      { type: 'p', en: 'To fight capitalist exploitation, Karl Marx and Friedrich Engels introduced scientific socialism.', ml: 'മുതലാളിത്ത ചൂഷണത്തിനെതിരെ പോരാടാൻ കാൾ മാർക്സും ഫ്രെഡറിക് ഏംഗൽസും ശാസ്ത്രീയ സോഷ്യലിസം അവതരിപ്പിച്ചു.' },

      { type: 'h2', en: 'Imperialism', ml: 'സാമ്രാജ്യത്വം' },
      { type: 'p', en: 'Imperialism is the practice by which a country establishes political and economic control over other regions.', ml: 'ഒരു രാജ്യം മറ്റ് പ്രദേശങ്ങൾക്ക് മേൽ രാഷ്ട്രീയവും സാമ്പത്തികവുമായ നിയന്ത്രണം സ്ഥാപിക്കുന്ന രീതിയാണ് സാമ്രാജ്യത്വം.' },
      { type: 'p', en: 'Industrialised nations needed colonies as sources of raw materials and as markets to sell their manufactured goods.', ml: 'വ്യാവസായിക രാജ്യങ്ങൾക്ക് അസംസ്കൃത വസ്തുക്കളുടെ ഉറവിടമായും തങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ വിൽക്കാനുള്ള കമ്പോളമായും കോളനികളെ ആവശ്യമായിരുന്നു.' },

      { type: 'h2', en: 'First World War (1914-1918)', ml: 'ഒന്നാം ലോകമഹായുദ്ധം (1914-1918)' },
      { type: 'h3', en: 'Causes of the First World War', ml: 'ഒന്നാം ലോകമഹായുദ്ധത്തിന്റെ കാരണങ്ങൾ' },
      { type: 'p', en: 'Imperialist Rivalry: Competition between old powers (England, France) and new powers (Germany, Italy) for colonies. Example: Germany\'s Berlin-Baghdad railway plan.', ml: 'സാമ്രാജ്യത്വ മത്സരങ്ങൾ: കോളനികൾക്ക് വേണ്ടി പഴയ ശക്തികളും (ഇംഗ്ലണ്ട്, ഫ്രാൻസ്) പുതിയ ശക്തികളും (ജർമ്മനി, ഇറ്റലി) തമ്മിലുള്ള മത്സരം. ഉദാഹരണം: ജർമ്മനിയുടെ ബെർലിൻ-ബാഗ്ദാദ് റെയിൽവേ പദ്ധതി.' },
      { type: 'p', en: 'Extreme Nationalism: Aggressive love for one\'s country linked to racism (e.g., Pan-Slav Movement led by Serbia, Pan-German Movement).', ml: 'തീവ്ര ദേശീയത: വംശീയതയുമായി ബന്ധപ്പെട്ട അമിതമായ രാജ്യസ്നേഹം (ഉദാ: സെർബിയയുടെ നേതൃത്വത്തിലുള്ള പാൻ-സ്ലാവ് പ്രസ്ഥാനം, പാൻ-ജർമ്മൻ പ്രസ്ഥാനം).' },
      { type: 'p', en: 'Military Alliances: Division of Europe into two armed camps.', ml: 'സൈനിക സഖ്യങ്ങൾ: യൂറോപ്പ് രണ്ട് സായുധ ചേരികളായി വിഭജിക്കപ്പെട്ടത്.' },
      { type: 'p', en: '- Triple Alliance: Germany, Italy, Austria-Hungary', ml: '- ട്രിപ്പിൾ അലയൻസ്: ജർമ്മനി, ഇറ്റലി, ഓസ്ട്രിയ-ഹംഗറി' },
      { type: 'p', en: '- Triple Entente: England, France, Russia', ml: '- ട്രിപ്പിൾ എന്റന്റ്: ഇംഗ്ലണ്ട്, ഫ്രാൻസ്, റഷ്യ' },
      { type: 'p', en: 'Immediate Cause: Assassination of Archduke Franz Ferdinand (Crown Prince of Austria) in Sarajevo on June 28, 1914. Austria declared war on Serbia.', ml: 'പെട്ടെന്നുണ്ടായ കാരണം: 1914 ജൂൺ 28-ന് സരയാവോയിൽ വെച്ച് ഓസ്ട്രിയൻ കിരീടാവകാശി ഫ്രാൻസിസ് ഫെർഡിനാൻഡ് വധിക്കപ്പെട്ടു. ഓസ്ട്രിയ സെർബിയക്ക് മേൽ യുദ്ധം പ്രഖ്യാപിച്ചു.' },
      
      { type: 'h3', en: 'Results of the First World War', ml: 'ഒന്നാം ലോകമഹായുദ്ധത്തിന്റെ ഫലങ്ങൾ' },
      { type: 'p', en: '- Millions of lives were lost, and agriculture/industry were devastated.', ml: '- ദശലക്ഷക്കണക്കിന് ജീവൻ നഷ്ടപ്പെടുകയും കൃഷിയും വ്യവസായവും തകരുകയും ചെയ്തു.' },
      { type: 'p', en: '- Formation of the League of Nations for world peace.', ml: '- ലോകസമാധാനത്തിനായി സർവ്വരാജ്യസഖ്യം (ലീഗ് ഓഫ് നേഷൻസ്) രൂപീകരിച്ചു.' },
      { type: 'p', en: '- Rise of totalitarian regimes in Italy, Germany, and Spain.', ml: '- ഇറ്റലി, ജർമ്മനി, സ്പെയിൻ എന്നിവിടങ്ങളിൽ സമഗ്രാധിപത്യ ഭരണകൂടങ്ങളുടെ ഉദയം.' },

      { type: 'h2', en: 'Totalitarianism (Fascism and Nazism)', ml: 'സമഗ്രാധിപത്യം (ഫാസിസവും നാസിസവും)' },
      { type: 'p', en: 'Totalitarianism is a system where the state has complete control over all aspects of life, ignoring individual rights. Key features include rejection of democracy, extreme nationalism, dictatorship, and glorification of war.', ml: 'വ്യക്തിസ്വാതന്ത്ര്യം അവഗണിച്ച് ജീവിതത്തിന്റെ സമസ്ത മേഖലകളിലും ഭരണകൂടത്തിന് പൂർണ്ണ നിയന്ത്രണമുള്ള ഒരു വ്യവസ്ഥയാണ് സമഗ്രാധിപത്യം. ജനാധിപത്യ നിഷേധം, തീവ്ര ദേശീയത, ഏകാധിപത്യം, യുദ്ധത്തെ മഹത്വവൽക്കരിക്കൽ എന്നിവയാണ് പ്രധാന സവിശേഷതകൾ.' },
      { type: 'table', tableData: {
          headers: [{en: 'Features', ml: 'സവിശേഷതകൾ'}, {en: 'Fascism', ml: 'ഫാസിസം'}, {en: 'Nazism', ml: 'നാസിസം'}],
          rows: [
            [{en: 'Country', ml: 'രാജ്യം'}, {en: 'Italy', ml: 'ഇറ്റലി'}, {en: 'Germany', ml: 'ജർമ്മനി'}],
            [{en: 'Leader', ml: 'നേതാവ്'}, {en: 'Benito Mussolini', ml: 'ബെനിറ്റോ മുസ്സോളിനി'}, {en: 'Adolf Hitler', ml: 'അഡോൾഫ് ഹിറ്റ്ലർ'}],
            [{en: 'Militia/Police', ml: 'സൈന്യം/പോലീസ്'}, {en: 'Blackshirts', ml: 'കറുപ്പുകുപ്പായക്കാർ'}, {en: 'Brownshirts, Gestapo', ml: 'തവിട്ടുകുപ്പായക്കാർ, ഗസ്റ്റപ്പോ'}],
            [{en: 'Key Actions', ml: 'പ്രധാന പ്രവർത്തനങ്ങൾ'}, {en: 'Organized \'March on Rome\', banned opposition parties.', ml: '\'മാർച്ച് ഓൺ റോം\' സംഘടിപ്പിച്ചു, പ്രതിപക്ഷ പാർട്ടികളെ നിരോധിച്ചു.'}, {en: 'Massacred Jews, Socialists, and Democrats; caused WWII.', ml: 'ജൂതന്മാരെയും സോഷ്യലിസ്റ്റുകളെയും ഡെമോക്രാറ്റുകളെയും കൊന്നൊടുക്കി; രണ്ടാം ലോകമഹായുദ്ധത്തിന് കാരണമായി.'}]
          ]
      }},

      { type: 'h2', en: 'Second World War (1939-1945)', ml: 'രണ്ടാം ലോകമഹായുദ്ധം (1939-1945)' },
      { type: 'h3', en: 'Causes of the Second World War', ml: 'രണ്ടാം ലോകമഹായുദ്ധത്തിന്റെ കാരണങ്ങൾ' },
      { type: 'p', en: 'Treaty of Versailles: A humiliating treaty forced on Germany after WWI.', ml: 'വെഴ്സായ് ഉടമ്പടി: ഒന്നാം ലോകമഹായുദ്ധത്തിന് ശേഷം ജർമ്മനിയുടെ മേൽ അടിച്ചേൽപ്പിച്ച അപമാനകരമായ ഉടമ്പടി.' },
      { type: 'p', en: 'Failure of League of Nations: It failed to stop fascist aggressions.', ml: 'സർവ്വരാജ്യസഖ്യത്തിന്റെ പരാജയം: ഫാസിസ്റ്റ് ആക്രമണങ്ങൾ തടയുന്നതിൽ ഇത് പരാജയപ്പെട്ടു.' },
      { type: 'p', en: 'Military Alliances: Axis Powers (Germany, Italy, Japan) vs Allied Powers (England, France, China, later USA and USSR).', ml: 'സൈനിക സഖ്യങ്ങൾ: അച്ചുതണ്ട് ശക്തികൾ (ജർമ്മനി, ഇറ്റലി, ജപ്പാൻ) വി.എസ് സഖ്യകക്ഷികൾ (ഇംഗ്ലണ്ട്, ഫ്രാൻസ്, ചൈന, പിന്നീട് അമേരിക്കയും സോവിയറ്റ് യൂണിയനും).' },
      { type: 'p', en: 'Policy of Appeasement: The Munich Agreement (1938) where Britain and France gave Sudetenland to Hitler to appease him.', ml: 'പ്രീണന നയം: ഹിറ്റ്ലറെ പ്രീണിപ്പിക്കുന്നതിനായി ബ്രിട്ടനും ഫ്രാൻസും സുഡെറ്റൻലാൻഡ് ജർമ്മനിക്ക് വിട്ടുകൊടുത്ത മ്യൂണിക് ഉടമ്പടി (1938).' },
      { type: 'p', en: 'Immediate Cause: Germany invaded Poland on September 1, 1939.', ml: 'പെട്ടെന്നുണ്ടായ കാരണം: 1939 സെപ്റ്റംബർ 1-ന് ജർമ്മനി പോളണ്ടിനെ ആക്രമിച്ചു.' },

      { type: 'h3', en: 'Results of the Second World War', ml: 'രണ്ടാം ലോകമഹായുദ്ധത്തിന്റെ ഫലങ്ങൾ' },
      { type: 'p', en: '- Defeat of fascist forces and end of Europe\'s global hegemony.', ml: '- ഫാസിസ്റ്റ് ശക്തികളുടെ പരാജയവും യൂറോപ്പിന്റെ ആഗോള മേധാവിത്വത്തിന്റെ അന്ത്യവും.' },
      { type: 'p', en: '- Formation of the United Nations Organization (UNO) on October 24, 1945.', ml: '- 1945 ഒക്ടോബർ 24-ന് ഐക്യരാഷ്ട്രസഭയുടെ (UNO) രൂപീകരണം.' },
      { type: 'p', en: '- Independence of colonies in Asia and Africa.', ml: '- ഏഷ്യയിലെയും ആഫ്രിക്കയിലെയും കോളനികൾക്ക് സ്വാതന്ത്ര്യം ലഭിച്ചു.' },
      { type: 'p', en: '- USA and USSR emerged as global superpowers, leading to the Cold War.', ml: '- അമേരിക്കയും സോവിയറ്റ് യൂണിയനും ആഗോള വൻശക്തികളായി ഉയർന്നുവന്നു, ഇത് ശീതയുദ്ധത്തിലേക്ക് നയിച്ചു.' },

      { type: 'h2', en: 'Post-War World', ml: 'യുദ്ധാനന്തര ലോകം' },
      { type: 'p', en: 'Cold War: An ideological confrontation between the capitalist bloc led by the USA and the socialist bloc led by the USSR, without actual armed conflict. It ended in 1991.', ml: 'ശീതയുദ്ധം: നേരിട്ടുള്ള സായുധ പോരാട്ടമില്ലാതെ, അമേരിക്കയുടെ നേതൃത്വത്തിലുള്ള മുതലാളിത്ത ചേരിയും സോവിയറ്റ് യൂണിയന്റെ നേതൃത്വത്തിലുള്ള സോഷ്യലിസ്റ്റ് ചേരിയും തമ്മിലുണ്ടായിരുന്ന പ്രത്യയശാസ്ത്രപരമായ ഏറ്റുമുട്ടൽ. 1991-ൽ ഇത് അവസാനിച്ചു.' },
      { type: 'p', en: 'Neo-Colonialism: A new form of exploitation where powerful capitalist countries controlled newly independent nations financially, without direct political rule.', ml: 'നവകോളനിവൽക്കരണം: നേരിട്ടുള്ള രാഷ്ട്രീയ ഭരണമില്ലാതെ, പുതുതായി സ്വാതന്ത്ര്യം നേടിയ രാജ്യങ്ങളെ സാമ്പത്തികമായി ശക്തരായ മുതലാളിത്ത രാജ്യങ്ങൾ നിയന്ത്രിക്കുന്ന പുതിയ ചൂഷണ രീതി.' },
      { type: 'p', en: 'Finance Capitalism: An economic system where financial institutions (banks, stock markets) hold power. Wealth is accumulated through investments rather than direct industrial production.', ml: 'ഫിനാൻസ് ക്യാപിറ്റലിസം (ധനമൂലധന വ്യവസ്ഥ): സാമ്പത്തിക സ്ഥാപനങ്ങൾക്ക് (ബാങ്കുകൾ, ഓഹരി വിപണികൾ) അധികാരമുള്ള ഒരു സാമ്പത്തിക വ്യവസ്ഥ. നേരിട്ടുള്ള വ്യാവസായിക ഉൽപ്പാദനത്തേക്കാൾ നിക്ഷേപങ്ങളിലൂടെയാണ് ഇവിടെ സമ്പത്ത് സ്വരൂപിക്കുന്നത്.' },

      { type: 'h2', en: 'Important Timelines', ml: 'പ്രധാന കാലഗണനകൾ' },
      { type: 'p', en: '1415: Portuguese capture Ceuta in Africa.', ml: '1415: പോർച്ചുഗീസുകാർ ആഫ്രിക്കയിലെ സിയൂട്ട പിടിച്ചെടുത്തു.' },
      { type: 'p', en: '1488: Bartolomeu Dias reaches the Cape of Good Hope.', ml: '1488: ബർത്തലോമിയോ ഡയസ് കേപ്പ് ഓഫ് ഗുഡ് ഹോപ്പിൽ എത്തി.' },
      { type: 'p', en: '1492: Christopher Columbus reaches the Bahamas.', ml: '1492: ക്രിസ്റ്റഫർ കൊളംബസ് ബഹാമാസിൽ എത്തി.' },
      { type: 'p', en: '1498: Vasco da Gama reaches Kappad (Calicut).', ml: '1498: വാസ്കോ ഡ ഗാമ കാപ്പാട് (കോഴിക്കോട്) എത്തി.' },
      { type: 'p', en: '1914: Assassination of Archduke Franz Ferdinand / First World War begins.', ml: '1914: ആർച്ച്ഡ്യൂക്ക് ഫ്രാൻസിസ് ഫെർഡിനാൻഡിന്റെ വധം / ഒന്നാം ലോകമഹായുദ്ധത്തിന്റെ തുടക്കം.' },
      { type: 'p', en: '1920 Jan 10: Formation of the League of Nations.', ml: '1920 ജനുവരി 10: സർവ്വരാജ്യസഖ്യത്തിന്റെ രൂപീകരണം.' },
      { type: 'p', en: '1938: Munich Agreement.', ml: '1938: മ്യൂണിക് ഉടമ്പടി.' },
      { type: 'p', en: '1939 Sept 1: Germany invades Poland / Second World War begins.', ml: '1939 സെപ്റ്റംബർ 1: ജർമ്മനി പോളണ്ടിനെ ആക്രമിച്ചു / രണ്ടാം ലോകമഹായുദ്ധത്തിന്റെ തുടക്കം.' },
      { type: 'p', en: '1945 Oct 24: Formation of the UNO.', ml: '1945 ഒക്ടോബർ 24: ഐക്യരാഷ്ട്രസഭയുടെ രൂപീകരണം.' },
      { type: 'p', en: '1991: End of the Cold War (Disintegration of Soviet Union).', ml: '1991: ശീതയുദ്ധത്തിന്റെ അന്ത്യം (സോവിയറ്റ് യൂണിയന്റെ തകർച്ച).' },

      { type: 'h2', en: 'Summary Points', ml: 'സംഗ്രഹ പോയിന്റുകൾ' },
      { type: 'p', en: 'The 15th-century geographical explorations led to European colonization, changing the global economy.', ml: '15-ാം നൂറ്റാണ്ടിലെ ഭൂമിശാസ്ത്രപരമായ അന്വേഷണങ്ങൾ യൂറോപ്യൻ കോളനിവൽക്കരണത്തിലേക്ക് നയിക്കുകയും ആഗോള സമ്പദ്വ്യവസ്ഥയെ മാറ്റിമറിക്കുകയും ചെയ്തു.' },
      { type: 'p', en: 'The Industrial Revolution brought mass production but also caused exploitation, leading to socialist ideologies.', ml: 'വ്യാവസായിക വിപ്ലവം വൻതോതിലുള്ള ഉൽപ്പാദനം കൊണ്ടുവന്നെങ്കിലും ചൂഷണത്തിനും കാരണമായി, ഇത് സോഷ്യലിസ്റ്റ് ആശയങ്ങളിലേക്ക് നയിച്ചു.' },
      { type: 'p', en: 'Imperialist competition for colonies and raw materials caused the two World Wars.', ml: 'കോളനികൾക്കും അസംസ്കൃത വസ്തുക്കൾക്കും വേണ്ടിയുള്ള സാമ്രാജ്യത്വ മത്സരം രണ്ട് ലോകമഹായുദ്ധങ്ങൾക്ക് കാരണമായി.' },
      { type: 'p', en: 'After WWII, the world witnessed the Cold War, Neo-colonialism, and the rise of Finance Capitalism.', ml: 'രണ്ടാം ലോകമഹായുദ്ധത്തിനുശേഷം, ശീതയുദ്ധം, നവകോളനിവൽക്കരണം, ഫിനാൻസ് ക്യാപിറ്റലിസത്തിന്റെ വളർച്ച എന്നിവയ്ക്ക് ലോകം സാക്ഷ്യം വഹിച്ചു.' }
    ]
  },
  glossary: [],
  quiz: [
    {
      q_id: "q1",
      question: { en: "Which event in the 15th century obstructed the traditional trade route to Europe?", ml: "15-ാം നൂറ്റാണ്ടിലെ ഏത് സംഭവമാണ് യൂറോപ്പിലേക്കുള്ള പരമ്പരാഗത വ്യാപാര പാത തടസ്സപ്പെടുത്തിയത്?" },
      options: [
        { id: "opt1", text: { en: "Discovery of America", ml: "അമേരിക്കയുടെ കണ്ടെത്തൽ" } },
        { id: "opt2", text: { en: "Conquest of Constantinople by Turks", ml: "തുർക്കികൾ കോൺസ്റ്റാന്റിനോപ്പിൾ കീഴടക്കിയത്" } },
        { id: "opt3", text: { en: "Industrial Revolution", ml: "വ്യാവസായിക വിപ്ലവം" } },
        { id: "opt4", text: { en: "French Revolution", ml: "ഫ്രഞ്ച് വിപ്ലവം" } }
      ],
      answer: { id: "opt2", text: { en: "Conquest of Constantinople by Turks", ml: "തുർക്കികൾ കോൺസ്റ്റാന്റിനോപ്പിൾ കീഴടക്കിയത്" } }
    },
    {
      q_id: "q2",
      question: { en: "Who reached the Cape of Good Hope in 1488?", ml: "1488-ൽ കേപ്പ് ഓഫ് ഗുഡ് ഹോപ്പിൽ എത്തിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Vasco da Gama", ml: "വാസ്കോ ഡ ഗാമ" } },
        { id: "opt2", text: { en: "Christopher Columbus", ml: "ക്രിസ്റ്റഫർ കൊളംബസ്" } },
        { id: "opt3", text: { en: "Bartolomeu Dias", ml: "ബർത്തലോമിയോ ഡയസ്" } },
        { id: "opt4", text: { en: "Ferdinand Magellan", ml: "ഫെർഡിനാൻഡ് മഗല്ലൻ" } }
      ],
      answer: { id: "opt3", text: { en: "Bartolomeu Dias", ml: "ബർത്തലോമിയോ ഡയസ്" } }
    },
    {
      q_id: "q3",
      question: { en: "Which explorer discovered the 'New World' (America) in 1492?", ml: "1492-ൽ 'പുതിയ ലോകം' (അമേരിക്ക) കണ്ടെത്തിയ നാവികൻ ആര്?" },
      options: [
        { id: "opt1", text: { en: "Amerigo Vespucci", ml: "അമേരിഗോ വെസ്പുച്ചി" } },
        { id: "opt2", text: { en: "Christopher Columbus", ml: "ക്രിസ്റ്റഫർ കൊളംബസ്" } },
        { id: "opt3", text: { en: "John Cabot", ml: "ജോൺ കാബട്ട്" } },
        { id: "opt4", text: { en: "Vasco da Gama", ml: "വാസ്കോ ഡ ഗാമ" } }
      ],
      answer: { id: "opt2", text: { en: "Christopher Columbus", ml: "ക്രിസ്റ്റഫർ കൊളംബസ്" } }
    },
    {
      q_id: "q4",
      question: { en: "Vasco da Gama reached which place in India in 1498?", ml: "1498-ൽ വാസ്കോ ഡ ഗാമ ഇന്ത്യയിലെ എവിടെയാണ് എത്തിയത്?" },
      options: [
        { id: "opt1", text: { en: "Goa", ml: "ഗോവ" } },
        { id: "opt2", text: { en: "Kappad (Calicut)", ml: "കാപ്പാട് (കോഴിക്കോട്)" } },
        { id: "opt3", text: { en: "Cochin", ml: "കൊച്ചി" } },
        { id: "opt4", text: { en: "Mumbai", ml: "മുംബൈ" } }
      ],
      answer: { id: "opt2", text: { en: "Kappad (Calicut)", ml: "കാപ്പാട് (കോഴിക്കോട്)" } }
    },
    {
      q_id: "q5",
      question: { en: "Who was the first to circumnavigate the globe?", ml: "ആദ്യമായി ലോകം ചുറ്റിവന്നത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Ferdinand Magellan", ml: "ഫെർഡിനാൻഡ് മഗല്ലൻ" } },
        { id: "opt2", text: { en: "Pedro Álvares Cabral", ml: "പെഡ്രോ അൽവാറസ് കബ്രാൾ" } },
        { id: "opt3", text: { en: "James Cook", ml: "ജെയിംസ് കുക്ക്" } },
        { id: "opt4", text: { en: "Marco Polo", ml: "മാർക്കോ പോളോ" } }
      ],
      answer: { id: "opt1", text: { en: "Ferdinand Magellan", ml: "ഫെർഡിനാൻഡ് മഗല്ലൻ" } }
    },
    {
      q_id: "q6",
      question: { en: "Where did Prince Henry establish a navigation school?", ml: "രാജകുമാരനായ ഹെൻറി എവിടെയാണ് നാവിക വിദ്യാലയം സ്ഥാപിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Lisbon", ml: "ലിസ്ബൺ" } },
        { id: "opt2", text: { en: "Sagres", ml: "സാഗ്രെസ്" } },
        { id: "opt3", text: { en: "Madrid", ml: "മാഡ്രിഡ്" } },
        { id: "opt4", text: { en: "London", ml: "ലണ്ടൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Sagres", ml: "സാഗ്രെസ്" } }
    },
    {
      q_id: "q7",
      question: { en: "Triangular trade connected which three continents?", ml: "ത്രികോണ വ്യാപാരം ഏത് മൂന്ന് വൻകരകളെയാണ് ബന്ധിപ്പിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Europe, Asia, Africa", ml: "യൂറോപ്പ്, ഏഷ്യ, ആഫ്രിക്ക" } },
        { id: "opt2", text: { en: "Europe, Africa, Americas", ml: "യൂറോപ്പ്, ആഫ്രിക്ക, അമേരിക്ക" } },
        { id: "opt3", text: { en: "Asia, Africa, Australia", ml: "ഏഷ്യ, ആഫ്രിക്ക, ഓസ്ട്രേലിയ" } },
        { id: "opt4", text: { en: "North America, South America, Asia", ml: "വടക്കേ അമേരിക്ക, തെക്കേ അമേരിക്ക, ഏഷ്യ" } }
      ],
      answer: { id: "opt2", text: { en: "Europe, Africa, Americas", ml: "യൂറോപ്പ്, ആഫ്രിക്ക, അമേരിക്ക" } }
    },
    {
      q_id: "q8",
      question: { en: "What was the main commodity bought from Africa in the triangular trade?", ml: "ത്രികോണ വ്യാപാരത്തിൽ ആഫ്രിക്കയിൽ നിന്ന് വാങ്ങിയ പ്രധാന ചരക്ക് എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Spices", ml: "സുഗന്ധവ്യഞ്ജനങ്ങൾ" } },
        { id: "opt2", text: { en: "Slaves", ml: "അടിമകൾ" } },
        { id: "opt3", text: { en: "Silk", ml: "പട്ട്" } },
        { id: "opt4", text: { en: "Tea", ml: "ചായ" } }
      ],
      answer: { id: "opt2", text: { en: "Slaves", ml: "അടിമകൾ" } }
    },
    {
      q_id: "q9",
      question: { en: "Mercantilism aimed to accumulate wealth in the form of?", ml: "മെർക്കന്റിലിസം ഏത് രൂപത്തിൽ സമ്പത്ത് ശേഖരിക്കാനാണ് ലക്ഷ്യമിട്ടത്?" },
      options: [
        { id: "opt1", text: { en: "Land", ml: "ഭൂമി" } },
        { id: "opt2", text: { en: "Gold and Silver", ml: "സ്വർണ്ണവും വെള്ളിയും" } },
        { id: "opt3", text: { en: "Cattle", ml: "കന്നുകാലികൾ" } },
        { id: "opt4", text: { en: "Machinery", ml: "യന്ത്രങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Gold and Silver", ml: "സ്വർണ്ണവും വെള്ളിയും" } }
    },
    {
      q_id: "q10",
      question: { en: "What was the core idea of Mercantilism regarding trade?", ml: "വ്യാപാരത്തെക്കുറിച്ചുള്ള മെർക്കന്റിലിസത്തിന്റെ പ്രധാന ആശയം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Increase imports, reduce exports", ml: "ഇറക്കുമതി വർദ്ധിപ്പിക്കുക, കയറ്റുമതി കുറയ്ക്കുക" } },
        { id: "opt2", text: { en: "Increase exports, reduce imports", ml: "കയറ്റുമതി വർദ്ധിപ്പിക്കുക, ഇറക്കുമതി കുറയ്ക്കുക" } },
        { id: "opt3", text: { en: "Equal imports and exports", ml: "ഇറക്കുമതിയും കയറ്റുമതിയും തുല്യമാക്കുക" } },
        { id: "opt4", text: { en: "Stop all trade", ml: "എല്ലാ വ്യാപാരവും നിർത്തുക" } }
      ],
      answer: { id: "opt2", text: { en: "Increase exports, reduce imports", ml: "കയറ്റുമതി വർദ്ധിപ്പിക്കുക, ഇറക്കുമതി കുറയ്ക്കുക" } }
    },
    {
      q_id: "q11",
      question: { en: "Where did the Industrial Revolution begin?", ml: "വ്യാവസായിക വിപ്ലവം എവിടെയാണ് ആരംഭിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "France", ml: "ഫ്രാൻസ്" } },
        { id: "opt2", text: { en: "England", ml: "ഇംഗ്ലണ്ട്" } },
        { id: "opt3", text: { en: "Germany", ml: "ജർമ്മനി" } },
        { id: "opt4", text: { en: "USA", ml: "യുഎസ്എ" } }
      ],
      answer: { id: "opt2", text: { en: "England", ml: "ഇംഗ്ലണ്ട്" } }
    },
    {
      q_id: "q12",
      question: { en: "Which industry was the first to experience the Industrial Revolution?", ml: "ഏത് വ്യവസായത്തിലാണ് ആദ്യം വ്യാവസായിക വിപ്ലവം നടന്നത്?" },
      options: [
        { id: "opt1", text: { en: "Iron and Steel", ml: "ഇരുമ്പും ഉരുക്കും" } },
        { id: "opt2", text: { en: "Textile", ml: "തുണിത്തരങ്ങൾ" } },
        { id: "opt3", text: { en: "Coal", ml: "കൽക്കരി" } },
        { id: "opt4", text: { en: "Automobile", ml: "വാഹനങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Textile", ml: "തുണിത്തരങ്ങൾ" } }
    },
    {
      q_id: "q13",
      question: { en: "What was the 'Enclosure Movement' related to?", ml: "'എൻക്ലോഷർ മൂവ്മെന്റ്' എന്തുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Industrial Revolution", ml: "വ്യാവസായിക വിപ്ലവം" } },
        { id: "opt2", text: { en: "Agrarian Revolution", ml: "കാർഷിക വിപ്ലവം" } },
        { id: "opt3", text: { en: "French Revolution", ml: "ഫ്രഞ്ച് വിപ്ലവം" } },
        { id: "opt4", text: { en: "American Revolution", ml: "അമേരിക്കൻ വിപ്ലവം" } }
      ],
      answer: { id: "opt2", text: { en: "Agrarian Revolution", ml: "കാർഷിക വിപ്ലവം" } }
    },
    {
      q_id: "q14",
      question: { en: "Who introduced Scientific Socialism?", ml: "ശാസ്ത്രീയ സോഷ്യലിസം അവതരിപ്പിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Adam Smith", ml: "ആദം സ്മിത്ത്" } },
        { id: "opt2", text: { en: "Karl Marx and Friedrich Engels", ml: "കാൾ മാർക്സും ഫ്രെഡറിക് ഏംഗൽസും" } },
        { id: "opt3", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { id: "opt4", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } }
      ],
      answer: { id: "opt2", text: { en: "Karl Marx and Friedrich Engels", ml: "കാൾ മാർക്സും ഫ്രെഡറിക് ഏംഗൽസും" } }
    },
    {
      q_id: "q15",
      question: { en: "What is Imperialism?", ml: "എന്താണ് സാമ്രാജ്യത്വം?" },
      options: [
        { id: "opt1", text: { en: "Rule by people", ml: "ജനങ്ങളുടെ ഭരണം" } },
        { id: "opt2", text: { en: "Political and economic control over other regions", ml: "മറ്റ് പ്രദേശങ്ങൾക്ക് മേൽ രാഷ്ട്രീയവും സാമ്പത്തികവുമായ നിയന്ത്രണം" } },
        { id: "opt3", text: { en: "Religious freedom", ml: "മതസ്വാതന്ത്ര്യം" } },
        { id: "opt4", text: { en: "Free trade", ml: "സ്വതന്ത്ര വ്യാപാരം" } }
      ],
      answer: { id: "opt2", text: { en: "Political and economic control over other regions", ml: "മറ്റ് പ്രദേശങ്ങൾക്ക് മേൽ രാഷ്ട്രീയവും സാമ്പത്തികവുമായ നിയന്ത്രണം" } }
    },
    {
      q_id: "q16",
      question: { en: "Why did industrialized nations need colonies?", ml: "വ്യാവസായിക രാജ്യങ്ങൾക്ക് എന്തിനാണ് കോളനികൾ ആവശ്യമായി വന്നത്?" },
      options: [
        { id: "opt1", text: { en: "For tourism", ml: "വിനോദസഞ്ചാരത്തിന്" } },
        { id: "opt2", text: { en: "For raw materials and markets", ml: "അസംസ്കൃത വസ്തുക്കൾക്കും വിപണികൾക്കും" } },
        { id: "opt3", text: { en: "For cultural exchange", ml: "സാംസ്കാരിക വിനിമയത്തിന്" } },
        { id: "opt4", text: { en: "For education", ml: "വിദ്യാഭ്യാസത്തിന്" } }
      ],
      answer: { id: "opt2", text: { en: "For raw materials and markets", ml: "അസംസ്കൃത വസ്തുക്കൾക്കും വിപണികൾക്കും" } }
    },
    {
      q_id: "q17",
      question: { en: "What was the immediate cause of the First World War?", ml: "ഒന്നാം ലോകമഹായുദ്ധത്തിന്റെ പെട്ടെന്നുണ്ടായ കാരണം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Invasion of Poland", ml: "പോളണ്ടിന്റെ ആക്രമണം" } },
        { id: "opt2", text: { en: "Assassination of Archduke Franz Ferdinand", ml: "ആർച്ച്ഡ്യൂക്ക് ഫ്രാൻസിസ് ഫെർഡിനാൻഡിന്റെ വധം" } },
        { id: "opt3", text: { en: "Bombing of Pearl Harbor", ml: "പേൾ ഹാർബർ ബോംബാക്രമണം" } },
        { id: "opt4", text: { en: "French Revolution", ml: "ഫ്രഞ്ച് വിപ്ലവം" } }
      ],
      answer: { id: "opt2", text: { en: "Assassination of Archduke Franz Ferdinand", ml: "ആർച്ച്ഡ്യൂക്ക് ഫ്രാൻസിസ് ഫെർഡിനാൻഡിന്റെ വധം" } }
    },
    {
      q_id: "q18",
      question: { en: "Which countries formed the Triple Alliance?", ml: "ഏതൊക്കെ രാജ്യങ്ങളാണ് ട്രിപ്പിൾ അലയൻസ് രൂപീകരിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "England, France, Russia", ml: "ഇംഗ്ലണ്ട്, ഫ്രാൻസ്, റഷ്യ" } },
        { id: "opt2", text: { en: "Germany, Italy, Austria-Hungary", ml: "ജർമ്മനി, ഇറ്റലി, ഓസ്ട്രിയ-ഹംഗറി" } },
        { id: "opt3", text: { en: "USA, UK, USSR", ml: "യുഎസ്എ, യുകെ, യുഎസ്എസ്ആർ" } },
        { id: "opt4", text: { en: "Japan, China, India", ml: "ജപ്പാൻ, ചൈന, ഇന്ത്യ" } }
      ],
      answer: { id: "opt2", text: { en: "Germany, Italy, Austria-Hungary", ml: "ജർമ്മനി, ഇറ്റലി, ഓസ്ട്രിയ-ഹംഗറി" } }
    },
    {
      q_id: "q19",
      question: { en: "Who was the leader of Fascism in Italy?", ml: "ഇറ്റലിയിലെ ഫാസിസത്തിന്റെ നേതാവ് ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Adolf Hitler", ml: "അഡോൾഫ് ഹിറ്റ്ലർ" } },
        { id: "opt2", text: { en: "Benito Mussolini", ml: "ബെനിറ്റോ മുസ്സോളിനി" } },
        { id: "opt3", text: { en: "Joseph Stalin", ml: "ജോസഫ് സ്റ്റാലിൻ" } },
        { id: "opt4", text: { en: "Winston Churchill", ml: "വിൻസ്റ്റൺ ചർച്ചിൽ" } }
      ],
      answer: { id: "opt2", text: { en: "Benito Mussolini", ml: "ബെനിറ്റോ മുസ്സോളിനി" } }
    },
    {
      q_id: "q20",
      question: { en: "Who was the leader of Nazism in Germany?", ml: "ജർമ്മനിയിലെ നാസിസത്തിന്റെ നേതാവ് ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Benito Mussolini", ml: "ബെനിറ്റോ മുസ്സോളിനി" } },
        { id: "opt2", text: { en: "Adolf Hitler", ml: "അഡോൾഫ് ഹിറ്റ്ലർ" } },
        { id: "opt3", text: { en: "Kaiser William II", ml: "കൈസർ വില്യം രണ്ടാമൻ" } },
        { id: "opt4", text: { en: "Lenin", ml: "ലെനിൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Adolf Hitler", ml: "അഡോൾഫ് ഹിറ്റ്ലർ" } }
    },
    {
      q_id: "q21",
      question: { en: "What was the name of Mussolini's militia?", ml: "മുസ്സോളിനിയുടെ സൈന്യത്തിന്റെ പേര് എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Brownshirts", ml: "തവിട്ടുകുപ്പായക്കാർ" } },
        { id: "opt2", text: { en: "Blackshirts", ml: "കറുപ്പുകുപ്പായക്കാർ" } },
        { id: "opt3", text: { en: "Red Army", ml: "ചുവപ്പ് സൈന്യം" } },
        { id: "opt4", text: { en: "Blue Guards", ml: "നീല ഗാർഡുകൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Blackshirts", ml: "കറുപ്പുകുപ്പായക്കാർ" } }
    },
    {
      q_id: "q22",
      question: { en: "What was the immediate cause of the Second World War?", ml: "രണ്ടാം ലോകമഹായുദ്ധത്തിന്റെ പെട്ടെന്നുണ്ടായ കാരണം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Germany's invasion of Poland", ml: "ജർമ്മനിയുടെ പോളണ്ട് ആക്രമണം" } },
        { id: "opt2", text: { en: "Attack on Pearl Harbor", ml: "പേൾ ഹാർബർ ആക്രമണം" } },
        { id: "opt3", text: { en: "Bombing of Hiroshima", ml: "ഹിരോഷിമയിലെ ബോംബാക്രമണം" } },
        { id: "opt4", text: { en: "Russian Revolution", ml: "റഷ്യൻ വിപ്ലവം" } }
      ],
      answer: { id: "opt1", text: { en: "Germany's invasion of Poland", ml: "ജർമ്മനിയുടെ പോളണ്ട് ആക്രമണം" } }
    },
    {
      q_id: "q23",
      question: { en: "When did the Second World War begin?", ml: "രണ്ടാം ലോകമഹായുദ്ധം എപ്പോഴാണ് ആരംഭിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "1914", ml: "1914" } },
        { id: "opt2", text: { en: "1939", ml: "1939" } },
        { id: "opt3", text: { en: "1945", ml: "1945" } },
        { id: "opt4", text: { en: "1920", ml: "1920" } }
      ],
      answer: { id: "opt2", text: { en: "1939" } }
    },
    {
      q_id: "q24",
      question: { en: "Which organization was formed after the First World War for peace?", ml: "സമാധാനത്തിനായി ഒന്നാം ലോകമഹായുദ്ധത്തിന് ശേഷം രൂപീകരിച്ച സംഘടന ഏത്?" },
      options: [
        { id: "opt1", text: { en: "United Nations Organization", ml: "ഐക്യരാഷ്ട്രസഭ" } },
        { id: "opt2", text: { en: "League of Nations", ml: "സർവ്വരാജ്യസഖ്യം" } },
        { id: "opt3", text: { en: "NATO", ml: "നാറ്റോ" } },
        { id: "opt4", text: { en: "European Union", ml: "യൂറോപ്യൻ യൂണിയൻ" } }
      ],
      answer: { id: "opt2", text: { en: "League of Nations", ml: "സർവ്വരാജ്യസഖ്യം" } }
    },
    {
      q_id: "q25",
      question: { en: "When was the United Nations Organization (UNO) formed?", ml: "ഐക്യരാഷ്ട്രസഭ (UNO) എപ്പോഴാണ് രൂപീകരിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "1919", ml: "1919" } },
        { id: "opt2", text: { en: "1945", ml: "1945" } },
        { id: "opt3", text: { en: "1939", ml: "1939" } },
        { id: "opt4", text: { en: "1950", ml: "1950" } }
      ],
      answer: { id: "opt2", text: { en: "1945" } }
    },
    {
      q_id: "q26",
      question: { en: "The Cold War was a conflict between which two superpowers?", ml: "ശീതയുദ്ധം ഏത് രണ്ട് വൻശക്തികൾ തമ്മിലുള്ള സംഘർഷമായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "USA and UK", ml: "യുഎസ്എയും യുകെയും" } },
        { id: "opt2", text: { en: "USA and USSR", ml: "യുഎസ്എയും യുഎസ്എസ്ആറും" } },
        { id: "opt3", text: { en: "Germany and France", ml: "ജർമ്മനിയും ഫ്രാൻസും" } },
        { id: "opt4", text: { en: "China and Japan", ml: "ചൈനയും ജപ്പാനും" } }
      ],
      answer: { id: "opt2", text: { en: "USA and USSR", ml: "യുഎസ്എയും യുഎസ്എസ്ആറും" } }
    },
    {
      q_id: "q27",
      question: { en: "What is Neo-Colonialism?", ml: "എന്താണ് നവകോളനിവൽക്കരണം?" },
      options: [
        { id: "opt1", text: { en: "Direct political rule", ml: "നേരിട്ടുള്ള രാഷ്ട്രീയ ഭരണം" } },
        { id: "opt2", text: { en: "Financial control without direct rule", ml: "നേരിട്ടുള്ള ഭരണമില്ലാതെയുള്ള സാമ്പത്തിക നിയന്ത്രണം" } },
        { id: "opt3", text: { en: "Cultural exchange", ml: "സാംസ്കാരിക വിനിമയം" } },
        { id: "opt4", text: { en: "Military occupation", ml: "സൈനിക അധിനിവേശം" } }
      ],
      answer: { id: "opt2", text: { en: "Financial control without direct rule", ml: "നേരിട്ടുള്ള ഭരണമില്ലാതെയുള്ള സാമ്പത്തിക നിയന്ത്രണം" } }
    },
    {
      q_id: "q28",
      question: { en: "Finance Capitalism relies on?", ml: "ഫിനാൻസ് ക്യാപിറ്റലിസം എന്തിനെ ആശ്രയിച്ചിരിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Agriculture", ml: "കൃഷി" } },
        { id: "opt2", text: { en: "Financial institutions and investments", ml: "സാമ്പത്തിക സ്ഥാപനങ്ങളും നിക്ഷേപങ്ങളും" } },
        { id: "opt3", text: { en: "Handicrafts", ml: "കരകൗശലവസ്തുക്കൾ" } },
        { id: "opt4", text: { en: "Barter system", ml: "ബാർട്ടർ സമ്പ്രദായം" } }
      ],
      answer: { id: "opt2", text: { en: "Financial institutions and investments", ml: "സാമ്പത്തിക സ്ഥാപനങ്ങളും നിക്ഷേപങ്ങളും" } }
    },
    {
      q_id: "q29",
      question: { en: "Who discovered Brazil?", ml: "ബ്രസീൽ കണ്ടെത്തിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Christopher Columbus", ml: "ക്രിസ്റ്റഫർ കൊളംബസ്" } },
        { id: "opt2", text: { en: "Pedro Álvares Cabral", ml: "പെഡ്രോ അൽവാറസ് കബ്രാൾ" } },
        { id: "opt3", text: { en: "Vasco da Gama", ml: "വാസ്കോ ഡ ഗാമ" } },
        { id: "opt4", text: { en: "John Cabot", ml: "ജോൺ കാബട്ട്" } }
      ],
      answer: { id: "opt2", text: { en: "Pedro Álvares Cabral", ml: "പെഡ്രോ അൽവാറസ് കബ്രാൾ" } }
    },
    {
      q_id: "q30",
      question: { en: "Who reached Newfoundland?", ml: "ന്യൂഫൗണ്ട്ലാൻഡിൽ എത്തിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "John Cabot", ml: "ജോൺ കാബട്ട്" } },
        { id: "opt2", text: { en: "Amerigo Vespucci", ml: "അമേരിഗോ വെസ്പുച്ചി" } },
        { id: "opt3", text: { en: "Bartolomeu Dias", ml: "ബർത്തലോമിയോ ഡയസ്" } },
        { id: "opt4", text: { en: "Magellan", ml: "മഗല്ലൻ" } }
      ],
      answer: { id: "opt1", text: { en: "John Cabot", ml: "ജോൺ കാബട്ട്" } }
    },
    {
      q_id: "q31",
      question: { en: "Which treaty was forced on Germany after WWI?", ml: "ഒന്നാം ലോകമഹായുദ്ധത്തിന് ശേഷം ജർമ്മനിയുടെ മേൽ അടിച്ചേൽപ്പിച്ച ഉടമ്പടി ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Treaty of Paris", ml: "പാരീസ് ഉടമ്പടി" } },
        { id: "opt2", text: { en: "Treaty of Versailles", ml: "വെഴ്സായ് ഉടമ്പടി" } },
        { id: "opt3", text: { en: "Treaty of London", ml: "ലണ്ടൻ ഉടമ്പടി" } },
        { id: "opt4", text: { en: "Treaty of Rome", ml: "റോം ഉടമ്പടി" } }
      ],
      answer: { id: "opt2", text: { en: "Treaty of Versailles", ml: "വെഴ്സായ് ഉടമ്പടി" } }
    },
    {
      q_id: "q32",
      question: { en: "What is 'Appeasement Policy'?", ml: "എന്താണ് 'പ്രീണന നയം'?" },
      options: [
        { id: "opt1", text: { en: "Fighting against aggressors", ml: "ആക്രമണകാരികൾക്കെതിരെ പോരാടുന്നത്" } },
        { id: "opt2", text: { en: "Giving concessions to avoid war", ml: "യുദ്ധം ഒഴിവാക്കാൻ വിട്ടുവീഴ്ചകൾ നൽകുന്നത്" } },
        { id: "opt3", text: { en: "Ignoring the enemy", ml: "ശത്രുവിനെ അവഗണിക്കുന്നത്" } },
        { id: "opt4", text: { en: "Surrendering immediately", ml: "ഉടൻ കീഴടങ്ങുന്നത്" } }
      ],
      answer: { id: "opt2", text: { en: "Giving concessions to avoid war", ml: "യുദ്ധം ഒഴിവാക്കാൻ വിട്ടുവീഴ്ചകൾ നൽകുന്നത്" } }
    },
    {
      q_id: "q33",
      question: { en: "Which agreement is an example of Appeasement Policy?", ml: "പ്രീണന നയത്തിന് ഉദാഹരണമായ കരാർ ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Munich Agreement", ml: "മ്യൂണിക് ഉടമ്പടി" } },
        { id: "opt2", text: { en: "Versailles Treaty", ml: "വെഴ്സായ് ഉടമ്പടി" } },
        { id: "opt3", text: { en: "Atlantic Charter", ml: "അറ്റ്ലാന്റിക് ചാർട്ടർ" } },
        { id: "opt4", text: { en: "Yalta Conference", ml: "യാൽറ്റ സമ്മേളനം" } }
      ],
      answer: { id: "opt1", text: { en: "Munich Agreement", ml: "മ്യൂണിക് ഉടമ്പടി" } }
    },
    {
      q_id: "q34",
      question: { en: "When did the Cold War end?", ml: "ശീതയുദ്ധം എപ്പോഴാണ് അവസാനിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "1945", ml: "1945" } },
        { id: "opt2", text: { en: "1991", ml: "1991" } },
        { id: "opt3", text: { en: "1989", ml: "1989" } },
        { id: "opt4", text: { en: "2000", ml: "2000" } }
      ],
      answer: { id: "opt2", text: { en: "1991" } }
    },
    {
      q_id: "q35",
      question: { en: "Which event marked the end of the Cold War?", ml: "ശീതയുദ്ധത്തിന്റെ അന്ത്യം കുറിച്ച സംഭവം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Fall of Berlin Wall", ml: "ബെർലിൻ മതിലിന്റെ തകർച്ച" } },
        { id: "opt2", text: { en: "Disintegration of Soviet Union", ml: "സോവിയറ്റ് യൂണിയന്റെ തകർച്ച" } },
        { id: "opt3", text: { en: "Death of Stalin", ml: "സ്റ്റാലിന്റെ മരണം" } },
        { id: "opt4", text: { en: "End of Vietnam War", ml: "വിയറ്റ്നാം യുദ്ധത്തിന്റെ അന്ത്യം" } }
      ],
      answer: { id: "opt2", text: { en: "Disintegration of Soviet Union", ml: "സോവിയറ്റ് യൂണിയന്റെ തകർച്ച" } }
    },
    {
      q_id: "q36",
      question: { en: "Which country was NOT part of the Axis Powers in WWII?", ml: "രണ്ടാം ലോകമഹായുദ്ധത്തിൽ അച്ചുതണ്ട് ശക്തികളുടെ ഭാഗമല്ലാത്ത രാജ്യം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Germany", ml: "ജർമ്മനി" } },
        { id: "opt2", text: { en: "Italy", ml: "ഇറ്റലി" } },
        { id: "opt3", text: { en: "Japan", ml: "ജപ്പാൻ" } },
        { id: "opt4", text: { en: "England", ml: "ഇംഗ്ലണ്ട്" } }
      ],
      answer: { id: "opt4", text: { en: "England", ml: "ഇംഗ്ലണ്ട്" } }
    },
    {
      q_id: "q37",
      question: { en: "Which country was NOT part of the Allied Powers in WWII?", ml: "രണ്ടാം ലോകമഹായുദ്ധത്തിൽ സഖ്യകക്ഷികളുടെ ഭാഗമല്ലാത്ത രാജ്യം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "England", ml: "ഇംഗ്ലണ്ട്" } },
        { id: "opt2", text: { en: "France", ml: "ഫ്രാൻസ്" } },
        { id: "opt3", text: { en: "Germany", ml: "ജർമ്മനി" } },
        { id: "opt4", text: { en: "USA", ml: "യുഎസ്എ" } }
      ],
      answer: { id: "opt3", text: { en: "Germany", ml: "ജർമ്മനി" } }
    },
    {
      q_id: "q38",
      question: { en: "What is 'Extreme Nationalism'?", ml: "എന്താണ് 'തീവ്ര ദേശീയത'?" },
      options: [
        { id: "opt1", text: { en: "Love for all nations", ml: "എല്ലാ രാജ്യങ്ങളോടുമുള്ള സ്നേഹം" } },
        { id: "opt2", text: { en: "Aggressive love for one's country linked to racism", ml: "വംശീയതയുമായി ബന്ധപ്പെട്ട അമിതമായ രാജ്യസ്നേഹം" } },
        { id: "opt3", text: { en: "Patriotism", ml: "ദേശസ്നേഹം" } },
        { id: "opt4", text: { en: "Internationalism", ml: "സർവ്വദേശീയത" } }
      ],
      answer: { id: "opt2", text: { en: "Aggressive love for one's country linked to racism", ml: "വംശീയതയുമായി ബന്ധപ്പെട്ട അമിതമായ രാജ്യസ്നേഹം" } }
    },
    {
      q_id: "q39",
      question: { en: "Pan-Slav Movement was led by?", ml: "പാൻ-സ്ലാവ് പ്രസ്ഥാനത്തിന് നേതൃത്വം നൽകിയത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Germany", ml: "ജർമ്മനി" } },
        { id: "opt2", text: { en: "Serbia", ml: "സെർബിയ" } },
        { id: "opt3", text: { en: "Italy", ml: "ഇറ്റലി" } },
        { id: "opt4", text: { en: "Austria", ml: "ഓസ്ട്രിയ" } }
      ],
      answer: { id: "opt2", text: { en: "Serbia", ml: "സെർബിയ" } }
    },
    {
      q_id: "q40",
      question: { en: "Which invention helped in navigation?", ml: "നാവിഗേഷന് സഹായിച്ച കണ്ടുപിടുത്തം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Steam Engine", ml: "ആവി എൻജിൻ" } },
        { id: "opt2", text: { en: "Compass", ml: "വടക്കുനോക്കിയന്ത്രം (കോമ്പസ്)" } },
        { id: "opt3", text: { en: "Telephone", ml: "ടെലിഫോൺ" } },
        { id: "opt4", text: { en: "Printing Press", ml: "അച്ചടി യന്ത്രം" } }
      ],
      answer: { id: "opt2", text: { en: "Compass", ml: "വടക്കുനോക്കിയന്ത്രം (കോമ്പസ്)" } }
    },
    {
      q_id: "q41",
      question: { en: "Who sponsored Christopher Columbus?", ml: "ക്രിസ്റ്റഫർ കൊളംബസിനെ സഹായിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Portugal", ml: "പോർച്ചുഗൽ" } },
        { id: "opt2", text: { en: "Spain", ml: "സ്പെയിൻ" } },
        { id: "opt3", text: { en: "England", ml: "ഇംഗ്ലണ്ട്" } },
        { id: "opt4", text: { en: "France", ml: "ഫ്രാൻസ്" } }
      ],
      answer: { id: "opt2", text: { en: "Spain", ml: "സ്പെയിൻ" } }
    },
    {
      q_id: "q42",
      question: { en: "What was the main feature of Industrial Capitalism?", ml: "വ്യാവസായിക മുതലാളിത്തത്തിന്റെ പ്രധാന സവിശേഷത എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Handmade goods", ml: "കൈകൊണ്ട് നിർമ്മിച്ച സാധനങ്ങൾ" } },
        { id: "opt2", text: { en: "Mass production using machines", ml: "യന്ത്രങ്ങൾ ഉപയോഗിച്ചുള്ള വൻതോതിലുള്ള ഉൽപ്പാദനം" } },
        { id: "opt3", text: { en: "Barter trade", ml: "ബാർട്ടർ വ്യാപാരം" } },
        { id: "opt4", text: { en: "Agricultural dominance", ml: "കാർഷിക മേധാവിത്വം" } }
      ],
      answer: { id: "opt2", text: { en: "Mass production using machines", ml: "യന്ത്രങ്ങൾ ഉപയോഗിച്ചുള്ള വൻതോതിലുള്ള ഉൽപ്പാദനം" } }
    },
    {
      q_id: "q43",
      question: { en: "Which movement involved fencing small farms into large ones?", ml: "ചെറിയ കൃഷിയിടങ്ങൾ വേലികെട്ടി തിരിച്ച് വലിയവയാക്കുന്ന പ്രസ്ഥാനം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Green Revolution", ml: "ഹരിത വിപ്ലവം" } },
        { id: "opt2", text: { en: "Enclosure Movement", ml: "എൻക്ലോഷർ മൂവ്മെന്റ്" } },
        { id: "opt3", text: { en: "White Revolution", ml: "ധവള വിപ്ലവം" } },
        { id: "opt4", text: { en: "Blue Revolution", ml: "നീല വിപ്ലവം" } }
      ],
      answer: { id: "opt2", text: { en: "Enclosure Movement", ml: "എൻക്ലോഷർ മൂവ്മെന്റ്" } }
    },
    {
      q_id: "q44",
      question: { en: "What was a merit of the Industrial Revolution?", ml: "വ്യാവസായിക വിപ്ലവത്തിന്റെ ഒരു ഗുണം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Pollution", ml: "മലിനീകരണം" } },
        { id: "opt2", text: { en: "New employment opportunities", ml: "പുതിയ തൊഴിലവസരങ്ങൾ" } },
        { id: "opt3", text: { en: "Slums", ml: "ചേരികൾ" } },
        { id: "opt4", text: { en: "Exploitation", ml: "ചൂഷണം" } }
      ],
      answer: { id: "opt2", text: { en: "New employment opportunities", ml: "പുതിയ തൊഴിലവസരങ്ങൾ" } }
    },
    {
      q_id: "q45",
      question: { en: "What was a demerit of the Industrial Revolution?", ml: "വ്യാവസായിക വിപ്ലവത്തിന്റെ ഒരു ദോഷം എന്തായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Increased production", ml: "ഉൽപ്പാദന വർദ്ധനവ്" } },
        { id: "opt2", text: { en: "Exploitation of labourers", ml: "തൊഴിലാളികളുടെ ചൂഷണം" } },
        { id: "opt3", text: { en: "Urbanisation", ml: "നഗരവൽക്കരണം" } },
        { id: "opt4", text: { en: "Better transport", ml: "മെച്ചപ്പെട്ട ഗതാഗതം" } }
      ],
      answer: { id: "opt2", text: { en: "Exploitation of labourers", ml: "തൊഴിലാളികളുടെ ചൂഷണം" } }
    },
    {
      q_id: "q46",
      question: { en: "Who were the 'Gestapo'?", ml: "'ഗസ്റ്റപ്പോ' ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Italian secret police", ml: "ഇറ്റാലിയൻ രഹസ്യ പോലീസ്" } },
        { id: "opt2", text: { en: "Nazi secret police", ml: "നാസി രഹസ്യ പോലീസ്" } },
        { id: "opt3", text: { en: "Russian army", ml: "റഷ്യൻ സൈന്യം" } },
        { id: "opt4", text: { en: "British spies", ml: "ബ്രിട്ടീഷ് ചാരന്മാർ" } }
      ],
      answer: { id: "opt2", text: { en: "Nazi secret police", ml: "നാസി രഹസ്യ പോലീസ്" } }
    },
    {
      q_id: "q47",
      question: { en: "The 'March on Rome' was organized by?", ml: "'മാർച്ച് ഓൺ റോം' സംഘടിപ്പിച്ചത് ആര്?" },
      options: [
        { id: "opt1", text: { en: "Hitler", ml: "ഹിറ്റ്ലർ" } },
        { id: "opt2", text: { en: "Mussolini", ml: "മുസ്സോളിനി" } },
        { id: "opt3", text: { en: "Stalin", ml: "സ്റ്റാലിൻ" } },
        { id: "opt4", text: { en: "Lenin", ml: "ലെനിൻ" } }
      ],
      answer: { id: "opt2", text: { en: "Mussolini", ml: "മുസ്സോളിനി" } }
    },
    {
      q_id: "q48",
      question: { en: "Which country emerged as a superpower after WWII along with USA?", ml: "രണ്ടാം ലോകമഹായുദ്ധത്തിന് ശേഷം യുഎസ്എയ്ക്കൊപ്പം വൻശക്തിയായി ഉയർന്നുവന്ന രാജ്യം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Germany", ml: "ജർമ്മനി" } },
        { id: "opt2", text: { en: "USSR", ml: "യുഎസ്എസ്ആർ" } },
        { id: "opt3", text: { en: "Japan", ml: "ജപ്പാൻ" } },
        { id: "opt4", text: { en: "France", ml: "ഫ്രാൻസ്" } }
      ],
      answer: { id: "opt2", text: { en: "USSR", ml: "യുഎസ്എസ്ആർ" } }
    },
    {
      q_id: "q49",
      question: { en: "The disintegration of which country marked the end of the Cold War?", ml: "ഏത് രാജ്യത്തിന്റെ തകർച്ചയാണ് ശീതയുദ്ധത്തിന്റെ അന്ത്യം കുറിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Germany", ml: "ജർമ്മനി" } },
        { id: "opt2", text: { en: "Soviet Union", ml: "സോവിയറ്റ് യൂണിയൻ" } },
        { id: "opt3", text: { en: "Yugoslavia", ml: "യുഗോസ്ലാവിയ" } },
        { id: "opt4", text: { en: "Czechoslovakia", ml: "ചെക്കോസ്ലോവാക്യ" } }
      ],
      answer: { id: "opt2", text: { en: "Soviet Union", ml: "സോവിയറ്റ് യൂണിയൻ" } }
    },
    {
      q_id: "q50",
      question: { en: "What is the main feature of Neo-Colonialism?", ml: "നവകോളനിവൽക്കരണത്തിന്റെ പ്രധാന സവിശേഷത എന്താണ്?" },
      options: [
        { id: "opt1", text: { en: "Military rule", ml: "സൈനിക ഭരണം" } },
        { id: "opt2", text: { en: "Economic exploitation of independent nations", ml: "സ്വതന്ത്ര രാജ്യങ്ങളുടെ സാമ്പത്തിക ചൂഷണം" } },
        { id: "opt3", text: { en: "Slavery", ml: "അടിമത്തം" } },
        { id: "opt4", text: { en: "Religious conversion", ml: "മതപരിവർത്തനം" } }
      ],
      answer: { id: "opt2", text: { en: "Economic exploitation of independent nations", ml: "സ്വതന്ത്ര രാജ്യങ്ങളുടെ സാമ്പത്തിക ചൂഷണം" } }
    },
    {
      q_id: "q51",
      question: { en: "Which spice was the main attraction for European traders in the 15th century?", ml: "15-ാം നൂറ്റാണ്ടിൽ യൂറോപ്യൻ വ്യാപാരികളെ പ്രധാനമായും ആകർഷിച്ച സുഗന്ധവ്യഞ്ജനം ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Cardamom", ml: "ഏലയ്ക്ക" } },
        { id: "opt2", text: { en: "Pepper", ml: "കുരുമുളക്" } },
        { id: "opt3", text: { en: "Clove", ml: "ഗ്രാമ്പൂ" } },
        { id: "opt4", text: { en: "Cinnamon", ml: "കറുവപ്പട്ട" } }
      ],
      answer: { id: "opt2", text: { en: "Pepper", ml: "കുരുമുളക്" } }
    },
    {
      q_id: "q52",
      question: { en: "The Portuguese arrived at which coast in Africa in the 15th century?", ml: "15-ാം നൂറ്റാണ്ടിൽ പോർച്ചുഗീസുകാർ ആഫ്രിക്കയിലെ ഏത് തീരത്താണ് എത്തിയത്?" },
      options: [
        { id: "opt1", text: { en: "Gold Coast", ml: "ഗോൾഡ് കോസ്റ്റ്" } },
        { id: "opt2", text: { en: "Guinea Coast", ml: "ഗിനിയ തീരം" } },
        { id: "opt3", text: { en: "Ivory Coast", ml: "ഐവറി കോസ്റ്റ്" } },
        { id: "opt4", text: { en: "Cape Coast", ml: "കേപ്പ് കോസ്റ്റ്" } }
      ],
      answer: { id: "opt2", text: { en: "Guinea Coast", ml: "ഗിനിയ തീരം" } }
    },
    {
      q_id: "q53",
      question: { en: "Which scientific advancement helped in map-making?", ml: "ഭൂപട നിർമ്മാണത്തിന് സഹായിച്ച ശാസ്ത്രീയ പുരോഗതി ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Biology", ml: "ജീവശാസ്ത്രം" } },
        { id: "opt2", text: { en: "Cartography", ml: "കാർട്ടോഗ്രഫി (ഭൂപട നിർമ്മാണം)" } },
        { id: "opt3", text: { en: "Zoology", ml: "ജന്തുശാസ്ത്രം" } },
        { id: "opt4", text: { en: "Botany", ml: "സസ്യശാസ്ത്രം" } }
      ],
      answer: { id: "opt2", text: { en: "Cartography", ml: "കാർട്ടോഗ്രഫി (ഭൂപട നിർമ്മാണം)" } }
    },
    {
      q_id: "q54",
      question: { en: "What goods were transported from the Americas to Europe in the Triangular Trade?", ml: "ത്രികോണ വ്യാപാരത്തിൽ അമേരിക്കയിൽ നിന്ന് യൂറോപ്പിലേക്ക് കൊണ്ടുപോയ സാധനങ്ങൾ ഏവ?" },
      options: [
        { id: "opt1", text: { en: "Slaves", ml: "അടിമകൾ" } },
        { id: "opt2", text: { en: "Sugar and Cotton", ml: "പഞ്ചസാരയും പരുത്തിയും" } },
        { id: "opt3", text: { en: "Manufactured goods", ml: "നിർമ്മിത ഉൽപ്പന്നങ്ങൾ" } },
        { id: "opt4", text: { en: "Spices", ml: "സുഗന്ധവ്യഞ്ജനങ്ങൾ" } }
      ],
      answer: { id: "opt2", text: { en: "Sugar and Cotton", ml: "പഞ്ചസാരയും പരുത്തിയും" } }
    },
    {
      q_id: "q55",
      question: { en: "As a result of geographical explorations, trade shifted from the Mediterranean Sea to which ocean?", ml: "ഭൂമിശാസ്ത്രപരമായ അന്വേഷണങ്ങളുടെ ഫലമായി, വ്യാപാരം മെഡിറ്ററേനിയൻ കടലിൽ നിന്ന് ഏത് സമുദ്രത്തിലേക്ക് മാറി?" },
      options: [
        { id: "opt1", text: { en: "Indian Ocean", ml: "ഇന്ത്യൻ മഹാസമുദ്രം" } },
        { id: "opt2", text: { en: "Atlantic Ocean", ml: "അറ്റ്ലാന്റിക് സമുദ്രം" } },
        { id: "opt3", text: { en: "Pacific Ocean", ml: "പസഫിക് സമുദ്രം" } },
        { id: "opt4", text: { en: "Arctic Ocean", ml: "ആർട്ടിക് സമുദ്രം" } }
      ],
      answer: { id: "opt2", text: { en: "Atlantic Ocean", ml: "അറ്റ്ലാന്റിക് സമുദ്രം" } }
    },
    {
      q_id: "q56",
      question: { en: "Which countries governed their colonies directly under the King?", ml: "ഏതൊക്കെ രാജ്യങ്ങളാണ് തങ്ങളുടെ കോളനികളെ രാജാവിന്റെ കീഴിൽ നേരിട്ട് ഭരിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "England and Netherlands", ml: "ഇംഗ്ലണ്ടും നെതർലാൻഡ്സും" } },
        { id: "opt2", text: { en: "Spain and Portugal", ml: "സ്പെയിനും പോർച്ചുഗലും" } },
        { id: "opt3", text: { en: "France and Germany", ml: "ഫ്രാൻസും ജർമ്മനിയും" } },
        { id: "opt4", text: { en: "Italy and Russia", ml: "ഇറ്റലിയും റഷ്യയും" } }
      ],
      answer: { id: "opt2", text: { en: "Spain and Portugal", ml: "സ്പെയിനും പോർച്ചുഗലും" } }
    },
    {
      q_id: "q57",
      question: { en: "Which countries used Joint-Stock Companies for colonial trade?", ml: "കൊളോണിയൽ വ്യാപാരത്തിനായി ജോയിന്റ് സ്റ്റോക്ക് കമ്പനികൾ ഉപയോഗിച്ച രാജ്യങ്ങൾ ഏവ?" },
      options: [
        { id: "opt1", text: { en: "Spain and Portugal", ml: "സ്പെയിനും പോർച്ചുഗലും" } },
        { id: "opt2", text: { en: "England and Netherlands", ml: "ഇംഗ്ലണ്ടും നെതർലാൻഡ്സും" } },
        { id: "opt3", text: { en: "China and Japan", ml: "ചൈനയും ജപ്പാനും" } },
        { id: "opt4", text: { en: "Brazil and Argentina", ml: "ബ്രസീലും അർജന്റീനയും" } }
      ],
      answer: { id: "opt2", text: { en: "England and Netherlands", ml: "ഇംഗ്ലണ്ടും നെതർലാൻഡ്സും" } }
    },
    {
      q_id: "q58",
      question: { en: "In Merchant Capitalism, who produced the goods?", ml: "വാണിജ്യ മുതലാളിത്തത്തിൽ, ആരാണ് സാധനങ്ങൾ ഉൽപ്പാദിപ്പിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "Factory machines", ml: "ഫാക്ടറി യന്ത്രങ്ങൾ" } },
        { id: "opt2", text: { en: "Rural artisans", ml: "ഗ്രാമീണ കരകൗശലത്തൊഴിലാളികൾ" } },
        { id: "opt3", text: { en: "Kings", ml: "രാജാക്കന്മാർ" } },
        { id: "opt4", text: { en: "Soldiers", ml: "സൈനികർ" } }
      ],
      answer: { id: "opt2", text: { en: "Rural artisans", ml: "ഗ്രാമീണ കരകൗശലത്തൊഴിലാളികൾ" } }
    },
    {
      q_id: "q59",
      question: { en: "Which energy source was primarily used in the early Industrial Revolution?", ml: "ആദ്യകാല വ്യാവസായിക വിപ്ലവത്തിൽ പ്രധാനമായും ഉപയോഗിച്ചിരുന്ന ഊർജ്ജ സ്രോതസ്സ് ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Solar energy", ml: "സൗരോർജ്ജം" } },
        { id: "opt2", text: { en: "Steam energy", ml: "ആവിശക്തി" } },
        { id: "opt3", text: { en: "Nuclear energy", ml: "ആണവോർജ്ജം" } },
        { id: "opt4", text: { en: "Electric energy", ml: "വൈദ്യുതോർജ്ജം" } }
      ],
      answer: { id: "opt2", text: { en: "Steam energy", ml: "ആവിശക്തി" } }
    },
    {
      q_id: "q60",
      question: { en: "Which of the following was a feature of the Agrarian Revolution?", ml: "താഴെ പറയുന്നവയിൽ കാർഷിക വിപ്ലവത്തിന്റെ സവിശേഷത ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Crop rotation", ml: "വിളപരിക്രമം" } },
        { id: "opt2", text: { en: "Use of computers", ml: "കമ്പ്യൂട്ടറുകളുടെ ഉപയോഗം" } },
        { id: "opt3", text: { en: "Space exploration", ml: "ബഹിരാകാശ പര്യവേഷണം" } },
        { id: "opt4", text: { en: "Plastic production", ml: "പ്ലാസ്റ്റിക് ഉൽപ്പാദനം" } }
      ],
      answer: { id: "opt1", text: { en: "Crop rotation", ml: "വിളപരിക്രമം" } }
    },
    {
      q_id: "q61",
      question: { en: "The Berlin-Baghdad railway plan is associated with which country?", ml: "ബെർലിൻ-ബാഗ്ദാദ് റെയിൽവേ പദ്ധതി ഏത് രാജ്യവുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു?" },
      options: [
        { id: "opt1", text: { en: "England", ml: "ഇംഗ്ലണ്ട്" } },
        { id: "opt2", text: { en: "Germany", ml: "ജർമ്മനി" } },
        { id: "opt3", text: { en: "France", ml: "ഫ്രാൻസ്" } },
        { id: "opt4", text: { en: "Russia", ml: "റഷ്യ" } }
      ],
      answer: { id: "opt2", text: { en: "Germany", ml: "ജർമ്മനി" } }
    },
    {
      q_id: "q62",
      question: { en: "Which countries were members of the Triple Entente?", ml: "ട്രിപ്പിൾ എന്റന്റിലെ അംഗരാജ്യങ്ങൾ ഏതൊക്കെയായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Germany, Italy, Austria", ml: "ജർമ്മനി, ഇറ്റലി, ഓസ്ട്രിയ" } },
        { id: "opt2", text: { en: "England, France, Russia", ml: "ഇംഗ്ലണ്ട്, ഫ്രാൻസ്, റഷ്യ" } },
        { id: "opt3", text: { en: "USA, Japan, China", ml: "യുഎസ്എ, ജപ്പാൻ, ചൈന" } },
        { id: "opt4", text: { en: "Spain, Portugal, Holland", ml: "സ്പെയിൻ, പോർച്ചുഗൽ, ഹോളണ്ട്" } }
      ],
      answer: { id: "opt2", text: { en: "England, France, Russia", ml: "ഇംഗ്ലണ്ട്, ഫ്രാൻസ്, റഷ്യ" } }
    },
    {
      q_id: "q63",
      question: { en: "Which movement was led by Germany based on extreme nationalism?", ml: "തീവ്ര ദേശീയതയുടെ അടിസ്ഥാനത്തിൽ ജർമ്മനി നേതൃത്വം നൽകിയ പ്രസ്ഥാനം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Pan-Slav Movement", ml: "പാൻ-സ്ലാവ് പ്രസ്ഥാനം" } },
        { id: "opt2", text: { en: "Pan-German Movement", ml: "പാൻ-ജർമ്മൻ പ്രസ്ഥാനം" } },
        { id: "opt3", text: { en: "Non-Aligned Movement", ml: "ചേരിചേരാ പ്രസ്ഥാനം" } },
        { id: "opt4", text: { en: "Civil Rights Movement", ml: "പൗരാവകാശ പ്രസ്ഥാനം" } }
      ],
      answer: { id: "opt2", text: { en: "Pan-German Movement", ml: "പാൻ-ജർമ്മൻ പ്രസ്ഥാനം" } }
    },
    {
      q_id: "q64",
      question: { en: "What was the result of the First World War on agriculture and industry?", ml: "ഒന്നാം ലോകമഹായുദ്ധം കൃഷിയിലും വ്യവസായത്തിലും എന്ത് ഫലമാണ് ഉണ്ടാക്കിയത്?" },
      options: [
        { id: "opt1", text: { en: "They flourished", ml: "അവ അഭിവൃദ്ധി പ്രാപിച്ചു" } },
        { id: "opt2", text: { en: "They were devastated", ml: "അവ തകർക്കപ്പെട്ടു" } },
        { id: "opt3", text: { en: "No change", ml: "മാറ്റമൊന്നുമുണ്ടായില്ല" } },
        { id: "opt4", text: { en: "They became modern", ml: "അവ ആധുനികമായി" } }
      ],
      answer: { id: "opt2", text: { en: "They were devastated", ml: "അവ തകർക്കപ്പെട്ടു" } }
    },
    {
      q_id: "q65",
      question: { en: "Which political system glorifies war and violence?", ml: "യുദ്ധത്തെയും അക്രമത്തെയും മഹത്വവൽക്കരിക്കുന്ന രാഷ്ട്രീയ വ്യവസ്ഥ ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Democracy", ml: "ജനാധിപത്യം" } },
        { id: "opt2", text: { en: "Totalitarianism", ml: "സമഗ്രാധിപത്യം" } },
        { id: "opt3", text: { en: "Socialism", ml: "സോഷ്യലിസം" } },
        { id: "opt4", text: { en: "Liberalism", ml: "ലിബറലിസം" } }
      ],
      answer: { id: "opt2", text: { en: "Totalitarianism", ml: "സമഗ്രാധിപത്യം" } }
    },
    {
      q_id: "q66",
      question: { en: "Who were the 'Brownshirts'?", ml: "'തവിട്ടുകുപ്പായക്കാർ' (Brownshirts) ആരായിരുന്നു?" },
      options: [
        { id: "opt1", text: { en: "Mussolini's army", ml: "മുസ്സോളിനിയുടെ സൈന്യം" } },
        { id: "opt2", text: { en: "Hitler's militia", ml: "ഹിറ്റ്ലറുടെ സൈന്യം" } },
        { id: "opt3", text: { en: "Stalin's guards", ml: "സ്റ്റാലിന്റെ ഗാർഡുകൾ" } },
        { id: "opt4", text: { en: "British police", ml: "ബ്രിട്ടീഷ് പോലീസ്" } }
      ],
      answer: { id: "opt2", text: { en: "Hitler's militia", ml: "ഹിറ്റ്ലറുടെ സൈന്യം" } }
    },
    {
      q_id: "q67",
      question: { en: "Which country declared war on Serbia in 1914?", ml: "1914-ൽ സെർബിയയ്ക്കെതിരെ യുദ്ധം പ്രഖ്യാപിച്ച രാജ്യം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Germany", ml: "ജർമ്മനി" } },
        { id: "opt2", text: { en: "Austria", ml: "ഓസ്ട്രിയ" } },
        { id: "opt3", text: { en: "France", ml: "ഫ്രാൻസ്" } },
        { id: "opt4", text: { en: "Russia", ml: "റഷ്യ" } }
      ],
      answer: { id: "opt2", text: { en: "Austria", ml: "ഓസ്ട്രിയ" } }
    },
    {
      q_id: "q68",
      question: { en: "Which organization failed to stop fascist aggressions?", ml: "ഫാസിസ്റ്റ് ആക്രമണങ്ങൾ തടയുന്നതിൽ പരാജയപ്പെട്ട സംഘടന ഏത്?" },
      options: [
        { id: "opt1", text: { en: "United Nations", ml: "ഐക്യരാഷ്ട്രസഭ" } },
        { id: "opt2", text: { en: "League of Nations", ml: "സർവ്വരാജ്യസഖ്യം" } },
        { id: "opt3", text: { en: "NATO", ml: "നാറ്റോ" } },
        { id: "opt4", text: { en: "Red Cross", ml: "റെഡ് ക്രോസ്" } }
      ],
      answer: { id: "opt2", text: { en: "League of Nations", ml: "സർവ്വരാജ്യസഖ്യം" } }
    },
    {
      q_id: "q69",
      question: { en: "When was the Munich Agreement signed?", ml: "മ്യൂണിക് ഉടമ്പടി ഒപ്പുവെച്ചത് എപ്പോഴാണ്?" },
      options: [
        { id: "opt1", text: { en: "1914", ml: "1914" } },
        { id: "opt2", text: { en: "1938", ml: "1938" } },
        { id: "opt3", text: { en: "1945", ml: "1945" } },
        { id: "opt4", text: { en: "1991", ml: "1991" } }
      ],
      answer: { id: "opt2", text: { en: "1938" } }
    },
    {
      q_id: "q70",
      question: { en: "What happened to European colonies in Asia and Africa after WWII?", ml: "രണ്ടാം ലോകമഹായുദ്ധത്തിന് ശേഷം ഏഷ്യയിലെയും ആഫ്രിക്കയിലെയും യൂറോപ്യൻ കോളനികൾക്ക് എന്ത് സംഭവിച്ചു?" },
      options: [
        { id: "opt1", text: { en: "They became richer", ml: "അവ കൂടുതൽ സമ്പന്നമായി" } },
        { id: "opt2", text: { en: "They gained independence", ml: "അവയ്ക്ക് സ്വാതന്ത്ര്യം ലഭിച്ചു" } },
        { id: "opt3", text: { en: "They were destroyed", ml: "അവ നശിപ്പിക്കപ്പെട്ടു" } },
        { id: "opt4", text: { en: "They became part of USA", ml: "അവ യുഎസ്എയുടെ ഭാഗമായി" } }
      ],
      answer: { id: "opt2", text: { en: "They gained independence", ml: "അവയ്ക്ക് സ്വാതന്ത്ര്യം ലഭിച്ചു" } }
    },
    {
      q_id: "q71",
      question: { en: "Which country led the Socialist bloc during the Cold War?", ml: "ശീതയുദ്ധകാലത്ത് സോഷ്യലിസ്റ്റ് ചേരിയെ നയിച്ച രാജ്യം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "USA", ml: "യുഎസ്എ" } },
        { id: "opt2", text: { en: "USSR", ml: "യുഎസ്എസ്ആർ" } },
        { id: "opt3", text: { en: "China", ml: "ചൈന" } },
        { id: "opt4", text: { en: "Germany", ml: "ജർമ്മനി" } }
      ],
      answer: { id: "opt2", text: { en: "USSR", ml: "യുഎസ്എസ്ആർ" } }
    },
    {
      q_id: "q72",
      question: { en: "Which country led the Capitalist bloc during the Cold War?", ml: "ശീതയുദ്ധകാലത്ത് മുതലാളിത്ത ചേരിയെ നയിച്ച രാജ്യം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "USSR", ml: "യുഎസ്എസ്ആർ" } },
        { id: "opt2", text: { en: "USA", ml: "യുഎസ്എ" } },
        { id: "opt3", text: { en: "UK", ml: "യുകെ" } },
        { id: "opt4", text: { en: "France", ml: "ഫ്രാൻസ്" } }
      ],
      answer: { id: "opt2", text: { en: "USA", ml: "യുഎസ്എ" } }
    },
    {
      q_id: "q73",
      question: { en: "In 1415, the Portuguese captured which African city?", ml: "1415-ൽ പോർച്ചുഗീസുകാർ പിടിച്ചെടുത്ത ആഫ്രിക്കൻ നഗരം ഏത്?" },
      options: [
        { id: "opt1", text: { en: "Cairo", ml: "കെയ്റോ" } },
        { id: "opt2", text: { en: "Ceuta", ml: "സിയൂട്ട" } },
        { id: "opt3", text: { en: "Cape Town", ml: "കേപ്പ് ടൗൺ" } },
        { id: "opt4", text: { en: "Lagos", ml: "ലാഗോസ്" } }
      ],
      answer: { id: "opt2", text: { en: "Ceuta", ml: "സിയൂട്ട" } }
    },
    {
      q_id: "q74",
      question: { en: "When was the League of Nations formed?", ml: "സർവ്വരാജ്യസഖ്യം (League of Nations) എപ്പോഴാണ് രൂപീകരിച്ചത്?" },
      options: [
        { id: "opt1", text: { en: "1914", ml: "1914" } },
        { id: "opt2", text: { en: "1920", ml: "1920" } },
        { id: "opt3", text: { en: "1939", ml: "1939" } },
        { id: "opt4", text: { en: "1945", ml: "1945" } }
      ],
      answer: { id: "opt2", text: { en: "1920" } }
    },
    {
      q_id: "q75",
      question: { en: "Which of the following is a feature of Finance Capitalism?", ml: "ഫിനാൻസ് ക്യാപിറ്റലിസത്തിന്റെ സവിശേഷത ഏതാണ്?" },
      options: [
        { id: "opt1", text: { en: "Dominance of agriculture", ml: "കൃഷിയുടെ മേധാവിത്വം" } },
        { id: "opt2", text: { en: "Dominance of banks and stock markets", ml: "ബാങ്കുകളുടെയും ഓഹരി വിപണികളുടെയും മേധാവിത്വം" } },
        { id: "opt3", text: { en: "Barter system", ml: "ബാർട്ടർ സമ്പ്രദായം" } },
        { id: "opt4", text: { en: "State control of all property", ml: "എല്ലാ സ്വത്തുക്കളുടെയും ഭരണകൂട നിയന്ത്രണം" } }
      ],
      answer: { id: "opt2", text: { en: "Dominance of banks and stock markets", ml: "ബാങ്കുകളുടെയും ഓഹരി വിപണികളുടെയും മേധാവിത്വം" } }
    }
  ],
  sample_questions: [
    {
      q_id: "sq1",
      question: { en: "What were the two significant events in the 15th century that launched geographical expeditions?", ml: "15-ാം നൂറ്റാണ്ടിൽ ഭൂമിശാസ്ത്രപരമായ അന്വേഷണങ്ങൾക്ക് തുടക്കം കുറിച്ച രണ്ട് പ്രധാന സംഭവങ്ങൾ ഏവ?" },
      answer: { en: "The conquest of Constantinople by the Turks and the arrival of the Portuguese at the Guinea Coast in Africa.", ml: "തുർക്കികൾ കോൺസ്റ്റാന്റിനോപ്പിൾ കീഴടക്കിയതും ആഫ്രിക്കയിലെ ഗിനിയ തീരത്ത് പോർച്ചുഗീസുകാർ എത്തിയതും." }
    },
    {
      q_id: "sq2",
      question: { en: "Explain the concept of 'Triangular Trade'.", ml: "'ത്രികോണ വ്യാപാരം' എന്ന ആശയം വിശദീകരിക്കുക." },
      answer: { en: "It was a trade route linking Europe, Africa, and the Americas. Products from Europe were taken to Africa to buy slaves. These slaves were transported to the Americas, and goods like sugar and cotton from America were shipped to Europe.", ml: "ഇത് യൂറോപ്പ്, ആഫ്രിക്ക, അമേരിക്ക എന്നീ വൻകരകളെ ബന്ധിപ്പിക്കുന്ന ഒരു വ്യാപാര പാതയായിരുന്നു. യൂറോപ്പിൽ നിന്നുള്ള ഉൽപ്പന്നങ്ങൾ ആഫ്രിക്കയിൽ കൊണ്ടുപോയി അടിമകളെ വാങ്ങി. ഈ അടിമകളെ അമേരിക്കകളിലേക്ക് കൊണ്ടുപോകുകയും, അവിടെ നിന്ന് പഞ്ചസാര, പരുത്തി തുടങ്ങിയവ യൂറോപ്പിലേക്ക് കൊണ്ടുപോകുകയും ചെയ്തു." }
    },
    {
      q_id: "sq3",
      question: { en: "What is Mercantilism?", ml: "എന്താണ് മെർക്കന്റിലിസം?" },
      answer: { en: "Mercantilism was an economic policy where a nation's wealth was measured by the amount of gold and silver (Bullion) it possessed. The main aim was to preserve wealth by reducing imports and increasing exports.", ml: "സ്വർണ്ണം, വെള്ളി (ബുള്ളിയൻ) എന്നിവയുടെ ശേഖരത്തിന്റെ അടിസ്ഥാനത്തിൽ ഒരു രാജ്യത്തിന്റെ സമ്പത്ത് കണക്കാക്കിയിരുന്ന സാമ്പത്തിക നയമായിരുന്നു മെർക്കന്റിലിസം. ഇറക്കുമതി കുറച്ചും കയറ്റുമതി വർദ്ധിപ്പിച്ചും സമ്പത്ത് നിലനിർത്തുക എന്നതായിരുന്നു പ്രധാന ലക്ഷ്യം." }
    },
    {
      q_id: "sq4",
      question: { en: "Distinguish between Merchant Capitalism and Industrial Capitalism.", ml: "വാണിജ്യ മുതലാളിത്തവും വ്യാവസായിക മുതലാളിത്തവും വേർതിരിച്ചെഴുതുക." },
      answer: { en: "In merchant capitalism, merchants made profits by acting as intermediaries and selling goods produced by rural artisans. In industrial capitalism, wealth was invested in factories, and profits were made through mass production using machines.", ml: "വാണിജ്യ മുതലാളിത്തത്തിൽ, വ്യാപാരികൾ ഇടനിലക്കാരായി പ്രവർത്തിക്കുകയും ഗ്രാമീണ കരകൗശലത്തൊഴിലാളികൾ നിർമ്മിക്കുന്ന ഉൽപ്പന്നങ്ങൾ വിറ്റ് ലാഭമുണ്ടാക്കുകയും ചെയ്തു. വ്യാവസായിക മുതലാളിത്തത്തിൽ, സമ്പത്ത് ഫാക്ടറികളിൽ നിക്ഷേപിക്കുകയും യന്ത്രങ്ങൾ ഉപയോഗിച്ചുള്ള വൻതോതിലുള്ള ഉൽപ്പാദനത്തിലൂടെ ലാഭമുണ്ടാക്കുകയും ചെയ്തു." }
    },
    {
      q_id: "sq5",
      question: { en: "What are the negative impacts (demerits) of the Industrial Revolution?", ml: "വ്യാവസായിക വിപ്ലവത്തിന്റെ ദോഷകരമായ ഫലങ്ങൾ എന്തെല്ലാം?" },
      answer: { en: "Exploitation of labourers, including long working hours and low wages. Rise of slums, widespread poverty, and the spread of epidemics in polluted cities.", ml: "നീണ്ട ജോലിസമയവും കുറഞ്ഞ വേതനവും ഉൾപ്പെടെയുള്ള തൊഴിലാളികളുടെ ചൂഷണം. ചേരികളുടെ വളർച്ച, വ്യാപകമായ ദാരിദ്ര്യം, മലിനീകരിക്കപ്പെട്ട നഗരങ്ങളിൽ പകർച്ചവ്യാധികളുടെ വ്യാപനം." }
    },
    {
      q_id: "sq6",
      question: { en: "How did Imperialism lead to the First World War?", ml: "സാമ്രാജ്യത്വം ഒന്നാം ലോകമഹായുദ്ധത്തിലേക്ക് നയിച്ചത് എങ്ങനെ?" },
      answer: { en: "Industrialised nations desperately needed colonies for raw materials and markets. This created intense competition and rivalry between old imperial powers (like Britain and France) and new imperial powers (like Germany). This rivalry eventually escalated into the formation of military alliances and World War I.", ml: "വ്യാവസായിക രാജ്യങ്ങൾക്ക് അസംസ്കൃത വസ്തുക്കൾക്കും വിപണികൾക്കുമായി കോളനികളെ അടിയന്തിരമായി ആവശ്യമായിരുന്നു. ഇത് പഴയ സാമ്രാജ്യത്വ ശക്തികളും (ബ്രിട്ടൻ, ഫ്രാൻസ്) പുതിയ സാമ്രാജ്യത്വ ശക്തികളും (ജർമ്മനി) തമ്മിൽ കടുത്ത മത്സരത്തിനും ശത്രുതയ്ക്കും കാരണമായി. ഈ ശത്രുത ഒടുവിൽ സൈനിക സഖ്യങ്ങളുടെ രൂപീകരണത്തിലേക്കും ഒന്നാം ലോകമഹായുദ്ധത്തിലേക്കും നയിച്ചു." }
    },
    {
      q_id: "sq7",
      question: { en: "Mention any four features of Totalitarianism.", ml: "സമഗ്രാധിപത്യത്തിന്റെ ഏതെങ്കിലും നാല് സവിശേഷതകൾ വ്യക്തമാക്കുക." },
      answer: { en: "Rejection of democracy, Extreme nationalism, Elimination of political opponents, Glorification of war and violence.", ml: "ജനാധിപത്യ നിഷേധം, തീവ്ര ദേശീയത, രാഷ്ട്രീയ എതിരാളികളെ ഇല്ലാതാക്കൽ, യുദ്ധത്തെയും അക്രമത്തെയും മഹത്വവൽക്കരിക്കൽ." }
    },
    {
      q_id: "sq8",
      question: { en: "What was the immediate cause of the Second World War?", ml: "രണ്ടാം ലോകമഹായുദ്ധത്തിന്റെ പെട്ടെന്നുണ്ടായ കാരണം എന്തായിരുന്നു?" },
      answer: { en: "The immediate cause of the Second World War was Germany's invasion of Poland. This invasion took place on September 1, 1939.", ml: "ജർമ്മനി പോളണ്ടിനെ ആക്രമിച്ചതാണ് രണ്ടാം ലോകമഹായുദ്ധത്തിന്റെ പെട്ടെന്നുണ്ടായ കാരണം. 1939 സെപ്റ്റംബർ 1-നാണ് ഈ ആക്രമണം നടന്നത്." }
    },
    {
      q_id: "sq9",
      question: { en: "Define 'Cold War'.", ml: "'ശീതയുദ്ധം' നിർവചിക്കുക." },
      answer: { en: "The Cold War was an ideological confrontation between the capitalist bloc led by the USA and the socialist bloc led by the USSR after WWII. It was a period of intense rivalry without actual direct armed conflict.", ml: "രണ്ടാം ലോകമഹായുദ്ധത്തിനുശേഷം അമേരിക്കയുടെ നേതൃത്വത്തിലുള്ള മുതലാളിത്ത ചേരിയും സോവിയറ്റ് യൂണിയന്റെ നേതൃത്വത്തിലുള്ള സോഷ്യലിസ്റ്റ് ചേരിയും തമ്മിലുണ്ടായ പ്രത്യയശാസ്ത്രപരമായ ഏറ്റുമുട്ടലായിരുന്നു ശീതയുദ്ധം. ഇത് നേരിട്ടുള്ള സായുധ പോരാട്ടമില്ലാതെയുള്ള കടുത്ത ശത്രുതയുടെ കാലഘട്ടമായിരുന്നു." }
    },
    {
      q_id: "sq10",
      question: { en: "What is Finance Capitalism?", ml: "എന്താണ് ഫിനാൻസ് ക്യാപിറ്റലിസം (ധനമൂലധന വ്യവസ്ഥ)?" },
      answer: { en: "It is an economic system where financial institutions like banks, insurance, and stock markets hold major power. Wealth is accumulated through financial exchanges and investments rather than industrial production.", ml: "ബാങ്കുകൾ, ഇൻഷുറൻസ്, ഓഹരി വിപണികൾ തുടങ്ങിയ സാമ്പത്തിക സ്ഥാപനങ്ങൾക്ക് വലിയ അധികാരമുള്ള ഒരു സാമ്പത്തിക വ്യവസ്ഥയാണിത്. വ്യാവസായിക ഉൽപ്പാദനത്തേക്കാൾ സാമ്പത്തിക വിനിമയങ്ങളിലൂടെയും നിക്ഷേപങ്ങളിലൂടെയുമാണ് ഇതിൽ സമ്പത്ത് സ്വരൂപിക്കുന്നത്." }
    }
  ]
};
