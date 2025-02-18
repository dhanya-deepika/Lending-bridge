import React from "react";
import "../Styles/Insights.css"; // Ensure this file exists

const insights = [
  {
    id: 1,
    image: "/images/insight1.jpg",
    title: "A Broker's Guide to Success",
    date: "Oct-11-2024",
    description:
      "Unlock essential strategies for thriving as a broker, from effective communication to leveraging technology. Enhance your value and build lasting client relationships to achieve your professional goals.",
  },
  {
    id: 2,
    image: "/images/insight2.jpg",
    title: "A Broker's Guide to Success",
    date: "Oct-11-2024",
    description:
      "Unlock essential strategies for thriving as a broker, from effective communication to leveraging technology. Enhance your value and build lasting client relationships to achieve your professional goals.",
  },
  {
    id: 3,
    image: "/images/insight3.jpg",
    title: "A Broker's Guide to Success",
    date: "Oct-11-2024",
    description:
      "Unlock essential strategies for thriving as a broker, from effective communication to leveraging technology. Enhance your value and build lasting client relationships to achieve your professional goals.",
  },
];

const InsightsSection = () => {
  return (
    <section className="insights-section">
      <h2 className="insights-title">Latest Insights</h2>

      <div className="insights-wrapper">
        {/* Left Text Section */}
        <div className="insights-text">
          <p>
            Explore current trends and expert perspectives in our latest
            insights
          </p>
          <button className="explore-btn">Explore More</button>
        </div>

        {/* Background Design Elements */}
        <div className="dots-bg"></div>
        <div className="blue-bg"></div>

        {/* Insights Cards */}
        <div className="insights-container">
          {insights.map((insight) => (
            <div key={insight.id} className="insight-card">
              <img src={insight.image} alt={insight.title} />
              <div className="insight-content">
                <h3 className="insight-title">{insight.title}</h3>
                <p className="insight-date">{insight.date}</p>
                <p className="insight-description">{insight.description}</p>
                <button className="read-more-btn" onClick={() => alert("Feature coming soon!")}>
                Read More.....
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="nav-btn">◀️</button>
        <button className="nav-btn">▶️</button>
      </div>
    </section>
  );
};

export default InsightsSection;
