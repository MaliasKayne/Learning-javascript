let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("botonMascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("ataqueFuego");
    botonFuego.addEventListener("click", ataqueFuego);

    let botonAgua = document.getElementById("ataqueAgua");
    botonAgua.addEventListener("click", ataqueAgua);

    let botonTierra = document.getElementById("ataqueTierra");
    botonTierra.addEventListener("click", ataqueTierra);
}

function ataqueFuego() {
    ataqueJugador = "Ataque Fuego";
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "Ataque Agua";
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "Ataque Tierra";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    if (ataqueAleatorio === 1) {
        ataqueEnemigo = "Ataque Fuego";
    } else if (ataqueAleatorio === 2) {
        ataqueEnemigo = "Ataque Agua";
    } else {
        ataqueEnemigo = "Ataque Tierra";
    }
    crearMensaje();
}

function seleccionarMascotaJugador() {
    if (document.getElementById("Hipoge").checked) {
        mascotaJugador.innerHTML = "Hipoge";
    } else if (document.getElementById("Capipepo").checked) {
        mascotaJugador.innerHTML = "Capipepo";
    } else if (document.getElementById("Ratigueya").checked) {
        mascotaJugador.innerHTML = "Ratigueya";
    } else {
        alert("Selecciona una mascota");
    }
    seleccionarMascotaEnemigo();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo");

    if (mascotaAleatoria === 1) {
        spanMascotaEnemigo.innerHTML = "Hipoge";
    } else if (mascotaAleatoria === 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya";
    }
}

function crearMensaje(){
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota del enemigo ataco con " + ataqueEnemigo;
    let sectionMensajes = document.getElementById("mensajes");
    sectionMensajes.appendChild(parrafo);
}

window.addEventListener('load', iniciarJuego);