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
    let cuotaMensual = calcularCuotaMensual(totalPrestamo, plazoAnios);

    let esAprobado = aprobarCredito(capacidadPago, cuotaMensual);


    // Mostrar en pantalla
    document.getElementById("lblDisponibleValor").textContent = 
        "USD " + disponible.toFixed(2);

    document.getElementById("lblCapacidadPago").textContent = 
        "USD " + capacidadPago.toFixed(2);
    
    document.getElementById("spnInteresApagar").textContent =
        "USD" + interesApagar.toFixed(2);

    document.getElementById("spnTotalPrestamo").textContent =
        "USD" + totalPrestamo.toFixed(2);

    document.getElementById("spnCuotaMensual").textContent =
        "USD" + cuotaMensual.toFixed(2);
        
    document.getElementById("lblDisponibleValor").textContent =
        "USD" + disponible.toFixed(2);

    document.getElementById("spnEstadoCredito").textContent = esAprobado ? "✅ APROBADO" : "❌ RECHAZADO";
    document.getElementById("spnEstadoCredito").style.color = esAprobado ? "#4ade80" : "#f87171";
}
document.getElementById('btnReiniciar').addEventListener('click', function() {
    // Limpiar campos principales
    document.getElementById('txtIngresos').value = '';
    document.getElementById('txtEgresos').value = '';
    document.getElementById('txtMonto').value = '';
    document.getElementById('txtPlazo').value = '';
    document.getElementById('txtTasaInteres').value = '';
    
    // Limpiar resultados
    document.getElementById('lblDisponibleValor').textContent = '';
    document.getElementById('lblCapacidadPago').textContent = '';
    document.getElementById('spnInteresApagar').textContent = '';
    document.getElementById('spnTotalPrestamo').textContent = '';
    document.getElementById('spnCuotaMensual').textContent = '';
    document.getElementById('spnEstadoCredito').textContent = 'ANALIZANDO...';
    
    // Resetear slider
    document.getElementById('monto-slider').value = 750000;
    document.getElementById('monto-val').textContent = '750,000';
});