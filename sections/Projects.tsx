"use client";

import React, { useState } from "react";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: "0",
    title: "SAGAFS-GA: Evolutionary Feature Selection Framework",
    duration: "June 2024 - Dec 2024",
    description: "Advanced feature selection algorithm combining Simulated Annealing and Genetic Algorithms for optimizing machine learning classification across 16 benchmark datasets",
    features: [
      "Architected hybrid evolutionary algorithm combining Genetic Algorithm (GA) and Simulated Annealing (SA) for intelligent feature selection, achieving 14.9% AUC improvement on benchmark datasets",
      "Implemented sophisticated SSOCF crossover strategy with dynamic rate adaptation, elitism preservation, and temperature-based optimization for escaping local optima",
      "Engineered automated pipeline integrating GridSearchCV hyperparameter tuning with K-Nearest Neighbors classifier and 5-fold stratified cross-validation",
      "Validated framework across 16 diverse UCI Machine Learning Repository datasets ranging from 4 to 279 features and 150 to 5,000 samples",
      "Built comprehensive result tracking system with generation-by-generation fitness evolution, feature importance heatmaps, and performance metric visualization",
      "Reduced feature dimensionality by up to 60% while maintaining or improving classification accuracy, demonstrating practical impact for real-world ML applications",
    ],
    technologies: ["Python", "Genetic Algorithms", "Simulated Annealing", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Jupyter", "GridSearchCV", "Feature Engineering"],
    category: "Machine Learning",
    githubUrl: "https://github.com/BhavenChheda790/PepAMC-Peptide-Antimicrobial-Classifier-",
  },
  {
    id: "1",
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
    category: "Agentic AI",
    githubUrl: "https://github.com/Tirth401",
  },
  {
    id: "2",
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
    category: "Agentic AI",
    githubUrl: "https://github.com/Tirth401",
  },
  {
    id: "3",
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
    category: "Software Development",
    githubUrl: "https://github.com/yash161/NeuzNow",
  },
  {
    id: "4",
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
    category: "Machine Learning",
    githubUrl: "https://github.com/Tirth401/Context-Aware-Grammar-Correction-System",
  },
  {
    id: "5",
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
    category: "Machine Learning",
    githubUrl: "https://github.com/Tirth401/Spam-Ham-using-Word2Vec",
  },
  {
    id: "6",
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
    category: "Machine Learning",
    githubUrl: "https://github.com/Tirth401/ChurnModelling-using-ANN",
  },
  {
    id: "7",
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
    category: "Machine Learning",
    githubUrl: "https://github.com/Tirth401",
  },
  {
    id: "8",
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
    category: "Data Engineering",
    githubUrl: "https://github.com/Tirth401",
  },
  {
    id: "9",
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
    category: "Software Development",
    githubUrl: "https://github.com/Tirth401",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
  
  // Function to get project-specific visual
  const getProjectVisual = (projectId: string) => {
    switch (projectId) {
      case "0": // SAGAFS-GA
        return (
          <div className="relative h-48 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            {/* DNA/Genetic Algorithm visualization */}
            <div className="relative z-10 flex items-center justify-center">
              <svg className="w-24 h-24 text-purple-400/40 absolute animate-pulse" viewBox="0 0 100 100">
                <path d="M20,20 Q50,40 80,20 Q50,0 20,20" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M20,40 Q50,60 80,40 Q50,20 20,40" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M20,60 Q50,80 80,60 Q50,40 20,60" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="20" cy="20" r="3" fill="currentColor"/>
                <circle cx="80" cy="20" r="3" fill="currentColor"/>
                <circle cx="20" cy="60" r="3" fill="currentColor"/>
                <circle cx="80" cy="60" r="3" fill="currentColor"/>
              </svg>
              <div className="text-6xl">🧬</div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      case "1": // eLearning
        return (
          <div className="relative h-48 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-green-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <div className="relative z-10 text-6xl">🎓</div>
            <svg className="absolute w-16 h-16 text-blue-400/20 top-4 right-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      case "2": // Langflow AI
        return (
          <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <div className="relative z-10 text-6xl">🤖</div>
            <svg className="absolute w-20 h-20 text-indigo-400/20 bottom-4 left-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <circle cx="9" cy="10" r="1" fill="currentColor"/>
              <circle cx="15" cy="10" r="1" fill="currentColor"/>
              <path d="M9 15 Q12 17 15 15" strokeWidth="2"/>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      case "3": // NeuzNow
        return (
          <div className="relative h-48 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <div className="relative z-10 text-6xl">📱</div>
            <svg className="absolute w-12 h-12 text-red-400/20 top-6 right-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      case "4": // Grammar Correction
        return (
          <div className="relative h-48 bg-gradient-to-br from-teal-500/20 via-green-500/20 to-emerald-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <div className="relative z-10 text-6xl">✍️</div>
            <svg className="absolute w-16 h-16 text-teal-400/20 top-4 left-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth="2"/>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      case "5": // Spam Detection
        return (
          <div className="relative h-48 bg-gradient-to-br from-rose-500/20 via-red-500/20 to-orange-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <div className="relative z-10 text-6xl">📧</div>
            <svg className="absolute w-16 h-16 text-rose-400/20 bottom-4 right-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <line x1="15" y1="9" x2="9" y2="15" strokeWidth="2"/>
              <line x1="9" y1="9" x2="15" y2="15" strokeWidth="2"/>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      case "6": // Churn Modelling
        return (
          <div className="relative h-48 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <div className="relative z-10 text-6xl">📊</div>
            <svg className="absolute w-16 h-16 text-violet-400/20 top-4 right-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeWidth="2"/>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      case "7": // House Price
        return (
          <div className="relative h-48 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <div className="relative z-10 text-6xl">🏠</div>
            <svg className="absolute w-16 h-16 text-amber-400/20 bottom-4 left-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth="2"/>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      case "8": // Fraud Detection
        return (
          <div className="relative h-48 bg-gradient-to-br from-red-600/20 via-rose-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <div className="relative z-10 text-6xl">💳</div>
            <svg className="absolute w-16 h-16 text-red-400/20 top-4 left-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeWidth="2"/>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      case "9": // Stock Alert
        return (
          <div className="relative h-48 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <div className="relative z-10 text-6xl">📈</div>
            <svg className="absolute w-16 h-16 text-green-400/20 top-4 right-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeWidth="2"/>
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
      default:
        return (
          <div className="relative h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
            <svg className="w-20 h-20 text-primary/30 group-hover:scale-110 transition-transform duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full filter blur-xl group-hover:scale-125 transition-transform duration-700" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-accent/50 via-background to-accent/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Projects</h2>
          <p className="text-muted-foreground text-lg mb-8">Building innovative solutions with cutting-edge technology</p>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg shadow-primary/50'
                    : 'bg-accent hover:bg-accent/80 text-foreground border border-border hover:border-primary/50'
                }`}
              >
                {category}
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === category 
                    ? 'bg-white/20' 
                    : 'bg-primary/10'
                }`}>
                  {category === "All" ? projects.length : projects.filter(p => p.category === category).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                {/* Enhanced Project Image with custom visuals */}
                {getProjectVisual(project.id)}

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