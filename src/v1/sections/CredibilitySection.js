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
            <Card className="v1-timeline-card" key={item.date} elevation={0}>
              <Box className="v1-timeline-card-inner">
                <Typography className="v1-timeline-date" component="p">
                  {item.date}
                </Typography>
                <Typography className="v1-timeline-event" component="p">
                  {item.description}
                </Typography>
                {item.impact?.length ? (
                  <Box className="v1-timeline-impact">
                    <Typography className="v1-impact-label" component="p">
                      Impact
                    </Typography>
                    <Box component="ul" className="v1-impact-list">
                      {item.impact.map((impact, index) => (
                        <Box
                          component="li"
                          className="v1-impact-item"
                          key={`${item.date}-${index}`}
                        >
                          <Typography component="p">{impact}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CredibilitySection;
