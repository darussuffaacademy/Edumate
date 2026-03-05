import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const EyeDefectSimulation: React.FC = () => {
  const [defect, setDefect] = useState<'normal' | 'myopia' | 'hypermetropia'>('normal');
  const [isCorrected, setIsCorrected] = useState(false);

  // Simplified eye diagram parameters
  const eyeCenter = [200, 150];
  const eyeRadius = 100;
  const corneaX = 100;
  const retinaX = 300;

  // Ray focus points
  const focusPoints = {
    normal: 300,
    myopia: 250,
    hypermetropia: 350,
  };

  const currentFocus = isCorrected ? 300 : focusPoints[defect];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 my-8">
      <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Eye Defects and Correction</h3>
      
      <div className="relative w-full max-w-md h-80 bg-white dark:bg-slate-950 rounded-xl shadow-inner border border-slate-200 dark:border-slate-800 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 400 300">
          {/* Eye Outline */}
          <circle cx={eyeCenter[0]} cy={eyeCenter[1]} r={eyeRadius} fill="rgba(255, 255, 255, 0.1)" stroke="#64748b" strokeWidth="2" />
          {/* Cornea */}
          <path d="M 100 100 Q 80 150 100 200" fill="none" stroke="#64748b" strokeWidth="3" />
          {/* Retina */}
          <path d="M 300 100 Q 320 150 300 200" fill="none" stroke="#ef4444" strokeWidth="4" opacity="0.5" />
          <text x="310" y="150" fontSize="10" fill="#ef4444" fontWeight="bold">Retina</text>

          {/* Lens */}
          <ellipse cx="120" cy="150" rx="10" ry="30" fill="rgba(173, 216, 230, 0.5)" stroke="#add8e6" strokeWidth="1" />

          {/* Corrective Lens */}
          {isCorrected && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {defect === 'myopia' ? (
                <path d="M 50 120 Q 60 150 50 180 M 50 120 L 60 120 M 50 180 L 60 180" fill="none" stroke="#3b82f6" strokeWidth="3" />
              ) : (
                <ellipse cx="55" cy="150" rx="8" ry="30" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
              )}
              <text x="30" y="110" fontSize="10" fill="#3b82f6" fontWeight="bold">
                {defect === 'myopia' ? 'Concave Lens' : 'Convex Lens'}
              </text>
            </motion.g>
          )}

          {/* Light Rays */}
          <motion.g animate={{ opacity: 1 }}>
            {/* Incident Rays */}
            <line x1="0" y1="130" x2="100" y2="130" stroke="#fbbf24" strokeWidth="2" />
            <line x1="0" y1="170" x2="100" y2="170" stroke="#fbbf24" strokeWidth="2" />

            {/* Refracted Rays */}
            <motion.line 
              x1="120" y1="150" x2={currentFocus} y2="150" 
              stroke="#fbbf24" strokeWidth="2" 
              animate={{ x2: currentFocus }}
            />
            <motion.line 
              x1="100" y1="130" x2={currentFocus} y2="150" 
              stroke="#fbbf24" strokeWidth="2" 
              animate={{ x2: currentFocus }}
            />
            <motion.line 
              x1="100" y1="170" x2={currentFocus} y2="150" 
              stroke="#fbbf24" strokeWidth="2" 
              animate={{ x2: currentFocus }}
            />
          </motion.g>

          {/* Focus Point Indicator */}
          <motion.circle 
            cx={currentFocus} cy="150" r="4" 
            fill="#ef4444" 
            animate={{ cx: currentFocus }}
          />
        </svg>
      </div>

      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        <button 
          onClick={() => { setDefect('normal'); setIsCorrected(false); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${defect === 'normal' ? 'bg-brand-primary text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
        >
          Normal Eye
        </button>
        <button 
          onClick={() => { setDefect('myopia'); setIsCorrected(false); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${defect === 'myopia' && !isCorrected ? 'bg-brand-primary text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
        >
          Myopia
        </button>
        <button 
          onClick={() => { setDefect('hypermetropia'); setIsCorrected(false); }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${defect === 'hypermetropia' && !isCorrected ? 'bg-brand-primary text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
        >
          Hypermetropia
        </button>
      </div>

      {defect !== 'normal' && (
        <button 
          onClick={() => setIsCorrected(!isCorrected)}
          className={`mt-4 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg ${isCorrected ? 'bg-green-500 text-white' : 'bg-blue-500 text-white animate-pulse'}`}
        >
          {isCorrected ? "Remove Correction" : "Apply Correction Lens"}
        </button>
      )}

      <div className="mt-4 text-center max-w-xs">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {defect === 'normal' && "Normal Eye: Light focuses exactly on the retina."}
          {defect === 'myopia' && !isCorrected && "Myopia: Light focuses IN FRONT of the retina. Distant objects are blurry."}
          {defect === 'myopia' && isCorrected && "Corrected Myopia: A concave lens diverges light to focus it on the retina."}
          {defect === 'hypermetropia' && !isCorrected && "Hypermetropia: Light focuses BEHIND the retina. Nearby objects are blurry."}
          {defect === 'hypermetropia' && isCorrected && "Corrected Hypermetropia: A convex lens converges light to focus it on the retina."}
        </p>
      </div>
    </div>
  );
};
