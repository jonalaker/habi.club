"use client";

import { useState } from "react";

export default function MetaMask() {
    const [copied, setCopied] = useState(false);
    const contractAddress = "0x13475AAb409d8bdE70897B90eF85eAB9AB63E5d0";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(contractAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = contractAddress;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }
    };

    return (
        <section className="py-16 relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="glass p-8 sm:p-12 rounded-3xl border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent text-center">
                    {/* Icon */}
                    <div className="inline-flex p-6 bg-emerald-500/10 rounded-2xl text-emerald-400 mb-6">
                        <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Add HABI to MetaMask
                    </h3>
                    <p className="text-slate-400 mb-8">
                        Import HABI token to your MetaMask wallet using the contract address
                        below:
                    </p>

                    {/* Contract Address */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 sm:p-6 bg-black/30 border border-white/10 rounded-xl mb-4">
                        <code className="text-sm sm:text-base text-emerald-300 font-mono break-all">
                            {contractAddress}
                        </code>
                        <button
                            onClick={copyToClipboard}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${copied
                                    ? "bg-emerald-500 text-white"
                                    : "bg-emerald-600 hover:bg-emerald-500 text-white"
                                }`}
                        >
                            {copied ? (
                                <>
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
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    Copied!
                                </>
                            ) : (
                                <>
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
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        />
                                    </svg>
                                    Copy
                                </>
                            )}
                        </button>
                    </div>

                    <p className="text-sm text-slate-400">
                        🔗 Network: <span className="text-emerald-400">Polygon (MATIC)</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
