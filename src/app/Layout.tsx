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
    <header className="bg-[#f9f9f7] border-b border-[#d2d2d3] sticky top-0 z-50 w-full">
      {/* Здесь мы задали жесткую ширину max-w-[1440px], центрирование mx-auto 
        и отступы px-8 (по 32px слева и справа) 
      */}
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex flex-col min-w-0">
          <h1 className="text-4xl font-['Ovo',serif] leading-tight whitespace-nowrap">
            {profile.name}
          </h1>
          <div className="flex items-center gap-2 text-[#565659] text-base font-medium whitespace-nowrap">
            <span className="w-4 h-4 bg-[#ff7b1b] rounded-full inline-block shrink-0" />
            <span>{profile.title}</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 shrink-0">
          <nav className="flex gap-8 font-medium text-[#565659]">
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
          {/* В мобильном меню тоже применяем max-w-[1440px] и px-8 для консистентности */}
          <nav className="max-w-[1440px] mx-auto px-8 py-6 flex flex-col gap-4 font-medium text-[#565659]">
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
    <footer id="contact" className="bg-[#f3f3f4] py-12 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Добавили items-stretch, чтобы обе колонки были одной высоты */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16">
          
          {/* Левая колонка: теперь она всегда тянется во всю высоту ряда */}
          <div className="flex flex-col justify-between lg:w-1/2">
            <h2 className="text-[40px] font-['Ovo',serif] text-[#1a1a1b]">Contacts</h2>
            
            {/* mt-auto гарантирует, что на мобильных, если текста мало, 
                кнопки все равно будут стремиться вниз.
                ИЗМЕНЕНО: gap-1, размеры кнопок и квадратная CV точно как в Hero */}
            <div className="flex gap-1 mt-auto pt-8">
              <a
                href={`mailto:${profile.email}`}
                className="bg-[#ff7b1b] text-white px-8 py-4 text-base font-medium hover:bg-orange-600 transition-colors uppercase"
              >
                EMAIL
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e5e5e5] text-[#1a1a1b] w-14 h-14 flex items-center justify-center text-base font-medium hover:bg-gray-300 transition-colors"
              >
                CV
              </a>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col justify-between lg:w-1/2">
            <div className="text-[#565659] font-medium text-xl lg:text-[22px] leading-relaxed">
              <p>{profile.email}</p>
              <p className="mt-6">{profile.affiliation}</p>
              <p>{profile.office}</p>
            </div>
            
            <div className="flex flex-col gap-y-1 font-medium text-xl lg:text-[22px] text-[#0E0E0D] mt-12">
              <a href={profile.scholarUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff7b1b] transition-colors w-fit">
                Google Scholar
              </a>
              <a href={profile.orcidUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff7b1b] transition-colors w-fit">
                ORCID
              </a>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff7b1b] transition-colors w-fit">
                GitHub
              </a>
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
