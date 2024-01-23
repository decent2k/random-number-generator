const paragraphElem = document.querySelector(".js-result");
const buttonElem = document.querySelector(".js-generate-button");
const generatorInput = document.querySelector(".js-generator");
const warningElement = document.querySelector(".js-warning");

let intervalIdGenerator;
let isGenerating = false;
let timeoutId;

function generateNum() {
  if (!isGenerating) {
    const numValue = generatorInput.value;
    let number;

    intervalIdGenerator = setInterval(function () {
      number = Math.ceil(Math.random() * numValue);
      paragraphElem.innerHTML = number;

      if (paragraphElem.innerHTML == "NaN") {
        paragraphElem.innerHTML = "Error";
      }
    }, 1500);

    buttonElem.innerHTML = "Stop Generating";

    isGenerating = true;
  } else {
    buttonElem.innerHTML = "Generate";
    paragraphElem.innerHTML = "";
    clearInterval(intervalIdGenerator);
    isGenerating = false;
  }
}

buttonElem.addEventListener("click", () => {
  generateNum();
});
