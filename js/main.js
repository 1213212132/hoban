$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    })

    $('.main_slide').slick({
        arrows: false,
        fade: true,
        // vertical: true, 위로 넘어가게 만들기
        //fade: true, 화면 사라지면서 넘어가는 거
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        pauseOnFocus: false,

    })

    $('.arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    });
    $('.arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });

    $('.product_slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
})

