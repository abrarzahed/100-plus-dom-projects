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
  root.style.background = bg;
  output.value = bg.substring(1).toLocaleUpperCase();
}

function generateToastMessage(message) {
  div = document.createElement("div");
  div.textContent = message;
  div.className = "toast-message slide-in";
  div.style.background = `#${output.value}`;
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
  if (div !== null) {
    div.remove();
    div = null;
  }
  if (isValidHex(output.value)) {
    navigator.clipboard.writeText(`#${output.value}`);
    generateToastMessage(`#${output.value} copied!`);
  } else {
    navigator.clipboard.writeText("");
    generateToastMessage("invalid color code 😢");
  }
}

function isValidHex(color) {
  if (color.length !== 6) return false;
  // if (color[0] !== "#") return false;
  // color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

changer.addEventListener("click", assignBg);
copyBtn.addEventListener("click", copyText);

output.addEventListener("keyup", function (e) {
  const color = e.target.value;
  if (color) {
    output.value = color.toUpperCase();
    if (isValidHex(color)) {
      root.style.background = `#${color}`;
    }
  }
});
