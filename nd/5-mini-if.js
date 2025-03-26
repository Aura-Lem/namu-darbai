console.log('1-------------');
// Patikrinti ar skaicius teigiamas.

const a = 3;

if (a >= 0) {
    console.log('Skaicius teigiamas');
} else if (a < 0) {
    console.log('Skaicius neigiamas');
}

console.log('2-------------');
// Patikrinti ar skaicius dalijasi is 5.

const b = 11;

if (b % 5 === 0) {
    console.log('Skaicius dalijasi is 5.');
} else {
    console.log('Skaicius nesidalija is 5.');
}

console.log('3-------------');
// Patikrinti ar teksto tipo kintamajame yra daugiau nei 5 simboliai.

const c = 'pomidoras';

if (c.length > 5) {
    console.log(`Zodyje '${c}' yra daugiau nei 5 simboliai`);
} else { 
    console.log(`Zodyje '${c}' yra maziau nei 5 simboliai`);
}

console.log('4-------------');
// Patikrinti ar asmuo turi teise balsuoti (amzius didesnis arba lygus 18 metu).

const age = 20;

if (age >= 18) {
    console.log('Asmuo turi teise balsuoti.');
} else {
    console.log('Asmuo neturi teises balsuoti');
}

console.log('5-------------');
// Patikrinti ar asmuo yra paauglys (nuo 13 iki 19 metu).

const age1 = 15;

if (age1 >= 13 && age1 <=19) {
    console.log(`Amzius ${age1} atitinka paauglio amziu.`);
} else {
    console.log(`Amzius ${age1} neatitinka paauglio amziaus.`)
}

console.log('6-------------');
// Patikrinti ar skaicius yra nelyginis.

const d = 88;

if (d % 2 !== 0) {
    console.log(`Skaicius ${d} yra nelyginis`);
} else {
    console.log(`Skaicius ${d} yra lyginis`);
}

console.log('7-------------');
// Patikrinti ar eilute lygi "JavaScript".

const e = 'JavaScript';

if (e === 'JavaScript') {
    console.log(`'${e}' yra lygus 'JavaScript'`);
} else {
    console.log(`${e} nera lygus 'JavaScript`);
}

console.log('8-------------');
// Patikrinti ar skaicius yra nuo 10 iki 20 (imtinai).

const f = 15;

if (f >= 10 && f <= 20) {
    console.log(`Skaicius ${f} yra tarp 10 ir 20.`);
} else {
    console.log(`Skaicius ${f} nera tarp 10 ir 20.`);
}

console.log('9-------------');
// Patikrinti ar skaicius yra didesnis arba lygus 100.

const g = 150;

if (g > 100) {
    console.log(`Skaicius ${g} yra didesnis uz 100.`);
} else if (g === 100) {
            console.log(`Skaicius ${g} yra lygus 100.`);
} else {
    console.log(`Skaicius ${g} yra mazesnis uz 100 ir nera lygus 100.`);
}