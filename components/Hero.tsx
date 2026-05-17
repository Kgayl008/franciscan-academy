export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen md:min-h-180"
    >
      <img
        src="/images/hero.jpg"
        alt="Students of The Franciscan Academy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#06291f]/95 via-[#0b3d2e]/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-28 pb-16 sm:px-6 md:min-h-180 md:px-8">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#d4a73c] sm:text-sm">
            Welcome to our school
          </p>

          <h1 className="serif text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Nurturing Young Minds
            <br />

            <span className="italic font-normal">
              for a Brighter Future
            </span>
          </h1>

          <div className="my-6 h-0.5 w-40 bg-[#d4a73c] sm:w-64 md:w-96" />

          <p className="max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8 md:text-xl">
            A Catholic primary school community committed to academic
            excellence, moral values, and spiritual growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="#apply" className="gold-btn text-center">
              Enroll Your Child
            </a>

            <a
              href="/TFA-Family-Handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/80 px-7 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-[#06291f]"
            >
              View Family Handbook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}