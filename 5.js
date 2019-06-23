// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function findMost(arr) {
    var maxEle;
    var maxNum = 1;
    var obj = arr.reduce(function (m, n) {
        m[n] ? m[n]++ : m[n] = 1;
        if (m[n] > maxNum) {
            maxEle = n;
            maxNum++;
        }
        return m;
    }, {});
    return maxEle;
}
console.log(findMost(a));
