// Problem #1
// Given a list of numbers and a number k.
// Return whether any two number from the list add up to k.
// Bonus: Can you do this in one pass?

// Example
// [ 10, 15, 3, 7 ]
// k = 17

// Our brute force thinking, assuming [a,b,c,d]:
// Can we repeat with a number? i.e b + b?
// Is passing in values in reverse a problem? (Thinking more so from a performance standpoint.)
// For instance: a + b.....then b + a, or is the 2nd cancelled out because the first is already false? 

// a + b, a + c , a + d  
// b + a, b + c, b + d  
// c + a, c + b , c + d  
// d + a, d + b, d + c


// Solution from https://www.youtube.com/watch?v=TmjexrTRr6U

function sums(arr, sum) {
    let pairs = [];
    let numList = [];

    for ( let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let diff = sum - currNum;
        if (numList.includes(diff)) {
            pairs.push([currNum, diff])
        }
        numList.push(currNum);
    }
    return pairs;

}

let num = 25;
let arr = [5, 10, 15, 20]

console.log(sums(arr,num));