'use client';
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || 'ontouchstart' in window) return;

    const updateCursor = () => {
      if (!cursorRef.current) return;
      
      cursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      cursorRef.current.style.opacity = '1';
      
      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e) => {
      if (!mounted) setMounted(true);
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.matches('a, button, input, select, textarea, [role="button"], .cursor-pointer') ||
        !!target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer');
      
      setIsHovering(isInteractive); 
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-9999
        rounded-full mix-blend-difference
        transition-all duration-200 ease-out
        ${isHovering 
          ? 'w-15 h-15 bg-white/90 border-2 border-black -mt-6 -ml-6'
          : 'w-2 h-2 bg-white'                               
        }`}
      style={{ 
        opacity: 0,
        // transform: `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`
      }}
    />
  );
};

export default CustomCursor;