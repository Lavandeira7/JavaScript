const entradas = [{ id: 1, ubicacion: "Platea Norte", precio: 6000 },
    { id: 2, ubicacion: "Platea Sur", precio: 2000 },
    { id: 3, ubicacion: "Popular Este", precio: 1000 },
    { id: 4, ubicacion: "Popular Oeste", precio: 1000 }
];



// Recorremos el array con for..of
for (const entrada of entradas) {
    //Por cada entrada además de los datos agregamos un botón 
    $("#entradas").append(`<div style= margin:5px>
                        <h6>  Ubicacion: ${entrada.ubicacion}</h6>
                        <b> $ ${entrada.precio}</b>
                        <p> Cantidad de Entradas </p>
                        <input type="number" placeholder ="1" class="inputsClass${entrada.id}">
                        <button id="btn${entrada.id}">Comprar</button>
                        </div>`);
    //Asociamos el evento a botón recién creado.
    $(`#btn${entrada.id}`).on('click', function() {
        $(`.inputsClass${entrada.id}`).trigger("change")
        let rpta1 = (`Compraste ${entrada.ubicacion}`)
        $(".info").append(`<div style= text-center> ${rpta1} </div>`);

    })
    $(`.inputsClass${entrada.id}`).change(function(e) {
        //console.log(e.target.value);
        let cantidad = this.value;
        console.log("El total de tu compra seria: " + cantidad * `${entrada.precio} `);

    })

};