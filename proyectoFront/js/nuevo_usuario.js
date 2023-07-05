function guardar(){

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
    let url = 'https://romina98.pythonanywhere.com/usuarios';

    let options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: {'Content-type': 'application/json'}
    }

    fetch(url, options)
    .then(function(){  
        alert('USUARIO REGISTRADO EXITOSAMENTE');
        window.location.href = './index.html';
    })
    .catch((error)=>{
        alert('NO SE PUDO REGISTRAR EL USUARIO');
        console.error(error);
    })

}