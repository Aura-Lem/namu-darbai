// 1. Balsiu kiekis

function countVowels(str) {
    const vowels = 'aeiouyAEIOUY';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('Labas vakaras'));

// 2. Apvesrsti zodi.

function reverseString(str) {
    //const raides = str.split('')
    //let atvirkstinis = '';
    //for (let i = raides.length - 1; i >= 0; i--) {
       // atvirkstinis += raides[i];
   // }
   // return atvirkstinis
   return str.split('').reverse().join('');
}
console.log(reverseString('Ananasas'));


// 3. Padidinti pirma kiekvieno zodzio raide.

function capitalizeWords(sentence) {
     return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords('tu esi vienaragio feja'));

// 4. Patikrinti ar zodis yra palindromas.

function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    // if (cleaned === cleaned.split('').reverse().join('')) {
    //     return true;
    // } else {
    //     return false;
    // }
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome('eye'));

// 5. Pakeisti visus tarpus su bruksniukais.

function replaceSpaces(str) {
    return str.replaceAll(' ', '_');
}
console.log(replaceSpaces('didelis namas yra grazus ir aukstas'));

// 6. Suskaiciuoti kiek kartu zodyje kartojasi raide.

function countChar(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}
console.log(countChar('ravajava', 'a'));

// 7. Ismesti visus skaicius is teksto.

function removeDigits(str) {
    return str.replace(/[0-9]/g, '');   // ima visus simbolius. g reiskia global, vadinasi keicia visus.
}

console.log(removeDigits('viens1 du2 trys3!'));

// 8. Spausdinti tik raides is teksto.

function onlyLetters(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}

console.log(onlyLetters('Apelsinas,1234!'));

// 9. Rasti ilgiausia zodi sakinyje.

// function longestWord(sentence) {
//      const zodziai = sentence.split(' ');
//      let maxLen = 0;
//      let Zmax = '';
//      for (zodis in zodziai) {
//         zodziai[zodis] = zodziai[zodis].replace(/[^a-zA-Z]/g, '');
//         if (zodziai[zodis].length > maxLen) {
//             Zmax = zodziai[zodis];
//             maxLen = zodziai[zodis].length;
//         }
//      }
//      return Zmax;
// }
//console.log(longestWord('labas rytas, Lietuva, as esu Aurelija'));

// 10. Pakeisti balses i *.

function maskVowels(str) {
    return str.replace(/[aeiouyAEIOUY]/g, '*');
}
console.log(maskVowels('Apelsinas'));

// 11. 

function trimString(str) {
    return str.trim();
}

console.log(trimString('     akla'));

// 12. 

function toKebabCase(str) {
    //return str.toLowerCase(str).replaceAll(' ', '-');
    return str.toLowerCase(str).replaceAll(/ /g, '-');
}

console.log(toKebabCase('vienas js nd darbas'));

// 13. Kiek zodziu sakinyje.

function wordCount(sentence) {
    return sentence.trim().split(' ').length;
}
console.log(wordCount('labas vienas du'));

// 14. 
function repeatString(str, n) {
    return str.repeat(n);
}

console.log(repeatString('a', 3));