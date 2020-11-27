import jquery from 'jquery';

jquery( function($){
    $('.js-header-ham').click( function(e){
        $(this).toggleClass('is-active');
        $('.b-header__links').toggleClass('is-active');
        $('.b-header__nav').toggleClass('is-active');
    } );

    

} );

// 