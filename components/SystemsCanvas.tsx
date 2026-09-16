"use client";

import { useEffect, useRef, useState } from "react";

const studies = [
  {
    name: "Knowledge",
    label: "CONNECTED THINKING",
    caption: "Finding meaning in the connections.",
    disciplines: "CONTEXT → RETRIEVAL → REASONING",
  },
  {
    name: "Evolution",
    label: "INTELLIGENCE, EVOLVED",
    caption: "Better solutions, one generation at a time.",
    disciplines: "SELECT → CROSSOVER → ADAPT",
  },
  {
    name: "Agents",
    label: "COLLECTIVE INTELLIGENCE",
    caption: "Small specialists. Shared possibilities.",
    disciplines: "PLAN → COLLABORATE → ACT",
  },
];

type Point = { x: number; y: number; z: number };
function position(row: number, col: number, mode: number): Point {
  const u = (row / 48) * Math.PI * 2;
  const v = (col / 24) * Math.PI * 2;
  if (mode === 1) {
    const t = row / 47;
    const angle = t * Math.PI * 4 + (col > 11 ? Math.PI : 0);
    const radius = 89 + Math.cos(v * 2) * 15;
    return {
      x: Math.cos(angle) * radius,
      y: (t - 0.5) * 350,
      z: Math.sin(angle) * radius + Math.sin(v * 2) * 15,
    };
  }
  if (mode === 2) {
    const r = 116 + 39 * Math.cos(3 * u);
    return {
      x: (r + 27 * Math.cos(v)) * Math.cos(2 * u),
      y: (r + 27 * Math.cos(v)) * Math.sin(2 * u),
      z: 72 * Math.sin(3 * u) + 27 * Math.sin(v),
    };
  }
  const r = 113 + 52 * Math.cos(v);
  return { x: r * Math.cos(u), y: r * Math.sin(u), z: 52 * Math.sin(v) };
}

export default function SystemsCanvas() {
  const [mode, setMode] = useState(0);
  const [playing, setPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotation = useRef({ x: 0.65, y: -0.5 });
  const drag = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame = 0;
    let visible = true;
    let last = 0;
    let previousFrame = "";
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    const onMotionChange = () => {
      reducedMotion = motionQuery.matches;
    };
    motionQuery.addEventListener("change", onMotionChange);
    const points = Array.from({ length: 48 * 24 }, (_, i) =>
      position(Math.floor(i / 24), i % 24, mode),
    );
    const draw = (time: number) => {
      frame = requestAnimationFrame(draw);
      if (!visible || document.hidden || time - last < 32) return;
      const elapsed = Math.min(time - last, 50);
      last = time;
      if (playing && !reducedMotion && !drag.current)
        rotation.current.y += elapsed * 0.00013;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const currentFrame = `${width}/${height}/${rotation.current.x}/${rotation.current.y}`;
      if (currentFrame === previousFrame) return;
      previousFrame = currentFrame;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (
        canvas.width !== Math.round(width * dpr) ||
        canvas.height !== Math.round(height * dpr)
      ) {
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width / 455, height / 390);
      const ax = rotation.current.x,
        ay = rotation.current.y;
      const projected = points.map((p) => {
        const x = p.x * Math.cos(ay) + p.z * Math.sin(ay);
        const z1 = -p.x * Math.sin(ay) + p.z * Math.cos(ay);
        const y = p.y * Math.cos(ax) - z1 * Math.sin(ax);
        const z = p.y * Math.sin(ax) + z1 * Math.cos(ax);
        const perspective = 650 / (650 - z);
        return {
          x: width / 2 + x * scale * perspective,
          y: height / 2 + y * scale * perspective,
          z,
        };
      });
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const opacity = 0.12 + ((p.z + 205) / 410) * 0.55;
        const next = i % 24 === 23 ? i - 23 : i + 1;
        const across = (i + 24) % projected.length;
        ctx.strokeStyle = `rgba(41,78,233,${opacity * 0.58})`;
        ctx.lineWidth = 0.65;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(projected[next].x, projected[next].y);
        if (mode !== 1 || i < projected.length - 24) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(projected[across].x, projected[across].y);
        }
        ctx.stroke();
        ctx.fillStyle = `rgba(33,66,211,${opacity + 0.15})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, (i % 29 === 0 ? 2.7 : 1.1) * scale, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    frame = requestAnimationFrame(draw);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, [mode, playing]);

  return (
    <div className="systems-study" ref={containerRef}>
      <div className="study-meta">
        <span>
          <span className="mini-cross">+</span> A STUDY IN INTELLIGENCE
        </span>
        <span>FIG. 0{mode + 1}</span>
      </div>
      <div className="study-art">
        <span className="art-coordinate coordinate-top">Y / POSSIBILITY</span>
        <span className="art-coordinate coordinate-bottom">X / CURIOSITY</span>
        <div className="art-orbit" aria-hidden="true" />
        <canvas
          ref={canvasRef}
          aria-label={`Interactive abstract ${studies[mode].name.toLowerCase()} sculpture. Select a study below to change the shape.`}
          role="img"
          onPointerDown={(e) => {
            if (e.pointerType === "touch") return;
            drag.current = { x: e.clientX, y: e.clientY };
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (!drag.current) return;
            rotation.current.y += (e.clientX - drag.current.x) * 0.008;
            rotation.current.x += (e.clientY - drag.current.y) * 0.008;
            drag.current = { x: e.clientX, y: e.clientY };
          }}
          onPointerUp={() => {
            drag.current = null;
          }}
          onPointerCancel={() => {
            drag.current = null;
          }}
        />
        <div className="art-tag tag-left">
          <span className="tag-square" /> ideas, connected
        </div>
        <div className="art-tag tag-right">
          built to evolve <span>↗</span>
        </div>
        <div className="art-interaction">
          <span className="drag-hint">↔ DRAG TO EXPLORE</span>
          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-label={
              playing ? "Pause sculpture animation" : "Play sculpture animation"
            }
          >
            {playing ? "Ⅱ" : "▷"}
          </button>
        </div>
      </div>
      <div className="study-caption" aria-live="polite">
        <span className="eyebrow">{studies[mode].label}</span>
        <p>{studies[mode].caption}</p>
      </div>
      <div
        className="study-controls"
        role="group"
        aria-label="Choose a visual study"
      >
        {studies.map((study, index) => (
          <button
            key={study.name}
            type="button"
            aria-pressed={mode === index}
            onClick={() => setMode(index)}
          >
            <span>0{index + 1}</span>
            {study.name}
          </button>
        ))}
      </div>
      <p className="study-process">
        {studies[mode].disciplines}
        <span>INTERACTIVE SKETCH</span>
      </p>
    </div>
  );
}
