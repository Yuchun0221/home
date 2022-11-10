$(document).ready(function() {
    $('ul li button').on('click', function() {
        $(this).addClass('toggle').toggleClass('fa-close fa-bars');
        $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            $(this).removeClass('toggle');
        });
    });
});