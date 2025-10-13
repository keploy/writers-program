import Image from "next/image";
import PublicLinksHorizontal from "./PublicLinksHorizontal";

export default function CommunitySection() {
  return (
    <section id="community" className="w-full bg-gradient-to-b from-white to-[#f3f4ff] py-20 ml-10">
      <h2 className="text-4xl font-bold text-center text-[#E96A00] mb-12">
        Join Our Community Today!
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 items-center px-6">
        {/* Left Side - Image & CTA */}
        <div className="bg-[#EAE9F1] p-8 rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[450px]">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            Get Involved In The Community Today!
          </h3>

          {/* Replace the src with your uploaded image path */}
          <div className="w-full rounded-lg overflow-hidden shadow-md mb-8">
            <Image
              src="/images/slack.png"
              alt="Community Chat Screenshot"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <a
            href="https://keploy.slack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#00113F] text-white font-medium rounded-md hover:bg-[#142965] transition-all"
          >
            Join Slack
          </a>
        </div>

        {/* Right Side - Description & Icons */}
        <div className="bg-[#00113F] text-white p-10 rounded-lg flex flex-col justify-between min-h-[450px] w-[400px] sm:min-w-[150px]">
          <p className="text-lg leading-relaxed mb-10">
            Connect with writers, mentors, and enthusiasts worldwide who share a
            passion for crafting content and exploring the layers of technology!
          </p>

          <div className="flex items-center text-2xl mb-5">
                <PublicLinksHorizontal></PublicLinksHorizontal>
          </div>
        </div>
      </div>
    </section>
  );
}
