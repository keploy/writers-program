import Image from "next/image";
import Link from "next/link";
import { SocialSidebar } from "@/components/SocialSidebar";

export default function Home() {
    return (
        <>
            <section
                id="home"
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
            >
                <SocialSidebar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                                Keploy&apos;s <br />
                                <span className="underline decoration-primary">Writers Program</span>
                            </h1>
                            <h3 className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4">
                                Get into a community of Technical Writers where you get the right Recognition | Growth | Networking | Earning & Rewards
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-8">
                                An Open-Source Program for Students, Professionals, and Freelancers
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="https://forms.gle/R7RbuL39sc1TFW449"
                                    target="_blank"
                                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Register Now!
                                </Link>
                                <Link
                                    href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg"
                                    target="_blank"
                                    className="px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
                                >
                                    Join Community
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <Image
                                src="/images/bunny-removebg.png"
                                alt="Keploy Mascot"
                                width={500}
                                height={500}
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-20 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary">We Are Keploy</h1>
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed tracking-wide mb-8">
                        Keploy is a developer-centric backend testing tool. As an open source organisation, we believe everything should be community-driven. Join us on a journey into the domain of technical writing and experience the growth and knowledge that accompanies this opportunity.
                    </p>
                    <Link
                        href="https://keploy.io/blog"
                        target="_blank"
                        className="inline-block px-6 py-3 bg-slate-900 dark:bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors border border-slate-600"
                    >
                        Read our Blogs
                    </Link>
                </div>
            </section>

            <section id="program" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-16">
                        What this program offers you?
                    </h1>
                    <div className="grid md:grid-cols-3 gap-8">
                        <OfferCard
                            imageSrc="/images/bubble-gum-content-marketing.gif"
                            title="Get Recognized"
                            description="Expand your technical writing horizon by earning compensations, swags, and personal brand visibility."
                        />
                        <OfferCard
                            imageSrc="/images/handy-line-machine-learning.gif"
                            title="Learn"
                            description="Access to mentorship, weekly synch-ups, and community. Work with Keploy's editorial team."
                        />
                        <OfferCard
                            imageSrc="/images/bloom-online-video-conference-for-employees.gif"
                            title="Flourish"
                            description="Gain experience & network with like-minded individuals. Be a part of a global community."
                        />
                    </div>
                </div>
            </section>

            <section id="writers-program" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center text-primary mb-16">
                        Here&apos;s how the Program works
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProcessStep number="01" title="Register yourself" imageSrc="/images/handy-folder-with-idea-bulb.gif">
                            Fill out the form and register to the writers program. We&apos;ll be eager to have you along.
                        </ProcessStep>
                        <ProcessStep number="02" title="Onboarding starts" imageSrc="/images/dazzle-man-programmer-writing-code-on-a-laptop.gif">
                            Get onboard with us, know about Keploy&apos;s ecosystem, connect to the team & mentors.
                        </ProcessStep>
                        <ProcessStep number="03" title="Research your Idea" imageSrc="/images/juicy-woman-is-looking-for-perfect-candidate-1.gif">
                            You&apos;ll start by choosing and researching about your write-up. Get access to mentorship & resources by the team.
                        </ProcessStep>
                        <ProcessStep number="04" title="Craft your Work" imageSrc="/images/dizzy-education.gif">
                            Start crafting your ideas into words. This part includes you working on the approved ideas and topics.
                        </ProcessStep>
                        <ProcessStep number="05" title="Revision & Submissions" imageSrc="/images/dazzle-blog-post-article.gif">
                            This includes copy editing, hero image design, and revision of your article. Yes, we got to help you revise it before submitting.
                        </ProcessStep>
                        <ProcessStep number="06" title="Publication" imageSrc="/images/juicy-man-programmer-writing-code-and-make-web-design-on-a-pc.gif">
                            Once the content meets all the guidelines, you&apos;re all set to publish your content with Keploy, and earn your benefits.
                        </ProcessStep>
                    </div>
                </div>
            </section>

            <section id="criteria" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center text-primary mb-16">
                        Evaluation Criteria
                    </h2>
                    <ol className="space-y-6">
                        <CriteriaItem index={1} title="Originality">
                            Submissions should be entirely original, showcasing your unique perspective and insights.
                        </CriteriaItem>
                        <CriteriaItem index={2} title="Relevance to Software Developers">
                            Content should be tailored for a target audience of beginner to intermediate software developers.
                        </CriteriaItem>
                        <CriteriaItem index={3} title="Keyword Volume Requirement">
                            Ensure the chosen keyword for the blog has a volume of at least more than 400.
                        </CriteriaItem>
                        <CriteriaItem index={4} title="Conformity to Plagiarism">
                            Adhere strictly to the plagiarism policy. Avoid any form of reproducing or claiming someone else&apos;s work.
                        </CriteriaItem>
                        <CriteriaItem index={5} title="Compliance with Terms & Conditions">
                            Understand and comply with the terms and conditions of the Keploy Community Writing Program.
                        </CriteriaItem>
                    </ol>
                    <div className="text-center mt-12">
                        <Link
                            href="https://github.com/keploy/writers-program/blob/main/README.md"
                            target="_blank"
                            className="inline-block px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
                        >
                            Know More!
                        </Link>
                    </div>
                </div>
            </section>

            <section id="community" className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
                        Join Our Community Today!
                    </h1>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center">
                            <h3 className="text-xl font-mono mb-6">Get Involved In The Community Today!</h3>
                            <Image
                                src="/images/slack.png"
                                alt="Slack Community"
                                width={500}
                                height={333}
                                className="mx-auto mb-6 rounded-lg"
                            />
                            <Link
                                href="https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg"
                                target="_blank"
                                className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Join Slack
                            </Link>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">
                                Connect with writers, mentors, and enthusiasts worldwide who share a passion for crafting content and exploring the layers of technology!
                            </h2>
                            <div className="flex space-x-6">
                                <SocialLink href="https://keploy.slack.com/" icon="fa-brands fa-slack" />
                                <SocialLink href="https://twitter.com/Keployio" icon="fa-brands fa-x-twitter" />
                                <SocialLink href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg" icon="fa-brands fa-youtube" />
                                <SocialLink href="https://www.linkedin.com/company/keploy/" icon="fa-brands fa-linkedin" />
                                <SocialLink href="https://keploy.hashnode.dev" icon="fa-brands fa-hashnode" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function OfferCard({ imageSrc, title, description }: { imageSrc: string; title: string; description: string }) {
    return (
        <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8 text-center transition-colors duration-300">
            <Image src={imageSrc} alt={title} width={130} height={130} className="mx-auto mb-6" unoptimized />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
            <p className="text-slate-600 dark:text-slate-300">{description}</p>
        </div>
    );
}

function ProcessStep({ number, title, imageSrc, children }: { number: string; title: string; imageSrc: string; children: React.ReactNode }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">{number}</span>
                <Image src={imageSrc} alt={title} width={80} height={80} className="rounded" unoptimized />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h2>
            <p className="text-slate-600 dark:text-slate-300">{children}</p>
        </div>
    );
}

function CriteriaItem({ index, title, children }: { index: number; title: string; children: React.ReactNode }) {
    return (
        <li className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 transition-colors duration-300">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{index}. {title}:</h2>
            <p className="text-slate-600 dark:text-slate-300">{children}</p>
        </li>
    );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
        >
            <i className={`${icon} text-2xl`}></i>
        </Link>
    );
}
