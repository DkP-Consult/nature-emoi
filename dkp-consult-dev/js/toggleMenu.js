function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Ajout d'un événement de clic sur le menu
document.getElementById("mobile-menu").addEventListener("click", function() {
  toggleMenu();
});

// Ajout d'un événement de scroll sur la fenêtre
window.addEventListener("scroll", function() {
  // Fermeture du menu
  document.getElementById("mobile-menu").style.display = "none";
});

// Ajout d'un événement de redimensionnement de la fenêtre
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.getElementById("mobile-menu").style.display = "none";
  } else {
    document.getElementById("mobile-menu").style.display = "none";
  }
});
