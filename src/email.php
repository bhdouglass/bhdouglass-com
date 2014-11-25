<?php

$email = $_GET['email'];
$name = $_GET['name'];
$message = $_GET['message'];

$message = 'Name: ' . $name . '<br/>Email: ' . $email . '<br/>Message:<br/>' . $message;
$subject = '[bhdouglass.com] ' . $name;
$to = 'bhdouglass@gmail.com';

$headers = "From: $email";
$headers .= "\r\nReply-To: $email";

$result = mail($to, $subject, $message, $headers);
if (!$result) {
	http_response_code(400);
}

?>