
var r=document.getElementById('result');
var n1;
var n2;


function c()

{
  n1=parseInt(Math.random() * 30) +1;
  n2=parseInt(Math.random() * 30) +1;
  msg1=n1+ '+' + n2 + '=' + (n1+n2)+ '\n';
  msg1+=n1+ '-' + n2 + '=' + (n1-n2)+ '\n';
  msg1+=n1+ '*' + n2 + '=' + (n1*n2)+ '\n';
  msg1+=n1+ '/' + n2 + '=' + (n1/n2)+ '\n';


  r.innerText= msg1;
}
