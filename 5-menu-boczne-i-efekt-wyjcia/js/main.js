$(document).ready(function () {

    $('.hamburger').click(function () {

        $('.main-menu').toggleClass('open');

    });

    $('.main-menu a').click(function (event) {
        event.preventDefault();

        $('body').fadeOut(2000, function () {

            window.location.href = $(event.target).attr('href');

        });

    });

})