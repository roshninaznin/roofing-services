import "../styles/Quote.css";

export default function Quote() {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <div className="quote-info">
          <h1>Get Your Free Roofing Quotes</h1>
          <p className="subtitle">
            Fill out the form and receive multiple competitive quotes from verified 
            contractors in your area. No obligation, completely free.
          </p>

          <div className="benefit-list">
            <div className="benefit-item">
              <div className="benefit-icon check"><img src="/images/Group1.png"/></div>
              <div>
                <h3>Fast Response Time</h3>
                <p>Receive quotes from multiple contractors within 24 hours</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon shield"><img src="/images/Group2.png"/></div>
              <div>
                <h3>Verified Contractors Only</h3>
                <p>All contractors are licensed, insured, and background-checked</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon home"><img src="/images/Group3.png"/></div>
              <div>
                <h3>No Obligation</h3>
                <p>Compare quotes and choose the best fit for your project</p>
              </div>
            </div>
          </div>

          <div className="why-box">
            <h4>Why Roofing Services</h4>
            <ul>
              <li>100% Free with no hidden charges</li>
              <li>All Contractors are licensed and insured</li>
              <li>No Obligation to accept any quotes</li>
              <li>Average saving of $1,000 – $1,200</li>
              <li>24 hours response guarantee</li>
            </ul>
          </div>
        </div>

        <div className="quote-form-card">
          <h2>Request Your Free Quotes</h2>
          <p>Tell us about your roofing project and we'll connect you with the best contractors</p>
          
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" placeholder="First name" />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@company.com" />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <div className="phone-input">
                <select><option>US</option></select>
                <input type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="form-group">
              <label>Project Type</label>
              <select className="full-select">
                <option>Select project type</option>
              </select>
            </div>

            <div className="form-group">
              <label>Property Address</label>
              <input type="text" placeholder="123 Main St. City, State ZIP" />
            </div>

            <div className="form-group">
              <label>Project Details</label>
              <textarea placeholder="Tell us more about your roofing needs..."></textarea>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="privacy" />
              <label htmlFor="privacy">You agree to our friendly privacy policy.</label>
            </div>

            <button type="submit" className="submit-btn">
              Get My Free Quotes <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
