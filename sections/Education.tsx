"use client";

import React from "react";
import type { Education } from "@/types";

const educationData: Education[] = [
  {
    id: "1",
    degree: "Master of Science (MS), Computer Science",
    institution: "California State University Los Angeles",
    location: "Los Angeles, California",
    duration: "Aug 2024 — May 2026",
    gpa: "4.00/4.00",
    achievements: [
      "Graduate Research Assistant",
      "Relevant Coursework: Advanced Data Structures & Algorithms, Big Data, Advanced Machine Learning & Deep Learning, Advanced Software Engineering, Advanced Web Programming, Computer and Network Security, Data Visualization, Advanced Database Systems"
    ],
  },
  {
    id: "2",
    degree: "Bachelor of Technology (B.Tech), Computer Engineering",
    institution: "LJ Institute of Engineering and Technology",
    location: "Ahmedabad, Gujarat, India",
    duration: "Aug 2020 — June 2024",
    gpa: "3.82/4.00 (CGPA: 8.49/10)",
    achievements: [
      "Academic Excellence - Consistent high performance across all semesters",
      "Key Coursework: Data Structures, Algorithms, Machine Learning, Artificial Intelligence, Database Management, Computer Networks, Software Engineering"
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-accent/50 via-background to-accent/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">My academic journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="group relative"
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-card rounded-2xl border border-border p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-primary mb-4 font-semibold text-lg">{edu.degree}</p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4 gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </div>

                {edu.gpa && (
                  <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="text-sm font-medium text-muted-foreground mr-2">GPA:</span>
                    <span className="text-lg font-bold text-green-500">{edu.gpa}</span>
                  </div>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full" />
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2 group/item">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary rounded-full group-hover/item:scale-150 transition-transform" />
                          <span className="group-hover/item:text-foreground transition-colors">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;