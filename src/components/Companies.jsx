import "../styles/Companies.css";

const companyData = [
  { id: 1, name: "Premier Roofing Solutions", highlighted: true },
  { id: 2, name: "Elite Roof Masters", highlighted: false },
  { id: 3, name: "Reliable Roofing Co.", highlighted: false },
  { id: 4, name: "Summit Roofing Experts", highlighted: false },
];

export default function Companies() {
  return (
    <section id="companies-section" className="companies-section">
      <div className="header-text">
        <h2>Top-Rated Roofing Companies</h2>
        <p>Compare verified contractors with proven track records. All companies are licensed, insured, and ready to serve you.</p>
      </div>

      <div className="company-grid">
        {companyData.map((company) => (
          <div key={company.id} className="company-card">
            <div className="card-header">
              <h3>{company.name}</h3>
              <div className="badge-icon"><img src="/images/Vector.png"/></div>
            </div>

            <div className="rating">
              <span className="star"><img src="/images/v1.png"/></span>
              <strong>4.9</strong> <span className="reviews">(342 reviews)</span>
            </div>

            <div className="details">
              <p><img src="/images/v2.png"/> Serving Metro Area</p>
              <p><img src="/images/v3.png"/> (555) 123-4567</p>
              <p><img src="/images/v4.png"/> info@premierroofing.com</p>
              <p><img src="/images/v5.png"/> 25 years in business</p>
            </div>

            <div className="specialties-label">Specialties:</div>
            <div className="tags">
              <span>Residential</span>
              <span>Commercial</span>
              <span>Emergency Repairs</span>
            </div>

            <button className={`quote-btn ${company.highlighted ? 'primary' : 'secondary'}`}>
              Request Quote from Premier
            </button>
          </div>
        ))}
      </div>

      <button className="show-more-btn">
        Show More <span>↗</span>
      </button>
    </section>
  );
}
