/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const limit = 2**31;
    const sign = x < 0 ? -1 : 1;
    const reversedNum = Number(String(Math.abs(x)).split('').reverse().join(''));
    return reversedNum > 0 ? reversedNum : reversedNum * sign;
};
