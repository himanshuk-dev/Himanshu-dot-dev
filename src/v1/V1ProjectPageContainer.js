import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../project/projectData";
import V1ProjectPage from "./V1ProjectPage";

const V1ProjectPageContainer = () => {
  const { projectKey } = useParams();
  const projectData = ProjectData[projectKey];

  if (!projectData) {
    return <div className="v1-project-missing">Project not found</div>;
  }

  return <V1ProjectPage projectData={projectData} />;
};

export default V1ProjectPageContainer;
