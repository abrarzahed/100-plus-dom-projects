const root = document.getElementById("root");
const changer = document.getElementById("changeBtn");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");

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
  let bg = generateBg();
  output.value = bg;
  root.style.background = bg;
}
function copyText() {
  navigator.clipboard.writeText(output.value);
  alert(`${output.value} copied!`);
}

changer.addEventListener("click", assignBg);
copyBtn.addEventListener("click", copyText);
