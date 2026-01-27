import React from "react";
import { Link } from "react-router-dom";
import { withV1BasePath } from "../../common/siteMeta";
import { Box, Card, Container, Typography } from "@mui/material";

const WorkSection = ({ featuredProjects }) => {
  return (
    <Box component="section" className="v1-section v1-work v1-reveal" id="v1-work">
      <Container className="v1-section-inner" disableGutters maxWidth={false}>
        <Typography component="h2">Featured Work</Typography>
        <Typography className="v1-section-lead" component="p">
          A few deep-dive case studies focused on impact, role, and stack.
        </Typography>
        <Box className="v1-work-grid">
          {featuredProjects.map((project) => (
            <Card
              key={project.title}
              className="v1-work-card v1-reveal"
              component={Link}
              to={withV1BasePath(`/projects/${project.linkData}`)}
              aria-label={`View ${project.title} project details`}
              elevation={0}
            >
              <Box className="v1-work-copy">
                <Box className="v1-work-header">
                  <Box className="v1-work-thumb">
                    <Box component="img" src={project.image} alt={project.title} />
                    <Typography component="h3">{project.title}</Typography>
                  </Box>
                </Box>
                <Typography component="p">{project.description}</Typography>
                <Box className="v1-work-meta">
                  {project.role && (
                    <Box>
                      <Typography className="v1-label" component="span">
                        Role
                      </Typography>
                      <Typography component="p">{project.role}</Typography>
                    </Box>
                  )}
                  {project.techStack && (
                    <Box>
                      <Typography className="v1-label" component="span">
                        Stack
                      </Typography>
                      <Typography component="p">{project.techStack}</Typography>
                    </Box>
                  )}
                  {project.impact.length > 0 && (
                    <Box>
                      <Typography className="v1-label" component="span">
                        Impact
                      </Typography>
                      <ul>
                        {project.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Box>
                  )}
                </Box>
              </Box>
              <Typography className="v1-card-cta" component="span">
                Click to view project details →
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WorkSection;
