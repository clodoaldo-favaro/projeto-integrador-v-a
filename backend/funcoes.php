<?php


if (isset($_POST['action'])) {
    $funcao = $_POST['action'];
    if ($funcao === 'consultaCidade') {
        consultaCidade();
    }
    
}


function consultaCidade() {
    $nomeCidade = $_POST['nomeCidade'];
    $dataConsulta = $_POST['dataConsulta'];

    $jsonRetorno = '{';
    
    //TODO: Consultar banco de dados
    //Exemplo do formato de retorno em JSON

    $jsonRetorno .= '"nomeCidade":' .  quoteField($nomeCidade) . ',"dataConsulta":' . quoteField($dataConsulta);
    $jsonRetorno .= ',"qtdeCasos":' . 1200 . ',"qtdeRecuperados":' . 1180 . ',"qtdeObitos":' . 20;
        
    $jsonRetorno .= '}';
    echo $jsonRetorno;
}


function quoteField($field) {
    return '"' . $field . '"';
}



?>