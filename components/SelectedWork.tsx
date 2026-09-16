"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SelectedWork.module.css";

type Category = "All work" | "AI systems" | "Research" | "Applications";
type Project = {
  id: string;
  name: string;
  context: string;
  category: Exclude<Category, "All work">;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  problem: string;
  build: string;
  impact: string;
  repo?: string;
};

const projects: Project[] = [
  {
    id: "01",
    name: "Knowledge, connected.",
    context: "ONLC Training Centers · Production AI",
    category: "AI systems",
    description:
      "A production RAG system and an eLearning suite that turn knowledge into answers, and ideas into learning content.",
    tags: ["LangChain", "GraphRAG", "Neo4j", "Python"],
    metric: "1,000+",
    metricLabel: "queries served daily",
    problem:
      "Make learning content easier to create and organizational knowledge easier to access, across teams and a growing learner community.",
    build:
      "Architected a production RAG system using LangChain, GraphRAG, and Neo4j. Engineered an end-to-end eLearning platform in Python and TypeScript, integrating HeyGen and ElevenLabs APIs. Standardized service deployments with CI/CD, Traefik, Nginx, and Cloudflare.",
    impact:
      "The RAG system serves more than 1,000 queries per day at under 2 seconds of latency, supporting AI adoption for over 1,000 learners. The eLearning suite accelerated content production by 70% across five teams.",
  },
  {
    id: "02",
    name: "Less noise. More signal.",
    context: "SAGAFS · Machine learning research",
    category: "Research",
    description:
      "An adaptive genetic algorithm that finds the features that matter across complex biomedical datasets.",
    tags: ["Genetic algorithms", "Python", "Machine learning"],
    metric: "94%",
    metricLabel: "F1 score achieved",
    problem:
      "Identify useful features in biomedical data while reducing the computational cost of evaluating large feature spaces.",
    build:
      "Pioneered SAGAFS: Species Adaptive Genetic Algorithm for Feature Selection, optimizing more than 20 machine learning models across 18 biomedical datasets. Applied SSOCF crossover and dynamic mutation rates to drug discovery screening, and authored research for an IEEE international conference.",
    impact:
      "Reached a 94% F1 score and demonstrated a 60% computational reduction. Accelerated drug discovery screening by 75%, analyzing over 10,000 sequences in under five minutes. The open-source framework was adopted by an external research lab.",
  },
  {
    id: "03",
    name: "A workflow with agency.",
    context: "Agentic AI · Full-stack application",
    category: "AI systems",
    description:
      "Multi-agent retrieval, fast inference, and real-time answers—connected in one full-stack application.",
    tags: ["Langflow", "Groq", "Astra DB", "React"],
    metric: "95%",
    metricLabel: "retrieval accuracy",
    problem:
      "Bring PDF summarization, automated web search, and database queries into a flexible application with a responsive conversational interface.",
    build:
      "Built a multi-agent RAG pipeline with Langflow, Groq inference, Astra DB vector storage, and NVIDIA embeddings. Delivered it through a React and Node.js interface with WebSocket streaming and JWT authentication, using drag-and-drop workflows to connect the tools.",
    impact:
      "Achieved 95% retrieval accuracy and reduced development time by 40% through visual workflow orchestration.",
  },
  {
    id: "04",
    name: "The world, in your pocket.",
    context: "NeuzNow · Cross-platform mobile",
    category: "Applications",
    description:
      "A cross-platform news experience built for real-time stories, effortless browsing, and timely updates.",
    tags: ["React Native", "Firebase", "REST APIs"],
    metric: "2",
    metricLabel: "mobile platforms",
    problem:
      "Create a consistent mobile experience for discovering current news and browsing stories by category on both iOS and Android.",
    build:
      "Developed a full-stack React Native application with a responsive interface, real-time news aggregation, and categorized browsing. Integrated Firebase Cloud Messaging for push notifications, with modular components and a REST API layer for news synchronization.",
    impact:
      "Delivered a shared mobile application for iOS and Android, connecting categorized content, synchronized news data, and push notifications.",
    repo: "https://github.com/yash161/NeuzNow",
  },
];

const categories: Category[] = [
  "All work",
  "AI systems",
  "Research",
  "Applications",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KnowledgeVisual() {
  return (
    <svg
      className={styles.diagram}
      viewBox="0 0 640 410"
      fill="none"
      aria-hidden="true"
    >
      <text x="34" y="42" className={styles.svgLabel} fill="#c4cffc">
        SYSTEM / 001
      </text>
      <text
        x="606"
        y="42"
        textAnchor="end"
        className={styles.svgLabel}
        fill="#c4cffc"
      >
        KNOWLEDGE → ANSWERS
      </text>
      <path d="M35 72h570M35 336h570" stroke="#738ef7" strokeOpacity=".45" />
      <g stroke="#bbc9ff" strokeOpacity=".65">
        <path d="M166 155h56l40 50m-96 45h56l40-45m81 0h66l42-41m-42 41 42 40" />
        <path
          d="m326 116 56 34-12 66-51 53-56-36-21-64 32-47 52-6Z"
          strokeOpacity=".35"
        />
        <path
          d="m274 122 45 147m63-119-119 83m-21-64 128 47m-44-100-63 117"
          strokeOpacity=".35"
        />
      </g>
      <g fill="#294ee9" stroke="#b7c7ff">
        <rect x="55" y="127" width="112" height="61" rx="5" />
        <rect x="55" y="220" width="112" height="61" rx="5" />
      </g>
      <g fill="#eef2ff" className={styles.svgSmall}>
        <text x="74" y="153">
          LEARNING
        </text>
        <text x="74" y="170">
          CONTENT
        </text>
        <text x="74" y="246">
          CONNECTED
        </text>
        <text x="74" y="263">
          KNOWLEDGE
        </text>
      </g>
      <g fill="#d3fc81">
        <circle cx="326" cy="116" r="5" />
        <circle cx="382" cy="150" r="5" />
        <circle cx="370" cy="216" r="5" />
        <circle cx="319" cy="269" r="5" />
        <circle cx="263" cy="233" r="5" />
        <circle cx="242" cy="169" r="5" />
        <circle cx="274" cy="122" r="5" />
      </g>
      <circle
        cx="309"
        cy="199"
        r="49"
        fill="#294ee9"
        stroke="#eff2ff"
        strokeWidth="1.5"
      />
      <circle cx="309" cy="199" r="39" stroke="#98afff" strokeDasharray="2 5" />
      <text
        x="309"
        y="203"
        textAnchor="middle"
        fill="white"
        className={styles.svgSmall}
      >
        GraphRAG
      </text>
      <rect x="449" y="132" width="151" height="133" rx="5" fill="#f4f3ed" />
      <circle cx="469" cy="153" r="3" fill="#294ee9" />
      <text x="480" y="157" className={styles.svgSmall} fill="#294ee9">
        ANSWER FOUND
      </text>
      <path
        d="M465 178h116m-116 12h116m-116 12h77"
        stroke="#a4aca6"
        strokeWidth="3"
      />
      <rect x="465" y="226" width="63" height="20" rx="3" fill="#e2e8d6" />
      <text
        x="496"
        y="239"
        textAnchor="middle"
        className={styles.svgTiny}
        fill="#3f5337"
      >
        &lt; 2 SEC
      </text>
      <text x="35" y="380" fill="white" className={styles.svgMetric}>
        1K+
      </text>
      <text x="151" y="378" className={styles.svgLabel} fill="#c4cffc">
        QUERIES / DAY
      </text>
      <text
        x="606"
        y="378"
        textAnchor="end"
        className={styles.svgLabel}
        fill="#c4cffc"
      >
        ARCHITECTURE STUDY
      </text>
    </svg>
  );
}

function ResearchVisual() {
  return (
    <svg
      className={styles.diagram}
      viewBox="0 0 640 410"
      fill="none"
      aria-hidden="true"
    >
      <text x="34" y="42" className={styles.svgLabel} fill="#4e5b49">
        EXPERIMENT / 002
      </text>
      <text
        x="606"
        y="42"
        textAnchor="end"
        className={styles.svgLabel}
        fill="#4e5b49"
      >
        FEATURE SELECTION
      </text>
      <path d="M35 72h570M35 336h570" stroke="#afb9a6" />
      <text x="29" y="234" className={styles.svgGiant} fill="#283d2b">
        94<tspan fontSize="52">%</tspan>
      </text>
      <text x="39" y="266" className={styles.svgLabel} fill="#4e5b49">
        F1 SCORE
      </text>
      <text x="375" y="109" className={styles.svgTiny} fill="#53614c">
        FIND THE SIGNAL.
      </text>
      {Array.from({ length: 80 }, (_, i) => {
        const selected = [
          4, 8, 12, 14, 22, 24, 28, 32, 34, 38, 42, 44, 48, 52, 54, 58, 62, 64,
          68, 74,
        ].includes(i);
        return (
          <rect
            key={i}
            x={376 + (i % 10) * 22}
            y={127 + Math.floor(i / 10) * 22}
            width="12"
            height="12"
            rx="2"
            fill={selected ? "#294ee9" : "#b2bfa7"}
          />
        );
      })}
      <path
        d="M467 116v190m-45-190v190m132-190v190"
        stroke="#294ee9"
        strokeOpacity=".24"
      />
      <text x="35" y="379" className={styles.svgLabel} fill="#3f5038">
        18 DATASETS
      </text>
      <text
        x="606"
        y="379"
        textAnchor="end"
        className={styles.svgLabel}
        fill="#3f5038"
      >
        60% LESS COMPUTE
      </text>
    </svg>
  );
}

function AgentVisual() {
  return (
    <svg
      className={styles.diagram}
      viewBox="0 0 640 410"
      fill="none"
      aria-hidden="true"
    >
      <text x="34" y="42" className={styles.svgLabel} fill="#b6c5be">
        WORKFLOW / 003
      </text>
      <text
        x="606"
        y="42"
        textAnchor="end"
        className={styles.svgLabel}
        fill="#b6c5be"
      >
        MULTI-AGENT RAG
      </text>
      <path d="M35 72h570M35 336h570" stroke="#5a6960" strokeOpacity=".7" />
      <text x="35" y="132" className={styles.svgHeading} fill="#f1f3e9">
        One question.
      </text>
      <text x="35" y="173" className={styles.svgHeading} fill="#d3fc81">
        A connected workflow.
      </text>
      <path d="M95 241h451" stroke="#899c82" />
      <path d="m239 236 6 5-6 5m180-10 6 5-6 5" stroke="#d3fc81" />
      {[
        { x: 35, title: "01 / RETRIEVE", subtitle: "Astra DB" },
        { x: 255, title: "02 / REASON", subtitle: "Groq inference" },
        { x: 475, title: "03 / RESPOND", subtitle: "Live streaming" },
      ].map((node) => (
        <g key={node.x}>
          <rect
            x={node.x}
            y="210"
            width="130"
            height="75"
            rx="4"
            fill="#263a31"
            stroke="#73877a"
          />
          <circle cx={node.x + 16} cy="227" r="3" fill="#d3fc81" />
          <text
            x={node.x + 12}
            y="247"
            className={styles.svgTiny}
            fill="#e8efdd"
          >
            {node.title}
          </text>
          <text
            x={node.x + 12}
            y="269"
            className={styles.svgTiny}
            fill="#a7b7aa"
          >
            {node.subtitle}
          </text>
        </g>
      ))}
      <text x="35" y="379" className={styles.svgLabel} fill="#d3fc81">
        95% RETRIEVAL ACCURACY
      </text>
      <text
        x="606"
        y="379"
        textAnchor="end"
        className={styles.svgLabel}
        fill="#b6c5be"
      >
        PIPELINE STUDY
      </text>
    </svg>
  );
}

function NewsVisual() {
  return (
    <svg
      className={styles.diagram}
      viewBox="0 0 640 410"
      fill="none"
      aria-hidden="true"
    >
      <text x="34" y="42" className={styles.svgLabel} fill="#706356">
        MOBILE / 004
      </text>
      <text
        x="606"
        y="42"
        textAnchor="end"
        className={styles.svgLabel}
        fill="#706356"
      >
        IOS + ANDROID
      </text>
      <path d="M35 72h570" stroke="#c5b8ab" />
      <text x="34" y="150" className={styles.svgNewsTitle} fill="#38382f">
        Stay
      </text>
      <text x="34" y="204" className={styles.svgNewsTitle} fill="#38382f">
        curious.
      </text>
      <circle cx="68" cy="264" r="32" stroke="#817f6b" />
      <ellipse cx="68" cy="264" rx="14" ry="32" stroke="#817f6b" />
      <path d="M36 264h64m-59-17h54m-54 34h54" stroke="#817f6b" />
      <text x="34" y="376" className={styles.svgLabel} fill="#706356">
        INTERFACE CONCEPT
      </text>
      <g transform="translate(350 96) rotate(-7 105 185)">
        <rect x="0" y="0" width="210" height="362" rx="27" fill="#363c34" />
        <rect x="6" y="6" width="198" height="350" rx="22" fill="#f4f3ed" />
        <rect x="77" y="11" width="57" height="8" rx="4" fill="#363c34" />
        <text x="20" y="50" className={styles.svgNewsLogo} fill="#26382e">
          NeuzNow<tspan fill="#e65a34">.</tspan>
        </text>
        <path d="M174 39h13m-13 5h13" stroke="#26382e" strokeWidth="1.5" />
        <path d="M20 65h170" stroke="#d6dbce" />
        <text x="20" y="87" className={styles.svgTiny} fill="#294ee9">
          FOR YOU
        </text>
        <text x="83" y="87" className={styles.svgTiny} fill="#7d8678">
          WORLD
        </text>
        <text x="141" y="87" className={styles.svgTiny} fill="#7d8678">
          TECH
        </text>
        <rect x="20" y="102" width="170" height="123" fill="#b3c4ad" />
        <path d="m20 202 50-57 39 40 27-23 54 50v13H20Z" fill="#6f856a" />
        <path d="m51 225 77-79 62 57v22Z" fill="#3f5b43" />
        <circle cx="151" cy="128" r="13" fill="#eae5bf" />
        <text x="20" y="247" className={styles.svgTiny} fill="#e65a34">
          EXPLORE YOUR WORLD
        </text>
        <text x="20" y="267" className={styles.svgNewsHeadline} fill="#2b342b">
          A new perspective.
        </text>
        <path
          d="M20 282h163m-163 8h139m-139 8h87"
          stroke="#c2c9bb"
          strokeWidth="3"
        />
        <path d="M20 318h170" stroke="#d6dbce" />
        <circle cx="42" cy="338" r="5" fill="#294ee9" />
        <circle cx="105" cy="338" r="5" stroke="#8f9a87" />
        <circle cx="168" cy="338" r="5" stroke="#8f9a87" />
      </g>
    </svg>
  );
}

const visuals = [KnowledgeVisual, ResearchVisual, AgentVisual, NewsVisual];

export default function SelectedWork() {
  const [category, setCategory] = useState<Category>("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const visibleProjects = projects.filter(
    (project) => category === "All work" || project.category === category,
  );

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <section
      id="work"
      className={`section-shell ${styles.section}`}
      aria-labelledby="work-heading"
    >
      <div className={styles.sectionLabel}>
        <span>01 / SELECTED WORK</span>
        <span>IDEAS, MADE REAL.</span>
      </div>
      <div className={styles.headingRow}>
        <h2 id="work-heading">
          Built with intent<span>.</span>
        </h2>
        <p>
          A few things I’ve helped bring into the world. From research
          experiments to systems people use every day.
        </p>
      </div>
      <div className={styles.filterRow}>
        <div
          className={styles.filters}
          role="group"
          aria-label="Filter projects"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={category === item ? styles.activeFilter : ""}
            >
              {item}
              <span>
                {item === "All work"
                  ? projects.length
                  : projects.filter((project) => project.category === item)
                      .length}
              </span>
            </button>
          ))}
        </div>
        <span className={styles.resultCount} role="status" aria-live="polite">
          {String(visibleProjects.length).padStart(2, "0")} projects
        </span>
      </div>
      <div className={styles.projectGrid}>
        {visibleProjects.map((project) => {
          const Visual = visuals[Number(project.id) - 1];
          return (
            <article key={project.id} className={styles.project}>
              <div
                className={`${styles.visual} ${styles[`visual${project.id}`]}`}
              >
                <Visual />
              </div>
              <div className={styles.projectMeta}>
                <span>{project.context}</span>
                <span>{project.id}</span>
              </div>
              <h3>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button
                className={styles.explore}
                type="button"
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setSelected(project);
                }}
                aria-label={`Explore project: ${project.name}`}
              >
                Explore project{" "}
                <span>
                  <Arrow diagonal />
                </span>
              </button>
            </article>
          );
        })}
      </div>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="project-dialog-title"
        onClose={() => {
          setSelected(null);
          openerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            closeDialog();
        }}
      >
        {selected && (
          <div className={styles.dialogContent}>
            <div className={styles.dialogTop}>
              <span>
                PROJECT {selected.id} / {selected.category.toUpperCase()}
              </span>
              <button
                type="button"
                onClick={closeDialog}
                className={styles.closeButton}
                aria-label="Close project details"
                autoFocus
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
            <p className={styles.dialogContext}>{selected.context}</p>
            <h2 id="project-dialog-title">{selected.name}</h2>
            <div className={styles.dialogMetric}>
              <strong>{selected.metric}</strong>
              <span>{selected.metricLabel}</span>
            </div>
            <div className={styles.caseStudy}>
              <div>
                <h3>The challenge</h3>
                <p>{selected.problem}</p>
              </div>
              <div>
                <h3>What I built</h3>
                <p>{selected.build}</p>
              </div>
              <div>
                <h3>The impact</h3>
                <p>{selected.impact}</p>
              </div>
            </div>
            <div className={styles.dialogBottom}>
              <div className={styles.tags}>
                {selected.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {selected.repo && (
                <a href={selected.repo} target="_blank" rel="noreferrer">
                  View repository <Arrow diagonal />
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
