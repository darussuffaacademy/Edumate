import { Lesson } from './curriculum';

export const plusOneAccountancyUnit6: Lesson = {
  id: "acc-11-6",
  title: {
    en: "Chapter 6: Trial Balance and Rectification of Errors",
    ml: "അധ്യായം 6: ട്രയൽ ബാലൻസും തെറ്റുകൾ തിരുത്തലും"
  },
  estimated_time_mins: 60,
  learning_objectives: [
    { en: "State the meaning of trial balance.", ml: "ട്രയൽ ബാലൻസിന്റെ അർത്ഥം വ്യക്തമാക്കാൻ." },
    { en: "Enumerate the objectives of preparing trial balance.", ml: "ട്രയൽ ബാലൻസ് തയ്യാറാക്കുന്നതിന്റെ ലക്ഷ്യങ്ങൾ വിവരിക്കാൻ." },
    { en: "Prepare trial balance.", ml: "ട്രയൽ ബാലൻസ് തയ്യാറാക്കാൻ." },
    { en: "Explain the types of errors.", ml: "തെറ്റുകളുടെ തരങ്ങൾ വിശദീകരിക്കാൻ." },
    { en: "State the process of locating errors.", ml: "തെറ്റുകൾ കണ്ടെത്തുന്ന പ്രക്രിയ വ്യക്തമാക്കാൻ." },
    { en: "Identify the errors which affect the agreement of trial balance and those which do not affect the agreement of trial balance.", ml: "ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടുന്നതിനെ ബാധിക്കുന്ന തെറ്റുകളും ബാധിക്കാത്ത തെറ്റുകളും തിരിച്ചറിയാൻ." },
    { en: "Describe the method of preparing suspense account.", ml: "സസ്പെൻസ് അക്കൗണ്ട് തയ്യാറാക്കുന്ന രീതി വിവരിക്കാൻ." },
    { en: "Rectify the errors.", ml: "തെറ്റുകൾ തിരുത്താൻ." }
  ],
  content: {
    intro: {
      en: "This chapter covers the Trial Balance, its objectives, preparation methods, types of accounting errors, and how to rectify them using a Suspense Account.",
      ml: "ട്രയൽ ബാലൻസ്, അതിന്റെ ലക്ഷ്യങ്ങൾ, തയ്യാറാക്കുന്ന രീതികൾ, അക്കൗണ്ടിംഗ് തെറ്റുകളുടെ തരങ്ങൾ, സസ്പെൻസ് അക്കൗണ്ട് ഉപയോഗിച്ച് അവ എങ്ങനെ തിരുത്താം എന്നിവ ഈ അധ്യായത്തിൽ ചർച്ച ചെയ്യുന്നു."
    },
    core: {
      en: `
# 📘 Chapter 6: Trial Balance and Rectification of Errors

---

## 1️⃣ Chapter Overview

*   **🎯 Learning Objectives**:
    *   State the meaning of trial balance.
    *   Enumerate the objectives of preparing trial balance.
    *   Prepare trial balance.
    *   Explain the types of errors.
    *   State the process of locating errors.
    *   Identify the errors which affect the agreement of trial balance and those which do not affect the agreement of trial balance.
    *   Describe the method of preparing suspense account.
    *   Rectify the errors.
*   **🔑 Key Concepts**: Meaning and Objectives of Trial Balance, Preparation of Trial Balance, Significance of Agreement of Trial Balance, Types of Errors, Searching for Errors, Rectification of Errors, Suspense Account.

---

## 2️⃣ Detailed Concepts

### 4.1 Meaning of Trial Balance

A trial balance is a statement showing the balances, or total of debits and credits, of all the accounts in the ledger.

It is prepared with a view to verify the arithmetical accuracy of posting into the ledger accounts.

It is normally prepared at the end of an accounting year.

### 4.2 Objectives of Preparing the Trial Balance

1.  **To ascertain the arithmetical accuracy of the ledger accounts.**
    If the total of debit and credit columns of the trial balance are equal, it is assumed that the recording and posting are arithmetically correct.
2.  **To help in locating errors.**
    If the trial balance does not tally, it indicates that errors have been made.
3.  **To help in the preparation of the financial statements.**
    Trial balance is the base for preparing Trading and Profit & Loss Account and the Balance Sheet.

### 4.3 Preparation of Trial Balance

There are three methods of preparing a trial balance:

1.  **Totals Method:** The totals of the debit and credit sides of each ledger account are transferred to the trial balance.
2.  **Balances Method:** Only the balanced amount (difference between debit and credit sides) of each account is transferred. This is the most widely used method.
3.  **Totals-cum-Balances Method:** This method combines both totals and balances methods. It requires four amount columns.

**Rules for preparing Trial Balance (Balances Method):**

*   **Debit Balances:** Assets, Expenses, Losses, Drawings, Purchases, Sales Return.
*   **Credit Balances:** Liabilities, Capital, Revenues/Income, Gains, Sales, Purchases Return.

### 4.4 Significance of Agreement of Trial Balance

If the total of debit and credit columns of the trial balance are equal, it means the trial balance has agreed.

However, the agreement of a trial balance is not an absolute proof of the accuracy of accounting records.

There are certain errors that do not affect the agreement of the trial balance.

### 4.5 Types of Errors

Errors can be classified into two major categories:

1.  Errors not affecting the trial balance (Two-sided errors)
2.  Errors affecting the trial balance (One-sided errors)

Based on their nature, errors can be further classified into:

**1. Errors of Commission**
These are errors committed due to wrong recording, wrong posting, wrong casting (totaling), wrong carrying forward, or wrong balancing.
*Example:* Goods sold to Ram Rs. 1,000 wrongly entered in the sales book as Rs. 100.

**2. Errors of Omission**
These errors arise when a transaction is completely or partially omitted from recording in the books of accounts.
*   **Complete Omission:** A transaction is not recorded at all. It does not affect the trial balance.
*   **Partial Omission:** A transaction is recorded in the journal but not posted to the ledger. It affects the trial balance.

**3. Errors of Principle**
These errors arise when a transaction is recorded in contravention of accounting principles.
This usually involves treating a capital expenditure as a revenue expenditure or vice versa. These errors do not affect the trial balance.
*Example:* Purchase of machinery for Rs. 50,000 entered in the Purchases book instead of the Machinery account.

**4. Compensating Errors**
When two or more errors are committed in such a way that the net effect of these errors on the debits and credits is nil, they are called compensating errors.
These errors do not affect the agreement of the trial balance.
*Example:* Ram's account was over-debited by Rs. 100, and Shyam's account was over-credited by Rs. 100.

### 4.6 Suspense Account

When the trial balance does not tally, the accountant tries to locate the errors.

If the errors cannot be located immediately, the difference in the trial balance is temporarily transferred to a newly opened account called the Suspense Account.

If the debit total is short, the difference is placed on the debit side of the Suspense Account. If the credit total is short, it is placed on the credit side.

As and when the errors are located, they are rectified using the Suspense Account, and finally, the Suspense Account will have a zero balance.

### 4.7 Rectification of Errors

Errors can be rectified at different stages:

1.  Before preparing the Trial Balance.
2.  After preparing the Trial Balance but before preparing the Final Accounts (using Suspense Account).
3.  In the next accounting year.

**Steps for Rectification (Two-sided errors):**

1.  Identify the Wrong Entry made.
2.  Identify the Correct Entry that should have been made.
3.  Pass the Rectifying Entry to cancel the effect of the wrong entry and record the correct entry.

**Rectification of One-sided errors (before Trial Balance):**
These are rectified by writing an explanatory statement on the affected side of the relevant account, not by passing a journal entry.

**Rectification of One-sided errors (after Trial Balance):**
These are rectified by passing a journal entry with the help of the Suspense Account.

---

## 3️⃣ Accounting Formats

### 1. Trial Balance Format

**Trial Balance of [Name of the firm] as on [Date]**

| Account Title | L.F. | Debit Balance (Rs.) | Credit Balance (Rs.) |
| :--- | :--- | :--- | :--- |
| | | | |
| | | | |
| **Total** | | **XXXX** | **XXXX** |

### 2. Suspense Account Format

**Suspense Account**

| Date | Particulars | J.F. | Amount | Date | Particulars | J.F. | Amount |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | To Difference in Trial Balance (if debit was short) | | | | By Difference in Trial Balance (if credit was short) | | |
| | | | | | | | |

---

## 4️⃣ Worked Illustrations

### Illustration 1: Preparation of Trial Balance

**Question:**
Prepare a Trial Balance from the following balances:
Capital Rs. 1,00,000; Sales Rs. 50,000; Purchases Rs. 40,000; Machinery Rs. 60,000; Cash Rs. 20,000; Creditors Rs. 10,000; Debtors Rs. 30,000; Rent Rs. 10,000.

**Solution:**

**Trial Balance**

| Account Title | L.F. | Debit Balance (Rs.) | Credit Balance (Rs.) |
| :--- | :--- | :--- | :--- |
| Capital | | | 1,00,000 |
| Sales | | | 50,000 |
| Purchases | | 40,000 | |
| Machinery | | 60,000 | |
| Cash | | 20,000 | |
| Creditors | | | 10,000 |
| Debtors | | 30,000 | |
| Rent | | 10,000 | |
| **Total** | | **1,60,000** | **1,60,000** |

### Illustration 2: Rectification of Errors (Two-sided)

**Question:**
Credit sales to Mohan Rs. 10,000 were recorded in the Purchases Book. Rectify the error.

**Solution:**
*   **Correct Entry:** Mohan's A/c Dr. 10,000 To Sales A/c 10,000
*   **Wrong Entry made:** Purchases A/c Dr. 10,000 To Mohan's A/c 10,000
*   **Rectifying Entry:**
    Mohan's A/c Dr. 20,000
    To Sales A/c 10,000
    To Purchases A/c 10,000
    *(Credit sales to Mohan wrongly recorded in purchases book, now rectified).*

### Illustration 3: Rectification of Errors using Suspense Account (One-sided)

**Question:**
Purchases book was undercast (totaled less) by Rs. 5,00. Rectify using Suspense A/c.

**Solution:**
*   **Rectifying Entry:**
    Purchases A/c Dr. 500
    To Suspense A/c 500
    *(Purchases book undercast, now rectified).*

---

## 5️⃣ Important Formulas and Rules

**Trial Balance Placement Rules:**

*   **Debit:** Assets, Expenses, Losses, Drawings.
*   **Credit:** Liabilities, Capital, Revenues/Incomes, Gains.

**Suspense Account Placement:**

*   If Debit total < Credit total -> Suspense A/c balance is Debit.
*   If Credit total < Debit total -> Suspense A/c balance is Credit.

---

## 6️⃣ Summary Points

*   Trial Balance checks the arithmetical accuracy of ledger accounts.
*   Errors of Principle and Compensating Errors do not affect the Trial Balance.
*   One-sided errors affect the agreement of the Trial Balance.
*   A Suspense Account is opened to temporarily record the difference in the Trial Balance.
*   Rectification after preparing the Trial Balance is done with the help of the Suspense Account.
`,
      ml: `
# 📘 അധ്യായം 6: ട്രയൽ ബാലൻസും തെറ്റുകൾ തിരുത്തലും

---

## 1️⃣ അധ്യായത്തിന്റെ അവലോകനം

*   **🎯 പഠന ലക്ഷ്യങ്ങൾ**:
    *   ട്രയൽ ബാലൻസിന്റെ അർത്ഥം വ്യക്തമാക്കാൻ.
    *   ട്രയൽ ബാലൻസ് തയ്യാറാക്കുന്നതിന്റെ ലക്ഷ്യങ്ങൾ വിവരിക്കാൻ.
    *   ട്രയൽ ബാലൻസ് തയ്യാറാക്കാൻ.
    *   തെറ്റുകളുടെ തരങ്ങൾ വിശദീകരിക്കാൻ.
    *   തെറ്റുകൾ കണ്ടെത്തുന്ന പ്രക്രിയ വ്യക്തമാക്കാൻ.
    *   ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടുന്നതിനെ ബാധിക്കുന്ന തെറ്റുകളും ബാധിക്കാത്ത തെറ്റുകളും തിരിച്ചറിയാൻ.
    *   സസ്പെൻസ് അക്കൗണ്ട് തയ്യാറാക്കുന്ന രീതി വിവരിക്കാൻ.
    *   തെറ്റുകൾ തിരുത്താൻ.
*   **🔑 പ്രധാന ആശയങ്ങൾ**: ട്രയൽ ബാലൻസിന്റെ അർത്ഥവും ലക്ഷ്യങ്ങളും, ട്രയൽ ബാലൻസ് തയ്യാറാക്കൽ, ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടുന്നതിന്റെ പ്രാധാന്യം, തെറ്റുകളുടെ തരങ്ങൾ, തെറ്റുകൾ കണ്ടെത്തൽ, തെറ്റുകൾ തിരുത്തൽ, സസ്പെൻസ് അക്കൗണ്ട്.

---

## 2️⃣ വിശദമായ ആശയങ്ങൾ

### 4.1 ട്രയൽ ബാലൻസിന്റെ അർത്ഥം

ലെഡ്ജറിലെ എല്ലാ അക്കൗണ്ടുകളുടെയും ഡെബിറ്റ്, ക്രെഡിറ്റ് ബാലൻസുകളോ ആകെത്തുകയോ കാണിക്കുന്ന ഒരു സ്റ്റേറ്റ്മെന്റാണ് ട്രയൽ ബാലൻസ്.

ലെഡ്ജർ അക്കൗണ്ടുകളിലേക്ക് പോസ്റ്റ് ചെയ്തതിലെ ഗണിതശാസ്ത്രപരമായ കൃത്യത പരിശോധിക്കുന്നതിനായാണ് ഇത് തയ്യാറാക്കുന്നത്.

ഇത് സാധാരണയായി ഒരു അക്കൗണ്ടിംഗ് വർഷത്തിന്റെ അവസാനമാണ് തയ്യാറാക്കുന്നത്.

### 4.2 ട്രയൽ ബാലൻസ് തയ്യാറാക്കുന്നതിന്റെ ലക്ഷ്യങ്ങൾ

1.  **ലെഡ്ജർ അക്കൗണ്ടുകളുടെ ഗണിതശാസ്ത്രപരമായ കൃത്യത ഉറപ്പാക്കാൻ.**
    ട്രയൽ ബാലൻസിന്റെ ഡെബിറ്റ്, ക്രെഡിറ്റ് കോളങ്ങളുടെ ആകെത്തുക തുല്യമാണെങ്കിൽ, രേഖപ്പെടുത്തലുകളും പോസ്റ്റിംഗും ഗണിതശാസ്ത്രപരമായി ശരിയാണെന്ന് അനുമാനിക്കപ്പെടുന്നു.
2.  **തെറ്റുകൾ കണ്ടുപിടിക്കാൻ സഹായിക്കാൻ.**
    ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടുന്നില്ലെങ്കിൽ, തെറ്റുകൾ സംഭവിച്ചിട്ടുണ്ടെന്ന് അത് സൂചിപ്പിക്കുന്നു.
3.  **സാമ്പത്തിക റിപ്പോർട്ടുകൾ (ഫൈനൽ അക്കൗണ്ടുകൾ) തയ്യാറാക്കാൻ സഹായിക്കാൻ.**
    ട്രേഡിംഗ്, പ്രോഫിറ്റ് ആൻഡ് ലോസ് അക്കൗണ്ടും ബാലൻസ് ഷീറ്റും തയ്യാറാക്കുന്നതിനുള്ള അടിസ്ഥാനം ട്രയൽ ബാലൻസാണ്.

### 4.3 ട്രയൽ ബാലൻസ് തയ്യാറാക്കൽ

ട്രയൽ ബാലൻസ് തയ്യാറാക്കാൻ മൂന്ന് രീതികളുണ്ട്:

1.  **Totals Method (ആകെത്തുക രീതി):** ഓരോ ലെഡ്ജർ അക്കൗണ്ടിന്റെയും ഡെബിറ്റ്, ക്രെഡിറ്റ് വശങ്ങളുടെ ആകെത്തുക ട്രയൽ ബാലൻസിലേക്ക് മാറ്റുന്നു.
2.  **Balances Method (ബാലൻസ് രീതി):** ഓരോ അക്കൗണ്ടിന്റെയും ബാലൻസ് തുക (ഡെബിറ്റ്, ക്രെഡിറ്റ് വശങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം) മാത്രമേ മാറ്റാറുള്ളൂ. ഇതാണ് ഏറ്റവും വ്യാപകമായി ഉപയോഗിക്കുന്ന രീതി.
3.  **Totals-cum-Balances Method (ആകെത്തുകയും ബാലൻസും ചേർന്ന രീതി):** ഈ രീതിയിൽ ആകെത്തുക രീതിയും ബാലൻസ് രീതിയും സംയോജിപ്പിച്ചിരിക്കുന്നു. ഇതിന് നാല് തുക കോളങ്ങൾ ആവശ്യമാണ്.

**ട്രയൽ ബാലൻസ് തയ്യാറാക്കുന്നതിനുള്ള നിയമങ്ങൾ (ബാലൻസ് രീതി):**

*   **ഡെബിറ്റ് ബാലൻസുകൾ:** ആസ്തികൾ, ചിലവുകൾ, നഷ്ടങ്ങൾ, പിൻവലിക്കലുകൾ (Drawings), വാങ്ങലുകൾ (Purchases), വിൽപ്പന മടക്കം (Sales Return).
*   **ക്രെഡിറ്റ് ബാലൻസുകൾ:** ബാധ്യതകൾ, മൂലധനം, വരുമാനം, നേട്ടങ്ങൾ, വിൽപ്പന (Sales), വാങ്ങൽ മടക്കം (Purchases Return).

### 4.4 ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടുന്നതിന്റെ പ്രാധാന്യം

ട്രയൽ ബാലൻസിന്റെ ഡെബിറ്റ്, ക്രെഡിറ്റ് കോളങ്ങളുടെ ആകെത്തുക തുല്യമാണെങ്കിൽ, ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെട്ടു (agreed) എന്നാണ് അർത്ഥം.

എന്നിരുന്നാലും, ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെട്ടു എന്നത് അക്കൗണ്ടിംഗ് രേഖകളുടെ കൃത്യതയുടെ പൂർണ്ണമായ തെളിവല്ല.

ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടുന്നതിനെ ബാധിക്കാത്ത ചില തെറ്റുകളുണ്ട്.

### 4.5 തെറ്റുകളുടെ തരങ്ങൾ

തെറ്റുകളെ രണ്ട് പ്രധാന വിഭാഗങ്ങളായി തിരിക്കാം:

1.  ട്രയൽ ബാലൻസിനെ ബാധിക്കാത്ത തെറ്റുകൾ (രണ്ട് വശങ്ങളെയും ബാധിക്കുന്ന തെറ്റുകൾ)
2.  ട്രയൽ ബാലൻസിനെ ബാധിക്കുന്ന തെറ്റുകൾ (ഒരു വശത്തെ മാത്രം ബാധിക്കുന്ന തെറ്റുകൾ)

അവയുടെ സ്വഭാവത്തിന്റെ അടിസ്ഥാനത്തിൽ, തെറ്റുകളെ വീണ്ടും താഴെ പറയുന്നവയായി തരംതിരിക്കാം:

**1. എറേഴ്സ് ഓഫ് കമ്മീഷൻ (Errors of Commission)**
തെറ്റായി രേഖപ്പെടുത്തുക, തെറ്റായി പോസ്റ്റ് ചെയ്യുക, തെറ്റായി കൂട്ടുക, തെറ്റായി മാറ്റിയെഴുതുക, അല്ലെങ്കിൽ തെറ്റായി ബാലൻസ് ചെയ്യുക എന്നിവ കാരണം സംഭവിക്കുന്ന തെറ്റുകളാണിവ.
*ഉദാഹരണം:* റാമിന് 1,000 രൂപയ്ക്ക് സാധനങ്ങൾ വിറ്റത് സെയിൽസ് ബുക്കിൽ 100 രൂപ എന്ന് തെറ്റായി രേഖപ്പെടുത്തി.

**2. എറേഴ്സ് ഓഫ് ഒമിഷൻ (Errors of Omission)**
ഒരു ഇടപാട് അക്കൗണ്ട് പുസ്തകങ്ങളിൽ പൂർണ്ണമായോ ഭാഗികമായോ രേഖപ്പെടുത്താൻ വിട്ടുപോകുമ്പോഴാണ് ഈ തെറ്റുകൾ ഉണ്ടാകുന്നത്.
*   **പൂർണ്ണമായി വിട്ടുപോകൽ (Complete Omission):** ഒരു ഇടപാട് തീരെ രേഖപ്പെടുത്താതിരിക്കുന്നത്. ഇത് ട്രയൽ ബാലൻസിനെ ബാധിക്കില്ല.
*   **ഭാഗികമായി വിട്ടുപോകൽ (Partial Omission):** ജേർണലിൽ രേഖപ്പെടുത്തുകയും എന്നാൽ ലെഡ്ജറിലേക്ക് പോസ്റ്റ് ചെയ്യാതിരിക്കുകയും ചെയ്യുന്നത്. ഇത് ട്രയൽ ബാലൻസിനെ ബാധിക്കും.

**3. എറേഴ്സ് ഓഫ് പ്രിൻസിപ്പിൾ (Errors of Principle / തത്വങ്ങളിലെ പിഴവ്)**
അക്കൗണ്ടിംഗ് തത്വങ്ങൾക്ക് വിരുദ്ധമായി ഒരു ഇടപാട് രേഖപ്പെടുത്തുമ്പോഴാണ് ഈ തെറ്റുകൾ ഉണ്ടാകുന്നത്.
ഇതിൽ സാധാരണയായി മൂലധന വ്യയത്തെ (capital expenditure) റവന്യൂ വ്യയമായി (revenue expenditure) കണക്കാക്കുന്നതോ, അല്ലെങ്കിൽ തിരിച്ചോ വരുന്നു. ഈ തെറ്റുകൾ ട്രയൽ ബാലൻസിനെ ബാധിക്കില്ല.
*ഉദാഹരണം:* 50,000 രൂപയ്ക്ക് യന്ത്രം വാങ്ങിയത് മെഷിനറി അക്കൗണ്ടിന് പകരം പർച്ചേസസ് ബുക്കിൽ രേഖപ്പെടുത്തി.

**4. കോമ്പൻസേറ്റിംഗ് എറേഴ്സ് (Compensating Errors / പരിഹരിക്കുന്ന തെറ്റുകൾ)**
ഡെബിറ്റുകളിലും ക്രെഡിറ്റുകളിലുമുള്ള മൊത്തത്തിലുള്ള ഫലം ഇല്ലാതാകുന്ന തരത്തിൽ രണ്ടോ അതിലധികമോ തെറ്റുകൾ സംഭവിക്കുമ്പോൾ, അവയെ കോമ്പൻസേറ്റിംഗ് എറേഴ്സ് എന്ന് വിളിക്കുന്നു.
ഈ തെറ്റുകൾ ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടുന്നതിനെ ബാധിക്കില്ല.
*ഉദാഹരണം:* റാമിന്റെ അക്കൗണ്ടിൽ 100 രൂപ കൂടുതലായി ഡെബിറ്റ് ചെയ്തു, ശ്യാമിന്റെ അക്കൗണ്ടിൽ 100 രൂപ കൂടുതലായി ക്രെഡിറ്റ് ചെയ്തു.

### 4.6 സസ്പെൻസ് അക്കൗണ്ട്

ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടാതെ വരുമ്പോൾ, അക്കൗണ്ടന്റ് തെറ്റുകൾ കണ്ടുപിടിക്കാൻ ശ്രമിക്കുന്നു.

തെറ്റുകൾ ഉടനടി കണ്ടെത്താൻ കഴിഞ്ഞില്ലെങ്കിൽ, ട്രയൽ ബാലൻസിലെ വ്യത്യാസം സസ്പെൻസ് അക്കൗണ്ട് എന്ന് വിളിക്കുന്ന പുതിയതായി തുറന്ന ഒരു അക്കൗണ്ടിലേക്ക് താൽക്കാലികമായി മാറ്റുന്നു.

ഡെബിറ്റ് ആകെത്തുകയാണ് കുറവെങ്കിൽ, വ്യത്യാസം സസ്പെൻസ് അക്കൗണ്ടിന്റെ ഡെബിറ്റ് വശത്ത് രേഖപ്പെടുത്തുന്നു. ക്രെഡിറ്റ് ആകെത്തുകയാണ് കുറവെങ്കിൽ, അത് ക്രെഡിറ്റ് വശത്ത് രേഖപ്പെടുത്തുന്നു.

തെറ്റുകൾ കണ്ടെത്തുന്ന മുറയ്ക്ക് സസ്പെൻസ് അക്കൗണ്ട് ഉപയോഗിച്ച് അവ തിരുത്തുന്നു, ഒടുവിൽ സസ്പെൻസ് അക്കൗണ്ടിലെ ബാലൻസ് പൂജ്യമായി മാറും.

### 4.7 തെറ്റുകൾ തിരുത്തൽ

തെറ്റുകൾ വിവിധ ഘട്ടങ്ങളിൽ തിരുത്താൻ കഴിയും:

1.  ട്രയൽ ബാലൻസ് തയ്യാറാക്കുന്നതിന് മുമ്പ്.
2.  ട്രയൽ ബാലൻസ് തയ്യാറാക്കിയ ശേഷം എന്നാൽ ഫൈനൽ അക്കൗണ്ടുകൾ തയ്യാറാക്കുന്നതിന് മുമ്പ് (സസ്പെൻസ് അക്കൗണ്ട് ഉപയോഗിച്ച്).
3.  അടുത്ത അക്കൗണ്ടിംഗ് വർഷത്തിൽ.

**തിരുത്തുന്നതിനുള്ള ഘട്ടങ്ങൾ (രണ്ട് വശങ്ങളെയും ബാധിക്കുന്ന തെറ്റുകൾ):**

1.  വരുത്തിയ തെറ്റായ എൻട്രി തിരിച്ചറിയുക.
2.  ചെയ്യേണ്ടിയിരുന്ന ശരിയായ എൻട്രി തിരിച്ചറിയുക.
3.  തെറ്റായ എൻട്രിയുടെ ഫലം റദ്ദാക്കാനും ശരിയായ എൻട്രി രേഖപ്പെടുത്താനുമായി റെക്റ്റിഫൈയിംഗ് എൻട്രി (തിരുത്തൽ എൻട്രി) പാസാക്കുക.

**ഒരു വശത്തെ മാത്രം ബാധിക്കുന്ന തെറ്റുകൾ തിരുത്തൽ (ട്രയൽ ബാലൻസിന് മുമ്പ്):**
ഇവ തിരുത്തുന്നത് ഒരു ജേർണൽ എൻട്രി പാസാക്കിക്കൊണ്ടല്ല, മറിച്ച് ബന്ധപ്പെട്ട അക്കൗണ്ടിൽ തെറ്റ് സംഭവിച്ച വശത്ത് ഒരു വിശദീകരണം എഴുതിക്കൊണ്ടാണ്.

**ഒരു വശത്തെ മാത്രം ബാധിക്കുന്ന തെറ്റുകൾ തിരുത്തൽ (ട്രയൽ ബാലൻസിന് ശേഷം):**
സസ്പെൻസ് അക്കൗണ്ടിന്റെ സഹായത്തോടെ ഒരു ജേർണൽ എൻട്രി പാസാക്കിക്കൊണ്ടാണ് ഇവ തിരുത്തുന്നത്.

---

## 3️⃣ അക്കൗണ്ടിംഗ് ഫോർമാറ്റുകൾ

### 1. ട്രയൽ ബാലൻസ് ഫോർമാറ്റ്

**Trial Balance of [Name of the firm] as on [Date]**

| അക്കൗണ്ടിന്റെ പേര് | എൽ.എഫ് | ഡെബിറ്റ് ബാലൻസ് (Rs.) | ക്രെഡിറ്റ് ബാലൻസ് (Rs.) |
| :--- | :--- | :--- | :--- |
| | | | |
| | | | |
| **Total** | | **XXXX** | **XXXX** |

### 2. സസ്പെൻസ് അക്കൗണ്ട് ഫോർമാറ്റ്

**Suspense Account (സസ്പെൻസ് അക്കൗണ്ട്)**

| തിയ്യതി | വിവരങ്ങൾ | J.F. | തുക | തിയ്യതി | വിവരങ്ങൾ | J.F. | തുക |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | To Difference in Trial Balance (if debit was short) | | | | By Difference in Trial Balance (if credit was short) | | |
| | | | | | | | |

---

## 4️⃣ പരിഹരിച്ച ഉദാഹരണങ്ങൾ

### ഉദാഹരണം 1: ട്രയൽ ബാലൻസ് തയ്യാറാക്കൽ

**ചോദ്യം:**
താഴെ പറയുന്ന ബാലൻസുകളിൽ നിന്ന് ഒരു ട്രയൽ ബാലൻസ് തയ്യാറാക്കുക:
മൂലധനം 1,00,000 രൂപ; വിൽപ്പന 50,000 രൂപ; വാങ്ങലുകൾ 40,000 രൂപ; യന്ത്രം 60,000 രൂപ; പണം 20,000 രൂപ; കടപ്പറ്റുകാർ 10,000 രൂപ; കടക്കാർ 30,000 രൂപ; വാടക 10,000 രൂപ.

**പരിഹാരം:**

**Trial Balance**

| അക്കൗണ്ടിന്റെ പേര് | L.F. | ഡെബിറ്റ് ബാലൻസ് (Rs.) | ക്രെഡിറ്റ് ബാലൻസ് (Rs.) |
| :--- | :--- | :--- | :--- |
| Capital (മൂലധനം) | | | 1,00,000 |
| Sales (വിൽപ്പന) | | | 50,000 |
| Purchases (വാങ്ങലുകൾ) | | 40,000 | |
| Machinery (യന്ത്രം) | | 60,000 | |
| Cash (പണം) | | 20,000 | |
| Creditors (കടപ്പറ്റുകാർ) | | | 10,000 |
| Debtors (കടക്കാർ) | | 30,000 | |
| Rent (വാടക) | | 10,000 | |
| **Total** | | **1,60,000** | **1,60,000** |

### ഉദാഹരണം 2: തെറ്റുകൾ തിരുത്തൽ (രണ്ട് വശങ്ങളെയും ബാധിക്കുന്നത്)

**ചോദ്യം:**
മോഹന് 10,000 രൂപയ്ക്ക് കടമായി സാധനങ്ങൾ വിറ്റത് പർച്ചേസസ് ബുക്കിൽ രേഖപ്പെടുത്തി. തെറ്റ് തിരുത്തുക.

**പരിഹാരം:**
*   **ശരിയായ എൻട്രി:** Mohan's A/c Dr. 10,000 To Sales A/c 10,000
*   **വരുത്തിയ തെറ്റായ എൻട്രി:** Purchases A/c Dr. 10,000 To Mohan's A/c 10,000
*   **തിരുത്തൽ എൻട്രി (Rectifying Entry):**
    Mohan's A/c Dr. 20,000
    To Sales A/c 10,000
    To Purchases A/c 10,000
    *(മോഹന് കടമായി വിറ്റത് പർച്ചേസസ് ബുക്കിൽ തെറ്റായി രേഖപ്പെടുത്തി, ഇപ്പോൾ തിരുത്തി).*

### ഉദാഹരണം 3: സസ്പെൻസ് അക്കൗണ്ട് ഉപയോഗിച്ച് തെറ്റുകൾ തിരുത്തൽ (ഒരു വശത്തെ മാത്രം ബാധിക്കുന്നത്)

**ചോദ്യം:**
പർച്ചേസസ് ബുക്കിന്റെ ആകെത്തുക 500 രൂപ കുറച്ചാണ് കൂട്ടിയത്. സസ്പെൻസ് അക്കൗണ്ട് ഉപയോഗിച്ച് തിരുത്തുക.

**പരിഹാരം:**
*   **തിരുത്തൽ എൻട്രി (Rectifying Entry):**
    Purchases A/c Dr. 500
    To Suspense A/c 500
    *(പർച്ചേസസ് ബുക്ക് കുറച്ചാണ് കൂട്ടിയത്, ഇപ്പോൾ തിരുത്തി).*

---

## 5️⃣ പ്രധാനപ്പെട്ട സൂത്രവാക്യങ്ങളും നിയമങ്ങളും

**ട്രയൽ ബാലൻസിൽ രേഖപ്പെടുത്താനുള്ള നിയമങ്ങൾ:**

*   **ഡെബിറ്റ്:** ആസ്തികൾ, ചിലവുകൾ, നഷ്ടങ്ങൾ, പിൻവലിക്കലുകൾ (Drawings).
*   **ക്രെഡിറ്റ്:** ബാധ്യതകൾ, മൂലധനം, വരുമാനം, നേട്ടങ്ങൾ.

**സസ്പെൻസ് അക്കൗണ്ടിന്റെ സ്ഥാനം:**

*   ഡെബിറ്റ് ആകെത്തുക < ക്രെഡിറ്റ് ആകെത്തുക -> സസ്പെൻസ് അക്കൗണ്ട് ബാലൻസ് ഡെബിറ്റാണ്.
*   ക്രെഡിറ്റ് ആകെത്തുക < ഡെബിറ്റ് ആകെത്തുക -> സസ്പെൻസ് അക്കൗണ്ട് ബാലൻസ് ക്രെഡിറ്റാണ്.

---

## 6️⃣ ചുരുക്കരൂപം

*   ലെഡ്ജർ അക്കൗണ്ടുകളുടെ ഗണിതശാസ്ത്രപരമായ കൃത്യത പരിശോധിക്കുന്നതാണ് ട്രയൽ ബാലൻസ്.
*   എറേഴ്സ് ഓഫ് പ്രിൻസിപ്പിൾ, കോമ്പൻസേറ്റിംഗ് എറേഴ്സ് എന്നിവ ട്രയൽ ബാലൻസിനെ ബാധിക്കില്ല.
*   ഒരു വശത്തെ മാത്രം ബാധിക്കുന്ന തെറ്റുകൾ ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടുന്നതിനെ ബാധിക്കും.
*   ട്രയൽ ബാലൻസിലെ വ്യത്യാസം താൽക്കാലികമായി രേഖപ്പെടുത്തുന്നതിനായി ഒരു സസ്പെൻസ് അക്കൗണ്ട് തുറക്കുന്നു.
*   ട്രയൽ ബാലൻസ് തയ്യാറാക്കിയ ശേഷമുള്ള തിരുത്തലുകൾ സസ്പെൻസ് അക്കൗണ്ടിന്റെ സഹായത്തോടെയാണ് ചെയ്യുന്നത്.
`
    }
  },
  glossary: [
    {
      term: { en: "Trial Balance", ml: "ട്രയൽ ബാലൻസ്" },
      definition: { en: "A statement showing the balances or totals of all ledger accounts to verify arithmetical accuracy.", ml: "ലെഡ്ജർ അക്കൗണ്ടുകളുടെ ഗണിതശാസ്ത്രപരമായ കൃത്യത പരിശോധിക്കുന്നതിനായി അവയുടെ ബാലൻസുകളോ ആകെത്തുകയോ കാണിക്കുന്ന സ്റ്റേറ്റ്മെന്റ്." }
    },
    {
      term: { en: "Errors of Principle", ml: "എറേഴ്സ് ഓഫ് പ്രിൻസിപ്പിൾ (തത്വങ്ങളിലെ പിഴവ്)" },
      definition: { en: "Errors arising from recording a transaction in contravention of accounting principles.", ml: "അക്കൗണ്ടിംഗ് തത്വങ്ങൾക്ക് വിരുദ്ധമായി ഇടപാടുകൾ രേഖപ്പെടുത്തുമ്പോൾ ഉണ്ടാകുന്ന തെറ്റുകൾ." }
    },
    {
      term: { en: "Compensating Errors", ml: "കോമ്പൻസേറ്റിംഗ് എറേഴ്സ് (പരിഹരിക്കുന്ന തെറ്റുകൾ)" },
      definition: { en: "Two or more errors that cancel out each other's effect on the trial balance.", ml: "ട്രയൽ ബാലൻസിലെ പരസ്പരമുള്ള സ്വാധീനം ഇല്ലാതാക്കുന്ന തരത്തിൽ സംഭവിക്കുന്ന രണ്ടോ അതിലധികമോ തെറ്റുകൾ." }
    },
    {
      term: { en: "Suspense Account", ml: "സസ്പെൻസ് അക്കൗണ്ട്" },
      definition: { en: "An account opened temporarily to place the difference in the trial balance.", ml: "ട്രയൽ ബാലൻസിലെ വ്യത്യാസം താൽക്കാലികമായി രേഖപ്പെടുത്താൻ തുറക്കുന്ന അക്കൗണ്ട്." }
    },
    {
      term: { en: "Rectifying Entry", ml: "റെക്റ്റിഫൈയിംഗ് എൻട്രി (തിരുത്തൽ എൻട്രി)" },
      definition: { en: "A journal entry passed to correct an error in the books of accounts.", ml: "അക്കൗണ്ട് പുസ്തകങ്ങളിലെ തെറ്റ് തിരുത്താൻ പാസാക്കുന്ന ജേർണൽ എൻട്രി." }
    }
  ],
  sample_questions: [
    {
      q_id: "q1",
      question: {
        en: "What is a Trial Balance?",
        ml: "ട്രയൽ ബാലൻസ് എന്നാൽ എന്ത്?"
      },
      answer: {
        en: "A trial balance is a statement showing the balances or totals of all the ledger accounts, prepared to verify their arithmetical accuracy.",
        ml: "ലെഡ്ജർ അക്കൗണ്ടുകളുടെ ഗണിതശാസ്ത്രപരമായ കൃത്യത പരിശോധിക്കുന്നതിനായി, അവയുടെ ബാലൻസുകളോ ആകെത്തുകയോ കാണിച്ച് തയ്യാറാക്കുന്ന ഒരു സ്റ്റേറ്റ്മെന്റാണിത്."
      }
    },
    {
      q_id: "q2",
      question: {
        en: "State two objectives of preparing a Trial Balance.",
        ml: "ട്രയൽ ബാലൻസ് തയ്യാറാക്കുന്നതിന്റെ രണ്ട് ലക്ഷ്യങ്ങൾ വ്യക്തമാക്കുക."
      },
      answer: {
        en: "1. To ascertain the arithmetical accuracy of the ledger accounts.\n2. To help in the preparation of financial statements.",
        ml: "1. ലെഡ്ജർ അക്കൗണ്ടുകളുടെ ഗണിതശാസ്ത്രപരമായ കൃത്യത ഉറപ്പാക്കാൻ.\n2. സാമ്പത്തിക റിപ്പോർട്ടുകൾ തയ്യാറാക്കാൻ സഹായിക്കാൻ."
      }
    },
    {
      q_id: "q3",
      question: {
        en: "Does the agreement of a trial balance ensure absolute accuracy of books of accounts?",
        ml: "ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെട്ടു എന്നത് അക്കൗണ്ട് പുസ്തകങ്ങളുടെ പൂർണ്ണമായ കൃത്യത ഉറപ്പാക്കുന്നുണ്ടോ?"
      },
      answer: {
        en: "No. There are certain errors like errors of principle and compensating errors that do not affect the trial balance.",
        ml: "ഇല്ല. ട്രയൽ ബാലൻസിനെ ബാധിക്കാത്ത എറേഴ്സ് ഓഫ് പ്രിൻസിപ്പിൾ, കോമ്പൻസേറ്റിംഗ് എറേഴ്സ് തുടങ്ങിയ ചില തെറ്റുകളുണ്ട്."
      }
    },
    {
      q_id: "q4",
      question: {
        en: "What is an Error of Principle? Give an example.",
        ml: "എറേഴ്സ് ഓഫ് പ്രിൻസിപ്പിൾ (തത്വങ്ങളിലെ പിഴവ്) എന്നാൽ എന്ത്? ഒരു ഉദാഹരണം നൽകുക."
      },
      answer: {
        en: "It is an error that violates the fundamental principles of accounting, such as treating capital expenditure as revenue expenditure. Example: Purchase of machinery recorded in the Purchases Book.",
        ml: "അക്കൗണ്ടിംഗിന്റെ അടിസ്ഥാന തത്വങ്ങൾ ലംഘിക്കുന്ന തെറ്റാണിത്, ഉദാഹരണത്തിന് മൂലധന വ്യയത്തെ റവന്യൂ വ്യയമായി കണക്കാക്കുന്നത്. ഉദാഹരണം: യന്ത്രം വാങ്ങിയത് പർച്ചേസസ് ബുക്കിൽ രേഖപ്പെടുത്തിയത്."
      }
    },
    {
      q_id: "q5",
      question: {
        en: "What are Compensating Errors?",
        ml: "കോമ്പൻസേറ്റിംഗ് എറേഴ്സ് (പരിഹരിക്കുന്ന തെറ്റുകൾ) എന്നാൽ എന്ത്?"
      },
      answer: {
        en: "When two or more errors are committed in such a way that the net effect of these errors on the debits and credits is nil, they are called compensating errors.",
        ml: "ഡെബിറ്റുകളിലും ക്രെഡിറ്റുകളിലുമുള്ള മൊത്തത്തിലുള്ള ഫലം ഇല്ലാതാകുന്ന തരത്തിൽ രണ്ടോ അതിലധികമോ തെറ്റുകൾ സംഭവിക്കുമ്പോൾ, അവയെ കോമ്പൻസേറ്റിംഗ് എറേഴ്സ് എന്ന് വിളിക്കുന്നു."
      }
    },
    {
      q_id: "q6",
      question: {
        en: "What is a Suspense Account?",
        ml: "സസ്പെൻസ് അക്കൗണ്ട് എന്നാൽ എന്ത്?"
      },
      answer: {
        en: "It is an account opened temporarily to place the difference of the trial balance until the errors are located and rectified.",
        ml: "ട്രയൽ ബാലൻസിലെ വ്യത്യാസ തുക, തെറ്റുകൾ കണ്ടെത്തി തിരുത്തുന്നത് വരെ താൽക്കാലികമായി രേഖപ്പെടുത്തി വെക്കുന്നതിനായി തുറക്കുന്ന അക്കൗണ്ടാണിത്."
      }
    },
    {
      q_id: "q7",
      question: {
        en: "Identify the nature of the balance (Debit/Credit) for the following: a) Sales Return b) Creditors c) Drawings d) Bank Overdraft.",
        ml: "താഴെ പറയുന്നവയുടെ ബാലൻസിന്റെ സ്വഭാവം (ഡെബിറ്റ്/ക്രെഡിറ്റ്) കണ്ടെത്തുക: എ) സെയിൽസ് റിട്ടേൺ ബി) കടപ്പറ്റുകാർ സി) ഡ്രോയിംഗ്സ് ഡി) ബാങ്ക് ഓവർഡ്രാഫ്റ്റ്."
      },
      answer: {
        en: "a) Debit b) Credit c) Debit d) Credit.",
        ml: "എ) ഡെബിറ്റ് ബി) ക്രെഡിറ്റ് സി) ഡെബിറ്റ് ഡി) ക്രെഡിറ്റ്."
      }
    },
    {
      q_id: "q8",
      question: {
        en: "Rectify the following error before preparing the Trial Balance: \"Purchases book was overcast by Rs. 1,000.\"",
        ml: "ട്രയൽ ബാലൻസ് തയ്യാറാക്കുന്നതിന് മുമ്പായി താഴെ പറയുന്ന തെറ്റ് തിരുത്തുക: \"പർച്ചേസസ് ബുക്കിന്റെ ആകെത്തുക 1,000 രൂപ കൂടുതലായി കൂട്ടി.\""
      },
      answer: {
        en: "Since it is before the trial balance, we write on the credit side of the Purchases Account: \"By wrong total of Purchases Book Rs. 1,000.\"",
        ml: "ഇത് ട്രയൽ ബാലൻസിന് മുമ്പായതിനാൽ, പർച്ചേസസ് അക്കൗണ്ടിന്റെ ക്രെഡിറ്റ് വശത്ത് \"പർച്ചേസസ് ബുക്ക് തെറ്റായി കൂട്ടിയത് 1,000 രൂപ\" എന്ന് എഴുതുന്നു."
      }
    },
    {
      q_id: "q9",
      question: {
        en: "Rectify the following error using a Suspense Account: \"Sales book was undercast by Rs. 2,000.\"",
        ml: "സസ്പെൻസ് അക്കൗണ്ട് ഉപയോഗിച്ച് താഴെ പറയുന്ന തെറ്റ് തിരുത്തുക: \"സെയിൽസ് ബുക്കിന്റെ ആകെത്തുക 2,000 രൂപ കുറച്ചാണ് കൂട്ടിയത്.\""
      },
      answer: {
        en: "Suspense A/c Dr. 2,000 To Sales A/c 2,000.",
        ml: "സസ്പെൻസ് അക്കൗണ്ട് Dr. 2,000 To സെയിൽസ് അക്കൗണ്ട് 2,000."
      }
    },
    {
      q_id: "q10",
      question: {
        en: "Pass rectifying entry: \"Rent paid Rs. 5,000 was debited to the Landlord's personal account.\"",
        ml: "തിരുത്തൽ എൻട്രി (റെക്റ്റിഫൈയിംഗ് എൻട്രി) പാസാക്കുക: \"വാടക നൽകിയ 5,000 രൂപ കെട്ടിട ഉടമയുടെ വ്യക്തിഗത അക്കൗണ്ടിൽ ഡെബിറ്റ് ചെയ്തു.\""
      },
      answer: {
        en: "Rent A/c Dr. 5,000 To Landlord's A/c 5,000.",
        ml: "റെന്റ് (വാടക) അക്കൗണ്ട് Dr. 5,000 To കെട്ടിട ഉടമയുടെ അക്കൗണ്ട് 5,000."
      }
    }
  ],
  quiz: [
    {
      question: {
        en: "A Trial Balance is prepared to check the:",
        ml: "ട്രയൽ ബാലൻസ് തയ്യാറാക്കുന്നത് ഇത് പരിശോധിക്കാനാണ്:"
      },
      options: [
        { en: "Financial position of the business", ml: "ബിസിനസ്സിന്റെ സാമ്പത്തിക സ്ഥിതി" },
        { en: "Arithmetical accuracy of ledger accounts", ml: "ലെഡ്ജർ അക്കൗണ്ടുകളുടെ ഗണിതശാസ്ത്രപരമായ കൃത്യത" },
        { en: "Profit or loss of the business", ml: "ബിസിനസ്സിന്റെ ലാഭമോ നഷ്ടമോ" },
        { en: "Cash balance", ml: "ക്യാഷ് ബാലൻസ്" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "The primary objective of a trial balance is to verify that total debits equal total credits, ensuring arithmetical accuracy.",
        ml: "ആകെ ഡെബിറ്റുകൾ ആകെ ക്രെഡിറ്റുകൾക്ക് തുല്യമാണെന്ന് ഉറപ്പുവരുത്തി ഗണിതശാസ്ത്രപരമായ കൃത്യത പരിശോധിക്കുക എന്നതാണ് ട്രയൽ ബാലൻസിന്റെ പ്രധാന ലക്ഷ്യം."
      }
    },
    {
      question: {
        en: "Which of the following errors will NOT affect the Trial Balance?",
        ml: "താഴെ പറയുന്നവയിൽ ഏത് തെറ്റാണ് ട്രയൽ ബാലൻസിനെ ബാധിക്കാത്തത്?"
      },
      options: [
        { en: "Wrong casting of subsidiary books", ml: "സബ്സിഡിയറി ബുക്കുകൾ തെറ്റായി കൂട്ടിയത്" },
        { en: "Wrong posting to an account", ml: "ഒരു അക്കൗണ്ടിലേക്ക് തെറ്റായി പോസ്റ്റ് ചെയ്തത്" },
        { en: "Error of Principle", ml: "എറർ ഓഫ് പ്രിൻസിപ്പിൾ" },
        { en: "Omission of posting to one account", ml: "ഒരു അക്കൗണ്ടിലേക്ക് പോസ്റ്റ് ചെയ്യാൻ മറന്നത്" }
      ],
      correctAnswerIndex: 2,
      explanation: {
        en: "Errors of principle involve entering a transaction in the wrong class of account (e.g., asset instead of expense), but the debit and credit amounts are still equal, so the trial balance still tallies.",
        ml: "എറർ ഓഫ് പ്രിൻസിപ്പിൾ എന്നത് തെറ്റായ അക്കൗണ്ട് വിഭാഗത്തിൽ ഇടപാട് രേഖപ്പെടുത്തുന്നതാണ്, എന്നാൽ ഡെബിറ്റ്, ക്രെഡിറ്റ് തുകകൾ തുല്യമായതിനാൽ ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടും."
      }
    },
    {
      question: {
        en: "If the debit total of the Trial Balance is less than the credit total, the difference is transferred to the:",
        ml: "ട്രയൽ ബാലൻസിന്റെ ഡെബിറ്റ് ആകെത്തുക ക്രെഡിറ്റ് ആകെത്തുകയേക്കാൾ കുറവാണെങ്കിൽ, വ്യത്യാസം മാറ്റുന്നത്:"
      },
      options: [
        { en: "Credit side of Suspense Account", ml: "സസ്പെൻസ് അക്കൗണ്ടിന്റെ ക്രെഡിറ്റ് വശത്തേക്ക്" },
        { en: "Debit side of Suspense Account", ml: "സസ്പെൻസ് അക്കൗണ്ടിന്റെ ഡെബിറ്റ് വശത്തേക്ക്" },
        { en: "Profit & Loss Account", ml: "പ്രോഫിറ്റ് ആൻഡ് ലോസ് അക്കൗണ്ടിലേക്ക്" },
        { en: "Capital Account", ml: "ക്യാപിറ്റൽ അക്കൗണ്ടിലേക്ക്" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "To make the trial balance tally, the difference is placed on the side that is short. Since debit is short, it goes to the debit side of the Suspense Account.",
        ml: "ട്രയൽ ബാലൻസ് പൊരുത്തപ്പെടുത്താൻ, കുറവുള്ള വശത്താണ് വ്യത്യാസം രേഖപ്പെടുത്തുന്നത്. ഡെബിറ്റ് കുറവായതിനാൽ, അത് സസ്പെൻസ് അക്കൗണ്ടിന്റെ ഡെബിറ്റ് വശത്ത് വരും."
      }
    },
    {
      question: {
        en: "Sales Return Account always has a ________ balance.",
        ml: "സെയിൽസ് റിട്ടേൺ അക്കൗണ്ടിന് എപ്പോഴും ________ ബാലൻസ് ആയിരിക്കും."
      },
      options: [
        { en: "Credit", ml: "ക്രെഡിറ്റ്" },
        { en: "Debit", ml: "ഡെബിറ്റ്" },
        { en: "Zero", ml: "പൂജ്യം" },
        { en: "None of these", ml: "ഇവയൊന്നുമല്ല" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "Sales have a credit balance, so Sales Return (which reduces sales) has a debit balance.",
        ml: "വിൽപ്പനയ്ക്ക് (Sales) ക്രെഡിറ്റ് ബാലൻസ് ആണ്, അതിനാൽ വിൽപ്പന കുറയ്ക്കുന്ന സെയിൽസ് റിട്ടേണിന് ഡെബിറ്റ് ബാലൻസ് ആയിരിക്കും."
      }
    },
    {
      question: {
        en: "Rectifying an error after preparing the Trial Balance requires the use of:",
        ml: "ട്രയൽ ബാലൻസ് തയ്യാറാക്കിയ ശേഷം ഒരു തെറ്റ് തിരുത്താൻ ഇത് ഉപയോഗിക്കേണ്ടതുണ്ട്:"
      },
      options: [
        { en: "Cash Book", ml: "ക്യാഷ് ബുക്ക്" },
        { en: "Suspense Account", ml: "സസ്പെൻസ് അക്കൗണ്ട്" },
        { en: "Trading Account", ml: "ട്രേഡിംഗ് അക്കൗണ്ട്" },
        { en: "Balance Sheet", ml: "ബാലൻസ് ഷീറ്റ്" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "Once the trial balance is prepared and the difference is put in the Suspense Account, any one-sided errors found later must be rectified by routing the entry through the Suspense Account.",
        ml: "ട്രയൽ ബാലൻസ് തയ്യാറാക്കി വ്യത്യാസം സസ്പെൻസ് അക്കൗണ്ടിലേക്ക് മാറ്റിയ ശേഷം, കണ്ടെത്തുന്ന ഒരു വശത്തെ മാത്രം ബാധിക്കുന്ന തെറ്റുകൾ സസ്പെൻസ് അക്കൗണ്ട് വഴിയാണ് തിരുത്തേണ്ടത്."
      }
    }
  ]
};
