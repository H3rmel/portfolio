const progress = () => {
  let progresses = document.querySelectorAll(".progress--value");

  for (let progress of progresses) {
    if (isInViewport(progress)) {
      progress.classList.add("load");
    } else {
      isInViewport(progress);
    }
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
};

export default progress;
