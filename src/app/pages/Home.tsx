import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import {
  profile,
  aboutBio,
  researchInterests,
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

  return (
    <>
    {/* Hero */}
<section className="w-full border-b border-[#d2d2d3] bg-[#fafafa]">
  <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-stretch h-[700px]">
    
    {/* Левая колонка (Контент слева от фото) */}
    <div className="lg:w-1/2 flex flex-col justify-between border-r border-[#d2d2d3]">
      
      {/* Верхняя часть: Заголовок и описание (ОСТАВЛЕНО БЕЗ ИЗМЕНЕНИЙ) */}
      <div className="pl-8 pt-8 pr-10"> 
        <h2 className="text-[40px] lg:text-[42px] font-['Ovo',serif] leading-[1.1] mb-5 text-[#1a1a1b]">
          Anton, Agricultural Economist.<br />
          I study water management<br />
          for sustainable crop production.
        </h2>
        <p className="text-[#565659] text-lg font-medium w-full leading-[1.4] tracking-[-0.02em]">
          Dedicated to advancing the U.S. agricultural sector.<br />
          Open to new collaborations and research opportunities.
        </p>
      </div>

      {/* Нижняя часть: Кнопки и Контакты */}
      <div className="flex flex-col">
       {/* Блок кнопок (ОСТАВЛЕН БЕЗ ИЗМЕНЕНИЙ: gap-1) */}
        <div className="pl-8 mb-10 flex gap-1">
          <button
            onClick={scrollToContact}
            className="bg-[#ff7b1b] text-white px-8 py-4 text-base font-medium hover:bg-orange-600 transition-colors"
          >
            CONTACT ME
          </button>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e5e5e5] text-[#1a1a1b] w-14 h-14 flex items-center justify-center text-base font-medium hover:bg-gray-300 transition-colors"
          >
            CV
          </a>
        </div>
        
        {/* Контакты (ИЗМЕНЕНО: без линии, в одну строчку) */}
        <div className="pl-8 pb-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#565659]">
          <a 
            href={`mailto:${profile.email}`} 
            className="hover:text-[#ff7b1b] transition-colors"
          >
            {profile.email}
          </a>

          {/* Точка-разделитель */}
          <span className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block"></span>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 uppercase tracking-wider">
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

    {/* Правая колонка (Фото) */}
    <div className="lg:w-1/2 relative overflow-hidden bg-gray-200">
      <img
        src={images.portrait}
        alt="Anton Liutin"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  </div>
</section>

      {/* About Me */}
      <section id="about" className="w-full border-b border-[#d2d2d3] bg-[#fafafa]">
  <div className="max-w-[1440px] mx-auto">
    <div className="px-8 pt-32 pb-12">
      <h2 className="text-[40px] font-['Ovo',serif] text-[#1a1a1b]">About Me</h2>
      {/* Оставили только mt-6 для отступа в 24px сверху */}
      <p className="text-[#565659] text-base leading-[1.35] mt-6 max-w-2xl">
        {aboutBio}
      </p>
    </div>

          <div className="px-8 pb-16">
  <div className="grid grid-cols-1 lg:grid-cols-3">
    
    {/* Карточка 1: Линия справа на ПК (снизу на телефоне) */}
    <div className="p-8 pl-0 flex flex-col justify-between min-h-[320px] border-b lg:border-b-0 lg:border-r border-[#d2d2d3] hover:bg-[#fafafa] transition-colors">      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-medium text-[#1a1a1b] leading-tight pr-4">
          Development <br />Economics
        </h3>
        <Mountains className="w-8 h-8 text-[#1a1a1b] shrink-0" />
      </div>
      <p className="text-[#565659] text-base leading-[1.35] mt-12">
        I study the economic mechanisms driving sustainable growth by evaluating policies that improve resource access and productivity in developing agricultural regions.
      </p>
    </div>

    {/* Карточка 2: Линия справа на ПК (снизу на телефоне) */}
    <div className="p-8 flex flex-col justify-between min-h-[320px] border-b lg:border-b-0 lg:border-r border-[#d2d2d3] hover:bg-[#fafafa] transition-colors">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-medium text-[#1a1a1b] leading-tight pr-4">
          Environmental<br /> & Natural Resource Economics
        </h3>
        <Water className="w-8 h-8 text-[#1a1a1b] shrink-0" />
      </div>
      <p className="text-[#565659] text-base leading-[1.35] mt-12">
        My research focuses on the sustainable management of critical resources, particularly water, balancing vital agricultural production with long-term environmental health.
      </p>
    </div>

    {/* Карточка 3: Вообще без линий */}
    <div className="p-8 flex flex-col justify-between min-h-[320px] hover:bg-[#fafafa] transition-colors">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-medium text-[#1a1a1b] leading-tight pr-4">
          Economic<br /> History
        </h3>
        <PlacesEarthPlanet className="w-8 h-8 text-[#1a1a1b] shrink-0" />
      </div>
      <p className="text-[#565659] text-base leading-[1.35] mt-12">
        I study the historical trends and patterns in the economic history of developing agricultural regions.
      </p>
    </div>
    
  </div>
</div>
        </div>
      </section>

    {/* Research preview */}
      <section className="w-full border-b border-[#d2d2d3] bg-[#fafafa]">
        {/* Обертка для заголовка на всю ширину с нижней линией */}
        <div className="w-full border-b border-[#d2d2d3]">
          <div className="max-w-[1440px] mx-auto px-8 pt-32 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[40px] font-['Ovo',serif] text-[#1a1a1b]">Research</h2>
            <Link
              to="/research"
              className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#1a1a1b] hover:text-[#ff7b1b] transition-colors pb-1"
            >
              See all publications
              <ArrowDownRight className="w-4 h-4 -rotate-45" />
            </Link>
          </div>
        </div>

        {/* Обертка для списка статей */}
        <div className="max-w-[1440px] mx-auto flex flex-col">
          {recentPublications.map((pub, idx) => {
            return (
              <article
                key={idx}
                className={`${
                  idx > 0 ? "border-t border-[#d2d2d3]" : ""
                } group px-8 py-10 grid grid-cols-1 lg:grid-cols-3 hover:bg-white transition-colors`}
              >
                {/* Левая часть (1/3) */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase tracking-wider">
                    <span>{pub.tag}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>{pub.year}</span>
                  </div>
                  <p className="text-[#565659] text-sm font-medium mt-2">{pub.venue}</p>
                </div>
                
                {/* Правая часть (2/3). 
                    УБРАЛИ lg:pl-8 отсюда, чтобы заголовок встал ровно на линию сетки */}
                <div className="lg:col-span-2 mt-6 lg:mt-0 flex flex-col items-start">
                  <h3 className="text-2xl lg:text-[26px] font-['Ovo',serif] leading-tight text-[#1a1a1b] max-w-3xl">
                    {pub.title}
                  </h3>
                  
                  <p className="text-[#565659] text-lg font-medium leading-[1.4] tracking-[-0.02em] mt-3">
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

                  <a
                    href={pub.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-4 cursor-pointer"
                  >
                    <span className="text-sm font-medium uppercase tracking-wider text-[#1a1a1b] group-hover:text-[#ff7b1b] transition-colors">
                      Read more
                    </span>
                    <div className="w-12 h-12 bg-[#e5e5e5] flex items-center justify-center group-hover:bg-[#1a1a1b] group-hover:text-white transition-colors">
                      <ArrRigth className="w-5 h-5" />
                    </div>
                  </a>

                </div>
              </article>
            );
          })}
        </div>
      </section>
      {/* Blog preview */}
      <section className="w-full border-b border-[#d2d2d3] bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-8 pt-32 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[40px] font-['Ovo',serif] text-[#1a1a1b]">Blog</h2>
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#1a1a1b] hover:text-[#ff7b1b] transition-colors pb-1"
            >
              See all posts
              <ArrowDownRight className="w-4 h-4 -rotate-45" />
            </Link>
          </div>
          <div className="px-8 pb-16">
            {/* Убрали bg-white отсюда */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-l border-[#d2d2d3]">
              {recentBlogs.map((post, idx) => (
                <a
                  key={idx}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Добавили bg-[#fafafa] (дефолт) и hover:bg-white (при наведении)
                  className="border-b border-r border-[#d2d2d3] p-8 flex flex-col bg-[#fafafa] hover:bg-white transition-colors cursor-pointer group"
                >
                  <div className="h-[220px] w-full overflow-hidden mb-6 bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xl font-medium mb-8 flex-1 leading-snug text-[#1a1a1b]">{post.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase tracking-wider">
                      <span>{post.venue}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full" />
                      <span>{post.year}</span>
                    </div>
                    <div className="w-12 h-12 bg-[#e5e5e5] flex items-center justify-center group-hover:bg-[#1a1a1b] group-hover:text-white transition-colors">
                      <ArrRigth className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience preview */}
      <section className="w-full border-b border-[#d2d2d3] bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-8 pt-32 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[40px] font-['Ovo',serif] text-[#1a1a1b]">Experience</h2>
            <Link
              to="/experience"
              className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-[#1a1a1b] hover:text-[#ff7b1b] transition-colors pb-1"
            >
              See full timeline
              <ArrowDownRight className="w-4 h-4 -rotate-45" />
            </Link>
          </div>
          <div className="px-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#d2d2d3] bg-white">
              {recentExperiences.map((item, idx) => {
                const tag =
                  item.kind === "teaching"
                    ? "TEACHING"
                    : item.kind === "research"
                    ? "RESEARCH"
                    : "FIELDWORK";
                const heading =
                  item.kind === "research" ? `${item.role} · ${item.title}` : item.title;
                return (
                  <div
                    key={idx}
                    className="border-b border-r border-[#d2d2d3] p-8 flex flex-col"
                  >
                    <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase tracking-wider mb-6">
                      <span>{tag}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full" />
                      <span>{item.periodLabel}</span>
                    </div>
                    <h3 className="text-2xl font-['Ovo',serif] leading-tight mb-4 text-[#1a1a1b]">{heading}</h3>
                    <p className="text-[#565659] text-base font-medium mb-2">{item.orgShort}</p>
                    {item.detail && <p className="text-[#757578] text-sm">{item.detail}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

     {/* Data & Methods → GitHub pointer */}
      <section 
        className="relative w-full border-b border-[#d2d2d3] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.bagdata})` }} // Сюда подставь нужную картинку
      >
        {/* Контент (относительное позиционирование, чтобы быть поверх overlay) */}
        <div className="relative max-w-[1440px] mx-auto">
          
          <div className="px-8 py-32 flex flex-col items-center text-center">
            
            <h2 className="text-[40px] font-['Ovo',serif] text-white">
              Data &amp; Methods
            </h2>
            
            <p className="text-gray-200 text-base font-medium mt-6 max-w-2xl leading-[1.35]">
              Code and replication files for my projects live on GitHub.
            </p>
            
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              // Сделал кнопку оранжевой по умолчанию, чтобы она горела на темном фоне, 
              // а при наведении она становится белой
              className="inline-flex items-center gap-3 mt-10 bg-[#1A1A1B] text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-white hover:text-[#1a1a1b] transition-colors"
            >
              github.com/{profile.github}
              <ArrowDownRight className="w-5 h-5 -rotate-45" />
            </a>

          </div>
        </div>
      </section>

     {/* Something personal */}
      <section className="w-full border-b border-[#d2d2d3] bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-8 pt-32 pb-8">
            <h2 className="text-[40px] font-['Ovo',serif] text-[#1a1a1b]">Something personal</h2>
          </div>
          <div className="px-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Картинка 1 */}
              <div className="h-[600px] overflow-hidden group bg-gray-200">
                <img
                  src={images.personal1}
                  alt="Personal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Картинка 2 */}
              <div className="h-[600px] overflow-hidden group bg-gray-200">
                <img
                  src={images.personal2}
                  alt="Personal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Текстовый блок 1 */}
              <div className="h-[600px] bg-[#f3f3f4] p-8 flex flex-col justify-center border border-[#d2d2d3]">
                <p className="text-[#1a1a1b] text-base font-medium leading-[1.35]">
                  When I'm not working on research, I enjoy nature photography and long walks in
                  botanical gardens.
                </p>
              </div>

              {/* Картинка 3 */}
              <div className="h-[600px] overflow-hidden group bg-gray-200">
                <img
                  src={images.personal3}
                  alt="Personal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Текстовый блок 2 */}
              <div className="h-[600px] bg-[#f3f3f4] p-8 flex flex-col justify-center border border-[#d2d2d3]">
                <p className="text-[#1a1a1b] text-base font-medium leading-[1.35]">
                  Outside of economics, I spend time on outdoor sports and travel. Agriculture
                  isn't just a research topic for me — it's a lifelong interest in everything that
                  grows.
                </p>
              </div>
              
              {/* Картинка 4 */}
              <div className="h-[600px] overflow-hidden group bg-gray-200">
                <img
                  src={images.personal4}
                  alt="Personal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
