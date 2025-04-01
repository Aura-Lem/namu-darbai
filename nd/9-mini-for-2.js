console.log('1---------------');
// Sukurti for cikla, kuris spausdina nuo 1 iki 100, taciau kiekviena skaiciu, kuris dalijasi is 4, reikia pakeisti zodziu 'Fizz'.

let number = 0;
function dalybaIs4(number){
    for(i = 0; i <= 100; i++) {
        if(i % 4 === 0) {
            console.log('Fizz');
        } else {
            let result = i;
            console.log(result);
        }
        
    }
}

dalybaIs4(number);

console.log('2---------------');
// Sukurti for cikla, kuris spausdina nuo 1 iki 100, bet skaicius, kurie dalijasi is 3 pakeisti 'Fizz', skaicius, kurie dalijasi is 5 - 'Buzz', o skaicius, kurie dalijasi is abieju - 'FizzBuzz'.

let number1 = 0;
function dalybaIsVisu(number1){
    for(i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            let result1 = i;
            console.log(result1);
        }    
    }
}

dalybaIsVisu(number1);

console.log('4---------------');
// Spausdinti skaicius nuo 1 iki 20 ir prie kiekvieno lyginio skaiciaus prideti 'Even', o prie kiekvieno nelyginio - 'Odd'.

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' Even');
    } else {
        console.log(i + ' Odd');
    }
}

console.log('5---------------');
// Spausdinti bet kurio pasirinkto skaiciaus daugybos lentele.

function daugybosLentele(daugiklis) {
    for (let i = 0; i<=10; i++) {
        console.log(i * daugiklis); 
    }
}

daugybosLentele(7);

console.log('6---------------');
// Sukurti for cikla, kuris spausdina skaicius nuo 1 iki 30, bet tik tuos, kurie dalijasi is 2 arba 3.

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0 ||i % 3 === 0) {
        console.log(i);
    }
}

console.log('7---------------');
// Sukurti for cikla, kad patikrinti ar skaicius yra pirminis ir isspausdintu pranesima.





