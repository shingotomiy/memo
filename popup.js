jQuery(document).ready(function($) {
    var agent = navigator.userAgent;
    var animationFlag = 1;
    jQuery(window).scroll(function() {
        var ScrBtmH = jQuery(document).height();
        var ScrBtmPos = jQuery(window).height() + jQuery(window).scrollTop();
        if (ScrBtmPos >= $('#emc-sc-gimmick_cta').offset().top) {
            if (animationFlag == 1) {
                animationFlag = 2;
                $('#mlink_footer,.close').show();
                mlinkAni();
            }
        };
    });

    if (agent.search(/iPhone/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1) {
        // スマホ用
        function mlinkAni() {
            $('#mlink_footer .bar_img').animate({
                left: '0px',
                opacity: 1,
            }, 500, function() {
                $('#mlink_footer .pdct_img').animate({
                    right: '-20px',
                    opacity: 1
                }, 300, function() {
                    $('#mlink_footer .txt_img').animate({
                        bottom: '-220px',
                        opacity: 1,
                    }, 350, function() {
                        $('#mlink_footer .txt_arrow').animate({
                            bottom: '-120px',
                            opacity: 1,
                        }, 350);
                        $('#mlink_footer .btn_img , #mlink_footer .arrow_img').animate({
                            left: '140px',
                            bottom: '-240px',
                            opacity: 1,
                        }, 250);
                    });
                });
            });
        };
    } else {
        // PC用
        function mlinkAni() {
            $('#mlink_footer .bar_img').animate({
                top: '-70px',
                left: '0px',
                opacity: 1,
            }, 500, function() {
                $('#mlink_footer .pdct_img').animate({
                    right: '-150px',
                    opacity: 1
                }, 300, function() {
                    $('#mlink_footer .txt_img').animate({
                        bottom: '-350px',
                        opacity: 1,
                    }, 350, function() {
                        $('#mlink_footer .txt_arrow').animate({
                            bottom: '-150px',
                            opacity: 1,
                        }, 350);
                        $('#mlink_footer .btn_img, #mlink_footer .arrow_img').animate({
                            left: '200px',
                            bottom: '-360px',
                            opacity: 1,
                        }, 250);
                    });
                });
            });
        };
    }

    $('.close').click(function() {
        $('#mlink_footer,.close').fadeOut('slow');
    });
});
