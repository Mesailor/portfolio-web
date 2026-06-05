"use client";

import { useEffect, useRef } from "react";
import type { Person } from "@/lib/types";

interface NavProps {
  person: Pick<Person, "name" | "initials" | "title">;
}

const NAV_LINKS = [
  { href: "#work", label: "Work", mi: "01" },
  { href: "#about", label: "About", mi: "02" },
  { href: "#experience", label: "Experience", mi: "03" },
  { href: "#services", label: "Services", mi: "04" },
  { href: "#contact", label: "Contact", mi: "05" },
];

export default function Nav({ person }: NavProps) {
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current!;
    const toggle = toggleRef.current!;
    const menu = menuRef.current!;

    // Scrolled state
    function onScroll() {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mobile menu
    function closeMenu() {
      toggle.classList.remove("open");
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    function openMenu() {
      toggle.classList.add("open");
      menu.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    }
    function handleToggle() {
      menu.classList.contains("open") ? closeMenu() : openMenu();
    }

    toggle.addEventListener("click", handleToggle);
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

    function onResize() {
      if (window.innerWidth > 860) closeMenu();
    }
    window.addEventListener("resize", onResize);

    // Scroll-spy
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-links a")
    );
    const sections = navLinks
      .map((a) => document.getElementById(a.getAttribute("href")!.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = (e.target as HTMLElement).id;
            navLinks.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === `#${id}`)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      toggle.removeEventListener("click", handleToggle);
      spy.disconnect();
    };
  }, []);

  return (
    <>
      <header className="nav" id="nav" ref={navRef}>
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label={`${person.name} — home`}>
            <span className="mono">{person.initials}</span>
            <span className="name">
              {person.name}
              <small>{person.title}</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary">
              Let&apos;s talk <span className="arr">→</span>
            </a>
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label="Open menu"
              aria-expanded="false"
              ref={toggleRef}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu" ref={menuRef}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            <span className="mi">{link.mi}</span> {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary">
          Let&apos;s talk <span className="arr">→</span>
        </a>
      </div>
    </>
  );
}
