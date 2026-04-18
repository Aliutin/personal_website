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
import bagdata from "./assets/Gemini_Generated_Image_3czbop3czbop3czb.png"

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
  bagdata,
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
  { label: "Experience", to: "/experience" },
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

export type ExperienceKind = "teaching" | "research" | "fieldwork";

export type Experience = {
  kind: ExperienceKind;
  role: string;
  title: string;
  org: string;
  orgShort: string;
  periodLabel: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  ongoing?: boolean;
  detail?: string;
};

export const experiences: Experience[] = [
  {
    kind: "research",
    role: "Research Assistant",
    title: "Paul Castañeda Dower",
    org: "University of Wisconsin–Madison",
    orgShort: "UW–Madison",
    periodLabel: "Summer 2023",
    startYear: 2023,
    startMonth: 6,
    endYear: 2023,
    endMonth: 8,
    detail: "Russian economic history",
  },
  {
    kind: "research",
    role: "Research Assistant",
    title: "Paul Castañeda Dower",
    org: "University of Wisconsin–Madison",
    orgShort: "UW–Madison",
    periodLabel: "Summer 2026",
    startYear: 2026,
    startMonth: 6,
    endYear: 2026,
    endMonth: 8,
    detail: "Community institutions and adaptation",
  },
  {
    kind: "research",
    role: "Research Assistant",
    title: "Dustin Frye & Gisella Kagy",
    org: "University of Wisconsin–Madison",
    orgShort: "UW–Madison",
    periodLabel: "Fall 2024 – Summer 2025",
    startYear: 2024,
    startMonth: 9,
    endYear: 2025,
    endMonth: 8,
    detail: "Environmental health and economic history",
  },
  {
    kind: "fieldwork",
    role: "Fieldwork",
    title: "Uzbekistan — Farmer interviews on water-saving technology",
    org: "7 regions of Uzbekistan",
    orgShort: "Uzbekistan",
    periodLabel: "Summer 2023",
    startYear: 2023,
    startMonth: 6,
    endYear: 2023,
    endMonth: 8,
    detail:
      "Focus group discussions and in-depth interviews with farmers across 7 regions of Uzbekistan on adoption of water-saving technology. Worked together with Paul Castañeda Dower under IFPRI cooperation.",
  },
  {
    kind: "fieldwork",
    role: "Fieldwork",
    title: "Uzbekistan — Large farmer survey (IFPRI collaboration)",
    org: "IFPRI · CGIAR NEXUS Gains",
    orgShort: "Uzbekistan · IFPRI",
    periodLabel: "Sep – Nov 2024",
    startYear: 2024,
    startMonth: 9,
    endYear: 2024,
    endMonth: 11,
    detail:
      "Prepared a large interview study of small and large farmers in Uzbekistan with IFPRI. Trained and monitored local enumerators, traveled across survey regions.",
  },
  {
    kind: "fieldwork",
    role: "Fieldwork",
    title: "Uzbekistan — Behavioral games experiment",
    org: "CGIAR SPIA · with Jamshid Shukurullaev",
    orgShort: "Uzbekistan · SPIA",
    periodLabel: "Nov – Dec 2024",
    startYear: 2024,
    startMonth: 11,
    endYear: 2024,
    endMonth: 12,
    detail:
      "Ran the framed-field behavioral games experiment on a subsample from the IFPRI farmer survey. Funded by CGIAR SPIA, conducted jointly with Jamshid Shukurullaev.",
  },
  {
    kind: "teaching",
    role: "TA",
    title: "AAE 350: World Hunger and Malnutrition",
    org: "University of Wisconsin–Madison",
    orgShort: "UW–Madison",
    periodLabel: "Spring 2024",
    startYear: 2024,
    startMonth: 1,
    endYear: 2024,
    endMonth: 5,
    detail: "Undergraduate course on global food security and nutrition",
  },
  {
    kind: "teaching",
    role: "TA",
    title: "AAE 215: Introduction to Agricultural and Applied Economics",
    org: "University of Wisconsin–Madison",
    orgShort: "UW–Madison",
    periodLabel: "Fall 2023",
    startYear: 2023,
    startMonth: 9,
    endYear: 2023,
    endMonth: 12,
    detail: "Undergraduate introduction to agricultural economics",
  },
  {
    kind: "research",
    role: "Research Assistant",
    title: "Corbett Grainger",
    org: "University of Wisconsin–Madison",
    orgShort: "UW–Madison",
    periodLabel: "Summer 2022 – Spring 2023",
    startYear: 2022,
    startMonth: 6,
    endYear: 2023,
    endMonth: 5,
    detail: "Environmental and natural-resource economics",
  },
  {
    kind: "research",
    role: "Research Assistant",
    title: "Andrei Markevich",
    org: "New Economic School",
    orgShort: "NES",
    periodLabel: "Winter 2020 – Summer 2021",
    startYear: 2020,
    startMonth: 12,
    endYear: 2021,
    endMonth: 8,
    detail: "Russian economic history",
  },
  {
    kind: "research",
    role: "Junior Researcher",
    title: "Hosny Zoabi",
    org: "New Economic School",
    orgShort: "NES",
    periodLabel: "Winter 2020 – Summer 2021",
    startYear: 2020,
    startMonth: 12,
    endYear: 2021,
    endMonth: 8,
    detail: "Family and growth economics",
  },
  {
    kind: "teaching",
    role: "TA",
    title: "Development Economics (M.A.)",
    org: "New Economic School",
    orgShort: "NES",
    periodLabel: "Fall 2020",
    startYear: 2020,
    startMonth: 9,
    endYear: 2020,
    endMonth: 12,
    detail: "Course by Michele Valsecchi, Assistant Professor, NES",
  },
];

export type PublicationFigure = { src: string; caption?: string };

export function publicationTagStyle(tag: string) {
  if (tag === "JOB MARKET PAPER") {
    return { text: "text-[#ff7b1b]", dot: "bg-[#ff7b1b]" };
  }
  if (tag === "UNDER REVIEW") {
    return { text: "text-[#1a1a1b]", dot: "bg-[#1a1a1b]" };
  }
  return { text: "text-[#757578]", dot: "bg-gray-400" };
}

export type Publication = {
  title: string;
  authors: string[];
  year: string;
  venue: string;
  tag: string;
  url?: string;
  abstract?: string;
  keyFindings?: string[];
  figures?: PublicationFigure[];
  draftOnRequest?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      "Upstream Advantage in Surface Water Systems: Measuring Inequality Using a Water-Graph Approach",
    authors: ["Anton Liutin"],
    year: "2026",
    venue: "Job Market Paper · UW–Madison",
    tag: "JOB MARKET PAPER",
    draftOnRequest: true,
    abstract:
      "Surface water flows sequentially through canal networks, reaching upstream users before downstream users. Tail-end deprivation is well documented in developing countries with weak institutions, but whether formal water rights eliminate this inequality in developed settings remains untested at scale. I construct a \u201Cwater-graph\u201D mapping upstream\u2013downstream relationships among 54,946 agricultural plots across Arizona's canal networks and test whether network position affects crop outcomes during the unprecedented Colorado River drought (2016\u20132023). A \u201Cdonut\u201D identification strategy isolates far upstream competition (>1\u201310\u00A0km) from spatially correlated local shocks. Downstream plots experience significantly lower vegetation health, moisture, and evapotranspiration; the drought amplification of this position penalty roughly doubles to triples across outcomes between the full canal path and the 10\u00A0km cutoff (2.0\u00D7 for NDMI, 2.2\u00D7 for GCVI, 2.5\u00D7 for ET). The position\u2013drought gradient is significant only in surface-water-dominant districts\u2014groundwater access eliminates it entirely. Physical delivery infrastructure creates distributional consequences not resolved by prior appropriation rights, pointing to infrastructure targeting and groundwater investment as policy levers in arid regions facing increasing scarcity.",
    keyFindings: [
      "Downstream plots experience significantly lower NDMI, GCVI, and evapotranspiration even after controlling for water rights, soil quality, and market proximity.",
      "Drought amplifies the position penalty by 2\u00D7\u20132.5\u00D7, and a downstream placebo rules out spatially correlated local shocks.",
      "Groundwater access eliminates the position\u2013drought gradient entirely, pointing to infrastructure targeting and groundwater investment as policy levers.",
    ],
  },
  {
    title:
      "Using Behavioral Games to Understand Water-Saving Technology Adoption in Uzbekistan",
    authors: ["Anton Liutin", "Jamshid Shukurullaev"],
    year: "2026",
    venue: "Working Paper",
    tag: "WORKING PAPER",
    draftOnRequest: true,
    abstract:
      "We conduct a framed field experiment with 190 farmers across four regions of Uzbekistan, modifying the standard Irrigation Game to include an explicit drip irrigation adoption decision. Players positioned along a simulated canal make sequential choices about infrastructure investment, water extraction, and technology adoption. We develop a two-social-cost model that separately captures community norms around infrastructure investment (SC_I) and water extraction (SC_W). The model predicts that (i) adoption concentrates among water-scarce downstream players, (ii) upstream adoption generates positive spillovers that cascade along the canal, and (iii) social norms and technology adoption are complements\u2014stronger water-sharing norms amplify the relative advantage of drip irrigation. The experimental data confirm these predictions: downstream players adopt at higher rates (62% vs. 49% for upstream), each upstream adopter increases downstream water availability by 0.407 units (p < 0.01), and upstream adoption triggers peer adoption downstream. Linking experimental behavior to survey data, we find that farmers' in-game decisions reflect their real-world water access conditions, irrigation costs, and social network connections (p < 0.01)\u2014validating behavioral games as tools for measuring technology adoption decisions. These findings support position-based targeting of subsidies and leveraging farmer networks to diffuse water-saving technologies.",
    keyFindings: [
      "Downstream players adopt drip irrigation at 62% versus 49% for upstream players; each upstream adopter raises downstream water availability by 0.407 units (p < 0.01).",
      "Upstream adoption triggers peer adoption cascades downstream, consistent with a positive-spillover mechanism.",
      "In-game decisions track real-world water access, irrigation costs, and social networks, validating behavioral games as measurement tools for adoption decisions.",
    ],
  },
  {
    title:
      "Water Conservation Through Simplified Drip Irrigation Scheduling for Cotton Cultivation in Uzbekistan",
    authors: ["Jamshid Shukurullaev", "Ahmad Hamidov", "Anton Liutin"],
    year: "2025",
    venue: "R&R · Water (MDPI)",
    tag: "UNDER REVIEW",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5535146",
    abstract:
      "Water scarcity has become an increasingly critical issue in Uzbekistan's agricultural sector, with significant decline in available water resources since the 1990s. Despite drip irrigation's water-saving potential, a research gap exists in practical standards for farmers transitioning from furrow irrigation, especially under heterogeneous agricultural conditions. This study validates a simplified, evapotranspiration-based irrigation scheduling framework through a dual-phase approach: a controlled longitudinal experiment (2021\u20132023) and a farmer adoption panel (N = 32). Our controlled experiments demonstrated that scientific drip scheduling increased cotton yields by 39.9% while reducing water use by 24.3% compared to furrow irrigation. Our Difference-in-Differences analysis of the farmer panel revealed a novel behavioral insight: unguided farmers utilizing drip technology systematically under-irrigated, failing to meet crop physiological needs. Spatial analysis across water-stressed agricultural regions reveals that evaporation rates exhibit remarkable temporal stability precisely where water conservation is most urgently needed, enabling scalable implementation through a \u201Chub-and-spoke\u201D model in which centralized evaporation calculations reliably inform irrigation schedules across surrounding areas without requiring sophisticated equipment at individual farms.",
    keyFindings: [
      "Scientific drip scheduling raised cotton yields by 39.9% while cutting water use by 24.3% relative to furrow irrigation in a controlled longitudinal experiment (2021\u20132023).",
      "Difference-in-differences on a farmer adoption panel (N = 32) shows unguided drip adopters systematically under-irrigate and fail to meet crop physiological needs\u2014technology alone is not enough.",
      "Evaporation rates are temporally stable in the most water-stressed regions, supporting a \u201Chub-and-spoke\u201D scheduling model that scales without farm-level equipment.",
    ],
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
