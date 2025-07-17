import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, HelpCircle, ChevronDown, ChevronRight, Monitor, CreditCard, Smartphone } from 'lucide-react';

interface OrdersOperationsPageProps {
  onBack: () => void;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const OrdersOperationsPage: React.FC<OrdersOperationsPageProps> = ({ onBack }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What do I do if the merchant order is missing items?",
      answer: "If a merchant order is missing items, follow these steps:\n\n1. **Verify the Order**: Check the original order confirmation and packing slip to confirm what items should have been included.\n\n2. **Document the Issue**: Take photos of the received items and packaging. Note the tracking number and delivery date.\n\n3. **Contact Support Immediately**: Call our 24/7 support line at +1 (800) POS-HELP or email deploy-us@postech.com with:\n   - Order number\n   - Missing item details\n   - Photos of received items\n   - Merchant contact information\n\n4. **Expedite Replacement**: We will immediately ship the missing items via overnight delivery at no additional cost.\n\n5. **Update Merchant**: Inform the merchant of the situation and provide them with the new tracking information for the replacement items.\n\n6. **Follow Up**: Ensure the merchant receives the missing items and confirm the installation can proceed as scheduled.\n\n**Important**: Do not proceed with installation until all required items are present, as this may cause delays and additional service calls."
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Modern POS Terminal Themed Ribbon */}
      <div className="relative overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 relative">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/30 to-purple-600/20 animate-pulse"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="flex items-center space-x-6">
              {/* POS Terminal Icons */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Monitor className="h-5 w-5 text-white" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
              </div>
              
              {/* Ribbon Text */}
              <div className="text-center">
                <h1 className="text-white font-bold text-lg tracking-wide">
                  US ORDERS & OPERATIONS SUPPORT CENTER
                </h1>
                <p className="text-gray-300 text-sm font-medium">
                  Order Management • Deployment Workflows • Operational Support
                </p>
              </div>
              
              {/* Status Indicators */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300 text-xs font-medium">ONLINE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-blue-300 text-xs font-medium">SECURE</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom border with gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="group flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300 font-semibold bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to US Hardware Deployment
            </button>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-gray-800">Orders and Operations</h1>
                <p className="text-gray-600 font-medium">Order Management & Deployment Workflows</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl mb-12 border border-gray-200/50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-25"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <ShoppingCart className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="ml-8">
                <h2 className="text-4xl font-black text-gray-800 mb-3">Orders & Operations Support</h2>
                <p className="text-xl text-gray-600 font-medium">Comprehensive guidance for order management and deployment workflows</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-xl leading-relaxed font-medium">
              Find answers to common questions about order processing, deployment scheduling, workflow management, 
              and operational procedures. Our comprehensive knowledge base helps you resolve issues quickly and efficiently.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-200/50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-800">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-bold text-gray-800 pr-4">{item.question}</h3>
                    <div className="flex-shrink-0">
                      {expandedItem === item.id ? (
                        <ChevronDown className="h-6 w-6 text-blue-500 transition-transform duration-200" />
                      ) : (
                        <ChevronRight className="h-6 w-6 text-gray-400 transition-transform duration-200" />
                      )}
                    </div>
                  </button>
                  
                  {expandedItem === item.id && (
                    <div className="px-6 pb-6 border-t border-gray-200/50">
                      <div className="pt-6">
                        <div className="prose prose-lg max-w-none">
                          {item.answer.split('\n').map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-12 bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-200/50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-black text-gray-800 mb-4">Need Additional Support?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Can't find the answer you're looking for? Our expert support team is available 24/7 to assist you.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-semibold">24/7 Phone Support: +1 (800) POS-HELP</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-semibold">Email: deploy-us@postech.com</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrdersOperationsPage;