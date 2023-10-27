
const camposObrigatorios = document.querySelector('.form-contato-form');
const form = document.querySelector('.form-contato-form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const mensagem = document.querySelector('#mensagem');
const input = document.getElementById("input");

submit.addEventListener('input', validar);

function validar(event) {
    event.preventDefault();

    let valido = true;

    if (!nome.value) {
        const mensagemErro = document.querySelector('#erroNome');
        mensagemErro.classList.add('visivel');
        nome.classList.add('invalido');
        mensagemErro.setAttribute('aria-hidden', false);
        mensagemErro.addAttribute('aria-hidden', true);
    }

    if (email.validity.typeMismatch) {
        email.setCustomValidity("Email ok.");
    } else {
        email.setCustomValidity("");
    }



    return valido;

}

