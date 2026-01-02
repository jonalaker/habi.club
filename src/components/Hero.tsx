"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
    const [stats, setStats] = useState({ deeds: 0, holders: 0, tokens: 0 });

    useEffect(() => {
        const animateValue = (
            start: number,
            end: number,
            duration: number,
            setter: (val: number) => void
        ) => {
            const startTime = performance.now();
            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setter(Math.floor(easeOutQuart * (end - start) + start));
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        };

        const timer = setTimeout(() => {
            animateValue(0, 1659, 2000, (val) =>
                setStats((prev) => ({ ...prev, deeds: val }))
            );
            animateValue(0, 837, 2000, (val) =>
                setStats((prev) => ({ ...prev, holders: val }))
            );
            animateValue(0, 100, 2000, (val) =>
                setStats((prev) => ({ ...prev, tokens: val }))
            );
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Glow */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px]" />

                {/* Floating Leaves */}
                <div className="absolute top-[10%] left-[10%] w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-bl-[50%] rounded-tr-[50%] rounded-br-[50%] opacity-10 animate-float-leaf" />
                <div className="absolute top-[20%] right-[15%] w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-bl-[50%] rounded-tr-[50%] rounded-br-[50%] opacity-10 animate-float-leaf" style={{ animationDelay: "-5s" }} />
                <div className="absolute bottom-[30%] left-[5%] w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-bl-[50%] rounded-tr-[50%] rounded-br-[50%] opacity-10 animate-float-leaf" style={{ animationDelay: "-10s" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6 animate-fade-in-up">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-emerald-400">
                                🌿 Eco-Friendly Blockchain
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            <span className="gradient-text">HABI Token</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl sm:text-2xl font-semibold text-white mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            Now it&apos;s profitable to be eco-friendly.
                        </p>

                        {/* Description */}
                        <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                            Thousands of good deeds now being added — giving you the chance to earn HABI tokens.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                            <Link
                                href="#claim"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all group"
                            >
                                <span>Claim Free Tokens</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="#about"
                                className="inline-flex items-center justify-center px-6 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                            <div className="text-center lg:text-left">
                                <span className="block text-3xl font-bold text-emerald-400">
                                    {stats.deeds}+
                                </span>
                                <span className="text-sm text-slate-400">Good Deeds Tracked</span>
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="block text-3xl font-bold text-emerald-400">
                                    {stats.holders}+
                                </span>
                                <span className="text-sm text-slate-400">Token Holders</span>
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="block text-3xl font-bold text-emerald-400">
                                    {stats.tokens}
                                </span>
                                <span className="text-sm text-slate-400">Free Tokens</span>
                            </div>
                        </div>
                    </div>

                    {/* Token Visual */}
                    <div className="flex justify-center items-center order-1 lg:order-2">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-emerald-500/30 rounded-full blur-3xl animate-pulse-glow" />
                            </div>

                            {/* Rotating Rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 border border-emerald-500/20 rounded-full animate-rotate-slow" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border border-emerald-500/10 rounded-full animate-rotate-slow-reverse" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border border-emerald-500/5 rounded-full animate-rotate-slow" style={{ animationDuration: "40s" }} />
                            </div>

                            {/* Token Image */}
                            <div className="absolute inset-0 flex items-center justify-center animate-float">
                                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden glow-green-lg">
                                    <Image
                                        src="/habi-logo.jpg"
                                        alt="HABI Token"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
