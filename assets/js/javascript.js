document.querySelectorAll('.main-banner__img img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-banner-content__img--btn').src = src;
    }
});

var swiper = new Swiper(".main-evaluate-content", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        768: {
            slidesPerView: 2,
        },
    },
    loop : true,
    grabCursor: true,
  });
 function openMenu() {
  document.location.href="menu.html"
 }
 function goHome() {
    document.location.href="index.html"
 }