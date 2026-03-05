import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Info, RotateCcw, Play, Pause } from 'lucide-react';

export function GearSimulation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [gearRatio, setGearRatio] = useState<'1:2' | '1:1' | '2:1'>('1:2');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      if (isPlaying) {
        setRotation(prev => (prev + speed) % 360);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, speed]);

  // Gear properties
  const gear1Teeth = gearRatio === '1:2' ? 12 : gearRatio === '2:1' ? 24 : 16;
  const gear2Teeth = gearRatio === '1:2' ? 24 : gearRatio === '2:1' ? 12 : 16;
  
  const gear1Radius = gear1Teeth * 4;
  const gear2Radius = gear2Teeth * 4;
  
  const gear1Speed = speed;
  const gear2Speed = -speed * (gear1Teeth / gear2Teeth); // Negative for opposite direction
  
  const gear1Rotation = rotation;
  const gear2Rotation = rotation * (gear1Teeth / gear2Teeth) * -1;

  const distance = gear1Radius + gear2Radius + 4; // +4 for teeth interlocking

  const renderGear = (teeth: number, radius: number, cx: number, cy: number, rot: number, color: string) => {
    const points = [];
    const innerRadius = radius - 8;
    const holeRadius = radius / 4;
    
    for (let i = 0; i < teeth; i++) {
      const angle1 = (i * 360) / teeth;
      const angle2 = ((i + 0.4) * 360) / teeth;
      const angle3 = ((i + 0.6) * 360) / teeth;
      const angle4 = ((i + 1) * 360) / teeth;
      
      const r1 = (angle1 * Math.PI) / 180;
      const r2 = (angle2 * Math.PI) / 180;
      const r3 = (angle3 * Math.PI) / 180;
      const r4 = (angle4 * Math.PI) / 180;
      
      points.push(`${cx + innerRadius * Math.cos(r1)},${cy + innerRadius * Math.sin(r1)}`);
      points.push(`${cx + radius * Math.cos(r2)},${cy + radius * Math.sin(r2)}`);
      points.push(`${cx + radius * Math.cos(r3)},${cy + radius * Math.sin(r3)}`);
      points.push(`${cx + innerRadius * Math.cos(r4)},${cy + innerRadius * Math.sin(r4)}`);
    }

    return (
      <g transform={`rotate(${rot}, ${cx}, ${cy})`}>
        <polygon points={points.join(' ')} fill={color} stroke="#475569" strokeWidth="2" />
        <circle cx={cx} cy={cy} r={innerRadius - 4} fill="none" stroke="#475569" strokeWidth="2" opacity="0.3" />
        <circle cx={cx} cy={cy} r={holeRadius} fill="#f8fafc" stroke="#475569" strokeWidth="2" />
        <circle cx={cx} cy={cy} r="4" fill="#334155" />
        {/* Spokes */}
        <line x1={cx} y1={cy - holeRadius} x2={cx} y2={cy - innerRadius + 4} stroke="#475569" strokeWidth="4" opacity="0.5" />
        <line x1={cx} y1={cy + holeRadius} x2={cx} y2={cy + innerRadius - 4} stroke="#475569" strokeWidth="4" opacity="0.5" />
        <line x1={cx - holeRadius} y1={cy} x2={cx - innerRadius + 4} y2={cy} stroke="#475569" strokeWidth="4" opacity="0.5" />
        <line x1={cx + holeRadius} y1={cy} x2={cx + innerRadius - 4} y2={cy} stroke="#475569" strokeWidth="4" opacity="0.5" />
      </g>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <span className="text-2xl">⚙️</span>
          Gear Simulation (ഗിയർ സിമുലേഷൻ)
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button
            onClick={() => {
              setRotation(0);
              setIsPlaying(false);
            }}
            className="p-2 text-slate-500 hover:text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={() => setGearRatio('1:2')}
          className={`p-3 rounded-xl border-2 transition-all ${
            gearRatio === '1:2'
              ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-primary/50'
          }`}
        >
          Small drives Large (1:2)
        </button>
        <button
          onClick={() => setGearRatio('1:1')}
          className={`p-3 rounded-xl border-2 transition-all ${
            gearRatio === '1:1'
              ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-primary/50'
          }`}
        >
          Equal Size (1:1)
        </button>
        <button
          onClick={() => setGearRatio('2:1')}
          className={`p-3 rounded-xl border-2 transition-all ${
            gearRatio === '2:1'
              ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-primary/50'
          }`}
        >
          Large drives Small (2:1)
        </button>
      </div>

      {/* Simulation Area */}
      <div className="relative w-full h-64 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-8 overflow-hidden flex items-center justify-center">
        
        <svg width="400" height="200" viewBox="0 0 400 200" className="overflow-visible">
          {/* Base plate */}
          <rect x="50" y="80" width="300" height="40" rx="10" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
          
          {/* Gear 1 (Driver) */}
          <g transform="translate(150, 100)">
            {renderGear(gear1Teeth, gear1Radius, 0, 0, gear1Rotation, "#3b82f6")}
            <text x="0" y={gear1Radius + 20} textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">Driver</text>
          </g>

          {/* Gear 2 (Driven) */}
          <g transform={`translate(${150 + distance}, 100)`}>
            {renderGear(gear2Teeth, gear2Radius, 0, 0, gear2Rotation, "#ef4444")}
            <text x="0" y={gear2Radius + 20} textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">Driven</text>
          </g>
        </svg>

      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Driver Speed</h4>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Speed: {speed.toFixed(1)}x
              </label>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.5"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full accent-blue-500"
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
              <span>Gear Ratio (Teeth):</span>
              <span className="font-mono font-bold text-brand-primary">{gear1Teeth} : {gear2Teeth}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
              <span>Speed Ratio:</span>
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                1 : {(gear1Teeth / gear2Teeth).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span>Torque (Turning Effect):</span>
              <span className={`font-bold ${gear1Teeth < gear2Teeth ? 'text-green-600' : gear1Teeth > gear2Teeth ? 'text-red-500' : 'text-slate-600'}`}>
                {gear1Teeth < gear2Teeth ? 'Increases' : gear1Teeth > gear2Teeth ? 'Decreases' : 'Constant'}
              </span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-600 dark:text-slate-400 italic">
            {gearRatio === '1:2' 
              ? "Small gear drives large gear: Speed decreases, but torque (turning effect) increases. Useful for lifting heavy loads." 
              : gearRatio === '2:1'
              ? "Large gear drives small gear: Speed increases, but torque decreases. Useful for fast movement like in bicycles."
              : "Equal gears: Speed and torque remain the same. Used mainly to change the direction of rotation."}
          </div>
        </div>
      </div>
    </div>
  );
}
