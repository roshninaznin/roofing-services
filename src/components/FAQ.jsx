import { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    id: 1,
    question: "What's the difference between a contractor certified by GAF and a regular roofer?",
    answer: "A contractor certified by GAF has undergone comprehensive training, adheres to strict installation best practices, and meets ongoing performance standards established by North America's largest roofing manufacturer."
  },
  {
    id: 2,
    question: "How long does a typical residential roofing project take?",
    answer: "Most residential projects take 1-3 days depending on the size and complexity of the roof."
  },
  {
    id: 3,
    question: "How much does a custom home typically cost?",
    answer: "Costs vary widely based on materials, square footage, and location. Contact us for a detailed estimate."
  },
  {
    id: 4,
    question: "How do you find a roofing contractor you can trust?",
    answer: "Look for licensing, insurance, manufacturer certifications (like GAF), and verified customer reviews."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Side: Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <span className="dot"></span> <b>FAQ</b>
          </div>
          <h1>Answers to your roofing questions</h1>
          <p>
            Find answers to common questions about Roofing services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={item.id} 
              className={`faq-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="faq-question-row">
                <h3>{item.question}</h3>
                <span className="toggle-icon">
                  {activeIndex === index ? "—" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
