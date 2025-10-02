"use client";

import React from "react";
import type { Experience } from "@/types";

const experiences: Experience[] = [
  {
    id: "1",
    title: "AI Developer Co-Op",
    company: "ONLC Training Centers",
    location: "Remote, USA",
    duration: "June 2025 — Present",
    description: [
      "Reduced content production time and manual workload across teams by building and deploying a live enterprise workflow with n8n and launching eLearning pipelines that transformed Markdown into engaging assets using Heygen and ElevenLabs",
      "Delivered contextual knowledge retrieval in production by shipping a modular, agent-driven architecture supporting real-time decisions and enterprise-scale knowledge interaction",
      "Engineered internal AI tools with Python, SQL, and OpenAI APIs; implemented semantic search, RAG, and generative agents via LangChain, GraphRAG, and Hugging Face",
      "Integrated Neo4j for graph reasoning and Postgres for structured storage, elevating communication for thousands of learners and business stakeholders",
    ],
    technologies: ["Python", "n8n", "LangChain", "GraphRAG", "OpenAI API", "Neo4j", "PostgreSQL", "RAG", "Hugging Face"],
  },
  {
    id: "2",
    title: "Research Assistant",
    company: "California State University Los Angeles",
    location: "Los Angeles, California",
    duration: "Sept 2024 — Present",
    description: [
      "Advanced AI research efforts by evaluating literature, training machine learning models, and executing simulations for advanced data analysis",
      "Disseminated findings effectively to academic and professional audiences through co-authored technical reports and research presentations",
      "Collaborated on cutting-edge AI research projects focusing on advanced machine learning and deep learning applications",
    ],
    technologies: ["Python", "Machine Learning", "Deep Learning", "Research", "Technical Writing"],
  },
  {
    id: "3",
    title: "Data Science Intern",
    company: "Prayosha Food Services Pvt. Ltd.",
    location: "Gujarat, India",
    duration: "Jan 2024 — May 2024",
    description: [
      "Elevated predictive accuracy by 20% and shortened training cycles by 30% through engineering and optimizing deep learning models using TensorFlow and PyTorch",
      "Implemented advanced preprocessing, feature engineering, and dimensionality reduction techniques",
      "Integrated Hadoop to handle large-scale datasets efficiently",
      "Accelerated stakeholder decision cycles by 25% by building interactive Tableau dashboards that translated complex datasets into actionable visuals",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Hadoop", "Tableau", "Deep Learning", "Feature Engineering"],
  },
  {
    id: "4",
    title: "Python Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    location: "Gujarat, India",
    duration: "Aug 2023 — Sept 2023",
    description: [
      "Automated workflows using Python scripts, increasing operational efficiency by 30%",
      "Designed a web scraping solution using Pandas, NumPy, and BeautifulSoup, enabling multi-source data aggregation",
      "Optimized data analysis for strategic insights through efficient data processing pipelines",
    ],
    technologies: ["Python", "Pandas", "NumPy", "BeautifulSoup", "Web Scraping", "Automation"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey in tech</p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-blue-500 to-purple-500 rounded-full" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Enhanced Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 z-20 top-8">
                <div className="relative w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="group ml-10 md:ml-0 relative">
                  {/* Gradient background */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <div className="relative bg-card p-8 rounded-2xl border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Status badge */}
                    {index === 0 && (
                      <div className="absolute -top-3 -right-3 px-4 py-1 bg-green-500 text-white rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        Current
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <p className="text-primary font-semibold text-lg">{exp.company}</p>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-6 flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-3 group/item">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary rounded-full group-hover/item:scale-150 transition-transform" />
                          <span className="group-hover/item:text-foreground transition-colors">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-accent hover:bg-primary/20 border border-border hover:border-primary text-xs rounded-lg transition-all duration-200 hover:scale-105 cursor-default font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;