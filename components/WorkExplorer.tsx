"use client";

import { useState } from "react";
import Arrow from "./Arrow";
import styles from "./WorkExplorer.module.css";

type Step = {
  label: string;
  tool: string;
  title: string;
  description: string;
  icon:
    "documents" | "network" | "answer" | "data" | "selection" | "prediction";
};
const projects: {
  tab: string;
  context: string;
  title: string;
  summary: string;
  steps: Step[];
  outcomes: { value: string; label: string }[];
  link: string;
  linkLabel: string;
}[] = [
  {
    tab: "Production AI",
    context: "ONLC TRAINING CENTERS / KNOWLEDGE RETRIEVAL",
    title: "Making knowledge useful.",
    summary:
      "I built a retrieval system that helps learners get answers from connected knowledge.",
    steps: [
      {
        label: "Learning knowledge",
        tool: "Knowledge sources",
        icon: "documents",
        title: "Start with the right context.",
        description:
          "The starting point is the knowledge learners need. My system makes that context available to a retrieval workflow.",
      },
      {
        label: "Find relevant context",
        tool: "LangChain + Neo4j",
        icon: "network",
        title: "Connect the knowledge to the question.",
        description:
          "I built the retrieval layer with LangChain, GraphRAG, and Neo4j to bring relevant context into each answer.",
      },
      {
        label: "Answer the learner",
        tool: "Production RAG",
        icon: "answer",
        title: "Make it useful in the real world.",
        description:
          "The production system handles more than 1,000 queries a day at under two seconds of latency, supporting over 1,000 learners.",
      },
    ],
    outcomes: [
      { value: "1K+", label: "queries every day" },
      { value: "<2s", label: "response latency" },
    ],
    link: "#project-01",
    linkLabel: "Explore my work at ONLC",
  },
  {
    tab: "ML research",
    context: "CAL STATE LA / SAGAFS RESEARCH",
    title: "Finding the features that matter.",
    summary:
      "I developed an adaptive genetic algorithm to make biomedical machine learning more efficient.",
    steps: [
      {
        label: "Biomedical data",
        tool: "18 datasets",
        icon: "data",
        title: "A lot of data. A feature-selection problem.",
        description:
          "I evaluated the framework across 18 biomedical datasets and more than 20 machine learning models.",
      },
      {
        label: "Select useful features",
        tool: "SAGAFS genetic algorithm",
        icon: "selection",
        title: "Search for better feature combinations.",
        description:
          "I developed Species Adaptive Genetic Algorithm for Feature Selection, using SSOCF crossover and dynamic mutation to improve the search.",
      },
      {
        label: "Evaluate the models",
        tool: "Predictive performance",
        icon: "prediction",
        title: "Measure accuracy and computational cost.",
        description:
          "The research achieved a 94% F1 score and demonstrated a 60% computational reduction. The framework was adopted by an external research lab.",
      },
    ],
    outcomes: [
      { value: "94%", label: "F1 score" },
      { value: "60%", label: "less computation" },
    ],
    link: "#project-02",
    linkLabel: "Explore the SAGAFS research",
  },
  {
    tab: "Agentic app",
    context: "ACADEMIC PROJECT / MULTI-AGENT RAG",
    title: "From a PDF to a useful answer.",
    summary:
      "I connected document retrieval and AI agents to a full-stack application with streamed responses.",
    steps: [
      {
        label: "Retrieve from a PDF",
        tool: "Embeddings + Astra DB",
        icon: "documents",
        title: "Give the answer a source.",
        description:
          "I used NVIDIA embeddings and Astra DB vector storage in a multi-agent RAG pipeline for PDF summarization and retrieval.",
      },
      {
        label: "Coordinate the tools",
        tool: "Langflow + Groq",
        icon: "network",
        title: "Bring the right tools into the workflow.",
        description:
          "I connected retrieval, web search, and database queries through Langflow workflows, with Groq for inference.",
      },
      {
        label: "Stream the response",
        tool: "React + WebSockets",
        icon: "answer",
        title: "Build the interface around the system.",
        description:
          "I delivered a React and Node.js interface with WebSocket streaming and JWT authentication. The pipeline achieved 95% retrieval accuracy.",
      },
    ],
    outcomes: [
      { value: "95%", label: "retrieval accuracy" },
      { value: "40%", label: "less development time" },
    ],
    link: "#project-03",
    linkLabel: "Explore the agentic application",
  },
];

function StepIcon({ type }: { type: Step["icon"] }) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "documents" && (
        <>
          <path d="M19 9h23l7 7v30H19zM42 9v9h7M14 15h-4v36h28v-5M25 25h17M25 31h17M25 37h10" />
          <path d="m41 9 8 7" />
        </>
      )}
      {type === "network" && (
        <>
          <path
            d="m17 12 30 3-15 13-18 15 35-1-17-14-15-16-3 31m33-28 2 27M17 12l32 30M14 43l33-28"
            opacity=".45"
          />
          <circle cx="17" cy="12" r="4" />
          <circle cx="47" cy="15" r="4" />
          <circle cx="14" cy="43" r="4" />
          <circle cx="49" cy="42" r="4" />
          <circle cx="32" cy="28" r="6" fill="currentColor" stroke="none" />
        </>
      )}
      {type === "answer" && (
        <>
          <path d="M12 11h40v29H28L17 48v-8h-5zM20 21h24M20 27h17" />
          <path d="m38 33 3 3 5-6" />
        </>
      )}
      {type === "data" && (
        <>
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={12 + c * 9}
                y={12 + r * 9}
                width="5"
                height="5"
                rx=".7"
                opacity={(r + c) % 3 === 0 ? 1 : 0.35}
                fill={(r + c) % 3 === 0 ? "currentColor" : "none"}
              />
            )),
          )}
        </>
      )}
      {type === "selection" && (
        <>
          <path d="M14 10c32 0 4 36 36 36M50 10c-32 0-4 36-36 36" />
          <path
            d="M18 13h28M22 19h20M26 25h12M26 31h12M22 37h20M18 43h28"
            opacity=".5"
          />
          <circle cx="32" cy="28" r="4" fill="currentColor" stroke="none" />
        </>
      )}
      {type === "prediction" && (
        <>
          <path d="M12 10v36h42M20 38l10-13 9 6 13-17" />
          <circle cx="20" cy="38" r="2" fill="currentColor" />
          <circle cx="30" cy="25" r="2" fill="currentColor" />
          <circle cx="39" cy="31" r="2" fill="currentColor" />
          <circle cx="52" cy="14" r="2" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

export default function WorkExplorer() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(1);
  const project = projects[projectIndex];
  const step = project.steps[stepIndex];
  return (
    <aside className={styles.explorer} aria-labelledby="explorer-title">
      <div className={styles.topline}>
        <span className={styles.marker} aria-hidden="true">
          ↳
        </span>
        <h2 id="explorer-title">What I build, and how it works.</h2>
      </div>
      <div
        className={styles.projectTabs}
        role="group"
        aria-label="Choose a project to explore"
      >
        {projects.map((item, index) => (
          <button
            key={item.tab}
            type="button"
            aria-pressed={index === projectIndex}
            onClick={() => {
              setProjectIndex(index);
              setStepIndex(1);
            }}
          >
            <span>0{index + 1}</span>
            {item.tab}
          </button>
        ))}
      </div>
      <div className={styles.projectIntro} aria-live="polite">
        <p className={styles.context}>{project.context}</p>
        <h3>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
      </div>
      <div className={styles.flowLabel}>
        <span>SIMPLIFIED PROJECT FLOW</span>
        <span>Select a step below ↓</span>
      </div>
      <ol className={styles.flow} aria-label={`${project.tab} workflow`}>
        {project.steps.map((item, index) => (
          <li key={item.label}>
            <button
              type="button"
              aria-pressed={index === stepIndex}
              aria-controls="work-step-detail"
              onClick={() => setStepIndex(index)}
              className={index === stepIndex ? styles.selectedStep : undefined}
            >
              <span className={styles.stepNumber}>0{index + 1}</span>
              <StepIcon type={item.icon} />
              <span className={styles.stepLabel}>{item.label}</span>
              <span className={styles.stepTool}>{item.tool}</span>
            </button>
            {index < 2 && (
              <span className={styles.connector} aria-hidden="true">
                <Arrow direction="right" />
              </span>
            )}
          </li>
        ))}
      </ol>
      <div
        className={styles.stepDetail}
        id="work-step-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className={styles.detailIndex}>0{stepIndex + 1}</span>
        <div>
          <h4>{step.title}</h4>
          <p>{step.description}</p>
        </div>
      </div>
      <div className={styles.outcomes} aria-live="polite">
        {project.outcomes.map((outcome) => (
          <div key={outcome.label}>
            <strong>{outcome.value}</strong>
            <span>{outcome.label}</span>
          </div>
        ))}
        <span className={styles.outcomeLabel}>
          THE
          <br />
          RESULT
        </span>
      </div>
      <a href={project.link} className={styles.projectLink}>
        {project.linkLabel}
        <Arrow />
      </a>
    </aside>
  );
}
