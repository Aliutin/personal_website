import { ArrowDownRight, Mail } from "lucide-react";
import { profile, publications, education, publicationTagStyle } from "../../content";

export default function Research() {
  return (
    <>
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-16 pb-6">
          <h1 className="text-[48px] lg:text-[56px] font-['Ovo',serif] leading-tight">
            Research
          </h1>
          <p className="text-[#565659] text-lg font-medium mt-4 max-w-2xl">
            Peer-reviewed publications and current working papers. Full list also on{" "}
            <a
              href={profile.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#ff7b1b] transition-colors"
            >
              Google Scholar
            </a>
            .
          </p>
        </div>
      </section>

      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[32px] font-['Ovo',serif]">Publications &amp; Working Papers</h2>
        </div>

        <div className="flex flex-col">
          {publications.map((pub, idx) => {
            const tagStyle = publicationTagStyle(pub.tag);
            return (
              <article
                key={idx}
                className="border-t border-[#d2d2d3] px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-8 lg:gap-12"
              >
                <div className="lg:w-1/4 flex flex-col gap-3 shrink-0">
                  <div
                    className={`inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider ${tagStyle.text}`}
                  >
                    <span>{pub.tag}</span>
                    <span className={`w-1 h-1 rounded-full ${tagStyle.dot}`} />
                    <span>{pub.year}</span>
                  </div>
                  <span className="text-[#565659] text-sm font-medium">{pub.venue}</span>
                </div>
                <div className="lg:w-3/4 flex flex-col gap-5 max-w-4xl">
                  <h3 className="text-2xl lg:text-[30px] font-['Ovo',serif] leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-[#565659] text-base leading-relaxed">
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
                  {pub.abstract && (
                    <div className="mt-2">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#757578] mb-2">
                        Abstract
                      </div>
                      <p className="text-[#565659] text-[15px] leading-relaxed">{pub.abstract}</p>
                    </div>
                  )}
                  {pub.keyFindings && pub.keyFindings.length > 0 && (
                    <div className="mt-2">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#757578] mb-3">
                        Key findings
                      </div>
                      <ul className="flex flex-col gap-2 text-[#565659] text-[15px] leading-relaxed">
                        {pub.keyFindings.map((finding, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#ff7b1b] shrink-0" />
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {pub.figures && pub.figures.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pub.figures.map((fig, i) => (
                        <figure key={i} className="flex flex-col gap-2">
                          <div className="bg-white border border-[#e5e5e5] overflow-hidden">
                            <img
                              src={fig.src}
                              alt={fig.caption || `Figure ${i + 1}`}
                              loading="lazy"
                              className="w-full h-auto"
                            />
                          </div>
                          {fig.caption && (
                            <figcaption className="text-[#757578] text-xs leading-relaxed">
                              {fig.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-4 mt-4">
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#1a1a1b] hover:text-[#ff7b1b] transition-colors self-start"
                      >
                        Read paper
                        <span className="w-10 h-10 bg-[#1a1a1b] text-white rounded-full flex items-center justify-center">
                          <ArrowDownRight className="w-5 h-5" />
                        </span>
                      </a>
                    )}
                    {pub.draftOnRequest && (
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(
                          `Draft request: ${pub.title}`
                        )}`}
                        className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#1a1a1b] hover:text-[#ff7b1b] transition-colors self-start"
                      >
                        Draft available on request
                        <span className="w-10 h-10 bg-[#1a1a1b] text-white rounded-full flex items-center justify-center">
                          <Mail className="w-4 h-4" />
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[32px] font-['Ovo',serif]">Education</h2>
        </div>
        <div className="flex flex-col">
          {education.map((e, idx) => (
            <div
              key={idx}
              className="border-t border-[#d2d2d3] px-6 lg:px-12 py-8 flex flex-col lg:flex-row gap-6"
            >
              <div className="lg:w-1/4 shrink-0 text-[#757578] text-sm font-medium uppercase tracking-wider">
                {e.period}
              </div>
              <div className="lg:w-3/4">
                <h3 className="text-2xl font-['Ovo',serif] leading-tight">{e.degree}</h3>
                <p className="text-[#565659] text-base font-medium mt-1">{e.school}</p>
                {e.thesis && (
                  <p className="text-[#757578] text-sm mt-3">
                    Thesis: <span className="italic">{e.thesis}</span>
                    {e.advisor ? ` — advised by ${e.advisor}` : ""}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
