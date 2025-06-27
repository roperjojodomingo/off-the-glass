document.querySelectorAll(".mega-menu").forEach(item => {
  const content = item.querySelector(".mega-menu__content");
  let closeTimeout;

  item.addEventListener("mouseenter", () => {
    item.setAttribute("open", "");
    clearTimeout(closeTimeout);
  });

  item.addEventListener("mouseleave", () => {
    closeTimeout = setTimeout(() => {
      item.removeAttribute("open");
    }, 100);  
  });

  content.addEventListener("mouseenter", () => {
    clearTimeout(closeTimeout);
  });

  content.addEventListener("mouseleave", () => {
    closeTimeout = setTimeout(() => {
      item.removeAttribute("open");
    }, 100);
  });
});
