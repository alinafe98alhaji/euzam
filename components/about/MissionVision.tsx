import { LightBulbIcon, EyeIcon } from "@heroicons/react/24/outline";

export default function MissionVision() {
  const items = [
    {
      title: "Mission",
      text:
        "To transform Zambia’s urban and tourism landscape through innovative, world-class projects.",
      icon: <LightBulbIcon className="w-10 h-10 text-green-700 mb-4" />
    },
    {
      title: "Vision",
      text:
        "A Zambia recognized as Africa’s premier destination for investment, lifestyle, and tourism.",
      icon: <EyeIcon className="w-10 h-10 text-green-700 mb-4" />
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Mission & Vision</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {items.map(item =>
          <div
            key={item.title}
            className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">
              {item.text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
