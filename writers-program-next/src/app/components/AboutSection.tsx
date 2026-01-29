export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-16 text-center"
    >
      <h1 className="text-7xl font-bold text-[#fc711b] mb-10">
        We Are Keploy
      </h1>

      <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
        Keploy is a developer-centric backend testing tool. As an open source organisation, we believe everything should be community-driven. Join us on a journey into the domain of technical writing and experience the growth and knowledge that accompanies this opportunity.

      </p>

      <div className="mt-10">
        <a
          href="https://keploy.io/blog"
          target="_blank"
          className="px-6 py-3 bg-[#f86408] text-white  shadow-md hover:bg-indigo-700 transition-all "
        >
          Read our Blogs
        </a>
      </div>
    </section>
  );
}
