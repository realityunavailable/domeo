let popUp = document.body.querySelector(".popup");
let icon = document.body.querySelector(".nav-icon");

icon.addEventListener("click", function(e) {
    document.body.classList.toggle("body-lock");
    icon.classList.toggle("open");
    popUp.classList.toggle("is-open");
});

// при клике на ссылук в попапе, попап закрывается 

document.addEventListener("click", function(e) {
    const link = e.target.closest(".popup__link")
    if (link && popUp.classList.contains("is-open")) {
        popUp.classList.remove("is-open");
        icon.classList.remove("open");
        document.body.classList.remove("body-lock");
    }
    e.preventDefault();
})
