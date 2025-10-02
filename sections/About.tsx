"use client";

import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-accent/50 via-background to-accent/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced Avatar */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary to-blue-500 p-1.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20" />
                  <img 
                    src="/Tirth_img_2.jpg" 
                    alt="Tirth Shah" 
                    className="w-full h-full object-cover rounded-full relative z-10"
                    style={{
                      objectPosition: 'center center', // Adjust: 'left/right/center X%' 'top/bottom/center Y%'
                      transform: 'scale(1.1) translate(0%, 0%)' // Adjust: scale(zoom) translate(horizontal, vertical)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Currently at Cal State LA</span>
            </div>

            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              AI Engineer & Full Stack Developer
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              I'm an AI Engineer specializing in building enterprise-scale AI systems with 
              expertise in <span className="text-primary font-semibold">Generative AI</span>, <span className="text-blue-500 font-semibold">RAG architectures</span>, and <span className="text-purple-500 font-semibold">Multi-Agent Systems</span>. Currently 
              pursuing my Master's in Computer Science at Cal State LA with a perfect 4.0 GPA, 
              I combine academic excellence with hands-on production experience.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              At ONLC Training Centers, I've deployed live enterprise AI workflows using n8n, 
              LangChain, GraphRAG, and vector databases. I specialize in building modular, 
              agent-driven architectures that deliver real-time contextual knowledge retrieval 
              at production scale, working with tools like Neo4j, Postgres, and Hugging Face.
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold">Los Angeles, CA</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-semibold text-sm">tirthshah889@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-semibold">+1 (949) 838-4088</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Education</p>
                  <p className="font-semibold text-sm">MS in CS</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 font-medium"
              >
                <span className="relative z-10">Contact Me</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-xl hover:bg-accent hover:border-primary transition-all duration-300 hover:-translate-y-1 font-medium"
              >
                Download CV
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;