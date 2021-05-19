$(document).ready(function(){
//
// $("#create").click(function() {
//   $("#create").css({"height": "300px", "background":"white","color": "black"});
//
//     $("textocreate").slideUp("slow");
//   //$(".textocreate").css({ "display":"inline","color": "black", "font-size": "12px"});
// });
//
//
//     function openCreate() {
//
//     }
//     function closeCreate() {
//
//     }


// create
$(".animgaveta1").on("click", function(){
    if($(".animgaveta1").height() < 71){ //quando abre

        $(this).finish().animate({
            height: "1365px",
        }, 500);

        $(".animgaveta1 .block").css("overflow", "visible");
        $(".animgaveta1").css("background-color", "white");
        $("#create").addClass("abertostyle");
        $(".createcontainer").css("display", "inline-flex");
        $(this).off('mouseenter');

    }else{  //quando fecha
        $(this).finish().animate({
           height: "100%",
        }, 500);
        $("#create").removeClass("abertostyle");
        $(".createcontainer").css("display", "none");


        $("#create").hover(function(){
  $("#create").css("background-color", "black");
  }, function(){
  $("#create").css("background-color", "white");
});

    }
printF();
        });

// loginregister

        $(".animgaveta2").on("click", function(){
            if($(".animgaveta2").height() < 71){ //quando abre

                $(this).finish().animate({
                    height: "1365px",

                }, 500);
                $(".animgaveta2 .block").css("overflow", "visible");
                $(".animgaveta2").css("background-color", "white");
                $("#loginregister").addClass("abertostyle");
                $(this).off('mouseenter');
            }else{ //quando fecha
                $(this).finish().animate({
                   height: "100%",
                }, 500);
                $("#loginregister").removeClass("abertostyle");


                $("#loginregister").hover(function(){
          $("#loginregister").css("background-color", "black");
          }, function(){
          $("#loginregister").css("background-color", "white");
        });
            }
        printF();
                });


});
