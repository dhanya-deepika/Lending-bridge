import React, { useState } from "react";
import "../Styles/Cards.css"; 
import Step1 from "../../Assets/UserTie.png";
import Step2 from "../../Assets/Fast.png";
import Step3 from "../../Assets/Transperent.png";
import Step4 from "../../Assets/Simple.png";
import Step5 from "../../Assets/Reliable.png";
import RunTime from "../../Assets/RunTime.png";



const cardsData = [
  { id: 1, description: "Speak to decision-makers directly", icon: Step1, title: "Speak to decision-makers", content: "Reaching the right people is key. By speaking directly with decision-makers, you ensure your message is heard by those who have the authority to act on it." },
  { id: 2, description: "Fast", icon: Step2, title: "Fast", content: "This direct approach accelerates decision-making, fosters mutual understanding, and builds strategic relationships—helping you secure opportunities faster." },
  { id: 3, description: "Transparent", icon: Step3, title: "Transparent", content: "We believe in open communication and clear processes. Transparency helps foster trust and efficiency in every interaction." },
  { id: 4, description: "Simple", icon: Step4, title: "Simple", content: "Our approach is streamlined and easy to understand, reducing complexity so you can focus on what matters most." },
  { id: 5, description: "Reliable", icon: Step5, title: "Reliable", content: "Trust is everything. We ensure consistency and dependability, so you can rely on us to deliver every time." },
];

const Card = ({ icon, description, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`cards-section-card ${isActive ? "active" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={icon} alt={description} />
      <p className="card-title">{description}</p>
    </div>
  );
};

const CardGroup = () => {
  const [activeId, setActiveId] = useState(2); // Default to "Fast"

  const activeCard = cardsData.find((card) => card.id === activeId);

  return (
    <div>
      {/* CARDS SECTION */}
      <div className="cards-container">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            description={card.description}
            isActive={activeId === card.id}
            onMouseEnter={() => setActiveId(card.id)}
            onMouseLeave={() => setActiveId(activeId)}
          />
        ))}
      </div>

      {/* CONTENT & IMAGE SECTION */}
      <div className="main-content-container">
        <div className="Fast">
          <h2>{activeCard?.title}</h2>
          <p>{activeCard?.content}</p>
        </div>
        <div className="image-content">
          <img src={RunTime} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
