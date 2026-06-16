"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    TrendingUp,
    FileText,
    ImageIcon,
    Instagram,
    ArrowRight,
    BookOpen,
} from "lucide-react";

const guidelines = [
    {
        icon: TrendingUp,
        title: "SEO Best Practices",
        description:
            "Learn about URL structure, page titles, keywords, and content structure to make your blogs rank higher.",
        link: "https://github.com/keploy/keploy/wiki/Keploy-SEO-Guidelines",
        linkText: "Read SEO Guidelines",
    },
    {
        icon: FileText,
        title: "Content Structure",
        description:
            "Keep intros short, use proper heading hierarchy, and maintain minimum 700 words with easy readability.",
        link: "https://github.com/keploy/keploy/wiki/Keploy-SEO-Guidelines#blogHub-content-structure",
        linkText: "View Writing Guide",
    },
    {
        icon: ImageIcon,
        title: "Image Optimization",
        description:
            "Use WebP format, compress under 100KB, add descriptive alt tags, and create unique visuals for your content.",
        link: "https://github.com/keploy/keploy/wiki/Keploy-SEO-Guidelines#image-optimization",
        linkText: "Learn Image Best Practices",
    },
    {
        icon: Instagram,
        title: "Social Media Carousels",
        description:
            "Create engaging Instagram carousels following our design templates. Start with a compelling cover slide.",
        link: "https://github.com/keploy/keploy/wiki/Keploy-SEO-Guidelines#instagram-post-guidelines",
        linkText: "View Carousel Guide",
    },
];

export function GuidelinesSection() {
    return (
        <section
            id="guidelines"
            className="py-20 px-6 bg-white"
            aria-labelledby="guidelines-title"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2
                        id="guidelines-title"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    >
                        <span className="text-[#F89559]">Guidelines</span>{" "}
                        <span className="text-[#1a1a1a]">for Creating Content</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Follow our SEO guidelines to create high-quality blogs and social media carousels
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
                    role="list"
                    aria-label="Content creation guidelines"
                >
                    {guidelines.map((guideline, index) => (
                        <Card
                            key={index}
                            className="group bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#F89559] transition-all duration-300 rounded-xl"
                            role="listitem"
                            tabIndex={0}
                        >
                            <CardHeader className="pb-2">
                                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-3">
                                    <guideline.icon
                                        className="w-6 h-6 text-[#F89559]"
                                        aria-hidden="true"
                                    />
                                </div>
                                <CardTitle className="text-xl text-[#1a1a1a] font-bold">
                                    {guideline.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    {guideline.description}
                                </p>
                                <a
                                    href={guideline.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#F89559] font-medium hover:gap-3 transition-all"
                                >
                                    {guideline.linkText}
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        asChild
                        className="bg-[#F89559] text-white hover:bg-[#e87b3a] font-semibold px-8 py-3 rounded-lg gap-2"
                    >
                        <a
                            href="https://github.com/keploy/keploy/wiki/Keploy-SEO-Guidelines"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BookOpen className="w-5 h-5" aria-hidden="true" />
                            View Complete SEO Guidelines
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
