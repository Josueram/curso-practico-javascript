function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioTotal = (precio * porcentajeConDescuento)/100;
    return precioTotal;
}

function calcularPrecioConCupon(precioConDescuento, cupon) {
    const porcentajeConCupon = 100 - cupon;
    const precioTotalCupon = (precioConDescuento * porcentajeConCupon)/100;
    return precioTotalCupon;
}

function nombreCupon(nombreCupon) {
    if(nombreCupon == 'new') {
        const cupon = 10;
        return cupon;
    } else if(nombreCupon == 'de15') {
        const cupon = 15;
        return cupon;
    } else if(nombreCupon == 'de30') {
        const cupon = 30;
        return cupon;
    } else {
        const cupon = 0
        return cupon;
    }
}

function precioConDescuento() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const inputCupon = document.getElementById("InputCupon");

    const valuePrice = inputPrice.value;
    const valueDiscount = inputDiscount.value;
    const valueCupon = inputCupon.value;


    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);
    const valorDelCupon = nombreCupon(valueCupon);
    const precioConCupon = calcularPrecioConCupon(precioConDescuento, valorDelCupon);
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento es: $" + precioConCupon;
}