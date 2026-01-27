import LinkedIn from "../static/icons/linkedin.png";
import GitHub from "../static/icons/github.png";
import Medium from "../static/icons/medium.png";
import Email from "../static/icons/email.png";

import "../static/styles/common/footer.css";

import Title from "./title";
import { SITE_VERSION } from "./siteMeta";

const Footer = ({ footerRef }) => {
  return (
    <div ref={footerRef} className="section Footer">
      <Title />
      <div className="container">
        <div className="heading">
          <h1>Get In Touch!</h1>
        </div>
        <div className="Footer-container">
          <p>
            Looking to make an impact on your next project? That's great! Reach
            out to me via LinkedIn or direct email to discuss!
          </p>

          <div className="Footer-contact">
            <div>
              <a
                href="https://www.linkedin.com/in/himanshukumar3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" />

                <p>LinkedIn</p>
              </a>
            </div>

            <div>
              <a
                href="https://github.com/himanshuk-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="GitHub" />

                <p>GitHub</p>
              </a>
            </div>

            <div>
              <a
                href="https://himanshu-dev.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Medium} alt="Medium" />
                <p>Medium</p>
              </a>
            </div>

            <div>
              <a href="mailto:himanshuk.kumar01@gmail.com">
                <img src={Email} alt="Email" />

                <p>Email</p>
              </a>
            </div>
          </div>
          <div className="Footer-declaration">
            <p className="Footer-declaration-email">
              himanshuk.kumar01@gmail.com
            </p>

            <small>
              <p>Made with ❤️ in Vancouver</p>
              <p>using React.js</p>
              <p>Portfolio {SITE_VERSION}</p>
            </small>
            <a
              href="https://github.com/himanshuk-dev/dot-dev"
              alt="github link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
