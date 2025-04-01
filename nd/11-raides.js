

let manoRaide = 't';
let tekstasIlgas = 'kazin kas tokio idomaus gali buti programavime. Daug dalyku, galbut, tik reikia juos atrasti';
let rastosRaides = 0;
let norimasKiekis = 4;
let einamasTekstas = '';

for ( let i = 0; rastosRaides < norimasKiekis; i++) {
    einamasTekstas += tekstasIlgas[i];
    if (tekstasIlgas[i] === manoRaide) {
        rastosRaides += 1;
    } if (i === tekstasIlgas.length -1) {
        rastosRaides = 4;
    }
}

console.log(einamasTekstas);