const searchEl = document.querySelector(".search");
const inputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  inputEl.focus();
});

inputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
});
