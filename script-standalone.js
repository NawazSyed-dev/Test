// Application State
let currentPage = 'landing';
let expandedFAQ = null;

// Debug logging
console.log('Script loaded, current page:', currentPage);

// SVG Icons
const icons = {
    monitor: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    creditCard: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    smartphone: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    arrowLeft: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
    arrowRight: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    zap: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>`,
    shield: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    wrench: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    clock: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
    users: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    settings: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    shoppingCart: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    package: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    fileText: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>`,
    truck: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    headphones: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
    phone: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mail: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    mapPin: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    helpCircle: `<svg class="icon icon-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    chevronDown: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"/></svg>`,
    chevronRight: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"/></svg>`
};

// Utility Functions
function createElement(tag, className = '', innerHTML = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

function createIcon(iconName, className = 'icon') {
    const span = createElement('span', className);
    span.innerHTML = icons[iconName] || '';
    return span;
}

// Page Components
function createRibbon(country = 'us') {
    const ribbon = createElement('div', 'relative overflow-hidden');
    
    const ribbonBg = createElement('div', 'ribbon');
    
    const content = createElement('div', 'ribbon-content');
    content.innerHTML = `
        <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-3">
                <div class="pos-icon pos-icon-emerald">
                    ${icons.monitor}
                </div>
                <div class="pos-icon pos-icon-${country === 'canada' ? 'red' : 'blue'}">
                    ${icons.creditCard}
                </div>
                <div class="pos-icon pos-icon-purple">
                    ${icons.smartphone}
                </div>
            </div>
            
            <div class="text-center">
                <h1 class="text-white font-bold text-lg tracking-wide">
                    ${country === 'canada' ? 'CANADA' : 'US'} ENTERPRISE POS DEPLOYMENT SOLUTIONS
                </h1>
                <p class="text-gray-300 text-sm font-medium">
                    Advanced Hardware • Secure Transactions • ${country === 'canada' ? 'Bilingual Support' : '24/7 Support'}
                </p>
            </div>
            
            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                    <div class="status-dot status-dot-emerald"></div>
                    <span class="text-emerald-300 text-xs font-medium">ONLINE</span>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="status-dot status-dot-${country === 'canada' ? 'red' : 'blue'}"></div>
                    <span class="text-${country === 'canada' ? 'red' : 'blue'}-300 text-xs font-medium">SECURE</span>
                </div>
            </div>
        </div>
    `;
    
    const border = createElement('div', 'ribbon-border');
    
    ribbonBg.appendChild(content);
    ribbon.appendChild(ribbonBg);
    ribbon.appendChild(border);
    
    return ribbon;
}

function createLandingPage() {
    const container = createElement('div', 'min-h-screen');
    
    // Ribbon
    container.appendChild(createRibbon());
    
    // Main content
    const main = createElement('div', 'min-h-screen flex flex-col items-center justify-center px-4 py-8');
    
    // Hero Section
    const hero = createElement('div', 'max-w-7xl w-full text-center mb-20');
    
    // Hero Text
    const heroText = createElement('div', 'space-y-6 mb-16 mt-12');
    heroText.innerHTML = `
        <h1 class="text-7xl md:text-8xl font-black text-gray-900 leading-tight">
            Hardware
            <span class="block text-blue-600">Deployment</span>
            <span class="block text-5xl md:text-6xl font-bold text-gray-700">Support</span>
        </h1>
        
        <p class="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Next-generation POS system deployment, configuration, and support services across North America. 
            <span class="font-medium text-gray-700">Experience seamless retail technology integration.</span>
        </p>
    `;
    
    // Feature Showcase
    const features = createElement('div', 'grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto');
    const featureData = [
        { icon: 'zap', label: 'Lightning Deploy', color: 'yellow' },
        { icon: 'shield', label: 'Bank-Grade Security', color: 'emerald' },
        { icon: 'wrench', label: '24/7 Expert Support', color: 'blue' },
        { icon: 'clock', label: 'Real-Time Tracking', color: 'purple' }
    ];
    
    featureData.forEach(feature => {
        const featureCard = createElement('div', 'glassmorphism p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up');
        featureCard.innerHTML = `
            <div class="feature-icon feature-icon-${feature.color}">
                ${icons[feature.icon]}
            </div>
            <span class="text-gray-700 font-semibold text-sm block">${feature.label}</span>
        `;
        features.appendChild(featureCard);
    });
    
    hero.appendChild(heroText);
    hero.appendChild(features);
    main.appendChild(hero);
    
    // Country Selection Cards
    const countryGrid = createElement('div', 'grid lg:grid-cols-2 gap-12 max-w-7xl w-full');
    
    // USA Card
    const usaCard = createElement('div', 'card card-blue rounded-3xl p-10 shadow-2xl transition-all duration-700');
    usaCard.innerHTML = `
        <div class="relative z-10">
            <div class="flex items-center justify-between mb-8">
                <div class="flex items-center">
                    <div class="service-icon service-icon-blue mr-6">
                        ${icons.settings}
                    </div>
                    <div>
                        <h2 class="text-4xl font-black text-gray-800 mb-2">United States</h2>
                        <p class="text-gray-600 font-medium">North American Operations Hub</p>
                    </div>
                </div>
                <div class="text-6xl filter drop-shadow-lg">🇺🇸</div>
            </div>
            
            <div class="pos-terminal pos-terminal-blue rounded-2xl flex items-center justify-center mb-8 h-48">
                <div class="relative text-center z-10">
                    <div class="flex items-center justify-center space-x-6 mb-6">
                        <div class="pos-device pos-device-monitor">
                            ${icons.monitor}
                        </div>
                        <div class="pos-device pos-device-card pos-device-card-blue">
                            ${icons.creditCard}
                        </div>
                        <div class="pos-device pos-device-phone">
                            ${icons.smartphone}
                        </div>
                    </div>
                    <p class="text-sm font-semibold text-gray-600 bg-white px-4 py-2 rounded-full">US POS Terminal Ecosystem</p>
                </div>
            </div>
            
            <div class="space-y-4 mb-8">
                <div class="flex items-center text-gray-700">
                    <div class="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <span class="font-medium">Advanced POS hardware deployment & configuration</span>
                </div>
                <div class="flex items-center text-gray-700">
                    <div class="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <span class="font-medium">Federal compliance & enterprise security protocols</span>
                </div>
                <div class="flex items-center text-gray-700">
                    <div class="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <span class="font-medium">Coast-to-coast technical support infrastructure</span>
                </div>
                <div class="flex items-center text-gray-700">
                    <div class="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <span class="font-medium">State-specific deployment & regulatory guidelines</span>
                </div>
            </div>
            
            <div class="flex items-center justify-between pt-6 border-t border-gray-200">
                <div class="flex items-center space-x-6">
                    <div class="flex items-center">
                        ${icons.users}
                        <span class="text-gray-600 font-semibold text-sm ml-2">50+ Engineers</span>
                    </div>
                    <div class="flex items-center space-x-2 text-xs text-gray-500">
                        <span class="badge badge-blue">🚀 Rapid Deploy</span>
                        <span class="badge badge-blue">🛡️ Secure</span>
                    </div>
                </div>
                ${icons.arrowRight}
            </div>
        </div>
    `;
    usaCard.addEventListener('click', () => navigateTo('usa'));
    
    // Canada Card
    const canadaCard = createElement('div', 'card card-red rounded-3xl p-10 shadow-2xl transition-all duration-700');
    canadaCard.innerHTML = `
        <div class="relative z-10">
            <div class="flex items-center justify-between mb-8">
                <div class="flex items-center">
                    <div class="service-icon service-icon-red mr-6">
                        ${icons.wrench}
                    </div>
                    <div>
                        <h2 class="text-4xl font-black text-gray-800 mb-2">Canada</h2>
                        <p class="text-gray-600 font-medium">Canadian Operations Hub</p>
                    </div>
                </div>
                <div class="text-6xl filter drop-shadow-lg">🇨🇦</div>
            </div>
            
            <div class="pos-terminal pos-terminal-red rounded-2xl flex items-center justify-center mb-8 h-48">
                <div class="relative text-center z-10">
                    <div class="flex items-center justify-center space-x-6 mb-6">
                        <div class="pos-device pos-device-monitor">
                            ${icons.monitor}
                        </div>
                        <div class="pos-device pos-device-card pos-device-card-red">
                            ${icons.creditCard}
                        </div>
                        <div class="pos-device pos-device-phone">
                            ${icons.smartphone}
                        </div>
                    </div>
                    <p class="text-sm font-semibold text-gray-600 bg-white px-4 py-2 rounded-full">Canadian POS Terminal Ecosystem</p>
                </div>
            </div>
            
            <div class="space-y-4 mb-8">
                <div class="flex items-center text-gray-700">
                    <div class="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                    <span class="font-medium">Comprehensive POS hardware deployment & setup</span>
                </div>
                <div class="flex items-center text-gray-700">
                    <div class="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                    <span class="font-medium">Provincial compliance & regulatory frameworks</span>
                </div>
                <div class="flex items-center text-gray-700">
                    <div class="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                    <span class="font-medium">Bilingual technical support & documentation</span>
                </div>
                <div class="flex items-center text-gray-700">
                    <div class="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                    <span class="font-medium">Cross-provincial deployment coordination</span>
                </div>
            </div>
            
            <div class="flex items-center justify-between pt-6 border-t border-gray-200">
                <div class="flex items-center space-x-6">
                    <div class="flex items-center">
                        ${icons.users}
                        <span class="text-gray-600 font-semibold text-sm ml-2">25+ Engineers</span>
                    </div>
                    <div class="flex items-center space-x-2 text-xs text-gray-500">
                        <span class="badge badge-red">🍁 Bilingual</span>
                        <span class="badge badge-red">⚡ Expert</span>
                    </div>
                </div>
                ${icons.arrowRight}
            </div>
        </div>
    `;
    canadaCard.addEventListener('click', () => navigateTo('canada'));
    
    countryGrid.appendChild(usaCard);
    countryGrid.appendChild(canadaCard);
    main.appendChild(countryGrid);
    
    // Bottom CTA
    const cta = createElement('div', 'mt-24 max-w-4xl mx-auto text-center');
    cta.innerHTML = `
        <div class="glassmorphism rounded-3xl p-8 shadow-2xl">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Ready to Deploy?</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
                Join thousands of retailers who trust our hardware deployment expertise. 
                Access region-specific guides, technical documentation, and 24/7 expert support.
            </p>
            <div class="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div class="flex items-center">
                    <div class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <span>Enterprise Security</span>
                </div>
                <div class="flex items-center">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Rapid Deployment</span>
                </div>
                <div class="flex items-center">
                    <div class="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span>Expert Support</span>
                </div>
            </div>
        </div>
    `;
    main.appendChild(cta);
    
    container.appendChild(main);
    return container;
}

function createUSAPage() {
    const container = createElement('div', 'min-h-screen');
    
    // Ribbon
    container.appendChild(createRibbon('us'));
    
    // Header
    const header = createElement('header', 'glassmorphism shadow-xl border-b border-gray-200');
    header.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 py-8">
            <div class="flex items-center justify-between">
                <button id="back-btn" class="btn btn-back">
                    ${icons.arrowLeft}
                    Back to Hardware Deployment Portal
                </button>
                <div class="flex items-center">
                    <span class="text-4xl mr-4 filter drop-shadow-lg">🇺🇸</span>
                    <div>
                        <h1 class="text-3xl font-black text-gray-800">US Hardware Deployment</h1>
                        <p class="text-gray-600 font-medium">North American Operations Hub</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Main Content
    const main = createElement('main', 'max-w-7xl mx-auto px-6 py-12');
    
    // Welcome Section
    const welcome = createElement('div', 'glassmorphism rounded-3xl p-10 shadow-2xl mb-12 relative overflow-hidden');
    welcome.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-50"></div>
        <div class="relative z-10">
            <div class="flex items-center mb-8">
                <div class="service-icon service-icon-blue mr-8">
                    ${icons.settings}
                </div>
                <div>
                    <h2 class="text-4xl font-black text-gray-800 mb-3">US POS Hardware Deployment Center</h2>
                    <p class="text-xl text-gray-600 font-medium">Comprehensive deployment services across all US states</p>
                </div>
            </div>
            
            <div class="pos-terminal pos-terminal-blue rounded-2xl flex items-center justify-center mb-8 h-56">
                <div class="relative text-center z-10">
                    <div class="flex items-center justify-center space-x-8 mb-6">
                        <div class="pos-device pos-device-monitor">
                            ${icons.monitor}
                        </div>
                        <div class="pos-device pos-device-card pos-device-card-blue">
                            ${icons.creditCard}
                        </div>
                        <div class="pos-device pos-device-phone">
                            ${icons.smartphone}
                        </div>
                    </div>
                    <div class="bg-white px-6 py-3 rounded-full shadow-lg">
                        <p class="text-lg font-bold text-gray-700">US POS Terminal Systems & Hardware</p>
                    </div>
                </div>
            </div>
            
            <p class="text-gray-700 text-xl leading-relaxed font-medium">
                Access deployment guides, technical documentation, compliance information, and 24/7 support 
                for retail technology infrastructure across the United States. Our enterprise-grade solutions 
                ensure seamless POS deployment nationwide.
            </p>
        </div>
    `;
    
    // Services Grid
    const services = createElement('div', 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12');
    const serviceData = [
        {
            title: 'Orders and Operations',
            description: 'Manage POS hardware orders, deployment schedules, and operational workflows',
            icon: 'shoppingCart',
            color: 'blue',
            features: ['Order Management', 'Deployment Scheduling', 'Workflow Tracking', 'Resource Allocation']
        },
        {
            title: 'Product and Supply',
            description: 'POS terminal inventory, supply chain management, and product specifications',
            icon: 'package',
            color: 'emerald',
            features: ['Inventory Management', 'Supply Chain', 'Product Specs', 'Vendor Relations']
        },
        {
            title: 'Procedures and Guidelines',
            description: 'Deployment procedures, installation guidelines, and compliance documentation',
            icon: 'fileText',
            color: 'purple',
            features: ['Installation Guides', 'Compliance Docs', 'Best Practices', 'Quality Standards']
        },
        {
            title: 'Service Standards and Ops Hours',
            description: 'Service level agreements, operational hours, and performance standards',
            icon: 'clock',
            color: 'orange',
            features: ['SLA Management', 'Operating Hours', 'Performance Metrics', 'Service Standards']
        },
        {
            title: 'Orders Tracking',
            description: 'Real-time tracking of POS deployment orders and installation progress',
            icon: 'truck',
            color: 'cyan',
            features: ['Real-time Tracking', 'Status Updates', 'Delivery Monitoring', 'Progress Reports']
        },
        {
            title: 'Contacts',
            description: 'Technical support contacts, regional teams, and escalation procedures',
            icon: 'headphones',
            color: 'rose',
            features: ['Support Contacts', 'Regional Teams', 'Escalation Matrix', 'Emergency Support']
        }
    ];
    
    serviceData.forEach(service => {
        const serviceCard = createElement('div', 'glassmorphism rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden');
        
        // Add click handler for Orders and Operations
        if (service.title === 'Orders and Operations') {
            serviceCard.addEventListener('click', () => navigateTo('orders-operations'));
        }
        
        serviceCard.innerHTML = `
            <div class="relative z-10">
                <div class="service-icon service-icon-${service.color} mb-6">
                    ${icons[service.icon]}
                </div>
                
                <h3 class="text-2xl font-black text-gray-800 mb-4">${service.title}</h3>
                
                <p class="text-gray-600 mb-6 leading-relaxed font-medium">${service.description}</p>
                
                <div class="space-y-3">
                    ${service.features.map(feature => `
                        <div class="flex items-center text-gray-600">
                            <div class="w-3 h-3 bg-${service.color === 'rose' ? 'red' : service.color}-500 rounded-full mr-4"></div>
                            <span class="font-medium">${feature}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-6 pt-6 border-t border-gray-200">
                    <button class="text-gray-600 hover:text-gray-900 font-bold text-sm hover:translate-x-2 transition-all duration-300 flex items-center">
                        Access Module
                        ${icons.arrowRight}
                    </button>
                </div>
            </div>
        `;
        services.appendChild(serviceCard);
    });
    
    // Contact Information
    const contact = createElement('div', 'glassmorphism rounded-3xl p-10 shadow-2xl relative overflow-hidden');
    contact.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-30"></div>
        <div class="relative z-10">
            <h2 class="text-3xl font-black text-gray-800 mb-8 flex items-center">
                <div class="contact-icon contact-icon-blue mr-4">
                    ${icons.phone}
                </div>
                US Support Center
            </h2>
            
            <div class="grid md:grid-cols-3 gap-8 mb-8">
                <div class="flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div class="contact-icon contact-icon-blue">
                        ${icons.phone}
                    </div>
                    <div>
                        <p class="font-black text-gray-800 text-lg">24/7 Support</p>
                        <p class="text-gray-600 font-semibold">+1 (800) POS-HELP</p>
                    </div>
                </div>
                
                <div class="flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div class="contact-icon contact-icon-emerald">
                        ${icons.mail}
                    </div>
                    <div>
                        <p class="font-black text-gray-800 text-lg">Email Support</p>
                        <p class="text-gray-600 font-semibold">deploy-us@postech.com</p>
                    </div>
                </div>
                
                <div class="flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div class="contact-icon contact-icon-purple">
                        ${icons.mapPin}
                    </div>
                    <div>
                        <p class="font-black text-gray-800 text-lg">HQ Location</p>
                        <p class="text-gray-600 font-semibold">Dallas, TX 75201</p>
                    </div>
                </div>
            </div>
            
            <div class="pt-8 border-t border-gray-200">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        ${icons.users}
                        <span class="text-gray-700 font-black text-lg ml-3">50+ Support Engineers</span>
                    </div>
                    <div class="flex items-center space-x-6 text-sm">
                        <span class="badge badge-blue">🔧 Hardware Specialists</span>
                        <span class="badge badge-emerald">⚡ Rapid Response</span>
                        <span class="badge badge-purple">🛡️ Certified Technicians</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    main.appendChild(welcome);
    main.appendChild(services);
    main.appendChild(contact);
    
    container.appendChild(header);
    container.appendChild(main);
    
    // Add event listener for back button
    container.querySelector('#back-btn').addEventListener('click', () => navigateTo('landing'));
    
    return container;
}

function createCanadaPage() {
    const container = createElement('div', 'min-h-screen');
    
    // Ribbon
    container.appendChild(createRibbon('canada'));
    
    // Header
    const header = createElement('header', 'glassmorphism shadow-xl border-b border-gray-200');
    header.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 py-8">
            <div class="flex items-center justify-between">
                <button id="back-btn" class="btn btn-back">
                    ${icons.arrowLeft}
                    Back to Hardware Deployment Portal
                </button>
                <div class="flex items-center">
                    <span class="text-4xl mr-4 filter drop-shadow-lg">🇨🇦</span>
                    <div>
                        <h1 class="text-3xl font-black text-gray-800">Canada Hardware Deployment</h1>
                        <p class="text-gray-600 font-medium">Canadian Operations Hub</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Main Content
    const main = createElement('main', 'max-w-7xl mx-auto px-6 py-12');
    
    // Welcome Section
    const welcome = createElement('div', 'glassmorphism rounded-3xl p-10 shadow-2xl mb-12 relative overflow-hidden');
    welcome.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-pink-50 opacity-50"></div>
        <div class="relative z-10">
            <div class="flex items-center mb-8">
                <div class="service-icon service-icon-red mr-8">
                    ${icons.wrench}
                </div>
                <div>
                    <h2 class="text-4xl font-black text-gray-800 mb-3">Canada POS Hardware Deployment Center</h2>
                    <p class="text-xl text-gray-600 font-medium">Comprehensive deployment services across all Canadian provinces</p>
                </div>
            </div>
            
            <div class="pos-terminal pos-terminal-red rounded-2xl flex items-center justify-center mb-8 h-56">
                <div class="relative text-center z-10">
                    <div class="flex items-center justify-center space-x-8 mb-6">
                        <div class="pos-device pos-device-monitor">
                            ${icons.monitor}
                        </div>
                        <div class="pos-device pos-device-card pos-device-card-red">
                            ${icons.creditCard}
                        </div>
                        <div class="pos-device pos-device-phone">
                            ${icons.smartphone}
                        </div>
                    </div>
                    <div class="bg-white px-6 py-3 rounded-full shadow-lg">
                        <p class="text-lg font-bold text-gray-700">Canadian POS Terminal Systems & Hardware</p>
                    </div>
                </div>
            </div>
            
            <p class="text-gray-700 text-xl leading-relaxed font-medium">
                Access bilingual support, provincial compliance guides, specialized deployment resources, 
                and comprehensive technical documentation for Canadian retail technology infrastructure. 
                Our enterprise-grade solutions ensure seamless POS deployment across all provinces.
            </p>
        </div>
    `;
    
    // Services Grid
    const services = createElement('div', 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12');
    const serviceData = [
        {
            title: 'Orders and Operations',
            description: 'Manage POS hardware orders, deployment schedules, and operational workflows',
            icon: 'shoppingCart',
            color: 'red',
            features: ['Order Management', 'Deployment Scheduling', 'Workflow Tracking', 'Resource Allocation']
        },
        {
            title: 'Product and Supply',
            description: 'POS terminal inventory, supply chain management, and product specifications',
            icon: 'package',
            color: 'emerald',
            features: ['Inventory Management', 'Supply Chain', 'Product Specs', 'Vendor Relations']
        },
        {
            title: 'Procedures and Guidelines',
            description: 'Deployment procedures, installation guidelines, and compliance documentation',
            icon: 'fileText',
            color: 'purple',
            features: ['Installation Guides', 'Compliance Docs', 'Best Practices', 'Quality Standards']
        },
        {
            title: 'Service Standards and Ops Hours',
            description: 'Service level agreements, operational hours, and performance standards',
            icon: 'clock',
            color: 'orange',
            features: ['SLA Management', 'Operating Hours', 'Performance Metrics', 'Service Standards']
        },
        {
            title: 'Orders Tracking',
            description: 'Real-time tracking of POS deployment orders and installation progress',
            icon: 'truck',
            color: 'cyan',
            features: ['Real-time Tracking', 'Status Updates', 'Delivery Monitoring', 'Progress Reports']
        },
        {
            title: 'Contacts',
            description: 'Technical support contacts, regional teams, and escalation procedures',
            icon: 'headphones',
            color: 'pink',
            features: ['Support Contacts', 'Regional Teams', 'Escalation Matrix', 'Emergency Support']
        }
    ];
    
    serviceData.forEach(service => {
        const serviceCard = createElement('div', 'glassmorphism rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden');
        serviceCard.innerHTML = `
            <div class="relative z-10">
                <div class="service-icon service-icon-${service.color} mb-6">
                    ${icons[service.icon]}
                </div>
                
                <h3 class="text-2xl font-black text-gray-800 mb-4">${service.title}</h3>
                
                <p class="text-gray-600 mb-6 leading-relaxed font-medium">${service.description}</p>
                
                <div class="space-y-3">
                    ${service.features.map(feature => `
                        <div class="flex items-center text-gray-600">
                            <div class="w-3 h-3 bg-${service.color === 'pink' ? 'red' : service.color}-500 rounded-full mr-4"></div>
                            <span class="font-medium">${feature}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="mt-6 pt-6 border-t border-gray-200">
                    <button class="text-gray-600 hover:text-gray-900 font-bold text-sm hover:translate-x-2 transition-all duration-300 flex items-center">
                        Access Module
                        ${icons.arrowRight}
                    </button>
                </div>
            </div>
        `;
        services.appendChild(serviceCard);
    });
    
    // Contact Information
    const contact = createElement('div', 'glassmorphism rounded-3xl p-10 shadow-2xl relative overflow-hidden');
    contact.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-pink-50 opacity-30"></div>
        <div class="relative z-10">
            <h2 class="text-3xl font-black text-gray-800 mb-8 flex items-center">
                <div class="contact-icon contact-icon-red mr-4">
                    ${icons.phone}
                </div>
                Canada Support Center
            </h2>
            
            <div class="grid md:grid-cols-3 gap-8 mb-8">
                <div class="flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div class="contact-icon contact-icon-red">
                        ${icons.phone}
                    </div>
                    <div>
                        <p class="font-black text-gray-800 text-lg">24/7 Support</p>
                        <p class="text-gray-600 font-semibold">+1 (800) POS-AIDE</p>
                    </div>
                </div>
                
                <div class="flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div class="contact-icon contact-icon-emerald">
                        ${icons.mail}
                    </div>
                    <div>
                        <p class="font-black text-gray-800 text-lg">Email Support</p>
                        <p class="text-gray-600 font-semibold">deploy-ca@postech.com</p>
                    </div>
                </div>
                
                <div class="flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div class="contact-icon contact-icon-purple">
                        ${icons.mapPin}
                    </div>
                    <div>
                        <p class="font-black text-gray-800 text-lg">HQ Location</p>
                        <p class="text-gray-600 font-semibold">Toronto, ON M5H 2N2</p>
                    </div>
                </div>
            </div>
            
            <div class="pt-8 border-t border-gray-200">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        ${icons.users}
                        <span class="text-gray-700 font-black text-lg ml-3">25+ Support Engineers</span>
                    </div>
                    <div class="flex items-center space-x-6 text-sm">
                        <span class="badge badge-red">🍁 Bilingual Support</span>
                        <span class="badge badge-emerald">⚡ Rapid Response</span>
                        <span class="badge badge-purple">🛡️ Certified Technicians</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    main.appendChild(welcome);
    main.appendChild(services);
    main.appendChild(contact);
    
    container.appendChild(header);
    container.appendChild(main);
    
    // Add event listener for back button
    container.querySelector('#back-btn').addEventListener('click', () => navigateTo('landing'));
    
    return container;
}

function createOrdersOperationsPage() {
    const container = createElement('div', 'min-h-screen');
    
    // Ribbon
    container.appendChild(createRibbon('us'));
    
    // Header
    const header = createElement('header', 'glassmorphism shadow-xl border-b border-gray-200');
    header.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 py-8">
            <div class="flex items-center justify-between">
                <button id="back-btn" class="btn btn-back">
                    ${icons.arrowLeft}
                    Back to US Hardware Deployment
                </button>
                <div class="flex items-center">
                    <div class="contact-icon contact-icon-blue mr-4">
                        ${icons.shoppingCart}
                    </div>
                    <div>
                        <h1 class="text-3xl font-black text-gray-800">Orders and Operations</h1>
                        <p class="text-gray-600 font-medium">Order Management & Deployment Workflows</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Main Content
    const main = createElement('main', 'max-w-7xl mx-auto px-6 py-12');
    
    // Welcome Section
    const welcome = createElement('div', 'glassmorphism rounded-3xl p-10 shadow-2xl mb-12 relative overflow-hidden');
    welcome.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-50"></div>
        <div class="relative z-10">
            <div class="flex items-center mb-8">
                <div class="service-icon service-icon-blue mr-8">
                    ${icons.shoppingCart}
                </div>
                <div>
                    <h2 class="text-4xl font-black text-gray-800 mb-3">Orders & Operations Support</h2>
                    <p class="text-xl text-gray-600 font-medium">Comprehensive guidance for order management and deployment workflows</p>
                </div>
            </div>
            
            <p class="text-gray-700 text-xl leading-relaxed font-medium">
                Find answers to common questions about order processing, deployment scheduling, workflow management, 
                and operational procedures. Our comprehensive knowledge base helps you resolve issues quickly and efficiently.
            </p>
        </div>
    `;
    
    // FAQ Section
    const faqSection = createElement('div', 'glassmorphism rounded-3xl p-10 shadow-2xl mb-12 relative overflow-hidden');
    faqSection.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-30"></div>
        <div class="relative z-10">
            <div class="flex items-center mb-8">
                <div class="contact-icon contact-icon-blue mr-4">
                    ${icons.helpCircle}
                </div>
                <h2 class="text-3xl font-black text-gray-800">Frequently Asked Questions</h2>
            </div>
            
            <div id="faq-container" class="space-y-4"></div>
        </div>
    `;
    
    // Contact Support Section
    const contactSupport = createElement('div', 'glassmorphism rounded-3xl p-10 shadow-2xl relative overflow-hidden');
    contactSupport.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-30"></div>
        <div class="relative z-10 text-center">
            <h3 class="text-2xl font-black text-gray-800 mb-4">Need Additional Support?</h3>
            <p class="text-gray-600 mb-6 text-lg">
                Can't find the answer you're looking for? Our expert support team is available 24/7 to assist you.
            </p>
            <div class="flex items-center justify-center space-x-8">
                <div class="flex items-center">
                    <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span class="text-gray-700 font-semibold">24/7 Phone Support: +1 (800) POS-HELP</span>
                </div>
                <div class="flex items-center">
                    <div class="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                    <span class="text-gray-700 font-semibold">Email: deploy-us@postech.com</span>
                </div>
            </div>
        </div>
    `;
    
    main.appendChild(welcome);
    main.appendChild(faqSection);
    main.appendChild(contactSupport);
    
    container.appendChild(header);
    container.appendChild(main);
    
    // Add event listener for back button
    container.querySelector('#back-btn').addEventListener('click', () => navigateTo('usa'));
    
    // Create FAQ items
    createFAQItems();
    
    return container;
}

function createFAQItems() {
    const faqData = [
        {
            id: 1,
            question: "What do I do if the merchant order is missing items?",
            answer: `If a merchant order is missing items, follow these steps:

**1. Verify the Order**: Check the original order confirmation and packing slip to confirm what items should have been included.

**2. Document the Issue**: Take photos of the received items and packaging. Note the tracking number and delivery date.

**3. Contact Support Immediately**: Call our 24/7 support line at +1 (800) POS-HELP or email deploy-us@postech.com with:
   - Order number
   - Missing item details
   - Photos of received items
   - Merchant contact information

**4. Expedite Replacement**: We will immediately ship the missing items via overnight delivery at no additional cost.

**5. Update Merchant**: Inform the merchant of the situation and provide them with the new tracking information for the replacement items.

**6. Follow Up**: Ensure the merchant receives the missing items and confirm the installation can proceed as scheduled.

**Important**: Do not proceed with installation until all required items are present, as this may cause delays and additional service calls.`
        }
    ];
    
    const faqContainer = document.getElementById('faq-container');
    
    faqData.forEach(item => {
        const faqItem = createElement('div', 'faq-item');
        
        const button = createElement('button', 'faq-button');
        button.innerHTML = `
            <h3 class="text-xl font-bold text-gray-800 pr-4">${item.question}</h3>
            <div class="flex-shrink-0">
                <span id="chevron-${item.id}">${icons.chevronRight}</span>
            </div>
        `;
        
        const content = createElement('div', 'hidden');
        content.id = `content-${item.id}`;
        content.innerHTML = `
            <div class="faq-content">
                <div class="pt-6">
                    ${item.answer.split('\n').map(paragraph => 
                        paragraph.trim() ? `<p class="faq-answer">${paragraph}</p>` : ''
                    ).join('')}
                </div>
            </div>
        `;
        
        button.addEventListener('click', () => toggleFAQ(item.id));
        
        faqItem.appendChild(button);
        faqItem.appendChild(content);
        faqContainer.appendChild(faqItem);
    });
}

function toggleFAQ(id) {
    const content = document.getElementById(`content-${id}`);
    const chevron = document.getElementById(`chevron-${id}`);
    
    if (expandedFAQ === id) {
        // Close current
        content.classList.add('hidden');
        chevron.innerHTML = icons.chevronRight;
        expandedFAQ = null;
    } else {
        // Close any open FAQ
        if (expandedFAQ) {
            const prevContent = document.getElementById(`content-${expandedFAQ}`);
            const prevChevron = document.getElementById(`chevron-${expandedFAQ}`);
            prevContent.classList.add('hidden');
            prevChevron.innerHTML = icons.chevronRight;
        }
        
        // Open new FAQ
        content.classList.remove('hidden');
        chevron.innerHTML = icons.chevronDown;
        expandedFAQ = id;
    }
}

// Navigation
function navigateTo(page) {
    currentPage = page;
    expandedFAQ = null;
    render();
}

function render() {
    const app = document.getElementById('app');
    if (!app) {
        console.error('App element not found during render!');
        return;
    }
    
    console.log('Rendering page:', currentPage);
    app.innerHTML = '';
    
    let pageComponent;
    
    switch (currentPage) {
        case 'usa':
            pageComponent = createUSAPage();
            break;
        case 'canada':
            pageComponent = createCanadaPage();
            break;
        case 'orders-operations':
            pageComponent = createOrdersOperationsPage();
            break;
        default:
            pageComponent = createLandingPage();
    }
    
    app.appendChild(pageComponent);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing app...');
    const app = document.getElementById('app');
    if (!app) {
        console.error('App element not found!');
        return;
    }
    console.log('App element found, rendering...');
    render();
});