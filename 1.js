var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
function isArrayFn(value){
if (typeof Array.isArray === "function") {
return Array.isArray(value);
}else{
return Object.prototype.toString.call(value) === "[object Array]";
}
}

//分别输出false,true
