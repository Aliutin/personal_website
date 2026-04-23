import { blogPosts } from "../../content";
import { ArrRigth } from "../../componets/CustomIcons";

export default function Blog() {
  return (
    <div className="w-full flex flex-col bg-[#fafafa] min-h-screen">
      
      {/* Шапка (Hero) */}
      <section className="w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-8">
          <h1 className="max-w-4xl mb-6 text-foreground">
            Blog
          </h1>
          <p className="text-body text-muted-foreground max-w-3xl leading-relaxed">
            Policy briefs and outreach writing on agriculture, water, and development.
          </p>
        </div>
      </section>

      {/* Список постов */}
      {/* ИЗМЕНЕНО: Добавлен отступ сверху для десктопа (md:pt-12 lg:pt-16) 
          и отступ снизу для мобилки и десктопа перед футером (pb-16 md:pb-24) */}
      <section className="w-full bg-[#fafafa] pb-16 md:pb-24 md:pt-12 lg:pt-16">
        <div className="max-w-[1440px] mx-auto px-0 md:px-6 lg:px-8">
          
          {/* ИЗМЕНЕНО: Добавлен md:border-t, чтобы у оторванной от верха сетки была верхняя рамка на десктопе */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:border-t md:border-l border-border">
            {blogPosts.map((post, idx) => (
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
                
                <h4 className="text-subtitle text-foreground mb-8 flex-1 group-hover:text-[#ff7b1b] transition-colors">
                  {post.title}
                </h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-small uppercase tracking-wider">
                    <span>{post.venue}</span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <span>{post.year}</span>
                  </div>
                  
                  <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors shrink-0">
                    <ArrRigth className="w-5 h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}