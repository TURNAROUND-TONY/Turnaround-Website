/* Scroll reveal — opt-in via .sr class.
   Auto-tags common section/header elements. Respects prefers-reduced-motion. */
(function () {
  if (typeof window === "undefined") return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const TAGS = [
    ".section-label",
    ".case-card",
    ".svc-row",
    ".checklist-item",
    ".principle",
    ".platform",
    ".cs-article",
    ".stats-block",
    ".framework-intro",
    ".about-intro",
    ".cta-box",
    ".services-grid > .service-card",
    ".orbit-rail",
    ".hero-stack-rows",
    ".slats-grid",
    ".hero-marquee",
  ];

  function tag() {
    document.querySelectorAll(TAGS.join(",")).forEach((el) => {
      if (!el.classList.contains("sr") && !el.dataset.srSkip) el.classList.add("sr");
    });
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  function observe() {
    document.querySelectorAll(".sr:not(.is-in)").forEach((el) => io.observe(el));
  }

  function init() {
    tag();
    observe();
    // React mounts after script — observe again on a short delay
    setTimeout(() => { tag(); observe(); }, 100);
    setTimeout(() => { tag(); observe(); }, 400);
    setTimeout(() => { tag(); observe(); }, 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
