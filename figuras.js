// Código del cuadrado
console.group('Cuadrados')
function perimetroCuadrado(lado) {
    return lado * 4;
} 
perimetroCuadrado();

function areaCuadrado(lado) {
    return lado * lado;
} 
areaCuadrado();
console.groupEnd();

// Código del triángulo
console.group('Triángulos')
function perimetroTriangulo(ladoA, ladoB, base) {
    return ladoA + ladoB + base;
}

function areaTriangulo(ladoA, ladoB, base) {
    const altura = calcularAltura(ladoA, ladoB, base);
    return (base * altura) / 2;
}

function calcularAltura(ladoA, ladoB, base) {    
    if(ladoA === ladoB && ladoA != base){
        const altura = Math.sqrt((ladoA * ladoA) - ((base * base)/4));
        return altura;
    } else {
        return("Su triangulo no es isósceles");
    }
}

console.groupEnd();

// Código del círculo
console.group('Círculos');

function diametroCirculo(radio) {
    return radio * 2;
} 

const PI = Math.PI;
console.log(`El valor de PI es: ${PI}`)

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTrianguo() {
    const inputLadoA = document.getElementById("InputTrianguloLadoA");
    const inputLadoB = document.getElementById("InputTrianguloLadoB");
    const inputBase = document.getElementById("InputTrianguloBase");
    
    const valueA = parseInt(inputLadoA.value);
    const valueB = parseInt(inputLadoB.value);
    const valueBase = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputLadoA = document.getElementById("InputTrianguloLadoA");
    const inputLadoB = document.getElementById("InputTrianguloLadoB");

    const valueBase = parseInt(inputBase.value);
    const valueLadoA = parseInt(inputLadoA.value);
    const valueLadoB = parseInt(inputLadoB.value);
    
    const area = areaTriangulo(valueLadoA, valueLadoB, valueBase);
    alert(area);
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputCirculoRadio");
    const valueRadio = parseInt(inputRadio.value);

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputCirculoRadio");
    const valueRadio = parseInt(inputRadio.value);
    
    const area = areaCirculo(valueRadio);
    alert(area);
}