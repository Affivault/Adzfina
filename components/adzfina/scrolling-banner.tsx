import { CheckCircle2 } from "lucide-react"

const items = [
  "Live Tracking",
  "Seamless Integrations",
  "Real-Time Reports",
  "Advanced Conversion Optimization",
  "Dedicated Affiliate Support",
  "Exclusive Advertisers",
  "Fast & Secure Payouts",
  "High-Payout Offers",
]

export function ScrollingBanner() {
  return (
    <section className="bg-zinc-900 py-6 overflow-hidden border-y border-zinc-800">
      <div className="relative flex overflow-x-hidden">
        <div className="py-2 animate-marquee whitespace-nowrap flex items-center gap-12">
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="text-lime-400 w-5 h-5" />
              <span className="text-lg font-semibold text-white tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
