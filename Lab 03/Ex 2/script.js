const headingnew = document.createElement("h3");
const heading = document.querySelector("h2");
const date = new Date().toLocaleString();
headingnew.append(date);
heading.insertAdjacentElement("afterend", headingnew);

const yearElement = document.querySelector("span");
const dateElement = document.querySelector("h3");

let i = 0;
let colors = ["green", "yellow", "red"];
yearElement.style.color = colors[2];
dateElement.style.background = colors[1];
dateElement.style.justifyContent = "center";
dateElement.style.border = "black solid 1px";
dateElement.style.boxShadow = "3px 3px 3px black";
setInterval(() => {
  if (i > colors.length) {
    i = 0;
  } else {
    yearElement.style.color = colors[i++];
  }
}, 3000);

setInterval(() => {
  if (i > colors.length) {
    i = 0;
  } else {
    dateElement.style.background = colors[i++];
  }
}, 1000);

const listElements = document.querySelectorAll("li");
for (let i = 0; i < listElements.length; i++) {
  if (i < 3) {
    listElements[i].style.background = "green";
  } else if (i >= 3 && i < 5) {
    listElements[i].style.background = "yellow";
  } else {
    listElements[i].style.background = "red";
  }
  listElements[i].style.border = "black solid";
  listElements[i].style.padding = "20px 20px";
  listElements[i].style.margin = "20px";
  listElements[i].style.fontFamily = "Impact, Charcoal, sans-serif";
  listElements[i].style.boxShadow = "3px 3px 3px black";
}
