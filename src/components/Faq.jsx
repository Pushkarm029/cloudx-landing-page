"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

function cn(...inputs) {
  return clsx(inputs);
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Is Seline GDPR compliant?",
      answer:
        "Yes, Seline is fully GDPR compliant. We process all data in compliance with European data protection regulations and do not collect any personally identifiable information.",
    },
    {
      question: "Is Seline a cookie-less analytics tool?",
      answer:
        "Yes, Seline operates without using cookies for tracking visitors. This makes it more privacy-friendly and reduces the compliance burden for website owners.",
    },
    {
      question: "Do I need a cookie banner or consent when using Seline?",
      answer:
        "No, since Seline does not use cookies for tracking, you typically don't need to display a cookie consent banner when using our analytics solution alone.",
    },
    {
      question: "Does Seline have a free plan?",
      answer:
        "Yes, Seline offers a free plan with basic analytics features for websites with limited traffic. Paid plans are available for sites with higher traffic volumes or those requiring advanced features.",
    },
    {
      question: "How Seline compares to Google Analytics?",
      answer:
        "Unlike Google Analytics, Seline focuses on privacy-first analytics without complex setup. We provide essential metrics without collecting personal data, making compliance easier while still delivering actionable insights.",
    },
    {
      question: "How Seline compares to Plausible, Fathom, or similar tools?",
      answer:
        "Seline offers similar privacy-focused analytics to Pl-ausible and Fathom, but with our own unique approach to data visualization and insights. We focus on simplicity and actionable metrics for website owners.",
    },
    {
      question: "Who is behind Seline?",
      answer:
        "Seline was created by a team of privacy advocates and web analytics experts committed to providing website owners with valuable insights while respecting visitor privacy.",
    },
  ];

  return (
    <div className="w-full bg-black text-white">
      <div className="mx-auto px-4 py-12 max-w-6xl mt-32 mb-32">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading), "roobert", "Roobert Fallback", sans-serif' }}>Questions & answers</h2>
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div key={index} className={`pb-2 ${index === 0 ? 'mt-8' : ''}`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center w-full text-left py-1 focus:outline-none"
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-blue-500 transition-transform duration-200 mr-2",
                    openIndex === index ? "transform rotate-180" : ""
                  )}
                />
                <span className="text-lg font-medium" style={{ fontFamily: 'var(--font-heading), "roobert", "Roobert Fallback", sans-serif' }}>{item.question}</span> {/* Changed text-base to text-lg */}
              </button>
              <div
                className={cn(
                  "mt-1 transition-all duration-200 overflow-hidden",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="py-1 text-sm text-gray-400" style={{ fontFamily: 'var(--font-heading), "roobert", "Roobert Fallback", sans-serif' }}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}