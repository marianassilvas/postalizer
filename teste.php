<?php
$dbconn = pg_connect("host=localhost port=5432 dbname=marianasilva")
or die("Could not connect");
echo "Connected successfully";
?>
