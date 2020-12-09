import dynamic_adapt from "./dynamic_adapt"

let menu__icon = document.querySelector('.icon-menu');
let menu__body = document.querySelector('.menu__body');
let back = document.querySelector('body');
let menu__list = document.querySelector('.menu__list');

menu__icon.onclick = function () {
    menu__icon.classList.toggle('_active');
    menu__body.classList.toggle('_active');
    back.classList.toggle('lock');
}

menu__list.onclick = function () {
    menu__icon.classList.remove('_active');
    menu__body.classList.remove('_active');
    back.classList.remove('lock');
}


// let isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
//     },
//     any: function () {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };
//
// let body = document.querySelector("body");
//
// if (isMobile.any()) {
//     body.classList.add("touch");
//     let arrow = document.querySelectorAll(".menu__arrow");
//     for (let i = 0; i < arrow.length; i++) {
//         let arrow2 = arrow[i].querySelectorAll(".arrow");
//         let thisLink = arrow2[i].previousElementSibling;
//         let subMenu = arrow2[i].nextElementSibling;
//         let thisArrow = arrow2[i];
//
//         thisLink.classList.add("parent");
//         arrow[i].addEventListener("click", function (e) {
//             // e.preventDefault();
//             e.stopPropagation()
//             subMenu.classList.toggle("open");
//             thisArrow.classList.toggle("active");
//         });
//     }
// } else {
//     body.classList.add("mouse");
// }


