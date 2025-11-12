$(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        const destino = $($(this).attr('href'));

        if (destino.length) {
            $('html, body').animate({
                scrollTop: destino.offset().top - 50 // ajuste a margem conforme o cabeçalho
            }, 500); // duração da animação
        }
    });
});
