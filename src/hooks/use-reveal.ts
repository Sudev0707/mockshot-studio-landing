import { useEffect } from "react";

/** Observes `.ms-reveal` elements and adds `.is-visible` when they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".ms-reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
