"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

// Default fallback value if API fetch fails
const DEFAULT_GITHUB_STARS = "13.6K";

// Format star count (e.g., 13600 -> "13.6K")
function formatStarCount(count: number): string {
    if (count >= 1000) {
        const formatted = (count / 1000).toFixed(1);
        // Remove trailing .0 (e.g., "14.0K" -> "14K")
        return formatted.endsWith('.0')
            ? formatted.slice(0, -2) + 'K'
            : formatted + 'K';
    }
    return count.toString();
}

// Custom hook to fetch GitHub stars with caching and rate limit handling
function useGitHubStars(owner: string, repo: string): string {
    const [stars, setStars] = useState<string>(DEFAULT_GITHUB_STARS);
    const cacheKey = `github_stars_${owner}_${repo}`;
    const cacheExpiry = 60 * 60 * 1000; // 1 hour cache

    useEffect(() => {
        const fetchStars = async () => {
            // Check cache first (only in browser environment)
            if (typeof window !== 'undefined') {
                try {
                    const cached = localStorage.getItem(cacheKey);
                    if (cached) {
                        const { value, timestamp } = JSON.parse(cached);
                        if (Date.now() - timestamp < cacheExpiry) {
                            setStars(value);
                            return;
                        }
                    }
                } catch {
                    // Ignore cache errors
                }
            }

            try {
                const response = await fetch(
                    `https://api.github.com/repos/${owner}/${repo}`,
                    {
                        headers: {
                            'Accept': 'application/vnd.github.v3+json',
                        },
                    }
                );

                // Handle rate limiting
                if (response.status === 403) {
                    const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
                    if (rateLimitRemaining === '0') {
                        console.warn('GitHub API rate limit exceeded, using cached/default value');
                        return;
                    }
                }

                if (!response.ok) {
                    throw new Error('Failed to fetch GitHub stars');
                }

                const data = await response.json();
                const formattedStars = formatStarCount(data.stargazers_count);
                setStars(formattedStars);

                // Cache the result (only in browser environment)
                if (typeof window !== 'undefined') {
                    try {
                        localStorage.setItem(cacheKey, JSON.stringify({
                            value: formattedStars,
                            timestamp: Date.now()
                        }));
                    } catch {
                        // Ignore storage errors
                    }
                }
            } catch (error) {
                console.error('Error fetching GitHub stars:', error);
                // Keep default value on error
            }
        };

        fetchStars();
    }, [owner, repo, cacheKey, cacheExpiry]);

    return stars;
}

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
    const githubStars = useGitHubStars('keploy', 'keploy');

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

                {/* Right Side - GitHub Stars, Sign In & Menu */}
                <div className="flex items-center gap-4">
                    {/* GitHub Stars Badge - Hidden on mobile */}
                    <a
                        href="https://github.com/keploy/keploy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <GitHubIcon className="w-5 h-5 text-gray-800" />
                        <span className="font-semibold text-gray-800">{githubStars}</span>
                    </a>

                    {/* Sign In Button - Hidden on mobile */}
                    <Button
                        asChild
                        className="hidden md:flex bg-[#F89559] text-white hover:bg-[#e87b3a] font-semibold px-6 py-2.5 rounded-lg shadow-sm"
                    >
                        <a
                            href="https://forms.gle/R7RbuL39sc1TFW449"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sign In
                        </a>
                    </Button>

                    {/* Hamburger Menu Button */}
                    <button
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="hidden sm:inline text-sm font-medium text-gray-700">MENU</span>
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Slide-in Navigation Panel */}
            {isMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/20 z-40"
                        onClick={() => setIsMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Side Panel */}
                    <nav
                        className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 animate-in slide-in-from-right duration-300"
                        aria-label="Main navigation"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-[#F89559]">Navigation</h2>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-md bg-[#F89559] text-white hover:bg-[#e87b3a] transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col px-6 py-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="py-3 text-gray-700 hover:text-[#F89559] transition-colors font-medium text-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Social Icons at Bottom */}
                        <div className="absolute bottom-8 left-6 right-6">
                            <div className="flex items-center gap-4">
                                <a href="https://keploy.slack.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F89559] transition-colors" aria-label="Slack">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/keaboratory" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F89559] transition-colors" aria-label="X (Twitter)">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@kaboratory" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F89559] transition-colors" aria-label="YouTube">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F89559] transition-colors" aria-label="LinkedIn">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/keploy/keploy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F89559] transition-colors" aria-label="GitHub">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </nav>
                </>
            )}
        </header>
    );
}
