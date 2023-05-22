let output = document.querySelector("#input");
let answerArray = [];
// removers
function remove_valueAll() {
  let output = document.getElementById("input");
  output.value = "";
}
function remove_value() {
  let output = input.value.split("");
  output.pop();
  input.value = output.join("");
}

// Numbers
function add_1() {
  let output = document.getElementById("input");
  output.value += "1";
}
function add_2() {
  let output = document.getElementById("input");
  output.value += "2";
}
function add_3() {
  let output = document.getElementById("input");
  output.value += "3";
}
function add_4() {
  let output = document.getElementById("input");
  output.value += "4";
}
function add_5() {
  let output = document.getElementById("input");
  output.value += "5";
}
function add_6() {
  let output = document.getElementById("input");
  output.value += "6";
}
function add_7() {
  let output = document.getElementById("input");
  output.value += "7";
}
function add_8() {
  let output = document.getElementById("input");
  output.value += "8";
}
function add_9() {
  let output = document.getElementById("input");
  output.value += "9";
}
function add_0() {
  let output = document.getElementById("input");
  output.value += "0";
}
// operators
function add_addition() {
  let output = document.getElementById("input");
  output.value += "+";
}
function add_subtraction() {
  let output = document.getElementById("input");
  output.value += "-";
}
function add_times() {
  let output = document.getElementById("input");
  output.value += "*";
}
function add_divide() {
  let output = document.getElementById("input");
  output.value += "/";
}
document.querySelector(".equal").addEventListener("click", (e) => {
  output.value = eval(output.value);
});

function add_dot() {
  let output = document.getElementById("input");
  output.value += ".";
}
