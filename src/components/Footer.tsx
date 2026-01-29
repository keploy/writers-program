import Link from "next/link";

const socialLinks = [
    { href: "https://keploy.slack.com/", label: "Slack", icon: "fa-brands fa-slack" },
    { href: "https://twitter.com/Keployio", label: "Twitter", icon: "fa-brands fa-x-twitter" },
    { href: "https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg", label: "YouTube", icon: "fa-brands fa-youtube" },
    { href: "https://www.linkedin.com/company/keploy/", label: "LinkedIn", icon: "fa-brands fa-linkedin" },
    { href: "https://keploy.hashnode.dev", label: "Hashnode", icon: "fa-brands fa-hashnode" },
];

export function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-slate-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Copyright © 2026 Keploy Inc.
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-mono text-sm">
                            Developer experience for e2e testing. Toolkit that creates test-cases and data mocks from API calls, DB queries, etc.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Newsletter
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-mono text-sm mb-4">
                            Stay updated with our latest trends
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-l-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors"
                            >
                                →
                            </button>
                        </form>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Find us on
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-mono text-sm mb-4">
                            Let us be social
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                                    aria-label={link.label}
                                >
                                    <i className={`${link.icon} text-xl`}></i>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
