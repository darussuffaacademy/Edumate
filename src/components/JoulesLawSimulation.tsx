import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Square, RotateCcw } from 'lucide-react';

export function JoulesLawSimulation() {
  const [current, setCurrent] = useState(1); // Amperes
  const [resistance, setResistance] = useState(10); // Ohms
  const [time, setTime] = useState(0); // Seconds
  const [isRunning, setIsRunning] = useState(false);
  const [heat, setHeat] = useState(0); // Joules

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    // H = I^2 * R * t
    const calculatedHeat = Math.pow(current, 2) * resistance * time;
    setHeat(calculatedHeat);
  }, [current, resistance, time]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setHeat(0);
  };

  // Calculate color intensity based on heat (max expected heat around 10000 for demo)
  const heatIntensity = Math.min(heat / 5000, 1);
  const wireColor = `rgb(${Math.floor(100 + 155 * heatIntensity)}, ${Math.floor(100 - 100 * heatIntensity)}, ${Math.floor(100 - 100 * heatIntensity)})`;
  const glowOpacity = Math.min(heat / 2000, 0.8);

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
      <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Joule's Law Calculator (H = I²Rt)</h3>
      
      {/* Simulation Area */}
      <div className="relative w-full h-64 bg-slate-100 dark:bg-slate-800 rounded-xl mb-8 flex items-center justify-center overflow-hidden border-2 border-slate-200 dark:border-slate-700">
        
        {/* Power Source */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-24 bg-slate-700 dark:bg-slate-600 rounded-lg flex flex-col justify-between p-2 shadow-lg z-10">
            <div className="w-full h-4 bg-red-500 rounded-sm"></div>
            <div className="text-white text-xs text-center font-mono">{current}A</div>
            <div className="w-full h-4 bg-black rounded-sm"></div>
          </div>
          <span className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">Power Supply</span>
        </div>

        {/* Wires */}
        <div className="absolute left-24 right-24 top-1/2 -translate-y-1/2 h-1 bg-slate-400 dark:bg-slate-500 z-0"></div>
        <div className="absolute left-24 right-24 top-1/2 -translate-y-1/2 h-1 bg-slate-400 dark:bg-slate-500 z-0 translate-y-12"></div>

        {/* Heating Element (Resistor) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className="relative">
            {/* Glow effect */}
            <motion.div 
              className="absolute -inset-8 rounded-full blur-2xl"
              style={{ backgroundColor: 'rgba(239, 68, 68, 0.5)', opacity: glowOpacity }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Coil representation */}
            <svg width="120" height="40" viewBox="0 0 120 40" className="relative z-10">
              <motion.path
                d="M0,20 L10,20 L15,5 L25,35 L35,5 L45,35 L55,5 L65,35 L75,5 L85,35 L95,5 L105,35 L110,20 L120,20"
                fill="none"
                stroke={wireColor}
                strokeWidth="4"
                strokeLinejoin="round"
                style={{ filter: `drop-shadow(0 0 ${heatIntensity * 10}px ${wireColor})` }}
              />
            </svg>
          </div>
          <span className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">Heating Element ({resistance}Ω)</span>
        </div>

        {/* Electron flow animation */}
        {isRunning && current > 0 && (
          <div className="absolute left-24 right-24 top-1/2 -translate-y-1/2 h-1 z-20 overflow-hidden">
            <motion.div 
              className="w-full h-full flex justify-around"
              animate={{ x: [0, 100] }}
              transition={{ duration: 2 / current, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-400 -mt-0.5 shadow-[0_0_5px_rgba(96,165,250,0.8)]"></div>
              ))}
            </motion.div>
          </div>
        )}

      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex justify-between">
            <span>Current (I)</span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400">{current} A</span>
          </label>
          <input 
            type="range" 
            min="0" max="10" step="0.5"
            value={current} 
            onChange={(e) => setCurrent(parseFloat(e.target.value))}
            disabled={isRunning}
            className="w-full accent-indigo-600"
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex justify-between">
            <span>Resistance (R)</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">{resistance} Ω</span>
          </label>
          <input 
            type="range" 
            min="1" max="50" step="1"
            value={resistance} 
            onChange={(e) => setResistance(parseFloat(e.target.value))}
            disabled={isRunning}
            className="w-full accent-emerald-600"
          />
        </div>

        <div className="flex items-end justify-center space-x-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center space-x-2 px-6 py-2 rounded-xl font-medium text-white transition-colors ${
              isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-emerald-500 hover:bg-emerald-600'
            }`}
          >
            {isRunning ? <Square size={18} /> : <Play size={18} />}
            <span>{isRunning ? 'Stop' : 'Start'}</span>
          </button>
          
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl font-medium bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-200 transition-colors"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Results Dashboard */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
          <span className="text-sm text-slate-500 dark:text-slate-400 mb-1">Time (t)</span>
          <span className="text-3xl font-mono font-bold text-slate-800 dark:text-white">{time}s</span>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-800/50 flex flex-col items-center justify-center">
          <span className="text-sm text-orange-600 dark:text-orange-400 mb-1">Heat Generated (H)</span>
          <span className="text-3xl font-mono font-bold text-orange-600 dark:text-orange-400">{heat.toLocaleString()} J</span>
          <span className="text-xs text-orange-500 dark:text-orange-500/70 mt-1 font-mono">{current}² × {resistance} × {time}</span>
        </div>
      </div>
    </div>
  );
}
