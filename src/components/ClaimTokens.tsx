"use client";

import { useState, FormEvent } from "react";

export default function ClaimTokens() {
    const [walletAddress, setWalletAddress] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Validate wallet address format
        const walletRegex = /^0x[a-fA-F0-9]{40}$/;
        if (!walletRegex.test(walletAddress)) {
            setStatus("error");
            setMessage("Please enter a valid Polygon wallet address");
            return;
        }

        // Simulate form submission
        console.log("Claim submitted:", { walletAddress, email });
        setStatus("success");
        setMessage("Request submitted successfully! We'll send your tokens soon.");
        setWalletAddress("");
        setEmail("");

        setTimeout(() => {
            setStatus("idle");
            setMessage("");
        }, 5000);
    };

    return (
        <section
            id="claim"
            className="py-24 relative"
            style={{
                background:
                    "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
            }}
        >
            <div className="max-w-xl mx-auto px-6">
                <div className="p-8 sm:p-12 bg-white/[0.02] border border-white/5 rounded-3xl text-center">
                    {/* Badge */}
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full text-sm font-semibold text-white mb-6">
                        🎁 Limited Offer
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Claim Your <span className="gradient-text">100 Free Tokens</span>
                    </h2>

                    <p className="text-lg text-slate-400 mb-8">
                        Send us your receiving address for Polygon tokens and we will send
                        foundation members{" "}
                        <strong className="text-emerald-400">100 tokens for free!</strong>
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="text-left space-y-6">
                        <div>
                            <label
                                htmlFor="wallet-address"
                                className="block text-sm font-medium text-slate-300 mb-2"
                            >
                                Your Polygon Wallet Address
                            </label>
                            <input
                                type="text"
                                id="wallet-address"
                                value={walletAddress}
                                onChange={(e) => setWalletAddress(e.target.value)}
                                placeholder="0x..."
                                required
                                className="w-full px-4 py-4 bg-black/30 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-300 mb-2"
                            >
                                Email Address (Optional)
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full px-4 py-4 bg-black/30 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all"
                        >
                            <span>Submit Request</span>
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </form>

                    {/* Status Message */}
                    {status !== "idle" && (
                        <div
                            className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${status === "success"
                                    ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                }`}
                        >
                            {status === "success" ? (
                                <svg
                                    className="w-5 h-5 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            )}
                            <span className="text-sm">{message}</span>
                        </div>
                    )}

                    {/* Note */}
                    <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Make sure you&apos;re using a Polygon-compatible wallet address
                    </p>
                </div>
            </div>
        </section>
    );
}
