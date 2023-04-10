function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      document.getElementById("mobile-menu").style.display = "none";
    } else {
      document.getElementById("mobile-menu").style.display = "none";
    }
  });