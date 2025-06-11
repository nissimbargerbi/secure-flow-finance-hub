import React from "react";
import { 
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Facebook,
  Youtube
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-finance-dark text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/bdb5ef5f-0e6d-46a6-aa92-3f4361552f4b.png" 
                alt="Samatech" 
                className="h-10 w-auto"
              />
            </div>
            
            <p className="text-gray-400 mb-4">
              The comprehensive payment solution for trading platforms and brokers operating in challenging environments.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News & Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Developer API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-finance-primary mt-0.5" />
                <span className="text-gray-400">
                  123 Finance Street<br />
                  London, UK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-finance-primary" />
                <span className="text-gray-400">+44 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-finance-primary" />
                <span className="text-gray-400">info@payroute.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Samatech. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
