<?php


if (isset($_POST['action'])) {
    $funcao = $_POST['action'];
    if ($funcao === 'consultaCidade') {
        consultaCidade();
    }
    
}


function consultaCidade() {
    echo '<p>Resultados da consulta aqui</p>';
}



?>