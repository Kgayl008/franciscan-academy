import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import InfoCard from "../components/InfoCard";
import Gallery from "../components/Gallery";
import PrincipalMessage from "../components/PrincipalMessage";
import Footer from "../components/Footer";
import AtAGlance from "../components/AtAGlance";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <Navbar />
      <Hero />

      <section className="bg-white px-6 py-10 shadow-sm">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center border-b pb-8 text-center md:border-b-0 md:border-r md:pb-0">
            <img src="/images/mission.png" className="h-24 w-24 object-contain" />
            <h3 className="serif mt-3 text-2xl font-bold text-[#0b3d2e]">
              Our Mission
            </h3>
            <p className="text-sm">Guided by Faith in Christ</p>
          </div>

          <div className="flex flex-col items-center justify-center border-b pb-8 text-center md:border-b-0 md:border-r md:pb-0">
            <img src="/images/pray.png" className="h-35 w-35 object-contain" />
            <h3 className="serif mt-3 text-2xl font-bold text-[#0b3d2e]">
              Christian Values
            </h3>
            <p className="text-sm">Respect & Integrity</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <img src="/images/bible.png" className="h-35 w-35 object-contain" />
            <h3 className="serif mt-3 text-2xl font-bold text-[#0b3d2e]">
              Academic Excellence
            </h3>
            <p className="text-sm">Strong Curriculum</p>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.3fr] md:items-center">
          <div>
            <SectionTitle
              eyebrow="About Our School"
              title="Welcome to The Franciscan Academy"
            />

            <p className="mt-6 text-lg leading-8 text-neutral-700">
  Founded on April 28, 2025, The Franciscan Academy was established in
  response to the growing need for quality, Christ-centered education in
  Clarendon and surrounding communities.
</p>

<p className="mt-5 text-lg leading-8 text-neutral-700">
  As an independent faith-based institution inspired by the charisms of
  St. Francis of Assisi, we are committed to nurturing the whole child
  through academic excellence, creativity, discipline, service, and faith.
</p>

<p className="mt-5 text-lg leading-8 text-neutral-700">
  Located in May Pen, Jamaica, our campus provides a safe and inspiring
  environment where students are encouraged to grow intellectually,
  spiritually, socially, and emotionally while preparing for lifelong
  success.
</p>

            <a
              href="#admissions"
              className="mt-8 inline-block border-b border-[#d4a73c] font-semibold text-[#0b3d2e]"
            >
              Learn More About Us →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <img
              src="/images/church.jpg"
              alt="Students learning"
              className="h-64 w-full rounded-2xl border border-[#0b3d2e]/20 object-cover shadow-[0_12px_40px_rgba(11,61,46,0.22)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_55px_rgba(11,61,46,0.32)] md:col-span-2"
            />
            <img
              src="/images/sports.jpg"
              alt="Students smiling"
              className="h-48 w-full rounded-2xl border border-[#0b3d2e]/20 object-cover shadow-[0_12px_40px_rgba(11,61,46,0.22)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_55px_rgba(11,61,46,0.32)]"
            />
            <img
              src="/images/gallery-13.jpg"
              className="h-48 w-full rounded-2xl border border-[#0b3d2e]/20 object-cover shadow-[0_12px_40px_rgba(11,61,46,0.22)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_55px_rgba(11,61,46,0.32)]"
            />
          </div>
        </div>
      </section>

      <section id="admissions" className="px-6 pb-20">
  <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">

    <a
      href="/Admissions.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InfoCard
        icon="/images/admissions-icon.png"
        title="Admissions"
        text="Join Our Academy"
      />
    </a>

    <a
      href="/Academics.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InfoCard
        icon="/images/academics-icon.png"
        title="Academics"
        text="Rigorous Curriculum"
        accent="green"
      />
    </a>

    <a
      href="/StudentLife.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InfoCard
        icon="/images/student-life-icon.png"
        title="Student Life"
        text="Clubs & Activities"
      />
    </a>

  </div>
</section>
<AtAGlance />
      <Gallery />

      <PrincipalMessage />

      <section id="apply" className="px-6 py-20">
  <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_380px] md:items-center">
    <div>
      <SectionTitle eyebrow="Upcoming Events" title="Stay Connected" />

      <p className="max-w-2xl text-lg leading-8 text-neutral-700">
        View the full school calendar for upcoming activities, parent meetings,
        holidays, term dates, celebrations, and important school events.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/Calendar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#0b3d2e] px-7 py-3 font-bold text-white transition hover:bg-[#06291f]"
        >
          View School Calendar
        </a>

        <a
          href="/TFA-Family-Handbook.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-[#0b3d2e] px-7 py-3 font-bold text-[#0b3d2e] transition hover:bg-[#0b3d2e] hover:text-white"
        >
          Download Handbook
        </a>
      </div>
    </div>

    <div className="rounded-xl bg-[#06291f] p-8 text-center text-white shadow-xl">
      <img
  src="/images/logo.png"
  alt="The Franciscan Academy logo"
  className="mx-auto h-14 w-20 rounded-full"
/>

      <h3 className="serif mt-4 text-3xl font-bold">
        Ready to Join Our Franciscan Family?
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/75">
        Applications are now open for the upcoming school year. Contact the
        school team to begin the enrollment process.
      </p>

      <a
  href="https://wa.me/18765918151?text=Hello%2C%20I%20would%20like%20more%20information%20about%20The%20Franciscan%20Academy."
  target="_blank"
  rel="noopener noreferrer"
  className="gold-btn mt-6 inline-block"
>
  Chat on WhatsApp
</a>
    </div>
  </div>
</section>

<Footer />
    </main>
  );
}