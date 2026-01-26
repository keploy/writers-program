"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Slack, Twitter, Youtube, Linkedin } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="header-logo">
            <Link href="/" className="site-logo">
              <Image 
                src="/images/keploy-logo.png" 
                alt="Keploy Logo" 
                width={120} 
                height={40}
                className="scale-150"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-[#F89559] transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-[#F89559] transition-colors">
              About
            </Link>
            <Link href="#program" className="text-gray-700 hover:text-[#F89559] transition-colors">
              Program
            </Link>
            <Link href="#writers-program" className="text-gray-700 hover:text-[#F89559] transition-colors">
              Process
            </Link>
            <Link href="#criteria" className="text-gray-700 hover:text-[#F89559] transition-colors">
              Criteria
            </Link>
            <Link href="#community" className="text-gray-700 hover:text-[#F89559] transition-colors">
              Community
            </Link>
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://keploy.slack.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F89559]">
              <Slack size={20} />
            </a>
            <a href="https://twitter.com/Keployio" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F89559]">
              <Twitter size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F89559]">
              <Youtube size={20} />
            </a>
            <a href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F89559]">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" className="text-gray-700 hover:text-[#F89559]" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[#F89559]" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="#program" className="text-gray-700 hover:text-[#F89559]" onClick={() => setMenuOpen(false)}>
                Program
              </Link>
              <Link href="#writers-program" className="text-gray-700 hover:text-[#F89559]" onClick={() => setMenuOpen(false)}>
                Process
              </Link>
              <Link href="#criteria" className="text-gray-700 hover:text-[#F89559]" onClick={() => setMenuOpen(false)}>
                Criteria
              </Link>
              <Link href="#community" className="text-gray-700 hover:text-[#F89559]" onClick={() => setMenuOpen(false)}>
                Community
              </Link>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://keploy.slack.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                <Slack size={20} />
              </a>
              <a href="https://twitter.com/Keployio" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                <Youtube size={20} />
              </a>
              <a href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
