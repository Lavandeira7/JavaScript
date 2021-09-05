localStorage.setItem('nombre', 'Tamara');
localStorage.setItem('activo', true);
localStorage.setItem('numero', 201540);

let nombreSocio = localStorage.getItem('nombre');
let esActivo = localStorage.getItem('activo');
let numeroSocio = localStorage.getItem('numero');

console.log(nombreSocio + esActivo + numeroSocio);