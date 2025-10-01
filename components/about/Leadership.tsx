import LeaderCard from "./LeaderCard";

const leaders = [
  { name: "Eddie Mutale", role: "Chief Innovation Officer" },
  { name: "Jane Mwila", role: "CEO" },
  { name: "Patrick Zulu", role: "Head of Real Estate" },
  { name: "Alice Phiri", role: "Director of Tourism & Hospitality" }
];

export default function Leadership() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Leadership</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
        {leaders.map(leader =>
          <LeaderCard key={leader.name} name={leader.name} role={leader.role} />
        )}
      </div>
    </section>
  );
}
