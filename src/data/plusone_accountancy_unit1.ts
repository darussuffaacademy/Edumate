import { Lesson } from './curriculum';

export const plusOneAccountancyUnit1: Lesson = {
  id: "pl-acc-11-intro",
  title: { en: "Introduction to Accounting", ml: "അക്കൗണ്ടിംഗിലേക്ക് പരിചയം" },
  estimated_time_mins: 120,
  learning_objectives: [
    { en: "State the meaning and need of accounting", ml: "അക്കൗണ്ടിംഗിന്റെ അർത്ഥവും ആവശ്യകതയും വ്യക്തമാക്കാൻ" },
    { en: "Discuss accounting as a source of information", ml: "വിവരങ്ങളുടെ ഉറവിടം എന്ന നിലയിൽ അക്കൗണ്ടിംഗിനെക്കുറിച്ച് ചർച്ച ചെയ്യാൻ" },
    { en: "Identify the internal and external users of accounting information", ml: "അക്കൗണ്ടിംഗ് വിവരങ്ങൾ ഉപയോഗിക്കുന്ന ആന്തരികരും ബാഹ്യരുമായ ഉപയോക്താക്കളെ തിരിച്ചറിയാൻ" },
    { en: "Explain the objectives of accounting", ml: "അക്കൗണ്ടിംഗിന്റെ ലക്ഷ്യങ്ങൾ വിശദീകരിക്കാൻ" },
    { en: "Describe the role of accounting", ml: "അക്കൗണ്ടിംഗിന്റെ പങ്ക് വിവരിക്കാൻ" },
    { en: "Explain the basic terms used in accounting", ml: "അക്കൗണ്ടിംഗിൽ ഉപയോഗിക്കുന്ന അടിസ്ഥാന പദങ്ങൾ വിശദീകരിക്കാൻ" }
  ],
  content: {
    intro: {
      en: "This chapter introduces the fundamental concepts of accounting, its meaning, objectives, and basic terminology.",
      ml: "ഈ അധ്യായം അക്കൗണ്ടിംഗിന്റെ അടിസ്ഥാന ആശയങ്ങൾ, അതിന്റെ അർത്ഥം, ലക്ഷ്യങ്ങൾ, അടിസ്ഥാന പദങ്ങൾ എന്നിവ പരിചയപ്പെടുത്തുന്നു."
    },
    core: {
      en: `
# 📘 Chapter 1: Introduction to Accounting

---

## 1️⃣ Chapter Overview

*   **🎯 Learning Objectives**:
    *   State the meaning and need of accounting.
    *   Discuss accounting as a source of information.
    *   Identify the internal and external users of accounting information.
    *   Explain the objectives of accounting.
    *   Describe the role of accounting.
    *   Explain the basic terms used in accounting.
*   **🔑 Key Terms**: Accounting, Economic Events, Assets, Liabilities, Capital, Revenue, Expenses, Transaction, Entity, Voucher, Debtors, Creditors.
*   **📌 Real-life Applications**: Managing personal finances, tracking business profit, tax calculation, and financial planning.
*   **📚 Previous Knowledge Required**: Basic understanding of business activities and monetary transactions.

---

## 2️⃣ Detailed Concept Sections

### 4.1 Meaning of Accounting

**Accounting is the language of business.**

> **Definition (AAA):** "The process of identifying, measuring and communicating economic information to permit informed judgments and decisions by users of information."

**Key Aspects of Accounting:**

1.  **Economic Events**: An economic event is a happening of consequence to a business organisation which consists of transactions that are measurable in monetary terms.
    *   **External Events**: Transactions between an outsider and an organisation (e.g., Sale of goods).
    *   **Internal Events**: Transactions occurring entirely within the enterprise (e.g., Supply of raw materials to the manufacturing department).

2.  **Identification, Measurement, Recording, and Communication**:
    *   **Identification**: Determining what transactions to record. Only financial transactions are recorded.
    *   **Measurement**: Quantification of business transactions into financial terms using a monetary unit (like Rupees).
    *   **Recording**: Recording the identified and measured economic events in books of account in chronological order.
    *   **Communication**: Generating pertinent information and communicating it to management and other users through accounting reports.

3.  **Organisation**: It refers to a business enterprise, whether for profit or not-for-profit motive.

4.  **Interested Users of Information**: Accounting communicates financial information to internal and external users.

---

### 4.2 Users of Accounting Information

Users need financial information to make important business decisions.

| Type of User | Examples |
| :--- | :--- |
| **Internal Users** | Chief Executive, Financial Officer, Plant Managers, Supervisors. |
| **External Users** | Investors, Creditors, Tax Authorities, Regulatory Agencies, Customers. |

---

### 4.3 Branches of Accounting

1.  **Financial Accounting**: It assists in keeping a systematic record of financial transactions and the preparation of financial reports to measure organisational success.
2.  **Cost Accounting**: It assists in analysing the expenditure to ascertain the cost of various products manufactured or services rendered by the firm.
3.  **Management Accounting**: It deals with providing necessary accounting information to people within the organisation to enable them in decision-making, planning, and controlling.

---

### 4.4 Qualitative Characteristics of Accounting Information

To be useful for decision making, accounting information must possess four characteristics:

1.  **Reliability**: The information must be dependable, free from error and bias, and verifiable.
2.  **Relevance**: The information must be available in time and help users form predictions or confirm past evaluations.
3.  **Understandability**: Decision-makers must interpret the information in the same sense as it is prepared.
4.  **Comparability**: Users should be able to compare the financial reports of an entity over different time periods and with other entities.

---

### 4.5 Objectives of Accounting

*   **Maintenance of Records of Business Transactions**: Keeping a systematic and complete record of all business transactions.
*   **Calculation of Profit and Loss**: Ascertaining whether the business has earned profits or incurred losses during a period.
*   **Depiction of Financial Position**: Ascertaining the financial position in the form of assets and liabilities at the end of the accounting period.
*   **Providing Accounting Information**: Communicating reports, statements, and graphs to interested users.

---

### 4.6 Basic Terms in Accounting

1.  **Entity**: A specifically identifiable business enterprise like ITC Limited, Super Bazaar, etc.
2.  **Transaction**: An event involving some value between two or more entities (e.g., purchase of goods).
3.  **Assets**: Economic resources of an enterprise that can be expressed in monetary terms.
    *   **Non-Current Assets**: Assets held for long-term use (e.g., Land, Machinery).
    *   **Current Assets**: Assets that can be converted into cash within one year (e.g., Cash, Debtors, Inventory).
4.  **Liabilities**: Obligations or debts that an enterprise has to pay in the future.
    *   **Non-Current Liabilities**: Debts payable after a long period (e.g., Long term bank loans).
    *   **Current Liabilities**: Debts payable within a year (e.g., Creditors, Short term loans).
5.  **Capital**: Amount invested by the owner in the firm.
6.  **Sales**: Total revenues from goods or services sold or provided to customers.
7.  **Revenues**: Amounts earned by the business, including sales, commission, interest, dividends, rent received, etc.
8.  **Expenses**: Costs incurred by a business in the process of earning revenue (e.g., rent, salaries).
9.  **Expenditure**: Spending money or incurring a liability for some benefit, service or property.
    *   **Capital Expenditure**: Benefit lasts for more than a year (e.g., buying machinery).
    *   **Revenue Expenditure**: Benefit is exhausted within a year (e.g., paying rent).
10. **Profit**: The excess of revenues over expenses during an accounting year.
11. **Gain**: A profit that arises from events incidental to business (e.g., sale of fixed assets).
12. **Loss**: The excess of expenses over revenues. Also includes lost items (e.g., loss by fire).
13. **Discount**: Deduction in the price of the goods sold.
    *   **Trade Discount**: Offered at the time of selling goods.
    *   **Cash Discount**: Offered for prompt payment.
14. **Voucher**: The documentary evidence in support of a transaction.
15. **Goods**: Products in which the business unit is dealing.
16. **Drawings**: Withdrawal of money or goods by the owner from the business for personal use.
17. **Purchases**: Total amount of goods procured by a business for use or sale.
18. **Stock**: Measure of goods on hand at the end (Closing stock) or beginning (Opening stock) of an accounting period.
19. **Debtors**: Persons or entities who owe money to the enterprise for buying goods on credit.
20. **Creditors**: Persons or entities to whom the enterprise owes money for purchasing goods on credit.

---

## 3️⃣ Tables Section

### Golden Rules of Accounting

| Types of Account | Debit Rule | Credit Rule |
| :--- | :--- | :--- |
| **Personal Account** | Debit the receiver | Credit the giver |
| **Real Account** (Assets) | Debit what comes in | Credit what goes out |
| **Nominal Account** (Revenues & Expenses) | Debit all expenses and losses | Credit all incomes and gains |

---

## 4️⃣ Flowcharts Section

### Accounting Process

**Transaction**
↓
**Journal** (Recording)
↓
**Ledger** (Classifying)
↓
**Trial Balance** (Summarising)
↓
**Financial Statements** (Communicating)

---

## 5️⃣ Formulas Section

1.  **Accounting Equation**:
    **Assets = Capital + Liabilities**
    *(All properties owned by a business are equal to the total claims against them).*

2.  **Profit Calculation**:
    **Profit = Total Revenues - Total Expenses**

---

## 6️⃣ Graph Section

*Not applicable for this introductory chapter.*

---

## 7️⃣ Concept Map

**Accounting**
↓
**Process** (Identify → Measure → Record → Communicate)
↓
**Users** (Internal & External)
↓
**Objectives** (Record Keeping, Profit/Loss, Financial Position)
↓
**Terms** (Assets, Liabilities, Capital, etc.)

---

## 8️⃣ Practice Section

### Original Q&A

**Q1. What is Accounting?**
**Answer:** Accounting is the process of identifying, measuring, recording and communicating the required information relating to the economic events of an organisation to the interested users.

**Q2. Name any two internal users and two external users of accounting information.**
**Answer:** Internal Users: Chief Executive, Plant Managers. External Users: Investors, Creditors (Banks).

**Q3. State the three main branches of accounting.**
**Answer:** Financial Accounting, Cost Accounting, and Management Accounting.

**Q4. Define the term 'Assets' with an example.**
**Answer:** Assets are economic resources of an enterprise that can be usefully expressed in monetary terms. Example: Machinery, Cash.

**Q5. Distinguish between Debtors and Creditors.**
**Answer:** Debtors are persons who owe money to the business for buying goods on credit. Creditors are persons to whom the business owes money for buying goods on credit.

**Q6. What are the four qualitative characteristics of accounting information?**
**Answer:** Reliability, Relevance, Understandability, and Comparability.

**Q7. What is 'Capital'?**
**Answer:** Amount invested by the owner in the firm is known as capital.

**Q8. Write the fundamental accounting equation.**
**Answer:** Assets = Capital + Liabilities.

**Q9. Give an example for a non-current asset and a current liability.**
**Answer:** Non-current asset: Land and Building. Current liability: Short term borrowings (or Creditors).

**Q10. Explain the objective "Calculation of Profit and Loss" in accounting.**
**Answer:** Business owners need to know the net result of their operations. Accounting helps ascertain the profit earned or loss sustained during an accounting period by comparing revenues and expenses.

### Additional Practice

**MCQs:**
1. Which of the following is NOT an internal user of accounting information?
   a) Chief Executive  b) Plant Manager  c) Creditor  d) Supervisor
   *Answer: c) Creditor (External user)*

2. The amount invested by the owner into the business is called:
   a) Asset  b) Capital  c) Liability  d) Revenue
   *Answer: b) Capital*

**Assertion-Reason:**
*Assertion (A):* Accounting is called the language of business.
*Reason (R):* It communicates financial information to various interested users.
*Answer: Both A and R are true, and R is the correct explanation of A.*

---

## 9️⃣ Quick Revision Box

*   **Accounting is the Language of Business.**
*   **Assets = Capital + Liabilities.**
*   **AAA Definition** is the standard for accounting meaning.
*   **Reliability, Relevance, Understandability, Comparability** are qualitative traits.
*   **Drawings** reduce Capital.
*   **Creditors** are Liabilities; **Debtors** are Assets.
*   **Voucher** is the primary evidence for any transaction.

---

## 🔟 Teacher Notes Section

*   **Classroom Activity**: Ask students to list daily transactions at home and identify them as assets or expenses.
*   **Digital Tool**: Use a simple spreadsheet to demonstrate the Accounting Equation.
*   **Misconception**: Students often confuse 'Gain' with 'Profit'. Explain that Gain is incidental while Profit is from regular operations.

---

## 📄 Student Summary Sheet

*   **Definition**: Process of identifying, measuring, recording, and communicating.
*   **Equation**: A = C + L.
*   **Types of Assets**: Current vs Non-Current.
*   **Types of Liabilities**: Current vs Non-Current.
*   **Qualitative Traits**: R.R.U.C (Reliability, Relevance, Understandability, Comparability).
`,
      ml: `
# 📘 അധ്യായം 1: അക്കൗണ്ടിംഗിലേക്ക് പരിചയം

---

## 1️⃣ അധ്യായം അവലോകനം

*   **🎯 പഠന ലക്ഷ്യങ്ങൾ**:
    *   അക്കൗണ്ടിംഗിന്റെ അർത്ഥവും ആവശ്യകതയും വ്യക്തമാക്കാൻ.
    *   വിവരങ്ങളുടെ ഉറവിടം എന്ന നിലയിൽ അക്കൗണ്ടിംഗിനെക്കുറിച്ച് ചർച്ച ചെയ്യാൻ.
    *   അക്കൗണ്ടിംഗ് വിവരങ്ങൾ ഉപയോഗിക്കുന്ന ആന്തരികരും ബാഹ്യരുമായ ഉപയോക്താക്കളെ തിരിച്ചറിയാൻ.
    *   അക്കൗണ്ടിംഗിന്റെ ലക്ഷ്യങ്ങൾ വിശദീകരിക്കാൻ.
    *   അക്കൗണ്ടിംഗിന്റെ പങ്ക് വിവരിക്കാൻ.
    *   അക്കൗണ്ടിംഗിൽ ഉപയോഗിക്കുന്ന അടിസ്ഥാന പദങ്ങൾ വിശദീകരിക്കാൻ.
*   **🔑 പ്രധാന പദങ്ങൾ**: അക്കൗണ്ടിംഗ്, സാമ്പത്തിക സംഭവങ്ങൾ, ആസ്തികൾ, ബാധ്യതകൾ, മൂലധനം, വരുമാനം, ചിലവുകൾ, ഇടപാട്, എന്റിറ്റി, വൗച്ചർ, കടക്കാർ, കടപ്പറ്റുകാർ.
*   **📌 പ്രായോഗിക ഉപയോഗങ്ങൾ**: വ്യക്തിഗത സാമ്പത്തിക കാര്യങ്ങൾ കൈകാര്യം ചെയ്യുക, ബിസിനസ്സ് ലാഭം ട്രാക്ക് ചെയ്യുക, നികുതി കണക്കാക്കൽ, സാമ്പത്തിക ആസൂത്രണം.
*   **📚 മുൻകൂർ അറിവ്**: ബിസിനസ്സ് പ്രവർത്തനങ്ങളെയും പണമിടപാടുകളെയും കുറിച്ചുള്ള അടിസ്ഥാന ധാരണ.

---

## 2️⃣ വിശദമായ ആശയങ്ങൾ

### 4.1 അക്കൗണ്ടിംഗിന്റെ അർത്ഥം

**അക്കൗണ്ടിംഗ് എന്നത് ബിസിനസ്സിന്റെ ഭാഷയാണ്.**

> **നിർവചനം (AAA):** "ഉപയോക്താക്കൾക്ക് ശരിയായ തീരുമാനങ്ങൾ എടുക്കാൻ സഹായിക്കുന്നതിനായി, സാമ്പത്തിക വിവരങ്ങൾ തിരിച്ചറിയുകയും അളക്കുകയും ആശയവിനിമയം നടത്തുകയും ചെയ്യുന്ന പ്രക്രിയയാണ് അക്കൗണ്ടിംഗ്."

**അക്കൗണ്ടിംഗിന്റെ പ്രധാന വശങ്ങൾ:**

1.  **സാമ്പത്തിക സംഭവങ്ങൾ**: ഒരു ബിസിനസ്സ് സ്ഥാപനത്തിൽ സംഭവിക്കുന്നതും, പണത്തിന്റെ മൂല്യത്തിൽ അളക്കാൻ കഴിയുന്നതുമായ ഇടപാടുകളെയാണ് സാമ്പത്തിക സംഭവങ്ങൾ എന്ന് പറയുന്നത്.
    *   **ബാഹ്യ സംഭവങ്ങൾ**: സ്ഥാപനവും പുറത്തുള്ളവരും തമ്മിലുള്ള ഇടപാടുകൾ (ഉദാ: സാധനങ്ങളുടെ വിൽപ്പന).
    *   **ആന്തരിക സംഭവങ്ങൾ**: സ്ഥാപനത്തിനുള്ളിൽ തന്നെ നടക്കുന്ന ഇടപാടുകൾ (ഉദാ: ഉൽപ്പാദന വിഭാഗത്തിലേക്ക് അസംസ്കൃത വസ്തുക്കൾ നൽകൽ).

2.  **തിരിച്ചറിയൽ, അളക്കൽ, രേഖപ്പെടുത്തൽ, ആശയവിനിമയം നടത്തൽ**:
    *   **തിരിച്ചറിയൽ**: ഏത് ഇടപാടുകളാണ് രേഖപ്പെടുത്തേണ്ടതെന്ന് തീരുമാനിക്കൽ. സാമ്പത്തിക ഇടപാടുകൾ മാത്രമേ രേഖപ്പെടുത്തുകയുള്ളൂ.
    *   **അളക്കൽ**: ബിസിനസ്സ് ഇടപാടുകളെ പണത്തിന്റെ മൂല്യത്തിൽ (ഉദാഹരണത്തിന് രൂപയിൽ) കണക്കാക്കുന്നത്.
    *   **രേഖപ്പെടുത്തൽ**: തിരിച്ചറിഞ്ഞതും അളന്നതുമായ സാമ്പത്തിക സംഭവങ്ങൾ അക്കൗണ്ട് പുസ്തകങ്ങളിൽ കാലക്രമത്തിൽ രേഖപ്പെടുത്തുന്നത്.
    *   **ആശയവിനിമയം നടത്തൽ**: ആവശ്യമായ വിവരങ്ങൾ തയ്യാറാക്കുകയും അക്കൗണ്ടിംഗ് റിപ്പോർട്ടുകളിലൂടെ മാനേജ്മെന്റിനും മറ്റ് ഉപയോക്താക്കൾക്കും കൈമാറുകയും ചെയ്യുന്നത്.

3.  **സ്ഥാപനം**: ലാഭേച്ഛയോടെയോ അല്ലാതെയോ പ്രവർത്തിക്കുന്ന ഒരു ബിസിനസ്സ് സംരംഭത്തെ ഇത് സൂചിപ്പിക്കുന്നു.

4.  **വിവരങ്ങൾ ആവശ്യമുള്ള ഉപയോക്താക്കൾ**: അക്കൗണ്ടിംഗ് സാമ്പത്തിക വിവരങ്ങൾ ആന്തരികവും ബാഹ്യവുമായ ഉപയോക്താക്കൾക്ക് കൈമാറുന്നു.

---

### 4.2 അക്കൗണ്ടിംഗ് വിവരങ്ങളുടെ ഉപയോക്താക്കൾ

പ്രധാനപ്പെട്ട ബിസിനസ്സ് തീരുമാനങ്ങൾ എടുക്കുന്നതിന് ഉപയോക്താക്കൾക്ക് സാമ്പത്തിക വിവരങ്ങൾ ആവശ്യമാണ്.

| തരത്തിലുള്ള ഉപയോക്താവ് | ഉദാഹരണങ്ങൾ |
| :--- | :--- |
| **ആന്തരിക ഉപയോക്താക്കൾ** | ചീഫ് എക്സിക്യൂട്ടീവ്, ഫിനാൻഷ്യൽ ഓഫീസർ, പ്ലാന്റ് മാനേജർമാർ, സൂപ്പർവൈസർമാർ. |
| **ബാഹ്യ ഉപയോക്താക്കൾ** | നിക്ഷേപകർ, കടപ്പറ്റുകാർ (ബാങ്കുകൾ), നികുതി അധികാരികൾ, നിയന്ത്രണ ഏജൻസികൾ, ഇടപാടുകാർ. |

---

### 4.3 അക്കൗണ്ടിംഗിന്റെ ശാഖകൾ

1.  **ഫിനാൻഷ്യൽ അക്കൗണ്ടിംഗ്**: സാമ്പത്തിക ഇടപാടുകൾ ചിട്ടയായി രേഖപ്പെടുത്തുന്നതിനും സ്ഥാപനത്തിന്റെ വിജയം അളക്കുന്നതിനായി സാമ്പത്തിക റിപ്പോർട്ടുകൾ തയ്യാറാക്കുന്നതിനും ഇത് സഹായിക്കുന്നു.
2.  **കോസ്റ്റ് അക്കൗണ്ടിംഗ്**: സ്ഥാപനം നിർമ്മിക്കുന്ന ഉൽപ്പന്നങ്ങളുടെയോ നൽകുന്ന സേവനങ്ങളുടെയോ ചിലവ് കണ്ടെത്തുന്നതിനായി ചിലവുകൾ വിശകലനം ചെയ്യാൻ ഇത് സഹായിക്കുന്നു.
3.  **മാനേജ്മെന്റ് അക്കൗണ്ടിംഗ്**: തീരുമാനങ്ങൾ എടുക്കാനും, ആസൂത്രണം ചെയ്യാനും, നിയന്ത്രിക്കാനും സഹായിക്കുന്നതിനായി സ്ഥാപനത്തിനുള്ളിലെ ആളുകൾക്ക് ആവശ്യമായ അക്കൗണ്ടിംഗ് വിവരങ്ങൾ നൽകുന്നത് ഇതിൽ ഉൾപ്പെടുന്നു.

---

### 4.4 അക്കൗണ്ടിംഗ് വിവരങ്ങളുടെ ഗുണപരമായ സവിശേഷതകൾ

തീരുമാനമെടുക്കാൻ ഉപയോഗപ്രദമാകണമെങ്കിൽ, അക്കൗണ്ടിംഗ് വിവരങ്ങൾക്ക് നാല് സവിശേഷതകൾ ഉണ്ടായിരിക്കണം:

1.  **വിശ്വാസ്യത**: വിവരങ്ങൾ ആശ്രയിക്കാവുന്നതും, തെറ്റുകളും മുൻവിധികളും ഇല്ലാത്തതും, പരിശോധിച്ചുറപ്പിക്കാൻ കഴിയുന്നതുമായിരിക്കണം.
2.  **പ്രസക്തി**: വിവരങ്ങൾ കൃത്യസമയത്ത് ലഭ്യമാകേണ്ടതും, മുൻകാല വിലയിരുത്തലുകൾ സ്ഥിരീകരിക്കാനോ പ്രവചനങ്ങൾ നടത്താനോ ഉപയോക്താക്കളെ സഹായിക്കേണ്ടതുമാണ്.
3.  **മനസ്സിലാക്കാൻ കഴിയുന്നത്**: വിവരങ്ങൾ ഏത് അർത്ഥത്തിലാണോ തയ്യാറാക്കിയത് അതേ അർത്ഥത്തിൽ തന്നെ തീരുമാനമെടുക്കുന്നവർക്ക് മനസ്സിലാക്കാൻ കഴിയണം.
4.  **താരതമ്യം ചെയ്യാൻ കഴിയുന്നത്**: ഉപയോക്താക്കൾക്ക് ഒരു സ്ഥാപനത്തിന്റെ വിവിധ കാലയളവുകളിലെ സാമ്പത്തിക റിപ്പോർട്ടുകൾ തമ്മിലും, മറ്റ് സ്ഥാപനങ്ങളുടെ റിപ്പോർട്ടുകളുമായും താരതമ്യം ചെയ്യാൻ കഴിയണം.

---

### 4.5 അക്കൗണ്ടിംഗിന്റെ ലക്ഷ്യങ്ങൾ

*   **ബിസിനസ്സ് ഇടപാടുകളുടെ രേഖകൾ സൂക്ഷിക്കൽ**: എല്ലാ ബിസിനസ്സ് ഇടപാടുകളുടെയും ചിട്ടയായതും പൂർണ്ണവുമായ രേഖ സൂക്ഷിക്കുക.
*   **ലാഭനഷ്ടങ്ങൾ കണക്കാക്കൽ**: ഒരു കാലയളവിൽ ബിസിനസ്സ് ലാഭം നേടിയോ അതോ നഷ്ടം സംഭവിച്ചോ എന്ന് കണ്ടെത്തുക.
*   **സാമ്പത്തിക സ്ഥിതി ചിത്രീകരിക്കൽ**: അക്കൗണ്ടിംഗ് കാലയളവിന്റെ അവസാനത്തിൽ ആസ്തികളുടെയും ബാധ്യതകളുടെയും രൂപത്തിൽ സാമ്പത്തിക സ്ഥിതി കണ്ടെത്തുക.
*   **അക്കൗണ്ടിംഗ് വിവരങ്ങൾ നൽകൽ**: താല്പര്യമുള്ള ഉപയോക്താക്കൾക്ക് റിപ്പോർട്ടുകളും സ്റ്റേറ്റ്മെന്റുകളും ഗ്രാഫുകളും കൈമാറുക.

---

### 4.6 അടിസ്ഥാന പദങ്ങൾ

1.  **എന്റിറ്റി / സ്ഥാപനം**: ഐ.ടി.സി ലിമിറ്റഡ്, സൂപ്പർ ബസാർ മുതലായ വ്യക്തമായി തിരിച്ചറിയാൻ കഴിയുന്ന ഒരു ബിസിനസ്സ് സ്ഥാപനം.
2.  **ഇടപാട്**: രണ്ടോ അതിലധികമോ വ്യക്തികളോ സ്ഥാപനങ്ങളോ തമ്മിൽ മൂല്യമുള്ള എന്തെങ്കിലും കൈമാറ്റം ചെയ്യുന്ന സംഭവം (ഉദാ: സാധനങ്ങൾ വാങ്ങുന്നത്).
3.  **ആസ്തികൾ**: ഒരു സ്ഥാപനത്തിന്റെ പണമൂല്യത്തിൽ പ്രകടിപ്പിക്കാൻ കഴിയുന്ന സാമ്പത്തിക വിഭവങ്ങൾ.
    *   **സ്ഥിര ആസ്തികൾ**: ദീർഘകാല ഉപയോഗത്തിനായി സൂക്ഷിച്ചിരിക്കുന്ന ആസ്തികൾ (ഉദാ: ഭൂമി, യന്ത്രങ്ങൾ).
    *   **ചര ആസ്തികൾ**: ഒരു വർഷത്തിനുള്ളിൽ പണമാക്കി മാറ്റാൻ കഴിയുന്ന ആസ്തികൾ (ഉദാ: പണം, കടക്കാർ, സ്റ്റോക്ക്).
4.  **ബാധ്യതകൾ**: ഒരു സ്ഥാപനം ഭാവിയിൽ നൽകാനുള്ള കടങ്ങൾ അല്ലെങ്കിൽ ബാധ്യതകൾ.
    *   **ദീർഘകാല ബാധ്യതകൾ**: ദീർഘകാലത്തിന് ശേഷം നൽകേണ്ട കടങ്ങൾ (ഉദാ: ദീർഘകാല ബാങ്ക് ലോണുകൾ).
    *   **ഹ്രസ്വകാല ബാധ്യതകൾ**: ഒരു വർഷത്തിനുള്ളിൽ നൽകേണ്ട കടങ്ങൾ (ഉദാ: കടപ്പറ്റുകാർ, ഹ്രസ്വകാല ലോണുകൾ).
5.  **മൂലധനം**: ഉടമസ്ഥൻ ബിസിനസ്സിലേക്ക് നിക്ഷേപിച്ച തുക.
6.  **വിൽപ്പന**: ഉപഭോക്താക്കൾക്ക് സാധനങ്ങൾ വിൽക്കുകയോ സേവനങ്ങൾ നൽകുകയോ ചെയ്യുന്നതിലൂടെ ലഭിക്കുന്ന മൊത്തം തുക.
7.  **വരുമാനം**: വിൽപ്പന, കമ്മീഷൻ, പലിശ, ലാഭവിഹിതം, വാടക തുടങ്ങിയവയിലൂടെ ബിസിനസ്സ് നേടുന്ന തുക.
8.  **ചിലവുകൾ**: വരുമാനം നേടുന്ന പ്രക്രിയയിൽ ബിസിനസ്സിന് ഉണ്ടാകുന്ന ചിലവുകൾ (ഉദാ: വാടക, ശമ്പളം).
9.  **വ്യയം**: ഏതെങ്കിലും ആനുകൂല്യമോ സേവനമോ സ്വത്തോ ലഭിക്കുന്നതിനായി പണം ചിലവാക്കുകയോ ബാധ്യത ഏറ്റെടുക്കുകയോ ചെയ്യുന്നത്.
    *   **മൂലധന വ്യയം**: ഒരു വർഷത്തിൽ കൂടുതൽ പ്രയോജനം ലഭിക്കുന്നവ (ഉദാ: യന്ത്രം വാങ്ങുന്നത്).
    *   **റവന്യൂ വ്യയം**: ഒരു വർഷത്തിനുള്ളിൽ പ്രയോജനം അവസാനിക്കുന്നവ (ഉദാ: വാടക നൽകുന്നത്).
10. **ലാഭം**: ഒരു അക്കൗണ്ടിംഗ് വർഷത്തിൽ ചിലവുകളേക്കാൾ കൂടുതലായി ലഭിക്കുന്ന വരുമാനം.
11. **നേട്ടം**: ബിസിനസ്സിന്റെ സാധാരണ പ്രവർത്തനമല്ലാത്ത സംഭവങ്ങളിൽ നിന്ന് ഉണ്ടാകുന്ന ലാഭം (ഉദാ: സ്ഥിര ആസ്തികൾ വിൽക്കുന്നത്).
12. **നഷ്ടം**: വരുമാനത്തേക്കാൾ ചിലവുകൾ വർദ്ധിക്കുന്ന അവസ്ഥ. അല്ലെങ്കിൽ തീപിടുത്തം പോലെയുള്ളവ മൂലം ഉണ്ടാകുന്ന നഷ്ടം.
13. **കിഴിവ്**: വിറ്റ സാധനങ്ങളുടെ വിലയിൽ നൽകുന്ന ഇളവ്.
    *   **വ്യാപാര കിഴിവ്**: സാധനങ്ങൾ വിൽക്കുന്ന സമയത്ത് നൽകുന്നത്.
    *   **ക്യാഷ് കിഴിവ്**: പെട്ടെന്ന് പണം നൽകാൻ പ്രോത്സാഹിപ്പിക്കുന്നതിനായി നൽകുന്നത്.
14. **വൗച്ചർ**: ഒരു ഇടപാടിനെ സാധൂകരിക്കുന്ന രേഖാമൂലമുള്ള തെളിവ്.
15. **സാധനങ്ങൾ**: ഒരു ബിസിനസ്സ് സ്ഥാപനം വ്യാപാരം ചെയ്യുന്ന ഉൽപ്പന്നങ്ങൾ.
16. **പിൻവലിക്കലുകൾ**: ഉടമസ്ഥൻ തന്റെ വ്യക്തിപരമായ ആവശ്യങ്ങൾക്കായി ബിസിനസ്സിൽ നിന്ന് പണമോ സാധനങ്ങളോ പിൻവലിക്കുന്നത്.
17. **വാങ്ങലുകൾ**: വിൽപ്പനയ്ക്കായോ ഉപയോഗത്തിനായോ ബിസിനസ്സ് വാങ്ങുന്ന സാധനങ്ങളുടെ മൊത്തം തുക.
18. **സ്റ്റോക്ക് / ശേഖരം**: അക്കൗണ്ടിംഗ് വർഷാവസാനം വിൽക്കാതെ കിടക്കുന്ന (ക്ലോസിംഗ് സ്റ്റോക്ക്) അല്ലെങ്കിൽ വർഷാരംഭത്തിലുള്ള (ഓപ്പണിംഗ് സ്റ്റോക്ക്) സാധനങ്ങളുടെ ശേഖരം.
19. **കടക്കാർ / പണം തരാനുള്ളവർ**: സാധനങ്ങൾ കടമായി വാങ്ങിയതിന് സ്ഥാപനത്തിന് പണം തരാനുള്ള വ്യക്തികൾ അല്ലെങ്കിൽ സ്ഥാപനങ്ങൾ.
20. **കടപ്പറ്റുകാർ / പണം കൊടുക്കാനുള്ളവർ**: സാധനങ്ങൾ കടമായി വാങ്ങിയതിന് സ്ഥാപനം പണം നൽകാനുള്ള വ്യക്തികൾ അല്ലെങ്കിൽ സ്ഥാപനങ്ങൾ.

---

## 3️⃣ പട്ടികകൾ

### അക്കൗണ്ടിംഗിന്റെ സുവർണ്ണ നിയമങ്ങൾ

| അക്കൗണ്ടിന്റെ തരം | ഡെബിറ്റ് നിയമം | ക്രെഡിറ്റ് നിയമം |
| :--- | :--- | :--- |
| **വ്യക്തിഗത അക്കൗണ്ട്** | സ്വീകരിക്കുന്ന ആളെ ഡെബിറ്റ് ചെയ്യുക | നൽകുന്ന ആളെ ക്രെഡിറ്റ് ചെയ്യുക |
| **റിയൽ അക്കൗണ്ട്** (ആസ്തികൾ) | അകത്തേക്ക് വരുന്നതിനെ ഡെബിറ്റ് ചെയ്യുക | പുറത്തേക്ക് പോകുന്നതിനെ ക്രെഡിറ്റ് ചെയ്യുക |
| **നോമിനൽ അക്കൗണ്ട്** (വരുമാനങ്ങളും ചിലവുകളും) | എല്ലാ ചിലവുകളെയും നഷ്ടങ്ങളെയും ഡെബിറ്റ് ചെയ്യുക | എല്ലാ വരുമാനങ്ങളെയും നേട്ടങ്ങളെയും ക്രെഡിറ്റ് ചെയ്യുക |

---

## 4️⃣ ഫ്ലോചാർട്ടുകൾ

### അക്കൗണ്ടിംഗ് പ്രക്രിയ

**ഇടപാട്**
↓
**ജേർണൽ** (രേഖപ്പെടുത്തൽ)
↓
**ലെഡ്ജർ** (തരംതിരിക്കൽ)
↓
**ട്രയൽ ബാലൻസ്** (സംഗ്രഹിക്കൽ)
↓
**സാമ്പത്തിക റിപ്പോർട്ടുകൾ** (ആശയവിനിമയം)

---

## 5️⃣ സൂത്രവാക്യങ്ങൾ

1.  **അക്കൗണ്ടിംഗ് സമവാക്യം**:
    **ആസ്തികൾ = മൂലധനം + ബാധ്യതകൾ**
    *(ഒരു ബിസിനസ്സിന്റെ ഉടമസ്ഥതയിലുള്ള എല്ലാ സ്വത്തുക്കളും അതിന്മേലുള്ള മൊത്തം അവകാശങ്ങൾക്ക് തുല്യമാണ്).*

2.  **ലാഭം കണക്കാക്കൽ**:
    **ലാഭം = മൊത്തം വരുമാനം - മൊത്തം ചിലവുകൾ**

---

## 6️⃣ ഗ്രാഫ് വിഭാഗം

*ഈ ആമുഖ അധ്യായത്തിന് ബാധകമല്ല.*

---

## 7️⃣ ആശയ ഭൂപടം

**അക്കൗണ്ടിംഗ്**
↓
**പ്രക്രിയ** (തിരിച്ചറിയൽ → അളക്കൽ → രേഖപ്പെടുത്തൽ → ആശയവിനിമയം)
↓
**ഉപയോക്താക്കൾ** (ആന്തരികവും ബാഹ്യവും)
↓
**ലക്ഷ്യങ്ങൾ** (രേഖകൾ സൂക്ഷിക്കൽ, ലാഭനഷ്ടം, സാമ്പത്തിക സ്ഥിതി)
↓
**പദങ്ങൾ** (ആസ്തികൾ, ബാധ്യതകൾ, മൂലധനം മുതലായവ)

---

## 8️⃣ പരിശീലന ചോദ്യങ്ങൾ

### പാഠപുസ്തകത്തിലെ ചോദ്യങ്ങൾ

**ചോദ്യം 1: അക്കൗണ്ടിംഗ് എന്നത് എന്താണ്?**
**ഉത്തരം:** ഉപയോക്താക്കൾക്ക് ആവശ്യമുള്ള സാമ്പത്തിക വിവരങ്ങൾ തിരിച്ചറിയുകയും അളക്കുകയും രേഖപ്പെടുത്തുകയും ആശയവിനിമയം നടത്തുകയും ചെയ്യുന്ന പ്രക്രിയയാണ് അക്കൗണ്ടിംഗ്.

**ചോദ്യം 2: അക്കൗണ്ടിംഗ് വിവരങ്ങൾ ഉപയോഗിക്കുന്ന രണ്ട് ആന്തരിക ഉപയോക്താക്കളുടെയും രണ്ട് ബാഹ്യ ഉപയോക്താക്കളുടെയും പേരെഴുതുക.**
**ഉത്തരം:** ആന്തരിക ഉപയോക്താക്കൾ: ചീഫ് എക്സിക്യൂട്ടീവ്, പ്ലാന്റ് മാനേജർമാർ. ബാഹ്യ ഉപയോക്താക്കൾ: നിക്ഷേപകർ, കടപ്പറ്റുകാർ (ബാങ്കുകൾ).

**ചോദ്യം 3: അക്കൗണ്ടിംഗിന്റെ പ്രധാനപ്പെട്ട മൂന്ന് ശാഖകൾ ഏതെല്ലാമാണ്?**
**ഉത്തരം:** ഫിനാൻഷ്യൽ അക്കൗണ്ടിംഗ്, കോസ്റ്റ് അക്കൗണ്ടിംഗ്, മാനേജ്മെന്റ് അക്കൗണ്ടിംഗ്.

**ചോദ്യം 4: 'ആസ്തികൾ' എന്ന പദം ഒരു ഉദാഹരണസഹിതം നിർവചിക്കുക.**
**ഉത്തരം:** പണത്തിന്റെ മൂല്യത്തിൽ പ്രകടിപ്പിക്കാൻ കഴിയുന്ന ഒരു സ്ഥാപനത്തിന്റെ സാമ്പത്തിക വിഭവങ്ങളാണ് ആസ്തികൾ. ഉദാഹരണം: യന്ത്രങ്ങൾ, പണം.

**ചോദ്യം 5: ഡെബ്റ്റേഴ്സ് (കടക്കാർ), ക്രെഡിറ്റേഴ്സ് (കടപ്പറ്റുകാർ) എന്നിവ തമ്മിലുള്ള വ്യത്യാസം എന്ത്?**
**ഉത്തരം:** കടമായി സാധനങ്ങൾ വാങ്ങിയതിന് ബിസിനസ്സിന് പണം തരാനുള്ളവരാണ് ഡെബ്റ്റേഴ്സ്. കടമായി സാധനങ്ങൾ വാങ്ങിയതിന് ബിസിനസ്സ് പണം നൽകാനുള്ളവരാണ് ക്രെഡിറ്റേഴ്സ്.

**ചോദ്യം 6: അക്കൗണ്ടിംഗ് വിവരങ്ങളുടെ നാല് ഗുണപരമായ സവിശേഷതകൾ ഏതെല്ലാം?**
**ഉത്തരം:** വിശ്വാസ്യത, പ്രസക്തി, മനസ്സിലാക്കാൻ കഴിയുന്നത്, താരതമ്യം ചെയ്യാൻ കഴിയുന്നത്.

**ചോദ്യം 7: 'മൂലധനം' (Capital) എന്നാൽ എന്ത്?**
**ഉത്തരം:** ബിസിനസ്സിന്റെ ഉടമസ്ഥൻ സ്ഥാപനത്തിലേക്ക് നിക്ഷേപിക്കുന്ന തുകയെയാണ് മൂലധനം എന്ന് പറയുന്നത്.

**ചോദ്യം 8: അടിസ്ഥാന അക്കൗണ്ടിംഗ് സമവാക്യം എഴുതുക.**
**ഉത്തരം:** ആസ്തികൾ = മൂലധനം + ബാധ്യതകൾ.

**ചോദ്യം 9: ഒരു സ്ഥിര ആസ്തിക്കും (non-current asset) ഒരു ഹ്രസ്വകാല ബാധ്യതയ്ക്കും (current liability) ഉദാഹരണം നൽകുക.**
**ഉത്തരം:** സ്ഥിര ആസ്തി: ഭൂമിയും കെട്ടിടവും. ഹ്രസ്വകാല ബാധ്യത: ഹ്രസ്വകാല വായ്പകൾ (അല്ലെങ്കിൽ കടപ്പറ്റുകാർ).

**ചോദ്യം 10: അക്കൗണ്ടിംഗിലെ "ലാഭനഷ്ടങ്ങൾ കണക്കാക്കൽ" എന്ന ലക്ഷ്യം വിശദീകരിക്കുക.**
**ഉത്തരം:** ബിസിനസ്സ് ഉടമകൾക്ക് തങ്ങളുടെ പ്രവർത്തനങ്ങളുടെ അന്തിമഫലം അറിയേണ്ടതുണ്ട്. വരുമാനവും ചിലവുകളും താരതമ്യം ചെയ്ത് ഒരു അക്കൗണ്ടിംഗ് കാലയളവിൽ ലഭിച്ച ലാഭമോ നഷ്ടമോ കണ്ടെത്താൻ അക്കൗണ്ടിംഗ് സഹായിക്കുന്നു.

### കൂടുതൽ പരിശീലന ചോദ്യങ്ങൾ

**MCQs:**
1. താഴെ പറയുന്നവയിൽ അക്കൗണ്ടിംഗ് വിവരങ്ങളുടെ ആന്തരിക ഉപയോക്താവ് അല്ലാത്തത് ആര്?
   a) ചീഫ് എക്സിക്യൂട്ടീവ്  b) പ്ലാന്റ് മാനേജർ  c) കടപ്പറ്റുകാർ  d) സൂപ്പർവൈസർ
   *ഉത്തരം: c) കടപ്പറ്റുകാർ (ബാഹ്യ ഉപയോക്താവ്)*

2. ബിസിനസ്സിന്റെ ഉടമസ്ഥൻ സ്ഥാപനത്തിലേക്ക് നിക്ഷേപിക്കുന്ന തുകയെ വിളിക്കുന്നത്:
   a) ആസ്തി  b) മൂലധനം  c) ബാധ്യത  d) വരുമാനം
   *ഉത്തരം: b) മൂലധനം*

**പ്രസ്താവന-കാരണം (Assertion-Reason):**
*പ്രസ്താവന (A):* അക്കൗണ്ടിംഗിനെ ബിസിനസ്സിന്റെ ഭാഷ എന്ന് വിളിക്കുന്നു.
*കാരണം (R):* താല്പര്യമുള്ള വിവിധ ഉപയോക്താക്കൾക്ക് സാമ്പത്തിക വിവരങ്ങൾ ഇത് കൈമാറുന്നു.
*ഉത്തരം: A യും R ഉം ശരിയാണ്, കൂടാതെ R എന്നത് A യുടെ ശരിയായ വിശദീകരണമാണ്.*

---

## 9️⃣ ദ്രുത പുനരവലോകനം

*   **അക്കൗണ്ടിംഗ് ബിസിനസ്സിന്റെ ഭാഷയാണ്.**
*   **ആസ്തികൾ = മൂലധനം + ബാധ്യതകൾ.**
*   **AAA നിർവചനം** അക്കൗണ്ടിംഗിന്റെ അർത്ഥത്തിനുള്ള മാനദണ്ഡമാണ്.
*   **വിശ്വാസ്യത, പ്രസക്തി, മനസ്സിലാക്കാൻ കഴിയുന്നത്, താരതമ്യം ചെയ്യാൻ കഴിയുന്നത്** എന്നിവ ഗുണപരമായ സവിശേഷതകളാണ്.
*   **പിൻവലിക്കലുകൾ** മൂലധനം കുറയ്ക്കുന്നു.
*   **കടപ്പറ്റുകാർ** ബാധ്യതകളാണ്; **കടക്കാർ** ആസ്തികളുമാണ്.
*   **വൗച്ചർ** ഏതൊരു ഇടപാടിന്റെയും പ്രാഥമിക തെളിവാണ്.

---

## 🔟 അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ

*   **ക്ലാസ്റൂം പ്രവർത്തനം**: വീട്ടിലെ ദൈനംദിന ഇടപാടുകൾ പട്ടികപ്പെടുത്താനും അവ ആസ്തികളാണോ ചിലവുകളാണോ എന്ന് തിരിച്ചറിയാനും വിദ്യാർത്ഥികളോട് ആവശ്യപ്പെടുക.
*   **ഡിജിറ്റൽ ടൂൾ**: അക്കൗണ്ടിംഗ് സമവാക്യം പ്രകടിപ്പിക്കാൻ ഒരു സ്പ്രെഡ്ഷീറ്റ് ഉപയോഗിക്കുക.
*   **തെറ്റിദ്ധാരണ**: വിദ്യാർത്ഥികൾ പലപ്പോഴും 'നേട്ടം' (Gain), 'ലാഭം' (Profit) എന്നിവ തമ്മിൽ ആശയക്കുഴപ്പത്തിലാകുന്നു. നേട്ടം ആകസ്മികമാണെന്നും ലാഭം സാധാരണ പ്രവർത്തനങ്ങളിൽ നിന്നുള്ളതാണെന്നും വിശദീകരിക്കുക.

---

## 📄 വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹരേഖ

*   **നിർവചനം**: തിരിച്ചറിയൽ, അളക്കൽ, രേഖപ്പെടുത്തൽ, ആശയവിനിമയം നടത്തൽ എന്നിവയുടെ പ്രക്രിയ.
*   **സമവാക്യം**: A = C + L.
*   **ആസ്തികളുടെ തരങ്ങൾ**: ഹ്രസ്വകാലം vs ദീർഘകാലം.
*   **ബാധ്യതകളുടെ തരങ്ങൾ**: ഹ്രസ്വകാലം vs ദീർഘകാലം.
*   **ഗുണപരമായ സവിശേഷതകൾ**: R.R.U.C (വിശ്വാസ്യത, പ്രസക്തി, മനസ്സിലാക്കാൻ കഴിയുന്നത്, താരതമ്യം ചെയ്യാൻ കഴിയുന്നത്).
`

    }
  },
  glossary: [
    { term: { en: "Entity", ml: "എന്റിറ്റി" }, definition: { en: "A specifically identifiable business enterprise.", ml: "വ്യക്തമായി തിരിച്ചറിയാൻ കഴിയുന്ന ഒരു ബിസിനസ്സ് സ്ഥാപനം." } },
    { term: { en: "Transaction", ml: "ഇടപാട്" }, definition: { en: "An event involving some value between two or more entities.", ml: "രണ്ടോ അതിലധികമോ വ്യക്തികളോ സ്ഥാപനങ്ങളോ തമ്മിൽ മൂല്യമുള്ള എന്തെങ്കിലും കൈമാറ്റം ചെയ്യുന്ന സംഭവം." } },
    { term: { en: "Assets", ml: "ആസ്തികൾ" }, definition: { en: "Economic resources of an enterprise expressed in monetary terms.", ml: "ഒരു സ്ഥാപനത്തിന്റെ പണമൂല്യത്തിൽ പ്രകടിപ്പിക്കാൻ കഴിയുന്ന സാമ്പത്തിക വിഭവങ്ങൾ." } },
    { term: { en: "Liabilities", ml: "ബാധ്യതകൾ" }, definition: { en: "Obligations or debts that an enterprise has to pay in the future.", ml: "ഒരു സ്ഥാപനം ഭാവിയിൽ നൽകാനുള്ള കടങ്ങൾ അല്ലെങ്കിൽ ബാധ്യതകൾ." } },
    { term: { en: "Capital", ml: "മൂലധനം" }, definition: { en: "Amount invested by the owner in the firm.", ml: "ഉടമസ്ഥൻ ബിസിനസ്സിലേക്ക് നിക്ഷേപിച്ച തുക." } }
  ],
  quiz: [
    {
      id: "q1",
      question: { en: "What is the fundamental accounting equation?", ml: "അടിസ്ഥാന അക്കൗണ്ടിംഗ് സമവാക്യം ഏതാണ്?" },
      options: [
        { id: "a", text: { en: "Assets = Liabilities - Capital", ml: "ആസ്തികൾ = ബാധ്യതകൾ - മൂലധനം" } },
        { id: "b", text: { en: "Assets = Capital + Liabilities", ml: "ആസ്തികൾ = മൂലധനം + ബാധ്യതകൾ" } },
        { id: "c", text: { en: "Capital = Assets + Liabilities", ml: "മൂലധനം = ആസ്തികൾ + ബാധ്യതകൾ" } },
        { id: "d", text: { en: "Liabilities = Assets + Capital", ml: "ബാധ്യതകൾ = ആസ്തികൾ + മൂലധനം" } }
      ],
      correctAnswer: "b",
      explanation: { en: "The accounting equation states that the total assets of a business are always equal to the sum of its capital and liabilities.", ml: "ഒരു ബിസിനസ്സ് സ്ഥാപനത്തിന്റെ മൊത്തം ആസ്തികൾ എപ്പോഴും അതിന്റെ മൂലധനത്തിന്റെയും ബാധ്യതകളുടെയും തുകയ്ക്ക് തുല്യമായിരിക്കും." }
    },
    {
      id: "q2",
      question: { en: "Which of the following is an external user of accounting information?", ml: "താഴെ പറയുന്നവയിൽ അക്കൗണ്ടിംഗ് വിവരങ്ങൾ ഉപയോഗിക്കുന്ന ബാഹ്യ ഉപയോക്താവ് ആരാണ്?" },
      options: [
        { id: "a", text: { en: "Chief Executive", ml: "ചീഫ് എക്സിക്യൂട്ടീവ്" } },
        { id: "b", text: { en: "Plant Manager", ml: "പ്ലാന്റ് മാനേജർ" } },
        { id: "c", text: { en: "Investors", ml: "നിക്ഷേപകർ" } },
        { id: "d", text: { en: "Supervisors", ml: "സൂപ്പർവൈസർമാർ" } }
      ],
      correctAnswer: "c",
      explanation: { en: "Investors are external users as they are outside the management of the company but have a financial interest in it.", ml: "നിക്ഷേപകർ കമ്പനിയുടെ മാനേജ്മെന്റിന് പുറത്തുള്ളവരായതിനാൽ അവർ ബാഹ്യ ഉപയോക്താക്കളാണ്." }
    }
  ]
};
