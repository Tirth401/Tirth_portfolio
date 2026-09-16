"use client";
import { useRef, useState, useEffect } from "react";
import Arrow from "./Arrow";

export default function ContactFooter() {
  const [copyState, setCopyState] = useState("Copy email");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  const copy = async () => {
    try {
      await navigator.clipboard.writeText("tirthshah889@gmail.com");
      setCopyState("Email copied");
    } catch {
      setCopyState("Select email to copy");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopyState("Copy email"), 3500);
  };
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="section-shell">
        <div className="contact-top">
          <span className="eyebrow">04 / WHAT’S NEXT?</span>
          <span className="contact-location">
            BASED IN LOS ANGELES · THINKING EVERYWHERE
          </span>
        </div>
        <div className="contact-main">
          <h2 id="contact-title">
            Have a good
            <br />
            problem<span>?</span>
          </h2>
          <div className="contact-invitation">
            <p>
              I’d love to help you solve it.
              <br />
              Let’s build something worth building.
            </p>
            <a
              className="button button-paper"
              href="mailto:tirthshah889@gmail.com"
            >
              Start a conversation
              <Arrow />
            </a>
          </div>
        </div>
        <div className="contact-links">
          <div className="email-row">
            <a href="mailto:tirthshah889@gmail.com">tirthshah889@gmail.com</a>
            <button
              onClick={copy}
              type="button"
              aria-label={copyState}
              title={copyState}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8V4H4v12h4" />
              </svg>
            </button>
            <span className="copy-status" role="status">
              {copyState === "Copy email" ? "" : copyState}
            </span>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Tirth401"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow />
            </a>
            <a
              href="https://www.linkedin.com/in/tirth-shah-bb2468269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow />
            </a>
            <a href="/resume.pdf" download="Tirth_Shah_Resume.pdf">
              Resume <Arrow direction="down" />
            </a>
          </div>
        </div>
        <footer className="site-footer">
          <a className="wordmark" href="#top" aria-label="Back to top">
            tirth<span className="wordmark-star">✳</span>shah
          </a>
          <span>Thoughtfully engineered. Endlessly curious.</span>
          <span>© {new Date().getFullYear()} Tirth Shah</span>
          <a href="#top" className="back-top" aria-label="Back to top">
            ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
