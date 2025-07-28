import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import RegistrationForm from "@/components/RegistrationForm";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="animate-fade-in">
        <Hero />
      </div>
      <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <About />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <Speakers />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <Schedule />
      </div>
      <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
        <RegistrationForm />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;