"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-24"
    >
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-blue-500/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        {/* Elegant status badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full mb-10 animate-fade-in-down hover:border-primary/50 transition-all duration-300 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">Open to Opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Tirth Shah
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          AI Engineer & Full Stack Developer
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Specializing in <span className="text-primary font-semibold">Generative AI</span>, <span className="text-blue-500 font-semibold">RAG Systems</span>, and <span className="text-purple-500 font-semibold">Multi-Agent Architectures</span> with production-scale deployment experience
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link
            href="#contact"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 font-medium"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get In Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="#projects"
            className="group px-8 py-4 border-2 border-border rounded-xl hover:bg-accent hover:border-primary transition-all duration-300 hover:-translate-y-1 font-medium"
          >
            <span className="flex items-center gap-2">
              View Projects
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="https://www.linkedin.com/in/tirth-shah-bb2468269/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-14 h-14 flex items-center justify-center rounded-xl bg-accent border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="https://github.com/Tirth401"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-14 h-14 flex items-center justify-center rounded-xl bg-accent border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <div className="absolute inset-0 bg-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="mailto:tirthshah889@gmail.com"
            className="group relative w-14 h-14 flex items-center justify-center rounded-xl bg-accent border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            aria-label="Email"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="absolute inset-0 bg-green-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-6 py-3 rounded-xl hover:bg-accent"
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <Link href="#about" className="group flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-border/50 rounded-full p-1.5 group-hover:border-primary/50 transition-all duration-300">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-scroll" />
          </div>
          <span className="text-xs font-medium text-muted-foreground/60 group-hover:text-primary transition-colors uppercase tracking-wider">Explore</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;