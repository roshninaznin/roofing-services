import "../styles/WhyChoose.css";

export default function WhyChoose() {
  return (
    <section className="why-choose-container">
      <div className="why-choose-content">
        <div className="why-choose-image">
          <img 
            src="/images/whyUs.png" 
            alt="Roofer working on shingles" 
          />
        </div>

        <div className="why-choose-text">
          <h1>Why Address Roof Issues Early?</h1>
          <p className="intro-text">
            Waiting to fix your roof can turn a small issue into a full-blown crisis. 
            Here's why early intervention is essential:
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <span className="checkmark">✔</span>
              <div>
                <h3>Damage compounds over time.</h3>
                <p>A tiny leak can lead to rot, insulation loss, and foundation problems.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="checkmark">✔</span>
              <div>
                <h3>Insurance complications.</h3>
                <p>Failing to act may void your policy or limit coverage due to perceived neglect.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="checkmark">✔</span>
              <div>
                <h3>Higher costs.</h3>
                <p>Emergency services cost more than routine maintenance.</p>
              </div>
            </div>
          </div>

          <button className="book-now-btn">
            Book Now <span className="arrow">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}