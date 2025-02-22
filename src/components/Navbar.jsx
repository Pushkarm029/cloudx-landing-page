'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full sm:w-[90%] md:w-[75%] lg:w-[68%] 
      bg-white/15 backdrop-blur-lg rounded-xl shadow-lg py-2 transition-colors duration-300 ease-in-out`}
    >
      <div className="relative flex w-full items-center justify-between px-4">
        <div className="text-xl font-bold text-white">MirageCloud</div>

        {/* Desktop Navigation */}
        <div className="relative hidden sm:flex w-auto">
          <NavigationMenu.Root className="relative">
            <NavigationMenu.List className="flex space-x-8 text-white">
              {/* Documentation Dropdown */}
              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger className="flex ml-8 items-center gap-1 hover:text-white/80">
                  Documentation <CaretDownIcon />
                </NavigationMenu.Trigger>

                {/* Dropdown Content */}
                <NavigationMenu.Content className="absolute left-[-82px] sm:left-[-64px] md:left-[-80px] lg:left-[-147px] 
                  top-[calc(100%+4px)] w-[calc(100vw-10%)] sm:w-[75vw] lg:w-[67vw] bg-white rounded-b-xl mt-4 shadow-lg p-6 
                  z-50 transition-all duration-300 ease-out"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
                      <h3 className="font-semibold text-black">Guides</h3>
                      <p className="text-sm text-black">
                        Start building modern documentation in under five minutes.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
                      <h3 className="font-semibold text-black">Components</h3>
                      <p className="text-sm text-black">
                        Explore the variety of components available.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
                      <h3 className="font-semibold text-black">API Playground</h3>
                      <p className="text-sm text-black">
                        Enable users to interact with your API.
                      </p>
                    </div>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {/* Other Nav Links */}
              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger className="flex  items-center gap-1 hover:text-white/80">
                  Resources <CaretDownIcon />
                </NavigationMenu.Trigger>

                {/* Dropdown Content */}
                <NavigationMenu.Content className="absolute left-[-82px] sm:left-[-64px] md:left-[-80px] lg:left-[-337px] 
                  top-[calc(100%+4px)] w-[calc(100vw-10%)] sm:w-[75vw] lg:w-[67vw] bg-white rounded-b-xl mt-4 shadow-lg p-6 
                  z-50 transition-all duration-300 ease-out"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
                      <h3 className="font-semibold text-black">Guides</h3>
                      <p className="text-sm text-black">
                        Start building modern documentation in under five minutes.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
                      <h3 className="font-semibold text-black">Components</h3>
                      <p className="text-sm text-black">
                        Explore the variety of components available.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
                      <h3 className="font-semibold text-black">API Playground</h3>
                      <p className="text-sm text-black">
                        Enable users to interact with your API.
                      </p>
                    </div>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="#" className="hover:text-white/80">
                  Request Preview
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="#" className="hover:text-white/80">
                  Careers
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="#" className="hover:text-white/80">
                  Pricing
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>

        {/* Right-side buttons */}
        <div className="hidden sm:flex gap-3">
          <button className="border ml-16 border-white text-white rounded-xl px-2 py-2 bg-transparent hover:bg-white/10 transition">
            Get a demo
          </button>
          <button className="border border-white bg-white text-black rounded-xl px-2 py-2 hover:bg-white/90 transition">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
