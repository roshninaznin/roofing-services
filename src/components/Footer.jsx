import "../styles/Footer.css";

export default function Footer() {
  return (
    <section id="footer-section" className="footer-section">
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon"><img src="/images/logo.png"/></span>
          </div>
          <p className="footer-description">
            Stay updated with our latest Roof Service tips, service updates, and
            helpful articles on maintaining a spotless home.
          </p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Our Team</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Know More</h3>
          <ul>
            <li><a href="#support">Support</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & conditions</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Goes here" />
            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p>2025 "RoofFixer" All Rights Received</p>
      </div>
    </footer>
    </section>
  );
}
