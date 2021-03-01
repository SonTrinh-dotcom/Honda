$('#vehicle-list').mCustomScrollbar({
    theme: 'dark'
})


var count = "";
$('#navbar > a').click(function () {
    if (count = "") {

        if (count === "vehicle-link") {
            $('#vehicles').removeClass('hide-vehicle');
        }
    }
    else {
        if (count === $(this).attr('id')) {
            count = "";
            $('#vehicles').addClass('hide-vehicle');
        }
        else {
            count = $(this).attr('id');
            if (count != "vehicle-link") {
                $('#vehicles').addClass('hide-vehicle');
            }
            else {
                $('#vehicles').removeClass('hide-vehicle');
            }
        }
    }
}
)
$('#vehicle-close').click(function () {
    $('#vehicles').addClass('hide-vehicle');
})
const swiper = new Swiper('.swiper-container', {
    // Optional parameters

    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

 
  
});


$('.carousel-indicators-config li').click(function(){
   $('.carousel-indicators-config li').removeClass('active');
   $(this).addClass('active');
})