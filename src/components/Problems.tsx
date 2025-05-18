
import React from "react";
import { CreditCard, AlertTriangle, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problems = () => {
  const problems = [
    {
      title: "PAYMENT ISSUES",
      description: "FX and CFD brokers face declines, chargebacks, and difficulty accessing tier-1 payment providers.",
      icon: <CreditCard className="h-10 w-10 text-finance-primary" />,
    },
    {
      title: "REGULATORY HURDLES",
      description: "Compliance with AML regulations is complex across jurisdictions.",
      icon: <AlertTriangle className="h-10 w-10 text-finance-warning" />,
    },
    {
      title: "LIMITED COVERAGE",
      description: "Difficulty managing global methods (banks, cards, e-wallets, crypto) reducing conversion rates and volumes.",
      icon: <Globe className="h-10 w-10 text-finance-danger" />,
    },
    {
      title: "TECHNICAL COMPLEXITY",
      description: "Long time to market and cost of building integrations with payments providers to get to a comprehensive coverage.",
      icon: <Clock className="h-10 w-10 text-finance-secondary" />,
    },
  ];

  return (
    <section id="problems" className="py-20 bg-finance-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">PROBLEMS FACING TRADING PLATFORMS</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Trading platforms operate in a challenging environment with multiple payment obstacles that impact their bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="finance-icon-box bg-gray-700/50 mb-5 w-16 h-16">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-finance-accent">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-px bg-gradient-to-r from-finance-primary to-finance-accent rounded-full">
            <div className="bg-finance-dark rounded-full px-6 py-3">
              <p className="text-lg">
                These challenges create significant operational overhead and 
                <span className="text-finance-primary font-bold"> reduce profitability</span> for trading platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
