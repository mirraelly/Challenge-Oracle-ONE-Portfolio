const camposObrigatorios = document.querySelector('.form-contato-form');
const form = document.querySelector('.form-contato-form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const radioEmail = document.querySelector('#radio-email');
const radioTelefone = document.querySelector('#radio-telefone');
const radioWhatsapp = document.querySelector('#radio-whatsapp');
const assunto = document.querySelector('#assunto');
const mensagem = document.querySelector('#mensagem');
const input = document.getElementById("input");

atualizaRequeridos();

function validar(event) {
    form.classList.add('validado');
    event.preventDefault();

    if (!form.checkValidity()) {
        alert('Dados Inválidos!');
    } else {
        alert('Por enquanto, esse projeto contém apenas o Frontend.' + '\n' +
            'Por favor, entre em contato diretamente através das redes disponíveis.');
    }
}

nome.addEventListener('beforeinput', (event) => {
    const temEspeciais = event.data && event.data.replace(/^[A-Za-z\s]+$/gi, '').length > 0;
    const temNumeros = '0123456789'.indexOf(event.data) >= 0;
    if (event.data && (temEspeciais || temNumeros)) {
        event.preventDefault();
    }
});

telefone.addEventListener('beforeinput', (event) => {
    if (event.data && '0123456789'.indexOf(event.data) < 0) {
        event.preventDefault();
    } else if (event.data && telefone.value.length > 14) {
        event.preventDefault();
    }
})

telefone.addEventListener('keypress', (event) => {
    telefone.value = formatarTelefone(telefone.value.replace(/\D/g, ''));
});

function formatarTelefone(texto) {
    if (texto.length >= 2) {
        const ddd = texto.substring(0, 2);
        const parte1 = texto.substring(2, 6);
        const parte2 = texto.substring(6, 10);

        if (parte2) {
            if (texto.length < 10) {
                return `(${ddd}) ${parte1}-${parte2}`;
            } else {
                const parte1 = texto.substring(2, 7);
                const parte2 = texto.substring(7);

                return `(${ddd}) ${parte1}-${parte2}`;
            }
        } else if (parte1) {
            return `(${ddd}) ${parte1}`;
        } else {
            return `(${ddd}`;
        }
    } else if (texto.length > 0) {
        return '(' + texto;
    } else {
        return '';
    }
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