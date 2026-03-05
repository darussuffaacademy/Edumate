import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldAlert, Power, Activity, AlertTriangle, CheckCircle2 } from 'lucide-react';

export function HouseholdCircuitSimulation() {
  const [mainSwitchOn, setMainSwitchOn] = useState(true);
  const [elcbTripped, setElcbTripped] = useState(false);
  const [mcbTripped, setMcbTripped] = useState(false);
  const [faultType, setFaultType] = useState<'none' | 'short-circuit' | 'earth-leakage' | 'overload'>('none');
  const [appliancePower, setAppliancePower] = useState(1000); // Watts

  // Reset faults when main switch is turned off
  useEffect(() => {
    if (!mainSwitchOn) {
      setFaultType('none');
    }
  }, [mainSwitchOn]);

  // Handle fault simulation
  useEffect(() => {
    if (faultType === 'short-circuit' || faultType === 'overload') {
      setMcbTripped(true);
      setFaultType('none'); // Reset after tripping
    } else if (faultType === 'earth-leakage') {
      setElcbTripped(true);
      setFaultType('none'); // Reset after tripping
    }
  }, [faultType]);

  const isPowerFlowing = mainSwitchOn && !elcbTripped && !mcbTripped;

  const triggerFault = (type: 'short-circuit' | 'earth-leakage' | 'overload') => {
    if (!isPowerFlowing) return;
    setFaultType(type);
  };

  const resetBreakers = () => {
    setElcbTripped(false);
    setMcbTripped(false);
    setFaultType('none');
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <ShieldAlert className="text-emerald-500" /> Household Circuit Safety
        </h3>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${isPowerFlowing ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
            {isPowerFlowing ? 'Power ON' : 'Power OFF'}
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Circuit Diagram Visualizer */}
        <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 relative min-h-[400px]">
          
          {/* Power Source */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-500">P (230V)</span>
              <div className="w-4 h-4 rounded-full bg-red-500" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">N (0V)</span>
              <div className="w-4 h-4 rounded-full bg-slate-800 dark:bg-slate-400" />
            </div>
            <div className="flex items-center gap-2 mt-8">
              <span className="text-xs font-bold text-green-500">E</span>
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                <div className="w-2 h-0.5 bg-white" />
                <div className="w-1 h-0.5 bg-white mt-1" />
              </div>
            </div>
          </div>

          {/* Wires */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Phase Wire */}
            <div className={`absolute top-[calc(50%-2rem)] left-12 right-12 h-1 ${isPowerFlowing ? 'bg-red-500' : 'bg-red-200 dark:bg-red-900/30'} transition-colors duration-300`} />
            
            {/* Neutral Wire */}
            <div className={`absolute top-[calc(50%+2rem)] left-12 right-12 h-1 ${isPowerFlowing ? 'bg-slate-800 dark:bg-slate-400' : 'bg-slate-300 dark:bg-slate-700'} transition-colors duration-300`} />
            
            {/* Earth Wire */}
            <div className="absolute top-[calc(50%+5rem)] left-12 right-12 h-1 bg-green-500 border-t border-dashed border-white/50" />
          </div>

          {/* Components on the line */}
          <div className="absolute inset-x-16 top-1/2 -translate-y-1/2 flex justify-between items-center z-20">
            
            {/* kWh Meter */}
            <div className="flex flex-col items-center -mt-12">
              <div className="w-16 h-20 bg-slate-200 dark:bg-slate-700 border-2 border-slate-400 rounded-md flex flex-col items-center p-2 shadow-md">
                <div className="w-full h-6 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded flex items-center justify-center overflow-hidden">
                  <span className="font-mono text-xs font-bold">0142.5</span>
                </div>
                <div className="mt-2 w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center relative">
                  <motion.div 
                    className="w-full h-0.5 bg-red-500 absolute"
                    animate={{ rotate: isPowerFlowing ? 360 : 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 mt-2 text-center">kWh Meter</span>
            </div>

            {/* Main Switch */}
            <div className="flex flex-col items-center -mt-12">
              <button 
                onClick={() => setMainSwitchOn(!mainSwitchOn)}
                className={`w-12 h-16 border-2 rounded-md flex flex-col items-center justify-center cursor-pointer transition-colors shadow-md relative ${
                  mainSwitchOn ? 'bg-slate-100 dark:bg-slate-800 border-emerald-500' : 'bg-slate-200 dark:bg-slate-700 border-slate-400'
                }`}
              >
                <div className={`w-8 h-6 rounded-sm transition-transform duration-200 ${mainSwitchOn ? 'bg-emerald-500 translate-y-[-4px]' : 'bg-red-500 translate-y-[4px]'}`} />
                <span className="text-[8px] font-bold mt-1">{mainSwitchOn ? 'ON' : 'OFF'}</span>
              </button>
              <span className="text-[10px] font-bold text-slate-500 mt-2 text-center">Main Switch</span>
            </div>

            {/* ELCB/RCCB */}
            <div className="flex flex-col items-center -mt-12 relative">
              <div className={`w-14 h-20 border-2 rounded-md flex flex-col items-center p-2 shadow-md transition-colors ${
                elcbTripped ? 'bg-red-50 dark:bg-red-900/20 border-red-500' : 'bg-slate-100 dark:bg-slate-800 border-blue-500'
              }`}>
                <div className="w-full flex justify-between px-1 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-slate-800 dark:bg-slate-400" />
                </div>
                <button 
                  onClick={() => elcbTripped && resetBreakers()}
                  disabled={!elcbTripped}
                  className={`w-8 h-4 rounded-sm transition-transform duration-200 ${elcbTripped ? 'bg-red-500 translate-y-[8px]' : 'bg-blue-500 translate-y-[-2px]'}`} 
                />
                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-auto border border-yellow-600 cursor-pointer hover:bg-yellow-300" title="Test Button" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 mt-2 text-center">ELCB/RCCB</span>
              
              {/* Trip Indicator */}
              <AnimatePresence>
                {elcbTripped && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-8 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap"
                  >
                    TRIPPED!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MCB */}
            <div className="flex flex-col items-center -mt-12 relative">
              <div className={`w-10 h-16 border-2 rounded-md flex flex-col items-center justify-center shadow-md transition-colors ${
                mcbTripped ? 'bg-red-50 dark:bg-red-900/20 border-red-500' : 'bg-slate-100 dark:bg-slate-800 border-slate-400'
              }`}>
                <button 
                  onClick={() => mcbTripped && resetBreakers()}
                  disabled={!mcbTripped}
                  className={`w-4 h-6 rounded-sm transition-transform duration-200 ${mcbTripped ? 'bg-red-500 translate-y-[4px]' : 'bg-slate-800 dark:bg-slate-300 translate-y-[-4px]'}`} 
                />
              </div>
              <span className="text-[10px] font-bold text-slate-500 mt-2 text-center">MCB</span>
              
              {/* Trip Indicator */}
              <AnimatePresence>
                {mcbTripped && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-8 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap"
                  >
                    TRIPPED!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Appliance (Load) */}
            <div className="flex flex-col items-center mt-12 relative">
              <div className={`w-24 h-24 border-4 rounded-xl flex items-center justify-center shadow-lg transition-colors ${
                isPowerFlowing ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500' : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
              }`}>
                <Activity className={`w-10 h-10 ${isPowerFlowing ? 'text-indigo-500 animate-pulse' : 'text-slate-400'}`} />
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-2 text-center">Appliance</span>
              <span className="text-[10px] text-slate-500">{appliancePower}W</span>

              {/* Fault Animations */}
              <AnimatePresence>
                {faultType === 'short-circuit' && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <Zap className="w-16 h-16 text-yellow-500 fill-yellow-500" />
                  </motion.div>
                )}
                {faultType === 'earth-leakage' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-4 right-0 pointer-events-none"
                  >
                    <Zap className="w-8 h-8 text-green-500 fill-green-500 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Controls Panel */}
        <div className="flex-1 flex flex-col gap-4">
          
          {/* Status Panel */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4" /> System Status
            </h4>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 dark:text-slate-400">Main Power:</span>
                <span className={`font-bold ${mainSwitchOn ? 'text-emerald-500' : 'text-red-500'}`}>
                  {mainSwitchOn ? 'ON' : 'OFF'}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 dark:text-slate-400">ELCB/RCCB:</span>
                <span className={`font-bold ${elcbTripped ? 'text-red-500' : 'text-emerald-500'}`}>
                  {elcbTripped ? 'TRIPPED' : 'NORMAL'}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 dark:text-slate-400">MCB:</span>
                <span className={`font-bold ${mcbTripped ? 'text-red-500' : 'text-emerald-500'}`}>
                  {mcbTripped ? 'TRIPPED' : 'NORMAL'}
                </span>
              </div>
            </div>

            {(elcbTripped || mcbTripped) && (
              <button
                onClick={resetBreakers}
                className="w-full mt-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Power className="w-4 h-4" /> Reset Breakers
              </button>
            )}
          </div>

          {/* Fault Simulation */}
          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-4 border border-red-200 dark:border-red-900/30">
            <h4 className="text-sm font-bold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Simulate Faults
            </h4>
            
            <div className="space-y-3">
              <button
                onClick={() => triggerFault('short-circuit')}
                disabled={!isPowerFlowing}
                className="w-full py-2 px-4 bg-white dark:bg-slate-800 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 rounded-lg text-sm font-bold hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-left flex justify-between items-center"
              >
                <span>Short Circuit (Phase touches Neutral)</span>
                <Zap className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => triggerFault('earth-leakage')}
                disabled={!isPowerFlowing}
                className="w-full py-2 px-4 bg-white dark:bg-slate-800 border border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-400 rounded-lg text-sm font-bold hover:bg-orange-50 dark:hover:bg-orange-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-left flex justify-between items-center"
              >
                <span>Earth Leakage (Current leaks to metal body)</span>
                <ShieldAlert className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => triggerFault('overload')}
                disabled={!isPowerFlowing}
                className="w-full py-2 px-4 bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 rounded-lg text-sm font-bold hover:bg-amber-50 dark:hover:bg-amber-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-left flex justify-between items-center"
              >
                <span>Overloading (Too many appliances)</span>
                <Activity className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Explanation Box */}
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/30 flex-1">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Safety Mechanisms
            </h4>
            <ul className="text-sm text-emerald-700 dark:text-emerald-300 space-y-2 list-disc pl-4">
              <li><strong>ELCB/RCCB:</strong> Detects earth leakage (e.g., if a person touches a live wire or current leaks to a metal body) and trips instantly to prevent fatal electric shocks.</li>
              <li><strong>MCB:</strong> Detects overcurrent caused by short circuits or overloading. It trips to prevent wires from overheating and catching fire.</li>
              <li><strong>Earthing:</strong> Provides a safe, low-resistance path for leakage current to flow to the earth, triggering the ELCB.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
