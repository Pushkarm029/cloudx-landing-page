'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "@fontsource/inter"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
      w-full sm:w-[90%] md:w-[75%] lg:w-[66rem] max-w-[66rem] 
      backdrop-blur-lg rounded-xl shadow-lg px-4 py-2 
      transition-all duration-200 flex items-center justify-between
      shadow-[0_4px_20px_rgba(144,238,144,0.7)] "
      style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", fontFamily: "'Inter', sans-serif" }} 
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={150} height={50} className="h-10 w-auto" />
      </div>

      {/* Middle: Desktop Navigation */}
      <div className="hidden lg:flex w-auto items-center justify-center">
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex space-x-7 text-sm text-white/80">
            {["Documentation", "Resources", "Request Preview", "Careers", "Pricing"].map((item, index) => (
              <NavigationMenu.Item key={index}>
                <NavigationMenu.Link href="#" className="hover:text-white hover:brightness-200 transition-colors">
                  {item}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>

      {/* Right: Buttons */}
      <div className="hidden lg:flex gap-3">
        <button className="border font-bold border-white/30 hover:border-white/10 text-white text-sm rounded-lg px-3 py-1.5 bg-transparent hover:bg-white/10 transition">
          Get a demo
        </button>
        <button className="border text-sm border-white bg-white text-black rounded-lg px-3 py-1.5 hover:bg-white/90 transition">
          Sign up
        </button>
      </div>

      {/* Mobile: Hamburger Menu Button */}
      <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile: Collapsible Navigation */}
      {menuOpen && (
        <div className="absolute top-[4rem] left-0 w-full bg-black/80 backdrop-blur-lg rounded-lg shadow-lg py-4 px-6 lg:hidden">
          <ul className="flex flex-col space-y-4 text-white text-center">
            {["Documentation", "Resources", "Request Preview", "Careers", "Pricing"].map((item, index) => (
              <li key={index}>
                <a href="#" className="block py-2 hover:text-blue-400 transition">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full border font-bold border-white/10 hover:border-white/10 text-white text-sm rounded-lg px-3 py-1.5 hover:bg-white/10 transition">
                Get a demo
              </button>
            </li>
            <li>
              <button 
                className="border text-sm border-white text-black rounded-lg px-3 py-1.5 
                hover:bg-white hover:text-black transition-all duration-200"
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
