
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Banknote,
  Wallet,
  Bitcoin,
  LineChart,
  Users
} from "lucide-react";

const Platform = () => {
  return (
    <section id="platform" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">OUR PLATFORM</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive solution for both your customers and your business operations.
          </p>
        </div>

        <Tabs defaultValue="client" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="client" className="px-8 py-3 data-[state=active]:bg-finance-primary data-[state=active]:text-white">
                Client Portal
              </TabsTrigger>
              <TabsTrigger value="admin" className="px-8 py-3 data-[state=active]:bg-finance-primary data-[state=active]:text-white">
                Admin Portal
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="client">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Client Deposit Interface</h3>
                <p className="text-gray-600 mb-6">
                  Our intuitive deposit interface makes it easy for your clients to fund their accounts using their preferred payment method.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <CreditCard className="h-5 w-5 text-finance-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Multiple Payment Options</h4>
                      <p className="text-sm text-gray-600">Support for cards, bank transfers, e-wallets, and more</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-lg p-2">
                      <LineChart className="h-5 w-5 text-finance-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Real-time Processing</h4>
                      <p className="text-sm text-gray-600">Instant fund confirmation and account updates</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 rounded-lg p-2">
                      <Users className="h-5 w-5 text-finance-warning" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Customizable Experience</h4>
                      <p className="text-sm text-gray-600">White-label solution that matches your brand</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold mb-4">Deposit Funds</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Add funds to your account using your preferred payment method
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 px-4 py-2 rounded-lg flex justify-between items-center border border-gray-200">
                        <div className="flex items-center gap-3">
                          <Banknote className="h-8 w-8 text-gray-600" />
                          <div>
                            <div className="font-medium">Bank Transfer</div>
                            <div className="text-xs text-gray-500">3-5 business days</div>
                          </div>
                        </div>
                        <div className="h-4 w-4 rounded-full border border-finance-primary"></div>
                      </div>
                      
                      <div className="bg-finance-primary/5 px-4 py-2 rounded-lg flex justify-between items-center border border-finance-primary">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-8 w-8 text-finance-primary" />
                          <div>
                            <div className="font-medium">Credit Card</div>
                            <div className="text-xs text-gray-500">Instant processing</div>
                          </div>
                        </div>
                        <div className="h-4 w-4 rounded-full border-2 border-finance-primary flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-finance-primary"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 px-4 py-2 rounded-lg flex justify-between items-center border border-gray-200">
                        <div className="flex items-center gap-3">
                          <Wallet className="h-8 w-8 text-gray-600" />
                          <div>
                            <div className="font-medium">E-Wallet</div>
                            <div className="text-xs text-gray-500">PayPal, Venmo, etc</div>
                          </div>
                        </div>
                        <div className="h-4 w-4 rounded-full border border-finance-primary"></div>
                      </div>
                      
                      <div className="bg-gray-50 px-4 py-2 rounded-lg flex justify-between items-center border border-gray-200">
                        <div className="flex items-center gap-3">
                          <Bitcoin className="h-8 w-8 text-gray-600" />
                          <div>
                            <div className="font-medium">Cryptocurrency</div>
                            <div className="text-xs text-gray-500">BTC, ETH & stablecoins</div>
                          </div>
                        </div>
                        <div className="h-4 w-4 rounded-full border border-finance-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="admin">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Administrative Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  A powerful dashboard for monitoring transactions, analyzing payment data, and managing your payment operations.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <ChartLine className="h-5 w-5 text-finance-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Analytics & Reporting</h4>
                      <p className="text-sm text-gray-600">Comprehensive insights into payment flows and performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-lg p-2">
                      <CreditCard className="h-5 w-5 text-finance-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Transaction Management</h4>
                      <p className="text-sm text-gray-600">Monitor and manage deposits and withdrawals in real-time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 rounded-lg p-2">
                      <Users className="h-5 w-5 text-finance-warning" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Customer Management</h4>
                      <p className="text-sm text-gray-600">Track customer activity and manage payment permissions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="bg-finance-dark text-white rounded-lg shadow-sm p-3">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-xs">BF</div>
                        <span className="font-semibold">Admin Portal</span>
                      </div>
                      <div className="text-xs bg-gray-700 px-2 py-1 rounded">Client Portal</div>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4 space-y-4">
                      <h3 className="text-lg font-semibold">Admin Dashboard</h3>
                      <div className="flex gap-4 overflow-x-auto pb-2">
                        <div className="bg-gray-800 px-3 py-1.5 rounded text-sm whitespace-nowrap">Overview</div>
                        <div className="px-3 py-1.5 text-sm text-gray-400 whitespace-nowrap">Transactions</div>
                        <div className="px-3 py-1.5 text-sm text-gray-400 whitespace-nowrap">Customers</div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gray-800 rounded p-3">
                          <div className="text-xs text-gray-400">Total Deposits</div>
                          <div className="text-lg font-bold">$42,619.00</div>
                          <div className="text-xs text-finance-success">↑ 12% from last month</div>
                        </div>
                        <div className="bg-gray-800 rounded p-3">
                          <div className="text-xs text-gray-400">Total Withdrawals</div>
                          <div className="text-lg font-bold">$28,136.00</div>
                          <div className="text-xs text-finance-danger">↓ 3% from last month</div>
                        </div>
                        <div className="bg-gray-800 rounded p-3">
                          <div className="text-xs text-gray-400">Net Flow</div>
                          <div className="text-lg font-bold text-finance-success">$14,483.00</div>
                          <div className="text-xs text-gray-400">Updated 08:46:12</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800 rounded p-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-sm">Transaction Volume by Method</div>
                        </div>
                        <div className="h-24 flex items-end justify-between">
                          <div className="w-1/5 flex flex-col items-center gap-1">
                            <div className="bg-blue-500 w-full" style={{ height: "70%" }}></div>
                            <div className="text-xs text-gray-400">Bank</div>
                          </div>
                          <div className="w-1/5 flex flex-col items-center gap-1">
                            <div className="bg-indigo-500 w-full" style={{ height: "50%" }}></div>
                            <div className="text-xs text-gray-400">Card</div>
                          </div>
                          <div className="w-1/5 flex flex-col items-center gap-1">
                            <div className="bg-red-500 w-full" style={{ height: "40%" }}></div>
                            <div className="text-xs text-gray-400">E-Wallet</div>
                          </div>
                          <div className="w-1/5 flex flex-col items-center gap-1">
                            <div className="bg-amber-500 w-full" style={{ height: "20%" }}></div>
                            <div className="text-xs text-gray-400">E-Voucher</div>
                          </div>
                          <div className="w-1/5 flex flex-col items-center gap-1">
                            <div className="bg-green-500 w-full" style={{ height: "30%" }}></div>
                            <div className="text-xs text-gray-400">Crypto</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Platform;
