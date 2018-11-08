// 自行加入的JS請寫在這裡
$(function() {
  // 最新消息 列表
    var newsList_len = 300; // 超過300個字以"..."取代
    $(".news_list p").each(function(i) {
        if ($(this).text().length > newsList_len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, newsList_len - 1) + "...";
            $(this).text(text);
        }
    });
    // 最新消息 卡片
    var newsCard_len = 300; // 超過300個字以"..."取代
    $(".news_card p").each(function(i) {
        if ($(this).text().length > newsCard_len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, newsCard_len - 1) + "...";
            $(this).text(text);
        }
    });
    // 影音
    var video_len = 100; // 超過100個字以"..."取代
    $(".youtube").siblings('p').each(function(i) {
        if ($(this).text().length > video_len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, video_len - 1) + "...";
            $(this).text(text);
        }
    });
    // 活動花絮
    var photo_len = 100; // 超過100個字以"..."取代
    $(".multi_photo .pic").siblings('p').each(function(i) {
        if ($(this).text().length > photo_len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, photo_len - 1) + "...";
            $(this).text(text);
        }
    });
    // hitsory
    var history = 250; // 超過250個字以"..."取代
    $(".text_block").find('p').each(function(i) {
        if ($(this).text().length > history) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, history - 1) + "...";
            $(this).text(text);
        }
    });
    // fastlink 快捷
    $('.fastlink ul li a').each(function(index, el) {
        var linkTitle = $(this).attr('title');
        // console.log(linkTitle);
    });


    // 大廣告輪播 
    $('.mp_slider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        pauseOnHover: true,
        fade: true,
        cssEase: 'ease'
    });
    // 廣告輪播 
    $('.ad_banner ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]
    });
    // 跑馬燈
    $('.marquee ul').slick({
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true, //滑鼠移過後暫停自動撥放
        autoplaySpeed: 1500,
        speed: 1000,
        // centerMode: true,
        focusOnSelect: true,
        //      responsive: [{
        //          breakpoint: 990,
        //          settings: {
        //              slidesToShow: 2,
        //              slidesToScroll: 2
        //          }
        //      }, {
        //          breakpoint: 600,
        //          settings: {
        //              slidesToShow: 2,
        //              slidesToScroll: 2,
        //              vertical: false,
        //              verticalSwiping: false

        //          }
        //      }, {
        //          breakpoint: 480,
        //          settings: {
        //              slidesToShow: 1,
        //              slidesToScroll: 1,
        //              vertical: false,
        //              verticalSwiping: false
        //          }
        //      }]
    });
    // 圖文卡片式 
    $('.news_card ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 影音專區
    $('.multi_video ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 影音專區
    $('.multi_photo ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 便民專區
    $('.service ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        pauseOnHover: true,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });
    // 垂直圖片輪播
    $('.vertical_picture_link ul').slick({
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,

        speed: 1000,
        // centerMode: true,
        focusOnSelect: true,
        //      responsive: [{
        //          breakpoint: 990,
        //          settings: {
        //              slidesToShow: 2,
        //              slidesToScroll: 2
        //          }
        //      }, {
        //          breakpoint: 600,
        //          settings: {
        //              slidesToShow: 2,
        //              slidesToScroll: 2,
        //              vertical: false,
        //              verticalSwiping: false

        //          }
        //      }, {
        //          breakpoint: 480,
        //          settings: {
        //              slidesToShow: 1,
        //              slidesToScroll: 1,
        //              vertical: false,
        //              verticalSwiping: false
        //          }
        //      }]
    })
     $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.Slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
    });
    // 設定 main-menu高度同等 col
    function colHeight() {
        var WindowWidth = $(window).outerWidth();
        var cellDiv1 = $(".main_banner").find('.col');
        if (WindowWidth >= 768) {
            $(".main_banner .col").each(function() {
                var highestBox = 0;
                $(cellDiv1, this).each(function() {
                    if ($(this).height() > highestBox) {
                        highestBox = $(this).height();
                    }
                });
                $(cellDiv1, this).height(highestBox);
            });
        } else {
            $(".main_banner .col").each(function() {
                $(this).removeAttr('style');
            });
        }

    }
    //設定resize 計時器
    var menuResize;
    $(window).bind("load resize", function(event) {
        clearTimeout(menuResize);
        menuResize = setTimeout(function() {
            colHeight();
        }, 20);
    });
    colHeight();
    // font-size
    $('.font-size ul li a').each(function(index, el) {
        $(this).click(function(event) {
            $(this).parent().parent().find('a').removeClass('active');
            $(this).addClass('active');
            colHeight();
        });
    });
    $('.font-size').find('.size-s').click(function(event) {
        $('.main').removeClass('large-fontsize');
        $('.main').addClass('small-fontsize');

    });
    $('.font-size').find('.size-m').click(function(event) {
        $('.main').removeClass('small-fontsize').removeClass('large-fontsize');

    });
    $('.font-size').find('.size-l').click(function(event) {
        $('.main').removeClass('small-fontsize');
        $('.main').addClass('large-fontsize');

    });

    // 進階搜尋
    $('.advanced_search').hide();
    $('.btn_advanced_search').off().click(function(event) {
        $('.advanced_search').stop().slideToggle();
    });
    // 進階查詢
    $('.advance_block').hide();
    $('.advance_search button').off().click(function(e) {
        $('.advance_block').stop(true, true).slideToggle();
    });

});