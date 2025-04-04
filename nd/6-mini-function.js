console.log('1------------');
// Sukurti funcija skirta patikrinti ar skaicius yra teigiamas.



function teigiamasSkaicius(skaicius) {
    if ( skaicius > 0) {
        console.log(`Skaicius ${skaicius} yra teigiamas.`);
    } else {
        console.log(`Skaicius ${skaicius} yra neigiamas.`);
    }
}
  const skaicius = 7;
  teigiamasSkaicius(skaicius);

console.log('2------------');
  // Sukurti funkcija skaiciaus kvadratui apskaiciuoti.

  

function skaiciausKvadratas(kvadratas) {
          return b**2;
}

const b = 2;
console.log(skaiciausKvadratas(b));

console.log('3---------------');
// Sukurti funkcija, kuri paima du skaicius ir grazina didesniji.

function didesnisSkaicius(a, b) {
    if (a > b) {
        return a;
    } if (a < b) {
        return b;
    }
}

console.log(didesnisSkaicius(2, 5));
console.log(didesnisSkaicius(7,3));

console.log('4------------');
// Sukurti funkcija, kuri patikrintu ar eiluteje yra zodis 'JavaScript'.

function reikalingasZodis(word) {
    if (word === 'JavaScript') {
    console.log('Euluteje yra zodis "JavaScript".');
} else {
    console.log('Euluteje nera zodzio "JavaScript".')
}
}

reikalingasZodis('JavaScript');
reikalingasZodis('Pomidoras');

console.log('5------------');
// Sukurti funcija tikrinancia ar skaicius yra lyginis.

function lyginisSkaicius(number) {
    if (number % 2 === 0){
        console.log('Skaicius yra lyginis.');
    } else {
        console.log('Skaicius yra nelyginis.');
    }
}

lyginisSkaicius(6);
lyginisSkaicius(33);
lyginisSkaicius(-7);

console.log('6------------');
// Sukurti funkcija, kuri i console isvestu priesinga reiksme (jei skaicius teigiamas, isvestu neigiama, jei gaunamas zodis, tai zodi turi parasyti atvirksciai).

function priesingaReiksme(kintamasis) {
    if (kintamasis >= 0) {   
         console.log('-', kintamasis);
    } if (kintamasis < 0) {   
        console.log(kintamasis * -1);
   } if (typeof kintamasis === 'string') {
        console.log(kintamasis[4] + kintamasis[3] + kintamasis[2] + kintamasis[1] + kintamasis[0]);
   }
}


//function priesingaReiksme(kintamasis) {
   // if (kintamasis >= 0) {   
      //   console.log('-', kintamasis);
   // } if (kintamasis < 0) {   
    //    console.log(kintamasis * -1);
  // } if (typeof kintamasis === 'string'); 
   //     let raide = '';
   //     let pilnasZodis = '';
   //     for (let i = kintamasis.length - 1; i >= 0; i--){
   //         raide = kintamasis.charAt(i)
    //        pilnasZodis += raide;
  // }
//}

priesingaReiksme(-7);
priesingaReiksme(7);
priesingaReiksme('Labas');


console.log('7------------');
// Sukurti funkcija, kuri apskaiciuotu staciakampio plota.
//  - su saraso (array) tipo kintamuoju.
//  - su keliais skaiciu tipo kintamaisiais.

function staciakampioPlotas(multiply) {
         result = multiply[0] * multiply[1];
         return 'a)' + result;
}
console.log(staciakampioPlotas([5, 3]));
console.log(staciakampioPlotas([6, 2]));
console.log(staciakampioPlotas([10, 8]));

function staciakampioPlotas1(a, b) {
    result = a * b;
    return 'b)' + result;
}

console.log(staciakampioPlotas1(6, 5));
console.log(staciakampioPlotas1(9, 2));
console.log(staciakampioPlotas1(7, 4));

console.log('8------------');
// Sukurti funkcija, kuri tikrina ar skaicius dalijasi is 3.

function skaiciusIs3(number) {
    if (number % 3 === 0){
        console.log('Skaicius dalijasi is 3.');
    } else {
        console.log('Skaicius nesidalija is 3.')
    }
}
skaiciusIs3(0);
skaiciusIs3(2);
skaiciusIs3(15);
skaiciusIs3(-40);

console.log('9------------');
// Sukurti funkcija, kuri tikrina ar teksto tipo kintamasis prasideda raide 'a'.

function pirmaRaide(zodis) {
    let raide = zodis[0];
    if (raide === 'a' || raide === 'A') {
        return 'Zodis prasideda raide "a".';
    } else {
        return 'Zodis prasideda ne "a" raide.';
    }
}

console.log(pirmaRaide('Labas'));
console.log(pirmaRaide('Auksas'));

console.log('10------------');
// Sukurti funkcija triju skaiciu vidurkiui rasti.

function vidurkis(a, b, c) {
    let result = (a + b + c) / 3;
    return result;
}

console.log(vidurkis(3, 5, 8));
console.log(vidurkis(-2, 10, 7));

console.log('11------------');
// Sukurti funkcija, grazinancia teksto tipo kintamojo ilgi.

function tekstoIlgis(text) {
    let a = text.length;
    return a;
}

console.log(tekstoIlgis('Labas'));
console.log(tekstoIlgis('penktadienis'));
console.log(tekstoIlgis('Laba diena'));

console.log('12------------');
// Sukurti funkcija dviem eilutems sujungti.

function dviEilutes(masyvas) {
      let result = masyvas[0] + ' ' + masyvas[1];
      return result;
}

console.log(dviEilutes(['viena eilute', 'antra eilute']));
console.log(dviEilutes(['Laba', 'diena']));

console.log('13------------');
// Sukurti funkcija, kuri tikrina ar skaicius yra tarp dvieju reiksmiu (imtinai).

function skaiciusTarpReiksmiu(number, range1, range2) {
    if (range1 > range2) {
        return 'Neteisingai pateiktas intervalas.'
    }
    if (number >= range1 && number <= range2) {
        return `${number} yra skaiciu ${range1} ir ${range2} intervale`;
    } else {
        return `${number} nera skaiciu ${range1} ir ${range2} intervale`;
    }
}

console.log(skaiciusTarpReiksmiu(5, 0, 10));
console.log(skaiciusTarpReiksmiu(20, 0, 10));
console.log(skaiciusTarpReiksmiu(15, 20, 10));