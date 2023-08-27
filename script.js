var button = document.querySelector("button");
var model = document.querySelector("#model");
var cross = document.querySelector("#model i");

button.addEventListener("click", () => {
  model.style.display = "initial";
});

cross.addEventListener("click", () => {
  model.style.display = "none";
});
