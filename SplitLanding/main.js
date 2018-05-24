const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

/********************* overlay*******************************/
function on() {
    document.getElementById("overlay").style.display = "block";
}

function on1() {
    document.getElementById("overlay1").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function off1() {
    document.getElementById("overlay1").style.display = "none";
}