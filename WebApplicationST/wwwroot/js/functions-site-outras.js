function validarCPF(cpf) {
    
    var regexCPF = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2}|\d{11})$/;

    
    cpf = cpf.replace(/\D/g, '');

    
    if (!regexCPF.test(cpf)) {
        return false; 
    }

    
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

   
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = 11 - (soma % 11);
    var digitoVerificador1 = resto >= 10 ? 0 : resto;

    
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
        return false;
    }

    
    soma = 0;
    for (var j = 0; j < 10; j++) {
        soma += parseInt(cpf.charAt(j)) * (11 - j);
    }
    resto = 11 - (soma % 11);
    var digitoVerificador2 = resto >= 10 ? 0 : resto;

   
    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
        return false;
    }

    return true; 
}