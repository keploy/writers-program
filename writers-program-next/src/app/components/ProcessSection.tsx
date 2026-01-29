// components/ProcessSection.tsx
export default function ProcessSection() {
  const steps = [
    {
      title: "Register Yourself",
      description:
        "Fill out the registration form to join the Writers Program and show your interest.",
        image:"/images/handy-folder-with-idea-bulb.gif"
    },
    {
      title: "Onboarding",
      description:
        "Get familiar with the Keploy ecosystem, connect with mentors, and plan your journey.",
        image:"/images/dazzle-man-programmer-writing-code-on-a-laptop.gif"
    },
    {
      title: "Research & Ideation",
      description:
        "Choose your topic, conduct research, and propose your writing idea with guidance.",
        image:"/images/juicy-woman-is-looking-for-perfect-candidate-1.gif"
    },
    {
      title: "Write & Draft",
      description:
        "Write your article or tutorial, incorporating feedback and iterating drafts.",
        image:"/images/dizzy-education.gif"
    },
    {
      title: "Revision & Editing",
      description:
        "Polish the work with revisions, proofreading, and final edits.",
        image:"/images/dazzle-blog-post-article.gif"
    },
    {
      title: "Publish & Rewards",
      description:
        "Once approved, publish your work and earn recognition, rewards, and share with community.",
        image:"/images/juicy-man-programmer-writing-code-and-make-web-design-on-a-pc.gif"
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-5xl sm:text-5xl font-bold text-[#ff6505] mb-12 text-center">
          Here's how the program works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl  hover:shadow-lg transition transform hover:-translate-y-1"
            >
                <img
                  className="w-auto h-50 object-cover rounded-t-md"
                  src={step.image}
                  alt="Step image"
                />

              {/* You can also put a number or icon */}
              {/* You can also put an icon or number */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 text-black-600 font-semibold 
              text-2xl mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
