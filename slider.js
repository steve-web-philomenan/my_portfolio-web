


const swiper = new Swiper('.swiper', {
  loup: true,
  grabCursor: true,
  spaceBetween: 30,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 breakpoints: {
   0:{
     slidesPerView: 1
   },
   620:{
     slidesPerView: 2
   },
     1024:{
       slidesPerView: 3
     }
 }
});

alert('Bonjour , vous etes sur le site de Styve Lumumba, Developpeur web junior. Bienvenue sur mon site.');