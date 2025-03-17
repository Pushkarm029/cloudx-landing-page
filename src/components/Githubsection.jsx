import Image from "next/image"
import { Zap, Grid3X3, PieChart, Users, Settings, Lightbulb } from "lucide-react"

export default function AnalyticsLanding() {
  return (
    <div className="bg-black py-40 text-white">
      <div className="max-w-6xl mx-auto px-4 relative mb-16">
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
            "Previously, I had all of my sites hooked up to Google Analytics, like most people.
            <span className="bg-blue-500 text-blue-200 px-1 mx-1 rounded whitespace-nowrap"> But I never looked at the reports.</span> Now, I find myself
            dropping in and looking at the stats several times a day. It's very easy to digest and understand."
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

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* First Row */}
          <div>
            <div className="p-3 mb-4">
              <Zap className="h-6 w-6 text-blue-400 stroke-1" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Ultra-Low Latency</h2>
            <p className="text-gray-400">
              Experience <em>lightning-fast</em> response times with near-zero lag. -{" "}
              <span className="font-medium">no further setup required</span>
            </p>
          </div>

          <div>
            <div className="p-3 mb-4">
              <Grid3X3 className="h-6 w-6 text-blue-400 stroke-1" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Zero Downtime</h2>
            <p className="text-gray-400">
              Enjoy <em>uninterrupted</em> gaming with our always-online infrastructure.
            </p>
          </div>

          <div>
            <div className="p-3 mb-4">
              <PieChart className="h-6 w-6 text-blue-400 stroke-1" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Instant Access</h2>
            <p className="text-gray-400">
              No waiting—jump straight into the action <em>anytime, anywhere</em>.
            </p>
          </div>

          {/* Second Row */}
          <div>
            <div className="p-3 mb-4">
              <Users className="h-6 w-6 text-blue-400 stroke-1" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Cloud-Powered Performance</h2>
            <p className="text-gray-400">
              <em>High-end</em> gaming without expensive hardware.
            </p>
          </div>

          <div>
            <div className="p-3 mb-4">
              <Settings className="h-6 w-6 text-blue-400 stroke-1" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Seamless Multiplayer</h2>
            <p className="text-gray-400">
              <em>Smooth</em>, real-time gameplay with friends worldwide.
            </p>
          </div>

          <div>
            <div className="p-3 mb-4">
              <Lightbulb className="h-6 w-6 text-blue-400 stroke-1" />
            </div>
            <h2 className="text-xl font-semibold mb-3">State-of-the-Art Security</h2>
            <p className="text-gray-400">
              Advanced <em>encryption</em> and anti-cheat systems for a fair play environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}