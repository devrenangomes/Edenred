// Este evento garante que o nosso código só será executado depois que
// todo o conteúdo da página (HTML) for completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SELECIONAR OS ELEMENTOS
    // Selecionamos todas as imagens dentro do carrossel.
    const slides = document.querySelectorAll('.carousel-slide img');
    // Selecionamos todos os pontos de navegação.
    const dots = document.querySelectorAll('.dot');
    
    // 2. DEFINIR VARIÁVEIS DE CONTROLE
    // 'currentSlide' guarda o índice (posição) do slide que está visível. Começa em 0 (o primeiro).
    let currentSlide = 0;
    // 'slideInterval' é o tempo em milissegundos que cada imagem ficará na tela. 4000ms = 4 segundos.
    const slideInterval = 4000;

    // 3. FUNÇÃO PARA MOSTRAR UM SLIDE ESPECÍFICO
    // Esta função é o coração do carrossel. Ela recebe um número (index) e mostra o slide correspondente.
    function showSlide(index) {
        // Primeiro, remove a classe 'active' de todas as imagens e de todos os pontos.
        // Isso garante que apenas um de cada vez estará ativo.
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Agora, adiciona a classe 'active' apenas na imagem e no ponto da posição 'index'.
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // 4. FUNÇÃO PARA AVANÇAR PARA O PRÓXIMO SLIDE
    function nextSlide() {
        // A mágica acontece aqui:
        // Incrementamos o 'currentSlide'. O operador '%' (módulo) faz com que o contador
        // volte a 0 quando atingir o número total de slides.
        // Ex: Se temos 3 slides (0, 1, 2), quando o 'currentSlide' for 3, (3 % 3) será 0.
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Chamamos a função showSlide para exibir o novo slide calculado.
        showSlide(currentSlide);
    }

    // 5. INICIAR O CARROSSEL
    // Para não esperar 4 segundos para a primeira imagem aparecer,
    // mostramos o primeiro slide (índice 0) assim que a página carrega.
    showSlide(currentSlide); 
    
    // 'setInterval' é uma função do JavaScript que executa 'nextSlide' repetidamente
    // a cada 'slideInterval' (4 segundos). É isso que automatiza o carrossel.
    setInterval(nextSlide, slideInterval);
});