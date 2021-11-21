const ftoc = function(tempF2C) {

    let oneDec = (( tempF2C - 32 ) * 5/9 ).toFixed(1);

    return Number(oneDec);

};

const ctof = function(tempC2F) {

  let oneDec = (( tempC2F * 9/5 ) + 32 ).toFixed(1);

  return Number(oneDec);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
