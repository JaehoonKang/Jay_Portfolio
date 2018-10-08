$(document).ready(function(){

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var type = new Typed(".typed", {
        strings: ["Future Tax Technology Professional", "Accounting Major", "Computer Science Minor"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    })
});