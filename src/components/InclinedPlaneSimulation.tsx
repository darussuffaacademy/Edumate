import { useState } from 'react';
import { RotateCcw, Info } from 'lucide-react';

export function InclinedPlaneSimulation() {
  const [angle, setAngle] = useState(30);
  const [loadWeight, setLoadWeight] = useState(100);

  // Constants
  const g = 9.8;
  const rad = (angle * Math.PI) / 180;
  
  // Required effort (ignoring friction for ideal case)
  // E = L * sin(theta)
  const requiredEffort = loadWeight * Math.sin(rad);
  const ma = 1 / Math.sin(rad);

  const handleReset = () => {
    setAngle(30);
    setLoadWeight(100);
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <span className="text-2xl">📐</span>
          Inclined Plane Simulation (ചരിവുതലം സിമുലേഷൻ)
        </h3>
        <button
          onClick={handleReset}
          className="p-2 text-slate-500 hover:text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors"
          title="Reset"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="relative w-full h-64 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-8 overflow-hidden flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 500 300" className="overflow-visible">
          {/* Ground */}
          <line x1="50" y1="250" x2="450" y2="250" stroke="#cbd5e1" strokeWidth="4" />
          
          {/* Inclined Plane */}
          {/* Calculate top point based on angle and base length (say 300 units) */}
          {(() => {
            const base = 300;
            const height = base * Math.tan(rad);
            const x1 = 100;
            const y1 = 250;
            const x2 = 100 + base;
            const y2 = 250 - height;
            
            return (
              <g>
                <polygon 
                  points={`${x1},${y1} ${x2},${y1} ${x2},${y2}`} 
                  fill="#e2e8f0" 
                  stroke="#94a3b8" 
                  strokeWidth="2" 
                />
                
                {/* Angle label */}
                <path d={`M ${x1 + 40} 250 A 40 40 0 0 0 ${x1 + 40 * Math.cos(rad)} ${250 - 40 * Math.sin(rad)}`} fill="none" stroke="#f59e0b" strokeWidth="2" />
                <text x={x1 + 50} y="240" fill="#f59e0b" fontSize="14" fontWeight="bold">{angle}°</text>

                {/* Load on plane */}
                <g transform={`translate(${x1 + base/2}, ${y1 - (base/2) * Math.tan(rad)}) rotate(${-angle})`}>
                  <rect x="-20" y="-40" width="40" height="40" fill="#ef4444" rx="4" />
                  <text x="0" y="-15" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">L</text>
                  
                  {/* Effort Arrow */}
                  <line x1="20" y1="-20" x2="80" y2="-20" stroke="#3b82f6" strokeWidth="4" markerEnd="url(#arrow-head)" />
                  <text x="50" y="-35" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">E</text>
                </g>
              </g>
            );
          })()}

          <defs>
            <marker id="arrow-head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
            </marker>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Controls</h4>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Angle of Inclination: {angle}°
              </label>
              <input
                type="range"
                min="5"
                max="60"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Load Weight (N): {loadWeight}
              </label>
              <input
                type="range"
                min="20"
                max="200"
                step="10"
                value={loadWeight}
                onChange={(e) => setLoadWeight(Number(e.target.value))}
                className="w-full accent-red-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-brand-primary/5 dark:bg-brand-primary/10 p-6 rounded-xl border border-brand-primary/20 flex flex-col justify-center">
          <h4 className="font-bold text-brand-primary dark:text-brand-accent mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Calculations
          </h4>
          
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
              <span>Mechanical Advantage (1/sin θ):</span>
              <span className="font-mono font-bold text-brand-primary">{ma.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span>Required Effort to Pull:</span>
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{requiredEffort.toFixed(1)} N</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-600 dark:text-slate-400 italic">
            "As the angle of inclination decreases, the Mechanical Advantage increases, and less effort is required to lift the load. However, the distance to be moved increases."
          </div>
        </div>
      </div>
    </div>
  );
}
