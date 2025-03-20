"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";

export default function PricingTable() {
  useEffect(() => {
    document.querySelectorAll(".pricing-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        let x = ((e.clientX - left) / width) * 100 + "%";
        let y = ((e.clientY - top) / height) * 100 + "%";

        card.style.setProperty("--blurX", x);
        card.style.setProperty("--blurY", y);
      });
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center md:flex-row md:justify-center gap-6 py-12 bg-black text-white">
      {/* Free Tier */}
      <PricingCard
        title="On The Go"
        price="$2"
        description="Free for all users"
        features={[
          "3 Projects", "Record & Export", "1080p, High quality, 30 FPS",
          "Up to 5 mins recordings", "10 MB video/audio clips", "500 MB storage"
        ]}
        buttonText="Join Waitlist"
        buttonClass="bg-gradient-to-b from-white/10 to-black "
      />

      {/* Pro Tier (Blue Button) */}
      <PricingCard
        title="Gold"
        price="$40"
        description="billed yearly"
        discount="$65"
        features={[
          "Unlimited Projects", "Record & Export", "4K, Perfect quality, 60 FPS",
          "Unlimited recordings", "500 MB video/audio clips", "50 GB storage",
          "AI Voices (120 mins per month)", "Image/Video Generation, Chat, Notes ",
          "Remove background noise", "Transcribe Audio/Video", "Premium backgrounds and videos"
        ]}
        buttonText="Become an Early Supporter"
        buttonClass="bg-blue-600 hover:bg-blue-700"
      />

      {/* Pro+ Tier */}
      <PricingCard
        title="Platinum"
        price="$100"
        description="billed yearly"
        discount="$140"
        features={[
          "Unlimited Projects", "Record & Export", "4K, Perfect quality, 60 FPS",
          "Unlimited recordings", "1 GB video/audio clips", "100 GB storage",
          "AI Voices (240 mins per month)", "Image/Video Generation, Chat, Notes ",
          "Remove background noise", "Transcribe Audio/Video", "Premium backgrounds and videos"
        ]}
        buttonText="Become an Early Supporter"
        buttonClass="bg-gradient-to-b from-white/10 to-black "
      />
    </div>
  );
}

function PricingCard({ title, price, description, discount, features, buttonText, buttonClass }) {
  return (
    <div className="pricing-card flex flex-col h-full p-6 rounded-lg bg-zinc-900 bg-opacity-70 backdrop-blur-lg relative overflow-hidden mx-3">
      <div className="glow-effect"></div>

      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <hr className="border-gray-600 border-1 w-full mb-4" />

      <div className="mb-6">
        <p className="text-3xl font-bold flex items-center">
          {price} {discount && <span className="text-zinc-500 text-lg line-through ml-2">{discount}</span>}
          <span className="text-zinc-400 text-lg font-normal ml-2">/ month / user</span>
        </p>
        <p className="text-zinc-400">{description}</p>
      </div>

      <div className="space-y-4 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} text={feature} index={index} />
        ))}
      </div>

      <button className={`mt-auto w-full py-2 rounded-xl ${buttonClass} text-white`}>
        {buttonText}
      </button>
    </div>
  );
}

function Feature({ text, index }) {
  return (
    <div className="flex items-start">
      <div className="h-4 w-4 flex items-center justify-center bg-gray-300 rounded-full mr-2">
        <Check className="h-3 w-3 text-black" />
      </div>
      <span className={`text-sm ${index < 3 ? "text-white font-bold" : "text-gray-400"}`}>{text}</span>
    </div>
  );
}