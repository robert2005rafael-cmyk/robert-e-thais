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
const textoCarta = `Thaís,

Enquanto eu fazia esse site, coloquei nossa música pra tocar.

No começo eu só queria organizar as fotos e deixar tudo bonito, mas acabou acontecendo uma coisa que eu não esperava.

Enquanto eu olhava cada foto e escutava a música, fui lembrando de tudo que a gente viveu e, sem perceber, comecei a ficar emocionado.

Eu fiquei pensando no quanto eu te amo e no quanto a nossa história é bonita.

Às vezes eu paro para pensar que a gente se conheceu ainda criança. Você gostava de mim e eu nem imaginava isso. Depois a vida seguiu, o tempo passou, nós crescemos, seguimos caminhos diferentes e, anos depois, nos encontramos de novo.

E toda vez que eu penso nisso, eu acho incrível.

Talvez seja porque a gente gosta tanto de assistir filmes juntos, mas sinceramente, se alguém me contasse essa história, eu diria que parece roteiro de filme.

E o mais bonito é que ela é nossa.

Olhando essas fotos, eu percebi quantas coisas já vivemos juntos. Os passeios, as viagens, as alianças, as conversas, as risadas e até os momentos mais simples.

Mas também percebi uma coisa que talvez eu não diga com tanta frequência quanto deveria.

Você me faz querer evoluir.

Você me faz querer crescer na vida.

Você me faz querer estudar mais, trabalhar mais e construir um futuro melhor.

Não porque você me pede isso, mas porque quando eu penso em você, eu penso em alguém que merece tudo de bom.

Eu penso em realizar sonhos ao seu lado, em construir uma vida bonita juntos e em ser alguém de quem você possa sentir orgulho.

Você me inspira a ser uma versão melhor de mim mesmo.

Obrigado por todos os momentos, por toda a companhia, por todo o carinho e por tudo que já vivemos até aqui.

E obrigado por fazer parte dessa história que começou quando éramos crianças e continua sendo escrita todos os dias.

Eu não sei exatamente o que o futuro reserva para nós.

Mas sei que sou muito feliz por viver essa história ao seu lado.

E talvez a melhor parte seja saber que, apesar de todas as lembranças que estão neste site, nossa história ainda está só começando.

Eu te amo muito.

Com amor,

Robert ❤️`;
let i = 0;

function escreverCarta() {

    const carta = document.getElementById("carta");

    if (!carta) return;

    if (i < textoCarta.length) {

        carta.innerHTML += textoCarta.charAt(i);

        i++;

        setTimeout(escreverCarta, 25);

    }

}

let cartaIniciada = false;

window.addEventListener("scroll", () => {

    const carta = document.getElementById("carta");

    const posicao = carta.getBoundingClientRect();

    if (posicao.top < window.innerHeight - 100 && !cartaIniciada) {

        cartaIniciada = true;

        escreverCarta();

    }

});