import jquery from 'jquery';

jquery(function ($) {
    const winW = window.innerWidth;
    $("a.js-nav-link").click(function (e) {
        e.preventDefault();
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                var scrollPos = target.offset().top;
                if(winW<800) scrollPos -= 50;
                $("html,body").animate({
                        scrollTop: scrollPos,
                    },
                    1000
                );
            }
        }

        $(this).closest('li').addClass('is-active').siblings('li').removeClass('is-active');
        $(this).closest('.b-nav').removeClass('is-active');
        $('.b-header__links').removeClass('is-active');
        $('.js-header-ham').removeClass('is-active');
        
    });

});