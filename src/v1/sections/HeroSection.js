import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const HeroSection = ({ profileImage, onResumeOpen }) => {
  return (
    <Box component="header" className="v1-hero v1-reveal" id="v1-hero">
      <Box className="v1-hero-content">
        <Typography className="v1-eyebrow" component="p">
          Product-minded engineer
        </Typography>
        <Typography component="h1">Himanshu Kumar</Typography>
        <Typography className="v1-subtitle" component="p">
          I design and build full-stack experiences that feel effortless and
          ship fast.
        </Typography>
        <Stack className="v1-hero-actions" direction="row" sx={{ flexWrap: "wrap" }}>
          <Box className="v1-cta-group">
            <Button
              className="v1-button primary v1-cta"
              component="a"
              href="#v1-work"
              disableElevation
              disableRipple
            >
              View case studies
            </Button>
            <Typography className="v1-cta-detail" component="span">
              5 featured projects
            </Typography>
          </Box>
          <Box className="v1-cta-group">
            <Button
              className="v1-button ghost v1-cta"
              component="a"
              href="#v1-contact"
              disableElevation
              disableRipple
            >
              Contact me
            </Button>
            <Typography className="v1-cta-detail" component="span">
              Reply in 24–48 hours
            </Typography>
          </Box>
          <Box className="v1-cta-group">
            <Button
              type="button"
              className="v1-button ghost v1-cta"
              onClick={onResumeOpen}
              disableElevation
              disableRipple
            >
              View resume
            </Button>
            <Typography className="v1-cta-detail" component="span">
              Preview before opening
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box className="v1-hero-portrait">
        <Box component="img" src={profileImage} alt="Himanshu Kumar" />
      </Box>
    </Box>
  );
};

export default HeroSection;
