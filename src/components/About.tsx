export default function About() {
    const features = [
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                </svg>
            ),
            title: "Private and Secure",
            description:
                "Your privacy on HABI’s isn’t just dependant on some ‘pinky promise’. AI and blockchain smart contracts work together to privately and securely award your tokens. HABI uses decentralised blockchain verification. No KYC, or requirement of your email connections, faces blurred automatically on pics, and ZKP: Zero Knowledge Proofs for your complete privacy. Just keep your Seed Phrase for ‘permission-less and loss-proof’ security",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: "Instant Rewards",
            description:
                "Submit pics of your completed good-deeds and receive HABI tokens automatically to your wallet. Thousands of Eco-friendly suppliers off goods and services are linking there Apps to HABI -- to instantly send HABI tokens to your wallet, when you make a purchase. A rapidly growing list of Eco- friendly suppliers invite you to use your HABI tokens to purchase goods and services (for part- or full payment)",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: "Tradable Value",
            description:
                "HABI tokens now trade-able! and usable to access Eco-friendly goods and services. After HABI’s ICO: Initial Coin Offering is launched- you can even buy and sell HABI for other tokens like BTC, ETH etc. or to your local currency! HABI is managed by it’s own DAO: Decentralised Autonomous Organisation--insuring fair governance, limited and reducing HABI token supply.",
        },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                        About HABI
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Rewarding Your <span className="gradient-text">Eco-Friendly</span>{" "}
                        Actions
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        HABI Token is designed to incentivize and reward environmentally
                        conscious behavior. Every good deed you do for the planet can now
                        earn you real value.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="inline-flex p-4 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
