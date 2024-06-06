// Define a function named subarray which takes an array of numbers and a target sum as parameters
function subarray(array, target){
    // Initialize variable to keep track of the sum 
    let currentSum=0;
    // Initialize a Set to store cumulative sums encountered during iteration
    let subarray= new Set();
     // Add 0 to the Set initially to cover the case where the sum of elements from the beginning equals the target
    subarray.add(0);
// use for loop to itilite  through each element in the array
    for(let number of array){
        // Add the current number to the currentSum
        currentSum += number;
        // Check if currentSum is equal to the target 
        if(currentSum === target || subarray.has(currentSum - target)){
            // If either condition is met to return true
            return true;
        }
        // Add currentSum to the subarray Set
        subarray.add(currentSum);
    }
         // If no contiguous subarray with the sum target is found, return false after iterating through all elements
    return false;
}
//// Test the subarray function with the provided array and target as parametr  
const array=[4,16,7,30,9,2,9,3];
const target=30;
console.log(subarray(array, target)); //true