// JavaScript para adicionar a animação ao rolar a página
document.addEventListener("DOMContentLoaded", function() {
    const imagens = document.querySelectorAll("img");

    function aparecerAoRolar() {
        imagens.forEach(img => {
            const imgPos = img.getBoundingClientRect().top;
            const telaAltura = window.innerHeight;
            
            if (imgPos < telaAltura) {
                img.classList.add("aparecer");
            }
        });
    }

    window.addEventListener("scroll", aparecerAoRolar);
    aparecerAoRolar(); // Executa a função para o carregamento inicial
});
