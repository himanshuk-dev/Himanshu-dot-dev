import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { withBasePath } from "../common/siteMeta";
import "./v1.css";

const V1_SECTIONS = [
  { id: "v1-story", label: "Story" },
  { id: "v1-timeline", label: "Credibility" },
  { id: "v1-work", label: "Work" },
  { id: "v1-proof", label: "Proof" },
  { id: "v1-contact", label: "Contact" },
];

const V1Nav = () => {
  const [theme, setTheme] = useState("light");
  const location = useLocation();
  const navigate = useNavigate();
  const isV1Home = location.pathname === "/v1";

  useEffect(() => {
    const stored = window.localStorage.getItem("v1-theme");
    const initial = stored || "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("v1-theme", next);
  };

  const handleSectionClick = (sectionId) => {
    if (isV1Home) {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate(`/v1#${sectionId}`);
  };

  return (
    <nav className="v1-nav" aria-label="Primary">
      <div className="v1-nav-left">
        <span className="v1-logo">HK</span>
      </div>
      <div className="v1-nav-links">
        {V1_SECTIONS.map((section) => (
          <button
            key={section.id}
            type="button"
            className="v1-nav-link"
            onClick={() => handleSectionClick(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
      <div className="v1-nav-actions">
        <Link className="v1-link-pill" to={withBasePath("/")}>
          v0
        </Link>
        <button
          type="button"
          className={`v1-theme-toggle ${theme === "dark" ? "is-dark" : ""}`}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="v1-theme-label">Light</span>
          <span className="v1-theme-track">
            <span className="v1-theme-thumb" />
          </span>
          <span className="v1-theme-label">Dark</span>
        </button>
        <button
          type="button"
          className="v1-button primary"
          onClick={() => handleSectionClick("v1-contact")}
        >
          Contact me
        </button>
      </div>
    </nav>
  );
};

export default V1Nav;
