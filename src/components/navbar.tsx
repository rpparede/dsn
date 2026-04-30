"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faq", label: "FAQ" },
  { href: "#enlaces", label: "Enlaces" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const navbar = document.getElementById("navbar");
      const offset = navbar?.offsetHeight ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" onClick={(e) => scrollTo(e, "#hero")}>
          <Image
            src="/dsn-orange-removebg-preview.png"
            alt="DSN Logo"
            width={120}
            height={45}
            className="h-[45px] w-auto hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="font-body font-semibold text-sm uppercase tracking-widest text-white relative
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--orange)]
                  after:transition-all hover:text-[var(--orange)] hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-[1001]"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <ul
        className={`md:hidden fixed top-0 right-0 h-screen w-[70%] max-w-[300px] bg-black/97 backdrop-blur-sm
          flex flex-col justify-center items-center gap-10 transition-all duration-300 ${
          menuOpen ? "right-0" : "-right-full"
        }`}
        style={{ right: menuOpen ? 0 : "-100%" }}
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="font-body font-semibold text-lg uppercase tracking-widest text-white hover:text-[var(--orange)]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
