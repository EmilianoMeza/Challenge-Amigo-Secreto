// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] //aggrelo que se encarga de almacenar los amigos


function agregarAmigo() {
    let amigoInput = document.getElementById("amigo");
    let nombre = amigoInput.value.trim();

    if (nombre !== "") {
        amigos.push(nombre);//empuja el arrego (nombre del amigo)
        actualizarLista();
        amigoInput.value = ""; // Este codigo se encarga de limpiar el campo de entrada
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Este codigo limpia la lista antes de actualizar

    let elementos = amigos.map(amigo => `<li>${amigo}</li>`).join(""); 
    lista.innerHTML = elementos; // Agrega todos los elementos de una vez
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Debe agregar amigos antes de sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Este codigo se encarga de sortear el amigo
    let amigoSorteado = amigos[indiceAleatorio]; // Obiene el nombre sorteado

    resultado.innerHTML = `<li> El amigo sorteado es: <strong>${amigoSorteado}</strong> </li>`;
}
