$(document).ready(function(){
    $(".cart:eq(0)").css("display","flex");
    $("#p1").on("click",function(){
        $(".cart:eq(0)").slideDown(1500).css("display","flex");
        $(".cart:eq(0)").siblings().slideUp(1500);

    });
    $("#p2").on("click",function(){
        $(".cart:eq(1)").slideDown(1500);
        $(".cart:eq(1)").siblings().slideUp(1500);

    });
    $("#p3").on("click",function(){
        $(".cart:eq(2)").slideDown(1500);
        $(".cart:eq(2)").siblings().slideUp(1500);

    });
    $("#p4").on("click",function(){
        $(".cart:eq(3)").slideDown(1500);
        $(".cart:eq(3)").siblings().slideUp(1500);

    });
    $("#p5").on("click",function(){
        $(".cart:eq(4)").slideDown(1500);
        $(".cart:eq(4)").siblings().slideUp(1500);

    });
   





    $(".bod").css({"width":$(document).width(),
                   "height":$(document).height()});
  

    $(".cart").css("height",$(document).height());

    $(window).on("resaize",function(){
        $(".bod").css({"width":$(document).width(),
                       "height":$(document).height()});

        $(".cart").css("height",$(document).height());

    });


})