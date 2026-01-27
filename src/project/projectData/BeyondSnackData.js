import beyondSnackImage from "../../static/projects/BeyondSnack.webp";

const BeyondSnackData = {
  projectName: "Beyond Snack | Healthy Snacking E-commerce Platform",
  backgroundColor: "#EAEDE9",
  backgroundImage: beyondSnackImage,
  description:
    "Beyond Snack is a health-first e-commerce platform selling protein-rich snacks made without added sugar or preservatives. Developed with a custom full-stack architecture, it features a robust checkout system, admin dashboard, and responsive design aligned with the brand's vibrant visual identity.",
  demoVideo: "https://www.youtube.com/embed/p0tarplxRV0?si=wzlcRTXrHUXat7rG",
//   github: "", // Add link if public
  liveLink: "https://beyondsnack.ca",
  role: "Founding Software Engineer",
  techStack: "React.js, Node.js, Express.js, PostgreSQL, Material UI, AWS, Stripe",
  timeline: "September 2024 – August 2025",
  devFlow: {
    headings: [
      {
        heading: "Architecture & Setup >>>",
        steps: {
          step1: {
            header: "Monorepo Setup",
            text: "Set up a monorepo for the frontend and backend using shared environment config and reusable utilities to streamline development.",
          },
          step2: {
            header: "PostgreSQL Database",
            text: "Designed normalized schemas to manage users, orders, and product categories with efficient relations and indexing.",
          },
          step3: {
            header: "Stripe Integration",
            text: "Integrated Stripe to handle secure checkout, including real-time confirmation emails and dynamic tax + shipping cost logic.",
          },
        },
      },
      {
        heading: "Frontend Development >>>",
        steps: {
          step1: {
            header: "Responsive UI with Material UI",
            text: "Implemented responsive design with Material UI and custom typography to maintain branding consistency across devices.",
          },
          step2: {
            header: "Product & Order Components",
            text: "Created reusable components for product cards, cart drawer, shipping form, and checkout pages.",
          },
          step3: {
            header: "Email Signup Pages",
            text: "Built dynamic pages for landing, and subscription.",
          },
        },
      },
      {
        heading: "Backend & Admin >>>",
        steps: {
          step1: {
            header: "Order Management System",
            text: "Built admin routes and dashboard views for updating order status, issuing refunds, and sending shipment emails.",
          },
          step2: {
            header: "User & Product Management",
            text: "Developed APIs to manage user roles and CRUD operations for products, including media uploads to AWS S3.",
          },
        
        },
      },
      {
        heading: "Launch & Feedback >>>",
        steps: {
          step1: {
            header: "Pre-launch Teasers",
            text: "Deployed teaser pages with social media integration and user signups ahead of launch to build anticipation.",
          },
          step2: {
            header: "Soft Launch",
            text: "Soft launched with a limited product drop, collecting feedback and adjusting UX before broader promotions.",
          },
          step3: {
            header: "Continuous Improvement",
            text: "Refined product listings, updated content dynamically, and handled scaling issues based on user traffic.",
          },
        },
      },
    ],
  },
  keyChallenges: [
    {
      header: "Tax and Shipping Calculation",
      solution:
        "Created a modular utility to compute Canadian GST/PST and flat-rate shipping based on province and dynamically update the final order total.",
    },
    {
      header: "Dynamic Email Templates",
      solution:
        "Used Nodemailer and custom HTML email templates to confirm orders, handle cancellations, and notify shipment status.",
    },
  ],
  learnings: [
    {
      header: "Building for Scale",
      text: "Learned how to structure backend and database logic to support admin controls, inventory, and future product expansion.",
    },
    {
      header: "Stripe’s Full Checkout Flow",
      text: "Gained deep understanding of Stripe's API for payment intents, customer data, webhooks, and error handling.",
    },
    {
      header: "React Component Architecture",
      text: "Refined component structure for flexibility and reuse across product, cart, and admin dashboards.",
    },
  ],
  notes: [
    {
      text: "The platform is under continuous development with new product drops, and CRM integrations planned in future phases.",
    },
  ],
};

export default BeyondSnackData;
