const root = document.getElementById("root");
const changer = document.getElementById("changeBtn");

window.onload = () => {
  generateBg();
  assignBg();
};

function generateBg() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function assignBg() {
  root.style.background = generateBg();
}

changer.addEventListener("click", assignBg);
