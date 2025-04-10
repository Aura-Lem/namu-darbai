// 1. Parašyti funkciją, kuriai perdavus vieną iš (akmuo, popierius, šulinys) reikšmių, kompiuteris su jumis sužaistų vaskiči raundą ir išvestų rezultatą į konsolę. Kompiuterio pasirinkimai turi būti atsitiktiniai.

const rps = (p1, p2) => {
    if (p1 === p2) {
      return "Draw!";
    } if (p1 === 'well' && p2 === 'rock' || p1 == 'paper' && p2 === "well" || p1 === "rock" && p2 === 'paper') {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
}
console.log(rps('well', 'rock'));
console.log(rps('well', 'paper'));
console.log(rps('paper', 'rock'));
console.log(rps('rock', 'rock'));

console.log('----------------------');

// 2. Parašyti funkciją, kuri parodytų kiek žmonių reikia norint pakelti tam tikro svorio krovinį, kai vienas žmogus gali pakelti x kg. Pvz.: 10 kg svorį turi kelti 5 žmonės, jei vienas jų gali pakelti 2.4kg.

function weight(a, b) {
    return Math.ceil(b / a);
}
console.log(weight(2.4, 10));
console.log(weight(2, 12));
console.log(weight(3.2, 30));
console.log(weight(2.4, 50));

// 3. Parašyti funkciją, kuri, gavusi norimą namo aukštį, grąžintų kiek aukštų turės namas.