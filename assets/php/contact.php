<?php
$name = $_POST['name'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$email = $_POST['email'];




if (mail ('soy.sofiakv@gmail.com', $subject, 'Nombre: '.$name.'

Mensaje: '.$message, '¿Le quieres responder? '.$email)) {
    echo 'send';
} else {
    echo 'not send';
}




?> 