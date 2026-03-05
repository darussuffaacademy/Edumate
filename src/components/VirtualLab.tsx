import { useState, useEffect } from 'react';
import { Sun, Droplets, Activity, RotateCcw, Save } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Language } from '../data/curriculum';

export default function VirtualLab({ language }: { language: Language }) {
  const [lightIntensity, setLightIntensity] = useState(50);
  const [co2Level, setCo2Level] = useState(2); // 1: Low, 2: Normal, 3: High
  const [currentRate, setCurrentRate] = useState(0);
  const [recordedData, setRecordedData] = useState<{ light: number, rate: number, co2: string }[]>([]);

  // Calculate photosynthesis rate based on light and CO2
  // Formula: rate = MaxRate * (1 - e^(-k * light))
  // MaxRate depends on CO2 level
  useEffect(() => {
    const maxRate = co2Level === 1 ? 30 : co2Level === 2 ? 60 : 100;
    const k = 0.05;
    const baseRate = maxRate * (1 - Math.exp(-k * lightIntensity));
    // Add a tiny bit of noise
    const noise = (Math.random() - 0.5) * 2;
    const finalRate = Math.max(0, Math.round(baseRate + noise));
    setCurrentRate(finalRate);
  }, [lightIntensity, co2Level]);

  const recordDataPoint = () => {
    const co2Label = co2Level === 1 ? 'Low' : co2Level === 2 ? 'Normal' : 'High';
    
    // Check if point already exists for this light and co2
    const exists = recordedData.some(d => d.light === lightIntensity && d.co2 === co2Label);
    if (!exists) {
      setRecordedData([...recordedData, { light: lightIntensity, rate: currentRate, co2: co2Label }].sort((a, b) => a.light - b.light));
    }
  };

  const resetLab = () => {
    setRecordedData([]);
    setLightIntensity(50);
    setCo2Level(2);
  };

  // Translations
  const t = {
    title: { en: 'Virtual Lab: Photosynthesis Rate', ml: 'വെർച്വൽ ലാബ്: ഫോട്ടോസിന്തസിസ് നിരക്ക്' },
    light: { en: 'Light Intensity (%)', ml: 'പ്രകാശ തീവ്രത (%)' },
    co2: { en: 'CO₂ Concentration', ml: 'CO₂ സാന്ദ്രത' },
    low: { en: 'Low', ml: 'കുറഞ്ഞ' },
    normal: { en: 'Normal', ml: 'സാധാരണ' },
    high: { en: 'High', ml: 'ഉയർന്ന' },
    rate: { en: 'Oxygen Bubbles / min', ml: 'ഓക്സിജൻ കുമിളകൾ / മിനിറ്റ്' },
    record: { en: 'Record Data Point', ml: 'ഡാറ്റ രേഖപ്പെടുത്തുക' },
    reset: { en: 'Reset Lab', ml: 'ലാബ് പുനഃസജ്ജമാക്കുക' },
    graphTitle: { en: 'Rate vs Light Intensity', ml: 'നിരക്ക് vs പ്രകാശ തീവ്രത' },
    noData: { en: 'Record data points to see the graph.', ml: 'ഗ്രാഫ് കാണാൻ ഡാറ്റ രേഖപ്പെടുത്തുക.' }
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm transition-colors duration-300">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Activity className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          {t.title[language]}
        </h3>
        <button onClick={resetLab} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          <RotateCcw className="w-4 h-4" />
          {t.reset[language]}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
            <label className="flex justify-between text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              <span className="flex items-center gap-2"><Sun className="w-4 h-4 text-amber-500"/> {t.light[language]}</span>
              <span className="text-indigo-600 dark:text-indigo-400">{lightIntensity}%</span>
            </label>
            <input 
              type="range" 
              min="0" max="100" step="10"
              value={lightIntensity}
              onChange={(e) => setLightIntensity(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-500"
            />
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
            <label className="flex justify-between text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              <span className="flex items-center gap-2"><Droplets className="w-4 h-4 text-blue-500"/> {t.co2[language]}</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map(level => (
                <button
                  key={level}
                  onClick={() => setCo2Level(level)}
                  className={`py-2 px-1 text-xs font-medium rounded-md border transition-colors ${co2Level === level ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                >
                  {level === 1 ? t.low[language] : level === 2 ? t.normal[language] : t.high[language]}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800 text-center">
            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1">{t.rate[language]}</p>
            <p className="text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">{currentRate}</p>
            <button 
              onClick={recordDataPoint}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 dark:bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors shadow-sm"
            >
              <Save className="w-4 h-4" />
              {t.record[language]}
            </button>
          </div>
        </div>

        {/* Visualization & Graph Panel */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Beaker Visualization */}
          <div className="bg-slate-900 rounded-xl h-48 relative overflow-hidden flex items-end justify-center border border-slate-800">
            {/* Light beam */}
            <div 
              className="absolute top-0 left-0 bottom-0 bg-yellow-300/20 transition-all duration-300"
              style={{ width: `${lightIntensity}%`, opacity: lightIntensity / 100 }}
            ></div>
            
            {/* Plant in beaker */}
            <div className="relative w-32 h-40 border-x-4 border-b-4 border-white/20 rounded-b-2xl bg-blue-500/20 flex items-end justify-center pb-2">
              <div className="w-16 h-24 bg-emerald-500/80 rounded-t-full relative">
                {/* Bubbles */}
                {Array.from({ length: Math.min(20, Math.ceil(currentRate / 5)) }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 bg-white/60 rounded-full animate-bounce"
                    style={{
                      left: `${Math.random() * 100}%`,
                      bottom: `${Math.random() * 100}%`,
                      animationDuration: `${1 + Math.random()}s`,
                      animationDelay: `${Math.random()}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Graph */}
          <div className="bg-brand-bg border border-slate-200 dark:border-slate-700 rounded-xl p-5 flex-1 min-h-[250px]">
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 text-center">{t.graphTitle[language]}</h4>
            {recordedData.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={recordedData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="light" type="number" domain={[0, 100]} tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <YAxis domain={[0, 100]} tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: '#1e293b', color: '#f1f5f9' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#4f46e5" 
                    strokeWidth={3}
                    dot={{ r: 6, fill: '#4f46e5', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[200px] flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-lg">
                {t.noData[language]}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
