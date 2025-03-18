import Image from "next/image";
import { Zap, Grid3X3, PieChart, Users, Settings, Lightbulb } from "lucide-react";

export default function AnalyticsLanding() {
  return (
    <div className="bg-black py-40 text-white">
      <div className="max-w-6xl mx-auto  relative mb-16 text-center flex flex-col items-center ">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-50">
          <Image
            src="/Decorative-element.png"
            alt="Decorative element"
            width={200}
            height={200}
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          As simple as it gets with analytics.
        </h1>

        <div className="max-w-3xl mb-16">
          <p className="text-lg text-gray-400 mb-4">
            &quot;Previously, I had all of my sites hooked up to Google Analytics, like most people.<br />
            <span className="bg-blue-500 text-blue-200 px-1 mx-1 rounded whitespace-nowrap">
              But I never looked at the reports.
            </span>{" "}
            Now, I find myself dropping in and looking at the stats several times a day. It&apos;s very easy to digest and understand.&quot;
          </p>

          <div className="flex items-center mt-6">
            <div className="mr-4">
              <Image
                src="/path/to/your/author-image.jpg"
                alt="Chris Williams"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Chris Williams</h3>
              <p className="text-sm text-gray-500">Founder, Cloudscope</p>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { Icon: Zap, title: "Ultra-Low Latency", description: "Experience lightning-fast response times with near-zero lag. - no further setup required" },
            { Icon: Grid3X3, title: "Zero Downtime", description: "Enjoy uninterrupted gaming with our always-online infrastructure." },
            { Icon: PieChart, title: "Instant Access", description: "No waiting—jump straight into the action anytime, anywhere." },
            { Icon: Users, title: "Cloud-Powered Performance", description: "High-end gaming without expensive hardware." },
            { Icon: Settings, title: "Seamless Multiplayer", description: "Smooth, real-time gameplay with friends worldwide." },
            { Icon: Lightbulb, title: "State-of-the-Art Security", description: "Advanced encryption and anti-cheat systems for a fair play environment." }
          ].map(({ Icon, title, description }, index) => (
            <div key={index} className="relative px-6 bg-transparent" style={{ position: 'relative' }}>
              <div className="p-3 mb-4">
                <Icon className="h-6 w-6 text-blue-400 stroke-1" />
              </div>
              <h2 className="text-xl font-semibold mb-3 ms-2">{title}</h2>
              <p className="text-lg text-gray-400 mb-4 ms-2">{description}</p>

              {/* Bold Corner Borders */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderLeft: '4px solid white', borderTop: '4px solid white' }}></div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderRight: '4px solid white', borderBottom: '4px solid white' }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
