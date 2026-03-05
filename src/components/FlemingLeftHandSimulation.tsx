import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FlemingLeftHandSimulation: React.FC = () => {
  const [fieldDir, setFieldDir] = useState<'left-to-right' | 'right-to-left'>('left-to-right');
  const [currentDir, setCurrentDir] = useState<'up' | 'down'>('up');

  // Force direction based on Left Hand Rule
  // Field (Forefinger), Current (Middle finger), Force (Thumb)
  // If Field is L->R and Current is Up, Force is into the page (simplified as 'down' in 2D)
  // If Field is L->R and Current is Down, Force is out of the page (simplified as 'up' in 2D)
  const forceDir = (fieldDir === 'left-to-right' && currentDir === 'up') ? 'down' : 
                   (fieldDir === 'left-to-right' && currentDir === 'down') ? 'up' :
                   (fieldDir === 'right-to-left' && currentDir === 'up') ? 'up' : 'down';

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 my-8">
      <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Fleming's Left Hand Rule</h3>
      
      <div className="relative w-full max-w-md h-80 bg-white dark:bg-slate-950 rounded-xl shadow-inner border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center">
        <svg width="350" height="250" viewBox="0 0 350 250">
          {/* Coordinate System Placeholder */}
          <line x1="50" y1="125" x2="300" y2="125" stroke="#64748b" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="175" y1="20" x2="175" y2="230" stroke="#64748b" strokeWidth="1" strokeDasharray="5,5" />

          {/* Magnetic Field (Forefinger) */}
          <motion.path 
            d={fieldDir === 'left-to-right' ? "M 100 125 L 250 125" : "M 250 125 L 100 125"}
            stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"
            animate={{ pathLength: 1 }}
          />
          <motion.path 
            d={fieldDir === 'left-to-right' ? "M 240 115 L 250 125 L 240 135" : "M 110 115 L 100 125 L 110 135"}
            fill="none" stroke="#3b82f6" strokeWidth="4"
          />
          <text x={fieldDir === 'left-to-right' ? 260 : 40} y="130" fontSize="12" fill="#3b82f6" fontWeight="bold">Field (B)</text>

          {/* Current (Middle Finger) */}
          <motion.path 
            d={currentDir === 'up' ? "M 175 200 L 175 50" : "M 175 50 L 175 200"}
            stroke="#fbbf24" strokeWidth="4" strokeLinecap="round"
          />
          <motion.path 
            d={currentDir === 'up' ? "M 165 60 L 175 50 L 185 60" : "M 165 190 L 175 200 L 185 190"}
            fill="none" stroke="#fbbf24" strokeWidth="4"
          />
          <text x="185" y={currentDir === 'up' ? 60 : 200} fontSize="12" fill="#fbbf24" fontWeight="bold">Current (I)</text>

          {/* Force (Thumb) - Represented as a diagonal or 3D-ish arrow */}
          <motion.g animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
            <path 
              d={forceDir === 'up' ? "M 175 125 L 225 75" : "M 175 125 L 125 175"}
              stroke="#ef4444" strokeWidth="6" strokeLinecap="round"
            />
            <path 
              d={forceDir === 'up' ? "M 215 75 L 225 75 L 225 85" : "M 135 175 L 125 175 L 125 165"}
              fill="none" stroke="#ef4444" strokeWidth="6"
            />
            <text x={forceDir === 'up' ? 230 : 80} y={forceDir === 'up' ? 70 : 185} fontSize="14" fill="#ef4444" fontWeight="bold">FORCE (F)</text>
          </motion.g>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-sm">
        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-500 uppercase">Magnetic Field</p>
          <button 
            onClick={() => setFieldDir(fieldDir === 'left-to-right' ? 'right-to-left' : 'left-to-right')}
            className="w-full px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-bold"
          >
            Reverse Field
          </button>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-500 uppercase">Electric Current</p>
          <button 
            onClick={() => setCurrentDir(currentDir === 'up' ? 'down' : 'up')}
            className="w-full px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg text-xs font-bold"
          >
            Reverse Current
          </button>
        </div>
      </div>

      <div className="mt-6 text-center max-w-sm">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">
          "Stretch the thumb, forefinger, and middle finger of your left hand such that they are mutually perpendicular..."
        </p>
      </div>
    </div>
  );
};
