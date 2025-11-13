const menuHeaders = document.querySelectorAll(".menu-header");

  menuHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const submenu = header.nextElementSibling; // le div juste après (le sous-menu)
      const icon = header.querySelector(".fa-angle-up");

      // Toggle affichage du sous-menu
      submenu.classList.toggle("hidden");

      // Rotation de la flèche
      icon.classList.toggle("rotate-180");
    });
  });