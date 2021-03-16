$(function() { 

    /* Fixed header */ 
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    checkScroll(introH, scrollPos)

    $(window).on('scroll resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(introH, scrollPos)
    });

    function checkScroll(introH, scrollPos) {
        if( scrollPos > introH ) {
            header.addClass('fixed');

        } else {
            header.removeClass('fixed');
        }
    }


    /*  Smooth scroll */ 
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOfferset = $(elementId).offset().top;

        nav.removeClass('show')

        console.log(elementOfferset);

        $('html, body').animate({
            scrollTop: elementOfferset - 57
        }, 700);
    
    });


    /* Nav Toggle */ 
    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');

    });


    /* Reviews: https://kenwheeler.github.io/slick/ */ 
    let slider = $('#reviewsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});