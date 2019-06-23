var colors = ["Red", "Green", "White", "Black"];
var str='';
for(var i=0;i<colors.length;i++){
  str+=colors[i]
  if(i<colors.length-1){
    str+=' ';
  }
}
console.log(str);
