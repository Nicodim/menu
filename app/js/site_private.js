$(document).ready(function() {
    function e() {
        100 < window.pageYOffset ? ($("header.header__private").addClass("is__hidden"), $(".header__private .header__menu").slideUp(100)) : ($("header.header__private").removeClass("is__hidden"), $(".header__private .header__menu").slideDown(100))
    }
    $(".header__tel-btn").click(function(e) {
            e.preventDefault(),
                $(".header__private .header__contact").slideToggle()
        }),
        $(window).on("scroll", function() {
            e()
        }),
        $(".header__private .header__top-arr").click(function() {
            $("header.header__private").removeClass("is__hidden"),
                $(".header__private .header__menu").slideDown(100)
        }),
        $(window).width() < 980 && $(".footer__menu-top").click(function() {
            $(this).next("ul").slideToggle(100)
        });
    var t = location.hash;
    1 < t.length && $("html, body").animate({
            scrollTop: $(t).position().top - 100
        }, 500),
        $(".header__private .header__anchor-links a").click(function() {
            var e = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(e).position().top - 100
            }, 500)
        })
});

const slider = document.querySelector('.header__menu-small');
const slider_big = document.querySelector('.header__menu-big')
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});

slider_big.addEventListener('mousedown', (e) => {
    isDown = true;
    slider_big.classList.add('active');
    startX = e.pageX - slider_big.offsetLeft;
    scrollLeft = slider_big.scrollLeft;
});
slider_big.addEventListener('mouseleave', () => {
    isDown = false;
    slider_big.classList.remove('active');
});
slider_big.addEventListener('mouseup', () => {
    isDown = false;
    slider_big.classList.remove('active');
});
slider_big.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider_big.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider_big.scrollLeft = scrollLeft - walk;
});

// let isDown = false;
// let startX;
// let scrollLeft;
// let c = document.querySelector('.header__menu-overflow');

// function addEvent(element, eventType, handler) {
//     if (element.addEventListener)
//         element.addEventListener(eventType, handler);
//     else
//         element.attachEvent(eventType, handler);
// }
// addEvent(c, 'mouseup', function(e) {
//     let target = e.target.closest('.header__menu-small');
//     if (target && target.classList.contains('header__menu-small-item')) {
//         isDown = false;
//         e.target.classList.remove('active');
//     }
// });

// addEvent(c, 'mouseleave', function(e) {
//     let target = e.target.closest('.header__menu-small');
//     if (target && target.classList.contains('header__menu-small-item')) {
//         isDown = false;
//         e.target.classList.remove('active');
//     }
// });
// addEvent(c, 'mousemove', function(e) {
//     let target = e.target.closest('.header__menu-small');
//     if (target && target.classList.contains('header__menu-small-item')) {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - e.target.offsetLeft;
//         const walk = (x - startX) * 3; //scroll-fast
//         e.target.scrollLeft = scrollLeft - walk;
//     }
// });
// addEvent(c, 'mousedown', function(e) {
//     let target = e.target.closest('.header__menu-small');
//     if (target && target.classList.contains('header__menu-small-item')) {
//         isDown = true;
//         e.target.classList.add('active');
//         startX = e.pageX - e.target.offsetLeft;
//         scrollLeft = e.target.scrollLeft;
//     }
// });

$('.test_container').slick({
    prewArrow: '.information__item-slider-left',
    nextArrow: '.information__item-slider-right',
    arrows: false,
    fade: true,
    asNavFor: '.slider-edi'
});