$(document).ready(function() {


  // ----------------create

  $("#create1").on("click", function() {
    let windowHeight2 = $(document).height();
    //let topNavHeight = $(".topnavbar").height();
    //console.log(windowHeight);

    if ($(".animgaveta1").height() < 71) { //quando está fechado e há click

      $(".animgaveta1").finish().animate({ //abre....
        height: windowHeight2 * 1.75,

      }, 500);

      //e acontece:
      $(".animgaveta1 .block").css("overflow", "visible");
      $("#create").addClass("abertostyle");
      $(".createcontainer").css("display", "flex");
      $("#create").css("cursor", "default");
      $("#create1").css("cursor", "pointer");


      $(".abertostyle").css("background-color", "white");
      $("#titulocreate").css("color", "black");
      $("#create svg > path").css("fill", "black");
      $("#create svg").css("transform", "rotate(180deg)");

      //e enquanto está aberto, quando se passa o rato na DIV..:
      $("#create").hover(function() {
       $("#titulocreate").css("color", "black");
       $("#create svg > path").css("fill", "black");
       $(".abertostyle").css("background-color", "white");

        //sem o hover, volta ao normal...
      }, function() {
        $("#titulocreate").css("color", "black");
        $("#create svg > path").css("fill", "black");
        $(".abertostyle").css("background-color", "white");
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


    } else {
      //quando está aberto e há click...
      $(".animgaveta1").finish().animate({ //fecha
        height: "100%",
      }, 500);
      //e acontece:
      $("#create").removeClass("abertostyle");
      $(".createcontainer").css("display", "none");
      $("#create svg").css("transform", "rotate(0deg)");
      $("#create").css("cursor", "pointer");
      $("#create1").css("cursor", "pointer");

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

  //---só quando clicka na seta
  $("#create svg").on("click", function() {

  });





  $("#newpostal").on("click", function() {
      $("#postalsetup").css("display", "none");
      $("#formcreatenew").css("display", "flex");

    printF();
  });


  $("#oldpostal").on("click", function() {
      $("#postalsetup").css("display", "none");
      $("#formcreatefrom").css("display", "flex");

    printF();
  });






});//doc  finish
