let searchBtn = document.querySelector("#btn-search");
let searchBox = document.querySelector(".search-container");
let loginBtn = document.querySelector("#btn-login");
let loginFormContainer = document.querySelector(".login-form");
let closeForm = document.querySelector("#close");
let menuNav = document.querySelector("#menu-nav");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".video-btn");
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBox.classList.add('not-visible');

}
menuNav.addEventListener('click', () => {
    menuNav.classList.toggle('fa-times');
    menuNav.classList.toggle('fa-bars');

    navbar.classList.toggle('active');
})
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBox.classList.toggle('not-visible');
})
loginBtn.addEventListener('click', () => {
    loginFormContainer.classList.add('active');
})
closeForm.addEventListener('click', () => {
    loginFormContainer.classList.remove('active');
})
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})


$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            767:{
                items:2,
                nav:false
            },
            991:{
                items:3,
                nav:false,
            }
        }
    });
});