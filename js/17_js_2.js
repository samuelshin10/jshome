const result= document.getElementById('result');
const age= document.getElementById('age');

function judge(){
  var value=parseInt(age.value);
  if(value>0){
    m="양수 "
  }else if(value<0){
    m="음수 "
  }else if(value==0){
    m="영"
  }
  result.innerText= value+ "는" + m + "입니다.";

}