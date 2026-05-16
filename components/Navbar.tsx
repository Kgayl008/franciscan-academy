"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // { name: "Admissions", href: "#admissions" },
  // { name: "Academics", href: "#academics" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
  let current = "#home";

  links.forEach((link) => {
    const section = document.querySelector(link.href);

    if (!section) return;

    const rect = section.getBoundingClientRect();

    if (rect.top <= 200) {
      current = link.href;
    }
  });

  setActive(current);
};

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#06291f]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="School Logo"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <p className="serif text-2xl font-bold leading-none md:text-3xl">
              The Franciscan Academy
            </p>
            <p className="hidden text-xs italic text-[#d4a73c] md:block">
              Nurturing Young Minds for a Brighter Future
            </p>
          </div>
        </a>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative pb-2 text-sm font-semibold transition ${
                active === link.href
                  ? "text-[#f2c14e]"
                  : "text-white"
              }`}
            >
              {link.name}

              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#f2c14e] transition-all duration-300 ${
                  active === link.href
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* BUTTON */}
        <a href="#apply" className="gold-btn hidden md:inline-block">
          Apply Now
        </a>
      </nav>
    </header>
  );
}