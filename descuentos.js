function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioTotal = (precio * porcentajeConDescuento)/100;
    return precioTotal;
}

function precioConDescuento() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");

    const valuePrice = inputPrice.value;
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}