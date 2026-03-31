"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function InteractiveParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ id: number, top: number, left: number, scale: number, duration: number, width: number, height: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    const timeoutId = setTimeout(() => {
      setParticles(
        Array.from({ length: 20 }).map((_, i) => ({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          scale: Math.random() * 0.5 + 0.5,
          duration: Math.random() * 3 + 4,
          width: Math.random() * 4 + 2,
          height: Math.random() * 4 + 2,
        }))
      );
    }, 0);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#020202]"
    >
      {/* Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Interactive Orbs */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(108,92,231,0.8) 0%, rgba(108,92,231,0) 70%)",
          x: mousePosition.x * 100,
          y: mousePosition.y * 100,
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(0,206,201,0.6) 0%, rgba(0,206,201,0) 70%)",
          x: mousePosition.x * -120,
          y: mousePosition.y * -120,
        }}
      />

      {/* Scroll Parallax Shapes */}
      <motion.div
        className="absolute left-[20%] top-[20%] w-[300px] h-[300px] rounded-full border border-white/5 opacity-30"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute right-[15%] top-[60%] w-[500px] h-[500px] border border-[#6c5ce7]/10 rounded-full opacity-40 rotate-45"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute left-[30%] bottom-[-10%] w-[800px] h-[800px] rounded-full border border-white/5 scale-[1.5] opacity-20"
        style={{ y: y3 }}
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          initial={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            scale: p.scale,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
          }}
        />
      ))}

      {/* Gradient Mask to fade top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90 z-10" />
    </div>
  );
}
