import React from "react";
import "../Styles/LoanProcess.css";
import Step1 from "../../Assets/1.png";
import Step2 from "../../Assets/2.png";
import Step3 from "../../Assets/3.png";
import Step4 from "../../Assets/4.png";
import Step5 from "../../Assets/5.png";
import ViewOurProduct from "../../Assets/ViewOurProducts.png"; // Updated filename

const LoanProcess = () => {
  const steps = [
    {
      description: "Reach out to us directly or through your broker...",
      icon: Step1, 
    },
    {
      description: "Decision in Principle (DIP) issued...",
      icon: Step2, 
    },
    {
      description: "Property valuations and in-house legals instructed.",
      icon: Step3, 
    },
    {
      description: "Lending Bridge underwrites your deal & issues your loan agreement.",
      icon: Step4, 
    },
    {
      description: "Loan drawn down.",
      icon: Step5, 
    },
  ];
  
  const Card = ({ number, description, icon }) => {
    return (
      <div className="card">
        <span className="card-number">{number}</span>
        <div className="card-content">
          <img src={icon} alt={`Step ${number}`} className="card-icon" />
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="loan-process-container">
  <h2 className="loan-process-title"><h3>Loan Process</h3></h2>
  <div className="cards-grid">
    {steps.map((step, index) => (
      <Card key={index} number={index + 1} description={step.description} icon={step.icon} />
    ))}
  </div>
  {/* Centered button */}
  <div className="button-container">
    <button className="view-products-button">
      <img src={ViewOurProduct} alt="View Our Products Button" />
    </button>
  </div>
</div>

  );
};

export default LoanProcess;
