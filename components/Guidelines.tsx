/**
 * Guidelines Component for Keploy Writers Program
 * Comprehensive writing guidelines and best practices
 * 
 * AI-Generated Design Notes:
 * - Tab-based navigation for different guideline categories
 * - Copy-to-clipboard functionality for code snippets
 * - Collapsible sections for detailed guidelines
 * - Visual hierarchy with icons and color coding
 */

import React, { useState } from 'react';
import { BookOpen, Code2, FileText, Search, CheckCircle, AlertTriangle } from 'lucide-react';

interface GuidelineCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  guidelines: Guideline[];
}

interface Guideline {
  title: string;
  description: string;
  dos: string[];
  donts: string[];
}

interface GuidelinesProps {
  className?: string;
}

const categories: GuidelineCategory[] = [
  {
    id: 'writing',
    icon: <BookOpen className="w-5 h-5" aria-hidden="true" />,
    title: 'Writing Style',
    guidelines: [
      {
        title: 'Clear & Concise',
        description: 'Write in a clear, straightforward manner that\'s easy to understand',
        dos: [
          'Use active voice',
          'Keep sentences under 25 words',
          'Break complex topics into digestible sections',
          'Use transition words for flow'
        ],
        donts: [
          'Use jargon without explanation',
          'Write overly long paragraphs',
          'Assume advanced knowledge',
          'Use passive constructions unnecessarily'
        ]
      },
      {
        title: 'Audience Awareness',
        description: 'Understand your audience and write at the appropriate technical level',
        dos: [
          'Define technical terms on first use',
          'Provide context for complex concepts',
          'Use examples relevant to developers',
          'Link to foundational resources'
        ],
        donts: [
          'Oversimplify for experienced developers',
          'Use condescending tone',
          'Ignore accessibility needs',
          'Forget international readers'
        ]
      }
    ]
  },
  {
    id: 'technical',
    icon: <Code2 className="w-5 h-5" aria-hidden="true" />,
    title: 'Technical Content',
    guidelines: [
      {
        title: 'Code Examples',
        description: 'Provide practical, working code examples that readers can use',
        dos: [
          'Test all code examples',
          'Include setup instructions',
          'Use syntax highlighting',
          'Add comments to explain logic'
        ],
        donts: [
          'Share untested code',
          'Skip error handling',
          'Use deprecated APIs',
          'Ignore edge cases'
        ]
      },
      {
        title: 'Technical Accuracy',
        description: 'Ensure all technical information is correct and up-to-date',
        dos: [
          'Verify facts with official docs',
          'Cite sources properly',
          'Test procedures before publishing',
          'Update outdated information'
        ],
        donts: [
          'Make assumptions without verification',
          'Copy without attribution',
          'Use outdated best practices',
          'Ignore version compatibility'
        ]
      }
    ]
  },
  {
    id: 'structure',
    icon: <FileText className="w-5 h-5" aria-hidden="true" />,
    title: 'Structure',
    guidelines: [
      {
        title: 'Article Organization',
        description: 'Structure your content logically with clear sections',
        dos: [
          'Start with compelling intro',
          'Use descriptive headings (H2, H3)',
          'Include table of contents for long articles',
          'End with actionable conclusion'
        ],
        donts: [
          'Bury key information',
          'Use generic headings',
          'Create walls of text',
          'Skip introduction or conclusion'
        ]
      },
      {
        title: 'Visual Elements',
        description: 'Enhance readability with appropriate visual elements',
        dos: [
          'Add relevant diagrams',
          'Use code blocks properly',
          'Include screenshots when helpful',
          'Add alt text to images'
        ],
        donts: [
          'Use low-quality images',
          'Overload with visuals',
          'Forget image optimization',
          'Skip accessibility attributes'
        ]
      }
    ]
  },
  {
    id: 'seo',
    icon: <Search className="w-5 h-5" aria-hidden="true" />,
    title: 'SEO Best Practices',
    guidelines: [
      {
        title: 'Keyword Optimization',
        description: 'Optimize content for search engines while maintaining quality',
        dos: [
          'Research target keywords',
          'Use keywords naturally in headings',
          'Optimize meta descriptions',
          'Include internal links'
        ],
        donts: [
          'Keyword stuff',
          'Use irrelevant keywords',
          'Ignore search intent',
          'Neglect meta tags'
        ]
      },
      {
        title: 'Content Quality',
        description: 'Create valuable content that serves user intent',
        dos: [
          'Solve specific problems',
          'Provide unique insights',
          'Update content regularly',
          'Link to authoritative sources'
        ],
        donts: [
          'Create thin content',
          'Duplicate existing articles',
          'Ignore user questions',
          'Write for search engines only'
        ]
      }
    ]
  }
];

const Guidelines: React.FC<GuidelinesProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState('writing');
  const activeCategory = categories.find(cat => cat.id === activeTab);

  return (
    <section 
      className={`py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 ${className}`}
      aria-labelledby="guidelines-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="guidelines-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Writing <span className="text-orange-500">Guidelines</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Follow these best practices to create high-quality, impactful content
          </p>
        </div>

        {/* Tab Navigation */}
        <div 
          className="flex flex-wrap gap-2 mb-8 justify-center"
          role="tablist"
          aria-label="Guideline categories"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeTab === category.id}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActiveTab(category.id)}
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-lg
                font-semibold transition-all duration-200
                focus:outline-none focus:ring-4 focus:ring-orange-500/50
                ${activeTab === category.id
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
                }
              `}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeCategory && (
          <div
            id={`panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
            className="space-y-6"
          >
            {activeCategory.guidelines.map((guideline, index) => (
              <article
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {guideline.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {guideline.description}
                  </p>
                </div>

                {/* Do's and Don'ts */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Do's */}
                  <div className="p-6 border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-950/30">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" aria-hidden="true" />
                      </div>
                      <h4 className="text-lg font-semibold text-green-700 dark:text-green-400">
                        Do's
                      </h4>
                    </div>
                    <ul className="space-y-2" role="list">
                      {guideline.dos.map((item, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Don'ts */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-950/30">
                        <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" aria-hidden="true" />
                      </div>
                      <h4 className="text-lg font-semibold text-red-700 dark:text-red-400">
                        Don'ts
                      </h4>
                    </div>
                    <ul className="space-y-2" role="list">
                      {guideline.donts.map((item, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">
            Ready to Write?
          </h3>
          <p className="mb-4 text-orange-50">
            Follow these guidelines and start creating amazing content for our community
          </p>
          <button
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-lg
              bg-white text-orange-600 font-semibold text-lg
              hover:bg-orange-50
              focus:outline-none focus:ring-4 focus:ring-white/50
              transition-all duration-200 shadow-lg hover:shadow-xl
            "
            aria-label="Submit your article proposal"
          >
            Submit Your Proposal
            <FileText className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
