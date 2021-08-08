import Countdown from './countdown.js';
const natal = document.querySelector('.natal');
const novo = document.querySelector('.novo');

const tempoParaONatal = new Countdown('04 February 2022 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2020 23:59:59 GMT-0300');


setInterval(() => {
    natal.innerHTML = `
         <div class="dias"> ${tempoParaONatal.total.days} Dias</div>
        <div class="horas"> ${tempoParaONatal.total.hours} Horas</div>
        <div class="minutos"> ${tempoParaONatal.total.minutes} Minutos</div>
        <div class="segundos"> ${tempoParaONatal.total.seconds} Segundos</div>`;
}, 1000)

setInterval(() => {
    novo.innerHTML = `
         <div class="dias"> ${tempoParaOAnoNovo.total.days} Dias</div>
        <div class="horas"> ${tempoParaOAnoNovo.total.hours} Horas</div>
        <div class="minutos"> ${tempoParaOAnoNovo.total.minutes} Minutos</div>
        <div class="segundos"> ${tempoParaOAnoNovo.total.seconds} Segundos</div>`;
}, 1000)
