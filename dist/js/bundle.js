/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/dynamic_adapt.js":
/*!*********************************!*\
  !*** ./src/js/dynamic_adapt.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

const parent_original = document.querySelector(".menu__body");
const parent = document.querySelector(".menu__list");
const item = document.querySelector(".actions-header");

window.addEventListener("resize", function (event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 640) {
        if (!item.classList.contains("done")) {
            parent.classList.add("done");
        }
    } else {
        if (item.classList.contains("done")) {
            parent_original.insertBefore(item, parent_original.children[2]);
            item.classList.remove("done");
        }
    }
});

(function () {
    let original_positions = [];
    let da_elements = document.querySelectorAll("[data-da]");
    let da_elements_array = [];
    let da_match_media = [];

    if (da_elements.length > 0) {
        let number = 0;
        for (let index = 0; index < da_elements.length; index++) {
            const da_element = da_elements[index];
            const da_move = da_element.getAttribute("data-da");
            const da_array = da_move.split(",");
            if (da_array.length == 3) {
                da_element.setAttribute("data-da-index", number);
                original_positions[number] = {
                    "parent": da_element.parentNode,
                    "index": index_in_parent(da_element)
                };
                da_elements_array[number] = {
                    "element": da_element,
                    "destination": document.querySelector("." + da_array[0].trim()),
                    "place": da_array[1].trim(),
                    "breakpoint": da_array[2].trim()
                }
                number++;
            }
        }
        dynamic_adapt_sort(da_elements_array);
        for (let index = 0; index < da_elements_array.length; index++) {
            const el = da_elements_array[index];
            const da_breakpoint = el.breakpoint;
            const da_type = "max";

            da_match_media.push(window.matchMedia("(" + da_type + "-width:" + da_breakpoint + "px)"));
            da_match_media[index].addListener(dynamic_adapt);
        }
    }

    function dynamic_adapt(e) {
        for (let index = 0; index < da_elements_array.length; index++) {
            const el = da_elements_array[index];
            const da_element = el.element;
            const da_destination = el.destination;
            const da_plase = el.place;
            const da_breakpoint = el.breakpoint;
            const da_classname = "_dynamic_adapt_" + da_breakpoint;

            if (da_match_media[index].matches) {
                if (!da_element.classList.contains(da_classname)) {
                    let actual_index;
                    if (da_plase == "first") {
                        actual_index = index_of_elements(da_destination)[0];
                    } else if (da_plase == "last") {
                        actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];
                    } else {
                        actual_index = index_of_elements(da_destination)[da_plase];
                    }
                    da_destination.insertBefore(da_element, da_destination.children[actual_index]);
                    da_element.classList.add(da_classname);
                }
            } else {
                if (da_element.classList.contains(da_classname)) {
                    dynamic_adapt_back(da_element);
                    da_element.classList.remove(da_classname);
                }
            }
        }
        custom_adapt();
    }

    dynamic_adapt();

    function dynamic_adapt_back(el) {
        const da_index = el.getAttribute("data-da-index");
        const original_place = original_positions[da_index];
        const parent_place = original_place["parent"];
        const index_place = original_place["index"];
        const actual_index = index_of_elements(parent_place, true)[index_place];
        parent_place.insertBefore(el, parent_place.children[actual_index]);
    }

    function index_in_parent(el) {
        var children = Array.prototype.slice.call(el.parentNode.children);
        return children.indexOf(el);
    }

    function index_of_elements(parent, back) {
        debugger
        const children = parent.children;
        const children_array = [];
        for (let i = 0; i < children.length; i++) {
            const children_element = children[i];
            if (back) {
                children_array.push(i);
            } else {
                if (children_element.getAttribute("data-da") == null) {
                    children_array.push(i);
                }
            }
        }
        return children_array;
    }

    function dynamic_adapt_sort(arr) {
        arr.sort(function (a, b) {
            if (a.breakpoint > b.breakpoint) {
                return -1
            } else {
                return 1
            }
        });
        arr.sort(function (a, b) {
            if (a.place > b.place) {
                return 1
            } else {
                return -1
            }
        });
    }

    function custom_adapt() {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    window.addEventListener("resize", function (event) {

    })
})()


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_adapt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic_adapt */ "./src/js/dynamic_adapt.js");
/* harmony import */ var _dynamic_adapt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dynamic_adapt__WEBPACK_IMPORTED_MODULE_0__);
;

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

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

let _slideUp = (target, duration = 500) => {
        // debugger
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height //= target.offsetHeight + 'px';
        target.offsetHeight;
        // target.style.overflow = 'hidden';
        target.style.height = 0;
        // target.style.paddingTop = 0;
        // target.style.paddingBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        // target.style.removeProperty('padding-top');
        // target.style.removeProperty('padding-bottom');
        // target.style.removeProperty('margin-top');
        // target.style.removeProperty('margin-bottom');
        // target.style.removeProperty('overflow');
        // target.style.removeProperty('transition-duration');
        // target.style.removeProperty('transition-property');
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
    target.style.display = 'block';
    height =  target.offsetHeight + 'px';
    // target.style.visibility = "visible";
    // debugger
    // target.style.overflow = 'hidden';

    target.style.height = 0;
    // target.style.paddingTop = 0;
    // target.style.paddingBottom = 0;
    // target.style.marginTop = 0;
    // target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height;
    // target.offsetHeight;
    //window.getComputedStyle(target)
    // target.style.removeProperty('padding-top');
    // target.style.removeProperty('padding-bottom');
    // target.style.removeProperty('margin-top');
    // target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        // target.style.removeProperty('overflow');
        // target.style.removeProperty('transition-duration');
        // target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}

let open = false;
let height = 0;
let _slideToggle = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        // let height = target.style.height;
        // debugger
        if (!open) {
            open = !open;
            return _slideDown(target, duration);
        } else {
            open = !open;
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/scss/style.scss");
/******/ })()
;
//# sourceMappingURL=bundle.js.map