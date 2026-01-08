import star from "../static/icons/star.png";
import coder from "../static/icons/coder.png";
import coder1 from "../static/icons/coder1.png";
// import screen from "../static/icons/screen.png";
import codeReview from "../static/icons/codeReview.png";
import assessment from "../static/icons/assessment.png";
import essential from "../static/icons/essential.png";
import start from "../static/icons/start.png";
import { SITE_BASE_PATH } from "../common/siteMeta";

const TimelineData = [
  {
    date: "August 2025 - Present",
    event:
      "Software Engineer / IT Developer at CanAI Garage (Public Services and Procurement Canada). Building responsible, production-oriented AI-enabled systems that support operational decision-making. Contributing across backend services, data validation workflows, and UX-focused feedback mechanisms, while supporting code reviews, agile delivery, and team enablement.",
    color: "#F0F8F8",
  },
  {
    date: "September 2024 - August 2025",
    event:
      "Developed and launched Beyond Snack, a clean-label food brand focused on protein-rich, no-added-sugar snacks. Led product development and full-stack platform implementation using React, Node.js, PostgreSQL, and AWS. Managed e-commerce, fulfillment, customer engagement, and admin dashboard systems.",
    color: "#F0F8F8",
    projectLink: "https://beyondsnack.ca/",
    linkText: "Checkout: Beyond Snack",
  },
  {
    date: "July 2024 - September 2024",
    event:
      "Worked at Iter Innovandi on a lead generation platform for an AI startup. Led architecture planning and implemented scalable front-end and back-end systems using React, Python, and PostgreSQL. Integrated automation tools and data analytics to optimize lead acquisition and conversion processes.",
    color: "#E8F0FE",
},
  {
    date: "April 2024 - June 2024",
    event:
      "Started working with Wizardry Labs, where I developed full-stack applications using TypeScript and Next.js, focusing on creating robust, type-safe integrations. My work involved optimizing SQL and Prisma operations to enhance performance and scalability while leveraging Docker for streamlined deployment processes. ",
    color: "#F9EFE3",
  },
  {
    date: "January 2024 - April 2024",
    event:
      "Led the development of a high-conversion e-commerce platform at EliteKitchenFinds utilizing Next.js and TypeScript, while crafting dynamic, responsive interfaces with React and Chakra UI, significantly enhancing user engagement and accessibility.",
    color: "#F9E2DC",
    projectLink: `https://himanshu.dev${SITE_BASE_PATH}/projects/elitekitchenfinds`,
    linkText: "Checkout: EliteKitchenFinds",
  },
  {
    date: "December 2023",
    event:
      "Started my first contract role as a Software Engineer at EM Marketing, where I am actively involved in code reviews and building e-commerce platforms with Next.js, Sanity.io, and Shopify. I'm working passionately on React-based projects, cross-functional collaboration, agile methodologies, and staying updated with the latest software trends.",
    color: "#F9EFE3",
  },
  {
    image: coder,
    color: "#070B0D",
  },
  {
    date: "October 2023",
    event:
      "Completed the 1-year Software Engineering (Full Stack) program at Springboard, transitioning fully into software engineering. Built multiple full-stack applications with React on the frontend and Node-based APIs on the backend, and participated in code reviews.",
    color: "#EEF5E0",
    icon: star,
  },

  {
    date: "Sept 2023 - Oct 2023",
    event:
      " Won Springboard Hackathon where I worked in a team to work on a original idea to build AI-powered platform aiming to boost empathy and emotional intelligence in remote workplace environments, which got selected out of hundreds of ideas. ",
    color: "#F9EFE3",
    projectLink: `https://himanshu.dev${SITE_BASE_PATH}/projects/pathos`,
    linkText: "Checkout Project: Pathos",
  },
  {
    image: coder1,
    color: "#070B0D",
  },

  // {
  //   image: screen,
  //   color: "#070B0D",
  // },
  {
    date: "July 2023 - August 2023",
    event:
      "Built Full Stack app: Remplr, Meal planner platform to help nutritionists serve their clients efficiently using React for Frontend and node-based API for backend. Went into planning achitecture and database schema design to better plan the project.",
    color: "#E8E5CF",
    projectLink: `https://himanshu.dev${SITE_BASE_PATH}/projects/remplr`,
    linkText: "Checkout Project:Remplr 2.0",
  },

  {
    color: "#070B0D",
    image: codeReview,
  },
  {
    event:
      "Expanded my portfolio with a series of cumulative projects, each utilizing a diverse range of technology stacks. Throughout this process, I sought feedback from on-demand mentors to refine my skills and enhance the quality of my code through comprehensive code reviews.",
    color: "#F8FFF2",
  },

  {
    date: "April 2023 - May 2023",
    event:
      "Built database-driven application leveraging a Python framework, Flask, and integrated a PostgreSQL database. The development process involved formulating project proposals, meticulously planning data sourcing and API selection, developing user flows, and thoroughly documenting the project.",
    color: "#F9EFE3",
    projectLink: `https://himanshu.dev${SITE_BASE_PATH}/projects/remplr-veg`,
    linkText: "Checkout Project: Remplr 1.0",
  },
  {
    event:
      "Actively engaged in multiple code review sessions, which significantly enhanced my grasp of system design. This exposure empowered me to refine my code planning and execution methodologies for diverse software development projects.",
    color: "#E8E5CF",
  },
  {
    date: "November 2022",
    event:
      "Started the 1-year Full Stack Software Engineering program at Springboard. The journey commenced with a thorough review of developer fundamentals, focusing on object-oriented programming.",
    color: "#F8FFF2",
  },
  {
    image: assessment,
    color: "#070B0D",
  },

  {
    date: "September 2022",
    event:
      "With a growing foundation from self-learning and online courses, I decided to transition into software engineering. I researched Springboard, connected with alumni, and prepared for the Full Stack program.",
    color: "#F9EFE3",
  },

  {
    color: "#070B0D",
    image: essential,
  },
  {
    date: "January 2022 - July 2022",
    event:
      "Built various projects based on JavaScript, including a multipage portfolio website, a landing page, and several mini-projects, to refine my frontend skills and deepen my understanding of JavaScript.",
    color: "#E8E5CF",
  },
  {
    date: "November 2021",
    event:
      "Successfully completed the Front-End Web Development program on LinkedIn Learning where I gained essential experience in HTML, CSS, and JavaScript along with foundations of web development, responsive design, and user experience.",
    color: "#F8FFF2",
  },
  {
    color: "#070B0D",
    image: start,
  },
  {
    date: "August 2021",
    event:
      "Over the years (2016-2022), I worked on buidling front-end using WordPress and designed a user friendly food showcase website bringing 10% more visitors and 15% more page views each month. This experience made me really interested in web development.",
    color: "#F9EFE3",
  },
];

export default TimelineData;
