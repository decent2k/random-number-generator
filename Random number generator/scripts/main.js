const paragraphElem = document.querySelector(".js-result");
const buttonElem = document.querySelector(".js-generate-button");

let number;

let intervalId;
let isGenerating = false;

function generateNum() {
  if (!isGenerating) {
    intervalId = setInterval(function () {
      number = Math.ceil(Math.random() * 100);
      paragraphElem.innerHTML = number;
    }, 1500);

    buttonElem.innerHTML = "Stop Generating";

    isGenerating = true;
  } else {
    buttonElem.innerHTML = "Generate";
    paragraphElem.innerHTML = "";
    clearInterval(intervalId);
    isGenerating = false;
  }
}

buttonElem.addEventListener("click", () => {
  generateNum();
});
