const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-10.jpg",
  "/images/gallery-11.jpg",
  "/images/gallery-12.jpg",
  "/images/gallery-15.jpg",
  "/images/gallery-16.jpg",
  "/images/gallery-18.jpg",
  "/images/gallery-17.jpg"
];

export default function Gallery() {
  const repeatedImages = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="overflow-hidden bg-[#06291f] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#d4a73c]">
            Our School Community
          </p>

          <h2 className="serif mt-2 text-4xl font-bold md:text-5xl">
            Student Life at TFA
          </h2>

          <div className="mx-auto mt-4 h-px w-24 bg-[#d4a73c]" />

          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            A glimpse into the joy, friendship, faith, and learning that shape
            everyday life at The Franciscan Academy.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-[#06291f] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-[#06291f] to-transparent" />

          <div className="gallery-track flex w-max gap-6">
            {repeatedImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="group h-72 w-64 shrink-0 overflow-hidden rounded-2xl bg-white/10 shadow-xl"
              >
                <img
                  src={image}
                  alt="The Franciscan Academy student life"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          {/* <a
            href="#contact"
            className="rounded-lg border border-white/70 px-8 py-3 font-semibold transition hover:bg-white hover:text-[#06291f]"
          >
            View More Moments
          </a> */}
        </div>
      </div>
    </section>
  );
}