import React from 'react';

const reviews = [
    {
        name: "Brendan",
        role: "Owner of FX Wizard Group",
        text: "Adzfina has completely changed the game for me. The forex offers convert insanely well, and the weekly payouts keep my cash flow strong. Plus, the account managers actually care about my results.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brendan"
    },
    {
        name: "Wilson",
        role: "Owner of SignalCopyFX",
        text: "I’ve worked with multiple affiliate networks, but Adzfina stands out. Their forex offers have some of the best CPA rates I’ve seen, and tracking is seamless. My earnings have doubled since switching over!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wilson"
    },
    {
        name: "Mayak",
        role: "Affiliate Manager at PrimeFX",
        text: "Adzfina has been a key partner in growing our brokerage. Their affiliates bring in high-quality traders, and the platform’s transparency makes managing campaigns effortless. It’s been a great ROI-positive partnership.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mayak"
    },
    {
        name: "Jacychan",
        role: "Affiliate Manager at TradeVault",
        text: "We’ve seen a significant boost in funded trader acquisitions since joining Adzfina. Their network is filled with serious, experienced affiliates, and the performance tracking is top-notch. Highly recommended!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jacy"
    },
    {
        name: "Catherinenx",
        role: "Independent Digital Marketer",
        text: "The support team at Adzfina is what makes them exceptional. Whether it’s campaign advice or optimizing my traffic sources, they go the extra mile. The offers perform exceptionally well!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Catherine"
    },
    {
        name: "Janney",
        role: "Owner of IOUFX",
        text: "Adzfina allows me to run my campaigns with full confidence. I get instant approvals on top-performing forex offers, and I’ve never had a delay in payments. Hands down, the best finance-focused network out there!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Janney"
    }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Trusted by Finance Affiliates Worldwide</h2>
            <p className="text-lg text-zinc-500">Hear from businesses who’ve transformed their workflows with our solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
                <div key={i} className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full bg-white border border-zinc-200" />
                        <div>
                            <p className="font-bold text-zinc-900">{review.name}</p>
                            <p className="text-xs text-zinc-500 uppercase tracking-wide font-semibold">{review.role}</p>
                        </div>
                    </div>
                    <p className="text-zinc-600 leading-relaxed italic">
                        "{review.text}"
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};