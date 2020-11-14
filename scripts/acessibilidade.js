function altoContraste() {
    var color = $('body').css('background-color');
    
    if (color == 'rgb(58, 175, 169)') {
        $('body').css('background-color', '#000');
        $('.navegacao').css({
            'background-color': '#000',
            'color': '#FFF',
            'border': '2px solid white',
        });
        $('#header').css('border', '2px solid white');
        $('.acessibilidade a').css('color', '#FFF');
        
        $('#consulta-cidade').removeClass('consultaCidade');
        $('#consulta-cidade').addClass('altoContraste');
        $('#consulta-cidade').removeClass('placeholderNormal');
        $('#consulta-cidade').addClass('placeholderAltoContraste');
        
        $('#botao-consulta').removeClass('buttonPadrao');
        $('#botao-consulta').addClass('altoContraste');

        $('#resultado-consulta').removeClass('resultadoConsulta');
        $('#resultado-consulta').addClass('altoContraste');
    } else {
        $('body').css('background-color', 'rgb(58, 175, 169)');
        $('.navegacao').css({
            'background-color': '#17252A',
            'border': 'none',
            'color': '#FEFFFF'
        });
        $('#header').css('border', 'none');
        $('.acessibilidade a').css('color', '#17252A');
        
        $('#consulta-cidade').removeClass('altoContraste');
        $('#consulta-cidade').addClass('consultaCidade');
        $('#consulta-cidade').removeClass('placeholderAltoContraste');
        $('#consulta-cidade').addClass('placeholderNormal');
        
        $('#botao-consulta').removeClass('altoContraste');
        $('#botao-consulta').addClass('buttonPadrao');

        $('#resultado-consulta').removeClass('altoContraste');
        $('#resultado-consulta').addClass('resultadoConsulta');
    }
    
}