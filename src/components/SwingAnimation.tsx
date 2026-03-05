import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'motion/react';

export const SwingAnimation: React.FC = () => {
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [amplitude, setAmplitude] = useState(30);

  // Start initial animation
  useEffect(() => {
    if (!isDragging) {
      startOscillation(amplitude);
    }
  }, []);

  const startOscillation = (amp: number) => {
    controls.start({
      rotate: [amp, -amp, amp],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  };

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    // Calculate new amplitude based on where it was released
    const finalRotation = rotation.get();
    const newAmp = Math.min(Math.abs(finalRotation), 60);
    setAmplitude(newAmp > 5 ? newAmp : 30); // Don't let it be too small
    startOscillation(newAmp > 5 ? newAmp : 30);
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-800 my-8 overflow-hidden">
      <div className="mb-4 text-center">
        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Interactive Swing Model</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">Drag the seat to change the amplitude of oscillation</p>
      </div>

      <div className="relative w-full h-64 flex items-center justify-center">
        {/* Support Structure */}
        <svg width="300" height="250" viewBox="0 0 300 250" className="overflow-visible">
          {/* Top Bar */}
          <line x1="50" y1="20" x2="250" y2="20" stroke="currentColor" strokeWidth="6" className="text-slate-400 dark:text-slate-600" />
          {/* Left Leg */}
          <line x1="50" y1="20" x2="20" y2="240" stroke="currentColor" strokeWidth="6" className="text-slate-400 dark:text-slate-600" />
          {/* Right Leg */}
          <line x1="250" y1="20" x2="280" y2="240" stroke="currentColor" strokeWidth="6" className="text-slate-400 dark:text-slate-600" />
          
          {/* Swing Motion */}
          <motion.g
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ 
              originX: "150px", 
              originY: "20px",
              rotate: rotation,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            // Map drag x to rotation
            onDrag={(e, info) => {
              const angle = (info.offset.x / 100) * 45;
              rotation.set(angle);
            }}
          >
            {/* Left Rope */}
            <line x1="130" y1="20" x2="130" y2="180" stroke="currentColor" strokeWidth="2" className="text-slate-500 dark:text-slate-400" />
            {/* Right Rope */}
            <line x1="170" y1="20" x2="170" y2="180" stroke="currentColor" strokeWidth="2" className="text-slate-500 dark:text-slate-400" />
            
            {/* Seat */}
            <rect x="120" y="180" width="60" height="8" rx="2" fill="currentColor" className="text-brand-primary dark:text-brand-accent" />
            
            {/* Person (Simplified) */}
            <circle cx="150" cy="150" r="15" fill="currentColor" className="text-slate-300 dark:text-slate-700" />
            <path d="M140 165 Q150 180 160 165" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-300 dark:text-slate-700" />
            
            {/* Drag Handle Indicator (only visible on hover/drag) */}
            <circle cx="150" cy="184" r="20" fill="transparent" className="cursor-grab active:cursor-grabbing" />
          </motion.g>
        </svg>
        
        {/* Equilibrium Line */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-px h-[220px] border-l border-dashed border-slate-300 dark:border-slate-700 -z-10" />
        <div className="absolute top-[225px] left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          Equilibrium (O)
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-primary dark:bg-brand-accent opacity-50" />
          <span>Extreme Position (A)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-primary dark:bg-brand-accent" />
          <span>Equilibrium (O)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-primary dark:bg-brand-accent opacity-50" />
          <span>Extreme Position (B)</span>
        </div>
      </div>

      <button 
        onClick={() => {
          controls.stop();
          rotation.set(0);
          setAmplitude(30);
          startOscillation(30);
        }}
        className="mt-6 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
      >
        Reset Oscillation
      </button>
    </div>
  );
};
