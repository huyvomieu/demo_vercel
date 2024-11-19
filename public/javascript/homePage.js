// home.js
import { bannersData, movieData } from "./fakeData.js";

// Sử dụng dữ liệu trong `bannersData` và `movieData`
const bannerContainer = document.querySelector(".banner_container");
const moviePlaying = document.querySelector(".list_movie_playing");
const moviePlayingComingSoon = document.querySelector(
    ".list_movie_coming_soon"
);
console.log(moviePlayingComingSoon);

// Tạo danh sách banner
let str = "";
bannersData.forEach((banner) => {
    str += `
        <div class="banner fade">
            <img src="./image/homePage_img/${banner.img}" alt="" />
            <div class="content">
                <h1>${banner.title}</h1>
                <p class="intro">Giới thiệu phim</p>
                <p class="ct">${banner.details}</p>
                <div class="content_child">
                    <h2>Thể loại</h2>
                    <p>${banner.category}</p>
                    <div class="response">
                        <div class="rp">
                            <img src="./image/homePage_img/cib_imdb.svg" alt="" />
                            <p>${banner.point}</p>
                        </div>
                        <div class="rp">
                            <img src="./image/homePage_img/zondicons_time.svg" alt="" />
                            <p>${banner.duration}</p>
                        </div>
                    </div>
                    <button class="details">Chi tiết</button>
                </div>
            </div>
        </div>
    `;
});

bannerContainer.innerHTML = str;

// Tạo danh sách phim đang chiếu
let str_movie_playing = "";
movieData.forEach((movie) => {
    str_movie_playing += `
        <div class="movie_playing">
            <div class="poster">
                <img src="./image/homePage_img/${movie.poster}" alt="" />
            </div>
            <div class="title">${movie.title}</div>
            <div class="inf">
                <div class="inf-detail">
                    <p>
                        <i class="fa-solid fa-video"></i>${movie.location}
                    </p>
                    <p>
                        <i class="fa-solid fa-calendar"></i>${movie.date}
                    </p>
                </div>
                <button id="book_ticket">Đặt vé</button>
            </div>
        </div>
    `;
});
moviePlayingComingSoon.innerHTML = str_movie_playing;
moviePlaying.innerHTML = str_movie_playing;

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
