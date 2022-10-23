var com=Math.random();
var com=com*100;                // 0~~99 까지
com=parseInt(com)+1;
console.log(com);
const num=document.getElementById('num');
const result=document.getElementById('result');
var cnt=0
function check_num()
{
  var usr=parseInt(num.value);

  
  //입력 값과 문제와 비교하여 결과 출력하기
  //res 변수에 up,down,corret 넣기
  
  if(usr>com){
    n="down"
    cnt=cnt+1
  }else if(usr<com){
    n="up"
    cnt=cnt+1
  }else if(usr==com){
    n="correct"
    cnt=cnt+1
    const btn=document.getElementById('btn');
    btn.disabled='disabled';
  }else{
    n="숫자 입력하시오."
    cnt=cnt+1
  }

  var msg_cnt="시도횟수:"+cnt + "회"

  result.innerText= n + '\n' + msg_cnt;
}