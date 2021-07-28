// Código del cuadrado
console.group('Cuadrados')
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
} 
perimetroCuadrado();

// console.log(`El perímetro del cuadrado mide ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
    return lado * lado;
} 
areaCuadrado();
// console.log(`El área del cuadrado mide ${areaCuadrado}cm^2`);
console.groupEnd();

// Código del triángulo
// console.group('Triángulos')
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
// console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

// Código del círculo
console.group('Círculos');
// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo}cm`)

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