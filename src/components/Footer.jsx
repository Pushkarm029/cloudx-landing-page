import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import "@fontsource/inter"; 

const Footer = () => {
  return (
    <footer className="bg-black -mt-20 py-40 px-60 flex justify-between items-start w-full }"
    style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Left Section */}
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="CloudX Logo" className="h-6 w-6" />
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
      
      {/* Middle Section */}
      <div className="text-white/60 flex flex-col">
        <h3 className="text-white font-medium mb-2">Company</h3>
        <ul className="space-y-1">
          <li className="hover:text-white cursor-pointer hover:underline py-1.5">Support</li>
          <li className="hover:text-white cursor-pointer hover:underline py-1.5">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer hover:underline py-1.5">Terms of Service</li>
        </ul>
      </div>
      
      {/* Right Section */}
      <div className="text-white/60  flex flex-col">
  <h3 className="text-white font-medium mb-2">Developers</h3>
  <ul className="flex flex-col">
    <li className="hover:text-white cursor-pointer hover:underline py-1.5">API Documentation</li>
    <li className="hover:text-white cursor-pointer hover:underline py-1.5">API Reference</li>
  </ul>
</div>

    </footer>
  );
};

export default Footer;
