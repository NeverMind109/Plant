const firstCircle = document.querySelector("#firstCircle");
const firstDescr = document.querySelector("#firstDescr");
const secondCircle = document.querySelector("#secondCircle");
const secondDescr = document.querySelector("#secondDescr");
const thirdCircle = document.querySelector("#thirdCircle");
const thirdDescr = document.querySelector("#thirdDescr");

firstCircle.addEventListener("click", function () {
  firstCircle.classList.toggle("hero__circle--active");
  firstDescr.classList.toggle("hero__point-content--active");
});
secondCircle.addEventListener("click", function () {
  secondCircle.classList.toggle("hero__circle--active");
  secondDescr.classList.toggle("hero__point-content--active");
});
thirdCircle.addEventListener("click", function () {
  thirdCircle.classList.toggle("hero__circle--active");
  thirdDescr.classList.toggle("hero__point-content--active");
});
