// 1. Parašyti funkciją, kuri išvestų skaičiaus faktorialą.

function faktorialas(n) {
    for (let i = n - 1; i >= 1; i--) {
        n = n * i;
    }
    return n;
}

console.log(faktorialas(5));
console.log(faktorialas(12));
console.log(faktorialas(2));
console.log(faktorialas(20));
console.log(faktorialas(7));

console.log('-----------------');
// 2. Parašyti funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartoja žodyje arba sakinyje.

function pasikartojantiRaide(zodis, raide) {
    let suma = 0;
    for (let i = 0; i < zodis.length; i++) {
        if (zodis[i] === raide) {
           suma += 1;
        }
    }
    return suma;
}

console.log(pasikartojantiRaide('kulverstukas', 'u'));
console.log(pasikartojantiRaide('pavasaris', 'a'));
console.log(pasikartojantiRaide('tu', 'u'));

console.log('-----------------');
// 3. Parašyti funkciją, kuri grąžintų visus skaičiaus 3 kartotinius nuo 1 iki 50.

function kartotiniai3(number) {
    for (let i = 1; i <= 50; i++) {
        if (i % number === 0) {
            console.log(i);
        }
    }
}
kartotiniai3(3);

console.log('-----------------');
// 4. Parašyti funkciją, kuri patikrintų ar duotas žodis yra palindromas.

function palindromas(zodis) {
    let pal = zodis.split('').reverse().join('');
    if (zodis.toLowerCase() === pal.toLowerCase()) { 
    return true;
  } else {
    return false;
  }
}
console.log(palindromas('abba'));
console.log(palindromas('Madam'));
console.log(palindromas('vasara'));

console.log('-----------------');
// 5. Parašyti funkciją, kuri suskaičiuoja kiek balsių yra žodyje.

function balses(zodis) {
    let sum = 0;
    for (let i = 0; i < zodis.length; i++){
        let mazosRaides = zodis.toLowerCase();
        if (mazosRaides[i] === 'a' || mazosRaides[i] ===  'e' || mazosRaides[i] ===  'i' || mazosRaides[i] ===  'o' || mazosRaides[i] ===  'u') {
            sum += 1;
        }
    }
    return sum;
}
console.log(balses('vasara'));
console.log(balses('brrr'));
console.log(balses('balandis'));
console.log(balses('ananasas'));
console.log(balses('kulverstukas'));

console.log('-----------------');
// 6. Sukurti funkciją, kuri visus tarpus tekste pakeičia pabraukimais.

function tarpai(tekstas) {
    return tekstas.replaceAll(' ', '_');
}
console.log(tarpai('Laba diena'));
console.log(tarpai('Laba diena, kaip sekasi?'));

console.log('-----------------');
// 7. Sukurti funkciją, kuri padvigubina visus skaičius masyve.

function dvigubinimas(skaiciai) {
    let dvigubas = [];
    for (let i = 0; i < skaiciai.length; i++) {
        dvigubas.push(skaiciai[i] * 2);
    }
    return dvigubas;
}
console.log(dvigubinimas([2, 6, 5, 10]));

console.log('-----------------');
// 8. Sukurti funkciją, kuri suranda ilgiausią žodį sakinyje.

function ilgiausiasZodis(tekstas) {
    let zodis = tekstas.split(' ');
    let ilgiausias = '';
    for (let i = 0; i < zodis.length; i++) {
    if (zodis[i].length > ilgiausias.length) {
        ilgiausias = zodis[i];
    }
    }
    return ilgiausias;
}
console.log(ilgiausiasZodis('Siandien jau penktadienis'));
console.log(ilgiausiasZodis('Ilgiausias zodis tekste'));

console.log('-----------------');
// 9. Funkcija, kuri išrikiuoja žodžius pagal ilgį didėjančia tvarka.

function zodziuSeka(tekstas) {
   let zodis = tekstas.split(' ');
   return zodis.sort((a, b) => b.length - a.length);
}
console.log(zodziuSeka('Ilgiausias zodis tekste'));
console.log(zodziuSeka('Siandien yra penktadienis'));

console.log('-----------------');
// 10. Funkcija, kuri grąžina pirmą skaičių masyve, kuris dalinasi iš 7.

function skaiciusIs7(skaiciai) {
    let skaicius = 0;
    for (let i = 0; i < skaiciai.length; i++) {
        if (skaiciai[i] % 7 === 0) {
          skaicius = skaiciai[i];
        }
    
    }
    return skaicius;
}
console.log(skaiciusIs7([1, 8, 14, 20]));

console.log('-----------------');
// 11. Funkcija, kuri priima masyvą vardų ir grąžina tik tuos, kurie prasideda 'A' raide.

function vardaiIsA(vardai) {
    let varduSarasas = [];
    for (let i = 0; i < vardai.length; i++) {
        let vardas = vardai[i];
        if (vardas[0] === 'A') {
            varduSarasas.push(vardas);
        }
    }
    return varduSarasas;
}
console.log(vardaiIsA(['Aurelija', 'Jone', 'Adelija']));
console.log(vardaiIsA(['Ugnius', 'Jone', 'Nijole']));
console.log(vardaiIsA(['Ugnius', 'Jone', 'Arvidas']));

console.log('-----------------');
// 12. Funkcija, kuri turi sąraše rasti skaičių, kuris jame kartojasi daugiau nei vieną kartą.

function pasikartojantisSkaicius(skaiciai) {
    let sarasas = [];
    let sarasas2 = [];
    for (let i = 0; i < skaiciai.length; i++) {
        if (skaiciai[i] === skaiciai[i+1]) {
            sarasas.push(skaiciai[i]);
        }
    }
    for (let i = 0; i < sarasas.length; i++) {
        if (sarasas[i] !== sarasas[i+1]) {
            sarasas2.push(sarasas[i]);
        }
    }
    return sarasas2;
}
console.log(pasikartojantisSkaicius([1, 2, 2, 5, 6, 6]));
console.log(pasikartojantisSkaicius([1, 2, 2, 2, 5, 6, 6]));
console.log(pasikartojantisSkaicius([1, 2, 2, 2, 5, 6, 6, 7, 7, 7, 7]));

console.log('-----------------');
// 13. Sukurti funkciją, kuri grąžins vis duotos sąrašo skaičius, kurie yra tarp dviejų nurodytų reikšmių.

function interavalas(skaiciai, int1, int2) {
    let naujiSkaiciai = [];
    for (let i = 0; i < skaiciai.length; i++) {
        if (skaiciai[i] >= int1 && skaiciai[i] <= int2) {
            naujiSkaiciai.push(skaiciai[i]);
        }
    }
    return naujiSkaiciai;
}
console.log(interavalas([2, 5, 36, 8, 15, 6], 5, 20));

console.log('-----------------');
// 14. Parašyti funkciją, kuri iš žodžių sąrašo išrinktų ir grąžintų tik tuos žodžius, kuriuose yra raidė e.

function raideE(zodziai) {
    let naujas = [];
    for (let i = 0; i < zodziai.length; i++) {
        let zodis = zodziai[i];
            if (zodis.includes('e'))
            naujas.push(zodis + ' ');
    }
    return naujas.join('');
  }
console.log(raideE(['egle', 'pusis', 'liepa']));