$(document).ready(function() {


  // ----------------create

  $(".animgaveta1").on("click", function() {
    if ($(".animgaveta1").height() < 71) { //quando está fechado e há click

      $(this).finish().animate({ //abre....
        height: "1367px",
      }, 500);

      //e acontece:
      $(".animgaveta1 .block").css("overflow", "visible");
      $("#create").addClass("abertostyle");
      $(".createcontainer").css("display", "flex");

      $(".animgaveta1").css("background-color", "white");
      $("#titulocreate").css("color", "black");
      $("#create svg > path").css("fill", "black");
      $("#create svg").css("transform", "rotate(180deg)");

      //e enquanto está aberto, quando se passa o rato na DIV..:
      $("#create").hover(function() {
       $("#titulocreate").css("color", "black");
       $("#create svg > path").css("fill", "black");


        //sem o hover, volta ao normal...
      }, function() {
        $("#titulocreate").css("color", "black");
        $("#create svg > path").css("fill", "black");
        //$("#create svg > path").css("fill", "black");
      });

      //e enquanto está aberto, quando se passa o rato na SETA..:
      $("#create1 > svg").hover(function() {
      $("#create svg > path").css("fill", "red");
        //sem o hover, volta ao normal...
      }, function() {
      $("#create svg > path").css("fill", "black");
      });


      $(this).off('mouseenter'); //acaba quando se acaba de carregar


    } else { //quando está aberto e há click...
      $(this).finish().animate({ //fecha
        height: "100%",
      }, 500);
      //e acontece:
      $("#create").removeClass("abertostyle");
      $(".createcontainer").css("display", "none");
      $("#create svg").css("transform", "rotate(0deg)");

      //e enquanto está fechado, quando se passa o rato NA DIV..:
      $("#create").hover(function() {
        $("#create").css("background-color", "black");
        $("#titulocreate").css("color", "white");
        $("#create svg > path").css("fill", "white");

        //sem o hover, volta ao normal...
      }, function() {
        $("#create").css("background-color", "white");
        $("#titulocreate").css("fill", "black");
        $("#create svg > path").css("fill", "black");
      });

      //e enquanto está fechado, quando se passa o rato na SETA..:
      $("#create1 > svg").hover(function() {
      $("#create svg > path").css("fill", "red");
        //sem o hover, volta ao normal...
      }, function() {
      $("#create svg > path").css("fill", "white");
      });

    }
    printF();
  });

  // ------------loginregister

  $(".animgaveta2").on("click", function() {
    if ($(".animgaveta2").height() < 71) { //quando está fechado e há click

      $(this).finish().animate({ //abre....
        height: "1367px",

      }, 500);

      //e acontece:
      $(".animgaveta2 .block").css("overflow", "visible");
      $("#loginregister").addClass("abertostyle");
      $(".loginregistercontainer").css("display", "flex");

      $(".animgaveta2").css("background-color", "white");
      $("#titulologinregister").css("color", "black");
      $("#loginregister svg > path").css("fill", "black");
      $("#loginregister svg").css("transform", "rotate(180deg)");

      //e enquanto está aberto, quando se passa o rato na DIV..:
      $("#loginregister").hover(function() {
       $("#titulologinregister").css("color", "black");
       $("#loginregister svg > path").css("fill", "black");


        //sem o hover, volta ao normal...
      }, function() {
        $("#titulologinregister").css("color", "black");
        $("#loginregister svg > path").css("fill", "black");
        //$("#create svg > path").css("fill", "black");
      });


      $(this).off('mouseenter'); //acaba quando se acaba de carregar


    } else { //quando está aberto e há click...
      $(this).finish().animate({ //fecha
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
      $("#loginregister1 > svg").hover(function() {
      $("#loginregister svg > path").css("fill", "red");
        //sem o hover, volta ao normal...
      }, function() {
      $("#loginregister svg > path").css("fill", "white");
      });

    }

    printF();
  });


});
