"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TimelineStep {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface TimelineProps {
    steps: TimelineStep[];
    className?: string;
    ariaLabel?: string;
}

interface TimelineItemProps {
    step: TimelineStep;
    index: number;
    isLast: boolean;
}

/**
 * Clean, professional Timeline component for displaying step-by-step workflows.
 * Uses white theme with orange accents.
 */
export function Timeline({ steps, className, ariaLabel = "Workflow steps" }: TimelineProps) {
    return (
        <div
            className={cn("relative", className)}
            role="list"
            aria-label={ariaLabel}
        >
            {steps.map((step, index) => (
                <TimelineItem
                    key={step.id}
                    step={step}
                    index={index}
                    isLast={index === steps.length - 1}
                />
            ))}
        </div>
    );
}


function TimelineItem({ step, index, isLast }: TimelineItemProps) {
    return (
        <div
            className="relative flex gap-6 pb-12 last:pb-0 group"
            role="listitem"
        >
            {/* Timeline connector line */}
            {!isLast && (
                <div
                    className="absolute left-[27px] top-[60px] w-0.5 h-[calc(100%-40px)] bg-gradient-to-b from-[#F89559] to-gray-200"
                    aria-hidden="true"
                />
            )}

            {/* Step Icon & Number */}
            <div className="relative flex-shrink-0">
                <div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F89559] to-[#E87B3A] flex items-center justify-center shadow-lg shadow-[#F89559]/20 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                >
                    <div className="text-white w-6 h-6">
                        {step.icon}
                    </div>
                </div>
                {/* Step number badge */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#00163D] text-white text-xs font-bold flex items-center justify-center shadow-md border-2 border-white">
                    {index + 1}
                </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 pt-1">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-[#F89559]/30 transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#F89559] transition-colors">
                        {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

/**
 * Horizontal Timeline variant for desktop displays.
 * Clean card-based design optimized for wider screens.
 * @param steps - Array of timeline steps to display
 * @param className - Optional additional CSS classes
 * @param ariaLabel - Optional aria-label for accessibility (defaults to "Workflow steps")
 */
export function HorizontalTimeline({ steps, className, ariaLabel = "Workflow steps" }: TimelineProps) {

    return (
        <div className={cn("relative", className)}>
            {/* Connector line */}
            <div
                className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gray-200 via-[#F89559] to-gray-200"
                aria-hidden="true"
            />

            <div
                className="grid grid-cols-5 gap-4"
                role="list"
                aria-label={ariaLabel}
            >

                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className="relative flex flex-col items-center group"
                        role="listitem"
                    >
                        {/* Icon Container */}
                        <div className="relative z-10 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F89559] to-[#E87B3A] flex items-center justify-center shadow-lg shadow-[#F89559]/20 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 border-4 border-white">
                                <div className="text-white w-7 h-7">
                                    {step.icon}
                                </div>
                            </div>
                            {/* Number badge */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#00163D] text-white text-xs font-bold shadow-md border-2 border-white">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </div>

                        {/* Card - uniform height with h-full and flex */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-[#F89559]/30 transition-all duration-300 text-center w-full h-full flex flex-col group-hover:-translate-y-1">
                            <h3 className="text-base font-bold text-[#1a1a1a] mb-3 group-hover:text-[#F89559] transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed flex-1">
                                {step.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}
