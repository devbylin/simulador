//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    // Leer los valores desde los inputs
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    let monto = recuperarFloat("txtMonto");
    let tasa = recuperarFloat("txtTasaInteres");
    let plazoAnios = recuperarFloat("txtPlazo");
    
    // Calcular disponible
    let disponible = calcularDisponible(ingresos, egresos);
    let capacidadPago = calcularCapacidadPago(disponible);
    let interesApagar = calcularInteresSimple(monto, tasa, plazoAnios);
    let totalPrestamo = calcularTotalPrestamo(monto, interesApagar);

    // Mostrar en pantalla
    document.getElementById("lblDisponibleValor").textContent = 
        "USD " + disponible.toFixed(2);

    document.getElementById("lblCapacidadPago").textContent = 
        "USD " + capacidadPago.toFixed(2);
    
    document.getElementById("spnInteresApagar").textContent =
        "USD" + interesApagar.toFixed(2);

    document.getElementById("spnTotalPrestamo").textContent =
        "USD" + totalPrestamo.toFixed(2);
}