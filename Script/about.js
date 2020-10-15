$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>800){
            $("#back-to-top").fadeIn(250);
        }
        else{
            $("#back-to-top").fadeOut(250);
        }
    });

    $("#back-to-top").click(function(){
        $("html,body").animate({scrollTop:0},1200);
    });

    $("#about").click(function(){
        $("html,body").animate({scrollTop:2000},1200);
    });

    //---------------------Scroll animation--------------------//

    $("#design").waypoint(function(direction){
        $("#design").addClass('animate__animated animate__zoomIn')
    }, {
        offset: "30%"
    });

    $("#bb").waypoint(function(direction){
        $("#bb").addClass('animate__animated animate__bounceInUp')
    }, {
        offset: "80%"
    });

    $("#ba").waypoint(function(direction){
        $("#ba").addClass('animate__animated animate__bounceInLeft')
    }, {
        offset: "80%"
    });

    $("#bc").waypoint(function(direction){
        $("#bc").addClass('animate__animated animate__bounceInRight')
    }, {
        offset: "80%"
    });

    $("#t").waypoint(function(direction){
        $("#t").addClass('animate__animated animate__swing')
    }, {
        offset: "50%"
    });

    $("#sa").waypoint(function(direction){
        $("#sa").addClass('animate__animated animate__fadeInDown')
    }, {
        offset: "50%"
    });

    $("#sb").waypoint(function(direction){
        $("#sb").addClass('animate__animated animate__fadeInDown')
    }, {
        offset: "50%"
    });

    $("#ca").waypoint(function(direction){
        $("#ca").addClass('animate__animated animate__rotateInDownLeft')
    }, {
        offset: "60%"
    });

    $("#cb").waypoint(function(direction){
        $("#cb").addClass('animate__animated animate__rotateInDownRight')
    }, {
        offset: "80%"
    });

    $("#sc").waypoint(function(direction){
        $("#sc").addClass('animate__animated animate__fadeInDown')
    }, {
        offset: "50%"
    });

    $("#da").waypoint(function(direction){
        $("#da").addClass('animate__animated animate__rubberBand')
    }, {
        offset: "60%"
    });

    $("#sd").waypoint(function(direction){
        $("#sd").addClass('animate__animated animate__fadeIn')
    }, {
        offset: "50%"
    });

    $("#r").waypoint(function(direction){
        $("#r").addClass('animate__animated animate__bounce')
    }, {
        offset: "60%"
    });

    //----carousel----//

    $(".fa-circle").waypoint(function(direction){
        $(".fa-circle").addClass('animate__animated animate__fadeInDown')
    }, {
        offset: "60%"
    });

    $(".carousel-caption").waypoint(function(direction){
        $(".carousel-caption").addClass('animate__animated animate__jello')
    }, {
        offset: "60%"
    });

    $("#tex").waypoint(function(direction){
        $("#tex").addClass('animate__animated animate__fadeInLeft')
    }, {
        offset: "60%"
    });

    //-----------------------Button------------------//

    $(".fa-arrow-up").click(function(){
        $(".fa-arrow-up").addClass("animate__animated animate__rubberBand").one("animationend", function(){
            $(".fa-arrow-up").removeClass("animate__animated animate__rubberBand");
        })
    });

    //----------------------smooth scroll---------------------//

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top-100,
          },
          500,
          'linear'
        )
      })

});