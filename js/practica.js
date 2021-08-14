alert("Bienvenido al centro de socios del club San Lorenzo de Almagro ")
const mensaje = ("Seleccione una opción: \n" +
    "1. Vea las proximas fechas en las que juega el Ciclon\n" +
    "2. Hagase socio\n" +
    "0. Salir \n");

const asociarse = "Gracias por asociarte al club, Ingresa tu DNI"

let condicion = true;

do {
    let opcion = parseInt(prompt(mensaje))
    if (opcion == 0) {
        condicion = false
    }
    switch (opcion) {
        case 1:
            for (let i = 1; i <= 31; i = i + 7) {
                alert("La proxima fecha es " + i + " de Agosto")
            }
            break;

        case 2:
            let nuevoSocio = parseInt(prompt(asociarse))
            if (isNaN(nuevoSocio)) {
                alert("Dato Incorrecto. Ingrese su DNI")
            } else {
                alert("Excelente, su numero de socio es: 28/" + nuevoSocio + "-4")
            }
            break;

    }
} while (condicion);