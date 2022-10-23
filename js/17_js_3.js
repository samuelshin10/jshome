const count = document.getElementById('count');
const result= document.getElementById('result');

function judge(){
  var value=parseInt(count.value);
  if(value>=90){
    m="A"
  }else if(value<=80){
    m="B"
  }else if(value>=70){
    m="C"
  }else{
    m="D"
  }
  result.innerText(m);
}