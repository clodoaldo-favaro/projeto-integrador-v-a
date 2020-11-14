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
        $('#consulta-cidade').css({
            'color': '#FFF',
            'background-color': '#000',
            'border': '2px solid #FFF'
        });
        $('#consulta-cidade').removeClass('placeholderNormal');
        $('#consulta-cidade').addClass('placeholderAltoContraste');
        $('.button-container button').css({
            'color': '#FFF',
            'border-color': '#FFF',
            'background-color': '#000'
        });
        
    } else {
        $('body').css('background-color', 'rgb(58, 175, 169)');
        $('.navegacao').css({
            'background-color': '#17252A',
            'border': 'none',
            'color': '#FEFFFF'
        });
        $('#header').css('border', 'none');
        $('.acessibilidade a').css('color', '#17252A');
        $('#consulta-cidade').css({
            'background-color': '#7AFDCA',
	        'color': '#17252A',
	        'border': '2px solid #17252A'
        });
        $('#consulta-cidade').removeClass('placeholderAltoContraste');
        $('#consulta-cidade').addClass('placeholderNormal');
        $('.button-container button').css({
            'color': '#17252A',
            'border-color': '#17252A',
            'background-color': '#00FFAA'
        });
        
    }
    
}