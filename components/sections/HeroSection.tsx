import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Slack, Twitter, Youtube, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00163D] via-[#002855] to-[#00163D] text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Bunny Image */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block z-0">
        <Image 
          src="/images/bunny.png" 
          alt="Bugs Bunny" 
          width={400} 
          height={400}
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Keploy&apos;s <br />
            <span className="underline decoration-[#F89559]">Writers Program</span>
          </h1>
          
          <h3 className="text-xl md:text-2xl mb-4 text-gray-200">
            Get into a community of Technical Writers where <br className="hidden md:block" />
            you get the right Recognition | <br className="md:hidden" />
            Growth | Networking | Earning & Rewards
          </h3>
          
          <h3 className="text-lg md:text-xl mb-8 text-gray-300">
            An Open-Source Program for Students, Professionals, and Freelancers
          </h3>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              asChild
              className="bg-[#F89559] hover:bg-[#ff904d] text-[#00163D] border-2 border-[#ff904d] text-lg px-8 py-6"
            >
              <a href="https://forms.gle/R7RbuL39sc1TFW449" target="_blank" rel="noopener noreferrer">
                Register Now!
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="bg-[#00163D] hover:bg-[#001844] text-white border-2 border-[#00163D] text-lg px-8 py-6"
            >
              <a href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg" target="_blank" rel="noopener noreferrer">
                Join Community
              </a>
            </Button>
          </div>

          {/* Scroll Down */}
          <div className="text-center">
            <Link href="#about" className="inline-block animate-bounce">
              <span className="text-sm text-gray-300">Scroll Down</span>
              <div className="mt-2">↓</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Links - Vertical */}
      <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col space-y-6 z-20">
        <a
          href="https://keploy.slack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F89559] transition-colors flex items-center group"
        >
          <Slack size={24} />
          <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Slack</span>
        </a>
        <a
          href="https://twitter.com/Keployio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F89559] transition-colors flex items-center group"
        >
          <Twitter size={24} />
          <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
        </a>
        <a
          href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F89559] transition-colors flex items-center group"
        >
          <Youtube size={24} />
          <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Youtube</span>
        </a>
        <a
          href="https://www.linkedin.com/company/keploy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F89559] transition-colors flex items-center group"
        >
          <Linkedin size={24} />
          <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Linkedin</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
