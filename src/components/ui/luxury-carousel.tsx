"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

interface LuxuryCarouselProps {
  items: React.ReactNode[];
  type?: "certifications" | "courses";
}

export function LuxuryCarousel({ items, type = "certifications" }: LuxuryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Configuration based on type
  const isPrimary = type === "certifications";
  const ITEM_WIDTH = isPrimary ? 340 : 280;
  const GAP = isPrimary ? 40 : 30;
  const SPACING = ITEM_WIDTH + GAP;
  
  const springConfig = { type: "spring", stiffness: 120, damping: 20, mass: 0.8 };

  useEffect(() => {
    setActiveIndex(Math.floor(items.length / 2));
  }, [items.length]);

  const handleDragEnd = (e: any, info: PanInfo) => {
    setTimeout(() => {
       isDragging.current = false;
    }, 50);

    const x = info.offset.x;
    const velocity = info.velocity.x;
    const dragThreshold = 40;

    let newIndex = activeIndex;

    if (x < -dragThreshold || velocity < -400) {
      newIndex = Math.min(activeIndex + 1, items.length - 1);
    } else if (x > dragThreshold || velocity > 400) {
      newIndex = Math.max(activeIndex - 1, 0);
    }

    setActiveIndex(newIndex);
  };


  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let timeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > 20) {
        e.preventDefault(); 
        if (!timeout) {
          if (e.deltaX > 0) {
            setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
          } else {
            setActiveIndex((prev) => Math.max(prev - 1, 0));
          }
          timeout = setTimeout(() => {
            timeout = undefined as any;
          }, 450); 
        }
      }
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full flex items-center justify-center overflow-visible",
        isPrimary ? "py-28 h-[440px]" : "py-20 h-[400px]"
      )}
    >
      <div className="relative w-full h-full max-w-full flex items-center justify-center perspective-[1200px]">
        {items.map((item, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          const baseScale = isPrimary ? 0.9 : 0.92;
          const activeScale = isPrimary ? 1.1 : 1.05;

          const scale = isActive ? activeScale : baseScale;
          const xPos = offset * SPACING;
          
          const zIndex = isActive ? 30 : 20 - Math.abs(offset);
          const opacity = isActive ? 1 : isPrimary ? 0.6 : 0.75;
          const rotateY = offset * -5;

          // Premium Glow Effects
          const activeBoxShadow = isPrimary
              ? "0 0 25px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.3)"
              : "0 0 20px rgba(168,85,247,0.4), 0 0 40px rgba(168,85,247,0.2)";

          const hoverBoxShadow = isPrimary
              ? "0 0 25px rgba(168,85,247,0.6), 0 0 60px rgba(168,85,247,0.4), 0 0 120px rgba(168,85,247,0.3)"
              : "0 0 20px rgba(168,85,247,0.4), 0 0 50px rgba(168,85,247,0.3), 0 0 100px rgba(168,85,247,0.2)";
          
          const inactiveBoxShadow = "0 0 15px rgba(168,85,247,0.1), 0 0 30px rgba(168,85,247,0.05)";

          return (
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => { isDragging.current = true; }}
              onDragEnd={handleDragEnd}
              onClickCapture={(e) => {
                if (isDragging.current) {
                  e.stopPropagation();
                  e.preventDefault();
                  return;
                }
                if (!isActive) {
                  e.stopPropagation();
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
              animate={{
                x: xPos,
                y: 0, // Base resting hover point
                scale,
                opacity,
                zIndex,
                rotateY,
                boxShadow: isActive ? activeBoxShadow : inactiveBoxShadow
              }}
              transition={springConfig}
              className={cn(
                "group absolute cursor-grab active:cursor-grabbing",
                "bg-[rgba(255,255,255,0.03)] backdrop-blur-[24px]", // Increased blur 
                "border border-[rgba(255,255,255,0.12)]",
                "rounded-[24px] overflow-visible", // Must be visible for the floating base!
                "flex items-center justify-center",
                "will-change-transform"
              )}
              style={{
                width: ITEM_WIDTH,
                height: "100%",
                WebkitBackdropFilter: "blur(24px)",
                touchAction: "pan-y",
              }}
            >
              {/* === THE NEW FLOATING BASE GLOW === */}
              <div 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-[rgba(168,85,247,0.6)] blur-[30px] rounded-full pointer-events-none transition-opacity duration-500"
                style={{ opacity: isActive ? 1 : 0 }}
              />

              {/* Separate bounded layer for internal reflections */}
              <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
                 {/* Radial Inner Glow Diffusion */}
                 <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.4),transparent_70%)] opacity-70" />

                 {/* Top + Left Edge Crisp Reflection Highlights */}
                 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                 <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/40 to-transparent opacity-50" />

                 {/* Diagonal Surface Sweep Effect */}
                 <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.15),transparent)] -translate-x-[150%] transition-transform duration-[1200ms] ease-in-out" />
              </div>

              {/* Content layer */}
              <div className="relative z-10 w-full h-full pointer-events-auto">
                {item}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
