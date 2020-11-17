function gerarDadosEstaticos() {
    var nomeCidade = $('#consulta-cidade').val();
    var bandeira = 'Laranja';
    var casosConfirmados = 3386;
    var obitos = 109;
    var recuperados = 3112;
    var taxaMortalidade = ((obitos/casosConfirmados)*100).toFixed(2);
    var taxaRecuperados = ((recuperados/casosConfirmados)*100).toFixed(2);

    var dados = '<div class="nomeCidade"><h2>' + nomeCidade + '</h2></div>' +
                '<div class="bandeira"><h3>Bandeira ' + bandeira + '</h3></div>' + 
                '<div class="leftText">' +
                    '<p>Casos confirmados: ' + casosConfirmados + '</p>' +
                    '<p>Óbitos: ' + obitos + '</p>' +
                    '<p>Recuperados: ' + recuperados + '</p>' +
                    '<p>Taxa de mortalidade: ' + taxaMortalidade + '%</p>' +
                    '<p>Taxa de recuperados: ' + taxaRecuperados + '%</p>' +
                '</div>'

    if (nomeCidade) {
        $('#resultado-consulta div').remove();
        $('#resultado-consulta').append(dados);
    } else {
        alert('Informe uma cidade!');
    }
}