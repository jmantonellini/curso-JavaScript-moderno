const cotizador = new API('8292f6c0eac29ec2adea189202400f69aa249101cb1b9d03ef0696248653c3bd');
const ui = new Interfaz();

cotizador.obtenerMonedasAPI();

// leer el formulario

const formulario = document.querySelector('#formulario');
// eventListener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    //  leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    
    //  leer la moneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    //  comprobar que ambos campos tengan algo seleccionado
    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        // arrojar una alerta de error
        ui.mostrarMensaje('Ambos campos son Obligatorios', 'alert bg-danger text-center');
    } else {
        // todo bien! consultar la API
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
    }
})
