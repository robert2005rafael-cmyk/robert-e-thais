function tocarMusica() {

    const musica = document.getElementById("musica");

    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }

}

const dataInicio = new Date("2024-03-16T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferenca % (1000 * 60))
        / 1000
    );

    document.getElementById("contador").innerHTML =
        dias + " dias ❤️ " +
        horas + " horas ❤️ " +
        minutos + " minutos ❤️ " +
        segundos + " segundos";

}

setInterval(atualizarContador, 1000);

atualizarContador();