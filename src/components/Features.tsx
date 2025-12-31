export default function Features() {
    const features = [
        {
            number: "01",
            title: "AI-Powered Verification",
            description:
                "Our advanced AI system verifies your eco-friendly actions securely and privately, ensuring fair token distribution.",
        },
        {
            number: "02",
            title: "Smart Contract Automation",
            description:
                "Tokens are awarded automatically through smart contracts when your good deed is verified and approved.",
        },
        {
            number: "03",
            title: "Polygon Network",
            description:
                "Built on Polygon for fast, low-cost transactions with minimal environmental impact.",
        },
        {
            number: "04",
            title: "Eco Marketplace (Coming Soon)",
            description:
                "Use your HABI tokens to access eco-friendly goods and services from verified green businesses.",
        },
    ];

    return (
        <section
            id="features"
            className="py-24 relative bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                        Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Why Choose <span className="gradient-text">HABI Token</span>?
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group glass p-8 rounded-2xl flex gap-6 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="text-5xl font-extrabold text-emerald-500/20 group-hover:text-emerald-500/30 transition-colors leading-none">
                                {feature.number}
                            </span>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
