import React from 'react';
import { Type, ZoomIn, ZoomOut } from 'lucide-react';
import { useTextSize, TextSize } from './TextSizeProvider';

export default function TextSizeToggle() {
  const { textSize, setTextSize } = useTextSize();

  const cycleTextSize = () => {
    const sizes: TextSize[] = ['normal', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(textSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setTextSize(sizes[nextIndex]);
  };

  return (
    <>
      {/* Mobile: Single cycling button */}
      <button
        onClick={cycleTextSize}
        className="sm:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        title={`Text Size: ${textSize}`}
        aria-label="Toggle text size"
      >
        <Type className={`w-4 h-4 ${textSize === 'large' ? 'scale-110' : textSize === 'xlarge' ? 'scale-125' : 'scale-100'} transition-transform`} />
      </button>

      {/* Desktop: Full toggle */}
      <div className="hidden sm:flex items-center bg-white dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700 shadow-sm">
        <button
          onClick={() => setTextSize('normal')}
          className={`p-1.5 rounded-full transition-all ${textSize === 'normal' ? 'bg-brand-primary text-white dark:bg-brand-accent dark:text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
          title="Normal Text Size"
        >
          <Type className="w-4 h-4 scale-90" />
        </button>
        <button
          onClick={() => setTextSize('large')}
          className={`p-1.5 rounded-full transition-all ${textSize === 'large' ? 'bg-brand-primary text-white dark:bg-brand-accent dark:text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
          title="Large Text Size"
        >
          <Type className="w-4 h-4 scale-105" />
        </button>
        <button
          onClick={() => setTextSize('xlarge')}
          className={`p-1.5 rounded-full transition-all ${textSize === 'xlarge' ? 'bg-brand-primary text-white dark:bg-brand-accent dark:text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
          title="Extra Large Text Size"
        >
          <Type className="w-4 h-4 scale-125" />
        </button>
      </div>
    </>
  );
}
