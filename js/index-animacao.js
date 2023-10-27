var typed = new Typed('#titulo-animacao', {
    strings: ['Olá, meu nome é Mirraely Moura e construo sistemas web'],
    loop: true,
    typeSpeed: 100,
});

$(function () {
    $('.container').starfield({
        starDensity: 1.0,
        mouseScale: 0.1,
        seedMovement: false
    });
});