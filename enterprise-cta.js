// Moves the enterprise banner (snippets/enterprise-cta.mdx) to the end of
// API reference pages. Mintlify renders a page's MDX above the generated
// parameter and response sections, so in place the banner lands mid-page.
// We show a copy at the end of the operation container and hide the
// original; copying rather than moving keeps React's own nodes untouched.
(function () {
  var CLONE_ATTR = "data-bq-cta-clone";

  function place() {
    // Drop copies left behind by client-side navigation.
    document.querySelectorAll("[" + CLONE_ATTR + "]").forEach(function (clone) {
      var page = clone.parentElement;
      if (!page || !page.querySelector(".bq-cta:not([" + CLONE_ATTR + "])")) {
        clone.remove();
      }
    });

    document.querySelectorAll(".bq-cta:not([" + CLONE_ATTR + "])").forEach(function (cta) {
      var page = cta.closest('[id^="api-playground"]');
      if (!page) return;
      cta.classList.add("bq-cta-source");
      var last = page.lastElementChild;
      if (last && last.hasAttribute(CLONE_ATTR)) return;
      var existing = page.querySelector(":scope > [" + CLONE_ATTR + "]");
      if (existing) existing.remove();
      var clone = cta.cloneNode(true);
      clone.classList.remove("bq-cta-source");
      clone.setAttribute(CLONE_ATTR, "");
      page.appendChild(clone);
    });
  }

  var scheduled = false;
  new MutationObserver(function () {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      place();
    });
  }).observe(document.documentElement, { childList: true, subtree: true });

  place();
})();
