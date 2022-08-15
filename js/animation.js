// $(".introimg").animate({"left":"-1000px"},"slow");

$(window).scroll(function () {
    $(".content").css("display","block");
    if ($(this).scrollTop() > 100) {
        $('.about').fadeIn(1000);
        // $('.myskillcontent').addClass('js-slidein');
    } else {
        $('.about').fadeOut();
    }
});
function complete() {
    scroll();
}
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.myskills').fadeIn(1000);
        // $('.myskillcontent').addClass('js-slidein');
    } else {
        $('.myskills').fadeOut();
    }
});
function complete() {
    scroll();
}
$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('.projects').fadeIn(1000);
        // $('.myskillcontent').addClass('js-slidein');
    } else {
        $('.projects').fadeOut();
    }
});
function complete() {
    scroll();
}