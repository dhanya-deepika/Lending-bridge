import React from "react";
import "../Styles/ProductSection.css";  
import BuildingBlock from "../../Assets/BuildingBlock.png";
import ExploreOurProduct from "../../Assets/ExploreOurProducts.png";
import CrossIcon from "../../Assets/Cross.png"; 
import ReadMore from "../../Assets/ReadMore.png";

const ProductSection = () => {
  const products = [
    { title: "Residential Bridges & BTL Bridges" },
    { title: "Commercial Bridge Loans" },
    { title: "Semi-Commercial Bridges" },
    { title: "Residential Bridges & BTL Bridges"},
    { title: "Commercial Bridge Loans"},
  ];

  return (
    <div className="ProductSection-container">
      {/* Centered Heading with Cross Icon */}
      <h2 className="ProductSection-title">
        Explore Our Products
      </h2>

      {/* Content Section (Grid Layout) */}
      <div className="ProductSection-grid">
        {/* Left Side - Text Content */}
        <div className="ProductSection-content">
          <p className="ProductSection-description">
            Discover our diverse range of innovative solutions designed to meet your needs.
            Our products are crafted with care and precision. Start your journey today and 
            find the perfect solution for you!
          </p>

          {/* Explore Our Products with Image */}
          <div className="ProductSection-explore">
            <img src={ExploreOurProduct} alt="Explore Our Products" className="Explore-Our-Products-img" />
            <img src={CrossIcon} alt="Close Icon" className="Cross-icon" />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="ProductSection-image">
          <img src={BuildingBlock} alt="Illustration" className="BuildingBlock-img" />
        </div>
      </div>

      {/* Scrollable Product Cards Section */}
      <div className="ProductSection-scrollable">
        <div className="product-scroll-container">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center">
                <img src={ReadMore} alt="Read More" className="h-6" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
