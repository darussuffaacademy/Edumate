import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const SolenoidSimulation: React.FC = () => {
  const [currentOn, setCurrentOn] = useState(false);
  const [direction, setDirection] = useState<'left-to-right' | 'right-to-left'>('left-to-right');

  const turns = 8;
  const turnWidth = 30;
  const startX = 50;
  const y = 100;

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 my-8">
      <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Solenoid Polarity Simulation</h3>
      
      <div className="relative w-full max-w-md h-80 bg-white dark:bg-slate-950 rounded-xl shadow-inner border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center">
        <svg width="400" height="250" viewBox="0 0 400 250">
          {/* Core (Soft Iron) */}
          <rect x="40" y="80" width="320" height="40" fill="#cbd5e1" rx="5" opacity={0.5} />
          
          {/* Solenoid Turns */}
          {[...Array(turns)].map((_, i) => (
            <path 
              key={i}
              d={`M ${startX + i * turnWidth} 70 Q ${startX + i * turnWidth + 15} 130 ${startX + (i + 1) * turnWidth} 70`}
              fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round"
            />
          ))}

          {/* Magnetic Field Lines (when current is on) */}
          {currentOn && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* Internal Field Lines */}
              <motion.line 
                x1="40" y1="100" x2="360" y2="100" 
                stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5"
                animate={{ x1: direction === 'left-to-right' ? 40 : 360, x2: direction === 'left-to-right' ? 360 : 40 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              {/* External Field Lines (Top) */}
              <motion.path 
                d="M 360 100 C 360 20 40 20 40 100" 
                fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5"
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              {/* External Field Lines (Bottom) */}
              <motion.path 
                d="M 360 100 C 360 180 40 180 40 100" 
                fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5"
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Polarity Labels */}
              <text x="20" y="105" fontSize="24" fill="#ef4444" fontWeight="bold">
                {direction === 'left-to-right' ? 'S' : 'N'}
              </text>
              <text x="365" y="105" fontSize="24" fill="#ef4444" fontWeight="bold">
                {direction === 'left-to-right' ? 'N' : 'S'}
              </text>
            </motion.g>
          )}

          {/* Current Flow Indicators */}
          {currentOn && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.circle 
                cx={direction === 'left-to-right' ? 50 : 350} cy="200" r="5" fill="#fbbf24"
                animate={{ cx: direction === 'left-to-right' ? 350 : 50 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <text x="150" y="220" fontSize="12" fill="#fbbf24" fontWeight="bold">Current Flow (I)</text>
            </motion.g>
          )}
        </svg>
      </div>

      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        <button 
          onClick={() => setCurrentOn(!currentOn)}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg ${currentOn ? 'bg-red-500 text-white' : 'bg-green-500 text-white animate-pulse'}`}
        >
          {currentOn ? "Switch OFF" : "Switch ON"}
        </button>
        <button 
          onClick={() => setDirection(direction === 'left-to-right' ? 'right-to-left' : 'left-to-right')}
          className="px-6 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition-colors"
        >
          Reverse Current Direction
        </button>
      </div>

      <div className="mt-6 text-center max-w-sm">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {!currentOn && "Switch on the current to see the magnetic field."}
          {currentOn && direction === 'left-to-right' && "Current flows left to right. Left end is South (S), Right end is North (N)."}
          {currentOn && direction === 'right-to-left' && "Current flows right to left. Left end is North (N), Right end is South (S)."}
        </p>
      </div>
    </div>
  );
};
