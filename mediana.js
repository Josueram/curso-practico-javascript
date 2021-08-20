function esPar(numero ) {
    if(numero %2 === 0) {
        return true;
    } else {
        return false;
    }
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

function calcularMedia() {
    const input = document.getElementById("lista");
    const value = input.value;
    const arreglo = value.split(', ');

    const valorMedia = media(arreglo);

    const resultM = document.getElementById("resultMedia");
    resultM.innerText = "La Mediana es: " + valorMedia;
}

function media(lista) {
    function comparar ( a, b ){ return a - b; }
    const listaOrdenada = lista.sort(comparar);
    
    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana;

    if(esPar(listaOrdenada.length)) {
        const elementoUno = parseInt(listaOrdenada[mitadLista - 1]);
        const elementoDos = parseInt(listaOrdenada[mitadLista]);
        const promedio = calcularPromedio([
            elementoUno,
            elementoDos,
        ]);

        mediana = promedio;
        return mediana;
    } else {
        mediana = listaOrdenada[mitadLista];
        return mediana;
    }
}