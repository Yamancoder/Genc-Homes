// Robust mobile nav + footer year (works on all pages)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.classList.toggle("nav-open", isOpen);
    });
  } else {
    if (!btn) console.warn("[menu] .menu-toggle not found");
    if (!nav) console.warn("[menu] #site-nav not found");
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
