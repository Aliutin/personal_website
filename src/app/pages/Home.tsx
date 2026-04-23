import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import {
  profile,
  aboutBio,
  publications,
  blogPosts,
  experiences,
  images,
  publicationTagStyle,
} from "../../content";
import { PlacesEarthPlanet, Water, Mountains, ArrRigth } from "../../componets/CustomIcons";

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recentPublications = publications.slice(0, 3);
  const recentBlogs = blogPosts.slice(0, 3);
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const recentExperiences = [...experiences]
    .filter(
      (e) =>
        e.startYear < currentYear ||
        (e.startYear === currentYear && e.startMonth <= currentMonth)
    )
    .sort((a, b) =>
      b.startYear !== a.startYear ? b.startYear - a.startYear : b.startMonth - a.startMonth
    )
    .slice(0, 2);

  const personalItems = [
    { img: images.personal1, title: "Cat, with a buttercup crown", loc: "AT HOME" },
    { img: images.personal2, title: "Olbrich Botanical Gardens", loc: "MADISON" },
    { img: images.personal3, title: "Daffodil season", loc: "MOSCOW" },
    { img: images.personal4, title: "Hiking trail views", loc: "ARIZONA" },
    { img: images.personal1, title: "Local agriculture", loc: "FARM" },
    { img: images.personal2, title: "Weekend getaway", loc: "CHICAGO" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === personalItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? personalItems.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Hero */}
      <section className="w-full border-b border-border bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch md:h-[600px] lg:h-[700px]">
          
          <div className="w-full md:w-1/2 relative overflow-hidden bg-muted h-[400px] md:h-auto order-1 md:order-2 border-b md:border-b-0 border-border">
            <img
              src={images.portrait}
              alt="Anton Liutin"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between border-r-0 md:border-r border-border order-2 md:order-1 pt-4 md:pt-0">
            <div className="px-4 md:px-6 lg:px-8 md:pt-8 lg:pr-10"> 
              
              <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3 text-small text-muted-foreground uppercase tracking-wider mb-6">
                <span>Agricultural Economist</span>
                <span className="hidden lg:block w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span>
                <span>Available 2026</span>
              </div>
              
              <h1 className="text-foreground mb-5">
                Economist of water,<br />
                institutions, and the<br />
                farms in between
              </h1>
              
              <p className="text-body text-muted-foreground max-w-[550px]">
                PhD candidate at UW–Madison. I map 54,946 Arizona plots onto the canal network they share,
                and run framed-field experiments with farmers across seven regions
                of Uzbekistan — to measure how canal position,
                institutions, and technology shape crop outcomes under drought.<br />
              </p>
            </div>

            <div className="flex flex-col mt-12 md:mt-0">
              
              <div className="px-4 md:px-6 lg:px-8 mb-4 md:mb-10 flex gap-1 w-full lg:w-fit">
                <button
                  onClick={scrollToContact}
                  className="flex-1 lg:flex-none bg-[#ff7b1b] text-white px-8 py-4 text-body uppercase transition-colors hover:bg-white hover:text-[#ff7b1b]"
                >
                  CONTACT ME
                </button>
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e5e5e5] text-[#1a1a1b] w-14 h-14 flex items-center justify-center text-body hover:bg-gray-300 transition-colors shrink-0"
                >
                  CV
                </a>
              </div>
              
              <div className="hidden lg:flex px-8 pb-10 flex-wrap items-center gap-x-6 gap-y-2 text-small text-muted-foreground">
                <a 
                  href={`mailto:${profile.email}`} 
                  className="text-body text-foreground hover:text-[#ff7b1b] transition-colors uppercase tracking-wider"
                >
                  {profile.email.toLowerCase()}
                </a>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-body text-foreground uppercase tracking-wider">
                  <a href={profile.scholarUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff7b1b]">Scholar</a>
                  <a href={profile.orcidUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff7b1b]">ORCID</a>
                  <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff7b1b]">GitHub</a>
                </div>
              </div>

              <div className="flex lg:hidden flex-col w-full border-t border-border">
                <div className="grid grid-cols-1 border-b border-border">
                  <a 
                    href={`mailto:${profile.email}`} 
                    className="py-5 flex items-center justify-center text-small uppercase tracking-wider text-foreground hover:bg-white transition-colors"
                  >
                    {profile.email.toLowerCase()}
                  </a>
                </div>
                <div className="grid grid-cols-3">
                  <a href={profile.scholarUrl} target="_blank" rel="noopener noreferrer" className="py-5 border-r border-border flex items-center justify-center text-small uppercase tracking-wider text-foreground hover:bg-white transition-colors">
                    Scholar
                  </a>
                  <a href={profile.orcidUrl} target="_blank" rel="noopener noreferrer" className="py-5 border-r border-border flex items-center justify-center text-small uppercase tracking-wider text-foreground hover:bg-white transition-colors">
                    ORCID
                  </a>
                  <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="py-5 flex items-center justify-center text-small uppercase tracking-wider text-foreground hover:bg-white transition-colors">
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* About Me */}
      <section id="about" className="w-full bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-0 md:pt-32 md:pb-0">
          
          <div className="mb-4 md:mb-10">
            <h2 className="text-foreground">About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-x-0">
            
            <div className="flex flex-col lg:pr-16">
              <p className="text-subtitle text-foreground max-w-[600px]">
                {aboutBio}
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-full md:max-w-md flex flex-col gap-8">
                
                <div className="group border-b border-border pb-6">
                  <div className="flex justify-between items-center mb-4 gap-4">
                    <h4 className="text-foreground">Development Economics</h4>
                    <Mountains className="w-6 h-6 text-foreground shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-body text-muted-foreground">
                    Economic mechanisms of sustainable growth and policy evaluation in developing regions.
                  </p>
                </div>

                <div className="group border-b border-border pb-6">
                  <div className="flex justify-between items-center mb-4 gap-4">
                    <h4 className="text-foreground">Environmental Economics</h4>
                    <Water className="w-6 h-6 text-foreground shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-body text-muted-foreground">
                    Sustainable management of water resources and balancing production with environmental health.
                  </p>
                </div>

                <div className="group border-b border-border pb-6">
                  <div className="flex justify-between items-center mb-4 gap-4">
                    <h4 className="text-foreground">Economic History</h4>
                    <PlacesEarthPlanet className="w-6 h-6 text-foreground shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-body text-muted-foreground">
                    Historical patterns and long-term trends in developing agricultural economies.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research preview */}
      <section className="w-full bg-[#fafafa]">
        <div className="w-full border-b border-border">
          <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-32 pb-4 md:pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-foreground">Research</h2>
            
            <Link
              to="/research"
              className="hidden md:inline-flex items-center gap-3 bg-[#e5e5e5] text-[#1a1a1b] px-8 py-4 text-body uppercase transition-colors hover:bg-gray-300 group"
            >
              See all publications
              <ArrRigth className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col md:pb-0">
          {recentPublications.map((pub, idx) => {
            const tagStyle = publicationTagStyle(pub.tag);
            return (
              <article
                key={idx}
                className={`w-full group hover:bg-white transition-colors cursor-pointer ${
                  idx > 0 ? "border-t border-border" : ""
                } ${idx === recentPublications.length - 1 ? "border-b border-border" : ""}`}
                onClick={() => {
                  if (pub.url) window.open(pub.url, "_blank", "noopener,noreferrer");
                }}
              >
                <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-10 flex flex-col md:grid md:grid-cols-3">
                  
                  <div className="md:col-span-1 flex flex-col items-start">
                    <div className={`flex items-center gap-2 text-small uppercase tracking-wider ${tagStyle.text || "text-muted-foreground"}`}>
                      <span>{pub.tag}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${tagStyle.dot || "bg-gray-400"}`} />
                      <span>{pub.year}</span>
                    </div>
                    <p className="text-muted-foreground text-small mt-2">{pub.venue}</p>

                    <div className="hidden md:inline-flex mt-12 items-center gap-4 group/btn">
                      <span className="text-small uppercase tracking-wider text-foreground group-hover/btn:text-[#ff7b1b] transition-colors">
                        Read more
                      </span>
                      <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-colors">
                        <ArrRigth className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 mt-6 md:mt-0 flex flex-col items-start">
                    <h3 className="text-foreground max-w-3xl group-hover:text-[#ff7b1b] transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-body text-muted-foreground mt-3">
                      {pub.authors.join(", ")}
                    </p>
                  </div>

                  <div className="flex md:hidden mt-8 items-center gap-4 group/btn">
                    <span className="text-small uppercase tracking-wider text-foreground group-hover/btn:text-[#ff7b1b] transition-colors">
                      Read more
                    </span>
                    <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-colors">
                      <ArrRigth className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
          
          <div className="flex md:hidden px-4 pt-4 pb-0 justify-start w-full max-w-[1440px] mx-auto">
            <Link
              to="/research"
              className="w-full inline-flex justify-center items-center gap-3 bg-[#e5e5e5] text-[#1a1a1b] px-8 py-4 text-body uppercase transition-colors hover:bg-gray-300 group"
            >
              See all publications
              <ArrRigth className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* Blog preview */}
      <section className="w-full bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-4 md:px-6 lg:px-8 pt-24 md:pt-32 pb-4 md:pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-foreground">Blog</h2>
            
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center gap-3 bg-[#e5e5e5] text-[#1a1a1b] px-8 py-4 text-body uppercase transition-colors hover:bg-gray-300 group"
            >
              See all posts
              <ArrRigth className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="px-0 md:px-6 lg:px-8 md:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t md:border-l border-border">
              {recentBlogs.map((post, idx) => (
                <a
                  key={idx}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b md:border-r border-border p-6 md:p-8 flex flex-col bg-[#fafafa] hover:bg-white transition-colors cursor-pointer group"
                >
                  <div className="h-[220px] w-full overflow-hidden mb-6 bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-subtitle text-foreground mb-8 flex-1 group-hover:text-[#ff7b1b] transition-colors">{post.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground text-small uppercase tracking-wider">
                      <span>{post.venue}</span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <span>{post.year}</span>
                    </div>
                    <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                      <ArrRigth className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex md:hidden px-4 pt-4 pb-0 justify-start">
            <Link
              to="/blog"
              className="w-full inline-flex justify-center items-center gap-3 bg-[#e5e5e5] text-[#1a1a1b] px-8 py-4 text-body uppercase transition-colors hover:bg-gray-300 group"
            >
              See all posts
              <ArrRigth className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* Experience preview */}
      <section className="w-full bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-4 md:px-6 lg:px-8 pt-24 md:pt-32 pb-4 md:pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-foreground">Experience</h2>
            
            <Link
              to="/experience"
              className="hidden md:inline-flex items-center gap-3 bg-[#e5e5e5] text-[#1a1a1b] px-8 py-4 text-body uppercase transition-colors hover:bg-gray-300 group"
            >
              See full timeline
              <ArrRigth className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="px-0 lg:px-8 md:pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 border-t md:border-l border-border">
              {recentExperiences.map((item, idx) => {
                const tag = item.kind === "teaching" ? "TEACHING" : item.kind === "research" ? "RESEARCH" : "FIELDWORK";
                const heading = item.kind === "research" ? `${item.role} · ${item.title}` : item.title;
                return (
                  <div
                    key={idx}
                    className="border-b md:border-r border-border p-6 md:p-8 flex flex-col bg-[#fafafa] hover:bg-white transition-colors"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground text-small uppercase tracking-wider mb-6">
                      <span>{tag}</span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <span>{item.periodLabel}</span>
                    </div>
                    <h3 className="mb-4 text-foreground">{heading}</h3>
                    <p className="text-body text-muted-foreground mb-2">{item.orgShort}</p>
                    {item.detail && <p className="text-small text-muted-foreground">{item.detail}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex md:hidden px-4 pt-4 pb-24 justify-start">
            <Link
              to="/experience"
              className="w-full inline-flex justify-center items-center gap-3 bg-[#e5e5e5] text-[#1a1a1b] px-8 py-4 text-body uppercase transition-colors hover:bg-gray-300 group"
            >
              See full timeline
              <ArrRigth className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

     {/* Data & Methods */}
     <section className="w-full bg-[#1A1A1B]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-12 items-center">
            
            <div className="flex flex-col items-start lg:pr-16">
              <div className="flex items-center gap-3 text-small text-[#a1a1aa] uppercase tracking-wider mb-6">
                <span>Agricultural Economist</span>
              </div>
              <h1 className="text-white mb-10 leading-[1.1]">
                Code &amp;<br />
                replication files<br />
                live on GitHub.
              </h1>
              
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#ff7b1b] text-white px-8 py-4 text-body uppercase tracking-wider transition-colors hover:bg-white hover:text-[#ff7b1b]"
              >
                github.com/{profile.github}
                <ArrowDownRight className="w-5 h-5 -rotate-45" />
              </a>
            </div>

            <div className="flex flex-col items-start md:pl-8 lg:pl-16 w-full overflow-hidden">
              <div className="font-mono text-sm md:text-base lg:text-lg text-[#a1a1aa] leading-relaxed overflow-x-auto w-full">
                <div className="text-[#FF7B1B] mb-4">~/research</div>
                <pre className="whitespace-pre">
{`├── water-graph/
│   ├── build_network.R
│   ├── drought_donut.py
│   └── figures/
├── uzbekistan-games/
│   ├── oTree/
│   └── analysis/
└── cotton-scheduling/
    ├── et_model.R
    └── did.do`}
                </pre>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Something personal */}
      <section className="w-full bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-4 md:px-6 lg:px-8 pt-24 md:pt-32 pb-4 md:pb-8">
            <h2 className="text-foreground">Something personal</h2>
          </div>
          
          {/* ДЕСКТОП И ПЛАНШЕТ: Сетка */}
          <div className="hidden md:grid px-6 lg:px-8 pb-32 grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {personalItems.map((item, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[4/5] overflow-hidden bg-muted mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-baseline gap-4 mt-1">
                  <h4 className="text-foreground">{item.title}</h4>
                  <span className="text-small uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                    {item.loc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* МОБИЛКА: Слайдер (Карусель) */}
          <div className="md:hidden flex flex-col px-4 pb-24">
            
            <div className="w-full aspect-[4/5] overflow-hidden bg-muted mb-4">
              <img
                src={personalItems[currentSlide].img}
                alt={personalItems[currentSlide].title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
            
            <div className="flex justify-between items-baseline gap-4 mt-1 mb-6">
              <h4 className="text-foreground">{personalItems[currentSlide].title}</h4>
              <span className="text-small uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                {personalItems[currentSlide].loc}
              </span>
            </div>

            <div className="flex gap-1 mb-8">
              <button
                onClick={prevSlide}
                className="flex-1 bg-[#e5e5e5] h-14 flex items-center justify-center transition-colors hover:bg-gray-300"
              >
                <ArrRigth style={{ transform: 'scaleX(-1)' }} className="w-6 h-6 text-[#1a1a1b]" />
              </button>
              <button
                onClick={nextSlide}
                className="flex-1 bg-[#e5e5e5] h-14 flex items-center justify-center transition-colors hover:bg-gray-300"
              >
                <ArrRigth className="w-6 h-6 text-[#1a1a1b]" />
              </button>
            </div>

            <div className="flex justify-center items-center gap-2">
              {personalItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`rounded-full transition-colors ${
                    currentSlide === idx ? "w-1.5 h-1.5 bg-[#1a1a1b]" : "w-1.5 h-1.5 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}