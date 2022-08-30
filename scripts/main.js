const nav = document.querySelector(".nav__menu");
const burger = document.querySelector(".burger")

$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.nav__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

window.addEventListener("scroll", chechScroll);
function chechScroll(){
    let navPos = window.scrollY;
    
    if(navPos == 1){
        nav.classList.remove("active")
        burger.classList.remove("active")
    };
};
