const removeFromArray = function(arr, ...args) {

        let myArr = arr.slice();    // Copy the values (shallow copy)
        // let arrArgs = Array.from(arguments); Brings an array with every argument
        let arrArgs = [...args];    // Just the ...args

        myArr.forEach( el => {

            if(arrArgs.includes(el)){         // includes() considers the type
                let index = arr.indexOf(el);  // The destructive operation (slice) makes it tricky
                arr.splice(index, 1);         
            }

        });

        return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
