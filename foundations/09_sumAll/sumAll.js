const sumAll = function(num1, num2) {
    let initialNum = 0;
    let timesToAdd = 0;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    if (num1 > num2) {
        timesToAdd = num1
        initialNum = num2;
    }
    else {
        timesToAdd = num2;
        initialNum = num1;
    }

    let sum = 0;
    for (let i = initialNum; i <= timesToAdd; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
