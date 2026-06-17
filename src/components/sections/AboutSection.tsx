"use client";

export function AboutSection() {
    return (
        <section
            id="about"
            className="py-20 px-6 bg-white"
            aria-labelledby="about-title"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2
                    id="about-title"
                    className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6"
                >
                    We Are <span className="text-[#F89559]">Keploy</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                    Keploy is a developer-centric backend testing tool. As an open source
                    organisation, we believe everything should be community-driven. Join
                    us on a journey into the domain of technical writing and experience
                    the growth and knowledge that accompanies this opportunity.
                </p>
                <a
                    href="https://keploy.io/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#F89559] text-white font-semibold rounded-lg hover:bg-[#e87b3a] transition-colors"
                >
                    Read our Blogs
                </a>
            </div>
        </section>
    );
}
