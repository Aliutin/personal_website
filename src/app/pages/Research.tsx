import { profile, publications, researchIntro, publicationTagStyle } from "../../content";
import { ArrRigth, Mail } from "../../componets/CustomIcons";
import { Lightbox } from "../../componets/Lightbox";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Research() {
  return (
    <div className="w-full flex flex-col bg-[#fafafa] min-h-screen">
      
      {/* Шапка (Hero) */}
      <section className="w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 pt-16 pb-8">
          <h1 className="max-w-4xl mb-6 text-foreground">
            {researchIntro.title}
          </h1>
          <p className="text-body text-muted-foreground max-w-3xl leading-relaxed">
            {researchIntro.description}
          </p>
        </div>
      </section>

      {/* Список публикаций */}
      <section className="w-full border-b border-border">
        <div className="w-full flex flex-col">
          {publications.map((pub, idx) => {
            const tagStyle = publicationTagStyle(pub.tag);
            
            return (
              <article
                key={idx}
                className={`w-full ${
                  idx > 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12 lg:py-16 w-full">
                  
                  {/* =========================================================
                      МОБИЛЬНАЯ И ПЛАНШЕТНАЯ ВЕРСИЯ (до lg)
                      Порядок: Заголовок -> Абстракт -> Кей -> Картинка -> Теги -> Кнопка
                  ========================================================= */}
                  <div className="flex lg:hidden flex-col w-full">
                    
                    {/* 1. Заголовок и Авторы */}
                    {/* ИЗМЕНЕНО: Используем системный тег h3 без жестких размеров */}
                    <h2 className="text-foreground mb-3 !text-[length:var(--h3-size)] !leading-[var(--h3-lh)]">
                      <Link
                        to={`/research/${pub.slug}`}
                        className="hover:text-[#ff7b1b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b1b] focus-visible:ring-offset-2"
                      >
                        {pub.title}
                      </Link>
                    </h2>
                    {/* ИЗМЕНЕНО: Простое перечисление авторов без выделения жирным */}
                    <p className="text-body text-muted-foreground mb-8">
                      {pub.authors.join(", ")}
                    </p>

                    {/* 2. Абстракт */}
                    {pub.abstract && (
                      <div className="mb-8">
                        <div className="text-small uppercase tracking-wider text-muted-foreground mb-4">
                          Abstract
                        </div>
                        <p className="text-body text-foreground">
                          {pub.abstract}
                        </p>
                      </div>
                    )}

                    {/* 3. Находки (Key findings) */}
                    {pub.keyFindings && pub.keyFindings.length > 0 && (
                      <div className="mb-10 w-full">
                        <div className="text-small uppercase tracking-wider text-muted-foreground mb-6">
                          Key findings
                        </div>
                        <div className="flex flex-col gap-5">
                          {pub.keyFindings.map((finding, i) => (
                            <div key={i} className="flex items-start gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                              <span className="text-small text-[#ff7b1b] mt-0.5 shrink-0">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-body text-foreground">
                                {finding}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 4. Картинка */}
                    {pub.figures && pub.figures.length > 0 && (
                      <FigureCarousel
                        figures={pub.figures}
                        title={pub.title}
                        className="mb-10"
                      />
                    )}

                    {/* 5. Теги и мета-данные */}
                    <div className="w-full mb-8">
                      <div className={`flex items-center gap-2 text-small uppercase tracking-wider ${tagStyle.text}`}>
                        <span>{pub.tag}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${tagStyle.dot}`} />
                        <span>{pub.year}</span>
                      </div>
                      <div className="text-small text-muted-foreground mt-3">
                        {pub.venue}
                      </div>

                      {pub.pages && (
                        <div className="mt-4 text-small uppercase tracking-wider text-muted-foreground">
                          {pub.pages} pp
                        </div>
                      )}

                      {pub.draftOnRequest && (
                        <div className="mt-2 text-small uppercase tracking-wider text-[#ff7b1b]">
                          Draft on request
                        </div>
                      )}
                    </div>

                    {/* 6. Функциональная Кнопка */}
                    <div className="w-full flex flex-col items-start gap-3">
                      {pub.draftOnRequest ? (
                        <a
                          href={`mailto:${profile.email}?subject=${encodeURIComponent(`Draft request: ${pub.title}`)}`}
                          className="inline-flex items-center gap-4 cursor-pointer group/btn"
                        >
                          <span className="text-small uppercase tracking-wider text-foreground group-hover/btn:text-[#ff7b1b] transition-colors">
                            Request Draft
                          </span>
                          <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-colors">
                            <Mail className="w-5 h-5" />
                          </div>
                        </a>
                      ) : (
                        <a
                          href={pub.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 cursor-pointer group/btn"
                        >
                          <span className="text-small uppercase tracking-wider text-foreground group-hover/btn:text-[#ff7b1b] transition-colors">
                            Extended preview
                          </span>
                          <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-colors">
                            <ArrRigth className="w-5 h-5" />
                          </div>
                        </a>
                      )}
                      <Link
                        to={`/research/${pub.slug}`}
                        className="inline-flex items-center gap-2 bg-[#e5e5e5] text-[#1a1a1b] px-4 py-2.5 text-small uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b1b] focus-visible:ring-offset-2"
                      >
                        More details
                        <ArrRigth className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>


                  {/* =========================================================
                      ДЕСКТОПНАЯ ВЕРСИЯ (от lg и выше)
                      Сетка 1/3 и 2/3
                  ========================================================= */}
                  <div className="hidden lg:grid grid-cols-3 gap-12 items-stretch w-full">
                    
                    {/* ЛЕВАЯ ЧАСТЬ (1/3) */}
                    <div className="col-span-1 flex flex-col items-start h-full">
                      
                      {/* 1. Мета-данные */}
                      <div className="w-full">
                        <div className={`flex items-center gap-2 text-small uppercase tracking-wider ${tagStyle.text}`}>
                          <span>{pub.tag}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${tagStyle.dot}`} />
                          <span>{pub.year}</span>
                        </div>
                        <div className="text-small text-muted-foreground mt-3">
                          {pub.venue}
                        </div>

                        {pub.pages && (
                          <div className="mt-8 text-small uppercase tracking-wider text-muted-foreground">
                            {pub.pages} pp
                          </div>
                        )}

                        {pub.draftOnRequest && (
                            <div className="mt-2 text-small uppercase tracking-wider text-[#ff7b1b]">
                            Draft on request
                          </div>
                        )}
                      </div>

                      {/* 2. Кнопка */}
                      <div className="mt-8 w-full flex flex-col items-start gap-3">
                        {pub.draftOnRequest ? (
                          <a
                            href={`mailto:${profile.email}?subject=${encodeURIComponent(`Draft request: ${pub.title}`)}`}
                            className="inline-flex items-center gap-4 cursor-pointer group/btn"
                          >
                            <span className="text-small uppercase tracking-wider text-foreground group-hover/btn:text-[#ff7b1b] transition-colors">
                              Request Draft
                            </span>
                            <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-colors">
                              <Mail className="w-5 h-5" />
                            </div>
                          </a>
                        ) : (
                          <a
                            href={pub.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 cursor-pointer group/btn"
                          >
                            <span className="text-small uppercase tracking-wider text-foreground group-hover/btn:text-[#ff7b1b] transition-colors">
                              Extended preview
                            </span>
                            <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-colors">
                              <ArrRigth className="w-5 h-5" />
                            </div>
                          </a>
                        )}
                        <Link
                          to={`/research/${pub.slug}`}
                          className="inline-flex items-center gap-2 bg-[#e5e5e5] text-[#1a1a1b] px-4 py-2.5 text-small uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b1b] focus-visible:ring-offset-2"
                        >
                          More details
                          <ArrRigth className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* 3. Картинка (прижата к низу) */}
                      {pub.figures && pub.figures.length > 0 && (
                        <div className="mt-auto pt-12 w-full">
                          <FigureCarousel figures={pub.figures} title={pub.title} />
                        </div>
                      )}
                    </div>

                    {/* ПРАВАЯ ЧАСТЬ (2/3) */}
                    <div className="col-span-2 flex flex-col items-start max-w-[750px]">
                      {/* ИЗМЕНЕНО: Используем системный тег h3 */}
                      <h2 className="text-foreground mb-3 !text-[length:var(--h3-size)] !leading-[var(--h3-lh)]">
                        <Link
                          to={`/research/${pub.slug}`}
                          className="hover:text-[#ff7b1b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b1b] focus-visible:ring-offset-2"
                        >
                          {pub.title}
                        </Link>
                      </h2>
                      
                      {/* ИЗМЕНЕНО: Простое перечисление авторов без выделения жирным */}
                      <p className="text-body text-muted-foreground">
                        {pub.authors.join(", ")}
                      </p>

                      {pub.abstract && (
                        <div className="mt-10">
                          <div className="text-small uppercase tracking-wider text-muted-foreground mb-4">
                            Abstract
                          </div>
                          <p className="text-body text-foreground">
                            {pub.abstract}
                          </p>
                        </div>
                      )}

                      {pub.keyFindings && pub.keyFindings.length > 0 && (
                        <div className="mt-10 w-full">
                          <div className="text-small uppercase tracking-wider text-muted-foreground mb-6">
                            Key findings
                          </div>
                          <div className="flex flex-col gap-5">
                            {pub.keyFindings.map((finding, i) => (
                              <div key={i} className="flex items-start gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                                <span className="text-small text-[#ff7b1b] mt-0.5 shrink-0">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-body text-foreground">
                                  {finding}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </section>      
    </div>
  );
}

function FigureCarousel({
  figures,
  title,
  className = "",
}: {
  figures: { src: string; caption?: string }[];
  title: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const active = figures[index];
  const hasMultiple = figures.length > 1;

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + figures.length) % figures.length);
  };

  return (
    <div
      className={`w-full ${className}`}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted border border-border">
        <button
          type="button"
          aria-label={`Enlarge figure: ${active.caption || title}`}
          onClick={(e) => {
            e.stopPropagation();
            setZoomed(true);
          }}
          className="w-full h-full bg-transparent p-0 cursor-zoom-in"
        >
          <img
            src={active.src}
            alt={active.caption ? `${title}: ${active.caption}` : title}
            className="w-full h-full object-contain p-3"
          />
        </button>
        {zoomed && (
          <Lightbox
            images={figures.map((f) => ({
              src: f.src,
              alt: f.caption ? `${title}: ${f.caption}` : title,
              caption: f.caption,
            }))}
            initialIndex={index}
            onClose={() => setZoomed(false)}
          />
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label="Previous figure"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 text-[#1a1a1b] border border-border flex items-center justify-center hover:bg-[#1a1a1b] hover:text-white transition-colors"
            >
              <ArrRigth className="w-4 h-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next figure"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 text-[#1a1a1b] border border-border flex items-center justify-center hover:bg-[#1a1a1b] hover:text-white transition-colors"
            >
              <ArrRigth className="w-4 h-4" />
            </button>
            <div className="absolute left-3 bottom-3 right-3 flex items-end justify-between gap-3">
              {active.caption && (
                <div className="bg-white/95 border border-border px-3 py-2 text-small text-foreground leading-tight">
                  {active.caption}
                </div>
              )}
              <div className="ml-auto bg-[#1a1a1b] text-white px-3 py-2 text-small tabular-nums">
                {index + 1}/{figures.length}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
