const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioTotal = (precio * porcentajeConDescuento)/100;
    return precioTotal;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioTotal,
// })

