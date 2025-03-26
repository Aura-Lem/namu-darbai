console.log('1--------------');
// Suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai):

function intervalSum(start, end) {
    let sum = 0;
//   for (let i = start; i <= end; i++) {
 //  sum += i;
 //  }
 if (start === 0) {
 sum = (end * (end + 1)) / 2;
 } else { 
   for (let i = start; i <= end; i++)
       sum += i;
 }
 return sum;
}

console.log('1)', intervalSum(0, 0));
console.log('2)', intervalSum(0, 4));
console.log('3)', intervalSum(0, 100));
console.log('4)', intervalSum(-50, 50));
console.log('5)', intervalSum(-70, 30));
console.log('6)', intervalSum(574, 815));

console.log('2--------------');
// Panaudojant cikla perrasyti tekstinio tipo kintamuju reiksmes is kito galo.

const word = 'abcdef';

for (let i = 1; i < 5; i--);
  
