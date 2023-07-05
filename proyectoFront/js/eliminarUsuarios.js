const {createApp} = Vue

createApp({
    data(){
        return{
            listUsuarios: [],
            url: 'https://romina98.pythonanywhere.com/usuarios',
            //url: ' http://127.0.0.1:5000/usuarios',
            cargando: true,
            error: false,
            form: {
                nombre: '',
                apellido: '',
                mail: '',
                dni:'',
                tel: '',
                imagen:''
            }
        }
    },
 
    
    methods:{
        //aca estamos consumiendo la api
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data =>{
                this.listUsuarios = data;//guardo todos los registros que me devuelve la api
                this.cargando = false;
            })
            .catch(err =>{
                console.error(err);
                this.error = true;
            })
        },

        eliminar(id){
            const url = this.url + "/" + id;
            let option = {
                method: "DELETE",
            }

            fetch(url,option)
            .then(response => response.json())
            .then(data => {
                location.reload();//recarga el html donde estoy
            })
            .catch(err =>{
                console.error(err)
            })
        }

    },

    created(){
        this.fetchData(this.url);
    }
}).mount('#app')
