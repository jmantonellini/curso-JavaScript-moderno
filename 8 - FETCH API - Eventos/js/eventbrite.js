class EventBrite {
    constructor() {
        this.token_auth = 'V5K2HZKY7R5MBZHJKDYR';
        this.ordenar = 'date';
    }

    // Obtiene las categorías en init()
    async obtenerCategorias() {
        // Consutlar las categorías a la REST API de event brite
        const respuestaCategorias = await fetch
        (`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // Esperar la respuesata de las categorías y devolver un JSON
        const categorias = await respuestaCategorias.json();

        // Devolvemos el resultado
        return {
            categorias
        }
    }

}