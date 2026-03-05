import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const RightHandThumbRuleSimulation: React.FC = () => {
  const [currentDirection, setCurrentDirection] = useState<'up' | 'down'>('up');

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 my-8">
      <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Right Hand Thumb Rule</h3>
      
      <div className="relative w-full max-w-md h-80 bg-white dark:bg-slate-950 rounded-xl shadow-inner border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center">
        <svg width="300" height="250" viewBox="0 0 300 250">
          {/* Straight Conductor */}
          <rect x="145" y="20" width="10" height="210" fill="#64748b" rx="5" />
          
          {/* Current Arrow */}
          <motion.path 
            d={currentDirection === 'up' ? "M 150 180 L 150 50" : "M 150 50 L 150 180"}
            stroke="#fbbf24" strokeWidth="4" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.path 
            d={currentDirection === 'up' ? "M 140 70 L 150 50 L 160 70" : "M 140 160 L 150 180 L 160 160"}
            fill="none" stroke="#fbbf24" strokeWidth="4"
          />
          <text x="170" y={currentDirection === 'up' ? 60 : 190} fontSize="14" fill="#fbbf24" fontWeight="bold">
            Current (I)
          </text>

          {/* Magnetic Field Lines (Ellipses) */}
          {[60, 100, 140, 180].map((y, i) => (
            <g key={i}>
              <ellipse 
                cx="150" cy={y} rx="60" ry="20" 
                fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5"
                opacity={0.5}
              />
              {/* Direction Arrows on Field Lines */}
              <motion.path 
                d={currentDirection === 'up' 
                  ? "M 210 " + y + " L 210 " + (y-5) + " L 215 " + y + " L 210 " + (y+5) + " Z"
                  : "M 210 " + y + " L 210 " + (y+5) + " L 205 " + y + " L 210 " + (y-5) + " Z"
                }
                fill="#3b82f6"
                animate={{ rotate: currentDirection === 'up' ? 360 : -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ originX: "150px", originY: y + "px" }}
              />
            </g>
          ))}
          
          <text x="220" y="120" fontSize="12" fill="#3b82f6" fontWeight="bold">Magnetic Field (B)</text>
        </svg>
      </div>

      <div className="flex gap-4 mt-6">
        <button 
          onClick={() => setCurrentDirection('up')}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${currentDirection === 'up' ? 'bg-brand-primary text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
        >
          Current Upwards ↑
        </button>
        <button 
          onClick={() => setCurrentDirection('down')}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${currentDirection === 'down' ? 'bg-brand-primary text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
        >
          Current Downwards ↓
        </button>
      </div>

      <div className="mt-6 text-center max-w-sm">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {currentDirection === 'up' 
            ? "When current flows UP, the magnetic field lines are ANTI-CLOCKWISE (viewed from top)." 
            : "When current flows DOWN, the magnetic field lines are CLOCKWISE (viewed from top)."}
        </p>
      </div>
    </div>
  );
};
