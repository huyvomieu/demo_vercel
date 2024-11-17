var inputActive = document.querySelector("input[activeNavbar]")
if (inputActive) {
    var value = inputActive.value;
    var itemNav = document.querySelector(`a[${value}]`);
    itemNav.classList.add('active');
}
// delete movie
var modalDeleteOk = document.getElementById('btn-modal-delete');
var btnDeleteMovie = document.querySelectorAll("[btn-delete-movie]")
if (btnDeleteMovie) {
    btnDeleteMovie.forEach(movie => {
        movie.addEventListener("click", e => {
            let id = movie.getAttribute("data-id")
            modalDeleteOk.addEventListener("click", evt => {
                var formDelete = document.getElementById('form-delete');
                console.log(formDelete)
                formDelete.action = `/admin/movie/delete/${id}?_method=DELETE`;
                formDelete.submit()
            })
        })

    })
}
// delete user
var modalDeleteOk = document.getElementById('btn-modal-delete');
var btnDeleteMovie = document.querySelectorAll("[btn-delete-user]")
if (btnDeleteMovie) {
    btnDeleteMovie.forEach(movie => {
        movie.addEventListener("click", e => {
            let id = movie.getAttribute("data-id")
            modalDeleteOk.addEventListener("click", evt => {
                var formDelete = document.getElementById('form-delete');
                console.log(formDelete)
                formDelete.action = `/admin/movie/delete/${id}?_method=DELETE`;
                formDelete.submit()
            })
        })

    })
}
