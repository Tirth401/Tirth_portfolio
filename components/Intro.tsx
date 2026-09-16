import Arrow from "./Arrow";
import WorkExplorer from "./WorkExplorer";

export default function Intro() {
  return (
    <section
      id="top"
      className="intro section-shell"
      aria-labelledby="intro-heading"
    >
      <div className="intro-topline">
        <span className="eyebrow">
          <span className="status-dot" /> AI ENGINEER & CREATIVE PROBLEM SOLVER
        </span>
        <span className="edition">LOS ANGELES, CA · PORTFOLIO / 2026</span>
      </div>
      <div className="intro-grid">
        <div className="intro-copy">
          <h1 id="intro-heading">
            Engineering
            <br />
            what comes
            <br />
            <span className="next-word">
              next<span className="period">.</span>
              <svg viewBox="0 0 300 18" aria-hidden="true">
                <path d="M3 13C68 2 192 1 296 9" />
              </svg>
            </span>
          </h1>
          <p>
            I’m Tirth — I turn AI research into reliable systems, useful
            applications, and better ways to learn.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <Arrow direction="down" />
            </a>
            <a
              className="text-link"
              href="/resume.pdf"
              download="Tirth_Shah_Resume.pdf"
            >
              Download resume <Arrow direction="down" />
            </a>
          </div>
          <div className="currently">
            <span className="current-symbol">↳</span>
            <div>
              Currently building AI at <strong>ONLC Training Centers</strong>
              <span>From a good question to a working system.</span>
            </div>
          </div>
        </div>
        <WorkExplorer />
      </div>
      <div className="proof-strip">
        <div className="proof-intro">
          <span className="eyebrow">
            IDEAS WITH
            <br />
            REAL IMPACT.
          </span>
          <Arrow direction="right" />
        </div>
        <div className="proof">
          <strong>
            1K<span>+</span>
          </strong>
          <span>
            daily queries
            <br />
            on production RAG
          </span>
        </div>
        <div className="proof">
          <strong>
            94<span>%</span>
          </strong>
          <span>
            F1 score across
            <br />
            18 biomedical datasets
          </span>
        </div>
        <div className="proof">
          <strong>
            70<span>%</span>
          </strong>
          <span>
            faster content creation
            <br />
            across 5 teams
          </span>
        </div>
      </div>
    </section>
  );
}
