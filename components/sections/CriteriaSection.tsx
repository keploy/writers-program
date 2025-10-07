import React from 'react';
import { Button } from '@/components/ui/button';

const CriteriaSection = () => {
  const criteria = [
    {
      title: 'Originality:',
      description: 'Submissions should be entirely original, showcasing your unique perspective and insights.',
    },
    {
      title: 'Relevance to Software Developers:',
      description: 'Content should be tailored for a target audience of beginner to intermediate software developers.',
    },
    {
      title: 'Keyword Volume Requirement:',
      description: 'Ensure the chosen keyword for the blog has a volume of at least more than 400.',
    },
    {
      title: 'Conformity to Plagiarism:',
      description: 'Adhere strictly to the plagiarism policy. Avoid any form of reproducing or claiming someone else\'s work.',
    },
    {
      title: 'Compliance with Terms & Conditions:',
      description: 'Understand and comply with the terms and conditions of the Keploy Community Writing Program.',
    },
  ];

  return (
    <section id="criteria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F89559] mb-4">
            Evaluation Criteria
          </h2>
        </div>

        {/* Criteria List */}
        <div className="max-w-4xl mx-auto mb-12">
          <ol className="space-y-6">
            {criteria.map((criterion, index) => (
              <li key={index} className="flex">
                <span className="text-2xl font-bold text-[#00163D] mr-4">{index + 1}.</span>
                <div>
                  <h2 className="text-2xl font-bold text-[#00163D] mb-2">
                    {criterion.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {criterion.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-[#00163D] hover:bg-[#002855] text-white border-2 border-[#00163D] text-lg px-8 py-6"
          >
            <a href="https://github.com/keploy/writers-program/blob/main/README.md" target="_blank" rel="noopener noreferrer">
              Know More!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;
