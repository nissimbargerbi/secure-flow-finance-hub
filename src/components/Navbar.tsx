
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Problems", href: "#problems" },
    { name: "Solutions", href: "#solutions" },
    { name: "Features", href: "#features" },
    { name: "Platform", href: "#platform" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-finance-primary rounded-lg w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl text-finance-dark">SamaTech</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-finance-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Login</Button>
          <Button className="bg-finance-primary hover:bg-finance-secondary">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-finance-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full bg-finance-primary hover:bg-finance-secondary">
                  Get Started
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
