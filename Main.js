$(document).ready(function(){
    $('#Carrosel').slick({
        autoplay: true,
    });
    $('#teste').on('click', function(){
        $('.Conteiner').slideToggle();
    })

    $('#Telefone').mask('(00) 00000-0000');

    $('#CEP').mask('00000-000');
    
    $('#CPF').mask('000.000.000-00');

    $('form').validate({
        submitHandler: function(form){
            $('.Cadastro').fadeOut();
        },
    })

    $('.Conteiner a').on('click', function(){
        const Rolagem = $('#Hits');        
        $('html').animate({
            scrollTop: Rolagem.offset().top
        }, 1000)
    })
    $('.Sobrbre button').on('click', function(){
        const Rolagem = $('.Feedback');
        $('html').animate({
            scrollTop: Rolagem.offset().top
        }, 1000)
    })

    $('.Conteiner a').on('click', function(){

    })
})            
