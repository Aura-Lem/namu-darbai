// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus.

console.log('1--------------------');

function tusciaFunkcija() {
    return false;}

console.log(tusciaFunkcija());

console.log('2--------------------');

function daugyba(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaicius.';
    }
    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaicius';
    }

    if (isNaN(a)) {
        return 'Pirmasis parametras nera normalus skaicius.';
    }

    if (isFinite(b) === false) {
        return 'Antrasis parametras nera normalus skaicius.';
    }

    if ('' + b === 'NaN') {
        return 'Antrasis parametras nera normalus skaicius.';
    }

    if (a === Infinity || a === -Infinity) {
        return 'Pirmasis parametras negali buti begalybes.'
    }

    if (b === Infinity || b === -Infinity) {
        return 'Antrasis parametras negali buti begalybes.'

    }
    return a * b;
}

console.log(daugyba('labas', 7));
console.log(daugyba(-5, 7));
console.log(daugyba(7, 5));
console.log(daugyba(-7, -5));
console.log(daugyba(-7, 0));
console.log(daugyba(0, -5));
console.log(daugyba(2, 'labas'));
console.log(daugyba(2, true));
console.log(daugyba([2], 5));
console.log(daugyba('rytas', 'labas'));
console.log(daugyba(2, NaN));
console.log(daugyba(2, 3.5));
console.log(daugyba(2, Infinity));
console.log(daugyba(Infinity, 2));
console.log(daugyba(Infinity, Infinity));



console.log('3--------------------');

function skaitmenuKiekisSkaiciuje(number){ 
    if (typeof number !== 'number') {
        console.log('Pateikta netinkamo tipo reikšmė.');
        if (isFinite(number) === false) {
            console.log('Pateiktas skaicius nera normalus skaicius.');
        }
    } else {    
         console.log(number.toString().length);} 
}
    
skaitmenuKiekisSkaiciuje(5);
skaitmenuKiekisSkaiciuje(781);
skaitmenuKiekisSkaiciuje(37060123456);
skaitmenuKiekisSkaiciuje(true);
skaitmenuKiekisSkaiciuje('asd');
skaitmenuKiekisSkaiciuje(NaN);

    
