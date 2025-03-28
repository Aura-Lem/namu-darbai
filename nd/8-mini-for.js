console.log('1------------------');
// Spausdinti skaicius nuo 1 iki 10 naudojant for cikla.

for (let i = 1; i < 11; i++){
   console.log(i);
}

console.log('2------------------');
// Spausdinti skaicius nuo 10 iki 1 atvirkstine tvarka naudojant for cikla.

for (let i = 10; i > 0; i--){
    console.log(i);
 }

console.log('3------------------');
// Spausdinti kiekviena lygini skaiciu nuo 0 iki 20 naudojant cikla.


for (i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log('4------------------');
// Spausdinti kiekviena nelygini skaiciu nuo 0 iki 20 naudojant cikla.


for (j = 0; j <= 20; j++) {
    if (j % 2 !== 0) {
        console.log(j);
    }
}

console.log('5------------------');
// Spausdinti pirmuosius 10 skaiciu kvadratu.

for (let i = 0; i <=10; i++) {
    console.log(i**2);
}

console.log('6------------------');
// Spausdinti pirmuosius 10 skaiciu kubu.

for (let i = 0; i <=10; i++) {
    console.log(i**3);
}

console.log('7------------------');
// Atspausdinti 7 daugybos lentele.

for (let i = 0; i <= 10; i++) {
    console.log(i*7);
}

console.log('8------------------');
// Atspausdinti nuo 1 iki 5 zvaigzduciu serija.

let star = '';
for (let i = 0; i <= 5; i++) {
    star += '*';
    console.log(star);
}


console.log('9------------------');
// Atspausdinti atvirkstine eiga su zvaigzdutemis 5 eilutese.

let n = 5;
for (let i = n; i >= 1; i--) {
    let star1 = '*';
    console.log(star1.repeat(i));
}

console.log('10------------------');
// Spausdinti skaicius nuo 1 iki 50, kurie dalijasi is 3.

function dalybaIs3(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

dalybaIs3(50);

console.log('11------------------');
// Spausdinti skaicius nuo 1 iki 50 imtinai, kurie dalijasi is 5.

function dalybaIs5(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

dalybaIs5(50);

console.log('12------------------');
// Spausdinti skaicius nuo 1 iki 100, kurie dalijasi ir is 3 ir is 5.

function dalybaIs3Ir5(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

dalybaIs3Ir5(100);

console.log('13------------------');
// Sukurti for cikla, kuris penkis kartus isspausdintu "Hello, World!".

for (let i = 0; i < 5; i++) {
    console.log('Hello, World!');        
}   
    


