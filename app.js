let seconds=00;
let milli=00;
let appendMilli=document.getElementById("milli");
let appendSeconds=document.getElementById("seconds");
let btnStart=document.getElementById("btn-start");
let btnStop=document.getElementById("btn-stop");
let btnReset=document.getElementById("btn-reset");
let interval;

function startTimer(){
    milli++;
    console.log(milli);

    if(milli<9){
        appendMilli.innerHTML= "0" + milli;
    }
    if(milli>9){
        appendMilli.innerHTML= milli;
    }
    if (milli>99){
        seconds++;
        appendSeconds.innerHTML= "0" + seconds;
        milli= 0;
        appendMilli.innerHTML = "0" + 0;
    }
    if(seconds>9){
        appendSeconds.innerHTML= seconds;
    }
}

        btnStart.addEventListener("click", () => {
            interval=setInterval(startTimer);
        })

        btnStop.addEventListener("click", () =>{
            clearInterval(interval);
        })

        btnReset.addEventListener("click", ()=>{
           clearInterval(interval);
           milli="00";
           seconds="00";
           appendSeconds.innerHTML=seconds;
           appendMilli.innerHTML=milli; 
        })