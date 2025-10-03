export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  description: string;
  features: string[];
  technologies: string[];
  category: "Machine Learning" | "Software Development" | "Agentic AI" | "Data Engineering";
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}
