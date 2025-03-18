import Hero from "@/components/Hero";
import Featuresection from "@/components/Featuresection";
import Githubsection from "@/components/Githubsection";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" >
      <Navbar/>
      <Hero />
      <Featuresection className="pt-20"/>
      <Githubsection/>
      <Pricing/>
      <Faq/>
      <PreFooter/>
      <Footer/>
      
    </div>
  );
}
