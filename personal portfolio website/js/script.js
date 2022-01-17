$(document).ready(function(){
    $('.fa-bars').click(function()
    {
        $(this).toggleClass('fa-times');
        $('.nav--bar').toggleClass('nav--toggle');
    });
    $('.fa-moon').click(function(){
        $('body').toggleClass('dark--mode');

    });

   
    $(window).on('load scroll',function()
    {
        $('.fa-bars').removeClass('fa-times');
        $('.nav--bar').removeClass('nav--toggle');
       
    })
   
       
   
});