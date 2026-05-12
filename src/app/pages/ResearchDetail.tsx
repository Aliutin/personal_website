import { Fragment, useState, type ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrRigth, Mail } from "../../componets/CustomIcons";
import {
  FigureGroup,
  Lightbox,
  useFigureGroup,
  type LightboxImage,
} from "../../componets/Lightbox";
import { images, profile, publications } from "../../content";

const upstreamDraftSubject = encodeURIComponent(
  "Draft request: Upstream Advantage in Surface Water Systems"
);

const behavioralGamesDraftSubject = encodeURIComponent(
  "Draft request: Using Behavioral Games to Understand Water-Saving Technology Adoption in Uzbekistan"
);

const upstreamSelectedFigures = [
  {
    image: images.jmpStudyAreaMap,
    title: "Figure 1 - Setting and sample",
    desc: "Arizona canal districts, major rivers, the CAP canal, and the concentration of 54,946 agricultural plots.",
  },
  {
    image: images.jmpWaterGraphPosition,
    title: "Figure 2 - Water-graph construction",
    desc: "GIS-based plot matching and signed-hop position assignment from the canal network.",
  },
  {
    image: images.jmpDonutIdentification,
    title: "Figure 3 - Donut identification",
    desc: "Near inactivity controls absorb local shocks; far-upstream variation identifies directional water competition.",
  },
  {
    image: images.jmpDonutCoefficients,
    title: "Figure 4 - Main donut result",
    desc: "The drought-position coefficient becomes more negative as the upstream distance threshold increases.",
  },
  {
    image: images.jmpUpstreamDownstreamHorserace,
    title: "Figure 5 - Upstream vs downstream placebo",
    desc: "Upstream position drives the drought gradient, while downstream position fades toward zero.",
  },
  {
    image: images.jmpProductionFunction,
    title: "Figure 6 - Production function calibration",
    desc: "Calibrated water reallocation example showing donor and recipient plots on an alfalfa water-production curve.",
  },
];

export default function ResearchDetail() {
  const { slug } = useParams();

  if (slug === "upstream-advantage") {
    return <UpstreamAdvantageDetail />;
  }

  if (slug === "water-conservation") {
    return <WaterConservationDetail />;
  }

  if (slug === "behavioral-games") {
    return <BehavioralGamesDetail />;
  }

  const publication = publications.find((item) => item.slug === slug);

  if (!publication) {
    return <Navigate to="/research" replace />;
  }

  return <GenericResearchDetail publication={publication} />;
}

function UpstreamAdvantageDetail() {
  const gallery: LightboxImage[] = upstreamSelectedFigures.map((f) => ({
    src: f.image,
    alt: f.title,
    caption: f.desc,
  }));
  return (
    <FigureGroup figures={gallery}>
    <div className="w-full flex flex-col bg-[#fafafa] min-h-screen">
      <ResearchHeader />

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pb-16">
        <div className="w-full flex flex-col lg:block lg:relative lg:h-[570px] overflow-hidden">
          <img
            src={images.researchImage}
            alt="Historical canal map of the Phoenix area"
            className="w-full h-[300px] md:h-[450px] lg:h-full object-cover lg:absolute lg:inset-0"
          />

          <div className="w-full lg:w-[70%] bg-[#1a1a1b] p-6 md:p-8 lg:p-8 flex flex-col items-start lg:absolute lg:bottom-0 lg:left-0 z-10">
            <div className="flex flex-wrap items-center gap-2 text-small uppercase text-[#a1a1aa] mb-6">
              <span>JOB MARKET PAPER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7b1b]" />
              <span>2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>58 PP</span>
            </div>

            <h3 className="text-white mb-6">
              Upstream Advantage in Surface Water Systems: Measuring Inequality
              Using a Water-Graph Approach
            </h3>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              Do formal water rights and markets eliminate the distributional
              inequality created by sequential canal delivery, or does physical
              network position still penalize tail-end farmers?
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <AnchorButton href="#selected-figures" tone="light">
                View figures
                <ArrRigth className="w-4 h-4 rotate-90" />
              </AnchorButton>
              <AnchorButton
                href={`mailto:${profile.email}?subject=${upstreamDraftSubject}`}
                tone="orange"
              >
                Request draft
                <Mail className="w-4 h-4" />
              </AnchorButton>
            </div>
          </div>
        </div>
      </section>

      <StatsBand
        stats={[
          ["54,946", "Agricultural plots"],
          ["2016-2023", "Plot-year panel"],
          ["-0.061", "GCVI drought-position effect at >10 km"],
          ["30%", "CAP deliveries cut in Tier 1 shortage"],
        ]}
      />

      <Section id="abstract" title="Abstract">
        Do formal water rights eliminate the inequality created by sequential
        canal access? I build a directed water graph of 54,946 Arizona
        agricultural plots and test whether network position shapes
        satellite-derived crop outcomes from 2016 to 2023. A donut
        identification strategy isolates far-upstream competition (&gt;1–10 km)
        from spatially correlated local shocks, validating a directional
        water-competition mechanism. The paper estimates whether tail-end plots
        have lower crop health, whether drought amplifies that penalty, and
        which district institutions buffer or concentrate it.
      </Section>

      <Section title="Approach">
        <ListBlock
          items={[
            "Construct a water graph from canal lines, flow-direction information, and USDA Crop Sequence Boundaries, then assign each plot a head-to-tail network position.",
            "Measure outcomes with satellite-derived NDMI, GCVI, and evapotranspiration, matched to drought exposure and irrigation-district institutions.",
            "Use a donut design: near inactivity controls absorb local shocks, while far-upstream position variation identifies water competition along the canal.",
          ]}
        />
      </Section>

      <Section title="Main findings">
        <ListBlock
          items={[
            "Tail-end plots have lower NDMI, GCVI, and evapotranspiration even after controls for seniority, soil, groundwater access, market proximity, and fixed effects.",
            "The drought-position penalty strengthens with distance: at the >10 km threshold, the interaction is -0.014 for NDMI, -0.061 for GCVI, and -0.047 for ET.",
            "A horse-race specification shows the pattern is directional: upstream position drives the gradient, while downstream position fades toward zero.",
            "The effect is concentrated in surface-water-dominant and junior-rights districts; groundwater-dominant districts show little to no position-drought gradient.",
          ]}
        />
      </Section>

      <section id="selected-figures" className="w-full border-b border-border scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-subtitle text-foreground">Selected figures</h3>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <FigureCard
              className="md:col-span-2"
              frameClassName="min-h-[500px] md:min-h-[330px]"
              title="Web figure — donut identification and the directional placebo"
              desc="A compact website figure translating the empirical strategy into three causal-validity steps: position penalty, distance-cutoff strengthening, and a downstream placebo."
            >
              <UpstreamMechanismFigure />
            </FigureCard>
            {upstreamSelectedFigures.map((figure) => (
              <FigureCard
                key={figure.title}
                image={figure.image}
                title={figure.title}
                desc={figure.desc}
              />
            ))}
          </div>
        </div>
      </section>

      <DarkSection title="Policy implications">
        <StarListBlock
          items={[
            <>
              <span className="text-white font-medium">Rights are not enough:</span>{" "}
              formal allocation rules do not fully remove inequality created by
              sequential delivery.
            </>,
            <>
              <span className="text-white font-medium">Price by volume:</span>{" "}
              volumetric water pricing nearly fully offsets the drought–position
              gradient in junior-rights, surface-water districts, where the
              penalty is largest—likely because per-unit pricing requires
              turnout-level metering and creates marginal-cost incentives
              against over-extraction.
            </>,
            <>
              <span className="text-white font-medium">Buffer scarcity with groundwater:</span>{" "}
              well access eliminates the position penalty entirely in
              groundwater-dominant districts by providing an alternative supply
              immune to canal position.
            </>,
            <>
              <span className="text-white font-medium">Target the tail:</span>{" "}
              canal modernization, monitoring, and shortage protocols should
              prioritize downstream reaches in surface-water systems, where the
              position penalty is most exposed during drought.
            </>,
          ]}
        />
      </DarkSection>

      <ContactSection />
    </div>
    </FigureGroup>
  );
}

function WaterConservationDetail() {
  const gallery: LightboxImage[] = [
    {
      src: images.waterCottonKcStages,
      alt: "Figure 1 — Cotton stages and Kc",
      caption:
        "The underlying scheduling tool: per-event water volume is the product of ET₀ × Kc × interval, indexed to crop development stage. Farmers read off the table; the calculation happens at the reference station.",
    },
    {
      src: images.waterEvaporationStabilityMap,
      alt: "Figure 3 — Spatial view: where ET is stable",
      caption:
        "Map overlay — districts in the arid belt combine low evaporation standard deviation with high agricultural water stress. The spatial story of transfer candidates.",
    },
    {
      src: images.waterStressStabilityScatter,
      alt: "Figure 5 — Analytical view: water stress vs evaporation stability",
      caption:
        "Each country plotted by agricultural water stress (y, log) against evaporation CV (x, log). The critically water-stressed cluster (red) sits on the low-CV side: Kuwait, Libya, UAE, Saudi Arabia, Qatar, Egypt, Turkmenistan, Syria, Uzbekistan. These are the immediate hub-and-spoke transfer candidates.",
    },
  ];
  return (
    <FigureGroup figures={gallery}>
    <div className="w-full flex flex-col bg-[#fafafa] min-h-screen">
      <ResearchHeader />

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pb-16">
        <div className="w-full flex flex-col lg:block lg:relative lg:h-[570px] overflow-hidden">
          <img
            src={images.waterCottonHero}
            alt="Rows of cotton plants in a cultivated field"
            className="w-full h-[300px] md:h-[450px] lg:h-full object-cover object-center lg:absolute lg:inset-0"
          />

          <div className="w-full lg:w-[70%] bg-[#1a1a1b] p-6 md:p-8 lg:p-8 flex flex-col items-start lg:absolute lg:bottom-0 lg:left-0 z-10">
            <div className="flex flex-wrap items-center gap-2 text-small uppercase text-[#a1a1aa] mb-6">
              <span>UNDER REVIEW</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1b] ring-2 ring-white/40" />
              <span>2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>31 PP</span>
            </div>

            <h3 className="text-white mb-6">
              Water Conservation Through Simplified Drip Irrigation Scheduling
              for Cotton Cultivation in Uzbekistan
            </h3>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              Drip without scheduling under-irrigates: farmers using only
              intuition apply 47% less water than furrow but produce yields
              well below the experimental frontier. The fix isn't more
              conservation — pre-calculated tables raise drip water by 31.6%,
              close the yield gap, and keep water use below furrow. And because
              reference evapotranspiration is temporally stable in arid regions,
              one station can schedule hundreds of farms.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <AnchorButton href="#selected-figures" tone="light">
                View figures
                <ArrRigth className="w-4 h-4 rotate-90" />
              </AnchorButton>
              <AnchorButton
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5535146"
                tone="orange"
                external
              >
                Open paper
                <ArrRigth className="w-4 h-4" />
              </AnchorButton>
            </div>
          </div>
        </div>
      </section>

      <StatsBand
        stats={[
          ["+39.9%", "Phase I yield gain — scheduled drip vs furrow"],
          ["+60.3%", "Phase II 2023 yield gain — drip with tables vs furrow"],
          ["-24.3%", "Water saving — scheduled drip vs furrow"],
          ["9", "Prime hub-and-spoke transfer countries"],
        ]}
      />

      <Section id="abstract" title="Abstract">
        Water scarcity has accelerated in Central Asia, while practical
        scheduling guidance for drip irrigation remains limited. We apply an
        FAO-56 evapotranspiration-based scheduling approach to drip-irrigated
        cotton in Jizzakh, packaged as pre-calculated tables for farmers, and
        validate it through a two-phase design: paired researcher-supervised
        drip–furrow fields during 2021–2023, and a 32-farmer adoption panel
        during 2022–2023. Pre-calculated scheduling tables can convert existing
        drip hardware into measurable water-saving and yield gains.
      </Section>

      <Section title="Approach">
        <ListBlock
          items={[
            "Validate an FAO-56 ET0 x Kc schedule on researcher-supervised experimental plots, comparing scheduled drip plots with farmer-managed furrow controls.",
            "Transfer the same scheduling logic to farmers' drip plots through simple pre-calculated tables rather than real-time sensors or farmer-side calculations.",
            "Use a Difference-in-Differences design to isolate the effect of scheduling guidance, then test where the approach can scale using evaporation-stability data.",
          ]}
        />
      </Section>

      <Section title="Main findings">
        <ListBlock
          items={[
            "Phase I (researcher-supervised) establishes the production frontier: scheduled drip vs farmer-managed furrow yields +39.9% seed-cotton, uses 24.3% less water, and raises water productivity by 84.9%.",
            "The paradox: in 2022 farmer drip plots used 47% less water than furrow yet stayed well below the Phase I frontier. Drip without scheduling means systematic under-irrigation — the intuition 'less water = better' over-saves and sacrifices yield.",
            "The fix is more water, counter-intuitively: pre-calculated tables raised drip water application by 31.6% in 2023, lifting yields to the experimental frontier while keeping water use below furrow.",
            "The Difference-in-Differences estimate identifies the guidance gap, not drip adoption itself, as the binding constraint on smallholder drip performance.",
            "Reference evapotranspiration is temporally stable in arid regions (Jizzakh CV = 21.1%), and the same stable-ET cluster contains nine critically water-stressed countries — Kuwait, Libya, Egypt, UAE, Qatar, Turkmenistan, Syria, Uzbekistan, Saudi Arabia — where a hub-and-spoke distribution of pre-calculated tables should transfer.",
          ]}
        />
      </Section>

      <section id="selected-figures" className="w-full border-b border-border scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-subtitle text-foreground">Selected figures</h3>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <FigureCard
              className="md:col-span-2"
              frameClassName="min-h-[450px] md:min-h-[330px]"
              title="Web figure — the under-irrigation paradox in three steps"
              desc="Phase I sets the frontier; drip alone (Phase II 2022) under-irrigates; tables (Phase II 2023) raise drip water back toward the frontier while staying below furrow."
            >
              <WaterGuidanceFigure />
            </FigureCard>
            <FigureCard
              image={images.waterCottonKcStages}
              title="Figure 1 — Cotton stages and Kc"
              desc="The underlying scheduling tool: per-event water volume is the product of ET₀ × Kc × interval, indexed to crop development stage. Farmers read off the table; the calculation happens at the reference station."
            />
            <FigureCard
              image={images.waterEvaporationStabilityMap}
              title="Figure 3 — Spatial view: where ET is stable"
              desc="Map overlay — districts in the arid belt combine low evaporation standard deviation with high agricultural water stress. The spatial story of transfer candidates."
              frameClassName="aspect-[16/7]"
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/9]"
              image={images.waterStressStabilityScatter}
              title="Figure 5 — Analytical view: water stress vs evaporation stability"
              desc="Each country plotted by agricultural water stress (y, log) against evaporation CV (x, log). The critically water-stressed cluster (red) sits on the low-CV side: Kuwait, Libya, UAE, Saudi Arabia, Qatar, Egypt, Turkmenistan, Syria, Uzbekistan. These are the immediate hub-and-spoke transfer candidates — where reference-station ET₀ tables can serve hundreds of farms without on-farm sensors."
            />
          </div>
        </div>
      </section>

      <DarkSection title="Policy implications">
        <StarListBlock
          items={[
            <>
              <span className="text-white font-medium">Scheduling is the binding constraint, not hardware:</span>{" "}
              drip subsidies that fund equipment but not scheduling leave
              farmers under-irrigating. Pair every hardware subsidy with a
              pre-calculated irrigation table — the marginal cost is trivial
              relative to the yield it unlocks.
            </>,
            <>
              <span className="text-white font-medium">Exploit ET-stability in arid regions:</span>{" "}
              Kuwait, Libya, Egypt, the UAE, Qatar, Turkmenistan, Syria,
              Uzbekistan, and Saudi Arabia combine critical water stress with
              stable July evapotranspiration — a small number of reference
              meteorological stations can schedule hundreds of surrounding
              farms via tables, no on-farm sensors required.
            </>,
            <>
              <span className="text-white font-medium">Keep extension lightweight:</span>{" "}
              officers distribute tables, calibrate operating hours per farm
              from local pressure and emitter specs, and read water meters; no
              farmer training in FAO-56 theory required from either side.
            </>,
          ]}
        />
      </DarkSection>

      <ContactSection primaryHref="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5535146" primaryLabel="Open paper" />
    </div>
    </FigureGroup>
  );
}

function BehavioralGamesDetail() {
  const gallery: LightboxImage[] = [
    {
      src: images.behavioralGamesSpilloverHeatmap,
      alt: "Theory — spillover matrix",
      caption:
        "Each cell shows the lifetime payoff change when one player (row) adopts DI. Above the diagonal: upstream → downstream spillovers, all positive, largest at +2.1 for P1 → P5. Below the diagonal: zero everywhere — downstream adoption generates no upstream benefit. Diagonal: P1 self = −0.2 (no incentive), P5 self = −16.7 (DI unprofitable for the residual claimant).",
    },
    {
      src: images.behavioralGamesAdoption,
      alt: "Empirical — adoption by position",
      caption:
        "The empirical answer to 'who adopts': P5 reaches 62%, P1 stays at 49%; P4 and P5 are +8.1 / +9.9 pp more likely to adopt than P1.",
    },
    {
      src: images.behavioralGamesAdoptionThreshold,
      alt: "Theory — adoption threshold by position",
      caption:
        "Why P5 doesn't adopt despite the highest scarcity: P5's break-even DI value (dark blue, panel b) never crosses the R=14 cost line, while P1–P4 do at moderate water levels. Adoption is not strictly downstream-monotonic — it concentrates in the middle.",
    },
    {
      src: images.behavioralGamesSpilloverCascade,
      alt: "Theory — water cascade from P1 adoption",
      caption:
        "When P1 adopts DI, they reduce own extraction by 0.52 units. The freed water cascades downstream: P2 +0.09, P3 +0.10, P4 +0.12, P5 +0.21 — the residual claimant gains the most, as the model predicts.",
    },
    {
      src: images.behavioralGamesGamePrimitives,
      alt: "Theory — production mechanism",
      caption:
        "The agronomic basis for every spillover (panel b): GI peaks at C=10 with output 40; DI peaks at C=7 with output 45. The shaded region is the water DI saves — three units per adopter that flow downstream. Panel (a) shows the infrastructure → water-supply sigmoid.",
    },
    {
      src: images.behavioralGamesSessionDynamics,
      alt: "Empirical — water and investment dynamics",
      caption:
        "Raw dynamics show a persistent upstream–downstream gradient in water extraction (left), while infrastructure investment stays near-symmetric across positions (right). The asymmetry is in extraction, not in maintenance contributions.",
    },
    {
      src: images.behavioralGamesGini,
      alt: "Empirical — distributional equity",
      caption:
        "Water-consumption Gini falls as DI spreads in Sessions 2–3, while investment Gini remains low throughout. DI adoption mitigates structural inequality along the canal.",
    },
  ];
  return (
    <FigureGroup figures={gallery}>
    <div className="w-full flex flex-col bg-[#fafafa] min-h-screen">
      <ResearchHeader />

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pb-16">
        <div className="w-full flex flex-col lg:block lg:relative lg:h-[570px] overflow-hidden">
          <img
            src={images.behavioralGamesHero}
            alt="Behavioral irrigation game materials with tokens and player decision cards"
            className="w-full h-[300px] md:h-[450px] lg:h-full object-cover object-center lg:absolute lg:inset-0"
          />

          <div className="w-full lg:w-[70%] bg-[#1a1a1b] p-6 md:p-8 lg:p-8 flex flex-col items-start lg:absolute lg:bottom-0 lg:left-0 z-10">
            <div className="flex flex-wrap items-center gap-2 text-small uppercase text-[#a1a1aa] mb-6">
              <span>WORKING PAPER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span>2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>23 PP</span>
            </div>

            <h3 className="text-white mb-6">
              Using Behavioral Games to Understand Water-Saving Technology
              Adoption in Uzbekistan
            </h3>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              A framed field experiment with 190 farmers reveals a structural
              wedge: downstream players face the scarcity that drives adoption,
              but each upstream adopter generates the largest social spillover
              — and the diffusion channel runs only downstream. Private and
              social incentives don't line up, so uniform subsidies can't close
              the gap.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <AnchorButton href="#selected-figures" tone="light">
                View figures
                <ArrRigth className="w-4 h-4 rotate-90" />
              </AnchorButton>
              <AnchorButton
                href={`mailto:${profile.email}?subject=${behavioralGamesDraftSubject}`}
                tone="orange"
              >
                Request draft
                <Mail className="w-4 h-4" />
              </AnchorButton>
            </div>
          </div>
        </div>
      </section>

      <StatsBand
        stats={[
          ["190", "Farmers across four regions"],
          ["38", "Five-player game sessions"],
          ["62%", "Player 5 adoption rate"],
          ["+0.407", "Downstream water per upstream adopter"],
        ]}
      />

      <Section id="abstract" title="Abstract">
        We conduct a framed field experiment with 190 farmers across four
        regions of Uzbekistan, modifying the standard Irrigation Game to include
        an explicit drip irrigation adoption decision. The design surfaces a
        structural asymmetry: downstream players face the scarcity that drives
        adoption, but each upstream adopter generates the largest spillover —
        and the diffusion channel runs only downstream, leaving the social
        returns to upstream adoption uncollected at equilibrium. A
        two-social-cost model formalizes the wedge, and the experimental data
        confirm it: in-game decisions also reflect farmers' real water access,
        irrigation costs, and social networks.
      </Section>

      <Section title="Approach">
        <ListBlock
          items={[
            "Run 38 sessions with exactly five farmers per table, randomly assigning players to positions 1-5 from upstream to downstream.",
            "Extend the standard Irrigation Game so farmers choose infrastructure investment, water extraction, and whether to adopt drip irrigation during gameplay.",
            "Compare game decisions with survey data from the same farmers, including real water access, irrigation costs, social connections, cluster membership, and actual drip adoption.",
          ]}
        />
      </Section>

      <Section title="Main findings">
        <ListBlock
          items={[
            "Adoption is downstream-driven by scarcity: in-game, P5 adopts at 62% versus 49% for P1, and the same pattern appears in real-world data — farmers with more downstream plots and higher irrigation costs adopt more in the game (p < 0.01).",
            "Spillover is upstream-driven: each upstream adopter frees 0.407 downstream water units (p < 0.01); the model predicts P1's adoption alone yields 4.3 lifetime tokens of total downstream gain — the largest single-position externality.",
            "Diffusion runs one way only: upstream adoption raises downstream adoption by 6.4 pp (21.5 pp with player FE), but downstream adoption does not propagate upward. The equilibrium leaves the largest social returns uncollected.",
            "Sessions with higher drip adoption have lower water-consumption Gini coefficients, suggesting that technology adoption can reduce distributional inequality along the canal.",
            "Social structure matters: each additional in-game connection adds 1.5 pp (p < 0.05); agricultural cluster membership adds 40 pp (p < 0.01).",
          ]}
        />
      </Section>

      <section id="selected-figures" className="w-full border-b border-border scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-subtitle text-foreground">Selected figures</h3>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <FigureCard
              className="md:col-span-2"
              frameClassName="min-h-[500px] md:min-h-[330px]"
              title="Web figure — the wedge in three steps"
              desc="A compact website figure showing the asymmetry: who adopts (downstream, scarcity-driven), where the spillover lands (upstream, by externality), and why the diffusion is one-way."
            >
              <BehavioralGamesMechanismFigure />
            </FigureCard>
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[4/3] md:aspect-[5/4]"
              image={images.behavioralGamesSpilloverHeatmap}
              title="Theory — spillover matrix"
              desc="Each cell shows the lifetime payoff change when one player (row) adopts DI. Above the diagonal: upstream → downstream spillovers, all positive, largest at +2.1 for P1 → P5. Below the diagonal: zero everywhere — downstream adoption generates no upstream benefit. The diagonal shows the private payoff to the adopter themselves: P1 self = −0.2 (no incentive — abundant water), P5 self = −16.7 (DI unprofitable for the residual claimant). The asymmetry in one image."
            />
            <FigureCard
              image={images.behavioralGamesAdoption}
              title="Empirical — adoption by position"
              desc="The empirical answer to 'who adopts': P5 reaches 62%, P1 stays at 49%; P4 and P5 are +8.1 / +9.9 pp more likely to adopt than P1."
            />
            <FigureCard
              image={images.behavioralGamesAdoptionThreshold}
              title="Theory — adoption threshold by position"
              desc="Why P5 doesn't adopt despite the highest scarcity: P5's break-even DI value (dark blue, panel b) never crosses the R=14 cost line, while P1–P4 do at moderate water levels. Adoption is not strictly downstream-monotonic — it concentrates in the middle."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/8]"
              image={images.behavioralGamesSpilloverCascade}
              title="Theory — water cascade from P1 adoption"
              desc="When P1 adopts DI, they reduce own extraction by 0.52 units. The freed water cascades downstream: P2 +0.09, P3 +0.10, P4 +0.12, P5 +0.21 — the residual claimant gains the most, as the model predicts."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/8]"
              image={images.behavioralGamesGamePrimitives}
              title="Theory — production mechanism"
              desc="The agronomic basis for every spillover (panel b): GI peaks at C=10 with output 40; DI peaks at C=7 with output 45. The shaded region is the water DI saves — three units per adopter that flow downstream. Panel (a) shows the infrastructure → water-supply sigmoid."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/8]"
              image={images.behavioralGamesSessionDynamics}
              title="Empirical — water and investment dynamics"
              desc="Raw dynamics show a persistent upstream–downstream gradient in water extraction (left), while infrastructure investment stays near-symmetric across positions (right). The asymmetry is in extraction, not in maintenance contributions."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/8]"
              image={images.behavioralGamesGini}
              title="Empirical — distributional equity"
              desc="Water-consumption Gini falls as DI spreads in Sessions 2–3, while investment Gini remains low throughout. DI adoption mitigates structural inequality along the canal — the policy-relevant downstream consequence of the upstream-driven spillover."
            />
          </div>
        </div>
      </section>

      <DarkSection title="Policy implications">
        <StarListBlock
          items={[
            <>
              <span className="text-white font-medium">Subsidize against the individual incentive:</span>{" "}
              private adoption demand peaks downstream, where scarcity binds,
              but social returns peak upstream, where adoption frees the most
              water for everyone below. Uniform subsidies finance the adopters
              who would likely adopt anyway; targeted upstream subsidies pay for
              the spillover the market won't.
            </>,
            <>
              <span className="text-white font-medium">Use the natural diffusion channel:</span>{" "}
              upstream adoption propagates downward through both water spillover
              and peer effects, so a small number of upstream adopters can
              trigger a downstream cascade. The reverse channel is absent, so
              downstream-led adoption stalls before it reaches the high-return
              positions.
            </>,
            <>
              <span className="text-white font-medium">Work through networks and clusters:</span>{" "}
              each in-game connection raises adoption 1.5 pp and cluster
              membership 40 pp; extension should leverage existing institutional
              structures rather than route around them.
            </>,
            <>
              <span className="text-white font-medium">Use games as measurement:</span>{" "}
              farmer-rated similarity to real decisions is 0.81 / 1.0;
              behavioral games can reveal where adoption incentives come from
              before scaling a subsidy program.
            </>,
          ]}
        />
      </DarkSection>

      <ContactSection />
    </div>
    </FigureGroup>
  );
}

function GenericResearchDetail({
  publication,
}: {
  publication: (typeof publications)[number];
}) {
  const coverImage = publication.figures?.[0]?.src || images.researchImage;
  const gallery: LightboxImage[] = (publication.figures ?? []).map((f, i) => ({
    src: f.src,
    alt: f.caption || `Figure ${i + 1}`,
    caption: f.caption || publication.title,
  }));

  return (
    <FigureGroup figures={gallery}>
    <div className="w-full flex flex-col bg-[#fafafa] min-h-screen">
      <ResearchHeader />

      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 pb-16">
        <div className="w-full flex flex-col lg:block lg:relative lg:h-[520px] overflow-hidden">
          <img
            src={coverImage}
            alt={publication.title}
            className="w-full h-[300px] md:h-[430px] lg:h-full object-cover lg:absolute lg:inset-0"
          />

          <div className="w-full lg:w-[70%] bg-[#1a1a1b] p-6 md:p-8 lg:p-8 flex flex-col items-start lg:absolute lg:bottom-0 lg:left-0 z-10">
            <div className="flex flex-wrap items-center gap-2 text-small uppercase text-[#a1a1aa] mb-6">
              <span>{publication.tag}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7b1b]" />
              <span>{publication.year}</span>
              {publication.pages && (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  <span>{publication.pages} PP</span>
                </>
              )}
            </div>

            <h3 className="text-white mb-6">{publication.title}</h3>
            {publication.abstract && (
              <p className="text-body text-gray-300 mb-10 max-w-3xl">
                {publication.abstract}
              </p>
            )}

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <AnchorButton href="#abstract" tone="light">
                Read preview
                <ArrRigth className="w-4 h-4 rotate-90" />
              </AnchorButton>
              {publication.draftOnRequest ? (
                <AnchorButton
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    `Draft request: ${publication.title}`
                  )}`}
                  tone="orange"
                >
                  Request draft
                  <Mail className="w-4 h-4" />
                </AnchorButton>
              ) : (
                publication.url && (
                  <AnchorButton href={publication.url} tone="orange" external>
                    Open paper
                    <ArrRigth className="w-4 h-4" />
                  </AnchorButton>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {publication.abstract && (
        <Section id="abstract" title="Abstract">
          {publication.abstract}
        </Section>
      )}

      {publication.keyFindings && publication.keyFindings.length > 0 && (
        <Section title="Key findings">
          <ListBlock items={publication.keyFindings} />
        </Section>
      )}

      {publication.figures && publication.figures.length > 0 && (
        <section className="w-full border-b border-border">
          <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-subtitle text-foreground">Selected figures</h3>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {publication.figures.map((figure, index) => (
                <FigureCard
                  key={`${publication.slug}-${index}`}
                  image={figure.src}
                  title={figure.caption || `Figure ${index + 1}`}
                  desc={figure.caption || publication.title}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </div>
    </FigureGroup>
  );
}

function ResearchHeader() {
  return (
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
  );
}

function StatsBand({ stats }: { stats: [string, string][] }) {
  return (
    <section className="w-full border-t border-b border-border">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map(([value, label]) => (
            <Stat key={label} value={value} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-foreground mb-2">{value}</h2>
      <div className="text-small uppercase text-muted-foreground">{label}</div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="w-full border-b border-border scroll-mt-24">
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

function DarkSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
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
        <div key={item} className="flex items-start gap-5">
          <span className="text-body font-medium text-[#ff7b1b] mt-1 shrink-0">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className="text-article text-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

function StarListBlock({ items }: { items: ReactNode[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <span className="text-[#ff7b1b] mt-1 shrink-0">*</span>
          <div className="text-article">{item}</div>
        </div>
      ))}
    </div>
  );
}

function FigureCard({
  image,
  title,
  desc,
  children,
  className = "",
  frameClassName = "aspect-[16/10]",
}: {
  image?: string;
  title: string;
  desc: string;
  children?: ReactNode;
  className?: string;
  frameClassName?: string;
}) {
  const group = useFigureGroup();
  const [zoomed, setZoomed] = useState(false);
  const canZoom = !children && !!image;

  const handleClick = canZoom && image
    ? () => {
        if (group && group.openBySrc(image)) {
          return;
        }
        setZoomed(true);
      }
    : undefined;

  return (
    <div className={`flex flex-col group ${className}`}>
      <div className={`w-full bg-white border border-border mb-5 overflow-hidden ${frameClassName}`}>
        {children || (
          <img
            src={image}
            alt={title}
            onClick={handleClick}
            className={`w-full h-full object-contain p-3 ${canZoom ? "cursor-zoom-in" : ""}`}
          />
        )}
      </div>
      <h4 className="text-body text-foreground font-semibold mb-2">{title}</h4>
      <p className="text-small text-muted-foreground leading-relaxed">{desc}</p>
      {zoomed && image && (
        <Lightbox
          images={[{ src: image, alt: title, caption: desc }]}
          onClose={() => setZoomed(false)}
        />
      )}
    </div>
  );
}

function UpstreamMechanismFigure() {
  const steps = [
    {
      label: "Cross-section",
      title: "Position penalty exists",
      body: "Tail-end plots have lower NDMI, GCVI, and ET after controls for seniority, soil, groundwater access, and 42 covariates.",
      metric: "−0.039 GCVI",
      tone: "border-[#1a1a1b] bg-white",
    },
    {
      label: "Donut identification",
      title: "Effect strengthens with distance",
      body: "Excluding near-distance variation isolates far-upstream competition (>1–10 km) from spatially correlated local shocks.",
      metric: "−0.061 GCVI at >10 km",
      tone: "border-[#ff7b1b] bg-[#fff7ed]",
    },
    {
      label: "Directional placebo",
      title: "Upstream drives, downstream doesn't",
      body: "In the same regression, the upstream coefficient survives while downstream fades toward zero.",
      metric: "4× upstream / downstream",
      tone: "border-[#0f766e] bg-[#f0fdfa]",
    },
  ];

  return (
    <div className="w-full h-full bg-white p-4 md:p-6 flex flex-col justify-between gap-5">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_28px_1fr_28px_1fr] gap-3 md:gap-4 items-stretch">
        {steps.map((step, index) => (
          <Fragment key={step.label}>
            <div
              className={`border-l-4 ${step.tone} p-4 min-h-[150px] flex flex-col justify-between`}
            >
              <div>
                <div className="text-small uppercase text-muted-foreground mb-2">
                  {step.label}
                </div>
                <div className="text-body text-foreground font-semibold mb-2">
                  {step.title}
                </div>
                <p className="text-small text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
              <div className="text-subtitle text-foreground mt-4">{step.metric}</div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center text-[#ff7b1b]">
                <ArrRigth className="w-5 h-5" />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 border-t border-border pt-4">
        <MiniMetric value="2.0×" label="NDMI amplification, full → >10 km" />
        <MiniMetric value="2.2×" label="GCVI amplification" />
        <MiniMetric value="2.5×" label="ET amplification" />
        <MiniMetric value="+0.091" label="GCVI volumetric-pricing offset" />
      </div>
    </div>
  );
}

function BehavioralGamesMechanismFigure() {
  const steps = [
    {
      label: "Who adopts?",
      title: "Downstream, driven by scarcity",
      body: "Private water deficit drives the decision: P5 adopts at 62% vs. 49% for P1; real-world downstream plots and irrigation costs predict in-game adoption.",
      metric: "62% > 49%",
      tone: "border-[#0f766e] bg-[#f0fdfa]",
    },
    {
      label: "Where's the spillover?",
      title: "Upstream, by water externality",
      body: "Each upstream adopter frees 0.407 downstream water units. The model predicts P1's adoption alone yields 4.3 lifetime tokens of total downstream gain.",
      metric: "+0.407 / adopter",
      tone: "border-[#ff7b1b] bg-[#fff7ed]",
    },
    {
      label: "The wedge",
      title: "Diffusion runs only downstream",
      body: "Upstream adoption raises downstream adoption (+6.4 pp, +21.5 pp w/ player FE); the reverse channel is absent. Private and social incentives don't align — the equilibrium leaves the largest social returns uncollected.",
      metric: "One-way cascade",
      tone: "border-[#1a1a1b] bg-white",
    },
  ];

  return (
    <div className="w-full h-full bg-white p-4 md:p-6 flex flex-col justify-between gap-5">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_28px_1fr_28px_1fr] gap-3 md:gap-4 items-stretch">
        {steps.map((step, index) => (
          <Fragment key={step.label}>
            <div
              className={`border-l-4 ${step.tone} p-4 min-h-[150px] flex flex-col justify-between`}
            >
              <div>
                <div className="text-small uppercase text-muted-foreground mb-2">
                  {step.label}
                </div>
                <div className="text-body text-foreground font-semibold mb-2">
                  {step.title}
                </div>
                <p className="text-small text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
              <div className="text-subtitle text-foreground mt-4">{step.metric}</div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center text-[#ff7b1b]">
                <ArrRigth className="w-5 h-5" />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 border-t border-border pt-4">
        <MiniMetric value="P5: 62%" label="downstream adoption" />
        <MiniMetric value="P1: 49%" label="upstream adoption" />
        <MiniMetric value="4.3 tokens" label="P1 modeled downstream gain" />
        <MiniMetric value="0.81 / 1.0" label="farmer similarity rating" />
      </div>
    </div>
  );
}

function WaterGuidanceFigure() {
  const steps = [
    {
      label: "Phase I — researcher-supervised",
      title: "Production frontier under scheduling",
      body: "FAO-56 schedule applied on paired drip–furrow fields. Scheduled drip yields more and uses less water than furrow — the performance ceiling for correctly scheduled drip.",
      metric: "+39.9% yield / −24.3% water",
      tone: "border-[#ff7b1b] bg-[#fff7ed]",
    },
    {
      label: "Phase II 2022 — no guidance",
      title: "Drip alone under-irrigates",
      body: "Farmer adopters managed drip by intuition. Water savings are far larger than Phase I (−47% vs −24%), but yield growth lags — only +38% over furrow, 19% below the Phase I frontier. The intuition 'less water = better' over-saves and leaves yield on the table.",
      metric: "+38% yield / −47% water",
      tone: "border-[#0f766e] bg-[#f0fdfa]",
    },
    {
      label: "Phase II 2023 — tables added",
      title: "Yield jumps to the frontier",
      body: "Pre-calculated per-event volumes raise drip water by 31.6%. Water savings ease from −47% to −27% — and yield jumps from +38% to +60% over furrow, converging on the Phase I frontier. The fix is more water, not less.",
      metric: "+60.3% yield / −27% water",
      tone: "border-[#1a1a1b] bg-white",
    },
  ];

  return (
    <div className="w-full h-full bg-white p-4 md:p-6 flex flex-col justify-between gap-5">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_28px_1fr_28px_1fr] gap-3 md:gap-4 items-stretch">
        {steps.map((step, index) => (
          <Fragment key={step.label}>
            <div
              className={`border-l-4 ${step.tone} p-4 min-h-[150px] flex flex-col justify-between`}
            >
              <div>
                <div className="text-small uppercase text-muted-foreground mb-2">
                  {step.label}
                </div>
                <div className="text-body text-foreground font-semibold mb-2">
                  {step.title}
                </div>
                <p className="text-small text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
              <div className="text-subtitle text-foreground mt-4">{step.metric}</div>
            </div>
            {index < steps.length - 1 && (
              <div
                className="hidden md:flex items-center justify-center text-[#ff7b1b]"
              >
                <ArrRigth className="w-5 h-5" />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 border-t border-border pt-4">
        <MiniMetric value="+22%" label="farmer drip yield, 2022 → 2023 (tables)" />
        <MiniMetric value="+84.9%" label="water productivity gain (scheduled)" />
        <MiniMetric value="−24.3%" label="water vs furrow (scheduled)" />
        <MiniMetric value="9 countries" label="prime hub-and-spoke candidates" />
      </div>
    </div>
  );
}

function MiniMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <div className="text-subtitle text-foreground">{value}</div>
      <div className="text-small text-muted-foreground">{label}</div>
    </div>
  );
}

function AnchorButton({
  href,
  tone,
  external,
  children,
}: {
  href: string;
  tone: "light" | "orange";
  external?: boolean;
  children: ReactNode;
}) {
  const colors =
    tone === "orange"
      ? "bg-[#ff7b1b] text-white hover:bg-orange-600"
      : "bg-[#e5e5e5] text-[#1a1a1b] hover:bg-white";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-6 py-4 text-small uppercase transition-colors ${colors}`}
    >
      {children}
    </a>
  );
}

function ContactSection({
  primaryHref,
  primaryLabel = "Get in touch",
}: {
  primaryHref?: string;
  primaryLabel?: string;
}) {
  const external = Boolean(primaryHref);

  return (
    <section className="w-full bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <h2 className="text-foreground mb-10 max-w-3xl">
          Questions, data requests, or invitations are always welcome.
        </h2>

        <div className="flex flex-col items-center w-full gap-8">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full">
            <a
              href={primaryHref || `mailto:${profile.email}`}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="w-full md:w-auto bg-[#ff7b1b] text-white px-8 py-4 text-body uppercase transition-colors hover:bg-orange-600 text-center"
            >
              {primaryLabel}
            </a>
            <a
              href={profile.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#e5e5e5] text-[#1a1a1b] px-8 py-4 text-body uppercase transition-colors hover:bg-gray-300 text-center"
            >
              Google Scholar
            </a>
          </div>

          <Link
            to="/research"
            className="w-full md:w-auto inline-flex items-center justify-center gap-4 cursor-pointer group/btn"
          >
            <span className="text-small uppercase text-foreground group-hover/btn:text-[#ff7b1b] transition-colors">
              Back to research
            </span>
            <div className="w-12 h-12 bg-[#e5e5e5] text-[#1a1a1b] flex items-center justify-center group-hover/btn:bg-foreground group-hover/btn:text-background transition-colors shrink-0">
              <ArrRigth className="w-5 h-5 rotate-180" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
