$(function(){
    $('contato').submit(function(e){
        e.preventDefault(); //impede o envio padrão do formulário

        let nome = $('input[name="nome"]').val().trim(); //pega o valor do campo nome
        let email = $('input[name="email"]').val().trim(); //pega o valor do campo email    
        let mensagem = $('textarea[name="mensagem"]').val().trim(); //pega o valor do campo mensagem

        if(nome === "" || email === "" || mensagem === ""){
            alert("Por favor, preencha todos os campos.");
            return;
        }else{
            alert("Obrigado por entrar em contato, " + nome + "! Responderemos em breve.");
            $(this).trigger('reset'); //limpa o formulário
        }
    });
});