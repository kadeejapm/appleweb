var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     
  });

   var menu = document.querySelector("ri-menu-3-line");
   var clo = document.querySelector("ri-close-circle-line");
   var nav = document.querySelector("respo-nav");


   menu.addEventListener("click",function(){
         nav.style.top = "0%";
   })

   
   clo.addEventListener("click",function(){
    nav.style.top = "-100%";
})


var Store = document.querySelector('#store');
var subMenu = document.querySelector('.subMenu');
  

Store.addEventListener("mousemove",function(){
    subMenu.style.top = "0%";

})

Store.addEventListener("mouseleave",function(){
    subMenu.style.top = "-100%";

})






