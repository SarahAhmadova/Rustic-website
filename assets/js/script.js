$(document).ready(function () {

    $("#banner-slide").owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    carouselContent($("#banner-slide"));

    $("#banner-slide").on(
        'translated.owl.carousel',
        function () {
            carouselContent(this)
        }
    );
    $("#banner-slide").on(
        'changed.owl.carousel',
        function () {
            $(this).find(".owl-item.active").find(".item").html("");
            clearContentAnime(this)
        }

    );
    $("#sponsor-slide").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        margin: 15,
        responsive: {
            0: {
                items: 3
            },
            760: {
                items: 4
            },
            1198: {
                items: 4
            }
        }
    });
    $("#client-slide").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav:true,
        dots: false,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            760: {
                items: 1
            },
            1198: {
                items: 2
            }
        }
    });
    $("#project-slide").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        margin: 5,
        responsive: {
            0: {
                items: 2
            },
            760: {
                items: 3
            },
            1198: {
                items: 4
            }
        }
    });
    $("header .nav-link").parent().on({
        mouseenter: function () {
            $(this).find(".inner-menu").addClass("inner-menu-active");
        },
        mouseleave: function () {
            $(this).find(".inner-menu").removeClass("inner-menu-active");
        }
    })
    $(".form-switch").find("input").change(function () {
        $("#pricing .package-choice .frst").toggleClass("active");
        $("#pricing .package-choice .scnd").toggleClass("active");
        $("#pricing .item").css("animation","none");
        $("#pricing .item").css("animation");
        $("#pricing .item").css({
            "animation": "slideUp 1s"
        });
        

    });
});


$(document).scroll(function () {
    if ($(this).scrollTop() > 90) {
        $("header").addClass("sticky-nav");
        $("header").css("top", "0px");
    } else {
        $("header").removeClass("sticky-nav");
    }
    $('#pricing .item').each(function (i) {
        let bottom_of_element = $("#pricing .item").offset().top + 100;
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
            $("#pricing .item").css({
                animation: "slideUp 1s"
            });
        }
        else $("#pricing .item").css("animation", "none");
    });



});



function carouselContent(e) {
    let item = $(e).find(".owl-item.active").find(".item");
    item.html("<div class='text-box'></div>");
    item.find(".text-box").append("<div class='sub-title'>nordic interior <br> studio</div><h1 class='title'>Rustic and <br> Modern</h1><a href='#' class='more-about'>more about us</a>");
    AddContentAnime(e);
}

function AddContentAnime(item) {
    $(item).find(".owl-item.active").find(".text-box").children().css({
        "animation": "textScale 1s",
        opacity: '1'
    });
}

function clearContentAnime(item) {
    $(item).find(".owl-item.active").find(".text-box").children().css({
        "animation": "none",
        opacity: '0'
    });
}