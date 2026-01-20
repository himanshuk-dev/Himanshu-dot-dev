import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const ContactSection = () => {
  return (
    <Box component="section" className="v1-section v1-contact v1-reveal" id="v1-contact">
      <Container className="v1-section-inner" disableGutters maxWidth={false}>
        <Typography component="h2">Let’s build something</Typography>
        <Typography component="p">
          Ready to collaborate? Reach out via LinkedIn or send an email.
        </Typography>
        <Box className="v1-contact-actions">
          <Button
            className="v1-button primary"
            component="a"
            href="https://www.linkedin.com/in/himanshukumar3/"
            target="_blank"
            rel="noopener noreferrer"
            disableElevation
            disableRipple
          >
            Connect on LinkedIn
          </Button>
          <Button
            className="v1-button ghost"
            component="a"
            href="mailto:himanshuk.kumar01@gmail.com"
            disableElevation
            disableRipple
          >
            Send an email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
