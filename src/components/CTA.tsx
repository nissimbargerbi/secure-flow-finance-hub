
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CTA = () => {
  const benefits = [
    "Increase payment approval rates by up to 30%",
    "Reduce chargebacks by up to 65%",
    "Support for 100+ payment methods globally",
    "Save 90+ development hours with our simple API",
    "Dedicated compliance and support team",
    "Transparent pricing with no hidden fees"
  ];

  return (
    <section id="cta" className="py-20 bg-finance-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Payment Experience?</h2>
          <p className="text-xl opacity-90 mb-10">
            Join hundreds of trading platforms that have streamlined their payment operations with our solution.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">For Trading Platforms</h3>
              <ul className="space-y-3 text-left mb-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full bg-white hover:bg-gray-100 text-finance-primary">
                Schedule a Demo
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">For Developers</h3>
              <ul className="space-y-3 text-left mb-6">
                {benefits.slice(3, 6).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full bg-white hover:bg-gray-100 text-finance-primary">
                View API Docs
              </Button>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="font-medium">
              Have questions? Talk to our payment specialists today.
            </p>
            <Button size="lg" className="mt-4 bg-white hover:bg-gray-100 text-finance-primary">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
