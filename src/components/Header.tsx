"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// GitHub stars count - Update periodically or fetch dynamically
// Last updated: December 2024
const GITHUB_STARS = "13.6K";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#program", label: "Program" },
    { href: "#writers-program", label: "Process" },
    { href: "#criteria", label: "Criteria" },
    { href: "#guidelines", label: "Guidelines" },
];

// GitHub icon SVG path - reusable
const GitHubIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-36 h-10">
                        <Image
                            src="/images/keploy-logo.png"
                            alt="Keploy"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-[#F89559] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Side - GitHub Stars & Sign In */}
                <div className="hidden md:flex items-center gap-4">
                    {/* GitHub Stars Badge */}
                    <a
                        href="https://github.com/keploy/keploy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <GitHubIcon className="w-5 h-5 text-gray-800" />
                        <span className="font-semibold text-gray-800">{GITHUB_STARS}</span>
                    </a>

                    {/* Sign In Button */}
                    <Button
                        asChild
                        className="bg-[#F89559] text-white hover:bg-[#e87b3a] font-semibold px-6 py-2.5 rounded-lg shadow-sm"
                    >
                        <a
                            href="https://forms.gle/R7RbuL39sc1TFW449"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sign In
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6 text-gray-700" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-700" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav
                    className="lg:hidden bg-white border-t border-gray-100 py-4"
                    aria-label="Mobile navigation"
                >
                    <div className="flex flex-col gap-1 px-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="py-3 px-4 text-gray-700 hover:text-[#F89559] hover:bg-orange-50 rounded-lg transition-all font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
                            <a
                                href="https://github.com/keploy/keploy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gray-50"
                            >
                                <GitHubIcon className="w-5 h-5 text-gray-800" />
                                <span className="font-semibold text-gray-800">{GITHUB_STARS} Stars</span>
                            </a>
                            <Button
                                asChild
                                className="w-full bg-[#F89559] text-white hover:bg-[#e87b3a] font-medium py-3 rounded-lg"
                            >
                                <a
                                    href="https://forms.gle/R7RbuL39sc1TFW449"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Sign In
                                </a>
                            </Button>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}
