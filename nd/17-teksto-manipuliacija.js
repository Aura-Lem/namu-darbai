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

 function longestWord(sentence) {
      const zodziai = sentence.split(' ');
      let maxLen = 0;
      let Zmax = '';
      for (const zodis in zodziai) {
         zodziai[zodis] = zodziai[zodis].replace(/[^a-zA-Z]/g, '');
         if (zodziai[zodis].length > maxLen) {
             Zmax = zodziai[zodis];
             maxLen = zodziai[zodis].length;
         }
      }
      return Zmax;
 }
console.log(longestWord('labas rytas, Lietuva, as esu Aurelija'));

// 10. Pakeisti balses i *.

function maskVowels(str) {
    return str.replace(/[aeiouyAEIOUY]/g, '*');
}
console.log(maskVowels('Apelsinas'));

// 11. Iskirpti tarpus.

function trimString(str) {
    return str.trim();
}

console.log(trimString('     akla'));

// 12. Pakeisti tarpus bruksneliais.

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

// 14. Pakartoti duota reiksme.
function repeatString(str, n) {
    return str.repeat(n);
}

console.log(repeatString('a', 3));

// 15. Pakeisti teksta, kad zodis prasidetu didziaja raide.

function toCamelCase(str) {
    const words = str.split(' ');
    let cCase = '';
    for (let i = 0; i < words.length; i++) {
        if ( i === 0) {
            cCase += words[i].toLowerCase();
        } else {
            cCase += words[i].charAt(0).toUpperCase();
            cCase += words[i].slice(1).toLowerCase();
        }
    }
    return cCase;
}
console.log(toCamelCase('vienas js nd darbas'));

// 16. Patikrinti ar tekstui priklauso tik skaiciai.
function isOnlyNumbers (str) {
    const numbers = '0123456789';
    for (const char in str) {
        if (numbers.includes(str[char]) === false) {
            return false;
        }
    }
    return true;
}

console.log(isOnlyNumbers('1vienas123'));

// 17. Ar zodis yra anagrama.

function areAnagrams( str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams('avis', 'savi'));

// 18. Sutrumpinti zodi ir prideti ...
function truncate (str, maxLength) {
    if (str.length <= maxLength) {
        return str + '...';
    } else {
        return str.slice(0, maxLength) + '...';
    }
}
console.log(truncate('pomidoras', 4));

//19. Pakeisti didziasias raide i mazasias ir atvirksciai.
function swapCase(str) {
    const raides = str.split('');
    let zodis = '';
    for (const i in raides) {
        if (raides[i] === raides[i].toLowerCase()) {
            zodis += raides[i].toUpperCase();
        } else {
            zodis += raides[i].toLowerCase();
        }
    }
    return zodis;
}
console.log(swapCase('LabaDiena'));

// 20. Isimti simbolius is teksto.
function removePunctuation(str) {
    return str.replace(/[.,!?;:-]/g, '');
}
console.log(removePunctuation('hi!... I say hello?'));

// 21. 

function splitWords(str) {
    return str.trim().split(' ');
}
console.log(splitWords('hghdhf jfjhrjj jjfdjj'));

// 22. Suskaiciuoti didziasias raides.

function countUpperCase(str) {
    let kiekis = str.match(/[A-Z]/g)
    return kiekis.length;
}
console.log(countUpperCase('VienasDuTrysSeptyni'));

// 23. Patikrinti ar yra tekstas.
function containsWord (sentence, word) {
    return sentence.toLowerCase().includes(word.toLowerCase());
}
console.log(containsWord('Vienas namas yra liudnas', 'liudnas'));

// 24. Pakeicia pasirinkta zodi kitu.
function replaceAllWords(str, target, replacement) {
    return str.split(target).join(replacement);
}
console.log(replaceAllWords('Tomas yra ponas bajoras. Tomas raudonas kaip pomidoras', 'Tomas', 'Jonas'));

// 25. Uzkeicia simbolius zvaigzdutemis
function maskString (str) {
    return str.slice(-4).padStart(str.length, '*');
}
console.log(maskString('Pomidoras'));

// 26. Kas antra raide pakeicia i didziaja.

function capitalizeEverySecond (str) {
    const raides = str.split('');
    let zodis = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            zodis += raides[i].toUpperCase();
        } else {
            zodis += raides[i].toLowerCase();
        }
    }
    return zodis;
}
console.log(capitalizeEverySecond('apelsinas mandarinas'));