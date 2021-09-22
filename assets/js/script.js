var positionX = 0;
var positonY = 0;
var nbrClickX = 0;
var nbrClickY = 0;

$('.arrowleft').on('click', function () {
    var planet = $(this).parents('.planet');
    if (nbrClickX < 1 && nbrClickX >= -1 ) {
        positionX = positionX - 66;
        planet.css({'left': positionX + '%'});
        nbrClickX = nbrClickX + 1;
    }
});

$('.arrowright').on('click', function () {
    var planet = $(this).parents('.planet');
    if (nbrClickX <= 1 && nbrClickX > -1) {
        positionX = positionX + 66;
        planet.css({'left': positionX + '%'});
        nbrClickX = nbrClickX - 1;
    }
});

$('.arrowtop').on('click', function () {
    var planet = $(this).parents('.planet');
    if (nbrClickY <= 1 && nbrClickY > -1 ) {
        positonY = positonY - 66;
        planet.css({'margin-top': positonY + '%'});
        nbrClickY = nbrClickY - 1;
        console.log(nbrClickY);
    }
});

$('.arrowbottom').on('click', function () {
    var planet = $(this).parents('.planet');
    if (nbrClickY < 1 && nbrClickY >= -1 ) {
        positonY = positonY + 66;
        planet.css({'margin-top': positonY + '%'});
        nbrClickY = nbrClickY + 1;
        console.log(nbrClickY);
    }
});

