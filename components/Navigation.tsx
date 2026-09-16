"use client";

import { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";

const links = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["About", "#about"],
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    ["top", "work", "experience", "about", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="nav-shell">
        <a
          href="#top"
          className="wordmark"
          aria-label="Tirth Shah, home"
          onClick={() => setOpen(false)}
        >
          tirth<span className="wordmark-star">✳</span>
          <span className="wordmark-suffix">shah</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              aria-current={active === href ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <Arrow />
        </a>
        <button
          ref={menuButton}
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span className={open ? "menu-open" : ""} />
        </button>
      </div>
      <nav
        id="mobile-menu"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {[...links, ["Contact", "#contact"]].map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
            <Arrow />
          </a>
        ))}
        <a
          href="/resume.pdf"
          download="Tirth_Shah_Resume.pdf"
          onClick={() => setOpen(false)}
        >
          Download resume
          <Arrow direction="down" />
        </a>
      </nav>
    </header>
  );
}
