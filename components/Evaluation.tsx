/**
 * Evaluation Component for Keploy Writers Program
 * Displays content evaluation criteria in an interactive format
 * 
 * AI-Generated Design Notes:
 * - Card-based layout with interactive hover states
 * - Priority indicators using visual weights (stars/badges)
 * - Progressive disclosure for detailed criteria
 * - Accessible accordion pattern for expandable sections
 */

import React, { useState } from 'react';
import { Star, Target, BookOpen, Code, TrendingUp, Shield } from 'lucide-react';

interface EvaluationCriterion {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  weight: 'high' | 'medium' | 'low';
  examples: string[];
}

interface EvaluationProps {
  className?: string;
}

const criteria: EvaluationCriterion[] = [
  {
    id: 'relevance',
    icon: <Target className="w-6 h-6" aria-hidden="true" />,
    title: 'Relevance & Timeliness',
    description: 'Content must address current developer needs and industry trends',
    weight: 'high',
    examples: [
      'Addresses emerging technologies or practices',
      'Solves real-world developer problems',
      'Aligns with Keploy\'s testing automation focus'
    ]
  },
  {
    id: 'technical',
    icon: <Code className="w-6 h-6" aria-hidden="true" />,
    title: 'Technical Depth',
    description: 'In-depth technical analysis with practical code examples',
    weight: 'high',
    examples: [
      'Includes working code samples',
      'Provides step-by-step implementation',
      'Explains underlying concepts clearly'
    ]
  },
  {
    id: 'quality',
    icon: <BookOpen className="w-6 h-6" aria-hidden="true" />,
    title: 'Writing Quality',
    description: 'Clear, engaging writing that follows best practices',
    weight: 'high',
    examples: [
      'Well-structured with clear headings',
      'Proper grammar and technical terminology',
      'Engaging narrative flow'
    ]
  },
  {
    id: 'seo',
    icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
    title: 'SEO Optimization',
    description: 'Content optimized for search engines and discoverability',
    weight: 'medium',
    examples: [
      'Target keywords naturally integrated',
      'Proper meta descriptions and titles',
      'Internal and external linking strategy'
    ]
  },
  {
    id: 'originality',
    icon: <Star className="w-6 h-6" aria-hidden="true" />,
    title: 'Originality',
    description: 'Unique perspectives and fresh insights',
    weight: 'medium',
    examples: [
      'Novel approaches or solutions',
      'Personal experience and insights',
      'Not duplicated from existing content'
    ]
  },
  {
    id: 'accuracy',
    icon: <Shield className="w-6 h-6" aria-hidden="true" />,
    title: 'Accuracy & Reliability',
    description: 'Factually correct information with proper citations',
    weight: 'high',
    examples: [
      'Verified technical information',
      'Proper attribution and citations',
      'Up-to-date best practices'
    ]
  }
];

const Evaluation: React.FC<EvaluationProps> = ({ className = '' }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getWeightColor = (weight: string) => {
    switch (weight) {
      case 'high':
        return {
          badge: 'bg-orange-500 text-white',
          border: 'border-orange-500',
          bg: 'bg-orange-50 dark:bg-orange-950/20'
        };
      case 'medium':
        return {
          badge: 'bg-blue-500 text-white',
          border: 'border-blue-500',
          bg: 'bg-blue-50 dark:bg-blue-950/20'
        };
      default:
        return {
          badge: 'bg-gray-500 text-white',
          border: 'border-gray-500',
          bg: 'bg-gray-50 dark:bg-gray-950/20'
        };
    }
  };

  const getWeightStars = (weight: string) => {
    const count = weight === 'high' ? 3 : weight === 'medium' ? 2 : 1;
    return Array(count).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className="w-4 h-4 fill-orange-500 text-orange-500" 
        aria-hidden="true"
      />
    ));
  };

  return (
    <section 
      className={`py-16 px-4 md:px-8 lg:px-16 ${className}`}
      aria-labelledby="evaluation-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="evaluation-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            How We <span className="text-orange-500">Evaluate</span> Content
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our evaluation criteria ensure high-quality, valuable content for our developer community
          </p>
        </div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((criterion) => {
            const colors = getWeightColor(criterion.weight);
            const isExpanded = expandedId === criterion.id;

            return (
              <article
                key={criterion.id}
                className={`
                  relative p-6 rounded-2xl border-2 transition-all duration-300
                  ${colors.border} ${colors.bg}
                  hover:shadow-xl hover:scale-[1.02]
                  ${isExpanded ? 'ring-4 ring-orange-500/30' : ''}
                `}
              >
                {/* Weight Badge */}
                <div className="absolute -top-3 -right-3 flex items-center gap-1">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} shadow-lg`}>
                    {getWeightStars(criterion.weight)}
                    <span className="capitalize">{criterion.weight}</span>
                  </span>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-gray-800 shadow-md mb-4">
                  <div className="text-orange-500">
                    {criterion.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {criterion.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {criterion.description}
                </p>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : criterion.id)}
                  className="
                    w-full px-4 py-2 rounded-lg
                    bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700
                    text-sm font-medium text-gray-700 dark:text-gray-300
                    hover:border-orange-500 hover:text-orange-500
                    focus:outline-none focus:ring-2 focus:ring-orange-500/50
                    transition-all duration-200
                  "
                  aria-expanded={isExpanded}
                  aria-controls={`criterion-${criterion.id}-details`}
                >
                  {isExpanded ? 'Hide Details' : 'Show Details'}
                </button>

                {/* Expandable Details */}
                {isExpanded && (
                  <div 
                    id={`criterion-${criterion.id}-details`}
                    className="mt-4 pt-4 border-t-2 border-gray-200 dark:border-gray-700"
                  >
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Examples:
                    </h4>
                    <ul className="space-y-2" role="list">
                      {criterion.examples.map((example, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 border-2 border-orange-200 dark:border-orange-800">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Priority Scoring
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Content is evaluated on a weighted scoring system. <strong>High priority</strong> criteria (★★★) carry more weight in our decision process, while <strong>medium</strong> (★★) and <strong>low priority</strong> (★) criteria provide additional evaluation context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
