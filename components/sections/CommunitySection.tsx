import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Slack, Twitter, Youtube, Linkedin } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-[#00163D] via-[#002855] to-[#00163D] text-white relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Join Our Community Today!
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Slack Image and Button */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-mono mb-6">
              Get Involved In The Community Today!
            </h3>
            <div className="flex justify-center mb-6">
              <Image 
                src="/images/slack.png" 
                alt="Slack Community" 
                width={300} 
                height={200}
                className="object-contain"
              />
            </div>
            <Button 
              asChild
              className="bg-[#F89559] hover:bg-[#ff904d] text-[#00163D] text-lg px-8 py-6 font-bold"
            >
              <a href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg" target="_blank" rel="noopener noreferrer">
                Join Slack
              </a>
            </Button>
          </div>

          {/* Right Side - Info and Social Links */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl leading-relaxed">
              Connect with writers, mentors, and enthusiasts worldwide who share a passion for crafting content and exploring the layers of technology!
            </h2>
            
            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a
                href="https://keploy.slack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F89559] transition-colors"
              >
                <Slack size={32} />
              </a>
              <a
                href="https://twitter.com/Keployio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F89559] transition-colors"
              >
                <Twitter size={32} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F89559] transition-colors"
              >
                <Youtube size={32} />
              </a>
              <a
                href="https://www.linkedin.com/company/keploy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F89559] transition-colors"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
