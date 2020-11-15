function gerarDadosEstaticos() {
    var nomeCidade = $('#consulta-cidade').val();
    $('#resultado-consulta').val('<h1>' + nomeCidade + '</h1>');
}