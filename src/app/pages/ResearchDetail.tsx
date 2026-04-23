import { Link } from "react-router-dom";
import { ArrRigth, Mail } from "../../componets/CustomIcons";
import { profile, images } from "../../content";

export default function ResearchDetail() {
  return (
    <div className="w-full flex flex-col bg-[#fafafa] min-h-screen">
      
      {/* 1. Кнопка "Назад" и Заголовок h3 */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-5">
          <Link 
            to="/research" 
            className="w-12 h-12 bg-[#1a1a1b] text-white flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0"
          >
            <ArrRigth className="w-5 h-5 rotate-180" />
          </Link>
          <h3 className="text-foreground">Research</h3>
        </div>
      </div>

      {/* 2. Hero Изображение (Картинка над текстом на мобилке/планшете) */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pb-16">
        {/* ИЗМЕНЕНО: flex-col для мобилок/планшетов, relative с фиксированной высотой для десктопа */}
        <div className="w-full flex flex-col lg:block lg:relative lg:h-[570px] overflow-hidden">
          <img 
            src={images.researchImage}
            alt="Hero background" 
            /* ИЗМЕНЕНО: фиксированная высота на мобилке/планшете, absolute на десктопе */
            className="w-full h-[300px] md:h-[450px] lg:h-full object-cover lg:absolute lg:inset-0"
          />
          
          <div className="w-full lg:w-[70%] bg-[#1a1a1b] p-6 md:p-8 lg:p-8 flex flex-col items-start lg:absolute lg:bottom-0 lg:left-0 z-10">
            <div className="flex flex-wrap items-center gap-2 text-small uppercase tracking-wider text-[#a1a1aa] mb-6">
              <span>JOB MARKET PAPER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7b1b]" />
              <span>2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>58 PP</span>
            </div>

            <h3 className="text-white mb-6">
              Upstream Advantage in Surface Water Systems: Measuring Inequality Using a Water-Graph Approach
            </h3>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              Do formal water rights — prior appropriation plus water markets — eliminate the distributional inequality created by sequential canal delivery, or does physical network position still penalize tail-end farmers?
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 bg-[#e5e5e5] text-[#1a1a1b] px-6 py-4 text-small uppercase tracking-wider hover:bg-white transition-colors"
              >
                Extended preview
                <ArrRigth className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${profile.email}?subject=Draft request`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 bg-[#ff7b1b] text-white px-6 py-4 text-small uppercase tracking-wider hover:bg-orange-600 transition-colors"
              >
                Request Draft
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Статистика */}
      <section className="w-full border-t border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="flex flex-col">
              <h2 className="text-foreground mb-2">54,946</h2>
              <div className="text-small uppercase tracking-wider text-muted-foreground">Agricultural plots</div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-foreground mb-2">2.5×</h2>
              <div className="text-small uppercase tracking-wider text-muted-foreground">Drought amplification (ET)</div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-foreground mb-2">800 CE</h2>
              <div className="text-small uppercase tracking-wider text-muted-foreground">Previous driest 22-year period</div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-foreground mb-2">30%</h2>
              <div className="text-small uppercase tracking-wider text-muted-foreground">Arizona's Tier 1 allocation cut</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Основной контент */}
      <Section title="Abstract">
        Do formal water rights actually eliminate the distributional inequality created by sequential canal access? I build a water-graph of 54,946 agricultural plots across Arizona's canal networks and estimate how network position shapes crop outcomes during the Colorado River Basin's driest 22-year stretch since at least 800 CE. A donut identification strategy isolates far-upstream competition ({'>'}1–10 km) from spatially correlated local shocks; a downstream-position placebo supports a directional water-competition mechanism over omitted local variation.
      </Section>

      <Section title="Setting">
        Arizona's surface-water irrigation networks fed from the Colorado River Basin, during the Tier 1 shortage declaration that cut Arizona's allocation by 30% after the driest 22-year period since at least 800 CE.
      </Section>

      <Section title="Contribution">
        <ListBlock items={[
          "Builds the first large-scale water-graph mapping upstream–downstream relationships across 54,946 agricultural plots and multiple canal networks.",
          "Introduces a donut identification strategy that isolates far-upstream water competition (>1–10 km) from spatially correlated local shocks.",
          "Documents a direct policy tradeoff: prior appropriation alone does not resolve tail-end deprivation; groundwater and irrigation-district membership do."
        ]} />
      </Section>

<Section title="Data & method">
Water-graph constructed from USGS National Hydrography Dataset canal lines, DEM-inferred flow directions, and USDA Crop Sequence Boundaries.",
          "Outcomes: satellite-derived NDMI, GCVI, and evapotranspiration (2016–2023); drought measured via SPEI.",
          "Identification: donut specification with far-upstream variation only; within-plot panel rules out selection on permanent characteristics; downstream-position placebo rules out spatially correlated shocks."
              </Section>
    

      <Section title="Key findings">
        <ListBlock items={[
          "Downstream plots experience significantly lower NDMI, GCVI, and evapotranspiration — even after controlling for water-rights seniority, soil, groundwater access, and market proximity.",
          "Drought amplifies the position penalty by 2.0× (NDMI), 2.2× (GCVI), and 2.5× (ET) between the full canal path and the 10 km cutoff; effects emerge within-plot over time.",
          "The position–drought gradient is significant only in surface-water-dominant districts — groundwater access eliminates it entirely, pointing to infrastructure targeting and groundwater investment as policy levers."
        ]} />
      </Section>

      {/* 5. Фигуры */}
      <section className="w-full border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-subtitle text-foreground">Selected figures</h3>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <FigureCard image={images.graph1} title="Figure 1 — Water-graph" desc="54,946 plots mapped to upstream/downstream positions." />
            <FigureCard image={images.graph2} title="Figure 2 — Position penalty" desc="NDMI, GCVI, ET results controlling for rights." />
            <FigureCard image={images.graph3} title="Figure 3 — Donut curves" desc="Drought × position interaction strength." />
            <FigureCard image={images.graph1} title="Figure 4 — Heterogeneity" desc="Surface-water vs groundwater access." />
          </div>
        </div>
      </section>

      {/* 6. Policy implications (Черный блок) */}
      <DarkSection title="Policy implications">
        <StarListBlock items={[
          <><span className="text-white font-medium">Infrastructure targeting:</span> upgrades should prioritize far-downstream reaches where the position penalty concentrates.</>,
          <><span className="text-white font-medium">Groundwater investment</span> eliminates the gradient — a concrete buffer to fund in surface-water-dominant districts.</>,
          <><span className="text-white font-medium">Formal shortage protocols</span> in junior-priority districts appear to concentrate rather than distribute shortfalls.</>
        ]} />
      </DarkSection>

      {/* 7. Footer */}
      <section className="w-full bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
          <h2 className="text-foreground mb-10 max-w-3xl">
            Questions, data requests, or invitations — always welcome.
          </h2>
          
          <div className="flex flex-col items-center w-full gap-8">
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full">
              <a href={`mailto:${profile.email}`} className="w-full md:w-auto bg-[#ff7b1b] text-white px-8 py-4 text-body uppercase transition-colors hover:bg-orange-600 text-center">Get in touch</a>
              <a href={profile.scholarUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-[#e5e5e5] text-[#1a1a1b] px-8 py-4 text-body uppercase transition-colors hover:bg-gray-300 text-center">Google Scholar</a>
            </div>

            <Link to="/research" className="w-full md:w-auto inline-flex items-center justify-center gap-4 cursor-pointer group/btn">
              <span className="text-small uppercase tracking-wider text-foreground group-hover/btn:text-[#ff7b1b] transition-colors">
                Next research
              </span>
              <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-colors shrink-0">
                <ArrRigth className="w-5 h-5" />
              </div>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

// --- ХЕЛПЕРЫ ---

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="w-full border-b border-border">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h3 className="text-subtitle text-foreground">{title}</h3>
        </div>
        <div className="lg:col-span-2 text-article text-foreground max-w-3xl leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

function DarkSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="w-full bg-[#1a1a1b]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h3 className="text-subtitle text-white">{title}</h3>
        </div>
        <div className="lg:col-span-2 text-article text-gray-300 max-w-3xl leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

function ListBlock({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-5">
          <span className="text-body font-medium text-[#ff7b1b] mt-1 shrink-0">{String(idx + 1).padStart(2, "0")}</span>
          <span className="text-article text-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

function StarListBlock({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <span className="text-[#ff7b1b] mt-1 shrink-0">✦</span>
          <div className="text-article">{item}</div>
        </div>
      ))}
    </div>
  );
}

function FigureCard({ image, title, desc }: { image: string, title: string, desc: string }) {
  return (
    <div className="flex flex-col group">
      <div className="w-full aspect-[4/3] bg-white border border-border mb-5 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h4 className="text-body text-foreground font-semibold mb-2">{title}</h4>
      <p className="text-small text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}