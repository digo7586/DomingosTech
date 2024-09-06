const header = document.querySelector("header");
let lastScrollTop = 0; // Variável para armazenar a última posição de rolagem

// Evento de rolagem
window.addEventListener("scroll", function() {
    // Alternar a classe 'sticky' com base na posição de rolagem
    header.classList.toggle("sticky", window.scrollY > 100);

    // Esconder ou mostrar o header com base na direção do scroll
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo: esconde o header
        header.classList.add("hidden");
    } else {
        // Rolando para cima: mostra o header
        header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;

    // Funções para mostrar elementos no scroll
    showNavOnScroll();
    showButtonWhatsappOnScroll();
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Alternar classe ao clicar no menu
menu.onclick = () => {
    menu.classList.toggle('fa-solid');
    navlist.classList.toggle('open');
};

// Fechar o menu ao rolar a página
window.onscroll = () => {
    menu.classList.remove('fa-solid');
    navlist.classList.remove('open');
};

// Função para mostrar a navegação com rolagem
function showNavOnScroll() {
    if (scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll");
    } else {
        document.querySelector("#navigation").classList.remove("scroll");
    }
}

// Função para mostrar o botão do WhatsApp ao rolar
function showButtonWhatsappOnScroll() {
    if (scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show");
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show");
    }
}

// Funções para expandir e fechar o menu
function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}
