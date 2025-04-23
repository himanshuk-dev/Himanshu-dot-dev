import jobFindr from "../static/projects/Job-findr.webp";
import currencyConverter from "../static/projects/CurrencyConvertor.webp";
import jeopardy from "../static/projects/Jeopardy.webp";
import remplr2 from "../static/projects/Remplr2.webp";
import remplr1 from "../static/projects/Remplr1.webp";
import pathos from "../static/projects/Pathos.webp";
import eliteKitchenFindsImage from "../static/projects/EliteKitchenFinds.webp";
import pathosBadge from "../static/icons/Pathos-badge.PNG";
import craftMyCardImage from "../static/projects/craftmycard.png";
import beyondSnackImage from "../static/projects/BeyondSnack.webp"; // Add the image

const Projects = [
  {
    id: 0,
    title: "Beyond Snack | Healthy Snacking E-commerce",
    linkData: "beyondsnack",
    description:
      "Beyond Snack is a health-focused snack brand built with a custom full-stack e-commerce platform. The site features Stripe-integrated checkout, tax and shipping logic, and a vibrant frontend styled with Material UI.",
    image: beyondSnackImage,
    backgroundColor: "#EAEDE9",
  },
  {
    id: 1,
    title: "CraftMyCard | Handmade Greeting Cards",
    linkData: "craftmycard",
    description:
      "CraftMyCard is an online platform for creating and purchasing handmade greeting cards. It allows users to personalize their cards with custom designs, colors, and messages, making every card unique and special.",
    image: craftMyCardImage,
    backgroundColor: "#FFF8F1",
  },
  {
    id: 1,
    title: "Elite Kitchen Finds | Curated Kitchenware E-commerce",
    linkData: "elitekitchenfinds",
    description:
      "Elite Kitchen Finds is a bespoke e-commerce platform designed and developed for a client, featuring a curated selection of premium kitchen essentials.",
    image: eliteKitchenFindsImage,
    backgroundColor: "#F5F4F4",
  },
  {
    id: 2,
    title: "Pathos | AI-powered Empathy enhancer",
    linkData: "pathos",
    description:
      "Award winning AI-powered platform aiming to boost empathy and emotional intelligence in remote workplace environments.",
    image: pathos,
    badge: pathosBadge,
    backgroundColor: "#F7F0F9",
  },
  {
    id: 3,
    title: "Remplr 2.0 | Meal Planner Platform",
    linkData: "remplr",
    description:
      "Meal Planner platform tailored for nutritionists, offering features like user authentication, meal planning, and in-depth recipe information.",
    image: remplr2,
    backgroundColor: "#ECEFED",
  },
  {
    id: 4,
    title: "Job Findr | Job Search Platform",
    linkData: "Job-Findr",
    description:
      "Full-stack application leveraging ReactJS and Express, integrates a robust job search API built using Express, providing seamless access to dynamic job data.",
    image: jobFindr,
    backgroundColor: "#FFFAE6",
  },
  {
    id: 5,
    title: "Remplr | Vegetarian focussed meal planner",
    linkData: "remplr-veg",
    description:
      "Database-driven full-stack web app built using a range of technologies such as Flask, PostgreSQL and JavaScript.",
    image: remplr1,
    backgroundColor: "#FFF6F3",
  },
  {
    id: 6,
    title: "Currency Converter",
    linkData: "currency-converter",
    description:
      "App build on popular Python framework: Flask built using API: exchangerate.host.",
    image: currencyConverter,
    backgroundColor: "#F2F4E7",
  },
  {
    id: 7,
    title: "Jeopardy Game",
    linkData: "jeopardy",
    description:
      "Jeopardy quiz show replica based on Javascript and DOM manipulation.",
    image: jeopardy,
    backgroundColor: "#E8E8D3",
  },
];

export default Projects;
