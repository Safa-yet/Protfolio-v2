import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const MouseEffect = ({ isDark }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">

      {/* Illuminated Ambient Aura Glow (Zero Lag, No Dot) */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale: isHovering ? 2 : 1.4,
          opacity: isHovering ? 0.7 : 0.4
        }}
        className={`fixed top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[45px] pointer-events-none transition-all duration-300 select-none ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`}
      />

    </div>
  );
};

export default MouseEffect;
