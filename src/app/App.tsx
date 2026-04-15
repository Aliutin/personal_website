import { useState } from "react";
import { ArrowDownRight, Droplets, Leaf, Menu, X } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Area,
} from "recharts";

import portrait from "../assets/9639e22a7351a93d2c01765205f58231eff8179f.webp";
import research1Bg from "../assets/4cd09791391bbe4100c0987d0be2d891ff9f42e0.webp";
import column1 from "../assets/bf0b7251441e4704ceca49b268e03bf6d4a58be1.webp";
import column2 from "../assets/5136d2c4cc870258fb915013ac009e1fe7620808.webp";
import column3 from "../assets/9c6167c3e6a3b4333785e3ce161f7341c950782d.webp";
import column4 from "../assets/671168248dd320b7836d5185ee585e80668204a2.webp";
import column5 from "../assets/7dec002ac553762ed6090e415cec09bbeae05a57.webp";
import personal1 from "../assets/cbb1fa94e4f852cb03119d1c6bddf1948f01c8e1.webp";
import personal2 from "../assets/ef7a374bee7e4966b910f79bca9b81011dc988cd.webp";
import personal3 from "../assets/9edfaff294da4b113d5d956e36f592c600ae24bf.webp";
import personal4 from "../assets/0b20486cba0eb82a4807829f9369745f7f68026a.webp";

// ============================================================================
// EDITABLE CONTENT — change values here, the page below will update automatically
// ============================================================================

const profile = {
  name: "Anton Liutin",
  title: "PhD Candidate · Ag & Applied Economics",
  email: "liutin@wisc.edu",
  phone: "+1 608 640 15 06",
  affiliation:
    "University of Wisconsin–Madison · Department of Agricultural & Applied Economics",
  location: "Madison, WI",
  cvUrl: "/cv.pdf",
};

type NavLink = { label: string; href: string; external?: boolean };

const navLinks: NavLink[] = [
  { label: "About Me", href: "#about" },
  { label: "CV", href: "/cv.pdf", external: true },
  { label: "Research", href: "#research" },
  { label: "Teaching", href: "#teaching" },
  { label: "Columns", href: "#columns" },
  { label: "Data", href: "#data" },
];

const aboutBio =
  "I'm a PhD candidate in Agricultural & Applied Economics at UW–Madison. I came to economics from physics via development economics at the New Economic School in Moscow. My research interests are development economics, environmental and natural resource economics, and economic history.";

type Education = {
  degree: string;
  school: string;
  period: string;
  thesis?: string;
  advisor?: string;
};

const education: Education[] = [
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

const researchInterests = [
  "Development Economics",
  "Environmental & Natural Resource Economics",
  "Economic History",
];

type TeachingItem = {
  title: string;
  org: string;
  period: string;
  detail: string;
  tag: string;
};

const teaching: TeachingItem[] = [
  {
    title: "TA — Development Economics (M.A.)",
    org: "New Economic School",
    period: "Fall 2020",
    detail: "Course by Michele Valsecchi, Assistant Professor, NES",
    tag: "TEACHING",
  },
  {
    title: "Individual Tutoring — Mathematics for Economics",
    org: "Students from NES, HSE Math Dept, ICES HSE",
    period: "2017 – 2022",
    detail: "Bachelor & Master degree students in math-intensive programs",
    tag: "TUTORING",
  },
];

type RARole = { role: string; pi: string; org: string; period: string };

const researchAssistantRoles: RARole[] = [
  {
    role: "Research Assistant",
    pi: "Paul Dower",
    org: "UW–Madison",
    period: "Summer 2023 – present",
  },
  {
    role: "Research Assistant",
    pi: "Corbett Ginger",
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

type Tool = { name: string; detail: string };

const tools: Tool[] = [
  { name: "Python", detail: "Pandas, GeoPandas, NumPy, SciPy" },
  { name: "ArcGIS", detail: "Geospatial analysis" },
  { name: "QGIS", detail: "Open-source GIS" },
  { name: "Stata", detail: "Econometrics" },
  { name: "LaTeX", detail: "Typesetting" },
];

const languages = [
  { name: "Russian", level: "Native" },
  { name: "English", level: "Fluent" },
];

// ============================================================================
// END EDITABLE CONTENT
// ============================================================================

const chartData1 = [
  { year: "2015", canal: 600, precip: 800 },
  { year: "2016", canal: 400, precip: 300 },
  { year: "2017", canal: 800, precip: 600 },
  { year: "2018", canal: 500, precip: 850 },
  { year: "2019", canal: 600, precip: 400 },
  { year: "2020", canal: 300, precip: 700 },
  { year: "2021", canal: 800, precip: 200 },
];

const chartData2 = [
  { year: "2014", canal: 1200, precip: 1100, historical: 1000 },
  { year: "2015", canal: 1150, precip: 1050, historical: 1000 },
  { year: "2016", canal: 1250, precip: 1150, historical: 1000 },
  { year: "2017", canal: 1300, precip: 1200, historical: 1000 },
  { year: "2018", canal: 1350, precip: 1250, historical: 1000 },
  { year: "2019", canal: 1400, precip: 1300, historical: 1000 },
  { year: "2020", canal: 1500, precip: 1350, historical: 1000 },
  { year: "2021", canal: 1600, precip: 1400, historical: 1000 },
  { year: "2022", canal: 1650, precip: 1450, historical: 1000 },
  { year: "2023", canal: 1700, precip: 1500, historical: 1000 },
  { year: "2024", canal: 1800, precip: 1600, historical: 1000 },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#fafafa] min-h-screen text-[#1a1a1b] font-['Golos_Text',sans-serif]">
      {/* Header */}
      <header className="bg-[#f9f9f7] border-b border-[#d2d2d3] sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex flex-col min-w-0">
            <h1 className="text-4xl font-['Ovo',serif] leading-tight whitespace-nowrap">{profile.name}</h1>
            <div className="flex items-center gap-2 text-[#565659] text-base font-medium whitespace-nowrap">
              <span className="w-4 h-4 bg-[#ff7b1b] rounded-full inline-block shrink-0" />
              <span>{profile.title}</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <nav className="flex gap-5 font-medium text-[#565659]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="whitespace-nowrap hover:text-[#1a1a1b] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={`mailto:${profile.email}`}
              className="bg-[#ff7b1b] text-white px-5 py-2.5 font-medium uppercase whitespace-nowrap hover:bg-orange-600 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden p-2 text-[#1a1a1b]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#d2d2d3] bg-[#f9f9f7]">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4 font-medium text-[#565659]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 hover:text-[#1a1a1b] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setMenuOpen(false)}
                className="bg-[#ff7b1b] text-white px-6 py-3 font-medium uppercase hover:bg-orange-600 transition-colors text-center mt-2"
              >
                Contact Me
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col-reverse lg:flex-row items-stretch pt-8 lg:pt-0 border-b border-[#d2d2d3]">
        <div className="lg:w-1/2 flex flex-col justify-between min-h-[480px]">
          <div className="px-6 lg:pl-12 pt-12 lg:pt-16 max-w-2xl">
            <h2 className="text-4xl lg:text-[42px] font-['Ovo',serif] leading-tight mb-6 text-balance">
              Anton, Agricultural Economist.
              <br />
              I study water management
              <br />
              for sustainable crop production.
            </h2>
            <p className="text-[#565659] text-lg font-medium mb-12 max-w-md">
              Dedicated to advancing the U.S. agricultural sector.
              <br />
              Open to new collaborations and research opportunities
            </p>
            <div className="flex gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="bg-[#ff7b1b] text-white px-8 py-5 text-xl font-medium uppercase hover:bg-orange-600 transition-colors"
              >
                Contact Me
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e5e5e5] px-8 py-5 text-xl font-medium hover:bg-gray-300 transition-colors"
              >
                CV
              </a>
            </div>
          </div>
          <div className="px-6 lg:px-12 py-8 mt-12 lg:mt-0 border-t border-[#d2d2d3]">
            <div className="text-[#565659]">
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-auto h-96 relative overflow-hidden bg-gray-200">
          <img
            src={portrait}
            alt="Anton Liutin"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[40px] font-['Ovo',serif]">About Me</h2>
        </div>

        <div className="px-6 lg:px-12 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[#565659] text-lg font-medium leading-relaxed max-w-xl">
              {aboutBio}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 content-start">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="border border-[#ff7b1b] text-[#ff7b1b] px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="border-t border-[#d2d2d3] md:border-r last:md:border-r-0 p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase mb-6">
                <span>{edu.period}</span>
              </div>
              <h3 className="text-2xl font-['Ovo',serif] leading-tight mb-2">
                {edu.degree}
              </h3>
              <p className="text-[#565659] text-base font-medium mb-4">
                {edu.school}
              </p>
              {edu.thesis && (
                <p className="text-[#757578] text-sm italic mt-auto">
                  Thesis: “{edu.thesis}”
                  {edu.advisor && <span className="block not-italic">Advisor: {edu.advisor}</span>}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Research Section */}
      {/* TODO: Replace the three placeholder cases (Uzbekistan / Arizona / water policy) with real projects when available. Read-more links currently point to "#". */}
      <section id="research" className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[40px] font-['Ovo',serif]">Research example</h2>
        </div>

        {/* Case 1 */}
        <div className="border-t border-[#d2d2d3]">
          <div className="px-6 lg:px-12 py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 bg-[#ff7b1b] rounded-full inline-block" />
              <span className="font-medium uppercase tracking-wider">Research</span>
            </div>
            <h3 className="text-3xl lg:text-[36px] font-['Ovo',serif] max-w-4xl">
              Investigates why farmers adopt
              <br />
              (or don't adopt) water-saving technologies
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row h-auto">
            <div className="lg:w-1/2 h-96 lg:h-[400px] lg:p-8 lg:pr-4 relative">
              <img
                src={research1Bg}
                alt="Agricultural field"
                className="w-full h-full object-cover rounded-none lg:rounded-l-2xl"
              />
            </div>
            <div className="lg:w-1/2 lg:p-8 lg:pl-4 flex">
              <div className="bg-[#b8afda] w-full h-full lg:rounded-r-2xl p-8 lg:p-12 flex flex-col justify-between text-[#1a1a1b]">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 text-[#565659] text-sm font-medium uppercase">
                      <span>Uzbekistan</span>
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                      <span>Cotton</span>
                    </div>
                    <Droplets className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row gap-8 mb-8">
                    <div>
                      <div className="flex items-center gap-3 text-6xl font-normal mb-2">
                        <ArrowDownRight className="w-10 h-10" />
                        14%
                      </div>
                      <p className="text-[#565659] text-xl font-medium leading-tight">
                        Avg. Precipitation
                        <br /> Decline (Since 2014)
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 text-6xl font-normal mb-2">
                        ~72%
                      </div>
                      <p className="text-[#565659] text-xl font-medium leading-tight">
                        State Water Used
                        <br /> by Agriculture
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-2xl font-medium uppercase hover:opacity-80 transition-opacity"
                  >
                    Read more
                    <span className="w-12 h-12 bg-[#1a1a1b] text-white rounded-full flex items-center justify-center">
                      <ArrowDownRight className="w-6 h-6" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div className="border-t border-[#d2d2d3] mt-8">
          <div className="px-6 lg:px-12 py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 bg-[#ff7b1b] rounded-full inline-block" />
              <span className="font-medium uppercase tracking-wider">Research</span>
            </div>
            <h3 className="text-3xl lg:text-[36px] font-['Ovo',serif] max-w-4xl">
              Arizona's Water Paradox: Decadal Trends
              <br /> in Precipitation vs. Canal Reliance
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row h-auto">
            <div className="lg:w-[45%] lg:p-8 lg:pr-4 flex">
              <div className="bg-[#c7d8c5] w-full h-full lg:rounded-l-2xl p-8 lg:p-12 flex flex-col justify-between text-[#1a1a1b]">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 text-[#565659] text-sm font-medium uppercase">
                      <span>USA</span>
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                      <span>CROP ROTATION</span>
                    </div>
                    <Leaf className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-12 mb-12">
                    <div>
                      <div className="flex items-center gap-3 text-6xl font-normal mb-2">
                        <ArrowDownRight className="w-10 h-10" />
                        14%
                      </div>
                      <p className="text-[#424244] text-2xl font-medium leading-tight">
                        Avg. Precipitation
                        <br /> Decline (Since 2014)
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 text-6xl font-normal mb-2">
                        ~72%
                      </div>
                      <p className="text-[#424244] text-2xl font-medium leading-tight">
                        State Water Used
                        <br /> by Agriculture
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-4 text-2xl font-medium uppercase hover:opacity-80 transition-opacity mt-auto"
                >
                  Read more
                  <span className="w-12 h-12 bg-[#1a1a1b] text-white rounded-full flex items-center justify-center">
                    <ArrowDownRight className="w-6 h-6" />
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:w-[55%] h-[500px] lg:h-[540px] lg:p-8 lg:pl-4 flex">
              <div className="bg-[#f3f3f4] w-full h-full lg:rounded-r-2xl p-8 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <h4 className="text-3xl font-medium text-[#424244] leading-tight">Decadal Water Metrics</h4>
                  <div className="flex flex-wrap gap-4 md:justify-end">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-[#ff7b1b] inline-block" />
                      <span className="text-xs font-medium uppercase text-[#474747]">Canal Consumption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-[#2e5b82] inline-block" />
                      <span className="text-xs font-medium uppercase text-[#474747]">Precipitation</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData1} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="year" tickLine={false} axisLine={false} dy={10} fontSize={12} />
                      <YAxis tickLine={false} axisLine={false} dx={-10} fontSize={12} />
                      <Tooltip />
                      <Line type="monotone" dataKey="canal" stroke="#ff7b1b" strokeWidth={2} dot={{ r: 4, fill: "#ff7b1b" }} />
                      <Line type="monotone" dataKey="precip" stroke="#2e5b82" strokeWidth={2} dot={{ r: 4, fill: "#2e5b82" }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 3 */}
        <div className="border-t border-[#d2d2d3] mt-8">
          <div className="px-6 lg:px-12 py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 bg-[#ff7b1b] rounded-full inline-block" />
              <span className="font-medium uppercase tracking-wider">Research</span>
            </div>
            <h3 className="text-3xl lg:text-[36px] font-['Ovo',serif] max-w-4xl">
              Investigates the economic impact of shifting from natural precipitation to engineered water sources
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row-reverse h-auto">
            <div className="lg:w-[45%] lg:p-8 lg:pl-4 flex">
              <div className="bg-[#f5f360] w-full h-full lg:rounded-r-2xl p-8 lg:p-12 flex flex-col justify-between text-[#1a1a1b]">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 text-[#565659] text-sm font-medium uppercase">
                      <span>ARIZONA</span>
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                      <span>WATER POLICY</span>
                    </div>
                    <Droplets className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-medium leading-tight mb-4">
                    Economic Implications<br /> of Adaptive Irrigation Strategies
                  </h4>
                  <p className="text-2xl font-medium leading-snug">
                    An econometric analysis of how modern adaptive irrigation technologies reduce groundwater depletion without significantly compromising maize and wheat yields during extreme drought years.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-4 text-2xl font-medium uppercase hover:opacity-80 transition-opacity mt-12"
                >
                  Read more
                  <span className="w-12 h-12 bg-[#1a1a1b] text-white rounded-full flex items-center justify-center">
                    <ArrowDownRight className="w-6 h-6" />
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:w-[55%] h-[500px] lg:h-[540px] lg:p-8 lg:pr-4 flex">
              <div className="bg-[#f3f3f4] w-full h-full lg:rounded-l-2xl p-8 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <h4 className="text-2xl lg:text-3xl font-medium text-[#424244] leading-tight">
                    The agricultural water<br /> deficit is widening in Arizona
                  </h4>
                  <div className="flex flex-wrap gap-4 md:justify-end md:max-w-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-[#1a1a1b] inline-block" />
                      <span className="text-xs font-medium uppercase text-[#474747]">Historical Avg.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-[#ff7b1b] inline-block" />
                      <span className="text-xs font-medium uppercase text-[#474747]">Canal Consumption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-[#008f24] inline-block" />
                      <span className="text-xs font-medium uppercase text-[#474747]">Precipitation</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData2} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="year" tickLine={false} axisLine={false} dy={10} fontSize={12} />
                      <YAxis tickLine={false} axisLine={false} dx={-10} fontSize={12} />
                      <Tooltip />
                      <Area type="monotone" dataKey="canal" stroke="#ff7b1b" fill="#ff7b1b" fillOpacity={0.2} />
                      <Area type="monotone" dataKey="precip" stroke="#008f24" fill="#008f24" fillOpacity={0.2} />
                      <Line type="monotone" dataKey="historical" stroke="#1a1a1b" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Read All Button */}
        <div className="p-6 lg:p-8">
          <a
            href="#"
            className="block w-full bg-[#ff7b1b] hover:bg-orange-600 text-white text-2xl font-medium uppercase py-6 text-center transition-colors"
          >
            READ ALL
          </a>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[40px] font-['Ovo',serif]">Teaching</h2>
          <p className="text-[#565659] text-lg font-medium mt-4 max-w-2xl">
            Early teaching &amp; tutoring experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {teaching.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-[#d2d2d3] md:border-r last:md:border-r-0 p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase mb-6">
                <span>{item.tag}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <span>{item.period}</span>
              </div>
              <h3 className="text-2xl font-['Ovo',serif] leading-tight mb-4">
                {item.title}
              </h3>
              <p className="text-[#565659] text-base font-medium mb-2">
                {item.org}
              </p>
              <p className="text-[#757578] text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="px-6 lg:px-12 py-10 border-t border-[#d2d2d3]">
          <h3 className="text-2xl font-['Ovo',serif] mb-8">Research Assistant Experience</h3>
          <div className="flex flex-col">
            {researchAssistantRoles.map((role, idx) => (
              <div
                key={idx}
                className="border-t border-[#d2d2d3] py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <span className="font-medium text-[#1a1a1b]">{role.role}</span>
                  <span className="text-[#565659]"> · {role.pi}</span>
                </div>
                <div className="text-[#757578] text-sm font-medium uppercase tracking-wider">
                  {role.org} · {role.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Columns Section */}
      {/* TODO: Replace the 5 placeholder column cards with real articles when available. */}
      <section id="columns" className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[40px] font-['Ovo',serif]">Columns</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {[
            { img: column1, title: "Economic Implications of Adaptive Irrigation Strategies", cat: "INDUSTRY", year: "2024" },
            { img: column2, title: "Water Quotas & Crop Yields", cat: "POLICY", year: "2023" },
            { img: column3, title: "Cotton Harvesting and Water Policy", cat: "RESEARCH", year: "2025" },
            { img: column4, title: "Cotton Harvesting and Water Policy", cat: "RESEARCH", year: "2025" },
            { img: column5, title: "Economic Implications of Adaptive Irrigation Strategies", cat: "INDUSTRY", year: "2023" },
          ].map((col, idx) => (
            <a key={idx} href="#" className="border-t border-[#d2d2d3] border-r sm:last:border-r-0 xl:last:border-r p-8 flex flex-col hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="h-[220px] w-full overflow-hidden mb-6">
                <img src={col.img} alt={col.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-medium mb-12 flex-1">{col.title}</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase">
                  <span>{col.cat}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  <span>{col.year}</span>
                </div>
                <div className="w-12 h-12 bg-[#e5e5e5] rounded-full flex items-center justify-center group-hover:bg-[#1a1a1b] group-hover:text-white transition-colors">
                  <ArrowDownRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </a>
          ))}
          {/* Solid Read All Block */}
          <a href="#" className="border-t border-[#d2d2d3] p-8 flex">
            <div className="bg-[#ff7b1b] w-full h-full p-8 flex flex-col justify-between hover:bg-orange-600 transition-colors cursor-pointer">
              <h4 className="text-5xl lg:text-[48px] font-medium text-white uppercase leading-none">Read All</h4>
              <div className="w-12 h-12 bg-[#1a1a1b] rounded-full flex items-center justify-center text-white self-end">
                <ArrowDownRight className="w-6 h-6" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Data & Methods Section */}
      <section id="data" className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[40px] font-['Ovo',serif]">Data &amp; Methods</h2>
          <p className="text-[#565659] text-lg font-medium mt-4 max-w-2xl">
            Tools and languages I use for research.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="border-t border-[#d2d2d3] md:border-r last:md:border-r-0 p-8 flex flex-col min-h-[140px]"
            >
              <h3 className="text-2xl font-['Ovo',serif] leading-tight mb-4">{tool.name}</h3>
              <p className="text-[#565659] text-sm">{tool.detail}</p>
            </div>
          ))}
        </div>

        <div className="px-6 lg:px-12 py-12 border-t border-[#d2d2d3] flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-wider text-[#757578]">
            Languages
          </span>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="border border-[#d2d2d3] px-4 py-2 rounded-full text-sm font-medium"
              >
                {lang.name} · {lang.level}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Something Personal Section */}
      {/* TODO: Replace placeholder text blocks with real captions that match the photos. */}
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[40px] font-['Ovo',serif]">Something personal</h2>
        </div>
        <div className="px-6 lg:px-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-[380px] overflow-hidden group">
              <img src={personal1} alt="Personal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="h-[380px] overflow-hidden group">
              <img src={personal2} alt="Personal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="h-[380px] bg-[#f3f3f4] p-8 text-lg font-medium leading-relaxed flex flex-col justify-center">
              <p>
                When I'm not working on research, I enjoy nature photography and
                long walks in botanical gardens.
              </p>
            </div>

            <div className="h-[380px] overflow-hidden group">
              <img src={personal3} alt="Personal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="h-[380px] bg-[#f3f3f4] p-8 text-lg font-medium leading-relaxed flex flex-col justify-center">
              <p>
                Outside of economics, I spend time on outdoor sports and
                travel. Agriculture isn't just a research topic for me —
                it's a lifelong interest in everything that grows.
              </p>
            </div>
            <div className="h-[380px] overflow-hidden group">
              <img src={personal4} alt="Personal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f3f3f4] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="flex flex-col justify-between h-full min-h-[300px]">
              <h2 className="text-[40px] font-['Ovo',serif]">Contacts</h2>
              <div className="flex gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="bg-[#ff7b1b] text-white px-8 py-5 text-xl font-medium uppercase hover:bg-orange-600 transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d2d2d3] px-8 py-5 text-xl font-medium hover:bg-gray-300 transition-colors"
                >
                  CV
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 gap-12 text-[#1a1a1b] font-medium text-xl lg:text-[22px] leading-relaxed">
              <div className="text-[#565659]">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
              </div>
              <div className="max-w-xl">
                <p className="text-[#565659]">
                  {profile.affiliation} · {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
