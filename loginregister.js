$(document).ready(function() {


// ------------loginregister

$("#loginregister1").on("click", function() {
  let windowHeight = $(document).height();

  if ($(".animgaveta2").height() < 71) { //quando está fechado e há click

    $(".animgaveta2").finish().animate({ //abre....
      height: windowHeight * 1.35,

    }, 500);

    //e acontece:
    $(".animgaveta2 .block").css("overflow", "visible");
    $("#loginregister").addClass("abertostyle");
    $(".loginregistercontainer").css("display", "flex");

    $(".abertostyle").css("background-color", "white");
    $("#titulologinregister").css("color", "black");
    $("#loginregister svg > path").css("fill", "black");
    $("#loginregister svg").css("transform", "rotate(180deg)");

    //e enquanto está aberto, quando se passa o rato na DIV..:
    $("#loginregister").hover(function() {
     $("#titulologinregister").css("color", "black");
     $(".abertostyle").css("background-color", "white");
     $("#loginregister svg > path").css("fill", "black");

      //sem o hover, volta ao normal...
    }, function() {
      $("#titulologinregister").css("color", "black");
      $(".abertostyle").css("background-color", "white");
      $("#loginregister svg > path").css("fill", "black");

    });

    //e enquanto está aberto, quando se passa o rato na SETA..:
    $("#loginregister1 > svg").hover(function() {
    $("#loginregister1 svg > path").css("fill", "red");
      //sem o hover, volta ao normal...
    }, function() {
    $("#loginregister svg > path").css("fill", "black");
    });


    $(this).off('mouseenter'); //acaba quando se acaba de carregar


  } else { //quando está aberto e há click...
    $(".animgaveta2").finish().animate({ //fecha
      height: "100%",
    }, 500);

    //e acontece:
    $("#loginregister").removeClass("abertostyle");
    $(".loginregistercontainer").css("display", "none");
    $("#loginregister svg").css("transform", "rotate(0deg)");

    //e enquanto está fechado, quando se passa o rato NA DIV..:
    $("#loginregister").hover(function() {
      $("#loginregister").css("background-color", "black");
      $("#titulologinregister").css("color", "white");
      $("#loginregister svg > path").css("fill", "white");

      //sem o hover, volta ao normal...
    }, function() {
      $("#loginregister").css("background-color", "white");
      $("#titulologinregister").css("fill", "black");
      $("#loginregister svg > path").css("fill", "black");
    });

    //e enquanto está fechado, quando se passa o rato na SETA..:
    $("#loginregister > svg").hover(function() {
    $("#loginregister svg > path").css("fill", "red");
      //sem o hover, volta ao normal...
    }, function() {
    $("#loginregister svg > path").css("fill", "white");
    });

  }

  printF();
});

});
