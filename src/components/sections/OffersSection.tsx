"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const offers = [
    {
        image: "/images/bubble-gum-content-marketing.gif",
        title: "Get Recognized",
        description:
            "Expand your technical writing horizon by earning compensations, swags, and personal brand visibility across the developer community.",
    },
    {
        image: "/images/handy-line-machine-learning.gif",
        title: "Learn",
        description:
            "Access to mentorship, weekly sync-ups, and community support. Work directly with Keploy's editorial team to enhance your skills.",
    },
    {
        image: "/images/bloom-online-video-conference-for-employees.gif",
        title: "Flourish",
        description:
            "Gain experience & network with like-minded individuals. Be a part of a global community of technical writers and developers.",
    },
];

export function OffersSection() {
    return (
        <section
            id="program"
            className="py-20 px-6 bg-[#fafafa]"
            aria-labelledby="offers-title"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2
                        id="offers-title"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4"
                    >
                        What this program <span className="text-[#F89559]">offers you?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join our community and unlock your potential as a technical writer
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Program benefits"
                >
                    {offers.map((offer, index) => (
                        <Card
                            key={index}
                            className="group bg-white border-2 border-gray-100 shadow-sm hover:shadow-lg hover:border-[#F89559] transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
                            role="listitem"
                            tabIndex={0}
                        >
                            <CardHeader className="pb-2 pt-8 px-6">
                                <div className="relative w-28 h-28 mx-auto mb-4">
                                    <Image
                                        src={offer.image}
                                        alt={offer.title}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <CardTitle className="text-xl text-[#1a1a1a] text-center font-bold">
                                    {offer.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="pt-2 pb-8 px-6">
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {offer.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
