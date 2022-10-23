function hello(){
  document.write('Hello! <br>');
}
function get_day(y,m,d){
  var s_day=['일','월','화','수','목','금','토'];  
  var d = new Date(y,m-1,d);
    var x= d.getDay();
    return s_day[x]
  }
var month= prompt('몇 월을 출력할까요?');
var month= parseInt(month);

var i;
for(i=10; i<=28; i++){
  var d= new Date(2022,month-1,i);
  var dd= get_day(2022,month,i);
  var idx=get_day();
  document.write(d.toLocaleString());
  document.write(' '+idx+ '요일<br>' );

  
}
