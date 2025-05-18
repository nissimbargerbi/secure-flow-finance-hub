
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

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
                <div className="bg-gradient-to-r from-finance-primary/10 to-finance-accent/5 rounded-lg p-6">
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Deposit Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Amount:</span>
                        <span className="font-semibold">$1,000.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Method:</span>
                        <span className="font-semibold">Credit Card</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Processing Fee:</span>
                        <span className="font-semibold">$0.00</span>
                      </div>
                      <div className="h-px bg-gray-100 my-2"></div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Total:</span>
                        <span className="font-bold text-finance-primary">$1,000.00</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">Back</Button>
                    <Button className="flex-1 bg-finance-primary hover:bg-finance-secondary">Confirm Deposit</Button>
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
