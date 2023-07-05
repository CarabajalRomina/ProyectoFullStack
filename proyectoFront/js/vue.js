// Creamos nuestra aplicación para el header.
const miapp1 = Vue.createApp({
    components: {
        'componente_header': componente_header,
    },
    data() {
        return {
        }
    },
}).mount("#header")
