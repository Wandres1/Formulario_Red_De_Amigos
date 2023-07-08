function agregarTransaccion() {
    var transaccionesContainer = document.getElementById("transacciones-container");

    var transaccionItem = document.createElement("div");
    transaccionItem.classList.add("transaccion-item");

    var input = document.createElement("input");
    input.type = "number";
    input.name = "transacciones[]";
    input.min = "0";
    input.required = true;

    var button = document.createElement("button");
    button.type = "button";
    button.textContent = "Eliminar";
    button.onclick = function () {
        eliminarTransaccion(this);
    };

    transaccionItem.appendChild(input);
    transaccionItem.appendChild(button);
    transaccionesContainer.appendChild(transaccionItem);
}

function eliminarTransaccion(button) {
    var transaccionItem = button.parentNode;
    transaccionItem.parentNode.removeChild(transaccionItem);
}

document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencia al formulario
    var formulario = document.getElementById("formulario");

    // Agregar evento submit al formulario
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener campos de transacciones
        var camposTransacciones = document.getElementsByName("transacciones[]");
        var valoresTransacciones = [];

        // Recorrer campos de transacciones y obtener valores
        for (var i = 0; i < camposTransacciones.length; i++) {
            var valorCampo = camposTransacciones[i].value;
            valoresTransacciones.push(valorCampo);
        }
        // Aquí pueden realizar la lógica para enviar los datos a la base de datos

        var nombreInput = document.getElementById("nombre");
        var nombre = nombreInput.value;

        var cedulaInput = document.getElementById("cedula");
        var cedula = cedulaInput.value;

        var celularInput = document.getElementById("celular");
        var celular = celularInput.value;

        var correoInput = document.getElementById("correo");
        var correo = correoInput.value;

        var departamentoInput = document.getElementById("departamento");
        var departamento = departamentoInput.value;

        var ciudadInput = document.getElementById("ciudad");
        var ciudad = ciudadInput.value;

        var fechaInput = document.getElementById("fecha");
        var fecha = fechaInput.value;


        // Variable que almacena los códigos de aprobación
        console.log(valoresTransacciones);
        // Variable que almacena el nombre
        console.log(nombre);
        // Variable que almacena la cédula
        console.log(cedula);
        // Variable que almacena el celular
        console.log(celular);
        // Variable que almacena el correo
        console.log(correo);
        // Variable que almacena el departamento
        console.log(departamento);
        // Variable que almacena el ciudad
        console.log(ciudad);
        // Variable que almacena el fecha
        console.log(fecha);

        // Redirigir a otra página después de enviar el formulario
        window.location.href = "formulario.html";
    });
});


function actualizarCiudades() {
    var departamento = document.getElementById("departamento").value;
    var ciudadSelect = document.getElementById("ciudad");

    // Limpiar las opciones actuales
    ciudadSelect.innerHTML = "";

    // Añadir las nuevas opciones de ciudad según el departamento seleccionado
    switch (departamento) {
        case "Amazonas":
            agregarCiudad("Leticia");
            break;
        case "Antioquia":
            agregarCiudad("Anori");
            agregarCiudad("Arboletes");
            agregarCiudad("Barbosa");
            agregarCiudad("Bello");
            agregarCiudad("Caucasia");
            agregarCiudad("Dabeiba");
            agregarCiudad("El Peñol");
            agregarCiudad("El Retiro");
            agregarCiudad("Envigado");
            agregarCiudad("Girardota");
            agregarCiudad("Itagui");
            agregarCiudad("Jerico");
            agregarCiudad("La Ceja");
            agregarCiudad("Marinilla");
            agregarCiudad("Medellin");
            agregarCiudad("Mutata");
            agregarCiudad("Puerto Berrio");
            agregarCiudad("Puerto Nare");
            agregarCiudad("Rionegro");
            agregarCiudad("Sabaneta");
            agregarCiudad("San Jeronimo");
            agregarCiudad("Santafe de Antioquia");
            agregarCiudad("Sonson");
            agregarCiudad("Sopetran");
            break;
        case "Arauca":
            agregarCiudad("Arauca");
            break;
        case "Atlantico":
            agregarCiudad("Barranquilla");
            agregarCiudad("Malambo");
            agregarCiudad("Puerto Colombia");
            agregarCiudad("Soledad");
            break;
        case "Bolivar":
            agregarCiudad("Cartagena");
            agregarCiudad("Magangue");
            break;
        case "Boyaca":
            agregarCiudad("Chiquinquira");
            agregarCiudad("Duitama");
            agregarCiudad("Moniquira");
            agregarCiudad("Puerto Boyacá");
            agregarCiudad("Ramiriqui");
            agregarCiudad("Sogamoso");
            break;
        case "Caldas":
            agregarCiudad("Chinchina");
            agregarCiudad("La Dorada");
            agregarCiudad("Manizales");
            agregarCiudad("Riosucio");
            agregarCiudad("Salamina");
            agregarCiudad("Villa Maria");
            break;
        case "Caqueta":
            agregarCiudad("Florencia");
            agregarCiudad("San Vicente del Caguan");
            break;
        case "Casanare":
            agregarCiudad("Orocue");
            agregarCiudad("Yopal");
            break;
        case "Cauca":
            agregarCiudad("Popayan");
            break;
        case "Cesar":
            agregarCiudad("Aguachica");
            agregarCiudad("Bosconia");
            agregarCiudad("San Alberto");
            agregarCiudad("Valledupar");
            break;
        case "Cordoba":
            agregarCiudad("Ayapel");
            agregarCiudad("Buenavista del Sinu");
            agregarCiudad("Monteria");
            break;
        case "Cundinamarca":
            agregarCiudad("Bogota");
            agregarCiudad("Cajica");
            agregarCiudad("Choconta");
            agregarCiudad("Cota");
            agregarCiudad("Facatativa");
            agregarCiudad("Gachancipa");
            agregarCiudad("Girardot");
            agregarCiudad("Soacha");
            agregarCiudad("Ubate");
            agregarCiudad("Zipaquira");
            break;
        case "Guainia":
            agregarCiudad("Puerto Inirida");
            break;
        case "Guajira":
            agregarCiudad("Fonseca");
            agregarCiudad("Hatonuevo");
            agregarCiudad("Maicao");
            agregarCiudad("Manaure");
            agregarCiudad("Riohacha");
            agregarCiudad("San Juan del Cesar");
            agregarCiudad("Uribia");
            break;
        case "Guaviare":
            agregarCiudad("San Jose del Guaviare");
            break;
        case "Huila":
            agregarCiudad("Gigante");
            agregarCiudad("La Plata");
            agregarCiudad("Neiva");
            agregarCiudad("Pitalito");
            agregarCiudad("San Agustin");
            agregarCiudad("Yaguara");
            break;
        case "Magdalena":
            agregarCiudad("Caracoli");
            agregarCiudad("Cienaga");
            agregarCiudad("Fundación");
            agregarCiudad("Plato");
            agregarCiudad("Santa Marta");
            break;
        case "Meta":
            agregarCiudad("Acacias");
            agregarCiudad("Granada");
            agregarCiudad("Restrepo");
            agregarCiudad("Villavicencio");
            break;
        case "Narino":
            agregarCiudad("Ipiales");
            agregarCiudad("Pasto");
            agregarCiudad("Tumaco");
            break;
        case "NorteDeSantander":
            agregarCiudad("Cucuta");
            agregarCiudad("Ocaña");
            break;
        case "Putumayo":
            agregarCiudad("Mocoa");
            agregarCiudad("Puerto Asis");
            agregarCiudad("Valle del Guamuez");
            break;
        case "Quindio":
            agregarCiudad("Armenia");
            agregarCiudad("La Tebaida");
            break;
        case "Risaralda":
            agregarCiudad("Dosquebradas");
            agregarCiudad("La Virginia");
            agregarCiudad("Pereira");
            agregarCiudad("San Rosa de Cabal");
            break;
        case "SanAndres":
            agregarCiudad("San Andres");
            break;
        case "Santander":
            agregarCiudad("Barrancabermeja");
            agregarCiudad("Bucaramanga");
            agregarCiudad("Charala");
            agregarCiudad("Floridablanca");
            agregarCiudad("Girón");
            agregarCiudad("Piedecuesta");
            agregarCiudad("San Gil");
        case "Sucre":
            agregarCiudad("Sincelejo");
            break;
        case "Tolima":
            agregarCiudad("Ambalema");
            agregarCiudad("Espinal");
            agregarCiudad("Ibague");
            agregarCiudad("Libano");
            break;
        case "Valle":
            agregarCiudad("Anserma");
            agregarCiudad("Buga");
            agregarCiudad("Bugalagrande");
            agregarCiudad("Cali");
            agregarCiudad("Candelaria");
            agregarCiudad("Cartago");
            agregarCiudad("Cerrito");
            agregarCiudad("Ginebra");
            agregarCiudad("Guacari");
            agregarCiudad("Jamundi");
            agregarCiudad("La Unión");
            agregarCiudad("Palmira");
            agregarCiudad("Roldanillo");
            agregarCiudad("San Pedro");
            agregarCiudad("Sevilla");
            agregarCiudad("Trujillo");
            agregarCiudad("Tulua");
            agregarCiudad("Yumbo");
            agregarCiudad("Zarzal");
            break;
        case "Vaupes":
            agregarCiudad("Mitu");
            break;
        case "Vichada":
            agregarCiudad("Puerto Carreño");
            break;
        default:
            agregarCiudad("Seleccione un departamento primero");
            break;
    }
}

function agregarCiudad(ciudad) {
    var opcion = document.createElement("option");
    opcion.text = ciudad;
    opcion.value = ciudad;
    document.getElementById("ciudad").add(opcion);
}
