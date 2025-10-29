function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("botonMascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
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
}

window.addEventListener('load', iniciarJuego);