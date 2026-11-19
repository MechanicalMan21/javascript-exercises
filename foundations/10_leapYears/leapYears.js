const leapYears = function(year) {
    const DIVISIBLE_BY_FOUR = 4;
    const DIVISIBLE_BY_HUNDRED = 100;
    const DIVISIBLE_BY_4HUNDRED = 400;
    const ZERO = 0;
    let result = false;

    if (year/DIVISIBLE_BY_FOUR === ZERO) {
        if(year/DIVISIBLE_BY_HUNDRED !== ZERO) {
            return true;
        }
        if(year/DIVISIBLE_BY_HUNDRED === ZERO) {
            if (year/DIVISIBLE_BY_4HUNDRED === ZERO) {
                return true;
            }
        }        

    } 

    return false;
};

// Do not edit below this line
module.exports = leapYears;
