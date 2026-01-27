import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";

const ProofSection = ({ proofPoints }) => {
  return (
    <Box component="section" className="v1-section v1-proof v1-reveal" id="v1-proof">
      <Container className="v1-section-inner" disableGutters maxWidth={false}>
        <Typography component="h2">Proof & Momentum</Typography>
        <Box className="v1-proof-grid">
          {proofPoints.map((point) => (
            <Card className="v1-proof-card" key={point.title} elevation={0}>
              <Typography component="h3">{point.title}</Typography>
              <Typography component="p">{point.detail}</Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProofSection;
