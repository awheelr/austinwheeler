// CURRENTLY NOT BEING USED
// document.addEventListener("DOMContentLoaded", function () {
//   const number = 5;

//   for (let i = 0; i < number; i++) {
//     const gallery = `<img src="./images/photo${i}.jpg">`;

//     const target = document.querySelector(".items");
//     target.insertAdjacentHTML("beforeend", gallery);
//   }
// });

// const imgs = document.querySelectorAll(".items img"); 

// imgs.forEach((img, id) => {
//   let currentDelay = 300;
//   img.style.animationDelay = `${currentDelay + id * 50}ms`;
// });

// window.onload = function () {
// const imgs = document.querySelectorAll(".items img"); 
//   imgs.forEach((img) => {
//     if (img.offsetTop < window.innerHeight) {
//       img.style.animationPlayState = "running";
//     }
//   });
// };

// window.addEventListener("scroll", function () {
// const imgs = document.querySelectorAll(".items img"); 
//   imgs.forEach((img) => {
//     if (img.offsetTop - img.offsetTop / 2 < window.scrollY) {
//       img.style.animationPlayState = "running";
//     }
//   });
// });
