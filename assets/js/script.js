$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});
$(document).ready(function () {
    $(".i-car-number").mask('S 000 SS 000');
});

$(document).ready(function () {
    $(".for-imps").mask('0000 000000');
});
$(document).ready(function () {
    $('select').styler();
})
$( function() {
    $( ".datepicker" ).datepicker();
} );
$(document).ready(function() {
    $(".yearpicker").yearpicker({
    });
});
class StarRating {
    constructor(parentClassName, childStarValueClassName) {
        this.starParent = document.getElementsByClassName(parentClassName)[0];
        if (childStarValueClassName) {
            this.starValue = document.querySelector('.' + parentClassName + ' .' + childStarValueClassName);
            if (this.starValue) {
                this.starValue.innerHTML = '0'
            }
        }
    }

    changeStar(value) {
        const childStars = this.starParent.children[0].children;
        for (let i = 0; i <= childStars.length - 1; i++) {
            childStars[i].classList.remove('stars-acts')
        }
        for (let i = 0; i <= value; i++) {
            childStars[i].classList.add('stars-acts')
        }
        if (this.starValue) {
            this.starValue.innerHTML = (value + 1).toString()
        }
    }
}

const starDetails = new StarRating('P-card-starts-js', 'P-star-value');
const starsModal = new StarRating('P-modal-stars', 'P-star-value');
//  ================ -menu-click-start- ================
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }

    });
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
});

//  ================ -menu-click-end- ================

$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


var swiper = new Swiper(".policy-slide", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var inswiper = new Swiper(".insurance__slider", {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '767': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});


var hoWswiper = new Swiper(".how-works__slider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var readSswiper = new Swiper(".read__slider", {
    slidesPerView: 3,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 3,
        },
        '1199': {
            slidesPerView: 2,
        },
        '780': {
            slidesPerView: 2,
        },
        '760': {
            slidesPerView: 1,
        },
        '310': {
            slidesPerView: 1,
        }
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});

$('.year').on('click', function () {
    $('.year_inp').toggleClass('year_inp__act')
    $('.data_inp').toggleClass('data__none')
});

$('.data').on('click', function () {
    $('.year_inp').removeClass('year_inp__act')
    $('.data_inp').removeClass('data__none')
});

$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();
});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close_this').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100)

});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)

        }
    })
});

$('.catalog-sort-name strong').on('click', function (e) {
    $(this).parent().toggleClass('click-open-leng');
    $('.categor-name').removeClass('cat-sort-act');
    $('.show-sort-name').removeClass('show-catalog-sort-act')
    e.stopPropagation()
});

$('.catalog-sort-drop ul li a').on('click', function () {
    var text_in = $('.catalog-sort-name strong').html();
    let selected_text = $(this).html();
    $('.catalog-sort-name strong').html(selected_text);
    $(this).html(text_in)
    $('.catalog-sort-name').removeClass('click-open-leng');

});

$(window).on('click', function (e) {
    let menuSort = $('.catalog-sort-name');
    if (e.target !== menuSort) {
        menuSort.removeClass('click-open-leng')
    }
});

$('.show-sort-name strong').on('click', function (e) {
    $(this).parent().toggleClass('show-catalog-sort-act');
    $('.catalog-sort-name').removeClass('click-open-leng')
    $('.categor-name').removeClass('cat-sort-act')

    e.stopPropagation()
});

$('.show-sort-drop ul li a').on('click', function () {
    var text_in = $('.show-sort-name strong').html();
    let selected_text = $(this).html();
    $('.show-sort-name strong').html(selected_text);
    $(this).html(text_in)
    $('.show-sort-name').removeClass('show-catalog-sort-act');

});
$(window).on('click', function (e) {
    let menuSort = $('.show-sort-name');
    if (e.target !== menuSort) {
        menuSort.removeClass('show-catalog-sort-act')
    }
});

$('.categor-name strong').on('click', function (e) {
    $(this).parent().toggleClass('cat-sort-act');
    $('.catalog-sort-name').removeClass('click-open-leng');
    $('.show-sort-name').removeClass('show-catalog-sort-act')

    e.stopPropagation()
});

$('.categor-drop ul li a').on('click', function () {
    var text_in = $('.categor-name strong').html();
    let selected_text = $(this).html();
    $('.categor-name strong').html(selected_text);
    $(this).html(text_in)
    $('.categor-name').removeClass('cat-sort-act');

});

$(window).on('click', function (e) {
    let menuSort = $('.categor-name');
    if (e.target !== menuSort) {
        menuSort.removeClass('cat-sort-act')
    }
});


$('.insu__question').on('click', function () {
    $(this).parent().parent().toggleClass('question__active')
});



$('.insured__glav').on('click',function (e) {
    $(this).parent().toggleClass('insured__open');
    e.stopPropagation()

});

$('.insured__down').on('click',function (e) {
    e.stopPropagation()
});


$(window).on('click', function (e) {
    let menuSort = $('.insured__apartment');
    if (e.target !== menuSort) {
        menuSort.removeClass('insured__open')
    }
});



$('.open__droups').on('click', function (e) {
    $(this).parent().toggleClass('show-catalog-sort-act');
    e.stopPropagation()
});

$('.droups__form ul li').on('click', function () {
    var text_in = $('.show-catalog-sort-act .open__droups input')[0];
    let selected_text = $(this).html();
    text_in.value = selected_text ;
    $('.insured__sear').removeClass('show-catalog-sort-act');
});
$(window).on('click', function (e) {
    let menuSort = $('.insured__sear');
    if (e.target !== menuSort) {
        menuSort.removeClass('show-catalog-sort-act')
    }
});


$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();


        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }

        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    var accordion = new Accordion($('#accordion'), false);
});


var servSwiper = new Swiper(".serv-rev__slid", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: ".serv-button-prev",
        nextEl: ".serv-button-next",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$(document).ready(function () {
    $('.search-block').on('click', function (e) {
        $(this).toggleClass('open-search');
        openSearchMenu(this, 'search-box');
        e.stopPropagation();
    });
    $('.search-box').on('click', function (e) {
        e.stopPropagation();
    });

    function openSearchMenu($this, search_box) {
        let search_block = $($this).find('.' + search_box);
        $(search_block).slideToggle(400);
    }
    $(document).on('click', function () {
        $('.search-box').slideUp();
        $('.search-block').removeClass('open-search')
    })
});