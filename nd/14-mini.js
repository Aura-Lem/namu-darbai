console.log('10----------------');

for (let i = 1; i <= 500; i++) {
    if (i === 1 || i === 2 || i === 5 || i === 10 || i === 20 || i === 50 || i === 100 || i === 200 || i === 500) {
        console.log(i);
    }
}

console.log('11----------------');

const raides = ['L', 'a', 'b', 'a', 's'];

let zodis = '';

for (let i = 0; i < raides.length; i++) {
    zodis += raides[i];
    console.log(i);
}

console.log(zodis);

console.log('12----------------');
let zodisP = 'Programavimas';

for (let i = 0; i <zodisP.length; i++) {
    console.log(zodisP[i]);
}

console.log('13----------------');

let daugyba = 2;

for(let i = 3; i <= 10; i++) {
    daugyba = daugyba * i;
}
console.log(daugyba);

console.log('15----------------');

for ( let i = 20; i >= 10; i--) {
    console.log(i);
}

console.log('16----------------');
const raidesAtbulai = ['s', 'a', 'b', 'a', 'L'];

for (let i = raidesAtbulai.length -1; i >= 0; i--) {
    console.log(raidesAtbulai[i]);
}

console.log('17----------------');
let zodisAtbulas = 'samivamargorP';

for (let i = 0; i <zodisAtbulas.length; i++) {
    console.log(zodisAtbulas[i]);
}

console.log('18----------------');

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i %  7 === 0) {
        console.log ('Lucky');
    }
}

console.log('19----------------');

const dvigubinti = [2, 3, 6, 8];

for (let i = 0; i < dvigubinti.length; i++) {
    console.log(dvigubinti[i] * 2);
}
console.log('20----------------');

const daugSkaiciu = [2, 14, 10, 1000, 503, 8, 0];

for (let i = 0; i < daugSkaiciu.length; i++) {
    if (daugSkaiciu[i] < 100) {
        console.log(daugSkaiciu[i]);
    }
}

console.log('14----------------');

let nelSuma = 0;

for (let i = 1; i <= 30; i+=2) {
    nelSuma = nelSuma + i;
}
console.log(nelSuma);

console.log('Funkcijos 20----------------');

function ar18(skaicius) {
    if (skaicius > 18) {
        return true;
    } else {
        return false;
    }
}
console.log(ar18(6));
console.log(ar18(22));

console.log('Funkcijos 21----------------');

function teisingasZodis(zodis) {
    if (zodis === 'labas' || zodis === 'Labas') {
        return true;
    } else {
        return false;
    }
}

console.log(teisingasZodis('labas'));
console.log(teisingasZodis('rytas'));

console.log('Funkcijos 22----------------');

function zodzioIlgis(zodis) {
    if (zodis.length > 5) {
        return true;
    } else {
        return false;
    }
}

console.log(zodzioIlgis('nuostabus'));
console.log(zodzioIlgis('laba'));

console.log('Funkcijos 23----------------');

function pirmaRaide(zodis) {
    return zodis[0];
}
console.log(pirmaRaide('Labas'));
console.log(pirmaRaide('Diena'));

console.log('Funkcijos 24----------------');

function paskutineRaide(zodis) {
    return zodis[zodis.length-1];
}

console.log(paskutineRaide('Labas'));
console.log(paskutineRaide('Diena'));

console.log('Funkcijos 25----------------');

function pirmaRaideA(zodis) {
    if (zodis[0] === 'A') {
    return 'taip';
    } else {
        return 'ne';
    }
}
console.log(pirmaRaideA('Apelsinas'));
console.log(pirmaRaideA('apelsinas'));

console.log('Funkcijos 26----------------');

function zodzioIlgis(zodis) {
    return zodis.length;
}
console.log(zodzioIlgis('Labas'));

console.log('Funkcijos 27----------------');

function zodzioIlgis2(zodis) {
    if (zodis.length >= 7) {
        return 'Ilgas';
    } if (zodis.length <= 6) {
        return 'Trumpas';
    }
}

console.log(zodzioIlgis2('Misraine'));
console.log(zodzioIlgis2('Labas'));

console.log('Funkcijos 28----------------');

function vienodiZodziai(zodis1, zodis2) {
    if (zodis1 === zodis2) {
        return true;
    } else {
        return false;
    }
}

console.log(vienodiZodziai('labas', 'labas'));
console.log(vienodiZodziai('labas', 'iki'));