const elements = {
  board: document.querySelector("#board"),
  checkbox: document.querySelector("#checkbox"),
};
const SQUARES_COUNT = 102;

for (let i = 0; i < SQUARES_COUNT; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  elements.board.append(square);
  square.addEventListener("mouseover", makeMagic);
  square.addEventListener("mouseleave", removeColor);
}

function makeMagic(e) {
  const currentSquare = e.target;
  const isSound = elements.checkbox.checked;
  const idx = randomNumber();
  setColor(currentSquare, idx);
  if (isSound) playSound(idx);
}
function setColor(element, idx) {
  const colors = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#000080",
    "#800080",
  ];
  const color = colors[idx];
  element.style.background = color;
  element.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}`;
}
function removeColor(e) {
  e.target.style.background = "#1d1d1d";
  e.target.style.boxShadow = `0 0 2px #000`;
}
function playSound(number) {
  const soundsSrc = [
    "./sounds/do.mp3",
    "./sounds/re.mp3",
    "./sounds/mi.mp3",
    "./sounds/fa.mp3",
    "./sounds/sol.mp3",
    "./sounds/lja.mp3",
    "./sounds/si.mp3",
  ];
  const sound = new Audio();
  sound.src = soundsSrc[number];
  sound.play();
}
function randomNumber() {
  return Math.floor(Math.random() * 6);
}
