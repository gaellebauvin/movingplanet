$(document).ready(function(){
    var planets = $('.planet');
    $.each(planets, function (index, div) {
        var randomX = Math.floor((Math.random()*125));
        var randomY = Math.floor((Math.random()*125));

        $(this).css({"inset" : randomX + "px auto auto " + randomY + "px"});
    })

    $('.planet').on('mouseup', function (){
        var arrayTop = $(this).css('top').split("p");
        var top = arrayTop[0];
        var arrayLeft = $(this).css('left').split("p");
        var left = arrayLeft[0];
        if (-50 <= top && top <= 50 && -50 <= left && left <= 50) {
        //la planete est bien placée
            console.log("bien placé");
        }  else {
        // Tant qu'on a pas trouvé dans quel interval se trouve la planète on continue, quand on a trouvé on lui donne un chiffre ( variable entier)
           var i = false;
           var entier = 1;
           var difference = 51;

           while( i !== true ){
               if( -difference <= top && top <= difference && -difference <= left && left <= difference){
                   console.log("pas bien place", entier )
                   i = true;
               } else {
                   entier = entier + 1;
                   difference = difference + 100;
               }
           }
        }
    })
});

$('.planet').draggable({
    containment: "document",
    scroll: false,
});
