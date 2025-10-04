import LeaderCard from "./LeaderCard";

const leaders = [
  { name: "Prof. R.D White", role: "Group Chairman" },
  {
    name: "Casey McCorquodale",
    role: "Global Director & Chief Strategy Officer"
  },
  {
    name: "Jonette H. Coetzee",
    role: "Group Managing Director & Chief Executive"
  },
  {
    name: "Markus Van Der Walt",
    role: "Global Director & Chief Financial Officer"
  }
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
