let counter = document.getElementById("counter");
const fName = document.getElementById("fname");
const errMsg = document.getElementById("error");
let welcomeNote = document.getElementById("welcome");
const errMsg2 = document.getElementById("err2");

function enter() {
  if (fName.value === "") {
    errMsg.innerText = "Please fill in your name";
    errMsg.style.color = "red";
  } else {
    document.getElementById("firstpage").style.display = "none";
    welcomeNote.innerText = "Welcome back " + fName.value;
    counter.style.display = "block";
  }
}

let saveEl = document.getElementById("save-el").textContent;
let count = document.getElementById("count-el").textContent;
count = 0;

function increment() {
  count += 1;
  document.getElementById("count-el").innerHTML = count;
  errMsg2.innerText = "";
}

function save() {
  if (count === 0) {
    errMsg2.innerText = "Error!!! Add more before you can save";
    errMsg2.style.color = "red";
  } else {
    saveEl += count + " - ";
    document.getElementById("save-el").innerText = saveEl;
    count = 0;
    document.getElementById("count-el").textContent = count;
    errMsg2.innerText = "";
  }
}
