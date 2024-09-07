const images = document.getElementsByClassName("image");
const imagesArray = Array.from(images);
const modal = document.getElementById("modal");
let selected = null;
console.log(modal.querySelector("p"));

// click image
imagesArray.forEach((image) => {
  image.addEventListener("click", () => {
    console.log(image.children[0].getAttribute("src"));
    const imageUrl = image.children[0].getAttribute("src");
    if (selected) {
      modal.removeChild(selected);
    }
    selected = document.createElement("img");

    selected.setAttribute("src", imageUrl);
    modal.append(selected);

    // selected.setAttribute("src", image.children[0]);
    if ((modal.style.display = "none")) modal.style.display = "block";
  });
});

// Close
modal.querySelector("p").addEventListener("click", () => {
  if ((modal.style.display = "block")) modal.style.display = "none";
});
