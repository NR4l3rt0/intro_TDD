const sumAll = function(limit1, limit2) {

    let sum = Number();

    if((Number.isInteger(limit1) && limit1 >= 0 )
      && Number.isInteger(limit2) && limit2 >= 0 ){

        if(limit1 <= limit2){
            for(let i = limit1; i <= limit2; i++){
                sum += i;
            }
        } else {
            for(let i = limit1; i >= limit2; i--){
                sum += i;
            }
        }

    } else {
        return 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
