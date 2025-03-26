const prompt = require("prompt-sync")(); // Asegúrate de que esta línea esté al principio

let personas = [];

while (true) {
    let opcion = prompt(
        "--- MENÚ ---\n" +
        "1. Ingresar nueva persona\n" +
        "2. Mostrar todos los datos\n" +
        "3. Filtrar por DNI\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    );

    if (opcion === "1") {
        let nombre = prompt("Nombre:");
        let apellido = prompt("Apellido:");
        let dni = prompt("DNI:");
        let telefonos = prompt("Teléfonos (separados por comas):").split(",");
        let tieneHijos = prompt("¿Tiene hijos? (s/n):").toLowerCase();
        let hijos = tieneHijos === "s" ? prompt("Hijos (separados por comas):").split(",") : [];

        personas.push([nombre, apellido, dni, telefonos, hijos]);
        console.log("Persona agregada con éxito.");
    } 
    else if (opcion === "2") {
        if (personas.length === 0) {
            console.log("No hay datos ingresados.");
        } else {
            let mensaje = "--- Lista de Personas ---\n";
            personas.forEach(p => {
                mensaje += `Nombre: ${p[0]} ${p[1]}, DNI: ${p[2]}, Teléfonos: ${p[3]}, Hijos: ${p[4]}\n`;
            });
            console.log(mensaje);
        }
    } 
    else if (opcion === "3") {
        let dniBuscar = prompt("Ingrese el DNI a buscar:");
        let persona = personas.find(p => p[2] === dniBuscar);

        if (persona) {
            console.log(`Nombre: ${persona[0]} ${persona[1]}, DNI: ${persona[2]}, Teléfonos: ${persona[3]}, Hijos: ${persona[4]}`);
        } else {
            console.log("No se encontró ninguna persona con ese DNI.");
        }
    } 
    else if (opcion === "4") {
        console.log("Saliendo del programa...");
        break;
    } 
    else {
        console.log("Opción inválida. Intente de nuevo.");
    }
}
