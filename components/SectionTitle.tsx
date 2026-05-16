type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#d4a73c]">
          {eyebrow}
        </p>
      )}

      <h2 className="serif text-4xl font-bold text-[#0b3d2e] md:text-5xl">
        {title}
      </h2>

      <div
        className={`mt-4 h-px bg-[#d4a73c] ${
          center ? "mx-auto w-24" : "w-32"
        }`}
      />
    </div>
  );
}