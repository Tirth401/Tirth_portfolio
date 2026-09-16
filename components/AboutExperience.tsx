import Image from "next/image";
import styles from "./AboutExperience.module.css";

const experience = [
  {
    company: "ONLC Training Centers",
    role: "AI Developer",
    date: "Jun 2025 — Present",
    current: true,
    description:
      "Bringing AI into everyday learning. I build the products, retrieval systems, and infrastructure that turn ambitious ideas into reliable tools.",
    outcomes: [
      "Built a Python and TypeScript eLearning suite that accelerated content production by 70% across five teams, integrating Heygen and ElevenLabs.",
      "Architected a LangChain, GraphRAG, and Neo4j system serving 1,000+ queries a day with response times under two seconds.",
      "Standardized production deployments with CI/CD, Traefik, Nginx, and Cloudflare.",
    ],
    tools: "Python / TypeScript / LangChain / Neo4j / CI/CD",
  },
  {
    company: "Cal State Los Angeles",
    role: "Research Assistant",
    date: "Sep 2024 — May 2026",
    current: false,
    description:
      "Exploring how evolutionary algorithms can make machine learning more efficient, with a focus on biomedical feature selection.",
    outcomes: [
      "Developed SAGAFS GA, reaching a 94% F1 score across 18 biomedical datasets and more than 20 machine learning models.",
      "Accelerated drug discovery screening by 75%, analyzing more than 10,000 sequences in under five minutes.",
      "Authored research for an IEEE international conference and open-sourced a framework adopted by an external research lab.",
    ],
    tools: "Python / Genetic algorithms / scikit-learn / Biomedical ML",
  },
  {
    company: "Prayosha Food Services",
    role: "Data Science Intern",
    date: "Jan 2024 — May 2024",
    current: false,
    description:
      "Turning historical transaction data into better decisions about demand and inventory.",
    outcomes: [
      "Improved demand forecasting accuracy by 23% using an XGBoost ensemble with Bayesian optimization.",
      "Deployed LSTM, CNN, and Transformer models achieving 91% accuracy for inventory optimization, supported by distributed Hadoop processing.",
    ],
    tools: "XGBoost / LSTM / Transformers / Hadoop",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Intelligence",
    purpose: "From context to capability.",
    tools:
      "Python, LangChain, LangSmith, GraphRAG, PyTorch, TensorFlow, scikit-learn",
  },
  {
    number: "02",
    title: "Interfaces",
    purpose: "Systems people can use.",
    tools:
      "TypeScript, React, Next.js, Node.js, React Native, WebSockets, REST APIs",
  },
  {
    number: "03",
    title: "Data",
    purpose: "A foundation for good answers.",
    tools: "SQL, Neo4j, PostgreSQL, MongoDB, Astra DB, Snowflake, BigQuery",
  },
  {
    number: "04",
    title: "Infrastructure",
    purpose: "Built to keep running.",
    tools: "AWS Bedrock & SageMaker, Docker, CI/CD, Cloudflare, Nginx, Traefik",
  },
];

export default function AboutExperience() {
  return (
    <>
      <section
        id="experience"
        className={styles.experience}
        aria-labelledby="experience-title"
      >
        <div className="section-shell">
          <p className={styles.eyebrow}>02 / THE JOURNEY</p>
          <div className={styles.experienceLayout}>
            <div className={styles.experienceIntro}>
              <h2 id="experience-title" className={styles.heading}>
                Good work.
                <br />
                Real impact.
              </h2>
              <p className={styles.introCopy}>
                From the research lab to production. A few places where
                I&apos;ve turned curiosity into something useful.
              </p>
              <a
                className={styles.resumeLink}
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                The full story, on paper <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className={styles.roles}>
              {experience.map((job, index) => (
                <details
                  className={styles.role}
                  key={job.company}
                  open={index === 0}
                >
                  <summary className={styles.roleSummary}>
                    <span className={styles.roleInfo}>
                      <span className={styles.roleTitle}>{job.role}</span>
                      <span className={styles.company}>{job.company}</span>
                      <span className={styles.date}>
                        {job.current && (
                          <span
                            className={styles.currentDot}
                            aria-hidden="true"
                          />
                        )}
                        {job.date}
                      </span>
                    </span>
                    <span className={styles.expandIcon} aria-hidden="true" />
                  </summary>
                  <div className={styles.roleBody}>
                    <p className={styles.roleDescription}>{job.description}</p>
                    <ul className={styles.outcomes}>
                      {job.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                    <p className={styles.roleTools}>{job.tools}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={styles.about}
        aria-labelledby="about-title"
      >
        <div className="section-shell">
          <p className={styles.eyebrow}>03 / BEHIND THE BUILD</p>
          <div className={styles.aboutLayout}>
            <figure className={styles.portrait}>
              <div className={styles.photoFrame}>
                <Image
                  src="/Tirth_img_2.jpg"
                  alt="Tirth Shah standing beside colorful rock sculptures in the desert"
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 40vw, 450px"
                  className={styles.photo}
                />
                <span className={styles.photoLabel} aria-hidden="true">
                  OFFLINE, OCCASIONALLY.
                </span>
              </div>
              <figcaption className={styles.photoCaption}>
                <span>TIRTH SHAH</span>
                <span>LOS ANGELES, CA ↗</span>
              </figcaption>
            </figure>
            <div className={styles.aboutCopy}>
              <h2 id="about-title" className={styles.heading}>
                Curious by default.
                <br />
                Engineer by practice.
              </h2>
              <p className={styles.bioLead}>
                I like understanding how things work.
                <br className={styles.desktopBreak} /> I like making them work
                even more.
              </p>
              <p className={styles.bio}>
                I&apos;m Tirth, an AI developer based in Los Angeles. My work
                connects applied machine learning, thoughtful interfaces, and
                the infrastructure that brings them to life. I&apos;m especially
                interested in systems that help people find answers, learn
                faster, and do more with their ideas.
              </p>
              <div className={styles.personalDetails}>
                <div className={styles.personalDetail}>
                  <span className={styles.detailLabel}>THE FOUNDATION</span>
                  <h3>M.S. Computer Science</h3>
                  <p>Cal State Los Angeles · 2024–2026</p>
                  <span className={styles.detailHighlight}>
                    4.00 / 4.00 GPA
                  </span>
                </div>
                <div className={styles.personalDetail}>
                  <span className={styles.detailLabel}>PASSING IT FORWARD</span>
                  <h3>100+ volunteer hours</h3>
                  <p>
                    Teaching Python and data science, plus AI/ML workshops and
                    hackathon mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.toolbox}>
            <div className={styles.toolboxHeader}>
              <h3>A few tools of the trade.</h3>
              <p className={styles.detailLabel}>CHOSEN FOR THE PROBLEM.</p>
            </div>
            <div className={styles.capabilities}>
              {capabilities.map((capability) => (
                <div className={styles.capability} key={capability.title}>
                  <span className={styles.capabilityNumber}>
                    {capability.number}
                  </span>
                  <h4>{capability.title}</h4>
                  <p className={styles.capabilityPurpose}>
                    {capability.purpose}
                  </p>
                  <p className={styles.capabilityTools}>{capability.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
