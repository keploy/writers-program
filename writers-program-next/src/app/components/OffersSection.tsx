export default function OffersSection() {
  const offers = [
    {
      title: "Get Recognized",
      description:
        "Expand your technical writing horizon by earning compensations, swags, and personal brand visibility.",
        image: "images/bubble-gum-content-marketing.gif"
    },
    {
      title: "Learn",
      description:
        "Access to mentorship, weekly synch-ups, and community. Work with Keploy's editorial team.",
        image:"/images/handy-line-machine-learning.gif",
    },
    {
      title: "Flourish",
      description:
        "Gain experience & network with like-minded individuals. Be a part of a global community.",
        image:"/images/bloom-online-video-conference-for-employees.gif"
    },
  ];

  return (
    <section id="program" className="min-h-screen bg-white py-20 px-6 flex flex-col items-center text-center">
      <h2 className="text-5xl
      sm:text-5xl font-bold text-[#ff680a] mb-12">
        What This Program Offers You
      </h2>

      <div className="flex gap-10">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 gap-10 max-w-80 "
          >
            <img src={offer.image} alt="images" />
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3 mt-5">
              {offer.title}
            </h3>
            <p className="text-gray-600 text-[15px]">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
