function afficherPopup(message) {
  let popup = document.createElement("div");
  popup.className = "custom-alert";
  popup.innerText = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("visible");
  }, 100);

  setTimeout(() => {
    popup.classList.remove("visible");
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}
