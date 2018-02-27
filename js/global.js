//滚动改变导航栏样式
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav");
        }
    });
});
//淡入效果
$(document).ready(function () {
    $(window).on('scroll', function () {
        $(this).scrollTop() > 300 ? $('#bg1').fadeIn(800) : $('#bg1').fadeOut();
        $(this).scrollTop() > 300 ? $('#bg2').fadeIn(1300) : $('#bg2').fadeOut();
        $(this).scrollTop() > 300 ? $('#bg3').fadeIn(1800) : $('#bg3').fadeOut();
        $(this).scrollTop() > 300 ? $('#bg4').fadeIn(2300) : $('#bg4').fadeOut();
        $(this).scrollTop() > 300 ? $('#bg5').fadeIn(2800) : $('#bg5').fadeOut();
    });

});
//变色效果
$(document).ready(function () {
    $('#Web').on('mouseover', function () {
        $(this).attr('src', 'image/web1.png');
        $('#text1').css('color', '#fff');
        $('#bg1').css('background-color', '#5f2373');
    });
    $('#Web').on('mouseout', function () {
        $(this).attr('src', 'image/web.png');
        $('#text1').css('color', '#333');
        $('#bg1').css('background-color', 'transparent');
    });
    $('#Android').on('mouseover', function () {
        $(this).attr('src', 'image/ad2.png');
        $('#text2').css('color', '#fff');
        $('#bg2').css('background-color', '#5f2373');
    });
    $('#Android').on('mouseout', function () {
        $(this).attr('src', 'image/ad.png');
        $('#text2').css('color', '#333');
        $('#bg2').css('background-color', 'transparent');
    });
    $('#ios').on('mouseover', function () {
        $(this).attr('src', 'image/ip2.png');
        $('#text3').css('color', '#fff');
        $('#bg3').css('background-color', '#5f2373');
    });
    $('#ios').on('mouseout', function () {
        $(this).attr('src', 'image/ip.png');
        $('#text3').css('color', '#333');
        $('#bg3').css('background-color', 'transparent');
    });
    $('#ui').on('mouseover', function () {
        $(this).attr('src', 'image/UI2.png');
        $('#text4').css('color', '#fff');
        $('#bg4').css('background-color', '#5f2373');
    });
    $('#ui').on('mouseout', function () {
        $(this).attr('src', 'image/UI.png');
        $('#text4').css('color', '#333');
        $('#bg4').css('background-color', 'transparent');
    });
    $('#qr').on('mouseover', function () {
        $(this).attr('src', 'image/qr2.png');
        $('#text5').css('color', '#fff');
        $('#bg5').css('background-color', '#5f2373');
    });
    $('#qr').on('mouseout', function () {
        $(this).attr('src', 'image/qr.png');
        $('#text5').css('color', '#333');
        $('#bg5').css('background-color', 'transparent');
    });

});























