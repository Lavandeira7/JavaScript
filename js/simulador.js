alert("Bienvenido a su calculador de IVA ")
const mensaje = ("Ingrese el % de IVA a calcular. Para Argentina se utilizan:  \n" +
    "2.5 \n" +
    "10.5\n" +
    "21 \n" +
    "27\n" +
    "Ingrese 0 (cero) para Salir\n");

const mensajeDos = ("Seleccione: \n" +
    "1. Si el precio a ingresar tiene IVA incluido \n" +
    "2. Si el precio a ingresar NO tiene IVA incluido");

const mensajeTres = ("Ingrese el precio");
const ivaNoIncluido = (i, p) => ((i / 100) * p);
const ivaIncluido = (i, p) => (p / (1 + (i / 100)));
const suma = (ino, p) => (ino + p);


let iva = parseFloat(prompt(mensaje));
while (iva != 0) {
    let condPrecio = parseInt(prompt(mensajeDos));

    switch (condPrecio) {
        case 1:
            let precioConIva = parseFloat(prompt(mensajeTres));
            alert("El IVA es de: " + ivaNoIncluido(iva, ivaIncluido(iva, precioConIva)) +
                "\nEl precio sin IVA es de: " + ivaIncluido(iva, precioConIva));
            break;

        case 2:
            let precioSinIva = parseFloat(prompt(mensajeTres));
            alert("El IVA es de " + ivaNoIncluido(iva, precioSinIva) +
                "\nEl precio con IVA es de: " + suma((ivaNoIncluido(iva, precioSinIva)), precioSinIva));
            break;

    }
    iva = parseFloat(prompt(mensaje));

}