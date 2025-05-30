
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
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl relative overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-sky-50/50 to-blue-50/30 rounded-2xl p-6">
                  {/* SVG Animation */}
                  <div className="relative h-96 w-full">
                    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-2xl">
                      <defs>
                        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: "#f8fafc", stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: "#e2e8f0", stopOpacity: 1}} />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                        <filter id="shadow">
                          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15"/>
                        </filter>
                      </defs>
                      
                      {/* Background */}
                      <rect width="800" height="600" fill="url(#bgGradient)" rx="16"/>
                      
                      {/* Connection Lines */}
                      <g stroke="#0284c7" strokeWidth="2" opacity="0.4" fill="none">
                        {/* Dollar to Cart */}
                        <path d="M 200 150 Q 350 200 380 280" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                        </path>
                        {/* Euro to Cart */}
                        <path d="M 150 250 Q 300 250 380 300" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2.2s" repeatCount="indefinite"/>
                        </path>
                        {/* Bitcoin to Cart */}
                        <path d="M 200 450 Q 350 400 380 320" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="1.8s" repeatCount="indefinite"/>
                        </path>
                        {/* ETH to Cart */}
                        <path d="M 600 150 Q 450 200 420 280" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2.1s" repeatCount="indefinite"/>
                        </path>
                        {/* Yen to Cart */}
                        <path d="M 650 250 Q 500 250 420 300" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="1.9s" repeatCount="indefinite"/>
                        </path>
                        {/* Credit Card to Cart */}
                        <path d="M 600 450 Q 450 400 420 320" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2.3s" repeatCount="indefinite"/>
                        </path>
                        {/* Bank to Cart */}
                        <path d="M 400 500 L 400 360" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                        </path>
                      </g>
                      
                      {/* Central Shopping Cart */}
                      <g transform="translate(350,250)" filter="url(#shadow)">
                        <circle cx="50" cy="50" r="60" fill="#ffffff" opacity="0.95" stroke="#e2e8f0" strokeWidth="2"/>
                        <circle cx="50" cy="50" r="55" fill="none" stroke="#0284c7" strokeWidth="3"/>
                        
                        {/* Shopping Cart Icon */}
                        <g transform="translate(25,25)" fill="#0284c7" stroke="#0284c7" strokeWidth="2">
                          <rect x="10" y="20" width="40" height="30" rx="3" fill="none"/>
                          <path d="M10 20L5 5H0" fill="none"/>
                          <circle cx="20" cy="60" r="3" fill="#0284c7"/>
                          <circle cx="40" cy="60" r="3" fill="#0284c7"/>
                          <line x1="10" y1="30" x2="50" y2="30"/>
                          <line x1="15" y1="40" x2="45" y2="40"/>
                        </g>
                      </g>
                      
                      {/* Dollar Symbol */}
                      <g transform="translate(150,100)" filter="url(#glow)">
                        <circle cx="50" cy="50" r="40" fill="#10b981" opacity="0.9" stroke="#ffffff" strokeWidth="2"/>
                        <text x="50" y="60" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="white">$</text>
                      </g>
                      
                      {/* Euro Symbol */}
                      <g transform="translate(100,200)" filter="url(#glow)">
                        <circle cx="50" cy="50" r="40" fill="#3b82f6" opacity="0.9" stroke="#ffffff" strokeWidth="2"/>
                        <text x="50" y="62" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="white">€</text>
                      </g>
                      
                      {/* Bitcoin Symbol */}
                      <g transform="translate(150,400)" filter="url(#glow)">
                        <circle cx="50" cy="50" r="40" fill="#f59e0b" opacity="0.9" stroke="#ffffff" strokeWidth="2"/>
                        <text x="50" y="62" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="white">₿</text>
                      </g>
                      
                      {/* Ethereum Symbol */}
                      <g transform="translate(550,100)" filter="url(#glow)">
                        <circle cx="50" cy="50" r="40" fill="#8b5cf6" opacity="0.9" stroke="#ffffff" strokeWidth="2"/>
                        <g transform="translate(35,25)">
                          <polygon points="15,5 15,20 25,15" fill="white"/>
                          <polygon points="15,25 15,40 25,30" fill="white" opacity="0.7"/>
                          <polygon points="5,15 15,20 15,5" fill="white" opacity="0.8"/>
                          <polygon points="5,30 15,40 15,25" fill="white" opacity="0.6"/>
                        </g>
                      </g>
                      
                      {/* Yen Symbol */}
                      <g transform="translate(600,200)" filter="url(#glow)">
                        <circle cx="50" cy="50" r="40" fill="#ef4444" opacity="0.9" stroke="#ffffff" strokeWidth="2"/>
                        <text x="50" y="62" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="white">¥</text>
                      </g>
                      
                      {/* Credit Card */}
                      <g transform="translate(550,400)" filter="url(#glow)">
                        <rect x="10" y="30" width="80" height="50" rx="8" fill="#06b6d4" opacity="0.9" stroke="#ffffff" strokeWidth="2"/>
                        <rect x="15" y="40" width="70" height="8" fill="white" opacity="0.8"/>
                        <rect x="15" y="55" width="25" height="4" fill="white" opacity="0.6"/>
                        <rect x="45" y="55" width="15" height="4" fill="white" opacity="0.6"/>
                        <rect x="15" y="65" width="35" height="4" fill="white" opacity="0.6"/>
                      </g>
                      
                      {/* Bank Symbol */}
                      <g transform="translate(350,450)" filter="url(#glow)">
                        <rect x="10" y="40" width="80" height="40" fill="#6366f1" opacity="0.9" stroke="#ffffff" strokeWidth="2"/>
                        <polygon points="50,20 20,40 80,40" fill="#6366f1" opacity="0.9"/>
                        <rect x="25" y="50" width="8" height="20" fill="white"/>
                        <rect x="38" y="50" width="8" height="20" fill="white"/>
                        <rect x="51" y="50" width="8" height="20" fill="white"/>
                        <rect x="64" y="50" width="8" height="20" fill="white"/>
                        <rect x="15" y="75" width="70" height="4" fill="white"/>
                      </g>
                      
                      {/* Title */}
                      <text x="400" y="50" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#1e293b">
                        Comprehensive Payments Solution
                      </text>
                      
                      {/* Subtitle */}
                      <text x="400" y="75" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b" opacity="0.8">
                        One platform, all payment methods
                      </text>
                      
                      {/* Floating particles for visual effect */}
                      <g opacity="0.2">
                        <circle cx="100" cy="350" r="2" fill="#0284c7">
                          <animate attributeName="cy" values="350;330;350" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="700" cy="180" r="2" fill="#0284c7">
                          <animate attributeName="cy" values="180;160;180" dur="2.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="650" cy="400" r="2" fill="#0284c7">
                          <animate attributeName="cy" values="400;380;400" dur="3.5s" repeatCount="indefinite"/>
                        </circle>
                      </g>
                    </svg>
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
