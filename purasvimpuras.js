// Función pura
function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje) / 100;
}

// Función impura
function aplicarDescuento(precio, porcentaje) {
    const nuevoPrecio = calcularDescuento(precio, porcentaje);
    console.log(`El nuevo precio es: ${nuevoPrecio}`); // Efecto secundario
    return nuevoPrecio;
}
