const button = document.querySelector("button");
const buttonClickHandler = () => {
  console.log("Button was clicked!");
};
// button.onclick = buttonClickHandler;

button.addEventListener("click", buttonClickHandler);
