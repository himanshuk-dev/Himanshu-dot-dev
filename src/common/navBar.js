import React from "react";
import { Link } from "react-router-dom";
import "../static/styles/common/navBar.css";
import "../static/styles/desktop_styles.css";
import Logo from "../static/icons/logo.png";
import { withBasePath } from "./siteMeta";

const Navbar = ({ handleContactClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to={withBasePath("/")}>
          <img src={Logo} alt="LinkedIn" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to={withBasePath("/about")}>About</Link>
        <Link to={withBasePath("/projects")}>Work</Link>
        <Link to={withBasePath("/blog")}>Blog</Link>
        <Link to={withBasePath("/resume/full-stack")}>Resume</Link>

        <span onClick={handleContactClick}>Get In Touch</span>
      </div>
    </nav>
  );
};

export default Navbar;
