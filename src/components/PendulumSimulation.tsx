import { useState, useEffect, useRef } from 'react';
import { RotateCcw, Info, Play, Pause } from 'lucide-react';

export function PendulumSimulation() {
  const [length, setLength] = useState(150);
  const [angle, setAngle] = useState(30);
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState(0);

  // Constants
  const g = 9.8;
  const L = length / 100; // convert to "meters" for calculation
  const period = 2 * Math.PI * Math.sqrt(L / g);
  const frequency = 1 / period;

  useEffect(() => {
    let animationFrameId: number;
    
    const animate = (t: number) => {
      if (isPlaying) {
        setTime(prev => prev + 0.016); // roughly 60fps
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  const handleReset = () => {
    setLength(150);
    setAngle(30);
    setTime(0);
    setIsPlaying(true);
  };

  // Current angle using simple harmonic motion approximation: theta(t) = theta0 * cos(sqrt(g/L) * t)
  const currentAngle = angle * Math.cos(Math.sqrt(g / L) * time);
  const rad = (currentAngle * Math.PI) / 180;
  
  const bobX = 250 + length * Math.sin(rad);
  const bobY = 50 + length * Math.cos(rad);

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <span className="text-2xl">⏳</span>
          Simple Pendulum Simulation (ലഘു പെൻഡുലം സിമുലേഷൻ)
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 text-slate-500 hover:text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button
            onClick={handleReset}
            className="p-2 text-slate-500 hover:text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative w-full h-64 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-8 overflow-hidden flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 500 300">
          {/* Ceiling */}
          <line x1="200" y1="50" x2="300" y2="50" stroke="#1e293b" strokeWidth="4" />
          
          {/* String */}
          <line x1="250" y1="50" x2={bobX} y2={bobY} stroke="#94a3b8" strokeWidth="2" />
          
          {/* Bob */}
          <circle cx={bobX} cy={bobY} r="15" fill="#ef4444" />
          
          {/* Equilibrium line */}
          <line x1="250" y1="50" x2="250" y2="250" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Controls</h4>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                String Length: {length} units
              </label>
              <input
                type="range"
                min="50"
                max="200"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-brand-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Initial Angle: {angle}°
              </label>
              <input
                type="range"
                min="5"
                max="60"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full accent-brand-primary"
              />
            </div>
          </div>
        </div>

        <div className="bg-brand-primary/5 dark:bg-brand-primary/10 p-6 rounded-xl border border-brand-primary/20 flex flex-col justify-center">
          <h4 className="font-bold text-brand-primary dark:text-brand-accent mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Physics Data
          </h4>
          
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
              <span>Period (T = 2π√(L/g)):</span>
              <span className="font-mono font-bold text-brand-primary">{period.toFixed(2)} s</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span>Frequency (f = 1/T):</span>
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{frequency.toFixed(2)} Hz</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-600 dark:text-slate-400 italic">
            "The period of a simple pendulum depends only on the length of the string and the acceleration due to gravity, not on the mass of the bob or the amplitude (for small angles)."
          </div>
        </div>
      </div>
    </div>
  );
}
