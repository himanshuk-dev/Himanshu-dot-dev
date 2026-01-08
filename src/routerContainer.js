import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
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
import { SITE_BASE_PATH, SITE_V1_BASE_PATH } from "./common/siteMeta";
import V1Page from "./v1/V1Page";
import V1ProjectPageContainer from "./v1/V1ProjectPageContainer";

const RouteShell = ({ footerRef, handleContactClick }) => {
  const location = useLocation();
  const isV1 = location.pathname.startsWith(SITE_V1_BASE_PATH);

  return (
    <>
      {!isV1 && <Navbar handleContactClick={handleContactClick} />}
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
        <Route path={SITE_V1_BASE_PATH} element={<V1Page />} />
        <Route
          path={`${SITE_V1_BASE_PATH}/projects/:projectKey`}
          element={<V1ProjectPageContainer />}
        />
      </Routes>
      {!isV1 && <Footer footerRef={footerRef} />}
    </>
  );
};

const RouteContainer = () => {
  const footerRef = useRef(null);

  const handleContactClick = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Router>
      <RouteShell
        footerRef={footerRef}
        handleContactClick={handleContactClick}
      />
    </Router>
  );
};

export default RouteContainer;
