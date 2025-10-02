"use client";

import React, { useEffect, useState, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Position[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const requestRef = useRef<number>();

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      
      // Check if hovering over clickable elements
      const isClickable = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsPointer(isClickable);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Create trailing effect
  useEffect(() => {
    const updateTrail = () => {
      setTrail((prevTrail) => {
        const newTrail = [{ x: position.x, y: position.y }, ...prevTrail];
        // Keep only the last 12 positions for a longer trail
        return newTrail.slice(0, 12);
      });
      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  return (
    <>
      {/* Trail dots */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className={`custom-cursor-trail ${isHidden ? "opacity-0" : ""}`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (1 - index / trail.length) * 0.8,
            transform: `translate(-50%, -50%) scale(${1 - index / trail.length * 0.5})`,
          }}
        />
      ))}

      {/* Main cursor dot */}
      <div
        className={`custom-cursor-dot ${isHidden ? "opacity-0" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer 
            ? "translate(-50%, -50%) scale(0.5)" 
            : "translate(-50%, -50%) scale(1)",
        }}
      />
      
      {/* Cursor ring/circle */}
      <div
        className={`custom-cursor-ring ${isHidden ? "opacity-0" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer 
            ? "translate(-50%, -50%) scale(1.5)" 
            : "translate(-50%, -50%) scale(1)",
        }}
      />
    </>
  );
};

export default CustomCursor;

