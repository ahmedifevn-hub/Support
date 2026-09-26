(function () {
  // Remember an explicit language choice, so the English homepage stops
  // redirecting Arabic-language browsers once someone picks English.
  document.querySelectorAll("[data-lang-switch]").forEach(function (link) {
    link.addEventListener("click", function () {
      try { localStorage.setItem("uarc-lang", link.getAttribute("data-lang-switch")); } catch (e) {}
    });
  });

  // Hairline under the sticky header once the page has scrolled.
  var header = document.querySelector(".site-header");
  if (header) {
    var update = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  // Label table cells with their column heading so wide tables
  // (privacy policy) can stack into one card per row on phones.
  document.querySelectorAll(".prose table").forEach(function (table) {
    var heads = Array.prototype.map.call(table.querySelectorAll("thead th"), function (th) {
      return th.textContent.trim();
    });
    if (!heads.length) return;
    table.querySelectorAll("tbody tr").forEach(function (row) {
      Array.prototype.forEach.call(row.children, function (cell, i) {
        if (heads[i]) cell.setAttribute("data-label", heads[i]);
      });
    });
    table.classList.add("is-stackable");
  });
})();
