import { FaSlack, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import Link from "next/link";

const socialLinks = [
    { name: "Slack", url: "https://keploy.slack.com/", icon: FaSlack },
    { name: "Twitter", url: "https://twitter.com/Keployio", icon: FaXTwitter },
    { name: "Youtube", url: "https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg", icon: FaYoutube },
    { name: "Linkedin", url: "https://www.linkedin.com/company/keploy/", icon: FaLinkedin },
    { name: "Hashnode", url: "https://keploy.hashnode.dev", icon: FaHashnode },
];

export const SocialSidebar = () => {
    return (
        <ul className="absolute top-1/2 right-4 sm:right-8 lg:right-[5.4rem] -translate-y-1/2 flex flex-col gap-[1.8rem] list-none z-20 hidden sm:flex">
            {socialLinks.map((link) => (
                <li key={link.name} className="relative group">
                    <Link
                        href={link.url}
                        target="_blank"
                        className="block w-[33px] h-[33px] relative text-black dark:text-white transition-colors duration-500"
                    >
                        <span className="absolute right-0 top-0 flex items-center justify-center w-[33px] h-[33px] border-[2px] border-black dark:border-white rounded-full transition-all duration-500 group-hover:text-primary group-hover:border-primary dark:group-hover:text-primary dark:group-hover:border-primary">
                            <link.icon size={14} />
                        </span>

                        <span className="absolute right-[4.5rem] top-0 h-[33px] flex items-center justify-end text-[#00163D] dark:text-white text-[1.5rem] font-medium opacity-0 invisible scale-0 group-hover:opacity-100 group-hover:visible group-hover:scale-100 origin-right transition-all duration-500 font-mono whitespace-nowrap">
                            {link.name}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
