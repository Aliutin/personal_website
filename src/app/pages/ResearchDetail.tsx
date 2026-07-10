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
  "Draft request: First in Time, Last in Line?"
);

const behavioralGamesDraftSubject = encodeURIComponent(
  "Draft request: Using Behavioral Games to Understand Water-Saving Technology Adoption in Uzbekistan"
);

const waterConservationDraftSubject = encodeURIComponent(
  "Draft request: Water Conservation Through Simplified Drip Irrigation Scheduling for Cotton Cultivation in Uzbekistan"
);

const upstreamSelectedFigures = [
  {
    image: images.jmpStudyAreaMap,
    title: "Arizona study area and canal systems",
    desc: "Agricultural plots cluster along Arizona's Colorado River, Salt–Gila, and upper Gila canal systems.",
  },
  {
    image: images.jmpWaterGraphPosition,
    title: "Water-graph construction",
    desc: "Four stages connect agricultural plots to directed canals and assign head-to-tail network positions.",
  },
  {
    image: images.jmpDonutIdentification,
    title: "Distant upstream activity design",
    desc: "The design excludes nearby upstream activity from treatment, controls for nearby fallowing, and retains distant canal-connected activity.",
  },
  {
    image: images.jmpDonutCoefficients,
    title: "Distant upstream activity coefficients",
    desc: "The activity × drought interaction becomes more negative at wider spatial-exclusion cutoffs, especially for GCVI.",
  },
  {
    image: images.jmpUpstreamDownstreamHorserace,
    title: "Upstream vs downstream activity placebo",
    desc: "The upstream activity gradient persists while the downstream placebo attenuates, most clearly for GCVI.",
  },
  {
    image: images.jmpProductionFunction,
    title: "Calibrated water-reallocation example",
    desc: "An illustrative donor and recipient pair on an external alfalfa water-production curve; this is a scale exercise, not an estimated welfare effect.",
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
              <span>64 PP</span>
            </div>

            <h1 className="text-white mb-6 !text-[length:var(--h3-size)] !leading-[var(--h3-lh)]">
              First in Time, Last in Line? Water Rights, Canal Position, and
              Drought Inequality in Arizona
            </h1>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              Do formal water rights eliminate within-canal inequality when
              water physically moves from head to tail? A statewide water-graph
              distinguishes static delivery position from time-varying distant
              upstream irrigation activity during drought.
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
          ["2016–2023", "Plot-year panel"],
          ["−0.035", "GCVI activity × drought at >10 km"],
          ["$6.0M", "Annual gross revenue-equivalent exposure"],
        ]}
      />

      <Section id="abstract" title="Abstract">
        Do formal water rights eliminate within-canal inequality when water
        physically moves from head to tail? I build a water-graph linking 54,946
        agricultural plots across Arizona&apos;s canal networks. The cross-section
        measures whether delivery position predicts crop outcomes; the panel
        uses year-to-year changes in distant upstream irrigation activity during
        the 2016–2023 Colorado River drought. Nearby fallowing controls absorb
        spatially correlated local shocks, while activity among canal-connected
        upstream plots beyond exclusion cutoffs provides the identifying
        variation. The results show a pattern-supported drought gradient
        concentrated in surface-water-dominant and junior-rights districts.
      </Section>

      <Section title="Approach">
        <ListBlock
          items={[
            "Construct a directed water-graph from canal lines, flow-direction information, elevation, and USDA Crop Sequence Boundaries, then assign each plot a head-to-tail network position.",
            "Use the cross-section to test whether plots farther from the headgate have worse satellite-derived moisture and vegetation outcomes after rich controls.",
            "In the panel, exclude nearby upstream activity from treatment, control for rotation and non-rotation fallowing within the same geographic radius, and use activity among canal-connected upstream plots beyond cutoffs of 1, 2, 3, 5, and 10 km.",
          ]}
        />
      </Section>

      <Section title="Main findings">
        <ListBlock
          items={[
            "Downstream plots show significantly lower canopy moisture (NDMI) and chlorophyll vigor (GCVI) after controls; the evapotranspiration level estimate is smaller and statistically insignificant. The full head-to-tail movement predicts a GCVI decline equal to 5.1% of a standard deviation.",
            "The distant-upstream-activity × drought interaction strengthens as nearby variation is excluded. At the >10 km cutoff, the estimates are −0.008 for NDMI, −0.035 for GCVI, and −0.023 for ET; the evidence rests on the pattern across cutoffs and outcomes rather than any single coefficient.",
            "A downstream-activity placebo attenuates once distant upstream activity is included, supporting a directional water-competition interpretation most clearly for vegetation health.",
            "The gradient is concentrated in surface-water-dominant districts and is near zero in groundwater-dominant and mixed districts. Junior-rights districts face substantially steeper drought amplification than senior-rights districts.",
            "Calibrated magnitudes imply roughly $6.0 million per year of gross revenue-equivalent exposure, concentrated almost entirely in junior surface-water-dependent districts. These are scale exercises, not estimates of profit, causal welfare, or an optimal allocation.",
          ]}
        />
      </Section>

      <section id="selected-figures" className="w-full border-b border-border scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-subtitle text-foreground">Selected figures</h2>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <FigureCard
              className="md:col-span-2"
              frameClassName="min-h-[500px] md:min-h-[330px]"
              title="Web figure — evidence in three steps"
              desc="A compact summary of the static head-to-tail gradient, the distant-upstream-activity design, and the downstream activity placebo."
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
              volumetric pricing is associated with a weaker drought-state
              upstream-activity gradient, especially in junior-rights systems.
              Because districts choose their pricing institutions, this is a
              candidate mechanism rather than an identified policy effect.
            </>,
            <>
              <span className="text-white font-medium">Buffer scarcity with groundwater:</span>{" "}
              greater groundwater dependence is associated with a substantially
              weaker drought-state gradient, consistent with pumping providing
              an alternative supply less tied to canal deliveries.
            </>,
            <>
              <span className="text-white font-medium">Target the tail:</span>{" "}
              monitoring and shortage planning should pay particular attention
              to downstream reaches in junior, surface-water-dependent systems,
              where the estimated drought-state exposure is concentrated.
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
        "Map overlay — districts in the arid belt combine low evaporation variability with high agricultural water stress, identifying settings where targeted trials may be useful.",
    },
    {
      src: images.waterStressStabilityScatter,
      alt: "Figure 5 — Analytical view: water stress vs evaporation stability",
      caption:
        "Nine critically water-stressed countries sit on the low-evaporation-variability side of the plot and are candidates for targeted trials; local agronomic validation is required before applying the scheduling approach.",
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
              <span>REVISION RESUBMITTED</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1b] ring-2 ring-white/40" />
              <span>2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>26 PP</span>
            </div>

            <h1 className="text-white mb-6 !text-[length:var(--h3-size)] !leading-[var(--h3-lh)]">
              Water Conservation Through Simplified Drip Irrigation Scheduling
              for Cotton Cultivation in Uzbekistan
            </h1>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              Drip without scheduling under-irrigates: farmers using only
              intuition apply 47% less water than furrow but produce yields
              well below the experimental frontier. The fix isn't more
              conservation — pre-calculated tables raise observed drip water
              from 3,340 to 4,160 m³/ha (24.6%). Guided drip then produces
              60.3% more cotton with 27.4% less water than furrow.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <AnchorButton href="#selected-figures" tone="light">
                View figures
                <ArrRigth className="w-4 h-4 rotate-90" />
              </AnchorButton>
              <AnchorButton
                href={`mailto:${profile.email}?subject=${waterConservationDraftSubject}`}
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
          ["+60.3%", "Guided drip yield vs furrow"],
          ["−27.4%", "Guided drip water use vs furrow"],
          ["+24.6%", "Observed drip water increase with tables"],
          ["9", "Countries identified for targeted local trials"],
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
            "Validate an FAO-56 ET₀ × Kc schedule on researcher-supervised experimental plots, comparing scheduled drip plots with farmer-managed furrow controls.",
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
            "The fix is more water, counter-intuitively: pre-calculated tables raised observed drip water application by 24.6%, from 3,340 to 4,160 m³/ha. Guided drip still used 27.4% less water than furrow while producing 60.3% higher yield.",
            "The difference-in-differences estimates reveal a guidance gap: after receiving scheduling tables, existing drip adopters increased water application and moved closer to the researcher-supervised yield frontier.",
            "Reference evapotranspiration is temporally stable in arid regions (Jizzakh CV = 21.1%). Nine critically water-stressed countries — Kuwait, Libya, Egypt, UAE, Qatar, Turkmenistan, Syria, Uzbekistan, and Saudi Arabia — are candidates for targeted trials, subject to local agronomic validation.",
          ]}
        />
      </Section>

      <section id="selected-figures" className="w-full border-b border-border scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-subtitle text-foreground">Selected figures</h2>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <FigureCard
              className="md:col-span-2"
              frameClassName="min-h-[450px] md:min-h-[330px]"
              title="Web figure — the under-irrigation paradox in three steps"
              desc="Phase I sets the frontier; drip alone (Phase II 2022) under-irrigates; tables (Phase II 2023) raise observed drip water by 24.6% while keeping it 27.4% below furrow."
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
              desc="Map overlay — districts in the arid belt combine low evaporation variability with high agricultural water stress, identifying settings where targeted trials may be useful."
              frameClassName="aspect-[16/7]"
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/9]"
              image={images.waterStressStabilityScatter}
              title="Figure 5 — Analytical view: water stress vs evaporation stability"
              desc="Each country is plotted by agricultural water stress (y, log) against evaporation CV (x, log). Nine critically water-stressed countries sit on the low-CV side and are candidates for targeted trials; local agronomic validation is required before applying the scheduling approach."
            />
          </div>
        </div>
      </section>

      <DarkSection title="Policy implications">
        <StarListBlock
          items={[
            <>
              <span className="text-white font-medium">Pair hardware with scheduling guidance:</span>{" "}
              the field evidence shows that drip equipment alone can leave
              farmers under-irrigating. Pre-calculated irrigation tables offer
              a lightweight way to improve water application and yields.
            </>,
            <>
              <span className="text-white font-medium">Test the approach where ET is stable:</span>{" "}
              Kuwait, Libya, Egypt, the UAE, Qatar, Turkmenistan, Syria,
              Uzbekistan, and Saudi Arabia combine critical water stress with
              stable July evapotranspiration. They are candidates for targeted
              trials, but implementation requires local agronomic validation.
            </>,
            <>
              <span className="text-white font-medium">Keep extension lightweight:</span>{" "}
              extension officers can distribute tables and calibrate operating
              hours from local pressure and emitter specifications, without
              asking farmers to perform FAO-56 calculations or install on-farm sensors.
            </>,
          ]}
        />
      </DarkSection>

      <ContactSection
        primaryHref={`mailto:${profile.email}?subject=${waterConservationDraftSubject}`}
        primaryLabel="Request draft"
      />
    </div>
    </FigureGroup>
  );
}

function BehavioralGamesDetail() {
  const gallery: LightboxImage[] = [
    {
      src: images.behavioralGamesSpilloverHeatmap,
      alt: "Calibrated-model spillover matrix by adopter and affected player",
      caption:
        "The calibrated model separates private value from cross-player benefits. Upstream adoption raises downstream players' lifetime payoffs, while downstream adoption creates no upstream water benefit. These are modeled quantities, not experimental treatment effects.",
    },
    {
      src: images.behavioralGamesAdoption,
      alt: "Raw drip-irrigation adoption rates by canal position and session",
      caption:
        "Pooled raw adoption is 62% for Player 5 and 49% for Player 1. In the preferred first-adoption-hazard specification, Player 5 is 8.9 percentage points above Player 1 (wild-bootstrap p = 0.009; randomization-inference p = 0.001).",
    },
    {
      src: images.behavioralGamesAdoptionThreshold,
      alt: "Calibrated-model drip-irrigation profitability by water supply and position",
      caption:
        "The calibrated model predicts a non-monotonic adoption response to water supply. It does not predict adoption by Player 5 at the calibrated technology cost, making the tail player's high experimental adoption a substantive tension rather than a model confirmation.",
    },
    {
      src: images.behavioralGamesSpilloverCascade,
      alt: "Calibrated-model extraction changes when Player 1 adopts drip irrigation",
      caption:
        "In the calibrated model, Player 1 adoption reduces own extraction by 0.52 units and raises water consumption at each downstream position. The experimental counterpart is a conditional association: 0.407 more downstream water units per upstream adopter.",
    },
    {
      src: images.behavioralGamesGamePrimitives,
      alt: "Game water-supply function and gravity-versus-drip production curves",
      caption:
        "The game links shared infrastructure to water supply and gives drip irrigation a lower water optimum and higher peak output than gravity irrigation. Players choose infrastructure, extraction, and adoption sequentially.",
    },
    {
      src: images.behavioralGamesSessionDynamics,
      alt: "Water consumption and infrastructure investment by player position and round",
      caption:
        "Raw dynamics show a persistent upstream–downstream gradient in water extraction (left), while infrastructure investment stays near-symmetric across positions (right). The asymmetry is in extraction, not in maintenance contributions.",
    },
    {
      src: images.behavioralGamesGini,
      alt: "Descriptive Gini indexes for water consumption and investment by session and round",
      caption:
        "These raw paths describe how water-consumption and investment inequality evolve across sessions. The paper's Gini regressions use conventional standard errors and are treated as descriptive, not causal evidence that adoption reduces inequality.",
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
              <span>51 PP</span>
            </div>

            <h1 className="text-white mb-6 !text-[length:var(--h3-size)] !leading-[var(--h3-lh)]">
              Using Behavioral Games to Understand Water-Saving Technology
              Adoption in Uzbekistan
            </h1>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              A framed field experiment with 190 farmers shows that canal
              position shapes both technology uptake and who benefits. Tail
              players adopt sooner, while upstream adoption is associated with
              more water consumed downstream. The physical water spillover is
              measurable; peer-triggered adoption is not.
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
          ["15 of 16", "Surveyed districts represented"],
          ["38", "Five-player games"],
          ["+0.407", "Downstream water per upstream adopter"],
        ]}
      />

      <Section id="abstract" title="Abstract">
        We conduct a framed field experiment with 190 farmers across four
        regions of Uzbekistan, modifying the standard Irrigation Game to include
        an explicit drip irrigation adoption decision. Random assignment to
        canal position shows that new adoption concentrates at the
        scarcity-stressed tail: Player 5's first-adoption hazard is 8.9
        percentage points above Player 1's. Upstream adoption is associated
        with 0.407 units more water consumed by downstream players, but there is
        no robust evidence that it triggers others to adopt. Linked survey data
        show that in-game behavior also reflects farmers' real water-access
        positions, agricultural-cluster ties, and willingness to pay.
      </Section>

      <Section title="Approach">
        <ListBlock
          items={[
            "Run 38 five-player games across four regions and 15 of the 16 surveyed districts. Each game has three sessions, with canal positions randomly reassigned between sessions.",
            "Extend the standard Irrigation Game so farmers choose infrastructure investment, water extraction, and whether to adopt drip irrigation during gameplay.",
            "Use game-clustered inference with wild-bootstrap p-values; the randomized position result is also tested with within-game-session randomization inference.",
            "Link 133 participants to survey measures of real water access, agricultural-cluster ties, willingness to pay, social connections, and actual drip adoption.",
          ]}
        />
      </Section>

      <Section title="Main findings">
        <ListBlock
          items={[
            "Player 5's first-adoption hazard is 8.9 percentage points above Player 1's (wild-bootstrap p = 0.009; randomization-inference p = 0.001), even though the calibrated model predicts that the tail player should not adopt.",
            "Each additional upstream adopter is associated with 0.407 units more water consumed downstream (wild-bootstrap p = 0.018) and a 1.9 percentage-point larger downstream share of group water (p < 0.001). Adoption itself is not randomized, so these are conditional associations.",
            "There is no robust evidence of peer-triggered adoption: the contemporaneous first-adoption-hazard estimate is 0.005 (p = 0.855), and lagged estimates are not positive. The measurable spillover operates through water quantities, not observable imitation.",
            "The conservation association is concentrated upstream: adopters in positions 1–2 consume 0.886 fewer units than non-adopters (p < 0.001), while the downstream estimate is not statistically different from zero.",
            "Agricultural-cluster membership is associated with a 31 percentage-point higher probability of ever adopting in the game (p = 0.042); informal social connections do not robustly predict adoption once inference respects the 38 game clusters.",
          ]}
        />
      </Section>

      <section id="selected-figures" className="w-full border-b border-border scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-subtitle text-foreground">Selected figures</h2>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <FigureCard
              className="md:col-span-2"
              frameClassName="min-h-[500px] md:min-h-[330px]"
              title="Web figure — three results"
              desc="Randomized canal position shifts first-adoption timing; upstream adoption is associated with a physical water spillover; peer-triggered adoption is not supported by the preferred specification."
            >
              <BehavioralGamesMechanismFigure />
            </FigureCard>
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[4/3] md:aspect-[5/4]"
              image={images.behavioralGamesSpilloverHeatmap}
              title="Calibrated model — private value and cross-player benefits"
              desc="The matrix separates an adopter's private value from benefits to other players. Upstream adoption raises downstream players' lifetime payoffs, while downstream adoption creates no upstream water benefit. These are modeled quantities, not experimental treatment effects."
            />
            <FigureCard
              image={images.behavioralGamesAdoption}
              title="Empirical — adoption by position"
              desc="Pooled raw adoption is 62% for Player 5 and 49% for Player 1. In the preferred first-adoption-hazard specification, Player 5 is 8.9 percentage points above Player 1 (wild-bootstrap p = 0.009; randomization-inference p = 0.001)."
            />
            <FigureCard
              image={images.behavioralGamesAdoptionThreshold}
              title="Calibrated model — adoption thresholds"
              desc="Modeled adoption responds non-monotonically to water supply. At the calibrated technology cost, the model does not predict adoption by Player 5; the tail player's high experimental adoption is therefore a substantive tension rather than a model confirmation."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/8]"
              image={images.behavioralGamesSpilloverCascade}
              title="Calibrated model — extraction spillover from P1 adoption"
              desc="In the model, Player 1 adoption reduces own extraction by 0.52 units and raises consumption at every downstream position. The experimental counterpart is a conditional association: 0.407 more downstream water units per upstream adopter."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/8]"
              image={images.behavioralGamesGamePrimitives}
              title="Game mechanics — shared supply and technology"
              desc="The game links shared infrastructure to water supply and gives drip irrigation a lower water optimum and higher peak output than gravity irrigation. Players choose infrastructure, extraction, and adoption sequentially."
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
              title="Descriptive — distributional dynamics"
              desc="The raw paths show how water-consumption and investment inequality evolve across sessions. The paper's Gini regressions use conventional standard errors and are treated as descriptive, not causal evidence that adoption reduces inequality."
            />
          </div>
        </div>
      </section>

      <DarkSection title="Policy implications">
        <StarListBlock
          items={[
            <>
              <span className="text-white font-medium">Test position-based targeting:</span>{" "}
              in the calibrated model, a 0.21-token subsidy to Player 1 changes
              the equilibrium and raises group welfare by 4.4 tokens, while
              fully subsidizing Players 4–5 reaches the same 80% adoption rate
              with a 9.7-token welfare loss. These are illustrative model-based
              counterfactuals, not estimates from randomized subsidy variation.
            </>,
            <>
              <span className="text-white font-medium">Separate water effects from peer effects:</span>{" "}
              upstream adoption is associated with more water consumed
              downstream, but it does not robustly predict new adoption by
              downstream players. Program design should measure water outcomes
              directly rather than assume that visible adoption will induce peers.
            </>,
            <>
              <span className="text-white font-medium">Evaluate agricultural clusters as an implementation channel:</span>{" "}
              cluster membership is associated with a 31 percentage-point
              higher probability of ever adopting in the game, while informal
              social connections do not robustly predict adoption. The cluster
              result is observational and should be tested before scaling.
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

            <h1 className="text-white mb-6 !text-[length:var(--h3-size)] !leading-[var(--h3-lh)]">{publication.title}</h1>
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
              <h2 className="text-subtitle text-foreground">Selected figures</h2>
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
          aria-label="Back to research"
          className="w-12 h-12 bg-[#1a1a1b] text-white flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0"
        >
          <ArrRigth className="w-5 h-5 rotate-180" />
        </Link>
        <div className="font-['Ovo',serif] text-[length:var(--h3-size)] leading-[var(--h3-lh)] tracking-[var(--h3-ls)] text-foreground">Research</div>
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
      <div className="font-['Ovo',serif] text-[length:var(--h2-size)] leading-[var(--h2-lh)] text-foreground mb-2">{value}</div>
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
          <h2 className="text-subtitle text-foreground">{title}</h2>
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
          <h2 className="text-subtitle text-white">{title}</h2>
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
          <button
            type="button"
            aria-label={`Enlarge figure: ${title}`}
            onClick={handleClick}
            className="w-full h-full bg-transparent p-0 cursor-zoom-in"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain p-3"
            />
          </button>
        )}
      </div>
      <h3 className="text-body text-foreground font-semibold mb-2">{title}</h3>
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
      title: "A static head-to-tail gradient",
      body: "Tail-end plots have lower NDMI and GCVI after controls. The ET estimate is small and statistically indistinguishable from zero.",
      metric: "5.1% of a GCVI SD",
      tone: "border-[#1a1a1b] bg-white",
    },
    {
      label: "Donut identification",
      title: "Distant activity matters in drought",
      body: "Nearby fallow controls absorb local shocks while successively excluding upstream activity within 1, 2, 3, 5, and 10 km.",
      metric: "−0.035 GCVI at >10 km",
      tone: "border-[#ff7b1b] bg-[#fff7ed]",
    },
    {
      label: "Directional placebo",
      title: "Directionality is clearest for GCVI",
      body: "In the same >10 km regression, distant upstream activity predicts lower GCVI during drought; downstream activity is near zero.",
      metric: "−0.030 vs. +0.002",
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
        <MiniMetric value="2.0×" label="NDMI coefficient magnitude, full → >10 km" />
        <MiniMetric value="2.3×" label="GCVI coefficient magnitude" />
        <MiniMetric value="2.1×" label="ET coefficient magnitude" />
        <MiniMetric value="$6.0M/yr" label="Gross revenue-equivalent exposure" />
      </div>
    </div>
  );
}

function BehavioralGamesMechanismFigure() {
  const steps = [
    {
      label: "Who adopts?",
      title: "Tail players adopt sooner",
      body: "Random assignment to canal position shows that Player 5's first-adoption hazard is 8.9 percentage points above Player 1's. The result survives game-clustered and randomization inference.",
      metric: "+8.9 pp",
      tone: "border-[#0f766e] bg-[#f0fdfa]",
    },
    {
      label: "Where's the spillover?",
      title: "Through physical water quantities",
      body: "Each additional upstream adopter is associated with 0.407 units more water consumed by downstream players and a 1.9 percentage-point larger downstream share of group water.",
      metric: "+0.407 / adopter",
      tone: "border-[#ff7b1b] bg-[#fff7ed]",
    },
    {
      label: "Do peers follow?",
      title: "No robust peer-triggered adoption",
      body: "The first-adoption-hazard estimate for contemporaneous upstream adoption is 0.005 (p = 0.855), and lagged estimates are not positive. The water spillover does not imply imitation.",
      metric: "0.005 (p = 0.855)",
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
        <MiniMetric value="190" label="farmers in four regions" />
        <MiniMetric value="15 of 16" label="surveyed districts represented" />
        <MiniMetric value="38" label="five-player games" />
        <MiniMetric value="133" label="linked survey records" />
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
      body: "Pre-calculated per-event volumes raise observed drip water from 3,340 to 4,160 m³/ha, a 24.6% increase. Guided drip still uses 27.4% less water than furrow while producing 60.3% higher yield and converging on the Phase I frontier.",
      metric: "+60.3% yield / −27.4% water",
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
        <MiniMetric value="9 countries" label="candidates for locally validated trials" />
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
  const resolvedPrimaryHref = primaryHref || `mailto:${profile.email}`;
  const external = /^https?:\/\//i.test(resolvedPrimaryHref);

  return (
    <section className="w-full bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <h2 className="text-foreground mb-10 max-w-3xl">
          Questions, data requests, or invitations are always welcome.
        </h2>

        <div className="flex flex-col items-center w-full gap-8">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full">
            <a
              href={resolvedPrimaryHref}
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
