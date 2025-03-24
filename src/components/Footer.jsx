import GradientButton from "./ui/GradientButton";
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import Image from "next/image";
import "@fontsource/inter"; 

export default function HeroFooterSection() {
  return (
    <>
      {/* **Wrapper for Full Hero + Footer Section with Background** */}
      <div className="relative bg-black bg-[url('/cta.png')] bg-no-repeat bg-center bg-cover w-full">
        
        {/* **Super Smooth Gradient Fade Overlay** */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent"></div>

        {/* **Hero Section** */}
        <div className="relative w-full py-24 px-4 flex items-center justify-center z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Accelerate Your Gaming</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join financial analysts who use Fira to do more research in less time.
            </p>
            <div className="mt-8 items-center justify-center flex space-x-4 mb-16">
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
        </div>

        {/* **Footer Section** */}
        <footer className="relative -mt-20 py-40 px-60 flex justify-between items-start w-full gap-x-48 z-10">
  {/* Left Section */}
  <div className="flex flex-col ml-40 space-y-3 items-center">
    <div className="flex items-center space-x-2">
      <Image src="/logo.png" alt="CloudX Logo" width={24} height={24} />
      <h2 className="text-lg text-white font-bold">CloudX</h2>
    </div>
    <div className="flex space-x-3 text-white text-xl">
      <FaTwitter className="hover:text-white cursor-pointer" />
      <FaLinkedin className="hover:text-white cursor-pointer" />
      <FaGithub className="hover:text-white cursor-pointer" />
      <FaDiscord className="hover:text-white cursor-pointer" />
    </div>
    <div className="flex items-center space-x-2 text-sm border px-3 py-1 rounded-full text-white border-gray-300">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <span>All systems operational</span>
    </div>
  </div>

  {/* Right Section */}
  <div className="text-white/60 mr-40 flex flex-col items-center">
    <h3 className="text-white font-medium mb-2">Company</h3>
    <ul className="space-y-1 text-center">
      <li className="hover:text-white cursor-pointer hover:underline py-1.5">Support</li>
      <li className="hover:text-white cursor-pointer hover:underline py-1.5">Privacy Policy</li>
      <li className="hover:text-white cursor-pointer hover:underline py-1.5">Terms of Service</li>
    </ul>
  </div>
</footer>

      </div>
    </>
  );
}
