const btn = document.querySelector(".menu");
const line = document.querySelectorAll(".line");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  for (let i = 0; i < line.length; i++) {
    line[i].classList.remove("no-animation");
  }
  console.log("active");
});
