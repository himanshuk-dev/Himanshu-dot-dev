import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../project/projectData";
import V1ProjectPage from "./V1ProjectPage";
import { Box, Typography } from "@mui/material";

const V1ProjectPageContainer = () => {
  const { projectKey } = useParams();
  const projectData = ProjectData[projectKey];

  if (!projectData) {
    return (
      <Box className="v1-project-missing">
        <Typography component="p">Project not found</Typography>
      </Box>
    );
  }

  return <V1ProjectPage projectData={projectData} />;
};

export default V1ProjectPageContainer;
