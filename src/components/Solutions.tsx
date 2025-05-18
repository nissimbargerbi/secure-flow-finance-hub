
import React from "react";
import { Globe, BarChart, Bell, LayoutDashboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      title: "GLOBAL PAYMENTS",
      description: "Access to multiple payment methods including local banks, credit cards, e-Payments, e-wallets and crypto currencies.",
      icon: <Globe className="h-10 w-10 text-finance-primary" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "SMART ROUTING",
      description: "Improved approval rates and fewer declines.",
      icon: <BarChart className="h-10 w-10 text-finance-success" />,
      iconBg: "bg-green-100",
    },
    {
      title: "ALERTS & MONITORING",
      description: "Reduce chargebacks and fraud incidents using our world class smart alerts system.",
      icon: <Bell className="h-10 w-10 text-finance-warning" />,
      iconBg: "bg-amber-100",
    },
    {
      title: "COMPREHENSIVE PRODUCT",
      description: "Seamless integration with a single app to manage all the broker payment needs.",
      icon: <LayoutDashboard className="h-10 w-10 text-finance-secondary" />,
      iconBg: "bg-sky-100",
    },
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">OUR SOLUTION</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive payment infrastructure designed specifically for trading platforms and brokers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-finance-primary">
              <CardContent className="p-6">
                <div className={`finance-icon-box ${solution.iconBg} mb-5 w-16 h-16`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-finance-dark">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-finance-primary/10 rounded-xl p-6 max-w-3xl">
            <p className="text-center text-lg">
              Our platform handles the complexity of payment processing so you can 
              <span className="font-bold text-finance-primary"> focus on growing your business</span> and 
              <span className="font-bold text-finance-primary"> delighting your customers</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
