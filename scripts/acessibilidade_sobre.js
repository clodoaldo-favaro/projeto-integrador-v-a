$(document).ready(function() {
    var selectorTexto = '';
    
    debugger;
    var normalP = $('p').css('font-size');
    var normalH1 = $('h1').css('font-size');
    var normalH2 = $('h2').css('font-size');
    var normalLi = $('li').css('font-size');
    
    $(".normal").click(function() {
        $('p').css('font-size', normalP);
        $('h1').css('font-size', normalH1);
        $('h2').css('font-size', normalH2);
        $('li').css('font-size', normalLi);
        
    });
  
    $(".aumentar").click(function() {
        var fontP = parseInt($('p').css('font-size'));
        var fontH1 = parseInt($('h1').css('font-size'));
        var fontH2 = parseInt($('h2').css('font-size'));
        var fontLi = parseInt($('li').css('font-size'));
        if (fontP < 22) {
            $('p').css('font-size', fontP * 1.2);
            $('h1').css('font-size', fontH1 * 1.2);
            $('h2').css('font-size', fontH2 * 1.2);
            $('li').css('font-size', fontLi * 1.2);
        }
        return false;
    });
  
    
    $(".diminuir").click(function() {
        var fontP = parseInt($('p').css('font-size'));
        var fontH1 = parseInt($('h1').css('font-size'));
        var fontH2 = parseInt($('h2').css('font-size'));
        var fontLi = parseInt($('li').css('font-size'));
        if (fontP < 22) {
            $('p').css('font-size', fontP * 0.8);
            $('h1').css('font-size', fontH1 * 0.8);
            $('h2').css('font-size', fontH2 * 0.8);
            $('li').css('font-size', fontLi * 0.8);
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
            
            $('.container-sobre').removeClass('formPadrao');
            $('.container-sobre').addClass('altoContraste');
            
        } else {
            $('body').css('background-color', 'rgb(58, 175, 169)');
            $('.navegacao').css({
                'background-color': '#17252A',
                'border': 'none',
                'color': '#FEFFFF'
            });
            $('#header').css('border', 'none');
            $('.acessibilidade a').css('color', '#17252A');
            
            $('.container-sobre').addClass('formPadrao');
            $('.container-sobre').removeClass('altoContraste');
        }
        return false;
    });
  
});

