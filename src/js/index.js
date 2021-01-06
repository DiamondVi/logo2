import dynamic_adapt from "./dynamic_adapt"
import sliders from "./sliders"

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

///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    let menuParents = document.querySelectorAll('.menu-page__parent>a');

    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("click", function (e) {
            menuParent.parentElement.classList.toggle('_active');
            e.preventDefault();
        });
    }
} else {

    let menuParents = document.querySelectorAll('.menu-page__parent');

    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("mouseenter", function (e) {
            menuParent.classList.add("_active");
        });
        menuParent.addEventListener("mouseleave", function (e) {
            menuParent.classList.remove("_active");
        });
    }
}
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

let _slideUp = (target, duration = 500) => {
    // debugger
    // target.style.transitionProperty = 'height, margin, padding';
    // target.style.transitionDuration = duration + 'ms';
    // Задаем текущую высоту статично нужно чтобы работал переход.
    target.style.height = target.offsetHeight + 'px' //= target.offsetHeight + 'px';
    //Обновляем стили.
    target.offsetHeight;
    // target.style.overflow = 'hidden';
    //Задаем текущую высоту в 0
    target.style.height = 0;
    // target.style.paddingTop = 0;
    // target.style.paddingBottom = 0;
    window.setTimeout(() => {
        // скрываем элемент через 500 милесекунд
        target.style.display = 'none';
        //убираем статичную высоту
        target.style.removeProperty('height');
        // target.style.removeProperty('padding-top');
        // target.style.removeProperty('padding-bottom');
        // target.style.removeProperty('margin-top');
        // target.style.removeProperty('margin-bottom');
        // target.style.removeProperty('overflow');
        // target.style.removeProperty('transition-duration');
        // target.style.removeProperty('transition-property');
        //убираем свойство слайд
        target.classList.remove('_slide');
    }, duration);
}
let _slideDown = (target, duration = 500) => {
    // debugger
    // target.style.removeProperty('display');
    // let display = window.getComputedStyle(target).display;
    // if (display === 'none')
    // let    display = 'block';
    // target.style.visibility = "hidden";
    //отображаем блок нужно чтобы сохранить текущую высоту
    target.style.display = 'block';
    //высчитываем текущую высоту и сохраняем в переменную
    const height = target.offsetHeight + 'px';
    // target.style.visibility = "visible";
    // debugger
    // target.style.overflow = 'hidden';
    //устанавливаем текущую высоту в 0
    target.style.height = 0;
    // target.style.paddingTop = 0;
    // target.style.paddingBottom = 0;
    // target.style.marginTop = 0;
    // target.style.marginBottom = 0;
    //обновляем отображение высоты = 0
    target.offsetHeight;
    // target.style.transitionProperty = 'height, margin, padding';
    // target.style.transitionDuration = duration + 'ms';
    // выводим сохраненную высоту и начинается анимация от 0 до нужного
    target.style.height = height;
    // target.offsetHeight;
    //window.getComputedStyle(target)
    // target.style.removeProperty('padding-top');
    // target.style.removeProperty('padding-bottom');
    // target.style.removeProperty('margin-top');
    // target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        //убираем статичную высоту
        target.style.removeProperty('height');
        // target.style.removeProperty('overflow');
        // target.style.removeProperty('transition-duration');
        // target.style.removeProperty('transition-property');
        //убираем свойство слайд
        target.classList.remove('_slide');
    }, duration);
}

// let height = 0;
let _slideToggle = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.overflow = 'hidden';
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        // let height = target.style.height;
        // debugger
        const display = window.getComputedStyle(target).display;
        if (display === 'none') {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    }
}

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');

menuPageBurger.addEventListener("click", function (e) {
    menuPageBurger.classList.toggle('_active');
    _slideToggle(menuPageBody);
});

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');

searchSelect.addEventListener('click', function (e) {
    searchSelect.classList.toggle('_active');
    _slideToggle(categoriesSearch);
});

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < checkboxCategories.length; index++) {
    const checkboxCategory = checkboxCategories[index];
    checkboxCategory.addEventListener("change", function (e) {
        checkboxCategory.classList.toggle('_active');

        let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

        if (checkboxActiveCategories.length > 0) {
            searchSelect.classList.add('_categories');
            let searchQuantity = searchSelect.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + " " + checkboxActiveCategories.length;
        } else {
            searchSelect.classList.remove('_categories');
        }
    });
}

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function ibg() {

    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
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


