type EventCardProps = {
  month: string;
  day: string;
  title: string;
  time: string;
};

export default function EventCard({ month, day, title, time }: EventCardProps) {
  return (
    <div className="flex items-center gap-5 rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded border border-neutral-200 text-center">
        <div className="bg-[#0b3d2e] px-5 py-1 text-sm font-bold text-white">
          {month}
        </div>
        <div className="bg-white px-5 py-3 text-4xl font-bold text-[#0b3d2e]">
          {day}
        </div>
      </div>

      <div>
        <h3 className="serif text-2xl font-bold text-[#0b3d2e]">{title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{time}</p>
        <a className="mt-2 inline-block text-sm font-semibold text-[#b8862b]">
          Read More →
        </a>
      </div>
    </div>
  );
}