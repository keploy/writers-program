import React from 'react';
import Image from 'next/image';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Register yourself',
      description: 'Fill out the form and register to the writers program. We\'ll be eager to have you along.',
      image: '/images/handy-folder-with-idea-bulb.gif',
    },
    {
      number: '02',
      title: 'Onboarding starts',
      description: 'Get onboard with us, know about Keploy\'s ecosystem, connect to the team & mentors.',
      image: '/images/dazzle-man-programmer-writing-code-on-a-laptop.gif',
    },
    {
      number: '03',
      title: 'Research your Idea',
      description: 'You\'ll start by choosing and researching about your write-up. Get access to mentorship & resources by the team.',
      image: '/images/juicy-woman-is-looking-for-perfect-candidate-1.gif',
    },
    {
      number: '04',
      title: 'Craft your Work',
      description: 'Start crafting your ideas into words. This part includes you working on the approved ideas and topics.',
      image: '/images/dizzy-education.gif',
    },
    {
      number: '05',
      title: 'Revision & Submissions',
      description: 'This includes copy editing, hero image design, and revision of your article. Yes, we got to help you revise it before submitting.',
      image: '/images/dazzle-blog-post-article.gif',
    },
    {
      number: '06',
      title: 'Publication',
      description: 'Once the content meets all the guidelines, you\'re all set to publish your content with Keploy, and earn your benefits',
      image: '/images/juicy-man-programmer-writing-code-and-make-web-design-on-a-pc.gif',
    },
  ];

  return (
    <section id="writers-program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F89559] mb-4">
            Here&apos;s how the Program works
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <h3 className="text-4xl font-bold text-[#00163D] mr-4">
                  {step.number}
                </h3>
                <div className="flex-shrink-0">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    width={100} 
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-[#00163D] mb-3 pl-4">
                {step.title}
              </h2>
              <p className="text-gray-700 leading-relaxed pl-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
