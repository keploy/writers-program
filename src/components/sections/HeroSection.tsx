"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";

export function HeroSection() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-white pt-20 relative"
            aria-labelledby="hero-title"
        >
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-full mb-6 shadow-sm">
                            <span className="text-[#F89559] text-sm font-semibold">🚀 Open-Source Program</span>
                        </div>

                        <h1
                            id="hero-title"
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-[#F89559]">Keploy's</span>
                            <br />
                            <span className="text-[#1a1a1a] underline decoration-[#F89559] decoration-[3px] underline-offset-[6px]">Writers Program</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-2 leading-relaxed max-w-xl">
                            Get into a community of Technical Writers where you get the right{" "}
                            <span className="text-[#F89559] font-semibold">Recognition</span> |{" "}
                            <span className="text-[#F89559] font-semibold">Growth</span> |{" "}
                            <span className="text-[#F89559] font-semibold">Networking</span> |{" "}
                            <span className="text-[#F89559] font-semibold">Earning & Rewards</span>
                        </p>

                        <p className="text-base md:text-lg text-gray-500 mb-6 max-w-xl">
                            An Open-Source Program for Students, Professionals, and Freelancers
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                asChild
                                className="bg-gradient-to-r from-[#F89559] to-[#e87b3a] text-white hover:from-[#e87b3a] hover:to-[#d66a2a] font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                            >
                                <a
                                    href="https://forms.gle/R7RbuL39sc1TFW449"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Register Now!
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="border-2 border-[#1a1a1a] text-[#1a1a1a] bg-white hover:bg-[#1a1a1a] hover:text-white font-bold text-lg px-8 py-6 rounded-xl transition-all hover:-translate-y-0.5"
                            >
                                <a
                                    href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join Community
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right - Bunny Mascot */}
                    <div className="flex justify-center items-center">
                        <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
                            <Image
                                src="/images/bunny.png"
                                alt="Keploy Bunny Mascot"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Icons - Right Side */}
            <aside
                className="hidden lg:flex flex-col gap-3 absolute right-4 top-1/2 -translate-y-1/2"
                aria-label="Social media links"
            >
                <a href="https://keploy.slack.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-end gap-2" aria-label="Slack">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm border border-gray-100">Slack</span>
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 group-hover:text-[#F89559] group-hover:border-[#F89559] group-hover:shadow-md transition-all">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                        </svg>
                    </div>
                </a>
                <a href="https://twitter.com/keaboratory" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-end gap-2" aria-label="X (Twitter)">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm border border-gray-100">X</span>
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 group-hover:text-[#F89559] group-hover:border-[#F89559] group-hover:shadow-md transition-all">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </div>
                </a>
                <a href="https://www.youtube.com/@kaboratory" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-end gap-2" aria-label="YouTube">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm border border-gray-100">YouTube</span>
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 group-hover:text-[#F89559] group-hover:border-[#F89559] group-hover:shadow-md transition-all">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </div>
                </a>
                <a href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-end gap-2" aria-label="LinkedIn">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm border border-gray-100">LinkedIn</span>
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 group-hover:text-[#F89559] group-hover:border-[#F89559] group-hover:shadow-md transition-all">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </div>
                </a>
                <a href="https://github.com/keploy/keploy" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-end gap-2" aria-label="GitHub">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm border border-gray-100">GitHub</span>
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 group-hover:text-[#F89559] group-hover:border-[#F89559] group-hover:shadow-md transition-all">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </div>
                </a>
            </aside>

            {/* Orange Divider Line */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#F89559] to-transparent" />
            </div>
        </section>
    );
}
