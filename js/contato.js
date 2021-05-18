// validação CPF
function VerificaCPF() {
    strCpf = document.getElementById('cpf').value;
    strCpf = cpf.replace(/[^\d]/g, "");
    var soma = 0;
    var resto;
    if (strCpf == "00000000000" || strCpf == "11111111111" || strCpf == "22222222222" || strCpf == "33333333333" || strCpf == "44444444444" || strCpf == "55555555555" || strCpf == "66666666666" || strCpf == "77777777777" || strCpf == "88888888888" || strCpf == "99999999999" || strCpf.length != 11) {
        alert("CPF Inválido");
        return false;
    }
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
        console.log("soma1: " + soma)
    }
    resto = (soma * 10) % 11;
    //cpf verdadeiro
    if (resto == 10 || resto == 11) {
        resto = 0;
    }

    if (resto != parseInt(strCpf.substring(9, 10))) {
        alert("CPF Inválido");
        return false;
    }
    soma = 0;
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
        console.log("soma2: " + soma)
    }
    resto = (soma * 10) % 11;

    //cpf verdadeiro
    if (resto == 10 || resto == 11) {
        resto = 0;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {
        alert("CPF Inválido");
        return false;
    }
    //cpf verdadeiro
    else {
        return true;
    }
}

//validação CNPJ

function validarCNPJ() {
    cnpj = document.getElementById('cnpj').value;
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') {
        alert("CNPJ Inválido");
        return false;
    }

    if (cnpj.length != 14) {
        alert("CNPJ Inválido");
        return false;
    }

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999") {
        alert("CNPJ Inválido");
        return false;
    }

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        alert("CNPJ Inválido");
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        alert("CNPJ Inválido");
        return false;
    }

    return true;

}