import React from "react";
import "../static/styles/about/about.css";
import profileImage from "../static/images/himanshu.jpg";
import Title from "../common/title";
import TimelineData from "./timelineData";
import Box from "./box";
import story from "../static/icons/story.png";

const AboutPage = () => {
  return (
    <>
      <div className="section about">
        <Title />
        <div className="about-image-container">
          <img src={profileImage} alt="Profile" className="about-image" />
          <div className="about-text heading">
            <p>Hello, My Name is</p>
            <b>Himanshu Kumar</b>
            <hr />
            <p>
              {" "}
              Front-end/ Full Stack
              <br />
              Software Engineer
            </p>
          </div>
        </div>

        <div className="about-header">
          <Box
            header="About Me"
            text="Front-end /Full Stack Engineer based in Vancouver who enjoys building
            beautiful software. I have spent over 3 years on Frontend and 2+ year on Full-stack development. Before the Software Engineering pivot, I spent 8 years
            working in leadership + System Admin roles in the IT industry."
            color={"#F9EFE3"}
          />
         <Box
         header="Recent Updates"
         text="Developed and launched Beyond Snack, a clean-label food brand offering protein-rich, no-added-sugar snacks. I led the end-to-end development of the e-commerce platform using React, Node.js, PostgreSQL, and AWS. Currently managing product development, online storefront, admin dashboard, and customer engagement systems."
         color="#E8E5CF"
         />
         
         <Box
            header="How it Sparked?"
            text="During my time working on Wordpress frontend for my food blog, I got interested in HTML, CSS, and JavaScript. That's where I found my passion for development and made a decision to switch my career and enroll in a Full-stack software engineering program at Springboard."
            color={"#F8FFF2"}
          />
        </div>
      </div>

      <div className="about-page">
        <div className="timeline-image">
          <img src={story} alt="story logo" />
        </div>
        <div className="timeline">
          {TimelineData.map((item, index) => (
            <Box
              header={item.date}
              text={item.event}
              color={item.color}
              image={item.image}
              icon={item.icon}
              projectLink={item.projectLink}
              linkText={item.linkText}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
