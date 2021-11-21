const reverseString = function(str) {

    let tmpArray = str.split("");
    tmpArray.reverse();     // As it mutates the Array, the reference is not needed
    //let reversedString = tmpArray.join(""); 
    //return reversedString;
    return tmpArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
