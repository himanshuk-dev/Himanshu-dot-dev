import React from "react";
import { Link } from "react-router-dom";
import "../static/styles/common/navBar.css";
import "../static/styles/desktop_styles.css";
import Logo from "../static/icons/logo.png";

const Navbar = ({ handleContactClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={Logo} alt="LinkedIn" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/about">About</Link>
        <Link to="/projects">Work</Link>
        <Link to="/blog">Blog</Link>
        <a
          href="https://drive.google.com/file/d/14o_Zk94Ku6i1RW-icZTP32ik2W7lAEc0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <span onClick={handleContactClick}>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
