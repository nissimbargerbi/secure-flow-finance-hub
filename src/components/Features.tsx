
import React from "react";
import { 
  Banknote, 
  CreditCard, 
  Wallet, 
  Bitcoin, 
  ShieldCheck, 
  BarChart, 
  LineChart, 
  Lock 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: <Banknote className="h-8 w-8 text-finance-primary" />,
      title: "Bank Transfers",
      description: "Support for local and international bank transfers with optimized processing times."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-finance-primary" />,
      title: "Credit Cards",
      description: "High approval rates for Visa, Mastercard, and local card schemes with 3D Secure support."
    },
    {
      icon: <Wallet className="h-8 w-8 text-finance-primary" />,
      title: "E-Wallets",
      description: "Integration with popular e-wallet solutions worldwide including regional favorites."
    },
    {
      icon: <Bitcoin className="h-8 w-8 text-finance-primary" />,
      title: "Cryptocurrency",
      description: "Support for major cryptocurrencies and stablecoins with instant confirmation."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-finance-primary" />,
      title: "Fraud Prevention",
      description: "Advanced AI-based fraud detection system to protect your business and customers."
    },
    {
      icon: <BarChart className="h-8 w-8 text-finance-primary" />,
      title: "Smart Routing",
      description: "Automatic routing to the best payment processor based on success rates and fees."
    },
    {
      icon: <LineChart className="h-8 w-8 text-finance-primary" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with transaction monitoring and business insights."
    },
    {
      icon: <Lock className="h-8 w-8 text-finance-primary" />,
      title: "Compliance Tools",
      description: "Built-in AML and KYC tools to ensure regulatory compliance across jurisdictions."
    },
  ];

  return (
    <section id="features" className="py-20 bg-finance-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">POWERFUL FEATURES</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our platform comes packed with all the tools you need to manage payments effectively.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="bg-gray-700/50 rounded-lg w-16 h-16 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button size="lg" className="bg-finance-primary hover:bg-finance-secondary">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
