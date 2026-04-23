import { profile, publications, researchIntro, publicationTagStyle } from "../../content";
import { ArrRigth, Mail } from "../../componets/CustomIcons";
import { useNavigate } from "react-router-dom";

export default function Research() {
  const navigate = useNavigate();
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
                onClick={() => navigate(`/research/${pub.slug}`)}
                className={`w-full group hover:bg-white transition-colors cursor-pointer ${
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
                    <h3 className="text-foreground mb-3 group-hover:text-[#ff7b1b] transition-colors">
                      {pub.title}
                    </h3>
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
                      <div className="w-full aspect-[4/3] overflow-hidden bg-muted border border-border mb-10">
                        <img 
                          src={pub.figures[0].src} 
                          alt={pub.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
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
                          {String(pub.pages).padStart(3, "0")} pp
                        </div>
                      )}

                      {pub.draftOnRequest && (
                        <div className="mt-2 text-small uppercase tracking-wider text-[#ff7b1b]">
                          Draft on request
                        </div>
                      )}
                    </div>

                    {/* 6. Функциональная Кнопка */}
                    <div className="w-full">
                      {pub.draftOnRequest ? (
                        <a
                          href={`mailto:${profile.email}?subject=${encodeURIComponent(`Draft request: ${pub.title}`)}`}
                          onClick={(e) => e.stopPropagation()} 
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
                          onClick={(e) => e.stopPropagation()} 
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
                            {String(pub.pages).padStart(3, "0")} pp
                          </div>
                        )}

                        {pub.draftOnRequest && (
                          <div className="mt-2 text-small uppercase tracking-wider text-[#ff7b1b]">
                            Draft on request
                          </div>
                        )}
                      </div>

                      {/* 2. Кнопка */}
                      <div className="mt-8 w-full">
                        {pub.draftOnRequest ? (
                          <a
                            href={`mailto:${profile.email}?subject=${encodeURIComponent(`Draft request: ${pub.title}`)}`}
                            onClick={(e) => e.stopPropagation()} 
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
                            onClick={(e) => e.stopPropagation()} 
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
                      </div>

                      {/* 3. Картинка (прижата к низу) */}
                      {pub.figures && pub.figures.length > 0 && (
                        <div className="mt-auto pt-12 w-full">
                          <div className="w-full aspect-[4/3] overflow-hidden bg-muted border border-border">
                            <img 
                              src={pub.figures[0].src} 
                              alt={pub.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ПРАВАЯ ЧАСТЬ (2/3) */}
                    <div className="col-span-2 flex flex-col items-start max-w-[750px]">
                      {/* ИЗМЕНЕНО: Используем системный тег h3 */}
                      <h3 className="text-foreground mb-4 group-hover:text-[#ff7b1b] transition-colors">
                        {pub.title}
                      </h3>
                      
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