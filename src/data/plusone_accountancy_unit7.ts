import { Lesson } from './curriculum';

export const plusOneAccountancyUnit7: Lesson = {
  id: "acc-11-7",
  title: {
    en: "Chapter 7: Depreciation, Provisions and Reserves",
    ml: "അധ്യായം 7: തേയ്മാനം, വ്യവസ്ഥകൾ, കരുതൽ ധനം"
  },
  estimated_time_mins: 60,
  learning_objectives: [
    { en: "Explain the meaning of depreciation and distinguish it from depletion and amortisation.", ml: "തേയ്മാനത്തിന്റെ അർത്ഥം വിശദീകരിക്കാനും അതിനെ ഡിപ്ലീഷൻ, അമോർട്ടൈസേഷൻ എന്നിവയിൽ നിന്ന് വേർതിരിച്ചറിയാനും." },
    { en: "State the need for charging depreciation and identify its causes.", ml: "തേയ്മാനം കണക്കാക്കേണ്ടതിന്റെ ആവശ്യകത വ്യക്തമാക്കാനും അതിന്റെ കാരണങ്ങൾ തിരിച്ചറിയാനും." },
    { en: "Compute depreciation using straight line and written down value methods.", ml: "സ്ട്രെയിറ്റ് ലൈൻ രീതിയും റിട്ടൺ ഡൗൺ വാല്യൂ രീതിയും ഉപയോഗിച്ച് തേയ്മാനം കണക്കാക്കാൻ." },
    { en: "Record transactions relating to depreciation and disposition of assets.", ml: "തേയ്മാനവും ആസ്തികൾ വിൽക്കുന്നതുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ." },
    { en: "Explain the meaning and purpose of creating provisions and reserves.", ml: "പ്രൊവിഷനുകളും റിസർവുകളും രൂപീകരിക്കുന്നതിന്റെ അർത്ഥവും ലക്ഷ്യവും വിശദീകരിക്കാൻ." },
    { en: "Distinguish between reserves and provisions.", ml: "റിസർവുകളും പ്രൊവിഷനുകളും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയാൻ." },
    { en: "Explain the nature of various types of provisions and reserves.", ml: "വിവിധ തരത്തിലുള്ള പ്രൊവിഷനുകളുടെയും റിസർവുകളുടെയും സ്വഭാവം വിശദീകരിക്കാൻ." }
  ],
  content: {
    intro: {
      en: "This chapter covers the concepts of Depreciation, Provisions, and Reserves, including the methods of calculating depreciation and the differences between provisions and reserves.",
      ml: "തേയ്മാനം കണക്കാക്കുന്നതിനുള്ള രീതികളും പ്രൊവിഷനുകളും റിസർവുകളും തമ്മിലുള്ള വ്യത്യാസങ്ങളും ഉൾപ്പെടെ തേയ്മാനം, വ്യവസ്ഥകൾ, കരുതൽ ധനം എന്നീ ആശയങ്ങൾ ഈ അധ്യായത്തിൽ ചർച്ച ചെയ്യുന്നു."
    },
    core: {
      en: `
# 📘 Chapter 7: Depreciation, Provisions and Reserves
# 📘 അധ്യായം 7: തേയ്മാനം, വ്യവസ്ഥകൾ, കരുതൽ ധനം

---

## 1️⃣ Chapter Overview
## 1️⃣ അധ്യായത്തിന്റെ അവലോകനം

*   **🎯 Learning Objectives**:
*   **🎯 പഠന ലക്ഷ്യങ്ങൾ**:
    *   Explain the meaning of depreciation and distinguish it from depletion and amortisation.
    *   തേയ്മാനത്തിന്റെ അർത്ഥം വിശദീകരിക്കാനും അതിനെ ഡിപ്ലീഷൻ, അമോർട്ടൈസേഷൻ എന്നിവയിൽ നിന്ന് വേർതിരിച്ചറിയാനും.
    *   State the need for charging depreciation and identify its causes.
    *   തേയ്മാനം കണക്കാക്കേണ്ടതിന്റെ ആവശ്യകത വ്യക്തമാക്കാനും അതിന്റെ കാരണങ്ങൾ തിരിച്ചറിയാനും.
    *   Compute depreciation using straight line and written down value methods.
    *   സ്ട്രെയിറ്റ് ലൈൻ രീതിയും റിട്ടൺ ഡൗൺ വാല്യൂ രീതിയും ഉപയോഗിച്ച് തേയ്മാനം കണക്കാക്കാൻ.
    *   Record transactions relating to depreciation and disposition of assets.
    *   തേയ്മാനവും ആസ്തികൾ വിൽക്കുന്നതുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ.
    *   Explain the meaning and purpose of creating provisions and reserves.
    *   പ്രൊവിഷനുകളും റിസർവുകളും രൂപീകരിക്കുന്നതിന്റെ അർത്ഥവും ലക്ഷ്യവും വിശദീകരിക്കാൻ.
    *   Distinguish between reserves and provisions.
    *   റിസർവുകളും പ്രൊവിഷനുകളും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയാൻ.
    *   Explain the nature of various types of provisions and reserves.
    *   വിവിധ തരത്തിലുള്ള പ്രൊവിഷനുകളുടെയും റിസർവുകളുടെയും സ്വഭാവം വിശദീകരിക്കാൻ.
*   **🔑 Key Concepts**: Meaning and Causes of Depreciation, Need for Depreciation, Methods of Calculating Depreciation (Straight Line Method & Written Down Value Method), Recording Depreciation (Charging to Asset A/c vs Creating Provision for Depreciation A/c), Meaning and Objective of Provisions, Meaning and Objective of Reserves, Types of Reserves, Difference between Provision and Reserve.
*   **🔑 പ്രധാന ആശയങ്ങൾ**: തേയ്മാനത്തിന്റെ അർത്ഥവും കാരണങ്ങളും, തേയ്മാനത്തിന്റെ ആവശ്യകത, തേയ്മാനം കണക്കാക്കുന്നതിനുള്ള രീതികൾ (സ്ട്രെയിറ്റ് ലൈൻ മെത്തേഡ് & റിട്ടൺ ഡൗൺ വാല്യൂ മെത്തേഡ്), തേയ്മാനം രേഖപ്പെടുത്തൽ (അസറ്റ് അക്കൗണ്ടിൽ നിന്ന് കുറയ്ക്കുന്നത് vs പ്രൊവിഷൻ ഫോർ ഡിപ്രീസിയേഷൻ അക്കൗണ്ട് ഉണ്ടാക്കുന്നത്), പ്രൊവിഷനുകളുടെ (വ്യവസ്ഥകളുടെ) അർത്ഥവും ലക്ഷ്യവും, റിസർവുകളുടെ (കരുതൽ ധനത്തിന്റെ) അർത്ഥവും ലക്ഷ്യവും, റിസർവുകളുടെ തരങ്ങൾ, പ്രൊവിഷനും റിസർവും തമ്മിലുള്ള വ്യത്യാസം.

---

## 2️⃣ Detailed Concepts
## 2️⃣ വിശദമായ ആശയങ്ങൾ

### 4.1 Meaning of Depreciation
### 4.1 തേയ്മാനത്തിന്റെ അർത്ഥം

Depreciation is the measure of the wearing out, consumption or other loss of value of a depreciable asset arising from use, effluxion of time or obsolescence through technology and market changes.
ഉപയോഗം, സമയം കടന്നുപോകുന്നത്, അല്ലെങ്കിൽ സാങ്കേതികവിദ്യയിലും വിപണിയിലുമുണ്ടാകുന്ന മാറ്റങ്ങൾ കാരണം കാലഹരണപ്പെടുന്നത് എന്നിവ മൂലം വിലയിടിയാൻ സാധ്യതയുള്ള ഒരു ആസ്തിക്ക് സംഭവിക്കുന്ന തേയ്മാനം, ഉപയോഗിച്ച് തീരുന്നത്, അല്ലെങ്കിൽ മൂല്യത്തിലുണ്ടാകുന്ന മറ്റ് നഷ്ടങ്ങൾ എന്നിവയുടെ അളവാണ് ഡിപ്രീസിയേഷൻ (തേയ്മാനം).

It is a non-cash expense and represents a part of the original cost of a fixed asset which is consumed during its period of use by the business.
ഇത് പണമായി നൽകേണ്ടതില്ലാത്ത ഒരു ചിലവാണ്, കൂടാതെ ബിസിനസ്സ് ഉപയോഗിക്കുന്ന കാലയളവിൽ ഉപഭോഗം ചെയ്യപ്പെടുന്ന ഒരു സ്ഥിര ആസ്തിയുടെ യഥാർത്ഥ വിലയുടെ ഒരു ഭാഗത്തെ ഇത് പ്രതിനിധീകരിക്കുന്നു.

Depreciation is charged on fixed tangible assets like machinery, building, furniture, etc.
യന്ത്രങ്ങൾ, കെട്ടിടം, ഫർണിച്ചർ തുടങ്ങിയ സ്ഥിരമായ സ്പർശിക്കാൻ കഴിയുന്ന ആസ്തികളിന്മേലാണ് (fixed tangible assets) തേയ്മാനം കണക്കാക്കുന്നത്.

**Similar Terms:**
**സമാന പദങ്ങൾ:**

*   **Depletion:** It is the decrease in the value of wasting assets such as mines, oil wells, quarries, etc. due to extraction of natural resources.
*   **ഡിപ്ലീഷൻ (ശോഷണം):** പ്രകൃതിവിഭവങ്ങൾ വേർതിരിച്ചെടുക്കുന്നത് കാരണം ഖനികൾ, എണ്ണക്കിണറുകൾ, ക്വാറികൾ മുതലായ തീർന്നുപോകുന്ന ആസ്തികളുടെ (wasting assets) മൂല്യത്തിലുണ്ടാകുന്ന കുറവാണിത്.
*   **Amortisation:** It is the process of writing off intangible assets like patents, copyrights, trademarks, franchises, etc. over their useful life.
*   **അമോർട്ടൈസേഷൻ:** പേറ്റന്റുകൾ, പകർപ്പവകാശങ്ങൾ, വ്യാപാരമുദ്രകൾ, ഫ്രാഞ്ചൈസികൾ മുതലായ സ്പർശിക്കാൻ കഴിയാത്ത ആസ്തികളുടെ (intangible assets) മൂല്യം അവയുടെ ഉപയോഗ കാലയളവിലായി കുറച്ചുകൊണ്ടുവരുന്ന പ്രക്രിയയാണിത്.

### 4.2 Causes of Depreciation
### 4.2 തേയ്മാനത്തിനുള്ള കാരണങ്ങൾ

1.  **Wear and Tear due to Use or Passage of Time:**
1.  **ഉപയോഗം അല്ലെങ്കിൽ സമയം കടന്നുപോകുന്നത് മൂലമുള്ള തേയ്മാനം:**
    Normal use of a tangible asset physically wears it out. Even if an asset is not used, its value may decrease due to passage of time or exposure to elements (like weather).
    ഒരു ഭൗതിക ആസ്തിയുടെ സാധാരണ ഉപയോഗം അതിനെ ശാരീരികമായി തേയ്മാനം വരുത്തുന്നു. ഒരു ആസ്തി ഉപയോഗിക്കുന്നില്ലെങ്കിൽപ്പോലും, സമയം കടന്നുപോകുന്നത് മൂലമോ പ്രകൃതിക്ഷോഭങ്ങൾ (കാലാവസ്ഥ പോലെ) കാരണമോ അതിന്റെ മൂല്യം കുറഞ്ഞേക്കാം.
2.  **Expiration of Legal Rights:**
2.  **നിയമപരമായ അവകാശങ്ങൾ അവസാനിക്കുന്നത്:**
    Some assets like patents or leases have a definite legal life. Their value drops to zero at the end of this period.
    പേറ്റന്റുകൾ അല്ലെങ്കിൽ പാട്ടങ്ങൾ പോലെയുള്ള ചില ആസ്തികൾക്ക് നിശ്ചിതമായ ഒരു നിയമപരമായ കാലയളവുണ്ട്. ഈ കാലയളവ് അവസാനിക്കുമ്പോൾ അവയുടെ മൂല്യം പൂജ്യമായി മാറുന്നു.
3.  **Obsolescence:**
3.  **കാലഹരണപ്പെടൽ (Obsolescence):**
    An asset may become outdated due to new inventions, improved models, or changes in market demand, even if it is in good physical condition.
    ഒരു ആസ്തി നല്ല ഭൗതിക അവസ്ഥയിലാണെങ്കിൽപ്പോലും, പുതിയ കണ്ടുപിടുത്തങ്ങൾ, മെച്ചപ്പെട്ട മോഡലുകൾ, അല്ലെങ്കിൽ വിപണിയിലെ ആവശ്യത്തിലുണ്ടാകുന്ന മാറ്റങ്ങൾ എന്നിവ കാരണം അത് കാലഹരണപ്പെട്ടേക്കാം.
4.  **Abnormal Factors:**
4.  **അസാധാരണ ഘടകങ്ങൾ:**
    Decline in the usefulness of the asset may be caused by abnormal factors like accidents due to fire, earthquake, floods, etc.
    തീപിടുത്തം, ഭൂകമ്പം, വെള്ളപ്പൊക്കം തുടങ്ങിയവ കാരണമുണ്ടാകുന്ന അപകടങ്ങൾ പോലുള്ള അസാധാരണ ഘടകങ്ങൾ മൂലം ആസ്തിയുടെ ഉപയോഗക്ഷമത കുറയാം.

### 4.3 Need for Depreciation
### 4.3 തേയ്മാനത്തിന്റെ ആവശ്യകത

1.  **Matching of Costs and Revenue:**
1.  **ചിലവുകളും വരുമാനവും പൊരുത്തപ്പെടുത്താൻ:**
    To ascertain the true profit, the cost of the asset consumed in earning revenue must be charged as an expense against that revenue.
    യഥാർത്ഥ ലാഭം കണ്ടെത്താൻ, വരുമാനം ഉണ്ടാക്കുന്നതിനായി ഉപയോഗിച്ച ആസ്തിയുടെ ചിലവ് ആ വരുമാനത്തിൽ നിന്ന് ഒരു ചിലവായി കുറയ്ക്കേണ്ടതുണ്ട്.
2.  **Consideration of Tax:**
2.  **നികുതി കണക്കാക്കാൻ:**
    Depreciation is a deductible expense under tax laws. Charging it reduces the taxable profit and the tax liability.
    നികുതി നിയമപ്രകാരം തേയ്മാനം ഒരു ഇളവ് ലഭിക്കുന്ന ചിലവാണ്. ഇത് കുറയ്ക്കുന്നത് നികുതി നൽകേണ്ട ലാഭവും നികുതി ബാധ്യതയും കുറയ്ക്കുന്നു.
3.  **True and Fair Financial Position:**
3.  **ശരിയായ സാമ്പത്തിക സ്ഥിതി കാണിക്കാൻ:**
    If depreciation is not charged, assets will be shown at an overvalued figure, and the balance sheet will not present a true financial position.
    തേയ്മാനം കുറച്ചില്ലെങ്കിൽ, ആസ്തികൾ കൂടുതലായ വിലയിലാകും കാണിക്കുക, കൂടാതെ ബാലൻസ് ഷീറ്റ് ശരിയായ സാമ്പത്തിക സ്ഥിതി കാണിക്കുകയുമില്ല.
4.  **Compliance with Law:**
4.  **നിയമങ്ങൾ പാലിക്കാൻ:**
    Companies Act and other legal statutes require that depreciation must be provided before distributing dividends.
    ലാഭവിഹിതം നൽകുന്നതിന് മുമ്പ് തേയ്മാനം വകയിരുത്തണമെന്ന് കമ്പനീസ് ആക്റ്റും മറ്റ് നിയമങ്ങളും നിഷ്കർഷിക്കുന്നു.

### 4.4 Methods of Calculating Depreciation
### 4.4 തേയ്മാനം കണക്കാക്കുന്ന രീതികൾ

There are two main methods of calculating depreciation:
തേയ്മാനം കണക്കാക്കാൻ പ്രധാനമായും രണ്ട് രീതികളുണ്ട്:

#### 1. Straight Line Method (SLM)
#### 1. സ്ട്രെയിറ്റ് ലൈൻ മെത്തേഡ് (SLM)
This is also called the Original Cost Method or Fixed Installment Method.
ഇതിനെ ഒറിജിനൽ കോസ്റ്റ് മെത്തേഡ് അല്ലെങ്കിൽ ഫിക്സഡ് ഇൻസ്റ്റാൾമെന്റ് മെത്തേഡ് (സ്ഥിര തവണ രീതി) എന്നും വിളിക്കുന്നു.
Under this method, a fixed and equal amount is charged as depreciation every year during the lifetime of the asset.
ഈ രീതിയിൽ, ആസ്തിയുടെ ജീവിതകാലം മുഴുവൻ എല്ലാ വർഷവും സ്ഥിരവും തുല്യവുമായ ഒരു തുക തേയ്മാനമായി കണക്കാക്കുന്നു.
The amount of depreciation is calculated on the original cost of the asset.
ആസ്തിയുടെ യഥാർത്ഥ വിലയിന്മേലാണ് തേയ്മാന തുക കണക്കാക്കുന്നത്.

*   **Formula:** Depreciation = (Original Cost of Asset - Estimated Scrap Value) / Estimated Useful Life of the Asset
*   **സൂത്രവാക്യം:** തേയ്മാനം = (ആസ്തിയുടെ യഥാർത്ഥ വില - കണക്കാക്കിയ ആക്രി വില) / ആസ്തിയുടെ കണക്കാക്കിയ ഉപയോഗ കാലയളവ്
*   *Original Cost = Purchase Price + Freight + Installation Charges*
*   *യഥാർത്ഥ വില = വാങ്ങിയ വില + ചരക്ക് കൂലി + ഇൻസ്റ്റാളേഷൻ ചിലവുകൾ*
*   **Rate of Depreciation:** Rate of Depreciation = (Amount of Depreciation / Original Cost) × 100
*   **തേയ്മാന നിരക്ക്:** തേയ്മാന നിരക്ക് = (തേയ്മാന തുക / യഥാർത്ഥ വില) × 100

#### 2. Written Down Value Method (WDV)
#### 2. റിട്ടൺ ഡൗൺ വാല്യൂ മെത്തേഡ് (WDV)
This is also known as the Diminishing Balance Method or Reducing Installment Method.
ഇത് ഡിമിനിഷിംഗ് ബാലൻസ് മെത്തേഡ് അല്ലെങ്കിൽ റെഡ്യൂസിംഗ് ഇൻസ്റ്റാൾമെന്റ് മെത്തേഡ് (കുറഞ്ഞുവരുന്ന തവണ രീതി) എന്നും അറിയപ്പെടുന്നു.
Under this method, depreciation is charged at a fixed percentage on the book value (written down value) of the asset every year.
ഈ രീതിയിൽ, ആസ്തിയുടെ ബുക്ക് വാല്യൂവിൽ (കുറഞ്ഞുവരുന്ന മൂല്യത്തിൽ) എല്ലാ വർഷവും ഒരു നിശ്ചിത ശതമാനത്തിലാണ് തേയ്മാനം കണക്കാക്കുന്നത്.
The amount of depreciation goes on decreasing every year.
തേയ്മാന തുക ഓരോ വർഷവും കുറഞ്ഞുവരുന്നു.

**Comparison Table: SLM vs WDV**
**താരതമ്യ പട്ടിക: SLM ഉം WDV ഉം**

| Basis of Difference | Straight Line Method (SLM) | Written Down Value Method (WDV) |
| വ്യത്യാസത്തിന്റെ അടിസ്ഥാനം | സ്ട്രെയിറ്റ് ലൈൻ രീതി (SLM) | റിട്ടൺ ഡൗൺ വാല്യൂ രീതി (WDV) |
| :--- | :--- | :--- |
| **Basis of Calculation** | Calculated on the original cost every year. | Calculated on the written down value (book value) every year. |
| **കണക്കാക്കുന്നതിന്റെ അടിസ്ഥാനം** | എല്ലാ വർഷവും യഥാർത്ഥ വിലയിന്മേൽ കണക്കാക്കുന്നു. | എല്ലാ വർഷവും ബുക്ക് വാല്യൂവിന്മേൽ കണക്കാക്കുന്നു. |
| **Amount of Depreciation** | Remains fixed/equal every year. | Goes on decreasing every year. |
| **തേയ്മാന തുക** | എല്ലാ വർഷവും സ്ഥിരമായി/തുല്യമായി തുടരുന്നു. | ഓരോ വർഷവും കുറഞ്ഞുവരുന്നു. |
| **Value at end of life** | Asset value can be reduced to zero. | Asset value can never be reduced to zero. |
| **ജീവിതകാലാവസാനത്തെ മൂല്യം** | ആസ്തിയുടെ മൂല്യം പൂജ്യമായി കുറയാം. | ആസ്തിയുടെ മൂല്യം ഒരിക്കലും പൂജ്യമാകില്ല. |

### 4.5 Recording Depreciation
### 4.5 തേയ്മാനം രേഖപ്പെടുത്തൽ

There are two ways to record depreciation in the books of accounts:
അക്കൗണ്ട് പുസ്തകങ്ങളിൽ തേയ്മാനം രേഖപ്പെടുത്താൻ രണ്ട് വഴികളുണ്ട്:

**Method 1: Charging Depreciation to Asset Account**
**രീതി 1: ആസ്തി അക്കൗണ്ടിൽ നിന്ന് തേയ്മാനം കുറയ്ക്കുന്നത്**
Depreciation is directly deducted from the value of the asset.
തേയ്മാനം ആസ്തിയുടെ മൂല്യത്തിൽ നിന്ന് നേരിട്ട് കുറയ്ക്കുന്നു.
*Journal Entry:*
*ജേർണൽ എൻട്രി:*
Depreciation A/c Dr.
To Asset A/c
*(Depreciation charged on asset)*
*(ആസ്തിയിന്മേൽ തേയ്മാനം ഈടാക്കി)*

**Method 2: Creating Provision for Depreciation Account / Accumulated Depreciation Account**
**രീതി 2: പ്രൊവിഷൻ ഫോർ ഡിപ്രീസിയേഷൻ അക്കൗണ്ട് ഉണ്ടാക്കുന്നത്**
Depreciation is not deducted from the asset account. Instead, it is accumulated in a separate account. The asset continues to appear at its original cost.
തേയ്മാനം ആസ്തി അക്കൗണ്ടിൽ നിന്ന് കുറയ്ക്കുന്നില്ല. പകരം, അത് മറ്റൊരു പ്രത്യേക അക്കൗണ്ടിൽ ശേഖരിച്ചുവെക്കുന്നു. ആസ്തി അതിന്റെ യഥാർത്ഥ വിലയിൽ തന്നെ തുടരുന്നു.
*Journal Entry:*
*ജേർണൽ എൻട്രി:*
Depreciation A/c Dr.
To Provision for Depreciation A/c
*(Depreciation charged and accumulated)*
*(തേയ്മാനം ഈടാക്കുകയും ശേഖരിക്കുകയും ചെയ്തു)*

### 4.6 Provisions
### 4.6 പ്രൊവിഷനുകൾ (വ്യവസ്ഥകൾ)

A provision is an amount set aside out of current profits to meet a known liability or loss, the exact amount of which cannot be determined with certainty.
കൃത്യമായ തുക ഉറപ്പിക്കാൻ കഴിയാത്ത, എന്നാൽ ഉണ്ടാകുമെന്ന് അറിയാവുന്ന ഒരു ബാധ്യതയോ നഷ്ടമോ നേരിടുന്നതിനായി നിലവിലെ ലാഭത്തിൽ നിന്ന് മാറ്റിവെക്കുന്ന തുകയാണ് പ്രൊവിഷൻ.
It is a charge against profit (it reduces net profit).
ഇത് ലാഭത്തിൽ നിന്നുള്ള ഒരു കുറവാണ് (ഇത് അറ്റാദായം കുറയ്ക്കുന്നു).
*Examples:* Provision for doubtful debts, Provision for depreciation, Provision for taxation.
*ഉദാഹരണങ്ങൾ:* കിട്ടാക്കടങ്ങൾക്കുള്ള വ്യവസ്ഥ, തേയ്മാനത്തിനുള്ള വ്യവസ്ഥ, നികുതിക്കുള്ള വ്യവസ്ഥ.

### 4.7 Reserves
### 4.7 റിസർവുകൾ (കരുതൽ ധനം)

A reserve is an amount set aside out of profits to strengthen the financial position of the business or to meet unforeseen future contingencies.
ബിസിനസ്സിന്റെ സാമ്പത്തിക സ്ഥിതി ശക്തിപ്പെടുത്തുന്നതിനോ, അല്ലെങ്കിൽ മുൻകൂട്ടി കാണാൻ കഴിയാത്ത ഭാവിയിലെ ആവശ്യങ്ങൾ നേരിടുന്നതിനോ വേണ്ടി ലാഭത്തിൽ നിന്ന് മാറ്റിവെക്കുന്ന തുകയാണ് റിസർവ്.
It is an appropriation of profit (created only if there is profit).
ഇത് ലാഭത്തിന്റെ ഒരു വിഹിതമാണ് (ലാഭമുണ്ടെങ്കിൽ മാത്രമേ ഉണ്ടാക്കാൻ കഴിയൂ).
*Examples:* General reserve, Dividend equalisation reserve, Capital reserve.
*ഉദാഹരണങ്ങൾ:* പൊതുവായ കരുതൽ ധനം, ലാഭവിഹിതം തുല്യമാക്കാനുള്ള കരുതൽ ധനം, മൂലധന കരുതൽ ധനം.

**Difference between Provision and Reserve**
**പ്രൊവിഷനും റിസർവും തമ്മിലുള്ള വ്യത്യാസം**

| Basis | Provision | Reserve |
| അടിസ്ഥാനം | പ്രൊവിഷൻ (വ്യവസ്ഥ) | റിസർവ് (കരുതൽ ധനം) |
| :--- | :--- | :--- |
| **Basic Nature** | Charge against profit. It must be created even if there is a loss. | Appropriation of profit. Created only when there is profit. |
| **അടിസ്ഥാന സ്വഭാവം** | ലാഭത്തിൽ നിന്നുള്ള കുറവാണിത്. നഷ്ടമാണെങ്കിൽപ്പോലും ഇത് ഉണ്ടാക്കണം. | ലാഭത്തിന്റെ വിഹിതമാണിത്. ലാഭമുണ്ടെങ്കിൽ മാത്രമേ ഉണ്ടാക്കൂ. |
| **Purpose** | Created to meet a known liability or loss. | Created to strengthen the financial position or meet unforeseen liabilities. |
| **ലക്ഷ്യം** | അറിയാവുന്ന ബാധ്യതയോ നഷ്ടമോ നേരിടാൻ ഉണ്ടാക്കുന്നു. | സാമ്പത്തിക സ്ഥിതി മെച്ചപ്പെടുത്താനോ അപ്രതീക്ഷിത ബാധ്യതകൾ നേരിടാനോ ഉണ്ടാക്കുന്നു. |
| **Effect on Profit** | Reduces net profit. | Does not reduce net profit, but reduces divisible profit. |
| **ലാഭത്തിലുള്ള മാറ്റം** | അറ്റാദായം കുറയ്ക്കുന്നു. | അറ്റാദായം കുറയ്ക്കുന്നില്ല, പക്ഷേ വിതരണം ചെയ്യാവുന്ന ലാഭം കുറയ്ക്കുന്നു. |

### 4.8 Types of Reserves
### 4.8 റിസർവുകളുടെ തരങ്ങൾ

1.  **Revenue Reserve:** Created out of revenue profits which arise from the normal operating activities of the business and are available for distribution as dividend.
1.  **റവന്യൂ റിസർവ്:** ബിസിനസ്സിന്റെ സാധാരണ പ്രവർത്തനങ്ങളിൽ നിന്നുണ്ടാകുന്നതും, ലാഭവിഹിതമായി നൽകാൻ ലഭ്യമായതുമായ റവന്യൂ ലാഭത്തിൽ നിന്നാണ് ഇത് ഉണ്ടാക്കുന്നത്.
    *   *General Reserve:* Created for no specific purpose, but to strengthen the general financial position.
    *   *ജനറൽ റിസർവ്:* പ്രത്യേക ലക്ഷ്യമൊന്നുമില്ലാതെ, പൊതുവായ സാമ്പത്തിക സ്ഥിതി ശക്തിപ്പെടുത്താൻ ഉണ്ടാക്കുന്നത്.
    *   *Specific Reserve:* Created for a specific, defined purpose (e.g., Dividend Equalisation Reserve).
    *   *സ്പെസിഫിക് റിസർവ്:* കൃത്യമായി നിർവചിക്കപ്പെട്ട ഒരു പ്രത്യേക ആവശ്യത്തിനായി ഉണ്ടാക്കുന്നത്.
2.  **Capital Reserve:** Created out of capital profits which do not arise from normal operating activities and are not available for distribution as dividend. (e.g., Profit on sale of fixed assets, profit on revaluation of assets).
2.  **ക്യാപ്പിറ്റൽ റിസർവ്:** ബിസിനസ്സിന്റെ സാധാരണ പ്രവർത്തനങ്ങളിൽ നിന്നുണ്ടാകാത്തതും, ലാഭവിഹിതമായി നൽകാൻ ലഭ്യമാകാത്തതുമായ മൂലധന ലാഭത്തിൽ (capital profit) നിന്നാണ് ഇത് ഉണ്ടാക്കുന്നത്. (ഉദാ: സ്ഥിര ആസ്തികൾ വിൽക്കുമ്പോഴുണ്ടാകുന്ന ലാഭം, ആസ്തികൾ പുനർമൂല്യനിർണ്ണയം ചെയ്യുമ്പോഴുണ്ടാകുന്ന ലാഭം).
3.  **Secret Reserve:** A reserve which does not appear in the balance sheet. It is created by showing profits lower than actual, usually by charging excessive depreciation or undervaluing closing stock.
3.  **സീക്രട്ട് റിസർവ് (രഹസ്യ കരുതൽ ധനം):** ബാലൻസ് ഷീറ്റിൽ കാണിക്കാത്ത ഒരു റിസർവാണിത്. സാധാരണയായി അമിതമായ തേയ്മാനം കാണിച്ചോ അല്ലെങ്കിൽ ക്ലോസിംഗ് സ്റ്റോക്കിന്റെ മൂല്യം കുറച്ചുകാണിച്ചോ യഥാർത്ഥ ലാഭത്തേക്കാൾ കുറവ് ലാഭം കാണിച്ച് ഇത് ഉണ്ടാക്കുന്നു.

---

## 3️⃣ Accounting Formats
## 3️⃣ അക്കൗണ്ടിംഗ് ഫോർമാറ്റുകൾ

**Machinery Account Format**
**മെഷിനറി അക്കൗണ്ട് ഫോർമാറ്റ്**

**Machinery Account**
**Machinery Account (മെഷിനറി അക്കൗണ്ട്)**

| Date | Particulars | J.F. | Amount | Date | Particulars | J.F. | Amount |
| തിയ്യതി | വിവരങ്ങൾ | J.F. | തുക | തിയ്യതി | വിവരങ്ങൾ | J.F. | തുക |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Year 1 Jan 1 | To Bank A/c (Purchase) | | XXXX | Year 1 Dec 31 | By Depreciation A/c | | XXXX |
| | | | | Dec 31 | By Balance c/d | | XXXX |
| | **Total** | | **YYYY** | | **Total** | | **YYYY** |
| Year 2 Jan 1 | To Balance b/d | | XXXX | Year 2 Dec 31 | By Depreciation A/c | | XXXX |
| | | | | Dec 31 | By Balance c/d | | XXXX |

---

## 4️⃣ Worked Illustrations
## 4️⃣ പരിഹരിച്ച ഉദാഹരണങ്ങൾ

### Illustration 1: Straight Line Method
### ഉദാഹരണം 1: സ്ട്രെയിറ്റ് ലൈൻ മെത്തേഡ്

**Question:**
**ചോദ്യം:**
A machine was purchased for Rs. 1,00,000 on 1st April 2015. The estimated useful life is 10 years and the estimated scrap value is Rs. 10,000. Calculate the annual amount of depreciation.
2015 ഏപ്രിൽ 1-ന് 1,00,000 രൂപയ്ക്ക് ഒരു യന്ത്രം വാങ്ങി. അതിന്റെ കണക്കാക്കിയ ഉപയോഗ കാലയളവ് 10 വർഷവും, കണക്കാക്കിയ ആക്രി വില 10,000 രൂപയുമാണ്. വാർഷിക തേയ്മാന തുക കണക്കാക്കുക.

**Solution:**
**പരിഹാരം:**
*   Original Cost = Rs. 1,00,000
*   യഥാർത്ഥ വില = 1,00,000 രൂപ
*   Scrap Value = Rs. 10,000
*   ആക്രി വില = 10,000 രൂപ
*   Useful Life = 10 years
*   ഉപയോഗ കാലയളവ് = 10 വർഷം
*   Annual Depreciation = (Original Cost - Scrap Value) / Useful Life
*   വാർഷിക തേയ്മാനം = (യഥാർത്ഥ വില - ആക്രി വില) / ഉപയോഗ കാലയളവ്
    = (1,00,000 - 10,000) / 10
    = 90,000 / 10
    = **Rs. 9,000 per year.**
    = **9,000 രൂപ പ്രതിവർഷം.**

### Illustration 2: Written Down Value Method
### ഉദാഹരണം 2: റിട്ടൺ ഡൗൺ വാല്യൂ മെത്തേഡ്

**Question:**
**ചോദ്യം:**
A firm bought machinery for Rs. 50,000 on Jan 1, 2016. Depreciation is charged at 10% p.a. on the Written Down Value method. Calculate depreciation for the first 3 years. Books close on Dec 31 every year.
ഒരു സ്ഥാപനം 2016 ജനുവരി 1-ന് 50,000 രൂപയ്ക്ക് യന്ത്രം വാങ്ങി. റിട്ടൺ ഡൗൺ വാല്യൂ രീതിയിൽ പ്രതിവർഷം 10% നിരക്കിലാണ് തേയ്മാനം കണക്കാക്കുന്നത്. ആദ്യത്തെ 3 വർഷത്തെ തേയ്മാനം കണക്കാക്കുക. എല്ലാ വർഷവും ഡിസംബർ 31-നാണ് പുസ്തകങ്ങൾ ക്ലോസ് ചെയ്യുന്നത്.

**Solution:**
**പരിഹാരം:**
*   **Year 1 (2016):**
*   **വർഷം 1 (2016):**
    Original Cost = Rs. 50,000
    യഥാർത്ഥ വില = 50,000 രൂപ
    Depreciation = 10% of 50,000 = Rs. 5,000
    തേയ്മാനം = 50,000-ന്റെ 10% = 5,000 രൂപ
    Written Down Value (Book Value) at end of Year 1 = 50,000 - 5,000 = Rs. 45,000
    വർഷം 1-ന്റെ അവസാനമുള്ള ബുക്ക് വാല്യൂ = 50,000 - 5,000 = 45,000 രൂപ
*   **Year 2 (2017):**
*   **വർഷം 2 (2017):**
    Book Value at start of Year 2 = Rs. 45,000
    വർഷം 2-ന്റെ തുടക്കത്തിലെ ബുക്ക് വാല്യൂ = 45,000 രൂപ
    Depreciation = 10% of 45,000 = Rs. 4,500
    തേയ്മാനം = 45,000-ന്റെ 10% = 4,500 രൂപ
    Written Down Value at end of Year 2 = 45,000 - 4,500 = Rs. 40,500
    വർഷം 2-ന്റെ അവസാനമുള്ള ബുക്ക് വാല്യൂ = 45,000 - 4,500 = 40,500 രൂപ
*   **Year 3 (2018):**
*   **വർഷം 3 (2018):**
    Book Value at start of Year 3 = Rs. 40,500
    വർഷം 3-ന്റെ തുടക്കത്തിലെ ബുക്ക് വാല്യൂ = 40,500 രൂപ
    Depreciation = 10% of 40,500 = Rs. 4,050
    തേയ്മാനം = 40,500-ന്റെ 10% = 4,050 രൂപ
    Written Down Value at end of Year 3 = 40,500 - 4,050 = Rs. 36,450
    വർഷം 3-ന്റെ അവസാനമുള്ള ബുക്ക് വാല്യൂ = 40,500 - 4,050 = 36,450 രൂപ

*(Note how the depreciation amount decreases every year: 5000 -> 4500 -> 4050)*
*(തേയ്മാന തുക എല്ലാ വർഷവും എങ്ങനെ കുറയുന്നുവെന്ന് ശ്രദ്ധിക്കുക: 5000 -> 4500 -> 4050)*

---

## 5️⃣ Important Formulas and Rules
## 5️⃣ പ്രധാനപ്പെട്ട സൂത്രവാക്യങ്ങളും നിയമങ്ങളും

1.  **Straight Line Method (SLM) Depreciation:**
1.  **സ്ട്രെയിറ്റ് ലൈൻ മെത്തേഡ് (SLM) തേയ്മാനം:**
    Annual Depreciation = (Cost of Asset - Estimated Scrap Value) / Estimated Useful Life
    വാർഷിക തേയ്മാനം = (ആസ്തിയുടെ വില - കണക്കാക്കിയ ആക്രി വില) / കണക്കാക്കിയ ഉപയോഗ കാലയളവ്
2.  **Rate of Depreciation (SLM):**
2.  **തേയ്മാന നിരക്ക് (SLM):**
    Rate = (Annual Depreciation / Cost of Asset) × 100
    നിരക്ക് = (വാർഷിക തേയ്മാനം / ആസ്തിയുടെ വില) × 100
3.  **Written Down Value (Book Value):**
3.  **റിട്ടൺ ഡൗൺ വാല്യൂ (ബുക്ക് വാല്യൂ):**
    Book Value = Original Cost - Accumulated Depreciation
    ബുക്ക് വാല്യൂ = യഥാർത്ഥ വില - ഇതുവരെയുള്ള ആകെ തേയ്മാനം

---

## 6️⃣ Summary Points
## 6️⃣ ചുരുക്കരൂപം

*   Depreciation is the permanent decrease in the value of fixed tangible assets.
*   സ്ഥിരമായ സ്പർശിക്കാൻ കഴിയുന്ന ആസ്തികളുടെ മൂല്യത്തിലുണ്ടാകുന്ന സ്ഥിരമായ കുറവാണ് തേയ്മാനം.
*   Causes include wear and tear, passage of time, and obsolescence.
*   ഉപയോഗം, സമയം കടന്നുപോകുന്നത്, കാലഹരണപ്പെടൽ എന്നിവ കാരണങ്ങളിൽ ഉൾപ്പെടുന്നു.
*   In SLM, depreciation is calculated on the original cost and remains constant.
*   SLM രീതിയിൽ യഥാർത്ഥ വിലയിന്മേലാണ് തേയ്മാനം കണക്കാക്കുന്നത്, തുക സ്ഥിരമായിരിക്കും.
*   In WDV, depreciation is calculated on the book value and decreases every year.
*   WDV രീതിയിൽ ബുക്ക് വാല്യൂവിന്മേലാണ് തേയ്മാനം കണക്കാക്കുന്നത്, തുക ഓരോ വർഷവും കുറഞ്ഞുവരുന്നു.
*   A Provision is a charge against profit created for a known liability.
*   അറിയാവുന്ന ബാധ്യതയ്ക്ക് വേണ്ടി ലാഭത്തിൽ നിന്നെടുക്കുന്ന കുറവാണ് പ്രൊവിഷൻ.
*   A Reserve is an appropriation of profit created to strengthen financial position.
*   സാമ്പത്തിക സ്ഥിതി മെച്ചപ്പെടുത്താനായി മാറ്റിവെക്കുന്ന ലാഭത്തിന്റെ വിഹിതമാണ് റിസർവ്.







`,
      ml: `
# 📘 Chapter 7: Depreciation, Provisions and Reserves
# 📘 അധ്യായം 7: തേയ്മാനം, വ്യവസ്ഥകൾ, കരുതൽ ധനം

---

## 1️⃣ Chapter Overview
## 1️⃣ അധ്യായത്തിന്റെ അവലോകനം

*   **🎯 Learning Objectives**:
*   **🎯 പഠന ലക്ഷ്യങ്ങൾ**:
    *   Explain the meaning of depreciation and distinguish it from depletion and amortisation.
    *   തേയ്മാനത്തിന്റെ അർത്ഥം വിശദീകരിക്കാനും അതിനെ ഡിപ്ലീഷൻ, അമോർട്ടൈസേഷൻ എന്നിവയിൽ നിന്ന് വേർതിരിച്ചറിയാനും.
    *   State the need for charging depreciation and identify its causes.
    *   തേയ്മാനം കണക്കാക്കേണ്ടതിന്റെ ആവശ്യകത വ്യക്തമാക്കാനും അതിന്റെ കാരണങ്ങൾ തിരിച്ചറിയാനും.
    *   Compute depreciation using straight line and written down value methods.
    *   സ്ട്രെയിറ്റ് ലൈൻ രീതിയും റിട്ടൺ ഡൗൺ വാല്യൂ രീതിയും ഉപയോഗിച്ച് തേയ്മാനം കണക്കാക്കാൻ.
    *   Record transactions relating to depreciation and disposition of assets.
    *   തേയ്മാനവും ആസ്തികൾ വിൽക്കുന്നതുമായി ബന്ധപ്പെട്ട ഇടപാടുകൾ രേഖപ്പെടുത്താൻ.
    *   Explain the meaning and purpose of creating provisions and reserves.
    *   പ്രൊവിഷനുകളും റിസർവുകളും രൂപീകരിക്കുന്നതിന്റെ അർത്ഥവും ലക്ഷ്യവും വിശദീകരിക്കാൻ.
    *   Distinguish between reserves and provisions.
    *   റിസർവുകളും പ്രൊവിഷനുകളും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയാൻ.
    *   Explain the nature of various types of provisions and reserves.
    *   വിവിധ തരത്തിലുള്ള പ്രൊവിഷനുകളുടെയും റിസർവുകളുടെയും സ്വഭാവം വിശദീകരിക്കാൻ.
*   **🔑 Key Concepts**: Meaning and Causes of Depreciation, Need for Depreciation, Methods of Calculating Depreciation (Straight Line Method & Written Down Value Method), Recording Depreciation (Charging to Asset A/c vs Creating Provision for Depreciation A/c), Meaning and Objective of Provisions, Meaning and Objective of Reserves, Types of Reserves, Difference between Provision and Reserve.
*   **🔑 പ്രധാന ആശയങ്ങൾ**: തേയ്മാനത്തിന്റെ അർത്ഥവും കാരണങ്ങളും, തേയ്മാനത്തിന്റെ ആവശ്യകത, തേയ്മാനം കണക്കാക്കുന്നതിനുള്ള രീതികൾ (സ്ട്രെയിറ്റ് ലൈൻ മെത്തേഡ് & റിട്ടൺ ഡൗൺ വാല്യൂ മെത്തേഡ്), തേയ്മാനം രേഖപ്പെടുത്തൽ (അസറ്റ് അക്കൗണ്ടിൽ നിന്ന് കുറയ്ക്കുന്നത് vs പ്രൊവിഷൻ ഫോർ ഡിപ്രീസിയേഷൻ അക്കൗണ്ട് ഉണ്ടാക്കുന്നത്), പ്രൊവിഷനുകളുടെ (വ്യവസ്ഥകളുടെ) അർത്ഥവും ലക്ഷ്യവും, റിസർവുകളുടെ (കരുതൽ ധനത്തിന്റെ) അർത്ഥവും ലക്ഷ്യവും, റിസർവുകളുടെ തരങ്ങൾ, പ്രൊവിഷനും റിസർവും തമ്മിലുള്ള വ്യത്യാസം.

---

## 2️⃣ Detailed Concepts
## 2️⃣ വിശദമായ ആശയങ്ങൾ

### 4.1 Meaning of Depreciation
### 4.1 തേയ്മാനത്തിന്റെ അർത്ഥം

Depreciation is the measure of the wearing out, consumption or other loss of value of a depreciable asset arising from use, effluxion of time or obsolescence through technology and market changes.
ഉപയോഗം, സമയം കടന്നുപോകുന്നത്, അല്ലെങ്കിൽ സാങ്കേതികവിദ്യയിലും വിപണിയിലുമുണ്ടാകുന്ന മാറ്റങ്ങൾ കാരണം കാലഹരണപ്പെടുന്നത് എന്നിവ മൂലം വിലയിടിയാൻ സാധ്യതയുള്ള ഒരു ആസ്തിക്ക് സംഭവിക്കുന്ന തേയ്മാനം, ഉപയോഗിച്ച് തീരുന്നത്, അല്ലെങ്കിൽ മൂല്യത്തിലുണ്ടാകുന്ന മറ്റ് നഷ്ടങ്ങൾ എന്നിവയുടെ അളവാണ് ഡിപ്രീസിയേഷൻ (തേയ്മാനം).

It is a non-cash expense and represents a part of the original cost of a fixed asset which is consumed during its period of use by the business.
ഇത് പണമായി നൽകേണ്ടതില്ലാത്ത ഒരു ചിലവാണ്, കൂടാതെ ബിസിനസ്സ് ഉപയോഗിക്കുന്ന കാലയളവിൽ ഉപഭോഗം ചെയ്യപ്പെടുന്ന ഒരു സ്ഥിര ആസ്തിയുടെ യഥാർത്ഥ വിലയുടെ ഒരു ഭാഗത്തെ ഇത് പ്രതിനിധീകരിക്കുന്നു.

Depreciation is charged on fixed tangible assets like machinery, building, furniture, etc.
യന്ത്രങ്ങൾ, കെട്ടിടം, ഫർണിച്ചർ തുടങ്ങിയ സ്ഥിരമായ സ്പർശിക്കാൻ കഴിയുന്ന ആസ്തികളിന്മേലാണ് (fixed tangible assets) തേയ്മാനം കണക്കാക്കുന്നത്.

**Similar Terms:**
**സമാന പദങ്ങൾ:**

*   **Depletion:** It is the decrease in the value of wasting assets such as mines, oil wells, quarries, etc. due to extraction of natural resources.
*   **ഡിപ്ലീഷൻ (ശോഷണം):** പ്രകൃതിവിഭവങ്ങൾ വേർതിരിച്ചെടുക്കുന്നത് കാരണം ഖനികൾ, എണ്ണക്കിണറുകൾ, ക്വാറികൾ മുതലായ തീർന്നുപോകുന്ന ആസ്തികളുടെ (wasting assets) മൂല്യത്തിലുണ്ടാകുന്ന കുറവാണിത്.
*   **Amortisation:** It is the process of writing off intangible assets like patents, copyrights, trademarks, franchises, etc. over their useful life.
*   **അമോർട്ടൈസേഷൻ:** പേറ്റന്റുകൾ, പകർപ്പവകാശങ്ങൾ, വ്യാപാരമുദ്രകൾ, ഫ്രാഞ്ചൈസികൾ മുതലായ സ്പർശിക്കാൻ കഴിയാത്ത ആസ്തികളുടെ (intangible assets) മൂല്യം അവയുടെ ഉപയോഗ കാലയളവിലായി കുറച്ചുകൊണ്ടുവരുന്ന പ്രക്രിയയാണിത്.

### 4.2 Causes of Depreciation
### 4.2 തേയ്മാനത്തിനുള്ള കാരണങ്ങൾ

1.  **Wear and Tear due to Use or Passage of Time:**
1.  **ഉപയോഗം അല്ലെങ്കിൽ സമയം കടന്നുപോകുന്നത് മൂലമുള്ള തേയ്മാനം:**
    Normal use of a tangible asset physically wears it out. Even if an asset is not used, its value may decrease due to passage of time or exposure to elements (like weather).
    ഒരു ഭൗതിക ആസ്തിയുടെ സാധാരണ ഉപയോഗം അതിനെ ശാരീരികമായി തേയ്മാനം വരുത്തുന്നു. ഒരു ആസ്തി ഉപയോഗിക്കുന്നില്ലെങ്കിൽപ്പോലും, സമയം കടന്നുപോകുന്നത് മൂലമോ പ്രകൃതിക്ഷോഭങ്ങൾ (കാലാവസ്ഥ പോലെ) കാരണമോ അതിന്റെ മൂല്യം കുറഞ്ഞേക്കാം.
2.  **Expiration of Legal Rights:**
2.  **നിയമപരമായ അവകാശങ്ങൾ അവസാനിക്കുന്നത്:**
    Some assets like patents or leases have a definite legal life. Their value drops to zero at the end of this period.
    പേറ്റന്റുകൾ അല്ലെങ്കിൽ പാട്ടങ്ങൾ പോലെയുള്ള ചില ആസ്തികൾക്ക് നിശ്ചിതമായ ഒരു നിയമപരമായ കാലയളവുണ്ട്. ഈ കാലയളവ് അവസാനിക്കുമ്പോൾ അവയുടെ മൂല്യം പൂജ്യമായി മാറുന്നു.
3.  **Obsolescence:**
3.  **കാലഹരണപ്പെടൽ (Obsolescence):**
    An asset may become outdated due to new inventions, improved models, or changes in market demand, even if it is in good physical condition.
    ഒരു ആസ്തി നല്ല ഭൗതിക അവസ്ഥയിലാണെങ്കിൽപ്പോലും, പുതിയ കണ്ടുപിടുത്തങ്ങൾ, മെച്ചപ്പെട്ട മോഡലുകൾ, അല്ലെങ്കിൽ വിപണിയിലെ ആവശ്യത്തിലുണ്ടാകുന്ന മാറ്റങ്ങൾ എന്നിവ കാരണം അത് കാലഹരണപ്പെട്ടേക്കാം.
4.  **Abnormal Factors:**
4.  **അസാധാരണ ഘടകങ്ങൾ:**
    Decline in the usefulness of the asset may be caused by abnormal factors like accidents due to fire, earthquake, floods, etc.
    തീപിടുത്തം, ഭൂകമ്പം, വെള്ളപ്പൊക്കം തുടങ്ങിയവ കാരണമുണ്ടാകുന്ന അപകടങ്ങൾ പോലുള്ള അസാധാരണ ഘടകങ്ങൾ മൂലം ആസ്തിയുടെ ഉപയോഗക്ഷമത കുറയാം.

### 4.3 Need for Depreciation
### 4.3 തേയ്മാനത്തിന്റെ ആവശ്യകത

1.  **Matching of Costs and Revenue:**
1.  **ചിലവുകളും വരുമാനവും പൊരുത്തപ്പെടുത്താൻ:**
    To ascertain the true profit, the cost of the asset consumed in earning revenue must be charged as an expense against that revenue.
    യഥാർത്ഥ ലാഭം കണ്ടെത്താൻ, വരുമാനം ഉണ്ടാക്കുന്നതിനായി ഉപയോഗിച്ച ആസ്തിയുടെ ചിലവ് ആ വരുമാനത്തിൽ നിന്ന് ഒരു ചിലവായി കുറയ്ക്കേണ്ടതുണ്ട്.
2.  **Consideration of Tax:**
2.  **നികുതി കണക്കാക്കാൻ:**
    Depreciation is a deductible expense under tax laws. Charging it reduces the taxable profit and the tax liability.
    നികുതി നിയമപ്രകാരം തേയ്മാനം ഒരു ഇളവ് ലഭിക്കുന്ന ചിലവാണ്. ഇത് കുറയ്ക്കുന്നത് നികുതി നൽകേണ്ട ലാഭവും നികുതി ബാധ്യതയും കുറയ്ക്കുന്നു.
3.  **True and Fair Financial Position:**
3.  **ശരിയായ സാമ്പത്തിക സ്ഥിതി കാണിക്കാൻ:**
    If depreciation is not charged, assets will be shown at an overvalued figure, and the balance sheet will not present a true financial position.
    തേയ്മാനം കുറച്ചില്ലെങ്കിൽ, ആസ്തികൾ കൂടുതലായ വിലയിലാകും കാണിക്കുക, കൂടാതെ ബാലൻസ് ഷീറ്റ് ശരിയായ സാമ്പത്തിക സ്ഥിതി കാണിക്കുകയുമില്ല.
4.  **Compliance with Law:**
4.  **നിയമങ്ങൾ പാലിക്കാൻ:**
    Companies Act and other legal statutes require that depreciation must be provided before distributing dividends.
    ലാഭവിഹിതം നൽകുന്നതിന് മുമ്പ് തേയ്മാനം വകയിരുത്തണമെന്ന് കമ്പനീസ് ആക്റ്റും മറ്റ് നിയമങ്ങളും നിഷ്കർഷിക്കുന്നു.

### 4.4 Methods of Calculating Depreciation
### 4.4 തേയ്മാനം കണക്കാക്കുന്ന രീതികൾ

There are two main methods of calculating depreciation:
തേയ്മാനം കണക്കാക്കാൻ പ്രധാനമായും രണ്ട് രീതികളുണ്ട്:

#### 1. Straight Line Method (SLM)
#### 1. സ്ട്രെയിറ്റ് ലൈൻ മെത്തേഡ് (SLM)
This is also called the Original Cost Method or Fixed Installment Method.
ഇതിനെ ഒറിജിനൽ കോസ്റ്റ് മെത്തേഡ് അല്ലെങ്കിൽ ഫിക്സഡ് ഇൻസ്റ്റാൾമെന്റ് മെത്തേഡ് (സ്ഥിര തവണ രീതി) എന്നും വിളിക്കുന്നു.
Under this method, a fixed and equal amount is charged as depreciation every year during the lifetime of the asset.
ഈ രീതിയിൽ, ആസ്തിയുടെ ജീവിതകാലം മുഴുവൻ എല്ലാ വർഷവും സ്ഥിരവും തുല്യവുമായ ഒരു തുക തേയ്മാനമായി കണക്കാക്കുന്നു.
The amount of depreciation is calculated on the original cost of the asset.
ആസ്തിയുടെ യഥാർത്ഥ വിലയിന്മേലാണ് തേയ്മാന തുക കണക്കാക്കുന്നത്.

*   **Formula:** Depreciation = (Original Cost of Asset - Estimated Scrap Value) / Estimated Useful Life of the Asset
*   **സൂത്രവാക്യം:** തേയ്മാനം = (ആസ്തിയുടെ യഥാർത്ഥ വില - കണക്കാക്കിയ ആക്രി വില) / ആസ്തിയുടെ കണക്കാക്കിയ ഉപയോഗ കാലയളവ്
*   *Original Cost = Purchase Price + Freight + Installation Charges*
*   *യഥാർത്ഥ വില = വാങ്ങിയ വില + ചരക്ക് കൂലി + ഇൻസ്റ്റാളേഷൻ ചിലവുകൾ*
*   **Rate of Depreciation:** Rate of Depreciation = (Amount of Depreciation / Original Cost) × 100
*   **തേയ്മാന നിരക്ക്:** തേയ്മാന നിരക്ക് = (തേയ്മാന തുക / യഥാർത്ഥ വില) × 100

#### 2. Written Down Value Method (WDV)
#### 2. റിട്ടൺ ഡൗൺ വാല്യൂ മെത്തേഡ് (WDV)
This is also known as the Diminishing Balance Method or Reducing Installment Method.
ഇത് ഡിമിനിഷിംഗ് ബാലൻസ് മെത്തേഡ് അല്ലെങ്കിൽ റെഡ്യൂസിംഗ് ഇൻസ്റ്റാൾമെന്റ് മെത്തേഡ് (കുറഞ്ഞുവരുന്ന തവണ രീതി) എന്നും അറിയപ്പെടുന്നു.
Under this method, depreciation is charged at a fixed percentage on the book value (written down value) of the asset every year.
ഈ രീതിയിൽ, ആസ്തിയുടെ ബുക്ക് വാല്യൂവിൽ (കുറഞ്ഞുവരുന്ന മൂല്യത്തിൽ) എല്ലാ വർഷവും ഒരു നിശ്ചിത ശതമാനത്തിലാണ് തേയ്മാനം കണക്കാക്കുന്നത്.
The amount of depreciation goes on decreasing every year.
തേയ്മാന തുക ഓരോ വർഷവും കുറഞ്ഞുവരുന്നു.

**Comparison Table: SLM vs WDV**
**താരതമ്യ പട്ടിക: SLM ഉം WDV ഉം**

| Basis of Difference | Straight Line Method (SLM) | Written Down Value Method (WDV) |
| വ്യത്യാസത്തിന്റെ അടിസ്ഥാനം | സ്ട്രെയിറ്റ് ലൈൻ രീതി (SLM) | റിട്ടൺ ഡൗൺ വാല്യൂ രീതി (WDV) |
| :--- | :--- | :--- |
| **Basis of Calculation** | Calculated on the original cost every year. | Calculated on the written down value (book value) every year. |
| **കണക്കാക്കുന്നതിന്റെ അടിസ്ഥാനം** | എല്ലാ വർഷവും യഥാർത്ഥ വിലയിന്മേൽ കണക്കാക്കുന്നു. | എല്ലാ വർഷവും ബുക്ക് വാല്യൂവിന്മേൽ കണക്കാക്കുന്നു. |
| **Amount of Depreciation** | Remains fixed/equal every year. | Goes on decreasing every year. |
| **തേയ്മാന തുക** | എല്ലാ വർഷവും സ്ഥിരമായി/തുല്യമായി തുടരുന്നു. | ഓരോ വർഷവും കുറഞ്ഞുവരുന്നു. |
| **Value at end of life** | Asset value can be reduced to zero. | Asset value can never be reduced to zero. |
| **ജീവിതകാലാവസാനത്തെ മൂല്യം** | ആസ്തിയുടെ മൂല്യം പൂജ്യമായി കുറയാം. | ആസ്തിയുടെ മൂല്യം ഒരിക്കലും പൂജ്യമാകില്ല. |

### 4.5 Recording Depreciation
### 4.5 തേയ്മാനം രേഖപ്പെടുത്തൽ

There are two ways to record depreciation in the books of accounts:
അക്കൗണ്ട് പുസ്തകങ്ങളിൽ തേയ്മാനം രേഖപ്പെടുത്താൻ രണ്ട് വഴികളുണ്ട്:

**Method 1: Charging Depreciation to Asset Account**
**രീതി 1: ആസ്തി അക്കൗണ്ടിൽ നിന്ന് തേയ്മാനം കുറയ്ക്കുന്നത്**
Depreciation is directly deducted from the value of the asset.
തേയ്മാനം ആസ്തിയുടെ മൂല്യത്തിൽ നിന്ന് നേരിട്ട് കുറയ്ക്കുന്നു.
*Journal Entry:*
*ജേർണൽ എൻട്രി:*
Depreciation A/c Dr.
To Asset A/c
*(Depreciation charged on asset)*
*(ആസ്തിയിന്മേൽ തേയ്മാനം ഈടാക്കി)*

**Method 2: Creating Provision for Depreciation Account / Accumulated Depreciation Account**
**രീതി 2: പ്രൊവിഷൻ ഫോർ ഡിപ്രീസിയേഷൻ അക്കൗണ്ട് ഉണ്ടാക്കുന്നത്**
Depreciation is not deducted from the asset account. Instead, it is accumulated in a separate account. The asset continues to appear at its original cost.
തേയ്മാനം ആസ്തി അക്കൗണ്ടിൽ നിന്ന് കുറയ്ക്കുന്നില്ല. പകരം, അത് മറ്റൊരു പ്രത്യേക അക്കൗണ്ടിൽ ശേഖരിച്ചുവെക്കുന്നു. ആസ്തി അതിന്റെ യഥാർത്ഥ വിലയിൽ തന്നെ തുടരുന്നു.
*Journal Entry:*
*ജേർണൽ എൻട്രി:*
Depreciation A/c Dr.
To Provision for Depreciation A/c
*(Depreciation charged and accumulated)*
*(തേയ്മാനം ഈടാക്കുകയും ശേഖരിക്കുകയും ചെയ്തു)*

### 4.6 Provisions
### 4.6 പ്രൊവിഷനുകൾ (വ്യവസ്ഥകൾ)

A provision is an amount set aside out of current profits to meet a known liability or loss, the exact amount of which cannot be determined with certainty.
കൃത്യമായ തുക ഉറപ്പിക്കാൻ കഴിയാത്ത, എന്നാൽ ഉണ്ടാകുമെന്ന് അറിയാവുന്ന ഒരു ബാധ്യതയോ നഷ്ടമോ നേരിടുന്നതിനായി നിലവിലെ ലാഭത്തിൽ നിന്ന് മാറ്റിവെക്കുന്ന തുകയാണ് പ്രൊവിഷൻ.
It is a charge against profit (it reduces net profit).
ഇത് ലാഭത്തിൽ നിന്നുള്ള ഒരു കുറവാണ് (ഇത് അറ്റാദായം കുറയ്ക്കുന്നു).
*Examples:* Provision for doubtful debts, Provision for depreciation, Provision for taxation.
*ഉദാഹരണങ്ങൾ:* കിട്ടാക്കടങ്ങൾക്കുള്ള വ്യവസ്ഥ, തേയ്മാനത്തിനുള്ള വ്യവസ്ഥ, നികുതിക്കുള്ള വ്യവസ്ഥ.

### 4.7 Reserves
### 4.7 റിസർവുകൾ (കരുതൽ ധനം)

A reserve is an amount set aside out of profits to strengthen the financial position of the business or to meet unforeseen future contingencies.
ബിസിനസ്സിന്റെ സാമ്പത്തിക സ്ഥിതി ശക്തിപ്പെടുത്തുന്നതിനോ, അല്ലെങ്കിൽ മുൻകൂട്ടി കാണാൻ കഴിയാത്ത ഭാവിയിലെ ആവശ്യങ്ങൾ നേരിടുന്നതിനോ വേണ്ടി ലാഭത്തിൽ നിന്ന് മാറ്റിവെക്കുന്ന തുകയാണ് റിസർവ്.
It is an appropriation of profit (created only if there is profit).
ഇത് ലാഭത്തിന്റെ ഒരു വിഹിതമാണ് (ലാഭമുണ്ടെങ്കിൽ മാത്രമേ ഉണ്ടാക്കാൻ കഴിയൂ).
*Examples:* General reserve, Dividend equalisation reserve, Capital reserve.
*ഉദാഹരണങ്ങൾ:* പൊതുവായ കരുതൽ ധനം, ലാഭവിഹിതം തുല്യമാക്കാനുള്ള കരുതൽ ധനം, മൂലധന കരുതൽ ധനം.

**Difference between Provision and Reserve**
**പ്രൊവിഷനും റിസർവും തമ്മിലുള്ള വ്യത്യാസം**

| Basis | Provision | Reserve |
| അടിസ്ഥാനം | പ്രൊവിഷൻ (വ്യവസ്ഥ) | റിസർവ് (കരുതൽ ധനം) |
| :--- | :--- | :--- |
| **Basic Nature** | Charge against profit. It must be created even if there is a loss. | Appropriation of profit. Created only when there is profit. |
| **അടിസ്ഥാന സ്വഭാവം** | ലാഭത്തിൽ നിന്നുള്ള കുറവാണിത്. നഷ്ടമാണെങ്കിൽപ്പോലും ഇത് ഉണ്ടാക്കണം. | ലാഭത്തിന്റെ വിഹിതമാണിത്. ലാഭമുണ്ടെങ്കിൽ മാത്രമേ ഉണ്ടാക്കൂ. |
| **Purpose** | Created to meet a known liability or loss. | Created to strengthen the financial position or meet unforeseen liabilities. |
| **ലക്ഷ്യം** | അറിയാവുന്ന ബാധ്യതയോ നഷ്ടമോ നേരിടാൻ ഉണ്ടാക്കുന്നു. | സാമ്പത്തിക സ്ഥിതി മെച്ചപ്പെടുത്താനോ അപ്രതീക്ഷിത ബാധ്യതകൾ നേരിടാനോ ഉണ്ടാക്കുന്നു. |
| **Effect on Profit** | Reduces net profit. | Does not reduce net profit, but reduces divisible profit. |
| **ലാഭത്തിലുള്ള മാറ്റം** | അറ്റാദായം കുറയ്ക്കുന്നു. | അറ്റാദായം കുറയ്ക്കുന്നില്ല, പക്ഷേ വിതരണം ചെയ്യാവുന്ന ലാഭം കുറയ്ക്കുന്നു. |

### 4.8 Types of Reserves
### 4.8 റിസർവുകളുടെ തരങ്ങൾ

1.  **Revenue Reserve:** Created out of revenue profits which arise from the normal operating activities of the business and are available for distribution as dividend.
1.  **റവന്യൂ റിസർവ്:** ബിസിനസ്സിന്റെ സാധാരണ പ്രവർത്തനങ്ങളിൽ നിന്നുണ്ടാകുന്നതും, ലാഭവിഹിതമായി നൽകാൻ ലഭ്യമായതുമായ റവന്യൂ ലാഭത്തിൽ നിന്നാണ് ഇത് ഉണ്ടാക്കുന്നത്.
    *   *General Reserve:* Created for no specific purpose, but to strengthen the general financial position.
    *   *ജനറൽ റിസർവ്:* പ്രത്യേക ലക്ഷ്യമൊന്നുമില്ലാതെ, പൊതുവായ സാമ്പത്തിക സ്ഥിതി ശക്തിപ്പെടുത്താൻ ഉണ്ടാക്കുന്നത്.
    *   *Specific Reserve:* Created for a specific, defined purpose (e.g., Dividend Equalisation Reserve).
    *   *സ്പെസിഫിക് റിസർവ്:* കൃത്യമായി നിർവചിക്കപ്പെട്ട ഒരു പ്രത്യേക ആവശ്യത്തിനായി ഉണ്ടാക്കുന്നത്.
2.  **Capital Reserve:** Created out of capital profits which do not arise from normal operating activities and are not available for distribution as dividend. (e.g., Profit on sale of fixed assets, profit on revaluation of assets).
2.  **ക്യാപ്പിറ്റൽ റിസർവ്:** ബിസിനസ്സിന്റെ സാധാരണ പ്രവർത്തനങ്ങളിൽ നിന്നുണ്ടാകാത്തതും, ലാഭവിഹിതമായി നൽകാൻ ലഭ്യമാകാത്തതുമായ മൂലധന ലാഭത്തിൽ (capital profit) നിന്നാണ് ഇത് ഉണ്ടാക്കുന്നത്. (ഉദാ: സ്ഥിര ആസ്തികൾ വിൽക്കുമ്പോഴുണ്ടാകുന്ന ലാഭം, ആസ്തികൾ പുനർമൂല്യനിർണ്ണയം ചെയ്യുമ്പോഴുണ്ടാകുന്ന ലാഭം).
3.  **Secret Reserve:** A reserve which does not appear in the balance sheet. It is created by showing profits lower than actual, usually by charging excessive depreciation or undervaluing closing stock.
3.  **സീക്രട്ട് റിസർവ് (രഹസ്യ കരുതൽ ധനം):** ബാലൻസ് ഷീറ്റിൽ കാണിക്കാത്ത ഒരു റിസർവാണിത്. സാധാരണയായി അമിതമായ തേയ്മാനം കാണിച്ചോ അല്ലെങ്കിൽ ക്ലോസിംഗ് സ്റ്റോക്കിന്റെ മൂല്യം കുറച്ചുകാണിച്ചോ യഥാർത്ഥ ലാഭത്തേക്കാൾ കുറവ് ലാഭം കാണിച്ച് ഇത് ഉണ്ടാക്കുന്നു.

---

## 3️⃣ Accounting Formats
## 3️⃣ അക്കൗണ്ടിംഗ് ഫോർമാറ്റുകൾ

**Machinery Account Format**
**മെഷിനറി അക്കൗണ്ട് ഫോർമാറ്റ്**

**Machinery Account**
**Machinery Account (മെഷിനറി അക്കൗണ്ട്)**

| Date | Particulars | J.F. | Amount | Date | Particulars | J.F. | Amount |
| തിയ്യതി | വിവരങ്ങൾ | J.F. | തുക | തിയ്യതി | വിവരങ്ങൾ | J.F. | തുക |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Year 1 Jan 1 | To Bank A/c (Purchase) | | XXXX | Year 1 Dec 31 | By Depreciation A/c | | XXXX |
| | | | | Dec 31 | By Balance c/d | | XXXX |
| | **Total** | | **YYYY** | | **Total** | | **YYYY** |
| Year 2 Jan 1 | To Balance b/d | | XXXX | Year 2 Dec 31 | By Depreciation A/c | | XXXX |
| | | | | Dec 31 | By Balance c/d | | XXXX |

---

## 4️⃣ Worked Illustrations
## 4️⃣ പരിഹരിച്ച ഉദാഹരണങ്ങൾ

### Illustration 1: Straight Line Method
### ഉദാഹരണം 1: സ്ട്രെയിറ്റ് ലൈൻ മെത്തേഡ്

**Question:**
**ചോദ്യം:**
A machine was purchased for Rs. 1,00,000 on 1st April 2015. The estimated useful life is 10 years and the estimated scrap value is Rs. 10,000. Calculate the annual amount of depreciation.
2015 ഏപ്രിൽ 1-ന് 1,00,000 രൂപയ്ക്ക് ഒരു യന്ത്രം വാങ്ങി. അതിന്റെ കണക്കാക്കിയ ഉപയോഗ കാലയളവ് 10 വർഷവും, കണക്കാക്കിയ ആക്രി വില 10,000 രൂപയുമാണ്. വാർഷിക തേയ്മാന തുക കണക്കാക്കുക.

**Solution:**
**പരിഹാരം:**
*   Original Cost = Rs. 1,00,000
*   യഥാർത്ഥ വില = 1,00,000 രൂപ
*   Scrap Value = Rs. 10,000
*   ആക്രി വില = 10,000 രൂപ
*   Useful Life = 10 years
*   ഉപയോഗ കാലയളവ് = 10 വർഷം
*   Annual Depreciation = (Original Cost - Scrap Value) / Useful Life
*   വാർഷിക തേയ്മാനം = (യഥാർത്ഥ വില - ആക്രി വില) / ഉപയോഗ കാലയളവ്
    = (1,00,000 - 10,000) / 10
    = 90,000 / 10
    = **Rs. 9,000 per year.**
    = **9,000 രൂപ പ്രതിവർഷം.**

### Illustration 2: Written Down Value Method
### ഉദാഹരണം 2: റിട്ടൺ ഡൗൺ വാല്യൂ മെത്തേഡ്

**Question:**
**ചോദ്യം:**
A firm bought machinery for Rs. 50,000 on Jan 1, 2016. Depreciation is charged at 10% p.a. on the Written Down Value method. Calculate depreciation for the first 3 years. Books close on Dec 31 every year.
ഒരു സ്ഥാപനം 2016 ജനുവരി 1-ന് 50,000 രൂപയ്ക്ക് യന്ത്രം വാങ്ങി. റിട്ടൺ ഡൗൺ വാല്യൂ രീതിയിൽ പ്രതിവർഷം 10% നിരക്കിലാണ് തേയ്മാനം കണക്കാക്കുന്നത്. ആദ്യത്തെ 3 വർഷത്തെ തേയ്മാനം കണക്കാക്കുക. എല്ലാ വർഷവും ഡിസംബർ 31-നാണ് പുസ്തകങ്ങൾ ക്ലോസ് ചെയ്യുന്നത്.

**Solution:**
**പരിഹാരം:**
*   **Year 1 (2016):**
*   **വർഷം 1 (2016):**
    Original Cost = Rs. 50,000
    യഥാർത്ഥ വില = 50,000 രൂപ
    Depreciation = 10% of 50,000 = Rs. 5,000
    തേയ്മാനം = 50,000-ന്റെ 10% = 5,000 രൂപ
    Written Down Value (Book Value) at end of Year 1 = 50,000 - 5,000 = Rs. 45,000
    വർഷം 1-ന്റെ അവസാനമുള്ള ബുക്ക് വാല്യൂ = 50,000 - 5,000 = 45,000 രൂപ
*   **Year 2 (2017):**
*   **വർഷം 2 (2017):**
    Book Value at start of Year 2 = Rs. 45,000
    വർഷം 2-ന്റെ തുടക്കത്തിലെ ബുക്ക് വാല്യൂ = 45,000 രൂപ
    Depreciation = 10% of 45,000 = Rs. 4,500
    തേയ്മാനം = 45,000-ന്റെ 10% = 4,500 രൂപ
    Written Down Value at end of Year 2 = 45,000 - 4,500 = Rs. 40,500
    വർഷം 2-ന്റെ അവസാനമുള്ള ബുക്ക് വാല്യൂ = 45,000 - 4,500 = 40,500 രൂപ
*   **Year 3 (2018):**
*   **വർഷം 3 (2018):**
    Book Value at start of Year 3 = Rs. 40,500
    വർഷം 3-ന്റെ തുടക്കത്തിലെ ബുക്ക് വാല്യൂ = 40,500 രൂപ
    Depreciation = 10% of 40,500 = Rs. 4,050
    തേയ്മാനം = 40,500-ന്റെ 10% = 4,050 രൂപ
    Written Down Value at end of Year 3 = 40,500 - 4,050 = Rs. 36,450
    വർഷം 3-ന്റെ അവസാനമുള്ള ബുക്ക് വാല്യൂ = 40,500 - 4,050 = 36,450 രൂപ

*(Note how the depreciation amount decreases every year: 5000 -> 4500 -> 4050)*
*(തേയ്മാന തുക എല്ലാ വർഷവും എങ്ങനെ കുറയുന്നുവെന്ന് ശ്രദ്ധിക്കുക: 5000 -> 4500 -> 4050)*

---

## 5️⃣ Important Formulas and Rules
## 5️⃣ പ്രധാനപ്പെട്ട സൂത്രവാക്യങ്ങളും നിയമങ്ങളും

1.  **Straight Line Method (SLM) Depreciation:**
1.  **സ്ട്രെയിറ്റ് ലൈൻ മെത്തേഡ് (SLM) തേയ്മാനം:**
    Annual Depreciation = (Cost of Asset - Estimated Scrap Value) / Estimated Useful Life
    വാർഷിക തേയ്മാനം = (ആസ്തിയുടെ വില - കണക്കാക്കിയ ആക്രി വില) / കണക്കാക്കിയ ഉപയോഗ കാലയളവ്
2.  **Rate of Depreciation (SLM):**
2.  **തേയ്മാന നിരക്ക് (SLM):**
    Rate = (Annual Depreciation / Cost of Asset) × 100
    നിരക്ക് = (വാർഷിക തേയ്മാനം / ആസ്തിയുടെ വില) × 100
3.  **Written Down Value (Book Value):**
3.  **റിട്ടൺ ഡൗൺ വാല്യൂ (ബുക്ക് വാല്യൂ):**
    Book Value = Original Cost - Accumulated Depreciation
    ബുക്ക് വാല്യൂ = യഥാർത്ഥ വില - ഇതുവരെയുള്ള ആകെ തേയ്മാനം

---

## 6️⃣ Summary Points
## 6️⃣ ചുരുക്കരൂപം

*   Depreciation is the permanent decrease in the value of fixed tangible assets.
*   സ്ഥിരമായ സ്പർശിക്കാൻ കഴിയുന്ന ആസ്തികളുടെ മൂല്യത്തിലുണ്ടാകുന്ന സ്ഥിരമായ കുറവാണ് തേയ്മാനം.
*   Causes include wear and tear, passage of time, and obsolescence.
*   ഉപയോഗം, സമയം കടന്നുപോകുന്നത്, കാലഹരണപ്പെടൽ എന്നിവ കാരണങ്ങളിൽ ഉൾപ്പെടുന്നു.
*   In SLM, depreciation is calculated on the original cost and remains constant.
*   SLM രീതിയിൽ യഥാർത്ഥ വിലയിന്മേലാണ് തേയ്മാനം കണക്കാക്കുന്നത്, തുക സ്ഥിരമായിരിക്കും.
*   In WDV, depreciation is calculated on the book value and decreases every year.
*   WDV രീതിയിൽ ബുക്ക് വാല്യൂവിന്മേലാണ് തേയ്മാനം കണക്കാക്കുന്നത്, തുക ഓരോ വർഷവും കുറഞ്ഞുവരുന്നു.
*   A Provision is a charge against profit created for a known liability.
*   അറിയാവുന്ന ബാധ്യതയ്ക്ക് വേണ്ടി ലാഭത്തിൽ നിന്നെടുക്കുന്ന കുറവാണ് പ്രൊവിഷൻ.
*   A Reserve is an appropriation of profit created to strengthen financial position.
*   സാമ്പത്തിക സ്ഥിതി മെച്ചപ്പെടുത്താനായി മാറ്റിവെക്കുന്ന ലാഭത്തിന്റെ വിഹിതമാണ് റിസർവ്.







`
    }
  },
  glossary: [
    {
      term: { en: "Depreciation", ml: "തേയ്മാനം" },
      definition: { en: "A permanent, continuing and gradual shrinkage in the book value of fixed tangible assets.", ml: "സ്ഥിര ആസ്തികളുടെ ബുക്ക് വാല്യൂവിൽ ഉണ്ടാകുന്ന സ്ഥിരവും തുടർച്ചയായതും ക്രമാനുഗതവുമായ കുറവ്." }
    },
    {
      term: { en: "Depletion", ml: "ഡിപ്ലീഷൻ (ശോഷണം)" },
      definition: { en: "The decrease in the value of wasting assets such as mines due to extraction.", ml: "പ്രകൃതിവിഭവങ്ങൾ വേർതിരിച്ചെടുക്കുന്നത് കാരണം ഖനികൾ പോലെയുള്ള ആസ്തികളുടെ മൂല്യത്തിലുണ്ടാകുന്ന കുറവ്." }
    },
    {
      term: { en: "Amortisation", ml: "അമോർട്ടൈസേഷൻ" },
      definition: { en: "The process of writing off intangible assets like patents over their useful life.", ml: "പേറ്റന്റുകൾ പോലെയുള്ള സ്പർശിക്കാൻ കഴിയാത്ത ആസ്തികളുടെ മൂല്യം കുറച്ചുകൊണ്ടുവരുന്ന പ്രക്രിയ." }
    },
    {
      term: { en: "Provision", ml: "പ്രൊവിഷൻ (വ്യവസ്ഥ)" },
      definition: { en: "An amount set aside out of current profits to meet a known liability or loss.", ml: "അറിയാവുന്ന ഒരു ബാധ്യതയോ നഷ്ടമോ നേരിടുന്നതിനായി നിലവിലെ ലാഭത്തിൽ നിന്ന് മാറ്റിവെക്കുന്ന തുക." }
    },
    {
      term: { en: "Reserve", ml: "റിസർവ് (കരുതൽ ധനം)" },
      definition: { en: "An amount set aside out of profits to strengthen the financial position of the business.", ml: "ബിസിനസ്സിന്റെ സാമ്പത്തിക സ്ഥിതി ശക്തിപ്പെടുത്തുന്നതിനായി ലാഭത്തിൽ നിന്ന് മാറ്റിവെക്കുന്ന തുക." }
    }
  ],
  sample_questions: [
    {
      q_id: "q1",
      question: {
        en: "Define Depreciation.",
        ml: "തേയ്മാനം നിർവചിക്കുക."
      },
      answer: {
        en: "Depreciation is a permanent, continuing and gradual shrinkage in the book value of fixed assets based on wear and tear, passage of time or obsolescence.",
        ml: "ഉപയോഗം, സമയം കടന്നുപോകുന്നത്, അല്ലെങ്കിൽ കാലഹരണപ്പെടൽ എന്നിവ കാരണം സ്ഥിര ആസ്തികളുടെ ബുക്ക് വാല്യൂവിൽ ഉണ്ടാകുന്ന സ്ഥിരവും തുടർച്ചയായതും ക്രമാനുഗതവുമായ കുറവാണിത്."
      }
    },
    {
      q_id: "q2",
      question: {
        en: "Mention any two causes of depreciation.",
        ml: "തേയ്മാനത്തിനുള്ള ഏതെങ്കിലും രണ്ട് കാരണങ്ങൾ പറയുക."
      },
      answer: {
        en: "1. Wear and tear due to constant use.\n2. Obsolescence due to technological changes or new inventions.",
        ml: "1. തുടർച്ചയായ ഉപയോഗം മൂലമുള്ള തേയ്മാനം.\n2. സാങ്കേതിക മാറ്റങ്ങളോ പുതിയ കണ്ടുപിടുത്തങ്ങളോ കാരണമുള്ള കാലഹരണപ്പെടൽ."
      }
    },
    {
      q_id: "q3",
      question: {
        en: "Differentiate between Depreciation and Amortisation.",
        ml: "തേയ്മാനവും അമോർട്ടൈസേഷനും തമ്മിലുള്ള വ്യത്യാസം എന്ത്?"
      },
      answer: {
        en: "Depreciation is the fall in the value of fixed tangible assets (like machinery). Amortisation is the writing off of intangible assets (like patents, goodwill) over their useful life.",
        ml: "സ്ഥിരമായ സ്പർശിക്കാൻ കഴിയുന്ന ആസ്തികളുടെ (യന്ത്രം പോലെ) മൂല്യത്തിലുണ്ടാകുന്ന കുറവാണ് തേയ്മാനം. സ്പർശിക്കാൻ കഴിയാത്ത ആസ്തികളുടെ (പേറ്റന്റുകൾ, ഗുഡ്വിൽ പോലെ) മൂല്യം അവയുടെ ഉപയോഗ കാലയളവിലായി കുറച്ചുകൊണ്ടുവരുന്ന പ്രക്രിയയാണ് അമോർട്ടൈസേഷൻ."
      }
    },
    {
      q_id: "q4",
      question: {
        en: "What is the Straight Line Method of providing depreciation?",
        ml: "തേയ്മാനം കണക്കാക്കുന്നതിനുള്ള സ്ട്രെയിറ്റ് ലൈൻ മെത്തേഡ് എന്നാൽ എന്ത്?"
      },
      answer: {
        en: "Under this method, a fixed and equal amount of depreciation is charged every year on the original cost of the asset during its useful life.",
        ml: "ഈ രീതിയിൽ, ആസ്തിയുടെ യഥാർത്ഥ വിലയിന്മേൽ അതിന്റെ ഉപയോഗ കാലയളവ് മുഴുവൻ എല്ലാ വർഷവും സ്ഥിരവും തുല്യവുമായ ഒരു തുക തേയ്മാനമായി കണക്കാക്കുന്നു."
      }
    },
    {
      q_id: "q5",
      question: {
        en: "Why is depreciation considered a 'non-cash' expense?",
        ml: "തേയ്മാനത്തെ പണമായി നൽകേണ്ടതില്ലാത്ത ചിലവായി (നോൺ-ക്യാഷ് എക്സ്പെൻസ്) കണക്കാക്കുന്നത് എന്തുകൊണ്ട്?"
      },
      answer: {
        en: "Because charging depreciation does not involve any actual outflow of cash from the business in the current year.",
        ml: "കാരണം തേയ്മാനം ഈടാക്കുന്നതിലൂടെ നിലവിലെ വർഷത്തിൽ ബിസിനസ്സിൽ നിന്ന് യഥാർത്ഥത്തിൽ പണം പുറത്തേക്ക് പോകുന്നില്ല."
      }
    },
    {
      q_id: "q6",
      question: {
        en: "What is a Provision? Give an example.",
        ml: "പ്രൊവിഷൻ എന്നാൽ എന്ത്? ഒരു ഉദാഹരണം നൽകുക."
      },
      answer: {
        en: "A provision is an amount retained by way of providing for any known liability or loss, the exact amount of which cannot be determined with substantial accuracy. Example: Provision for doubtful debts.",
        ml: "കൃത്യമായ തുക ഉറപ്പിക്കാൻ കഴിയാത്ത, എന്നാൽ ഉണ്ടാകുമെന്ന് അറിയാവുന്ന ഒരു ബാധ്യതയോ നഷ്ടമോ നേരിടുന്നതിനായി മാറ്റിവെക്കുന്ന തുകയാണിത്. ഉദാഹരണം: കിട്ടാക്കടങ്ങൾക്കുള്ള വ്യവസ്ഥ."
      }
    },
    {
      q_id: "q7",
      question: {
        en: "State the main difference between Provision and Reserve regarding 'Effect on Profit'.",
        ml: "'ലാഭത്തിലുള്ള മാറ്റവുമായി' ബന്ധപ്പെട്ട് പ്രൊവിഷനും റിസർവും തമ്മിലുള്ള പ്രധാന വ്യത്യാസം വ്യക്തമാക്കുക."
      },
      answer: {
        en: "Provision is a charge against profit, meaning it reduces net profit and must be created even if there is a loss. Reserve is an appropriation of profit, meaning it is created only if the firm earns a profit.",
        ml: "പ്രൊവിഷൻ എന്നത് ലാഭത്തിൽ നിന്നുള്ള ഒരു കുറവാണ്, ഇത് അറ്റാദായം കുറയ്ക്കുകയും നഷ്ടമാണെങ്കിൽപ്പോലും ഉണ്ടാക്കുകയും വേണം. റിസർവ് എന്നത് ലാഭത്തിന്റെ ഒരു വിഹിതമാണ്, അതായത് സ്ഥാപനത്തിന് ലാഭമുണ്ടെങ്കിൽ മാത്രമേ ഇത് ഉണ്ടാക്കൂ."
      }
    },
    {
      q_id: "q8",
      question: {
        en: "What is a Capital Reserve?",
        ml: "ക്യാപ്പിറ്റൽ റിസർവ് എന്നാൽ എന്ത്?"
      },
      answer: {
        en: "A capital reserve is created out of capital profits which do not arise from the normal operating activities of the business and are not available for distribution as dividend. E.g., Profit on sale of fixed assets.",
        ml: "ബിസിനസ്സിന്റെ സാധാരണ പ്രവർത്തനങ്ങളിൽ നിന്നുണ്ടാകാത്തതും, ലാഭവിഹിതമായി നൽകാൻ ലഭ്യമാകാത്തതുമായ മൂലധന ലാഭത്തിൽ നിന്നാണ് ക്യാപ്പിറ്റൽ റിസർവ് ഉണ്ടാക്കുന്നത്. ഉദാ: സ്ഥിര ആസ്തികൾ വിൽക്കുമ്പോഴുണ്ടാകുന്ന ലാഭം."
      }
    },
    {
      q_id: "q9",
      question: {
        en: "Mention two advantages of the Written Down Value method.",
        ml: "റിട്ടൺ ഡൗൺ വാല്യൂ രീതിയുടെ രണ്ട് ഗുണങ്ങൾ പറയുക."
      },
      answer: {
        en: "1. It is a more logical method as the depreciation amount decreases as the asset gets older and requires more repairs.\n2. It is recognised by the Income Tax Act.",
        ml: "1. ആസ്തിക്ക് പഴക്കമേറുകയും കൂടുതൽ അറ്റകുറ്റപ്പണികൾ ആവശ്യമായി വരികയും ചെയ്യുമ്പോൾ തേയ്മാന തുകയും കുറയുന്നതുകൊണ്ട് ഇത് കൂടുതൽ യുക്തിസഹമായ രീതിയാണ്.\n2. ആദായനികുതി നിയമം ഈ രീതിയെ അംഗീകരിക്കുന്നു."
      }
    },
    {
      q_id: "q10",
      question: {
        en: "What is a Secret Reserve?",
        ml: "സീക്രട്ട് റിസർവ് (രഹസ്യ കരുതൽ ധനം) എന്നാൽ എന്ത്?"
      },
      answer: {
        en: "A secret reserve is a reserve which is not disclosed in the balance sheet. It is usually created by showing profits lower than the actual profit, such as by charging excessive depreciation.",
        ml: "ബാലൻസ് ഷീറ്റിൽ വെളിപ്പെടുത്താത്ത ഒരു റിസർവാണിത്. അമിതമായ തേയ്മാനം കാണിക്കുന്നത് പോലുള്ള കാര്യങ്ങളിലൂടെ യഥാർത്ഥ ലാഭത്തേക്കാൾ കുറഞ്ഞ ലാഭം കാണിച്ചുകൊണ്ടാണ് ഇത് സാധാരണയായി ഉണ്ടാക്കുന്നത്."
      }
    }
  ],
  quiz: [
    {
      question: {
        en: "Depreciation is calculated on:",
        ml: "തേയ്മാനം കണക്കാക്കുന്നത് ഇതിന്മേലാണ്:"
      },
      options: [
        { en: "Current Assets", ml: "കറന്റ് ആസ്തികൾ" },
        { en: "Fixed Tangible Assets", ml: "സ്ഥിരമായ സ്പർശിക്കാൻ കഴിയുന്ന ആസ്തികൾ" },
        { en: "Intangible Assets", ml: "സ്പർശിക്കാൻ കഴിയാത്ത ആസ്തികൾ" },
        { en: "Wasting Assets", ml: "തീർന്നുപോകുന്ന ആസ്തികൾ" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "Depreciation applies to fixed tangible assets like machinery and buildings. Intangible assets are amortised, and wasting assets are depleted.",
        ml: "യന്ത്രങ്ങൾ, കെട്ടിടങ്ങൾ തുടങ്ങിയ സ്ഥിരമായ സ്പർശിക്കാൻ കഴിയുന്ന ആസ്തികളിന്മേലാണ് തേയ്മാനം കണക്കാക്കുന്നത്. സ്പർശിക്കാൻ കഴിയാത്ത ആസ്തികൾക്ക് അമോർട്ടൈസേഷനും തീർന്നുപോകുന്ന ആസ്തികൾക്ക് ഡിപ്ലീഷനുമാണ് ബാധകം."
      }
    },
    {
      question: {
        en: "Under the Straight Line Method, the amount of depreciation:",
        ml: "സ്ട്രെയിറ്റ് ലൈൻ രീതി പ്രകാരം, തേയ്മാന തുക:"
      },
      options: [
        { en: "Increases every year", ml: "എല്ലാ വർഷവും വർദ്ധിക്കുന്നു" },
        { en: "Decreases every year", ml: "എല്ലാ വർഷവും കുറയുന്നു" },
        { en: "Remains constant every year", ml: "എല്ലാ വർഷവും സ്ഥിരമായി തുടരുന്നു" },
        { en: "Fluctuates", ml: "മാറിക്കൊണ്ടിരിക്കുന്നു" }
      ],
      correctAnswerIndex: 2,
      explanation: {
        en: "In the Straight Line Method, depreciation is calculated on the original cost, so the amount remains the same each year.",
        ml: "സ്ട്രെയിറ്റ് ലൈൻ രീതിയിൽ, യഥാർത്ഥ വിലയിന്മേലാണ് തേയ്മാനം കണക്കാക്കുന്നത്, അതിനാൽ തുക എല്ലാ വർഷവും ഒരുപോലെ തുടരുന്നു."
      }
    },
    {
      question: {
        en: "Which of the following is an appropriation of profit?",
        ml: "താഴെ പറയുന്നവയിൽ ഏതാണ് ലാഭത്തിന്റെ വിഹിതം (appropriation of profit)?"
      },
      options: [
        { en: "Provision for Doubtful Debts", ml: "കിട്ടാക്കടങ്ങൾക്കുള്ള വ്യവസ്ഥ" },
        { en: "Provision for Depreciation", ml: "തേയ്മാനത്തിനുള്ള വ്യവസ്ഥ" },
        { en: "General Reserve", ml: "പൊതുവായ കരുതൽ ധനം" },
        { en: "Provision for Taxation", ml: "നികുതിക്കുള്ള വ്യവസ്ഥ" }
      ],
      correctAnswerIndex: 2,
      explanation: {
        en: "Reserves (like General Reserve) are an appropriation of profit, created only when there is a profit. Provisions are a charge against profit.",
        ml: "റിസർവുകൾ (ജനറൽ റിസർവ് പോലെ) ലാഭത്തിന്റെ വിഹിതമാണ്, ലാഭമുള്ളപ്പോൾ മാത്രമേ ഇവ ഉണ്ടാക്കൂ. പ്രൊവിഷനുകൾ ലാഭത്തിൽ നിന്നുള്ള കുറവാണ്."
      }
    },
    {
      question: {
        en: "A reserve created out of capital profits is called:",
        ml: "മൂലധന ലാഭത്തിൽ (capital profit) നിന്ന് ഉണ്ടാക്കുന്ന റിസർവ് അറിയപ്പെടുന്നത്:"
      },
      options: [
        { en: "General Reserve", ml: "ജനറൽ റിസർവ്" },
        { en: "Capital Reserve", ml: "ക്യാപ്പിറ്റൽ റിസർവ്" },
        { en: "Secret Reserve", ml: "സീക്രട്ട് റിസർവ്" },
        { en: "Specific Reserve", ml: "സ്പെസിഫിക് റിസർവ്" }
      ],
      correctAnswerIndex: 1,
      explanation: {
        en: "Capital reserves are created from capital profits (like profit on the sale of fixed assets) and are not available for dividend distribution.",
        ml: "മൂലധന ലാഭത്തിൽ നിന്ന് (സ്ഥിര ആസ്തികൾ വിൽക്കുമ്പോഴുണ്ടാകുന്ന ലാഭം പോലെ) ഉണ്ടാക്കുന്നതാണ് ക്യാപ്പിറ്റൽ റിസർവ്, ഇത് ലാഭവിഹിതമായി നൽകാൻ കഴിയില്ല."
      }
    },
    {
      question: {
        en: "The decrease in the value of intangible assets like patents is known as:",
        ml: "പേറ്റന്റുകൾ പോലെയുള്ള സ്പർശിക്കാൻ കഴിയാത്ത ആസ്തികളുടെ മൂല്യത്തിലുണ്ടാകുന്ന കുറവ് അറിയപ്പെടുന്നത്:"
      },
      options: [
        { en: "Depreciation", ml: "തേയ്മാനം" },
        { en: "Depletion", ml: "ഡിപ്ലീഷൻ" },
        { en: "Amortisation", ml: "അമോർട്ടൈസേഷൻ" },
        { en: "Obsolescence", ml: "കാലഹരണപ്പെടൽ" }
      ],
      correctAnswerIndex: 2,
      explanation: {
        en: "Amortisation is the term used for writing off the cost of intangible assets over their useful life.",
        ml: "സ്പർശിക്കാൻ കഴിയാത്ത ആസ്തികളുടെ വില അവയുടെ ഉപയോഗ കാലയളവിലായി കുറച്ചുകൊണ്ടുവരുന്നതിനെ അമോർട്ടൈസേഷൻ എന്ന് വിളിക്കുന്നു."
      }
    }
  ]
};
