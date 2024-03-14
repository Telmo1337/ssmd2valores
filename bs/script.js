//função para somar
function obterSoma(num1, num2) {
    return num1 + num2;
}

function mostrarSoma() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const soma = obterSoma(num1, num2);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `A soma de ${num1} e ${num2} é de ${soma}`;
}

//função para subtrair
function obterSubtracao(num1, num2){

    return num1 - num2;
}

function mostrarSubtracao() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const subtracao = obterSubtracao(num1, num2);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `A subtração de ${num1} e ${num2} é de ${subtracao}`;
}

//função para multiplicar
function obterMultiplicar(num1, num2){
    return num1 * num2;
}

function mostrarMultiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const multiplicar = obterMultiplicar(num1, num2);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `A multiplicação de ${num1} e ${num2} é de ${multiplicar}`;
}

//função para dividir
function obterDividir(num1, num2) {
    return num1 / num2;
}

function mostrarDividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if(isNaN(num1) || isNaN(num2)){
        alert('Por favor, insira números válidos.');
        return;
    }

    const dividir = obterDividir(num1, num2);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `A divisão de ${num1} e ${num2} é de ${dividir}`;
}