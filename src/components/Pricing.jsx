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
    
    <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-black text-white">
  {/* Free Tier */}
  <div className="md:ml-18 flex-1">
    <PricingCard title="Free" price="$0" description="Free for all users" features={[
      "3 Projects", "Record & Export", "1080p, High quality, 30 FPS", "Up to 5 mins recordings", "10 MB video/audio clips", "500 MB storage"
    ]} buttonText="Join Waitlist" />
  </div>

  {/* Pro Tier */}
  <div className="flex-1">
    <PricingCard title="Pro" price="$14" description="billed yearly" discount="$20" features={[
      "Unlimited Projects", "Record & Export", "4K, Perfect quality, 60 FPS", "Unlimited recordings",
      "500 MB video/audio clips", "50 GB storage", "AI Voices (120 mins per month)",
      "Image/Video Generation, Chat, Notes (1,000,000 tokens per month)",
      "Remove background noise", "Transcribe Audio/Video", "Premium backgrounds and videos"
    ]} buttonText="Become an Early Supporter" />
  </div>

  {/* Pro+ Tier */}
  <div className="md:mr-18 flex-1">
    <PricingCard title="Pro+" price="$28" description="billed yearly" discount="$40" features={[
      "Unlimited Projects", "Record & Export", "4K, Perfect quality, 60 FPS", "Unlimited recordings",
      "1 GB video/audio clips", "100 GB storage", "AI Voices (240 mins per month)",
      "Image/Video Generation, Chat, Notes (2,000,000 tokens per month)",
      "Remove background noise", "Transcribe Audio/Video", "Premium backgrounds and videos"
    ]} buttonText="Become an Early Supporter" />
  </div>
</div>

    
  );
}

function PricingCard({ title, price, description, discount, features, buttonText }) {
  return (
    <div className="pricing-card flex-1 p-6 rounded-lg bg-zinc-900 bg-opacity-70 backdrop-blur-lg flex flex-col relative overflow-hidden">
      <div className="glow-effect"></div>

      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <div className="mb-6">
        <p className="text-3xl font-bold flex items-center">
          {price} {discount && <span className="text-zinc-500 text-lg line-through ml-2">{discount}</span>}
          <span className="text-zinc-400 text-lg font-normal ml-2">/ month / user</span>
        </p>
        <p className="text-zinc-400">{description}</p>
      </div>

      <div className="space-y-4 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} text={feature} />
        ))}
      </div>

      <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
        {buttonText}
      </button>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-start">
      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
      <span className="text-sm">{text}</span>
    </div>
  );
}