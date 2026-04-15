import { ArrowDownRight } from "lucide-react";
import { profile, publications, education } from "../../content";

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
          {publications.map((pub, idx) => (
            <article
              key={idx}
              className="border-t border-[#d2d2d3] px-6 lg:px-12 py-10 flex flex-col lg:flex-row gap-8 lg:gap-12"
            >
              <div className="lg:w-1/4 flex flex-col gap-3 shrink-0">
                <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase tracking-wider">
                  <span>{pub.tag}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  <span>{pub.year}</span>
                </div>
                <span className="text-[#565659] text-sm font-medium">{pub.venue}</span>
              </div>
              <div className="lg:w-3/4 flex flex-col gap-4">
                <h3 className="text-2xl lg:text-[28px] font-['Ovo',serif] leading-tight">
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
                  <p className="text-[#565659] text-base leading-relaxed max-w-3xl">
                    {pub.abstract}
                  </p>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#1a1a1b] hover:text-[#ff7b1b] transition-colors mt-2 self-start"
                  >
                    Read paper
                    <span className="w-10 h-10 bg-[#1a1a1b] text-white rounded-full flex items-center justify-center">
                      <ArrowDownRight className="w-5 h-5" />
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
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
