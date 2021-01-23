<?php
    // error_reporting(E_ALL);
    // $data = 'teste';
    $data = $_POST['conteudo']; // the key we sent was "something"
    echo $data;
    $f = fopen('../sql/estados.sql', 'w+');
    fwrite($f, $data);
    fclose($f);
?>