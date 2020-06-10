// Variables
const presupuetoUsuario = prompt('Cual es tu presupuesto semanal)');
let cantidadPresupuesto;


console.log(presupuetoUsuario);



// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    // Método para ir restanto del presupuesto actual
    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad1200);
    }
}

class Interfaz {
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        // Insertar al HTML
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
}



// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    if (presupuetoUsuario === null || presupuetoUsuario === '') {
        window.location.reload();
    } else {
        // Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuetoUsuario);
        // Instanciar la clase de Interafaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});