import { Lesson } from './curriculum';

export const plusOneAccountancyUnit5: Lesson = {
  id: "acc-11-5",
  title: {
    en: "Chapter 5: Bank Reconciliation Statement",
    ml: "അധ്യായം 5: ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് (ബാങ്ക് രേഖയും ക്യാഷ് ബുക്കും തമ്മിലുള്ള പൊരുത്തപ്പെടുത്തൽ)"
  },
  estimated_time_mins: 60,
  learning_objectives: [
    { en: "State the meaning and need for the preparation of bank reconciliation statement.", ml: "ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റിന്റെ അർത്ഥവും അത് തയ്യാറാക്കേണ്ടതിന്റെ ആവശ്യകതയും വ്യക്തമാക്കാൻ." },
    { en: "Identify causes of difference between bank balance as per cash book and pass book.", ml: "ക്യാഷ് ബുക്കിലെയും പാസ്സ് ബുക്കിലെയും ബാങ്ക് ബാലൻസുകൾ തമ്മിലുള്ള വ്യത്യാസത്തിന്റെ കാരണങ്ങൾ കണ്ടെത്താൻ." },
    { en: "Prepare the bank reconciliation statement.", ml: "ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് തയ്യാറാക്കാൻ." },
    { en: "Ascertain the correct bank balance as per cash book.", ml: "ക്യാഷ് ബുക്ക് അനുസരിച്ചുള്ള ശരിയായ ബാങ്ക് ബാലൻസ് കണ്ടെത്താൻ." }
  ],
  content: {
    intro: {
      en: "This chapter covers the Bank Reconciliation Statement, explaining its meaning, need, causes of differences between cash book and pass book balances, and how to prepare it.",
      ml: "ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റിന്റെ അർത്ഥം, ആവശ്യകത, ക്യാഷ് ബുക്കിലെയും പാസ്സ് ബുക്കിലെയും ബാലൻസുകൾ തമ്മിലുള്ള വ്യത്യാസത്തിന്റെ കാരണങ്ങൾ, അത് എങ്ങനെ തയ്യാറാക്കാം എന്നിവ ഈ അധ്യായത്തിൽ ചർച്ച ചെയ്യുന്നു."
    },
    core: {
      en: `
# 📘 Chapter 5: Bank Reconciliation Statement

---

## 1️⃣ Chapter Overview

*   **🎯 Learning Objectives**:
    *   State the meaning and need for the preparation of bank reconciliation statement.
    *   Identify causes of difference between bank balance as per cash book and pass book.
    *   Prepare the bank reconciliation statement.
    *   Ascertain the correct bank balance as per cash book.
*   **🔑 Key Concepts**: Meaning of Bank Reconciliation Statement (BRS), Need and Importance of BRS, Causes of Difference between Cash Book and Pass Book, Format and Preparation of Bank Reconciliation Statement, Preparation of Amended (Adjusted) Cash Book.

---

## 2️⃣ Detailed Concepts

### 4.1 Introduction

The cash book shows the balance of both cash and bank at the end of a period.

A bank statement or a bank passbook is a copy of a bank account as shown by the bank records.

The amount of balance shown in the passbook or the bank statement must tally with the balance as shown in the cash book.

But in practice, these are usually found to be different.

### 4.2 Meaning of Bank Reconciliation Statement

It is a statement prepared mainly to reconcile the difference between the bank balance shown by the cash book and bank passbook.

**Need and Importance:**

*   It helps in locating any errors that may have been committed either in the cash book or in the passbook.
*   It helps in bringing out the unnecessary delay in the collection of cheques by the bank.
*   It helps in finding out the actual position of the bank balance.

### 4.3 Causes of Difference

The differences between the cash book and the bank passbook are caused by:

1.  Timing differences on recording of the transactions.
2.  Errors made by the business or by the bank.

**A. Timing Differences**

When a business records a transaction in the cash book, the bank may not record it at the exact same time.

*   **Cheques issued by the firm but not yet presented for payment.**
    When a cheque is issued, the firm immediately credits the bank column of the cash book. But the bank debits the firm's account only when the cheque is presented for payment.
*   **Cheques paid into the bank but not yet collected.**
    When a cheque is deposited, the firm immediately debits the bank column of the cash book. But the bank credits the account only when the money is actually collected from the other bank.
*   **Direct debits made by the bank on behalf of the customer.**
    Bank charges, interest on overdraft, insurance premium paid by the bank. The bank deducts these from the account, but the firm records them only after receiving the bank statement.
*   **Amounts directly deposited in the bank account.**
    Customers sometimes deposit money directly into the firm's bank account. The bank credits the account immediately, but the firm records it later.
*   **Interest and dividends collected by the bank.**
    The bank credits the firm's account when it collects interest or dividends on behalf of the firm.
*   **Direct payments made by the bank on behalf of the customers.**
    E.g., Telephone bills, rent paid as per standing instructions.
*   **Cheques deposited/bills discounted dishonoured.**
    The firm debits the cash book when depositing, but if it is dishonoured, the bank reverses the entry. The firm comes to know only later.

**B. Differences Caused by Errors**

*   **Errors committed in recording transactions by the firm.**
    E.g., Wrong totaling of cash book, omitting a cheque entry.
*   **Errors committed in recording transactions by the bank.**
    E.g., Depositing money into the wrong account.

### 4.4 Preparation of Bank Reconciliation Statement

A Bank Reconciliation Statement can be prepared starting with the balance of the Cash Book or the Pass Book.

If we start with the Cash Book balance, we adjust items to arrive at the Pass Book balance, and vice versa.

**Rules for adding or deducting items (Starting with Cash Book Balance):**

| Causes of Difference | Effect on Pass Book | Action |
| :--- | :--- | :--- |
| Cheques issued but not presented for payment | Pass Book balance is MORE | ADD |
| Interest credited by bank but not in cash book | Pass Book balance is MORE | ADD |
| Direct deposit by a customer | Pass Book balance is MORE | ADD |
| Cheques deposited but not cleared/collected | Pass Book balance is LESS | DEDUCT |
| Bank charges debited by bank | Pass Book balance is LESS | DEDUCT |
| Direct payments made by bank | Pass Book balance is LESS | DEDUCT |
| Cheques dishonoured | Pass Book balance is LESS | DEDUCT |

*(Note: If starting with Pass Book balance, simply reverse the actions - Deduct instead of Add, and Add instead of Deduct).*

### 4.5 Preparation of Amended Cash Book

Sometimes, before preparing the BRS, the cash book is updated (amended) for items that belong in it but were missed.

**Items to be recorded in the Amended Cash Book:**

*   Bank charges, interest charged by bank (Credit side).
*   Interest or dividends collected by bank (Debit side).
*   Direct deposits by customers (Debit side).
*   Direct payments by bank (Credit side).
*   Dishonour of cheques/bills (Credit side).
*   Errors committed in the cash book.

**Items NOT recorded in the Amended Cash Book (Only in BRS):**

*   Cheques issued but not presented.
*   Cheques deposited but not cleared.
*   Errors committed by the bank.

---

## 3️⃣ Accounting Formats

**Bank Reconciliation Statement Format**

**Bank Reconciliation Statement of [Name] as on [Date]**

| Particulars | Plus (+) Amount (Rs.) | Minus (-) Amount (Rs.) |
| :--- | :--- | :--- |
| Balance as per Cash Book | XXXX | |
| Cheques issued but not presented | XXXX | |
| Interest credited by bank | XXXX | |
| Direct deposit by customer | XXXX | |
| Cheques deposited but not cleared | | XXXX |
| Bank charges | | XXXX |
| Direct payments by bank | | XXXX |
| Cheques dishonoured | | XXXX |
| Balance as per Pass Book | | XXXX |
| **Total** | **YYYY** | **YYYY** |

*(Note: The format can also be presented with inner and outer columns instead of plus/minus columns).*

---

## 4️⃣ Worked Illustrations

### Illustration 1: BRS starting with Cash Book Balance

**Question:**
From the following particulars, prepare a Bank Reconciliation Statement as on March 31, 2017:
*   Balance as per cash book Rs. 3,200.
*   Cheque issued but not presented for payment Rs. 1,800.
*   Cheque deposited but not collected upto March 31, 2017 Rs. 2,000.
*   Bank charges debited by bank Rs. 150.

**Solution:**

**Bank Reconciliation Statement as on March 31, 2017**

| Particulars | Plus (+) Amount Rs. | Minus (-) Amount Rs. |
| :--- | :--- | :--- |
| Balance as per Cash Book | 3,200 | |
| Add: Cheque issued but not presented | 1,800 | |
| Less: Cheque deposited but not collected | | 2,000 |
| Less: Bank charges | | 150 |
| Balance as per Pass Book (5,000 - 2,150) | | 2,850 |
| **Total** | **5,000** | **5,000** |

### Illustration 2: BRS with Overdraft Balance

**Note:** Overdraft as per Cash Book is a negative balance (Credit balance). It is placed in the Minus column.

**Question:**
Prepare BRS as on December 31, 2017:
*   Overdraft as per cash book Rs. 10,000.
*   Cheques deposited but not cleared Rs. 2,500.
*   Cheques issued but not presented Rs. 1,500.
*   Interest on overdraft debited by bank Rs. 500.

**Solution:**

**Bank Reconciliation Statement as on December 31, 2017**

| Particulars | Plus (+) Amount Rs. | Minus (-) Amount Rs. |
| :--- | :--- | :--- |
| Overdraft as per Cash Book | | 10,000 |
| Less: Cheques deposited but not cleared | | 2,500 |
| Add: Cheques issued but not presented | 1,500 | |
| Less: Interest on overdraft | | 500 |
| Overdraft as per Pass Book (13,000 - 1,500) | 11,500 | |
| **Total** | **13,000** | **13,000** |

---

## 5️⃣ Important Formulas and Rules

**Starting Point Rules:**

*   **Balance as per Cash Book (Debit Balance):** Put in Plus column.
*   **Overdraft as per Cash Book (Credit Balance):** Put in Minus column.
*   **Balance as per Pass Book (Credit Balance):** Put in Plus column.
*   **Overdraft as per Pass Book (Debit Balance):** Put in Minus column.

*(Tip: When starting with Pass Book, reverse the normal Add/Less rules used for Cash Book).*

---

## 6️⃣ Summary Points

*   BRS reconciles the difference between Cash Book bank balance and Pass Book balance.
*   Causes of difference include timing delays (e.g., cheques not cleared) and errors.
*   Cheques issued but not presented increase the Pass Book balance relative to Cash Book.
*   Cheques deposited but not cleared decrease the Pass Book balance relative to Cash Book.
*   Amended Cash Book records omitted items (like bank charges) before preparing BRS.
*   Items like "Cheques issued/deposited but not cleared" are never recorded in the Amended Cash Book.
`,
      ml: `
# 📘 അധ്യായം 5: ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് (ബാങ്ക് രേഖയും ക്യാഷ് ബുക്കും തമ്മിലുള്ള പൊരുത്തപ്പെടുത്തൽ)

---

## 1️⃣ അധ്യായത്തിന്റെ അവലോകനം

*   **🎯 പഠന ലക്ഷ്യങ്ങൾ**:
    *   ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റിന്റെ അർത്ഥവും അത് തയ്യാറാക്കേണ്ടതിന്റെ ആവശ്യകതയും വ്യക്തമാക്കാൻ.
    *   ക്യാഷ് ബുക്കിലെയും പാസ്സ് ബുക്കിലെയും ബാങ്ക് ബാലൻസുകൾ തമ്മിലുള്ള വ്യത്യാസത്തിന്റെ കാരണങ്ങൾ കണ്ടെത്താൻ.
    *   ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് തയ്യാറാക്കാൻ.
    *   ക്യാഷ് ബുക്ക് അനുസരിച്ചുള്ള ശരിയായ ബാങ്ക് ബാലൻസ് കണ്ടെത്താൻ.
*   **🔑 പ്രധാന ആശയങ്ങൾ**: ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റിന്റെ അർത്ഥം, ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റിന്റെ ആവശ്യകതയും പ്രാധാന്യവും, ക്യാഷ് ബുക്കിലെയും പാസ്സ് ബുക്കിലെയും തുകകൾ തമ്മിൽ വ്യത്യാസം വരാനുള്ള കാരണങ്ങൾ, ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് തയ്യാറാക്കുന്ന വിധവും ഫോർമാറ്റും, അഡ്ജസ്റ്റഡ് (തിരുത്തിയെഴുതിയ) ക്യാഷ് ബുക്ക് തയ്യാറാക്കൽ.

---

## 2️⃣ വിശദമായ ആശയങ്ങൾ

### 4.1 ആമുഖം

ഒരു പ്രത്യേക കാലയളവിന്റെ അവസാനമുള്ള ക്യാഷ്, ബാങ്ക് ബാലൻസുകൾ ക്യാഷ് ബുക്ക് കാണിക്കുന്നു.

ബാങ്ക് രേഖകളിലെ അക്കൗണ്ടിന്റെ പകർപ്പാണ് ബാങ്ക് സ്റ്റേറ്റ്മെന്റ് അല്ലെങ്കിൽ ബാങ്ക് പാസ്സ് ബുക്ക്.

പാസ്സ് ബുക്കിലോ ബാങ്ക് സ്റ്റേറ്റ്മെന്റിലോ കാണിക്കുന്ന ബാലൻസ് ക്യാഷ് ബുക്കിലെ ബാലൻസുമായി പൊരുത്തപ്പെടേണ്ടതാണ്.

എന്നാൽ പ്രായോഗിക തലത്തിൽ, ഇവ രണ്ടും സാധാരണയായി വ്യത്യസ്തമായിട്ടാണ് കാണപ്പെടാറുള്ളത്.

### 4.2 ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റിന്റെ അർത്ഥം

ക്യാഷ് ബുക്ക് കാണിക്കുന്ന ബാങ്ക് ബാലൻസും ബാങ്ക് പാസ്സ് ബുക്കിലെ ബാലൻസും തമ്മിലുള്ള വ്യത്യാസം പൊരുത്തപ്പെടുത്തുന്നതിനായി പ്രധാനമായും തയ്യാറാക്കുന്ന സ്റ്റേറ്റ്മെന്റാണിത്.

**ആവശ്യകതയും പ്രാധാന്യവും:**

*   ക്യാഷ് ബുക്കിലോ പാസ്സ് ബുക്കിലോ എന്തെങ്കിലും തെറ്റുകൾ സംഭവിച്ചിട്ടുണ്ടെങ്കിൽ അത് കണ്ടുപിടിക്കാൻ ഇത് സഹായിക്കുന്നു.
*   ബാങ്ക് ചെക്കുകൾ മാറാൻ എടുക്കുന്ന അനാവശ്യ കാലതാമസം കണ്ടെത്താൻ ഇത് സഹായിക്കുന്നു.
*   ബാങ്കിലെ യഥാർത്ഥ ബാലൻസ് കണ്ടെത്താൻ ഇത് സഹായിക്കുന്നു.

### 4.3 വ്യത്യാസത്തിനുള്ള കാരണങ്ങൾ

ക്യാഷ് ബുക്കും ബാങ്ക് പാസ്സ് ബുക്കും തമ്മിലുള്ള വ്യത്യാസത്തിന് കാരണമാകുന്നത്:

1.  ഇടപാടുകൾ രേഖപ്പെടുത്തുന്നതിലെ സമയ വ്യത്യാസങ്ങൾ.
2.  ബിസിനസ്സോ ബാങ്കോ വരുത്തുന്ന തെറ്റുകൾ.

**A. സമയ വ്യത്യാസങ്ങൾ**

ഒരു ബിസിനസ്സ് ക്യാഷ് ബുക്കിൽ ഒരു ഇടപാട് രേഖപ്പെടുത്തുമ്പോൾ, ബാങ്ക് അത് കൃത്യം അതേ സമയത്ത് തന്നെ രേഖപ്പെടുത്തിക്കൊള്ളണമെന്നില്ല.

*   **സ്ഥാപനം നൽകിയ ചെക്കുകൾ, എന്നാൽ ബാങ്കിൽ പണമാക്കി മാറ്റാൻ നൽകിയിട്ടില്ലാത്തവ.**
    ഒരു ചെക്ക് നൽകുമ്പോൾ, സ്ഥാപനം ഉടനടി ക്യാഷ് ബുക്കിലെ ബാങ്ക് കോളത്തിൽ തുക കുറയ്ക്കുന്നു (ക്രെഡിറ്റ് ചെയ്യുന്നു). എന്നാൽ ആ ചെക്ക് പണമാക്കി മാറ്റാൻ ബാങ്കിൽ നൽകുമ്പോൾ മാത്രമേ ബാങ്ക് സ്ഥാപനത്തിന്റെ അക്കൗണ്ടിൽ നിന്ന് തുക കുറയ്ക്കുകയുള്ളൂ (ഡെബിറ്റ് ചെയ്യുകയുള്ളൂ).
*   **ബാങ്കിൽ നിക്ഷേപിച്ച ചെക്കുകൾ, എന്നാൽ ബാങ്ക് തുക ഈടാക്കിയിട്ടില്ലാത്തവ.**
    ഒരു ചെക്ക് നിക്ഷേപിക്കുമ്പോൾ, സ്ഥാപനം ഉടനടി ക്യാഷ് ബുക്കിലെ ബാങ്ക് കോളത്തിൽ തുക കൂട്ടുന്നു (ഡെബിറ്റ് ചെയ്യുന്നു). എന്നാൽ മറ്റൊരു ബാങ്കിൽ നിന്ന് പണം യഥാർത്ഥത്തിൽ ലഭിക്കുമ്പോൾ മാത്രമേ ബാങ്ക് അക്കൗണ്ടിൽ തുക കൂട്ടുകയുള്ളൂ (ക്രെഡിറ്റ് ചെയ്യുകയുള്ളൂ).
*   **ഉപഭോക്താവിനുവേണ്ടി ബാങ്ക് നേരിട്ട് നടത്തുന്ന ചിലവുകൾ (ഡെബിറ്റുകൾ).**
    ബാങ്ക് ചാർജുകൾ, ഓവർഡ്രാഫ്റ്റിന്മേലുള്ള പലിശ, ബാങ്ക് അടച്ച ഇൻഷുറൻസ് പ്രീമിയം എന്നിവ. ബാങ്ക് ഇവ അക്കൗണ്ടിൽ നിന്ന് കുറയ്ക്കുന്നു, എന്നാൽ ബാങ്ക് സ്റ്റേറ്റ്മെന്റ് ലഭിച്ചതിന് ശേഷം മാത്രമേ സ്ഥാപനം ഇവ രേഖപ്പെടുത്തുകയുള്ളൂ.
*   **ബാങ്ക് അക്കൗണ്ടിൽ നേരിട്ട് നിക്ഷേപിച്ച തുകകൾ.**
    ഉപഭോക്താക്കൾ ചിലപ്പോൾ സ്ഥാപനത്തിന്റെ ബാങ്ക് അക്കൗണ്ടിലേക്ക് നേരിട്ട് പണം നിക്ഷേപിക്കാറുണ്ട്. ബാങ്ക് ഉടനടി അക്കൗണ്ടിൽ തുക കൂട്ടുന്നു, എന്നാൽ സ്ഥാപനം അത് പിന്നീടാണ് രേഖപ്പെടുത്തുന്നത്.
*   **ബാങ്ക് ശേഖരിക്കുന്ന പലിശയും ലാഭവിഹിതവും (ഡിവിഡന്റ്).**
    സ്ഥാപനത്തിന് വേണ്ടി പലിശയോ ലാഭവിഹിതമോ ലഭിക്കുമ്പോൾ ബാങ്ക് സ്ഥാപനത്തിന്റെ അക്കൗണ്ടിൽ തുക കൂട്ടുന്നു.
*   **ഉപഭോക്താക്കൾക്ക് വേണ്ടി ബാങ്ക് നേരിട്ട് നടത്തുന്ന പേയ്മെന്റുകൾ.**
    ഉദാഹരണത്തിന്, ഉപഭോക്താവിന്റെ മുൻകൂർ നിർദ്ദേശപ്രകാരം ബാങ്ക് നേരിട്ട് അടയ്ക്കുന്ന ടെലിഫോൺ ബിൽ, വാടക മുതലായവ.
*   **നിക്ഷേപിച്ച ചെക്കുകൾ അല്ലെങ്കിൽ ഡിസ്കൗണ്ട് ചെയ്ത ബില്ലുകൾ മടങ്ങുന്നത് (ഡിസോണർ ആകുന്നത്).**
    നിക്ഷേപിക്കുമ്പോൾ സ്ഥാപനം ക്യാഷ് ബുക്കിൽ തുക കൂട്ടുന്നു, എന്നാൽ അത് മടങ്ങുകയാണെങ്കിൽ ബാങ്ക് ആ എൻട്രി റദ്ദാക്കുന്നു. സ്ഥാപനം ഇത് പിന്നീടാണ് അറിയുന്നത്.

**B. തെറ്റുകൾ മൂലമുണ്ടാകുന്ന വ്യത്യാസങ്ങൾ**

*   **സ്ഥാപനം ഇടപാടുകൾ രേഖപ്പെടുത്തുമ്പോൾ വരുത്തുന്ന തെറ്റുകൾ.**
    ഉദാ: ക്യാഷ് ബുക്ക് കൂട്ടുമ്പോൾ വരുന്ന തെറ്റ്, ചെക്ക് രേഖപ്പെടുത്താൻ മറക്കുന്നത്.
*   **ബാങ്ക് ഇടപാടുകൾ രേഖപ്പെടുത്തുമ്പോൾ വരുത്തുന്ന തെറ്റുകൾ.**
    ഉദാ: വേറൊരു അക്കൗണ്ടിലേക്ക് പണം നിക്ഷേപിക്കുന്നത്.

### 4.4 ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് തയ്യാറാക്കൽ

ക്യാഷ് ബുക്കിലെ ബാലൻസോ അല്ലെങ്കിൽ പാസ്സ് ബുക്കിലെ ബാലൻസോ അടിസ്ഥാനമാക്കി ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് തയ്യാറാക്കാവുന്നതാണ്.

നാം ക്യാഷ് ബുക്ക് ബാലൻസിൽ നിന്നാണ് തുടങ്ങുന്നതെങ്കിൽ, പാസ്സ് ബുക്ക് ബാലൻസിലെത്താൻ നാം കാര്യങ്ങൾ കൂട്ടുകയും കുറയ്ക്കുകയും ചെയ്യുന്നു (നേരെ തിരിച്ചും ചെയ്യാവുന്നതാണ്).

**ക്യാഷ് ബുക്ക് ബാലൻസിൽ നിന്ന് തുടങ്ങുമ്പോൾ കൂട്ടാനും കുറയ്ക്കാനുമുള്ള നിയമങ്ങൾ:**

| വ്യത്യാസത്തിനുള്ള കാരണങ്ങൾ | പാസ്സ് ബുക്കിലെ മാറ്റം | എന്ത് ചെയ്യണം |
| :--- | :--- | :--- |
| നൽകിയ ചെക്കുകൾ, എന്നാൽ ബാങ്കിൽ എത്തിയിട്ടില്ല | പാസ്സ് ബുക്ക് ബാലൻസ് കൂടുതലാണ് | കൂട്ടുക (ADD) |
| ബാങ്ക് പലിശ നൽകി, എന്നാൽ ക്യാഷ് ബുക്കിൽ ഇല്ല | പാസ്സ് ബുക്ക് ബാലൻസ് കൂടുതലാണ് | കൂട്ടുക (ADD) |
| ഉപഭോക്താവ് നേരിട്ട് നിക്ഷേപിച്ചത് | പാസ്സ് ബുക്ക് ബാലൻസ് കൂടുതലാണ് | കൂട്ടുക (ADD) |
| നിക്ഷേപിച്ച ചെക്കുകൾ, എന്നാൽ പണം ലഭിച്ചിട്ടില്ല | പാസ്സ് ബുക്ക് ബാലൻസ് കുറവാണ് | കുറയ്ക്കുക (DEDUCT) |
| ബാങ്ക് ഈടാക്കിയ ചാർജുകൾ | പാസ്സ് ബുക്ക് ബാലൻസ് കുറവാണ് | കുറയ്ക്കുക (DEDUCT) |
| ബാങ്ക് നേരിട്ട് നൽകിയ പേയ്മെന്റുകൾ | പാസ്സ് ബുക്ക് ബാലൻസ് കുറവാണ് | കുറയ്ക്കുക (DEDUCT) |
| മടങ്ങിയ ചെക്കുകൾ | പാസ്സ് ബുക്ക് ബാലൻസ് കുറവാണ് | കുറയ്ക്കുക (DEDUCT) |

*(കുറിപ്പ്: പാസ്സ് ബുക്ക് ബാലൻസിൽ നിന്നാണ് തുടങ്ങുന്നതെങ്കിൽ, ഇതിന് നേരെ വിപരീതമായി ചെയ്യുക - കൂട്ടുന്നതിന് പകരം കുറയ്ക്കുക, കുറയ്ക്കുന്നതിന് പകരം കൂട്ടുക).*

### 4.5 തിരുത്തിയെഴുതിയ ക്യാഷ് ബുക്ക് തയ്യാറാക്കൽ

ചില സമയങ്ങളിൽ BRS തയ്യാറാക്കുന്നതിന് മുമ്പ്, ക്യാഷ് ബുക്കിൽ രേഖപ്പെടുത്തേണ്ടിയിരുന്ന എന്നാൽ വിട്ടുപോയ കാര്യങ്ങൾ അതിൽ ഉൾപ്പെടുത്തി ക്യാഷ് ബുക്ക് തിരുത്തിയെഴുതാറുണ്ട്.

**അഡ്ജസ്റ്റഡ് ക്യാഷ് ബുക്കിൽ രേഖപ്പെടുത്തേണ്ട കാര്യങ്ങൾ:**

*   ബാങ്ക് ചാർജുകൾ, ബാങ്ക് ഈടാക്കിയ പലിശ (ക്രെഡിറ്റ് വശത്ത്).
*   ബാങ്ക് ശേഖരിച്ച പലിശയോ ലാഭവിഹിതമോ (ഡെബിറ്റ് വശത്ത്).
*   ഉപഭോക്താക്കൾ നേരിട്ട് നിക്ഷേപിച്ചത് (ഡെബിറ്റ് വശത്ത്).
*   ബാങ്ക് നേരിട്ട് നൽകിയ പേയ്മെന്റുകൾ (ക്രെഡിറ്റ് വശത്ത്).
*   ചെക്കുകളോ ബില്ലുകളോ മടങ്ങിയാൽ (ക്രെഡിറ്റ് വശത്ത്).
*   ക്യാഷ് ബുക്കിൽ സംഭവിച്ച തെറ്റുകൾ.

**അഡ്ജസ്റ്റഡ് ക്യാഷ് ബുക്കിൽ രേഖപ്പെടുത്താത്ത കാര്യങ്ങൾ (BRS ൽ മാത്രം ഉൾപ്പെടുത്തുന്നവ):**

*   നൽകിയ ചെക്കുകൾ, എന്നാൽ ബാങ്കിൽ പണമാക്കിയിട്ടില്ലാത്തവ.
*   നിക്ഷേപിച്ച ചെക്കുകൾ, എന്നാൽ പണം ലഭിച്ചിട്ടില്ലാത്തവ.
*   ബാങ്ക് വരുത്തിയ തെറ്റുകൾ.

---

## 3️⃣ അക്കൗണ്ടിംഗ് ഫോർമാറ്റുകൾ

**ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് ഫോർമാറ്റ്**

**Bank Reconciliation Statement of [Name] as on [Date]**

| വിവരങ്ങൾ | കൂട്ടേണ്ട തുക (+) | കുറയ്ക്കേണ്ട തുക (-) |
| :--- | :--- | :--- |
| ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ബാലൻസ് | XXXX | |
| നൽകിയ ചെക്കുകൾ പണമാക്കിയിട്ടില്ല | XXXX | |
| ബാങ്ക് നൽകിയ പലിശ | XXXX | |
| ഉപഭോക്താവ് നേരിട്ട് നിക്ഷേപിച്ചത് | XXXX | |
| നിക്ഷേപിച്ച ചെക്കുകൾ മാറിയിട്ടില്ല | | XXXX |
| ബാങ്ക് ചാർജുകൾ | | XXXX |
| ബാങ്ക് നേരിട്ട് നൽകിയ പണം | | XXXX |
| മടങ്ങിയ ചെക്കുകൾ | | XXXX |
| പാസ്സ് ബുക്ക് പ്രകാരമുള്ള ബാലൻസ് | | XXXX |
| **Total** | **YYYY** | **YYYY** |

*(കുറിപ്പ്: പ്ലസ്/മൈനസ് കോളങ്ങൾക്ക് പകരം ഇന്നർ, ഔട്ടർ കോളങ്ങൾ ഉപയോഗിച്ചും ഈ ഫോർമാറ്റ് തയ്യാറാക്കാം).*

---

## 4️⃣ പരിഹരിച്ച ഉദാഹരണങ്ങൾ

### ഉദാഹരണം 1: ക്യാഷ് ബുക്ക് ബാലൻസിൽ നിന്ന് തുടങ്ങുന്ന BRS

**ചോദ്യം:**
താഴെ പറയുന്ന വിവരങ്ങളിൽ നിന്ന്, 2017 മാർച്ച് 31-ലെ ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് തയ്യാറാക്കുക:
*   ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ബാലൻസ് 3,200 രൂപ.
*   ചെക്ക് നൽകി എന്നാൽ ബാങ്കിൽ എത്തിയിട്ടില്ല 1,800 രൂപ.
*   ചെക്ക് നിക്ഷേപിച്ചു എന്നാൽ പണം ലഭിച്ചിട്ടില്ല 2,000 രൂപ.
*   ബാങ്ക് ചാർജുകൾ 150 രൂപ.

**പരിഹാരം:**

**Bank Reconciliation Statement as on March 31, 2017**

| വിവരങ്ങൾ | കൂട്ടേണ്ട തുക (+) | കുറയ്ക്കേണ്ട തുക (-) |
| :--- | :--- | :--- |
| ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ബാലൻസ് | 3,200 | |
| കൂട്ടുക: നൽകിയ ചെക്ക് ബാങ്കിൽ എത്തിയിട്ടില്ല | 1,800 | |
| കുറയ്ക്കുക: നിക്ഷേപിച്ച ചെക്കിന്റെ പണം ലഭിച്ചിട്ടില്ല | | 2,000 |
| കുറയ്ക്കുക: ബാങ്ക് ചാർജുകൾ | | 150 |
| പാസ്സ് ബുക്ക് പ്രകാരമുള്ള ബാലൻസ് (5,000 - 2,150) | | 2,850 |
| **Total** | **5,000** | **5,000** |

### ഉദാഹരണം 2: ഓവർഡ്രാഫ്റ്റ് ബാലൻസ് ഉള്ള BRS

**കുറിപ്പ്:** ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ഓവർഡ്രാഫ്റ്റ് എന്നാൽ മൈനസ് ബാലൻസ് ആണ് (ക്രെഡിറ്റ് ബാലൻസ്). ഇത് മൈനസ് കോളത്തിൽ എഴുതണം.

**ചോദ്യം:**
2017 ഡിസംബർ 31-ലെ BRS തയ്യാറാക്കുക:
*   ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ഓവർഡ്രാഫ്റ്റ് 10,000 രൂപ.
*   നിക്ഷേപിച്ച ചെക്കുകൾ മാറിയിട്ടില്ല 2,500 രൂപ.
*   നൽകിയ ചെക്കുകൾ പണമാക്കിയിട്ടില്ല 1,500 രൂപ.
*   ഓവർഡ്രാഫ്റ്റിന്മേൽ ബാങ്ക് ഈടാക്കിയ പലിശ 500 രൂപ.

**പരിഹാരം:**

**Bank Reconciliation Statement as on December 31, 2017**

| വിവരങ്ങൾ | കൂട്ടേണ്ട തുക (+) | കുറയ്ക്കേണ്ട തുക (-) |
| :--- | :--- | :--- |
| ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ഓവർഡ്രാഫ്റ്റ് | | 10,000 |
| കുറയ്ക്കുക: നിക്ഷേപിച്ച ചെക്കുകൾ മാറിയിട്ടില്ല | | 2,500 |
| കൂട്ടുക: നൽകിയ ചെക്കുകൾ പണമാക്കിയിട്ടില്ല | 1,500 | |
| കുറയ്ക്കുക: ഓവർഡ്രാഫ്റ്റിന്മേൽ പലിശ | | 500 |
| പാസ്സ് ബുക്ക് പ്രകാരമുള്ള ഓവർഡ്രാഫ്റ്റ് (13,000 - 1,500) | 11,500 | |
| **Total** | **13,000** | **13,000** |

---

## 5️⃣ പ്രധാനപ്പെട്ട സൂത്രവാക്യങ്ങളും നിയമങ്ങളും

**തുടങ്ങുന്ന ബാലൻസിനെ അടിസ്ഥാനമാക്കിയുള്ള നിയമങ്ങൾ:**

*   **ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ബാലൻസ് (ഡെബിറ്റ്):** പ്ലസ് കോളത്തിൽ എഴുതുക.
*   **ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ഓവർഡ്രാഫ്റ്റ് (ക്രെഡിറ്റ്):** മൈനസ് കോളത്തിൽ എഴുതുക.
*   **പാസ്സ് ബുക്ക് പ്രകാരമുള്ള ബാലൻസ് (ക്രെഡിറ്റ്):** പ്ലസ് കോളത്തിൽ എഴുതുക.
*   **പാസ്സ് ബുക്ക് പ്രകാരമുള്ള ഓവർഡ്രാഫ്റ്റ് (ഡെബിറ്റ്):** മൈനസ് കോളത്തിൽ എഴുതുക.

*(സൂചന: പാസ്സ് ബുക്ക് ബാലൻസിൽ നിന്നാണ് തുടങ്ങുന്നതെങ്കിൽ, ക്യാഷ് ബുക്കിന് ഉപയോഗിക്കുന്ന കൂട്ടുക/കുറയ്ക്കുക നിയമങ്ങളെ നേരെ തിരിച്ചു ചെയ്യുക).*

---

## 6️⃣ ചുരുക്കരൂപം

*   ക്യാഷ് ബുക്കിലെ ബാങ്ക് ബാലൻസും പാസ്സ് ബുക്ക് ബാലൻസും തമ്മിലുള്ള വ്യത്യാസം പരിഹരിക്കുന്നതാണ് BRS.
*   വ്യത്യാസത്തിനുള്ള കാരണങ്ങളിൽ സമയതാമസവും (ഉദാ: ചെക്കുകൾ മാറാത്തത്) തെറ്റുകളും ഉൾപ്പെടുന്നു.
*   നൽകിയ ചെക്കുകൾ പണമാക്കി മാറ്റാതിരിക്കുമ്പോൾ ക്യാഷ് ബുക്കിനെ അപേക്ഷിച്ച് പാസ്സ് ബുക്ക് ബാലൻസ് കൂടുതലായിരിക്കും.
*   നിക്ഷേപിച്ച ചെക്കുകൾ പണമായി മാറാതിരിക്കുമ്പോൾ ക്യാഷ് ബുക്കിനെ അപേക്ഷിച്ച് പാസ്സ് ബുക്ക് ബാലൻസ് കുറവായിരിക്കും.
*   BRS തയ്യാറാക്കുന്നതിന് മുമ്പ്, വിട്ടുപോയ കാര്യങ്ങൾ (ബാങ്ക് ചാർജുകൾ പോലെ) രേഖപ്പെടുത്തുന്നതാണ് അഡ്ജസ്റ്റഡ് ക്യാഷ് ബുക്ക്.
*   "മാറാത്ത ചെക്കുകൾ" പോലുള്ളവ ഒരിക്കലും അഡ്ജസ്റ്റഡ് ക്യാഷ് ബുക്കിൽ രേഖപ്പെടുത്തില്ല.
`
    }
  },
  glossary: [
    {
      term: { en: "Bank Reconciliation Statement", ml: "ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ്" },
      definition: { en: "A statement prepared to reconcile the difference between the bank balance shown by the cash book and bank passbook.", ml: "ക്യാഷ് ബുക്കിലെയും പാസ്സ് ബുക്കിലെയും ബാങ്ക് ബാലൻസുകൾ തമ്മിലുള്ള വ്യത്യാസം പൊരുത്തപ്പെടുത്താൻ തയ്യാറാക്കുന്ന സ്റ്റേറ്റ്മെന്റ്." }
    },
    {
      term: { en: "Pass Book", ml: "പാസ്സ് ബുക്ക്" },
      definition: { en: "A copy of a customer's bank account as shown by the bank records.", ml: "ബാങ്ക് രേഖകളിലെ ഉപഭോക്താവിന്റെ അക്കൗണ്ടിന്റെ പകർപ്പ്." }
    },
    {
      term: { en: "Overdraft", ml: "ഓവർഡ്രാഫ്റ്റ്" },
      definition: { en: "A negative bank balance where the firm owes money to the bank.", ml: "സ്ഥാപനം ബാങ്കിന് പണം നൽകാനുള്ള അവസ്ഥ (നെഗറ്റീവ് ബാലൻസ്)." }
    },
    {
      term: { en: "Dishonoured Cheque", ml: "മടങ്ങിയ ചെക്ക്" },
      definition: { en: "A cheque that the bank refuses to pay, often due to insufficient funds.", ml: "അക്കൗണ്ടിൽ പണമില്ലാത്തതിനാലോ മറ്റോ ബാങ്ക് പണം നൽകാൻ വിസമ്മതിക്കുന്ന ചെക്ക്." }
    },
    {
      term: { en: "Amended Cash Book", ml: "അഡ്ജസ്റ്റഡ് ക്യാഷ് ബുക്ക്" },
      definition: { en: "An updated cash book prepared by recording omitted items before preparing the BRS.", ml: "BRS തയ്യാറാക്കുന്നതിന് മുമ്പ് വിട്ടുപോയ കാര്യങ്ങൾ ഉൾപ്പെടുത്തി പുതുക്കിയെഴുതുന്ന ക്യാഷ് ബുക്ക്." }
    }
  ],
  sample_questions: [
    {
      q_id: "q1",
      question: {
        en: "What is a Bank Reconciliation Statement?",
        ml: "ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് എന്നാൽ എന്ത്?"
      },
      answer: {
        en: "A statement prepared to reconcile the bank balance as per the cash book with the balance as per the bank passbook by showing the causes of differences between the two.",
        ml: "ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ബാങ്ക് ബാലൻസും പാസ്സ് ബുക്ക് പ്രകാരമുള്ള ബാലൻസും തമ്മിലുള്ള വ്യത്യാസത്തിന്റെ കാരണങ്ങൾ കാണിച്ച് അവയെ പൊരുത്തപ്പെടുത്തുന്നതിനായി തയ്യാറാക്കുന്ന സ്റ്റേറ്റ്മെന്റാണിത്."
      }
    },
    {
      q_id: "q2",
      question: {
        en: "State any two reasons for the difference between cash book and passbook balances.",
        ml: "ക്യാഷ് ബുക്കിലെയും പാസ്സ് ബുക്കിലെയും ബാലൻസുകൾ തമ്മിൽ വ്യത്യാസമുണ്ടാകാനുള്ള ഏതെങ്കിലും രണ്ട് കാരണങ്ങൾ പറയുക."
      },
      answer: {
        en: "1. Cheques issued by the firm but not yet presented for payment.\n2. Bank charges debited by the bank but not recorded in the cash book.",
        ml: "1. സ്ഥാപനം നൽകിയ ചെക്കുകൾ ബാങ്കിൽ പണമാക്കി മാറ്റാൻ നൽകാതിരിക്കുന്നത്.\n2. ബാങ്ക് ഈടാക്കിയ ചാർജുകൾ ക്യാഷ് ബുക്കിൽ രേഖപ്പെടുത്താതിരിക്കുന്നത്."
      }
    },
    {
      q_id: "q3",
      question: {
        en: "If you start the BRS with 'Balance as per Cash Book', what will you do with 'Cheques deposited but not cleared'?",
        ml: "BRS തയ്യാറാക്കുമ്പോൾ 'ക്യാഷ് ബുക്ക് പ്രകാരമുള്ള ബാലൻസ്' വെച്ചാണ് തുടങ്ങുന്നതെങ്കിൽ, 'നിക്ഷേപിച്ചതും എന്നാൽ മാറിയിട്ടില്ലാത്തതുമായ ചെക്കുകളെ' നിങ്ങൾ എന്ത് ചെയ്യും?"
      },
      answer: {
        en: "It will be deducted (placed in the Minus column) because the passbook balance is less than the cash book balance.",
        ml: "അത് കുറയ്ക്കണം (മൈനസ് കോളത്തിൽ എഴുതണം), കാരണം പാസ്സ് ബുക്കിലെ ബാലൻസ് ക്യാഷ് ബുക്കിനേക്കാൾ കുറവായിരിക്കും."
      }
    },
    {
      q_id: "q4",
      question: {
        en: "What is meant by 'Amended Cash Book'?",
        ml: "'അഡ്ജസ്റ്റഡ് (തിരുത്തിയെഴുതിയ) ക്യാഷ് ബുക്ക്' എന്നാൽ എന്ത്?"
      },
      answer: {
        en: "It is an updated cash book prepared by recording transactions that were recorded by the bank (like bank charges, direct deposits) but omitted in the cash book, before preparing the BRS.",
        ml: "BRS തയ്യാറാക്കുന്നതിന് മുൻപായി, ബാങ്ക് രേഖപ്പെടുത്തുകയും എന്നാൽ ക്യാഷ് ബുക്കിൽ വിട്ടുപോവുകയും ചെയ്ത ഇടപാടുകൾ (ബാങ്ക് ചാർജുകൾ, നേരിട്ടുള്ള നിക്ഷേപങ്ങൾ എന്നിവ) ഉൾപ്പെടുത്തി തയ്യാറാക്കുന്ന പുതുക്കിയ ക്യാഷ് ബുക്കാണിത്."
      }
    },
    {
      q_id: "q5",
      question: {
        en: "Why is a cheque dishonoured recorded on the minus side when starting with the Cash Book balance?",
        ml: "ക്യാഷ് ബുക്ക് ബാലൻസിൽ നിന്ന് തുടങ്ങുമ്പോൾ, മടങ്ങിയ ചെക്കുകൾ എന്തുകൊണ്ടാണ് മൈനസ് വശത്ത് രേഖപ്പെടുത്തുന്നത്?"
      },
      answer: {
        en: "Because the firm had increased the cash book balance when depositing the cheque, but the bank reduced the passbook balance upon dishonour. To reach the passbook balance, we must deduct it.",
        ml: "കാരണം ചെക്ക് നിക്ഷേപിച്ചപ്പോൾ സ്ഥാപനം ക്യാഷ് ബുക്ക് ബാലൻസ് കൂട്ടിയിരുന്നു, എന്നാൽ ചെക്ക് മടങ്ങിയപ്പോൾ ബാങ്ക് പാസ്സ് ബുക്ക് ബാലൻസ് കുറച്ചു. പാസ്സ് ബുക്ക് ബാലൻസിലെത്താൻ നാം ഇത് കുറയ്ക്കണം."
      }
    },
    {
      q_id: "q6",
      question: {
        en: "Does preparing a BRS rectify the errors in the Cash Book?",
        ml: "BRS തയ്യാറാക്കുന്നത് ക്യാഷ് ബുക്കിലെ തെറ്റുകൾ തിരുത്തുമോ?"
      },
      answer: {
        en: "No, BRS is only a reconciliation statement to identify differences. Errors in the cash book can only be rectified by preparing an amended cash book.",
        ml: "ഇല്ല, BRS എന്നത് വ്യത്യാസങ്ങൾ കണ്ടെത്താൻ തയ്യാറാക്കുന്ന ഒരു സ്റ്റേറ്റ്മെന്റ് മാത്രമാണ്. ക്യാഷ് ബുക്കിലെ തെറ്റുകൾ തിരുത്തണമെങ്കിൽ അഡ്ജസ്റ്റഡ് ക്യാഷ് ബുക്ക് തയ്യാറാക്കണം."
      }
    },
    {
      q_id: "q7",
      question: {
        en: "Mention one item that is recorded in the BRS but not in the Amended Cash Book.",
        ml: "BRS-ൽ രേഖപ്പെടുത്തുന്നതും എന്നാൽ അഡ്ജസ്റ്റഡ് ക്യാഷ് ബുക്കിൽ രേഖപ്പെടുത്താത്തതുമായ ഒരു കാര്യം വ്യക്തമാക്കുക."
      },
      answer: {
        en: "Cheques issued but not presented for payment.",
        ml: "നൽകിയതും എന്നാൽ പണമാക്കി മാറ്റാൻ ബാങ്കിൽ നൽകിയിട്ടില്ലാത്തതുമായ ചെക്കുകൾ."
      }
    },
    {
      q_id: "q8",
      question: {
        en: "What happens to the BRS if interest is credited by the bank? (Starting with Cash Book balance)",
        ml: "ബാങ്ക് പലിശ നൽകിയാൽ BRS-ൽ എന്ത് സംഭവിക്കും? (ക്യാഷ് ബുക്ക് ബാലൻസിൽ നിന്ന് തുടങ്ങുമ്പോൾ)"
      },
      answer: {
        en: "It is added (Plus column) because it increases the balance in the passbook.",
        ml: "ഇത് കൂട്ടുന്നു (പ്ലസ് കോളം), കാരണം ഇത് പാസ്സ് ബുക്കിലെ ബാലൻസ് വർദ്ധിപ്പിക്കുന്നു."
      }
    },
    {
      q_id: "q9",
      question: {
        en: "\"Overdraft as per Pass Book is Rs. 5,000.\" Which column will you write this in the BRS?",
        ml: "\"പാസ്സ് ബുക്ക് പ്രകാരമുള്ള ഓവർഡ്രാഫ്റ്റ് 5,000 രൂപ.\" BRS-ൽ നിങ്ങൾ ഇത് ഏത് കോളത്തിലാണ് എഴുതുക?"
      },
      answer: {
        en: "It represents a debit balance in the passbook, so it is written in the Minus (-) column.",
        ml: "ഇത് പാസ്സ് ബുക്കിലെ ഒരു ഡെബിറ്റ് ബാലൻസിനെ സൂചിപ്പിക്കുന്നു, അതിനാൽ ഇത് മൈനസ് (-) കോളത്തിൽ എഴുതണം."
      }
    },
    {
      q_id: "q10",
      question: {
        en: "How does a direct payment made by the bank affect the Cash Book and Pass Book balances?",
        ml: "ബാങ്ക് നേരിട്ട് നടത്തുന്ന ഒരു പേയ്മെന്റ് ക്യാഷ് ബുക്ക്, പാസ്സ് ബുക്ക് ബാലൻസുകളെ എങ്ങനെ ബാധിക്കുന്നു?"
      },
      answer: {
        en: "It decreases the Pass Book balance immediately. The Cash Book balance remains higher until the firm receives information and records it.",
        ml: "ഇത് ഉടനടി പാസ്സ് ബുക്ക് ബാലൻസ് കുറയ്ക്കുന്നു. സ്ഥാപനത്തിന് വിവരം ലഭിച്ച് അത് രേഖപ്പെടുത്തുന്നതുവരെ ക്യാഷ് ബുക്ക് ബാലൻസ് കൂടുതലായി തുടരും."
      }
    }
  ],
  quiz: [
    {
      question: {
        en: "A Bank Reconciliation Statement is prepared by:",
        ml: "ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ് തയ്യാറാക്കുന്നത്:"
      },
      options: [
        { en: "Bank", ml: "ബാങ്ക്" },
        { en: "Customer of the bank", ml: "ബാങ്കിന്റെ ഉപഭോക്താവ്" },
        { en: "Creditors", ml: "കടക്കാർ" },
        { en: "Debtors", ml: "കടം വാങ്ങിയവർ" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "It is prepared by the customer (the business) to reconcile their cash book with the bank statement.",
        ml: "ക്യാഷ് ബുക്കും ബാങ്ക് സ്റ്റേറ്റ്മെന്റും പൊരുത്തപ്പെടുത്താൻ ഉപഭോക്താവാണ് (ബിസിനസ്സ്) ഇത് തയ്യാറാക്കുന്നത്."
      }
    },
    {
      question: {
        en: "A debit balance in the bank passbook means:",
        ml: "ബാങ്ക് പാസ്സ് ബുക്കിലെ ഡെബിറ്റ് ബാലൻസ് അർത്ഥമാക്കുന്നത്:"
      },
      options: [
        { en: "Bank balance", ml: "ബാങ്ക് ബാലൻസ്" },
        { en: "Bank overdraft", ml: "ബാങ്ക് ഓവർഡ്രാഫ്റ്റ്" },
        { en: "Cash balance", ml: "ക്യാഷ് ബാലൻസ്" },
        { en: "None of these", ml: "ഇവയൊന്നുമല്ല" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "A debit balance in the passbook indicates an overdraft (amount owed to the bank).",
        ml: "പാസ്സ് ബുക്കിലെ ഡെബിറ്റ് ബാലൻസ് ഓവർഡ്രാഫ്റ്റിനെ (ബാങ്കിന് നൽകാനുള്ള തുക) സൂചിപ്പിക്കുന്നു."
      }
    },
    {
      question: {
        en: "When starting with Cash Book balance, bank charges debited by the bank are:",
        ml: "ക്യാഷ് ബുക്ക് ബാലൻസിൽ നിന്ന് തുടങ്ങുമ്പോൾ, ബാങ്ക് ഈടാക്കിയ ചാർജുകൾ:"
      },
      options: [
        { en: "Added", ml: "കൂട്ടുന്നു" },
        { en: "Deducted", ml: "കുറയ്ക്കുന്നു" },
        { en: "Ignored", ml: "ഒഴിവാക്കുന്നു" },
        { en: "Multiplied", ml: "ഗുണിക്കുന്നു" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "Bank charges reduce the passbook balance, so they must be deducted from the cash book balance to reconcile.",
        ml: "ബാങ്ക് ചാർജുകൾ പാസ്സ് ബുക്ക് ബാലൻസ് കുറയ്ക്കുന്നു, അതിനാൽ പൊരുത്തപ്പെടുത്താൻ ക്യാഷ് ബുക്ക് ബാലൻസിൽ നിന്ന് അത് കുറയ്ക്കണം."
      }
    },
    {
      question: {
        en: "Which of the following is NOT recorded in the Amended Cash Book?",
        ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് അഡ്ജസ്റ്റഡ് ക്യാഷ് ബുക്കിൽ രേഖപ്പെടുത്താത്തത്?"
      },
      options: [
        { en: "Bank charges", ml: "ബാങ്ക് ചാർജുകൾ" },
        { en: "Direct deposit by customer", ml: "ഉപഭോക്താവ് നേരിട്ട് നിക്ഷേപിച്ചത്" },
        { en: "Cheques issued but not presented", ml: "നൽകിയ ചെക്കുകൾ പണമാക്കിയിട്ടില്ല" },
        { en: "Interest credited by bank", ml: "ബാങ്ക് നൽകിയ പലിശ" }
      ],
      correctAnswerIndex: 2,
      explanation: {
        en: "Timing differences like cheques issued but not presented are only shown in the BRS, not in the amended cash book.",
        ml: "നൽകിയ ചെക്കുകൾ പണമാക്കിയിട്ടില്ല എന്നത് പോലെയുള്ള സമയ വ്യത്യാസങ്ങൾ BRS-ൽ മാത്രമാണ് കാണിക്കുന്നത്, അഡ്ജസ്റ്റഡ് ക്യാഷ് ബുക്കിലല്ല."
      }
    },
    {
      question: {
        en: "Cheques deposited but not cleared will ________ the passbook balance relative to the cash book.",
        ml: "നിക്ഷേപിച്ച ചെക്കുകൾ മാറിയിട്ടില്ല എന്നത് ക്യാഷ് ബുക്കിനെ അപേക്ഷിച്ച് പാസ്സ് ബുക്ക് ബാലൻസിനെ ________."
      },
      options: [
        { en: "Increase", ml: "വർദ്ധിപ്പിക്കും" },
        { en: "Decrease", ml: "കുറയ്ക്കും" },
        { en: "Not affect", ml: "ബാധിക്കില്ല" },
        { en: "Double", ml: "ഇരട്ടിയാക്കും" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "Since the money hasn't been collected by the bank yet, the passbook balance will be lower than the cash book balance.",
        ml: "ബാങ്ക് പണം ശേഖരിച്ചിട്ടില്ലാത്തതിനാൽ, പാസ്സ് ബുക്ക് ബാലൻസ് ക്യാഷ് ബുക്ക് ബാലൻസിനേക്കാൾ കുറവായിരിക്കും."
      }
    }
  ]
};
