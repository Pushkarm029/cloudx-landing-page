"use client"

import { useState } from "react";
import { Check } from "lucide-react";

const Pricing = ({ handleBack, handleContinue }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "On The Go",
      price: "€19,90",
      description: "Get organized and set up simple sales processes",
      iconColor: "green-500",
      features: [
        "Lead, deal and contact management",
        "Pipeline, calendar and products management",
        "Limited custom fields, open deals and reports",
        "User and company goals",
        "Smart email BCC inbox",
        "24/7 live chat support",
      ],
    },
    {
      name: "Gold",
      price: "€34,90",
      description: "Scale quickly using easy-to-use email and automation",
      iconColor: "yellow-500",
      features: [
        "Full two-way email sync with open and click tracking",
        "Group emailing and email scheduling",
        "Email templates with merge fields",
        "Workflow builder with triggered automations",
        "Meeting scheduling automation",
        "Highlight important custom fields",
        "Enrich contact data with one smart click",
      ],
      plus: "ESSENTIAL PLAN, PLUS:",
    },
    {
      name: "Platinum",
      price: "€59,90",
      description: "Everything you need to boost performance and revenue",
      iconColor: "blue-500",
      features: [
        "Send, track and e-sign contracts, proposals and quotes",
        "Smart document templates with merge fields",
        "Revenue projection and contact timeline views",
        "Forecast and subscription reporting",
        "Create reports with required custom field data",
        "Custom user permission set and visibility groups",
        "Teams and team goals",
      ],
      plus: "ADVANCED PLAN, PLUS:",
      recommended: true,
      current: true,
    },
  ];

  const handlePlanClick = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted grid columns */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 flex flex-col h-full relative transition-all duration-300 ${
              plan.name === selectedPlan ? "scale-105" : "scale-100"
            } ${plan.recommended ? "relative" : ""}`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-1 text-sm font-medium">
                RECOMMENDED
              </div>
            )}
            <div className={`mb-6 ${plan.recommended ? "mt-4" : ""}`}>
              <div className="w-12 h-12 mb-4">
                <svg viewBox="0 0 24 24" className={`text-${plan.iconColor} w-full h-full`}>
                  <path
                    fill="currentColor"
                    d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3 c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768 C18.184,8.34,12,3,12,3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
              <div className="flex items-baseline mb-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2 text-sm">Per seat/month</span>
              </div>
            </div>

            <button
              onClick={() => handlePlanClick(plan.name)}
              className={`w-full py-2 ${
                plan.current
                  ? "bg-blue-100 text-blue-700"
                  : "border border-gray-700 text-gray-300"
              } rounded-md font-medium mb-6`}
            >
              {plan.current ? "Current plan" : "Choose plan"}
            </button>

            <div className="text-sm">
              {plan.plus && (
                <p className="uppercase text-gray-500 font-medium text-xs mb-4">{plan.plus}</p>
              )}

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex">
                    <Check
                      className={`h-5 w-5 ${
                        plan.recommended && plan.current
                          ? "text-blue-500"
                          : "text-gray-500"
                      } mr-2 flex-shrink-0`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="text-blue-500 mt-4">See all features</button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-400 font-medium"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        <div className="flex items-center">
          <span className="text-gray-400 mr-2">
            Next estimated invoice (1 seat) €59,90
          </span>
          <button
            onClick={handleContinue}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;