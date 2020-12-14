const colorChangeButton = document.querySelector(".button-changeColor");

const colorChangingDiv = document.querySelector(".colorDiv");

const rgbDisplay = document.querySelector(".RGB-value");

colorChangeButton.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 256);

  let g = Math.floor(Math.random() * 256);

  let b = Math.floor(Math.random() * 256);
  console.log("click");

  document.querySelector(
    ".colorDiv"
  ).style.backgroundColor = `rgb(${r},${g},${b})`;

  rgbDisplay.textContent = `rgb(${r},${g},${b})`;
});
