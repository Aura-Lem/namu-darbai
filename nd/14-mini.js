console.log('1----------------');
let suma = 5;

for (let i = 6; i <= 15; i++) {
    suma = suma + i;
}
console.log(suma);

console.log('2----------------');

let zodis1 = 'Vakaras';
for (let i = 0; i < zodis1.length; i++) {
    console.log(zodis1[i]);
}

console.log('3----------------');
let number = 6;
for (let i = 0; i <= 10; i++) {
    console.log(number * i);
}

console.log('4----------------');

for (let i = 5; i >= 0; i--) {
    if (i === 0) {
        console.log('BOOM');
    }
    console.log(i);
}

console.log('5----------------');
let sum = 0;
for (let i = 4; i <= 18; i += 2) {
    sum = sum + i;
}
console.log(sum);

console.log('6----------------');

let sarasas = ['pirmas', 'antras', 'trecias', 'ketvirtas', 'penktas'];
let nariai = '';
for (let i = 0; i < sarasas.length; i++) {

    nariai += sarasas[i] + ' ';
   
}
console.log(nariai);

console.log('7----------------');
let vardai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
let vardas = '';

for (let i = 0; i < vardai.length; i++) {
    vardas = vardai[i];
    console.log('Mano vardas - ' + vardas);
}

console.log('8----------------');
let skaiciai = [1, 2, 3, 4, 5];
let susumuoti = 0;
for (let i = 0; i <= skaiciai.length; i++){
    susumuoti = susumuoti + i;
}
console.log(susumuoti);

console.log('9----------------');

let elementai = [6, 9, 4, 3, 5];
let vertes = ''; 
for (let i = elementai.length - 1; i >= 0; i--) {
    vertes = elementai[i];
    console.log(vertes);
}

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

console.log('14----------------');

let nelSuma = 0;

for (let i = 1; i <= 30; i+=2) {
    nelSuma = nelSuma + i;
}
console.log(nelSuma);

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

console.log('21----------------');
let word = 'abrakadabra';
let kiekis = 0;
for (let i = 0; i < word.length; i++) {
   if (word[i] === 'a') {
       kiekis = kiekis + 1;
   }
}
console.log(kiekis);

console.log('22----------------');

let pridesiuSkaiciu = [2, 8, 88, 14];

for(let i = 0; i < pridesiuSkaiciu.length; i++) {
    console.log(pridesiuSkaiciu[i] + 2);
}

console.log('23----------------');


let word1 = 'Nebeprisikiskiakopusteliaudavome';
let kiekis1 = 0;
for (let i = 0; i < word1.length; i++) {
   if (word1[i] === 'e') {
       kiekis1 = kiekis1 + 1;
   }
}
console.log(kiekis1);

console.log('24----------------');
let naujasZodis = 'Nebeprisikiskiakopusteliaudavome';
for (let i = 0; i <naujasZodis.length; i++) {
    if (naujasZodis[i] === 'e') {
        console.log(`e raide yra ${i+1} pozicijoje.`);
    }
}


console.log('25----------------');
let lobis = 150;
for (let i = 20; i >= 15; i--) {
    lobis = lobis - i;
    console.log(lobis);
} 

console.log('Funkcijos 1----------------');

function sum2(a, b) {
    return a + b;
}
console.log(sum2(2, 3));

console.log('Funkcijos 2----------------');

function minus(a, b) {
    if ( a < b) {
        return b - a;
    } else {
    return a - b;
    }
}
console.log(minus(2, 3));

console.log('Funkcijos 3----------------');

function mult(a, b) {
    return a * b;
}
console.log(mult(2, 3));

console.log('Funkcijos 4----------------');

function division(a, b) {
    return a / b;
}
console.log(division(10, 5));

console.log('Funkcijos 5----------------');

function mid(a, b) {
    return (a + b) / 2;
}
console.log(mid(6, 12));

console.log('Funkcijos 6----------------');

function teigiamas(skaicius) {
    if (skaicius > 0) {
        return 'Teigiamas';
    } 
}

console.log(teigiamas(9));

console.log('Funkcijos 7----------------');

function lyginis(skaicius) {
    if (skaicius % 2 === 0) {
        return 'lyginis';
    }
}
console.log(lyginis(6));

console.log('Funkcijos 8----------------');

function nelyginis(skaicius) {
    if (skaicius % 3 === 0) {
        return 'nelyginis';
    }
}
console.log(nelyginis(9));

console.log('Funkcijos 9----------------');

function dalybaIs5(skaicius) {
    if (skaicius % 5 === 0) {
        return 'dalijasi';
    } else {
        return 'nesidalija';
    }
}
console.log(dalybaIs5(25));

console.log('Funkcijos 10----------------');

function lygus100(skaicius) {
    if (skaicius === 100) {
        return 'Skaicius lygus 100';
    } else {
        return 'Skaicius nelygus 100';
    }
}
console.log(lygus100(100));
console.log(lygus100(99));

console.log('Funkcijos 11----------------');

function didesnisUz10(skaicius) {
    if (skaicius > 10) {
        return 'Skaicius didesnis uz 10';
    } else {
        return 'Skaicius mazesnis uz 10';
    }
}
console.log(didesnisUz10(12));
console.log(didesnisUz10(9));

console.log('Funkcijos 12----------------');

function didesnisSkaicius(a, b) {
    if ( a > b) {
        return a;
    } else  {
        return b;
    }
}

console.log(didesnisSkaicius(15, 6));
console.log(didesnisSkaicius(2, 36));

console.log('Funkcijos 13----------------');

function mazesnisSkaicius(a, b) {
    if ( a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(mazesnisSkaicius(15, 6));
console.log(mazesnisSkaicius(2, 36));

console.log('Funkcijos 14----------------');

function vienodiSkaiciai(a, b, c) {
    if (a === b && b === c) {
        return 'skaiciai vienodi';
    } else {
        return 'Skaiciai nevienodi';
    }
}

console.log(vienodiSkaiciai(2, 2, 2));
console.log(vienodiSkaiciai(2, 5, 7));
console.log(vienodiSkaiciai(2, 2, 6));

console.log('Funkcijos 15----------------');

function lygusSkaiciai(a, b) {
    if (a === b) {
        return 'Skaiciai lygus';
    } else {
        return 'Skaiciai nelygus';
    }
}

console.log(lygusSkaiciai(2, 2));
console.log(lygusSkaiciai(2, 7));

console.log('Funkcijos 16----------------');

function skaiciaiTarp1Ir10(number) {
    if (number > 1 && number < 10) {
        return 'Skaicius yra tarp 1 ir 10';
    } else {
        return 'Skaicius nera tarp 1 ir 10';
    }
}

console.log(skaiciaiTarp1Ir10(9));
console.log(skaiciaiTarp1Ir10(20));

console.log('Funkcijos 17----------------');

function skaiciaiTarp50Ir100(number) {
    if (number > 50 && number < 100) {
        return 'Skaicius yra tarp 50 ir 100';
    } else {
        return 'Skaicius nera tarp 50 ir 100';
    }
}

console.log(skaiciaiTarp50Ir100(90));
console.log(skaiciaiTarp50Ir100(20));

console.log('Funkcijos 18----------------');

function neigiamasSkaicius(number) {
    if (number > 0) {
        return 'Skaicius yra teigiamas';
    } else {
        return 'Skaicius yra neigiamas';
    }
}

console.log(neigiamasSkaicius(9));
console.log(neigiamasSkaicius(-2));

console.log('Funkcijos 19----------------');

function neigiamasSkaicius1(number) {
    if (number > 0) {
        return 'Teigiamas';
    } else {
        return 'Neigiamas';
    }
}

console.log(neigiamasSkaicius1(9));
console.log(neigiamasSkaicius1(-2));

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

function zodzioIlgis1(zodis) {
    return zodis.length;
}
console.log(zodzioIlgis1('Labas'));

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

console.log('Funkcijos 29----------------');

function dienaNaktis(valanda) {
    if (valanda >= 6 && valanda < 22) {
        return 'Diena';
    } if (valanda < 6 || valanda >= 22) {
        return 'Naktis';
    }
}

console.log(dienaNaktis(15));
console.log(dienaNaktis(23));

console.log('Funkcijos 30----------------');

function skaiciausVerte(skaicius) {
    let tekstas = '';
    if (skaicius > 0) {
        tekstas = 'esu teigiamas ir ';
    } else if (skaicius < 0 ) {
        tekstas = 'esu neigiamas ir ';
    } else {
        tekstas = 'esu nulis ir ';
    } 
     
    if  (skaicius > 100) {
        tekstas = tekstas + 'esu didziulis.'
    } if(skaicius < 100) {
        tekstas = tekstas + 'esu maziukas.'
    }
    return tekstas;
}

console.log(skaiciausVerte(5));
console.log(skaiciausVerte(-6));
console.log(skaiciausVerte(0));
console.log(skaiciausVerte(150));
console.log(skaiciausVerte(99));

const uogos = [10, 15, 63, 8, 75, 10];
const grybai = [1, 5, 3, 8, 7, 10];

function gSum(gerybe) {
    let sum = 0;
    for (let i = 0; i < gerybe.length; i++) {
        sum += gerybe[i];
    }
    return sum;
}

console.log(gSum(grybai));