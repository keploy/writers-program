/**
 * Offers Component for Keploy Writers Program
 * Modern, accessible, and reusable UI component
 * 
 * AI-Generated Design Notes:
 * - Uses Tailwind CSS for styling with Keploy's brand colors
 * - Implements ARIA attributes for accessibility
 * - Responsive design with mobile-first approach
 * - Uses modern React patterns with TypeScript
 */

import React from 'react';
import { CheckCircle, Gift, Zap, Users } from 'lucide-react';

interface Offer {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  highlighted?: boolean;
}

interface OffersProps {
  className?: string;
}

const offersData: Offer[] = [
  {
    id: 'compensation',
    icon: <Gift className="w-8 h-8" aria-hidden="true" />,
    title: 'Competitive Compensation',
    description: 'Get paid for your technical expertise and writing skills',
    benefits: [
      'Up to $200 per accepted article',
      'Performance-based bonuses',
      'Fast payment processing'
    ],
    highlighted: true
  },
  {
    id: 'growth',
    icon: <Zap className="w-8 h-8" aria-hidden="true" />,
    title: 'Professional Growth',
    description: 'Enhance your portfolio and build your personal brand',
    benefits: [
      'Byline on all published content',
      'Exposure to 50K+ developers',
      'SEO-optimized content showcase'
    ]
  },
  {
    id: 'community',
    icon: <Users className="w-8 h-8" aria-hidden="true" />,
    title: 'Vibrant Community',
    description: 'Join a network of passionate technical writers and developers',
    benefits: [
      'Access to exclusive writer community',
      'Mentorship opportunities',
      'Collaborative learning environment'
    ]
  }
];

const Offers: React.FC<OffersProps> = ({ className = '' }) => {
  return (
    <section 
      className={`py-16 px-4 md:px-8 lg:px-16 ${className}`}
      aria-labelledby="offers-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="offers-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            What We <span className="text-orange-500">Offer</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join Keploy's Writers Program and unlock opportunities for growth, compensation, and community
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offersData.map((offer) => (
            <article
              key={offer.id}
              className={`
                relative p-6 rounded-2xl border-2 transition-all duration-300
                hover:shadow-xl hover:scale-105 focus-within:ring-4 focus-within:ring-orange-500/50
                ${offer.highlighted 
                  ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900' 
                  : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
                }
              `}
              aria-label={offer.title}
            >
              {/* Highlighted Badge */}
              {offer.highlighted && (
                <div className="absolute -top-3 -right-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-500 text-white shadow-lg">
                    Featured
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`
                inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4
                ${offer.highlighted 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-orange-500 dark:bg-gray-700'
                }
              `}>
                {offer.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {offer.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-2" role="list">
                {offer.benefits.map((benefit, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle 
                      className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" 
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-lg
              bg-orange-500 text-white font-semibold text-lg
              hover:bg-orange-600 active:bg-orange-700
              focus:outline-none focus:ring-4 focus:ring-orange-500/50
              transition-all duration-200
              shadow-lg hover:shadow-xl
            "
            aria-label="Apply to Keploy Writers Program"
          >
            Apply Now
            <Zap className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
