$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    })

    $('.main_slide').slick({
        arrows: false,
        // vertical: true, 위로 넘어가게 만들기
        //fade: true, 화면 사라지면서 넘어가는 거
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
    })



    $('.product_slide').slick({
        arrows: false,
        dots: true,
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

