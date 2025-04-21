import HeroSectionWithNavbar from "@/components/Hero";
// import Featuresection from "@/components/Featuresection";
// import Githubsection from "@/components/Githubsection";
// import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <HeroSectionWithNavbar />
      <Testimonial />
      {/* Sections removed to keep it minimal and story-focused
      <Featuresection className="pt-20"/>
      <Githubsection/>
      <Pricing/>
      <Faq/>
      */}
      <Footer/>
    </div>
  );
}
