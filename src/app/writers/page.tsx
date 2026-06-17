import { Metadata } from "next";
import { Header } from "@/components/Header";
import { WritersSection } from "@/components/sections/WritersSection";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Writers | Keploy Writers Program",
    description:
        "Meet the talented technical writers who contribute to Keploy's community. Discover their expertise, learn from their content, and join our growing community of writers.",
    keywords: [
        "Keploy",
        "Writers Program",
        "Technical Writers",
        "Content Creators",
        "Developer Community",
        "Technical Writing",
    ],
    openGraph: {
        title: "Our Writers | Keploy Writers Program",
        description:
            "Meet the talented technical writers who contribute to Keploy's community.",
        type: "website",
    },
};

export default function WritersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <WritersSection />

            {/* Footer */}
            <footer className="py-10 px-6 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/keploy-logo.png"
                                alt="Keploy"
                                width={100}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-500 text-center">
                            Copyright © {new Date().getFullYear()} Keploy Inc. • Developer experience for e2e testing
                        </p>

                        <div className="flex items-center gap-5">
                            <a
                                href="https://keploy.slack.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#F89559] transition-colors"
                                aria-label="Join Keploy Slack community"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/Keployio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#F89559] transition-colors"
                                aria-label="X (Twitter)"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/keploy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#F89559] transition-colors"
                                aria-label="Visit Keploy GitHub"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
