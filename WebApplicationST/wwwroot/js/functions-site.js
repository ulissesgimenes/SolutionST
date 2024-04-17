function validarCEP(cep) {

    var regexCEP = /^\d{5}-?\d{3}$/;


    if (regexCEP.test(cep)) {
        return true;
    } else {
        return false;
    }
}