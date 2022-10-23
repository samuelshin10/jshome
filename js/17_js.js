const age= document.getElementById('age');
const result =  document.getElementById('result');

function judge(){
  var value=parseInt(age.value);
  
  console.log(value);
  if(value>7 && value < 19){
    console.log("학생");
    result.innerText="학생"
  }else{
    result.innerText=("학생아님!!");
    console.log("학생아님!!");

  }
}