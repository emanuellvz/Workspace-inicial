const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/"+extraerDelLocal("productID")+".json";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/"+extraerDelLocal("productID")+".json";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const JSON_URL="https://japceibal.github.io/emercado-api/cats_products/"+extraerDelLocal("catID")+".json";
const USER_CART_URL="https://japceibal.github.io/emercado-api/user_cart/25801.json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
let usuarioNavBar=document.getElementsByClassName("nav-item");
let usuario=extraerDelLocal("usuario");
usuarioNavBar[3].innerHTML= `<div class="dropdown col-2">
<a class=" nav-link dropdown-toggle"  data-bs-toggle="dropdown" >`+usuario+`
</a>
<ul class="dropdown-menu">
<li><a onclick="redirigirCarrito()" class="dropdown-item">Mi carrito </a></li>
<li><a onclick="redirigirPerfil()" class="dropdown-item">Mi perfil </a></li>
<li><a onclick="cerrarSesion()"class="dropdown-item">Cerrar sesión</a></li>
</ul>`;

function extraerDelLocal(nombre) {
  let a = localStorage.getItem(nombre)
  return JSON.parse(a)
}

function redirigirCarrito(){
  window.location="cart.html"
}

function redirigirPerfil(){
  window.location="my-profile.html"
}

function cerrarSesion(){
  window.location="index.html";
  localStorage.clear()
}