// ============================================================================
// EDITABLE CONTENT — change values here, pages will update automatically.
// All text, links, and data for the site live in this single file.
// ============================================================================

import portrait from "./assets/9639e22a7351a93d2c01765205f58231eff8179f.webp";
import column1 from "./assets/bf0b7251441e4704ceca49b268e03bf6d4a58be1.webp";
import column2 from "./assets/5136d2c4cc870258fb915013ac009e1fe7620808.webp";
import column3 from "./assets/9c6167c3e6a3b4333785e3ce161f7341c950782d.webp";
import ifpriAnonymityCover from "./assets/ifpri-anonymity-uzbekistan.webp";
import personal1 from "./assets/cbb1fa94e4f852cb03119d1c6bddf1948f01c8e1.webp";
import personal2 from "./assets/ef7a374bee7e4966b910f79bca9b81011dc988cd.webp";
import personal3 from "./assets/9edfaff294da4b113d5d956e36f592c600ae24bf.webp";
import personal4 from "./assets/0b20486cba0eb82a4807829f9369745f7f68026a.webp";

export const images = {
  portrait,
  column1,
  column2,
  column3,
  ifpriAnonymityCover,
  personal1,
  personal2,
  personal3,
  personal4,
};

export const profile = {
  name: "Anton Liutin",
  title: "PhD Candidate · Ag & Applied Economics",
  email: "liutin@wisc.edu",
  phone: "+1 608 640 15 06",
  affiliation:
    "University of Wisconsin–Madison · Department of Agricultural & Applied Economics",
  office: "304 Taylor Hall · 427 Lorch St · Madison, WI 53706",
  location: "Madison, WI",
  cvUrl: "/cv.pdf",
  orcid: "0009-0000-1218-663X",
  orcidUrl: "https://orcid.org/0009-0000-1218-663X",
  scholarUrl: "https://scholar.google.com/citations?user=x2dQ2cgAAAAJ",
  github: "Aliutin",
  githubUrl: "https://github.com/Aliutin",
};

export type NavLink = { label: string; to: string };

export const navLinks: NavLink[] = [
  { label: "About", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Teaching", to: "/teaching" },
  { label: "Blog", to: "/blog" },
  { label: "CV", to: "/cv.pdf" },
];

export const aboutBio =
  "I'm a PhD candidate in Agricultural & Applied Economics at UW–Madison. I came to economics from physics via development economics at the New Economic School in Moscow. My research interests are development economics, environmental and natural resource economics, and economic history.";

export const researchInterests = [
  "Development Economics",
  "Environmental & Natural Resource Economics",
  "Economic History",
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  thesis?: string;
  advisor?: string;
};

export const education: Education[] = [
  {
    degree: "PhD in Agricultural & Applied Economics",
    school: "University of Wisconsin–Madison",
    period: "2021 – present",
  },
  {
    degree: "MA in Economics",
    school: "New Economic School, Moscow",
    period: "2020",
    thesis: "Polygamy and inequality in a male dominant society",
    advisor: "Hosny Zoabi",
  },
  {
    degree: "BS in Theoretical Physics",
    school: "NRNU MEPhI, Moscow",
    period: "2018",
    thesis:
      "Source spectrum influence on image quality and dose in Angiography",
    advisor: "Dyachkov Nikolay (Lebedev Physical Institute)",
  },
];

export type TeachingItem = {
  title: string;
  org: string;
  period: string;
  detail: string;
  tag: string;
};

export const teaching: TeachingItem[] = [
  {
    title: "TA — AAE 350: World Hunger and Malnutrition",
    org: "University of Wisconsin–Madison",
    period: "Spring 2024",
    detail: "Undergraduate course on global food security and nutrition",
    tag: "TEACHING",
  },
  {
    title: "TA — AAE 215: Introduction to Agricultural and Applied Economics",
    org: "University of Wisconsin–Madison",
    period: "Fall 2023",
    detail: "Undergraduate introduction to agricultural economics",
    tag: "TEACHING",
  },
  {
    title: "TA — Development Economics (M.A.)",
    org: "New Economic School",
    period: "Fall 2020",
    detail: "Course by Michele Valsecchi, Assistant Professor, NES",
    tag: "TEACHING",
  },
];

export type RARole = { role: string; pi: string; org: string; period: string };

export const researchAssistantRoles: RARole[] = [
  {
    role: "Research Assistant",
    pi: "Paul Castañeda Dower",
    org: "UW–Madison",
    period: "Summer 2023 – present",
  },
  {
    role: "Research Assistant",
    pi: "Corbett Grainger",
    org: "UW–Madison",
    period: "Summer 2022 – Spring 2023",
  },
  {
    role: "Research Assistant",
    pi: "Andrei Markevich",
    org: "New Economic School",
    period: "Winter 2020 – Summer 2021",
  },
  {
    role: "Junior Researcher",
    pi: "Hosny Zoabi",
    org: "New Economic School",
    period: "Winter 2020 – Summer 2021",
  },
];

export type Tool = { name: string; detail: string };

export const tools: Tool[] = [
  { name: "Python", detail: "Pandas, GeoPandas, NumPy, SciPy" },
  { name: "ArcGIS", detail: "Geospatial analysis" },
  { name: "QGIS", detail: "Open-source GIS" },
  { name: "Stata", detail: "Econometrics" },
  { name: "LaTeX", detail: "Typesetting" },
];

export const languages = [
  { name: "Russian", level: "Native" },
  { name: "English", level: "Fluent" },
];

export type Publication = {
  title: string;
  authors: string[];
  year: string;
  venue: string;
  tag: string;
  url?: string;
  abstract?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Water Conservation Through Simplified Drip Irrigation Scheduling for Cotton Cultivation in Uzbekistan",
    authors: ["Jamshid Shukurullaev", "Anton Liutin", "Ahmad Hamidov"],
    year: "2025",
    venue: "SSRN Working Paper",
    tag: "WORKING PAPER",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5535146",
  },
];

export type BlogPost = {
  title: string;
  venue: string;
  year: string;
  url: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    title:
      "Why subsidies alone won't drive adoption of water-saving technology: The hidden role of electricity infrastructure and other challenges in Uzbekistan",
    venue: "CGIAR",
    year: "2025",
    url: "https://www.cgiar.org/news-events/news/why-subsidies-alone-wont-drive-adoption-water-saving-technology",
    image:
      "https://www.cgiar.org/sites/g/files/fvypus371/files/2025-12/Blog_WTP.jpg",
  },
  {
    title:
      "Policy change and farmer feedback: Does anonymity matter? Evidence from Uzbekistan",
    venue: "IFPRI",
    year: "2025",
    url: "https://www.ifpri.org/blog/policy-change-and-farmer-feedback-does-anonymity-matter-evidence-from-uzbekistan/",
    image: ifpriAnonymityCover,
  },
  {
    title:
      "Irrigation innovation: Navigating challenges in Uzbekistan's water–energy–food–environment nexus",
    venue: "CGIAR",
    year: "2023",
    url: "https://www.cgiar.org/news-events/news/irrigation-innovation-navigating-challenges-in-uzbekistan-water-energy-food-environment-nexus",
    image:
      "https://www.cgiar.org/sites/g/files/fvypus371/files/PXL_20230828_060910858-scaled.jpg",
  },
];
