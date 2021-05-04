<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Form</title>
  </head>
  <body>

    <?php
    error_reporting(0);

    echo '

    <form method = "post" action " ">
    
      <label for = "message"> Message: </label> <br>
      <input type = "text" id = "message" name= "message"> <br>
      <input type= "submit" value = "submit">

    </form> ';

    $message= $_POST['message'];
    echo "Message is: " . $message;

    ?>

    <script type="first.js">

    </script>

  </body>
</html>
