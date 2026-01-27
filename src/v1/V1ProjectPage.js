import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import V1Nav from "./V1Nav";
import useTiltHover from "./useTiltHover";
import "./v1Project.css";

const V1ProjectPage = ({ projectData }) => {
  useTiltHover();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    projectName,
    description,
    demoVideo,
    github,
    liveLink,
    API,
    role,
    techStack,
    timeline,
    architecture,
    dbSchema,
    customerJourney,
    componentStructure,
    devFlow,
    keyChallenges,
    learnings,
    notes,
    backgroundImage,
    badge,
  } = projectData;

  const links = [
    { label: "Live Site", href: liveLink },
    { label: "GitHub", href: github },
    { label: "API", href: API },
  ].filter((link) => link.href);

  const processImages = [
    { label: "Architecture", src: architecture },
    { label: "Database Schema", src: dbSchema },
    { label: "Customer Journey", src: customerJourney },
    { label: "Component Design", src: componentStructure },
  ].filter((item) => item.src);

  return (
    <Box className="v1-page v1-project-page">
      <V1Nav />
      <Box component="header" className="v1-project-hero">
        <Box className="v1-project-hero-content">
          <Typography className="v1-eyebrow" component="p">
            Case Study
          </Typography>
          <Typography component="h1">{projectName}</Typography>
          <Typography className="v1-project-description" component="p">
            {description}
          </Typography>
          {badge && (
            <Box className="v1-project-badge">
              <Box component="img" src={badge} alt="Project badge" />
            </Box>
          )}
          <Box className="v1-project-meta">
            {role && (
              <Box>
                <Typography className="v1-label" component="span">
                  Role
                </Typography>
                <Typography component="p">{role}</Typography>
              </Box>
            )}
            {techStack && (
              <Box>
                <Typography className="v1-label" component="span">
                  Stack
                </Typography>
                <Typography component="p">{techStack}</Typography>
              </Box>
            )}
            {timeline && (
              <Box>
                <Typography className="v1-label" component="span">
                  Timeline
                </Typography>
                <Typography component="p">{timeline}</Typography>
              </Box>
            )}
          </Box>
          {links.length > 0 && (
            <Box className="v1-project-links">
              {links.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v1-button ghost"
                  component="a"
                  disableElevation
                  disableRipple
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>
        <Box className="v1-project-hero-media">
          {demoVideo ? (
            <Box className="v1-project-video">
              <Box
                component="iframe"
                src={demoVideo}
                title={`${projectName} demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </Box>
          ) : (
            backgroundImage && (
              <Box component="img" src={backgroundImage} alt={projectName} />
            )
          )}
        </Box>
      </Box>

      <Box component="section" className="v1-project-section">
        <Container className="v1-section-inner" disableGutters maxWidth={false}>
          <Typography component="h2">Development Process</Typography>
          {processImages.length > 0 && (
            <Box className="v1-project-gallery">
              {processImages.map((item) => (
                <Box className="v1-project-image" key={item.label}>
                  <Typography component="h3">{item.label}</Typography>
                  <Box component="img" src={item.src} alt={item.label} />
                </Box>
              ))}
            </Box>
          )}
          {devFlow?.headings && (
            <Box className="v1-project-devflow">
              {devFlow.headings.map((group) => (
                <Box className="v1-project-devflow-group" key={group.heading}>
                  <Typography component="h3">{group.heading}</Typography>
                  <Box className="v1-project-devflow-steps">
                    {Object.values(group.steps).map((step) => (
                      <Box className="v1-project-step" key={step.header}>
                        <Typography component="h4">{step.header}</Typography>
                        <Typography component="p">{step.text}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Container>
      </Box>

      {keyChallenges && (
        <Box component="section" className="v1-project-section">
          <Container className="v1-section-inner" disableGutters maxWidth={false}>
            <Typography component="h2">Key Challenges</Typography>
            <Box className="v1-project-challenges">
              {keyChallenges.map((item) => (
                <Box className="v1-project-challenge" key={item.header}>
                  <Typography component="h3">{item.header}</Typography>
                  {item.challenge && (
                    <Typography component="p">{item.challenge}</Typography>
                  )}
                  {item.solution && (
                    <Typography component="p">{item.solution}</Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {learnings && (
        <Box component="section" className="v1-project-section">
          <Container className="v1-section-inner" disableGutters maxWidth={false}>
            <Typography component="h2">What I Learned</Typography>
            <Box className="v1-project-learnings">
              {learnings.map((item) => (
                <Box className="v1-project-learning" key={item.header || item.text}>
                  {item.header && <Typography component="h3">{item.header}</Typography>}
                  <Typography component="p">{item.text}</Typography>
                </Box>
              ))}
            </Box>
            {notes && (
              <Box className="v1-project-notes">
                <Typography className="v1-label" component="span">
                  Notes
                </Typography>
                <ul>
                  {notes.map((note) => (
                    <li key={note.text}>{note.text}</li>
                  ))}
                </ul>
              </Box>
            )}
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default V1ProjectPage;
