const buttons = document.querySelectorAll("button");

const buttonClickHandler = (event) => {
  console.log("Button was clicked!");
  console.log(event);
  event.target.innerText = "Clicked!";
  event.target.disabled = true;
  event.target.style.backgroundColor = "blue";
};
// button.onclick = buttonClickHandler;
buttons.forEach((button) => {
  button.addEventListener("click", buttonClickHandler);
});

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);
