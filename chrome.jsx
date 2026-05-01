/* Shared chrome — nav + footer for every page */

const NavBar = ({ active }) => {
  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "services.html", label: "Services", key: "services" },
    { href: "migrations.html", label: "Migrations", key: "migrations" },
    { href: "work.html", label: "Our Work", key: "work" },
    { href: "partners.html", label: "Partners", key: "partners" },
    { href: "blog.html", label: "Journal", key: "blog" },
    { href: "about.html", label: "About", key: "about" },
    { href: "contact.html", label: "Contact", key: "contact" },
  ];
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="index.html" className="nav-logo" aria-label="Turnaround home">
          <span className="dot"></span>
          <span>TURNAROUND</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.key} href={l.href} className={active === l.key ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="contact.html" className="nav-cta">Book Audit →</a>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-grid">
        <div>
          <div className="nav-logo" style={{ marginBottom: 20 }}>
            <span className="dot"></span>
            <span>TURNAROUND</span>
          </div>
          <p style={{ color: "var(--ink-soft)", maxWidth: "32ch", fontSize: 14, lineHeight: 1.6 }}>
            Migration-first Shopify Plus partner delivering stable, scalable commerce for businesses that can't afford to break.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span className="tag"><span className="live-dot"></span> Accepting Q3 projects</span>
          </div>
        </div>
        <div>
          <h5>Capabilities</h5>
          <ul>
            <li><a href="migrations.html">Platform Migrations</a></li>
            <li><a href="services.html">Shopify Plus Builds</a></li>
            <li><a href="services.html">B2B Storefronts</a></li>
            <li><a href="services.html">Performance & CRO</a></li>
          </ul>
        </div>
        <div>
          <h5>Studio</h5>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="work.html">Our Work</a></li>
            <li><a href="case-studies.html">Case Studies</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
            <li><a href="partners.html">Partners</a></li>
            <li><a href="blog.html">Journal</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:experts@turnaroundommerce.com">experts@turnaroundommerce.com</a></li>
            <li><a href="mailto:business@turnaroundconsulting.co.in">business@turnaroundconsulting.co.in</a></li>
            <li><a href="https://turnaroundommerce.com">turnaroundommerce.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Turnaround Commerce</span>
        <span>Shopify Plus · Migration · Architecture</span>
        <span>Made for merchants who can't afford downtime</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { NavBar, Footer });
