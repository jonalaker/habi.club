import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const quickLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#good-deeds", label: "Good Deeds" },
        { href: "#features", label: "Features" },
        { href: "#claim", label: "Claim Tokens" },
    ];

    return (
        <footer className="pt-16 pb-8 bg-black/30 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <Image
                                src="/habi-logo.jpg"
                                alt="HABI Token Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <span className="text-xl font-bold text-white">HABI Token</span>
                        </div>
                        <p className="text-slate-400 max-w-xs mx-auto md:mx-0">
                            Making it profitable to be eco-friendly. Join the green revolution
                            today.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-base font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <div className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors py-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div className="text-center md:text-left">
                        <h4 className="text-base font-semibold text-white mb-4">Connect</h4>
                        <div className="flex justify-center md:justify-start gap-3">
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 bg-white/5 rounded-lg text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                                aria-label="Twitter"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 bg-white/5 rounded-lg text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                                aria-label="Telegram"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 bg-white/5 rounded-lg text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                                aria-label="Discord"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; 2025 HABI Token. All rights reserved.</p>
                    <p>Built with 💚 for a greener planet</p>
                </div>
            </div>
        </footer>
    );
}
