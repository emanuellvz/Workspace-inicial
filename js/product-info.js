
container=document.getElementById("container_info");
encabezado=document.getElementById("encabezado_info");
comentarios=document.getElementById("comentarios");
inputComentario=document.getElementById("ingresarComentario");
btnEnviar=document.getElementById("enviar");
puntuacion=document.getElementById("puntuacion");
relacionados=document.getElementById("prod_relacionados");
product=document.getElementById("prod_relacionados");

//Traer info producto
function traerInfo(info){
    let htmlContentToAppend = "";
    encabezado.innerHTML=`<h1>`+ info.name+ `</h1><hr>`;
        htmlContentToAppend += 
        ` <div class="row">
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
         

          
        //Cargar imágenes
        container.innerHTML = htmlContentToAppend;
        for(let i=0; i < info.images.length; i++){
            let imagenes=document.getElementById("imagenes");
            imagenes.innerHTML+=
            `<img src="`+info.images[i]+`">`;
        };

        //Productos Relacionados
        for(let i=0; i < info.relatedProducts.length; i++){
            product.innerHTML+=`
            <div onclick="setProductID(${info.relatedProducts[i].id})" class="col-3">
            <img src="`+info.relatedProducts[i].image+`">
            <p>`+info.relatedProducts[i].name+`</p>
            </div>
            </div>`
        };
       
}

//Traer Comentarios
function traerComentarios(lista){
    let htmlContentToAppend="";
    comentarios.innerHTML=
    `<h1>Comentarios</h1>`
    for(let i=0;i<lista.length;i++){
        let comentario=lista[i];
        puntos=comentario.score;
htmlContentToAppend+=`
<div>
<p><strong>`+comentario.user+`</strong> -
`+comentario.dateTime+` - 
${stars(puntos)}</p>
<p>`+comentario.description+`</p>
</div>`
    }
    comentarios.innerHTML+=htmlContentToAppend;
}

//Traer Estrellas
function stars(puntos) {
    let estrellas = '';
    for (i = 1; i <= 5; i++) {
        if (i <= puntos) {
            estrellas += `<span class="fa fa-star checked" id=${i}></span>`;
        } else {
            estrellas += `<span class="fa fa-star" id=${i}></span>`;
        }
        console.log(puntos);
    }
    return estrellas;
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

function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location="product-info.html";
  }
