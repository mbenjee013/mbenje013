
$(document).ready(function () {
    $('.about_link').click(function () {
        $('.wrapper').load('about.html');
    })
    
    $('.skill_link').click(function () {
        $('.wrapper').load('skills.html');
    })

    $('.projects_link').click(function () {
        $('.wrapper').load('project.html');
    })

    $('.contact_link').click(function () {
        $('.wrapper').load('contact.html');

    })

    $('.home_text button').click(function () {
        $('.wrapper').load('contact.html');

    })

    if ($(window).width()<900) {
        $('.menu').click(function(){
            $('header nav ul').slideDown();
            $('.menu').hide();
            $('.cancel').show();
            $('.cover').show();
        })
    
        $('.cancel').click(function(){
            $('header nav ul').slideUp();
            $('.menu').show();
            $('.cancel').hide();
            $('.cover').hide();
        })

        $('header nav ul li').click(function(){
            $('.menu').show();
            $('.cancel').hide();
            $('header nav ul ').slideUp();
            $('.cover').hide();
        })

        $('.cover').click(function(){
            $('.menu').show();
            $('.cancel').hide();
            $('header nav ul').slideUp();
            $('.cover').hide();
        })

    }

    $("form input").click(function () {
        $('.Sorry_sms').show();
    })

    $("form input").mouseleave(function () {
        $('.Sorry_sms').hide();
    })

    $("form textarea").click(function () {
        $('.Sorry_sms').show();
    })

    $("form textarea").click(function () {
        $('.Sorry_sms').hide();
    })

})
