import { StaticImageData } from "next/image";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.png";

export type ProjectCategory = "Mobile Apps" | "Web Apps" | "Open Source";

// order the filter pills appear in, after "All"
export const projectCategories: ProjectCategory[] = [
  "Mobile Apps",
  "Web Apps",
  "Open Source",
];

const projects: {
  id: number;
  name: string;
  role: string;
  technologies: string;
  image: StaticImageData;
  url: string | null;
  description: string;
  categories: ProjectCategory[];
}[] = [
  {
    id: 1,
    name: "Safelynk — Multi-vendor e-commerce platform",
    role: "Fullstack Software Engineer",
    technologies: "Next.js, Flutter, Node.js, Express, MongoDB, Cloudflare",
    image: project1,
    categories: ["Web Apps", "Mobile Apps"],
    url: "https://safelynk.io/",
    description:
      "A multi-vendor e-commerce platform built end to end across a Next.js web app, a Flutter mobile app, and a Node.js backend. Multi-tenant subdomains give every vendor a branded store URL from a single deployment, with Moolre payments, automatic revenue splitting, and payouts on a 6-hour settlement cycle.",
  },
  {
    id: 2,
    name: "ViuHealth — Personalized autoimmune patient care",
    role: "Software Engineering Consultant",
    technologies: "Swift, SwiftUI, Flutter, Node.js, MongoDB, GitHub Actions",
    image: project2,
    categories: ["Mobile Apps", "Web Apps"],
    url: "https://www.viuhealth.com/",
    description:
      "A cross-platform app for autoimmune patient care with a companion dashboard for registered nurses, serving over 3,000 users. Started on iOS in Swift and SwiftUI, then moved to Flutter to ship both platforms with a small team, cutting time to market by 40%.",
  },
  {
    id: 3,
    name: "Mova — Ride-hailing for riders and drivers",
    role: "Software Engineer",
    technologies: "React Native, WebSockets, Google Maps SDK",
    image: project3,
    categories: ["Mobile Apps"],
    url: "https://www.movanow.co/",
    description:
      "Customer and driver apps for a ride-hailing service, kept in sync in real time over web sockets. Turn-by-turn navigation and live route syncing on the Google Maps SDK, with background location updates for continuous tracking on both sides.",
  },
  {
    id: 4,
    name: "Urban Blu — Lottery betting platform & Android POS",
    role: "Fullstack Software Engineer",
    technologies: "Next.js, Flutter, Kotlin, Android",
    image: project4,
    categories: ["Web Apps", "Mobile Apps"],
    url: "https://www.urbanblutech.com/",
    description:
      "Two Next.js web apps and an Android POS app for a lottery betting platform, replacing paper ticketing for 200+ retail agents. Three thermal-printer SDKs collapsed into a single APK through Kotlin method channels, plus GPS tracking, role-based access across 13 modules, and dual approval on draw results.",
  },
  {
    id: 5,
    name: "Pasco — AI for Smarter Exam Preparation",
    role: "Mobile App Engineer",
    technologies: "Flutter, Supabase",
    image: project5,
    categories: ["Mobile Apps"],
    url: "https://apps.apple.com/gh/app/passco/id6737412182",
    description:
      "Provides AI-driven past question practice and personalized study tools to help students prepare effectively for exams.",
  },
  {
    id: 6,
    name: "Board Assist — Simplify Board Meetings and Document Management",
    role: "Software Engineer (Mobile & Tablet)",
    technologies: "React Native, Firebase, Real-time notifications",
    image: project6,
    categories: ["Mobile Apps"],
    url: "https://vaboardassist.com/",
    description:
      "A secure, modern platform for organizing board activities, sharing documents, and running meetings — anytime, anywhere.",
  },
  {
    id: 7,
    name: "Pg Worker — Persistent job scheduler for PostgreSQL",
    role: "Package Author",
    technologies: "Dart, PostgreSQL",
    image: project7,
    categories: ["Open Source"],
    url: "https://github.com/samtuga1/pg_worker",
    description:
      "An open source Dart package for scheduling recurring background jobs on PostgreSQL. Define a job with a typed handler and schedule it with a cron expression, and because every job and its data live in Postgres, the schedule survives a server restart.",
  },
  {
    id: 8,
    name: "Pharaoh — ExpressJS-inspired backend framework for Dart",
    role: "Open Source Contributor",
    technologies: "Dart, Melos",
    image: project8,
    categories: ["Open Source"],
    url: "https://github.com/codekeyz/pharaoh",
    description:
      "A server-side framework for Dart built around robust routing, ExpressJS-style HTTP helpers, and interoperability with Shelf middleware. Maintained as a Melos workspace with high test coverage.",
  },
];

export default projects;
