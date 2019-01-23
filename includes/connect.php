<?php 
$user = "root";
$pw = "root";

try {
	$conn = new PDO('mysql:host=localhost;dbname=compusers', $user,$pw);
	// var_dump($conn);
} catch(PDOException $exception) {
	echo 'connect error' . $exception->getmessage();
	
}


?>