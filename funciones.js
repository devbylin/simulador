//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
//Calcular el dinero disponible despues de restar egresos

function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;
    
    if (disponible < 0) {
        return 0;
    }
    
    return disponible;
}