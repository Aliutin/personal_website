// ============================================================================
// EDITABLE CONTENT — change values here, pages will update automatically.
// All text, links, and data for the site live in this single file.
// ============================================================================

import portrait from "./assets/9639e22a7351a93d2c01765205f58231eff8179f.webp";
import column1 from "./assets/bf0b7251441e4704ceca49b268e03bf6d4a58be1.webp";
import column2 from "./assets/5136d2c4cc870258fb915013ac009e1fe7620808.webp";
import column3 from "./assets/9c6167c3e6a3b4333785e3ce161f7341c950782d.webp";
import ifpriAnonymityCover from "./assets/ifpri-anonymity-uzbekistan.webp";
import cgiarWaterSubsidiesCover from "./assets/cgiar-water-subsidies.jpg";
import cgiarIrrigationInnovationCover from "./assets/cgiar-irrigation-innovation.jpg";
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
  title: "PhD Candidate · Agricultural & Applied Economics",
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
  { label: "About", to: "/#about" },
  { label: "Research", to: "/research" },
  { label: "Experience", to: "/experience" },
  { label: "Blog", to: "/blog" },
  { label: "CV", to: "/cv.pdf" },
];

export const aboutBio =
  "Most of my work asks a version of the same question: when water grows scarce, who absorbs the loss, who escapes it, and how much of that is shaped by the rules rather than by nature?";

export const researchInterests = [
  "Environmental & Natural Resource Economics",
  "Development Economics",
  "GIS & Spatial Analysis",
];

// --- НОВЫЙ БЛОК ДЛЯ ШАПКИ RESEARCH ---
export const researchIntro = {
  title: "Research papers.",
  description: "Research on water allocation and drought inequality in Arizona, alongside fieldwork-based studies of technology adoption and irrigation scheduling in Uzbekistan. Select a paper for an extended preview."
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
    detail: "Framed field experiment with 190 farmers across four regions, drawing participants from the IFPRI farmer survey. Supported by CGIAR SPIA, with Jamshid Shukurullaev."
  },
  {
    kind: "fieldwork",
    startYear: 2024,
    startMonth: 9,
    endYear: 2024,
    endMonth: 11,
    periodLabel: "Sep – Nov 2024",
    role: "Fieldwork",
    title: "Large-scale farmer survey — Uzbekistan",
    org: "IFPRI · CGIAR NEXUS Gains",
    orgShort: "IFPRI",
    detail: "Prepared and fielded a survey of small and large farmers across five regions of Uzbekistan with IFPRI. Trained and monitored local enumerators across survey regions."
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
    title: "Uzbekistan — Interviews on water-saving technologies",
    org: "7 regions of Uzbekistan",
    orgShort: "Uzbekistan",
    periodLabel: "Summer 2023",
    startYear: 2023,
    startMonth: 6,
    endYear: 2023,
    endMonth: 8,
    detail:
      "Conducted focus-group discussions and in-depth farmer interviews across seven regions of Uzbekistan on the adoption of water-saving technologies, in collaboration with Paul Castañeda Dower and IFPRI.",
  },
  {
    kind: "fieldwork",
    role: "Fieldwork",
    title: "Uzbekistan — Large-scale farmer survey",
    org: "IFPRI · CGIAR NEXUS Gains",
    orgShort: "Uzbekistan · IFPRI",
    periodLabel: "Sep – Nov 2024",
    startYear: 2024,
    startMonth: 9,
    endYear: 2024,
    endMonth: 11,
    detail:
      "Prepared and fielded a survey of small and large farmers across five regions of Uzbekistan with IFPRI. Trained and supervised local enumerators across the survey regions.",
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
      "Designed and ran a framed-field experiment with 190 farmers across four regions, using a subsample of the IFPRI survey. Conducted jointly with Jamshid Shukurullaev with support from CGIAR SPIA.",
  },
  {
    kind: "teaching",
    role: "Teaching Assistant",
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
    role: "Teaching Assistant",
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
    role: "Teaching Assistant",
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
  if (tag === "UNDER REVIEW" || tag === "REVISION RESUBMITTED") {
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
    title: "First in Time, Last in Line? Water Rights, Canal Position, and Drought Inequality in Arizona",
    authors: ["Anton Liutin"],
    year: "2026",
    venue: "Job Market Paper · UW–Madison",
    tag: "JOB MARKET PAPER",
    draftOnRequest: true,
    pages: 64,
    abstract: "Do formal water rights eliminate within-canal inequality when water physically moves from head to tail? I build a water-graph linking 54,946 agricultural plots across Arizona's canal networks. The cross-section measures whether delivery position predicts crop outcomes; the panel uses year-to-year changes in distant upstream irrigation activity during the 2016–2023 Colorado River drought. Nearby fallowing controls absorb spatially correlated local shocks, while activity among canal-connected upstream plots beyond exclusion cutoffs provides the identifying variation. The results show a pattern-supported drought gradient concentrated in surface-water-dominant and junior-rights districts, while groundwater access and district institutions are associated with substantial attenuation.",
    keyFindings: [
      "Downstream plots show significantly lower canopy moisture (NDMI) and chlorophyll vigor (GCVI) after controls; the corresponding evapotranspiration level estimate is smaller and statistically insignificant. The full head-to-tail movement predicts a GCVI decline equal to 5.1% of a standard deviation.",
      "The distant-upstream-activity × drought interaction strengthens as nearby variation is excluded. At the >10 km cutoff, the estimates are −0.008 for NDMI, −0.035 for GCVI, and −0.023 for ET; the paper treats the pattern across cutoffs and outcomes as the evidence rather than any single coefficient.",
      "A downstream-activity placebo attenuates once distant upstream activity is included, supporting a directional water-competition interpretation most clearly for vegetation health.",
      "The drought-state upstream-activity gradient is concentrated in surface-water-dominant districts and is near zero in groundwater-dominant and mixed districts. Junior-rights districts face substantially steeper drought amplification than senior-rights districts.",
      "Calibrated magnitudes imply roughly $6.0 million per year of gross revenue-equivalent exposure, concentrated almost entirely in junior surface-water-dependent districts. These are scale exercises, not estimates of profit, causal welfare, or an optimal allocation."
    ],
    // ДОБАВЛЕНО: привязка картинки
    figures: [
      { src: images.jmpStudyAreaMap, caption: "Arizona study area and canal systems" },
      { src: images.jmpWaterGraphPosition, caption: "Water-graph construction" },
      { src: images.jmpDonutIdentification, caption: "Distant upstream activity design" },
      { src: images.jmpDonutCoefficients, caption: "Distant upstream activity coefficients" },
      { src: images.jmpUpstreamDownstreamHorserace, caption: "Upstream vs downstream activity placebo" },
      { src: images.jmpProductionFunction, caption: "Calibrated water-reallocation example" }
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
    pages: 51,
    abstract: "We conduct a framed field experiment with 190 farmers across four regions of Uzbekistan, covering 15 of the 16 surveyed districts in 38 five-player games. Random assignment to canal position shows that new adoption concentrates at the scarcity-stressed tail: Player 5's first-adoption hazard is 8.9 percentage points above Player 1's. Upstream adoption is associated with 0.407 units more water consumed by each downstream player, but we find no robust evidence that it triggers others to adopt. Linked survey data show that in-game behavior also reflects farmers' real water-access positions, agricultural-cluster ties, and willingness to pay.",
    keyFindings: [
      "Player 5's first-adoption hazard is 8.9 percentage points above Player 1's (wild-bootstrap p = 0.009; randomization-inference p = 0.001), even though the calibrated model predicts that the tail player should not adopt.",
      "Each additional upstream adopter is associated with 0.407 units more water consumed by downstream players (wild-bootstrap p = 0.018) and a 1.9 percentage-point larger downstream share of group water (p < 0.001). Adoption itself is not randomly assigned, so these are conditional associations.",
      "There is no robust evidence of peer-triggered adoption: the first-adoption-hazard estimate for contemporaneous upstream adoption is 0.005 (p = 0.855), and lagged estimates are not positive. The measurable spillover operates through water quantities, not observable imitation.",
      "The conservation association is concentrated upstream: adopters in positions 1–2 consume 0.886 fewer units than non-adopters (p < 0.001), while the downstream estimate is not statistically different from zero.",
      "Agricultural-cluster membership is associated with a 31 percentage-point higher probability of ever adopting in the game (p = 0.042); informal social connections do not robustly predict adoption once inference respects the 38 game clusters."
    ],
    // ДОБАВЛЕНО: привязка картинки
    figures: [
      {
        src: images.behavioralGamesSpilloverHeatmap,
        caption: "Calibrated model — upstream adoption creates downstream water benefits, while downstream adoption creates no upstream benefit"
      },
      {
        src: images.behavioralGamesAdoption,
        caption: "Raw drip-adoption rates by canal position — pooled rates are 62% for P5 and 49% for P1"
      },
      {
        src: images.behavioralGamesAdoptionThreshold,
        caption: "Calibrated model — DI profitability varies non-monotonically with water supply and canal position"
      },
      {
        src: images.behavioralGamesSpilloverCascade,
        caption: "Calibrated model — P1 adoption reduces own extraction and increases water available to every downstream player"
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
        caption: "Descriptive inequality dynamics across the three experimental sessions"
      }
    ]
  },
  {
    slug: "water-conservation",
    title: "Water Conservation Through Simplified Drip Irrigation Scheduling for Cotton Cultivation in Uzbekistan",
    authors: ["Jamshid Shukurullaev", "Ahmad Hamidov", "Anton Liutin"],
    year: "2026",
    venue: "Revision resubmitted · Water (MDPI), manuscript water-4014559 · June 30, 2026",
    tag: "REVISION RESUBMITTED",
    pages: 26,
    draftOnRequest: true,
    abstract: "Water scarcity has accelerated in Central Asia, while practical scheduling guidance for drip irrigation remains limited. We apply an FAO-56 evapotranspiration-based scheduling approach to drip-irrigated cotton in Jizzakh, packaged as pre-calculated tables for farmers, and validate it through a two-phase design: paired researcher-supervised drip–furrow fields during 2021–2023, and a 32-farmer adoption panel during 2022–2023. Pre-calculated scheduling tables can convert existing drip hardware into measurable water-saving and yield gains.",
    keyFindings: [
      "Phase I (researcher-supervised) establishes the production frontier: scheduled drip vs farmer-managed furrow yields +39.9% seed-cotton, uses 24.3% less water, and raises water productivity by 84.9%.",
      "The paradox: in 2022 farmer drip plots used 47% less water than furrow yet stayed well below the Phase I frontier. Drip without scheduling means systematic under-irrigation—the intuition 'less water = better' over-saves and sacrifices yield.",
      "The fix is more water, counter-intuitively: pre-calculated tables raised observed drip water application by 24.6%, from 3,340 to 4,160 m³/ha. Guided drip still used 27.4% less water than furrow while producing 60.3% higher yield.",
      "The difference-in-differences estimates reveal a guidance gap: after receiving scheduling tables, existing drip adopters increased water application and moved closer to the researcher-supervised yield frontier.",
      "Reference evapotranspiration is temporally stable in arid regions (Jizzakh CV = 21.1%). Nine critically water-stressed countries—Kuwait, Libya, Egypt, UAE, Qatar, Turkmenistan, Syria, Uzbekistan, and Saudi Arabia—are candidates for targeted trials, subject to local agronomic validation."
    ],
    // ДОБАВЛЕНО: привязка картинки
    figures: [
      {
        src: images.waterCottonKcStages,
        caption: "Cotton growth stages and crop coefficients — the underlying schedule indexed by Kc and ET₀"
      },
      {
        src: images.waterEvaporationStabilityMap,
        caption: "Spatial view — evaporation stability and agricultural water stress identify possible settings for targeted local trials"
      },
      {
        src: images.waterStressStabilityScatter,
        caption: "Analytical view — nine critically water-stressed countries with low evaporation variability are candidates for targeted trials, not evidence of direct transferability"
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
    image: cgiarWaterSubsidiesCover,
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
    image: cgiarIrrigationInnovationCover,
  },
];
