/**
 * Flow Component for Keploy Writers Program
 * Displays the step-by-step process for contributing content
 * 
 * AI-Generated Design Notes:
 * - Uses a vertical timeline/flow design pattern
 * - Implements progressive disclosure with step numbers
 * - Responsive layout adapts to mobile, tablet, and desktop
 * - Uses Framer Motion for smooth animations (to be integrated)
 */

import React from 'react';
import { FileEdit, Search, MessageSquare, ThumbsUp, Trophy } from 'lucide-react';

interface FlowStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  color: string;
}

interface FlowProps {
  className?: string;
}

const flowSteps: FlowStep[] = [
  {
    id: 1,
    icon: <Search className="w-6 h-6" aria-hidden="true" />,
    title: 'Explore Topics',
    description: 'Browse our content guidelines and choose a topic that aligns with your expertise',
    details: [
      'Review SEO guidelines',
      'Check trending topics',
      'Align with your expertise'
    ],
    color: 'orange'
  },
  {
    id: 2,
    icon: <FileEdit className="w-6 h-6" aria-hidden="true" />,
    title: 'Submit Proposal',
    description: 'Submit your article idea through our structured proposal form',
    details: [
      'Outline your article concept',
      'Provide key talking points',
      'Estimate word count and timeline'
    ],
    color: 'blue'
  },
  {
    id: 3,
    icon: <MessageSquare className="w-6 h-6" aria-hidden="true" />,
    title: 'Get Feedback',
    description: 'Our editorial team reviews your proposal and provides constructive feedback',
    details: [
      'Receive feedback within 48 hours',
      'Collaborate on improvements',
      'Align on expectations'
    ],
    color: 'purple'
  },
  {
    id: 4,
    icon: <ThumbsUp className="w-6 h-6" aria-hidden="true" />,
    title: 'Create Content',
    description: 'Write your article following our guidelines and best practices',
    details: [
      'Follow style guide',
      'Include code examples',
      'Optimize for SEO'
    ],
    color: 'green'
  },
  {
    id: 5,
    icon: <Trophy className="w-6 h-6" aria-hidden="true" />,
    title: 'Publish & Earn',
    description: 'Final review, publication, and payment processing',
    details: [
      'Editorial review and approval',
      'Content published on keploy.io',
      'Receive compensation'
    ],
    color: 'orange'
  }
];

const Flow: React.FC<FlowProps> = ({ className = '' }) => {
  const getColorClasses = (color: string) => {
    const colors = {
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-950/30',
        border: 'border-orange-500',
        text: 'text-orange-600 dark:text-orange-400',
        iconBg: 'bg-orange-500',
        dot: 'bg-orange-500'
      },
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-950/30',
        border: 'border-blue-500',
        text: 'text-blue-600 dark:text-blue-400',
        iconBg: 'bg-blue-500',
        dot: 'bg-blue-500'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-950/30',
        border: 'border-purple-500',
        text: 'text-purple-600 dark:text-purple-400',
        iconBg: 'bg-purple-500',
        dot: 'bg-purple-500'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-950/30',
        border: 'border-green-500',
        text: 'text-green-600 dark:text-green-400',
        iconBg: 'bg-green-500',
        dot: 'bg-green-500'
      }
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <section 
      className={`py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 ${className}`}
      aria-labelledby="flow-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="flow-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            The <span className="text-orange-500">Process</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A simple, transparent workflow from idea to publication
          </p>
        </div>

        {/* Flow Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div 
            className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-green-500"
            aria-hidden="true"
          />

          {/* Steps */}
          <ol className="space-y-8" role="list">
            {flowSteps.map((step, index) => {
              const colors = getColorClasses(step.color);
              const isLast = index === flowSteps.length - 1;

              return (
                <li 
                  key={step.id}
                  className="relative"
                >
                  <article className="flex gap-6 md:gap-8">
                    {/* Step Number & Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      {/* Step Dot */}
                      <div 
                        className={`
                          absolute left-8 md:left-12 -translate-x-1/2 w-4 h-4 rounded-full
                          ${colors.dot} border-4 border-white dark:border-gray-900
                        `}
                        aria-hidden="true"
                      />
                      
                      {/* Icon Circle */}
                      <div 
                        className={`
                          flex items-center justify-center w-16 h-16 md:w-20 md:h-20
                          rounded-full ${colors.iconBg} text-white
                          shadow-lg transform transition-transform hover:scale-110
                        `}
                        aria-label={`Step ${step.id}`}
                      >
                        <div className="flex flex-col items-center">
                          {step.icon}
                          <span className="text-xs mt-1 font-bold">{step.id}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div 
                      className={`
                        flex-1 p-6 rounded-xl border-2 ${colors.border} ${colors.bg}
                        transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                        focus-within:ring-4 focus-within:ring-offset-2 focus-within:ring-orange-500/50
                      `}
                    >
                      {/* Title */}
                      <h3 className={`text-xl md:text-2xl font-bold mb-2 ${colors.text}`}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <ul className="space-y-2" role="list">
                        {step.details.map((detail, idx) => (
                          <li 
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span 
                              className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
                              aria-hidden="true"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-lg
              bg-gradient-to-r from-orange-500 to-orange-600
              text-white font-semibold text-lg
              hover:from-orange-600 hover:to-orange-700
              focus:outline-none focus:ring-4 focus:ring-orange-500/50
              transition-all duration-200 shadow-lg hover:shadow-xl
            "
            aria-label="Start your journey with Keploy Writers Program"
          >
            Start Your Journey
            <Trophy className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Flow;
