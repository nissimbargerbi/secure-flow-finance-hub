
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
              <div className="bg-white rounded-xl p-3 shadow-xl relative overflow-hidden">
                <div className="bg-gradient-to-r from-finance-primary/10 to-finance-accent/5 rounded-lg p-6">
                  {/* Assembly Line Animation */}
                  <div className="relative h-52 w-full">
                    {/* Conveyor Belt */}
                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
                      <div className="h-2 bg-gray-300 rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 animate-[slide-right_3s_linear_infinite]"></div>
                      </div>
                    </div>
                    
                    {/* Payment Symbols Moving on Belt */}
                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 -translate-y-8">
                      {/* First Row */}
                      <div className="flex items-center justify-between animate-[slide-right_8s_linear_infinite]">
                        <div className="bg-white p-3 rounded-lg shadow-md">
                          <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-md">
                          <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-md">
                          <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg shadow-md">
                          <Bitcoin className="h-6 w-6 text-orange-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 translate-y-8">
                      {/* Second Row - Delayed */}
                      <div className="flex items-center justify-between animate-[slide-right_8s_linear_infinite_2s]">
                        <div className="bg-white p-2 rounded-lg shadow-md">
                          <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">Ξ</span>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded-lg shadow-md">
                          <Wallet className="h-6 w-6 text-finance-accent" />
                        </div>
                        <div className="bg-white p-2 rounded-lg shadow-md">
                          <Banknote className="h-6 w-6 text-finance-success" />
                        </div>
                        <div className="bg-white p-2 rounded-lg shadow-md">
                          <CreditCard className="h-6 w-6 text-finance-primary" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Assembly Line Structure */}
                    <div className="absolute top-0 left-4 w-1 h-full bg-gray-400 rounded"></div>
                    <div className="absolute top-0 right-4 w-1 h-full bg-gray-400 rounded"></div>
                    
                    {/* Processing Hub */}
                    <div className="absolute top-4 right-8 bg-white rounded-lg p-2 shadow-lg">
                      <div className="bg-gradient-to-r from-finance-primary to-finance-accent rounded p-2">
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
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
