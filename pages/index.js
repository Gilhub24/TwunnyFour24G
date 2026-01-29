export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Secure your stack in <span className="hero-highlight">one place</span>.
          </h1>
          <p className="hero-body">
            Curated email and endpoint security components, bundled for speed, clarity, and real‑world protection.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">View bundles</button>
            <button className="btn-ghost">Talk about your stack</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-panel">
            <div className="hero-panel-header">Live posture snapshot</div>
            <div className="hero-panel-body">
              <div className="hero-metric">
                <span className="hero-metric-label">Email risk</span>
                <span className="hero-metric-value">High → fixable</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-label">Endpoint coverage</span>
                <span className="hero-metric-value">Partial</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-label">Time to harden</span>
                <span className="hero-metric-value">24–48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Bundles built for reality</h2>
          <p className="section-subtitle">
            Start from how you actually work: email, endpoints, and the gaps between them.
          </p>
        </div>

        <div className="section-grid">
          <div className="section-card">
            <h3 className="section-card-title">Email‑first</h3>
            <p className="section-card-body">
              Lock down phishing, spoofing, and payloads without slowing your people down.
            </p>
            <button className="btn-primary">Explore email security</button>
          </div>

          <div className="section-card">
            <h3 className="section-card-title">Endpoint‑first</h3>
            <p className="section-card-body">
              See, stop, and respond on every device that touches your data.
            </p>
            <button className="btn-primary">Explore endpoint security</button>
          </div>

          <div className="section-card">
            <h3 className="section-card-title">Full stack</h3>
            <p className="section-card-body">
              Combine email + endpoint into one opinionated, battle‑tested stack.
            </p>
            <button className="btn-primary">View full bundles</button>
          </div>
        </div>
      </section>
    </div>
  );
}
