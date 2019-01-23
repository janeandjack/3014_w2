<?php

include 'functions.php';

//sanitize any user input using some of the stuff pan has been showing you
//link htmlentisies ,prepared statements, etc
//
if (isset($_GET['users'])) {
	$data = get_single_user($conn, $_GET['users']);
	echo json_encode($data);

} else {
	$data = get_all_users($conn);
	echo json_encode($data);
}



?>