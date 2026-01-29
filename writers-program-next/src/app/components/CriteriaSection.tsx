"use client";

export default function CriteriaSection() {
  const criteria = [
    {
      title: "Originality",
      description:
        "Submissions should be entirely original, showcasing your unique perspective and insights.",
    },
    {
      title: "Relevance to Software Developers",
      description:
        "Content should be tailored for a target audience of beginner to intermediate software developers.",
    },
    {
      title: "Keyword Volume Requirement",
      description:
        "Ensure the chosen keyword for the blog has a volume of at least more than 400.",
    },
    {
      title: "Conformity to Plagiarism",
      description:
        "Adhere strictly to the plagiarism policy. Avoid any form of reproducing or claiming someone else's work.",
    },
    {
      title: "Compliance with Terms & Conditions",
      description:
        "Understand and comply with the terms and conditions of the Keploy Community Writing Program.",
    },
  ];

  return (
    <section id="criteria" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6"> {/* Reduced max width */}
        <h2 className="text-6xl font-bold text-[#fd6404] mb-12 text-center">
          Evaluation Criteria
        </h2>

        <div className="space-y-8">
          {criteria.map((item, index) => (
            <div key={index} className="flex gap-6"> {/* Flex container for index and content */}
              {/* Index */}
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-[#fd6404]">{index + 1}.</span>
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border-2 border-black hover:border-[#fd6404] text-lg font-md py-2 px-6 transition-all duration-300 hover:text-[#fd6404]  cursor-pointer" onClick={()=> window.open("https://github.com/keploy/writers-program/blob/main/README.md", "_blank")}>Know More!</button>
      </div>
    </section>
  );
}