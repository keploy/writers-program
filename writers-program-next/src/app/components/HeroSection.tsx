// components/HeroSection.tsx
"use client";

import Link from "next/link";
import PublicLinks from "./PublicLinks";
 
import { FaArrowDown } from "react-icons/fa";


export default function HeroSection() {

    const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      };

  return (
    <section id="hero" className="relative bg-gradient-to-r from-[#F7F7F7] to-[#FFFFFF] overflow-hidden h-180">

      <div className="max-w-10xl mx-auto px-6 sm:px-8 py-24 text-left relative z-10 pt-40 ml-10 mt-15">
        <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-[#FF914D] mb-4">
            Keploy's <br />
             <span className="underline">Writers Program</span>
        </h1>
        
        {/* Heading */}
        <h4 className="text-sm:text-xl lg:text-xl font-semibold text-gray-800 leading-tight max-w-xl">
          Get into a community of Technical Writers where
          you get the right{" "}
          <span className="text-[#6C63FF]">Recognition | Growth | Networking | Earning & Rewards</span>
        </h4>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          An Open-Source Program for Students, Professionals, and Freelancers
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 space-x-4">
          <Link
            href="https://forms.gle/R7RbuL39sc1TFW449"
            className="inline-block bg-[#fd6f17] hover:bg-[#acacac] text-white hover:text-black px-8 py-3 rounded-lg text-base font-semibold transition"
          >
            Register Now!
          </Link>
          <Link
            href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg"
            className="inline-block bg-transparent border-2 border-[#6C63FF] hover:bg-[#6C63FF] hover:text-white text-[#6C63FF] px-8 py-3 rounded-lg text-base font-semibold transition"
          >
            Join Community
          </Link>
        </div>

        {/* Public Links section */}
        <div className="absolute bottom-30 right-5 p-4 "><PublicLinks /></div>
        
      </div>

      {/* Bunny background image, only image not set as background.. bro an image is literally named.. juicy woman looking for .... */}
        <img
            src="/images/bunny.png"
            alt="Bunny"
            className="absolute right-10 bottom-30  w-[420px] opacity-90 object-contain pointer-events-none select-none max-w-none"
          />

      {/* Scroll Down Button */}
      <button
        onClick={handleScroll}
        className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-[#fa6203] text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 animate-bounce cursor-pointer"
      >
        <FaArrowDown size={20} />
      </button>
    </section>
  );
}
