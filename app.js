const imagesArray = Array.from(document.getElementsByClassName("image"));
const modal = document.getElementById("modal");
const imageComparisionBox = document.getElementById("images_compare");
let selected = null;

// click image
imagesArray.forEach((image) => {
  image.addEventListener("click", () => {
    const imageUrl = image.children[0].getAttribute("src");
    if (selected) {
      imageComparisionBox.removeChild(selected);
    }
    selected = document.createElement("img");
    selected.setAttribute("src", imageUrl);
    imageComparisionBox.append(selected);
    if ((modal.style.display = "none")) {
      modal.style.display = "block";
    }
    generateRandomImage(selected);
  });
});

// Generate random image to compare with the selected image
function generateRandomImage(selected) {
  const randomNumber = Math.floor(Math.random() * 3);
  const randomImageArray = [];
  imagesArray.forEach((image) => {
    randomImageArray.push(image.querySelector("img").getAttribute("src"));
  });
  const randomImage = randomImageArray[randomNumber];
  const randomImagePic = document.createElement("img");
  randomImagePic.setAttribute("src", randomImage);

  imageComparisionBox.append(randomImagePic);
  const selectedImage = selected.getAttribute("src");
  const selectedText = selectedImage.split("/").pop().split(".").shift();
  const randomText = randomImage.split("/").pop().split(".").shift();

  const result = checkWin(selectedText, randomText);
  const resultText = document.createElement("h3");
  resultText.innerText = result;

  imageComparisionBox.append(resultText);
}

function checkWin(selectedText, randomText) {
  const winningRules = {
    rock: {
      winsWith: "scissors",
    },
    scissors: {
      winsWith: "paper",
    },
    paper: {
      winsWith: "rock",
    },
  };

  if (selectedText === randomText) {
    return "Match Draw!";
  }

  if (winningRules[selectedText].winsWith === randomText) {
    if (selectedText === "rock")
      return `You win! ${selectedText} crushes ${randomText}`;
    if (selectedText === "scissors")
      return `You win! ${selectedText} cuts the ${randomText}`;
    if (selectedText === "paper")
      return `You win! ${selectedText} cover the ${randomText}`;
  } else {
    if (selectedText === "rock")
      return `You lose! ${randomText} cover ${selectedText}`;
    if (selectedText === "scissors")
      return `You lose! ${randomText} crushes ${selectedText}`;
    if (selectedText === "paper")
      return `You lose! ${randomText} cuts ${selectedText}`;
  }
}

// Close Button
modal.querySelector("svg").addEventListener("click", () => {
  if ((modal.style.display = "block")) modal.style.display = "none";
});
