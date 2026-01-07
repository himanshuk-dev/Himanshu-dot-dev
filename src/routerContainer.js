import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./homepage/home";
import Navbar from "./common/navBar";
import ProjectPageContainer from "./project/projectPageContainer";
import AboutPage from "./About/about";
import Blog from "./Blog/blog";
import Services from "./services/Services";
// import Maintenance from "./Maintenance/maintenance";
import Footer from "./common/footer";
import Work from "./homepage/work";
import Resume from "./common/Resume";
import FrontEndResume from "./common/FrontEndResume";
import BackEndResume from "./common/BackEndResume";
import { SITE_BASE_PATH } from "./common/siteMeta";

const RouteContainer = () => {
  const footerRef = useRef(null);

  const handleContactClick = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Router>
      <Navbar handleContactClick={handleContactClick} />
      <Routes>
        <Route path="/" element={<Navigate to={SITE_BASE_PATH} replace />} />
        <Route path={SITE_BASE_PATH} element={<Home footerRef={footerRef} />} />

        <Route path={`${SITE_BASE_PATH}/about`} element={<AboutPage />} />
        <Route path={`${SITE_BASE_PATH}/projects`} element={<Work />} />
        <Route path={`${SITE_BASE_PATH}/services`} element={<Services />} />
        <Route path={`${SITE_BASE_PATH}/blog`} element={<Blog username="himanshu-dev" />} />
        {/* <Route path="/blog" element={<Maintenance />} /> */}
        <Route
          path={`${SITE_BASE_PATH}/projects/:projectKey`}
          element={<ProjectPageContainer />}
        />
        <Route path={`${SITE_BASE_PATH}/resume/full-stack`} element={<Resume />} />
        <Route path={`${SITE_BASE_PATH}/resume/front-end`} element={<FrontEndResume />} />
        <Route path={`${SITE_BASE_PATH}/resume/back-end`} element={<BackEndResume />} />
      </Routes>

      <Footer footerRef={footerRef} />
    </Router>
  );
};

export default RouteContainer;
