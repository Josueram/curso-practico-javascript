function moda () {
    const input = document.getElementById('lista');
    const value = input.value;
    const arreglo = value.split(', ');

    const valorModa = calcularModa(arreglo);
    const resultModa = document.getElementById("resultModa");
    resultModa.innerText = "La Moda es: " + valorModa[0];
}

function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function (elemento) {
            if(listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaOrdenada = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    const moda = listaOrdenada[listaOrdenada.length - 1];
    return moda;
}

// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1,
// ];

// const lista1Count = {};

// lista1.map(
//     function (elemento) {
//         if(lista1Count[elemento]) {
//             lista1Count[elemento] += 1;
//         } else {
//             lista1Count[elemento] = 1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function (valorAcumulado, nuevoValor) {
//         return valorAcumulado[1] - nuevoValor[1];
//     }
// );

// const moda = lista1Array[lista1Array.length - 1];