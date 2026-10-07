// Replace placeholder hrefs in index.html as the approved external links arrive.
document.querySelectorAll("[data-link-placeholder]").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
  link.setAttribute("aria-disabled", "true");
});
