import React, { useState } from "react";
import "../Styles/HighlightsSection.css";
import PiggyBankImg from "../../Assets/PiggyBank.png"; 
import ActiveLoansImg from "../../Assets/ActiveLoans.png"; 
import LoanCompletionImg from "../../Assets/LoanCompletion.png"; 
import NACFBLogo from "../../Assets/NACFB.png";
import FIBALogo from "../../Assets/FIBA.png";
import FCALogo from "../../Assets/FCA.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HighlightsSection = () => {
  // Award Carousel Data
  const awards = [
    {
      text: `"Your company's ability to innovate and exceed expectations is why we keep coming back. This award is a well-deserved recognition of your outstanding work."`,
    },
    {
      text: `"Excellence in customer service and financial solutions has truly set your company apart in the industry."`,
    },
    {
      text: `"A remarkable achievement! Your dedication to providing top-tier solutions deserves this recognition."`,
    },
  ];

  const [currentAward, setCurrentAward] = useState(0);

  const prevAward = () => {
    setCurrentAward((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
  };

  const nextAward = () => {
    setCurrentAward((prev) => (prev === awards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="HighlightsSection">
      {/* Our Highlights */}
      <h2 className="Highlights-title">Our Highlights</h2>
      <div className="Highlights-container">
        <div className="Highlight-item">
          <img src={PiggyBankImg} alt="Loans to Date" />
          <p>Loans to Date: 350</p>
        </div>
        <div className="Highlight-item">
          <img src={ActiveLoansImg} alt="Active Loans" />
          <p>£55 Million plus Active Loans</p>
        </div>
        <div className="Highlight-item">
          <img src={LoanCompletionImg} alt="Loan Completion" />
          <p>Loan Completions – 12 Hours – 5 Working Days</p>
        </div>
      </div>

      {/* Affiliations */}
      <div className="Affiliations-container">
        <h3>Our Affiliations:</h3>
        <div className="Affiliations-logos">
          <img src={NACFBLogo} alt="NACFB" />
          <img src={FIBALogo} alt="FIBA" />
          <img src={FCALogo} alt="FCA" />
        </div>
      </div>

      {/* Awards Carousel */}
      <div className="Awards-container">
        <h3>Awards</h3>
        <div className="Awards-carousel">
          <button onClick={prevAward} className="carousel-button">
            <FaArrowLeft />
          </button>
          <div className="Awards-card">
            <p>{awards[currentAward].text}</p>
          </div>
          <button onClick={nextAward} className="carousel-button">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
