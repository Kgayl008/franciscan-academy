type InfoCardProps = {
  icon: string;
  title: string;
  text: string;
  accent?: "gold" | "green";
};

export default function InfoCard({
  icon,
  title,
  text,
  accent = "gold",
}: InfoCardProps) {
  return (
    <div className="group rounded-xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center gap-5">
        <img src={icon} alt={title} className="h-16 w-16 object-contain" />

        <div>
          <h3 className="serif text-2xl font-bold text-[#0b3d2e]">{title}</h3>
          <p className="mt-1 text-sm text-neutral-600">{text}</p>
        </div>
      </div>

      <div
        className={`mt-6 h-2 rounded-full ${
          accent === "green" ? "bg-[#0b3d2e]" : "bg-[#d4a73c]"
        }`}
      />
    </div>
  );
}