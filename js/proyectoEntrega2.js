/*function Entradas(ubicacion, cantidad, vendidas) {
    this.ubicacion = ubicacion;
    this.cantidad = cantidad;
    this.vendidas = vendidas;

}
// instancio objeto
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

// funcion para sumar a las entradas vendidas 
/*const entradasVendidas = (ev, ep) => (ev+ep);

function stockEntradas() {

    if (entradasPrimerPartido.cantidad > entradasVendidas(entradasPedidas, entradasPrimerPartido.vendidas)) {
        console.log("Excelente se realizo su compra")
    } else {
        console.log("No hay mas entrada")
    }
};*/


let entradasPedidas = document.getElementById("entradas");
let resultado = document.getElementById("resultadoCompra");

console.log(resultado)

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

/*-------------------------------- parte2 guardar los datos ---------------------*/


let botonDos = document.getElementById("botonDos")

botonDos.addEventListener("click", respuestaBotonDos)

function respuestaBotonDos() {
    console.log("Clickeaste el boton 2")
        // creo un  array que contenga el valor de las entradas que fue ingresando el usuario

    let arrayEntradas = [];

    // resultado es mi elemento html que tiene todos los datos ingresados por usuario - (formato html) 
    // .children para obtener los valores reales y NO html y .leght para saber ell numero de veces ingresadas
    for (let i = 0; i < resultado.children.length; i++) {
        //busco en toda mi lista cada uno de los hijos y cada uno es un item
        let arrayEntrada = resultado.children.item(i);
        // quiero ver elt exto ingresado en cada item  // desarmar el html y guardarlo como un objeto 
        let EntradaInformacion = {
                "texto": arrayEntrada.innerText
            }
            // ingreso el objeto en mi array 
        arrayEntradas.push(EntradaInformacion)
    };
    // lo guardo como json en variable local 
    localStorage.setItem("arrayEntradas", JSON.stringify(arrayEntradas));
}