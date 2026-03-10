import React from 'react';

const renderWithVariables = (text: string) => {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      return <span key={index} className="text-amber-600 dark:text-amber-400 font-medium">{part}</span>;
    }
    return part;
  });
};

export default function FormatsView() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-8 text-slate-800 dark:text-slate-200">
      <div>
        <h2 className="text-2xl font-bold text-brand-primary dark:text-white mb-4">SSLC Malayalam II: Type C (Essay) Master Formats</h2>
        <p className="mb-4">
          To score full marks in 6-8 mark questions, your answer must have a clear structure: <strong>Introduction (ആമുഖം) -&gt; Core Content (വിശദീകരണം) -&gt; Relevance/Style (സവിശേഷതകൾ/കാലികപ്രസക്തി) -&gt; Conclusion (ഉപസംഹാരം)</strong>.
        </p>
        <p className="mb-6">
          Here are the universal templates for the top repeating question types. You can memorize the Malayalam phrases used here to make your paper look highly professional.
        </p>
      </div>

      {/* Format 1 */}
      <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">Format 1: കഥാപാത്ര നിരൂപണം (Character Sketch)</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">Use this when asked to analyze or describe a character's traits, mental state, or role in a story.</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 1: Introduction (ആമുഖം)</h4>
            <p className="mt-1">{renderWithVariables("മലയാള സാഹിത്യത്തിലെ ശ്രദ്ധേയനായ എഴുത്തുകാരൻ/എഴുത്തുകാരി [Author Name] രചിച്ച [Name of the Book/Collection] എന്ന കൃതിയിലെ/കഥയിലെ ശ്രദ്ധേയമായ ഒരു കഥാപാത്രമാണ് [Character Name]. മനുഷ്യ മനസ്സുകളുടെ സങ്കീർണ്ണതകളും സാമൂഹിക ചുറ്റുപാടുകളും ഈ കഥാപാത്രത്തിലൂടെ വളരെ വ്യക്തമായി വരച്ചുകാട്ടാൻ ഗ്രന്ഥകാരന് കഴിഞ്ഞിട്ടുണ്ട്.")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 2: Core Traits & Role in the Story (സ്വഭാവ സവിശേഷതകൾ)</h4>
            <p className="mt-1">വളരെ <span className="underline decoration-brand-accent/50">ജീവസ്സുറ്റതും</span> വായനക്കാരുടെ മനസ്സിൽ മായാതെ നിൽക്കുന്നതുമായ ഒരു കഥാപാത്രമാണിത്. {renderWithVariables("[Character's main trait - e.g., സ്നേഹം, ദാരിദ്ര്യം, നിസ്സഹായത, ധീരത]")} ആണ് ഈ കഥാപാത്രത്തിന്റെ മുഖ്യ സവിശേഷത. കഥയിലെ പ്രധാന സംഭവവികാസങ്ങളെല്ലാം ഈ കഥാപാത്രവുമായി ബന്ധപ്പെട്ടാണ് കിടക്കുന്നത്. {renderWithVariables("[Briefly explain 2-3 sentences about what the character does in the story based on the question]")}. ഈ സന്ദർഭങ്ങളിൽ കഥാപാത്രത്തിന്റെ മാനസികാവസ്ഥ വളരെ ഹൃദയസ്പർശിയായി അവതരിപ്പിച്ചിരിക്കുന്നു.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 3: Evolution & Relevance (മാറ്റങ്ങളും പ്രസക്തിയും)</h4>
            <p className="mt-1">കഥയുടെ തുടക്കം മുതൽ ഒടുക്കം വരെ ഈ കഥാപാത്രത്തിൽ സംഭവിക്കുന്ന മാറ്റങ്ങൾ വായനക്കാരെ ചിന്തിപ്പിക്കുന്നതാണ്. വെറുമൊരു കഥാപാത്രം എന്നതിലുപരി, ഇന്നത്തെ സമൂഹത്തിൽ നാം നിത്യേന കാണുന്ന {renderWithVariables("[Mention the social issue they represent, e.g., സാധാരണക്കാരുടെ / പാർശ്വവൽക്കരിക്കപ്പെട്ടവരുടെ]")} പ്രതിനിധിയായി ഈ കഥാപാത്രത്തെ കാണാൻ സാധിക്കും.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 4: Conclusion (ഉപസംഹാരം)</h4>
            <p className="mt-1">ചുരുക്കത്തിൽ, {renderWithVariables("[Author Name]")}-ന്റെ <span className="underline decoration-brand-accent/50">രചനാവൈഭവം</span> മുഴുവൻ തെളിഞ്ഞുനിൽക്കുന്നത് {renderWithVariables("[Character Name]")} എന്ന ഈ കഥാപാത്ര സൃഷ്ടിയിലൂടെയാണ്. വായനക്കാരുടെ ഉള്ളിൽ അനുകമ്പയും ചിന്തയും ഉണർത്താൻ ഈ കഥാപാത്രത്തിന് പൂർണ്ണമായും കഴിഞ്ഞിട്ടുണ്ട്.</p>
          </div>
        </div>
      </div>

      {/* Format 2 */}
      <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">Format 2: ആസ്വാദനക്കുറിപ്പ് (Poem Appreciation Note)</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">Use this when asked to write an appreciation (Asadana Kurippu) for a poem or a given set of poetic lines.</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 1: Introduction (ആമുഖം)</h4>
            <p className="mt-1">{renderWithVariables("മലയാള കവിതാ ശാഖയിൽ തന്റേതായ വ്യക്തിമുദ്ര പതിപ്പിച്ച പ്രശസ്ത കവി [Poet Name] രചിച്ച [Poem Name] എന്ന കവിതയിലെ ശ്രദ്ധേയമായ വരികളാണ് ഇവിടെ നൽകിയിട്ടുള്ളത്. [Main Theme of the poem, e.g., പ്രകൃതിസ്നേഹം / മാതൃസ്നേഹം / സാമൂഹിക അസമത്വം] ആണ് ഈ കവിതയുടെ മുഖ്യ പ്രമേയം.")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 2: Core Meaning (ആശയ വിശദീകരണം)</h4>
            <p className="mt-1">നൽകിയിരിക്കുന്ന വരികളിൽ അതിമനോഹരവും അർത്ഥവത്തുമായ ആശയമാണ് കവി അവതരിപ്പിക്കുന്നത്. {renderWithVariables("[Explain the meaning of the given lines in 3-4 sentences in simple Malayalam]")}. ലളിതമായ വാക്കുകളിലൂടെ വളരെ ആഴത്തിലുള്ള ജീവൽ സത്യങ്ങളാണ് കവി ഇവിടെ വരച്ചുകാട്ടുന്നത്.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 3: Poetic Devices & Style (കാവ്യസവിശേഷതകൾ)</h4>
            <p className="mt-1">ഈ കവിതയുടെ ഏറ്റവും വലിയ സവിശേഷത ഇതിലെ ശബ്ദഭംഗിയും അർത്ഥഭംഗിയുമാണ്. {renderWithVariables("[Mention any poetic devices if you know, like ഉപമ (simile), രൂപകം (metaphor), or simply write:]")} തികച്ചും അനുയോജ്യമായ പദപ്രയോഗങ്ങളും ബിംബങ്ങളും (imagery) കവിതയെ കൂടുതൽ ആകർഷകമാക്കുന്നു. വായനക്കാരുടെ മനസ്സിൽ ദൃശ്യങ്ങൾ രൂപപ്പെടുത്താൻ കവിയുടെ വരികൾക്ക് പ്രത്യേക കഴിവുണ്ട്.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 4: Conclusion (ഉപസംഹാരം)</h4>
            <p className="mt-1">സാമൂഹിക പ്രസക്തിയുള്ള വലിയൊരു സന്ദേശമാണ് ഈ വരികളിലൂടെ കവി നൽകുന്നത്. കാലം എത്ര കഴിഞ്ഞാലും ഈ കവിതയുടെയും വരികളുടെയും മൂല്യം നഷ്ടപ്പെടുന്നില്ല എന്നതാണ് ഇതിന്റെ ഏറ്റവും വലിയ വിജയം. തികച്ചും ആസ്വാദ്യകരമായ ഒരു കാവ്യാനുഭവമാണ് ഇത് നൽകുന്നത്.</p>
          </div>
        </div>
      </div>

      {/* Format 3 */}
      <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">Format 3: ആശയവിശകലനം / ഉപന്യാസം (Thematic Essay / Quote Elaboration)</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">Use this when a statement or quote from a chapter is given, and you are asked to analyze it in the context of the story and current society.</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 1: Introduction (ആമുഖം)</h4>
            <p className="mt-1">{renderWithVariables("[Author/Poet Name] എഴുതിയ [Chapter Name] എന്ന പാഠഭാഗത്ത് അവതരിപ്പിച്ചിരിക്കുന്ന വളരെ ചിന്തോദ്ദീപകമായ (thought-provoking) ഒരു ആശയമാണ് ചോദ്യത്തിൽ നൽകിയിട്ടുള്ളത്. മനുഷ്യജീവിതവുമായി ബന്ധപ്പെട്ട വലിയൊരു സത്യമാണ് ഈ പ്രസ്താവനയിലൂടെ അനാവരണം ചെയ്യപ്പെടുന്നത്.")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 2: Context in the Text (പാഠഭാഗവുമായുള്ള ബന്ധം)</h4>
            <p className="mt-1">പാഠഭാഗത്ത് {renderWithVariables("[Briefly explain the situation in the story/poem where this idea comes up in 3-4 sentences]")}. ഈ ഒരു സാഹചര്യത്തിലാണ് ഇത്തരമൊരു ആശയത്തിന് വലിയ പ്രാധാന്യം കൈവരുന്നത്. കഥാപാത്രങ്ങളുടെ അനുഭവങ്ങളിലൂടെ ഗ്രന്ഥകാരൻ ഈ വിഷയം വളരെ വ്യക്തമായി വായനക്കാരിലേക്ക് എത്തിക്കുന്നു.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 3: Contemporary Relevance (കാലികപ്രസക്തി - VERY IMPORTANT FOR ESSAYS)</h4>
            <p className="mt-1">ഈ ആശയത്തിന് ഇന്നത്തെ സമൂഹത്തിൽ വലിയ <span className="underline decoration-brand-accent/50">കാലികപ്രസക്തിയുണ്ട്</span> (contemporary relevance). {renderWithVariables("[Write 2-3 sentences about how this relates to today's world. E.g., ഇന്നത്തെ സ്വാർത്ഥമായ ലോകത്ത് ഇതിന് വലിയ സ്ഥാനമുണ്ട്...]")}. മനുഷ്യൻ മനുഷ്യനെ തിരിച്ചറിയേണ്ടതിന്റെയും, മൂല്യങ്ങൾ കാത്തുസൂക്ഷിക്കേണ്ടതിന്റെയും ആവശ്യകത ഇത് നമ്മെ ഓർമ്മിപ്പിക്കുന്നു.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 4: Conclusion (ഉപസംഹാരം)</h4>
            <p className="mt-1">ചുരുക്കത്തിൽ, കേവലം ഒരു പാഠഭാഗം എന്നതിനപ്പുറം നമ്മുടെ ജീവിതത്തിലേക്കും സമൂഹത്തിലേക്കും പിടിച്ച വലിയൊരു കണ്ണാടിയാണ് ഈ പ്രസ്താവന. വായനക്കാരിൽ വലിയൊരു തിരിച്ചറിവ് ഉണ്ടാക്കാൻ ലേഖകന്റെ/കവിയുടെ ഈ വാക്കുകൾക്ക് സാധിക്കുന്നുണ്ട്.</p>
          </div>
        </div>
      </div>

      {/* Format 4 */}
      <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">Format 4: വാർത്താക്കുറിപ്പ് / റിപ്പോർട്ട് (News Report)</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">Use this when asked to prepare a news report based on an event or incident in a chapter.</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Title (തലക്കെട്ട്):</h4>
            <p className="mt-1 font-bold underline">{renderWithVariables("[ആകർഷകമായ ഒരു തലക്കെട്ട് നൽകുക - Catchy Title related to the event, e.g., നാടിനെ നടുക്കി വൻ ദുരന്തം / ശ്രദ്ധേയമായി വാർഷികാഘോഷം]")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Dateline (സ്ഥലവും തിയ്യതിയും):</h4>
            <p className="mt-1">{renderWithVariables("[സ്ഥലം], [തിയ്യതി]:")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 1: Lead Paragraph (ആമുഖം - What, When, Where)</h4>
            <p className="mt-1">കഴിഞ്ഞ ദിവസം {renderWithVariables("[സ്ഥലം/ഗ്രാമം]")}-ൽ നടന്ന {renderWithVariables("[സംഭവം - e.g., അപകടം / ആഘോഷം / പ്രക്ഷോഭം]")} ഏവരുടെയും ശ്രദ്ധ പിടിച്ചുപറ്റി. {renderWithVariables("[സമയം/ദിവസം]")}-നാണ് നാടിനെ നടുക്കിയ / നാടിന് അഭിമാനമായ ഈ സംഭവം അരങ്ങേറിയത്.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 2: Detailed Account (വിശദീകരണം - How & Why)</h4>
            <p className="mt-1">{renderWithVariables("[സംഭവത്തിന്റെ പ്രധാന വിശദാംശങ്ങൾ 3-4 വാക്യങ്ങളിൽ പാഠഭാഗത്തെ അടിസ്ഥാനമാക്കി എഴുതുക]")}. അപ്രതീക്ഷിതമായി ഉണ്ടായ ഈ സംഭവത്തിൽ {renderWithVariables("[പ്രധാന വ്യക്തി/കഥാപാത്രം]")}-ന്റെ ഇടപെടൽ വളരെ നിർണ്ണായകമായിരുന്നു. ഇതിന് പിന്നിലെ പ്രധാന കാരണം {renderWithVariables("[കാരണം ചുരുക്കത്തിൽ]")} ആണെന്നാണ് പ്രാഥമിക നിഗമനം. ദൃക്സാക്ഷികളുടെ അഭിപ്രായത്തിൽ സംഭവം വളരെ ഭയാനകമായിരുന്നു / ആവേശകരമായിരുന്നു.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 3: Conclusion / Current Situation (സമാപനം)</h4>
            <p className="mt-1">സംഭവമറിഞ്ഞ് നിരവധി ആളുകൾ സ്ഥലത്ത് തടിച്ചുകൂടിയിരുന്നു. അധികാരികൾ ഉടൻ തന്നെ ഇടപെടുകയും ആവശ്യമായ തുടർനടപടികൾ സ്വീകരിക്കുകയും ചെയ്തു. ഈ വിഷയം പ്രദേശവാസികൾക്കിടയിൽ വലിയ ചർച്ചാവിഷയമായിരിക്കുകയാണ്.</p>
          </div>
        </div>
      </div>

      {/* Pro-Tips */}
      <div className="bg-brand-teal/10 dark:bg-brand-teal/20 p-6 rounded-xl border border-brand-teal/20 dark:border-brand-teal/30">
        <h3 className="text-xl font-bold text-brand-teal dark:text-brand-teal mb-4">Pro-Tips for SSLC Malayalam II:</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li><strong>Always remember the Author/Poet's names:</strong> Linking the work to the author in the very first sentence guarantees a good first impression.</li>
          <li><strong>Underline Key Words:</strong> When using strong Malayalam words like <span className="underline decoration-brand-teal/50">കാലികപ്രസക്തി</span> (contemporary relevance), <span className="underline decoration-brand-teal/50">ജീവസ്സുറ്റ</span> (lifelike), or <span className="underline decoration-brand-teal/50">രചനാവൈഭവം</span> (writing excellence), underline them lightly with a pencil.</li>
          <li><strong>Paragraphing:</strong> Never write an essay as a single block of text. Always divide it into the paragraphs shown above.</li>
          <li><strong>Formatting for Reports:</strong> For reports (വാർത്താക്കുറിപ്പ്), always remember to write the title in bold (or underline it) and include the Place and Date at the beginning.</li>
          <li><strong>Time Management:</strong> For an 8-mark question, aim for 1.5 to 2 pages depending on your handwriting size. Don't spend more than 15-18 minutes on one essay.</li>
        </ul>
      </div>

    </div>
  );
}
