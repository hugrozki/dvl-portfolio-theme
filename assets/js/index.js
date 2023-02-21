(function (d) {
  const $navIcon = d.querySelector(".navigation-navicon"),
    $navLinks = d.querySelector(".navigation-links"),
    $fadeInEl = d.querySelector(".fadeIn"),
    $transitionEl = d.querySelector(".v-transition");

  $navIcon.addEventListener("click", (e) => {
    $navLinks.classList.toggle("is-visible");
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(".navigation-navicon")) return false;
    $navLinks.classList.remove("is-visible");
  });

  window.addEventListener("load", () => {
    d.body.classList.remove("opacity");

    if ($fadeInEl) {
      $fadeInEl.style.opacity = "1";
    }

    if ($transitionEl) {
      $transitionEl.style.transform = "translateY(0)";
    }
  });
})(document);
