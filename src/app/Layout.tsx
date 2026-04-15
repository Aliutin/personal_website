import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile, navLinks } from "../content";

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#f9f9f7] border-b border-[#d2d2d3] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex flex-col min-w-0">
          <h1 className="text-4xl font-['Ovo',serif] leading-tight whitespace-nowrap">
            {profile.name}
          </h1>
          <div className="flex items-center gap-2 text-[#565659] text-base font-medium whitespace-nowrap">
            <span className="w-4 h-4 bg-[#ff7b1b] rounded-full inline-block shrink-0" />
            <span>{profile.title}</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <nav className="flex gap-5 font-medium text-[#565659]">
            {navLinks.map((link) =>
              link.to.startsWith("/") && !link.to.endsWith(".pdf") ? (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
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
            className="bg-[#ff7b1b] text-white px-5 py-2.5 font-medium uppercase whitespace-nowrap hover:bg-orange-600 transition-colors"
          >
            Contact Me
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-[#d2d2d3] bg-[#f9f9f7]">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4 font-medium text-[#565659]">
            {navLinks.map((link) =>
              link.to.startsWith("/") && !link.to.endsWith(".pdf") ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 hover:text-[#1a1a1b] transition-colors"
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
                  className="py-2 hover:text-[#1a1a1b] transition-colors"
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
              className="bg-[#ff7b1b] text-white px-6 py-3 font-medium uppercase hover:bg-orange-600 transition-colors text-center mt-2"
            >
              Contact Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#f3f3f4] py-16 scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="flex flex-col justify-between h-full min-h-[300px]">
            <h2 className="text-[40px] font-['Ovo',serif]">Contacts</h2>
            <div className="flex gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="bg-[#ff7b1b] text-white px-8 py-5 text-xl font-medium uppercase hover:bg-orange-600 transition-colors"
              >
                Email
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
          <div className="flex flex-col lg:w-1/2 gap-8 text-[#1a1a1b] font-medium text-xl lg:text-[22px] leading-relaxed">
            <div className="text-[#565659]">
              <p>{profile.email}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium uppercase tracking-wider mt-4">
                <a
                  href={profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff7b1b] transition-colors"
                >
                  Google Scholar
                </a>
                <a
                  href={profile.orcidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff7b1b] transition-colors"
                >
                  ORCID
                </a>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff7b1b] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="max-w-xl">
              <p className="text-[#565659]">{profile.affiliation}</p>
              <p className="text-[#565659] text-base mt-1">{profile.office}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="bg-[#fafafa] min-h-screen text-[#1a1a1b] font-['Golos_Text',sans-serif]">
      <ScrollToTopOnRouteChange />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
