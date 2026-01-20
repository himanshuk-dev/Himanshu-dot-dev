import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const StorySection = ({ storyBeats, storyTldr }) => {
  return (
    <Box component="section" className="v1-section v1-story v1-reveal" id="v1-story">
      <Container className="v1-section-inner" disableGutters maxWidth={false}>
        <Typography component="h2">Story</Typography>
        <Box className="v1-story-grid">
          {storyBeats.map((beat, index) => (
            <Typography component="p" key={index}>
              {beat}
            </Typography>
          ))}
        </Box>
        <Box className="v1-tldr">
          <Typography className="v1-label" component="span">
            TL;DR
          </Typography>
          <Stack
            className="v1-tldr-pills"
            direction="row"
            sx={{ flexWrap: "wrap" }}
          >
            {storyTldr.map((item) => (
              <Box className="v1-pill" component="span" key={item}>
                {item}
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default StorySection;
