
boton=document.getElementById("ingresar").addEventListener("click",function(){
   let email=document.getElementById("email");
   let email_error=document.getElementById("error_email");
   let contrasena_error=document.getElementById("error_contrasena");
   let contrasena=document.getElementById("contrasena");
   let seCumple=true;

   if(email.value==""){
    email.classList.add("error");
    seCumple=false;
    email_error.innerHTML="Ingresa tu email";
   }

   if(email.value!=""){
    email.classList.remove("error")
    email_error.innerHTML="";
   }

   if(contrasena.value==""){
    contrasena.classList.add("error");
    seCumple=false;
    contrasena_error.innerHTML="Ingresa una contraseña";
   }

   if(contrasena.value!=""){
    contrasena.classList.remove("error")
    contrasena_error.innerHTML="";
   }

   if(seCumple){
    window.location="index.html";
   }

})
