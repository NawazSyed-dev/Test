import React from 'react';
import { ArrowLeft, ShoppingCart, Package, FileText, Clock, MapPin, Phone, Mail, Users, Truck, Wrench, Headphones, Monitor, CreditCard, Smartphone } from 'lucide-react';

interface CanadaPageProps {
  onBack: () => void;
}

const CanadaPage: React.FC<CanadaPageProps> = ({ onBack }) => {
  const tiles = [
    {
      id: 1,
      title: 'Orders and Operations',
      description: 'Manage POS hardware orders, deployment schedules, and operational workflows',
      icon: ShoppingCart,
      color: 'red',
      features: ['Order Management', 'Deployment Scheduling', 'Workflow Tracking', 'Resource Allocation']
    },
    {
      id: 2,
      title: 'Product and Supply',
      description: 'POS terminal inventory, supply chain management, and product specifications',
      icon: Package,
      color: 'emerald',
      features: ['Inventory Management', 'Supply Chain', 'Product Specs', 'Vendor Relations']
    },
    {
      id: 3,
      title: 'Procedures and Guidelines',
      description: 'Deployment procedures, installation guidelines, and compliance documentation',
      icon: FileText,
      color: 'purple',
      features: ['Installation Guides', 'Compliance Docs', 'Best Practices', 'Quality Standards']
    },
    {
      id: 4,
      title: 'Service Standards and Ops Hours',
      description: 'Service level agreements, operational hours, and performance standards',
      icon: Clock,
      color: 'orange',
      features: ['SLA Management', 'Operating Hours', 'Performance Metrics', 'Service Standards']
    },
    {
      id: 5,
      title: 'Orders Tracking',
      description: 'Real-time tracking of POS deployment orders and installation progress',
      icon: Truck,
      color: 'cyan',
      features: ['Real-time Tracking', 'Status Updates', 'Delivery Monitoring', 'Progress Reports']
    },
    {
      id: 6,
      title: 'Contacts',
      description: 'Technical support contacts, regional teams, and escalation procedures',
      icon: Headphones,
      color: 'pink',
      features: ['Support Contacts', 'Regional Teams', 'Escalation Matrix', 'Emergency Support']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.red;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Modern POS Terminal Themed Ribbon */}
      <div className="relative overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 relative">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-pink-600/30 to-red-600/20 animate-pulse"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="flex items-center space-x-6">
              {/* POS Terminal Icons */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Monitor className="h-5 w-5 text-white" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
              </div>
              
              {/* Ribbon Text */}
              <div className="text-center">
                <h1 className="text-white font-bold text-lg tracking-wide">
                  CANADA ENTERPRISE POS DEPLOYMENT SOLUTIONS
                </h1>
                <p className="text-gray-300 text-sm font-medium">
                  Advanced Hardware • Secure Transactions • Bilingual Support
                </p>
              </div>
              
              {/* Status Indicators */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300 text-xs font-medium">ONLINE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-red-300 text-xs font-medium">SECURE</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom border with gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500"></div>
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
              Back to Hardware Deployment Portal
            </button>
            <div className="flex items-center">
              <span className="text-4xl mr-4 filter drop-shadow-lg">🇨🇦</span>
              <div>
                <h1 className="text-3xl font-black text-gray-800">Canada Hardware Deployment</h1>
                <p className="text-gray-600 font-medium">Canadian Operations Hub</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-pink-50/50"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl blur-xl opacity-25"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Wrench className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="ml-8">
                <h2 className="text-4xl font-black text-gray-800 mb-3">Canada POS Hardware Deployment Center</h2>
                <p className="text-xl text-gray-600 font-medium">Comprehensive deployment services across all Canadian provinces</p>
              </div>
            </div>
            
            {/* Enhanced POS Terminal Showcase */}
            <div className="mb-8 h-56 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl flex items-center justify-center border-2 border-gray-200/50 shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5"></div>
              <div className="relative text-center z-10">
                <div className="flex items-center justify-center space-x-8 mb-6">
                  <div className="w-24 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl border border-gray-700 hover:shadow-3xl transition-shadow duration-300">
                    <Monitor className="h-12 w-12 text-gray-100" />
                  </div>
                  <div className="w-28 h-24 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    <CreditCard className="h-12 w-12 text-white" />
                  </div>
                  <div className="w-24 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl border border-gray-700 hover:shadow-3xl transition-shadow duration-300">
                    <Smartphone className="h-12 w-12 text-gray-100" />
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <p className="text-lg font-bold text-gray-700">Canadian POS Terminal Systems & Hardware</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 text-xl leading-relaxed font-medium">
              Access bilingual support, provincial compliance guides, specialized deployment resources, 
              and comprehensive technical documentation for Canadian retail technology infrastructure. 
              Our enterprise-grade solutions ensure seamless POS deployment across all provinces.
            </p>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tiles.map((tile) => {
            const IconComponent = tile.icon;
            return (
              <div 
                key={tile.id}
                className="group bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50 hover:border-gray-300/50 cursor-pointer transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(tile.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(tile.color)} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {tile.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                    {tile.description}
                  </p>
                  
                  <div className="space-y-3">
                    {tile.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className={`w-3 h-3 bg-gradient-to-r ${getColorClasses(tile.color)} rounded-full mr-4 shadow-sm`}></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="text-gray-600 hover:text-gray-900 font-bold text-sm group-hover:translate-x-2 transition-all duration-300 flex items-center">
                      Access Module
                      <ArrowLeft className="h-4 w-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Contact Information */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-200/50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-pink-50/30"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-gray-800 mb-8 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                <Phone className="h-6 w-6 text-white" />
              </div>
              Canada Support Center
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="group flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="font-black text-gray-800 text-lg">24/7 Support</p>
                  <p className="text-gray-600 font-semibold">+1 (800) POS-AIDE</p>
                </div>
              </div>
              
              <div className="group flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="font-black text-gray-800 text-lg">Email Support</p>
                  <p className="text-gray-600 font-semibold">deploy-ca@postech.com</p>
                </div>
              </div>
              
              <div className="group flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="font-black text-gray-800 text-lg">HQ Location</p>
                  <p className="text-gray-600 font-semibold">Toronto, ON M5H 2N2</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-red-500 mr-3" />
                  <span className="text-gray-700 font-black text-lg">25+ Support Engineers</span>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold">🍁 Bilingual Support</span>
                  <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-bold">⚡ Rapid Response</span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold">🛡️ Certified Technicians</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CanadaPage;