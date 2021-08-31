let atras = document.getElementById('atras');
let frente = document.getElementById('frente');
let titulo = document.getElementById('titulo');

window.addEventListener('scroll', function () {
    let valor = window.scrollY;
    atras.style.top = valor * 0.5 + 'px';
    frente.style.top = valor * 0 + 'px';
    titulo.style.marginRight = valor * 4 + 'px';
})