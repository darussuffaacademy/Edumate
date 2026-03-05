import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const RainbowSimulation: React.FC = () => {
  const [step, setStep] = useState(0);

  const colors = [
    { name: 'Red', color: '#FF0000', yOffset: 0 },
    { name: 'Orange', color: '#FF7F00', yOffset: 2 },
    { name: 'Yellow', color: '#FFFF00', yOffset: 4 },
    { name: 'Green', color: '#00FF00', yOffset: 6 },
    { name: 'Blue', color: '#0000FF', yOffset: 8 },
    { name: 'Indigo', color: '#4B0082', yOffset: 10 },
    { name: 'Violet', color: '#9400D3', yOffset: 12 },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 my-8">
      <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Rainbow Formation in a Water Droplet</h3>
      
      <div className="relative w-full max-w-md h-80 bg-white dark:bg-slate-950 rounded-xl shadow-inner border border-slate-200 dark:border-slate-800 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 400 300">
          {/* Water Droplet */}
          <circle cx="200" cy="150" r="100" fill="rgba(173, 216, 230, 0.2)" stroke="#add8e6" strokeWidth="2" />
          
          {/* Sunlight */}
          <motion.line 
            x1="0" y1="100" x2="110" y2="100" 
            stroke="#fbbf24" strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: step >= 1 ? 1 : 0 }}
          />
          {step >= 1 && <text x="10" y="90" fontSize="12" fill="#d97706" fontWeight="bold">Sunlight</text>}

          {/* Inside Droplet - Dispersion */}
          {colors.map((c, i) => (
            <React.Fragment key={c.name}>
              {/* Entry to Back */}
              <motion.line 
                x1="110" y1="100" x2="290" y2={150 + c.yOffset} 
                stroke={c.color} strokeWidth="2" opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: step >= 2 ? 1 : 0 }}
              />
              {/* Internal Reflection */}
              <motion.line 
                x1="290" y1={150 + c.yOffset} x2="150" y2={240 + c.yOffset} 
                stroke={c.color} strokeWidth="2" opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: step >= 3 ? 1 : 0 }}
              />
              {/* Exit - Refraction */}
              <motion.line 
                x1="150" y1={240 + c.yOffset} x2="0" y2={280 + c.yOffset * 2} 
                stroke={c.color} strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: step >= 4 ? 1 : 0 }}
              />
            </React.Fragment>
          ))}

          {/* Labels */}
          {step >= 2 && <text x="120" y="80" fontSize="10" fill="#64748b">1. Refraction & Dispersion</text>}
          {step >= 3 && <text x="250" y="200" fontSize="10" fill="#64748b">2. Internal Reflection</text>}
          {step >= 4 && <text x="50" y="230" fontSize="10" fill="#64748b">3. Refraction</text>}
        </svg>
      </div>

      <div className="flex gap-2 mt-6">
        <button 
          onClick={() => setStep(Math.max(0, step - 1))}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          Previous
        </button>
        <button 
          onClick={() => setStep(0)}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          Reset
        </button>
        <button 
          onClick={() => setStep(Math.min(4, step + 1))}
          className="px-4 py-2 bg-brand-primary text-white rounded-lg text-sm font-medium hover:bg-brand-primary/90 transition-colors"
        >
          Next Step
        </button>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {step === 0 && "Click 'Next' to start the simulation."}
          {step === 1 && "Sunlight enters the water droplet."}
          {step === 2 && "Light refracts and splits into component colours (Dispersion)."}
          {step === 3 && "Colours hit the back surface and undergo Internal Reflection."}
          {step === 4 && "Light exits the droplet, refracts again, and forms the Rainbow!"}
        </p>
      </div>
    </div>
  );
};
