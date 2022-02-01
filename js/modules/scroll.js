const smoothScroll = () => {
  let links = document.querySelectorAll(".nav-item");
  let snackbar = document.getElementById("snackbar");

  for (let link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    let href = this.getAttribute("href");
    let offsetTop = document.querySelector(href).offsetTop;

    href === "#introducao"
      ? (offsetTop = offsetTop - 200)
      : (offsetTop = offsetTop - 99);

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });

    snackbar.classList.toggle("show");
    setTimeout(function () {
      snackbar.classList.toggle("show");
    }, 2000);
  };
};

export default smoothScroll;