const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
  startBtn: document.querySelector("button[data-action='start']"),
  stopBtn: document.querySelector("button[data-action='stop']"),
  body: document.querySelector("body"),
};
let colorsFon = null;
function startColors() {
  refs.startBtn.disabled = true;
  colorsFon = setInterval(() => {
    console.log("start");
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}
function stopColors() {
  refs.startBtn.disabled = false;
  clearInterval(colorsFon);
  console.log("stop");
}
refs.startBtn.addEventListener("click", startColors);
refs.stopBtn.addEventListener("click", stopColors);
