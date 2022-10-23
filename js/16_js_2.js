var cnt=0
const msg=document.getElementById('msg');
function count(){
  if(cnt<20){
    cnt=cnt+2    
  }

  msg.innerText = cnt;
}
function DEL(){
  cnt=0
  msg.innerText = cnt;
}