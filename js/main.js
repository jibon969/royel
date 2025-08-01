// Change modal image on click
document.querySelectorAll(".project-img").forEach((img) => {
  img.addEventListener("click", function () {
    const imageUrl = this.getAttribute("data-bs-image");
    document.getElementById("modalImage").src = imageUrl;
  });
});
