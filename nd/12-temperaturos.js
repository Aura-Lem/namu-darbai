console.log('a) Parasyti funkcija, kuri apskaiciuotu norimos dienos vidutine temperatura');

let pirmadienis = [0, 3, 5, 8, 6];
let antradienis = [-5, -3, -2, 0, 1];
let treciadienis = [2, 5, 8, 10, 7];
let ketvirtadienis = [5, 8, 11, 9, 6];
let penktadienis = [6, 8, 11, 9, 5];
let sestadienis = [6, 9, 12, 15, 10];
let sekmadienis = [9, 12, 16, 14, 11];


function vidutineTemperatura(diena) {
    let vidurkis = 0;
    for (let i = 0; i < diena.length; i++) {       
        vidurkis += diena[i];
    }
    return vidurkis / diena.length;
}

console.log(vidutineTemperatura(pirmadienis));
console.log(vidutineTemperatura(antradienis));
console.log(vidutineTemperatura(treciadienis));
console.log(vidutineTemperatura(ketvirtadienis));
console.log(vidutineTemperatura(penktadienis));
console.log(vidutineTemperatura(sestadienis));
console.log(vidutineTemperatura(sekmadienis));

console.log('b) Parasyti funkcija, kuri apskaiciuotu norimos dienos auksciausia temperatura');

let didziausia = -Infinity;

function didziausiaTemperatura (diena) {
    let didziausia = -Infinity;
         for (let i = 0; i < diena.length; i++) {
            if (diena[i] > didziausia) {
                didziausia = diena[i];
            }
         }
         return didziausia;
}

console.log(didziausiaTemperatura(pirmadienis));
console.log(didziausiaTemperatura(antradienis));
console.log(didziausiaTemperatura(treciadienis));
console.log(didziausiaTemperatura(ketvirtadienis));
console.log(didziausiaTemperatura(penktadienis));
console.log(didziausiaTemperatura(sestadienis));
console.log(didziausiaTemperatura(sekmadienis));

console.log('c) Parasyti funkcija, kuri apskaiciuotu norimos dienos zemiausia temperatura');

let maziausia = Infinity;

function maziausiaTemperatura (diena) {
    let maziausia = Infinity;
         for (let i = 0; i < diena.length; i++) {
            if (diena[i] < maziausia) {
                maziausia = diena[i];
            }
         }
         return maziausia;
}

console.log(maziausiaTemperatura(pirmadienis));
console.log(maziausiaTemperatura(antradienis));
console.log(maziausiaTemperatura(treciadienis));
console.log(maziausiaTemperatura(ketvirtadienis));
console.log(maziausiaTemperatura(penktadienis));
console.log(maziausiaTemperatura(sestadienis));
console.log(maziausiaTemperatura(sekmadienis));

console.log('d) Parasyti funkcija, kuriai davus visas savaites dienas, ji suranda, kuria diena buvo zemiausia, o kuria auksciausia temperatura');






console.log('e) Parasyti funkcija, kuri apskaiciuotu visos savaites vidutine temperatura');

const list = [];
list.push(...pirmadienis, ...antradienis, ...treciadienis, ...ketvirtadienis, ...penktadienis, ...sestadienis, ...sekmadienis);
let result = 0;
function savaitesVidurkis(a) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        count += list[i];
        result = count / list.length;
    }
    return result;
}

console.log(savaitesVidurkis(list));







