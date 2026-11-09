/**
 * Shared navigation for every page.
 *
 * GITHUB_URL is the single JavaScript copy of the profile address.
 * The same address is also written in the HTML href, so the link
 * still works if this file does not run. There is no LinkedIn link:
 * Hidayat does not have a LinkedIn account.
 */
const GITHUB_URL = "https://github.com/hidibbv";

(function () {
  document.querySelectorAll("[data-github]").forEach((link) => {
    link.href = GITHUB_URL;
  });

  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector("#site-nav");
  if (!header || !toggle || !panel) return;

  const mobileQuery = window.matchMedia("(max-width: 800px)");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
  }

  toggle.addEventListener("click", (event) => {
    // Stop the click from also being treated as an "outside" click.
    event.stopPropagation();
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
    if (open) {
      const firstLink = panel.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || toggle.getAttribute("aria-expanded") !== "true") return;
    setOpen(false);
    toggle.focus();
  });

  panel.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (toggle.getAttribute("aria-expanded") !== "true") return;
    if (event.target.closest(".site-header")) return;
    setOpen(false);
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  // The desktop layout does not use the open panel. Close it if the
  // window crosses back above the mobile breakpoint.
  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) setOpen(false);
  });
})();
