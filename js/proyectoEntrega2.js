/*function Entradas(ubicacion, cantidad, vendidas) {
    this.ubicacion = ubicacion;
    this.cantidad = cantidad;
    this.vendidas = vendidas;

}

const entradasPrimerPartido = new Entradas("Platea Norte", 100, 50);*/

// variable de nuestro boton 
let boton = document.getElementById("botonUno");

// cuando se hace CLICK que hace el boton -> ejecuta una funcion 
boton.addEventListener("click", respuestaBotonUno);

// funcion de respuesta al cliquear 
function respuestaBotonUno() {
    // muestro por consola si se cliqueo el valor 
    console.log("Clickeaste");
    let ingresoUsuario = entradasPedidas.value;
    // ejecuto otra funcion que crea un nuevo elemento que le da el texxto q ingreso el usuario 
    respuesta(ingresoUsuario);
};

/*function stockEntradas() {
    if (entradasPrimerPartido.cantidad > entradasPrimerPartido.vendidas) {
        console.log("Excelente se realizo su compra")
    } else {
        console.log("No hay mas entrada")
    }
};*/


let entradasPedidas = document.getElementById("entradas");
let resultado = document.getElementById("resultadoCompra");

function respuesta(ingresoUsuario) {
    //creo variable para crear un elemento html 
    let crearRespuesta = document.createElement("p");
    // guardo lo ingresado por el usuario y lo convierto en texto + mensaje  
    let respuesta = document.createTextNode("Usted ha comprado: " + ingresoUsuario + " entradas.");
    // guardo el mensaje en mi elemento P 
    crearRespuesta.appendChild(respuesta);
    // 
    resultado.appendChild(crearRespuesta);

};