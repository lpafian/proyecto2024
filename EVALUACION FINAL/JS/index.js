$(document).ready(function(){
    $(".card img").click(function(){
        $(this).siblings().children("h5").hide();
    });
    $(".card img").click(function(){
        $(this).siblings().show();
    });
})