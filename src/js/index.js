import jquery from 'jquery';
window.jQuery = jquery;

require('./ham');
require('./nav-scroll');
require('./tab')
require('./map')
require('./video')
require('./starting')
require("@fancyapps/fancybox");


jquery(function($) {
    $(".js-fancy-pdf").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        autoSize: true,
        type: 'iframe',
        iframe: {
            preload: false // fixes issue with iframe and IE
        }
    });
});

// window.jQuery = jquery;
// window.$ = jquery;