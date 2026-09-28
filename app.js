/* ============================================================
   HOLOCRON · Présentation
   Scrollspy de navigation et révélation au défilement.
   ============================================================ */
(function () {
    "use strict";

    var elFooterYear = document.getElementById("footerYear");
    if (elFooterYear) { elFooterYear.textContent = String(new Date().getFullYear()); }

    // --- Scrollspy navigation -------------------------------------------
    var navLinks = Array.prototype.slice.call(
        document.querySelectorAll(".topbar-nav a")
    );
    var linkById = {};
    navLinks.forEach(function (link) {
        var id = (link.getAttribute("href") || "").replace("#", "");
        if (id) { linkById[id] = link; }
    });

    var sections = Object.keys(linkById)
        .map(function (id) { return document.getElementById(id); })
        .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var link = linkById[entry.target.id];
                if (!link) { return; }
                if (entry.isIntersecting) {
                    navLinks.forEach(function (l) { l.classList.remove("is-active"); });
                    link.classList.add("is-active");
                }
            });
        }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
        sections.forEach(function (section) { spy.observe(section); });
    }

    // --- Reveal on scroll ------------------------------------------------
    var revealTargets = document.querySelectorAll(
        ".idea-model, .idea-conclusion, .why-item, .value-item, .value-principle, " +
        ".method-intro, .method-step, .change-support, .agent-repo, " +
        ".operational-model article, .architecture-diagram, .inference-note, " +
        ".reporting-intro, .reporting-level, .reporting-principle, " +
        ".quality-step, .quality-measures, .usecase, .closing-statement"
    );

    if ("IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

        revealTargets.forEach(function (el) {
            el.classList.add("reveal");
            revealObserver.observe(el);
        });
    }
})();
