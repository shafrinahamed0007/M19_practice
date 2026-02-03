/**
 * Find the lowest number in the array below
 */

function findLowerNumber(numbers){
    let lowNumber = numbers[0]
    for(let number of numbers){
        if(lowNumber > number){
            lowNumber = number;
        }
    }

    return lowNumber;
}

const heights2 = [167,190,120,165,137];
const lowestNumber = findLowerNumber(heights2);
console.log(heights2, "lowest number is: ", lowestNumber);