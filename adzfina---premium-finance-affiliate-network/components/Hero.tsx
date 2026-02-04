import React, { useState } from 'react';
import { ArrowRight, Search, Bell, ChevronDown, LayoutDashboard, ShoppingBag, FileText, CreditCard, Settings, LogOut, TrendingUp, Users } from 'lucide-react';
import { Logo } from './Logo';
import { useInteraction } from './InteractionContext';

export const Hero: React.FC = () => {
  const { showToast, openAuthModal, scrollToSection } = useInteraction();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSidebarClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleWithdraw = () => {
    showToast('Withdrawal request initiated via Wire Transfer', 'success');
  };

  const handleOfferClick = (offerName: string) => {
    showToast(`Redirecting to ${offerName} offer details...`, 'info');
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold mb-8 animate-fade-in-up border border-zinc-200 cursor-pointer hover:bg-zinc-200 transition-colors"
          onClick={() => scrollToSection('features')}
        >
           <span className="w-2 h-2 rounded-full bg-lime-400"></span>
           Powered by AdzFina
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto">
          Join. Convert. <span className="text-zinc-400">Profit.</span><br className="hidden md:block"/>
          <span className="relative inline-block mt-2">
             Powered by AdzFina.
             {/* Underline decoration */}
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-lime-300 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
             </svg>
          </span>
        </h1>
        
        <p className="text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Maximize your earnings with top-paying forex and crypto offers. Get exclusive deals, fast payouts, and industry-leading support — all in one powerful network.
        </p>

        <div className="flex items-center justify-center gap-4 mb-20">
           <button onClick={openAuthModal} className="bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
             Get Started
           </button>
           <button onClick={() => scrollToSection('features')} className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all flex items-center gap-2">
             Learn More <ArrowRight size={16} />
           </button>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="relative max-w-[1100px] mx-auto">
           {/* Decorative Elements */}
           <div className="absolute -top-12 -right-12 w-64 h-64 bg-lime-300 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
           <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-300 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

           {/* The Main Card Interface */}
           <div className="bg-zinc-900 p-2 sm:p-3 rounded-[2rem] shadow-2xl relative z-10">
              {/* Inner Window */}
              <div className="bg-zinc-50 rounded-[1.5rem] overflow-hidden flex min-h-[700px] text-left">
                  
                  {/* SIDEBAR */}
                  <div className="hidden md:flex w-64 bg-white border-r border-zinc-100 flex-col justify-between p-6">
                      <div>
                          <div className="mb-10 pl-2 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
                              <Logo className="h-8" />
                          </div>

                          <div className="space-y-1">
                              {[
                                { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
                                { id: 'marketplace', icon: ShoppingBag, label: 'Marketplace' },
                                { id: 'reports', icon: FileText, label: 'Reports' },
                                { id: 'payments', icon: CreditCard, label: 'Payments' },
                                { id: 'settings', icon: Settings, label: 'Settings' }
                              ].map((item) => (
                                <div 
                                  key={item.id}
                                  onClick={() => handleSidebarClick(item.id)}
                                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                                    activeTab === item.id 
                                    ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-200' 
                                    : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                                  }`}
                                >
                                    <item.icon size={18} />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </div>
                              ))}
                          </div>
                      </div>

                      <div className="border-t border-zinc-100 pt-6">
                           <div className="bg-lime-50 p-4 rounded-xl mb-6 border border-lime-100 cursor-help" title="Contact Support">
                               <p className="text-xs font-bold text-lime-800 mb-1">Account Manager</p>
                               <div className="flex items-center gap-2">
                                   <div className="w-6 h-6 rounded-full bg-lime-200 flex items-center justify-center text-lime-700 text-xs font-bold">SJ</div>
                                   <p className="text-xs text-lime-700">Sarah Jenkins</p>
                               </div>
                           </div>
                           <div onClick={() => showToast('Signed out successfully (Demo)', 'info')} className="flex items-center gap-2 text-zinc-400 hover:text-zinc-600 cursor-pointer text-xs font-medium">
                               <LogOut size={14} /> Sign out
                           </div>
                      </div>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="flex-1 bg-[#f8f9fc] overflow-y-auto no-scrollbar">
                      
                      {/* Top Bar */}
                      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-zinc-200 px-8 py-4 flex justify-between items-center">
                          <h2 className="text-xl font-bold text-zinc-900 capitalize">{activeTab}</h2>
                          <div className="flex items-center gap-4">
                              <div className="hidden sm:flex items-center gap-2 bg-white border border-zinc-200 px-3 py-1.5 rounded-full text-xs text-zinc-500 shadow-sm focus-within:border-zinc-400 focus-within:ring-1 focus-within:ring-zinc-100 transition-all">
                                  <Search size={14} /> 
                                  <input 
                                    type="text" 
                                    placeholder="Search brands..." 
                                    className="bg-transparent outline-none w-24 sm:w-32 placeholder-zinc-400 text-zinc-900"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && showToast(`Searching for "${searchQuery}"`, 'info')}
                                  />
                                  <span className="ml-2 text-zinc-300 hidden md:inline">⌘K</span>
                              </div>
                              <div onClick={() => showToast('No new notifications', 'info')} className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 relative cursor-pointer hover:bg-zinc-50 transition-colors">
                                  <Bell size={16} />
                                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                              </div>
                              <div className="flex items-center gap-2 cursor-pointer hover:opacity-80" onClick={() => setActiveTab('settings')}>
                                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200" alt="User" />
                                  <ChevronDown size={14} className="text-zinc-400" />
                              </div>
                          </div>
                      </header>

                      <div className="p-8 space-y-8">
                          
                          {/* Stats Row */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                              {/* Clicks */}
                              <div className="bg-white p-6 rounded-3xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-zinc-100 hover:shadow-lg transition-shadow cursor-default group">
                                  <div className="flex justify-between items-start mb-4">
                                      <div className="p-2 bg-zinc-50 rounded-xl text-zinc-500 group-hover:text-zinc-900 transition-colors">
                                          <Users size={20} />
                                      </div>
                                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                                  </div>
                                  <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Total Clicks</p>
                                  <h3 className="text-2xl font-bold text-zinc-900">35,092</h3>
                              </div>

                              {/* FTDs */}
                              <div className="bg-white p-6 rounded-3xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-zinc-100 hover:shadow-lg transition-shadow cursor-default group">
                                  <div className="flex justify-between items-start mb-4">
                                      <div className="p-2 bg-lime-50 rounded-xl text-lime-600 group-hover:text-lime-700 transition-colors">
                                          <UserCheckIcon />
                                      </div>
                                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+5%</span>
                                  </div>
                                  <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">FTDs / Qualified</p>
                                  <div className="flex items-end gap-2">
                                      <h3 className="text-2xl font-bold text-zinc-900">174</h3>
                                      <span className="text-sm font-medium text-zinc-400 mb-1">/ 69 QFTD</span>
                                  </div>
                              </div>

                              {/* Revenue */}
                              <div className="bg-zinc-900 p-6 rounded-3xl shadow-xl shadow-zinc-200 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform cursor-default">
                                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-lime-400 rounded-full blur-[40px] opacity-20"></div>
                                  <div className="flex justify-between items-start mb-4 relative z-10">
                                      <div className="p-2 bg-white/10 rounded-xl text-lime-400">
                                          <CreditCard size={20} />
                                      </div>
                                  </div>
                                  <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1 relative z-10">Total Revenue</p>
                                  <h3 className="text-2xl font-bold text-white relative z-10">$28,450.00</h3>
                              </div>

                              {/* Balance */}
                              <div className="bg-white p-6 rounded-3xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-zinc-100 hover:shadow-lg transition-shadow">
                                  <div className="flex justify-between items-start mb-4">
                                      <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
                                          <TrendingUp size={20} />
                                      </div>
                                      <button onClick={handleWithdraw} className="text-[10px] font-bold text-zinc-600 border border-zinc-200 px-2 py-1 rounded hover:bg-zinc-900 hover:text-white transition-all">Withdraw</button>
                                  </div>
                                  <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Unpaid Balance</p>
                                  <h3 className="text-2xl font-bold text-zinc-900">$12,500.00</h3>
                              </div>
                          </div>

                          <div className="grid lg:grid-cols-3 gap-8">
                              {/* Chart Section */}
                              <div className="lg:col-span-2 bg-white p-6 rounded-[2rem] border border-zinc-100 shadow-sm">
                                  <div className="flex items-center justify-between mb-8">
                                      <div>
                                          <h3 className="font-bold text-lg text-zinc-900">Revenue Performance</h3>
                                          <p className="text-sm text-zinc-400">Comparing to last month</p>
                                      </div>
                                      <div className="flex items-center gap-2">
                                          <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100">
                                              <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                                              <span className="text-xs font-medium text-zinc-600">Current</span>
                                          </div>
                                          <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100">
                                              <span className="w-2 h-2 rounded-full bg-zinc-300"></span>
                                              <span className="text-xs font-medium text-zinc-600">Previous</span>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  {/* Line Chart Vis */}
                                  <div className="h-64 w-full relative group cursor-crosshair">
                                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-zinc-900 text-white text-xs px-2 py-1 rounded pointer-events-none transition-opacity z-20">
                                        View detailed report
                                      </div>
                                      <svg viewBox="0 0 800 300" className="w-full h-full overflow-visible">
                                          {/* Grid Lines */}
                                          <line x1="0" y1="225" x2="800" y2="225" stroke="#f4f4f5" strokeWidth="1" />
                                          <line x1="0" y1="150" x2="800" y2="150" stroke="#f4f4f5" strokeWidth="1" />
                                          <line x1="0" y1="75" x2="800" y2="75" stroke="#f4f4f5" strokeWidth="1" />
                                          
                                          {/* Smooth Line Curve */}
                                          <path 
                                            d="M0 250 C 100 200, 200 280, 300 150 C 400 50, 500 100, 600 80 C 700 60, 800 20, 800 20"
                                            fill="none"
                                            stroke="#18181b"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                          />
                                          {/* Area under curve */}
                                          <path 
                                            d="M0 250 C 100 200, 200 280, 300 150 C 400 50, 500 100, 600 80 C 700 60, 800 20, 800 20 V 300 H 0 Z"
                                            fill="url(#gradient)"
                                            opacity="0.1"
                                          />
                                          <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                              <stop offset="0%" stopColor="#18181b" />
                                              <stop offset="100%" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                          </defs>

                                          {/* Previous Month (Grey Line) */}
                                          <path 
                                            d="M0 280 C 100 250, 200 200, 300 220 C 400 180, 500 200, 600 150 C 700 120, 800 100, 800 100"
                                            fill="none"
                                            stroke="#e4e4e7"
                                            strokeWidth="2"
                                            strokeDasharray="5,5"
                                          />

                                          {/* Highlight Dot */}
                                          <circle cx="300" cy="150" r="6" fill="#bef264" stroke="#18181b" strokeWidth="2" className="animate-pulse" />
                                          
                                          {/* Tooltip */}
                                          <g transform="translate(280, 110)">
                                              <rect width="60" height="30" rx="6" fill="#18181b" />
                                              <text x="30" y="20" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">$4,250</text>
                                          </g>
                                      </svg>
                                  </div>
                              </div>

                              {/* Marketplace List */}
                              <div className="bg-white p-6 rounded-[2rem] border border-zinc-100 shadow-sm flex flex-col">
                                  <div className="flex justify-between items-center mb-6">
                                      <h3 className="font-bold text-lg text-zinc-900">Top Offers</h3>
                                      <button onClick={() => setActiveTab('marketplace')} className="text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors">
                                        <ArrowRight size={16} />
                                      </button>
                                  </div>
                                  
                                  <div className="flex-1 space-y-4">
                                      {[
                                          { name: "Eightcap", cpa: "$800", type: "CPA", logo: "8" },
                                          { name: "Exness", cpa: "$400", type: "CPA", logo: "E" },
                                          { name: "XM Global", cpa: "$600", type: "CPA", logo: "X" },
                                          { name: "Vantage", cpa: "$500", type: "CPA", logo: "V" },
                                          { name: "IC Markets", cpa: "$15/Lot", type: "IB", logo: "I" },
                                      ].map((offer, i) => (
                                          <div key={i} onClick={() => handleOfferClick(offer.name)} className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 transition-colors group cursor-pointer border border-transparent hover:border-zinc-100">
                                              <div className="flex items-center gap-3">
                                                  <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-600 font-bold flex items-center justify-center text-sm group-hover:bg-white group-hover:shadow-sm transition-all">
                                                      {offer.logo}
                                                  </div>
                                                  <div>
                                                      <p className="text-sm font-bold text-zinc-900">{offer.name}</p>
                                                      <p className="text-[10px] font-medium text-zinc-400 bg-zinc-50 px-1.5 rounded inline-block border border-zinc-100">{offer.type}</p>
                                                  </div>
                                              </div>
                                              <div className="text-right">
                                                  <p className="text-sm font-bold text-zinc-900">{offer.cpa}</p>
                                                  <p className="text-[10px] text-green-600 font-medium">High Conv.</p>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
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

// Custom icon for visual variety
const UserCheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
    </svg>
);
