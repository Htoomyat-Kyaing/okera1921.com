let backToTopLink = document.querySelector(".top-link");
let previousScrollPosition = 0;

const isScrollingDown = () => {
  let goingDown = false;
  let scrollPosition = window.pageYOffset;

  if (scrollPosition > previousScrollPosition) {
    goingDown = true;
  }

  previousScrollPosition = scrollPosition;
  return goingDown;
};

const handleScroll = () => {
  let viewportHeight = window.innerHeight;
  let scrollPosition = window.pageYOffset;

  if (isScrollingDown()) {
    backToTopLink.setAttribute("aria-hidden", "true");
  } else if (isScrollingDown() === false && scrollPosition > viewportHeight) {
    backToTopLink.setAttribute("aria-hidden", "false");
  }
};

// the throttle is provided by the lodash library
const scrollThrottle = _.throttle(handleScroll, 100);
window.addEventListener("scroll", scrollThrottle);