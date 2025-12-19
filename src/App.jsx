import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PyrolysisCracking = () => {
  const [isHeating, setIsHeating] = useState(false);

  // Represents the long polymer chain of plastic
  const polymerChain = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-black rounded-3xl border border-yellow-900/30">
      <div className="mb-8 text-center">
        <h3 className="text-yellow-500 font-mono text-xl mb-2 uppercase tracking-widest">
          Thermal Cracking Phase
        </h3>
        <p className="text-gray-400 text-sm">Oxygen-Free Decomposition @ 900°F</p>
      </div>

      <div className="relative h-40 flex items-center justify-center w-full">
        {/* The Molecular Chain */}
        <div className="flex gap-2">
          {polymerChain.map((id, index) => (
            <motion.div
              key={id}
              initial={false}
              animate={isHeating ? {
                y: [0, -20, 20, -10, 0],
                x: isHeating ? (index < 4 ? -100 : 100) : 0,
                opacity: isHeating ? 0.4 : 1,
                rotate: isHeating ? 360 : 0,
                scale: isHeating ? 0.5 : 1
              } : { y: 0, x: 0, opacity: 1, rotate: 0, scale: 1 }}
              transition={{ 
                duration: 2, 
                repeat: isHeating ? Infinity : 0,
                ease: "easeInOut" 
              }}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-400 to-white border-2 border-gray-600"
            />
          ))}
        </div>

        {/* Microwave Energy Pulses */}
        {isHeating && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute inset-0 bg-yellow-500/20 rounded-full blur-3xl"
          />
        )}
      </div>

      <button
        onClick={() => setIsHeating(!isHeating)}
        className={`mt-12 px-8 py-3 rounded-full font-bold transition-all ${
          isHeating 
            ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]" 
            : "bg-yellow-500 text-black hover:bg-yellow-400"
        }`}
      >
        {isHeating ? "STOP PYROLYSIS" : "APPLY MICROWAVE HEAT"}
      </button>

      {isHeating && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-red-400 font-mono animate-pulse"
        >
          BREAKING POLYMER BONDS...
        </motion.div>
      )}
    </div>
  );
};

export default PyrolysisCracking;
