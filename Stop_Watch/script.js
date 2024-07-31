let start= document.querySelector("#start");
let stop= document.querySelector("#stop");
let reset= document.querySelector("#reset");
let screen= document.querySelector("#screen");

let sound= new Audio('1-154924.mp3');
let milli= 0;
let seconds=0;
let minutes=0;
let hours=0;
let bool= true;
let timer=null;

start.addEventListener("click", ()=>{
    sound.play();
    if(bool== true){
        timer =setInterval(startwatch
        ,100);
        bool=false;
    }else{
        clearInterval(timer);
        bool=true;
        sound.pause();
    }
    
})

stop.addEventListener("click", ()=>{
    clearInterval(timer);
    bool=true
    sound.pause();
})

reset.addEventListener("click", ()=>{
    sound.pause();
    hours=0;
    seconds=0;
    minutes=0;
    milli=0;
    screen.innerHTML="00:00:00:00";
    clearInterval(timer);
    bool=true;
})


function startwatch(){
    milli++;
        if(milli== 60){
            seconds++;
            milli=0;
            if(seconds==60){
                 minutes++;
                 seconds=0;
                 if(minutes==60){
                    hours++;
                    minutes=0;
                 }
            }
        }
    
        if(hours<10){
            h= "0"+hours;
        }
        else{h=hours}
        if(minutes<10){
            m= "0"+minutes;
        }
        else{
            m=minutes;
        }
        if(seconds<10){
            s= "0"+seconds;
        }
        else{
            s=seconds
        }
        if(milli<10){
            mi= "0"+milli;
        }
        else{
            mi= milli
        }
        screen.innerHTML=h+":"+m+":"+s+":"+mi

}





 