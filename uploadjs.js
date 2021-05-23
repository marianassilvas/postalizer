
  // let cors = require("cors");
  // app.use(cors());
  $("input#upload").on("click", function() {
       alert("botãofuncionou");  //apagar

        var fd = new FormData();
        var files = $('#file')[0].files;



        // Check file selected or not
        if(files.length > 0 ){
           fd.append('file',files[0]);

           $.ajax({
              url: 'upload.php',
              type: 'post',
              data: fd,
              contentType: false,
              processData: false,
              success: function(response){
                 if(response != 0){
                    $("#img").attr("src",response);
                    $(".preview img").show(); // Display image element
                 }else{
                    alert("file not uploaded!");
                 }
              },
           });
        }else{
           alert("Please select a file.");
        }
    });


// let y = 0;

// function setup() {
//   // The background image must be the same size as the parameters
//   // into the createCanvas() method. In this program, the size of
//   // the image is 720x400 pixels.
//   bgimage = loadImage('upload/canvas12.jpg');
//   createCanvas(720, 400);
// }
//
// function draw() {
//   background(bgimage);
//   stroke(226, 204, 0);
//   line(0, y, width, y);
//   y++;
//
//   if (y > height) {
//     y = 0;
//   }
// }
