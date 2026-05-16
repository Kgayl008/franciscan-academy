export default function Hero() {
  return (
    <section id="home" className="relative min-h-180 overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Students of The Franciscan Academy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#06291f]/95 via-[#0b3d2e]/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-180 max-w-7xl items-center px-6 pt-24">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#d4a73c]">
            Welcome to our school
          </p>

          <h1 className="serif text-5xl font-bold leading-tight md:text-7xl">
            Nurturing Young Minds
            <br />
            <span className="italic font-normal">for a Brighter Future</span>
          </h1>

          <div className="my-6 h-0.5 w-96 max-w-full bg-[#d4a73c]" />

          <p className="max-w-xl text-lg leading-8 text-white/90 md:text-xl">
            A Catholic primary school community in Jamaica committed to academic
            excellence, moral values, and spiritual growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#apply" className="gold-btn">
              Enroll Your Child
            </a>

            <a
  href="/TFA-Family-Handbook.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg border border-white/80 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#06291f]"
>
  View Family Handbook
</a>
          </div>
        </div>
      </div>
    </section>
  );
}