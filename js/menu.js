const header = document.querySelector('header');
const links = document.querySelectorAll('.menu-nav ul li a');

atualizarMenu();

window.addEventListener('scroll', () => {
    diminuirMenu()
});

function diminuirMenu() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('reduzido');
    } else {
        header.classList.remove('reduzido');
    }
}

function atualizarMenu() {
    links.forEach((link) => {
        if (link.hash === window.location.hash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('hashchange', (event) => {
    atualizarMenu();
});
