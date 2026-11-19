const repeatString = function(str, repeatNum) {
    let finalResult ="";
    for (let i = 0; i < repeatNum; i++) {
        finalResult += str;
    }
    return finalResult;
};

// Do not edit below this line
module.exports = repeatString;
