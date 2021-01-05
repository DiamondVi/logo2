// let sliders = document.querySelectorAll('._swiper');
// if (sliders) {
//     for (let index = 0; index < sliders.length; index++) {
//         let slider = sliders[index];
//         if (!slider.classList.contains('swiper-bild')){
//             let slider_items = slider.children;
//             if (slider_items){
//                 for (let index = 0; index < slider_items.length; index++){
//                     let el = slider_items[index];
//                     el.classList.add('swiper-slide');
//                 }
//             }
// let slider_content = slider.innerHTML;
//             let slider_wrapper = document.createElement('div');
//             slider_wrapper.classList.add('swiper-wrapper');
//             slider_wrapper.innerHTML = slider_content;
//             slider.innerHTML = '';
//             slider.appendChild(slider_wrapper);
//             slider.classList.add('swiper-bild');
//         }
//         if (slider.classList.contains('_gallery')) {
//
//         }
//     }
//     sliders_bild_callback();
// }
//
// function sliders_bild_callback(params) {}
//
// let slider_about = new Swiper('.about__slider', {
//
// })
//
// observer: true;
// observerParents: true;
// slidersParView: 1,
// spaceBetween: 0,
//     autoHeight: true,
//     speed: 800,
//
//     navigation:{
//     nextEl: '.about__more .more__item_next',
//       prevEl:   '.about__more .more__item_prev',
// },
//
// on:{
//     lazyImageReady: function(){
//         ibg();
//     },
// }
// });


if (document.querySelector('.mainslider')) {
    new Swiper('.slider', {
        pagination: {
            el: '.mainslider__dots',
            clickable: true,
        },
        // loop: true,
    });

    let mainsliderImages = document.querySelectorAll('.mainslider__image');
    let mainsliderDots = document.querySelectorAll('.mainslider__dots .swiper-pagination-bullet');

    for (let index = 0; index < mainsliderImages.length; index++){
        const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
        mainsliderDots[index].style.backgroundImage = "url('" + mainsliderImage + "')";
    }
}