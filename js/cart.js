articulos=document.getElementById("articulos");

formulario=document.getElementById("formulario");

comprar=document.getElementById("comprar");

//Función para recorrer carrito
function traerProductos(info){
    let htmlContentToAppend = "";
        htmlContentToAppend += 
        ` <div class="row">
        <div class="col-2" style="padding-left:50px; padding-top:0px"><img class=col-12 src="${info.image}" style="width:70px"></div>
        <div class="col-2">${info.name}</div>
        <div class="col-2">USD ${info.unitCost}</div>
        <div class="col-2"><input type="number" id="cantidad" style="width:60px" value="${info.count}"></div>
        <div class="col-2" id="subtotal"></div>
        <div class="col-2"></div>
            </div>
            <hr>`
            articulos.innerHTML=htmlContentToAppend;
}

//Obtengo información del carrito
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(USER_CART_URL).then(function (carrito) {
        if (carrito.status === "ok") {
            carritoInfo = carrito.data.articles[0];
            traerProductos(carritoInfo);

            //selectores para cantidad y subtotal
            subtotal=document.getElementById("subtotal");
            cantidad=document.getElementById("cantidad");

            //Muestro subtotal
            suma=carritoInfo.unitCost*cantidad.value
            subtotal.innerHTML=`<strong>USD ${suma}</strong>`;

            //Escucha evento keyup de input cantidad
            cantidad.addEventListener("keyup",function(){
                suma=carritoInfo.unitCost*cantidad.value
                subtotal.innerHTML=`<strong>USD ${suma}</strong>` 
                });
            //Escucha Evento click de input cantidad
            cantidad.addEventListener("click",function(){
               suma=carritoInfo.unitCost*cantidad.value
               subtotal.innerHTML=`<strong>USD ${suma}</strong>` 
                    });       
                
        }
    })
});

formulario.addEventListener("submit", event => {
   
    if ((!formulario.checkValidity())) {
        event.preventDefault()
        event.stopPropagation()
        console.log("formulario no enviado")
        formulario.classList.add("was-validated")
        console.log(formulario);
    } else{
        formulario.classList.add("was-validated")
        console.log("formulario enviado")
        console.log(formulario);
    }
})

