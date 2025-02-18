import React from "react";
import imgCalc from "../../Assets/LoacCalc.png";
import imgVector from "../../Assets/Vector.png"; 
import "../Styles/BorrowCalculator.css"; 

const LoanCalculatorSection = () => {
  return (
    <div className="loan-calculator-wrapper">
      <div className="upper-section">
        <div className="text-image-grid">
          
          <div className="text-content">
            <h2>Calculate how much you can borrow?</h2>
            <p>
              A bridging calculator estimates short-term loan costs, including
              monthly interest and total repayment, using inputs like loan
              amount, interest rate, and term.
            </p>
            
           
            <div className="calculate-button">
              <img src={imgVector} alt="Calculate" className="button-icon" />
              <span className="calculate-text">Calculate Now</span>
            </div>

          </div>

          
          <div className="image-content">
            <img src={imgCalc} alt="Loan Calculator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorSection;
