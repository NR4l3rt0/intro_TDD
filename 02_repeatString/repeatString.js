const repeatString = function(str, nroTimes) {
    
    try{
        if (nroTimes < 0) {
            return 'ERROR';
        }
    }catch(error){
        return 'Error';
    }

    let result = '';
    for(let i = 0; i < nroTimes; i++){
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
