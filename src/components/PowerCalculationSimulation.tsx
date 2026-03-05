import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Square, RotateCcw, Zap } from 'lucide-react';

export function PowerCalculationSimulation() {
  const [voltage, setVoltage] = useState(230); // Volts
  const [current, setCurrent] = useState(5); // Amperes
  const [power, setPower] = useState(0); // Watts
  const [resistance, setResistance] = useState(0); // Ohms
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // P = V * I
    const calculatedPower = voltage * current;
    setPower(calculatedPower);
    
    // R = V / I
    const calculatedResistance = current > 0 ? voltage / current : 0;
    setResistance(calculatedResistance);
  }, [voltage, current]);

  const handleReset = () => {
    setIsRunning(false);
    setVoltage(230);
    setCurrent(5);
  };

  // Calculate visual properties based on power
  const maxExpectedPower = 230 * 20; // Max V * Max I
  const powerRatio = Math.min(power / maxExpectedPower, 1);
  const bulbBrightness = 0.2 + (powerRatio * 0.8); // Minimum brightness 0.2
  const bulbGlow = powerRatio * 50; // Max glow 50px

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
      <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
        <Zap className="text-yellow-500" /> Electric Power Calculator (P = VI)
      </h3>
      
      {/* Simulation Area */}
      <div className="relative w-full h-64 bg-slate-100 dark:bg-slate-800 rounded-xl mb-8 flex items-center justify-center overflow-hidden border-2 border-slate-200 dark:border-slate-700">
        
        {/* Circuit Diagram */}
        <svg width="100%" height="100%" viewBox="0 0 600 200" className="absolute inset-0 z-0">
          {/* Main Loop */}
          <path d="M 150 100 L 150 50 L 450 50 L 450 100" fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-400 dark:text-slate-500" />
          <path d="M 150 100 L 150 150 L 450 150 L 450 100" fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-400 dark:text-slate-500" />
          
          {/* Battery Symbol */}
          <g transform="translate(130, 90)">
            <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="4" className="text-slate-600 dark:text-slate-300" />
            <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="6" className="text-slate-600 dark:text-slate-300" />
            <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="4" className="text-slate-600 dark:text-slate-300" />
            <text x="-20" y="15" className="text-xs fill-slate-500 font-mono">{voltage}V</text>
          </g>

          {/* Ammeter Symbol */}
          <g transform="translate(280, 40)">
            <circle cx="20" cy="10" r="15" fill="white" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
            <text x="15" y="15" className="text-xs fill-blue-600 font-bold">A</text>
            <text x="10" y="-10" className="text-xs fill-slate-500 font-mono">{current}A</text>
          </g>
        </svg>

        {/* Light Bulb (Load) */}
        <div className="absolute right-[120px] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className="relative w-16 h-24 flex items-center justify-center">
            {/* Glow */}
            {isRunning && (
              <motion.div 
                className="absolute inset-0 rounded-full bg-yellow-400/30 blur-xl"
                style={{ opacity: bulbBrightness, width: `${100 + bulbGlow}%`, height: `${100 + bulbGlow}%`, left: `-${bulbGlow/2}%`, top: `-${bulbGlow/2}%` }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            
            {/* Bulb SVG */}
            <svg viewBox="0 0 24 24" className={`w-12 h-12 relative z-10 transition-colors duration-300 ${isRunning ? 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]' : 'text-slate-400 dark:text-slate-600'}`}>
              <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1h-6v1z"/>
            </svg>
          </div>
          <div className="mt-2 bg-slate-800 text-white text-xs px-2 py-1 rounded font-mono shadow-md">
            {isRunning ? `${power.toFixed(0)} W` : 'OFF'}
          </div>
        </div>

        {/* Electron flow animation */}
        {isRunning && current > 0 && (
          <svg width="100%" height="100%" viewBox="0 0 600 200" className="absolute inset-0 z-20 pointer-events-none">
             <motion.circle cx="150" cy="50" r="4" fill="#60A5FA" filter="drop-shadow(0 0 4px #60A5FA)"
                animate={{ pathLength: [0, 1], offsetDistance: ["0%", "100%"] }}
                style={{ offsetPath: "path('M 150 90 L 150 50 L 450 50 L 450 90')" }}
                transition={{ duration: 3 / current, repeat: Infinity, ease: "linear" }}
             />
             <motion.circle cx="150" cy="50" r="4" fill="#60A5FA" filter="drop-shadow(0 0 4px #60A5FA)"
                animate={{ pathLength: [0, 1], offsetDistance: ["0%", "100%"] }}
                style={{ offsetPath: "path('M 450 110 L 450 150 L 150 150 L 150 110')" }}
                transition={{ duration: 3 / current, repeat: Infinity, ease: "linear" }}
             />
          </svg>
        )}

      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex justify-between">
            <span>Voltage (V)</span>
            <span className="font-mono text-blue-600 dark:text-blue-400">{voltage} V</span>
          </label>
          <input 
            type="range" 
            min="0" max="250" step="10"
            value={voltage} 
            onChange={(e) => setVoltage(parseFloat(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex justify-between">
            <span>Current (I)</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">{current} A</span>
          </label>
          <input 
            type="range" 
            min="0" max="20" step="0.5"
            value={current} 
            onChange={(e) => setCurrent(parseFloat(e.target.value))}
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
            <span>{isRunning ? 'Switch OFF' : 'Switch ON'}</span>
          </button>
          
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl font-medium bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-200 transition-colors"
            title="Reset Values"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Results Dashboard */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800/50 flex flex-col items-center justify-center">
          <span className="text-sm text-yellow-700 dark:text-yellow-500 mb-1">Power (P = V × I)</span>
          <span className="text-3xl font-mono font-bold text-yellow-600 dark:text-yellow-400">{power.toLocaleString()} W</span>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
          <span className="text-sm text-slate-500 dark:text-slate-400 mb-1">Resistance (R = V / I)</span>
          <span className="text-3xl font-mono font-bold text-slate-800 dark:text-white">{resistance.toFixed(1)} Ω</span>
        </div>
      </div>
    </div>
  );
}
