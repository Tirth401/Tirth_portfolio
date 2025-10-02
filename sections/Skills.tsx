"use client";

import React from "react";
import type { Skill } from "@/types";

const skills: Skill[] = [
  {
    category: "Programming & Scripting",
    items: ["Python", "C++", "JavaScript", "HTML/CSS", "PHP", "SQL"],
  },
  {
    category: "AI & Machine Learning",
    items: ["Generative AI", "RAG (Retrieval-Augmented Generation)", "GraphRAG", "REFRAG", "Multi-Agent Systems", "NLP", "Deep Learning", "Machine Learning", "Computer Vision"],
  },
  {
    category: "LLMs & AI Frameworks",
    items: ["LangChain", "LangGraph", "OpenAI API", "AWS Bedrock", "Groq", "Hugging Face", "NVIDIA Embeddings", "Prompt Engineering"],
  },
  {
    category: "Databases & Vector Storage",
    items: ["Vector Databases", "Neo4j", "Astra DB", "PostgreSQL", "MySQL", "MongoDB", "Snowflake", "BigQuery"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Amazon Web Services (AWS)", "Azure", "Docker", "n8n", "Langflow", "Git", "Hadoop", "Apache Spark"],
  },
  {
    category: "Data Science & Analytics",
    items: ["TensorFlow", "PyTorch", "Tableau", "PowerBI", "Pandas", "NumPy", "Statistics", "Feature Engineering", "Dimensionality Reduction"],
  },
  {
    category: "Web Technologies",
    items: ["Streamlit", "FastAPI", "RESTful APIs", "Web Scraping", "BeautifulSoup"],
  },
];

const categoryIcons: { [key: string]: string } = {
  "Programming & Scripting": "💻",
  "AI & Machine Learning": "🤖",
  "LLMs & AI Frameworks": "🧠",
  "Databases & Vector Storage": "🗄️",
  "Cloud & DevOps": "☁️",
  "Data Science & Analytics": "📊",
  "Web Technologies": "🌐",
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">My technical toolkit for building innovative solutions</p>
        </div>

        <div className="grid gap-6 mb-16">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle gradient glow on hover only */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-blue-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {categoryIcons[skillCategory.category]}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="hidden sm:block">
                    <span className="px-4 py-2 bg-accent rounded-full text-sm font-medium text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                      {skillCategory.items.length} Skills
                    </span>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="group/skill relative px-4 py-2.5 bg-accent/50 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-xl text-sm font-medium transition-all duration-300 cursor-default hover:scale-105 hover:shadow-md overflow-hidden"
                      style={{
                        animationDelay: `${skillIndex * 30}ms`,
                      }}
                    >
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                      <span className="relative z-10">{skill}</span>
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Skills Visualization with consistent styling */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card rounded-2xl border border-border p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-accent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 70 * 0.95} ${2 * Math.PI * 70}`}
                    className="text-primary transition-all duration-1000 group-hover:stroke-dashoffset-[50]"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-br from-primary to-blue-500 bg-clip-text text-transparent">95%</span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">AI/ML & GenAI</h4>
              <p className="text-sm text-muted-foreground">RAG, LLMs, Multi-Agent Systems</p>
              <div className="mt-4 flex justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card rounded-2xl border border-border p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-accent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 70 * 0.90} ${2 * Math.PI * 70}`}
                    className="text-blue-500 transition-all duration-1000 group-hover:stroke-dashoffset-[50]"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">90%</span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Data Science & Analytics</h4>
              <p className="text-sm text-muted-foreground">Python, TensorFlow, PyTorch, Tableau</p>
              <div className="mt-4 flex justify-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card rounded-2xl border border-border p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-accent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 70 * 0.85} ${2 * Math.PI * 70}`}
                    className="text-green-500 transition-all duration-1000 group-hover:stroke-dashoffset-[50]"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-br from-green-500 to-emerald-500 bg-clip-text text-transparent">85%</span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Cloud & Backend</h4>
              <p className="text-sm text-muted-foreground">AWS, Docker, Databases, APIs</p>
              <div className="mt-4 flex justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with consistent styling */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Technologies", delay: "0ms" },
            { value: "7", label: "Specializations", delay: "100ms" },
            { value: "4.0", label: "GPA", delay: "200ms" },
            { value: "7+", label: "Major Projects", delay: "300ms" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: stat.delay }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;