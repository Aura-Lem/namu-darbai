// Uzduotis: atviruku gamintojas nori tam tikras atviruko raides uzklijuoti blizganciu raidziu lipdukais.
// Paskaiciuoti, kiek raidziu lipduku reikes nusipirkti.
// Kas bus jei gamintojas nores visas balses ispuosti lipdukais.

let atvirukoTekstas = 'labai geras daiktas yra televizorius as su juo galiu matyti jus';
let atvirukoRaide = 'a';
let atvirukoSuma = 0;




function atvirukoLipdukai(raide) {
    atvirukoSuma = 0;                                  // Kad kiekviena karta su nauja raide skaiciuotu is naujo.
    for (let i = 0; i < atvirukoTekstas.length; i++) {
        if (atvirukoTekstas[i] === raide) {
            atvirukoSuma += 1;
        }
    }
    return atvirukoSuma;
}
console.log(atvirukoLipdukai('a'));
console.log(atvirukoLipdukai('z'));
console.log(atvirukoLipdukai('p'));

const atvirukoBalses = ['a', 'e', 'o', 'u', 'i'];

for (let i = 0; i < atvirukoBalses.length; i++) {
    console.log('raide ' + atvirukoBalses[i] + ' pasikartoja ' + atvirukoLipdukai(atvirukoBalses[i]));
}