class clientes {
    constructor(razonSocial, NroDocumento, CondFiscal) {
        this.razonSocial = razonSocial;
        this.NroDocumento = NroDocumento;
        this.CondFiscal = CondFiscal;
    }
    tipoFactura() {
        console.log("Usted esta registrado como" + this.CondFiscal)
    }
}

const clienteX = new clientes("Lavandeira", 40144289, "Consumidor Final")

class articulos {
    constructor(nombre, descripcion, stock, categoria, precio, iva) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.deposito = deposito;
        this.stock = stock;
        this.categoria = categoria;
        this.precio = precio;
        this.iva = iva;
    }
    cantidad() {
        console.log("Esta es la cantidad de " + this.nombre + "en stock: " + this.stock);
    }
}

const productos = [
    { nombre: "trompeta", descripcion: "primera marca", deposito: "Quilmes", stock: 50, categoria: ["musica", "Instrumentos"], precio: 500, iva: 21 },
    { nombre: "piano", descripcion: "primera marca", deposito: "Capital Federal", stock: 5, categoria: ["musica", "Instrumentos"], precio: 550, iva: 10.5 },
    { nombre: "guitarra", descripcion: "primera marca", deposito: "Berazategui", stock: 85, categoria: ["musica", "Instrumentos"], precio: 7810, iva: 21 }
];

for (const prod of productos) {
    console.log(prod.nombre);
    console.log(prod.categoria);
}

const ivaNoIncluido = (i, p) => ((i / 100) * p);
const ivaIncluido = (i, p) => (p / (1 + (i / 100)));
const suma = (ino, p) => (ino + p);


if (clientes.CondFiscal == "Consumidor Final") {
    console.log(suma((ivaNoIncluido(articulos.iva, articulos.precio)), articulos.precio))
}