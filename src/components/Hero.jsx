import heroImg from "/images/hero.png";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
          <img src={heroImg} alt="Hero" className="hero-bg" />
      <div className="hero-overlay"></div>

      {/* Navbar */}
      <nav className="hero-nav">
        <div className="nav-left">
          <span className="logo"><img src="/images/logo.png"/></span>
        </div>

        <div className="nav-center">
          <button className="active">Home</button>
          <button>Services</button>
          <button>Companies</button>
          <button>About</button>
          <button>Contacts</button>
          <button>Reviews</button>
        </div>

        <div className="nav-right">
          <button className="nav-cta"><img src="/images/call.png"/></button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          Find Your Perfect <br />
          Roofing Company <br />
          in Seconds
        </h1>

        <p>
          Compare top-rated roofing contractors in your area. Get multiple
          quotes, read verified reviews, and make an informed decision all in
          one place.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Get Free Quotes →</button>
          <button className="btn-secondary">Compare Companies</button>
        </div>

        <div className="hero-badges">
          <span><img className="imag" src="/images/Frame1.png"/>   Fast Response</span>
          <span><img className="imag" src="/images/Frame2.png"/>   Verified Contractors</span>
          <span><img className="imag" src="/images/Frame3.png"/>   100% Free Services</span>
        </div>
      </div>
    </section>
  );
}
