const revealBtn = document.querySelector(".reveal-btn");
const content = document.querySelector(".hidden-content");
revealBtn.addEventListener("click", () => {
  if (content.classList.contains("hidden-content")) {
    content.classList.remove("hidden-content");
  } else {
    content.classList.add("hidden-content");
  }
});

// const revealBtn = document.querySelector(".reveal-btn");
// const content = document.querySelector(".hidden-content");

// revealBtn.addEventListener("click", () => {
//   if (content) {
//     content.classList.toggle("hidden-content");
//   }
// });
