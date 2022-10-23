

var n= prompt('숫자를 입력하시오');
n = parseInt(n);
document.write('n:'+ n+ '<br>');
var i;
var s=0;
for(i=1; i<=n; i++){
  s= s+i;
  document.write(i+ ' ');
}
document.write('<br>');
document.write('1~'+ n + '까지 합:'+ s);


