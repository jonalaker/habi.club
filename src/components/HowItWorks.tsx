export default function HowItWorks() {
    const steps = [
        {
            step: 1,
            title: "Complete a Good Deed",
            description:
                "Do something positive for the environment - plant a tree, recycle, clean up, or any eco-friendly action.",
        },
        {
            step: 2,
            title: "Submit Your Deed",
            description:
                "Submit proof of your completed good deed through our secure platform.",
        },
        {
            step: 3,
            title: "AI Verification",
            description:
                "Our AI privately and securely verifies your submission without compromising your data.",
        },
        {
            step: 4,
            title: "Receive HABI Tokens",
            description:
                "Tokens are automatically awarded to your wallet via smart contracts.",
        },
    ];

    return (
        <section id="how-it-works" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                        Process
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                </div>

                {/* Steps - Desktop */}
                <div className="hidden lg:flex items-start justify-center gap-4">
                    {steps.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex flex-col items-center text-center max-w-[220px]">
                                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full text-white text-2xl font-bold mb-6 glow-green">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent mt-8 mx-2" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Steps - Mobile/Tablet */}
                <div className="lg:hidden flex flex-col items-center gap-4">
                    {steps.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="flex flex-col items-center text-center max-w-md">
                                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full text-white text-2xl font-bold mb-4 glow-green">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                                    {item.description}
                                </p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="h-12 w-0.5 bg-gradient-to-b from-emerald-500 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
