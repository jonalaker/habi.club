"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Manifesto() {
    return (
        <main className="min-h-screen bg-slate-950">
            <Navbar />

            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-6">
                        The Philosophy
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                        HABI-life FILLS THE <br />
                        <span className="gradient-text">SPIRITUAL VOID</span>
                    </h1>

                    <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed">
                        <p>
                            For millennia, religions provided the powerful framework for mindfulness, delayed gratification, and community cohesion. In the information age, these ancient systems are increasingly viewed as redundant or intellectually incompatible with a data-driven world.
                        </p>
                        <p className="text-white font-medium">
                            However, their disappearance has left a "meaning void," leading to mindless consumerism and tribalism.
                        </p>
                    </div>
                </div>

                {/* The Solution */}
                <section className="mb-24">
                    <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
                            A Protocol for Human Evolution
                        </h2>
                        <p className="text-xl text-emerald-100/90 leading-relaxed relative z-10 max-w-3xl mx-auto">
                            HABI Token is the first decentralised protocol designed to fill that void—replacing "ancient storys" with verified transformation. We are lifting the human habitat and happiness by gamifying the evolution of the species.
                        </p>
                    </div>
                </section>

                {/* Key Pillars */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Pillars of the Ecosystem</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="group bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                💎
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Synthetic Scarcity</h3>
                            <p className="text-slate-400 leading-relaxed">
                                As AI and automation remove physical scarcity, value must shift to what remains finite: <span className="text-emerald-400 font-medium">Human Intentionality</span>. Our token creates value through "Constraint"—the conscious choice to favour quality, sustainability, and wellness over mindless volume.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="group bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                🚀
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Proof-of-Progress (PoP)</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Unlike "Proof-of-Work," which consumes resources to solve puzzles, HABI Token utilises Proof-of-Progress. We don’t mint coins when computers crunch numbers; we mint them when humans solve their own tribalism and ecological impact.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="group bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                🧬
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Evolutionary Model</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Most tokens are fixed by math; the HABI Token is fixed by evolution. The supply is unlocked by the actualised progress of the community - discovering that abundance is achieved when we collectively realise we have "enough."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Integration Roadmap */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">The Roadmap to Social Healing</h2>
                    <div className="space-y-6">
                        {[
                            { title: "Eco-Product Integration", desc: "Rewarding the shift from 'more is better' to 'better is enough.'", phase: "01" },
                            { title: "Holistic Wellness", desc: "Incentivising physical and mental resilience.", phase: "02" },
                            { title: "Social Healing", desc: "Reaching the culmination of the roadmap by rewarding the deconstruction of tribalism and the fostering of global collaboration.", phase: "03" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                <span className="text-4xl font-bold text-white/10">{item.phase}</span>
                                <div>
                                    <h3 className="text-xl font-bold text-emerald-400 mb-1">{item.title}</h3>
                                    <p className="text-slate-300">{item.desc}</p>
                                </div>
                            </div>
                        ))}

                        <div className="mt-8 text-center text-slate-400 italic">
                            We are building a bridge from the old to the new.
                        </div>
                    </div>
                </section>

                {/* The Vision */}
                <section className="text-center max-w-4xl mx-auto">
                    <div className="relative p-10 bg-slate-900 rounded-3xl border border-emerald-500/30 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

                        <h2 className="text-3xl font-bold text-white mb-8 relative z-10">The Vision</h2>

                        <div className="space-y-6 text-lg text-slate-300 leading-relaxed relative z-10">
                            <p>
                                We are moving from a tribal, competitive mindset to a mindful, holistic one. We aren't just rewarding 'green' habits; we are rewarding the end of the rat race.
                            </p>
                            <p className="text-xl text-white font-medium">
                                By replacing outdated belief systems with HABI token - a transparent, blockchain-verified path to progress. We ensure human happiness and habitat scales alongside new age automation.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
