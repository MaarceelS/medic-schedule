const mainButton = document.getElementById("mainButton");
const hiddenButtons = document.getElementById("hiddenButtons");
const overlay = document.getElementById("overlay");

mainButton.addEventListener("click", () => {
  const isVisible = hiddenButtons.style.display === "flex";
  hiddenButtons.style.display = isVisible ? "none" : "flex";
  overlay.style.display = isVisible ? "none" : "block";
});

overlay.addEventListener("click", () => {
  hiddenButtons.style.display = "none";
  overlay.style.display = "none";
});