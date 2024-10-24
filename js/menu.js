const header = document.querySelector('header');
const opcoesMenu = document.querySelector('.menu-nav ul');
const links = document.querySelectorAll('.menu-nav ul li a');
const sections = document.querySelectorAll("main > section");
const iconeMenu = document.querySelector('.icone-menu');

atualizarMenu();

window.addEventListener('scroll', () => {
    diminuirMenu();

    var scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 50;
    let sectionAtual = sections[0];

    for (const section of sections) {
        if (section.offsetTop >= scrollPosition) {
            break;
        }
        sectionAtual = section;
    }

    links.forEach((link) => {
        link.classList.remove('active');
    });

    const itemMenu = document.querySelector('.menu-nav ul li a[href*="#' + sectionAtual.id + '"]');
    itemMenu.classList.add('active');
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

window.addEventListener('hashchange', () => {
    atualizarMenu();
});


// Responsive menu
iconeMenu.addEventListener('click', () => {
    const visible = menuVisivel(opcoesMenu);

    if (visible == true) {
        esconderMenu(opcoesMenu);
    } else {
        mostrarMenu(opcoesMenu);
    }
});

function esconderMenu(menu) {
    menu.classList.add('mostrar-menu');
}

function mostrarMenu(menu) {
    menu.classList.remove('mostrar-menu');
}

function menuVisivel(menu) {
    return !menu.classList.contains('mostrar-menu');
}

