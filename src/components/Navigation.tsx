import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#speakers", label: "Speakers" },
    { href: "#schedule", label: "Schedule" },
    { href: "#registration", label: "Registration" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-sage-green/20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/cf69fb96-3465-443f-b9a2-51c9e1eee36f.png" 
              alt="CCLG-Africa Logo" 
              className="h-10 w-auto hover-float transition-transform duration-300"
            />
            <Separator 
              orientation="vertical" 
              className="hidden md:block h-12 bg-gradient-to-b from-sage-green/30 via-earth-green/50 to-sage-green/30" 
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-earth-green">ACCCE 2025</h1>
              <p className="text-xs text-muted-foreground">Climate Communications Conference</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-earth-green transition-colors duration-200 font-medium relative group px-2 py-1"
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-earth-green transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </a>
              ))}
              <Button
                variant="default"
                size="sm"
                onClick={() => window.open('/cclg-ghana', '_blank')}
                className="bg-earth-green hover:bg-earth-green/90 text-white font-medium px-4 py-2 ml-4"
              >
                CCLG-GHANA
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-earth-green"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sage-green/20 animate-fade-in-up">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 text-foreground hover:text-earth-green hover:bg-sage-green/10 transition-all duration-200 font-medium rounded-md"
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  window.open('/cclg-ghana', '_blank');
                  setIsOpen(false);
                }}
                className="bg-earth-green hover:bg-earth-green/90 text-white font-medium mx-6 mt-2"
              >
                CCLG-GHANA
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;