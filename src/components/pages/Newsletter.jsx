import React from "react";
import "../Styles/NewsLetter.css";
import newsletterImg from "../../Assets/NewsLetter.png"; // Importing image

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      {/* Left Newsletter Box */}
      <div className="newsletter-box">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-subtitle">
          Subscribe to get the latest insights and updates.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button className="subscribe-btn">Subscribe</button>
      </div>

      {/* Right Image (Outside Section) */}
      <img src={newsletterImg} alt="Newsletter Illustration" className="newsletter-image" />
    </section>
  );
};

export default Newsletter;
