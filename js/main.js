const searchEl = document.querySelector(".search");
const inputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  inputEl.focus();
});

inputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  inputEl.setAttribute("placeholder", "통합검색");
});

inputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  inputEl.setAttribute("placeholder", "");
});
