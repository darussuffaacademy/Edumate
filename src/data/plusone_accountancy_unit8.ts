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
      en: `
# 📘 Chapter 8: Bill of Exchange
# 📘 അധ്യായം 8: ബിൽ ഓഫ് എക്സ്ചേഞ്ച് (വിനിമയ ബില്ലുകൾ)

---

## 1️⃣ Chapter Overview
## 1️⃣ അധ്യായത്തിന്റെ അവലോകനം

*   **🎯 Learning Objectives**:
*   **🎯 പഠന ലക്ഷ്യങ്ങൾ**:
    *   State the meaning of bill of exchange and promissory note.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെയും പ്രോമിസറി നോട്ടിന്റെയും അർത്ഥം വ്യക്തമാക്കാൻ.
    *   Distinguish between a bill of exchange and a promissory note.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസം മനസ്സിലാക്കാൻ.
    *   Explain the advantages of bills of exchange.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ ഗുണങ്ങൾ വിശദീകരിക്കാൻ.
    *   Calculate the due date of a bill of exchange.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ കാലാവധി തീരുന്ന തിയ്യതി കണക്കാക്കാൻ.
    *   Record the transactions relating to a bill of exchange.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ.
    *   Explain the concepts of dishonour, renewal, and retiring of a bill.
    *   ബിൽ മടങ്ങൽ, പുതുക്കൽ, കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ എന്നീ ആശയങ്ങൾ വിശദീകരിക്കാൻ.
    *   Record the transactions relating to dishonour, renewal, and retirement of a bill.
    *   ബിൽ മടങ്ങൽ, പുതുക്കൽ, കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ എന്നിവയുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ.
*   **🔑 Key Concepts**: Meaning of Bill of Exchange, Meaning of Promissory Note, Differences between Bill of Exchange and Promissory Note, Advantages of Bill of Exchange, Maturity of Bill and Days of Grace, Various uses of a Bill of Exchange, Dishonour of a Bill, Renewal of a Bill, Retiring of a Bill.
*   **🔑 പ്രധാന ആശയങ്ങൾ**: ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ അർത്ഥം, പ്രോമിസറി നോട്ടിന്റെ അർത്ഥം, ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസങ്ങൾ, ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ ഗുണങ്ങൾ, ബില്ലിന്റെ കാലാവധിയും ഗ്രേസ് ദിനങ്ങളും, ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ വിവിധ ഉപയോഗങ്ങൾ, ബിൽ മടങ്ങൽ (ഡിസോണർ), ബിൽ പുതുക്കൽ, ബിൽ കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ.

---

## 2️⃣ Detailed Concepts
## 2️⃣ വിശദമായ ആശയങ്ങൾ

### 4.1 Bill of Exchange
### 4.1 ബിൽ ഓഫ് എക്സ്ചേഞ്ച് (വിനിമയ ബിൽ)

According to the Negotiable Instruments Act 1881, a bill of exchange is defined as "an instrument in writing containing an unconditional order, signed by the maker, directing a certain person to pay a certain sum of money only to, or to the order of a certain person or to the bearer of the instrument".
1881-ലെ നെഗോഷ്യബിൾ ഇൻസ്ട്രുമെന്റ്സ് ആക്ട് അനുസരിച്ച്, "ഒരാൾ ഒപ്പിട്ട, വ്യക്തമാക്കപ്പെട്ട ഒരു വ്യക്തിക്ക് മാത്രമായോ, ആ വ്യക്തി പറയുന്ന ആൾക്കോ, അല്ലെങ്കിൽ ആ രേഖ കൈവശം വെച്ചിരിക്കുന്ന ആൾക്കോ ഒരു നിശ്ചിത തുക നൽകണമെന്ന് മറ്റൊരു വ്യക്തിയോട് നിർദ്ദേശിക്കുന്ന, വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണ്" ബിൽ ഓഫ് എക്സ്ചേഞ്ച്.

**Features of a Bill of Exchange:**
**ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ സവിശേഷതകൾ:**
*   It must be in writing.
*   ഇതൊരു രേഖാമൂലമുള്ള പ്രമാണമായിരിക്കണം.
*   It is an order to make payment.
*   ഇതൊരു പേയ്മെന്റ് നടത്താനുള്ള ഉത്തരവാണ്.
*   The order must be unconditional.
*   ഈ ഉത്തരവിന് വ്യവസ്ഥകൾ പാടില്ല.
*   The maker of the bill must sign it.
*   ബിൽ തയ്യാറാക്കുന്നയാൾ അതിൽ ഒപ്പുവെച്ചിരിക്കണം.
*   The payment must be of a certain sum of money.
*   നൽകേണ്ട തുക കൃത്യമായിരിക്കണം.
*   The date of payment must be fixed.
*   പണം നൽകേണ്ട തിയ്യതി നിശ്ചയിച്ചിരിക്കണം.
*   It must be accepted by the drawee.
*   പണം നൽകേണ്ടയാൾ ഇത് അംഗീകരിച്ചിരിക്കണം (അക്സെപ്റ്റ് ചെയ്യണം).

**Parties to a Bill of Exchange:**
**ബിൽ ഓഫ് എക്സ്ചേഞ്ചിലെ പാർട്ടികൾ:**
There are three parties involved in a bill of exchange:
ബിൽ ഓഫ് എക്സ്ചേഞ്ചിൽ മൂന്ന് പാർട്ടികളാണ് ഉൾപ്പെട്ടിരിക്കുന്നത്:
*   **Drawer:** The person who writes the bill (usually the seller/creditor).
*   **ഡ്രോയർ:** ബിൽ എഴുതുന്ന വ്യക്തി (സാധാരണയായി വിൽപ്പനക്കാരൻ/കടപ്പറ്റുകാരൻ).
*   **Drawee:** The person on whom the bill is drawn and who accepts it (usually the buyer/debtor).
*   **ഡ്രോയി:** ആർക്കാണോ ബിൽ എഴുതുന്നത്, അതുപോലെ അത് അംഗീകരിക്കുന്ന വ്യക്തി (സാധാരണയായി വാങ്ങുന്നയാൾ/കടക്കാരൻ).
*   **Payee:** The person to whom the payment is to be made.
*   **പെയ്യി:** ആർക്കാണോ പണം ലഭിക്കേണ്ടത് ആ വ്യക്തി.

### 4.2 Promissory Note
### 4.2 പ്രോമിസറി നോട്ട്

According to the Negotiable Instruments Act 1881, a promissory note is defined as "an instrument in writing (not being a bank note or a currency note), containing an unconditional undertaking signed by the maker, to pay a certain sum of money only to or to the order of a certain person, or to the bearer of the instrument".
1881-ലെ നെഗോഷ്യബിൾ ഇൻസ്ട്രുമെന്റ്സ് ആക്ട് അനുസരിച്ച്, "ഒരാൾ ഒപ്പിട്ട, വ്യക്തമാക്കപ്പെട്ട ഒരു വ്യക്തിക്ക് മാത്രമായോ, ആ വ്യക്തി പറയുന്ന ആൾക്കോ, അല്ലെങ്കിൽ ആ രേഖ കൈവശം വെച്ചിരിക്കുന്ന ആൾക്കോ ഒരു നിശ്ചിത തുക നൽകാമെന്ന വ്യവസ്ഥകളില്ലാത്ത വാഗ്ദാനം അടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണ്" പ്രോമിസറി നോട്ട്.

**Features of a Promissory Note:**
**പ്രോമിസറി നോട്ടിന്റെ സവിശേഷതകൾ:**
*   It must be in writing.
*   ഇതൊരു രേഖാമൂലമുള്ള പ്രമാണമായിരിക്കണം.
*   It must contain an unconditional promise to pay.
*   ഇതിൽ വ്യവസ്ഥകളില്ലാത്ത പണം നൽകാനുള്ള വാഗ്ദാനം ഉണ്ടായിരിക്കണം.
*   The sum payable must be certain.
*   നൽകേണ്ട തുക കൃത്യമായിരിക്കണം.
*   It must be signed by the maker.
*   ബിൽ തയ്യാറാക്കുന്നയാൾ അതിൽ ഒപ്പുവെച്ചിരിക്കണം.
*   It is drawn by the debtor.
*   ഇത് തയ്യാറാക്കുന്നത് കടക്കാരനാണ്.
*   Acceptance is not required.
*   ഇതിന് അംഗീകാരം (അക്സെപ്റ്റൻസ്) ആവശ്യമില്ല.

**Parties to a Promissory Note:**
**പ്രോമിസറി നോട്ടിലെ പാർട്ടികൾ:**
There are two parties involved in a promissory note:
പ്രോമിസറി നോട്ടിൽ രണ്ട് പാർട്ടികളാണ് ഉൾപ്പെട്ടിരിക്കുന്നത്:
*   **Maker or Promisor:** The person who makes the promise to pay (usually the debtor).
*   **മേക്കർ അല്ലെങ്കിൽ പ്രോമിസർ:** പണം നൽകാമെന്ന് വാഗ്ദാനം ചെയ്യുന്ന വ്യക്തി (സാധാരണയായി കടക്കാരൻ).
*   **Payee or Promisee:** The person to whom the payment is to be made (usually the creditor).
*   **പെയ്യി അല്ലെങ്കിൽ പ്രോമിസി:** ആർക്കാണോ പണം ലഭിക്കേണ്ടത് ആ വ്യക്തി (സാധാരണയായി കടപ്പറ്റുകാരൻ).

**Difference between Bill of Exchange and Promissory Note**
**ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസം**

| Basis (അടിസ്ഥാനം) | Bill of Exchange (ബിൽ ഓഫ് എക്സ്ചേഞ്ച്) | Promissory Note (പ്രോമിസറി നോട്ട്) |
| :--- | :--- | :--- |
| **Drawer (തയ്യാറാക്കുന്നത്)** | Drawn by the creditor (വിൽപ്പനക്കാരൻ/കടപ്പറ്റുകാരൻ തയ്യാറാക്കുന്നു) | Drawn by the debtor (വാങ്ങുന്നയാൾ/കടക്കാരൻ തയ്യാറാക്കുന്നു) |
| **Nature (സ്വഭാവം)** | It contains an unconditional order to pay (വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവ്) | It contains an unconditional promise to pay (വ്യവസ്ഥകളില്ലാത്ത വാഗ്ദാനം) |
| **Acceptance (അംഗീകാരം)** | Needs acceptance by the drawee (ഡ്രോയിയുടെ അംഗീകാരം വേണം) | Does not need any acceptance (അംഗീകാരം ആവശ്യമില്ല) |
| **Parties (പാർട്ടികൾ)** | Three parties: Drawer, Drawee, Payee (മൂന്ന് പാർട്ടികൾ) | Two parties: Maker, Payee (രണ്ട് പാർട്ടികൾ) |

### 4.3 Advantages of Bills of Exchange
### 4.3 ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ ഗുണങ്ങൾ

*   **Framework for Relationships:** It provides a framework for settling obligations arising out of credit transactions.
*   **ബന്ധങ്ങൾക്കുള്ള ചട്ടക്കൂട്:** കടമിടപാടുകളിൽ നിന്നുണ്ടാകുന്ന ബാധ്യതകൾ തീർപ്പാക്കുന്നതിനുള്ള ഒരു ചട്ടക്കൂട് ഇത് നൽകുന്നു.
*   **Certainty of Terms:** The terms and conditions are clearly specified in writing.
*   **വ്യവസ്ഥകളിലെ കൃത്യത:** നിബന്ധനകളും വ്യവസ്ഥകളും രേഖാമൂലം വ്യക്തമായി പറഞ്ഞിരിക്കുന്നു.
*   **Convenient Means of Credit:** A buyer can buy goods on credit, and the seller gets a written promise of payment.
*   **വായ്പയ്ക്കുള്ള സൗകര്യപ്രദമായ മാർഗ്ഗം:** വാങ്ങുന്നയാൾക്ക് കടമായി സാധനങ്ങൾ വാങ്ങാം, വിൽപ്പനക്കാരന് പണം ലഭിക്കുമെന്ന രേഖാമൂലമുള്ള വാഗ്ദാനവും ലഭിക്കുന്നു.
*   **Discounting Facility:** The seller can get the bill discounted from the bank if money is needed before the due date.
*   **ഡിസ്കൗണ്ടിംഗ് സൗകര്യം:** കാലാവധിക്ക് മുമ്പ് പണം ആവശ്യമുണ്ടെങ്കിൽ വിൽപ്പനക്കാരന് ബാങ്കിൽ നിന്ന് ബിൽ ഡിസ്കൗണ്ട് ചെയ്യാം.
*   **Endorsement:** A bill of exchange can easily be transferred to another person to settle a debt.
*   **കൈമാറ്റം ചെയ്യൽ:** ഒരു കടം തീർപ്പാക്കാൻ ബിൽ ഓഫ് എക്സ്ചേഞ്ച് എളുപ്പത്തിൽ മറ്റൊരാൾക്ക് കൈമാറാം.

### 4.4 Maturity of Bill and Days of Grace
### 4.4 ബില്ലിന്റെ കാലാവധിയും ഗ്രേസ് ദിനങ്ങളും

*   **Maturity of a Bill:** Maturity refers to the date on which the bill becomes due for payment.
*   **ബില്ലിന്റെ കാലാവധി:** ബില്ലിലെ തുക നൽകേണ്ട തിയ്യതിയെയാണ് മെച്യൂരിറ്റി (കാലാവധി) എന്ന് പറയുന്നത്.
*   **Days of Grace:** The drawee is allowed three extra days after the due date to make the payment. These 3 days are called the days of grace.
*   **ഗ്രേസ് ദിനങ്ങൾ:** ബില്ലിലെ തുക നൽകാൻ ഡ്രോയിക്ക് കാലാവധിക്ക് ശേഷം മൂന്ന് ദിവസങ്ങൾ കൂടി അധികമായി നൽകുന്നു. ഈ 3 ദിവസങ്ങളെ ഗ്രേസ് ദിനങ്ങൾ എന്ന് വിളിക്കുന്നു.
*   **Calculation of Date of Maturity:** Date of Maturity = Date of Drawing + Period of Bill + 3 Days of Grace
*   **കാലാവധി തിയ്യതി കണക്കാക്കൽ:** കാലാവധി തിയ്യതി = ബിൽ തയ്യാറാക്കിയ തിയ്യതി + ബില്ലിന്റെ കാലാവധി + 3 ഗ്രേസ് ദിനങ്ങൾ

*Note: If the date of maturity falls on a public holiday (e.g., Sundays, National holidays), the bill becomes due on the preceding (previous) working day. If it is an emergency holiday, it becomes due on the succeeding (next) working day.*
*കുറിപ്പ്: കാലാവധി തിയ്യതി ഒരു പൊതു അവധി ദിവസമാണെങ്കിൽ (ഉദാ: ഞായറാഴ്ചകൾ, ദേശീയ അവധികൾ), ബിൽ നൽകേണ്ടത് തൊട്ടുമുമ്പുള്ള പ്രവൃത്തിദിവസമായിരിക്കും. അതൊരു അടിയന്തര അവധിയാണെങ്കിൽ, തൊട്ടടുത്ത പ്രവൃത്തിദിവസമായിരിക്കും.*

### 4.5 Various uses of a Bill of Exchange
### 4.5 ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ വിവിധ ഉപയോഗങ്ങൾ

When the drawer receives the accepted bill from the drawee, it is called a Bills Receivable (B/R). For the drawee, it is a Bills Payable (B/P). The drawer can deal with the B/R in four different ways:
ഡ്രോയർക്ക് ഡ്രോയിയിൽ നിന്ന് അംഗീകരിച്ച ബിൽ ലഭിക്കുമ്പോൾ അതിനെ ബിൽസ് റിസീവബിൾ (B/R) എന്ന് വിളിക്കുന്നു. ഡ്രോയിക്ക് അത് ബിൽസ് പേയബിൾ (B/P) ആണ്. ഡ്രോയർക്ക് B/R നാല് വ്യത്യസ്ത രീതികളിൽ ഉപയോഗിക്കാം:

1.  **Retaining the bill till maturity:** Keeping the bill with himself until the due date.
1.  **കാലാവധി വരെ ബിൽ സൂക്ഷിക്കൽ:** കാലാവധി തീരുന്നതുവരെ ബിൽ സ്വന്തം കൈവശം വെക്കുക.
2.  **Discounting the bill with the bank:** Surrendering the bill to the bank before maturity to get cash, less a discount charge.
2.  **ബാങ്കിൽ ബിൽ ഡിസ്കൗണ്ട് ചെയ്യൽ:** കാലാവധിക്ക് മുമ്പ് പണം ലഭിക്കുന്നതിനായി ബാങ്കിന് ബിൽ നൽകുക, ഇതിനായി ബാങ്ക് ഒരു ചെറിയ തുക കുറയ്ക്കും.
3.  **Endorsing the bill:** Transferring the bill to a creditor to settle a debt.
3.  **ബിൽ കൈമാറ്റം ചെയ്യൽ (എൻഡോഴ്സ്മെന്റ്):** ഒരു കടം തീർക്കാൻ ബിൽ കടപ്പറ്റുകാരന് കൈമാറുക.
4.  **Sending the bill for collection:** Sending the bill to the bank to collect the money on maturity.
4.  **കളക്ഷനായി ബിൽ അയക്കൽ:** കാലാവധിയെത്തുമ്പോൾ പണം ശേഖരിക്കാനായി ബാങ്കിലേക്ക് ബിൽ അയക്കുക.

### 4.6 Dishonour of a Bill
### 4.6 ബിൽ മടങ്ങൽ (ഡിസോണർ)

When the drawee fails to make the payment on the date of maturity, the bill is said to be dishonoured.
കാലാവധി തിയ്യതിയിൽ ഡ്രോയി പണം നൽകാൻ പരാജയപ്പെടുമ്പോൾ, ബിൽ മടങ്ങി എന്ന് പറയുന്നു.

*   **Noting Charges:** To legally prove that the bill was dishonoured, it is presented to a Notary Public. The fees paid to the Notary Public for this service are called noting charges. Ultimately, these charges are borne by the drawee.
*   **നോട്ടിംഗ് ചാർജ്:** ബിൽ മടങ്ങിയെന്ന് നിയമപരമായി തെളിയിക്കാൻ, അതൊരു നോട്ടറി പബ്ലിക്കിന് മുന്നിൽ ഹാജരാക്കുന്നു. ഈ സേവനത്തിനായി നോട്ടറി പബ്ലിക്കിന് നൽകുന്ന ഫീസിനെ നോട്ടിംഗ് ചാർജ് എന്ന് വിളിക്കുന്നു. ആത്യന്തികമായി ഈ തുക ഡ്രോയിയാണ് നൽകേണ്ടത്.

### 4.7 Renewal of a Bill
### 4.7 ബിൽ പുതുക്കൽ

Sometimes, the drawee is unable to pay the bill on maturity and requests the drawer to cancel the old bill and draw a new one with an extended time. This process is called renewal of a bill.
ചിലപ്പോൾ ഡ്രോയിക്ക് കാലാവധിക്ക് പണം നൽകാൻ കഴിയാതെ വരികയും, പഴയ ബിൽ റദ്ദാക്കി കാലാവധി നീട്ടിയ പുതിയ ബിൽ തയ്യാറാക്കാൻ ഡ്രോയറോട് ആവശ്യപ്പെടുകയും ചെയ്യുന്നു. ഈ പ്രക്രിയയെ ബിൽ പുതുക്കൽ എന്ന് വിളിക്കുന്നു.

The drawer usually charges interest for the extended period.
നീട്ടിനൽകിയ കാലയളവിനായി ഡ്രോയർ സാധാരണയായി പലിശ ഈടാക്കുന്നു.

### 4.8 Retiring a Bill
### 4.8 ബിൽ കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ

When the drawee makes the payment of the bill before its due date, it is called retiring the bill.
ഡ്രോയി കാലാവധി തിയ്യതിക്ക് മുമ്പ് തന്നെ ബില്ലിലെ പണം നൽകുമ്പോൾ അതിനെ ബിൽ റിട്ടയറിംഗ് (കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ) എന്ന് വിളിക്കുന്നു.

The drawer usually allows a discount called 'rebate' to the drawee for early payment.
നേരത്തെ പണം നൽകിയതിന് ഡ്രോയർ സാധാരണയായി ഡ്രോയിക്ക് 'റിബേറ്റ്' എന്ന് വിളിക്കുന്ന ഒരു കിഴിവ് അനുവദിക്കുന്നു.

---

## 3️⃣ Accounting Formats
## 3️⃣ അക്കൗണ്ടിംഗ് ഫോർമാറ്റുകൾ

**Journal Format (ജേർണൽ ഫോർമാറ്റ്)**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. (എൽ.എഫ്) | Debit Amount (Rs.) (ഡെബിറ്റ് തുക) | Credit Amount (Rs.) (ക്രെഡിറ്റ് തുക) |
| :--- | :--- | :--- | :--- | :--- |
| | | | | |

---

## 4️⃣ Worked Illustrations
## 4️⃣ പരിഹരിച്ച ഉദാഹരണങ്ങൾ

### Illustration 1: Retaining the bill till maturity
### ഉദാഹരണം 1: കാലാവധി വരെ ബിൽ സൂക്ഷിക്കൽ

**Transaction:** On Jan 1, 2017, Amit sold goods to Sumit for Rs. 10,000. Amit drew a bill on Sumit for 3 months, which Sumit accepted. On maturity, the bill was met. Pass journal entries in the books of Amit and Sumit.
**ഇടപാട്:** 2017 ജനുവരി 1-ന് അമിത് സുമിതിന് 10,000 രൂപയുടെ സാധനങ്ങൾ വിറ്റു. അമിത് സുമിതിന്മേൽ 3 മാസത്തെ കാലാവധിയിൽ ഒരു ബിൽ തയ്യാറാക്കുകയും സുമിത് അത് അംഗീകരിക്കുകയും ചെയ്തു. കാലാവധി പൂർത്തിയായപ്പോൾ ബില്ലിലെ തുക നൽകി. അമിതിന്റെയും സുമിതിന്റെയും പുസ്തകങ്ങളിൽ ജേർണൽ എൻട്രികൾ പാസാക്കുക.

**Solution (പരിഹാരം):**

**In the books of Amit (Drawer)**
**അമിതിന്റെ (ഡ്രോയർ) പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Jan 1 | Sumit's A/c Dr.<br>To Sales A/c<br>(Goods sold on credit) | | 10,000 | <br>10,000 |
| Jan 1 | Bills Receivable A/c Dr.<br>To Sumit's A/c<br>(Bill drawn and accepted) | | 10,000 | <br>10,000 |
| Apr 4 | Cash/Bank A/c Dr.<br>To Bills Receivable A/c<br>(Payment received on maturity) | | 10,000 | <br>10,000 |

**In the books of Sumit (Drawee)**
**സുമിതിന്റെ (ഡ്രോയി) പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Jan 1 | Purchases A/c Dr.<br>To Amit's A/c<br>(Goods purchased on credit) | | 10,000 | <br>10,000 |
| Jan 1 | Amit's A/c Dr.<br>To Bills Payable A/c<br>(Bill accepted) | | 10,000 | <br>10,000 |
| Apr 4 | Bills Payable A/c Dr.<br>To Cash/Bank A/c<br>(Bill paid on maturity) | | 10,000 | <br>10,000 |

### Illustration 2: Discounting the bill
### ഉദാഹരണം 2: ബാങ്കിൽ ബിൽ ഡിസ്കൗണ്ട് ചെയ്യൽ

**Transaction:** Suppose in Illustration 1, Amit discounted the bill with his bank on Jan 1 at 12% p.a.
**ഇടപാട്:** ഉദാഹരണം 1-ൽ, അമിത് ജനുവരി 1-ന് തന്നെ പ്രതിവർഷം 12% നിരക്കിൽ ബാങ്കിൽ ബിൽ ഡിസ്കൗണ്ട് ചെയ്തു എന്ന് കരുതുക.

**Solution (പരിഹാരം):**
Discount calculation = 10,000 × 12/100 × 3/12 = Rs. 300
ഡിസ്കൗണ്ട് കണക്കാക്കൽ = 10,000 × 12/100 × 3/12 = 300 രൂപ

**In the books of Amit (Drawer)**
**അമിതിന്റെ പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Jan 1 | Bank A/c Dr.<br>Discount A/c Dr.<br>To Bills Receivable A/c<br>(Bill discounted with bank) | | 9,700<br>300 | <br><br>10,000 |

*(Note: No entry is made in Amit's books on maturity because the bank will collect the money. Sumit's entries will be exactly the same as in Illustration 1).*
*(കുറിപ്പ്: കാലാവധി പൂർത്തിയാകുമ്പോൾ അമിതിന്റെ പുസ്തകത്തിൽ എൻട്രിയൊന്നും രേഖപ്പെടുത്തില്ല കാരണം ബാങ്കാണ് പണം വാങ്ങുന്നത്. സുമിതിന്റെ എൻട്രികൾ ഉദാഹരണം 1-ലേത് പോലെ തന്നെയായിരിക്കും).*

### Illustration 3: Dishonour of a bill
### ഉദാഹരണം 3: ബിൽ മടങ്ങൽ (ഡിസോണർ)

**Transaction:** Suppose the bill was retained by Amit till maturity, but Sumit failed to pay. Amit paid Rs. 100 as noting charges.
**ഇടപാട്:** അമിത് കാലാവധി വരെ ബിൽ കൈവശം വെച്ചു, എന്നാൽ സുമിത് പണം നൽകാൻ പരാജയപ്പെട്ടു എന്ന് കരുതുക. അമിത് നോട്ടിംഗ് ചാർജായി 100 രൂപ നൽകി.

**Solution (പരിഹാരം):**

**In the books of Amit (Drawer)**
**അമിതിന്റെ പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Apr 4 | Sumit's A/c Dr.<br>To Bills Receivable A/c<br>To Cash A/c (Noting charges)<br>(Bill dishonoured and noting charges paid) | | 10,100 | <br>10,000<br>100 |

**In the books of Sumit (Drawee)**
**സുമിതിന്റെ പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Apr 4 | Bills Payable A/c Dr.<br>Noting Charges A/c Dr.<br>To Amit's A/c<br>(Bill dishonoured and noting charges due) | | 10,000<br>100 | <br><br>10,100 |

---

## 5️⃣ Important Formulas and Rules
## 5️⃣ പ്രധാനപ്പെട്ട സൂത്രവാക്യങ്ങളും നിയമങ്ങളും

*   **Date of Maturity:** Date of Maturity = Date of drawing + Period in months/days + 3 days of grace
*   **കാലാവധി തിയ്യതി:** കാലാവധി തിയ്യതി = ബിൽ തയ്യാറാക്കിയ തിയ്യതി + മാസങ്ങളിലോ ദിവസങ്ങളിലോ ഉള്ള കാലാവധി + 3 ഗ്രേസ് ദിനങ്ങൾ
*   **Discount Calculation:** Discount = Amount of Bill × Rate/100 × Unexpired period/12 (or 365)
*   **ഡിസ്കൗണ്ട് കണക്കാക്കൽ:** ഡിസ്കൗണ്ട് = ബില്ലിലെ തുക × നിരക്ക്/100 × ബാക്കിയുള്ള കാലാവധി/12 (അല്ലെങ്കിൽ 365)

---

## 6️⃣ Summary Points
## 6️⃣ ചുരുക്കരൂപം

*   A Bill of Exchange is an unconditional order to pay, drawn by a creditor.
*   പണം നൽകാനുള്ള വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവാണ് ബിൽ ഓഫ് എക്സ്ചേഞ്ച്, ഇത് കടപ്പറ്റുകാരനാണ് തയ്യാറാക്കുന്നത്.
*   A Promissory Note is an unconditional promise to pay, drawn by a debtor.
*   പണം നൽകാമെന്ന വ്യവസ്ഥകളില്ലാത്ത വാഗ്ദാനമാണ് പ്രോമിസറി നോട്ട്, ഇത് കടക്കാരനാണ് തയ്യാറാക്കുന്നത്.
*   There are 3 parties in a bill of exchange: Drawer, Drawee, Payee.
*   ഒരു ബിൽ ഓഫ് എക്സ്ചേഞ്ചിൽ 3 പാർട്ടികളുണ്ട്: ഡ്രോയർ, ഡ്രോയി, പെയ്യി.
*   Days of Grace are 3 extra days added to the period of the bill to find the maturity date.
*   ബില്ലിന്റെ കാലാവധിയോടൊപ്പം കാലാവധി തിയ്യതി കണ്ടെത്താനായി ചേർക്കുന്ന അധിക 3 ദിവസങ്ങളാണ് ഗ്രേസ് ദിനങ്ങൾ.
*   A bill can be retained, discounted with a bank, endorsed, or sent for collection.
*   ഒരു ബിൽ കൈവശം വെക്കുകയോ, ബാങ്കിൽ ഡിസ്കൗണ്ട് ചെയ്യുകയോ, കൈമാറ്റം ചെയ്യുകയോ, അല്ലെങ്കിൽ പണം വാങ്ങാൻ അയക്കുകയോ ചെയ്യാം.
*   Dishonour means failure to pay the bill on maturity. Noting charges are paid to a Notary Public to record the dishonour.
*   കാലാവധി തിയ്യതിയിൽ ബില്ലിലെ തുക നൽകാൻ പരാജയപ്പെടുന്നതിനെയാണ് മടങ്ങൽ (ഡിസോണർ) എന്ന് പറയുന്നത്. ബിൽ മടങ്ങിയെന്ന് രേഖപ്പെടുത്താൻ നോട്ടറി പബ്ലിക്കിന് നൽകുന്ന തുകയാണ് നോട്ടിംഗ് ചാർജുകൾ.

---

## 7️⃣ Practice Questions (Exam-Oriented)
## 7️⃣ പരിശീലന ചോദ്യങ്ങൾ (പരീക്ഷാധിഷ്ഠിതം)

**Q1. Define a Bill of Exchange.**
**ചോദ്യം 1: ബിൽ ഓഫ് എക്സ്ചേഞ്ച് നിർവചിക്കുക.**
*   **Answer:** A bill of exchange is a written instrument containing an unconditional order, signed by the maker, directing a certain person to pay a certain sum of money only to, or to the order of a certain person, or to the bearer of the instrument.
*   **ഉത്തരം:** ഒരാൾ ഒപ്പിട്ട, വ്യക്തമാക്കപ്പെട്ട ഒരു വ്യക്തിക്ക് മാത്രമായോ, ആ വ്യക്തി പറയുന്ന ആൾക്കോ, അല്ലെങ്കിൽ ആ രേഖ കൈവശം വെച്ചിരിക്കുന്ന ആൾക്കോ ഒരു നിശ്ചിത തുക നൽകണമെന്ന് മറ്റൊരു വ്യക്തിയോട് നിർദ്ദേശിക്കുന്ന, വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണിത്.

**Q2. Who are the parties to a bill of exchange?**
**ചോദ്യം 2: ബിൽ ഓഫ് എക്സ്ചേഞ്ചിലെ പാർട്ടികൾ ആരൊക്കെയാണ്?**
*   **Answer:** Drawer (maker of the bill), Drawee (person who accepts the bill), and Payee (person receiving the payment).
*   **ഉത്തരം:** ഡ്രോയർ (ബിൽ തയ്യാറാക്കുന്നയാൾ), ഡ്രോയി (ബിൽ അംഗീകരിക്കുന്ന വ്യക്തി), പെയ്യി (പണം ലഭിക്കുന്ന വ്യക്തി).

**Q3. Distinguish between a bill of exchange and a promissory note based on 'Acceptance'.**
**ചോദ്യം 3: 'അംഗീകാരത്തിന്റെ (Acceptance)' അടിസ്ഥാനത്തിൽ ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസം എന്താണ്?**
*   **Answer:** A bill of exchange requires acceptance by the drawee to become valid, whereas a promissory note does not require any acceptance as it is made by the debtor himself.
*   **ഉത്തരം:** ഒരു ബിൽ ഓഫ് എക്സ്ചേഞ്ച് സാധുവാകണമെങ്കിൽ ഡ്രോയിയുടെ അംഗീകാരം ആവശ്യമാണ്, എന്നാൽ ഒരു പ്രോമിസറി നോട്ട് കടക്കാരൻ തന്നെ തയ്യാറാക്കുന്നതിനാൽ അതിന് യാതൊരു അംഗീകാരവും ആവശ്യമില്ല.

**Q4. Calculate the due date: A bill drawn on January 15 for 2 months.**
**ചോദ്യം 4: കാലാവധി തിയ്യതി കണക്കാക്കുക: ജനുവരി 15-ന് തയ്യാറാക്കിയ 2 മാസത്തെ കാലാവധിയുള്ള ബിൽ.**
*   **Answer:** Two months from Jan 15 is March 15. Adding 3 days of grace, the due date is March 18.
*   **ഉത്തരം:** ജനുവരി 15 മുതൽ രണ്ട് മാസം എന്നത് മാർച്ച് 15 ആണ്. ഇതിനൊപ്പം 3 ഗ്രേസ് ദിനങ്ങൾ കൂടി ചേർക്കുമ്പോൾ കാലാവധി തിയ്യതി മാർച്ച് 18 ആയിരിക്കും.

**Q5. What is meant by discounting a bill?**
**ചോദ്യം 5: ഒരു ബിൽ ഡിസ്കൗണ്ട് ചെയ്യുക എന്നാൽ എന്ത്?**
*   **Answer:** Discounting a bill means encashing the bill with a bank before its maturity date. The bank deducts a certain amount as a discount charge and pays the balance to the drawer.
*   **ഉത്തരം:** ഒരു ബിൽ അതിന്റെ കാലാവധിക്ക് മുമ്പ് ബാങ്കിൽ നൽകി പണമാക്കി മാറ്റുന്നതിനെയാണ് ബിൽ ഡിസ്കൗണ്ട് ചെയ്യുക എന്ന് പറയുന്നത്. ബാങ്ക് ഡിസ്കൗണ്ട് ചാർജായി ഒരു നിശ്ചിത തുക കുറച്ചതിന് ശേഷം ബാക്കി തുക ഡ്രോയർക്ക് നൽകുന്നു.

**Q6. What happens if the due date of a bill falls on a public holiday?**
**ചോദ്യം 6: ബില്ലിന്റെ കാലാവധി ഒരു പൊതു അവധി ദിവസമായാൽ എന്ത് സംഭവിക്കും?**
*   **Answer:** If the due date falls on a public holiday, the bill becomes due for payment on the preceding (previous) working day.
*   **ഉത്തരം:** കാലാവധി തിയ്യതി ഒരു പൊതു അവധി ദിവസമാണെങ്കിൽ, ബില്ലിലെ തുക നൽകേണ്ടത് തൊട്ടുമുമ്പുള്ള പ്രവൃത്തിദിവസമായിരിക്കും.

**Q7. Explain 'Noting Charges'.**
**ചോദ്യം 7: 'നോട്ടിംഗ് ചാർജുകൾ' വിശദീകരിക്കുക.**
*   **Answer:** When a bill is dishonoured, it is presented to a Notary Public to establish the fact of dishonour. The fee charged by the Notary Public for this service is called noting charges. It is ultimately borne by the drawee.
*   **ഉത്തരം:** ഒരു ബിൽ മടങ്ങുമ്പോൾ, ബിൽ മടങ്ങി എന്ന വസ്തുത സ്ഥാപിക്കുന്നതിനായി അത് നോട്ടറി പബ്ലിക്കിന് മുന്നിൽ ഹാജരാക്കുന്നു. ഈ സേവനത്തിനായി നോട്ടറി പബ്ലിക് ഈടാക്കുന്ന ഫീസിനെ നോട്ടിംഗ് ചാർജുകൾ എന്ന് വിളിക്കുന്നു. ആത്യന്തികമായി ഈ തുക നൽകേണ്ടത് ഡ്രോയിയാണ്.

**Q8. What is 'Renewal of a Bill'?**
**ചോദ്യം 8: 'ബിൽ പുതുക്കൽ' എന്നാൽ എന്ത്?**
*   **Answer:** When the drawee is unable to pay the bill on the due date, he may request the drawer to cancel the old bill and draw a new bill for an extended period. This process is called renewal.
*   **ഉത്തരം:** കാലാവധി തിയ്യതിയിൽ ബില്ലിലെ തുക നൽകാൻ ഡ്രോയിക്ക് കഴിയാതെ വരികയാണെങ്കിൽ, പഴയ ബിൽ റദ്ദാക്കി കൂടുതൽ സമയം അനുവദിച്ച് പുതിയ ബിൽ തയ്യാറാക്കാൻ അയാൾ ഡ്രോയറോട് ആവശ്യപ്പെട്ടേക്കാം. ഈ പ്രക്രിയയെ ബിൽ പുതുക്കൽ എന്ന് വിളിക്കുന്നു.

**Q9. Write the journal entry in the books of the Drawer when a bill is endorsed to a creditor.**
**ചോദ്യം 9: ഒരു കടപ്പറ്റുകാരന് ബിൽ കൈമാറ്റം (Endorse) ചെയ്യുമ്പോൾ ഡ്രോയറുടെ പുസ്തകത്തിലുള്ള ജേർണൽ എൻട്രി എഴുതുക.**
*   **Answer:**
    Creditor's A/c Dr.
    To Bills Receivable A/c
*   **ഉത്തരം:**
    കടപ്പറ്റുകാരന്റെ അക്കൗണ്ട് Dr.
    To ബിൽസ് റിസീവബിൾ അക്കൗണ്ട്

**Q10. What is 'Retiring a Bill'? What is the discount given called?**
**ചോദ്യം 10: 'ബിൽ റിട്ടയറിംഗ്' (കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ) എന്നാൽ എന്ത്? ഇതിന് നൽകുന്ന കിഴിവിനെ എന്ത് വിളിക്കുന്നു?**
*   **Answer:** Making the payment of a bill before its due date is called retiring a bill. The discount allowed by the drawer for early payment is called 'Rebate'.
*   **ഉത്തരം:** ഒരു ബില്ലിലെ തുക അതിന്റെ കാലാവധി തിയ്യതിക്ക് മുമ്പ് തന്നെ നൽകുന്നതിനെ ബിൽ റിട്ടയറിംഗ് എന്ന് വിളിക്കുന്നു. നേരത്തെ പണം നൽകിയതിന് ഡ്രോയർ അനുവദിക്കുന്ന കിഴിവിനെ 'റിബേറ്റ്' എന്ന് വിളിക്കുന്നു.
      \`,
      ml: \`
# 📘 Chapter 8: Bill of Exchange
# 📘 അധ്യായം 8: ബിൽ ഓഫ് എക്സ്ചേഞ്ച് (വിനിമയ ബില്ലുകൾ)

---

## 1️⃣ Chapter Overview
## 1️⃣ അധ്യായത്തിന്റെ അവലോകനം

*   **🎯 Learning Objectives**:
*   **🎯 പഠന ലക്ഷ്യങ്ങൾ**:
    *   State the meaning of bill of exchange and promissory note.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെയും പ്രോമിസറി നോട്ടിന്റെയും അർത്ഥം വ്യക്തമാക്കാൻ.
    *   Distinguish between a bill of exchange and a promissory note.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസം മനസ്സിലാക്കാൻ.
    *   Explain the advantages of bills of exchange.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ ഗുണങ്ങൾ വിശദീകരിക്കാൻ.
    *   Calculate the due date of a bill of exchange.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ കാലാവധി തീരുന്ന തിയ്യതി കണക്കാക്കാൻ.
    *   Record the transactions relating to a bill of exchange.
    *   ബിൽ ഓഫ് എക്സ്ചേഞ്ചുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ.
    *   Explain the concepts of dishonour, renewal, and retiring of a bill.
    *   ബിൽ മടങ്ങൽ, പുതുക്കൽ, കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ എന്നീ ആശയങ്ങൾ വിശദീകരിക്കാൻ.
    *   Record the transactions relating to dishonour, renewal, and retirement of a bill.
    *   ബിൽ മടങ്ങൽ, പുതുക്കൽ, കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ എന്നിവയുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ.
*   **🔑 Key Concepts**: Meaning of Bill of Exchange, Meaning of Promissory Note, Differences between Bill of Exchange and Promissory Note, Advantages of Bill of Exchange, Maturity of Bill and Days of Grace, Various uses of a Bill of Exchange, Dishonour of a Bill, Renewal of a Bill, Retiring of a Bill.
*   **🔑 പ്രധാന ആശയങ്ങൾ**: ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ അർത്ഥം, പ്രോമിസറി നോട്ടിന്റെ അർത്ഥം, ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസങ്ങൾ, ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ ഗുണങ്ങൾ, ബില്ലിന്റെ കാലാവധിയും ഗ്രേസ് ദിനങ്ങളും, ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ വിവിധ ഉപയോഗങ്ങൾ, ബിൽ മടങ്ങൽ (ഡിസോണർ), ബിൽ പുതുക്കൽ, ബിൽ കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ.

---

## 2️⃣ Detailed Concepts
## 2️⃣ വിശദമായ ആശയങ്ങൾ

### 4.1 Bill of Exchange
### 4.1 ബിൽ ഓഫ് എക്സ്ചേഞ്ച് (വിനിമയ ബിൽ)

According to the Negotiable Instruments Act 1881, a bill of exchange is defined as "an instrument in writing containing an unconditional order, signed by the maker, directing a certain person to pay a certain sum of money only to, or to the order of a certain person or to the bearer of the instrument".
1881-ലെ നെഗോഷ്യബിൾ ഇൻസ്ട്രുമെന്റ്സ് ആക്ട് അനുസരിച്ച്, "ഒരാൾ ഒപ്പിട്ട, വ്യക്തമാക്കപ്പെട്ട ഒരു വ്യക്തിക്ക് മാത്രമായോ, ആ വ്യക്തി പറയുന്ന ആൾക്കോ, അല്ലെങ്കിൽ ആ രേഖ കൈവശം വെച്ചിരിക്കുന്ന ആൾക്കോ ഒരു നിശ്ചിത തുക നൽകണമെന്ന് മറ്റൊരു വ്യക്തിയോട് നിർദ്ദേശിക്കുന്ന, വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണ്" ബിൽ ഓഫ് എക്സ്ചേഞ്ച്.

**Features of a Bill of Exchange:**
**ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ സവിശേഷതകൾ:**
*   It must be in writing.
*   ഇതൊരു രേഖാമൂലമുള്ള പ്രമാണമായിരിക്കണം.
*   It is an order to make payment.
*   ഇതൊരു പേയ്മെന്റ് നടത്താനുള്ള ഉത്തരവാണ്.
*   The order must be unconditional.
*   ഈ ഉത്തരവിന് വ്യവസ്ഥകൾ പാടില്ല.
*   The maker of the bill must sign it.
*   ബിൽ തയ്യാറാക്കുന്നയാൾ അതിൽ ഒപ്പുവെച്ചിരിക്കണം.
*   The payment must be of a certain sum of money.
*   നൽകേണ്ട തുക കൃത്യമായിരിക്കണം.
*   The date of payment must be fixed.
*   പണം നൽകേണ്ട തിയ്യതി നിശ്ചയിച്ചിരിക്കണം.
*   It must be accepted by the drawee.
*   പണം നൽകേണ്ടയാൾ ഇത് അംഗീകരിച്ചിരിക്കണം (അക്സെപ്റ്റ് ചെയ്യണം).

**Parties to a Bill of Exchange:**
**ബിൽ ഓഫ് എക്സ്ചേഞ്ചിലെ പാർട്ടികൾ:**
There are three parties involved in a bill of exchange:
ബിൽ ഓഫ് എക്സ്ചേഞ്ചിൽ മൂന്ന് പാർട്ടികളാണ് ഉൾപ്പെട്ടിരിക്കുന്നത്:
*   **Drawer:** The person who writes the bill (usually the seller/creditor).
*   **ഡ്രോയർ:** ബിൽ എഴുതുന്ന വ്യക്തി (സാധാരണയായി വിൽപ്പനക്കാരൻ/കടപ്പറ്റുകാരൻ).
*   **Drawee:** The person on whom the bill is drawn and who accepts it (usually the buyer/debtor).
*   **ഡ്രോയി:** ആർക്കാണോ ബിൽ എഴുതുന്നത്, അതുപോലെ അത് അംഗീകരിക്കുന്ന വ്യക്തി (സാധാരണയായി വാങ്ങുന്നയാൾ/കടക്കാരൻ).
*   **Payee:** The person to whom the payment is to be made.
*   **പെയ്യി:** ആർക്കാണോ പണം ലഭിക്കേണ്ടത് ആ വ്യക്തി.

### 4.2 Promissory Note
### 4.2 പ്രോമിസറി നോട്ട്

According to the Negotiable Instruments Act 1881, a promissory note is defined as "an instrument in writing (not being a bank note or a currency note), containing an unconditional undertaking signed by the maker, to pay a certain sum of money only to or to the order of a certain person, or to the bearer of the instrument".
1881-ലെ നെഗോഷ്യബിൾ ഇൻസ്ട്രുമെന്റ്സ് ആക്ട് അനുസരിച്ച്, "ഒരാൾ ഒപ്പിട്ട, വ്യക്തമാക്കപ്പെട്ട ഒരു വ്യക്തിക്ക് മാത്രമായോ, ആ വ്യക്തി പറയുന്ന ആൾക്കോ, അല്ലെങ്കിൽ ആ രേഖ കൈവശം വെച്ചിരിക്കുന്ന ആൾക്കോ ഒരു നിശ്ചിത തുക നൽകാമെന്ന വ്യവസ്ഥകളില്ലാത്ത വാഗ്ദാനം അടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണ്" പ്രോമിസറി നോട്ട്.

**Features of a Promissory Note:**
**പ്രോമിസറി നോട്ടിന്റെ സവിശേഷതകൾ:**
*   It must be in writing.
*   ഇതൊരു രേഖാമൂലമുള്ള പ്രമാണമായിരിക്കണം.
*   It must contain an unconditional promise to pay.
*   ഇതിൽ വ്യവസ്ഥകളില്ലാത്ത പണം നൽകാനുള്ള വാഗ്ദാനം ഉണ്ടായിരിക്കണം.
*   The sum payable must be certain.
*   നൽകേണ്ട തുക കൃത്യമായിരിക്കണം.
*   It must be signed by the maker.
*   ബിൽ തയ്യാറാക്കുന്നയാൾ അതിൽ ഒപ്പുവെച്ചിരിക്കണം.
*   It is drawn by the debtor.
*   ഇത് തയ്യാറാക്കുന്നത് കടക്കാരനാണ്.
*   Acceptance is not required.
*   ഇതിന് അംഗീകാരം (അക്സെപ്റ്റൻസ്) ആവശ്യമില്ല.

**Parties to a Promissory Note:**
**പ്രോമിസറി നോട്ടിലെ പാർട്ടികൾ:**
There are two parties involved in a promissory note:
പ്രോമിസറി നോട്ടിൽ രണ്ട് പാർട്ടികളാണ് ഉൾപ്പെട്ടിരിക്കുന്നത്:
*   **Maker or Promisor:** The person who makes the promise to pay (usually the debtor).
*   **മേക്കർ അല്ലെങ്കിൽ പ്രോമിസർ:** പണം നൽകാമെന്ന് വാഗ്ദാനം ചെയ്യുന്ന വ്യക്തി (സാധാരണയായി കടക്കാരൻ).
*   **Payee or Promisee:** The person to whom the payment is to be made (usually the creditor).
*   **പെയ്യി അല്ലെങ്കിൽ പ്രോമിസി:** ആർക്കാണോ പണം ലഭിക്കേണ്ടത് ആ വ്യക്തി (സാധാരണയായി കടപ്പറ്റുകാരൻ).

**Difference between Bill of Exchange and Promissory Note**
**ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസം**

| Basis (അടിസ്ഥാനം) | Bill of Exchange (ബിൽ ഓഫ് എക്സ്ചേഞ്ച്) | Promissory Note (പ്രോമിസറി നോട്ട്) |
| :--- | :--- | :--- |
| **Drawer (തയ്യാറാക്കുന്നത്)** | Drawn by the creditor (വിൽപ്പനക്കാരൻ/കടപ്പറ്റുകാരൻ തയ്യാറാക്കുന്നു) | Drawn by the debtor (വാങ്ങുന്നയാൾ/കടക്കാരൻ തയ്യാറാക്കുന്നു) |
| **Nature (സ്വഭാവം)** | It contains an unconditional order to pay (വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവ്) | It contains an unconditional promise to pay (വ്യവസ്ഥകളില്ലാത്ത വാഗ്ദാനം) |
| **Acceptance (അംഗീകാരം)** | Needs acceptance by the drawee (ഡ്രോയിയുടെ അംഗീകാരം വേണം) | Does not need any acceptance (അംഗീകാരം ആവശ്യമില്ല) |
| **Parties (പാർട്ടികൾ)** | Three parties: Drawer, Drawee, Payee (മൂന്ന് പാർട്ടികൾ) | Two parties: Maker, Payee (രണ്ട് പാർട്ടികൾ) |

### 4.3 Advantages of Bills of Exchange
### 4.3 ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ ഗുണങ്ങൾ

*   **Framework for Relationships:** It provides a framework for settling obligations arising out of credit transactions.
*   **ബന്ധങ്ങൾക്കുള്ള ചട്ടക്കൂട്:** കടമിടപാടുകളിൽ നിന്നുണ്ടാകുന്ന ബാധ്യതകൾ തീർപ്പാക്കുന്നതിനുള്ള ഒരു ചട്ടക്കൂട് ഇത് നൽകുന്നു.
*   **Certainty of Terms:** The terms and conditions are clearly specified in writing.
*   **വ്യവസ്ഥകളിലെ കൃത്യത:** നിബന്ധനകളും വ്യവസ്ഥകളും രേഖാമൂലം വ്യക്തമായി പറഞ്ഞിരിക്കുന്നു.
*   **Convenient Means of Credit:** A buyer can buy goods on credit, and the seller gets a written promise of payment.
*   **വായ്പയ്ക്കുള്ള സൗകര്യപ്രദമായ മാർഗ്ഗം:** വാങ്ങുന്നയാൾക്ക് കടമായി സാധനങ്ങൾ വാങ്ങാം, വിൽപ്പനക്കാരന് പണം ലഭിക്കുമെന്ന രേഖാമൂലമുള്ള വാഗ്ദാനവും ലഭിക്കുന്നു.
*   **Discounting Facility:** The seller can get the bill discounted from the bank if money is needed before the due date.
*   **ഡിസ്കൗണ്ടിംഗ് സൗകര്യം:** കാലാവധിക്ക് മുമ്പ് പണം ആവശ്യമുണ്ടെങ്കിൽ വിൽപ്പനക്കാരന് ബാങ്കിൽ നിന്ന് ബിൽ ഡിസ്കൗണ്ട് ചെയ്യാം.
*   **Endorsement:** A bill of exchange can easily be transferred to another person to settle a debt.
*   **കൈമാറ്റം ചെയ്യൽ:** ഒരു കടം തീർപ്പാക്കാൻ ബിൽ ഓഫ് എക്സ്ചേഞ്ച് എളുപ്പത്തിൽ മറ്റൊരാൾക്ക് കൈമാറാം.

### 4.4 Maturity of Bill and Days of Grace
### 4.4 ബില്ലിന്റെ കാലാവധിയും ഗ്രേസ് ദിനങ്ങളും

*   **Maturity of a Bill:** Maturity refers to the date on which the bill becomes due for payment.
*   **ബില്ലിന്റെ കാലാവധി:** ബില്ലിലെ തുക നൽകേണ്ട തിയ്യതിയെയാണ് മെച്യൂരിറ്റി (കാലാവധി) എന്ന് പറയുന്നത്.
*   **Days of Grace:** The drawee is allowed three extra days after the due date to make the payment. These 3 days are called the days of grace.
*   **ഗ്രേസ് ദിനങ്ങൾ:** ബില്ലിലെ തുക നൽകാൻ ഡ്രോയിക്ക് കാലാവധിക്ക് ശേഷം മൂന്ന് ദിവസങ്ങൾ കൂടി അധികമായി നൽകുന്നു. ഈ 3 ദിവസങ്ങളെ ഗ്രേസ് ദിനങ്ങൾ എന്ന് വിളിക്കുന്നു.
*   **Calculation of Date of Maturity:** Date of Maturity = Date of Drawing + Period of Bill + 3 Days of Grace
*   **കാലാവധി തിയ്യതി കണക്കാക്കൽ:** കാലാവധി തിയ്യതി = ബിൽ തയ്യാറാക്കിയ തിയ്യതി + ബില്ലിന്റെ കാലാവധി + 3 ഗ്രേസ് ദിനങ്ങൾ

*Note: If the date of maturity falls on a public holiday (e.g., Sundays, National holidays), the bill becomes due on the preceding (previous) working day. If it is an emergency holiday, it becomes due on the succeeding (next) working day.*
*കുറിപ്പ്: കാലാവധി തിയ്യതി ഒരു പൊതു അവധി ദിവസമാണെങ്കിൽ (ഉദാ: ഞായറാഴ്ചകൾ, ദേശീയ അവധികൾ), ബിൽ നൽകേണ്ടത് തൊട്ടുമുമ്പുള്ള പ്രവൃത്തിദിവസമായിരിക്കും. അതൊരു അടിയന്തര അവധിയാണെങ്കിൽ, തൊട്ടടുത്ത പ്രവൃത്തിദിവസമായിരിക്കും.*

### 4.5 Various uses of a Bill of Exchange
### 4.5 ബിൽ ഓഫ് എക്സ്ചേഞ്ചിന്റെ വിവിധ ഉപയോഗങ്ങൾ

When the drawer receives the accepted bill from the drawee, it is called a Bills Receivable (B/R). For the drawee, it is a Bills Payable (B/P). The drawer can deal with the B/R in four different ways:
ഡ്രോയർക്ക് ഡ്രോയിയിൽ നിന്ന് അംഗീകരിച്ച ബിൽ ലഭിക്കുമ്പോൾ അതിനെ ബിൽസ് റിസീവബിൾ (B/R) എന്ന് വിളിക്കുന്നു. ഡ്രോയിക്ക് അത് ബിൽസ് പേയബിൾ (B/P) ആണ്. ഡ്രോയർക്ക് B/R നാല് വ്യത്യസ്ത രീതികളിൽ ഉപയോഗിക്കാം:

1.  **Retaining the bill till maturity:** Keeping the bill with himself until the due date.
1.  **കാലാവധി വരെ ബിൽ സൂക്ഷിക്കൽ:** കാലാവധി തീരുന്നതുവരെ ബിൽ സ്വന്തം കൈവശം വെക്കുക.
2.  **Discounting the bill with the bank:** Surrendering the bill to the bank before maturity to get cash, less a discount charge.
2.  **ബാങ്കിൽ ബിൽ ഡിസ്കൗണ്ട് ചെയ്യൽ:** കാലാവധിക്ക് മുമ്പ് പണം ലഭിക്കുന്നതിനായി ബാങ്കിന് ബിൽ നൽകുക, ഇതിനായി ബാങ്ക് ഒരു ചെറിയ തുക കുറയ്ക്കും.
3.  **Endorsing the bill:** Transferring the bill to a creditor to settle a debt.
3.  **ബിൽ കൈമാറ്റം ചെയ്യൽ (എൻഡോഴ്സ്മെന്റ്):** ഒരു കടം തീർക്കാൻ ബിൽ കടപ്പറ്റുകാരന് കൈമാറുക.
4.  **Sending the bill for collection:** Sending the bill to the bank to collect the money on maturity.
4.  **കളക്ഷനായി ബിൽ അയക്കൽ:** കാലാവധിയെത്തുമ്പോൾ പണം ശേഖരിക്കാനായി ബാങ്കിലേക്ക് ബിൽ അയക്കുക.

### 4.6 Dishonour of a Bill
### 4.6 ബിൽ മടങ്ങൽ (ഡിസോണർ)

When the drawee fails to make the payment on the date of maturity, the bill is said to be dishonoured.
കാലാവധി തിയ്യതിയിൽ ഡ്രോയി പണം നൽകാൻ പരാജയപ്പെടുമ്പോൾ, ബിൽ മടങ്ങി എന്ന് പറയുന്നു.

*   **Noting Charges:** To legally prove that the bill was dishonoured, it is presented to a Notary Public. The fees paid to the Notary Public for this service are called noting charges. Ultimately, these charges are borne by the drawee.
*   **നോട്ടിംഗ് ചാർജ്:** ബിൽ മടങ്ങിയെന്ന് നിയമപരമായി തെളിയിക്കാൻ, അതൊരു നോട്ടറി പബ്ലിക്കിന് മുന്നിൽ ഹാജരാക്കുന്നു. ഈ സേവനത്തിനായി നോട്ടറി പബ്ലിക്കിന് നൽകുന്ന ഫീസിനെ നോട്ടിംഗ് ചാർജ് എന്ന് വിളിക്കുന്നു. ആത്യന്തികമായി ഈ തുക ഡ്രോയിയാണ് നൽകേണ്ടത്.

### 4.7 Renewal of a Bill
### 4.7 ബിൽ പുതുക്കൽ

Sometimes, the drawee is unable to pay the bill on maturity and requests the drawer to cancel the old bill and draw a new one with an extended time. This process is called renewal of a bill.
ചിലപ്പോൾ ഡ്രോയിക്ക് കാലാവധിക്ക് പണം നൽകാൻ കഴിയാതെ വരികയും, പഴയ ബിൽ റദ്ദാക്കി കാലാവധി നീട്ടിയ പുതിയ ബിൽ തയ്യാറാക്കാൻ ഡ്രോയറോട് ആവശ്യപ്പെടുകയും ചെയ്യുന്നു. ഈ പ്രക്രിയയെ ബിൽ പുതുക്കൽ എന്ന് വിളിക്കുന്നു.

The drawer usually charges interest for the extended period.
നീട്ടിനൽകിയ കാലയളവിനായി ഡ്രോയർ സാധാരണയായി പലിശ ഈടാക്കുന്നു.

### 4.8 Retiring a Bill
### 4.8 ബിൽ കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ

When the drawee makes the payment of the bill before its due date, it is called retiring the bill.
ഡ്രോയി കാലാവധി തിയ്യതിക്ക് മുമ്പ് തന്നെ ബില്ലിലെ പണം നൽകുമ്പോൾ അതിനെ ബിൽ റിട്ടയറിംഗ് (കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ) എന്ന് വിളിക്കുന്നു.

The drawer usually allows a discount called 'rebate' to the drawee for early payment.
നേരത്തെ പണം നൽകിയതിന് ഡ്രോയർ സാധാരണയായി ഡ്രോയിക്ക് 'റിബേറ്റ്' എന്ന് വിളിക്കുന്ന ഒരു കിഴിവ് അനുവദിക്കുന്നു.

---

## 3️⃣ Accounting Formats
## 3️⃣ അക്കൗണ്ടിംഗ് ഫോർമാറ്റുകൾ

**Journal Format (ജേർണൽ ഫോർമാറ്റ്)**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. (എൽ.എഫ്) | Debit Amount (Rs.) (ഡെബിറ്റ് തുക) | Credit Amount (Rs.) (ക്രെഡിറ്റ് തുക) |
| :--- | :--- | :--- | :--- | :--- |
| | | | | |

---

## 4️⃣ Worked Illustrations
## 4️⃣ പരിഹരിച്ച ഉദാഹരണങ്ങൾ

### Illustration 1: Retaining the bill till maturity
### ഉദാഹരണം 1: കാലാവധി വരെ ബിൽ സൂക്ഷിക്കൽ

**Transaction:** On Jan 1, 2017, Amit sold goods to Sumit for Rs. 10,000. Amit drew a bill on Sumit for 3 months, which Sumit accepted. On maturity, the bill was met. Pass journal entries in the books of Amit and Sumit.
**ഇടപാട്:** 2017 ജനുവരി 1-ന് അമിത് സുമിതിന് 10,000 രൂപയുടെ സാധനങ്ങൾ വിറ്റു. അമിത് സുമിതിന്മേൽ 3 മാസത്തെ കാലാവധിയിൽ ഒരു ബിൽ തയ്യാറാക്കുകയും സുമിത് അത് അംഗീകരിക്കുകയും ചെയ്തു. കാലാവധി പൂർത്തിയായപ്പോൾ ബില്ലിലെ തുക നൽകി. അമിതിന്റെയും സുമിതിന്റെയും പുസ്തകങ്ങളിൽ ജേർണൽ എൻട്രികൾ പാസാക്കുക.

**Solution (പരിഹാരം):**

**In the books of Amit (Drawer)**
**അമിതിന്റെ (ഡ്രോയർ) പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Jan 1 | Sumit's A/c Dr.<br>To Sales A/c<br>(Goods sold on credit) | | 10,000 | <br>10,000 |
| Jan 1 | Bills Receivable A/c Dr.<br>To Sumit's A/c<br>(Bill drawn and accepted) | | 10,000 | <br>10,000 |
| Apr 4 | Cash/Bank A/c Dr.<br>To Bills Receivable A/c<br>(Payment received on maturity) | | 10,000 | <br>10,000 |

**In the books of Sumit (Drawee)**
**സുമിതിന്റെ (ഡ്രോയി) പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Jan 1 | Purchases A/c Dr.<br>To Amit's A/c<br>(Goods purchased on credit) | | 10,000 | <br>10,000 |
| Jan 1 | Amit's A/c Dr.<br>To Bills Payable A/c<br>(Bill accepted) | | 10,000 | <br>10,000 |
| Apr 4 | Bills Payable A/c Dr.<br>To Cash/Bank A/c<br>(Bill paid on maturity) | | 10,000 | <br>10,000 |

### Illustration 2: Discounting the bill
### ഉദാഹരണം 2: ബാങ്കിൽ ബിൽ ഡിസ്കൗണ്ട് ചെയ്യൽ

**Transaction:** Suppose in Illustration 1, Amit discounted the bill with his bank on Jan 1 at 12% p.a.
**ഇടപാട്:** ഉദാഹരണം 1-ൽ, അമിത് ജനുവരി 1-ന് തന്നെ പ്രതിവർഷം 12% നിരക്കിൽ ബാങ്കിൽ ബിൽ ഡിസ്കൗണ്ട് ചെയ്തു എന്ന് കരുതുക.

**Solution (പരിഹാരം):**
Discount calculation = 10,000 × 12/100 × 3/12 = Rs. 300
ഡിസ്കൗണ്ട് കണക്കാക്കൽ = 10,000 × 12/100 × 3/12 = 300 രൂപ

**In the books of Amit (Drawer)**
**അമിതിന്റെ പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Jan 1 | Bank A/c Dr.<br>Discount A/c Dr.<br>To Bills Receivable A/c<br>(Bill discounted with bank) | | 9,700<br>300 | <br><br>10,000 |

*(Note: No entry is made in Amit's books on maturity because the bank will collect the money. Sumit's entries will be exactly the same as in Illustration 1).*
*(കുറിപ്പ്: കാലാവധി പൂർത്തിയാകുമ്പോൾ അമിതിന്റെ പുസ്തകത്തിൽ എൻട്രിയൊന്നും രേഖപ്പെടുത്തില്ല കാരണം ബാങ്കാണ് പണം വാങ്ങുന്നത്. സുമിതിന്റെ എൻട്രികൾ ഉദാഹരണം 1-ലേത് പോലെ തന്നെയായിരിക്കും).*

### Illustration 3: Dishonour of a bill
### ഉദാഹരണം 3: ബിൽ മടങ്ങൽ (ഡിസോണർ)

**Transaction:** Suppose the bill was retained by Amit till maturity, but Sumit failed to pay. Amit paid Rs. 100 as noting charges.
**ഇടപാട്:** അമിത് കാലാവധി വരെ ബിൽ കൈവശം വെച്ചു, എന്നാൽ സുമിത് പണം നൽകാൻ പരാജയപ്പെട്ടു എന്ന് കരുതുക. അമിത് നോട്ടിംഗ് ചാർജായി 100 രൂപ നൽകി.

**Solution (പരിഹാരം):**

**In the books of Amit (Drawer)**
**അമിതിന്റെ പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Apr 4 | Sumit's A/c Dr.<br>To Bills Receivable A/c<br>To Cash A/c (Noting charges)<br>(Bill dishonoured and noting charges paid) | | 10,100 | <br>10,000<br>100 |

**In the books of Sumit (Drawee)**
**സുമിതിന്റെ പുസ്തകത്തിൽ**

| Date (തിയ്യതി) | Particulars (വിവരങ്ങൾ) | L.F. | Debit (Rs.) | Credit (Rs.) |
| :--- | :--- | :--- | :--- | :--- |
| 2017 Apr 4 | Bills Payable A/c Dr.<br>Noting Charges A/c Dr.<br>To Amit's A/c<br>(Bill dishonoured and noting charges due) | | 10,000<br>100 | <br><br>10,100 |

---

## 5️⃣ Important Formulas and Rules
## 5️⃣ പ്രധാനപ്പെട്ട സൂത്രവാക്യങ്ങളും നിയമങ്ങളും

*   **Date of Maturity:** Date of Maturity = Date of drawing + Period in months/days + 3 days of grace
*   **കാലാവധി തിയ്യതി:** കാലാവധി തിയ്യതി = ബിൽ തയ്യാറാക്കിയ തിയ്യതി + മാസങ്ങളിലോ ദിവസങ്ങളിലോ ഉള്ള കാലാവധി + 3 ഗ്രേസ് ദിനങ്ങൾ
*   **Discount Calculation:** Discount = Amount of Bill × Rate/100 × Unexpired period/12 (or 365)
*   **ഡിസ്കൗണ്ട് കണക്കാക്കൽ:** ഡിസ്കൗണ്ട് = ബില്ലിലെ തുക × നിരക്ക്/100 × ബാക്കിയുള്ള കാലാവധി/12 (അല്ലെങ്കിൽ 365)

---

## 6️⃣ Summary Points
## 6️⃣ ചുരുക്കരൂപം

*   A Bill of Exchange is an unconditional order to pay, drawn by a creditor.
*   പണം നൽകാനുള്ള വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവാണ് ബിൽ ഓഫ് എക്സ്ചേഞ്ച്, ഇത് കടപ്പറ്റുകാരനാണ് തയ്യാറാക്കുന്നത്.
*   A Promissory Note is an unconditional promise to pay, drawn by a debtor.
*   പണം നൽകാമെന്ന വ്യവസ്ഥകളില്ലാത്ത വാഗ്ദാനമാണ് പ്രോമിസറി നോട്ട്, ഇത് കടക്കാരനാണ് തയ്യാറാക്കുന്നത്.
*   There are 3 parties in a bill of exchange: Drawer, Drawee, Payee.
*   ഒരു ബിൽ ഓഫ് എക്സ്ചേഞ്ചിൽ 3 പാർട്ടികളുണ്ട്: ഡ്രോയർ, ഡ്രോയി, പെയ്യി.
*   Days of Grace are 3 extra days added to the period of the bill to find the maturity date.
*   ബില്ലിന്റെ കാലാവധിയോടൊപ്പം കാലാവധി തിയ്യതി കണ്ടെത്താനായി ചേർക്കുന്ന അധിക 3 ദിവസങ്ങളാണ് ഗ്രേസ് ദിനങ്ങൾ.
*   A bill can be retained, discounted with a bank, endorsed, or sent for collection.
*   ഒരു ബിൽ കൈവശം വെക്കുകയോ, ബാങ്കിൽ ഡിസ്കൗണ്ട് ചെയ്യുകയോ, കൈമാറ്റം ചെയ്യുകയോ, അല്ലെങ്കിൽ പണം വാങ്ങാൻ അയക്കുകയോ ചെയ്യാം.
*   Dishonour means failure to pay the bill on maturity. Noting charges are paid to a Notary Public to record the dishonour.
*   കാലാവധി തിയ്യതിയിൽ ബില്ലിലെ തുക നൽകാൻ പരാജയപ്പെടുന്നതിനെയാണ് മടങ്ങൽ (ഡിസോണർ) എന്ന് പറയുന്നത്. ബിൽ മടങ്ങിയെന്ന് രേഖപ്പെടുത്താൻ നോട്ടറി പബ്ലിക്കിന് നൽകുന്ന തുകയാണ് നോട്ടിംഗ് ചാർജുകൾ.

---

## 7️⃣ Practice Questions (Exam-Oriented)
## 7️⃣ പരിശീലന ചോദ്യങ്ങൾ (പരീക്ഷാധിഷ്ഠിതം)

**Q1. Define a Bill of Exchange.**
**ചോദ്യം 1: ബിൽ ഓഫ് എക്സ്ചേഞ്ച് നിർവചിക്കുക.**
*   **Answer:** A bill of exchange is a written instrument containing an unconditional order, signed by the maker, directing a certain person to pay a certain sum of money only to, or to the order of a certain person, or to the bearer of the instrument.
*   **ഉത്തരം:** ഒരാൾ ഒപ്പിട്ട, വ്യക്തമാക്കപ്പെട്ട ഒരു വ്യക്തിക്ക് മാത്രമായോ, ആ വ്യക്തി പറയുന്ന ആൾക്കോ, അല്ലെങ്കിൽ ആ രേഖ കൈവശം വെച്ചിരിക്കുന്ന ആൾക്കോ ഒരു നിശ്ചിത തുക നൽകണമെന്ന് മറ്റൊരു വ്യക്തിയോട് നിർദ്ദേശിക്കുന്ന, വ്യവസ്ഥകളില്ലാത്ത ഉത്തരവടങ്ങിയ രേഖാമൂലമുള്ള പ്രമാണമാണിത്.

**Q2. Who are the parties to a bill of exchange?**
**ചോദ്യം 2: ബിൽ ഓഫ് എക്സ്ചേഞ്ചിലെ പാർട്ടികൾ ആരൊക്കെയാണ്?**
*   **Answer:** Drawer (maker of the bill), Drawee (person who accepts the bill), and Payee (person receiving the payment).
*   **ഉത്തരം:** ഡ്രോയർ (ബിൽ തയ്യാറാക്കുന്നയാൾ), ഡ്രോയി (ബിൽ അംഗീകരിക്കുന്ന വ്യക്തി), പെയ്യി (പണം ലഭിക്കുന്ന വ്യക്തി).

**Q3. Distinguish between a bill of exchange and a promissory note based on 'Acceptance'.**
**ചോദ്യം 3: 'അംഗീകാരത്തിന്റെ (Acceptance)' അടിസ്ഥാനത്തിൽ ബിൽ ഓഫ് എക്സ്ചേഞ്ചും പ്രോമിസറി നോട്ടും തമ്മിലുള്ള വ്യത്യാസം എന്താണ്?**
*   **Answer:** A bill of exchange requires acceptance by the drawee to become valid, whereas a promissory note does not require any acceptance as it is made by the debtor himself.
*   **ഉത്തരം:** ഒരു ബിൽ ഓഫ് എക്സ്ചേഞ്ച് സാധുവാകണമെങ്കിൽ ഡ്രോയിയുടെ അംഗീകാരം ആവശ്യമാണ്, എന്നാൽ ഒരു പ്രോമിസറി നോട്ട് കടക്കാരൻ തന്നെ തയ്യാറാക്കുന്നതിനാൽ അതിന് യാതൊരു അംഗീകാരവും ആവശ്യമില്ല.

**Q4. Calculate the due date: A bill drawn on January 15 for 2 months.**
**ചോദ്യം 4: കാലാവധി തിയ്യതി കണക്കാക്കുക: ജനുവരി 15-ന് തയ്യാറാക്കിയ 2 മാസത്തെ കാലാവധിയുള്ള ബിൽ.**
*   **Answer:** Two months from Jan 15 is March 15. Adding 3 days of grace, the due date is March 18.
*   **ഉത്തരം:** ജനുവരി 15 മുതൽ രണ്ട് മാസം എന്നത് മാർച്ച് 15 ആണ്. ഇതിനൊപ്പം 3 ഗ്രേസ് ദിനങ്ങൾ കൂടി ചേർക്കുമ്പോൾ കാലാവധി തിയ്യതി മാർച്ച് 18 ആയിരിക്കും.

**Q5. What is meant by discounting a bill?**
**ചോദ്യം 5: ഒരു ബിൽ ഡിസ്കൗണ്ട് ചെയ്യുക എന്നാൽ എന്ത്?**
*   **Answer:** Discounting a bill means encashing the bill with a bank before its maturity date. The bank deducts a certain amount as a discount charge and pays the balance to the drawer.
*   **ഉത്തരം:** ഒരു ബിൽ അതിന്റെ കാലാവധിക്ക് മുമ്പ് ബാങ്കിൽ നൽകി പണമാക്കി മാറ്റുന്നതിനെയാണ് ബിൽ ഡിസ്കൗണ്ട് ചെയ്യുക എന്ന് പറയുന്നത്. ബാങ്ക് ഡിസ്കൗണ്ട് ചാർജായി ഒരു നിശ്ചിത തുക കുറച്ചതിന് ശേഷം ബാക്കി തുക ഡ്രോയർക്ക് നൽകുന്നു.

**Q6. What happens if the due date of a bill falls on a public holiday?**
**ചോദ്യം 6: ബില്ലിന്റെ കാലാവധി ഒരു പൊതു അവധി ദിവസമായാൽ എന്ത് സംഭവിക്കും?**
*   **Answer:** If the due date falls on a public holiday, the bill becomes due for payment on the preceding (previous) working day.
*   **ഉത്തരം:** കാലാവധി തിയ്യതി ഒരു പൊതു അവധി ദിവസമാണെങ്കിൽ, ബില്ലിലെ തുക നൽകേണ്ടത് തൊട്ടുമുമ്പുള്ള പ്രവൃത്തിദിവസമായിരിക്കും.

**Q7. Explain 'Noting Charges'.**
**ചോദ്യം 7: 'നോട്ടിംഗ് ചാർജുകൾ' വിശദീകരിക്കുക.**
*   **Answer:** When a bill is dishonoured, it is presented to a Notary Public to establish the fact of dishonour. The fee charged by the Notary Public for this service is called noting charges. It is ultimately borne by the drawee.
*   **ഉത്തരം:** ഒരു ബിൽ മടങ്ങുമ്പോൾ, ബിൽ മടങ്ങി എന്ന വസ്തുത സ്ഥാപിക്കുന്നതിനായി അത് നോട്ടറി പബ്ലിക്കിന് മുന്നിൽ ഹാജരാക്കുന്നു. ഈ സേവനത്തിനായി നോട്ടറി പബ്ലിക് ഈടാക്കുന്ന ഫീസിനെ നോട്ടിംഗ് ചാർജുകൾ എന്ന് വിളിക്കുന്നു. ആത്യന്തികമായി ഈ തുക നൽകേണ്ടത് ഡ്രോയിയാണ്.

**Q8. What is 'Renewal of a Bill'?**
**ചോദ്യം 8: 'ബിൽ പുതുക്കൽ' എന്നാൽ എന്ത്?**
*   **Answer:** When the drawee is unable to pay the bill on the due date, he may request the drawer to cancel the old bill and draw a new bill for an extended period. This process is called renewal.
*   **ഉത്തരം:** കാലാവധി തിയ്യതിയിൽ ബില്ലിലെ തുക നൽകാൻ ഡ്രോയിക്ക് കഴിയാതെ വരികയാണെങ്കിൽ, പഴയ ബിൽ റദ്ദാക്കി കൂടുതൽ സമയം അനുവദിച്ച് പുതിയ ബിൽ തയ്യാറാക്കാൻ അയാൾ ഡ്രോയറോട് ആവശ്യപ്പെട്ടേക്കാം. ഈ പ്രക്രിയയെ ബിൽ പുതുക്കൽ എന്ന് വിളിക്കുന്നു.

**Q9. Write the journal entry in the books of the Drawer when a bill is endorsed to a creditor.**
**ചോദ്യം 9: ഒരു കടപ്പറ്റുകാരന് ബിൽ കൈമാറ്റം (Endorse) ചെയ്യുമ്പോൾ ഡ്രോയറുടെ പുസ്തകത്തിലുള്ള ജേർണൽ എൻട്രി എഴുതുക.**
*   **Answer:**
    Creditor's A/c Dr.
    To Bills Receivable A/c
*   **ഉത്തരം:**
    കടപ്പറ്റുകാരന്റെ അക്കൗണ്ട് Dr.
    To ബിൽസ് റിസീവബിൾ അക്കൗണ്ട്

**Q10. What is 'Retiring a Bill'? What is the discount given called?**
**ചോദ്യം 10: 'ബിൽ റിട്ടയറിംഗ്' (കാലാവധിക്ക് മുമ്പ് തീർപ്പാക്കൽ) എന്നാൽ എന്ത്? ഇതിന് നൽകുന്ന കിഴിവിനെ എന്ത് വിളിക്കുന്നു?**
*   **Answer:** Making the payment of a bill before its due date is called retiring a bill. The discount allowed by the drawer for early payment is called 'Rebate'.
*   **ഉത്തരം:** ഒരു ബില്ലിലെ തുക അതിന്റെ കാലാവധി തിയ്യതിക്ക് മുമ്പ് തന്നെ നൽകുന്നതിനെ ബിൽ റിട്ടയറിംഗ് എന്ന് വിളിക്കുന്നു. നേരത്തെ പണം നൽകിയതിന് ഡ്രോയർ അനുവദിക്കുന്ന കിഴിവിനെ 'റിബേറ്റ്' എന്ന് വിളിക്കുന്നു.
      `
    }
  }
};
