import React from "react";
import "../Styles/About.css";
import BusinessLoanImg from "../../Assets/Business Loan 1.png";

const About = () => {
  return (
    <div className="about-section-container">
     <div className="about-image-container">
  <img
    src={BusinessLoanImg}
    alt="Bridging illustration"
    style={{ width: "531px", height: "353px",Top:"1080px",Left:"125px",padding:"100px" }}
  />
</div>

      <div className="about-section-text-container">
        <h2>About Us</h2>
        <p>
        Specializing in short-term bridging finance on all types of
        residential, commercial and semi-commercial properties. 
        Our solutions are made seamless, stress-free and simple 
        to follow
        </p>


        <p2>
        Our specialty lies in assessing each loan on its own merits 
        and working closely with our clients and brokers to ensure 
        deal completes without a hitch.
        </p2>
    

        <p3>
        With a dedicated relationship manager, you can expect 
        clear communication and quick processing times from start 
        to finish!
        </p3>
      </div>
    </div>
  );
};

export default About;
