import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 bg-[#06291f] text-white">
      <div className="bg-[#d4a73c] px-6 py-8 text-[#06291f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="serif text-3xl font-bold">
              Have Questions? We’re Here to Help.
            </h3>
            <p className="text-sm">Contact our admissions team today.</p>
          </div>

          <a
  href="https://wa.me/18765918151?text=Hello%2C%20I%20would%20like%20more%20information%20about%20The%20Franciscan%20Academy."
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg bg-[#06291f] px-8 py-3 font-bold text-white transition hover:bg-[#0b3d2e]"
>
            Contact Us
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="The Franciscan Academy logo"
              className="h-14 w-20 rounded-full object-cover"
            />

            <div>
              <h3 className="serif text-2xl font-bold">
                The Franciscan Academy
              </h3>
              <p className="text-sm text-white/70">
                A Catholic Primary School in Jamaica
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-bold text-[#d4a73c]">Quick Links</h4>

          <div className="grid gap-2 text-sm text-white/80">
            <a href="#about" className="transition hover:text-[#d4a73c]">
              About Us
            </a>
            <a href="#gallery" className="transition hover:text-[#d4a73c]">
              Gallery
            </a>
            <a href="#apply" className="transition hover:text-[#d4a73c]">
              Admissions
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-bold text-[#d4a73c]">Contact Info</h4>

          <div className="grid gap-2 text-sm text-white/80">
            <p>(876) 591-8151</p>
            <p>info@franciscanacademy.edu.jm</p>
    <p>
      📍22 Fernleigh Ave., May Pen, Clarendon
      <br />
      <span className="text-white/60">
        (Entrance on Anderson Cl.)
      </span>
    </p>
            <p>Kingston, Jamaica</p>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-bold text-[#d4a73c]">Follow Us</h4>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/franciscanjm2025/"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d4a73c] hover:text-[#d4a73c]"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

            <a
              href="https://www.facebook.com/p/The-Franciscan-Academy-61577178744956/"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d4a73c] hover:text-[#d4a73c]"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/company/the-franciscan-academy/"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#d4a73c] hover:text-[#d4a73c]"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/60">
  <p>
    © 2026 The Franciscan Academy. All Rights Reserved. Proudly in Jamaica 🇯🇲
  </p>

  <a
    href="https://kiyannagayle-portfolio.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-block transition hover:text-[#d4a73c]"
  >
    Website by Kiyanna Gayle
  </a>
</div>
    </footer>
  );
}