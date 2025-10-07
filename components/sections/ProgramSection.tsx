import React from 'react';
import Image from 'next/image';

const ProgramSection = () => {
  const offerings = [
    {
      title: 'Get Recognized',
      description: 'Expand your technical writing horizon by earning compensations, swags, and personal brand visibility.',
      image: '/images/bubble-gum-content-marketing.gif',
    },
    {
      title: 'Learn',
      description: 'Access to mentorship, weekly synch-ups, and community. Work with Keploy\'s editorial team.',
      image: '/images/handy-line-machine-learning.gif',
    },
    {
      title: 'Flourish',
      description: 'Gain experience & network with like-minded individuals. Be a part of a global community.',
      image: '/images/bloom-online-video-conference-for-employees.gif',
    },
  ];

  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#00163D] mb-4">
            What this program offers you?
          </h1>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <Image 
                  src={offering.image} 
                  alt={offering.title} 
                  width={120} 
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#00163D] mb-4 text-center">
                {offering.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
