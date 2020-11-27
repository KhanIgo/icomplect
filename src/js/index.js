import jquery from 'jquery';

require('./ham.js');


jquery( function($){
    console.log( window.innerWidth );
    let winW = window.innerWidth;
    if(winW<1450){
        let scale = winW/1450;
        let transform = 'scale('+ scale +')';
        console.log('transform', transform); 
        // $('body').css('transform', transform);
        // $('body').css('zoom', scale);

    }

    

} );


// window.jQuery = jquery;
// window.$ = jquery;