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

console.log('3------------');
// Sukurti funkcija, kuri paima du skaicius ir isveda i console didesniji.

function didesnisSkaicius(nuber) {
    
}

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

priesingaReiksme(-7);
priesingaReiksme(7);
priesingaReiksme('Labas');

console.log('7------------');
// Sukurti funkcija, kuri apskaiciuotu staciakampio plota.
//  - su saraso (array) tipo kintamuoju.
//  - su keliais skaiciu tipo kintamaisiais.