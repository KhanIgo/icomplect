import jquery from 'jquery';

jquery( function($){

    $('.js-tab-content').not('.is-active').css('height', '0px');

    $('.js-tab').click( function(e){
        e.preventDefault();
        var time = 400;
        var $this = $(this);
        $this.addClass('is-active').siblings('.js-tab').removeClass('is-active');

        var target = $this.data('target-tab');
        target = '#'+target;
        var $target = $(target);
        var $siblings = $target.siblings('.js-tab-content');
        $siblings.animate({ height: '0px'}, time);
        var targethHeight = $target.find('>div').outerHeight();
        $target.animate({ height: targethHeight+'px'}, time);
    } );
} );
