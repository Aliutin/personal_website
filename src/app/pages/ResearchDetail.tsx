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
  "Draft request: When Scarcity Reveals Directional Network Interdependence: Evidence from Arizona Canals"
);

const behavioralGamesDraftSubject = encodeURIComponent(
  "Draft request: When Efficiency Cannot Substitute for Allocation: Technology Adoption in a Sequential Canal"
);

const waterConservationTitle =
  "Closing the Irrigation Guidance Gap: Simplified Evapotranspiration-Based Drip Scheduling for Cotton in Jizzakh, Uzbekistan";

const waterConservationDraftSubject = encodeURIComponent(
  `Draft request: ${waterConservationTitle}`
);

const upstreamSelectedFigures = [
  {
    image: images.jmpStudyAreaMap,
    title: "Arizona study area and canal systems",
    desc: "Agricultural plots cluster along the Colorado River corridor, the Salt–Gila system, and the upper Gila Valley; 54,946 plots, 45% of them inside an irrigation district.",
  },
  {
    image: images.jmpWaterGraphSteps,
    title: "Water-graph construction",
    desc: "Four stages on a 493-plot network near Yuma: canal flow direction, plot-to-intake linking, directed plot edges, and head-to-tail signed-hop position.",
  },
  {
    image: images.jmpDistantUpstreamDesign,
    title: "Distant upstream cropped acreage",
    desc: "The design leaves upstream cropping within d km out of the exposure, keeps canal-connected upstream cropping beyond d, and controls for nearby fallowing.",
  },
  {
    image: images.jmpCutoffCoefficients,
    title: "Drought interaction across exclusion cutoffs",
    desc: "The GCVI interaction moves from −0.015 over the full upstream path to −0.035 beyond 10 km; each cutoff is a separate regression, so this is a profile rather than a tested trend.",
  },
  {
    image: images.jmpUpstreamDownstreamContrast,
    title: "Upstream vs downstream cropped acreage",
    desc: "With both entered jointly, the upstream GCVI interaction stays negative as the cutoff widens while the downstream interaction flattens toward zero.",
  },
  {
    image: images.jmpYearByYearInteractions,
    title: "Year-by-year interactions",
    desc: "Relative to 2016, interactions are near zero in 2017–2019, negative in 2020–2022, and back at zero in 2023; they do not simply track declared shortage tiers.",
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
              <span>41 PP</span>
            </div>

            <h1 className="text-white mb-6 !text-[length:var(--h3-size)] !leading-[var(--h3-lh)]">
              When Scarcity Reveals Directional Network Interdependence:
              Evidence from Arizona Canals
            </h1>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              Water rights and district rules govern claims to water, but farms
              receive it through canals shared with upstream users. A statewide
              directed canal network shows when a field&apos;s yield proxy
              starts to move with how much land is farmed upstream of it.
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
          ["54,946", "Plots on a directed canal network"],
          ["2016–2023", "Plot-year panel"],
          ["−0.035", "GCVI upstream × drought at >10 km"],
          ["−0.032", "Upstream minus downstream at >10 km"],
        ]}
      />

      <Section id="abstract" title="Abstract">
        Water rights and district rules govern claims to water, but Arizona
        farms receive it through canals shared with upstream users. I map
        54,946 plots onto a directed canal network and follow them from 2016 to
        2023. In plot fixed-effects regressions, the association between
        upstream cropped acreage and GCVI, a satellite yield proxy, turns more
        negative during sustained drought, and the change is larger when nearby
        upstream fields are excluded. Beyond 10 km, a downstream measure entered
        jointly shows no corresponding change. Within junior-rights districts,
        drought reveals both a plot&apos;s 2016–2019 baseline of upstream
        cropping and each year&apos;s departure from it. The shift appears in
        2020–2022 but not in the meteorologically harsher 2010–2014 drought,
        when major delivery schedules largely held, and measured canal flow in
        Wellton-Mohawk and Yuma County WUA points the same way. The findings
        support an interpretation in which system slack masks delivery
        frictions until sustained scarcity makes them consequential.
      </Section>

      <Section title="Approach">
        <ListBlock
          items={[
            "Reconstruct a directed water-graph from NHDPlus canal lines, elevation-inferred flow direction, and USDA Crop Sequence Boundaries, so that each plot has a fixed head-to-tail position and a fixed set of upstream ancestors and downstream descendants along the mapped canals.",
            "Measure upstream cropped acreage as the log count of ancestor plots in crop each year. It moves within a plot as upstream fields enter and leave fallow, and the panel asks how its association with GCVI shifts in sustained drought (24-month SPEI), with plot and crop-by-year fixed effects.",
            "Separate canal connection from geographic proximity by excluding ancestors within successively wider radii up to 10 km while controlling for nearby fallowing, and by entering the mirror downstream measure in the same regression as a directional negative control.",
            "Inside ten junior-rights districts, split exposure into its 2016–2019 baseline and each year's departure from it, then check timing against year-by-year interactions, the earlier 2010–2014 drought, pre-season upstream water use, and measured canal flow.",
          ]}
        />
      </Section>

      <Section title="Main findings">
        <ListBlock
          items={[
            "Sustained drought shifts the association between upstream cropped acreage and GCVI downward: the drought interaction is −0.015 over the full upstream path and −0.035 once upstream plots within 10 km are excluded, and it is negative at every exclusion radius. Under network-level clustering only the >10 km cell is significant, so the evidence rests on the pattern across cutoffs and designs rather than any single coefficient.",
            "The change follows the direction of flow. Beyond 10 km, with both measures entered jointly, the upstream interaction is −0.030 and the downstream interaction 0.002; their difference of −0.032 has p = 0.026 under two-way clustering and is marginal or insignificant under network clustering. The estimates identify a direction, not an actor.",
            "Inside ten junior-rights districts, one between-plot standard deviation of the 2016–2019 upstream cropped share is associated with 0.034 lower ln(1+GCVI) under district drought, and a ten-percentage-point departure above that baseline with a −0.014 shift, with essentially no association outside drought. Next year's departure carries the opposite sign, so the coefficients describe a dynamic association rather than the effect of a single planting decision.",
            "Timing follows delivery conditions rather than rainfall alone: year-specific interactions are near zero in 2017–2019, negative in 2020–2022, and back at zero in 2023, and a separately constructed 2008–2023 panel shows no comparable interaction in the harsher 2010–2014 drought. In Wellton-Mohawk and Yuma County WUA, more summer canal water flattens the downstream disadvantage in GCVI and crop moisture; evidence that more wells weaken the drought-related change is suggestive.",
            "In a companion 2021–22 specification, the gap between fields at the 25th and 75th percentiles of combined upstream exposure is 1.4–2.7 percent of crop revenue at an assumed pass-through, about $21–42 per acre of cotton and $30–59 per acre of alfalfa. These are revenue-equivalent magnitudes of an association, not losses in profit or welfare.",
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
              desc="A compact summary of the distance-cutoff design, the upstream–downstream contrast, and the junior-district decomposition, with the timing and magnitude checks below."
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

      <DarkSection title="Implications and limits">
        <StarListBlock
          items={[
            <>
              <span className="text-white font-medium">Allocation is not delivery:</span>{" "}
              formal allocation operates at the source; below it, how much land
              is farmed along the canal is associated with who bears a shortage
              once scarcity persists.
            </>,
            <>
              <span className="text-white font-medium">Slack hides, scarcity reveals:</span>{" "}
              the pattern appears when sustained drought wears down buffers, not
              in the harsher 2010–2014 drought when major delivery schedules
              largely held.
            </>,
            <>
              <span className="text-white font-medium">A direction, not an actor:</span>{" "}
              administered head-to-tail rationing and decentralized competition
              among farmers would both produce the estimates, and the data do
              not distinguish them.
            </>,
            <>
              <span className="text-white font-medium">Groundwater buffering is suggestive:</span>{" "}
              the drought-related change is weaker where wells are more
              numerous, consistent with surface-water vulnerability, without
              yielding a uniform institutional ranking.
            </>,
            <>
              <span className="text-white font-medium">Limits:</span>{" "}
              satellite indices are yield proxies, field-level deliveries are
              unobserved, the panel rests mostly on the largest canal systems in
              one state and one drought episode, and the revenue magnitudes
              assume a pass-through from GCVI to revenue.
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
      src: images.waterGraphicalAbstract,
      alt: "Graphical abstract",
      caption:
        "The 32-farm panel before (2022) and after (2023) the printed tables, the 2023 guided drip vs furrow contrasts, and the 19 modelled reference sites that would reproduce district requirements within ±10% for 99% of Uzbekistan's cotton area.",
    },
    {
      src: images.waterDripSchedule,
      alt: "Figure 1 — Pre-calculated drip schedule, 2023",
      caption:
        "Design drip-irrigation and fertigation schedule for one Phase I field in 2023: 300 m³/ha establishment irrigation, then events on a nominal 3.5-day cycle, with phenological stages and Kc ranges. Values are design targets from climatic-normal ET₀ and stage Kc, not realised water use.",
    },
    {
      src: images.waterNirHubNetwork,
      alt: "Figure 3 — The net irrigation requirement and its hub network",
      caption:
        "(A) Interannual CV of the net irrigation requirement, 1991–2023, across 14,445 districts; rainfed districts in grey. (B) National CVs for the twelve critically water-stressed countries, ET₀ against the net requirement. (C) The 40 hubs serving Uzbekistan's cotton within ±10% and 100 km.",
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
              <span>WORKING PAPER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span>2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <span>30 PP</span>
            </div>

            <h1 className="text-white mb-6 !text-[length:var(--h3-size)] !leading-[var(--h3-lh)]">
              {waterConservationTitle}
            </h1>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              Existing drip adopters in Jizzakh were under-irrigating: in 2022
              their drip plots used 52.3% less water than furrow but yielded
              well below the supervised benchmark. With a pre-calculated table
              alone, they raised drip water from 3,340 to 4,160 m³/ha (24.6%),
              and in 2023 guided drip yielded 60.3% more than furrow with 34.6%
              less delivered water.
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
          ["+60.3%", "Guided drip yield vs furrow, 2023"],
          ["−34.6%", "Guided drip delivered water vs furrow, 2023"],
          ["+24.6%", "Drip water increase with tables"],
          ["19", "Modelled reference sites for 99% of Uzbek cotton area"],
        ]}
      />

      <Section id="abstract" title="Abstract">
        Uzbekistan promotes drip irrigation as water availability falls, but
        farmers often receive the hardware without scheduling guidance. We test
        whether a simplified, pre-calculated FAO-56 evapotranspiration-based
        schedule for cotton in Jizzakh, requiring no on-farm sensors or
        specialist training, can deliver the benefits of drip irrigation to
        existing adopters. The schedule is validated in two phases: paired
        researcher-supervised drip–furrow trials on four farms over 2021–2023,
        and a difference-in-differences study of 32 existing drip adopters
        before and after they received the tables (2022–2023). In the trials,
        scheduled drip raised yield by 39.9% and reduced delivered water by
        31.9% relative to farmer-managed furrow plots. Unguided adopters were
        under-irrigating; with the tables alone they raised drip water
        application by 24.6%, and in 2023 guided drip plots yielded 60.3% more
        than their furrow plots with 34.6% less water. A spatial screen over
        1991–2023 shows the seasonal net irrigation requirement is stable
        between years wherever rainfall is a small fraction of demand.
      </Section>

      <Section title="Approach">
        <ListBlock
          items={[
            "Phase I: validate a climatic-normal FAO-56 ET₀ × Kc schedule on four paired fields (2021–2023, 24 plot-years), comparing researcher-supervised drip plots with farmer-managed furrow plots on the same farms.",
            "Phase II: give 32 purposively selected existing drip adopters the same schedule as pre-calculated tables before the 2023 season, with no hardware, training or fertigation advice, and estimate a difference-in-differences model against their unguided furrow plots (128 plot-years).",
            "Water is delivered water measured by drip flow meters and furrow weirs, without loss adjustment; a 0.90 district-coefficient sensitivity is reported. A spatial screen then tests where the seasonal net irrigation requirement is stable enough for a printed table.",
          ]}
        />
      </Section>

      <Section title="Main findings">
        <ListBlock
          items={[
            "In the paired Phase I trials (four farms, 2021–2023), researcher-supervised scheduled drip yielded 39.9% more seed cotton than farmer-managed furrow plots, used 31.9% less delivered water, and raised water productivity by 105.4%. Plots were not randomly assigned within farms, so this is a supervised benchmark, not an average treatment effect of drip alone.",
            "Before guidance, in 2022, the 32 existing adopters' drip plots used 52.3% less water than their furrow plots and yielded 38.0% more, but their drip yields (3,216 kg/ha) stayed well below the Phase I drip benchmark (3,975 kg/ha). Unguided drip adopters were under-irrigating.",
            "After receiving the tables alone, farmers raised drip water application by 24.6% in means, from 3,340 to 4,160 m³/ha; 31 of 32 applied more water and all 32 raised drip yield. Relative to the furrow trend, the difference-in-differences estimates are +16.2% for yield, +37.1% for water use, and −15.2% for water productivity.",
            "In 2023, guided drip plots yielded 60.3% more than furrow plots with 34.6% less delivered water and 145.3% higher water productivity. These contrasts use unadjusted weir volumes for furrow; under the 0.90 district-coefficient sensitivity the 2023 water contrast is −27.4%, while the difference-in-differences estimates are unchanged.",
            "Across 14,445 districts of water-stressed Asia and Africa, the seasonal net irrigation requirement has a median interannual CV of 5.4% in arid districts, and ten of the twelve critically water-stressed countries meet a ±10% criterion; Sudan and Pakistan do not because monsoon rain carries most of their crop demand. For Uzbekistan, 19 reference sites would reproduce district requirements within ±10% for 99% of the cotton area; the hub counts are lower bounds.",
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
              title="Web figure — scheduling guidance in three steps"
              desc="Phase I sets the supervised benchmark; unguided drip adopters (Phase II, 2022) under-irrigate; with tables (Phase II, 2023) they apply 24.6% more drip water while staying 34.6% below furrow."
            >
              <WaterGuidanceFigure />
            </FigureCard>
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[5/2]"
              image={images.waterGraphicalAbstract}
              title="Graphical abstract"
              desc="The 32-farm panel before (2022) and after (2023) the printed tables, the 2023 guided drip vs furrow contrasts, and the 19 modelled reference sites that would reproduce district requirements within ±10% for 99% of Uzbekistan's cotton area."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/9]"
              image={images.waterDripSchedule}
              title="Figure 1 — Pre-calculated drip schedule, 2023"
              desc="Design drip-irrigation and fertigation schedule for one Phase I field: 300 m³/ha establishment irrigation, then events on a nominal 3.5-day cycle, with phenological stages and Kc ranges. Values are design targets from climatic-normal ET₀ and stage Kc, not realised water use."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[6/5]"
              image={images.waterNirHubNetwork}
              title="Figure 3 — The net irrigation requirement and its hub network"
              desc="(A) Interannual CV of the net irrigation requirement, 1991–2023, across 14,445 districts; rainfed districts in grey. (B) National CVs for the twelve critically water-stressed countries, ET₀ against the net requirement. (C) The 40 hubs serving Uzbekistan's cotton within ±10% and 100 km."
            />
          </div>
        </div>
      </section>

      <DarkSection title="Policy implications">
        <StarListBlock
          items={[
            <>
              <span className="text-white font-medium">Pair hardware subsidies with pre-calculated tables:</span>{" "}
              this is the paper&apos;s strongest finding. Existing drip adopters
              responded to a simple table of per-event volumes indexed by growth
              stage, with no additional training. Hardware alone left them
              under-irrigating.
            </>,
            <>
              <span className="text-white font-medium">Issue district tables from reference locations:</span>{" "}
              19 reference locations would reproduce district tables within
              ±10% for 99% of Uzbekistan&apos;s cotton area, and 40 would cover
              all of it. Each table should carry a rain-skip rule. The piedmont
              districts, where spring and early-summer rain falls, need their
              own tables.
            </>,
            <>
              <span className="text-white font-medium">Use extension to distribute tables, not to teach scheduling:</span>{" "}
              officers can deliver and explain the season&apos;s table, calibrate
              operating hours to each farm&apos;s pressure and emitters, and
              collect meter readings. The evidence covers cotton on four trial
              fields and 32 Jizzakh farms; other crops, soils and farmer
              populations remain untested.
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
      src: images.behavioralGamesTwoGradients,
      alt: "Session-2 adoption and model-implied realized-path value of drip by canal seat",
      caption:
        "Eventual Session-2 adoption rises from 36.8% at P1 to 73.7% at P5, while the model-implied net value of a round-1 purchase over each game's realized path falls from −1.60 tokens (positive in 26 of 38 games) to −33.44 (positive in none). The value series is a conditional-choice index, not a welfare measure; rounds beyond the four-round estimation window carry the round-4 session shift forward.",
    },
    {
      src: images.behavioralGamesBeliefDial,
      alt: "Sensitivity of modeled adoption value to upstream restraint and the belief dial",
      caption:
        "Moving every upstream neighbor to high restraint is worth +12.97 tokens to P5 and 0 to P1 within the four-round window. Yet across the registered cases, P5's best value on the belief dial stays between −36.2 and −10.7 tokens; degraded-water Session-3 P4 is the sole cell where the dial changes the sign. Beliefs are not recovered; this is a logical benchmark.",
    },
    {
      src: images.behavioralGamesSpilloverAccounting,
      alt: "Model-implied one-adopter spillover accounting and accumulation by number of drip seats",
      caption:
        "Each row assigns drip to one seat against an all-gravity benchmark. Downstream seats re-extract 97.7–103.6% of the adopter's own saving across six stable full-stock cells, all six net-group intervals include zero, and P5 has no downstream recipient. Model-implied contrasts in extraction units, not welfare, conservation, or identified drip effects.",
    },
    {
      src: images.behavioralGamesPersistence,
      alt: "Persistence diagnostics for adoption, tail extraction, and investment",
      caption:
        "In Session 3, 83.5% of prior adopters repurchased against 34.4% first-time adoption; P5 ceiling choices show excess lag dependence of 0.236 [0.087, 0.372] beyond modeled state; exact investment repetition is 0.3825 observed versus 0.1350 under the maintained law. A descriptive synthesis, not a common causal estimate.",
    },
    {
      src: images.behavioralGamesProtocol,
      alt: "Session sequence and within-round move order in the irrigation game",
      caption:
        "The same five farmers play three sessions in fixed order, with seats re-randomized between sessions. Within a round, each farmer publicly invests, adopts drip if eligible, and extracts before the next downstream farmer chooses.",
    },
    {
      src: images.behavioralGamesProductionFunctions,
      alt: "Printed cotton output by water input for drip and furrow irrigation",
      caption:
        "The chart shown to participants: drip reaches maximum output with about 7 water units, furrow irrigation with about 10. Drip beats gravity only at intermediate water levels (4–9 units), so greater scarcity does not make drip progressively more valuable.",
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
              <span>44 PP</span>
            </div>

            <h1 className="text-white mb-6 !text-[length:var(--h3-size)] !leading-[var(--h3-lh)]">
              When Efficiency Cannot Substitute for Allocation: Technology
              Adoption in a Sequential Canal
            </h1>
            <p className="text-body text-gray-300 mb-10 max-w-3xl">
              In irrigation games with 190 Uzbek farmers, demand for drip rose
              toward the canal tail while the model-implied return to buying it
              fell. Within the maintained token account, the tail can buy
              efficiency but cannot buy upstream restraint.
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
          ["38", "Five-person canal games"],
          ["36.8% → 73.7%", "Session-2 adoption, head to tail"],
          ["0 of 38", "Games where the tail purchase pays (model-implied)"],
        ]}
      />

      <Section id="abstract" title="Abstract">
        We study why farmers adopt an efficiency technology where it can do
        least. In a lab-in-the-field experiment with 190 farmers in 38
        five-person irrigation games in Uzbekistan, eventual Session-2 drip
        adoption rose monotonically from 36.8 percent at the canal head to 73.7
        percent at the tail. Over the same seats, the model-implied net value of
        a round-1 purchase over each game's realized path, an evaluation
        extending beyond the four-round estimation window, fell from −1.60
        tokens, positive in 26 of 38 games, to −33.44, positive in none. The
        tail's per-round gain is too small to amortize the common 45-token fee,
        and its loss survives high-water state bounds and every belief on the
        maintained upstream-restraint dial. Model-implied counterfactuals
        reverse the geography of demand: across six stable full-stock cells,
        downstream users re-extract 97.7–103.6 percent of an upstream adopter's
        own-extraction reduction, whereas the tail seat has no downstream user.
        Demand tracked exposure to scarcity; within the maintained account,
        technology could not substitute for water allocation.
      </Section>

      <Section title="Approach">
        <ListBlock
          items={[
            "Run 38 five-person irrigation games with 190 farmers from 4 administrative regions and 15 of the 16 surveyed districts, recruited from a 914-farmer survey roster. Water moves publicly from P1 at the head to P5 at the tail, and seats are re-randomized between sessions.",
            "Session 1 offers gravity irrigation only; Sessions 2 and 3 add a priced drip option, charged in three 15-token installments, that expires at the session boundary. Session 3 lowers the announced water cap by two units per round.",
            "Freeze a behavioral account of extraction built on the exact printed payoff cards and the canal's water recursion. Adoption choices enter neither its estimation nor its selection: it is a measuring instrument, not an adoption model.",
            "Use that account to value adoption nodes and to trace water in separate one-adopter counterfactuals. Observed contrasts use game-clustered inference over 38 clusters; because adoption is chosen, adoption comparisons are descriptive.",
          ]}
        />
      </Section>

      <Section title="Main findings">
        <ListBlock
          items={[
            "When drip first became available in Session 2, eventual adoption rose monotonically down the canal: 36.8, 42.1, 44.7, 57.9, and 73.7 percent from P1 to P5. The model-implied net value of a round-1 purchase over each game's realized path moved the other way, from −1.60 to −33.44 tokens (Session 3: +11.47 to −35.74), and the tail purchase is positive in none of the 38 games in either session.",
            "Within the maintained token account, a longer horizon or optimistic beliefs do not rescue the tail purchase. P5's per-round gain of 2.2–2.4 tokens implies a break-even of 20.4 and 18.7 productive rounds against sessions averaging 5.55 and 8.37 rounds, and even the most favorable belief on the registered upstream-restraint dial leaves P5's value between −36.2 and −10.7 tokens across the registered cases. Both calculations extrapolate beyond the four-round estimation window, and “overpayment” refers to modeled token value, not subjective welfare.",
            "Tail participants remain close to the locked model on extraction: across 302 model-eligible paid P5 nodes, observed extraction averages 3.80 units against 3.84 model-implied. This makes a general failure to solve the extraction problem less plausible, but it does not establish comprehension or exclude confusion specific to the adoption decision.",
            "In separate one-adopter model counterfactuals, an upstream adopter's own extraction falls by 0.253–0.623 water units per group-round, and downstream users re-extract 97.7–103.6 percent of that release across six stable full-stock cells; all six net-group 95% intervals include zero. Modeled provision sits at the head seats P1–P3 while purchases concentrate at the tail. These are controlled counterfactuals in extraction units, not identified drip effects, conservation, or welfare estimates.",
            "Adoption differs across decision margins. Among Session-2 nonadopters, first-time Session-3 adoption was 43.5% after a full-water history and 16.1% after a degraded-water history (+27.4 percentage points, wild-cluster p = 0.016), while 83.5% of Session-2 adopters repurchased against 34.4% first-time adoption. Because histories and prior adoption are endogenous, these are descriptive associations, not learning or habit effects.",
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
              title="Web figure — the inversion in three steps"
              desc="Demand rises toward the tail, the model-implied return to a tail purchase is negative in every realized game, and modeled water released by upstream adopters is almost fully re-extracted downstream."
            >
              <BehavioralGamesMechanismFigure />
            </FigureCard>
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[4/3] md:aspect-[5/4]"
              image={images.behavioralGamesTwoGradients}
              title="Two opposing gradients"
              desc="Eventual Session-2 adoption rises from 36.8% at P1 to 73.7% at P5, while the model-implied realized-path value of a round-1 purchase falls from −1.60 tokens (positive in 26 of 38 games) to −33.44 (positive in none). The value series is a conditional-choice index, not a welfare measure."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/7]"
              image={images.behavioralGamesBeliefDial}
              title="Model-implied — the belief-dial check"
              desc="Upstream restraint is worth most to the tail (+12.97 tokens at P5 within the four-round window), but P5's best value on the dial stays between −36.2 and −10.7 tokens across registered cases. Beliefs are not recovered; the dial is a logical benchmark."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[4/3]"
              image={images.behavioralGamesSpilloverAccounting}
              title="Model-implied — spillover accounting along a one-way canal"
              desc="Downstream seats re-extract 97.7–103.6% of an upstream adopter's own saving across six stable full-stock cells, and P5 has no downstream recipient. These are controlled contrasts in extraction units, not welfare, conservation, or identified drip effects."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/6]"
              image={images.behavioralGamesPersistence}
              title="Descriptive — persistence across three choice margins"
              desc="83.5% of prior adopters repurchased in Session 3 against 34.4% first-time adoption; tail extraction and investment also repeat more than the maintained account predicts. The panels share a sequence signature, not an identified mechanism."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/9]"
              image={images.behavioralGamesProtocol}
              title="Game protocol"
              desc="The same five farmers play three sessions in fixed order with seats re-randomized between sessions; within a round, each farmer publicly invests, adopts drip if eligible, and extracts before the next downstream farmer chooses."
            />
            <FigureCard
              className="md:col-span-2"
              frameClassName="aspect-[16/10]"
              image={images.behavioralGamesProductionFunctions}
              title="Game material — printed payoff curves"
              desc="Drip reaches maximum output with about 7 water units and furrow irrigation with about 10. Drip beats gravity only at intermediate water levels, so greater scarcity does not make drip progressively more valuable."
            />
          </div>
        </div>
      </section>

      <DarkSection title="Policy implications">
        <StarListBlock
          items={[
            <>
              <span className="text-white font-medium">Efficiency is not allocation:</span>{" "}
              a tail-end participant can buy a technology that changes
              extraction once water arrives, but cannot thereby buy upstream
              restraint or make water arrive. Uzbekistan's drip subsidies of UZS
              8–12 million per hectare (30–40% of installation cost) likewise do
              not determine who receives canal water.
            </>,
            <>
              <span className="text-white font-medium">Targeting by felt scarcity:</span>{" "}
              read as an interpretation of model-implied objects, not a measured
              targeting result, subsidies allocated by felt scarcity would
              concentrate at the tail, while the maintained account locates
              private token returns and the source of downstream redistribution
              upstream. The experiment provides no optimal target, tipping
              subsidy, or welfare estimate.
            </>,
            <>
              <span className="text-white font-medium">Redistribution, not conservation:</span>{" "}
              in the model, water released by an upstream adopter is almost fully
              re-extracted downstream, and wider drip assignment can raise modeled
              group extraction. Plot-level efficiency need not imply system-level
              conservation.
            </>,
            <>
              <span className="text-white font-medium">Scope:</span>{" "}
              only canal position is randomized; inference rests on 38 game
              clusters; the realized payment stake of an adoption decision was
              about ±0.3 tokens; and adoption in a stylized canal game is not
              field installation.
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
      label: "Distance cutoffs",
      title: "Drought shifts the upstream association",
      body: "The GCVI × drought interaction is negative at every exclusion radius and most negative once upstream plots within 10 km are excluded; nearby fallow controls absorb local shocks.",
      metric: "−0.015 → −0.035",
      tone: "border-[#1a1a1b] bg-white",
    },
    {
      label: "Directional contrast",
      title: "Upstream, not downstream",
      body: "In the same >10 km regression, upstream cropped acreage carries a negative drought interaction while the downstream interaction is approximately zero. The contrast is specific to GCVI.",
      metric: "−0.030 vs. +0.002",
      tone: "border-[#ff7b1b] bg-[#fff7ed]",
    },
    {
      label: "Junior-rights districts",
      title: "Baseline and annual departures",
      body: "Drought reveals both the 2016–2019 upstream cropped share a plot inherits and each year's departure from it; outside drought the departure is unrelated to GCVI.",
      metric: "−0.014 per 10 pp",
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
        <MiniMetric value="2020–22" label="Negative year-specific interactions; zero again in 2023" />
        <MiniMetric value="2010–14" label="Harsher drought, schedules held: no comparable interaction" />
        <MiniMetric value="p = 0.026" label="Upstream − downstream at >10 km, two-way clustering" />
        <MiniMetric value="1.4–2.7%" label="Revenue-equivalent gap, 25th vs 75th percentile field, 2021–22" />
      </div>
    </div>
  );
}

function BehavioralGamesMechanismFigure() {
  const steps = [
    {
      label: "Who buys?",
      title: "Demand rises toward the tail",
      body: "When drip first became available in Session 2, eventual adoption rose monotonically from 36.8% at the canal head (P1) to 73.7% at the tail (P5). Seats are randomized but adoption is chosen, so the gradient is descriptive.",
      metric: "36.8% → 73.7%",
      tone: "border-[#0f766e] bg-[#f0fdfa]",
    },
    {
      label: "Does it pay?",
      title: "The tail purchase pays in no realized game",
      body: "The model-implied net value of a round-1 purchase over each game's realized path falls from −1.60 tokens at P1 to −33.44 at P5, positive in none of 38 games. Values beyond the four-round estimation window are extrapolated.",
      metric: "−33.44 tokens (0/38)",
      tone: "border-[#ff7b1b] bg-[#fff7ed]",
    },
    {
      label: "Where does water go?",
      title: "Redistribution, not conservation",
      body: "In one-adopter model counterfactuals, downstream seats re-extract 97.7–103.6% of an upstream adopter's own saving, and P5 has no downstream recipient. These are model-implied contrasts, not identified drip effects.",
      metric: "97.7–103.6% re-extracted",
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
        <MiniMetric value="38" label="five-person canal games" />
        <MiniMetric value="3.80 vs 3.84" label="P5 extraction, observed vs model (302 nodes)" />
      </div>
    </div>
  );
}

function WaterGuidanceFigure() {
  const steps = [
    {
      label: "Phase I — researcher-supervised",
      title: "Supervised benchmark",
      body: "FAO-56 schedule applied to the drip plot of four paired drip–furrow fields, 2021–2023. Scheduled drip yields more and uses less delivered water than the farmer-managed furrow plot. This is a supervised benchmark, not a randomised effect of drip alone.",
      metric: "+39.9% yield / −31.9% water",
      tone: "border-[#ff7b1b] bg-[#fff7ed]",
    },
    {
      label: "Phase II 2022 — no guidance",
      title: "Drip alone under-irrigates",
      body: "32 existing adopters managed drip by their own judgement. Their drip plots used far less water than furrow, but drip yield averaged 3,216 kg/ha, against 3,975 kg/ha on the Phase I drip plots that season.",
      metric: "+38.0% yield / −52.3% water",
      tone: "border-[#0f766e] bg-[#f0fdfa]",
    },
    {
      label: "Phase II 2023 — tables added",
      title: "Yields move toward the benchmark",
      body: "With pre-calculated per-event volumes alone, mean drip water rose from 3,340 to 4,160 m³/ha (24.6%). Guided drip still used 34.6% less delivered water than furrow while yielding 60.3% more.",
      metric: "+60.3% yield / −34.6% water",
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
        <MiniMetric value="+16.2%" label="DiD yield effect of tables vs furrow trend" />
        <MiniMetric value="+105.4%" label="water productivity, scheduled drip vs furrow (Phase I)" />
        <MiniMetric value="32 of 32" label="farmers raised drip yield, 2022 → 2023" />
        <MiniMetric value="10 of 12" label="critically water-stressed countries meet ±10% on net requirement" />
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
