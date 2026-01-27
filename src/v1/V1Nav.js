import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { withBasePath, withV1BasePath } from "../common/siteMeta";
import "./v1.css";
import Logo from "../static/icons/logo.png";
import { Box, Button, ButtonBase, Link as MuiLink, Typography } from "@mui/material";

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
    <Box component="nav" className="v1-nav" aria-label="Primary">
      <Box className="v1-nav-left">
        <MuiLink
          component={Link}
          to={withV1BasePath("/")}
          underline="none"
          aria-label="Go to V1 home"
          sx={{ display: "inline-flex", alignItems: "center" }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Himanshu Kumar"
            sx={{ width: 80, height: 80 }}
          />
        </MuiLink>
      </Box>
      <Box className="v1-nav-links">
        {V1_SECTIONS.map((section) => (
          <Button
            key={section.id}
            className="v1-nav-link"
            onClick={() => handleSectionClick(section.id)}
            disableElevation
            disableRipple
            sx={{
              textTransform: "none",
              minWidth: 0,
              fontSize: { xs: "1rem", md: "1.05rem", lg: "1.1rem" },
            }}
          >
            {section.label}
          </Button>
        ))}
      </Box>
      <Box className="v1-nav-actions">
        <MuiLink
          className="v1-link-pill"
          component={Link}
          to={withBasePath("/")}
          underline="none"
        >
          v0
        </MuiLink>
        <ButtonBase
          className={`v1-theme-toggle ${theme === "dark" ? "is-dark" : ""}`}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Typography className="v1-theme-label" component="span">
            Light
          </Typography>
          <Box className="v1-theme-track">
            <Box className="v1-theme-thumb" />
          </Box>
          <Typography className="v1-theme-label" component="span">
            Dark
          </Typography>
        </ButtonBase>
        <Button
          className="v1-button primary"
          onClick={() => handleSectionClick("v1-contact")}
          disableElevation
          disableRipple
        >
          Contact me
        </Button>
      </Box>
    </Box>
  );
};

export default V1Nav;
