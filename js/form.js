// form.js simples e testes com jQuery
// $(function(){
//     $('contato').submit(function(e){
//         e.preventDefault(); //impede o envio padrão do formulário

//         let nome = $('input[name="nome"]').val().trim(); //pega o valor do campo nome
//         let email = $('input[name="email"]').val().trim(); //pega o valor do campo email    
//         let mensagem = $('textarea[name="mensagem"]').val().trim(); //pega o valor do campo mensagem

//         if(nome === "" || email === "" || mensagem === ""){
//             alert("Por favor, preencha todos os campos.");
//             return;
//         }else{
//             alert("Obrigado por entrar em contato, " + nome + "! Responderemos em breve.");
//             $(this).trigger('reset'); //limpa o formulário
//         }
//     });
// });

// fomulário.js sem jQuery - versão pura de js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#post');;
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('Mensagem');
    const erroMensagem = document.getElementById('Mensagem-erro');
    const sucessoMensagem = document.getElementById('Mensagem-sucesso');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //impede o envio padrão do formulário
        erroMensagem.textContent = '';
        sucessoMensagem.textContent = '';
        
        //verifica se os campos estão vazios
        if(nome.value.trim() === '' || email.value.trim() === '' || mensagem.value.trim() === '') {
            erroMensagem.textContent = 'Por favor, preencha todos os campos.';
            return;
        } //estudos: trim() remove espaços em branco do início e do fim da string

        //se todos os campos estiverem preenchidos
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regexEmail.test(email.value.trim())) {
            erroMensagem.textContent = 'Por favor, insira um e-mail válido.';
            return;
            //estudos: regex para validar o formato do e-mail
        }

        //sucesso
        sucessoMensagem.textContent = 'Obrigado por entrar em contato, ' + nome.value + '! Responderemos em breve.';
        form.reset(); //limpa o formulário
    });
});