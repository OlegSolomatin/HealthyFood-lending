$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:34,
        nav:true,
        responsive: {
            0: {
                item: 1,
            },
            767.7 :{
                item: 2,
            }
        },
        items:2,
        autoWidth: true,
        lazyLoad:true,
        dots: false,
        navText: ["<img src='https://olegsolomatin.github.io/HealthyFood-lending/assets/right.png'>","<img src='https://olegsolomatin.github.io/HealthyFood-lending/assets/right.png'>"],
    });
});