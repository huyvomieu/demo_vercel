var searchinput = document.getElementById("search-input");
var searchResults = document.querySelector(".search-results");
// Biến để lưu timeout
let debounceTimeout;

function getListMovie(e) {
    let valueSearch = searchinput.value;
    if (!valueSearch) {
        searchResults.style.display = "none";
        return;
    } else {
        fetch(`${window.location.origin}/api/v1/movie/index?q=${valueSearch}`)
            .then((response) => response.json())
            .then((data) => {
                let movies = [...data];
                if (movies.length == 0) {
                    console.log("ok");
                    searchResults.innerHTML = `<div> <b> Phim hiện chưa có trong danh sách! </b> </div>`;
                } else {
                    searchResults.innerHTML = "";
                    const htmls = movies
                        .map((movie) => {
                            return `
                        <div class='item'>
                            <a href='/movie/${movie._id}'>
                                <div class='img'>
                                    <img src= '${movie.avatar}' width='30px' >
                                </div>
                                <div class= 'content'>
                                    <div class='title'>${movie.name}</div>
                                    <div class='price'>${movie.author}</div>
                                </div>
                            </a>
                        </div>
                        `;
                        })
                        .join("");
                    searchResults.innerHTML = htmls;
                    searchResults.style.display = "block";
                }
            })
            .catch(() => {
                console.log("error");
            });
    }
}
if (searchinput) {
    searchinput.addEventListener("keyup", () => {
        // Xóa timeout trước đó (nếu có)
        clearTimeout(debounceTimeout);
        // Đặt timeout mới
        debounceTimeout = setTimeout(() => {
            getListMovie();
        }, 2000); // 2 giây
    });

    document
        .getElementById("search_btn")
        .addEventListener("click", function () {
            getListMovie();
        });
}
