class Interfaz {
    constructor() {
        // Inicializa la app al instanciar
        this.init();
        // Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    // Método para cuando inicializa la app
    init() {
        // Llamar a imprimirCategorias de la REST API
        this.imprimirCategorias();
    }

    // Imprimir catergorías
    imprimirCategorias() {
        const listaCatergorias = eventBrite.obtenerCategorias()
        .then(categorias => {
            const cats = categorias.categorias.categories;
            // Seleccionar el select de categorías
            const selectCategoria = document.getElementById('listado-categorias');

            // Recorremos el carreglo e imprimimops los <option>
            cats.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat.id;
                option.appendChild(document.createTextNode(cat.name_localized));
                selectCategoria.appendChild(option);
            });
        })
    }
}