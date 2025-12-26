"use client";

import { Timeline, HorizontalTimeline, TimelineStep } from "@/components/ui/timeline";
import {
    Pencil,
    Search,
    MessageSquareMore,
    ListChecks,
    Rocket,
    ArrowRight,
    Sparkles,
} from "lucide-react";

/**
 * Publishing flow steps following the Writers Program workflow:
 * Draft → Review → Changes → Lineup → Publish
 */
const publishingSteps: TimelineStep[] = [
    {
        id: "draft-submission",
        title: "Draft Submission",
        description:
            "Start by writing your blog post draft. Follow our content guidelines and submit your work through the designated channel for review.",
        icon: <Pencil className="w-full h-full" />,
    },
    {
        id: "review-by-team",
        title: "Review by Team",
        description:
            "Our editorial team carefully reviews your submission for technical accuracy, clarity, SEO optimization, and adherence to Keploy's style guidelines.",
        icon: <Search className="w-full h-full" />,
    },
    {
        id: "feedback-changes",
        title: "Feedback & Changes",
        description:
            "Receive constructive feedback from the team. Make necessary revisions to improve your content quality and address any suggested changes.",
        icon: <MessageSquareMore className="w-full h-full" />,
    },
    {
        id: "add-to-lineup",
        title: "Add to Lineup (Approved)",
        description:
            "Once approved, your blog is added to our publishing queue. We'll schedule it for publication and prepare any final formatting touches.",
        icon: <ListChecks className="w-full h-full" />,
    },
    {
        id: "final-publish",
        title: "Final Publish",
        description:
            "Your blog goes live on Keploy's platform! It's shared across our channels, and you earn your well-deserved recognition and rewards.",
        icon: <Rocket className="w-full h-full" />,
    },
];

export function PublishingFlowSection() {
    return (
        <section
            className="relative py-24 px-6 bg-white overflow-hidden"
            aria-labelledby="publishing-flow-title"
        >
            {/* Subtle Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#F89559]/5 to-transparent rounded-full -mr-96 -mt-96" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full -ml-72 -mb-72" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#F89559]/10 to-[#E87B3A]/10 border border-[#F89559]/20 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-[#F89559]" />
                        <span className="text-[#F89559] text-sm font-bold uppercase tracking-wider">Publishing Guide</span>
                    </div>

                    <h1
                        id="publishing-flow-title"
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
                    >
                        <span className="text-[#1a1a1a]">Blog Publishing </span>
                        <span className="text-[#F89559]">Workflow</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A clear, step-by-step guide for writers contributing to the Keploy Writers Program.
                        From your first draft to going live.
                    </p>
                </div>

                {/* Timeline Section */}
                <div className="mb-20">
                    {/* Desktop Horizontal Timeline */}
                    <div className="hidden lg:block">
                        <HorizontalTimeline steps={publishingSteps} />
                    </div>

                    {/* Mobile/Tablet Vertical Timeline */}
                    <div className="lg:hidden max-w-xl mx-auto">
                        <Timeline steps={publishingSteps} />
                    </div>
                </div>

                {/* CTA Section - Keploy Theme with Stars */}
                <div className="max-w-4xl mx-auto">
                    <div
                        className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl"
                        style={{
                            background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 50%, #000000 100%)"
                        }}
                    >
                        {/* Animated Stars Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="stars-layer-1" />
                            <div className="stars-layer-2" />
                            <div className="stars-layer-3" />
                        </div>

                        {/* Glowing Orbs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F89559]/20 rounded-full blur-[80px] animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/15 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                Ready to Start Writing?
                            </h2>
                            <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
                                Join our community of technical writers and share your knowledge with developers worldwide.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <a
                                    href="/#about"
                                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#F89559] to-[#E87B3A] text-white text-lg font-bold rounded-2xl hover:shadow-[0_0_40px_rgba(248,149,89,0.5)] transition-all duration-300 hover:scale-105"
                                >
                                    Become a Writer
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/30 rounded-2xl hover:bg-[#F89559] hover:border-[#F89559] hover:text-white transition-all duration-300 hover:scale-105"
                                >
                                    Back to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
