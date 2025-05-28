
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Clock,
  DollarSign 
} from "lucide-react";

const Platform = () => {
  const customerFeatures = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade security with end-to-end encryption for all payment processing."
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Lightning-fast transaction processing with real-time confirmation and updates."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Accept payments from customers worldwide with multi-currency support."
    },
    {
      icon: CheckCircle,
      title: "High Success Rates",
      description: "Optimized routing ensures maximum transaction approval rates."
    }
  ];

  const businessFeatures = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Increase conversion rates with seamless payment experiences and reduced cart abandonment."
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Detailed analytics and reporting to understand customer behavior and payment patterns."
    },
    {
      icon: Clock,
      title: "Quick Integration",
      description: "Get up and running in days, not months, with our developer-friendly APIs."
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Transparent pricing with no hidden fees and competitive transaction rates."
    }
  ];

  return (
    <section id="platform" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Customer Benefits */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                For Your <span className="text-finance-primary">Customers</span>
              </h2>
              <p className="text-gray-600">
                Deliver exceptional payment experiences that your customers will love.
              </p>
            </div>
            
            <div className="space-y-6">
              {customerFeatures.map((feature, index) => (
                <Card key={index} className="finance-card border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="finance-icon-box bg-finance-primary/10">
                        <feature.icon className="h-6 w-6 text-finance-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                For Your <span className="text-finance-accent">Business</span>
              </h2>
              <p className="text-gray-600">
                Powerful tools and insights to grow your business and optimize operations.
              </p>
            </div>
            
            <div className="space-y-6">
              {businessFeatures.map((feature, index) => (
                <Card key={index} className="finance-card border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="finance-icon-box bg-finance-accent/10">
                        <feature.icon className="h-6 w-6 text-finance-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
