const repeatString = function(str, repeatNum) {
    let finalResult ="";
    if (repeatNum < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repeatNum; i++) {
        finalResult += str;
    }
    return finalResult;
};

// Do not edit below this line
module.exports = repeatString;
