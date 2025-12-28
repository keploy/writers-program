"use client";

import { writers } from "@/lib/writersData";
import { WriterCard } from "./WriterCard";
import { Sparkles, Users, PenTool } from "lucide-react";

/**
 * WritersSection Component
 * 
 * Main section displaying all writers in a responsive grid layout.
 * Includes a beautiful hero heading with decorative elements.
 */
export function WritersSection() {
    return (
        <section
            className="relative py-24 px-6 overflow-hidden"
            aria-labelledby="writers-section-heading"
        >
            {/* Background with subtle gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white"
                aria-hidden="true"
            />

            {/* Decorative floating elements */}
            <div
                className="absolute top-20 left-10 w-72 h-72 bg-[#F89559]/5 rounded-full blur-3xl"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-40 right-10 w-96 h-96 bg-[#F89559]/5 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <div className="relative max-w-6xl mx-auto">
                {/* Enhanced Section Header */}
                <div className="text-center mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F89559]/10 to-[#E87B3A]/10 border border-[#F89559]/20 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-[#F89559]" />
                        <span className="text-sm font-semibold text-[#E87B3A] uppercase tracking-widest">
                            Our Community
                        </span>
                        <Sparkles className="w-4 h-4 text-[#F89559]" />
                    </div>

                    <h1
                        id="writers-section-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
                    >
                        Meet Our{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-[#F89559] to-[#E87B3A] bg-clip-text text-transparent">
                                Writers
                            </span>
                            {/* Animated underline */}
                            <span
                                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-[#F89559] to-[#E87B3A] rounded-full"
                                aria-hidden="true"
                            />
                            {/* Sparkle decoration */}
                            <svg
                                className="absolute -top-4 -right-6 w-8 h-8 text-[#F89559] animate-pulse"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M12 0L13.5 9L24 12L13.5 15L12 24L10.5 15L0 12L10.5 9L12 0Z" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                        Our talented community of technical writers brings diverse expertise
                        and passion for making complex concepts accessible to developers worldwide.
                    </p>

                    {/* Stats badges */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-100">
                            <Users className="w-5 h-5 text-[#F89559]" />
                            <span className="text-sm font-semibold text-gray-700">Global Community</span>
                        </div>
                        <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-100">
                            <PenTool className="w-5 h-5 text-[#F89559]" />
                            <span className="text-sm font-semibold text-gray-700">Expert Content</span>
                        </div>
                    </div>
                </div>

                {/* Writers Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    role="list"
                    aria-label="Writers"
                >
                    {writers.map((writer) => (
                        <div key={writer.id} role="listitem" className="h-full">
                            <WriterCard writer={writer} />
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-24 text-center">
                    <div className="relative inline-block overflow-hidden rounded-3xl">
                        {/* Animated background */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-[#00163D] via-[#0a2554] to-[#00163D]"
                            aria-hidden="true"
                        />

                        {/* Animated stars background */}
                        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                            <div className="stars-layer-1" />
                            <div className="stars-layer-2" />
                        </div>

                        {/* Decorative orbs */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 bg-[#F89559]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                            aria-hidden="true"
                        />
                        <div
                            className="absolute bottom-0 left-0 w-48 h-48 bg-[#F89559]/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"
                            aria-hidden="true"
                        />

                        <div className="relative p-10 md:p-14">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-[#F89559]" />
                                <span className="text-sm font-medium text-white/90">Start Your Journey</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want to Join Our Writers Community?
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                                Share your expertise, grow your skills, and get recognized
                                for your contributions to the developer community.
                            </p>
                            <a
                                href="https://forms.gle/R7RbuL39sc1TFW449"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#F89559] to-[#E87B3A] text-[#00163D] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F89559]/40 focus:outline-none focus:ring-4 focus:ring-[#F89559]/50"
                            >
                                Join the Program
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
