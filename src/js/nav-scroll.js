import jquery from 'jquery';

jquery(function ($) {
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
                $("html,body").animate({
                        scrollTop: target.offset().top,
                    },
                    1000
                );
            }
        }

        $(this).closest('li').addClass('is-active').siblings('li').removeClass('is-active');
        $(this).closest('.b-nav').removeClass('is-active');
        
    });

});