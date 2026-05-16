const stats = [
  {
    icon: "/images/founded.png",
    label: "Founded",
    value: "April 28, 2025",
  },
  {
    icon: "/images/students.png",
    label: "Students",
    value: "150",
  },
  {
    icon: "/images/teachers.png",
    label: "Student–Teacher Ratio",
    value: "15:1",
  },
  {
    icon: "/images/activities.png",
    label: "Clubs & Activities",
    value: "17",
  },
  {
    icon: "/images/campus.png",
    label: "Spacious Campus",
    value: "2 Acres",
  },
  {
    icon: "/images/heart.png",
    label: "Community",
    value: "Christ-Centered",
  },
];

export default function AtAGlance() {
  return (
    <section className="bg-[#0b3d2e] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="text-center">
          <p className="serif text-2xl italic text-[#d4a73c]">
            Founded on faith. Growing with purpose.
          </p>

          <h2 className="serif mt-2 text-4xl font-bold text-white">
            TFA At-A-Glance
          </h2>

          <div className="mx-auto mt-4 h-px w-24 bg-[#d4a73c]" />
        </div>

        {/* STATS */}
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-55 snap-center rounded-2xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 md:min-w-0"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="mx-auto h-16 w-16 object-contain drop-shadow-sm"
              />

              <p className="serif mt-4 text-2xl font-bold text-[#0b3d2e]">
                {stat.value}
              </p>

              <p className="mt-2 text-sm font-medium text-neutral-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}