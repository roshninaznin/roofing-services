import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section">
      {/* Top Content */}
      <div className="about-container">
        {/* Image */}
        <div className="about-image">
          <img src="/images/about.png" alt="Roof workers" />
        </div>

        {/* Text */}
        <div className="about-content">
          <span className="about-badge">● Who We Are ?</span>

          <h2>About RoofFixer</h2>

          <p>
            We're not just another roofing contractor we're a contractor
            certified by GAF, serving both residential and commercial clients
            with precision, care, and unmatched professionalism.
          </p>

          <p>
            Whether you're looking for a minor roof repair, a full roof system
            replacement, or planning a new roofing project, our team is ready
            to help every step of the way.
          </p>

          <button className="about-btn">
            Learn More →
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        <div>
          <h3>10K+</h3>
          <span>Happy Customers</span>
        </div>

        <div>
          <h3>450+</h3>
          <span>Verified Contractors</span>
        </div>

        <div className="divider"></div>

        <div>
          <h3>99%</h3>
          <span>Satisfaction Rate</span>
        </div>
      </div>
    </section>
  );
}
