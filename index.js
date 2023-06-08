
// Carousel JS
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].classList.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].classList.add("active");
}

// Menu Zoom In JS
const menuOpen = '[data-open]';
const menuClose = '[data-close]';
const visible = 'visible';

const openMenu = document.querySelectorAll(menuOpen);
const closeMenu = document.querySelectorAll(menuClose);

console.log(closeMenu)

for(const el of openMenu) {
  el.addEventListener('click', function() {
    const menuId = this.dataset.open;
    document.getElementById(menuId).classList.add(visible)
  })
}

for(const el of closeMenu) {
  el.addEventListener('click', function() {
    const menuId = this.dataset.close;
    this.parentElement.classList.remove(visible);
    this.parentElement.parentElement.classList.remove(visible);
  })
}
