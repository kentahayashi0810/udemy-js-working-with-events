const buttons = document.querySelectorAll("button");

const buttonClickHandler = (event) => {
  console.log("Button was clicked!");
  console.log(event);
  event.target.innerText = "Clicked!";
  event.target.disabled = true;
  event.target.style.backgroundColor = "blue";
};
// button.onclick = buttonClickHandler;
// buttons.forEach((button) => {
//   button.addEventListener("click", buttonClickHandler);
// });

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

window.addEventListener("scroll", scrollHandler);
