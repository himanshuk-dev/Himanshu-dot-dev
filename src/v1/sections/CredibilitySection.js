import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";

const CredibilitySection = ({ credibilityStats, timelineHighlights }) => {
  return (
    <Box
      component="section"
      className="v1-section v1-credibility v1-reveal"
      id="v1-timeline"
    >
      <Container className="v1-section-inner" disableGutters maxWidth={false}>
        <Typography component="h2">Credibility</Typography>
        <Box className="v1-stats">
          {credibilityStats.map((stat) => (
            <Card className="v1-stat" key={stat.label} elevation={0}>
              <Box>
                <Typography className="v1-stat-value" component="p">
                  {stat.value}
                </Typography>
                <Typography className="v1-stat-label" component="p">
                  {stat.label}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
        <Box className="v1-timeline">
          {timelineHighlights.map((item) => (
            <Box className="v1-timeline-item" key={item.date}>
              <Typography className="v1-timeline-date" component="p">
                {item.date}
              </Typography>
              <Typography className="v1-timeline-event" component="p">
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CredibilitySection;
