const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const extraInfo = button.nextElementSibling;
    extraInfo.style.display =
      extraInfo.style.display === "block" ? "none" : "block";
  });
});
