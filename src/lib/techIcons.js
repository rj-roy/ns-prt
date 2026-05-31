import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiPostgresql,
  SiPython,
  SiJavascript,
  SiExpress,
  SiVercel,
  SiBetterauth,
  SiJsonwebtokens,
  SiNetlify
} from "react-icons/si";
import { FaCcStripe, FaGitAlt } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";

export const techIconMap = {
  TypeScript: SiTypescript,
  MongoDB: SiMongodb,
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Tailwind: SiTailwindcss,
  Firebase: SiFirebase,
  Redux: SiRedux,
  PostgreSQL: SiPostgresql,
  Python: SiPython,
  JavaScript: SiJavascript,
  Express: SiExpress,
  Razorpay: FaCcStripe,
  Git: FaGitAlt,
  "shadcn/ui": SiShadcnui,
  Cloudinary: SiNextdotjs, 
  Recharts: SiReact, 
  JWT: SiJsonwebtokens, 
  Vercel: SiVercel,
  BetterAuth: SiBetterauth,
  Netlify: SiNetlify,
};

export const getTechIcon = (techName) => {
  return techIconMap[techName] || SiReact; 
};
