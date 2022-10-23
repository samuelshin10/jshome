var i;
var m=9;
var d_st=['일','월','화','수','목','금','토'];
for(i=1; i<=30; i++){
  var d=new Date(2022,m-1,i);  
  document.write(d.toLocaleString()+ '<br>'); 
  

  var idx = d.getDay();
  document.write('('+d_st[idx]+ '요일)<br>');
 
}