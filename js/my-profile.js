//Accedo al usuario
let usuarioLocal=extraerDelLocal("usuario");


  //Si no hay un usuario, no permito el acceso
  if(usuarioLocal==null){
    document.body.innerHTML=`<div class="alert alert-danger" role="alert">
    Debes iniciar sesión para acceder a esta funcionalidad
  </div>`
} else{ //Si hay un usuario logueado, cargo el contenido

//Cargo inputs
document.addEventListener("DOMContentLoaded", function (e) {
    let primerNombreLocal=extraerDelLocal("Primer nombre")
    let segundoNombreLocal=extraerDelLocal("Segundo nombre")
    let primerApellidoLocal=extraerDelLocal("Primer apellido")
    let segundoApellidoLocal=extraerDelLocal("Segundo apellido")
    let emailLocal=extraerDelLocal("usuario")
    let telLocal=extraerDelLocal("Contacto")
    primerNombre=document.getElementById("primerNombre").value=primerNombreLocal;
        segundoNombre=document.getElementById("segundoNombre").value=segundoNombreLocal;
        primerApellido=document.getElementById("primerApellido").value=primerApellidoLocal;
        SegundoApellido=document.getElementById("segundoApellido").value=segundoApellidoLocal;
        email=document.getElementById("email").value=emailLocal;
        telefono=document.getElementById("tel").value=telLocal;
})

//Envio de formulario
formulario.addEventListener("submit", event => {
    if ((!formulario.checkValidity())) {
        event.preventDefault()
        event.stopPropagation()
        formulario.classList.add("was-validated")
    } else{
        primerNombre=document.getElementById("primerNombre").value;
        segundoNombre=document.getElementById("segundoNombre").value;
        primerApellido=document.getElementById("primerApellido").value;
        SegundoApellido=document.getElementById("segundoApellido").value;
        email=document.getElementById("email").value;
        telefono=document.getElementById("tel").value;
        agregarAlLocal("Primer nombre", primerNombre );
        agregarAlLocal("Segundo nombre",segundoNombre );
        agregarAlLocal("Primer apellido", primerApellido);
        agregarAlLocal("Segundo apellido", SegundoApellido );
        agregarAlLocal("E-mail", email );
        agregarAlLocal("Contacto",telefono )
        
        formulario.classList.add("was-validated")
        event.preventDefault()
        event.stopPropagation()
    }
})

}

function agregarAlLocal(nombre, objeto) {
    let a = JSON.stringify(objeto)
    localStorage.setItem(nombre, a)
 }
 function removerDelLocal(nombre) {
    localStorage.removeItem(nombre)
 }

 function extraerDelLocal(nombre) {
    let a = localStorage.getItem(nombre)
    return JSON.parse(a)
  }




