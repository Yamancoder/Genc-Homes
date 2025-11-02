// Mobile dropdown menu (click/touch safe) + footer year
(function () {
  function onReady(fn){
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  onReady(function(){
    const btn = document.querySelector(".menu-toggle");
    const nav = document.getElementById("site-nav");

    // Footer year (optional)
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    if (!btn || !nav) return;

    const toggle = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    };

    // Click + touch for iOS Safari reliability
    btn.addEventListener("click", toggle, { passive:false });
    btn.addEventListener("touchend", toggle, { passive:false });

    // Close when tapping outside the menu
    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || btn.contains(e.target)) return;
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded","false");
      document.body.classList.remove("nav-open");
    });
  });
})();
