"use client";

import GradientButton from "./ui/GradientButton";
import Image from "next/image";

export default function HeroSectionWithNavbar() {
  return (
    <div className="relative bg-black min-h-screen w-full px-36 flex flex-col text-white mx-auto">
      {/* Hero Section */}
      <div className="relative flex-1 w-full flex flex-col items-start justify-center px-36 pt-60">
        <h1 className="text-4xl font-bold leading-tight">
        Experience State-of-the-Art Innovation in Online <br />
          <span className="text-blue-100">Gaming</span>
        </h1>
        <p className="text-white mt-4 text-lg max-w-xl">
        CloudX delivers the ultimate online gaming experience with cutting edge technology—offering near-zero latency, zero downtime, and instant access with no wait time.
        </p>
        <div className="mt-11 lg:mt-9 md:mt-7 sm:mt-5">
          <GradientButton>
            <span className="text-[#5A250A]">Try it Free</span>
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

        <div className="mt-14 w-full py-36 flex justify-start">
          <div className="relative rounded-md overflow-hidden w-full sm:w-[80%]">
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

        {/* Text Section */}
        <div className="absolute bottom-[200px] left-[152px] z-30 overflow-hidden text-sm tracking-snugger">
          <p className="mb-3.5 font-light leading-none text-white/60">
            Everything you need for productive team work:
          </p>
          <div className="w-full xs:flex xs:overflow-hidden">
            <ul className="flex flex-shrink-0 font-semibold leading-dense text-white xs:animate-infinityScroll">
              {[
                "Team Planner",
                "Project Management",
                "Virtual Office",
                "Chat",
                "Documents",
                "Inbox",
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative sm:shrink-0 xs:before:relative xs:before:mx-2 xs:before:inline-block xs:before:aspect-square xs:before:w-[3px] xs:before:rounded-full xs:before:bg-white/30 xs:before:align-middle"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
