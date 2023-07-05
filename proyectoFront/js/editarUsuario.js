// Obtener la URL actual
var url = window.location.href;

// Crear un objeto URL
var parsedUrl = new URL(url);

// Obtener los parámetros de la URL
var params = new URLSearchParams(parsedUrl.search);

// Obtener los valores de los parámetros y guardarlos en variables
var id = params.get("id");
var nombre = params.get("nombre");
var apellido = params.get("apellido");
var mail = params.get("mail");
var dni = params.get("dni");
var tel = params.get("tel");
var imagen = params.get("imagen");

let idUsuario = document.getElementById('idUsuario').value = params.get("id");
let nom = document.getElementById('nombre').value = params.get("nombre");
let ape = document.getElementById('apellido').value = params.get("apellido");
let ma = document.getElementById('mail').value = params.get("mail");
let dn = document.getElementById('dni').value = params.get("dni");
let te = document.getElementById('tel').value = params.get("tel");
let imag = document.getElementById('imagen').value = params.get("imagen");

function limpiarUrl(){

        // Obtener referencia al campo de entrada
        var input = document.getElementById('imagen');
      
        // Limpiar el valor del campo de entrada
        input.value = "";
    }
      



function editarUsuario(){
    let idUsuario = document.getElementById('idUsuario').value;
    let nom = document.getElementById('nombre').value;
    let ape = document.getElementById('apellido').value;
    let ma = document.getElementById('mail').value;
    let dn = document.getElementById('dni').value;
    let te = document.getElementById('tel').value;
    let imag = document.getElementById('imagen').value;


    let usuario= {
        nombre: nom,
        apellido: ape,
        mail: ma,
        dni: dn,
        tel: te,
        foto_usuario: imag
    }

    //let url = 'http://127.0.0.1:5000/usuarios';
    let url = 'https://romina98.pythonanywhere.com/usuarios/'+idUsuario;


    let options = {
        body: JSON.stringify(usuario),
        method: 'PUT',
        headers: {'Content-type': 'application/json'}
    }

    fetch(url, options)
        .then(function(){
            alert('LOS DATOS DEL USUARIO SE ACTUALIZARON EXITOSAMENTE');
            window.location.href = './index.html';
        })
        .catch(err =>{
            alert('NO SE PUDIERON ACTUALIZAR LOS DATOS DEL USUARIO');
            console.error(err);
        })
    
}