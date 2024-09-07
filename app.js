const images = document.getElementsByClassName("image");
const imagesArray = Array.from(images);
console.log(imagesArray);
imagesArray.forEach((image) => {
  image.addEventListener("click", () => {
    alert(image.children[1].innerText);
  });
});
