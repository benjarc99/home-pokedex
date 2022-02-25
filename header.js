const d = document,
  w = window;

const $navHeader = d.querySelector(".nav-header");
console.log($navHeader);

d.addEventListener("scroll", () => {
  let y = w.scrollY;

  console.log(y);
  if (y === 0) {
    $navHeader.classList.remove("scroll");
  }
  if (y > 0) {
    $navHeader.classList.add("scroll");
  }
});
