import "../../blocks/slider/slider";
import "../../blocks/popup/popup";

let body = document.body;

body.querySelector(".js-video").addEventListener("click", function(){
    body.querySelector(".js-bg").hidden = true;
    body.querySelector(".js-btn").hidden = true;
    body.querySelector(".js-frame").src += "?autoplay=1&mute=0";
})

document.addEventListener("click", (e) => {
    if(e.target.closest("[href]")) {
        e.preventDefault();
        console.log("dffsdfsf");
    }
});