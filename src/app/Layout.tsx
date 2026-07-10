import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { profile, navLinks, publications } from "../content";
import { Burger, Close } from "../componets/CustomIcons";

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function metadataSummary(text: string) {
  if (text.length <= 160) return text;
  return `${text.slice(0, 157).replace(/\s+\S*$/, "")}…`;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-[#1a1a1b] focus:px-4 focus:py-3 focus:border focus:border-border"
      >
        Skip to main content
      </a>
      <header className="bg-[#f9f9f7] border-b border-[#d2d2d3] sticky top-0 z-50 w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 h-16 lg:h-auto lg:py-4 flex items-center justify-between gap-4">
        
        <Link to="/" className="flex flex-col min-w-0" onClick={() => setMenuOpen(false)}>
          <div className="text-2xl lg:text-4xl font-['Ovo',serif] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
            {profile.name}
          </div>
          <div className="flex items-center gap-2 text-[#565659] text-sm lg:text-base font-medium whitespace-nowrap">
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-[#ff7b1b] rounded-full inline-block shrink-0" />
            <span className="overflow-hidden text-ellipsis">{profile.title}</span>
          </div>
        </Link>

        {/* ДЕСКТОПНОЕ МЕНЮ */}
        <div className="hidden lg:flex items-center gap-8 shrink-0">
          <nav className="flex gap-8 font-medium text-[#565659]">
            {navLinks.map((link) =>
              link.to.startsWith("/") && !link.to.endsWith(".pdf") ? (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/" || link.to.startsWith("/#")}
                  className={({ isActive }) =>
                    `whitespace-nowrap transition-colors hover:text-[#1a1a1b] ${
                      isActive ? "text-[#1a1a1b]" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap hover:text-[#1a1a1b] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
          <button
            onClick={scrollToContact}
            className="bg-[#b84a00] text-white px-5 py-2.5 font-medium uppercase whitespace-nowrap hover:bg-[#963d00] transition-colors"
          >
            Contact Me
          </button>
        </div>

        {/* БУРГЕР / CLOSE */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[#1a1a1b] relative z-[60]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <Close className="w-7 h-7" /> : <Burger className="w-7 h-7" />}
        </button>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      {menuOpen && (
        <div id="mobile-navigation" className="lg:hidden border-t border-[#d2d2d3] bg-[#f9f9f7] absolute top-full left-0 w-full shadow-xl z-50">
          <nav className="max-w-[1440px] mx-auto px-4 md:px-6 py-8 flex flex-col gap-1 font-medium text-[#565659]">
            {navLinks.map((link) =>
              link.to.startsWith("/") && !link.to.endsWith(".pdf") ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-lg border-b border-gray-100 last:border-0 hover:text-[#1a1a1b] transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-lg border-b border-gray-100 last:border-0 hover:text-[#1a1a1b] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <button
              onClick={() => {
                setMenuOpen(false);
                setTimeout(scrollToContact, 50);
              }}
              className="bg-[#b84a00] text-white px-6 py-4 font-medium uppercase hover:bg-[#963d00] transition-colors text-center mt-6 text-lg"
            >
              Contact Me
            </button>
          </nav>
        </div>
      )}
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#f3f3f4] border-t border-border pt-12 md:pt-16 pb-8 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Верхняя часть футера */}
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-12 lg:gap-16">
          
          {/* Левая колонка */}
          <div className="flex flex-col justify-between w-full lg:w-1/2">
            <h2 className="text-[32px] md:text-[40px] font-['Ovo',serif] text-[#1a1a1b] mb-8 lg:mb-0">Contact</h2>
            
            <div className="flex gap-1 mt-auto pt-4 lg:pt-8 w-full md:w-auto">
              <a
                href={`mailto:${profile.email}`}
                className="flex-1 md:flex-none bg-[#b84a00] text-white px-8 py-4 text-small font-medium hover:bg-[#963d00] transition-colors uppercase flex items-center justify-center tracking-wider"
              >
                EMAIL
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e5e5e5] text-[#1a1a1b] w-14 h-14 flex items-center justify-center text-small font-medium hover:bg-gray-300 transition-colors shrink-0 tracking-wider"
              >
                CV
              </a>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col justify-between w-full lg:w-1/2">
            <div className="text-[#565659] text-body md:text-lg lg:text-[22px] leading-relaxed">
              <p className="font-medium text-[#1a1a1b]">{profile.email.toLowerCase()}</p>
              <p className="mt-4 md:mt-6">{profile.affiliation}</p>
              <p>{profile.office}</p>
            </div>
            
            <div className="flex flex-col gap-y-2 text-body md:text-lg lg:text-[22px] font-medium text-[#0E0E0D] mt-10 md:mt-12">
              <a href={profile.scholarUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#b84a00] transition-colors w-fit">
                Google Scholar
              </a>
              <a href={profile.orcidUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#b84a00] transition-colors w-fit">
                ORCID
              </a>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#b84a00] transition-colors w-fit">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* НИЖНЯЯ ЧАСТЬ: Копирайт слева, координаты справа */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-small text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Anton Liutin
          </p>
          <p className="text-small text-muted-foreground uppercase tracking-widest">
            Madison, WI · 43.0731° N, 89.4012° W
          </p>
        </div>

      </div>
    </footer>
  );
}

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: "start" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, location.hash]);
  return null;
}

function PageMetadata() {
  const location = useLocation();

  useEffect(() => {
    let title = "Anton Liutin — Environmental & Development Economist";
    let description =
      "Anton Liutin is a PhD candidate at UW–Madison studying water scarcity, institutions, technology adoption, and spatial inequality.";

    if (location.pathname === "/research") {
      title = "Research — Anton Liutin";
      description = "Research papers on water allocation, institutions, technology adoption, and irrigation in Arizona and Uzbekistan.";
    } else if (location.pathname === "/experience") {
      title = "Experience — Anton Liutin";
      description = "Selected research, teaching, and fieldwork experience in environmental and development economics.";
    } else if (location.pathname === "/blog") {
      title = "Writing — Anton Liutin";
      description = "Selected policy and outreach writing on water, agriculture, institutions, and development.";
    } else if (location.pathname.startsWith("/research/")) {
      const slug = location.pathname.split("/")[2];
      const publication = publications.find((item) => item.slug === slug);
      if (publication) {
        title = `${publication.title} — Anton Liutin`;
        description = publication.abstract ? metadataSummary(publication.abstract) : description;
      } else {
        title = "Research — Anton Liutin";
        description = "Research papers on water allocation, institutions, technology adoption, and irrigation.";
      }
    } else if (location.pathname !== "/") {
      title = "Page not found — Anton Liutin";
      description = "The requested page could not be found.";
    }

    const canonicalUrl = new URL(location.pathname, "https://antonliutin.com").toString();
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
  }, [location.pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="bg-[#fafafa] min-h-screen text-[#1a1a1b] font-['Golos_Text',sans-serif]">
      <ScrollToTopOnRouteChange />
      <PageMetadata />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
