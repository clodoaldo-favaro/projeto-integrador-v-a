$(document).ready(function() {
    var normalH1 = $('h1').css('font-size');
    var normalH2 = $('h2').css('font-size');
    var normalInput = $('input[type="text"], input[type="email"]').css('font-size');

    function normalFont() {
        $('input[type="text"], input[type="email"], textarea').css('font-size', normalInput);
    }

    function biggerFont() {
        var fontH1 = parseInt($('h1').css('font-size'));
        var fontH2 = parseInt($('h2').css('font-size'));
        var fontInput = parseInt($('input[type="text"], input[type="email"]').css('font-size'));
        if (fontInput < 22) {
            $('h1').css('font-size', fontH1 * 1.2);
            $('h2').css('font-size', fontH2 * 1.2);
            $('input[type="text"], input[type="email"], textarea').css('font-size', fontInput * 1.2);
        }
        return false;
    }

    function smallerFont() {
        var fontH1 = parseInt($('h1').css('font-size'));
        var fontH2 = parseInt($('h2').css('font-size'));
        var fontInput = parseInt($('input[type="text"], input[type="email"], textarea').css('font-size'));
        if (fontInput > 12) {
            $('h1').css('font-size', fontH1 * 0.8);
            $('h2').css('font-size', fontH2 * 0.8);
            $('input[type="text"], input[type="email"], textarea').css('font-size', fontInput * 0.8);
        }
        return false;
    }

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
            $('.container-contato').removeClass('formPadrao');
            $('.container-contato').addClass('altoContraste');
            $('#barra-auxiliar').removeClass('backgroundVerde');
            $('#barra-auxiliar').addClass('altoContraste');
            
            $('#nome').removeClass('formPadrao');
            $('#nome').addClass('altoContraste');
            $('#nome').removeClass('placeholderNormal');
            $('#nome').addClass('placeholderAltoContraste');

            $('#email').removeClass('formPadrao');
            $('#email').addClass('altoContraste');
            $('#email').removeClass('placeholderNormal');
            $('#email').addClass('placeholderAltoContraste');

            $('#mensagem').removeClass('formPadrao');
            $('#mensagem').addClass('altoContraste');
            $('#mensagem').addClass('center');

            $('#botao-enviar-mensagem').removeClass('formPadrao');
            $('#botao-enviar-mensagem').removeClass('buttonPadrao');
            $('#botao-enviar-mensagem').addClass('altoContraste');
            
        } else {
            $('body').css('background-color', 'rgb(58, 175, 169)');
            $('.navegacao').css({
                'background-color': '#17252A',
                'border': 'none',
                'color': '#FEFFFF'
            });
            $('#header').css('border', 'none');
            $('.acessibilidade a').css('color', '#17252A');
            
            $('.container-contato').addClass('formPadrao');
            $('.container-contato').removeClass('altoContraste');
            $('#barra-auxiliar').removeClass('altoContraste');
            $('#barra-auxiliar').addClass('backgroundVerde');

            $('#nome').addClass('formPadrao');
            $('#nome').removeClass('altoContraste');
            $('#nome').addClass('placeholderNormal');
            $('#nome').removeClass('placeholderAltoContraste');

            $('#email').addClass('formPadrao');
            $('#email').removeClass('altoContraste');
            $('#email').addClass('placeholderNormal');
            $('#email').removeClass('placeholderAltoContraste');

            $('#mensagem').addClass('formPadrao');
            $('#mensagem').removeClass('altoContraste');
            $('#mensagem').removeClass('center');

            $('#botao-enviar-mensagem').addClass('formPadrao');
            $('#botao-enviar-mensagem').addClass('buttonPadrao');
            $('#botao-enviar-mensagem').removeClass('altoContraste');
        }
        return false;
    }
    
    $(".normal").on('click', normalFont);
    $(".aumentar").on('click', biggerFont);
    $(".diminuir").on('click', smallerFont);
    $(".alto-contraste").click(altoContraste);

    this.bind('keypress', function(e) {
        debugger;
        if (e.altKey) {
            var key = String.fromCharCode(e.which);
            switch (key) {
                case 6: 
                    smallerFont();
                    break;
                case 7:
                    normalFont();
                    break;
                case 8:
                    biggerFont();
                    break;
                case 9:
                    altoContraste();
                    break;
                default:
                    break;
            }
        }
    }
    );
  
});

