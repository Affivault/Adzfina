import React, { useState } from 'react';
import { ArrowRight, Link2, BarChart2, Star, Rocket, ShieldCheck, CreditCard, Users, Zap, Coins, Wallet, Landmark, Bitcoin } from 'lucide-react';
import { useInteraction } from './InteractionContext';

export const Features: React.FC = () => {
  const { openAuthModal } = useInteraction();
  const [selectedPayment, setSelectedPayment] = useState('crypto');

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Feature: Payments & Analytics */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
            {/* Payments Card (Formerly Integrations) */}
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-12 border border-zinc-100 relative overflow-hidden group flex flex-col">
                <div className="absolute top-8 right-8 bg-white p-3 rounded-2xl shadow-sm border border-zinc-100 text-lime-600">
                    <Wallet size={24} />
                </div>
                <div className="relative z-10 mt-4 flex-1">
                    <h3 className="text-3xl font-bold text-zinc-900 mb-4">Fast & Flexible Payments</h3>
                    <p className="text-zinc-500 leading-relaxed mb-8 max-w-sm">
                        Get paid faster with our diverse withdrawal options. Choose from Crypto, Wire Transfer, PayPal, and more.
                    </p>
                    <div className="flex gap-2 mb-8 flex-wrap">
                        {['Crypto', 'Wire Transfer', 'PayPal'].map((method) => (
                          <span 
                            key={method}
                            onClick={() => setSelectedPayment(method === 'Crypto' ? 'crypto' : method === 'Wire Transfer' ? 'bank' : 'paypal')}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold border shadow-sm flex items-center gap-1 cursor-pointer transition-colors ${
                              (selectedPayment === 'crypto' && method === 'Crypto') || (selectedPayment === 'bank' && method === 'Wire Transfer') || (selectedPayment === 'paypal' && method === 'PayPal')
                              ? 'bg-zinc-900 text-white border-zinc-900' 
                              : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
                            }`}
                          >
                               {method}
                          </span>
                        ))}
                    </div>
                </div>
                 {/* Visual Mockup for Payments */}
                 <div className="mt-8 bg-white rounded-2xl shadow-lg border border-zinc-100 p-6 transform translate-y-4 group-hover:translate-y-2 transition-transform w-full max-w-md mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-zinc-500 uppercase">Select Method</span>
                        <span className="text-xs font-bold text-lime-600">Balance: $4,250</span>
                    </div>
                    <div className="space-y-3">
                         <div 
                           onClick={() => setSelectedPayment('crypto')}
                           className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${selectedPayment === 'crypto' ? 'border-lime-200 bg-lime-50' : 'border-zinc-100 bg-white hover:border-zinc-200'}`}
                         >
                             <div className="flex items-center gap-3">
                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm border ${selectedPayment === 'crypto' ? 'bg-white text-lime-600 border-lime-100' : 'bg-zinc-50 text-zinc-500 border-zinc-100'}`}>
                                     <Bitcoin size={16} />
                                 </div>
                                 <span className={`font-bold text-sm ${selectedPayment === 'crypto' ? 'text-zinc-900' : 'text-zinc-600'}`}>USDT / Bitcoin</span>
                             </div>
                             <div className={`w-4 h-4 rounded-full border-2 ${selectedPayment === 'crypto' ? 'border-lime-500 bg-lime-500' : 'border-zinc-200'}`}></div>
                         </div>
                         
                         <div 
                            onClick={() => setSelectedPayment('bank')}
                            className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${selectedPayment === 'bank' ? 'border-lime-200 bg-lime-50' : 'border-zinc-100 bg-white hover:border-zinc-200'}`}
                         >
                             <div className="flex items-center gap-3">
                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${selectedPayment === 'bank' ? 'bg-white text-lime-600 border-lime-100 shadow-sm' : 'bg-zinc-50 text-zinc-500 border-zinc-100'}`}>
                                     <Landmark size={16} />
                                 </div>
                                 <span className={`font-bold text-sm ${selectedPayment === 'bank' ? 'text-zinc-900' : 'text-zinc-600'}`}>Bank Wire</span>
                             </div>
                             <div className={`w-4 h-4 rounded-full border-2 ${selectedPayment === 'bank' ? 'border-lime-500 bg-lime-500' : 'border-zinc-200'}`}></div>
                         </div>

                         <div 
                            onClick={() => setSelectedPayment('paypal')}
                            className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${selectedPayment === 'paypal' ? 'border-lime-200 bg-lime-50' : 'border-zinc-100 bg-white hover:border-zinc-200'}`}
                         >
                             <div className="flex items-center gap-3">
                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${selectedPayment === 'paypal' ? 'bg-white text-blue-500 border-blue-100 shadow-sm' : 'bg-blue-50 text-blue-500 border-blue-100'}`}>
                                     <Wallet size={16} />
                                 </div>
                                 <span className={`font-bold text-sm ${selectedPayment === 'paypal' ? 'text-zinc-900' : 'text-zinc-600'}`}>PayPal / Skrill</span>
                             </div>
                             <div className={`w-4 h-4 rounded-full border-2 ${selectedPayment === 'paypal' ? 'border-lime-500 bg-lime-500' : 'border-zinc-200'}`}></div>
                         </div>
                    </div>
                 </div>
            </div>

            {/* Analytics Card */}
            <div className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-zinc-800 text-white relative overflow-hidden group flex flex-col cursor-default">
                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400 rounded-full blur-[80px] opacity-10"></div>
                 <div className="absolute top-8 right-8 bg-zinc-800 p-3 rounded-2xl shadow-sm border border-zinc-700 text-lime-400">
                    <BarChart2 size={24} />
                </div>
                <div className="relative z-10 mt-4 flex-1">
                    <h3 className="text-3xl font-bold mb-4">In-Depth Analytics</h3>
                    <p className="text-zinc-400 leading-relaxed mb-8 max-w-sm">
                        Monitor your campaigns in real time with detailed reports, conversion tracking, and audience insights to optimize your strategy.
                    </p>
                    <div className="flex gap-8 mb-8">
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">125</div>
                            <div className="text-xs text-zinc-500">Daily FTDs</div>
                        </div>
                        <div className="w-px h-10 bg-zinc-800"></div>
                         <div>
                            <div className="text-2xl font-bold text-white mb-1">$450</div>
                            <div className="text-xs text-zinc-500">Avg CPA</div>
                        </div>
                         <div className="w-px h-10 bg-zinc-800"></div>
                         <div>
                            <div className="text-2xl font-bold text-lime-400 mb-1">24%</div>
                            <div className="text-xs text-zinc-500">Conv. Rate</div>
                        </div>
                    </div>
                </div>
                {/* Visual Mockup for Analytics - Improved Chart */}
                <div className="mt-4 bg-zinc-800 rounded-2xl p-6 border border-zinc-700 relative overflow-hidden h-48 w-full flex items-end">
                     {/* Background Grid */}
                     <div className="absolute inset-0 z-0">
                         <div className="h-full w-full opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                     </div>
                     
                     {/* SVG Chart */}
                     <svg className="w-full h-full absolute inset-0 z-10 p-4" viewBox="0 0 400 150" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#bef264" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#bef264" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,150 L0,100 C50,80 100,120 150,90 C200,60 250,100 300,50 C350,0 400,40 400,40 L400,150 Z" fill="url(#chartGradient)" />
                        <path d="M0,100 C50,80 100,120 150,90 C200,60 250,100 300,50 C350,0 400,40 400,40" fill="none" stroke="#bef264" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                        
                        {/* Data Points */}
                        <circle cx="150" cy="90" r="4" fill="#18181b" stroke="#bef264" strokeWidth="2" className="animate-pulse" />
                        <circle cx="300" cy="50" r="4" fill="#18181b" stroke="#bef264" strokeWidth="2" className="animate-pulse" />
                        
                        {/* Floating Tag */}
                        <g transform="translate(260, 10)">
                            <rect width="80" height="30" rx="8" fill="#bef264" />
                            <text x="40" y="20" fontSize="12" fontWeight="bold" fill="#18181b" textAnchor="middle">$12.4k</text>
                            <polygon points="40,30 35,35 45,35" fill="#bef264" />
                        </g>
                     </svg>
                </div>
            </div>
        </div>

        {/* Hassle-Free Launch Grid */}
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Hassle-Free Launch</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
                <span className="bg-lime-100 text-lime-800 text-xs font-bold px-3 py-1 rounded-full">Intelligent Marketing</span>
            </div>
            <p className="text-zinc-500 max-w-2xl mx-auto">Simplify deployment for unmatched scalability and impact.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                {
                    icon: <Coins className="text-white" size={20} />,
                    title: "Exclusive Finance Offers",
                    desc: "Promote top-tier forex and crypto brands with high-converting, exclusive CPA deals.",
                    color: "bg-blue-600"
                },
                {
                    icon: <BarChart2 className="text-white" size={20} />,
                    title: "Optimized Tracking",
                    desc: "Leverage real-time data and insights to scale campaigns with precision.",
                    color: "bg-purple-600"
                },
                {
                    icon: <CreditCard className="text-white" size={20} />,
                    title: "Faster Payouts",
                    desc: "Enjoy industry-leading payout speeds and customized payment schedules.",
                    color: "bg-emerald-600"
                },
                {
                    icon: <Users className="text-white" size={20} />,
                    title: "Dedicated Account Management",
                    desc: "Get personalized guidance to optimize performance and maximize earnings.",
                    color: "bg-orange-600"
                },
                {
                    icon: <Link2 className="text-white" size={20} />,
                    title: "Seamless Integrations",
                    desc: "Easily connect with leading traffic sources and tracking platforms.",
                    color: "bg-pink-600"
                },
                {
                    icon: <Rocket className="text-white" size={20} />,
                    title: "Future-Proof Scaling",
                    desc: "Stay ahead with AI-driven optimization, premium traffic sources, and adaptive strategies.",
                    color: "bg-indigo-600"
                }
            ].map((item, i) => (
                <div key={i} className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-md`}>
                        {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>

        <div className="mt-16 text-center">
            <div className="bg-lime-50 border border-lime-100 rounded-2xl p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div className="text-left">
                     <h3 className="text-xl font-bold text-zinc-900 mb-1">Ready to scale?</h3>
                     <p className="text-zinc-500 text-sm">Join AdzFina and start earning more today!</p>
                 </div>
                 <button onClick={openAuthModal} className="bg-lime-400 text-zinc-900 px-6 py-3 rounded-full font-bold hover:bg-lime-300 transition-colors shadow-lg shadow-lime-200">
                    Join Network
                 </button>
            </div>
        </div>

      </div>
    </section>
  );
};