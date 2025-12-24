"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const steps = [
    {
        number: "01",
        image: "/images/handy-folder-with-idea-bulb.gif",
        title: "Register yourself",
        description:
            "Fill out the form and register to the writers program. We'll be eager to have you along.",
    },
    {
        number: "02",
        image: "/images/dazzle-man-programmer-writing-code-on-a-laptop.gif",
        title: "Onboarding starts",
        description:
            "Get onboard with us, learn about Keploy's ecosystem, connect with the team & mentors.",
    },
    {
        number: "03",
        image: "/images/juicy-woman-is-looking-for-perfect-candidate-1.gif",
        title: "Research your Idea",
        description:
            "Choose and research your write-up. Get access to mentorship & resources by the team.",
    },
    {
        number: "04",
        image: "/images/dizzy-education.gif",
        title: "Craft your Work",
        description:
            "Start crafting your ideas into words. Work on approved ideas and topics.",
    },
    {
        number: "05",
        image: "/images/dazzle-blog-post-article.gif",
        title: "Revision & Submissions",
        description:
            "Copy editing, hero image design, and revision. We help you polish before submitting.",
    },
    {
        number: "06",
        image: "/images/juicy-man-programmer-writing-code-and-make-web-design-on-a-pc.gif",
        title: "Publication",
        description:
            "Once the content meets all guidelines, publish with Keploy and earn your benefits!",
    },
];

export function FlowSection() {
    return (
        <section
            id="writers-program"
            className="py-20 px-6 bg-white"
            aria-labelledby="flow-title"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2
                        id="flow-title"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    >
                        <span className="text-[#F89559]">Here's how</span>{" "}
                        <span className="text-[#1a1a1a]">the Program works</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From registration to publication - your journey with us
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Program steps"
                >
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="group bg-white border-2 border-gray-100 shadow-sm hover:shadow-lg hover:border-[#F89559] transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
                            role="listitem"
                            tabIndex={0}
                        >
                            {/* Step Number */}
                            <div className="absolute top-4 left-4 w-10 h-10 bg-[#F89559] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                    {step.number}
                                </span>
                            </div>

                            <CardContent className="pt-16 pb-6 px-6">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="relative w-24 h-24">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-[#1a1a1a] text-center mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-center text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
