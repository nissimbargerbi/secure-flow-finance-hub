
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Wallet, CreditCard, DollarSign, Banknote, Bitcoin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-100 px-3 py-1.5 rounded-full">
              <span className="h-2 w-2 rounded-full bg-finance-primary"></span>
              <span className="text-sm font-medium text-finance-primary">SamaTech Payment Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold !leading-tight">
              Simplify Global <span className="text-finance-primary">Payment Processing</span> for Online Platforms
            </h1>
            
            <p className="text-lg text-gray-600 md:pr-10">
              A comprehensive ready-to-integrate payment solution for online platforms.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-finance-primary hover:bg-finance-secondary">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-finance-success" />
                <span>Fully compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-finance-success" />
                <span>Multiple payment methods</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-finance-success" />
                <span>Smart fraud prevention</span>
              </div>
            </div>
          </div>
          
          <div className="order-first md:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-2xl"></div>
              <div className="bg-white rounded-xl p-3 shadow-xl relative">
                <div className="bg-gradient-to-r from-finance-primary/10 to-finance-accent/5 rounded-lg p-6 flex items-center justify-center">
                  {/* Payment Symbols Animation */}
                  <div className="relative h-52 w-full">
                    {/* Background Circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 border-2 border-finance-primary/10 rounded-full animate-pulse"></div>
                      <div className="absolute w-32 h-32 border-2 border-finance-secondary/20 rounded-full animate-pulse"></div>
                      <div className="absolute w-24 h-24 border-2 border-finance-accent/30 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Payment Method Icons - Orbiting Animation */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-[float_6s_ease-in-out_infinite]">
                      <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    </div>
                    
                    <div className="absolute top-1/4 right-4 bg-white p-3 rounded-full shadow-lg animate-[float_5s_ease-in-out_0.5s_infinite]">
                      <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                    </div>
                    
                    <div className="absolute bottom-1/4 right-8 bg-white p-3 rounded-full shadow-lg animate-[float_7s_ease-in-out_1s_infinite]">
                      <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg animate-[float_6s_ease-in-out_1.5s_infinite]">
                      <Bitcoin className="h-6 w-6 text-orange-500" />
                    </div>
                    
                    <div className="absolute bottom-1/4 left-4 bg-white p-2 rounded-full shadow-lg animate-[float_5s_ease-in-out_2s_infinite]">
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Ξ</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-1/4 left-6 bg-white p-2 rounded-full shadow-lg animate-[float_4s_ease-in-out_2.5s_infinite]">
                      <Wallet className="h-6 w-6 text-finance-accent" />
                    </div>
                    
                    <div className="absolute top-1/2 right-2 bg-white p-2 rounded-full shadow-lg animate-[float_8s_ease-in-out_3s_infinite]">
                      <Banknote className="h-6 w-6 text-finance-success" />
                    </div>
                    
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg z-10">
                      <div className="bg-gradient-to-r from-finance-primary to-finance-accent rounded-full p-3">
                        <CreditCard className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Connection Lines */}
                    <div className="absolute top-1/3 left-1/3 w-12 h-0.5 bg-gradient-to-r from-finance-primary/50 to-transparent animate-pulse transform rotate-12"></div>
                    <div className="absolute top-2/3 right-1/3 w-12 h-0.5 bg-gradient-to-r from-finance-accent/50 to-transparent animate-pulse transform -rotate-12"></div>
                    <div className="absolute top-1/2 left-1/4 w-10 h-0.5 bg-gradient-to-r from-finance-success/50 to-transparent animate-pulse transform rotate-45"></div>
                    <div className="absolute top-1/2 right-1/4 w-10 h-0.5 bg-gradient-to-r from-finance-secondary/50 to-transparent animate-pulse transform -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
