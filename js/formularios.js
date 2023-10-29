
const camposObrigatorios = document.querySelector('.form-contato-form');
const form = document.querySelector('.form-contato-form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const assunto = document.querySelector('#assunto');
const mensagem = document.querySelector('#mensagem');
const input = document.getElementById("input");
const radioEmail = document.querySelector('#radio-email');
const radioTelefone = document.querySelector('#radio-telefone');
const radioWhatsapp = document.querySelector('#radio-whatsapp');

atualizaRequeridos();

function validar(event) {
    form.classList.add('validado');
    event.preventDefault();

    if (!form.checkValidity()) {
        alert('Dados Inválido!');
    }

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

form.addEventListener('submit', validar);

radioEmail.addEventListener('click', () => {
    email.focus();
    atualizaRequeridos();
});

radioTelefone.addEventListener('click', () => {
    telefone.focus();
    atualizaRequeridos();
});

radioWhatsapp.addEventListener('click', () => {
    telefone.focus();
    atualizaRequeridos();
});

function atualizaRequeridos() {
    if (radioEmail.checked) {
        email.setAttribute('required', true);
    } else {
        email.removeAttribute('required');
    }

    if (radioTelefone.checked || radioWhatsapp.checked) {
        telefone.setAttribute('required', true);
    } else {
        telefone.removeAttribute('required');
    }
};