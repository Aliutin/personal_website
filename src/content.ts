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
import bagdata from "./assets/Gemini_Generated_Image_3czbop3czbop3czb.png";
import graph1 from "./assets/image 61.png";
import graph2 from "./assets/image 62.png";
import graph3 from "./assets/image 63.png";
import researchImage from "./assets/image 49.png";  
import jmpStudyAreaMap from "./assets/jmp-study-area-map.png";
import jmpWaterGraphPosition from "./assets/jmp-water-graph-position.png";
import jmpDonutIdentification from "./assets/jmp-donut-identification.png";
import jmpDonutCoefficients from "./assets/jmp-donut-coefficients.png";
import jmpUpstreamDownstreamHorserace from "./assets/jmp-upstream-downstream-horserace.png";
import jmpProductionFunction from "./assets/jmp-production-function.png";
import behavioralGamesHero from "./assets/behavioral-games-hero.webp";
import behavioralGamesAdoption from "./assets/behavioral-games-adoption.png";
import behavioralGamesGini from "./assets/behavioral-games-gini.png";
import behavioralGamesProductionFunctions from "./assets/behavioral-games-production-functions.png";
import behavioralGamesSessionDynamics from "./assets/behavioral-games-session-dynamics.png";
import behavioralGamesSpilloverHeatmap from "./assets/behavioral-games-spillover-heatmap.png";
import behavioralGamesSpilloverCascade from "./assets/behavioral-games-spillover-cascade.png";
import behavioralGamesAdoptionThreshold from "./assets/behavioral-games-adoption-threshold.png";
import behavioralGamesGamePrimitives from "./assets/behavioral-games-game-primitives.png";
import waterCottonHero from "./assets/water-cotton-hero.webp";
import waterCottonKcStages from "./assets/water-cotton-kc-stages.webp";
import waterEvaporationStabilityMap from "./assets/water-evaporation-stability-map.webp";
import waterStressStabilityScatter from "./assets/water-stress-stability-scatter.png";

export const images = {
  portrait,
  researchImage,
  column1,
  column2,
  column3,
  ifpriAnonymityCover,
  personal1,
  personal2,
  personal3,
  personal4,
  bagdata,
  graph1,
  graph2,
  graph3,
  jmpStudyAreaMap,
  jmpWaterGraphPosition,
  jmpDonutIdentification,
  jmpDonutCoefficients,
  jmpUpstreamDownstreamHorserace,
  jmpProductionFunction,
  behavioralGamesHero,
  behavioralGamesAdoption,
  behavioralGamesGini,
  behavioralGamesProductionFunctions,
  behavioralGamesSessionDynamics,
  behavioralGamesSpilloverHeatmap,
  behavioralGamesSpilloverCascade,
  behavioralGamesAdoptionThreshold,
  behavioralGamesGamePrimitives,
  waterCottonHero,
  waterCottonKcStages,
  waterEvaporationStabilityMap,
  waterStressStabilityScatter,
};

export const profile = {
  name: "Anton Liutin",
  title: "PhD Candidate · Ag & Applied Economics",
  email: "LIUTIN@WISC.EDU",
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

// --- НОВЫЙ БЛОК ДЛЯ ШАПКИ RESEARCH ---
export const researchIntro = {
  title: "Publications & working papers.",
  description: "Job market paper on water-graph inequality in Arizona; fieldwork-grounded work on drip irrigation adoption and simplified irrigation scheduling in Uzbekistan. Click any paper for an extended preview."
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  thesis?: string;
  advisor?: string;
};

export const Experiences: Experience[] = [
  // 2026
  {
    kind: "research",
    startYear: 2026,
    startMonth: 6, // Summer
    endYear: 2026,
    endMonth: 8,
    periodLabel: "Summer 2026",
    role: "Research Assistant",
    title: "Paul Castañeda Dower",
    org: "UW–Madison",
    orgShort: "UW–Madison",
    detail: "Community institutions and adaptation"
  },
  // 2024
  {
    kind: "fieldwork",
    startYear: 2024,
    startMonth: 11,
    endYear: 2024,
    endMonth: 12,
    periodLabel: "Nov – Dec 2024",
    role: "Fieldwork",
    title: "Behavioral games experiment — Uzbekistan",
    org: "CGIAR SPIA",
    orgShort: "CGIAR SPIA",
    detail: "Framed-field behavioral games experiment on a subsample from the IFPRI farmer survey. Funded by CGIAR SPIA, with Jamshid Shukurullaev."
  },
  {
    kind: "fieldwork",
    startYear: 2024,
    startMonth: 9,
    endYear: 2024,
    endMonth: 11,
    periodLabel: "Sep – Nov 2024",
    role: "Fieldwork",
    title: "Large farmer survey — Uzbekistan",
    org: "IFPRI · CGIAR NEXUS Gains",
    orgShort: "IFPRI",
    detail: "Prepared a large interview study of small and large farmers in Uzbekistan with IFPRI. Trained and monitored local enumerators across survey regions."
  },
  {
    kind: "research",
    startYear: 2024,
    startMonth: 8, // Fall
    endYear: 2025,
    endMonth: 8,
    periodLabel: "Fall 2024 – Summer 2025",
    role: "Research Assistant",
    title: "Dustin Frye & Gisella Kagy",
    org: "UW–Madison",
    orgShort: "UW–Madison",
    detail: "Environmental health and economic history."
  },
  {
    kind: "teaching",
    startYear: 2024,
    startMonth: 1, // Spring
    endYear: 2024,
    endMonth: 5,
    periodLabel: "Spring 2024",
    role: "AAE 350",
    title: "World Hunger and Malnutrition",
    org: "UW–Madison",
    orgShort: "UW–Madison",
    detail: "Undergraduate course on global food security and nutrition."
  },
  // 2023
  {
    kind: "teaching",
    startYear: 2023,
    startMonth: 8, // Fall
    endYear: 2023,
    endMonth: 12,
    periodLabel: "Fall 2023",
    role: "AAE 215",
    title: "Intro to Agricultural & Applied Economics",
    org: "UW–Madison",
    orgShort: "UW–Madison",
    detail: "Undergraduate introduction to agricultural economics."
  },
  {
    kind: "research",
    startYear: 2023,
    startMonth: 6, // Summer
    endYear: 2023,
    endMonth: 8,
    periodLabel: "Summer 2023",
    role: "Research Assistant",
    title: "Paul Castañeda Dower",
    org: "UW–Madison",
    orgShort: "UW–Madison",
    detail: "Russian economic history."
  },
  {
    kind: "fieldwork",
    startYear: 2023,
    startMonth: 5, // Summer
    endYear: 2023,
    endMonth: 8,
    periodLabel: "Summer 2023",
    role: "Fieldwork",
    title: "Farmer interviews on water-saving technology — Uzbekistan",
    org: "7 regions of Uzbekistan",
    orgShort: "Uzbekistan",
    detail: "Focus group discussions and in-depth interviews with farmers across 7 regions of Uzbekistan on adoption of water-saving technology. Worked together with Paul Castañeda Dower under IFPRI cooperation."
  },
  // 2022
  {
    kind: "research",
    startYear: 2022,
    startMonth: 6,
    endYear: 2023,
    endMonth: 5,
    periodLabel: "Summer 2022 – Spring 2023",
    role: "Research Assistant",
    title: "Corbett Grainger",
    org: "UW–Madison",
    orgShort: "UW–Madison",
    detail: "Environmental and natural-resource economics."
  },
  // 2020
  {
    kind: "research",
    startYear: 2020,
    startMonth: 12, // Winter
    endYear: 2021,
    endMonth: 8,
    periodLabel: "Winter 2020 – Summer 2021",
    role: "Research Assistant",
    title: "Andrei Markevich",
    org: "NES",
    orgShort: "NES",
    detail: "Russian economic history."
  },
  {
    kind: "research",
    startYear: 2020,
    startMonth: 11, // Winter
    endYear: 2021,
    endMonth: 8,
    periodLabel: "Winter 2020 – Summer 2021",
    role: "Junior Researcher",
    title: "Hosny Zoabi",
    org: "NES",
    orgShort: "NES",
    detail: "Family and growth economics."
  },
  {
    kind: "teaching",
    startYear: 2020,
    startMonth: 8, // Fall
    endYear: 2020,
    endMonth: 12,
    periodLabel: "Fall 2020",
    role: "Teaching Assistant",
    title: "Development Economics (MA)",
    org: "NES",
    orgShort: "NES",
    detail: "TA for Michele Valsecchi, Assistant Professor, NES." // Оставил деталь из старого контента, если не нужна - можешь удалить
  }
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

// --- ДОБАВЛЕНО ПОЛЕ pages?: number; ---
export type Publication = {
  slug: string;
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
  pages?: number; 
};

export const publications: Publication[] = [
  {
    slug: "upstream-advantage",
    title: "Upstream Advantage in Surface Water Systems: Measuring Inequality Using a Water-Graph Approach",
    authors: ["Anton Liutin"],
    year: "2026",
    venue: "Job Market Paper · UW–Madison",
    tag: "JOB MARKET PAPER",
    draftOnRequest: true,
    pages: 58,
    abstract: "Do formal water rights eliminate the inequality created by sequential canal access? I build a directed water graph of 54,946 Arizona agricultural plots and test whether network position shapes satellite-derived crop outcomes from 2016 to 2023. A donut identification strategy isolates far-upstream competition (>1–10 km) from spatially correlated local shocks, validating a directional water-competition mechanism. The paper estimates whether tail-end plots have lower crop health, whether drought amplifies that penalty, and which district institutions buffer or concentrate it.",
    keyFindings: [
      "Tail-end plots have lower NDMI, GCVI, and evapotranspiration even after controls for water-rights seniority, soil, groundwater access, market proximity, and fixed effects.",
      "The drought–position penalty strengthens with distance: at the >10 km threshold, the interaction is −0.014 for NDMI, −0.061 for GCVI, and −0.047 for ET (roughly 2× the full-path coefficients).",
      "A horse-race specification confirms directionality: upstream position drives the gradient, while downstream position fades toward zero.",
      "The gradient is concentrated in surface-water-dominant, junior-rights districts; groundwater access eliminates it entirely, and volumetric pricing nearly fully offsets it where the penalty is largest."
    ],
    // ДОБАВЛЕНО: привязка картинки
    figures: [
      { src: images.jmpStudyAreaMap, caption: "Arizona sample and canal setting" },
      { src: images.jmpWaterGraphPosition, caption: "Water-graph construction" },
      { src: images.jmpDonutIdentification, caption: "Donut identification strategy" },
      { src: images.jmpDonutCoefficients, caption: "Donut coefficients" },
      { src: images.jmpUpstreamDownstreamHorserace, caption: "Upstream vs downstream horse race" },
      { src: images.jmpProductionFunction, caption: "Production function calibration" }
    ]
  },
  {
    slug: "behavioral-games",
    title: "Using Behavioral Games to Understand Water-Saving Technology Adoption in Uzbekistan",
    authors: ["Anton Liutin", "Jamshid Shukurullaev"],
    year: "2026",
    venue: "Working Paper",
    tag: "WORKING PAPER",
    draftOnRequest: true,
    pages: 23,
    abstract: "We conduct a framed field experiment with 190 farmers across four regions of Uzbekistan, modifying the standard Irrigation Game to include an explicit drip irrigation adoption decision. The design surfaces a structural asymmetry: downstream players face the scarcity that drives adoption, but each upstream adopter generates the largest spillover—and the diffusion channel runs only downstream, leaving the social returns to upstream adoption uncollected at equilibrium. A two-social-cost model formalizes the wedge, and the experimental data confirm it: in-game decisions also reflect farmers' real water access, irrigation costs, and social networks.",
    keyFindings: [
      "Adoption is downstream-driven by scarcity: in-game, P5 adopts at 62% versus 49% for P1, and the same pattern appears in real-world data—farmers with more downstream plots and higher irrigation costs adopt more in the game (p < 0.01).",
      "Spillover is upstream-driven: each upstream adopter frees 0.407 downstream water units (p < 0.01); the model predicts P1's adoption alone yields 4.3 lifetime tokens of total downstream gain—the largest single-position externality.",
      "Diffusion runs one way only: upstream adoption raises downstream adoption by 6.4 pp (21.5 pp with player FE), but downstream adoption does not propagate upward. The equilibrium leaves the largest social returns uncollected.",
      "Sessions with higher drip adoption have lower water-consumption Gini coefficients, suggesting that technology adoption can reduce distributional inequality along the canal.",
      "Social structure matters: each additional in-game connection adds 1.5 pp (p < 0.05); agricultural cluster membership adds 40 pp (p < 0.01)."
    ],
    // ДОБАВЛЕНО: привязка картинки
    figures: [
      {
        src: images.behavioralGamesSpilloverHeatmap,
        caption: "Spillover matrix — upstream adoption benefits downstream; downstream adoption benefits no one (below-diagonal cells = 0)"
      },
      {
        src: images.behavioralGamesAdoption,
        caption: "Drip adoption rate by canal position (empirical) — P5 reaches 62%, P1 stays at 49%"
      },
      {
        src: images.behavioralGamesAdoptionThreshold,
        caption: "Break-even DI value by position — P5 never crosses the R=14 cost line, explaining why the most-downstream player doesn't adopt"
      },
      {
        src: images.behavioralGamesSpilloverCascade,
        caption: "Water cascade from P1's DI adoption — P1 saves 0.52 units, downstream gains rise from +0.09 (P2) to +0.21 (P5)"
      },
      {
        src: images.behavioralGamesGamePrimitives,
        caption: "Game mechanics — water supply vs. infrastructure (a); GI vs. DI production curves with water-saved region shaded (b)"
      },
      {
        src: images.behavioralGamesSessionDynamics,
        caption: "Water consumption and infrastructure investment dynamics by position (empirical)"
      },
      {
        src: images.behavioralGamesGini,
        caption: "Water-consumption Gini falls as DI spreads in Sessions 2–3; investment Gini stays low"
      }
    ]
  },
  {
    slug: "water-conservation",
    title: "Water Conservation Through Simplified Drip Irrigation Scheduling for Cotton Cultivation in Uzbekistan",
    authors: ["Jamshid Shukurullaev", "Ahmad Hamidov", "Anton Liutin"],
    year: "2026",
    venue: "R&R · Water (MDPI)",
    tag: "UNDER REVIEW",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5535146",
    pages: 31,
    draftOnRequest: false,
    abstract: "Water scarcity has accelerated in Central Asia, while practical scheduling guidance for drip irrigation remains limited. We apply an FAO-56 evapotranspiration-based scheduling approach to drip-irrigated cotton in Jizzakh, packaged as pre-calculated tables for farmers, and validate it through a two-phase design: paired researcher-supervised drip–furrow fields during 2021–2023, and a 32-farmer adoption panel during 2022–2023. Pre-calculated scheduling tables can convert existing drip hardware into measurable water-saving and yield gains.",
    keyFindings: [
      "Phase I (researcher-supervised) establishes the production frontier: scheduled drip vs farmer-managed furrow yields +39.9% seed-cotton, uses 24.3% less water, and raises water productivity by 84.9%.",
      "The paradox: in 2022 farmer drip plots used 47% less water than furrow yet stayed well below the Phase I frontier. Drip without scheduling means systematic under-irrigation—the intuition 'less water = better' over-saves and sacrifices yield.",
      "The fix is more water, counter-intuitively: pre-calculated tables raised drip water application by 31.6% in 2023, lifting yields to the experimental frontier while keeping water use below furrow.",
      "The Difference-in-Differences estimate identifies the guidance gap, not drip adoption itself, as the binding constraint on smallholder drip performance.",
      "Reference evapotranspiration is temporally stable in arid regions (Jizzakh CV = 21.1%), and the same stable-ET cluster contains nine critically water-stressed countries—Kuwait, Libya, Egypt, UAE, Qatar, Turkmenistan, Syria, Uzbekistan, Saudi Arabia—where a hub-and-spoke distribution of pre-calculated tables should transfer."
    ],
    // ДОБАВЛЕНО: привязка картинки
    figures: [
      {
        src: images.waterCottonKcStages,
        caption: "Cotton growth stages and crop coefficients — the underlying schedule indexed by Kc and ET₀"
      },
      {
        src: images.waterEvaporationStabilityMap,
        caption: "Spatial view — evaporation stability and agricultural water stress overlap in the arid belt"
      },
      {
        src: images.waterStressStabilityScatter,
        caption: "Analytical view — countries with critical water stress (top) cluster at low evaporation CV (left). The transfer-target zone."
      }
    ]
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
