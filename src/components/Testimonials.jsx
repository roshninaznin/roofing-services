import "../styles/Testimonials.css";

const testimonialData = [
  {
    id: 1,
    stars: 5,
    title: "Exceptional Service!",
    text: "I can only say wonderful things about our experience with JD! They are passionate, patient, knowledgeable and incredibly dedicated to their work and their clients. W...",
    name: "Wade Warren",
    location: "USA, California",
    img :"/images/Profile1.png" 

  },
  {
    id: 2,
    stars: 5,
    title: "Efficient and Reliable",
    text: "We built a beautiful custom home with Jackson Dwelling's. ( The Shed House ). We could not be happier. It was built in a timely manner and the quality is superb.",
    name: "Emelie Thomson",
    location: "USA, Florida",
    img: "/images/Profile2.png"
  },
  {
    id: 3,
    stars: 5,
    title: "Trusted Advisors",
    text: "JD built our dream country-style home in Gisborne and we couldn't be happier with the result. We received excellent communication throughout the build and...",
    name: "John Mans",
    location: "USA, Nevada",
    img: "/images/Profile3.png"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="header-left">
          <h1>What Our Clients Say</h1>
          <p>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
        </div>
        <button className="view-all-btn">View All Testimonials ↗</button>
      </div>

      <div className="testimonials-grid">
        {testimonialData.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="star-rating">
              {[...Array(item.stars)].map((_, i) => (
                <span key={i} className="star-icon">★</span>
              ))}
            </div>
            <h3>{item.title}</h3>
            <p className="testimonial-body">{item.text}</p>
            <div className="user-profile">
              <img src={item.img} alt={item.name} className="avatar" />
              <div className="user-info">
                <span className="user-name">{item.name}</span>
                <span className="user-location">{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-footer">
        <span className="pagination">01 <small>of 10</small></span>
        <div className="nav-arrows">
          <button className="arrow-btn prev">←</button>
          <button className="arrow-btn next active">→</button>
        </div>
      </div>
    </section>
  );
}
