import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import {
  profile,
  aboutBio,
  researchInterests,
  publications,
  blogPosts,
  teaching,
  images,
  publicationTagStyle,
} from "../../content";

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const recentPublications = publications.slice(0, 3);
  const recentBlogs = blogPosts.slice(0, 3);
  const recentTeaching = teaching.slice(0, 2);

  return (
    <>
      {/* Hero */}
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
              Open to new collaborations and research opportunities.
            </p>
            <div className="flex gap-2">
              <button
                onClick={scrollToContact}
                className="bg-[#ff7b1b] text-white px-8 py-5 text-xl font-medium uppercase hover:bg-orange-600 transition-colors"
              >
                Contact Me
              </button>
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
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium uppercase tracking-wider mt-3">
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
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-auto h-96 relative overflow-hidden bg-gray-200">
          <img
            src={images.portrait}
            alt="Anton Liutin"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* About Me */}
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
      </section>

      {/* Research preview */}
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-[40px] font-['Ovo',serif]">Research</h2>
          <Link
            to="/research"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#1a1a1b] hover:text-[#ff7b1b] transition-colors"
          >
            See all publications
            <ArrowDownRight className="w-4 h-4 -rotate-45" />
          </Link>
        </div>
        <div className="flex flex-col">
          {recentPublications.map((pub, idx) => {
            const tagStyle = publicationTagStyle(pub.tag);
            return (
              <article
                key={idx}
                className="border-t border-[#d2d2d3] px-6 lg:px-12 py-10 flex flex-col lg:flex-row gap-6 lg:gap-12"
              >
                <div className="lg:w-1/4 shrink-0">
                  <div
                    className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wider ${tagStyle.text}`}
                  >
                    <span>{pub.tag}</span>
                    <span className={`w-1 h-1 rounded-full ${tagStyle.dot}`} />
                    <span>{pub.year}</span>
                  </div>
                  <p className="text-[#565659] text-sm font-medium mt-2">{pub.venue}</p>
                </div>
                <div className="lg:w-3/4">
                  <h3 className="text-2xl lg:text-[26px] font-['Ovo',serif] leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-[#565659] text-base leading-relaxed mt-3">
                    {pub.authors.map((a, i) => {
                      const isMe = a.includes("Liutin");
                      return (
                        <span key={i}>
                          <span className={isMe ? "font-semibold text-[#1a1a1b]" : ""}>{a}</span>
                          {i < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Blog preview */}
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-[40px] font-['Ovo',serif]">Blog</h2>
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#1a1a1b] hover:text-[#ff7b1b] transition-colors"
          >
            See all posts
            <ArrowDownRight className="w-4 h-4 -rotate-45" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {recentBlogs.map((post, idx) => (
            <a
              key={idx}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-t border-[#d2d2d3] md:border-r last:md:border-r-0 xl:border-r xl:last:border-r-0 p-8 flex flex-col hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="h-[220px] w-full overflow-hidden mb-6 bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-medium mb-8 flex-1 leading-snug">{post.title}</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase">
                  <span>{post.venue}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  <span>{post.year}</span>
                </div>
                <div className="w-12 h-12 bg-[#e5e5e5] rounded-full flex items-center justify-center group-hover:bg-[#1a1a1b] group-hover:text-white transition-colors">
                  <ArrowDownRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Teaching preview */}
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-[40px] font-['Ovo',serif]">Teaching</h2>
          <Link
            to="/teaching"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#1a1a1b] hover:text-[#ff7b1b] transition-colors"
          >
            See teaching &amp; experience
            <ArrowDownRight className="w-4 h-4 -rotate-45" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {recentTeaching.map((item, idx) => (
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
              <p className="text-[#565659] text-base font-medium mb-2">{item.org}</p>
              <p className="text-[#757578] text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data & Methods → GitHub pointer */}
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12">
          <h2 className="text-[40px] font-['Ovo',serif]">Data &amp; Methods</h2>
          <p className="text-[#565659] text-lg font-medium mt-4 max-w-2xl">
            Code and replication files for my projects live on GitHub.
          </p>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 bg-[#1a1a1b] text-white px-6 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#ff7b1b] transition-colors"
          >
            github.com/{profile.github}
            <ArrowDownRight className="w-4 h-4 -rotate-45" />
          </a>
        </div>
      </section>

      {/* Something personal */}
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[40px] font-['Ovo',serif]">Something personal</h2>
        </div>
        <div className="px-6 lg:px-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-[380px] overflow-hidden group">
              <img
                src={images.personal1}
                alt="Personal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-[380px] overflow-hidden group">
              <img
                src={images.personal2}
                alt="Personal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-[380px] bg-[#f3f3f4] p-8 text-lg font-medium leading-relaxed flex flex-col justify-center">
              <p>
                When I'm not working on research, I enjoy nature photography and long walks in
                botanical gardens.
              </p>
            </div>

            <div className="h-[380px] overflow-hidden group">
              <img
                src={images.personal3}
                alt="Personal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-[380px] bg-[#f3f3f4] p-8 text-lg font-medium leading-relaxed flex flex-col justify-center">
              <p>
                Outside of economics, I spend time on outdoor sports and travel. Agriculture
                isn't just a research topic for me — it's a lifelong interest in everything that
                grows.
              </p>
            </div>
            <div className="h-[380px] overflow-hidden group">
              <img
                src={images.personal4}
                alt="Personal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
