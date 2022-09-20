"use strict";
const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);
highlight.style.width = "52px";
highlight.style.height = "28px";
highlight.style.transform = "translate(127px,100px)";
highlight.style.opacity = "0";

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  highlight.style.opacity = "1";
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
