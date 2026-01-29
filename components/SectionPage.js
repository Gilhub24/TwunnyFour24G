export default function SectionPage({ title, subtitle, bullets }) {
  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">{title}</h1>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>

      {bullets && bullets.length > 0 && (
        <div className="section-grid">
          {bullets.map((item, idx) => (
            <div key={idx} className="section-card">
              <h2 className="section-card-title">{item.title}</h2>
              <p className="section-card-body">{item.body}</p>
              {item.cta && (
                <button className="btn-primary">
                  {item.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
