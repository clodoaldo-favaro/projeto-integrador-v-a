$(document).ready(function() {
    var resize = new Array('p', '.resizable');
    resize = resize.join(',');
    debugger;
    var resetFont = $(resize).css('font-size');
    $(".normal").click(function() {
        debugger;
        $(resize).css('font-size', resetFont);
    });
  
    $(".aumentar").click(function() {
        debugger;
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        if (originalFontNumber < 20) {
            var newFontSize = originalFontNumber * 1.2;
            $(resize).css('font-size', newFontSize);
        }
        return false;
    });
  
    
    $(".diminuir").click(function() {
        debugger;
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        if (originalFontNumber > 12) {
            var newFontSize = originalFontNumber * 0.8;
            $(resize).css('font-size', newFontSize);
        }
        return false;
    });
  
  });


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
    }
    
}

function fonteNormal() {
    $('.acessibilidade a').css('font-size', '16px');
}

function diminuirFonte() {
    debugger;
    var size =  parseInt($('.acessibilidade a').css('font-size'));
    if (size >= 11) {
        $('.acessibilidade a').css('font-size', size*0.9);
    }
}

function aumentarFonte() {
    var acessibilidadeFontSize =  parseInt($('acessibilidade a').css('font-size')); 
    alert('Fonte: ' + acessibilidadeFontSize);
}