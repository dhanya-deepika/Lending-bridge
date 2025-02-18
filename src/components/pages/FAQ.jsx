import React, { useState } from "react";
import "../Styles/FAQ.css";

const faqs = [
  {
    question: "What is the difference between a buyer’s agent and a seller’s agent?",
    answer:
      "A buyer’s agent represents the buyer, helping them find and purchase a property, while a seller’s agent represents the seller, assisting in listing and selling their property.",
  },
  {
    question: "What is the first step in buying a home?",
    answer: "The first step in buying a home is getting pre-approved for a mortgage.",
  },
  {
    question: "What is a real estate appraisal?",
    answer:
      "A real estate appraisal is a professional assessment of a property's value, usually conducted before a mortgage is approved.",
  },
  {
    question: "What is escrow in real estate?",
    answer:
      "Escrow is a financial arrangement where a third party holds and regulates payment until both parties meet contract conditions.",
  },
  {
    question: "How much is a typical down payment on a home?",
    answer:
      "A typical down payment ranges from 5% to 20% of the home’s purchase price, depending on the loan type.",
  },
  {
    question: "What is house flipping?",
    answer:
      "House flipping is the process of purchasing a home, renovating it, and selling it for a profit.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Default to null, so no FAQ is open initially

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the selected FAQ
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden transition-all ${
              openIndex === index ? "open" : "closed"
            }`}
          >
            {/* Question Section */}
            <button
              className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>

            {/* Answer Section */}
            {openIndex === index && (
              <div className="px-6 py-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
