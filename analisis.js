// Helpers
function esPar(numero) {
    return (numero %2 === 0);
}

function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const datoUno = lista[mitad - 1];
        const datoDos = lista[mitad];
        const mediana = calcularPromedio([datoUno, datoDos,]);
        return mediana;
    } else {
        const mediana = lista[mitad];
        return mediana;
    }
}

// Media General
const salariosMex = mexico.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

// Mediana del Top 10% Mex
const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;
const salariosTopMex = salariosMexSorted.splice(spliceStart, spliceCount);

const medianaTop10Mex = medianaSalarios(salariosTopMex);


console.log({
    salariosTopMex,
    medianaGeneralMex,
    medianaTop10Mex,
});