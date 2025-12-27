import "../styles/Services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>
          Comprehensive Roofing <br />
          Services
        </h2>

        <div className="services-text">
          <h4>Services</h4>
          <p>
            Infinity Roofer delivers a wide range of services designed
            to meet the specific needs of homeowners, property managers,
            and commercial developers.
          </p>
        </div>
      </div>

      <hr className="services-divider" />

      <div className="services-cards">
        <div className="service-card">
          <img src="/images/service1.png" alt="Roof Inspection" />
          <h3>Roof Inspections</h3>
          <p>
            A proper inspection is the cornerstone of a roofing system.
            <strong> More...</strong>
          </p>
          <button className="btn-outline">Book Now ↗</button>
        </div>

        <div className="service-card active">
          <img src="/images/service2.png" alt="Roof Repair" />
          <h3>Roof Repairs</h3>
          <p>
            From cracked shingles to minor leaks, our licensed and certified
            roofing team handles it all. <strong>More...</strong>
          </p>
          <button className="btn-primary">Book Now ↗</button>
        </div>

        <div className="service-card">
          <img src="/images/service3.png" alt="Roof Replacement" />
          <h3>Roof Replacement</h3>
          <p>
            If your roof is over 20 years old or has sustained damage,
            replacement may be needed. <strong>More...</strong>
          </p>
          <button className="btn-outline">Book Now ↗</button>
        </div>
      </div>
    </section>
  );
}
