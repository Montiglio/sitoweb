const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  status.textContent = "Invio del messaggio in corso...";
  status.style.color = "#f59e0b";

  setTimeout(() => {
    status.textContent = "Grazie! Il tuo messaggio è stato inviato."
    status.style.color = "#34d399";
    form.reset();
  }, 800);
});
