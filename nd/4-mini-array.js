// Patikrinti ar sarase yra tam tikras skaicius.

const numbers = [1, 2, 5, 3];

if (numbers[0] === 3) {
    console.log('Yra');
} else if (numbers[1] === 3) {
    console.log('Yra');
} else if (numbers[2] === 3) {
    console.log('Yra');
} else if (numbers[3] === 3) {
    console.log('Yra');    
} else {
    console.log('Nera');
}

console.log('2--------------');
// Patikrinti ar masyvas tuscias.

const empty = [];
 if (empty[0] === undefined) {
     console.log('Tuscias.');
 } else {
    console.log('Netuscias');
 }

 console.log('3--------------');
 // Nustatyti ar sarase yra teigiamas skaicius.

 const array = [0, -2, 3, -4];

 if (array[0] > 0) {
    console.log('Yra');
} else if (array[1] > 0) {
    console.log('Yra');
} else if (array[2] > 0) {
    console.log('Yra');
} else if (array[3] > 0) {
    console.log('Yra');    
} else {
    console.log('Nera');
}
 
const array1 = [-1, -2, -3, -4];

 if (array1[0] > 0) {
    console.log('Yra');
} else if (array1[1] > 0) {
    console.log('Yra');
} else if (array1[2] > 0) {
    console.log('Yra');
} else if (array1[3] > 0) {
    console.log('Yra');    
} else {
    console.log('Nera');
}

console.log('4--------------');
// Patikrinti ar visi saraso skaiciai yra lyginiai.

const skaiciai = [2, 4, 6];

if (skaiciai[0] % 2 === 0 && skaiciai[1] % 2 === 0 && skaiciai[2] % 2 === 0) {
    console.log('Lyginiai');}
     else {
    console.log('Nelyginiai');
}

const skaiciai1 = [3, 5, 7];

if (skaiciai1[0] % 2 === 0 && skaiciai1[1] % 2 === 0 && skaiciai1[2] % 2 === 0) {
    console.log('Lyginiai');}
     else {
    console.log('Nelyginiai');
}

const skaiciai2 = [2, 5, 8];

if (skaiciai2[0] % 2 === 0 && skaiciai2[1] % 2 === 0 && skaiciai2[2] % 2 === 0) {
    console.log('Lyginiai');}
     else {
    console.log('Nelyginiai');
}

console.log('5--------------');
// Patikrinti ar kuris nors skaicius sarase yra neigiamas.

const array3 = [0, -2, 3, -4];

if (array3[0] < 0) {
   console.log('Yra');
} else if (array3[1] < 0) {
   console.log('Yra');
} else if (array3[2] < 0) {
   console.log('Yra');
} else if (array3[3] < 0) {
   console.log('Yra');    
} else {
   console.log('Nera');
}

const array4 = [1, 2, 3, 4];

if (array4[0] < 0) {
   console.log('Yra');
} else if (array4[1] < 0) {
   console.log('Yra');
} else if (array4[2] < 0) {
   console.log('Yra');
} else if (array4[3] < 0) {
   console.log('Yra');    
} else {
   console.log('Nera');
}

console.log('6--------------');
// Patikrinti ar pirmas skaicius sarase yra didesnis uz paskutini.

const b = [1, 3, 5];

if (b[0] > b[2]) {
    console.log('a) Pirmas skaicius didesnis uz paskutini');
}

const b1 = [8, 3, 2];

if (b1[0] > b1[2]) {
    console.log('b) Pirmas skaicius didesnis uz paskutini');
}

const b2 = [9, 3, -11];

if (b2[0] > b2[2]) {
    console.log('c) Pirmas skaicius didesnis uz paskutini');
}

console.log('7--------------');
// Patikrinti ar saraso ilgis didesnis uz 5.

const length = [1, 2, 3, 4, 5, 6];

if (length.length > 5) {
    console.log('Saraso ilgis didesnis uz 5');
}

const length1 = [1, 2, 3];

if (length1.length > 5) {
    console.log('Saraso ilgis didesnis uz 5');
}

console.log('8--------------');
// Patikrinti ar sarase yra tik teksto kintamieji.

const text = ['obuolys', 'bananas', 'vysnia'];

if (typeof text[0] === 'string' && typeof text[1] === 'string' && typeof text[2] === 'string') {
    console.log('a) Sarase yra tik teksto kintamieji');
} else {
    console.log('a) Sarase yra ne tik teksto kintamieji');
}

const text1 = ['obuolys', 2, 'vysnia'];

if (typeof text1[0] === 'string' && typeof text1[1] === 'string' && typeof text1[2] === 'string') {
    console.log('b) Sarase yra tik teksto kintamieji');
} else {
    console.log('b) Sarase yra ne tik teksto kintamieji');
}

console.log('9--------------');
// Rasti didziausia skaiciu sarase ir patikrinti ar jis didesnis uz 10.

const c = [2, 5, 12, 4];

console.log('10--------------');
// Patikrinti ar masyve yra daugiau nei 3 to paties skaiciaus elementai.

const d = [2, 2, 2, 2, 2, 5, 6];

if (d[0] === d[1] && d[1] === d[2]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else if (d[1] === d[2] && d[2] === d[3]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else if (d[2] === d[3] && d[3] === d[4]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else if (d[3] === d[4] && d[4] === d[5]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else if (d[4] === d[5] && d[5] === d[6]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else {
    console.log('a) Masyve nera 3 to paties skaiciaus elementu.');
}


const d1 = [2, 3, 4, 7, 9, 5, 6];

if (d1[0] === d1[1] && d1[1] === d1[2]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else if (d1[1] === d1[2] && d1[2] === d1[3]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else if (d1[2] === d1[3] && d1[3] === d1[4]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else if (d1[3] === d1[4] && d1[4] === d1[5]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else if (d1[4] === d1[5] && d1[5] === d1[6]) {
    console.log('a) Masyve yra 3 to paties skaiciaus elementai.');
} else {
    console.log('a) Masyve nera 3 to paties skaiciaus elementu.');
}

console.log('-------------');
// ciklas cikle.
for (let i = 0; i < 3; i++) {
    console.log('i: ' + i);
    for (let j = 0; j < 3; j++){
    console.log('j: ' + j);
    }
}