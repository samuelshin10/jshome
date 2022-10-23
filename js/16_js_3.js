var cnt=100;
const msg=document.getElementById('msg');
function count(){
  if(cnt>0){
    cnt-=1;
  }
  msg.innerText =cnt;

}

function DEL(){
  cnt=100;
  msg.innerText = cnt;
}