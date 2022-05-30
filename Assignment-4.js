// Problem No: 1)

function anaToVori(ana) {
    const anaInOneVori = 16;
    if (ana >= 0 && typeof ana == "number") {
        let vori = ana / anaInOneVori;

        return vori;
    }
    else {
        let messege = "Please enter a valid number";
        return messege;
    }
}

let myAna = 80;

let myVori = anaToVori(myAna);

console.log(myVori);



// Problem No: 2)

function pandaCost(singgara, somucha, jilapi) {
    const singgaraPricePerPiece = 7;
    const somuchaPricePerPiece = 10;
    const jilapiPricePerPiece = 15;

    if (singgara >= 0 && somucha >= 0 && jilapi >= 0 && typeof jilapi == "number" && typeof somucha == "number" && typeof singgara == "number") {

        let singgaraPrice = singgara * singgaraPricePerPiece;

        let somuchaPrice = somucha * somuchaPricePerPiece;

        let jilapiPrice = jilapi * jilapiPricePerPiece;


        let totalPrice = singgaraPrice + somuchaPrice + jilapiPrice;

        return totalPrice;
    }

    else {
        let messege = "Please enter a valid quantity";
        return messege;
    }
}

let singgaraQuantity = 20;
let somuchaQuantity = 15;
let jilapiQuantity = 14;

let totalPandaBill = pandaCost(singgaraQuantity, somuchaQuantity, jilapiQuantity);

console.log(totalPandaBill);



// Problem No: 3)

function picnicBudget(persons) {
    const first100PerPersonCost = 5000;
    const second100PerPersonCost = 4000;
    const restOfPerPersonCost = 3000;

    if (persons <= 0 || typeof persons != "number") {
        let messege = "Please enter a valid quantity";
        return messege;
    }


    else if (persons <= 100) {
        let first100PersonsCost = persons * first100PerPersonCost;

        return first100PersonsCost;
    }

    else if (persons <= 200) {
        let morePersonsThan100 = persons - 100;

        let first100PersonsCost = 100 * first100PerPersonCost;
        let second100PersonsCost = morePersonsThan100 * second100PerPersonCost;

        let MoreThan100AndLessThan200PersonsCost = first100PersonsCost + second100PersonsCost;

        return MoreThan100AndLessThan200PersonsCost;
    }

    else {
        let morePersonsThan200 = persons - 200;

        let first100PersonsCost = 100 * first100PerPersonCost;
        let second100PersonsCost = 100 * second100PerPersonCost;
        let restOfPersonCost = morePersonsThan200 * restOfPerPersonCost;

        let moreThan200PersonsCost = first100PersonsCost + second100PersonsCost + restOfPersonCost;

        return moreThan200PersonsCost;
    }
}

let persons = 300;

let totalCost = picnicBudget(persons);

console.log(totalCost);



// Problem No: 4)

function oddFriend(friendsName) {

    let allFriendsName = [];

    for (let i = 0; i < friendsName.length; i++) {

        if (typeof friendsName[i] != "string") {
            let messege = "Please enter all valid name"
            return messege;
        }

        else {
            allFriendsName.push(friendsName[i]);
        }

    }


    for (let j = 0; j < allFriendsName.length; j++) {
        if ((allFriendsName[j].length % 2) != 0) {
            let oddName = allFriendsName[j];

            return oddName;
        }

    }

}


let friendsNames = ["Abdullah", "Nazmul", "Tutul", "Saiful", "Habib"]

let oddFriendName = oddFriend(friendsNames);

console.log(oddFriendName);