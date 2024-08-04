var links = document.getElementsByClassName("link");

function addActiveClass(link) {
  return function () {
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    link.classList.add("active");
  };
}
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", addActiveClass(links[i]));
}
