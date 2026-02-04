"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "How often do you pay affiliates?",
    a: "We offer flexible payment terms including Net-30, Net-15, and Net-7 for qualified affiliates. Payments are sent via Wire, PayPal, and Crypto.",
  },
  {
    q: "What type of traffic do you accept?",
    a: "We accept a wide range of traffic including SEO, PPC, Social Media, Email, and Display. However, we have strict compliance guidelines for finance offers.",
  },
  {
    q: "Do you provide landing pages?",
    a: "Yes! We provide high-converting, localized landing pages and pre-landers for all our exclusive offers.",
  },
  {
    q: "Is there a minimum threshold for payment?",
    a: "Yes, the minimum payment threshold is $100 for PayPal/Crypto and $500 for Wire Transfer.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-zinc-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Your Queries, Simplified</h2>
          <p className="text-zinc-500">Questions? Answers!</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-zinc-900">{faq.q}</span>
                {openIndex === idx ? (
                  <Minus size={20} className="text-zinc-400" />
                ) : (
                  <Plus size={20} className="text-zinc-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-zinc-600 leading-relaxed animate-fade-in">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 mb-4">Still have questions?</p>
          <a
            href="mailto:support@adzfina.com"
            className="inline-block bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-full font-bold hover:bg-zinc-50 transition-colors"
          >
            Contact Support
          </a>
          <p className="mt-4 text-sm text-zinc-400">support@adzfina.com</p>
        </div>
      </div>
    </section>
  )
}
