let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("botonMascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("ataqueFuego");
    botonFuego.addEventListener("click", ataqueFuego);

    let botonAgua = document.getElementById("ataqueAgua");
    botonAgua.addEventListener("click", ataqueAgua);

    let botonTierra = document.getElementById("ataqueTierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let botonReiniciar = document.getElementById("botonReiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
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

    let botonFuego = document.getElementById("ataqueFuego");
    botonFuego.disabled = false;

    let botonAgua = document.getElementById("ataqueAgua");
    botonAgua.disabled = false;

    let botonTierra = document.getElementById("ataqueTierra");
    botonTierra.disabled = false;
}

function crearMensaje(){
    const resultado = combat();
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", y la mascota del enemigo ataco con " + ataqueEnemigo + "<br>" + resultado;
    let sectionMensajes = document.getElementById("mensajes");
    sectionMensajes.appendChild(parrafo);

    if (vidasEnemigo === 0 || vidasJugador === 0) {
        cambiarEstadoBotones();
        if (vidasEnemigo === 0) {
            alert("¡Felicidades! Has ganado la batalla.");
        } else {
            alert("Lo siento, has perdido la batalla.");
        }
    }
}

function combat() {
    if (ataqueJugador === ataqueEnemigo) return "Empate";

    if (
        (ataqueJugador === "Ataque Fuego" && ataqueEnemigo === "Ataque Tierra") ||
        (ataqueJugador === "Ataque Agua" && ataqueEnemigo === "Ataque Fuego") ||
        (ataqueJugador === "Ataque Tierra" && ataqueEnemigo === "Ataque Agua")
    ) {
        vidasEnemigo--;
        let vidasEnemigoSpan = document.getElementById("vidasEnemigo");
        vidasEnemigoSpan.innerHTML = vidasEnemigo;
        return "Ganaste";
    }

    vidasJugador--;
    let vidasJugadorSpan = document.getElementById("vidasJugador");
    vidasJugadorSpan.innerHTML = vidasJugador;
    return "Perdiste";

}

function cambiarEstadoBotones(reinicio = false) {
    const botonFuego = document.getElementById("ataqueFuego");
    const botonAgua = document.getElementById("ataqueAgua");
    const botonTierra = document.getElementById("ataqueTierra");
    const botonMascotaJugador = document.getElementById("botonMascota");
    const radioButtons = document.getElementsByName("mascota");

    botonMascotaJugador.disabled = !botonMascotaJugador.disabled;
    botonFuego.disabled = reinicio ? true : !botonFuego.disabled;
    botonAgua.disabled = reinicio ? true : !botonAgua.disabled;
    botonTierra.disabled = reinicio ? true : !botonTierra.disabled;
    for (const radioButton of radioButtons) {
        radioButton.disabled = reinicio ? true : !radioButton.disabled;
    }
}

function reiniciarJuego() {
	ataqueJugador = '';
	ataqueEnemigo = '';
	vidasJugador = 3;
	vidasEnemigo = 3;

	const sectionMensajes = document.getElementById('mensajes');
	sectionMensajes.innerHTML = '';

	const vidasEnemigoSpan = document.getElementById('vidasEnemigo');
	const vidasJugadorSpan = document.getElementById('vidasJugador');

	vidasEnemigoSpan.innerHTML = vidasEnemigo;
	vidasJugadorSpan.innerHTML = vidasJugador;

	let botonMascotaJugador = document.getElementById('botonMascota');
	botonMascotaJugador.disabled = false;

	cambiarEstadoBotones(true);
}

window.addEventListener('load', iniciarJuego);