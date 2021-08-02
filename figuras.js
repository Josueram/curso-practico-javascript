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
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
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
    const inputAltura = document.getElementById("InputTrianguloAltura");

    const valueBase = parseInt(inputBase.value);
    const valueAltura = parseInt(inputAltura.value);
    
    const area = areaTriangulo(valueBase, valueAltura);
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