//array donde se cargarán los datos recibidos:
let categoriesArray = [];

//Quito el contenido del div con la alerta
container=document.getElementById("container");
encabezado=document.getElementById("encabezado");



//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function traerProductos(array){
    let htmlContentToAppend = "";
    encabezado.innerHTML=`<h1>Productos</h1>
    <p>Verás aquí todos los productos de la categoría `+array.catName+`</p>`;

    for(let i = 0; i < array.products.length; i++){ 
        let category = array.products[i];
        htmlContentToAppend += `
        
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ category.name+ " - "+ category.cost+ category.currency+ `</h4> 
                        <p> `+ category.description +`</p> 
                        </div>
                        <small class="text-muted">` + category.soldCount + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        container.innerHTML = htmlContentToAppend;
    }
}


//Al cargar la página llamo a la función getJSONData, pasándole como argumento la dirección


document.addEventListener("DOMContentLoaded", function (e) {


    //Trae la informacion y la guarda en la variable productosArray
    //Luego llamo a la funcion traer productos y muestro los productos
    getJSONData(AUTOS_URL).then(function (productosObj) {
        if (productosObj.status === "ok") {
            productosArray = productosObj.data;
            //Muestro los productos que tengo
            traerProductos(productosArray);
          
        }
    });
});