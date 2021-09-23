(function ($) {

    function levelUp() {
        if ($('body').hasClass('level-up')) {
            $('.header h1').html('Bravo !');
            $('.buttons').html('<a href="" class="btn-next-level">Niveau suivant</a>');
        }
    }

    $(document).ready(function () {
        levelUp();
    });

})(jQuery);