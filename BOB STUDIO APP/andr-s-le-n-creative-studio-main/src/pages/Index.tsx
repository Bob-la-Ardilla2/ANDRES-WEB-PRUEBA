import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import ServicesSection from "@/components/ServicesSection";
import VisualinkSection from "@/components/VisualinkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CommunitiesSection />
        <ServicesSection />
        <VisualinkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
