import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const NewtonDisc: React.FC = () => {
  const [speed, setSpeed] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const colors = [
    '#9400D3', // Violet
    '#4B0082', // Indigo
    '#0000FF', // Blue
    '#00FF00', // Green
    '#FFFF00', // Yellow
    '#FF7F00', // Orange
    '#FF0000', // Red
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
      <div className="relative w-64 h-64 mb-8">
        <motion.div
          className="w-full h-full rounded-full overflow-hidden border-4 border-slate-300 dark:border-slate-700 shadow-2xl"
          animate={{ rotate: isRotating ? 360 * 10 : 0 }}
          transition={{
            duration: isRotating ? Math.max(0.1, 5 / (speed || 1)) : 0,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: `conic-gradient(${colors.map((c, i) => `${c} ${(i * 100) / 7}% ${((i + 1) * 100) / 7}%`).join(', ')})`,
            filter: speed > 50 ? `blur(${Math.min(10, (speed - 50) / 5)}px)` : 'none',
            opacity: speed > 80 ? 0.9 : 1
          }}
        >
          {/* If speed is very high, overlay white to simulate persistence of vision */}
          {speed > 70 && (
            <div 
              className="absolute inset-0 bg-white/80" 
              style={{ opacity: (speed - 70) / 30 }}
            />
          )}
        </motion.div>
        
        {/* Center pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-800 rounded-full border-2 border-white shadow-md" />
      </div>

      <div className="w-full max-w-xs space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Rotation Speed</span>
          <span className="text-sm font-bold text-brand-primary dark:text-white">{speed}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={speed}
          onChange={(e) => {
            const val = parseInt(e.target.value);
            setSpeed(val);
            setIsRotating(val > 0);
          }}
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
        />
        <p className="text-xs text-center text-slate-500 italic">
          {speed > 80 
            ? "At high speeds, the colours blend into white due to persistence of vision!" 
            : "Rotate the disc faster to see the colours blend."}
        </p>
      </div>
    </div>
  );
};
