const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch("contact.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(data.message);
        form.reset();
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    });
});
