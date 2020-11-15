// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";
//
// jQuery(function() {
//   jQuery("body").css("color", "blue");
// });

const prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    items = document.querySelectorAll(".item"),
    dots = document.querySelectorAll(".dot"),
    itemWrapper = document.querySelectorAll(".carousel-inner");

let index = 2;

const activeSlide = n => {
    for (item of items) {
        item.classList.remove("active");
    }
    items[n].classList.add("active");
}

const nextSlide = () => {
  if (index === items.length - 1){
    index = 0;
  } else {
    index++;
  }
  activeSlide(index);
    activeItem(index);
}

const prevSlide = () => {
    if (index === 0){
        index = items.length - 1;
    } else {
        index--;
    }
    activeSlide(index);
    activeItem(index);
}
const activeItem = n => {
    for (item of dots) {
        item.classList.remove("active");
    }
    dots[n].classList.add("active");
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

dots.forEach((item, indexDot) =>{
    item.addEventListener("click", () =>{
        index = indexDot;
        activeSlide(index);
        activeItem(index);
    })
})



