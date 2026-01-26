import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#00163D] mb-8">
            We Are Keploy
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed tracking-wide">
            Keploy is a developer-centric backend testing tool. As an open source organisation, we believe everything should be community-driven. Join us on a journey into the domain of technical writing and experience the growth and knowledge that accompanies this opportunity.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-[#00163D] hover:bg-[#002855] text-white border-2 border-[#00163D] text-lg px-8 py-6"
          >
            <a href="https://keploy.io/blog" target="_blank" rel="noopener noreferrer">
              Read our Blogs
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
