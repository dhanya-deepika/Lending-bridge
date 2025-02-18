import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Styles/CaseStudies.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import images
import House1 from "../../Assets/House1.png";
import House2 from "../../Assets/House2.png";
import House3 from "../../Assets/House3.png";
import House4 from "../../Assets/House4.png";

const caseStudies = [
  {
    image: House1,
    location: "Birmingham",
    loanValue: "800,000",
    ltv: "70%",
    tags: ["Commercial", "Property purchase"],
  },
  {
    image: House2,
    location: "London",
    loanValue: "1,200,000",
    ltv: "65%",
    tags: ["Residential", "Bridge Loan"],
  },
  {
    image: House3,
    location: "Manchester",
    loanValue: "950,000",
    ltv: "75%",
    tags: ["Investment", "Development"],
  },
  {
    image: House4,
    location: "Liverpool",
    loanValue: "700,000",
    ltv: "60%",
    tags: ["Refinance", "Equity Release"],
  },
];

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="case-studies-container">
      <h2 className="title">Case Studies</h2>
      <div className="swiper-container-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0} // No gaps between images
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className={`case-study-card ${hoveredIndex === index ? "active" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={study.image} alt="Case Study" className="case-image" />
                <div className="overlay">
                  <p><strong>Location</strong> • {study.location}</p>
                  <p><strong>Value of loan</strong> • £{study.loanValue}</p>
                  <p><strong>LTV</strong> • {study.ltv}%</p>
                  <div className="tags">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev">
          <FaArrowLeft />
        </button>
        <button className="swiper-button-next">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
