const root = document.getElementById("root");
const changer = document.getElementById("changeBtn");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");
let div = null;

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

function generateToastMessage(message) {
  div = document.createElement("div");
  div.textContent = message;
  div.className = "toast-message slide-in";
  div.style.background = output.value;
  document.body.appendChild(div);

  div.addEventListener("click", function () {
    this.className = "toast-message slide-out";
    this.addEventListener("click", function () {
      this.remove();
      div = null;
    });
  });
}

function copyText() {
  navigator.clipboard.writeText(output.value);
  if (div !== null) {
    div.remove();
    div = null;
  }
  generateToastMessage(`${output.value} copied!`);
}

changer.addEventListener("click", assignBg);
copyBtn.addEventListener("click", copyText);
