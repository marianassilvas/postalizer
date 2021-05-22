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

  });

  //---só quando clicka na seta
  $("#create svg").on("click", function() {

  });




  //----------------------quando se carrega no botão criar um postal novo
  $("#newpostal").on("click", function() {
    $("#postalsetup").css("display", "flex");
    $("#formcreatenew").css("display", "flex");
    $("#formcreatefrom").css("display", "none");
    $(".abertostyle").css("overflow", "scroll")
    $("#newpostal").css("background-color", "black")
    $("#newpostal").css("color", "white")
    $("#oldpostal").css("background-color", "white")
    $("#oldpostal").css("color", "black")
    $("#savepostal").css("display", "none");
    $("#canvas-container").css("display", "none");
    $("#canvas_container2").css("display", "none");
    $("#savepostal2").css("display", "none");

    //quando se passa o rato no criar from another
    $("#oldpostal").hover(function() {
      $("#oldpostal").css("background-color", "black")
      $("#oldpostal").css("color", "white")


      //sem o hover, volta ao normal...
    }, function() {
      $("#oldpostal").css("background-color", "white")
      $("#oldpostal").css("color", "black")
    });



  });


  //quando se carrega no botão CREATE dentro do criar um postal novo (depois do form)
  $("#btncreate").on("click", function() {
    $("#postalsetup").css("display", "flex");
    $("#formcreatenew").css("display", "none");
    $("#formcreatefrom").css("display", "none");
    $(".abertostyle").css("overflow", "scroll")
    //$("#btncreate").css("display", "flex");

    $("#newpostal").css("background-color", "white")
    $("#newpostal").css("color", "black")
    $("#oldpostal").css("background-color", "white")
    $("#oldpostal").css("color", "black")
    $("#savepostal").css("display", "flex");
    $("#canvas_container2").css("display", "none");


  });
  //quando se carrega no botão Download
  $("#downloadpostal").on("click", function() {
    saveMyCanvas(["Postal"], ["1"]);

  });
  //quando se carrega no botão RUN AGAIN --> no teste.js
  $("#runagainpostal").on("click", function() {


  });

  //-----------------------quando se carrega no botão criar um postal a partir de outro
  $("#oldpostal").on("click", function() {
    $("#postalsetup").css("display", "flex");
    $("#formcreatefrom").css("display", "flex");
    $("#formcreatenew").css("display", "none");
    $(".abertostyle").css("overflow", "scroll")
    $("#newpostal").css("background-color", "white")
    $("#newpostal").css("color", "black")
    $("#oldpostal").css("background-color", "black")
    $("#oldpostal").css("color", "white")

    $("#canvas-container").css("display", "none");
    $("#savepostal").css("display", "none");
    $("#savepostal2").css("display", "none");
    $("#canvas_container2").css("display", "none");

    //quando se passa o rato no botão create new postal
    $("#newpostal").hover(function() {
      $("#newpostal").css("background-color", "black")
      $("#newpostal").css("color", "white")

      //sem o hover, volta ao normal...
    }, function() {
      $("#newpostal").css("background-color", "white")
      $("#newpostal").css("color", "black")
    });

  });

  //quando se carrega no botão CREATE dentro do criar um postal A PARTIR DE OUTRO (depois do form)
  $("#btncreate2").on("click", function() {
    $("#postalsetup2").css("display", "flex");
    $("#formcreatenew").css("display", "none");
    $("#formcreatefrom").css("display", "none");
    $(".abertostyle").css("overflow", "scroll")
    //$("#btncreate").css("display", "flex");

    $("#newpostal").css("background-color", "white")
    $("#newpostal").css("color", "black")
    $("#oldpostal").css("background-color", "white")
    $("#oldpostal").css("color", "black")
    $("#savepostal2").css("display", "flex");
   $("#canvas_container2").css("display", "flex");

  });
  //quando se carrega no botão Download
  $("#downloadpostal2").on("click", function() {
    saveMyCanvas(["Postal"], ["1"]);

  });




}); //doc  finish
