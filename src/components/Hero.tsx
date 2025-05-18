
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Wallet, CreditCard, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-100 px-3 py-1.5 rounded-full">
              <span className="h-2 w-2 rounded-full bg-finance-primary"></span>
              <span className="text-sm font-medium text-finance-primary">Payments Solution for Trading Platforms</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold !leading-tight">
              Simplify Global <span className="text-finance-primary">Payment Processing</span> for Trading Platforms
            </h1>
            
            <p className="text-lg text-gray-600 md:pr-10">
              A comprehensive payment solution designed for brokers and trading platforms operating in challenging regulatory environments.
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
                  {/* B2B Payment Animation */}
                  <div className="relative h-52 w-full">
                    {/* Payment Network Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 border-4 border-finance-primary/20 rounded-full animate-pulse"></div>
                      <div className="absolute w-24 h-24 border-4 border-finance-secondary/30 rounded-full animate-pulse"></div>
                      <div className="absolute w-16 h-16 border-4 border-finance-accent/40 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Payment Icons */}
                    <div className="absolute top-0 left-1/4 bg-white p-2 rounded-full shadow-lg animate-[float_4s_ease-in-out_infinite]">
                      <CreditCard className="h-6 w-6 text-finance-primary" />
                    </div>
                    <div className="absolute bottom-4 right-1/4 bg-white p-2 rounded-full shadow-lg animate-[float_5s_ease-in-out_0.5s_infinite]">
                      <Wallet className="h-6 w-6 text-finance-accent" />
                    </div>
                    <div className="absolute top-1/2 right-8 bg-white p-2 rounded-full shadow-lg animate-[float_6s_ease-in-out_1s_infinite]">
                      <DollarSign className="h-6 w-6 text-finance-success" />
                    </div>
                    
                    {/* Transaction Lines */}
                    <div className="absolute top-1/4 left-1/3 w-16 h-0.5 bg-gradient-to-r from-finance-primary to-transparent animate-pulse transform rotate-45"></div>
                    <div className="absolute top-2/3 left-1/2 w-16 h-0.5 bg-gradient-to-r from-finance-accent to-transparent animate-pulse transform -rotate-45"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-0.5 bg-gradient-to-r from-finance-success to-transparent animate-pulse transform rotate-12"></div>
                    
                    {/* Central Node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10">
                      <div className="bg-gradient-to-r from-finance-primary to-finance-accent rounded-full p-2">
                        <Wallet className="h-8 w-8 text-white" />
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
