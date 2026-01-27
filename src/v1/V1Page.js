import React, { useEffect, useState } from "react";
import profileImage from "../static/images/himanshu.jpg";
import Projects from "../homepage/projects";
import ProjectData from "../project/projectData";
import { withBasePath } from "../common/siteMeta";
import V1Nav from "./V1Nav";
import useTiltHover from "./useTiltHover";
import ResumeModal from "./ResumeModal";
import HeroSection from "./sections/HeroSection";
import StorySection from "./sections/StorySection";
import CredibilitySection from "./sections/CredibilitySection";
import WorkSection from "./sections/WorkSection";
import ProofSection from "./sections/ProofSection";
import ContactSection from "./sections/ContactSection";
import "./v1.css";
import { Box } from "@mui/material";

const featuredProjectKeys = [
  "beyondsnack",
  "elitekitchenfinds",
  "pathos",
  "remplr",
  "remplr-veg",
];
const storyBeats = [
  "Vancouver-based front-end and full-stack engineer with an IT leadership background.",
  "Started self-learning in July 2021 and completed LinkedIn Learning in November 2021 to build web fundamentals.",
  "Completed the 1-year Full Stack Software Engineering program at Springboard to transition into software engineering.",
  "I turn ambiguous ideas into shippable products with strong UX and clear architecture, focused on reliability and collaboration.",
];

const credibilityStats = [
  { label: "Frontend Experience", value: "3+ years" },
  { label: "Full-stack Experience", value: "2+ years" },
  { label: "Focus Areas", value: "E-commerce + AI" },
];

const storyTldr = [
  "Frontend + full-stack engineer",
  "Product-minded, impact-driven",
  "E-commerce and AI experience",
  "Springboard 1-year program",
];

const featuredCaseStudyMeta = {
  beyondsnack: {
    impact: [
      "Launched full-stack e-commerce brand with Stripe checkout.",
      "Built admin tooling for order and fulfillment workflows.",
    ],
  },
  elitekitchenfinds: {
    impact: [
      "Delivered a curated, high-conversion storefront.",
      "Optimized UX with responsive, accessible UI components.",
    ],
  },
  pathos: {
    impact: [
      "Award-winning AI empathy platform (Springboard Hackathon).",
      "Real-time suggestions to improve workplace communication.",
    ],
  },
  remplr: {
    impact: [
      "Built a meal planner for nutritionists with auth and planning flows.",
      "Designed data models for recipes, clients, and meal tracking.",
    ],
  },
  "remplr-veg": {
    impact: [
      "Shipped MVP focused on vegetarian meal planning workflows.",
      "Integrated Flask + PostgreSQL for a data-driven experience.",
    ],
  },
};

const proofPoints = [
  {
    title: "Springboard Hackathon Winner",
    detail:
      "Co-led an award-winning AI platform selected out of hundreds of ideas.",
  },
  {
    title: "Beyond Snack Launch",
    detail:
      "Built and launched a full-stack e-commerce brand with Stripe and AWS.",
  },
  {
    title: "Client-first Delivery",
    detail:
      "Shipped multiple production apps across retail, AI, and service brands.",
  },
];

const V1Page = () => {
  useTiltHover();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isResumeLoading, setIsResumeLoading] = useState(false);
  const resumeUrl =
    "https://drive.google.com/file/d/1QJHA5miIfpKiWbGoUKes6GpPl4Ti1v6w/view?usp=sharing";
  const resumePreviewUrl =
    "https://drive.google.com/file/d/1QJHA5miIfpKiWbGoUKes6GpPl4Ti1v6w/preview";

  const featuredProjects = Projects.filter((project) =>
    featuredProjectKeys.includes(project.linkData)
  ).map((project) => {
    const projectDetails = ProjectData[project.linkData];
    const meta = featuredCaseStudyMeta[project.linkData] || {};
    return {
      ...project,
      role: projectDetails?.role,
      techStack: projectDetails?.techStack,
      impact: meta.impact || [],
    };
  });
  const timelineHighlights = [
    {
      date: "August 2025 - Present",
      description:
        "At CanAI Garage (PSPC), I build production-oriented, responsible AI workflows that support operational decision-making. I focus on backend services, data validation, and UX-focused feedback loops that improve reliability, and I mentor developers through code reviews, pairing, and unblocking work across the team.",
      impact: [
        "Built responsible AI workflows for operational decision-making.",
        "Improved reliability with validation and feedback loops.",
        "Mentored developers through reviews, pairing, and unblockers.",
      ],
    },
    {
      date: "September 2024 - August 2025",
      description:
        "I led the full-stack build and launch of Beyond Snack, owning the e-commerce experience end to end. That included checkout reliability with Stripe, admin tooling for operations, and customer workflows that kept the product and brand experience consistent.",
      impact: [
        "Owned the full-stack launch of Beyond Snack.",
        "Hardened Stripe checkout reliability and ops tooling.",
        "Shipped customer workflows that kept the brand experience consistent.",
      ],
    },
    {
      date: "July 2024 - September 2024",
      description:
        "At Iter Innovandi, I helped shape a lead-gen platform for an AI startup, pairing frontend systems with automation and analytics to strengthen conversion workflows.",
      impact: [
        "Shaped a lead-gen platform for an AI startup.",
        "Paired frontend systems with automation and analytics.",
        "Strengthened conversion workflows with data-backed updates.",
      ],
    },
    {
      date: "April 2024 - June 2024",
      description:
        "At Wizardry Labs, I built TypeScript and Next.js applications and optimized data access patterns with SQL/Prisma, while improving Docker workflows for smoother deployments.",
      impact: [
        "Built TypeScript and Next.js applications.",
        "Optimized data access patterns with SQL/Prisma.",
        "Improved Docker workflows for smoother deployments.",
      ],
    },
    {
      date: "December 2023 - April 2024",
      description:
        "I delivered high-conversion storefronts using Next.js and React, focusing on accessible, responsive UI patterns that improved the shopping experience.",
      impact: [
        "Shipped high-conversion storefronts with Next.js and React.",
        "Improved accessibility with responsive UI patterns.",
        "Enhanced the shopping experience with UX-focused updates.",
      ],
    },
    {
      date: "November 2022 - October 2023",
      description:
        "I completed the 1-year Full Stack Software Engineering program at Springboard, shipping multiple full-stack apps and sharpening my review and collaboration habits.",
      impact: [
        "Shipped multiple full-stack applications end-to-end.",
        "Built strong code review and collaboration habits.",
        "Strengthened full-stack fundamentals through the program.",
      ],
    },
    {
      date: "July 2021 - November 2021",
      description:
        "I began self-learning web development in July 2021 and completed LinkedIn Learning in November 2021, building early projects that validated the transition into software engineering.",
      impact: [
        "Built early projects to validate the career transition.",
        "Developed web fundamentals through structured courses.",
        "Established a consistent learning cadence and portfolio base.",
      ],
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".v1-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isResumeOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isResumeOpen]);

  const handleResumeOpen = () => {
    setIsResumeOpen(true);
    setIsResumeLoading(true);
  };

  const handleResumeClose = () => {
    setIsResumeOpen(false);
  };

  return (
    <Box className="v1-page">
      <V1Nav />
      <HeroSection profileImage={profileImage} onResumeOpen={handleResumeOpen} />
      <StorySection storyBeats={storyBeats} storyTldr={storyTldr} />
      <CredibilitySection
        credibilityStats={credibilityStats}
        timelineHighlights={timelineHighlights}
      />
      <WorkSection featuredProjects={featuredProjects} />
      <ProofSection proofPoints={proofPoints} />
      <ContactSection />
      <ResumeModal
        isOpen={isResumeOpen}
        isLoading={isResumeLoading}
        resumeUrl={resumeUrl}
        previewUrl={resumePreviewUrl}
        onClose={handleResumeClose}
        onLoad={() => setIsResumeLoading(false)}
      />
    </Box>
  );
};

export default V1Page;
