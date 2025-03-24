"use client";

import GradientButton from "./ui/GradientButton";

export default function HeroSectionWithNavbar() {
  return (
    <div className="relative bg-black bg-[url('/bg-gradient.png')] bg-no-repeat bg-center bg-cover min-h-screen w-full flex flex-col text-white items-center justify-center px-6 md:px-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center w-full max-w-4xl mt-32 md:mt-56">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Experience State-of-the-Art Innovation in
          <span className="text-blue-200"> Online Gaming</span>
        </h1>
        <p className="text-white mt-4 text-base md:text-lg max-w-2xl">
          CloudX delivers the ultimate online gaming experience with cutting-edge technology—offering near-zero latency, zero downtime, and instant access with no wait time.
        </p>
      </div>

      {/* Video Section */}
      <div className="mt-8 md:mt-12 w-full max-w-4xl mb-8">
  <div className="relative rounded-md overflow-hidden w-full aspect-[16/9]">
    <video
      src="/100mill.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover rounded-md"
    />
    {/* Stronger Gradient Overlay */}
    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/95 to-transparent"></div>
  </div>
</div>



      {/* Buttons Section */}
      <div className="mt-6 md:mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-12">
        <GradientButton className="h-12 w-full md:w-auto">
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

        <GradientButton className="h-12 w-full md:w-auto">
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
