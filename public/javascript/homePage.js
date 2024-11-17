// home.js

// Sử dụng dữ liệu trong `bannersData` và `movieData`
const bannerContainer = document.querySelector(".banner_container");
const moviePlaying = document.querySelector(".list_movie_playing");
const moviePlayingComingSoon = document.querySelector(
    ".list_movie_coming_soon"
);
let slideIndex = 1;
showBanners(slideIndex);

function plusSlides(n) {
    showBanners((slideIndex += n));
}

function currentSlide(n) {
    showBanners((slideIndex = n));
}
function showBanners(n) {
    let i;
    let banners = document.getElementsByClassName("banner");
    let dots = document.getElementsByClassName("dot");
    if (n > banners.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = banners.length;
    }
    for (i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    banners[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

window.plusSlides = plusSlides;
window.currentSlide = currentSlide;

// Add event listener for banner
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

const dots = document.querySelectorAll(".trans .dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index + 1));
});

$(".list_movie_playing").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});

$(".list_movie_coming_soon").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});