import { ArrowDownRight } from "lucide-react";
import { blogPosts } from "../../content";

export default function Blog() {
  return (
    <>
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-16 pb-6">
          <h1 className="text-[48px] lg:text-[56px] font-['Ovo',serif] leading-tight">Blog</h1>
          <p className="text-[#565659] text-lg font-medium mt-4 max-w-2xl">
            Policy briefs and outreach writing on agriculture, water, and development.
          </p>
        </div>
      </section>

      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-t border-[#d2d2d3] md:border-r last:md:border-r-0 xl:border-r xl:last:border-r-0 p-8 flex flex-col hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="h-[260px] w-full overflow-hidden mb-6 bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-2xl font-medium mb-10 flex-1 leading-snug">{post.title}</h4>
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
    </>
  );
}
