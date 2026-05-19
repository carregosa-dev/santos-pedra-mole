// Menu dinãmico
const navBar = document.querySelector("#header");

document.addEventListener("scroll", ()=>{

    if (window.scrollY > 0) {
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }

});

// Menu mobile
const btnMenuMob = document.querySelector("#btn-menu-mob");
const line1 = document.querySelector(".line-menumob-1");
const line2 = document.querySelector(".line-menumob-2");
const menuMobile = document.querySelector("#menu-mobile");
const body = document.querySelector('body');

btnMenuMob.addEventListener("click", ()=> {
    line1.classList.toggle('ativo1');
    line2.classList.toggle('ativo2');
    menuMobile.classList.toggle('open');
    body.classList.toggle('no-overflow');
});

// Fechar menu ao clicar nos links
const navLinks = document.querySelectorAll(".menu-mobile .nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        line1.classList.remove('ativo1');
        line2.classList.remove('ativo2');
        menuMobile.classList.remove('open');
        body.classList.remove('no-overflow');
    });
});