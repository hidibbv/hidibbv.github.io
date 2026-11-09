/**
 * Home page only.
 *
 * The menu and the footer year live in navigation.js.
 * Section reveals live in animations.js.
 * This file starts the decorative circuit trace in the hero.
 * The line is already drawn in the SVG. The class only turns on motion.
 * home.css cancels that motion when the visitor prefers reduced motion.
 */
(function () {
  const circuit = document.querySelector(".hero-circuit");
  if (!circuit) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  circuit.classList.add("is-animated");
})();
