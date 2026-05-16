export default function PrincipalMessage() {
  return (
    <section className="bg-[#0b3d2e] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[260px_1fr] md:items-center">
        <div className="mx-auto w-full max-w-65 overflow-hidden rounded-xl border border-[#d4a73c]/50 bg-[#06291f] shadow-xl">
          <img
            src="/images/alex.png"
            alt="Principal"
            className="aspect-4/5 w-full object-cover object-top"
          />

          <div className="p-4 text-center">
            <h3 className="serif text-2xl font-bold">Mr. Alex Reid</h3>
            <p className="text-sm text-white/75">Principal</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="serif text-4xl italic leading-tight md:text-5xl">
            <span className="text-[#d4a73c]">Message from</span> Our Principal
          </h2>

          <div className="mx-auto my-5 h-px w-32 bg-[#d4a73c] md:mx-0 md:w-full" />

          <p className="max-w-4xl text-lg italic leading-8 text-white/90 md:text-xl md:leading-10">
            “Welcome to our school family! We are committed to providing a safe,
            nurturing, and high-quality education rooted in our Catholic faith.
            Together, we shape hearts, minds, and futures.”
          </p>
        </div>
      </div>
    </section>
  );
}