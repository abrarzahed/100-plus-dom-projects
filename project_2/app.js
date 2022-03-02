const root = document.getElementById("root");
const changer = document.getElementById("changeBtn");
const output = document.getElementById("output");

window.onload = () => {
  generateBg();
  assignBg();
};

function generateBg() {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);
  return `#${red}${green}${blue}`;
}

function assignBg() {
  output.value = generateBg();
  root.style.background = generateBg();
}

changer.addEventListener("click", assignBg);
