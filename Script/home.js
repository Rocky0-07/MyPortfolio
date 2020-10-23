$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>800){
            $("#back-to-top").fadeIn(250);
        }
        else{
            $("#back-to-top").fadeOut(250);
        }
    });

//---------------------Back to top-----------------------//

    $("#back-to-top").click(function(){
        $("html,body").animate({scrollTop:0},1200);
    });

//---------------------Scroll animation--------------------//

    $("#content").waypoint(function(direction){
        $("#content").addClass('animate__animated animate__zoomIn')
    }, {
        offset: "40%"
    });

    $("#caa").waypoint(function(direction){
        $("#caa").addClass('animate__animated animate__bounceInLeft')
    }, {
        offset: "50%"
    });

    $("#cab").waypoint(function(direction){
        $("#cab").addClass('animate__animated animate__bounceInUp')
    }, {
        offset: "50%"
    });

    $("#cac").waypoint(function(direction){
        $("#cac").addClass('animate__animated animate__bounceInRight')
    }, {
        offset: "50%"
    });

    $("#carousel-index").waypoint(function(direction){
        $("#carousel-index").addClass('animate__animated animate__slideInRight')
    }, {
        offset: "40%"
    });

    $("#sk").waypoint(function(direction){
        $("#sk").addClass('animate__animated animate__fadeInLeft')
    }, {
        offset: "60%"
    });

    $("#qa").waypoint(function(direction){
        $("#qa").addClass('animate__animated animate__fadeInDown')
    }, {
        offset: "50%"
    });

    $("#qb").waypoint(function(direction){
        $("#qb").addClass('animate__animated animate__fadeInDown')
    }, {
        offset: "50%"
    });

    $("#qc").waypoint(function(direction){
        $("#qc").addClass('animate__animated animate__fadeInDown')
    }, {
        offset: "50%"
    });

    $("#qd").waypoint(function(direction){
        $("#qd").addClass('animate__animated animate__fadeInDown')
    }, {
        offset: "50%"
    });

    $("#qe").waypoint(function(direction){
        $("#qe").addClass('animate__animated animate__jackInTheBox')
    }, {
        offset: "50%"
    });

    $("#cre").waypoint(function(direction){
        $("#cre").addClass('animate__animated animate__fadeInDown')
    }, {
        offset: "50%"
    });

    $("#crea").waypoint(function(direction){
        $("#crea").addClass('animate__animated animate__zoomIn')
    }, {
        offset: "50%"
    });
    

//------------------------Button animation-------------------//

    $("#but").click(function(){
        $("#but").addClass("animate__animated animate__rubberBand").one("animationend", function(){
            $("#but").removeClass("animate__animated animate__rubberBand");
        })
    });

    $(".fa-arrow-up").click(function(){
        $(".fa-arrow-up").addClass("animate__animated animate__rubberBand").one("animationend", function(){
            $(".fa-arrow-up").removeClass("animate__animated animate__rubberBand");
        })
    });

    //----------------------Progress Bar--------------------//

    $(".pga").waypoint(function(direction){
        $(".pga").animate({width:"90%"});
    }, {
        offset: "50%"
    });

    $(".pgb").waypoint(function(direction){
        $(".pgb").animate({width:"85%"});
    }, {
        offset: "50%"
    });

    $(".pgc").waypoint(function(direction){
        $(".pgc").animate({width:"90%"});
    }, {
        offset: "60%"
    });

    $(".pgd").waypoint(function(direction){
        $(".pgd").animate({width:"75%"});
    }, {
        offset: "70%"
    });

    $(".pge").waypoint(function(direction){
        $(".pge").animate({width:"85%"});
    }, {
        offset: "80%"
    });

    $(".pgh").waypoint(function(direction){
        $(".pgh").animate({width:"85%"});
    }, {
        offset: "80%"
    });

    $(".pgi").waypoint(function(direction){
        $(".pgi").animate({width:"75%"});
    }, {
        offset: "85%"
    });

    $(".pgj").waypoint(function(direction){
        $(".pgj").animate({width:"65%"});
    }, {
        offset: "85%"
    });

    $(".pgf").waypoint(function(direction){
        $(".pgf").animate({width:"80%"});
    }, {
        offset: "90%"
    });

    $(".pgg").waypoint(function(direction){
        $(".pgg").animate({width:"50%"});
    }, {
        offset: "95%"
    });


    //---------------------Smooth scroll-------------------//

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top-90,
          },
          500,
          'linear'
        )
      })

});
