"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

    const navRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ["home", "about", "good-deeds", "features", "how-it-works", "claim"];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const activeItem = itemRefs.current[activeSection];
        if (activeItem && navRef.current) {
            const navRect = navRef.current.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();

            setIndicatorStyle({
                left: itemRect.left - navRect.left,
                width: itemRect.width,
                opacity: 1,
            });
        }
    }, [activeSection, isScrolled]);

    const navLinks = [
        { href: "/#home", label: "Home", id: "home" },
        { href: "/#about", label: "About", id: "about" },
        { href: "/#good-deeds", label: "Good Deeds", id: "good-deeds" },
        { href: "/#features", label: "Features", id: "features" },
        { href: "/#how-it-works", label: "How It Works", id: "how-it-works" },
        { href: "/#claim", label: "Claim Tokens", id: "claim" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/habi-logo.jpg"
                            alt="HABI Token Logo"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-bold text-white">HABI</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-6 relative" ref={navRef}>
                        {/* Sliding Indicator */}
                        <div
                            className="absolute -bottom-1 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent transition-all duration-300 ease-out pointer-events-none"
                            style={{
                                left: `${indicatorStyle.left}px`,
                                width: `${indicatorStyle.width}px`,
                                opacity: indicatorStyle.opacity,
                            }}
                        />

                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                ref={(el) => { itemRefs.current[link.id] = el; }}
                                className={`text-sm font-medium transition-colors py-1 ${activeSection === link.id
                                    ? "text-emerald-400"
                                    : "text-slate-300 hover:text-emerald-400"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>

                <div
                    className={`lg:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                        }`}
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-base font-medium transition-colors py-2 border-l-2 pl-4 ${activeSection === link.id
                                    ? "text-emerald-400 border-emerald-400"
                                    : "text-slate-300 hover:text-emerald-400 border-transparent"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
