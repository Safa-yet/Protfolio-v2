import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
           exit={{ opacity: 0, scale: 1.1 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
           className="fixed inset-0 z-[1000] bg-[#2e3d44] flex items-center justify-center overflow-hidden"
        >
          <div id="loader-3" className="relative w-full h-20 flex justify-center items-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                initial={{ left: '40%', opacity: 0 }}
                animate={{ 
                  left: ['40%', '45%', '55%', '62%'],
                  opacity: [0, 1, 1, 0],
                  backgroundColor: ['#91ff00', '#08d665', '#08d665', '#91ff00']
                }}
                transition={{ 
                  duration: 2.3, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: i * 0.46
                }}
                className="absolute w-4 h-4 rounded-full"
              />
            ))}
          </div>
          
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.5em] text-primary uppercase animate-pulse">
             Loading Excellence
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
