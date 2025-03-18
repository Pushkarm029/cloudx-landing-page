
import GradientButton from "./ui/GradientButton";

export default function HeroSection() {
  return (
    <div className="w-full bg-black py-24 px-4 mb-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Accelerate Your Gaming</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Join financial analysts who use Fira to do more research in less time.
        </p>
        <div className="mt-8 items-center justify-center flex space-x-4  mb-16">
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
    </div>
  )
}

