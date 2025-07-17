import React from 'react';
import { Monitor, ArrowRight, Zap, Shield, Wrench, Clock, Users, Globe2, Settings, Cpu, Wifi, CreditCard, Smartphone } from 'lucide-react';
import { PageType } from '../App';

interface LandingPageProps {
  onSelectCountry: (country: PageType) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSelectCountry }) => {
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
                  ENTERPRISE POS DEPLOYMENT SOLUTIONS
                </h1>
                <p className="text-gray-300 text-sm font-medium">
                  Advanced Hardware • Secure Transactions • 24/7 Support
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

      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Hero Section */}
        <div className="max-w-7xl w-full text-center mb-20">
          {/* Hero Text */}
          <div className="space-y-6 mb-16 mt-12">
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-slate-800 to-gray-700 bg-clip-text text-transparent leading-tight">
              Hardware
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Deployment
              </span>
              <span className="block text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 to-slate-600 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Next-generation POS system deployment, configuration, and support services across North America. 
              <span className="font-medium text-gray-700">Experience seamless retail technology integration.</span>
            </p>
          </div>

          {/* Feature Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
            {[
              { icon: Zap, label: 'Lightning Deploy', color: 'from-yellow-400 to-orange-500', delay: '0' },
              { icon: Shield, label: 'Bank-Grade Security', color: 'from-emerald-400 to-teal-500', delay: '100' },
              { icon: Wrench, label: '24/7 Expert Support', color: 'from-blue-400 to-indigo-500', delay: '200' },
              { icon: Clock, label: 'Real-Time Tracking', color: 'from-purple-400 to-pink-500', delay: '300' }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-700 font-semibold text-sm block">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Country Selection Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl w-full">
          {/* USA Card */}
          <div 
            onClick={() => onSelectCountry('usa')}
            className="group relative cursor-pointer transform hover:-translate-y-4 transition-all duration-700 hover:scale-105"
          >
            {/* Card Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-indigo-500/4 to-blue-600/8 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 border border-gray-200/30 shadow-2xl hover:shadow-blue-500/15 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Settings className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-4xl font-black text-gray-800 mb-2">United States</h2>
                    <p className="text-gray-600 font-medium">North American Operations Hub</p>
                  </div>
                </div>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">🇺🇸</div>
              </div>
              
              {/* POS Terminal Showcase */}
              <div className="mb-8 h-48 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl flex items-center justify-center border-2 border-gray-200/50 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-indigo-500/3"></div>
                <div className="relative text-center z-10">
                  <div className="flex items-center justify-center space-x-6 mb-6">
                    <div className="w-20 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center shadow-xl border border-gray-600">
                      <Monitor className="h-10 w-10 text-gray-100" />
                    </div>
                    <div className="w-24 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl">
                      <CreditCard className="h-10 w-10 text-white" />
                    </div>
                    <div className="w-20 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center shadow-xl border border-gray-600">
                      <Smartphone className="h-10 w-10 text-gray-100" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 bg-white/80 px-4 py-2 rounded-full">US POS Terminal Ecosystem</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  'Advanced POS hardware deployment & configuration',
                  'Federal compliance & enterprise security protocols',
                  'Coast-to-coast technical support infrastructure',
                  'State-specific deployment & regulatory guidelines'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4 shadow-sm"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Stats & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-600 font-semibold text-sm">50+ Engineers</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span className="bg-blue-100 px-2 py-1 rounded-full">🚀 Rapid Deploy</span>
                    <span className="bg-indigo-100 px-2 py-1 rounded-full">🛡️ Secure</span>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Canada Card */}
          <div 
            onClick={() => onSelectCountry('canada')}
            className="group relative cursor-pointer transform hover:-translate-y-4 transition-all duration-700 hover:scale-105"
          >
            {/* Card Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 via-pink-500/4 to-red-600/8 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 border border-gray-200/30 shadow-2xl hover:shadow-red-500/15 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Wrench className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-4xl font-black text-gray-800 mb-2">Canada</h2>
                    <p className="text-gray-600 font-medium">Canadian Operations Hub</p>
                  </div>
                </div>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">🇨🇦</div>
              </div>
              
              {/* POS Terminal Showcase */}
              <div className="mb-8 h-48 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl flex items-center justify-center border-2 border-gray-200/50 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5"></div>
                <div className="relative text-center z-10">
                  <div className="flex items-center justify-center space-x-6 mb-6">
                    <div className="w-20 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center shadow-xl border border-gray-600">
                      <Monitor className="h-10 w-10 text-gray-100" />
                    </div>
                    <div className="w-24 h-20 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-xl">
                      <CreditCard className="h-10 w-10 text-white" />
                    </div>
                    <div className="w-20 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center shadow-xl border border-gray-600">
                      <Smartphone className="h-10 w-10 text-gray-100" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 bg-white/80 px-4 py-2 rounded-full">Canadian POS Terminal Ecosystem</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  'Comprehensive POS hardware deployment & setup',
                  'Provincial compliance & regulatory frameworks',
                  'Bilingual technical support & documentation',
                  'Cross-provincial deployment coordination'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-4 shadow-sm"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Stats & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-gray-600 font-semibold text-sm">25+ Engineers</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span className="bg-red-100 px-2 py-1 rounded-full">🍁 Bilingual</span>
                    <span className="bg-pink-100 px-2 py-1 rounded-full">⚡ Expert</span>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-red-500 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 border border-gray-200/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Deploy?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join thousands of retailers who trust our hardware deployment expertise. 
              Access region-specific guides, technical documentation, and 24/7 expert support.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Rapid Deployment</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;