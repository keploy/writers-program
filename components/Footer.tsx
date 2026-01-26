"use client"

import React, { useState } from 'react';
import { Slack, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submission logic here
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#00163D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Copyright © 2025 Keploy Inc.</h3>
            <p className="text-gray-300 font-mono text-sm">
              Developers experience for e2e testing. Toolkit that creates test-cases and data mocks from API calls, DB queries, etc.
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 font-mono text-sm mb-4">
              Stay updated with our latest trends
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#F89559] px-4 py-2 rounded-r-md hover:bg-[#ff904d] transition-colors"
              >
                →
              </button>
            </form>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Find us on</h3>
            <p className="text-gray-300 font-mono text-sm mb-4">
              Let us be social
            </p>
            <div className="flex space-x-4">
              <a
                href="https://keploy.slack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F89559] transition-colors"
              >
                <Slack size={24} />
              </a>
              <a
                href="https://twitter.com/Keployio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F89559] transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F89559] transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/keploy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F89559] transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
