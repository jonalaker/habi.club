import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GoodDeeds from "@/components/GoodDeeds";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import MetaMask from "@/components/MetaMask";
import ClaimTokens from "@/components/ClaimTokens";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Gradient Orbs */}
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-lime-500/5 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "-4s" }} />

        {/* Floating Leaves */}
        <div className="absolute top-[15%] left-[8%] w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-bl-[50%] rounded-tr-[50%] rounded-br-[50%] opacity-[0.08] animate-float-leaf" />
        <div className="absolute top-[25%] right-[12%] w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-bl-[50%] rounded-tr-[50%] rounded-br-[50%] opacity-[0.08] animate-float-leaf" style={{ animationDelay: "-7s" }} />
        <div className="absolute top-[55%] left-[15%] w-5 h-5 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-bl-[50%] rounded-tr-[50%] rounded-br-[50%] opacity-[0.08] animate-float-leaf" style={{ animationDelay: "-12s" }} />
        <div className="absolute top-[70%] right-[8%] w-7 h-7 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-bl-[50%] rounded-tr-[50%] rounded-br-[50%] opacity-[0.08] animate-float-leaf" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-[85%] left-[30%] w-4 h-4 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-bl-[50%] rounded-tr-[50%] rounded-br-[50%] opacity-[0.08] animate-float-leaf" style={{ animationDelay: "-15s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <GoodDeeds />
        <Features />
        <HowItWorks />
        <MetaMask />
        <ClaimTokens />
        <Footer />
      </div>
    </main>
  );
}
