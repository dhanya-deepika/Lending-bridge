import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import ContactUs from './components/pages/ContactUs';
import Home from "./components/pages/Home";
import OurProducts from "./components/pages/OurProducts";
import OurWorks from "./components/pages/OurWorks";
import About from "./components/pages/About";
import LoanProcess from "./components/pages/LoanProcess";
import BorrowCalculator from "./components/pages/BorrowCalculator";
import CardGroup from "./components/pages/CardGroup";
import ProductSection from "./components/pages/ProductSection";
import HighlightsSection from "./components/pages/HighlightsSection";
import CaseStudies from "./components/pages/CaseStudies";
import InsightsSection from "./components/pages/InsightsSection";
import Newsletter from "./components/pages/Newsletter";
import FAQ from "./components/pages/FAQ";

import './App.css'; // Import the CSS for responsive styles

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/works" element={<OurWorks />} />
      </Routes>
      <About />
      <LoanProcess />
      <BorrowCalculator />
      <CardGroup />
      <ProductSection />
      <HighlightsSection />
      <CaseStudies />
      <InsightsSection />
      <Newsletter />
      <FAQ />
    </>
  );
};

export default App;
