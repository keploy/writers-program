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
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
                            <span className="text-[#F89559] text-sm font-medium">🚀 Open Source Program</span>
                        </div>

                        <h1
                            id="hero-title"
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-[#F89559]">Keploy's</span>
                            <br />
                            <span className="text-[#1a1a1a]">Writers Program</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed max-w-lg">
                            Get into a community of Technical Writers where you get the right
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                            <span className="px-3 py-1 bg-orange-50 text-[#F89559] rounded-full text-sm font-medium">Recognition</span>
                            <span className="px-3 py-1 bg-orange-50 text-[#F89559] rounded-full text-sm font-medium">Growth</span>
                            <span className="px-3 py-1 bg-orange-50 text-[#F89559] rounded-full text-sm font-medium">Networking</span>
                            <span className="px-3 py-1 bg-orange-50 text-[#F89559] rounded-full text-sm font-medium">Rewards</span>
                        </div>

                        {/* CTA Buttons - Clean arrangement */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                asChild
                                className="bg-[#F89559] text-white hover:bg-[#e87b3a] font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                            >
                                <a
                                    href="https://forms.gle/R7RbuL39sc1TFW449"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Register Now
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-[#F89559] font-semibold text-lg px-8 py-6 rounded-xl transition-all"
                            >
                                <a
                                    href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Users className="mr-2 w-5 h-5" />
                                    Join Slack
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

            {/* Orange Divider Line */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#F89559] to-transparent" />
            </div>
        </section>
    );
}
