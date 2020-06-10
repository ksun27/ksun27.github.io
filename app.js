// TOGGLE HEADER-NAV
// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#header-menu').toggleClass('active');
    $('.nav-btn').toggleClass('active');
});

// Hide menu after clicking menu item
$('.dropdown-menu li').on('click', function(e) {
    $('#header-menu').removeClass('active');
    $('.nav-btn').removeClass('active');
});

$(document).ready(function() {

    if ($(window).scrollTop() >= 200) {
        $('#header').addClass('header-dark');
        $('#header').removeClass('header-clear-mod');
    } else {
        $('#header').addClass('header-clear-mod');
        $('#header').removeClass('header-dark');
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            $('#header').addClass('header-dark');
            $('#header').removeClass('header-clear-mod');
            $('#header').removeClass('header-clear');
            $('#fade').addClass('faded');
        } else {
            $('#header').addClass('header-clear-mod');
            $('#header').addClass('header-clear');
            $('#header').removeClass('header-dark');
            $('#fade').removeClass('faded');
        }
    });
});