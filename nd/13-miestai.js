const miestai = ['Anykščiai', 107, 'Ariogala', 148, 'Kaunas', 102, 'Kelmė', 225, 'Klaipėda', 311, 'Radviliškis', 191, 'Raseiniai', 178, 'Šiauliai', 213, 'Tauragė', 230, 'Tytuvėnai', 203];
// a)
function didziausiasAtstumas(miestas, greitis, laikas) {
    let maxA = 0;
    let kelias = greitis * laikas;
    let maxM = 0;
    for (let i = 0; i < miestai.length; i += 2) {
        //console.log(miestai[i]);
        if (miestai[i+1] <= kelias && miestai[i+1] > maxA) {
            maxA = miestai[i+1];
            maxM = i;
        }
    } 
    console.log(miestai[maxM] + ' ' + miestai[maxM+1]);
}
didziausiasAtstumas(miestai, 80, 2);

console.log('---------------------');
// b)

function arSpetume(miestai, miestas, laikas) {

    for (let i = 0; i < miestai.length; i += 2) {
        if (miestai[i] === miestas) {
            if (miestai[i+1] / laikas <= 120) {
                console.log('Spesim ' + miestai[i+1] / laikas)
            } 
        } 
        
    }
}

arSpetume(miestai, 'Raseiniai', 2);

console.log('---------------------');
// c)

function arUzteks(miestai, pinigai, Kkaina, deginam) {
      let kuras = 30 + pinigai / Kkaina;
      let atstumas = kuras / deginam;
      let maxA = 0;
      let maxM = 0;
      for (let i = 0; i < miestai.length; i += 2) {
        
        if (miestai[i+1] <= atstumas && miestai[i+1] > maxA) {
            maxA = miestai[i+1];
            maxM = i;
        }
      }
      console.log(miestai[maxM] + ' ' + maxA);
}

arUzteks(miestai, 10, 0.5, 0.5);

console.log('---------------------');
// d)

const kelioSalygos = ['geras', 'prastas', 'taisomas', 'prastas'];

function realusLaikas(miestai, salyga) {
     for (let i = 0; i < miestai.length; i += 2) {
        if (salyga[i/2] === 'geras') {
            console.log(miestai[i+1])
        } if (salyga[i/2] === 'prastas') {
            console.log(miestai[i+1] * 1.5)
        } if (salyga[i/2] === 'taisomas') {
            console.log(miestai[i+1] * 2)
        }
     }
}

realusLaikas(miestai, kelioSalygos);