
container=document.getElementById("container_info");
encabezado=document.getElementById("encabezado_info");
comentarios=document.getElementById("comentarios");
inputComentario=document.getElementById("ingresarComentario");
btnEnviar=document.getElementById("enviar");
puntuacion=document.getElementById("puntuacion");

function traerInfo(info){
    let htmlContentToAppend = "";
    encabezado.innerHTML=`<h1>`+ info.name+ `</h1><hr>`;
        htmlContentToAppend += `
        
       
            <div class="row">
            <strong>Precio</strong> 
            <p> UYU `+info.cost+`</p>
           </div>
            <div class="row">
            <strong>Descripción</strong>
            <p>`+info.description+`</p>
            </div>
             <div class="row">
             <strong>Categoría</strong>
             <p>`+info.category+`</p>
            </div>
            <div class="row">
            <strong>Cantidad de vendidos</strong>
            <p>`+info.soldCount+`</p>
            </div>
            <div class="row">
            <strong>Imágenes ilustrativas</strong>
            <div id="imagenes"></div>
            </div>`

          

        container.innerHTML = htmlContentToAppend;
        for(let i=0; i < info.images.length; i++){
            let imagenes=document.getElementById("imagenes");
            imagenes.innerHTML+=
            `<img src="`+info.images[i]+`">`;
        };
       
}

function traerComentarios(lista){
    let htmlContentToAppend="";
    comentarios.innerHTML=
    `<h1>Comentarios</h1>`
    for(let i=0;i<lista.length;i++){
        let comentario=lista[i];
        
htmlContentToAppend+=`
<div>
<p><strong>`+comentario.user+`</strong> -
`+comentario.dateTime+` - 
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
<p>`+comentario.description+`</p>
</div>`
/*
let estrella=document.getElementsByClassName("fa-star");
console.log(estrella.length);
for(let i=0;i<estrella.length;i++){
    console.log(1);
}*/
    }
    comentarios.innerHTML+=htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (info) {
        if (info.status === "ok") {
            productInfo = info.data;
            traerInfo(productInfo);    
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (comentariosObj) {
        if (comentariosObj.status === "ok") {
            comentariosArray = comentariosObj.data;
            traerComentarios(comentariosArray);    
        }
    });
   
});

enviar.addEventListener("click", function(){
    console.log(inputComentario.value)
    inputComentario.value="";
    console.log(puntuacion.value)
})