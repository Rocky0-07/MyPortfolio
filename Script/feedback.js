$(document).ready(function(){
    $("#but").click(function(){
        $("#but").addClass("animate__animated animate__rubberBand").one("animationend", function(){
            $("#but").removeClass("animate__animated animate__rubberBand");
        })
    });

    $("form").waypoint(function(direction){
      $("form").addClass('animate__animated animate__jello')
  }, {
      offset: "60%"
  });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top-50,
          },
          500,
          'linear'
        )
      })
})