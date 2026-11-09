/**
 * One-time entrance for elements marked data-reveal.
 *
 * The pages add class "js" on <html> from a tiny script in the head.
 * style.css only hides [data-reveal] when that class is present, so a
 * failed script does not leave the page blank.
 *
 * prefers-reduced-motion shows everything immediately, with no slide.
 */
(function () {
  const nodes = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  nodes.forEach((node) => observer.observe(node));
})();
