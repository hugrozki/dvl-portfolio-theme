(function (d) {
  const $navIcon = d.querySelector(".navigation-navicon");
  const $navLinks = d.querySelector(".navigation-links");

  $navIcon.addEventListener("click", (e) => {
    $navLinks.classList.toggle("is-visible");
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(".navigation-navicon")) return false;
    $navLinks.classList.remove("is-visible");
  });
})(document);
