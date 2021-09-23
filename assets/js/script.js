$('.planet').on('mouseup', function (){
    if ($(this).css('inset') >= "0px 0px 0px 0px" && $(this).css('inset') <= "50px 50px 50px 50px"){
        //la planete est bien placée
    }
})
$(document).ready(function(){
    var planets = $('.planet');
    $.each(planets, function (index, div) {
        var randomX = Math.floor((Math.random()*125));
        var randomY = Math.floor((Math.random()*125));

        $(this).css({"inset" : randomX + "px auto auto " + randomY + "px"});
    })
});

$('.planet').draggable();
