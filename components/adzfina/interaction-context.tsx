"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { X, CheckCircle, Info } from "lucide-react"
import { Logo } from "./logo"

interface Toast {
  id: number
  message: string
  type: "success" | "info"
}

interface InteractionContextType {
  showToast: (message: string, type?: "success" | "info") => void
  openAuthModal: () => void
  scrollToSection: (id: string) => void
}

const InteractionContext = createContext<InteractionContextType | undefined>(undefined)

export function useInteraction() {
  const context = useContext(InteractionContext)
  if (!context) {
    throw new Error("useInteraction must be used within an InteractionProvider")
  }
  return context
}

export function InteractionProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup")

  const showToast = (message: string, type: "success" | "info" = "info") => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  const openAuthModal = () => setIsAuthModalOpen(true)
  const closeAuthModal = () => setIsAuthModalOpen(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      showToast(`Navigating to ${id}...`)
    }
  }

  return (
    <InteractionContext.Provider value={{ showToast, openAuthModal, scrollToSection }}>
      {children}

      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-zinc-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-fade-in-up pointer-events-auto min-w-[300px]"
          >
            {toast.type === "success" ? (
              <CheckCircle size={20} className="text-lime-400" />
            ) : (
              <Info size={20} className="text-blue-400" />
            )}
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeAuthModal}></div>
          <div className="bg-white rounded-3xl p-8 w-full max-w-md relative z-10 shadow-2xl animate-fade-in-up">
            <button onClick={closeAuthModal} className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900">
              <X size={24} />
            </button>
            <div className="mb-8 text-center">
              <div className="flex justify-center mb-4">
                <Logo />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">
                {authMode === "login" ? "Welcome Back" : "Join the Network"}
              </h2>
              <p className="text-zinc-500 text-sm mt-2">
                {authMode === "login" ? "Access your dashboard" : "Start earning with top finance offers"}
              </p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                showToast("Access granted! Redirecting...", "success")
                closeAuthModal()
              }}
            >
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Password</label>
                <input
                  type="password"
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all"
                  placeholder="********"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-900 text-white font-bold py-4 rounded-full hover:bg-zinc-800 transition-all shadow-lg"
              >
                {authMode === "login" ? "Sign In" : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-zinc-500">
                {authMode === "login" ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                className="font-bold text-zinc-900 hover:text-lime-600"
              >
                {authMode === "login" ? "Sign up" : "Log in"}
              </button>
            </div>
          </div>
        </div>
      )}
    </InteractionContext.Provider>
  )
}
