import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const LoudspeakerSimulation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequency, setFrequency] = useState(5);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 my-8">
      <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Moving Coil Loudspeaker</h3>
      
      <div className="relative w-full max-w-md h-80 bg-white dark:bg-slate-950 rounded-xl shadow-inner border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center">
        <svg width="400" height="250" viewBox="0 0 400 250">
          {/* Permanent Magnet (E-shaped) */}
          <rect x="50" y="50" width="40" height="150" fill="#64748b" rx="5" />
          <rect x="50" y="50" width="150" height="20" fill="#64748b" rx="5" />
          <rect x="50" y="180" width="150" height="20" fill="#64748b" rx="5" />
          <rect x="150" y="100" width="50" height="50" fill="#ef4444" rx="5" />
          <text x="165" y="130" fontSize="14" fill="white" fontWeight="bold">N</text>
          <text x="60" y="130" fontSize="14" fill="white" fontWeight="bold">S</text>

          {/* Voice Coil (Moving) */}
          <motion.g 
            animate={isPlaying ? { x: [0, 10, -10, 0] } : { x: 0 }}
            transition={{ duration: 1/frequency, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="140" y="90" width="10" height="70" fill="#fbbf24" rx="2" />
            <rect x="140" y="90" width="20" height="5" fill="#fbbf24" />
            <rect x="140" y="155" width="20" height="5" fill="#fbbf24" />
            
            {/* Diaphragm (Attached to Voice Coil) */}
            <path d="M 150 50 L 250 20 L 250 230 L 150 200 Z" fill="rgba(30, 41, 59, 0.2)" stroke="#1e293b" strokeWidth="2" />
            <text x="260" y="130" fontSize="12" fill="#1e293b" fontWeight="bold">Diaphragm</text>
          </motion.g>

          {/* Sound Waves */}
          {isPlaying && (
            <motion.g>
              {[1, 2, 3].map((i) => (
                <motion.path 
                  key={i}
                  d={`M ${260 + i * 20} 100 Q ${280 + i * 20} 125 ${260 + i * 20} 150`}
                  fill="none" stroke="#3b82f6" strokeWidth="2"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: [0, 1, 0], x: 50 }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </motion.g>
          )}

          {/* Electrical Signals */}
          {isPlaying && (
            <motion.path 
              d="M 0 125 Q 25 100 50 125 T 100 125 T 150 125" 
              fill="none" stroke="#fbbf24" strokeWidth="2"
              animate={{ x: [0, 50] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            />
          )}
        </svg>
      </div>

      <div className="w-full max-w-xs mt-8 space-y-4">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-full py-3 rounded-xl text-sm font-bold transition-all shadow-lg ${isPlaying ? 'bg-red-500 text-white' : 'bg-brand-primary text-white animate-pulse'}`}
        >
          {isPlaying ? "Stop Sound" : "Play Sound Signal"}
        </button>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Signal Frequency</span>
            <span className="text-sm font-bold text-brand-primary dark:text-white">{frequency} Hz</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={frequency}
            onChange={(e) => setFrequency(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
          />
        </div>
      </div>

      <div className="mt-6 text-center max-w-sm">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {isPlaying 
            ? "Electrical signals cause the voice coil to vibrate. This vibrates the diaphragm, producing sound waves." 
            : "Click 'Play Sound Signal' to see how sound is produced."}
        </p>
      </div>
    </div>
  );
};
