/*localStorage.setItem('nombre', 'Tamara');
localStorage.setItem('activo', true);
localStorage.setItem('numero', 201540);

let nombreSocio = localStorage.getItem('nombre');
let esActivo = localStorage.getItem('activo');
let numeroSocio = localStorage.getItem('numero');

console.log(nombreSocio + esActivo + numeroSocio);*/

/*class personas {
    constructor(nombre, dni, provincia, esSocio) {
        this.nombre = nombre;
        this.dni = dni;
        this.provincia = provincia;
        this.esSocio = esSocio;
    }
}

let miPersona = { nombre: "tamara", dni: 40144289, provincia: "Buenos Aires", esSocio: true };
/*console.log(JSON.stringify(persona));
console.log(persona);*/


/* convierto el objeto en string con el Json.stringify
localStorage.setItem('persona', JSON.stringify(miPersona));
let revisoPersona = localStorage.getItem('persona');
console.log(revisoPersona);

/*convierto el string anterior en JSON 
let revisoPersonaObjeto = JSON.parse(localStorage.getItem('persona'));
console.log(revisoPersonaObjeto);*/

/* con arrray de datos 

const socios = [
    { nombre: "tamara", dni: 40144289, provincia: "Buenos Aires", esSocio: true },
    { nombre: "pepito", dni: 85444444, provincia: "Buenos Aires", esSocio: true },
    { nombre: "juan", dni: 40545454, provincia: "Buenos Aires", esSocio: true }
]

const guardar = (clave, valor) => { localStorage.setItem(clave, valor) };

//almacenar persona x persona
/*for (const persona of personas) {
    guardar(persona.nombre, JSON.stringify(persona));
}*/

// almacenar array completo 
//guardar("lista de socios", JSON.stringify(socios));


// ejercicio pidiendo datos al usuario

/*function grabarSocios() {
    let id = 1;
    let nombre = "";
    nombre = prompt('Ingrese nombre del socio');
    while (nombre != null) {
        localStorage.setItem(id, nombre);
        nombre = prompt('Ingrese nombre del socio');
        id++;
    }
}

function mostrarSocios() {
    for (var i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        console.log('id:', clave, 'nombre', valor);
    }
}

grabarSocios();
mostrarSocios();*/

const socios = [
    { nombre: "tamara", dni: 40144289, provincia: "Buenos Aires", esSocio: true },
    { nombre: "pepito", dni: 85444444, provincia: "Buenos Aires", esSocio: true },
    { nombre: "juan", dni: 40545454, provincia: "Buenos Aires", esSocio: true }
];

for (const socio of socios) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h1 > Nombre: ${socio.nombre}</h3>
                            <h5>  DNI: ${socio.dni}</h5>
                            <h5> Es socio Activo:  ${socio.esSocio}</h5>`;
    document.body.appendChild(contenedor);
}