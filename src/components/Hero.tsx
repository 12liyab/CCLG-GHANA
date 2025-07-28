import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary background with enhanced opacity */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('/lovable-uploads/10dca966-29a3-4e80-92f3-993884b5b9c5.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-earth-green/95 via-forest-green/90 to-leaf-green/85" />
        {/* Additional pattern overlay for more texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--mint-green)) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, hsl(var(--sage-green)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint-green/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-leaf-green/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sage-green/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 left-1/4 w-48 h-48 bg-earth-green/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-forest-green/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Conference Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/10dca966-29a3-4e80-92f3-993884b5b9c5.png" 
              alt="ACCCE 2025 Logo" 
              className="h-32 w-auto mx-auto mb-6 animate-scale-in"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Africa Climate Communications
            <span className="block text-mint-green">Conference & Exhibition</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-sage-green/90">
              ACCCE 2025
            </span>
          </h1>

          {/* Theme */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <h2 className="text-xl md:text-2xl text-white font-semibold mb-2">Conference Theme</h2>
            <p className="text-lg md:text-xl text-mint-green leading-relaxed">
              "Communicating the Impacts of Climate Change on African Economies: 
              Aligning Country-Specific Climate Actions with the AU Framework"
            </p>
          </div>

          {/* Key Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Calendar className="h-8 w-8 text-mint-green mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Dates</h3>
              <p className="text-sage-green/90">25th - 26th September 2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <MapPin className="h-8 w-8 text-mint-green mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Location</h3>
              <p className="text-sage-green/90">UniMAC, Accra, Ghana</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="h-8 w-8 text-mint-green mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Organized by</h3>
              <p className="text-sage-green/90">CCLG-Africa</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Schedule
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
