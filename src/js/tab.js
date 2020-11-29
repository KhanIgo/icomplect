import jquery from 'jquery';

jquery( function($){
    $('.js-tab').click( function(e){
        e.preventDefault();
        var time = 250;
        var $this = $(this);
        var target = $this.data('target-tab');
        target = '#'+target;
        var $target = $(target);
        var $siblings = $target.siblings('.js-tab-content');
        $this.addClass('is-active').siblings('.js-tab').removeClass('is-active');

        
        $siblings.removeClass('is-active');
        setTimeout( function(){ 
            $siblings.css('display', 'none');
            $target.css('display', 'block').addClass('is-active');;
        }, time);
    } );

    

} );
