//Define function that will help to transform String this function has one parametr which called string 
function transformation (str){
    //Check if lengeth of String leneth is divisibe by 3 and perfom required if yes
    if (str.length % 3 === 0) {
        // Reverse the entire string
        //fist i am going to use javascript builtin function called split : to split string into array so that it will be easy to me reverser 
       let split=str.split('');
       //after split string into array it easie to reverse using build in function in javascript
         let rever =split.reverse();
         return rever.join('');
    }

// Check if our string if divisible by 3 and 5 we use modlus of multipe of 5 and 3 which is equal to 15 
else if (str.length % 15 === 0) {
    // Firstly i am going to make reverse as i did privous if function i used on single line in order to make my code sipmle as best programming practise that we have to make our code simple  
let rever = str.split('').reverse().join('');
    //  after reverse i am going to replace each character with its ASCII CODE USING BUILD IN FUNCTION AGAIN WE FOUND IN JAVASCRIPT 
   
    let asccstring= rever.split('').map(char => char.charCodeAt(0)).join(' ');
    return asccstring;
}
// Check if the length of our string id diviseable by 5 we make modulsa 5 and if is equal to 0 that true our condition will passed 
else if (str.length % 5 === 0) {
    //  First step is to split our string as we explain in our first function 
    let split=str.split('');
    // next step to assign asci code to our string using build function we found in javascript
    let asscicode =split.map(char => char.charCodeAt(0)).join(' ');
    // we return here 
    return asscicode;
}
// as developer in order to prevent crush of our code i have to conside in case of condition fail what is going to happen 
else {
    return "the String is not divisible by 5 or 3 try another String" +str;
}
}

// here I tasted using the string you gave me in the question paper 
console.log(transformation("Hamburger")); // Output: "regrubmaH"
console.log(transformation("Pizza")); // Output: "80 105 122 122 97"
console.log(transformation("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"