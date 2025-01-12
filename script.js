function calcularIMC(peso, altura) {
    return peso / ((altura / 100) ** 2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc < 34.9) {
        return 'Obesidade grau 1';
    } else if (imc < 39.9) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}

function pegarDadosECalcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var imc = calcularIMC(peso, altura);
    var classificacao = classificarIMC(imc);
    
    document.getElementById('resultado').innerText = "Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao;
}