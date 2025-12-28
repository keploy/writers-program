"use client";

import { Writer } from "@/lib/writersData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import Image from "next/image";

interface WriterCardProps {
    writer: Writer;
}

/**
 * WriterCard Component
 * 
 * Displays an individual writer's profile with their image, name, role, bio,
 * and social links. Follows Keploy's visual style with elegant hover effects.
 * 
 * Note: Currently using initials as placeholders. When real writer photos are
 * available, place them in /public/images/writers/ and update the image paths
 * in writersData.ts
 */
export function WriterCard({ writer }: WriterCardProps) {
    // Check if writer has a real image (not a placeholder path)
    const hasRealImage = writer.image && !writer.image.includes('placeholder');

    return (
        <Card className="group relative h-full flex flex-col overflow-hidden bg-white border border-gray-200/60 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Animated gradient border on hover */}
            <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F89559] via-[#E87B3A] to-[#F89559] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{ padding: '2px', margin: '-2px' }}
                aria-hidden="true"
            />

            {/* Inner card background */}
            <div className="absolute inset-[2px] bg-white rounded-[14px] -z-5" aria-hidden="true" />

            {/* Subtle top glow on hover */}
            <div
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#F89559]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
            />

            <CardHeader className="relative text-center pb-3 pt-8 flex-shrink-0">
                {/* Profile Image with gradient ring */}
                <div className="mx-auto mb-5 relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-28 h-28 rounded-full bg-gradient-to-br from-[#F89559] to-[#E87B3A] blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Avatar container */}
                    <div className="relative w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-[#F89559]/30 to-[#E87B3A]/30 group-hover:from-[#F89559] group-hover:to-[#E87B3A] transition-all duration-500">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
                            {hasRealImage ? (
                                <Image
                                    src={writer.image}
                                    alt={`${writer.name}'s profile photo`}
                                    width={112}
                                    height={112}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                /* Placeholder avatar with initials */
                                <span
                                    className="text-3xl font-bold bg-gradient-to-br from-[#F89559] to-[#E87B3A] bg-clip-text text-transparent select-none"
                                    aria-label={writer.name ? `${writer.name}'s initials` : 'Writer initials'}
                                >
                                    {writer.name && writer.name.trim()
                                        ? writer.name.split(' ').filter(Boolean).map(n => n[0]).join('').slice(0, 2).toUpperCase()
                                        : '??'}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#E87B3A] transition-colors duration-300">
                    {writer.name}
                </CardTitle>

                {writer.role && (
                    <p className="text-sm font-semibold text-[#F89559] mt-2 tracking-wide">
                        {writer.role}
                    </p>
                )}
            </CardHeader>

            <CardContent className="relative text-center flex-grow flex flex-col justify-between px-6 pb-6">
                {/* Bio text - fixed height with overflow handling */}
                <p className="text-gray-600 text-sm leading-relaxed min-h-[4.5rem]">
                    {writer.bio}
                </p>

                {/* Social Links - BOLDER icons with better visibility */}
                {writer.socialLinks && (
                    <div className="flex justify-center gap-4 mt-5 pt-5 border-t border-gray-100">
                        {writer.socialLinks.twitter && (
                            <a
                                href={writer.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-[#F89559] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#F89559]/30"
                                aria-label={`Follow ${writer.name} on X (Twitter)`}
                            >
                                <Twitter className="w-5 h-5" strokeWidth={2.5} />
                            </a>
                        )}
                        {writer.socialLinks.github && (
                            <a
                                href={writer.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-[#F89559] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#F89559]/30"
                                aria-label={`Visit ${writer.name}'s GitHub profile`}
                            >
                                <Github className="w-5 h-5" strokeWidth={2.5} />
                            </a>
                        )}
                        {writer.socialLinks.linkedin && (
                            <a
                                href={writer.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-[#F89559] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#F89559]/30"
                                aria-label={`Connect with ${writer.name} on LinkedIn`}
                            >
                                <Linkedin className="w-5 h-5" strokeWidth={2.5} />
                            </a>
                        )}
                        {writer.socialLinks.website && (
                            <a
                                href={writer.socialLinks.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-[#F89559] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#F89559]/30"
                                aria-label={`Visit ${writer.name}'s website`}
                            >
                                <Globe className="w-5 h-5" strokeWidth={2.5} />
                            </a>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
