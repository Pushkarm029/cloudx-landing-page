"use client";

import GradientButton from "./ui/GradientButton";
import Image from "next/image";

export default function HeroSectionWithNavbar() {
  return (
    <div className="relative bg-black background: url('/bg-gradient.png') no-repeat center top / cover; min-h-screen w-full flex flex-col text-white items-center justify-center px-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center w-full max-w-4xl mt-56 ">
        <h1 className="text-5xl font-bold leading-tight">
          Experience State-of-the-Art Innovation in
          <span className="text-blue-200"> Online Gaming</span>
        </h1>
        <p className="text-white mt-4 text-lg max-w-2xl">
          CloudX delivers the ultimate online gaming experience with cutting-edge technology—offering near-zero latency, zero downtime, and instant access with no wait time.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-12 w-full max-w-4xl">
        <div className="relative rounded-md overflow-hidden w-full">
          <Image
            alt="Huly App"
            src="/huly2.jpg"
            width={1024}
            height={569}
            priority
            className="w-full rounded-md"
          />
        </div>
      </div>

      {/* Buttons Section (Try it Free + Learn More) */}
      <div className="mt-8 flex space-x-4  mb-32">
        <GradientButton className="h-10">
          <span className="text-[#5A250A]">Get A Demo</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 9"
            className="h-[9px] w-[17px] text-[#5A250A]"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
              clipRule="evenodd"
            />
          </svg>
        </GradientButton>

        {/* New Secondary Button (No Effects, Just Outline) */}
        <GradientButton className="h-10">
          <span className="text-[#5A250A]">Sign Up</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 9"
            className="h-[9px] w-[17px] text-[#5A250A]"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
              clipRule="evenodd"
            />
          </svg>
        </GradientButton>
      </div>

      
      </div>
    
  );
}
