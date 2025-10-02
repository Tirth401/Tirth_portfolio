"use client";

import React from "react";
import { Project } from "@/types";

const projects: Project[] = [
  {
    id: "0",
    title: "Enterprise eLearning Course Automation Pipeline",
    duration: "June 2025 - Present",
    description: "Automated end-to-end course creation system transforming outlines into fully structured, multimedia-rich courses deployed on Moodle",
    features: [
      "Engineered N8N automation workflow generating complete course structures from outlines, including sections, subsections, and content pages with AI-powered content generation",
      "Integrated HeyGen Template API for automated video creation with AI-generated actor scripts and synthetic voice narration synchronized to course modules",
      "Implemented Napkin AI API for dynamic graph generation, visualizing complex course concepts and data relationships automatically",
      "Built robust PostgreSQL database architecture for content versioning, metadata storage, and workflow state management",
      "Developed automated Moodle LMS deployment pipeline uploading structured courses with proper hierarchy, media assets, and assessments",
      "Orchestrated multi-agent system coordinating content generation, media synthesis, database operations, and platform deployment in unified workflow",
    ],
    technologies: ["n8n", "HeyGen API", "Napkin AI", "PostgreSQL", "Moodle LMS", "Claude/Anthropic", "LangChain", "Microsoft SharePoint", "Multi-Agent Systems", "RESTful APIs"],
    githubUrl: "https://github.com/Tirth401",
  },
  {
    id: "1",
    title: "Agentic AI Application Development using Langflow",
    duration: "Jan 2025 - Feb 2025",
    description: "AI-powered PDF summarizer with RAG capabilities using Langflow's drag-and-drop interface",
    features: [
      "Delivered an agentic AI-powered PDF summarizer with RAG capabilities using Langflow's drag-and-drop interface",
      "Enabled on-demand summary generation with a multi-agent system managing chat processing, database queries, and web searches",
      "Streamlined workflow execution by integrating Groq for LLM, Astra DB for vector storage, and Nvidia for embeddings",
      "Incorporated Model Context Protocol (MCP) for standardized context sharing across agents, ensuring consistent reasoning in dynamic workflows",
      "Leveraged Agent-2-Agent Protocol (A2A) to enable seamless inter-agent communication and task delegation in real time",
      "Built scalable architecture supporting real-time document analysis and knowledge retrieval",
    ],
    
    technologies: ["Langflow", "RAG", "Groq", "Astra DB", "NVIDIA Embeddings", "Multi-Agent Systems", "Python"],
    githubUrl: "https://github.com/Tirth401",
  },
  {
    id: "7",
    title: "NeuzNow - React Native News Application",
    duration: "Jan 2022 - May 2022",
    description: "Cross-platform mobile news aggregation app with real-time push notifications and categorized content delivery",
    features: [
      "Developed full-stack React Native mobile application with elegant, responsive UI for iOS and Android platforms",
      "Integrated Firebase Cloud Messaging for real-time push notifications delivering breaking news updates to users instantly",
      "Architected modular component structure with separate category sections enabling organized news browsing by topic",
      "Implemented RESTful API integration layer for seamless news data fetching and content synchronization",
      "Built navigation system with React Navigation providing intuitive user flow across multiple screens",
      "Deployed production-ready application on Vercel with external links for privacy policy and terms of service",
    ],
    technologies: ["React Native", "JavaScript", "Firebase", "Push Notifications", "REST APIs", "React Navigation", "Vercel", "Mobile Development"],
    githubUrl: "https://github.com/yash161/NeuzNow",
  },
  {
    id: "2",
    title: "Context-Aware Grammar Correction System",
    duration: "May 2024 - June 2024",
    description: "Real-time grammar correction model using transformer-based architectures",
    features: [
      "Developed grammar correction model using transformer-based architectures (BERT and T5) for real-time contextual language suggestions",
      "Implemented intuitive user interface for testing and feedback, ensuring scalability and adaptability",
      "Achieved high accuracy in context-aware grammar suggestions through advanced NLP techniques",
      "Designed for personalized grammar assistance at scale",
    ],
    technologies: ["Python", "BERT", "T5", "Transformers", "NLP", "Deep Learning", "Streamlit"],
    githubUrl: "https://github.com/Tirth401/Context-Aware-Grammar-Correction-System",
  },
  {
    id: "3",
    title: "Spam Detection System using Word2Vec",
    duration: "July 2024 - Sept 2024",
    description: "Advanced spam detection leveraging Word2Vec embeddings with 99.8% accuracy",
    features: [
      "Engineered advanced spam detection model leveraging Word2Vec and average Word2Vec embeddings, achieving 99.8% accuracy",
      "Architected scalable, user-friendly interface for real-time email classification",
      "Integrated testing and feedback mechanisms for personalized spam filtering",
      "Spearheaded end-to-end solution development using Python and machine learning libraries",
    ],
    technologies: ["Python", "Word2Vec", "NLP", "Machine Learning", "Scikit-learn", "Email Classification"],
    githubUrl: "https://github.com/Tirth401/Spam-Ham-using-Word2Vec",
  },
  {
    id: "4",
    title: "Churn Modelling using ANN",
    duration: "Apr 2024 - May 2024",
    description: "Employee turnover prediction using Artificial Neural Networks",
    features: [
      "Optimized data through wrangling and feature engineering, improving input quality and identifying key factors in employee turnover",
      "Achieved 20% increase in model relevance through advanced data preprocessing techniques",
      "Enhanced ANN performance by refining layer architecture, activation functions, and learning rates",
      "Achieved 15% boost in predictive accuracy for employee retention analysis",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "ANN", "Feature Engineering", "Data Analysis"],
    githubUrl: "https://github.com/Tirth401/ChurnModelling-using-ANN",
  },
  {
    id: "5",
    title: "House Price Prediction using Machine Learning",
    duration: "Feb 2024 - Mar 2024",
    description: "ML-based house price prediction with advanced regression techniques",
    features: [
      "Enhanced house price prediction accuracy by 18% using AdaBoost regression and feature selection techniques",
      "Reduced overfitting through ensemble methods and cross-validation",
      "Leveraged Snowflake for efficient data storage and seamless integration of diverse datasets",
      "Utilized Tableau to visualize key findings and presented project outcomes to senior leaders",
    ],
    technologies: ["Python", "AdaBoost", "Regression", "Snowflake", "Tableau", "Feature Selection"],
    githubUrl: "https://github.com/Tirth401",
  },
  {
    id: "6",
    title: "Credit Card Fraud Detection System",
    duration: "Jan 2024 - Apr 2024",
    description: "Scalable fraud detection system using big data technologies",
    features: [
      "Engineered scalable data pipeline using Hadoop and Hive to process high-volume financial transactions",
      "Deployed machine learning models with Python and PySpark, improving fraud detection accuracy by 30%",
      "Visualized fraud patterns in Tableau, empowering stakeholders with actionable insights",
      "Built dynamic dashboards for real-time fraud monitoring and analysis",
    ],
    technologies: ["Python", "Hadoop", "Hive", "PySpark", "Machine Learning", "Tableau", "Big Data"],
    githubUrl: "https://github.com/Tirth401",
  },
  {
    id: "8",
    title: "Stock Price Alert System",
    duration: "Jan 2022 - May 2022",
    description: "Real-time stock monitoring and alert system",
    features: [
      "Built scalable system integrating Python with financial APIs for real-time stock alerts",
      "Shortened response to price movements, reducing time-to-action by 25%",
      "Implemented automated notification system for price threshold triggers",
      "Designed efficient data pipeline for real-time market data processing",
    ],
    technologies: ["Python", "Financial APIs", "Real-time Processing", "Automation", "Data Pipeline"],
    githubUrl: "https://github.com/Tirth401",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-accent/50 via-background to-accent/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Projects</h2>
          <p className="text-muted-foreground text-lg">Building innovative solutions with cutting-edge technology</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                {/* Enhanced Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
                  <svg className="w-20 h-20 text-primary/30 group-hover:scale-110 transition-transform duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  {/* Animated background shapes */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary mb-3">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.duration}
                  </span>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-4 flex-1">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featIndex) => (
                      <li key={featIndex} className="text-sm text-muted-foreground flex items-start gap-2 group/item">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary rounded-full group-hover/item:scale-150 transition-transform" />
                        <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent hover:bg-primary/20 border border-border hover:border-primary text-xs rounded-lg transition-all duration-200 hover:scale-105 cursor-default font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-xs rounded-lg font-medium text-primary">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 px-4 py-2 bg-accent hover:bg-primary/20 border border-border hover:border-primary rounded-lg text-sm transition-all duration-200 hover:scale-105 font-medium"
                    >
                      <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:shadow-lg transition-all duration-200 hover:scale-105 font-medium"
                    >
                      <svg className="w-4 h-4 group-hover/link:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;