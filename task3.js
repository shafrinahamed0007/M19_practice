/**
 * Your task is to calculate total budget required to by electronics:
 * laptop = 35000 TK.
 * tablet = 1500 TK.
 * mobile = 20000 Tk.
 *
 * Write a JS function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and return the total money required.
 *
 */

function calculateElectronicsBudget(budget1, budget2, budget3){
    let totalMoneyRequired = budget1 + budget2 + budget3;
    return totalMoneyRequired;

}

let laptop = 35000;
let tablet = 15000;
let mobile = 20000;

const totalMoneyRequired = calculateElectronicsBudget(laptop, tablet, mobile);
console.log("Total Budget: ", totalMoneyRequired, "TK");



