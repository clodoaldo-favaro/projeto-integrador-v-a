$(document).ready(function() {
    var selectorNomeCidade = '.nomeCidade h2';
    var selectorBandeira = '.bandeira h3';
    var selectorDados = '.dados p';
    var selectorBrand = '#consulta-covid';
    var selectorPages = '.pages a';
    debugger;
    var normalNomeCidade = $(selectorNomeCidade).css('font-size');
    var normalBandeira = $(selectorBandeira).css('font-size');
    var normalDados = $(selectorDados).css('font-size');
    var normalBrand = $(selectorBrand).css('font-size');
    var normalPages = $(selectorPages).css('font-size');
    
    $(".normal").click(function() {
        $(selectorNomeCidade).css('font-size', normalNomeCidade);
        $(selectorBandeira).css('font-size', normalBandeira);
        $(selectorDados).css('font-size', normalDados);
        $(selectorBrand).css('font-size', normalBrand);
        $(selectorPages).css('font-size', normalPages);
    });
  
    $(".aumentar").click(function() {
        var fontP = parseInt($(selectorDados).css('font-size'));
        var fontCidade = parseInt($(selectorNomeCidade).css('font-size'));
        if (fontP < 22) {
            $(selectorDados).css('font-size', fontP * 1.2);
            $(selectorNomeCidade).css('font-size', fontCidade * 1.2);
        }
        return false;
    });
  
    
    $(".diminuir").click(function() {
        var fontP = parseInt($(selectorDados).css('font-size'));
        var fontCidade = parseInt($(selectorNomeCidade).css('font-size'));
        if (fontP > 10) {
            $(selectorDados).css('font-size', fontP * 0.8);
            $(selectorNomeCidade).css('font-size', fontCidade * 0.8);
        }
        return false;
    });

    $(".alto-contraste").click(function() {
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
            
            $('#consulta-cidade').removeClass('formPadrao');
            $('#consulta-cidade').addClass('altoContraste');
            $('#consulta-cidade').removeClass('placeholderNormal');
            $('#consulta-cidade').addClass('placeholderAltoContraste');
            
            $('#botao-consulta').removeClass('formPadrao');
            $('#botao-consulta').removeClass('buttonPadrao');
            $('#botao-consulta').addClass('altoContraste');

            $('#resultado-consulta').removeClass('formPadrao');
            $('#resultado-consulta').addClass('altoContraste');
            $('#resultado-consulta').addClass('center');
            $('#barra-auxiliar').removeClass('backgroundVerde');
            $('#barra-auxiliar').addClass('altoContraste');
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
            $('#consulta-cidade').addClass('formPadrao');
            $('#consulta-cidade').removeClass('placeholderAltoContraste');
            $('#consulta-cidade').addClass('placeholderNormal');
            
            $('#botao-consulta').removeClass('altoContraste');
            $('#botao-consulta').addClass('formPadrao');
            $('#botao-consulta').addClass('buttonPadrao');

            $('#resultado-consulta').removeClass('altoContraste');
            $('#resultado-consulta').addClass('formPadrao');
            $('#barra-auxiliar').removeClass('altoContraste');
            $('#barra-auxiliar').addClass('backgroundVerde');
        }
        return false;
    });
  
});

