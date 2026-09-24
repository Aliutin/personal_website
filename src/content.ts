// ============================================================================
// EDITABLE CONTENT — change values here, pages will update automatically.
// All text, links, and data for the site live in this single file.
// ============================================================================

import portrait from "./assets/portrait-2026.webp";
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
import behavioralGamesHero from "./assets/behavioral-games-hero.webp";
import behavioralGamesProductionFunctions from "./assets/behavioral-games-production-functions.png";
import waterCottonHero from "./assets/water-cotton-hero.webp";

import jmpWaterGraphSteps from "./assets/jmp-water-graph-steps.png";
import jmpDistantUpstreamDesign from "./assets/jmp-distant-upstream-design.png";
import jmpCutoffCoefficients from "./assets/jmp-cutoff-coefficients.png";
import jmpUpstreamDownstreamContrast from "./assets/jmp-upstream-downstream-contrast.png";
import jmpYearByYearInteractions from "./assets/jmp-year-by-year-interactions.png";
import waterGraphicalAbstract from "./assets/water-graphical-abstract.png";
import waterDripSchedule from "./assets/water-drip-schedule.png";
import waterNirHubNetwork from "./assets/water-nir-hub-network.png";
import behavioralGamesTwoGradients from "./assets/behavioral-games-two-gradients.png";
import behavioralGamesBeliefDial from "./assets/behavioral-games-belief-dial.png";
import behavioralGamesSpilloverAccounting from "./assets/behavioral-games-spillover-accounting.png";
import behavioralGamesPersistence from "./assets/behavioral-games-persistence.png";
import behavioralGamesProtocol from "./assets/behavioral-games-protocol.png";

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
  behavioralGamesHero,
  behavioralGamesProductionFunctions,
  waterCottonHero,
  jmpWaterGraphSteps,
  jmpDistantUpstreamDesign,
  jmpCutoffCoefficients,
  jmpUpstreamDownstreamContrast,
  jmpYearByYearInteractions,
  waterGraphicalAbstract,
  waterDripSchedule,
  waterNirHubNetwork,
  behavioralGamesTwoGradients,
  behavioralGamesBeliefDial,
  behavioralGamesSpilloverAccounting,
  behavioralGamesPersistence,
  behavioralGamesProtocol,
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
  description: "Research on water scarcity and interdependence along Arizona's canal networks, alongside fieldwork-based studies of technology adoption and irrigation scheduling in Uzbekistan. Select a paper for an extended preview."
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
      title: "When Scarcity Reveals Directional Network Interdependence: Evidence from Arizona Canals",
      authors: ["Anton Liutin"],
      year: "2026",
      venue: "Job Market Paper · UW–Madison",
      tag: "JOB MARKET PAPER",
      draftOnRequest: true,
      pages: 41,
      abstract: "Water rights and district rules govern claims to water, but Arizona farms receive it through canals shared with upstream users. I map 54,946 plots onto a directed canal network and follow them from 2016 to 2023. In plot fixed-effects regressions, the association between upstream cropped acreage and GCVI, a satellite yield proxy, turns more negative during sustained drought, and the change is larger when nearby upstream fields are excluded. Beyond 10 km, a downstream measure entered jointly shows no corresponding change. Within junior-rights districts, drought reveals both a plot's 2016–2019 baseline of upstream cropping and each year's departure from it. The shift appears in 2020–2022 but not in the meteorologically harsher 2010–2014 drought, when major delivery schedules largely held, and measured canal flow in Wellton-Mohawk and Yuma County WUA points the same way. The findings support an interpretation in which system slack masks delivery frictions until sustained scarcity makes them consequential.",
      keyFindings: [
        "Sustained drought shifts the association between upstream cropped acreage and GCVI downward: the drought interaction is −0.015 over the full upstream path and −0.035 once upstream plots within 10 km are excluded, and it is negative at every exclusion radius. Under network-level clustering only the >10 km cell is significant, so the evidence rests on the pattern across cutoffs and designs rather than any single coefficient.",
        "The change follows the direction of flow. Beyond 10 km, with both measures entered jointly, the upstream interaction is −0.030 and the downstream interaction 0.002; their difference of −0.032 has p = 0.026 under two-way clustering and is marginal or insignificant under network clustering. The estimates identify a direction, not an actor: administered head-to-tail rationing and competition among farmers would both produce them.",
        "Inside ten junior-rights districts, one between-plot standard deviation of the 2016–2019 upstream cropped share is associated with 0.034 lower ln(1+GCVI) under district drought, and a ten-percentage-point departure above that baseline with a −0.014 shift, with essentially no association outside drought. Next year's departure carries the opposite sign, so the coefficients describe a dynamic association rather than the effect of a single planting decision.",
        "Timing follows delivery conditions rather than rainfall alone: year-specific interactions are near zero in 2017–2019, negative in 2020–2022, and back at zero in 2023, and a separately constructed 2008–2023 panel shows no comparable interaction in the harsher 2010–2014 drought. In Wellton-Mohawk and Yuma County WUA, more summer canal water flattens the downstream disadvantage in GCVI and crop moisture; evidence that more wells weaken the drought-related change is suggestive.",
        "In a companion 2021–22 specification, the gap between fields at the 25th and 75th percentiles of combined upstream exposure is 1.4–2.7 percent of crop revenue at an assumed pass-through, about $21–42 per acre of cotton and $30–59 per acre of alfalfa, or roughly 14–28 percent of net returns in University of Arizona budgets. These are revenue-equivalent magnitudes of an association, not losses in profit or welfare."
      ],
      figures: [
        { src: images.jmpStudyAreaMap, caption: "Arizona study area: agricultural plots, irrigation districts, and canal systems" },
        { src: images.jmpWaterGraphSteps, caption: "Water-graph construction for an example canal network near Yuma" },
        { src: images.jmpDistantUpstreamDesign, caption: "Distant upstream cropped acreage and local-shock controls" },
        { src: images.jmpCutoffCoefficients, caption: "Upstream cropped acreage × drought across exclusion cutoffs" },
        { src: images.jmpUpstreamDownstreamContrast, caption: "Upstream vs downstream cropped acreage in the joint regression" },
        { src: images.jmpYearByYearInteractions, caption: "Year-by-year upstream interactions against drought and shortage calendars" }
      ]
    },
  {
      slug: "behavioral-games",
      title: "When Efficiency Cannot Substitute for Allocation: Technology Adoption in a Sequential Canal",
      authors: ["Anton Liutin", "Jamshid Shukurullaev"],
      year: "2026",
      venue: "Working Paper",
      tag: "WORKING PAPER",
      draftOnRequest: true,
      pages: 44,
      abstract: "We study why farmers adopt an efficiency technology where it can do least. In a lab-in-the-field experiment with 190 farmers in 38 five-person irrigation games in Uzbekistan, eventual Session-2 drip adoption rose monotonically from 36.8 percent at the canal head to 73.7 percent at the tail. Over the same seats, the model-implied net value of a round-1 purchase over each game's realized path, an evaluation extending beyond the four-round estimation window, fell from −1.60 tokens, positive in 26 of 38 games, to −33.44, positive in none. The tail's per-round gain is too small to amortize the common 45-token fee, and its loss survives high-water state bounds and every belief on the maintained upstream-restraint dial. Model-implied counterfactuals reverse the geography of demand: across six stable full-stock cells, downstream users re-extract 97.7–103.6 percent of an upstream adopter's own-extraction reduction, whereas the tail seat has no downstream user. Demand tracked exposure to scarcity; within the maintained account, technology could not substitute for water allocation.",
      keyFindings: [
        "When drip first became available in Session 2, eventual adoption rose monotonically down the canal: 36.8, 42.1, 44.7, 57.9, and 73.7 percent from P1 to P5. The model-implied net value of a round-1 purchase over each game's realized path moved the other way, from −1.60 to −33.44 tokens (Session 3: +11.47 to −35.74), and the tail purchase is positive in none of the 38 games in either session.",
        "Within the maintained token account, a longer horizon or optimistic beliefs do not rescue the tail purchase. P5's per-round gain of 2.2–2.4 tokens implies a break-even of 20.4 and 18.7 productive rounds against sessions averaging 5.55 and 8.37 rounds, and even the most favorable belief on the registered upstream-restraint dial leaves P5's value between −36.2 and −10.7 tokens across the registered cases. Both calculations extrapolate beyond the four-round estimation window, and “overpayment” refers to modeled token value, not subjective welfare.",
        "Tail participants remain close to the locked model on extraction: across 302 model-eligible paid P5 nodes, observed extraction averages 3.80 units against 3.84 model-implied. This makes a general failure to solve the extraction problem less plausible, but it does not establish comprehension or exclude confusion specific to the adoption decision.",
        "In separate one-adopter model counterfactuals, an upstream adopter's own extraction falls by 0.253–0.623 water units per group-round, and downstream users re-extract 97.7–103.6 percent of that release across six stable full-stock cells; all six net-group 95% intervals include zero. Modeled provision sits at the head seats P1–P3 while purchases concentrate at the tail. These are controlled counterfactuals in extraction units, not identified drip effects, conservation, or welfare estimates.",
        "Adoption differs across decision margins. Among Session-2 nonadopters, first-time Session-3 adoption was 43.5% after a full-water history and 16.1% after a degraded-water history (+27.4 percentage points, wild-cluster p = 0.016), while 83.5% of Session-2 adopters repurchased against 34.4% first-time adoption. Because histories and prior adoption are endogenous, these are descriptive associations, not learning or habit effects."
      ],
      figures: [
        {
          src: images.behavioralGamesTwoGradients,
          caption: "Session-2 adoption rises from 36.8% at P1 to 73.7% at P5, while the model-implied realized-path value of a round-1 purchase falls from −1.60 to −33.44 tokens"
        },
        {
          src: images.behavioralGamesBeliefDial,
          caption: "Upstream restraint matters most to the tail, but no belief on the registered restraint dial makes P5 adoption pay; degraded-water Session-3 P4 is the sole pivotal cell"
        },
        {
          src: images.behavioralGamesSpilloverAccounting,
          caption: "Model-implied one-adopter accounting — downstream seats re-extract nearly all of an upstream adopter's own saving; P5 has no downstream recipient"
        },
        {
          src: images.behavioralGamesPersistence,
          caption: "Descriptive persistence across three choice margins — repurchase vs. first-time adoption, P5 extraction lag dependence, and exact investment repetition"
        },
        {
          src: images.behavioralGamesProtocol,
          caption: "Experimental protocol — fixed session order with re-randomized seats, and public within-round moves from head (P1) to tail (P5)"
        },
        {
          src: images.behavioralGamesProductionFunctions,
          caption: "Game material — printed cotton output by water input; drip peaks at about 7 water units and furrow irrigation at about 10"
        }
      ]
    },
  {
      slug: "water-conservation",
      title: "Closing the Irrigation Guidance Gap: Simplified Evapotranspiration-Based Drip Scheduling for Cotton in Jizzakh, Uzbekistan",
      authors: ["Jamshid Shukurullaev", "Ahmad Hamidov", "Anton Liutin"],
      year: "2026",
      venue: "Working Paper",
      tag: "WORKING PAPER",
      pages: 30,
      draftOnRequest: true,
      abstract: "Uzbekistan promotes drip irrigation as water availability falls, but farmers often receive the hardware without scheduling guidance. We test whether a simplified, pre-calculated FAO-56 evapotranspiration-based schedule for cotton in Jizzakh, requiring no on-farm sensors or specialist training, can deliver the benefits of drip irrigation to existing adopters. The schedule is validated in two phases: paired researcher-supervised drip–furrow trials on four farms over 2021–2023, and a difference-in-differences study of 32 existing drip adopters before and after they received the tables (2022–2023). In the trials, scheduled drip raised yield by 39.9% and reduced delivered water by 31.9% relative to farmer-managed furrow plots. Unguided adopters were under-irrigating; with the tables alone they raised drip water application by 24.6%, and in 2023 guided drip plots yielded 60.3% more than their furrow plots with 34.6% less water. A spatial screen over 1991–2023 shows the seasonal net irrigation requirement is stable between years wherever rainfall is a small fraction of demand.",
      keyFindings: [
        "In the paired Phase I trials (four farms, 2021–2023), researcher-supervised scheduled drip yielded 39.9% more seed cotton than farmer-managed furrow plots, used 31.9% less delivered water, and raised water productivity by 105.4%. Plots were not randomly assigned within farms, so this is a supervised benchmark, not an average treatment effect of drip alone.",
        "Before guidance, in 2022, the 32 existing adopters' drip plots used 52.3% less water than their furrow plots and yielded 38.0% more, but their drip yields (3,216 kg/ha) stayed well below the Phase I drip benchmark (3,975 kg/ha). Unguided drip adopters were under-irrigating.",
        "After receiving the tables alone, farmers raised drip water application by 24.6% in means, from 3,340 to 4,160 m³/ha; 31 of 32 applied more water and all 32 raised drip yield. Relative to the furrow trend, the difference-in-differences estimates are +16.2% for yield, +37.1% for water use, and −15.2% for water productivity.",
        "In 2023, guided drip plots yielded 60.3% more than furrow plots with 34.6% less delivered water and 145.3% higher water productivity. These contrasts use unadjusted weir volumes for furrow; under the 0.90 district-coefficient sensitivity the 2023 water contrast is −27.4%, while the difference-in-differences estimates are unchanged.",
        "Across 14,445 districts of water-stressed Asia and Africa, the seasonal net irrigation requirement has a median interannual CV of 5.4% in arid districts, and ten of the twelve critically water-stressed countries meet a ±10% criterion; Sudan and Pakistan do not because monsoon rain carries most of their crop demand. For Uzbekistan, 19 reference sites would reproduce district requirements within ±10% for 99% of the cotton area; the hub counts are lower bounds."
      ],
      figures: [
        {
          src: images.waterGraphicalAbstract,
          caption: "Graphical abstract — the 32-farm panel before (2022) and after (2023) the printed tables, 2023 guided drip vs furrow contrasts, and the 19 modelled reference sites for 99% of Uzbekistan's cotton area"
        },
        {
          src: images.waterDripSchedule,
          caption: "Pre-calculated 2023 drip-irrigation and fertigation schedule for one Phase I field — design volumes per event on a nominal 3.5-day cycle, with phenological stages and Kc ranges; design targets, not realised water use"
        },
        {
          src: images.waterNirHubNetwork,
          caption: "Interannual CV of the net irrigation requirement, 1991–2023 (A); national CVs for the twelve critically water-stressed countries, ET₀ vs net requirement (B); the 40-hub network for Uzbekistan's cotton (C)"
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
