import { Lesson } from './curriculum';

export const plusOneAccountancyUnit8: Lesson = {
  id: "acc-11-8",
  title: {
    en: "Chapter 8: Bill of Exchange",
    ml: "അധ്യായം 8: ബിൽ ഓഫ് എക്സ്ചേഞ്ച് (വിനിമയ ബില്ലുകൾ)"
  },
  estimated_time_mins: 60,
  learning_objectives: [
    { en: "State the meaning of bill of exchange and promissory note.", ml: "ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെയും പ്രോമിസറി നോട്ടിന്റെയും അർത്ഥം വ്യക്തമാക്കാൻ." },
    { en: "Distinguish between a bill of exchange and a promissory note.", ml: "ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസം മനസ്സിലാക്കാൻ." },
    { en: "Explain the advantages of bills of exchange.", ml: "ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ ഗുണങ്ങൾ വിശദീകരിക്കാൻ." },
    { en: "Calculate the due date of a bill of exchange.", ml: "ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ കാലാവധി തീരുന്ന തിയ്യതി കണക്കാക്കാൻ." },
    { en: "Record the transactions relating to a bill of exchange.", ml: "ബിൽ ഓഫ് എക്സ്ചേഞ്ചുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ." },
    { en: "Explain the concepts of dishonour, renewal, and retiring of a bill.", ml: "ബിൽ മടങ്ങൽ, പുതുക്കൽ, കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ എന്നീ ആശയങ്ങൾ വിശദീകരിക്കാൻ." },
    { en: "Record the transactions relating to dishonour, renewal, and retirement of a bill.", ml: "ബിൽ മടങ്ങൽ, പുതുക്കൽ, കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ എന്നിവയുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ." }
  ],
  content: {
    intro: {
      en: "This chapter covers the Bill of Exchange, its features, advantages, and accounting treatment including dishonour, renewal, and retirement.",
      ml: "ബിൽ ഓഫ് എക്സ്ചേഞ്ച്, അതിന്റെ സവിശേഷതകൾ, ഗുണങ്ങൾ, കൂടാതെ ബിൽ മടങ്ങൽ, പുതുക്കൽ, കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ എന്നിവയുൾപ്പെടെയുള്ള അക്കൗണ്ടിംഗ് രീതികൾ ഈ അധ്യായത്തിൽ ചർച്ച ചെയ്യുന്നു."
    },
    core: {
      en: "This unit explains the meaning, features, and parties of bills of exchange and promissory notes, along with their accounting treatment.",
      ml: "ബിൽ ഓഫ് എക്സ്ചേഞ്ച്, പ്രോമിസറി നോട്ട് എന്നിവയുടെ അർത്ഥം, സവിശേഷതകൾ, പാർട്ടികൾ എന്നിവയും അവയുടെ അക്കൗണ്ടിംഗ് രീതികളും ഈ യൂണിറ്റ് വിശദീകരിക്കുന്നു."
    },
    blocks: [
      { type: 'h2', en: '1. Chapter Overview', ml: '1. അധ്യായത്തിന്റെ അവലോകനം' },
      { type: 'ul', items: [
        { en: 'State the meaning of bill of exchange and promissory note.', ml: 'ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെയും പ്രോമിസറി നോട്ടിന്റെയും അർത്ഥം വ്യക്തമാക്കാൻ.' },
        { en: 'Distinguish between a bill of exchange and a promissory note.', ml: 'ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസം മനസ്സിലാക്കാൻ.' },
        { en: 'Explain the advantages of bills of exchange.', ml: 'ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ ഗുണങ്ങൾ വിശദീകരിക്കാൻ.' },
        { en: 'Calculate the due date of a bill of exchange.', ml: 'ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ കാലാവധി തീരുന്ന തിയ്യതി കണക്കാക്കാൻ.' },
        { en: 'Record the transactions relating to a bill of exchange.', ml: 'ബിൽ ഓഫ് എക്സ്ചേഞ്ചുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ.' },
        { en: 'Explain the concepts of dishonour, renewal, and retiring of a bill.', ml: 'ബിൽ മടങ്ങൽ, പുതുക്കൽ, കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ എന്നീ ആശയങ്ങൾ വിശദീകരിക്കാൻ.' },
        { en: 'Record the transactions relating to dishonour, renewal, and retirement of a bill.', ml: 'ബിൽ മടങ്ങൽ, പുതുക്കൽ, കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ എന്നിവയുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ.' }
      ] },
      { type: 'h2', en: '2. Detailed Concepts', ml: '2. വിശദമായ ആശയങ്ങൾ' },
      { type: 'h3', en: '4.1 Bill of Exchange', ml: '4.1 ബിൽ ഓഫ് എക്സ്ചേഞ്ച് (വിനിമയ ബിൽ)' },
      { type: 'p', en: 'According to the Negotiable Instruments Act 1881, a bill of exchange is defined as "an instrument in writing containing an unconditional order, signed by the maker, directing a certain person to pay a certain sum of money only to, or to the order of a certain person or to the bearer of the instrument".', ml: '1881-ലെ നെഗോഷ്യബിൾ ഇൻസ്ട്രുമെന്റ്സ് ആക്ട് അനുസരിച്ച്, "ഒരാൾ ഒപ്പിട്ട, വ്യക്തമാക്കപ്പെട്ട ഒരു വ്യക്തിക്ക് മാത്രമായോ, ആ വ്യക്തി പറയുന്ന ആൾക്കോ, അല്ലെങ്കിൽ ആ രേഖ കൈവശം വെച്ചിരിക്കുന്ന ആൾക്കോ ഒരു നിശ്ചിത തുക നൽകണമെന്ന് മറ്റൊരു വ്യക്തിയോട് നിർദ്ദേശിക്കുന്ന, വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണ്" ബിൽ ഓഫ് എക്സ്ചേഞ്ച്.' },
      { type: 'h3', en: 'Features of a Bill of Exchange:', ml: 'ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ സവിശേഷതകൾ:' },
      { type: 'ul', items: [
        { en: 'It must be in writing.', ml: 'ഇതൊരു രേഖാമൂലമുള്ള പ്രമാണമായിരിക്കണം.' },
        { en: 'It is an order to make payment.', ml: 'ഇതൊരു പേയ്മെന്റ് നടത്താനുള്ള ഉത്തരവാണ്.' },
        { en: 'The order must be unconditional.', ml: 'ഈ ഉത്തരവിന് വ്യവസ്ഥകൾ പാടില്ല.' },
        { en: 'The maker of the bill must sign it.', ml: 'ബിൽ തയ്യാറാക്കുന്നയാൾ അതിൽ ഒപ്പുവെച്ചിരിക്കണം.' },
        { en: 'The payment must be of a certain sum of money.', ml: 'നൽകേണ്ട തുക കൃത്യമായിരിക്കണം.' },
        { en: 'The date of payment must be fixed.', ml: 'പണം നൽകേണ്ട തിയ്യതി നിശ്ചയിച്ചിരിക്കണം.' },
        { en: 'It must be accepted by the drawee.', ml: 'പണം നൽകേണ്ടയാൾ ഇത് അംഗീകരിച്ചിരിക്കണം (അക്സെപ്റ്റ് ചെയ്യണം).' }
      ] },
      { type: 'h3', en: 'Parties to a Bill of Exchange:', ml: 'ബിൽ ഓഫ് എക്സ്ചേഞ്ചിലെ പാർട്ടികൾ:' },
      { type: 'p', en: 'There are three parties involved in a bill of exchange:', ml: 'ബിൽ ഓഫ് എക്സ്ചേഞ്ചിൽ മൂന്ന് പാർട്ടികളാണ് ഉൾപ്പെട്ടിരിക്കുന്നത്:' },
      { type: 'ul', items: [
        { en: '**Drawer:** The person who writes the bill (usually the seller/creditor).', ml: '**ഡ്രോയർ:** ബിൽ എഴുതുന്ന വ്യക്തി (സാധാരണയായി വിൽപ്പനക്കാരൻ/കടപ്പറ്റുകാരൻ).' },
        { en: '**Drawee:** The person on whom the bill is drawn and who accepts it (usually the buyer/debtor).', ml: '**ഡ്രോയി:** ആർക്കാണോ ബിൽ എഴുതുന്നത്, അതുപോലെ അത് അംഗീകരിക്കുന്ന വ്യക്തി (സാധാരണയായി വാങ്ങുന്നയാൾ/കടക്കാരൻ).' },
        { en: '**Payee:** The person to whom the payment is to be made.', ml: '**പെയ്യി:** ആർക്കാണോ പണം ലഭിക്കേണ്ടത് ആ വ്യക്തി.' }
      ] },
      { type: 'h3', en: '4.2 Promissory Note', ml: '4.2 പ്രോമിസറി നോട്ട്' },
      { type: 'p', en: 'According to the Negotiable Instruments Act 1881, a promissory note is defined as "an instrument in writing (not being a bank note or a currency note), containing an unconditional undertaking signed by the maker, to pay a certain sum of money only to or to the order of a certain person, or to the bearer of the instrument".', ml: '1881-ലെ നെഗോഷ്യബിൾ ഇൻസ്ട്രുമെന്റ്സ് ആക്ട് അനുസരിച്ച്, "ഒരാൾ ഒപ്പിട്ട, വ്യക്തമാക്കപ്പെട്ട ഒരു വ്യക്തിക്ക് മാത്രമായോ, ആ വ്യക്തി പറയുന്ന ആൾക്കോ, അല്ലെങ്കിൽ ആ രേഖ കൈവശം വെച്ചിരിക്കുന്ന ആൾക്കോ ഒരു നിശ്ചിത തുക നൽകാമെന്ന വ്യവസ്ഥകളില്ലാത്ത വാഗ്ദാനം അടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണ്" പ്രോമിസറി നോട്ട്.' },
      { type: 'h3', en: 'Features of a Promissory Note:', ml: 'പ്രോമിസറി നോട്ടിന്റെ സവിശേഷതകൾ:' },
      { type: 'ul', items: [
        { en: 'It must be in writing.', ml: 'ഇതൊരു രേഖാമൂലമുള്ള പ്രമാണമായിരിക്കണം.' },
        { en: 'It must contain an unconditional promise to pay.', ml: 'ഇതിൽ പണം നൽകാമെന്ന വ്യവസ്ഥകളില്ലാത്ത വാഗ്ദാനം ഉണ്ടായിരിക്കണം.' },
        { en: 'The sum payable must be certain.', ml: 'നൽകേണ്ട തുക കൃത്യമായിരിക്കണം.' },
        { en: 'It must be signed by the maker.', ml: 'ഇത് തയ്യാറാക്കുന്നയാൾ (കടക്കാരൻ) ഒപ്പുവെച്ചിരിക്കണം.' },
        { en: 'The payee must be certain.', ml: 'ആർക്കാണോ പണം നൽകേണ്ടത് ആ വ്യക്തി കൃത്യമായിരിക്കണം.' },
        { en: 'It must be properly stamped.', ml: 'ഇതിൽ സ്റ്റാമ്പ് പതിപ്പിച്ചിരിക്കണം.' }
      ] },
      { type: 'h3', en: 'Parties to a Promissory Note:', ml: 'പ്രോമിസറി നോട്ടിലെ പാർട്ടികൾ:' },
      { type: 'p', en: 'There are two parties involved in a promissory note:', ml: 'പ്രോമിസറി നോട്ടിൽ രണ്ട് പാർട്ടികളാണ് ഉൾപ്പെട്ടിരിക്കുന്നത്:' },
      { type: 'ul', items: [
        { en: '**Maker:** The person who makes the promise to pay (the debtor).', ml: '**മേക്കർ:** പണം നൽകാമെന്ന് വാഗ്ദാനം ചെയ്യുന്ന വ്യക്തി (കടക്കാരൻ).' },
        { en: '**Payee:** The person to whom the payment is to be made (the creditor).', ml: '**പെയ്യി:** ആർക്കാണോ പണം ലഭിക്കേണ്ടത് ആ വ്യക്തി (കടപ്പറ്റുകാരൻ).' }
      ] },
      { type: 'h3', en: '4.3 Differences between Bill of Exchange and Promissory Note', ml: '4.3 ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [
          { en: 'Basis', ml: 'അടിസ്ഥാനം' },
          { en: 'Bill of Exchange', ml: 'ബിൽ ഓഫ് എക്സ്ചേഞ്ച്' },
          { en: 'Promissory Note', ml: 'പ്രോമിസറി നോട്ട്' }
        ],
        rows: [
          [
            { en: 'Meaning', ml: 'അർത്ഥം' },
            { en: 'It is an order to pay.', ml: 'ഇതൊരു പണം നൽകാനുള്ള ഉത്തരവാണ്.' },
            { en: 'It is a promise to pay.', ml: 'ഇതൊരു പണം നൽകാനുള്ള വാഗ്ദാനമാണ്.' }
          ],
          [
            { en: 'Parties', ml: 'പാർട്ടികൾ' },
            { en: 'There are three parties (Drawer, Drawee, Payee).', ml: 'മൂന്ന് പാർട്ടികളുണ്ട് (ഡ്രോയർ, ഡ്രോയി, പെയ്യി).' },
            { en: 'There are two parties (Maker, Payee).', ml: 'രണ്ട് പാർട്ടികളുണ്ട് (മേക്കർ, പെയ്യി).' }
          ],
          [
            { en: 'Maker', ml: 'തയ്യാറാക്കുന്നയാൾ' },
            { en: 'It is drawn by the creditor.', ml: 'ഇത് തയ്യാറാക്കുന്നത് കടപ്പറ്റുകാരനാണ്.' },
            { en: 'It is drawn by the debtor.', ml: 'ഇത് തയ്യാറാക്കുന്നത് കടക്കാരനാണ്.' }
          ],
          [
            { en: 'Acceptance', ml: 'അംഗീകാരം' },
            { en: 'It requires acceptance by the drawee.', ml: 'ഇതിന് ഡ്രോയിയുടെ അംഗീകാരം ആവശ്യമാണ്.' },
            { en: 'It does not require any acceptance.', ml: 'ഇതിന് പ്രത്യേകം അംഗീകാരം ആവശ്യമില്ല.' }
          ],
          [
            { en: 'Liability', ml: 'ബാധ്യത' },
            { en: 'The liability of the drawer is secondary.', ml: 'ഡ്രോയറുടെ ബാധ്യത സെക്കൻഡറി ആണ്.' },
            { en: 'The liability of the maker is primary.', ml: 'മേക്കറുടെ ബാധ്യത പ്രൈമറി ആണ്.' }
          ]
        ]
      } },
      { type: 'h3', en: '4.4 Advantages of Bill of Exchange', ml: '4.4 ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ ഗുണങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Framework for relationships: It provides a legal framework for credit transactions.', ml: 'ബന്ധങ്ങൾക്കുള്ള ചട്ടക്കൂട്: കടമിടപാടുകൾക്ക് ഇതൊരു നിയമപരമായ ചട്ടക്കൂട് നൽകുന്നു.' },
        { en: 'Certainty of terms: The amount and date of payment are fixed.', ml: 'നിബന്ധനകളിലെ കൃത്യത: നൽകേണ്ട തുകയും തിയ്യതിയും ഇതിൽ കൃത്യമായിരിക്കും.' },
        { en: 'Convenient means of credit: It allows buyers to purchase goods on credit.', ml: 'കടത്തിനുള്ള സൗകര്യപ്രദമായ മാർഗ്ഗം: വാങ്ങുന്നവർക്ക് സാധനങ്ങൾ കടമായി വാങ്ങാൻ ഇത് സഹായിക്കുന്നു.' },
        { en: 'Source of finance: It can be discounted with a bank to get immediate cash.', ml: 'സാമ്പത്തിക സ്രോതസ്സ്: ബാങ്കിൽ നിന്ന് ഡിസ്കൗണ്ട് ചെയ്ത് പെട്ടെന്ന് പണം കണ്ടെത്താൻ ഇത് സഹായിക്കുന്നു.' },
        { en: 'Easy transferability: It can be easily transferred to another person by endorsement.', ml: 'എളുപ്പത്തിലുള്ള കൈമാറ്റം: എൻഡോഴ്സ്മെന്റ് വഴി ഇത് മറ്റൊരാൾക്ക് എളുപ്പത്തിൽ കൈമാറാം.' }
      ] },
      { type: 'h3', en: '4.5 Important Terms', ml: '4.5 പ്രധാന പദങ്ങൾ' },
      { type: 'ul', items: [
        { en: '**Maturity of Bill:** The date on which the payment of the bill becomes due.', ml: '**ബില്ലിന്റെ കാലാവധി (Maturity):** ബില്ലിലെ തുക നൽകേണ്ട തിയ്യതി.' },
        { en: '**Days of Grace:** Three extra days added to the period of the bill to find the maturity date.', ml: '**ഗ്രേസ് ദിനങ്ങൾ:** കാലാവധി തിയ്യതി കണക്കാക്കാൻ ബില്ലിന്റെ കാലയളവിനോടൊപ്പം ചേർക്കുന്ന മൂന്ന് അധിക ദിവസങ്ങൾ.' },
        { en: '**Endorsement:** Transferring the bill to another person by signing on the back of it.', ml: '**എൻഡോഴ്സ്മെന്റ്:** ബില്ലിന്റെ പുറകിൽ ഒപ്പിട്ടുകൊണ്ട് അത് മറ്റൊരാൾക്ക് കൈമാറുന്നത്.' },
        { en: '**Discounting of Bill:** Encashing the bill with a bank before its maturity date.', ml: '**ബില്ല് ഡിസ്കൗണ്ട് ചെയ്യൽ:** കാലാവധിക്ക് മുമ്പ് ബാങ്കിൽ നിന്ന് ബില്ല് പണമാക്കി മാറ്റുന്നത്.' },
        { en: '**Dishonour of Bill:** When the drawee fails to make the payment on the due date.', ml: '**ബിൽ മടങ്ങൽ (Dishonour):** കാലാവധി തിയ്യതിയിൽ ഡ്രോയി പണം നൽകുന്നതിൽ പരാജയപ്പെടുന്നത്.' },
        { en: '**Noting of Bill:** Recording the fact of dishonour by a Notary Public.', ml: '**നോട്ടിംഗ്:** ബിൽ മടങ്ങിയ വിവരം നോട്ടറി പബ്ലിക് മുഖേന രേഖപ്പെടുത്തുന്നത്.' },
        { en: '**Renewal of Bill:** Cancelling the old bill and drawing a new bill with interest for further time.', ml: '**ബിൽ പുതുക്കൽ (Renewal):** പഴയ ബിൽ റദ്ദാക്കി പലിശ സഹിതം പുതിയൊരു ബിൽ എഴുതുന്നത്.' },
        { en: '**Retiring of Bill:** Making the payment of a bill before its maturity date.', ml: '**ബിൽ റിട്ടയറിംഗ്:** കാലാവധിക്ക് മുമ്പ് തന്നെ ബില്ലിലെ തുക നൽകി തീർപ്പാക്കുന്നത്.' }
      ] },
      { type: 'h2', en: 'PRACTICE QUESTIONS', ml: 'പരിശീലന ചോദ്യങ്ങൾ' },
      { type: 'p', en: 'Q1. What is a Bill of Exchange?', ml: 'ചോദ്യം 1: ബിൽ ഓഫ് എക്സ്ചേഞ്ച് എന്നാൽ എന്ത്?' },
      { type: 'p', en: 'Answer: A bill of exchange is an unconditional order in writing, signed by the maker, directing a certain person to pay a certain sum of money.', ml: 'ഉത്തരം: ഒരാൾ ഒപ്പിട്ട, ഒരു നിശ്ചിത തുക നൽകണമെന്ന് മറ്റൊരു വ്യക്തിയോട് നിർദ്ദേശിക്കുന്ന, വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണ് ബിൽ ഓഫ് എക്സ്ചേഞ്ച്.' },
      { type: 'p', en: 'Q2. Who are the parties to a Bill of Exchange?', ml: 'ചോദ്യം 2: ബിൽ ഓഫ് എക്സ്ചേഞ്ചിലെ പാർട്ടികൾ ഏതെല്ലാം?' },
      { type: 'p', en: 'Answer: Drawer, Drawee, and Payee.', ml: 'ഉത്തരം: ഡ്രോയർ, ഡ്രോയി, പെയ്യി.' },
      { type: 'p', en: 'Q3. What is a Promissory Note?', ml: 'ചോദ്യം 3: പ്രോമിസറി നോട്ട് എന്നാൽ എന്ത്?' },
      { type: 'p', en: 'Answer: A promissory note is an unconditional undertaking in writing, signed by the maker, to pay a certain sum of money.', ml: 'ഉത്തരം: ഒരാൾ ഒപ്പിട്ട, ഒരു നിശ്ചിത തുക നൽകാമെന്ന വ്യവസ്ഥകളില്ലാത്ത വാഗ്ദാനം അടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണ് പ്രോമിസറി നോട്ട്.' },
      { type: 'p', en: 'Q4. What are Days of Grace?', ml: 'ചോദ്യം 4: ഗ്രേസ് ദിനങ്ങൾ എന്നാൽ എന്ത്?' },
      { type: 'p', en: 'Answer: Three extra days added to the period of the bill to calculate the maturity date are called days of grace.', ml: 'ഉത്തരം: ബില്ലിന്റെ കാലാവധി തിയ്യതി കണക്കാക്കാൻ ബില്ലിന്റെ കാലയളവിനോടൊപ്പം ചേർക്കുന്ന മൂന്ന് അധിക ദിവസങ്ങളെയാണ് ഗ്രേസ് ദിനങ്ങൾ എന്ന് വിളിക്കുന്നത്.' },
      { type: 'p', en: 'Q5. What is Endorsement of a bill?', ml: 'ചോദ്യം 5: ബില്ലിന്റെ എൻഡോഴ്സ്മെന്റ് എന്നാൽ എന്ത്?' },
      { type: 'p', en: 'Answer: Endorsement means transferring the bill to another person by signing on the back of it.', ml: 'ഉത്തരം: ബില്ലിന്റെ പുറകിൽ ഒപ്പിട്ടുകൊണ്ട് അത് മറ്റൊരാൾക്ക് കൈമാറുന്നതിനെ എൻഡോഴ്സ്മെന്റ് എന്ന് വിളിക്കുന്നു.' }
    ]
  },
  glossary: [],
  quiz: []
};
