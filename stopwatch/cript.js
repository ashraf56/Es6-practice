let min=0;
let seconds=0;
let tens=0;
let getmin=document.getElementById('mins');
let getseconds=document.getElementById('seconds');
let gettens=document.getElementById('tens');
let interval;
document.getElementById('btn-start').addEventListener('click',function(){

interval=setInterval(() => {
    starttime()
}, 10);


})
document.getElementById('btn-stop').addEventListener('click',function(){

clearInterval(interval)


})
document.getElementById('btn-reset').addEventListener('click',function(){

clearInterval(interval)
min='00'
seconds='00'
tens='00'
getmin.innerText=min ;getseconds.innerText=seconds
gettens.innerText=tens

})





let starttime=()=>{
    tens++;
    if(tens <=9){
        gettens.innerHTML=`0${tens}`;
    }
    if(tens >9){
        gettens.innerHTML=`${tens}`
    }
     if(tens >99){
        seconds++;
        getseconds.innerHTML=`0${seconds}`
        tens=0;
        gettens.innerHTML=`0${tens}`
    }
     if(seconds>9){
        getseconds.innerHTML=seconds;
    }
     if(seconds >59){
min++;
getmin.innerHTML=`0${min}`
seconds=0;
getseconds.innerHTML=`0${seconds}`

    }
    if (min >9) {
        getmin.innerHTML=min
        
    }


}