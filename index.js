const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.menu-list');
    const menuList = document.querySelectorAll('.menu-list li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        menuList.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navReveal 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        menu.classList.toggle('toggle');
    });
}

navSlide();

$(function () {
    var header = $("#mynav");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('nav2');
}
    else {
        header.removeClass('nav').addClass('nav2');
    }
    });
});


var elementPosition = $('.page-scroll').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('.fix-scroll').css('position','fixed').css('top','0');
        } else {
            $('.fix-scroll').css('position','static');
        }    
});