import jquery from 'jquery';

jquery(function($) {
    $('.js-starting-toggle').click(function(e){
        var $links = $('.b-starting__offer-link');
        var $this = $(this);
        $links.addClass('hidden');

        if( $this.is('.b-starting__toggle_seller')){
            $links.eq(0).removeClass('hidden');
        }
        else if( $this.is('.b-starting__toggle_customer')){
            $links.eq(1).removeClass('hidden');
        }
    });
});


