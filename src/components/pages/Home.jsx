import React from "react";
import "../Styles/Home.css"; 
import img0 from "../../Assets/Group.png"; 
import img from "../../Assets/BannerImage.png";

const Home = () => {
  console.log("Home component rendered");

  return (
    <div className="home-container">
      <div className="home-text-section">
        <h1 className="primary-heading">Bridging</h1>
        <h2 className="secondary-heading">Now Made Simple</h2>
        <p className="primary-paragraph">
          Connecting you to decision-makers to give you full
          transparency of the complete end-to-end process.
        </p>
        <button className="secondary-button">
          <img src={img0} alt="Calculate"/> 
        </button>
      </div>
      <div className="home-image-container">
        <img src={img} alt="Bridging illustration" /> 
      </div>
    </div>
  );
};

export default Home;
