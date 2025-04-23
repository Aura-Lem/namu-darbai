const inventory = {
    Fruits: {
        Apples: {quantity: 10, threshold: 5},
        Bananas: {quantity:3, threshold: 5}
    },
    Electronics: {
        Phone: {quantity: 2, threshold: 2},
        Laptop: {quantity: 0, threshold: 1}
    }
};

// logs 
const logs = [];

function addItem(category, name, quantity, threshold = 5) {
    if (!inventory[category]) {
        inventory[category] = {};
    }
    if (inventory[category][name]) {
        inventory[category][name].quantity += quantity;
    }
    else {
        inventory[category][name] = {quantity, threshold};
    }
    logTransaction("ADD", category, name, quantity);
}

function removeItem(category, name, quantity) {
    let item;
    if (inventory[category]) {
        item = inventory[category][name];
    }
    if (item) {
        item.quantity -= quantity;
        if (item.quantity <= 0) {
            console.log("Ispirkta preke");
            delete inventory[category][name];
        }
        logTransaction('REMOVE', category, name, quantity);
    }
}

function logTransaction(type, category, item, quantity) {
    logs.push({type, category,item, quantity, timestamp: new Date().toLocaleString()})
}

function checkLowStock () {
    for (let category in inventory) {
        for (let item in inventory[category]) {
            const {quantity, threshold} = inventory[category][item];
            if (quantity <= threshold) {
                console.warn(`Low stock alert for ${item} ir ${category}: ${quantity} left`);
            }
        }
    }
}

function searchItem(name) {
    for(let category in inventory) {
        for (let item in inventory[category]) {
            if (item.toLowerCase().includes(name.toLowerCase())) {
                console.log(`FOUND ${item} in ${category}:`, inventory[category][item])
            }
        }
    }
}

console.log(inventory);
addItem("Fruits", "Apples", 30);
console.log(inventory);
addItem("Fruits", "Pineapple", 30, 10);
console.log(inventory);



function showLogs() {
    console.table(logs);
}

showLogs();

checkLowStock();
addItem("Fruits", "Bananas", 8);
checkLowStock();
searchItem('Bananas');