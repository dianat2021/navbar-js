const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll(".navbar__link");
// Set initial display state
// navbarLinksContainer.style.display = "none";

toggleMenuButton.addEventListener("click", () => {
  navbarLinksContainer.classList.toggle("navbar__links--active");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Remove active class from all links
    links.forEach((link) => link.classList.remove("navbar__link--active"));

    // Add active class to the clicked link using the 'e' object
    e.currentTarget.classList.add("navbar__link--active");
  });
});
