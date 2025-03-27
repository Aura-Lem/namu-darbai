//console.log('1--------------');
// Suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai):

//function intervalSum(start, end) {
    //let sum = 0;
//   for (let i = start; i <= end; i++) {
 //  sum += i;
 //  }
// if (start === 0) {
// sum = (end * (end + 1)) / 2;
// } else { 
  // for (let i = start; i <= end; i++)
   //    sum += i;
// }
 //return sum;
//}

//console.log('1)', intervalSum(0, 0));
//console.log('2)', intervalSum(0, 4));
//console.log('3)', intervalSum(0, 100));
//console.log('4)', intervalSum(-50, 50));
//console.log('5)', intervalSum(-70, 30));
//console.log('6)', intervalSum(574, 815));

//console.log('2--------------');
// Panaudojant cikla perrasyti tekstinio tipo kintamuju reiksmes is kito galo.



//function stringReverse(text) {
   // let result = '';
   // for (let i = text.length - 1; i >= 0; i--) {
       // result += text[i];
   // }
   
   // return result;
//}

//function stringReverse(text) {
    //let result = '';
    //for (let i = 0; i < text.length; i++) {
       // result += text[text.length - i - 1];
   // }
   // return result;
//}


function stringReverse(text) {
    if (typeof text !== 'string') {
        return 'Reikalinga string tipo reiksme';
    }
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }
   
    return result;
}

console.log(stringReverse('abc'));
console.log(stringReverse('sula'));
console.log(stringReverse('sedek'));
console.log(stringReverse('uzu'));
console.log(stringReverse('sachmatai'));
console.log(stringReverse('saskes'));

console.log(stringReverse([]));
console.log(stringReverse(1465632));
console.log(stringReverse(true));
console.log(stringReverse(null));
console.log(stringReverse(undefined));
console.log(stringReverse());

function intervalCount(start, end, divider) {
    if (typeof start!== 'number') {
        return 'Intervalo pradzia turi buti skaicius.';
    }
    if (typeof end !== 'number') {
        return 'Intervalo pabaiga turi buti skaicius.';
    }
    if (typeof divider !== 'number') {
        return 'Daliklis turi buti skaicius.';
    }
    if (start % 1 !== 0) {
        return 'Intervalo pradzia turi buti sveikasis skaicius.';
    }
    if (end % 1 !== 0) {
        return 'Intervalo ppabaiga turi buti sveikasis skaicius.';
    }
    if (divider % 1 !== 0) {
        return 'Daliklis turi buti sveikasis skaicius.';
    }
    if (start > end) {
        return 'Intervalo pradzia negalai buti didesne nei intervalo pabaiga.';
    }
    let count = 0;
    //1) versija, kai einame per kiekviena skaiciu.
    for (let i = start; i <= end; i++){
        if (i % divider === 0){
           count++;
        }
    }
 
    // 2) labiau optimizuota versija.
    //const trueStart = start;
    //for (let i = trueStart; i <= end; i+= divider){
        // count++;
       // }
    // 3) galutinis tikslas yra formule, kurios uzuomina: count = (end - start) / divider;

    return `Skaiciu intervale tarp ${start} ir ${end} besidalijanciu be liekanos is ${divider} yra ${count} vienetai.`
}

console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));
console.log(intervalCount(1, 11, 3));
console.log(intervalCount(1, 11, 5));
console.log(intervalCount(1, 11, 7));

console.log(intervalCount('asd', 11, 3));
console.log(intervalCount(1, 'asd', 3));
console.log(intervalCount(1, 11, 'asd'));
console.log(intervalCount(true, 11, 3));
console.log(intervalCount(1, true, 3));
console.log(intervalCount(1, 11, true));
console.log(intervalCount(undefined, 11, 3));
console.log(intervalCount(1, undefined, 3));
console.log(intervalCount(1, 11, undefined));
console.log(intervalCount(null, 11, 3));
console.log(intervalCount(1, null, 3));
console.log(intervalCount(1, 11, null));
console.log(intervalCount([], 11, 3));
console.log(intervalCount(1, [], 3));
console.log(intervalCount(1, 11, []));
console.log(intervalCount({}, 11, 3));
console.log(intervalCount(1, {}, 3));
console.log(intervalCount(1, 11, {}));
console.log(intervalCount(intervalCount, 11, 3));
console.log(intervalCount(1, intervalCount, 3));
console.log(intervalCount(1, 11, intervalCount));
console.log(intervalCount(0.1, 11, 3));
console.log(intervalCount(1, 11.1, 3));
console.log(intervalCount(1, 11, 7.1));

console.log(intervalCount(NaN, 11, 3));
console.log(intervalCount(1, NaN, 3));
console.log(intervalCount(1, 11, NaN));
console.log(intervalCount(Infinity, 11, 3));
console.log(intervalCount(100, 11, 3));
console.log(intervalCount(1, Infinity, 3));
console.log(intervalCount(1, 11, Infinity));
console.log(intervalCount(-Infinity, 11, 3));
console.log(intervalCount(1, -Infinity, 3));
console.log(intervalCount(1, 11, -Infinity));

