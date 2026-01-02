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
            // Fallback
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
        <section className="py-24 relative bg-black/20">
            <div className="max-w-4xl mx-auto px-6">
                {/* Main Card */}
                <div className="glass p-8 sm:p-12 rounded-3xl border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent text-center mb-16">
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
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Import HABI token to your MetaMask wallet using the contract address
                        below. HABI lives on the Polygon Mainnet (POL) for fast, eco-friendly transactions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 sm:p-6 bg-black/30 border border-white/10 rounded-xl mb-4">
                        <code className="text-sm sm:text-base text-emerald-300 font-mono break-all">
                            {contractAddress}
                        </code>
                        <button
                            onClick={copyToClipboard}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all flex-shrink-0 ${copied
                                    ? "bg-emerald-500 text-white"
                                    : "bg-emerald-600 hover:bg-emerald-500 text-white"
                                }`}
                        >
                            {copied ? (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Copy
                                </>
                            )}
                        </button>
                    </div>

                    <p className="text-sm text-slate-400">
                        🔗 Network: <span className="text-emerald-400 font-semibold">Polygon (POL)</span>
                    </p>
                </div>

                {/* Setup Guide */}
                <div className="space-y-12">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">MetaMask Setup Guide</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            If you’ve been sent HABI tokens but don’t see them in your wallet yet, don’t worry — this is normal for new tokens. Follow these steps to reveal your balance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                            <h4 className="text-lg font-semibold text-white mb-3">Switch Network</h4>
                            <p className="text-slate-400 text-sm mb-4">
                                HABI tokens live on the Polygon Mainnet, not Ethereum.
                            </p>
                            <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                                <li>Open MetaMask</li>
                                <li>Click the network selector at the top</li>
                                <li>Choose <strong>Polygon Mainnet</strong></li>
                                <li>Or click "Add Network" if missing</li>
                            </ul>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
                            <h4 className="text-lg font-semibold text-white mb-3">Check Account</h4>
                            <p className="text-slate-400 text-sm mb-4">
                                Ensure you are viewing the correct wallet address.
                            </p>
                            <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                                <li>Click the account name (e.g. "Account 1")</li>
                                <li>Check all accounts listed</li>
                                <li>Select the correct account if using Ledger/Trezor</li>
                            </ul>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full" />
                            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mb-4 relative z-10">3</div>
                            <h4 className="text-lg font-semibold text-white mb-3 relative z-10">Import Token</h4>
                            <p className="text-slate-400 text-sm mb-4 relative z-10">
                                Manually add HABI to see your balance.
                            </p>
                            <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4 relative z-10">
                                <li>Scroll down & click <strong>Import tokens</strong></li>
                                <li>Choose <strong>Custom token</strong></li>
                                <li>Paste contract address above</li>
                                <li>HABI should now appear!</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                        <p className="text-emerald-400 text-sm font-medium">
                            💡 Always keep your 12-word seed phrase private and secure. Never share it with anyone.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
