$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:34,
        nav:true,
        items:2,
        autoWidth: true,
        lazyLoad:true,
        dots: false,
        navText: ["<img src='../assets/left.png'>","<img src='../assets/right.png'>"],
    });
});