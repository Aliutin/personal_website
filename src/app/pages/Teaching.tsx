import { teaching, researchAssistantRoles } from "../../content";

export default function Teaching() {
  return (
    <>
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-16 pb-6">
          <h1 className="text-[48px] lg:text-[56px] font-['Ovo',serif] leading-tight">
            Teaching &amp; Working Experience
          </h1>
          <p className="text-[#565659] text-lg font-medium mt-4 max-w-2xl">
            Courses taught and research assistant roles.
          </p>
        </div>
      </section>

      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[32px] font-['Ovo',serif]">Teaching</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {teaching.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-[#d2d2d3] md:border-r last:md:border-r-0 p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase mb-6">
                <span>{item.tag}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <span>{item.period}</span>
              </div>
              <h3 className="text-2xl font-['Ovo',serif] leading-tight mb-4">{item.title}</h3>
              <p className="text-[#565659] text-base font-medium mb-2">{item.org}</p>
              <p className="text-[#757578] text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[32px] font-['Ovo',serif]">Research Assistant Experience</h2>
        </div>
        <div className="flex flex-col px-6 lg:px-12 pb-12">
          {researchAssistantRoles.map((role, idx) => (
            <div
              key={idx}
              className="border-t border-[#d2d2d3] py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <span className="font-medium text-[#1a1a1b]">{role.role}</span>
                <span className="text-[#565659]"> · {role.pi}</span>
              </div>
              <div className="text-[#757578] text-sm font-medium uppercase tracking-wider">
                {role.org} · {role.period}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
