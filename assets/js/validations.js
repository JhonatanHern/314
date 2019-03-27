'use strict'

const validations = () => {
    let valid = true;
    let name = $('#first-name').val();
    let email = $('#author').val();
    let subject = $('#subject').val();
    let message = $('#message').val();

    if (spaceValidation(name)) {
        alert('Por favor, revisa tu nombre')
        valid = false;
    } else if (spaceValidation(email)){
        alert('Por favor, revisa tu correo')
        valid = false;
    } else if (spaceValidation(subject)){
        alert('Por favor, revisa el asunto de tu mensaje')
        valid = false;
    } else if (spaceValidation(message)){
        alert('Por favor, escribe tu mensaje')
        valid = false;
    } 
    return valid; 
}

const spaceValidation = value => {
    return !value || (value +'').trim().length === 0;
}



