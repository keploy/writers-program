// components/PublicLinks.tsx
"use client";

import { FaGithub, FaYoutube, FaSlack, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function PublicLinksHorizontal() {
  const links = [
    { icon: <FaGithub size={28} />, href: "https://github.com/keploy/keploy" },
    { icon: <FaYoutube size={28} />, href: "https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg" },
    { icon: <FaSlack size={28} />, href: "https://keploy.slack.com" },
    { icon: <FaLinkedin size={28} />, href: "https://linkedin.com/company/keploy" },
    { icon: <FaTwitter size={28} />, href: "https://twitter.com/keployio" },
  ];

  return (
    <div className="flex flex-row justify-start space-x-6 mt-3 py-10 px-10">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-gray-600 hover:text-purple-600
            transition-all duration-300
            transform hover:scale-200
            active:scale-90
          "
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
