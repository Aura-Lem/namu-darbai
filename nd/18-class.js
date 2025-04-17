// zoo sodas su liutais, pingvinais ir flamingais
// vardas, amzius, alkis, rusis, koju kiekis
class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.legCount = 0;
        this.isHungry = true;
        this.species = 'unknown';
    }

    feed(food) {
        if (this.isHungry === true && this.wantedFood === food) {
            this.isHungry = false;
            return 'Ačiū už pietus!'
        } else if (this.isHungry === true) {
            return 'Duok tinkamo maisto!'
        } else  {
            return 'Nenoriu valgyt.'
        }
    }
}

class Lion extends animal{
    constructor (name, age) {
        super(name, age);
        this.legCount = 4;
        this.species = 'liutas';
        this.wantedFood = 'meat';
    }
}

class Penguin extends animal{
    constructor (name, age) {
        super(name, age);
        this.legCount = 2;
        this.wingCount = 2;
        this,this.isHungry = false;
        this.species = 'pingvinas';
        this.wantedFood = 'fish';
    } 
}

class Flamingo extends animal{
    constructor (name, age) {
        super(name, age);
        this.legCount = 2;
        this.wingCount = 2;
        this,this.isHungry = false;
        this.species = 'flamingas';
        this.wantedFood = 'shrimp';
    } 
}

const simba = new Lion('Simba', 4);
const kowalski = new Penguin('Kowalski', 10);


console.log(simba);
console.log(kowalski);
simba.feed('meat');
console.log(simba.isHungry);

const zoo = [kowalski, simba, new Lion('Puma', 8), new Penguin('Rico', 3), new Flamingo('Richard', 6)];
console.log(zoo);

function oldestAnimal(animals) {
    let animal
    let maxAmzius = 0;
    for (const i in animals) {
        if (animals[i].age > maxAmzius) {
            animal = animals[i].name;
            maxAmzius = animals[i].age;
        }
    }
    return animal;
}

console.log(oldestAnimal(zoo));

function collectBirds(animals) {
    const birds = [];
    for (const i in animals) {
        if (animals[i].wingCount !== undefined) {
            birds.push(animals[i]);
        }
    }
    return birds;
}

console.log(collectBirds(zoo));

