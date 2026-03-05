import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const DCMotorSimulation: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [direction, setDirection] = useState<'clockwise' | 'anti-clockwise'>('clockwise');

  useEffect(() => {
    let interval: any;
    if (isRotating) {
      interval = setInterval(() => {
        setRotation(prev => (prev + (direction === 'clockwise' ? 5 : -5)) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRotating, direction]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 my-8">
      <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">DC Motor Simulation</h3>
      
      <div className="relative w-full max-w-md h-80 bg-white dark:bg-slate-950 rounded-xl shadow-inner border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center">
        <svg width="400" height="250" viewBox="0 0 400 250">
          {/* Field Magnets */}
          <rect x="20" y="50" width="80" height="150" fill="#ef4444" rx="5" />
          <text x="40" y="130" fontSize="24" fill="white" fontWeight="bold">N</text>
          
          <rect x="300" y="50" width="80" height="150" fill="#3b82f6" rx="5" />
          <text x="325" y="130" fontSize="24" fill="white" fontWeight="bold">S</text>

          {/* Magnetic Field Lines */}
          {[70, 100, 130, 160, 190].map((y, i) => (
            <line 
              key={i} x1="100" y1={y} x2="300" y2={y} 
              stroke="#64748b" strokeWidth="1" strokeDasharray="5,5" opacity={0.3}
            />
          ))}

          {/* Armature Coil (Rotating) */}
          <motion.g animate={{ rotate: rotation }} style={{ originX: "200px", originY: "125px" }}>
            <rect x="150" y="75" width="100" height="100" fill="none" stroke="#fbbf24" strokeWidth="4" rx="5" />
            <text x="175" y="125" fontSize="12" fill="#fbbf24" fontWeight="bold">Armature</text>
            
            {/* Split Rings */}
            <circle cx="200" cy="125" r="15" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="15,10" />
          </motion.g>

          {/* Carbon Brushes (Fixed) */}
          <rect x="180" y="120" width="10" height="10" fill="#1e293b" />
          <rect x="210" y="120" width="10" height="10" fill="#1e293b" />

          {/* Current Flow Indicators */}
          {isRotating && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.circle 
                cx="200" cy="220" r="5" fill="#fbbf24"
                animate={{ cx: [100, 300, 100] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <text x="150" y="240" fontSize="12" fill="#fbbf24" fontWeight="bold">Current Flow (I)</text>
            </motion.g>
          )}
        </svg>
      </div>

      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        <button 
          onClick={() => setIsRotating(!isRotating)}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg ${isRotating ? 'bg-red-500 text-white' : 'bg-green-500 text-white animate-pulse'}`}
        >
          {isRotating ? "Stop Motor" : "Start Motor"}
        </button>
        <button 
          onClick={() => setDirection(direction === 'clockwise' ? 'anti-clockwise' : 'clockwise')}
          className="px-6 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition-colors"
        >
          Reverse Direction
        </button>
      </div>

      <div className="mt-6 text-center max-w-sm">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {!isRotating && "Click 'Start Motor' to begin rotation."}
          {isRotating && `The motor is rotating ${direction}. The split rings reverse the current every half rotation.`}
        </p>
      </div>
    </div>
  );
};
