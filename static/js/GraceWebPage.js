let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let reset = document.getElementById("reset");
let number = document.getElementById("number");

plus.addEventListener("click", addUp);
function addUp() {
  let currentNum = number.innerHTML;
  number.innerHTML = Number(currentNum) + 1;
}

minus.addEventListener("click", subtract);
function subtract() {
  let currentNum = number.innerHTML;
  if (currentNum > 0) {
    number.innerHTML = Number(currentNum) - 1;
  }
}

reset.addEventListener("click", restart);
function restart() {
  number.innerHTML = 0;
}

document.addEventListener("keydown", keyControl);
function keyControl(e) {
  if (e.key === "a" || e.key === "+") {
    addUp();
  } else if (e.key === "s" || e.key === "-") {
    subtract();
  } else if (e.key === "r" || e.key === "0") {
    restart();
  }
}
