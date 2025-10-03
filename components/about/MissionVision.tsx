import { LightBulbIcon, EyeIcon } from "@heroicons/react/24/outline";

export default function MissionVision() {
  const items = [
    {
      title: "Mission",
      text:
        "To transform Zambia’s urban and tourism landscape through innovative, world-class projects. We transform ideas into impactful projects by combining local insight with global standards.",
      icon: <LightBulbIcon className="w-12 h-12 text-green-700 mb-4" />
    },
    {
      title: "Vision",
      text:
        "To be one of Zambia’s most trusted project development and consulting companies, known for integrity, innovation, and excellence.",
      icon: <EyeIcon className="w-12 h-12 text-green-700 mb-4" />
    }
  ];

  return (
    <section className="relative bg-white pt-16 pb-32">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#D1FAE5" // light green instead of white
            fillOpacity="1"
            d="M0,192L60,181.3C120,171,240,149,360,133.3C480,117,600,107,720,106.7C840,107,960,117,1080,144C1200,171,1320,213,1380,234.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Our Mission & Vision
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Combining local insight with global standards to deliver impactful,
          world-class projects across Zambia.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 relative z-10 -mt-20">
        {items.map(item =>
          <div
            key={item.title}
            className="flex flex-col items-center text-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3"
          >
            <div className="bg-green-100 p-5 rounded-full mb-6">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
