import { experiences, Experience, ExperienceKind } from "../../content";

// --- ЛОГИКА ГРУППИРОВКИ ---
function groupExperiencesByYear(items: Experience[]) {
  const grouped: Record<number, Experience[]> = {};

  items.forEach((item) => {
    const year = item.startYear;
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(item);
  });

  const sortedYears = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  sortedYears.forEach((year) => {
    grouped[year].sort((a, b) => b.startMonth - a.startMonth);
  });

  return { grouped, sortedYears };
}

// --- ЛОКАЛЬНЫЕ КОМПОНЕНТЫ ---

function DotIcon({ kind }: { kind: ExperienceKind }) {
  let bgColor = "bg-gray-400";
  if (kind === "research") bgColor = "bg-[#ff7b1b]"; 
  if (kind === "fieldwork") bgColor = "bg-[#1a1a1b]"; 
  if (kind === "teaching") bgColor = "bg-[#2e5b82]"; 

  return <span className={`w-1.5 h-1.5 rounded-full ${bgColor} shrink-0`} />;
}

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-2 text-small uppercase tracking-wider text-muted-foreground mb-3">
        <DotIcon kind={item.kind} />
        <span>{item.kind}</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span>{item.periodLabel}</span>
      </div>
      
      <h3 className="text-foreground mb-1">
        {item.kind === "teaching" && item.role && <span className="text-muted-foreground">{item.role} · </span>}
        {item.kind === "research" && item.role && <span className="text-muted-foreground">{item.role} · </span>}
        {item.title}
      </h3>
      
      <p className="text-body text-muted-foreground mb-4">
        {item.org}
      </p>
      
      {item.detail && (
        <p className="text-subtitle text-foreground max-w-3xl">
          {item.detail}
        </p>
      )}
    </div>
  );
}

function YearBlock({
  year,
  items,
  locationLabel,
}: {
  year: number;
  items: Experience[];
  locationLabel: string;
}) {
  return (
    <div className="w-full border-b border-border last:border-0">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-12 lg:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        
        {/* Левая колонка 1/3: Год, локация */}
        <div className="lg:col-span-1 flex flex-col items-start">
          <h2 className="text-foreground">
            {year}
          </h2>
          <span className="text-small uppercase tracking-wider text-muted-foreground mt-2">
            {locationLabel}
          </span>
        </div>

        {/* Правая колонка 2/3: Список событий */}
        <div className="lg:col-span-2 flex flex-col">
          {items.map((item, idx) => (
            <div key={idx}>
              <ExperienceItem item={item} />
              {idx < items.length - 1 && (
                <div className="w-full h-px bg-border my-10" />
              )}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

// --- ОСНОВНАЯ СТРАНИЦА ---
export default function ExperiencePage() {
  const { grouped, sortedYears } = groupExperiencesByYear(experiences);

  return (
    <div className="w-full flex flex-col bg-[#fafafa] min-h-screen">
      
      {/* Шапка (Hero) */}
      <section className="w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-8">
          <h1 className="max-w-4xl mb-6 text-foreground">
            Experience
          </h1>
          <p className="text-body text-muted-foreground max-w-3xl leading-relaxed">
            Research, teaching, and fieldwork since 2020.
          </p>
        </div>
      </section>

      {/* Список по годам */}
      <section className="w-full flex flex-col">
        {sortedYears.map((year) => {
          const locationLabel = year === 2020 ? "AT NES" : "AT UW-MADISON";

          return (
            <YearBlock
              key={year}
              year={year}
              items={grouped[year]}
              locationLabel={locationLabel}
            />
          );
        })}
      </section>

    </div>
  );
}