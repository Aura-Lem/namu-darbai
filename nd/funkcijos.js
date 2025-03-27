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

function digitCount(n) {
    if (typeof n !== 'number') {
        return 'Reikalingas skaicius.';
    }
    // v1
   // if (n === Infinity || n === -Infinity || isNaN(n)) {
   //     return 'Reikalingas normalus skaicius.';
   // }
    // v2
    if (!isFinite(n)) {
        return 'Reikalingas normalus skaicius.';
    }
    // '' + n ---> '' + n  = '5'
    const numberAsString = '' + n;
    let count = numberAsString.length;
    if (n % 1 !== 0)  {
        count --;
    }
    if (n < 0) {
        count--;
    }
    return count;
}

console.log(digitCount());
console.log(digitCount(undefined));
console.log(digitCount('asdfg'));
console.log(digitCount('2554655'));
console.log(digitCount(true));
console.log(digitCount([]));
console.log(digitCount({}));
console.log(digitCount(digitCount));
console.log(digitCount(null));

console.log(digitCount(Infinity));
console.log(digitCount(-Infinity));
console.log(digitCount(NaN));

console.log(digitCount(5));
console.log(digitCount(159));
console.log(digitCount(135554));
console.log(digitCount(5.5));
console.log(digitCount(-5));
console.log(digitCount(-159));
console.log(digitCount(-135554));
console.log(digitCount(-5.5));

//console.log(digitCount(1000000000000000000000));
    
