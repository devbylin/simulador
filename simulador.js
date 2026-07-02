//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    // Leer los valores desde los inputs
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    
    // Calcular disponible
    let disponible = calcularDisponible(ingresos, egresos);
    let capacidadPago = calcularCapacidadPago(disponible);
    
    // Mostrar en pantalla
    document.getElementById("lblDisponibleValor").textContent = 
        "USD " + disponible.toFixed(2);


    document.getElementById("lblCapacidadPago").textContent = 
        "USD " + capacidadPago.toFixed(2);
        
}