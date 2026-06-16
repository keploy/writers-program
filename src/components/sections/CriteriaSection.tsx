"use client";

import { Button } from "@/components/ui/button";
import {
    Lightbulb,
    Code,
    BarChart3,
    Shield,
    FileText,
    CheckCircle2,
} from "lucide-react";

const criteria = [
    {
        icon: Lightbulb,
        title: "Originality",
        description:
            "Submissions should be entirely original, showcasing your unique perspective and insights.",
        gradient: "from-yellow-400 to-orange-500",
        number: "01",
    },
    {
        icon: Code,
        title: "Relevance to Software Developers",
        description:
            "Content should be tailored for a target audience of beginner to intermediate software developers.",
        gradient: "from-blue-400 to-cyan-500",
        number: "02",
    },
    {
        icon: BarChart3,
        title: "Keyword Volume Requirement",
        description:
            "Ensure the chosen keyword for the blog has a volume of at least 400 searches per month.",
        gradient: "from-green-400 to-emerald-500",
        number: "03",
    },
    {
        icon: Shield,
        title: "Conformity to Plagiarism Policy",
        description:
            "Adhere strictly to our plagiarism policy. Avoid any form of reproducing or claiming someone else's work.",
        gradient: "from-red-400 to-pink-500",
        number: "04",
    },
    {
        icon: FileText,
        title: "Compliance with Terms & Conditions",
        description:
            "Understand and comply with the terms and conditions of the Keploy Community Writing Program.",
        gradient: "from-purple-400 to-violet-500",
        number: "05",
    },
];

export function CriteriaSection() {
    return (
        <section
            id="criteria"
            className="py-24 px-6 relative overflow-hidden"
            aria-labelledby="criteria-title"
            style={{
                background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 50%, #000000 100%)"
            }}
        >
            {/* Animated Stars Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Star layers */}
                <div className="stars-layer-1" />
                <div className="stars-layer-2" />
                <div className="stars-layer-3" />

                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F89559]/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#F89559]" />
                        <span className="text-white/70 text-sm font-medium">Quality Standards</span>
                    </div>
                    <h2
                        id="criteria-title"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        <span className="text-[#F89559]">Evaluation</span>{" "}
                        <span className="text-white">Criteria</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        We review every submission based on these key standards to ensure excellence
                    </p>
                </div>

                <div
                    className="space-y-4"
                    role="list"
                    aria-label="Evaluation criteria list"
                >
                    {criteria.map((criterion, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Card */}
                            <div
                                className="flex items-start gap-6 p-6 bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.08] hover:bg-white/[0.06] hover:border-[#F89559]/40 transition-all duration-500 cursor-pointer hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#F89559]/5"
                                tabIndex={0}
                            >
                                {/* Number */}
                                <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] items-center justify-center">
                                    <span className="text-[#F89559] font-bold text-lg">{criterion.number}</span>
                                </div>

                                {/* Icon */}
                                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${criterion.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <criterion.icon
                                        className="w-7 h-7 text-white"
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F89559] transition-colors">
                                        {criterion.title}
                                    </h3>
                                    <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                        {criterion.description}
                                    </p>
                                </div>

                                {/* Arrow indicator */}
                                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:bg-[#F89559] group-hover:border-[#F89559] transition-all duration-300">
                                    <svg className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        asChild
                        className="bg-[#F89559] text-white hover:bg-[#e87b3a] font-semibold text-lg px-10 py-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-[#F89559]/30 transition-all duration-300"
                    >
                        <a
                            href="https://github.com/keploy/writers-program/blob/main/README.md"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read Full Guidelines
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
