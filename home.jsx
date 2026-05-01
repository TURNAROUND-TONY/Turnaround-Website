/* ===========================================================
   HOME — Turnaround Shopify Plus Agency
   Framework hero centerpiece + stats + services + cases + CTA
   =========================================================== */

const FRAMEWORK = [
  { letter: "T", word: "Technical Clarity",          phase: "Assess",     desc: "We start by mapping every system, dependency, and integration. No assumptions, no surprises mid-migration." },
  { letter: "U", word: "User & Business Continuity", phase: "Assess",     desc: "Your store keeps trading. Cutovers are choreographed around live traffic, fulfilment cycles, and revenue-critical windows." },
  { letter: "R", word: "Risk-Controlled Execution",  phase: "Architect",  desc: "Checklist-driven cutovers, staged rollouts, and rollback plans for every change that hits production." },
  { letter: "N", word: "No-Compromise Data Integrity", phase: "Architect", desc: "Products, variants, customers, orders — reconciled to the row. 100% parity is the only acceptable outcome." },
  { letter: "A", word: "Architecture First",         phase: "Architect",  desc: "We design for the catalogue you'll have in three years, not the one you have today. Scale is a default, not a refactor." },
  { letter: "R", word: "Ready for Scale",            phase: "Execute",    desc: "Performance budgets, edge caching, and Liquid optimisations baked in before launch — not bolted on after." },
  { letter: "O", word: "Operational Fit",            phase: "Execute",    desc: "Tax, shipping, fulfilment, and ERP alignment validated against your real operations before any DNS change." },
  { letter: "U", word: "Upfront Ownership",          phase: "Execute",    desc: "One senior lead. One source of truth. Direct line — no account-manager telephone game between you and the engineers." },
  { letter: "N", word: "No Shortcuts",               phase: "Validate",   desc: "Every flow tested against production data. SEO, redirects, schema, structured data, accessibility — all signed off in writing." },
  { letter: "D", word: "Durable Partnerships",       phase: "Stabilize",  desc: "We stay through the first 90 days post-launch. Stabilisation isn't an upsell — it's how the work is finished." },
];

const STATS = [
  { num: "5,100+", label: "Shopify stores delivered" },
  { num: "150+",   label: "Successful migrations" },
  { num: "90",     label: "Day turnaround" },
  { num: "100%",   label: "Data integrity" },
];

/* ---------- HERO VARIANT A — vertical slats ------------- */
const HeroSlats = () => {
  const [active, setActive] = React.useState(0);
  return (
    <section className="hero-slats">
      <div className="hero-meta">
        <span className="eyebrow">Index / 01 — The Framework</span>
        <span className="eyebrow">Hover any letter</span>
      </div>
      <div className="slats-grid" onMouseLeave={() => setActive(0)}>
        {FRAMEWORK.map((f, i) => (
          <button
            key={i}
            className={`slat ${active === i ? "is-active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <span className="slat-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="slat-letter">{f.letter}</span>
            <span className="slat-word">{f.word}</span>
            <span className="slat-phase">{f.phase}</span>
          </button>
        ))}
      </div>
      <div className="slat-detail">
        <div className="slat-detail-meta">
          <span className="eyebrow">Phase</span>
          <span className="display" style={{ fontSize: 28 }}>{FRAMEWORK[active].phase}</span>
        </div>
        <div className="slat-detail-body">
          <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
            <em>{FRAMEWORK[active].word}.</em>
          </h3>
          <p style={{ color: "var(--ink-soft)", maxWidth: "58ch", marginTop: 16, fontSize: 16, lineHeight: 1.6 }}>
            {FRAMEWORK[active].desc}
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------- HERO VARIANT B — typographic stack -------- */
const HeroStack = () => (
  <section className="hero-stack">
    <div className="hero-stack-rows">
      {FRAMEWORK.map((f, i) => (
        <div className="hsr" key={i}>
          <span className="hsr-num">{String(i + 1).padStart(2, "0")}</span>
          <span className="hsr-letter display">{f.letter}</span>
          <span className="hsr-word display"><em>{f.word}</em></span>
          <span className="hsr-phase">{f.phase}</span>
        </div>
      ))}
    </div>
  </section>
);

/* ---------- HERO VARIANT C — orbital diagram ---------- */
const HeroOrbit = () => {
  const phases = ["Assess", "Architect", "Execute", "Validate", "Stabilize"];
  const grouped = phases.map(p => ({ phase: p, items: FRAMEWORK.filter(f => f.phase === p) }));
  return (
    <section className="hero-orbit">
      <div className="orbit-rail">
        {grouped.map((g, gi) => (
          <div className="orbit-phase" key={gi}>
            <div className="orbit-phase-label">
              <span className="mono" style={{ color: "var(--muted)" }}>0{gi + 1}</span>
              <span className="display" style={{ fontSize: 32 }}><em>{g.phase}</em></span>
            </div>
            <div className="orbit-items">
              {g.items.map((it, ii) => (
                <div className="orbit-item" key={ii}>
                  <span className="orbit-letter">{it.letter}</span>
                  <span className="orbit-word">{it.word}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ---------- HERO TOP — title + stats ----------------- */
const HeroTop = () => (
  <section className="hero-top">
    <div className="container">
      <div className="hero-top-grid">
        <div className="hero-top-left">
          <span className="tag" style={{ marginBottom: 28 }}>
            <span className="live-dot"></span> Migration-first Shopify Plus partner
          </span>
          <h1 className="display hero-title">
            We move stores<br />
            that <em>can't break.</em>
          </h1>
          <p className="hero-sub">
            Turnaround is the migration partner enterprise merchants call when downtime, lost rankings, or data drift aren't options. Built on the <strong>TURNAROUND framework</strong> — a delivery system for risk-controlled commerce.
          </p>
          <div className="hero-actions">
            <a href="contact.html" className="btn btn-primary">
              Book a migration audit <span className="arrow">→</span>
            </a>
            <a href="case-studies.html" className="btn btn-ghost">
              See the work
            </a>
          </div>
          <div className="shopify-badge-row">
            <img src="assets/shopify-plus-badge.svg" alt="Shopify Plus Partner" className="b-mark" />
            <span className="b-text">Certified Shopify Plus Partner — vetted for enterprise migrations & Plus-tier builds.</span>
          </div>
        </div>
        <div className="hero-top-right">
          <div className="stats-block">
            {STATS.map((s, i) => (
              <div className="stat" key={i}>
                <span className="stat-num display">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="hero-marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...Array(2)].map((_, j) => (
          <span key={j} className="marquee-inner">
            {["BigCommerce → Shopify Plus", "Magento → Shopify Plus", "Salesforce Commerce → Shopify Plus", "WooCommerce → Shopify Plus", "Custom Platform → Shopify Plus", "Headless Re-platform"].map((t, i) => (
              <span key={i} className="marquee-item">
                <span style={{ color: "var(--accent)" }}>◆</span> {t}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- FRAMEWORK SECTION (homepage centerpiece) ---- */
const FrameworkSection = ({ variant }) => (
  <section className="section framework-section">
    <div className="container">
      <div className="section-label">
        <span className="num">02 — Framework</span>
        <span className="ttl">The TURNAROUND Method</span>
      </div>
      <div className="framework-intro">
        <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 96px)" }}>
          Ten letters.<br />Five phases.<br /><em>Zero compromises.</em>
        </h2>
        <p style={{ color: "var(--ink-soft)", maxWidth: "44ch", fontSize: 17, lineHeight: 1.55 }}>
          Every migration we run passes through the same delivery system. It's how we hold a 100% data-integrity record across 150+ replatforms — and how we promise zero downtime in writing.
        </p>
      </div>
      <div style={{ marginTop: 80 }}>
        {variant === "slats" && <HeroSlats />}
        {variant === "stack" && <HeroStack />}
        {variant === "orbit" && <HeroOrbit />}
      </div>
    </div>
  </section>
);

/* ---------- SERVICES PREVIEW ---------- */
const SERVICES = [
  {
    num: "01",
    title: "Platform Migrations",
    sub: "BigCommerce, Magento, Salesforce, custom — to Shopify Plus.",
    points: ["SEO-safe URL mapping", "100% data parity", "Checklist-driven cutovers", "Pre-launch operational validation"],
    href: "migrations.html",
  },
  {
    num: "02",
    title: "Shopify Plus Builds",
    sub: "Production-grade B2B & B2C storefronts designed for scale, not just launch.",
    points: ["Custom theme development", "Complex catalogue & pricing logic", "Hybrid B2B/B2C architectures", "Performance & CRO baked in"],
    href: "services.html",
  },
  {
    num: "03",
    title: "Stabilization & Growth",
    sub: "We stay past launch. Optimisation, monitoring, and durable partnership.",
    points: ["90-day post-launch ownership", "Performance budgets", "Conversion experimentation", "Roadmap & architecture advisory"],
    href: "services.html",
  },
];

const ServicesSection = () => (
  <section className="section">
    <div className="container">
      <div className="section-label">
        <span className="num">03 — Capabilities</span>
        <span className="ttl">What we build</span>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <a href={s.href} className="service-card" key={i}>
            <div className="service-head">
              <span className="mono" style={{ color: "var(--muted)" }}>{s.num}</span>
              <span className="service-arrow">↗</span>
            </div>
            <h3 className="display service-title"><em>{s.title}</em></h3>
            <p className="service-sub">{s.sub}</p>
            <ul className="service-list">
              {s.points.map((p, j) => (
                <li key={j}><span className="dash">—</span> {p}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- CASE STUDIES TEASER ---------- */
const CaseStudyTeaser = () => (
  <section className="section">
    <div className="container">
      <div className="section-label">
        <span className="num">04 — Selected Work</span>
        <span className="ttl">Migrations of consequence</span>
      </div>
      <div className="case-card">
        <div className="meta">
          <span className="url">CS / 01 · ewatchparts.com</span>
          <h3 className="title display">
            BigCommerce<br /><em>→ Shopify Plus.</em>
          </h3>
          <p className="summary">
            Mid-market e-commerce brand with a high-SKU catalogue and SEO-dependent revenue. Migrated end-to-end with zero downtime, 100% data integrity, and no measurable ranking loss.
          </p>
          <div className="case-metrics">
            <div><span className="display" style={{ fontSize: 40 }}>100%</span><span className="mono">Data integrity</span></div>
            <div><span className="display" style={{ fontSize: 40 }}>0</span><span className="mono">Downtime minutes</span></div>
            <div><span className="display" style={{ fontSize: 40 }}>0%</span><span className="mono">SEO loss</span></div>
          </div>
          <a href="case-studies.html" className="btn btn-ghost" style={{ marginTop: 16 }}>Read the full study <span className="arrow">→</span></a>
        </div>
        <CaseVisualA />
      </div>
      <div className="case-card">
        <div className="meta">
          <span className="url">CS / 02 · yowy.com.au</span>
          <h3 className="title display">
            Magento<br /><em>→ Shopify Plus.</em>
          </h3>
          <p className="summary">
            Established brand stuck on a heavily-customised Magento setup — slow, expensive, brittle. Replatformed to a Shopify-native architecture that cut maintenance overhead and unlocked deployment speed.
          </p>
          <div className="case-metrics">
            <div><span className="display" style={{ fontSize: 40 }}>↓</span><span className="mono">Maintenance overhead</span></div>
            <div><span className="display" style={{ fontSize: 40 }}>↑</span><span className="mono">Site performance</span></div>
            <div><span className="display" style={{ fontSize: 40 }}>↑</span><span className="mono">Deploy velocity</span></div>
          </div>
          <a href="case-studies.html" className="btn btn-ghost" style={{ marginTop: 16 }}>Read the full study <span className="arrow">→</span></a>
        </div>
        <CaseVisualB />
      </div>
    </div>
  </section>
);

/* Visuals — abstract data viz, no fake screenshots */
const CaseVisualA = () => (
  <div className="visual">
    <svg viewBox="0 0 400 300" className="visual-svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.18"/>
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#grid)"/>
      {/* Migration flow: source → target */}
      <g fontFamily="var(--font-mono)" fontSize="9" fill="currentColor">
        <text x="20" y="40" opacity="0.5">SOURCE / BIGCOMMERCE</text>
        <text x="270" y="40" opacity="0.5">TARGET / SHOPIFY PLUS</text>
      </g>
      <g stroke="currentColor" strokeWidth="0.6" fill="none">
        {Array.from({ length: 14 }).map((_, i) => {
          const y1 = 60 + i * 16;
          const y2 = 60 + i * 16 + (i % 3 - 1) * 4;
          return <path key={i} d={`M 80 ${y1} C 180 ${y1}, 220 ${y2}, 320 ${y2}`} opacity={0.35 + (i % 4) * 0.15}/>;
        })}
      </g>
      <g fill="currentColor">
        {Array.from({ length: 14 }).map((_, i) => (
          <React.Fragment key={i}>
            <circle cx="80" cy={60 + i * 16} r="1.6"/>
            <circle cx="320" cy={60 + i * 16 + (i % 3 - 1) * 4} r="1.6"/>
          </React.Fragment>
        ))}
      </g>
      <g fontFamily="var(--font-mono)" fontSize="8" fill="currentColor" opacity="0.55">
        <text x="20" y="285">RECORDS RECONCILED · 100%</text>
        <text x="240" y="285">CUTOVER · 4H 12M</text>
      </g>
    </svg>
  </div>
);

const CaseVisualB = () => (
  <div className="visual">
    <svg viewBox="0 0 400 300" className="visual-svg" preserveAspectRatio="xMidYMid meet">
      <g fontFamily="var(--font-mono)" fontSize="9" fill="currentColor">
        <text x="20" y="36" opacity="0.5">PLATFORM COST INDEX</text>
      </g>
      {/* Two contrasting bar columns: BEFORE high, AFTER low */}
      <g>
        {[230, 200, 215, 240, 180, 210].map((h, i) => (
          <rect key={`b-${i}`} x={40 + i * 22} y={250 - h} width="14" height={h} fill="currentColor" opacity="0.28"/>
        ))}
        {[60, 70, 55, 80, 50, 65].map((h, i) => (
          <rect key={`a-${i}`} x={220 + i * 22} y={250 - h} width="14" height={h} fill="currentColor"/>
        ))}
        <line x1="180" y1="260" x2="180" y2="40" stroke="currentColor" strokeDasharray="2 4" opacity="0.4"/>
      </g>
      <g fontFamily="var(--font-mono)" fontSize="8" fill="currentColor" opacity="0.55">
        <text x="40" y="275">MAGENTO · BEFORE</text>
        <text x="220" y="275">SHOPIFY PLUS · AFTER</text>
      </g>
    </svg>
  </div>
);

/* ---------- TESTIMONIAL / TRUST ---------- */
const TrustSection = () => (
  <section className="section trust-section">
    <div className="container">
      <div className="section-label">
        <span className="num">05 — In Their Words</span>
        <span className="ttl">What merchants say</span>
      </div>
      <blockquote className="quote">
        <p className="display quote-text">
          “They didn't sell us a migration. They sold us <em>certainty</em> — and delivered it. Cutover happened on a Tuesday morning. We didn't lose a sale.”
        </p>
        <footer className="quote-foot">
          <span className="mono">— Ops Director, mid-market apparel brand</span>
        </footer>
      </blockquote>
    </div>
  </section>
);

/* ---------- CTA STRIP ---------- */
const CTASection = () => (
  <section className="section cta-section">
    <div className="container">
      <div className="cta-box">
        <span className="eyebrow" style={{ marginBottom: 32, display: "block" }}>06 — Start Here</span>
        <h2 className="display cta-headline">
          Book a 30-minute<br />
          <em>migration audit.</em>
        </h2>
        <p className="cta-sub">
          We'll review your current platform, flag the risks, and tell you — honestly — whether a migration makes sense right now. No deck, no pitch, no obligation.
        </p>
        <div className="hero-actions" style={{ marginTop: 36 }}>
          <a href="contact.html" className="btn btn-primary">Book the audit <span className="arrow">→</span></a>
          <a href="mailto:business@turnaroundconsulting.co.in" className="btn btn-ghost">Email us instead</a>
        </div>
      </div>
    </div>
  </section>
);

/* =================== APP =================== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "navy",
  "density": "spacious",
  "typeset": "serif",
  "heroVariant": "slats"
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.dataset.theme = tweaks.theme;
    document.documentElement.dataset.density = tweaks.density;
    document.documentElement.dataset.typeset = tweaks.typeset;
  }, [tweaks]);

  return (
    <>
      <NavBar active="home" />
      <main data-screen-label="Home">
        <HeroTop />
        <FrameworkSection variant={tweaks.heroVariant} />
        <ServicesSection />
        <CaseStudyTeaser />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio label="Palette" value={tweaks.theme} onChange={(v) => setTweak("theme", v)}
            options={[
              { value: "sky", label: "Sky" },
              { value: "cream", label: "Cream" },
              { value: "navy", label: "Navy" },
              { value: "dark", label: "Dark" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Hero · Framework Variant">
          <TweakRadio label="Layout" value={tweaks.heroVariant} onChange={(v) => setTweak("heroVariant", v)}
            options={[
              { value: "slats", label: "Slats" },
              { value: "stack", label: "Stack" },
              { value: "orbit", label: "Orbit" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Typography">
          <TweakRadio label="Pairing" value={tweaks.typeset} onChange={(v) => setTweak("typeset", v)}
            options={[
              { value: "serif", label: "Editorial" },
              { value: "modern", label: "Modern" },
              { value: "editorial", label: "Fraunces" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Density">
          <TweakRadio label="Spacing" value={tweaks.density} onChange={(v) => setTweak("density", v)}
            options={[
              { value: "spacious", label: "Spacious" },
              { value: "compact", label: "Compact" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
