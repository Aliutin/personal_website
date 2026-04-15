import { experiences, Experience, ExperienceKind } from "../../content";

function kindBadgeClasses(kind: ExperienceKind) {
  if (kind === "teaching") {
    return "bg-[#ff7b1b] text-white border-[#ff7b1b]";
  }
  if (kind === "research") {
    return "bg-[#1a1a1b] text-white border-[#1a1a1b]";
  }
  return "bg-[#2e5b82] text-white border-[#2e5b82]";
}

function sortedByStartDesc(items: Experience[]) {
  return [...items].sort((a, b) => {
    if (b.startYear !== a.startYear) return b.startYear - a.startYear;
    return b.startMonth - a.startMonth;
  });
}

function TimelineSection({ items }: { items: Experience[] }) {
  const sorted = sortedByStartDesc(items);
  if (sorted.length === 0) {
    return (
      <p className="text-[#757578] text-sm italic">No entries yet.</p>
    );
  }
  return (
    <div className="relative pl-14 lg:pl-20">
      <div className="absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-[#d2d2d3]" />
      <div className="flex flex-col gap-10">
        {sorted.map((item, idx) => (
          <div key={idx} className="relative">
            <div
              className={`absolute -left-[38px] lg:-left-[47px] top-2 w-4 h-4 rounded-full border-[3px] ${kindBadgeClasses(
                item.kind
              )}`}
            />
            <div className="flex flex-col gap-2">
              <div className="text-[#757578] text-sm font-medium uppercase tracking-wider">
                {item.periodLabel}
              </div>
              <h3 className="text-2xl font-['Ovo',serif] leading-tight">
                {item.kind === "teaching" && (
                  <>
                    <span className="text-[#757578]">{item.role} — </span>
                    {item.title}
                  </>
                )}
                {item.kind === "research" && (
                  <>
                    <span className="text-[#757578]">{item.role} · </span>
                    {item.title}
                  </>
                )}
                {item.kind === "fieldwork" && <>{item.title}</>}
              </h3>
              <p className="text-[#565659] text-base font-medium">{item.org}</p>
              {item.detail && (
                <p className="text-[#757578] text-sm leading-relaxed max-w-2xl">{item.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  const researchItems = experiences.filter((e) => e.kind === "research");
  const teachingItems = experiences.filter((e) => e.kind === "teaching");
  const fieldworkItems = experiences.filter((e) => e.kind === "fieldwork");

  return (
    <>
      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-16 pb-6">
          <h1 className="text-[48px] lg:text-[56px] font-['Ovo',serif] leading-tight">
            Experience
          </h1>
          <p className="text-[#565659] text-lg font-medium mt-4 max-w-2xl">
            Research, teaching, and fieldwork since 2020.
          </p>
        </div>
      </section>

      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[32px] font-['Ovo',serif]">Research</h2>
          <p className="text-[#757578] text-sm mt-2 max-w-2xl">
            Research assistant roles with principal investigators.
          </p>
        </div>
        <div className="px-6 lg:px-12 pb-16">
          <TimelineSection items={researchItems} />
        </div>
      </section>

      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[32px] font-['Ovo',serif]">Fieldwork</h2>
          <p className="text-[#757578] text-sm mt-2 max-w-2xl">
            Primary data collection in Uzbekistan — surveys, interviews, and field experiments.
          </p>
        </div>
        <div className="px-6 lg:px-12 pb-16">
          <TimelineSection items={fieldworkItems} />
        </div>
      </section>

      <section className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-12 pb-6">
          <h2 className="text-[32px] font-['Ovo',serif]">Teaching</h2>
          <p className="text-[#757578] text-sm mt-2 max-w-2xl">
            Teaching assistant roles at UW–Madison and the New Economic School.
          </p>
        </div>
        <div className="px-6 lg:px-12 pb-16">
          <TimelineSection items={teachingItems} />
        </div>
      </section>
    </>
  );
}
