//array donde se cargarán los datos recibidos:
let productosArray = [];
//Selecciono container y encabezado
container=document.getElementById("container");
encabezado=document.getElementById("encabezado");


function filtrarProductos(array){
  let htmlContentToAppend = "";
  encabezado.innerHTML=`<h1>Productos</h1>
  <p>Verás aquí todos los productos de la categoría `+array.catName+`</p>`;

  for(let i = 0; i < array.products.length; i++){ 


      let category = array.products[i];

      if((!(parseInt(category.cost)<min)) && (!(parseInt(category.cost)>max)))
      {
      
      htmlContentToAppend += `
      
      <div onclick="setProductID(${category.id})"class="list-group-item list-group-item-action">
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
     // console.log(buscar)
      }
/*
      else if (category.name==buscar){
        
         // console.log(buscar);
        htmlContentToAppend += `
        
        <div onclick="setProductID(${category.id})"class="list-group-item list-group-item-action">
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
        
      }*/
  }
}
//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function traerProductos(array){
    let htmlContentToAppend = "";
    encabezado.innerHTML=`<h1>Productos</h1>
    <p>Verás aquí todos los productos de la categoría `+array.catName+`</p>`;

    for(let i = 0; i < array.products.length; i++){ 
        let category = array.products[i];
      {
       
        htmlContentToAppend += `
        
        <div onclick="setProductID(${category.id})"class="list-group-item list-group-item-action">
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
}


//Al cargar la página llamo a la función getJSONData, pasándole como argumento la dirección


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(JSON_URL).then(function (productosObj) {
        if (productosObj.status === "ok") {
            productosArray = productosObj.data;
            //Muestro los productos que tengo
            traerProductos(productosArray);

            
        }
    });
   
});

document.getElementById("filtrar").addEventListener("click", function(){
  buscar=document.getElementById("buscar").value;

  min=parseInt(document.getElementById("min").value);
  max=parseInt(document.getElementById("max").value);
  filtrarProductos(productosArray);
  //console.log(buscar);
})

document.getElementById("limpiar").addEventListener("click",function(){
 document.getElementById("min").value="";
 document.getElementById("max").value="";
 min=undefined;
 max=undefined;
 traerProductos(productosArray)  
})

document.getElementById("min_button").addEventListener("click",function(){
  console.log(productosArray.products);
  productosArray.products.sort(function (a, b) {
      if (a.cost > b.cost) {
        return 1;
      }
      if (a.cost < b.cost) {
        return -1;
      }
     
      return 0;
    });
 traerProductos(productosArray)
})

document.getElementById("max_button").addEventListener("click",function(){
  console.log(productosArray.products);
  productosArray.products.sort(function (a, b) {
      if (a.cost < b.cost) {
        return 1;
      }
      if (a.cost > b.cost) {
        return -1;
      }
     
      return 0;
    });
 traerProductos(productosArray)
})

document.getElementById("rel_button").addEventListener("click",function(){
  console.log(productosArray.products);
  productosArray.products.sort(function (a, b) {
      if (a.soldCount < b.soldCount) {
        return 1;
      }
      if (a.soldCount > b.soldCount) {
        return -1;
      }
     
      return 0;
    });
 traerProductos(productosArray)
})

function setProductID(id) {
  localStorage.setItem("productID", id);
}
container.addEventListener("click",function(){
  window.location="product-info.html";
})




        
