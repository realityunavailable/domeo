let header = document.querySelector(".header");
let popup = document.querySelector(".popup");
let btn = document.querySelector(".js-popup-link");

export default function scrollToLink(){
    document.body.addEventListener('click', ({target})=>{
        let href;
    
        if(target.closest("[href]")){
            href = target.closest("[href]").hasAttribute('href');
        } else{
            return;
        }
    
        if(href && target.closest("[href]").getAttribute("href").includes("#")){
            href = target.closest("[href]").getAttribute("href").replace("#", "");
            const scrollNode = document.querySelector(`.${href}`);
            window.scrollTo({
                top: scrollNode.getBoundingClientRect().top + pageYOffset - header.offsetHeight ,
                behavior: "smooth",
            });
            popup.classList.remove("is-open");
            document.body.classList.remove("is-lock");
            btn.classList.remove("open");
        }
    })

    btn.addEventListener("click", () => {
        btn.classList.toggle("open");
        popup.classList.toggle("is-open");
        document.body.classList.toggle("is-lock");
    });

}
