"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }

    function show(el: HTMLElement) {
      const delay = parseFloat(el.dataset.delay || "0");
      if (delay) setTimeout(() => el.classList.add("in"), delay);
      else el.classList.add("in");
    }

    function inView(el: HTMLElement) {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    }

    // Stagger hero items
    document
      .querySelectorAll<HTMLElement>(".hero-text .reveal")
      .forEach((el, i) => {
        el.dataset.delay = String(i * 70);
      });

    const ro = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target as HTMLElement);
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    reveals.forEach((el) => ro.observe(el));

    function revealVisible() {
      reveals.forEach((el) => {
        if (!el.classList.contains("in") && inView(el)) {
          show(el);
          ro.unobserve(el);
        }
      });
    }

    requestAnimationFrame(revealVisible);
    window.addEventListener("load", revealVisible);

    const safety = setTimeout(() => {
      reveals.forEach((el) => el.classList.add("in"));
    }, 1600);

    return () => {
      ro.disconnect();
      clearTimeout(safety);
      window.removeEventListener("load", revealVisible);
    };
  }, []);

  return null;
}
