function recolheMenu(event) {
    const aside = event.target;
    aside.classList.toggle("mnu-arrow-left-min");
    document.getElementsByTagName("aside")[0].classList.toggle("aside-min");
    document.getElementsByTagName("main")[0].classList.toggle("main-min");
    document.getElementsByTagName("nav")[0].classList.toggle("menu-lateral-min");
    document.querySelector(".aside-top > img").classList.toggle("logo-mobile-min");
    document.querySelector(".user-logout").classList.toggle("user-logout-min");
    
}