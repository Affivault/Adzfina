"use client"

import { Logo } from "./logo"
import { useInteraction } from "./interaction-context"

export function Footer() {
  const { showToast, scrollToSection } = useInteraction()

  const handleLinkClick = (e: React.MouseEvent, dest: string) => {
    e.preventDefault()
    if (["features", "cta", "testimonials", "faq"].includes(dest)) {
      scrollToSection(dest)
    } else {
      showToast(`${dest} page coming soon!`, "info")
    }
  }

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Logo className="h-8" />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              AdzFina is the premier affiliate network for the finance industry. We connect high-quality traffic with
              the world&apos;s leading financial institutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "features")}
                  className="hover:text-lime-600 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "testimonials")}
                  className="hover:text-lime-600 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick(e, "faq")} className="hover:text-lime-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick(e, "cta")} className="hover:text-lime-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Privacy Policy")}
                  className="hover:text-lime-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Terms of Service")}
                  className="hover:text-lime-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "Cookie Policy")}
                  className="hover:text-lime-600 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">2026 AdzFina Network Ltd. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-zinc-400">
            <span>London</span>
            <span>New York</span>
            <span>Singapore</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
