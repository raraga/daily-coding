// Problem #1
// Given a list of numbers and a number k.
// Return whether any two number from the list add up to k.
// Bonus: Can you do this in one pass?

// Solution from https://www.youtube.com/watch?v=TmjexrTRr6U

function sums(arr, sum) {
 // pairs is the array we push into.
    let pairs = [];
 // numList is our reference table.
    let numList = [];

// Here's an example of the first iteration.
    for ( let i = 0; i < arr.length; i++) {
            let currNum = arr[i]; // The current number in the iteration. Ex: 5
            let diff = sum - currNum; // The difference of the sum intended and currNum. Ex: diff = 25 - 5
            if (numList.includes(diff)) { // numList is obviously empty. a
                pairs.push([currNum, diff])
        }
        numList.push(currNum);
    }
    return pairs;

}

let num = 25;
let arr = [5, 10, 15, 20]

console.log(sums(arr,num));
